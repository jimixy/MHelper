const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

const path = require('path')

const resolve = dir => {
  return path.join(__dirname, './', dir)
}

const addStyleResource = (rule) => {
  rule.use('style-resource')
    .loader('style-resources-loader')
    .options({
      patterns: [
        resolve('src/assets/styles/variables.styl'),
        resolve('src/assets/styles/mixins.styl')
      ]
    })
}

const publicPath = process.env.NODE_ENV === 'production'
  ? '/'
  : '/'

module.exports = {
  publicPath: publicPath,
  // 如果你不需要使用eslint，把 lintOnSave 设为false即可
  lintOnSave: true,
  chainWebpack: config => {
    config
    // 开发环境
      .when(process.env.NODE_ENV === 'development',
        // sourcemap不包含列信息
        config => config.devtool('cheap-source-map')
      )
    // 非开发环境
      .when(process.env.NODE_ENV !== 'development', config => {
        config.optimization
          .minimizer([
            new UglifyJsPlugin({
              uglifyOptions: {
                // 移除 console
                compress: {
                  warnings: false,
                  drop_console: true,
                  drop_debugger: true,
                  pure_funcs: ['console.log']
                }
              }
            })
          ])
      })

    // 自动导入Stylus变量在每个文件中
    const types = ['vue-modules', 'vue', 'normal-modules', 'normal']
    types.forEach(type => addStyleResource(config.module.rule('stylus').oneOf(type)))

    // svg
    const svgRule = config.module.rule('svg')
    svgRule.uses.clear()
    svgRule.exclude.add(/node_modules/)
    svgRule
      .test(/\.svg$/)
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options({
        symbolId: 'icon-[name]'
      })

    // 修改images loader 添加svg处理
    const imagesRule = config.module.rule('images')
    imagesRule.exclude.add(resolve('src/assets/icons'))
    config.module
      .rule('images')
      .test(/\.(png|jpe?g|gif|svg)(\?.*)?$/)

    // 重新设置 alias
    config.resolve.alias
      .set('@', resolve('src'))
      .set('_c', resolve('src/components'))
  },
  productionSourceMap: false,
  devServer: {
    host: '127.0.0.1',
    port: 8080,
    publicPath
  }
}
