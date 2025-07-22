const path = require('path');
const nodeExternals = require('webpack-node-externals');
const ESLintPlugin = require('eslint-webpack-plugin');
const NodemonPlugin = require('nodemon-webpack-plugin');

module.exports = {
  mode: 'development',
  target: 'node',
  entry: './src/server.ts',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'server.js',
  },
  resolve: { extensions: ['.ts', '.js'] },
  externals: [nodeExternals()],
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
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
