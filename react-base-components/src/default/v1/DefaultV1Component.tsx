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

import {AbstractCoreComponent, CoreComponentModel, CoreComponentState} from "../../AbstractCoreComponent";
import React from "react";

export interface DefaultV1Model extends CoreComponentModel{
    html: string
}

export function ButtonV1IsEmptyFn(props:DefaultV1Model): boolean{
    return props.html == null || props.html.trim().length === 0;
}

export default class DefaultV1Component<Model extends DefaultV1Model, State extends CoreComponentState> extends AbstractCoreComponent<Model, State> {

    public static defaultProps = {
        isInEditor: false,
        hidePlaceHolder: false
    };

    constructor(props:Model) {
        super(props, "cmp-default", "Default SPA Component");
    }


    renderComponent(){
          return <div className={"cmp-default-wrapper"} dangerouslySetInnerHTML={{__html: this.props.html}}></div>
    }

    isEmpty(): boolean {
        return ButtonV1IsEmptyFn(this.props);
    }

};