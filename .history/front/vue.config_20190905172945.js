module.exports = {
  outputDir: '../web/static',
  configureWebpack: {
    entry: './src/main.js',
    output: {
      filename: '[name].js'
    }
  },
  filenameHashing: false
}
