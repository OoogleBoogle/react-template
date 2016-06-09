const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const packageData = require('./package.json');
const validate = require('webpack-validator');
const merge = require('webpack-merge');
const parts = require('./lib/parts');
const fs = require('fs');

var nodeModules = {};
fs.readdirSync(path.resolve(__dirname, 'node_modules'))
    .filter(function(x) {
        return ['.bin'].indexOf(x) === -1;
    })
    .forEach(function(mod) {
        nodeModules[mod] = 'commonjs ' + mod;
    });


const PATHS = {
  app: path.join(__dirname, 'app/index'),
  style: //[
    // path.join(__dirname, 'node_modules', 'purecss'),
    path.join(__dirname, 'app', '/sass/main.scss')
  //]
  ,
  build: path.join(__dirname, 'build')
};

const common = {
  entry: {
    style: PATHS.style,
    app: PATHS.app
  },
  output: {
    path: PATHS.build,
    filename: '[name].js'
  },
  externals: nodeModules,
  plugins: [
    new HtmlWebpackPlugin({
      title: parts.setTitle(packageData.name),
      template: path.resolve('index-template.ejs')
    })
  ],
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        include: path.resolve('app/'),
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
            presets: ['es2015', 'react']
        }
      }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  target: 'web',
};

var config;

switch(process.env.npm_lifecycle_event) {
  case 'build':
  case 'stats':
    config = merge(
      common,
      {
        devtool: 'source-map',
        output: {
          path: PATHS.build,
          filename: '[name].[chunkhash].js',
          chunkFilename: '[chunkhash].js'
        }
      },
      parts.clean(PATHS.build),
      parts.setFreeVariable(
        'process.env.NODE_ENV',
        'production'
      ),
      parts.extractBundle({
        name: 'vendor',
        entries: ['react']
      }),
      parts.minify(),
      parts.extractCSS(PATHS.style),
      parts.purifyCSS([PATHS.build])
    );
    break;
  default:
    config = merge(
      common,
      {
        devtool: 'source-map'
      },
      parts.setupCSS(PATHS.style),
      parts.devServer({
      // Customize host/port here if needed
        host: process.env.HOST,
        port: process.env.PORT
      })
    );
}

module.exports = validate(config);
