import hljs from 'highlight.js';

export type Script = {
  script: string;
  id: string;
};

export type CodePreview = {
  text: string;
  scripts: Script[];
};

// det er global counter som brukes til å sette en unik id i code-preview diver. Grunnen er å isolere script tagene å koble de til riktig preview.
let uniqueIdCounter = 0;

/** Bytter html:preview delen i markdown med interkativt preview. Den  */
export function codePreview(markdownText: string): CodePreview {
  // Se etter html:preview delen i markdown
  const regex = /```html:preview\s+([\s\S]*?)\s+```/g;
  // Replace the matched block with the extracted HTML code
  const scripts: Script[] = [];
  const replacedText = markdownText.replace(regex, (_, code): string => {
    // Here, `code` is the extracted HTML code. You can further process it if needed.

    const transform = createPreviewBox(code, scripts);
    return transform; // This simply returns the HTML code, effectively replacing the markdown block
  });
  return { text: replacedText, scripts: scripts };
}

function createPreviewBox(code: string, scripts: Script[]): string {
  const scriptRegex = /<script>([\s\S]*?)<\/script>/g;
  // kutte ut script delen fra html:preview
  const codeWithoutScript = code.replace(scriptRegex, (_, code) => {
    scripts.push({ script: code, id: `${uniqueIdCounter}` });
    return '';
  });
  // Assuming the language is HTML. Use hljs.highlightAuto(code) if the language is unknown.
  const highlightedCode = hljs.highlight(codeWithoutScript, { language: 'html' }).value;
  const previewBox = `
<div class="code-preview-${uniqueIdCounter}">
    <div class="code-preview__preview">
      ${codeWithoutScript.trim()} 
       <div class="code-preview__resizer">
          </div>
    </div>
 <div class="code-preview__source code-preview__source--html">
           <pre><code class="language-html">${highlightedCode}</code></pre>
          </div>
</div>`;
  uniqueIdCounter++;
  return previewBox;
}
