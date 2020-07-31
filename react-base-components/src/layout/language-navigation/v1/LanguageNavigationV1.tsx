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
import {CoreComponentState} from "../../../AbstractCoreComponent";
import NavigationV1, { NavigationV1Item, NavigationV1Model} from "../../navigation/v1/NavigationV1";
import {RoutedLink} from "../../../routing/RoutedLink";
import {isItemRouted} from "../../../routing/RoutedCoreComponent";
import {LanguageNavigationV1IsEmptyFn} from "./LanguageNavigationV1IsEmptyFn";

export interface LanguageNavigationV1Item extends NavigationV1Item {
    level: number,
    active: boolean,
    title: string,
    url: string,
    lastModified: number,
    description?: string,
    path: string,
    locale: string,
    country: string,
    language: string,
    children?: LanguageNavigationV1Item[]
}

export interface LanguageNavigationV1Model extends NavigationV1Model{
    items:LanguageNavigationV1Item[]
    accessibilityLabel?: string
}


export default class LanguageNavigationV1<Model extends LanguageNavigationV1Model, State extends CoreComponentState> extends NavigationV1<Model, State> {

    navChildren: LanguageNavigationV1Item[];

    public static defaultProps = {
        isInEditor: false,
        hidePlaceHolder: false,
        items: []
    };

    constructor(props:Model) {
        super(props);
        this.baseCssCls = 'cmp-languagenavigation';
        this.emptyPlaceHolderText = 'LanguageNavigationV1';
        this.navChildren = props.items;
    }

    isEmpty(): boolean {
        return LanguageNavigationV1IsEmptyFn(this.props);
    }

    renderLink(item:LanguageNavigationV1Item, isActive:boolean){

        if(item.level > 0){
            return (
                <RoutedLink
                    isRouted={isItemRouted(this.props, item)}
                    className={this.baseCssCls + '__item-link'}
                    to={item.url}
                    hrefLang={item.language}
                    lang={item.language}
                    rel="alternate"
                    title={item.title}>{item.title}</RoutedLink>
            )
        }else{
            return (
                <span className={ this.baseCssCls + '__item-title'} lang={item.language}>{item.title}</span>
            )
        }

    }

    getExtraNavItemCssClss(item: LanguageNavigationV1Item, index: number) {
        return `${this.baseCssCls}__item--countrycode-${item.country} ${this.baseCssCls}__item--langcode-${item.language}`;
    }

}