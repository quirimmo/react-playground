var webpack = require('webpack');

module.exports = function (config) {
    config.set({
        browsers: ['Chrome'], //run in Chrome
        singleRun: true, //just run once by default
        frameworks: ['mocha'], //use the mocha test framework
        files: [
            // 'tests.webpack.js' //just load this file
            'test/unit/helpers.spec.jsx',
            'test/unit/dom.spec.jsx'
        ],
        preprocessors: {
            'test/unit/helpers.spec.jsx': ['webpack', 'sourcemap'], //preprocess with webpack and our sourcemap loader
            'test/unit/dom.spec.jsx': ['webpack', 'sourcemap'] //preprocess with webpack and our sourcemap loader
        },
        reporters: ['dots'], //report results in this format
        webpack: { //kind of a copy of your webpack config
            devtool: 'inline-source-map', //just do inline source maps instead of the default
            module: {
                loaders: [{
                    test: /\.jsx$/,
                    loader: 'babel-loader'
                }]
            }
        },
        webpackServer: {
            noInfo: true //please don't spam the console when running in karma!
        }
    });
};