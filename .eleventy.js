export default function (eleventyConfig) {
  //get all components from customElements.json
  // let allComponents = []
  //remove members that are private or dont have a description

  // maybe get dependency graphs

  //return sorted by name

  return {
    dir: {
      input: 'docs',
      output: 'docs/_site',
      includes: '_includes',
    },
    templateFormats: ['njk', 'md', 'html'], // add markdown support
    markdownTemplateEngine: 'njk', // use Nunjucks instead of Liquid for markdown files
    templateEngineOverride: ['njk'], // just Nunjucks and then markdown
  };
}
