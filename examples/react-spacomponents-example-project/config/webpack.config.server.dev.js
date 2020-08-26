const webpack = require('webpack');
const devConfig = require('./webpack.config.dev');
const getClientEnvironment = require('./env');
const paths = require('./paths');

const ManifestPlugin = require('webpack-manifest-plugin');

const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const publicPath = '/';
const publicUrl = publicPath.slice(0, -1);
const env = getClientEnvironment(publicUrl);

// Inject mode into stringified environment
Object.assign(env.stringified['process.env'], {
    IS_SERVER: true,
});

module.exports = Object.assign({}, devConfig, {
    entry: [paths.appServerIndexJs],
    devtool: 'inline-module-source-map',
    target: 'node',
    output: {
        path: paths.serverDist,
        filename: 'server.js',
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
    plugins: [

        new webpack.DefinePlugin(env.stringified),
        new MiniCssExtractPlugin({
            // Options similar to the same options in webpackOptions.output
            // both options are optional
            filename: 'static/css/[name].[contenthash:8].chunk.css',
            chunkFilename: 'static/css/[name].[contenthash:8].chunk.css',
        }),

        // Generate a manifest file which contains a mapping of all asset filenames
        // to their corresponding output file so that tools can pick it up without
        // having to parse `index.html`.
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
