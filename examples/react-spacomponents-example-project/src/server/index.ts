/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 ~ Copyright 2018 Adobe Systems Incorporated
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

// Expose XMLHttpRequest globally so ModelManager can use it

import React from "react";
import express from "express";
import bodyParser from "body-parser";

import preRender from "./prerender";
import { ServerPayLoadModel } from "./ServerPayloadModel";

const exapp = express();
//Here we are configuring express to use body-parser as middle-ware.
exapp.use(bodyParser.urlencoded({ extended: false }));

exapp.use(express.static("dist"));
//@ts-ignore
exapp.use(bodyParser.json({limit: '50mb', extended: true}));
exapp.use(bodyParser.urlencoded({limit: '50mb',extended: true}));

exapp.post('/prerender', (req, res, next) => {


    preRender(req.body as ServerPayLoadModel).then((payload) => {
        res.json({
            code: 200,
            payload
        });
        res.statusCode = 200;
        res.end()
    }).catch((error) => {
        console.log("error rendering SSR:",error);
        res.json({
            payload: { html: (error.stack) ? error + ' stack: ' + error.stack : error },
            code: 500
        });
        res.statusCode = 500;
        res.end();
    })
});

exapp.listen(4200, () => console.log('Example exapp listening on port 4200!'));