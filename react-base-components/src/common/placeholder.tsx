/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */
import React from 'react';

export interface PlaceHolderModel {
    componentTitle?: string
    classAppend?: string
    emptyTextAppend?: string
}

const DEFAULT_EMPTY_TEXT_LABEL = 'Please configure the component';

export const EditorPlaceHolder = (props: PlaceHolderModel): JSX.Element => {

    const part1: string = (props.componentTitle && props.componentTitle.length > 0) ? props.componentTitle + ' - ' : '';
    const part2: string = props.emptyTextAppend ? props.emptyTextAppend : DEFAULT_EMPTY_TEXT_LABEL;
    const emptyText = part1 + part2;

    return (
      <div
            className={'cq-placeholder' + (props.classAppend ? ' ' + props.classAppend : '')}>
        {emptyText}
      </div>
    );
};
