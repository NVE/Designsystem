import markdownit from 'markdown-it';
import mardkownItContainer from 'markdown-it-container';
import { Token } from 'markdown-it/index.js';

const markdown = markdownit({
  html: true,
});

['tip', 'warning', 'danger'].forEach((type) => {
  markdown.use(mardkownItContainer, type, {
    render: function (tokens: Token[], idx: number) {
      if (tokens[idx].nesting === 1) {
        return `<div role="alert" class="callout callout--${type}">`;
      }
      return '</div>\n';
    },
  });
});

export default markdown;
