const PostCompilePlugin = require('webpack-post-compile-plugin')

module.exports = {
  chainWebpack: config => {
    // sconst conf = config.toConfig()
    config
      .plugin('post-compile')
      .use(PostCompilePlugin)
  },
  
  css: {
    loaderOptions: {
      stylus: {
        'resolve url': true
        // 自定义主题场景
        // import: [path.resolve(__dirname, './src/theme')]
      }
    }
  }
}
