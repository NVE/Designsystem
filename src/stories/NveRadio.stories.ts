import '../components';
import { StoryObj } from '@storybook/web-components';
import type { NveRadioGroupProps } from './NveRadio';
import { NveRadioGroup } from './NveRadio';


const meta = {
    title: 'Nve/NveRadioGroup',
    tags: ['autodocs'],
    render: (args: NveRadioGroupProps) => NveRadioGroup(args),
    argTypes: {
        label: {
            control: { type: 'text' },
        },
        orientation: {
            control: { type: 'select' },
            options: ['horizontal', 'vertical'],
        }
    },
    parameters: {
        docs: {
            description: {
                component: '<h2><nve-radio-group> | NveRadioGroup</h2><a href="https://github.com/NVE/Designsystem/tree/main/doc/nve-radio-group.md">API-dokumentasjon</a>',
            }
        }
    }
};

export default meta;
type Story = StoryObj<NveRadioGroupProps>;

// eslint-disable-next-line storybook/prefer-pascal-case
export const standard: Story = {
    args: {
        label: 'Radio-gruppe',
        orientation: 'vertical',
        disabled: false,
        required: true
    },
};
