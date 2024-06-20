import markdownit from 'markdown-it';
import mardkownItContainer from 'markdown-it-container';
import { Token } from 'markdown-it/index.js';
import hljs from 'highlight.js';

const markdown = markdownit({
  html: true,
  highlight: function (str, lang) {
    if (lang && hljs.getLanguage(lang)) {
      try {
        return hljs.highlight(str, { language: 'js' }).value;
      } catch (__) { console.warn(__) }
    }

    return ''; // use external default escaping
  }
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
