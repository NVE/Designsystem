export default {
  title: 'Components/NveButton',
  argTypes: {
    text: {control: "text", defaultValue: "Testknapp" },
    variant: {control: "select", options: ["default", "outlined"] },
  },
}

const Template = (args) => `<nve-button text=${args.text} variant=${args.variant}></nve-button>`;

export const NveButton = Template.bind({});
NveButton.args = {
  text: "Test1",
  variant: "default",
}
