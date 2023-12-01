import { customElement, property } from 'lit/decorators.js';
import { css, html, LitElement } from 'lit';
import dangerIcon from '../../assets/danger.svg';

@customElement('nve-danger-lvl')
export class NveDangerLvl extends LitElement {
  constructor() {
    super();
  }

  @property() level: number = 1;
  @property() size: 'small' | 'medium' = 'small';
  @property({ type: Boolean, reflect: true }) showIcon = false;
  @property({ type: Boolean, reflect: true }) active = false;

  static styles = [css`
    .danger-level {
      display: flex;
      border: 2px solid transparent;
      position: relative;
      box-sizing:border-box;
      width: 2.125rem;
      height: 2.125rem;
      padding: 0.1875rem 0.6875rem;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: var(--spacing-x-small, 0.5rem);
      flex-shrink: 0;
      border-radius: var(--border-radius-small, 0.25rem);
      .label {
        color: var(--dangerlevel-foreground-default-level-1, #00131C);
        font-family: Source Sans Pro;
        font-size: 1.25rem;
        font-style: normal;
        font-weight: 600;
        line-height: 1.75rem; /* 140% */
      }
      :is(img) {
        position: absolute;
        right: -0.60819rem;
        bottom: -0.3125rem;
      }
      &:focus-visible {
        outline: var(--sl-focus-ring); //endre til nve focus tokene
        outline-offset: var(--sl-focus-ring-offset); //endre til nve focus tokene
      }
    }

    .level-1 {
      background: var(--dangerlevel-background-default-level-1, #6BF198);
      &:hover {
        background: var(--dangerlevel-background-subtle-level-1, #E8FCE8);
      }
    }
    .level-2 {
      background: var(--dangerlevel-background-default-level-2, #FFD046);
      &:hover {
        background: var(--dangerlevel-background-subtle-level-2, #FFF4D1);
      }
    }
    .level-3 {
      background: var(--dangerlevel-background-default-level-3, #FF9A24);
      &:hover {
        background: var(--dangerlevel-background-subtle-level-3, #FFECD6);
      }
    }
    .level-4 {
      background: var(--dangerlevel-background-default-level-4, #FF3131);
      &:hover {
        background: var(--dangerlevel-background-subtle-level-4, #FFEBEE);
      }
    }
    .level-5 {
      background: var(--dangerlevel-background-default-level-5, #0D0D0E);
      &:hover {
        .label {
          color: var(--dangerlevel-foreground-default-level-1, #00131C);
        } 
        background: var(--dangerlevel-background-subtle-level-5, #E4E5E7);
      }
      .label {
        color: var(--dangerlevel-foreground-default-level-5, #FFF);
      }
    }
    .level-0 {
      background: var(--neutrals-background-primary-contrast, #EFF8FC);
    }


    :host([size="medium"]) .danger-level  {
      width: var(--spacing-2-x-large, 2.5rem);
      height: var(--spacing-2-x-large, 2.5rem);
    }

    :host([active]) .danger-level  {
      border: 2px solid var(--dangerlevel-foreground-default-level-1, #00131C);
    }
  `];

  toggleActive = () => {
    this.active = !this.active;
    this.dispatchEvent(new CustomEvent('nve-click', {
      bubbles: true,
      composed: true,
      detail: { active: this.active }
    }))
  }

  render() {
    return(
      html`
        <button @click=${this.toggleActive} class="danger-level level-${this.level}">
          <span class="label">${this.level != 0 ? this.level : '?'}</span>
          ${this.showIcon ? html`<img src=${dangerIcon} alt="danger icon" />`: null}
    </button>
      `
    )
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'nve-danger-lvl': NveDangerLvl;
  }
}
