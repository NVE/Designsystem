//Endrer $type til type og $value til value for å gjøre det kompatibelt med Style Dictionary
export default {
  name: 'custom/map-dollar-type',
  type: 'attribute',
  filter: () => true,
  transform: (token) => {
    if (token.$type && !token.type) token.type = token.$type;
    if (token.$value && !token.value) token.value = token.$value;
    return token;
  },
};
