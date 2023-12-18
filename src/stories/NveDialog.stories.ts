import '../components/nve-dialog/nve-dialog';
import '../components/nve-button/nve-button';
import { StoryObj } from '@storybook/web-components';
import { NveDialog } from './NveDialog';
import type { NveDialogProps } from './NveDialog';


const meta = {
  title: 'Nve/NveDialog',
  tags: ['autodocs'],
  render: (args: NveDialogProps) => NveDialog(args),
  parameters: {
    docs: {
      description: {
        component: '<h2><nve-dialog> | NveDialog</h2><a href="https://github.com/doc/nve-dialog.md">API-dokumentasjon</a>',
      }
    }
  }
};

export default meta;
type Story = StoryObj<NveDialogProps>;

export const standard: Story = {
  args: {
    label: 'Dette er en advarsel',
    icon: 'warning',
  },
};

