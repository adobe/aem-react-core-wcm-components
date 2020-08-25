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
import React, {MouseEvent} from 'react';
import {CoreComponentModel, withConditionalPlaceHolder, withStandardBaseCssClass} from "../../../AbstractCoreComponent";
import {DownloadV1IsEmptyFn} from "./DownloadV1IsEmptyFn";


export interface DownloadV1Model extends CoreComponentModel{
    url?: string
    title: string
    titleType: string
    description?: string
    actionText?: string
    filename?: string
    displaySize: boolean
    displayFilename: boolean
    displayFormat: boolean
    format?: string
    size?: string
    extension?: string
    handleOnClick?(event: MouseEvent): void
}

export const getDownloadV1Href = (props:DownloadV1Model) => (!!props.url && props.url.length > 0) ? props.url : '#';

export const DownloadV1HeadingContent = (props:DownloadV1Model) => {

    const handleOnClick = (event:MouseEvent) => {
        props.handleOnClick && props.handleOnClick(event);
    };

    return (
        <>
            {!!props.url || !!props.handleOnClick && (
                <a onClick={handleOnClick}
                   className={props.baseCssClass + '__title-link'}
                   href={getDownloadV1Href(props)}>
                    {props.title}
                </a>
            )}
            {!props.url && ( <> {props.title} </>)}
        </>
    )
};


export const DownloadV1HeadingElement = (props:DownloadV1Model) => {
    
    const {titleType = 'h3'} = props;
    
    return (
        React.createElement(
            `${titleType}`,
            {
                className: props.baseCssClass + '__title"',
            },
            <DownloadV1HeadingContent {...props}/>
        )
    )
};

export const renderProperty = ( label: string, content: string|undefined, cssClassModifier: string,baseCssClass?: string) => {
    const cssClass = `${baseCssClass}__property ${baseCssClass}__property--' + ${cssClassModifier}`;
    return (
        <div className={cssClass}>
            <dt className={baseCssClass + '__property-label'}>{label}</dt>
            <dd className={baseCssClass + '__property-content'}>{content}</dd>
        </div>
    );
};

export const DownloadV1Details = (props:DownloadV1Model) => {
    const { displayFilename = false,displaySize = false,  displayFormat = false} = props;

    return (
        <dl className={props.baseCssClass + '__properties'}>
            {displayFilename && renderProperty('Filename', props.filename, 'filename',props.baseCssClass)}
            {displaySize     && renderProperty('Size',     props.size,     'size',props.baseCssClass)}
            {displayFormat   && renderProperty('Format',   props.format,   'format',props.baseCssClass)}
        </dl>
    )
};

export const DownloadV1Description = (props:DownloadV1Model) => {
    const html:string = String(props.description) || '';
    return <div className={props.baseCssClass + '__description'} dangerouslySetInnerHTML={{__html: html}}></div>
};

export const DownloadV1Link = (props:DownloadV1Model) => {

    const handleOnClick = (event:MouseEvent) => {
        props.handleOnClick && props.handleOnClick(event);
    };

    return (
        <a onClick={handleOnClick} className={props.baseCssClass + '__action'} href={getDownloadV1Href(props)}>
            <span className={props.baseCssClass + '__action-text'}>{props.actionText}</span>
        </a>
    )
};

export const DownloadV1Impl = (props:DownloadV1Model) => {

    const { displayFilename = false ,displaySize = false,  displayFormat = false} = props;
    
    const cssClass = props.baseCssClass + ( props.isInEditor  ? ' cq-dd-file' : '');
    const displayDownloadDetails = displayFilename || displaySize || displayFormat;
    return (
        <div className={cssClass}>
            {!!props.title && <DownloadV1HeadingElement {...props}/>}
            {!!props.description && <DownloadV1Description {...props}/>}
            {displayDownloadDetails && <DownloadV1Details {...props}/>}
            <DownloadV1Link {...props}/>
        </div>
    );

};



const DownloadV1 = (props:DownloadV1Model) => {

    const Wrapped = withConditionalPlaceHolder(withStandardBaseCssClass(DownloadV1Impl, "cmp-download"), DownloadV1IsEmptyFn, "Download V1");
    return <Wrapped {...props}/>
};

export default DownloadV1;