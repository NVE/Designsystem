import '../../components/nve-select/nve-select.component';
import '../../components/nve-option/nve-option.component';
import '../../components/nve-label/nve-label.component';
import { NveSelect } from './NveSelect';
import type { Meta, StoryObj } from '@storybook/web-components';
import type { NveSelectProps } from './NveSelect';

const meta = {
    title: 'Nve/NveSelect',
    tags: ['autodocs'],
    render: (args) => NveSelect(args),
    argTypes: {
        size: {
            control: { type: 'select' },
            options: ['small', 'medium', 'large'],
        },
        placement: {
            control: { type: 'select' },
            options: ['top', 'bottom'],
        },
        multiple: { control: 'boolean' },
        disabled: { control: 'boolean' },
        clearable: { control: 'boolean' },
        open: { control: 'boolean' },
        filled: { control: 'boolean' },
        required: { control: 'boolean' },
    },
    parameters: {
        docs: {
            description: {
                component: `<div>
                <a href="https://github.com/NVE/Designsystem/tree/main/doc/nve-select.md">API-dokumentasjon</a>
                </div>`,
            },
            story: {
                inline: false,
                iframeHeight: 300,
              },
        },
    },
} satisfies Meta<NveSelectProps>;

export default meta;
type Story = StoryObj<NveSelectProps>;

export const Primary: Story = {
    args: {
        filled: false,
        size: 'medium',
        placeholder: 'Select an option',
        multiple: false,
        maxOptionsVisible: 3,
        disabled: false,
        clearable: false,
        open: false,
        placement: 'bottom',
        required: false,
    },
};