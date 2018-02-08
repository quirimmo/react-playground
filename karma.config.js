var webpack = require('webpack');
var webpackConfig = require('./webpack.config');

module.exports = function (config) {
    config.set({
        browsers: ['Chrome'], //run in Chrome
        singleRun: false,
        frameworks: ['chai', 'mocha'],
        plugins: [
            'karma-chrome-launcher',
            'karma-chai',
            'karma-mocha',
            'karma-sourcemap-loader',
            'karma-webpack',
        ],
        files: [
            'test/unit/helpers.spec.jsx',
            'test/unit/tests.webpack.js'
        ],
        preprocessors: {
            'test/unit/helpers.spec.jsx': ['webpack'],
            'test/unit/tests.webpack.js': ['webpack']
        },
        reporters: ['dots'],
        webpack: webpackConfig,
        webpackServer: {
            noInfo: true
        }
    });
};