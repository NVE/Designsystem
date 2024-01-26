import { html } from 'lit';

export interface NveBadgeProps {
  variant: 'primary' | 'neutral' | 'warning' | 'success' | 'danger';
  size: 'medium' | 'large' | 'small';
  low: boolean;
}

export const NveBadge = ({
  variant,
  size,
  low,
}: {
  variant: string;
  size: 'medium' | 'large' | 'small';
  low: boolean;
}) => {
  return html` <nve-badge variant=${variant} size=${size} ?low=${low}> Badge </nve-badge> `;
};
