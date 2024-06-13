import hljs from 'highlight.js';
/** Bytter html:preview delen i markdown med interkativt preview */
export default function codePreview(markdownText: string): string {
  // Se etter html:preview delen i markdown
  const regex = /```html:preview\s+([\s\S]*?)\s+```/g;
  // Replace the matched block with the extracted HTML code
  const replacedText = markdownText.replace(regex, (_, code): string => {
    // Here, `code` is the extracted HTML code. You can further process it if needed.
    const transform = createPreviewBox(code);
    return transform; // This simply returns the HTML code, effectively replacing the markdown block
  });
  return replacedText;
}

function createPreviewBox(code: string): string {
  // Assuming the language is HTML. Use hljs.highlightAuto(code) if the language is unknown.
  const highlightedCode = hljs.highlight(code, { language: 'html' }).value;

  const previewBox = `
<div class="code-preview">
    <div class="code-preview__preview">
      ${code} <!-- This is where the original, non-highlighted code goes. -->
       <div class="code-preview__resizer">
          </div>
    </div>
 <div class="code-preview__source code-preview__source--html">
           <pre><code class="language-html">${highlightedCode}</code></pre>
          </div>
</div>`;

  return previewBox;
}
