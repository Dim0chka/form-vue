const { defineConfig } = require('@vue/cli-service')
const { ElementPlusResolver } = require('unplugin-vue-components/resolvers')

module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: '',
  productionSourceMap: false,
  filenameHashing: false,
  configureWebpack: {
    plugins: [
      require('unplugin-vue-components/webpack')({
        resolvers: [ElementPlusResolver()],
      }),
    ],
  }
})
