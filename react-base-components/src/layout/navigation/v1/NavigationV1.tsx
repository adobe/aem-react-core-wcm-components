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
import {AbstractCoreComponent, CoreComponentModel, CoreComponentState} from "../../../AbstractCoreComponent";
import {isItemRouted, RoutedCoreComponentModel, RoutedModel} from "../../../routing/RoutedCoreComponent";
import {RoutedLink} from "../../../routing/RoutedLink";



export interface NavigationV1Item extends RoutedModel{
    level: number,
    active: boolean,
    title: string,
    url: string,
    lastModified: number,
    description?: string,
    path: string,
    children?: NavigationV1Item[]
}

export interface NavigationV1Model extends RoutedCoreComponentModel{
    items:NavigationV1Item[]
    accessibilityLabel?: string
}

export function NavigationV1IsEmptyFn(props:NavigationV1Model): boolean{
    return props.items == null || props.items.length === 0;
}

export default class NavigationV1<Model extends NavigationV1Model, State extends CoreComponentState> extends AbstractCoreComponent<Model, State> {

    public static defaultProps = {
        isInEditor: false,
        hidePlaceHolder: false,
        items: []
    };

    constructor(props:Model) {
        super(props, "cmp-navigation", 'NavigationV1');
    }

    isEmpty(): boolean{
        return NavigationV1IsEmptyFn(this.props);
    }

    determineIsActive(item:NavigationV1Item){
        return item.active;
    }

    renderComponent(){

        const selfClone:NavigationV1Item = {
            active: false,
            lastModified: 0,
            level: 0,
            path: "",
            title: "",
            url: "",
            children: this.props.items
        };

        return (
            <nav className={this.baseCssCls}
                 role="navigation"
                 itemScope itemType="http://schema.org/SiteNavigationElement"
                 aria-label={this.props.accessibilityLabel}>
                {this.renderGroup(selfClone)}
            </nav>
        )
    }

    renderGroup(item:NavigationV1Item){
        return (
            <>
                {!!item.children && item.children.length > 0 &&  (
                    <ul className={this.baseCssCls + '__group'}>
                        {item.children.map(
                            (item,index) => { return this.renderNavItem(item,index)}
                        )}
                    </ul>
                )}
           </>
        )
    }

    renderLink(item:NavigationV1Item, isActive:boolean){
        return (
            <RoutedLink isRouted={isItemRouted(this.props,item)} to={item.url} title={item.title} aria-current={isActive && 'page'}
               className={this.baseCssCls + '__item-link'}>{item.title}</RoutedLink>
        )
    }
    renderNavItem(item: NavigationV1Item, index: number) {
        const isActive = this.determineIsActive(item);
        const cssClass = this.baseCssCls + '__item ' +
                         this.baseCssCls + '__item--level-' + item.level + ' '
                         + ' ' + this.getExtraNavItemCssClss(item, index)
                         + (isActive ? ' ' + this.baseCssCls + '__item--active' : '');
        return (
            <li key={this.baseCssCls + '__item-' + index} className={cssClass}>
                    { this.renderLink(item, isActive) }
                    {
                        !!item.children && item.children.length > 0 && this.renderGroup(item)
                    }
            </li>
        )
    }

    getExtraNavItemCssClss(item: NavigationV1Item, index: number) {
        return "";
    }
}