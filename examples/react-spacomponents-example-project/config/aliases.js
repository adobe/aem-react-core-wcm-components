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

const path = require('path');

module.exports = {
    "react": path.resolve("./node_modules/react"),
    "react-router":  path.resolve("./node_modules/react-router"),
    "react-router-dom":  path.resolve("./node_modules/react-router-dom"),
    "@adobe/cq-react-editable-components":   path.resolve("./node_modules/@adobe/cq-react-editable-components"),
    "@adobe/cq-spa-component-mapping":   path.resolve("./node_modules/@adobe/cq-spa-component-mapping"),
    "@adobe/cq-spa-page-model-manager":   path.resolve("./node_modules/@adobe/cq-spa-page-model-manager"),
    "@adobe/aem-core-components-react-base":   path.resolve("./node_modules/@adobe/aem-core-components-react-base"),
    "@adobe/aem-core-components-react-spa":   path.resolve("./node_modules/@adobe/aem-core-components-react-spa")
};