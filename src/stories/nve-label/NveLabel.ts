import { html } from 'lit';

export interface NveLabelProps {
  value: string;
  size: 'x-small' | 'small' | 'medium' | 'large';
  light: boolean;
  tooltip: string;
  iconLeft: boolean;
  iconColor: 'default' | 'black';
}

export const NveLabel = (props: NveLabelProps) => {
  let size = props.size ?? 'small';
  return html`
    <nve-label
      value=${props.value}
      size=${size}
      ?light=${props.light}
      tooltip=${props.tooltip}
      ?iconLeft=${props.iconLeft}
      iconColor=${props.iconColor}
    >
      ${props.tooltip ? html`<div slot="tooltip">Hjelpetekst i <strong>HTML</strong></div>` : ''}
    </nve-label>
  `;
};
