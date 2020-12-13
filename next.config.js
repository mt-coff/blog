const withMdxEnhanced = require('next-mdx-enhanced')({
  defaultLayout: true,
  fileExtensions: ['mdx', 'md'],
})

module.exports = withMdxEnhanced({})