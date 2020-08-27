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

process.env.BABEL_ENV = process.env.NODE_ENV;

const webpack = require('webpack');

const config = require('../config/webpack.config.adobeio.js');

console.log("building adobeio bundle..")
webpack(config, (err)=> {
    console.log('completed building adobeio bundle.');

    if(err != null){
        console.log("Error building adobeio bundle!");
        throw err;
    }
});