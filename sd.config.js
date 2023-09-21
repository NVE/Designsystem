module.exports = {
    source: ["./tokens/figma-tokens.json"],
    platforms: {
        css: {
        transformGroup: "css",
        buildPath: "./build/",
        files: [
            {
            destination: "tokens.css",
            format: "css/variables"
            },
        ],
        },
    },
};
