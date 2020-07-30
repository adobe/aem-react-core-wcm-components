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
import {RoutedCoreComponentModel, RoutedModel, isItemRouted} from "../../../routing/RoutedCoreComponent";
import {RoutedLink} from "../../../routing/RoutedLink";

export interface ListV2Item extends RoutedModel{
    url?:string
    lastModified?:number
    lastModifiedFormatted?:string
    description?:string
    path:string
    title:string
}


export interface ListV2Model extends RoutedCoreComponentModel{
    items:ListV2Item[]
    dateFormatString: string
    showDescription: boolean
    showModificationDate: boolean
    linkItems: boolean
}

export function ListV2IsEmptyFn(props:ListV2Model): boolean{
    return props.items == null || props.items.length === 0;
}

export default class ListV2<Model extends ListV2Model, State extends CoreComponentState> extends AbstractCoreComponent<Model, State> {

    public static defaultProps = {
        isInEditor: false,
        hidePlaceHolder: false
    };

    constructor(props: Model) {
        super(props, 'cmp-list', 'ListV2');
    }

    isEmpty(): boolean{
        return ListV2IsEmptyFn(this.props);
    }

    renderListItemContent(item:ListV2Item, index:number){

        return (
            <>
                <span className={this.baseCssCls + '__item-title'}>{item.title}</span>
                {this.props.showModificationDate && this.renderItemModificationDate(item,index)}
            </>
        )
    }

    renderItemModificationDate(item:ListV2Item, index:number){

        const dateStringToDisplay = item.lastModifiedFormatted ? item.lastModifiedFormatted : "";
        return (
            <span className={this.baseCssCls + '__item-date'}>{dateStringToDisplay}</span>
        )
    }

    renderListAnchor(item:ListV2Item, index:number){

        return (
            <RoutedLink isRouted={isItemRouted(this.props, item)} className={this.baseCssCls + '__item-link'} to={item.url}>
                {this.renderListItemContent(item,index)}
            </RoutedLink>
        )
    }

    renderListItemDescription(item: ListV2Item, index: number) {
        return (
            <span className={this.baseCssCls + '__item-description'}>${item.description}</span>
        )
    }

    renderListItem(item:ListV2Item, index:number){
        return (
            <li className={this.baseCssCls + '__item'} key={"cmp-list-" + index}>
                <article>
                    {this.props.linkItems && !!item.url && this.renderListAnchor(item,index)}
                    {!this.props.linkItems && this.renderListItemContent(item,index)}
                    {this.props.showDescription && this.renderListItemDescription(item,index)}
                </article>
            </li>
        )
    }

    renderComponent(){

        return (
            <ul className={this.baseCssCls}>
                {this.props.items.map((item, index) => this.renderListItem(item, index))}
            </ul>
        )
    }


}