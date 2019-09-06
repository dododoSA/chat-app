module.exports = {
  outputDir: '../web/static',
  configureWebpack: {
    output: {
      path: '../web/js',
      filename: 'app.js'
    }
  },
  filenameHashing: false
}
