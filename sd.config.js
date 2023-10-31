module.exports = {
    source: ["./tokens/figma-tokens.json"],
    platforms: {
        css: {
        transformGroup: "css",
        buildPath: "./build/",
        files: [
            {
            destination: "tokens2.css",
            format: "css/variables"
            },
        ],
        },
    },
};
