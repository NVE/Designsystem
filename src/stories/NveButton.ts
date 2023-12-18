import { html } from 'lit';

export interface NveButtonProps {
  
   variant: 'primary' | 'neutral' | 'default',
    size: 'medium' | 'large' | 'small',
    disabled: boolean,
    loading: boolean,
    outline: boolean
  
}

export const NveButton = ({
  variant,
  size,
  disabled,
  loading,
  outline,
}: {
  variant: string;
  size: string;
  disabled: boolean;
  loading: boolean;
  outline: boolean;
}) => {
  if (loading)
    return html`
      <nve-button
        variant=${variant}
        size=${size}
        ?disabled=${disabled}
        ?outline=${outline}
      >
        Button
        <span slot="suffix"><nve-spinner></nve-spinner></span>
      </nve-button>
    `;
  return html`
    <nve-button
      variant=${variant}
      size=${size}
      ?disabled=${disabled}
      ?outline=${outline}
    >
      Button
    </nve-button>
  `;
};
