const StyleDictionary = require('style-dictionary-utils');

const { fileHeader, formattedVariables } = StyleDictionary.formatHelpers;
const fontFamilies = require('./customtransforms/fontFamilies.js');
const fontWeights = require('./customtransforms/fontWeights.js');
const boxShadow = require('./customtransforms/boxShadow.js')
const fontSizes = require('./customtransforms/fontSizes.js');
const fixZeroes = require('./customtransforms/fixZeroes.js');

StyleDictionary.registerTransform(fontFamilies);
StyleDictionary.registerTransform(fontWeights);
StyleDictionary.registerTransform(boxShadow);
StyleDictionary.registerTransform(fontSizes);
StyleDictionary.registerTransform(fixZeroes);

const lightModeFile = "tokens/Theme/nve_light.json";
const darkModeFile = "tokens/Theme/nve_dark.json";
const lightModeVarsomFile = "tokens/Theme/varsom_light.json";
const darkModeVarsomFile = "tokens/Theme/varsom_dark.json";
const isDark = process.argv?.[2] === "dark";
const isVarsom = process.argv?.[2] === "varsom";
const isVarsomDark = process.argv?.[2] === "varsom_dark";

const tokenfilter = (token) => {
  if (isDark) {
    return token.filePath === darkModeFile;
  } else if (isVarsomDark) {
    return token.filePath === darkModeVarsomFile;
  }
  return true;
};

let sources = [
  lightModeFile,
  "tokens/public/device/base.json",
  "tokens/*.json",
];
let destination = "nve.css";

if (isDark) {
  sources[0] = darkModeFile;
  destination = "nve_dark.css";
} else if (isVarsom) {
  sources[0] = lightModeVarsomFile;
  destination = "varsom.css";
} else if (isVarsomDark) {
  sources[0] = darkModeVarsomFile;
  destination = "varsom_dark.css";
}

StyleDictionary.registerFormat({
  name: "css/variables-themed",
  formatter: function ({ dictionary, file, options }) {
    const { outputReferences, theme } = options;
    return (
      fileHeader({ file }) +
      `:root.${theme} {\n` +
      formattedVariables({ format: "css", dictionary, outputReferences }) +
      "\n}\n"
    );
  },
});

const myStyleDictionary = StyleDictionary.extend({
  source: sources,
  platforms: {
    css: {
      transformGroup: "css",
      buildPath: "build/css/",
      transforms: [
        "attribute/cti",
        "name/cti/kebab",      
        "fixZeroes",
        "font/css",
        "fontsizes/px",
        "fontFamilies/css",
        "fontFamily/css",
        "fontWeight/number",
        "fontWeights/number",
        "boxshadow/css",
        "shadow/css",
      ],
      files: [
        {
          filter: tokenfilter,
          destination: destination,
          format: "css/variables",
          options: {
            outputReferences: true,
          },
          selector: ".test",
        },
      ],
    },
    darkcss: {
      transformGroup: "css",
      buildPath: "build/css/",
      transforms: [
        "attribute/cti",
        "name/cti/kebab",   
        "fixZeroes",     
        "font/css",
        "fontsizes/px",
        "fontFamilies/css",
        "fontFamily/css",
        "fontWeight/number",
        "fontWeights/number",
        "boxshadow/css",
        
        "shadow/css",
      ],
      files: [
        {
          filter: tokenfilter,
          destination: destination,
          format: "css/variables-themed",
          options: {
            outputReferences: true,
            theme: "darkmode",
          },
        },
      ],
    },
  },
});
if (isDark || isVarsomDark) {
  myStyleDictionary.buildPlatform("darkcss");
} else {
  myStyleDictionary.buildPlatform("css");
}
