/** Bytter html:preview md syntaksen til en interaktiv komponent og kode eksempel */
import hljs from 'highlight.js'; //brukes til å vise kode eksempel med syntax highlighting

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

/** Bytter html:preview delen i markdown med interkativt preview. Den returnerer både byttet tekst og skriptene som skal
legges til i de bestemte divene hvor bruker skrev <script> tagene under html:preview  */
export function codePreview(markdownText: string): CodePreview {
  const regex = /```html:preview\s+([\s\S]*?)\s+```/g;
  const scripts: Script[] = [];

  const replacedText = markdownText.replace(regex, (_, code): string => {
    const transform = createPreviewBox(code, scripts);
    return transform;
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

  const highlightedCode = hljs.highlight(codeWithoutScript, { language: 'html' }).value;

  // bestemt html struktur for preview boksen
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
