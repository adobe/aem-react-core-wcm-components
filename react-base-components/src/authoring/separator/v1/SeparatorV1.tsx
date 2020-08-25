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

import React, {Component} from "react";
import {CoreComponentModel, withConditionalPlaceHolder, withStandardBaseCssClass} from "../../../AbstractCoreComponent";
import {SeparatorV1IsEmptyFn} from "./SeparatorV1IsEmptyFn";

const SeparatorV1Impl = (props:CoreComponentModel) => {

    return (
        <div className={props.baseCssClass}>
            <hr className={props.baseCssClass + '__horizontal-rule'}/>
        </div>
    )

};

const SeparatorV1 = (props:CoreComponentModel) => {
    const Wrapped = withConditionalPlaceHolder(withStandardBaseCssClass(SeparatorV1Impl, "cmp-separator"), SeparatorV1IsEmptyFn, "Separator V1")
    return <Wrapped {...props}/>
};

export default SeparatorV1;