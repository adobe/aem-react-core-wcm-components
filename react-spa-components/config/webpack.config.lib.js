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

config.output.library = '@adobe/aem-core-components-react-spa';

config.entry = {
    'index': ['./src/index.ts'],
    'isEmptyFunctions': ['./src/isEmptyFunctions.ts'],
    'container/accordion/v1/AccordionV1': ['./src/container/accordion/v1/AccordionV1.tsx'],
    'container/carousel/v1/CarouselV1': ['./src/container/carousel/v1/CarouselV1.tsx'],
    'container/container/v1/ContainerV1': ['./src/container/container/v1/ContainerV1.tsx'],
    'container/tabs/v1/TabsV1': ['./src/container/tabs/v1/TabsV1.tsx']
};

module.exports = config;


