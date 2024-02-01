import { html } from 'lit';
import '../../components/nve-button/nve-button.component';

export interface NveTooltipProps {
  content: string;
  htmltxt: boolean;
}

export const NveTooltip = ({
  content,
  htmltxt

}: {
  content: string;
  htmltxt: boolean;
  
}) => {   
  if (!htmltxt) {
    return html`<nve-tooltip
    content=${content}
    >
    <nve-button variant="primary"> svev over meg </nve-button>  </nve-tooltip>`;
  } else {  return html`<nve-tooltip>
    <div slot="content">Hjelpetekst i <strong>HTML</strong></div>
    <nve-button variant="primary"> svev over meg </nve-button>  </nve-tooltip>`;

  }
};
