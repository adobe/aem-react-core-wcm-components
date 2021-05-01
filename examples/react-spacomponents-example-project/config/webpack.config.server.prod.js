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

const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

const webpack = require('webpack');
const devConfig = require('./webpack.config.prod');
const getClientEnvironment = require('./env');
const paths = require('./paths');

const ManifestPlugin = require('webpack-manifest-plugin');

const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const publicPath = paths.publicPath;

const publicUrl = publicPath.slice(0, -1);
const env = getClientEnvironment(publicUrl);

// Inject mode into stringified environment
Object.assign(env.stringified['process.env'], {
    IS_SERVER: true,
});

module.exports = Object.assign({}, devConfig, {
    entry: [paths.appServerIndexJs],
    target: 'node',
    output: {
        path: paths.serverBuild,
        filename: 'express.js',
        libraryTarget: 'commonjs2',
    },
    optimization: {},
    externals: {
        express: true,
        os: true,
        v8: true,
        compression: true,
        cors: true,
        tls: true,
        cluster: true,
    },

    resolve: {
        plugins: [
            new TsconfigPathsPlugin({ configFile: "./tsconfig.server.json" })
        ]
    },

    plugins: [

        new webpack.DefinePlugin(env.stringified),
        new MiniCssExtractPlugin({
            filename: 'static/css/[name].[contenthash:8].chunk.css',
            chunkFilename: 'static/css/[name].[contenthash:8].chunk.chunk.css',
        }),

        new ManifestPlugin({
            fileName: 'asset-manifest.json',
            publicPath: publicPath,
        }),

        // Output a single chunk at most to make sure all code is loaded on
        // the server side.
        new webpack.optimize.LimitChunkCountPlugin({
            maxChunks: 1,
        }),

        new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),

    ].filter(Boolean),
});
