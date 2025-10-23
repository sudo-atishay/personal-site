module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("index.css");
  return {
    dir: { input: ".", output: "_site" },
    markdownTemplateEngine: "njk"
  };
};
