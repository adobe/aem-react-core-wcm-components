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
import { CoreComponentModel, withConditionalPlaceHolder, withStandardBaseCssClass } from '../../../AbstractCoreComponent';
import { TextV2IsEmptyFn } from './TextV2IsEmptyFn';

export interface TextV2Model extends CoreComponentModel {
    text?: string;
    richText?: boolean
    cqPath?: string
    id?: string
}

export const TextV2RichText = (props: TextV2Model): JSX.Element => {
    const text: string = props.text as string;
    const id = (props.id) ? props.id : (props.cqPath ? props.cqPath.substr(props.cqPath.lastIndexOf('/') + 1) : '');

    return <div className={props.baseCssClass} id={id} data-rte-editelement dangerouslySetInnerHTML={{ __html: text }}/>;
};

export const TextV2PlainText = (props: TextV2Model): JSX.Element => {
    return <div className={props.baseCssClass}><p className="cmp-text__paragraph">{props.text}</p></div>;
};

const TextV2Impl = (props: TextV2Model): JSX.Element => {
    const { richText = false } = props;

    return (richText) ? <TextV2RichText {...props}/> : <TextV2PlainText {...props}/>;
};

const TextV2 = (props: TextV2Model): JSX.Element => {
    const Wrapped = withConditionalPlaceHolder(withStandardBaseCssClass(TextV2Impl, 'cmp-text'), TextV2IsEmptyFn, 'Text V2');

    return <Wrapped {...props}/>;
};

export default TextV2;
