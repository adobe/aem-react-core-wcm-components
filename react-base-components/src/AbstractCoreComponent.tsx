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
import {EditorPlaceHolder} from "./common/placeholder";

export interface CoreComponentModel {
    hidePlaceHolder: boolean
    isInEditor:boolean
}

export interface CoreComponentState {

}


/**
 * AbstractCoreComponent - provides abstraction and helper methods to show a placeholder if the component is empty and author mode is on.
 */
export abstract class AbstractCoreComponent<Model extends CoreComponentModel, State extends CoreComponentState> extends React.Component<Model,State> {

    public static defaultProps = {
        hidePlaceHolder: false,
        isInEditor: false
    };

    baseCssCls: string;
    emptyPlaceHolderText: string;

    /**
     * Base Constructor
     * @param props component properties
     * @param baseCssCls the base BEM css class to be used for the component
     * @param emptyPlaceHolderText empty placeholder label for when the component needs to be configured in author mode
     */
    protected constructor(props:Model,baseCssCls:string,emptyPlaceHolderText:string) {
        super(props);
        this.baseCssCls = baseCssCls;
        this.emptyPlaceHolderText = emptyPlaceHolderText;
    }

    /**
     * Method that needs to be overloaded, to determine whether the component should be treated as 'empty'
     */
    protected abstract isEmpty():boolean;

    /**
     * Render method that get's called if the component is not considered empty
     */
    protected abstract renderComponent():JSX.Element;

    private __hidePlaceHolder():boolean{
        return this.props.hidePlaceHolder;
    }

    private __renderPlaceHolder(title?:string, emptyText?:string):JSX.Element{
        return(
            <EditorPlaceHolder
                emptyTextAppend={emptyText}
                componentTitle={title}
            />
        )
    }

    render(){
        const isEmpty:boolean = this.isEmpty();

        return (
            <>
                { !isEmpty &&
                    this.renderComponent()
                }
                {
                    (isEmpty && this.props.isInEditor && !this.__hidePlaceHolder()) && this.__renderPlaceHolder(this.emptyPlaceHolderText)
                }
            </>
        )
    }

}
