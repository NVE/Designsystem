import { StoryObj } from '@storybook/web-components';
import '../../components/nve-button/nve-button.component';
import '../../components/nve-checkbox/nve-checkbox.component';
import '../../components/nve-divider/nve-divider.component';
import '../../components/nve-dropdown/nve-dropdown.component';
import '../../components/nve-icon/nve-icon.component';
import '../../components/nve-menu-item/nve-menu-item.component';
import '../../components/nve-label/nve-label.component';
import '../../components/nve-menu/nve-menu.component';
import { NveDropdown } from './NveDropdown';

const meta = {
  title: 'Nve/NveDropdown',
  tags: ['autodocs'],
  render: () => NveDropdown(),
  parameters: {
    docs: {
      description: {
        component: `<h2><nve-dropdown> | NveDropdown</h2><a href="https://github.com/NVE/Designsystem/tree/main/doc/nve-dropdown.md">API-dokumentasjon</a> 
          Denne komponenten bygges opp av andre komponenter og deres properties. Trykk på "show code" for å se hvordan komponenten kan bygges opp. 
          Dropdown inneholder en nve-menu-komponent og hvert element er en nve-menu-item-komponent. Innenfor nve-menu-item kan man bruke flere komponenter, 
          f.eks. nve-checkbox`,
      },
      story: {
        inline: false,
        iframeHeight: 550,
      },
    },
  },
};

export default meta;
type Story = StoryObj;

export const standard: Story = {};
