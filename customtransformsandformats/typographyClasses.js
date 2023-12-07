import StyleDictionary from 'style-dictionary-utils';

const getCssVariable = (input) => {
  let transformed = input.replace(/([a-z])([A-Z])/g, '$1-$2'); // changes camelCase to camel-case
  if (transformed.startsWith('{') && transformed.endsWith('}')) {
    transformed = transformed.slice(1, -1);
  }
  transformed = transformed
    .split('.')
    .map((part) => part.toLowerCase())
    .join('-');

  if (transformed.slice(-2) === '-0') {
    transformed = `${transformed.slice(0, -2)}-zero`;
  }
  return `var(--${transformed})`;
};

export default {
  name: 'typography-classes',
  formatter: function ({ dictionary, file }) {
    const { fileHeader } = StyleDictionary.formatHelpers;
    const allTokens = dictionary.allTokens;
    const transformedTypographyTokens = Object.values(allTokens).filter((token) => token.type === 'typography');
    let cssOutput = '';

    transformedTypographyTokens.forEach((token) => {
      cssOutput += `.${token.name} {\n `;
      cssOutput += ` font: ${getCssVariable(token.original.value.fontWeight)} ${getCssVariable(
        token.original.value.fontSize
      )}/${getCssVariable(token.original.value.lineHeight)} ${getCssVariable(token.original.value.fontFamily)};\n`;
      cssOutput += `  letter-spacing: ${getCssVariable(token.original.value.letterSpacing)};\n`;
      cssOutput += `  paragraph-spacing: ${getCssVariable(token.original.value.paragraphSpacing)};\n`;
      cssOutput += `  paragraph-indent: ${getCssVariable(token.original.value.paragraphIndent)};\n`;
      cssOutput += `  text-case: ${getCssVariable(token.original.value.textCase)};\n`;
      cssOutput += `  text-decoration: ${getCssVariable(token.original.value.textDecoration)};\n`;
      cssOutput += `}\n\n`;
    });

    return fileHeader({ file }) + cssOutput;
  },
};
