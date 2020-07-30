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

import React from "react";
import {AbstractCoreComponent, CoreComponentModel, CoreComponentState} from "../../../AbstractCoreComponent";


export function SeparatorV1IsEmptyFn(props:CoreComponentModel): boolean{
    return false
}

export default class SeparatorV1<Model extends CoreComponentModel, State extends CoreComponentState> extends AbstractCoreComponent<Model, State> {

    public static defaultProps = {
        hidePlaceHolder: false,
        isInEditor: false
    };


    constructor(props: Model) {
        super(props, 'cmp-separator', 'SeparatorV1');
    }

    isEmpty(): boolean{
        return SeparatorV1IsEmptyFn(this.props);
    }

    renderComponent(): JSX.Element {
        return (
            <div className={this.baseCssCls}>
                <hr className={this.baseCssCls + '__horizontal-rule'}/>
            </div>
        )
    }


}