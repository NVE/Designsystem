const fontWeights = {
  thin: 100,
  hairline: 100,
  'extra-light': 200,
  'ultra-light': 200,
  extralight: 200,
  ultralight: 200,
  light: 300,
  normal: 400,
  regular: 400,
  book: 400,
  medium: 500,
  'semi-bold': 600,
  'demi-bold': 600,
  semibold: 600,
  demibold: 600,
  bold: 700,
  'extra-bold': 800,
  'ultra-bold': 800,
  extrabold: 800,
  ultrabold: 800,
  black: 900,
  heavy: 900,
  'extra-black': 950,
  'ultra-black': 950,
  extrablack: 950,
  ultrablack: 950,
};

export default {
  //den fra style-dictionary-utils har "fontWeight", men det er brukt "fontWeights"
  name: 'fontWeights/number',
  type: 'value',
  transitive: true,
  filter: (token) => {
    if (token.type === 'fontWeights') {
      return true;
    }
    return false;
  },
  transform: (token) => {
    // check if value exists in matrix
    const fromMatrix = fontWeights[token.value.toLowerCase()];
    if (fromMatrix !== undefined) return fromMatrix;
    // test if value is quoted int
    const valueAsInt = parseInt(token.value.toLowerCase());
    if (Number.isInteger(valueAsInt)) return valueAsInt;
    //
    return token.value;
  },
};
