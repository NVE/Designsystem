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
`;

export function getLabel(
  id: string,
  label?: string,
  tooltip?: string,
  required?: boolean,
  requiredLabel?: string,
  onClick?: (...args: unknown[]) => unknown
): TemplateResult | typeof nothing {
  if (!label) return nothing;

  return html` <label class="field__label" id="${id}" @click=${onClick}>
    <span>${label}</span>
    ${tooltip
      ? html`<nve-tooltip placement="top">
          <div slot="content">${unsafeHTML(tooltip)}</div>
          <nve-icon class="nve-info-icon" name="Info"></nve-icon>
        </nve-tooltip>`
      : nothing}
    ${required ? html`<span class="field__label__required-text"> *${requiredLabel ?? ''} </span>` : nothing}
  </label>`;
}
