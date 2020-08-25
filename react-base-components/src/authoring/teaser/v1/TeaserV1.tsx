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
import {withConditionalPlaceHolder, withStandardBaseCssClass} from "../../../AbstractCoreComponent";
import ImageV1 from "../../../authoring/image/v2/ImageV2";
import TitleV1 from "../../../authoring/title/v2/TitleV2";
import {RoutedLink} from "../../../routing/RoutedLink";
import {RoutedCoreComponentModel, RoutedModel} from "../../../routing/RoutedCoreComponent";
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

const generateLink = (props:TeaserV1Model, action:TeaserV1Action, index:number) => {
    return <RoutedLink key={"link-" + index} isRouted={props.routed} className={props.baseCssClass + '__action-link'} to={action.URL}>${action.title}</RoutedLink>
}

const TeaserV1Image = (props:TeaserV1Model) => {
    return (
        <div className={props.baseCssClass + '__image'}>
            <ImageV1 isInEditor={props.isInEditor} src={props.imagePath} alt={props.imageAlt}/>
        </div>
    );
};

const TeaserV1PreTitle = (props:TeaserV1Model) => <div className={props.baseCssClass + '__pretitle'}>{props.pretitle}</div>;

const TeaserV1Title = (props:TeaserV1Model) => 
        <TitleV1 baseCssClass={props.baseCssClass + '__title'}
                 nested={true}
                 type={props.titleType}
                 isInEditor={props.isInEditor}
                 linkDisabled={false}
                 text={props.title}
                 linkURL={props.linkURL}/>;


const TeaserV1Description = (props:TeaserV1Model) => {
    const text:string = props.description as string;
    return <div className={props.baseCssClass + '__description'} dangerouslySetInnerHTML={{__html: text}}></div>;
};

const TeaserV1Actions = (props:TeaserV1Model) => {
    return (
        <div className={props.baseCssClass + '__action-container'}>
            {
                props.actions.map((action, index) => {
                    return generateLink(props,action,index)
                })
            }
        </div>
    )
};

const TeaserV1Impl = (props:TeaserV1Model) => {
    const cssClass = props.baseCssClass || '' + (props.isInEditor) ? ' cq-dd-image' : '';
    const showActions:boolean = ( props.actions.length > 0 ) && props.actionsEnabled;
    return (
        <div className={cssClass}>
            {props.imagePath && <TeaserV1Image {...props}/>}
            <div className={props.baseCssClass + '__content'}>
                {props.pretitle && <TeaserV1PreTitle {...props}/>}
                {props.title && <TeaserV1Title {...props}/>}
                {props.description && <TeaserV1Description {...props}/>}
                {showActions && <TeaserV1Actions {...props}/>}
            </div>
        </div>
    )
};


const TeaserV1 = (props:TeaserV1Model) => {
    const Wrapped = withConditionalPlaceHolder(withStandardBaseCssClass(TeaserV1Impl, "cmp-teaser"), TeaserV1IsEmptyFn, "Teaser V1")
    return <Wrapped {...props}/>
};

export default TeaserV1;