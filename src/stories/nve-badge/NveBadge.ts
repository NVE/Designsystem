import { html } from 'lit';

export interface NveBadgeProps {
  variant: 'primary' | 'neutral' | 'warning' | 'success' | 'danger';
  size: 'medium' | 'large' | 'small';
  low: boolean;
  name: string;
}

export const NveBadge = ({
  variant,
  size,
  low,
  name
}: {
  variant: string;
  size: 'medium' | 'large' | 'small';
  low: boolean;
  name: string;
}) => {
  return html` <nve-badge variant=${variant} size=${size} ?low=${low}> ${name} </nve-badge> `;
};
