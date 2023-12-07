module.exports = {
  name: 'custom-css',
  type: 'value',
  matcher: (token) => {
    if (token.type === 'typography') {
      return true;
    }
    return false;
  },

  formatter: function (dictionary) {
    let cssOutput = '';

    // Iterate over the tokens
    for (const [category, token] of Object.entries(dictionary.properties)) {
      for (const [styleName, styleValue] of Object.entries(token)) {
        if (styleValue.type === 'typography') {
          // Creating the CSS class name
          const className = `${category}-${styleName}`;

          cssOutput += `.${className} {\n`;

          // Extracting values from the typography token
          const {
            fontFamily,
            fontWeight,
            lineHeight,
            fontSize,
            letterSpacing,
            paragraphSpacing,
            paragraphIndent,
            textCase,
            textDecoration,
          } = styleValue.value;

          // Generating CSS properties based on the token values
          cssOutput += `  font: var(--font-weights-${fontWeight}) var(--font-size-${fontSize})/var(--line-heights-${lineHeight}) var(--font-families-${fontFamily});\n`;
          cssOutput += `  letter-spacing: var(--letter-spacing-${letterSpacing});\n`;
          cssOutput += `  paragraph-spacing: var(--paragraph-spacing-${paragraphSpacing});\n`;
          cssOutput += `  paragraph-indent: var(--paragraph-indent-${paragraphIndent});\n`;
          cssOutput += `  text-case: var(--text-case-${textCase});\n`;
          cssOutput += `  text-decoration: var(--text-decoration-${textDecoration});\n`;

          cssOutput += `}\n\n`;
        }
      }
    }

    return cssOutput;
  },
};
