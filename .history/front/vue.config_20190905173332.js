module.exports = {
  outputDir: '../web/static',
  configureWebpack: {
    entry: '../web/static/main.js',
    output: {
      filename: '[name].js'
    }
  },
  filenameHashing: false
}
