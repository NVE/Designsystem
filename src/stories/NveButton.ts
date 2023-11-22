import { html } from 'lit';

export const NveButton = ({
  theme,
  variant,
  size,
  disabled,
  loading,
  outline,
}: {
  theme: string;
  variant: string;
  size: string;
  disabled: boolean;
  loading: boolean;
  outline: boolean;
}) => {
  if (loading)
    return html`
      <nve-button
        theme=${theme}
        variant=${variant}
        size=${size}
        .disabled=${disabled}
        .outline=${outline}
      >
        Button
        <span slot="suffix"><nve-spinner></nve-spinner></span>
      </nve-button>
    `;
  return html`
    <nve-button
      theme=${theme}
      variant=${variant}
      size=${size}
      .disabled=${disabled}
      .outline=${outline}
    >
      Button
    </nve-button>
  `;
};
