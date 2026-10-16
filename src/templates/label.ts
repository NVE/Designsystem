import { css, CSSResult, html, type TemplateResult } from 'lit';
import { nothing } from 'lit/html.js';
import '../components/nve-tooltip/nve-tooltip.component';
import '../components/nve-icon/nve-icon.component';

export const labelStyles: CSSResult = css`
  .field__label {
    display: flex;
    align-items: center;
    width: fit-content;
    gap: var(--spacing-2x-small);
    color: var(--color-neutrals-foreground-primary);
  }

  .field__label__validation {
    font-family: var(--font-family-primary-family, "Source Sans 3");
    font-size: var(--font-size-2x-small, 14px);
    color: var(--color-feedback-foreground-on-bg-subtle-neutral, #3C3F44);
    display: inline-flex;
    align-items: center;
    height: var(--sizing-fixed-sizing-x-small, 20px);
    padding: 0 var(--spacing-2x-small, 4px);
    border-radius: var(--border-radius-small);
  }

  .field__label__validation--required {
    background: var(--color-feedback-background-subtle-warning);
  }

  .field__label__validation--optional {
    background: var(--color-feedback-background-subtle-info);
  }

  .field__legend {
    float: left;
    padding-inline: 0;
    display: flex;
    align-items: center;
    color: var(--color-neutrals-foreground-primary);
    gap: var(--spacing-2x-small);
    .nve-info-icon {
      transform: translateY(-1px);
    }
  }

  .field__text {
    font: var(--typography-label-small);
    line-height: 1;
  }

  .nve-info-icon {
    --icon-size: 1.25rem;
  }
`;

/**
 * Genererer en ledetekst for et felt, inkludert toggletip visning via slot videresending.
 * @param id - ID for label-elementet
 * @param label - Tekst for label
 * @param required - Indikerer om feltet er obligatorisk
 * @param requiredLabel - Valgfri tekst for obligatorisk indikator
 * @param labelToggletip - Valgfri TemplateResult/slot for tooltip som vises ved hover over label
 * @param onClick - Valgfri funksjon som kjøres ved klikk på label
 * @param useLegend - Valgfri flagg for å bruke legend i stedet for label (for fieldset)
 * @param options - Valg for alternative ledetekstmerker
 * @returns TemplateResult eller nothing hvis ingen label er gitt
 */
export function getLabel(
  id: string,
  label?: string,
  required?: boolean,
  requiredLabel?: string,
  labelToggletip?: TemplateResult,
  onClick?: (...args: unknown[]) => unknown,
  useLegend?: boolean,
  options?: { optional?: boolean; validationTags?: boolean }
): TemplateResult | typeof nothing {
  if (!label) return nothing;

  const validationTag = options?.validationTags
    ? required
      ? html`<span class="field__label__validation field__label__validation--required">${requiredLabel || 'Må fylles ut'}</span>`
      : options.optional
        ? html`<span class="field__label__validation field__label__validation--optional">Valgfritt</span>`
        : nothing
    : nothing;

  const content = html`
    <span class="field__text" @click=${onClick}>${label}</span>
    ${labelToggletip ?? nothing}
    ${validationTag}
  `;

  return useLegend
    ? html`<legend part="label" class="field__legend">${content}</legend>`
    : html`<label part="label" class="field__label" for="${id}">${content}</label>`;
}
