const webpack = require('webpack')

module.exports = {
  webpack: (config, options) => {
    config.module.rules.push({
      test: /\.ya?ml$/,
      type: 'json',
      use: 'yaml-loader',
    })

    config.plugins.push(
      new webpack.BannerPlugin({
        banner: 'var global = globalThis;',
        raw: true,
        entryOnly: true,
      }),
      new webpack.DefinePlugin({
        global: 'globalThis',
      }),
    )

    return config
  },
}
