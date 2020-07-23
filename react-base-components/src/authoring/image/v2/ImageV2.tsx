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

import React from 'react';
import {AbstractCoreComponent, CoreComponentState} from "../../../AbstractCoreComponent";
import {RoutedCoreComponentModel} from "../../../routing/RoutedCoreComponent";
import {RoutedLink} from "../../../routing/RoutedLink";

export interface TempImageComponentModel extends RoutedCoreComponentModel{
    src: string
    alt: string
    displayPopupTitle?: boolean
    title?: string
    link?: string
}

export function ImageV2IsEmptyFn(props:TempImageComponentModel) {
    return (!props.src) || props.src.length === 0;
}

export class ImageV2<Model extends TempImageComponentModel,State extends CoreComponentState> extends AbstractCoreComponent<Model,State> {

    public static defaultProps = {
        hidePlaceHolder: false,
        isInEditor: false
    };


    constructor(props: Model) {
        super(props, 'cmp-image', 'ImageV2');
    }

    generateLink(){
        return (
            <RoutedLink className={this.baseCssCls + '__link'} isRouted={this.props.routed} to={this.props.link}>
                {this.getInnerContents()}
            </RoutedLink>
        )
    }

    getInnerContents(){
        return (
            <>
                <img src={this.props.src}
                     className={this.baseCssCls + '__image'}
                     alt={this.props.alt}/>
                {
                    !!(this.props.title) && <span className={this.baseCssCls + '__title'} itemProp="caption">{this.props.title}</span>
                }
                {
                    this.props.displayPopupTitle && (!!this.props.title) && <meta itemProp="caption" content={this.props.title}/>
                }
            </>
        );
    }

    getContents(){
        if( this.props.link && this.props.link.trim().length > 0){
            return this.generateLink();
        }
        return this.getInnerContents();
    }

    isEmpty(): boolean {
        return ImageV2IsEmptyFn(this.props);
    }

    renderComponent(): JSX.Element {
        const cssClassName = (this.props.isInEditor) ? this.baseCssCls + ' cq-dd-image' : this.baseCssCls;

        return (
            <div className={cssClassName}>
                {this.getContents()}
            </div>
        )
    }

}
