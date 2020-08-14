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
import {withConditionalPlaceHolder} from "../../../AbstractCoreComponent";
import ImageV2 from "../../../authoring/image/v2/ImageV2";
import TitleV2 from "../../../authoring/title/v2/TitleV2";
import {RoutedLink} from "../../../routing/RoutedLink";
import {isItemRouted, RoutedCoreComponentModel, RoutedModel} from "../../../routing/RoutedCoreComponent";
import {TeaserV1IsEmptyFn} from "./TeaserV1IsEmptyFn";

export interface TeaserV1Action extends RoutedModel{
    title: string
    URL: string
}

export interface TeaserV1Model extends RoutedCoreComponentModel{
    pretitle?: string
    title: string
    description?: string
    titleType: string
    linkURL: string
    actionsEnabled: boolean
    imageLinkHidden: boolean
    imageAlt: string
    titleLinkHidden: boolean
    actions: TeaserV1Action[]
    imagePath: string
}

class TeaserV1Impl extends Component<TeaserV1Model>{

    get image(){
        return this.props.imagePath && (
            <div className={this.props.baseCssClass + '__image'}>
                <ImageV2 isInEditor={this.props.isInEditor} src={this.props.imagePath} alt={this.props.imageAlt}/>
            </div>
        );
    }

    get pretitle(){
        return this.props.pretitle && <div className={this.props.baseCssClass + '__pretitle'}>{this.props.pretitle}</div>

    }

    get title(){
        return this.props.title && (
            <TitleV2 baseCssClass={this.props.baseCssClass + '__title'}
                     nested={true}
                     type={this.props.titleType}
                     isInEditor={this.props.isInEditor}
                     linkDisabled={false}
                     text={this.props.title}
                     linkURL={this.props.linkURL}/>
            )
    }

    get description(){
        const text:string = this.props.description as string;
        return this.props.description && (
           <div className={this.props.baseCssClass + '__description'} dangerouslySetInnerHTML={{__html: text}}></div>
        )
    }

    generateLink(action:TeaserV1Action, index:number){
        return <RoutedLink key={"link-" + index} isRouted={isItemRouted(this.props, action)} className={this.props.baseCssClass + '__action-link'} to={action.URL}>${action.title}</RoutedLink>
    }

    get actions(){
        const hasActions:boolean = this.props.actions.length > 0;
        return this.props.actionsEnabled && hasActions && (
            <div className={this.props.baseCssClass + '__action-container'}>
                {
                    this.props.actions.map((action, index) => {
                        return this.generateLink(action,index)
                    })
                }
            </div>
        )
    }

    render(): JSX.Element {

        const cssClass = this.props.baseCssClass || '' + (this.props.isInEditor) ? ' cq-dd-image' : '';
        return (
            <div className={cssClass}>
                {this.image}
                <div className={this.props.baseCssClass + '__content'}>
                    {this.pretitle}
                    {this.title}
                    {this.description}
                    {this.actions}
                </div>
            </div>
        )
    }

}



const TeaserV1 = (props:TeaserV1Model) => {
    const Wrapped = withConditionalPlaceHolder(TeaserV1Impl, TeaserV1IsEmptyFn, "cmp-teaser", "Teaser V1")
    return <Wrapped {...props}/>
};

export default TeaserV1;