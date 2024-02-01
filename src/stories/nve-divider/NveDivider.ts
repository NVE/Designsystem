import { html } from 'lit';
import '../../components/nve-button/nve-button.component';
import '../../components/nve-divider/nve-divider.component';

export interface NveDividerProps {
  button: boolean;
}

export const NveDivider = ({button
}: {
  button: boolean
}) => {
   if (button) {
    return html`<nve-button variant="primary"> nve-button</nve-button> <nve-divider></nve-divider>
    <nve-button variant="primary"> nve-button</nve-button>
    `;
  } else {
    return html`<nve-divider></nve-divider>`;
  }
};
