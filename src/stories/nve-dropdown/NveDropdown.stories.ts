import { StoryObj } from '@storybook/web-components';
import '../../components/nve-button/nve-button.component';
import '../../components/nve-checkbox/nve-checkbox.component';
import '../../components/nve-divider/nve-divider.component';
import '../../components/nve-dropdown/nve-dropdown.component';
import '../../components/nve-icon/nve-icon.component';
import '../../components/nve-menu-item/nve-menu-item.component';
import '../../components/nve-menu/nve-menu.component';
import { NveDropdown } from './NveDropdown';

const meta = {
  title: 'Nve/NveDropdown',
  tags: ['autodocs'],
  render: () => NveDropdown(),
  parameters: {
    docs: {
      description: {
        component:
          '<h2><nve-dropdown> | NveDropdown</h2><a href="https://github.com/NVE/Designsystem/tree/main/doc/nve-dropdown.md">API-dokumentasjon</a>',
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
