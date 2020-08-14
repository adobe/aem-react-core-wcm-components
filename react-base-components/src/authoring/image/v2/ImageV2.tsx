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

import React, {Component} from 'react';
import {withConditionalPlaceHolder} from "../../../AbstractCoreComponent";
import {RoutedCoreComponentModel} from "../../../routing/RoutedCoreComponent";
import {RoutedLink} from "../../../routing/RoutedLink";
import {ImageV2IsEmptyFn} from "./ImageV2IsEmptyFn";


export interface ImageV2Model extends RoutedCoreComponentModel{
    src: string
    alt: string
    displayPopupTitle?: boolean
    title?: string
    link?: string
}


class ImageV2Impl extends Component<ImageV2Model> {

    public static defaultProps = {
        hidePlaceHolder: false,
        isInEditor: false
    };

    generateLink(){
        return (
            <RoutedLink className={this.props.baseCssClass + '__link'} isRouted={this.props.routed} to={this.props.link}>
                {this.getInnerContents()}
            </RoutedLink>
        )
    }

    getInnerContents(){
        return (
            <>
                <img src={this.props.src}
                     className={this.props.baseCssClass + '__image'}
                     alt={this.props.alt}/>
                {
                    !!(this.props.title) && <span className={this.props.baseCssClass + '__title'} itemProp="caption">{this.props.title}</span>
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

    render(): JSX.Element {
        const cssClassName = (this.props.isInEditor) ? this.props.baseCssClass + ' cq-dd-image' : this.props.baseCssClass;

        return (
            <div className={cssClassName}>
                {this.getContents()}
            </div>
        )
    }

}

const ImageV2 = (props:ImageV2Model) => {

    const Wrapped = withConditionalPlaceHolder(ImageV2Impl, ImageV2IsEmptyFn, "cmp-image", "Image V2");
    return <Wrapped {...props}/>
};

export default ImageV2;