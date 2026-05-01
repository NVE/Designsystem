import { css, CSSResult, html, type TemplateResult } from 'lit';
import { nothing } from 'lit/html.js';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import '../components/nve-tooltip/nve-tooltip.component';
import '../components/nve-icon/nve-icon.component';

export const labelStyles: CSSResult = css`
  .field__label {
    display: flex;
    align-items: center;
    gap: var(--spacing-2x-small);
    font: var(--typography-label-small);
    color: var(--color-neutrals-foreground-primary);
  }

  .field__label__required-text {
    font: var(--typography-label-small-light);
    color: var(--color-brand-foreground-secondary);
  }

  .field__legend {
    float: left;
    font: var(--typography-label-small);
    line-height: 100%;
    padding-inline: 0;
    display: flex;
    align-items: center;
    gap: var(--spacing-2x-small);
  }
`;

/**
 * Genererer en ledetekst for et felt, inkludert støtte for tooltip og indikasjon på obligatoriske felt.
 * @param id - ID for label-elementet
 * @param label - Tekst for label
 * @param tooltip - Valgfri tooltip-tekst
 * @param required - Indikerer om feltet er obligatorisk
 * @param requiredLabel - Valgfri tekst for obligatorisk indikator
 * @param onClick - Valgfri funksjon som kjøres ved klikk på label
 * @param useLegend - Valgfri flagg for å bruke legend i stedet for label (for fieldset)
 * @returns TemplateResult eller nothing hvis ingen label er gitt
 */
export function getLabel(
  id: string,
  label?: string,
  tooltip?: string,
  required?: boolean,
  requiredLabel?: string,
  onClick?: (...args: unknown[]) => unknown,
  useLegend?: boolean
): TemplateResult | typeof nothing {
  if (!label) return nothing;

  const content = html`
    <span>${label}</span>
    ${tooltip
      ? html`<nve-tooltip placement="top">
          <div slot="content">${unsafeHTML(tooltip)}</div>
          <nve-icon class="nve-info-icon" name="Info"></nve-icon>
        </nve-tooltip>`
      : nothing}
    ${required ? html`<span class="field__label__required-text"> *${requiredLabel ?? ''} </span>` : nothing}
  `;

  return useLegend
    ? html`<legend class="field__legend" id="${id}" @click=${onClick}>${content}</legend>`
    : html`<label class="field__label" id="${id}" @click=${onClick}>${content}</label>`;
}
