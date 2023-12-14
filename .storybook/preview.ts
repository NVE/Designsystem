import type { Preview } from "@storybook/web-components";
import DocTemp from './../.storybook/DocTemp.mdx';
const preview: Preview = {
  parameters: {
    docs: {
      page: DocTemp,
    },
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
