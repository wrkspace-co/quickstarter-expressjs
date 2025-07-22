const path = require('path');
const nodeExternals = require('webpack-node-externals');
const ESLintPlugin = require('eslint-webpack-plugin');
const NodemonPlugin = require('nodemon-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  mode: 'development',
  target: 'node',
  entry: {
    server: './src/server.ts',
    styles: './src/styles.css'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
  },
  resolve: { extensions: ['.ts', '.js'] },
  externals: [nodeExternals()],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader'
        ]
      },
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: path.join('public', 'css', 'style.css'),
    }),
    new ESLintPlugin({
      extensions: ['ts'],
      fix: true,
      overrideConfigFile: path.resolve(__dirname, '.eslintrc.js'),
    }),
    new NodemonPlugin({
      script: path.resolve(__dirname, 'dist/server.js'),
      watch: path.resolve(__dirname, 'dist'),
    }),
  ],
  // watch mode means Webpack keeps running and rebuilding
  watch: true,
};
