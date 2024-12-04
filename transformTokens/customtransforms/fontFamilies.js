const hasSpaceInName = (string) => /\s/g.test(string);
export default {
  //den fra style-dictionary-utils har "fontFamily", men det er brukt "fontFamilies"
  name: 'fontFamilies/css',
  type: 'value',
  transitive: true,
  filter: (token) => {
    if (token.type === 'fontFamilies') {
      return true;
    }
    return false;
  },
  transform: (token) => {
    if (Array.isArray(token.value)) {
      return token.value.map((string) => (hasSpaceInName(string) ? `'${string}'` : string)).join(', ');
    }
    return hasSpaceInName(token.value) ? `'${token.value}'` : token.value;
  },
};
