import { StoryObj } from '@storybook/web-components';
import '../components/nve-button/nve-button';
import '../components/nve-divider/nve-divider';
import '../components/nve-dropdown/nve-dropdown';
import '../components/nve-icon/nve-icon';
import '../components/nve-menu-item/nve-menu-item';
import '../components/nve-menu/nve-menu';
import { NveDropdown } from './NveDropdown';



const meta = {
  title: 'Nve/NveDropdown',
  tags: ['autodocs'],
  render: () => NveDropdown(),
  parameters: {
    docs: {
      description: {
        component: '<h2><nve-dropdown> | NveDropdown</h2><a href="https://github.com/NVE/Designsystem/tree/main/doc/nve-dropdown.md">API-dokumentasjon</a>',
      },
      story: {
        inline: false,
        iframeHeight: 550,
      },
    }
  }
};

export default meta;
type Story = StoryObj;

export const standard: Story = {
};
