const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const BUILD_DIR = path.resolve(__dirname, 'dist');
const APP_DIR = path.resolve(__dirname, 'src/app');
const SRC_DIR = path.resolve(__dirname, 'src');
const STYLES_DIR = path.resolve(__dirname, 'assets/styles');

const config = {
	entry: APP_DIR + '/index.jsx',
	devtool: 'inline-source-map',
	plugins: [
		new CleanWebpackPlugin([BUILD_DIR]),
		new HtmlWebpackPlugin({
			template: SRC_DIR + '/index.html'
		})
	],
	output: {
		path: BUILD_DIR,
		filename: 'bundle.js'
	},
	module: {
		rules: [{
			test: /\.jsx$/,
			use: 'babel-loader'
		},{
			test: /\.(css|scss)$/,
			  use: [{
				loader: "style-loader"
			  }, {
				loader: "css-loader" 
			  }, {
				loader: "sass-loader"
			  }]
		}]
	},
	devServer: {
		contentBase: path.join(__dirname, 'dist')
	}
};

module.exports = config;