## cube-ui安装
    Use post-compile? (Y/n)  // 是否后编译 y

    > partly, import component on demand, which makes the size of imported code lighter // 部分引入
    fully, import all the components    // 全部引入

    Custom theme? (Y/n)     // 自定义主题 y

    Use rem layout? (y/N)   // 是否使用rem 
    Use vw layout? (y/N)    // 是否使用vw

## 配置vue.config.js

        const PostCompilePlugin = require('webpack-post-compile-plugin')

        module.exports = {
            chainWebpack: config => {
                const conf = config.toConfig()
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