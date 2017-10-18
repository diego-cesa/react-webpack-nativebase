let webpack = require('webpack');
let path = require('path');

let BUILD_DIR = path.resolve(__dirname, './');
let APP_DIR = path.resolve(__dirname, './');

let config = {
    entry: APP_DIR + '/index.js',
    output: {
        path: BUILD_DIR,
        filename: 'index.min.js'
    },
    module : {
        loaders : [
            {
                test : /\.jsx?/,
                include : APP_DIR,
                loader : 'babel-loader'
            }
        ]
    }
};

module.exports = config;