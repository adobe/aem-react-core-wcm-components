/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 ~ Copyright 2020 Adobe Systems Incorporated
 ~
 ~ Licensed under the Apache License, Version 2.0 (the "License");
 ~ you may not use this file except in compliance with the License.
 ~ You may obtain a copy of the License at
 ~
 ~     http://www.apache.org/licenses/LICENSE-2.0
 ~
 ~ Unless required by applicable law or agreed to in writing, software
 ~ distributed under the License is distributed on an "AS IS" BASIS,
 ~ WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 ~ See the License for the specific language governing permissions and
 ~ limitations under the License.
 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
import React from "react";
import 'cross-fetch/polyfill';

import ReactDOMServer from 'react-dom/server';
import App from "../components/App";
import {StaticRouter} from "react-router-dom";
import { EditorContext, PageModel} from '@adobe/aem-react-editable-components';
import {ModelClient, ModelManager} from '@adobe/aem-spa-page-model-manager';
import {webpackExistingChunks} from './constants/webpackBuildStats';
import {ReportChunks} from "react-universal-component";
import {clearChunks} from 'react-universal-component/server';
import "./servermapping";

import { ServerParameters } from "./ServerPayloadModel";

/**
 * Renders a valid model to a html stringify
 *
 * @param   {Object} model - the model to render
 * @param   {Object} parameters - the header ServerParameters containing metadata
 * @returns {String} the string serialization of the html output + state
 */

const renderModelToHTMLString = (model:PageModel, parameters:ServerParameters) => {

    const isInEditor = parameters["wcmmode"] && parameters["wcmmode"] === 'EDIT' || parameters["wcmmode"] === 'PREVIEW';

    clearChunks();
    let rawChunkNames:string[] = [];
    const html = ReactDOMServer.renderToString(
        <ReportChunks report={chunkName => !!chunkName && rawChunkNames.push(chunkName)}>
            <StaticRouter location={parameters.pagePath} context={{}}>
                <EditorContext.Provider value={isInEditor}>
                    <App
                        cqChildren={model[":children"] || {}}
                        cqItems={model[":items"] || {}}
                        cqItemsOrder={model[":itemsOrder"] || []}
                        cqPath={parameters.pagePath}
                        isInEditor={isInEditor}
                    />
                </EditorContext.Provider>
            </StaticRouter>
        </ReportChunks>
    );

    // We are using ' for the string to we need to make sure we are encoding all other '
    let state = {
        rootModel: model,
        rootModelUrl: ModelManager.rootPath,
    };
    let stateStr = JSON.stringify(state);

    const rendered = `${html}
        <script id="__INITIAL_STATE__" type="application/json">${stateStr}</script>`;

    const chunkNames = Array.from(new Set(rawChunkNames.map((chunk) => String(chunk).replace(/-/g, '/'))
        .filter((chunkName) => webpackExistingChunks.has(chunkName))));

    return {
        html: rendered,
        chunkNames: chunkNames
    }
};

const preRender = (parameters:ServerParameters) => {

    return new Promise((resolve, reject) => {
        return ModelManager.initialize({
            path: parameters.pageRoot,
            model: parameters.data,
            modelClient: new ModelClient()
        }).then((resolvedModel) => {
            resolve(renderModelToHTMLString(parameters.data, parameters));
        }).catch((error) => {
            reject(error);
        });
    });
};

export default preRender;
