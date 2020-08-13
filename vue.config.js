const path = require('path')
const COMMON_URL = process.env.NODE_ENV === 'production' ? '/ilayer' : './'
const resolve = dir => {
  return path.join(__dirname, dir)
}

module.exports = {
  lintOnSave: false,
  publicPath: COMMON_URL,
  outputDir: 'dist',
  assetsDir: 'assets',
  chainWebpack: config => {
    config.resolve.alias
      .set('@', resolve('src'))
  },
  productionSourceMap: false,
  devServer: {
    // open: process.platform === 'darwin',
    host: 'localhost',
    port: 9001,
    hot: true,
    https: false,
    open: true,
    hotOnly: false,
    overlay: {
      warnings: false,
      errors: false
    },
    proxy: {
      '/layer': {
        // 目标 API 地址
        target: 'http://localhost:3000',
        // target: process.env.VUE_APP_URL,
        // 如果要代理 websockets
        ws: true,
        changeOrigin: true, // 允许websockets跨域
        pathRewrite: {
          '/': ''
        }
      }
    }
  },
  pwa: {
    iconPaths: {
      favicon32: 'favicon.ico',
      favicon16: 'favicon.ico',
      appleTouchIcon: 'favicon.ico',
      maskIcon: 'favicon.ico',
      msTileImage: 'favicon.ico'
    }
  },
  css: {
    loaderOptions: {
      less: {
        lessOptions: {
          // modifyVars: getThemeVariables({
          //   dark: true,
          //   compact: true,
          // }),
          javascriptEnabled: true,
        },
      }
    },
  },
}