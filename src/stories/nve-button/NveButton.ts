import { html } from 'lit';

export interface NveButtonProps {
  variant: 'primary' | 'neutral' | 'default';
  size: 'medium' | 'large' | 'small';
  disabled: boolean;
  loading: boolean;
  outline: boolean;
  navn: string;
}

export const NveButton = ({
  variant,
  size,
  disabled,
  loading,
  outline,
  navn,
}: {
  navn: string
  variant: string;
  size: string;
  disabled: boolean;
  loading: boolean;
  outline: boolean;
}) => {
  return html`
    <nve-button variant=${variant} ?loading=${loading} size=${size} ?disabled=${disabled} ?outline=${outline}>
      ${navn}
    </nve-button>
  `;
};
