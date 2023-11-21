import { NveButton } from './NveButton';


// More on how to set up stories at: https://storybook.js.org/docs/web-components/writing-stories/introduction
export default {
  title: 'Nve/Button',
  tags: ['autodocs'],
  render: (args) => NveButton(args),
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['x-small', 'small', 'medium', 'large'],
    },
    type: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'ghost', 'outlined'],
    },
    variant: {
      control: {type: 'select'},
      options: ['default', 'primary', 'success', 'neutral' ,'warning', 'danger', 'text']
    },
    target: {
      control: {type: 'select'},
      options: ['_blank', '_parent', '_self', '_top']
    },
    
  },
};

// More on writing stories with args: https://storybook.js.org/docs/web-components/writing-stories/args
export const Primary = {
  args: {
    label: 'Button',
    size: "large",
    type: "primary",
    trailingIcon: "edit",
    leadingIcon: "preview",
    disabled: "",
    loading: false,
    caret:false,
    outline:false,
    pill:false,
    circle:false,
    name,
    value: "value",
    href: "",
    rel:"",
    download:"",
    form:"",
    formAction:"",  
    formEnctype: "application/x-www-form-urlencoded",
    formMethod:"post",
    formNoValidate:false,
    formTarget:"_blank"
  },
};


