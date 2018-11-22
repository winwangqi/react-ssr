const path = require('path')
const webpack= require('webpack')
const nodeExternals = require('webpack-node-externals')

const resolve = dir => path.resolve(__dirname, dir)

const clientConfig = {
  mode: 'development',
  target: 'web',
  devtool: 'sourcemap',
  entry: resolve('./src/client/index'),
  output: {
    path: resolve('public'),
    filename: 'bundle.js',
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ]
  },
  resolve: {
    modules: [
      'node_modules',
    ],
    extensions: ['.js', '.jsx', '.json']
  },
  plugins: [
    new webpack.DefinePlugin({
      __isBrowser__: true
    })
  ],
}

const serverConfig = {
  mode: 'development',
  target: 'node',
  devtool: 'sourcemap',
  entry: resolve('./src/server/index'),
  output: {
    path: __dirname,
    filename: 'server.js',
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ]
  },
  resolve: {
    modules: [
      'node_modules',
    ],
    extensions: ['.js', '.jsx', '.json']
  },
  externals: [nodeExternals()],
  plugins: [
    new webpack.DefinePlugin({
      __isBrowser__: false
    })
  ],
}

module.exports = [clientConfig, serverConfig]