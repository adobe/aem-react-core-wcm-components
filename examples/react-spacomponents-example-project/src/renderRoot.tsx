import React from "react";

import ReactDOM from "react-dom";
import {BrowserRouter} from 'react-router-dom';
import { ModelManager, Constants } from '@adobe/cq-spa-page-model-manager';

import App from './components/App';


const render = (model) => {
    ReactDOM.render((
            <BrowserRouter>
                    <App cqChildren={ model[Constants.CHILDREN_PROP] } cqItems={ model[Constants.ITEMS_PROP] } cqItemsOrder={ model[Constants.ITEMS_ORDER_PROP] }
                              cqPath={ ModelManager.rootPath } locationPathname={ window.location.pathname }/>
            </BrowserRouter>),
        document.getElementById('root'));
};

export default render;