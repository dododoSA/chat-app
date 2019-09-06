module.exports = {
  outputDir: '../web/static',
  configureWebpack: {
    entry: '../web/static/app.js',
    output: {
      filename: '[name].js'
    }
  },
  filenameHashing: false
}
