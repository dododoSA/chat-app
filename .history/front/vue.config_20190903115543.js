const path = require('path')

module.exports = {
    publicPath: './',
    outputDir: '../resources/static',
    configureWebpack: {
        resolve: {
            alias: {
                "vue$": 'vue/dist/vue.esm.js'
            }
        }
    }
}