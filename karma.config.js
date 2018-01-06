var webpack = require('webpack');
var webpackConfig = require('./webpack.config');

module.exports = function (config) {
    config.set({
        browsers: ['Chrome'], //run in Chrome
        singleRun: true, //just run once by default
        frameworks: ['chai', 'mocha'],
        plugins: [
            'karma-chrome-launcher',
            'karma-chai',
            'karma-mocha',
            'karma-sourcemap-loader',
            'karma-webpack',
        ],
        files: [
            // 'tests.webpack.js' //just load this file
            'test/unit/helpers.spec.jsx',
            'test/unit/dom.spec.jsx',
            'src/app/**/*(!spec).jsx',
            'tests.webpack.js'
        ],
        preprocessors: {
            'tests.webpack.js': ['webpack', 'sourcemap'],
            'src/app/**/*(!spec).jsx': ['webpack', 'sourcemap'],
            'src/app/**/*.spec.jsx': ['webpack', 'sourcemap']
        },
        reporters: ['dots'], //report results in this format
        webpack: webpackConfig,
        webpackServer: {
            noInfo: true //please don't spam the console when running in karma!
        }
    });
};