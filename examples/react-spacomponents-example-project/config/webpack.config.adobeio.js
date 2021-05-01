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
const prodConfig = require('./webpack.config.prod');
const webpack = require('webpack');
const path = require('path');
const getClientEnvironment = require('./env');
const paths = require('./paths');
const aliases = require("./aliases");
const PnpWebpackPlugin = require('pnp-webpack-plugin');

const ManifestPlugin = require('webpack-manifest-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

// Webpack uses `publicPath` to determine where the app is being served from.
// It requires a trailing slash, or the file assets will get an incorrect path.
const publicPath = paths.clientLibRelativePath + '/';

// `publicUrl` is just like `publicPath`, but we will provide it to our app
// as %PUBLIC_URL% in `index.html` and `process.env.PUBLIC_URL` in JavaScript.
// Omit trailing slash as %PUBLIC_URL%/xyz looks better than %PUBLIC_URL%xyz.
const publicUrl = publicPath.slice(0, -1);
// Get environment variables to inject into our app.
const env = getClientEnvironment(publicUrl);

// Inject mode into stringified environment
Object.assign(env.stringified['process.env'], {
    IS_SERVER: true,
});

module.exports = Object.assign({}, prodConfig, {
    target: 'node',
    entry: [paths.preRenderServer],
    output: {
        path: paths.runtimeBuild,
        filename: 'app.js',
        libraryTarget: 'commonjs2',
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js'],

        // This allows you to set a fallback for where Webpack should look for modules.
        // We placed these paths second because we want `node_modules` to "win"
        // if there are any conflicts. This matches Node resolution mechanism.
        // https://github.com/facebook/create-react-app/issues/253
        modules: ['node_modules'].concat(
            // It is guaranteed to exist because we tweak it in `env.js`
            process.env.NODE_PATH.split(path.delimiter).filter(Boolean)
        ),
        alias: aliases,
        plugins: [
            // Adds support for installing with Plug'n'Play, leading to faster installs and adding
            // guards against forgotten dependencies and such.
            PnpWebpackPlugin,
            new TsconfigPathsPlugin({ configFile: "./tsconfig.server.json" })
        ],
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
    plugins: [

        new webpack.DefinePlugin(env.stringified),
        new MiniCssExtractPlugin({
            // Options similar to the same options in webpackOptions.output
            // both options are optional
            filename: 'static/css/[name].css',
            chunkFilename: 'static/css/[name].[contenthash:8].chunk.css',
        }),


        new ManifestPlugin({
            fileName: 'asset-manifest.json',
            publicPath: publicPath,
        }),

        new webpack.optimize.LimitChunkCountPlugin({
            maxChunks: 1,
        }),


        new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),


    ].filter(Boolean),
});
