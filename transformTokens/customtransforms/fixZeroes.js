export default {
  // vi får problemer med navn som font-size-0 for font/css -transformeren
  // Kjør etter camelcase
  name: 'fixZeroes',
  type: 'name',
  transitive: true,
  filter: (token) => {
    if (token.name.slice(-2) === '-0') {
      return true;
    }
    return false;
  },
  transform: (token) => {
    return `${token.name.slice(0, -2)}-zero`;
  },
};
