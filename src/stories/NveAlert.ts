import { html } from 'lit';

export const NveAlert = ({
  variant,
  text,
  title,
  leftStroke,
  emphasized,
  closable,
  open,
  showIcon,
  iconName 
}: {
  variant: string;
  text: string;
  title: string;
  leftStroke: boolean;
  emphasized: boolean;
  closable: boolean;
  open: boolean;
  showIcon: boolean;
  iconName: string;
}) => {
  return html`
    <nve-alert
      variant=${variant}
      text=${text}
      title=${title}
      .leftStroke=${leftStroke}
      .emphasized=${emphasized}
      .closable=${closable}
      .open=${open}
    >
    ${showIcon ? html`<nve-icon slot="icon" name=${iconName}></nve-icon>`: null}
    </nve-alert>
  `;
};
