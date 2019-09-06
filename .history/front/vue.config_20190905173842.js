module.exports = {
  outputDir: '../web/static',
  configureWebpack: {
    entry: './src/main.js',
    output: {
      filename: 'app.js'
    }
  },
  filenameHashing: false
}
