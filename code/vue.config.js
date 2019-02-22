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
      }
    }
  }
}
