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

import * as React from 'react';
import  {TabsV1Properties} from "./TabsV1";

import ComponentMapping, {dummyItems} from "../../../TestComponentMapping";
import {TabsV1IsEmptyFn} from "./TabsV1IsEmptyFn";
import { AllowedComponents, AllowedComponent } from '@adobe/aem-react-editable-components';

const GRID_CLASS_NAMES = 'grid-class-names';
const COLUMN_1_CLASS_NAMES = 'column-class-names-1';
const COLUMN_2_CLASS_NAMES = 'column-class-names-2';


const allowedComponent:AllowedComponent = {
    path: "/apps/core/components/dummy",
    title: "Some Component"
};

const allowedComponents:AllowedComponents = {
    applicable: true,
    components: [allowedComponent]
};
const filledProps:TabsV1Properties = {
    accessibilityLabel: 'Tabs',
    title: "The Tabs",
    cqItems: dummyItems,
    cqItemsOrder: ["test", "test2"],
    isInEditor: false,
    cqPath: "/content/accordion-path",
    allowedComponents: allowedComponents,
    componentMapping: ComponentMapping
};

const emptyProps1:TabsV1Properties = {
    accessibilityLabel: 'Tabs',
    title: "The Tabs",
    cqItems: {},
    cqItemsOrder: [],
    isInEditor: false,
    cqPath: "/content/accordion-path",
    allowedComponents: allowedComponents,
    componentMapping: ComponentMapping
};

const emptyProps2:TabsV1Properties = {
    accessibilityLabel: 'Tabs',
    title: "The Tabs",
    cqItems: {},
    //@ts-ignore
    cqItemsOrder: null,
    isInEditor: false,
    cqPath: "/content/accordion-path",
    allowedComponents: allowedComponents,
    componentMapping: ComponentMapping
};


it('Is not empty', () => {
    const isEmpty = TabsV1IsEmptyFn(filledProps);

    expect(isEmpty).toEqual(false);
});

it('Is empty 1', () => {
    const isEmpty = TabsV1IsEmptyFn(emptyProps1);

    expect(isEmpty).toEqual(true);
});


it('Is empty 2', () => {
    const isEmpty = TabsV1IsEmptyFn(emptyProps2);

    expect(isEmpty).toEqual(true);
});