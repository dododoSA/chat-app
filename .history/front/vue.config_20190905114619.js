module.exports = {
  outputDir: '../web/static',
  configureWebpack: {
    output: {
      filename: '[name].js'
    }
  },
  filenameHashing: false
}
