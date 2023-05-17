const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackPwaManifest = require('webpack-pwa-manifest');
const path = require('path');
const { InjectManifest } = require('workbox-webpack-plugin');

// TODO: Add and configure workbox plugins for a service worker and manifest file.
new InjectManifest({
  swSrc: './src-sw.js',
  swDest: 'src-sw.js',
}),

new WebpackPwaManifest({
  fingerprints: false,
  inject: true,
  name: 'text-editor',
  short_name: 'JATE',
  description: 'Progressive Web Application Text Editor',
  background_color: 'white',
  theme_color: 'darkblue',
  start_url: '/',
  publicPath: '/',
  icons: [
    {
      src: path.resolve('src/images/logo.png'),
      sizes: [96, 128, 192, 256, 384, 512],
      destination: path.join('assets', 'icons'),
    },
  ],
}),




module: {
  // TODO: Add CSS loaders and babel to webpack.
  rules: [
    {
      test: /\.css$/i,
      use: ['style-loader', 'css-loader'],
    },
    {
      test: /\.m?js$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env'],
          plugins: ['@babel/plugin-proposal-object-rest-spread', '@babel/transform-runtime']
        },
      },
    },
  ],
},


module.exports = () => {
  return {
    mode: 'development',
    entry: {
      main: './src/js/index.js',
      install: './src/js/install.js'
    },
    output: {
      filename: '[name].bundle.js',
      path: path.resolve(__dirname, 'dist'),
    },
    plugins: [
      
    ],

    module: {
      rules: [
        
      ],
    },
  };
};
