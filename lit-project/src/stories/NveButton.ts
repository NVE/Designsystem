import { html } from 'lit';

export const NveButton = ({
  theme,
  variant,
  size,
  disabled,
}: {
  theme: string;
  variant: string;
  size: string;
  disabled?: boolean;
}) => {
  return html`
    <nve-button
      theme=${theme}
      variant=${variant}
      size=${size}
      disabled=${disabled}
    >
      Button
    </nve-button>
  `;
};
