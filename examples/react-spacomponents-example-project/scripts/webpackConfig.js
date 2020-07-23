const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ManifestPlugin = require('webpack-manifest-plugin');
const webpackConfig = require('react-scripts/config/webpack.config.js')('development');
const paths = require('../config/paths');
const path = require('path');

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
                subRule.options.name = "static/media/[name].[hash:8].[ext]";
        });
    }
});
webpackConfig.plugins.forEach(plugin => {
    if(plugin instanceof ManifestPlugin){
        plugin.opts.publicPath = webpackConfig.output.publicPath;
    }

    if(plugin instanceof MiniCssExtractPlugin){
        plugin.options.filename = 'static/css/[name].[contenthash:8].css';
        plugin.options.chunkFilename = 'static/css/[name].[contenthash:8].chunk.css';
    }
});
webpackConfig.resolve.alias = {
    "react-router": path.resolve("./node_modules/react-router"),
    "react-router-dom": path.resolve("./node_modules/react-router-dom"),
    "@adobe/cq-react-editable-components":  path.resolve("./node_modules/@adobe/cq-react-editable-components"),
    "@adobe/cq-spa-component-mapping":  path.resolve("./node_modules/@adobe/cq-spa-component-mapping"),
    "@adobe/cq-spa-page-model-manager":  path.resolve("./node_modules/@adobe/cq-spa-page-model-manager")
};

module.exports = webpackConfig;