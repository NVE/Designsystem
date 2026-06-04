import { html, LitElement, PropertyValues } from 'lit';
import { styleMap } from 'lit/directives/style-map.js';
import { customElement, property, query, state } from 'lit/decorators.js';
import { HasSlotController } from '../../utils/slot';
import '../nve-icon/nve-icon.component';
import styles from './nve-tooltip.styles';

type TooltipPlacement =
  | 'top'
  | 'top-start'
  | 'top-end'
  | 'right'
  | 'right-start'
  | 'right-end'
  | 'bottom'
  | 'bottom-start'
  | 'bottom-end'
  | 'left'
  | 'left-start'
  | 'left-end';

/**
 * Et verktøyhint. Kan åpnes og lukkes programmatisk eller automatisk med ulike hendelser. Kan ha ulik farge og metning.
 *
 */
@customElement('nve-tooltip')
export default class NveTooltip extends LitElement {
  private static readonly anchorSupported =
    typeof CSS !== 'undefined' &&
    CSS.supports('anchor-name: --nve-tooltip-anchor') &&
    CSS.supports('position-anchor: --nve-tooltip-anchor');

  private readonly hasSlotController = new HasSlotController(this, 'content');

  private readonly tooltipId = `nve-tooltip-${Math.random().toString(36).slice(2, 10)}`;

  private hoverOpen = false;

  private focusOpen = false;

  private clickOpen = false;

  @query('.tooltip__popup') private tooltipElement?: HTMLElement;

  @query('.tooltip__trigger') private triggerElement?: HTMLElement;

  @query('slot:not([name])') private defaultSlot?: HTMLSlotElement;

  @state() private currentPlacement: TooltipPlacement = 'top';

  @state() private fallbackPosition: { left: string; top: string } = { left: '0px', top: '0px' };

  /** Enkel tekst som vises i tooltip dersom content-slot ikke brukes */
  @property() content = '';

  /** Om tooltipen er åpen. Bruk sammen med trigger="manual" for styring utenfra. */
  @property({ type: Boolean, reflect: true }) open = false;

  /** Hvordan tooltipen skal åpnes. Støtter hover, focus, click og manual. */
  @property({ reflect: true }) trigger = 'hover focus';

  /** Foretrukket plassering av tooltipen. */
  @property({ reflect: true }) placement: TooltipPlacement = 'top';

  /** Avstand mellom trigger og tooltip. */
  @property({ type: Number }) distance = 8;

  /** Variant, bestemmer fargen på tag */
  @property({ reflect: true }) variant: 'neutral' | 'success' | 'info' | 'warning' | 'error' = 'neutral';

  /** Saturation - Hvor mettet fargen på tooltip er */
  @property({ reflect: true }) saturation: 'emphasized' | 'subtle' | 'default' = 'emphasized';

  static styles = [styles];

  connectedCallback() {
    super.connectedCallback();
    this.addEventListener('click', this.handleClick);
    this.addEventListener('focusin', this.handleFocusIn);
    this.addEventListener('focusout', this.handleFocusOut);
    this.addEventListener('pointerover', this.handlePointerOver);
    this.addEventListener('pointerout', this.handlePointerOut);
    document.addEventListener('pointerdown', this.handleDocumentPointerDown, true);
    document.addEventListener('keydown', this.handleDocumentKeyDown, true);
    window.addEventListener('resize', this.handleViewportChange);
    window.addEventListener('scroll', this.handleViewportChange, true);
  }

  disconnectedCallback() {
    this.syncTriggerAccessibility(false);
    this.removeEventListener('click', this.handleClick);
    this.removeEventListener('focusin', this.handleFocusIn);
    this.removeEventListener('focusout', this.handleFocusOut);
    this.removeEventListener('pointerover', this.handlePointerOver);
    this.removeEventListener('pointerout', this.handlePointerOut);
    document.removeEventListener('pointerdown', this.handleDocumentPointerDown, true);
    document.removeEventListener('keydown', this.handleDocumentKeyDown, true);
    window.removeEventListener('resize', this.handleViewportChange);
    window.removeEventListener('scroll', this.handleViewportChange, true);
    super.disconnectedCallback();
  }

  firstUpdated() {
    this.currentPlacement = this.placement;
    this.syncTriggerAccessibility();
  }

  protected willUpdate(changedProperties: PropertyValues<this>) {
    if (changedProperties.has('trigger') && this.hasTrigger('manual')) {
      this.hoverOpen = false;
      this.focusOpen = false;
      this.clickOpen = false;
    }

    if (!this.hasTooltipContent && this.open) {
      this.hoverOpen = false;
      this.focusOpen = false;
      this.clickOpen = false;
      this.open = false;
    }
  }

  protected updated(changedProperties: PropertyValues<this>) {
    if (changedProperties.has('open') && changedProperties.get('open') !== undefined) {
      this.dispatchEvent(
        new CustomEvent(this.open ? 'show' : 'hide', {
          bubbles: true,
          composed: true,
        })
      );
    }

    if (changedProperties.has('content') || changedProperties.has('open')) {
      this.syncTriggerAccessibility();
    }

    if (changedProperties.has('placement') && !NveTooltip.anchorSupported) {
      this.updateTooltipPosition();
    }

    if (
      this.open &&
      (changedProperties.has('open') ||
        changedProperties.has('placement') ||
        changedProperties.has('content') ||
        changedProperties.has('distance'))
    ) {
      this.updateTooltipPosition();
    }
  }

  async show() {
    if (this.hasTrigger('manual')) {
      this.open = true;
    } else {
      this.clickOpen = true;
      this.syncOpenState();
    }
    await this.updateComplete;
  }

  async hide() {
    this.hoverOpen = false;
    this.focusOpen = false;
    this.clickOpen = false;
    this.open = false;
    await this.updateComplete;
  }

  async toggle() {
    if (this.open) {
      await this.hide();
      return;
    }
    await this.show();
  }

  private get hasTooltipContent() {
    return this.hasSlotController.test('content') || this.content.trim().length > 0;
  }

  private hasTrigger(name: 'hover' | 'focus' | 'click' | 'manual') {
    return this.trigger.split(/\s+/).includes(name);
  }

  private syncOpenState() {
    if (this.hasTrigger('manual')) {
      return;
    }

    const nextOpen = this.hasTooltipContent && (this.hoverOpen || this.focusOpen || this.clickOpen);
    if (this.open !== nextOpen) {
      this.open = nextOpen;
    }
  }

  private async updateTooltipPosition() {
    await this.updateComplete;

    if (!this.open || !this.tooltipElement || !this.triggerElement) {
      return;
    }

    if (NveTooltip.anchorSupported) {
      this.currentPlacement = this.placement;
      return;
    }

    const triggerRect = this.triggerElement.getBoundingClientRect();
    const tooltipRect = this.tooltipElement.getBoundingClientRect();
    const hostRect = this.getBoundingClientRect();
    const placements = this.getPlacementCandidates(this.placement);

    let bestPlacement = this.placement;
    let bestPosition = { left: 0, top: 0 };
    let bestScore = Number.POSITIVE_INFINITY;

    for (const placement of placements) {
      const candidate = this.calculatePosition(placement, triggerRect, tooltipRect);
      const overflowScore = this.getOverflowScore(candidate.left, candidate.top, tooltipRect);

      if (overflowScore < bestScore) {
        bestScore = overflowScore;
        bestPlacement = placement;
        bestPosition = {
          left: candidate.left - hostRect.left,
          top: candidate.top - hostRect.top,
        };
      }

      if (overflowScore === 0) {
        break;
      }
    }

    this.currentPlacement = bestPlacement;
    this.fallbackPosition = {
      left: `${Math.round(bestPosition.left)}px`,
      top: `${Math.round(bestPosition.top)}px`,
    };
  }

  private calculatePosition(
    placement: TooltipPlacement,
    triggerRect: DOMRect,
    tooltipRect: DOMRect
  ): { left: number; top: number } {
    const gap = this.distance;
    const { left, right, top, bottom, width, height } = triggerRect;
    const tooltipWidth = tooltipRect.width;
    const tooltipHeight = tooltipRect.height;

    switch (placement) {
      case 'top-start':
        return { left, top: top - tooltipHeight - gap };
      case 'top-end':
        return { left: right - tooltipWidth, top: top - tooltipHeight - gap };
      case 'top':
        return { left: left + width / 2 - tooltipWidth / 2, top: top - tooltipHeight - gap };
      case 'bottom-start':
        return { left, top: bottom + gap };
      case 'bottom-end':
        return { left: right - tooltipWidth, top: bottom + gap };
      case 'bottom':
        return { left: left + width / 2 - tooltipWidth / 2, top: bottom + gap };
      case 'left-start':
        return { left: left - tooltipWidth - gap, top };
      case 'left-end':
        return { left: left - tooltipWidth - gap, top: bottom - tooltipHeight };
      case 'left':
        return { left: left - tooltipWidth - gap, top: top + height / 2 - tooltipHeight / 2 };
      case 'right-start':
        return { left: right + gap, top };
      case 'right-end':
        return { left: right + gap, top: bottom - tooltipHeight };
      case 'right':
      default:
        return { left: right + gap, top: top + height / 2 - tooltipHeight / 2 };
    }
  }

  private getPlacementCandidates(placement: TooltipPlacement): TooltipPlacement[] {
    const candidates = new Set<TooltipPlacement>([placement]);
    const [side, align] = placement.split('-') as [string, string | undefined];
    const oppositeSideMap: Record<string, string> = {
      top: 'bottom',
      bottom: 'top',
      left: 'right',
      right: 'left',
    };

    const oppositeSide = oppositeSideMap[side];
    const oppositePlacement = (align ? `${oppositeSide}-${align}` : oppositeSide) as TooltipPlacement;
    candidates.add(oppositePlacement);

    if (side === 'top' || side === 'bottom') {
      candidates.add((align ? `${side}-${align === 'start' ? 'end' : 'start'}` : side) as TooltipPlacement);
      candidates.add('right');
      candidates.add('left');
    } else {
      candidates.add((align ? `${side}-${align === 'start' ? 'end' : 'start'}` : side) as TooltipPlacement);
      candidates.add('top');
      candidates.add('bottom');
    }

    return [...candidates];
  }

  private getOverflowScore(left: number, top: number, tooltipRect: DOMRect) {
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;
    const rightOverflow = Math.max(0, left + tooltipRect.width - viewportWidth);
    const leftOverflow = Math.max(0, -left);
    const bottomOverflow = Math.max(0, top + tooltipRect.height - viewportHeight);
    const topOverflow = Math.max(0, -top);

    return rightOverflow + leftOverflow + bottomOverflow + topOverflow;
  }

  private getAnchorBaseStyle() {
    return {
      'position-anchor': '--nve-tooltip-anchor',
      '--_tooltip-distance': `${this.distance}px`,
    };
  }

  private getAnchorPlacementStyle(): Record<string, string> {
    const placementStyles: Record<TooltipPlacement, Record<string, string>> = {
      top: {
        left: 'anchor(center)',
        top: 'calc(anchor(top) - var(--_tooltip-distance))',
        translate: '-50% -100%',
      },
      'top-start': { left: 'anchor(left)', top: 'calc(anchor(top) - var(--_tooltip-distance))', translate: '0 -100%' },
      'top-end': {
        left: 'anchor(right)',
        top: 'calc(anchor(top) - var(--_tooltip-distance))',
        translate: '-100% -100%',
      },
      bottom: {
        left: 'anchor(center)',
        top: 'calc(anchor(bottom) + var(--_tooltip-distance))',
        translate: '-50% 0',
      },
      'bottom-start': {
        left: 'anchor(left)',
        top: 'calc(anchor(bottom) + var(--_tooltip-distance))',
        translate: '0 0',
      },
      'bottom-end': {
        left: 'anchor(right)',
        top: 'calc(anchor(bottom) + var(--_tooltip-distance))',
        translate: '-100% 0',
      },
      left: {
        left: 'calc(anchor(left) - var(--_tooltip-distance))',
        top: 'anchor(center)',
        translate: '-100% -50%',
      },
      'left-start': {
        left: 'calc(anchor(left) - var(--_tooltip-distance))',
        top: 'anchor(top)',
        translate: '-100% 0',
      },
      'left-end': {
        left: 'calc(anchor(left) - var(--_tooltip-distance))',
        top: 'anchor(bottom)',
        translate: '-100% -100%',
      },
      right: {
        left: 'calc(anchor(right) + var(--_tooltip-distance))',
        top: 'anchor(center)',
        translate: '0 -50%',
      },
      'right-start': {
        left: 'calc(anchor(right) + var(--_tooltip-distance))',
        top: 'anchor(top)',
        translate: '0 0',
      },
      'right-end': {
        left: 'calc(anchor(right) + var(--_tooltip-distance))',
        top: 'anchor(bottom)',
        translate: '0 -100%',
      },
    };

    return placementStyles[this.placement];
  }

  private getAnchorStyle() {
    return {
      ...this.getAnchorBaseStyle(),
      ...this.getAnchorPlacementStyle(),
    };
  }

  private getSharedTooltipStyle() {
    return {
      '--_tooltip-distance': `${this.distance}px`,
    };
  }

  private getTooltipStyle() {
    if (NveTooltip.anchorSupported) {
      return {
        ...this.getSharedTooltipStyle(),
        ...this.getAnchorStyle(),
      };
    }

    return {
      ...this.getSharedTooltipStyle(),
      left: this.fallbackPosition.left,
      top: this.fallbackPosition.top,
    };
  }

  private handleTriggerSlotChange = () => {
    this.syncTriggerAccessibility();
    if (this.open) {
      this.updateTooltipPosition();
    }
  };

  private handleContentSlotChange = () => {
    this.requestUpdate();
    this.syncTriggerAccessibility();
    if (this.open) {
      this.updateTooltipPosition();
    }
  };

  private handlePointerOver = () => {
    if (!this.hasTrigger('hover')) {
      return;
    }

    this.hoverOpen = true;
    this.syncOpenState();
  };

  private handlePointerOut = (event: PointerEvent) => {
    if (!this.hasTrigger('hover')) {
      return;
    }

    const nextTarget = event.relatedTarget as Node | null;
    if (nextTarget && (this.contains(nextTarget) || this.shadowRoot?.contains(nextTarget))) {
      return;
    }

    this.hoverOpen = false;
    this.syncOpenState();
  };

  private handleFocusIn = () => {
    if (!this.hasTrigger('focus')) {
      return;
    }

    this.focusOpen = true;
    this.syncOpenState();
  };

  private handleFocusOut = (event: FocusEvent) => {
    if (!this.hasTrigger('focus')) {
      return;
    }

    const nextTarget = event.relatedTarget as Node | null;
    if (nextTarget && (this.contains(nextTarget) || this.shadowRoot?.contains(nextTarget))) {
      return;
    }

    this.focusOpen = false;
    this.syncOpenState();
  };

  private handleClick = (event: MouseEvent) => {
    if (!this.hasTrigger('click') || this.hasTrigger('manual') || !this.hasTooltipContent) {
      return;
    }

    if (this.tooltipElement && event.composedPath().includes(this.tooltipElement)) {
      return;
    }

    this.clickOpen = !this.clickOpen;
    this.syncOpenState();
  };

  private handleDocumentPointerDown = (event: PointerEvent) => {
    if (!this.open || !this.hasTrigger('click') || this.hasTrigger('manual')) {
      return;
    }

    const path = event.composedPath();
    if (path.includes(this)) {
      return;
    }

    this.clickOpen = false;
    this.syncOpenState();
  };

  private handleDocumentKeyDown = (event: KeyboardEvent) => {
    if (event.key !== 'Escape' || !this.open) {
      return;
    }

    this.hide();
  };

  private handleViewportChange = () => {
    if (this.open) {
      this.updateTooltipPosition();
    }
  };

  private syncTriggerAccessibility(shouldAddDescription = true) {
    const describedBy = shouldAddDescription && this.hasTooltipContent ? this.tooltipId : null;
    const assignedElements = this.defaultSlot?.assignedElements({ flatten: true }) ?? [];

    assignedElements.forEach((element) => {
      const currentValue = element.getAttribute('aria-describedby') ?? '';
      const tokens = currentValue
        .split(/\s+/)
        .map((token) => token.trim())
        .filter(Boolean)
        .filter((token) => token !== this.tooltipId);

      if (describedBy) {
        tokens.push(describedBy);
      }

      if (tokens.length) {
        element.setAttribute('aria-describedby', tokens.join(' '));
      } else {
        element.removeAttribute('aria-describedby');
      }
    });
  }

  render() {
    const hasSlotContent = this.hasSlotController.test('content');
    const isOpen = this.open && this.hasTooltipContent;

    return html`
      <span
        class="tooltip__trigger"
        part="trigger"
        style=${styleMap(NveTooltip.anchorSupported ? { 'anchor-name': '--nve-tooltip-anchor' } : {})}
      >
        <slot @slotchange=${this.handleTriggerSlotChange}></slot>
      </span>

      <div
        id=${this.tooltipId}
        class="tooltip__popup ${isOpen ? 'tooltip__popup--open' : ''} ${hasSlotContent ? 'tooltip__popup--rich' : ''}"
        part="base popup"
        role="tooltip"
        aria-hidden=${isOpen ? 'false' : 'true'}
        data-current-placement=${this.currentPlacement}
        style=${styleMap(this.getTooltipStyle())}
      >
        <div class="tooltip__body" part="body">
          ${hasSlotContent
            ? html`<slot name="content" @slotchange=${this.handleContentSlotChange}></slot>`
            : this.content}
        </div>
        <div class="tooltip__arrow" part="arrow"></div>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'nve-tooltip': NveTooltip;
  }
}
