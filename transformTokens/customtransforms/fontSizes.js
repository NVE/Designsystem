export default {
  name: 'fontsizes/px',
  type: 'value',
  transitive: true,
  filter: function (token) {
    const match = token.$type === 'fontSizes';
    return match;
  },
  transform: function (token) {
    return token.$value;
  },
};
