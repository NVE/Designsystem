export default {
  name: 'boxshadow/css',
  type: 'value',
  transitive: true,
  filter: function (token) {
    const match = token.$type === 'boxShadow';
    return match;
  },
  transform: function (token) {
    const vals = token.$value;
    if (Array.isArray(vals)) {
      return vals.map((v) => transformSingleShadow(v)).join(', ');
    } else {
      return transformSingleShadow(vals);
    }
  },
};

const transformSingleShadow = (vals) => {
  return `${vals.x}px ${vals.y}px ${vals.blur}px ${vals.spread}px ${vals.color}`;
};
