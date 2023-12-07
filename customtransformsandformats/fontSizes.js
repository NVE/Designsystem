export default {
    name: "fontsizes/px",
    type: "value",
    transitive: true,
    matcher: function (token) {
        const match = token.type === 'fontSizes';
        return match;
    },
    transformer: function (token) {
        return (!isNaN(token.value) ? `${token.value}px` : token.value);
    }
}