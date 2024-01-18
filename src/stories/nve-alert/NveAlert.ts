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
}: {
  variant: string;
  text: string;
  title: string;
  leftStroke: boolean;
  emphasized: boolean;
  closable: boolean;
  open: boolean;
  showIcon: boolean;
}) => {

  let iconName; 
  
  switch(variant) {
    case 'primary':
      iconName = 'info';
      break;
    case 'danger':
      iconName = 'error';
      break;
    case 'success':
      iconName = 'check_circle';
      break;
    case 'warning':
      iconName = 'warning';
      break;
    case 'neutral':
      iconName = 'help';
      break;
    default:
      iconName = 'help';
  }

  return html`
    <nve-alert
      variant=${variant}
      text=${text}
      title=${title}
      ?leftStroke=${leftStroke}
      ?emphasized=${emphasized}
      ?closable=${closable}
      ?open=${open}
    >
    ${showIcon ? html`<nve-icon slot="icon" name=${iconName}></nve-icon>`: null}
    </nve-alert>
  `;
};
