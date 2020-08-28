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
//@ts-nocheck
import React from 'react';
import ReactDOM from "react-dom";

import {ModelManager, ModelClient, Model, Constants} from '@adobe/aem-spa-page-model-manager';
import './mapping';

import {BrowserRouter} from "react-router-dom";
import App from "./components/App";



const DOMReady = (f:Function) => {/in/.test(document.readyState)?setTimeout( () => DOMReady(f),9):f()};

DOMReady( ()=> {

    const modelElement = document.getElementById('__INITIAL_STATE__');

    const model =
        modelElement
            ? JSON.parse(modelElement.innerHTML)
            : {};

    const initialModel = modelElement ? model.rootModel : undefined;

    const isServerSideRendered = (initialModel !== undefined);

    if(isServerSideRendered){
        modelElement.remove();
    }

    const modelClient = new ModelClient();

    const render = (model: Model) => {

        const rootDiv = document.getElementById('root');

        const Root = <BrowserRouter>
            <App
                cqChildren={model[Constants.CHILDREN_PROP]}
                cqItems={model[Constants.ITEMS_PROP]}
                cqItemsOrder={model[Constants.ITEMS_ORDER_PROP]}
                cqPath={ModelManager.rootPath}
                locationPathname={window.location.pathname}/>
        </BrowserRouter>;

        if(!isServerSideRendered){
            ReactDOM.render(Root, rootDiv);
        }else{
            ReactDOM.hydrate(Root, rootDiv);
        }
    };

    ModelManager.initialize({model: initialModel, modelClient: modelClient}).then(render);
});

