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

export interface PlaceHolderModel {
    componentTitle?: string
    classAppend?: string
    emptyTextAppend?: string
}
const DEFAULT_EMPTY_TEXT_LABEL = 'Please configure the component';

export const EditorPlaceHolder = (props:PlaceHolderModel) => {

    const part1: string = (props.componentTitle != null && props.componentTitle.length > 0) ?  props.componentTitle +  ' - ' : '';
    const part2: string = (props.emptyTextAppend != null) ?  props.emptyTextAppend : DEFAULT_EMPTY_TEXT_LABEL;
    const emptyText = part1 + part2;

    return (
        <div
            className={'cq-placeholder' + (props.classAppend != null? ' ' + props.classAppend : '')}>
            {emptyText}
        </div>
    )
};