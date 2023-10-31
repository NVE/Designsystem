module.exports = {
    name: 'boxshadow/css',
    type: 'value',
    transitive: true,
    matcher: function (token) {
        const match = token.type === 'boxShadow';
        return match;
    },
    transformer: function (token) {
        const vals = token.value;
        return `${vals.x}px ${vals.y}px ${vals.blur}px ${vals.spread}px ${vals.color}`;
    }
}