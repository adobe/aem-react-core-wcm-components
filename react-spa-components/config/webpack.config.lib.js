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

const config = require('./webpack.config.base');

config.output.library = 'cqSpaCoreComponents';

config.entry = {
    'index': ['./src/index.js'],
    'container/accordion/v1/AccordionV1': ['./src/container/accordion/v1/AccordionV1.jsx'],
    'container/carousel/v1/CarouselV1': ['./src/container/carousel/v1/CarouselV1.jsx'],
    'container/container/v1/ContainerV1': ['./src/container/container/v1/ContainerV1.jsx'],
    'container/tabs/v2/TabsV2': ['./src/container/tabs/v2/TabsV2.jsx']
};

module.exports = config;


