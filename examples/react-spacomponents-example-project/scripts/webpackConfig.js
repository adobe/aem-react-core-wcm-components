/*
 *  Copyright 2020 Adobe
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */

const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ManifestPlugin = require('webpack-manifest-plugin');
const webpackConfig = require('react-scripts/config/webpack.config.js')('development');
const paths = require('../config/paths');
const path = require('path');
const aliases = require('../config/aliases');

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

const mappedAliases = {};
Object.keys(aliases).map((key) => {
    const alias = aliases[key];
    mappedAliases[key] = path.resolve(alias);
});

webpackConfig.resolve.alias = mappedAliases;

module.exports = webpackConfig;