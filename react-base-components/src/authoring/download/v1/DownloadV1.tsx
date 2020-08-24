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


class DownloadV1Impl extends React.Component<DownloadV1Model> {

    displayFileName:boolean;
    displaySize: boolean;
    displayFormat: boolean;

    public static defaultProps = {
        titleType: 'h3',
        displaySize: false,
        displayFormat: false,
        displayFilename: false
    };

    constructor(props:DownloadV1Model) {
        super(props);
        this.handleOnClick = this.handleOnClick.bind(this);
        this.displayFileName = props.displayFilename && !!props.filename;
        this.displaySize = props.displaySize && !!props.size;
        this.displayFormat = props.displayFormat && !!props.format;
        this.handleOnClick = this.handleOnClick.bind(this);
    }

    handleOnClick(event:MouseEvent){
        if(this.props.handleOnClick){
            this.props.handleOnClick(event);
        }
    }


    renderHeadingContent(){
        return (
            <>
                {!!this.props.url || !!this.props.handleOnClick && (
                    <a onClick={this.handleOnClick}
                       className={this.props.baseCssClass + '__title-link'}
                       href={this.getHref()}>
                        {this.props.title}
                    </a>
                )}
                {!this.props.url && ( <> {this.props.title} </>)}
            </>
        )
    }

    renderHeading(){
        return (
            React.createElement(
                `${this.props.titleType}`,
                {
                    className: this.props.baseCssClass + '__title"',
                },
                this.renderHeadingContent()
            )
        )
    }

    renderDetails(){
        return (
            <dl className={this.props.baseCssClass + '__properties'}>
                {this.displayFileName && this.renderProperty('Filename', this.props.filename, 'filename')}
                {this.displaySize     && this.renderProperty('Size',     this.props.size,     'size')}
                {this.displayFormat   && this.renderProperty('Format',   this.props.format,   'format')}
            </dl>
        )
    }
    render(){

        const cssClass = this.props.baseCssClass + ( this.props.isInEditor  ? ' cq-dd-file' : '');
        return (
            <div className={cssClass}>
                {!!this.props.title && this.renderHeading()}
                {!!this.props.description && this.renderDescription()}
                {(this.displayFileName || this.displaySize || this.displayFormat) && this.renderDetails()}
                {this.renderDownloadLink()}

            </div>
        )
    }

    renderDescription() {
        const html:string = String(this.props.description) || '';
        return (
            <div className={this.props.baseCssClass + '__description'} dangerouslySetInnerHTML={{__html: html}}></div>
        )
    }

    renderDownloadLink() {
        return (
            <a onClick={this.handleOnClick} className={this.props.baseCssClass + '__action'} href={this.getHref()}>
                <span className={this.props.baseCssClass + '__action-text'}>{this.props.actionText}</span>
            </a>
        )
    }

    renderProperty(label: string, content: string|undefined, cssClassModifier: string) {
        const cssClass = `${this.props.baseCssClass}__property ${this.props.baseCssClass}__property--' + ${cssClassModifier}`;
        return (
            <div className={cssClass}>
                <dt className={this.props.baseCssClass + '__property-label'}>{label}</dt>
                <dd className={this.props.baseCssClass + '__property-content'}>{content}</dd>
            </div>
        );
    }

    getHref(){
        return (!!this.props.url && this.props.url.length > 0) ? this.props.url : '#';
    }
}



const DownloadV1 = (props:DownloadV1Model) => {

    const Wrapped = withConditionalPlaceHolder(withStandardBaseCssClass(DownloadV1Impl, "cmp-download"), DownloadV1IsEmptyFn, "Download V1");
    return <Wrapped {...props}/>
};

export default DownloadV1;