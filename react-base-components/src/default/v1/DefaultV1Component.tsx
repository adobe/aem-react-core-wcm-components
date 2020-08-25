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

import {CoreComponentModel, withConditionalPlaceHolder} from "../../AbstractCoreComponent";
import React, {Component} from "react";
import {DefaultV1IsEmptyFn} from "./DefaultV1ComponentIsEmptyFn";

export interface DefaultV1Model extends CoreComponentModel{
    html: string
}

const DefaultV1ComponentImpl = (props:DefaultV1Model) => <div className={"cmp-default-wrapper"} dangerouslySetInnerHTML={{__html: props.html}}></div>;

const DefaultV1Component = (props:DefaultV1Model) => {
    const Wrapped = withConditionalPlaceHolder(DefaultV1ComponentImpl, DefaultV1IsEmptyFn, "cmp-default", "Default SPA Component")
    return <Wrapped {...props}/>
};

export default DefaultV1Component;