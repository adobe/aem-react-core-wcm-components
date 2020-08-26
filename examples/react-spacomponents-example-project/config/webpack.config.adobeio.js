
const prodConfig = require('./webpack.config.prod');
const webpack = require('webpack');
const getClientEnvironment = require('./env');
const paths = require('./paths');
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
        path: paths.serverBuild,
        filename: 'adobeio.js',
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
