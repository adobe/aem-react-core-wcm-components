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

config.output.library = '@adobe/aem-core-components-react-base';

config.entry = {
    'index': ['./src/index.ts'],
    'isEmptyFunctions': ['./src/isEmptyFunctions.ts'],
    'authoring/list/v2/ListV2': ['./src/authoring/list/v2/ListV2'],
    'authoring/button/v1/ButtonV1': ['./src/authoring/button/v1/ButtonV1'],
    'authoring/text/v2/TextV2': ['./src/authoring/text/v2/TextV2'],
    'authoring/title/v2/TitleV2': ['./src/authoring/title/v2/TitleV2'],
    'authoring/image/v2/ImageV2': ['./src/authoring/image/v2/ImageV2'],
    'authoring/teaser/v1/TeaserV1': ['./src/authoring/teaser/v1/TeaserV1'],
    'authoring/download/v1/DownloadV1': ['./src/authoring/download/v1/DownloadV1'],
    'authoring/separator/v1/SeparatorV1': ['./src/authoring/separator/v1/SeparatorV1'],
    'layout/breadcrumb/v2/BreadCrumbV2': ['./src/layout/breadcrumb/v2/BreadCrumbV2'],
    'layout/navigation/v1/NavigationV1': ['./src/layout/navigation/v1/NavigationV1'],
    'layout/language-navigation/v1/LanguageNavigationV1': ['./src/layout/language-navigation/v1/LanguageNavigationV1']
};

module.exports = config;