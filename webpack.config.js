const path = require('path');
const nodeExternals = require('webpack-node-externals');
const ESLintPlugin = require('eslint-webpack-plugin');
const NodemonPlugin = require('nodemon-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

/* ------------------------------------------------------------------
   SERVER BUNDLE (TypeScript → dist/server.js, auto‑restart via nodemon) 
*------------------------------------------------------------------ */
const serverConfig = {
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
  watch: true,
};

/* ------------------------------------------------------------------
   CLIENT BUNDLE (TailwindCSS → public/css/style.css) 
*------------------------------------------------------------------ */
const clientConfig = {
  mode: 'development',
  target: 'web',
  entry: {
    styles: './src/styles.css', // Tailwind entry with @tailwind directives
  },
  output: {
    path: path.resolve(__dirname, 'public/css'),
    filename: '[name].js', // dummy JS file – CSS is extracted separately
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          // IMPORTANT: let postcss-loader read postcss.config.js (with Tailwind)
          'postcss-loader',
        ],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'style.css', // final CSS served at /css/style.css
    }),
  ],
  watch: true,
};

module.exports = [serverConfig, clientConfig];
