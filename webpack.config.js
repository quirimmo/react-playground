const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const BUILD_DIR = path.resolve(__dirname, 'dist');
const APP_DIR = path.resolve(__dirname, 'src/app');

const config = {
	entry: APP_DIR + '/index.jsx',
	devtool: 'inline-source-map',
	plugins: [
		new CleanWebpackPlugin([BUILD_DIR]),
		new HtmlWebpackPlugin({
			title: 'Development'
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
		}]
	}
};

module.exports = config;