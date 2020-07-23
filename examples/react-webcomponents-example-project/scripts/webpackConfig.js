const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ManifestPlugin = require('webpack-manifest-plugin');
const webpackConfig = require('react-scripts/config/webpack.config.js')('production');
const paths = require('../config/paths');


webpackConfig.optimization = {
    splitChunks: {
        chunks: 'async',
            minSize: 30000,
            minChunks: 1,
            maxAsyncRequests: 5,
            maxInitialRequests: 3,
            automaticNameDelimiter: '~',
            name: true,
            cacheGroups: {
            vendors: {
                test: /[\\/]node_modules[\\/]/,
                    priority: -10
            },
        default: {
                minChunks: 2,
                    priority: -20,
                    reuseExistingChunk: true
            }
        }
    },
    runtimeChunk: {
        name: 'bootstrap',
    },
};

webpackConfig.devtool ='inline-source-map';
webpackConfig.output.path = paths.clientLibRoot;
webpackConfig.output.publicPath = process.env.PUBLIC_URL;
webpackConfig.output.filename = "static/js/[name].[hash:8].js";
webpackConfig.output.chunkFilename = "static/js/[name].[hash:8].js";
webpackConfig.module.rules.forEach( rule => {
    if(rule.oneOf){
        rule.oneOf.forEach( subRule => {
            if(subRule.options && subRule.options.name)
                subRule.options.name = "resources/media/[name].[hash:8].[ext]";
        });
    }
});
webpackConfig.plugins.forEach(plugin => {
    if(plugin instanceof ManifestPlugin){
        plugin.opts.publicPath = webpackConfig.output.publicPath;
    }

    if(plugin instanceof MiniCssExtractPlugin){
        plugin.options.filename = 'resources/css/[name].[contenthash:8].css';
        plugin.options.chunkFilename = 'resources/css/[name].[contenthash:8].chunk.css';
    }
});

module.exports = webpackConfig;