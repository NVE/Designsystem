import { html } from 'lit';
import '../../components/nve-button/nve-button.component';

export interface NveBadgeProps {
  variant: 'primary' | 'neutral' | 'warning' | 'success' | 'danger' | 'brand';
  size: 'medium' | 'large' | 'small';
  low: boolean;
  name: string;
  button: boolean;
}

export const NveBadge = ({
  variant,
  size,
  low,
  name,
  button,
}: {
  variant: 'primary' | 'neutral' | 'warning' | 'success' | 'danger' | 'brand';
  size: 'medium' | 'large' | 'small';
  low: boolean;
  name: string;
  button: boolean;
}) => {
  if (button) {
    return html`<nve-button variant="primary"
      >Nve Button<nve-badge size=${size} variant=${variant} ?low=${low}> ${name} </nve-badge>
    </nve-button>`;
  } else {
    return html`<nve-badge variant=${variant} size=${size} ?low=${low}> ${name} </nve-badge>`;
  }
};
