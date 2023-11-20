import { html } from 'lit';
import '../nve-button';

export default {
  title: 'NveButton', // Title for the component in Storybook
  component: 'nve-button',
};

export const Default = () =>
  html`<nve-button variant="primary">Button</nve-button>`;
