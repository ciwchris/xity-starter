const pwaPlugin = require('eleventy-plugin-pwa')
const syntaxHighlightPlugin = require('@11ty/eleventy-plugin-syntaxhighlight')
const rssPlugin = require('@11ty/eleventy-plugin-rss')
const htmlMinTransform = require('./utils/transforms/htmlmin.js')
const contentParser = require('./utils/transforms/contentParser.js')
const htmlDate = require('./utils/filters/htmlDate.js')
const date = require('./utils/filters/date.js')

module.exports = function (eleventyConfig) {

  /**
   * Add Plugins
   * @link https://github.com/11ty/eleventy-plugin-rss
   * @link https://github.com/11ty/eleventy-plugin-syntaxhighlight
   * @link https://github.com/okitavera/eleventy-plugin-pwa
   */
  eleventyConfig.addPlugin(rssPlugin)
  eleventyConfig.addPlugin(syntaxHighlightPlugin)
  eleventyConfig.addPlugin(pwaPlugin)

  /**
   * Add filters
   *
   * @link https://www.11ty.io/docs/filters/
   */
  // human friendly date format
  eleventyConfig.addFilter('dateFilter', date)
  // robot friendly date format for crawlers
  eleventyConfig.addFilter('htmlDate', htmlDate)

  /**
   * Add Transforms
   *
   * @link https://www.11ty.io/docs/config/#transforms
   */
  if (process.env.ELEVENTY_ENV === 'production') {
    // Minify HTML when building for production
    eleventyConfig.addTransform('htmlmin', htmlMinTransform)
  }
  // Parse the page HTML content and perform some manipulation
  eleventyConfig.addTransform('contentParser', contentParser)

  /**
   * Create custom data collections
   * for blog and feed
   * Code from https://github.com/hankchizljaw/hylia
   */
  // Blog posts collection
  const now = new Date()
  const livePosts = post => post.date <= now && !post.data.draft
  eleventyConfig.addCollection('posts', collection => {
    return [
      ...collection
      .getFilteredByGlob(
        "./src/blog/**/*"
      )
      .filter(livePosts),
    ]
  })

  eleventyConfig.setTemplateFormats([
    // Templates:
    "html",
    "njk",
    "md",
    // Static Assets:
    "css",
    "svg",
    "png",
    "jpg",
    "jpeg",
  ]);
  eleventyConfig.addPassthroughCopy("static");

  return {
    dir: {
      input: "src",
      includes: "components",
      layouts: "components/layouts",
      output: "_output",
    },
  };
};
