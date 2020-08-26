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

process.env.BABEL_ENV = 'development';
process.env.NODE_ENV = 'development';

const paths = require('../config2/paths');
const aemPack = require('aempack');

const developWithSSR = process.env.DEVELOPSSR || false;
const webpackConfig = require('./webpackConfig');

const user = process.env.AEMUSER  || 'admin';
const password = process.env.AEMPW || 'admin';

const aemPort = process.env.AEMPORT || 4502;
const aemHost = process.env.AEMHOST || 'localhost';

const proxyHost = process.env.PROXYHOST || 'localhost';
const proxyPort = process.env.PROXYPORT || 443;

const computeProxyUrl = () => {

    const port = proxyPort === 80 ? '' : ':' + aemPort;
    return 'http://' + proxyHost + port;
};

aemPack({
    delays: {
        postCompiledDebounceDelay: 10,
        serverSpawnDelay: 500,
        folderPushDelay: 10
    },
    browserSync: {
        https: true,
        enabled: true,
        sendDispatcherHeader: true,
        proxyUrl: computeProxyUrl(),
        proxyPort: proxyPort
    },
    isInClientLibRoot: false,
    webpackConfig: webpackConfig,
    // webpackServerConfig: serverWebpackConfig,
    disableServerSideRendering: !developWithSSR,

    aemProtocol: 'http',
    aemHost: aemHost,
    aemPort: aemPort,
    aemUser: user,
    aemPassword: password,

    clientLibRelativePath: paths.clientLibRelativePath,
    clientLibAbsolutePath: paths.clientLibRoot,
});



