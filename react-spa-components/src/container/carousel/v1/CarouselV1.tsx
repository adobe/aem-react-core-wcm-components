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


import {CoreContainerProperties, CoreContainerState, withAuthorPanelSwitch, withStandardBaseCssClass, CoreContainerItem} from "../../../AbstractCoreContainerComponent";
import {ComponentMapping, Container} from '@adobe/aem-react-editable-components';

import {CarouselV1IsEmptyFn} from "./CarouselV1IsEmptyFn";
import {TabsV1Properties, TabsV1State} from "../../..";


const formatFn = (value:string, args:string[]) => {
    let content = value;
    for (let i = 0; i < args.length; i++) {
        const replacement = '{' + i + '}';
        content = content.replace(replacement, args[i]);
    }
    return content;
};



export interface CarouselV1Properties extends CoreContainerProperties{
    autoplay: boolean;
    autopauseDisabled: boolean;
    accessibilityLabel:string;
    accessibility: CarouselV1AccessibilityProperties;
    delay: number;
    cqItems: { [key: string]: CoreContainerItem };
}

export interface CarouselV1AccessibilityProperties{
    play: string;
    pause: string;
    next: string;
    previous: string;
    slide: string;
    indicator: string;
    indicators: string;
}
export interface CarouselV1State extends CoreContainerState{
    activeIndex: number,
    isMouseEntered: boolean,
    autoPlay: boolean,
}

class CarouselV1Impl extends Container<CarouselV1Properties,CarouselV1State> {

    interval = 0;


    static defaultProps = {
        _allowedComponentPlaceholderListEmptyLabel: 'CarouselV1',
        isInEditor: false,
        autoplay: false,
        cqPath: '',
        cqItems: {},
        cqItemsOrder: [],
        accessibilityLabel: 'Carousel',
        accessibility: {
            play: 'Play',
            pause: 'Pause',
            next: 'Next',
            previous: 'Previous',
            slide: 'Slide {0} of {1}',
            indicator: 'Slide %{0}',
            indicators: 'Choose a slide to display'
        }
    };

    constructor(props:CarouselV1Properties) {
        super(props);

        //@ts-ignore
        this.state = {
            activeIndex: 0,
            isMouseEntered: false,
            autoPlay: this.props.autoplay && !this.props.isInEditor,
            componentMapping: this.props.componentMapping || ComponentMapping
        };

        this.handleIndicatorClick = this.handleIndicatorClick.bind(this);
        this.handleOnButtonPrev   = this.handleOnButtonPrev.bind(this);
        this.handleOnButtonNext   = this.handleOnButtonNext.bind(this);
        this.handleOnMouseEnter   = this.handleOnMouseEnter.bind(this);
        this.handleOnMouseLeave   = this.handleOnMouseLeave.bind(this);

    }

    componentDidUpdate(prevProps: Readonly<TabsV1Properties>, prevState: Readonly<TabsV1State>, snapshot?: any): void {
        if(this.props.activeIndexFromAuthorPanel !== undefined && prevProps.activeIndexFromAuthorPanel != this.props.activeIndexFromAuthorPanel){
            this.setState({ activeIndex: this.props.activeIndexFromAuthorPanel } );
            this.toggleAutoPlay(false);
        }
    }
    
    componentDidMount(){
        this.autoPlay();
    }

    componentWillUnmount(){
        if(this.interval){
            this.clearAutoPlay();
        }
    }

    handleOnMouseEnter(){
        if(!this.props.autopauseDisabled && this.props.autoplay){
            this.clearAutoPlay();
        }
    }

    handleOnMouseLeave(){
        if(!this.props.autopauseDisabled && this.props.autoplay){
            this.autoPlay();
        }
    }

    handleOnButtonPrev(){
        this.prevSlide();
    }

    handleOnButtonNext(){
        this.nextSlide();
    }


    handleIndicatorClick(index:number){

        if(this.state.activeIndex !== index){

            this.setState({
                activeIndex: index
            });
        }
    }

    autoPlay(){
        this.interval = window.setInterval(() => {
            this.autoPlayTick();
        }, this.props.delay);
    }

    autoPlayTick() {

        if (!this.state.autoPlay || this.props.cqItemsOrder.length <= 1) {
            return;
        }

        this.nextSlide();
    }

    clearAutoPlay = () => {
        window.clearInterval(this.interval);
    };

    toggleAutoPlay(toggle:boolean){
        this.setState({
            autoPlay: toggle
        })
    }

    nextSlide(){

        const activeIndex = this.__getActiveIndex();

        if(activeIndex=== (this.props.cqItemsOrder.length-1)){

            this.__setSlide(0);
        }else{
            this.__setSlide(activeIndex + 1);
        }
    }

    prevSlide(){
        const activeIndex = this.__getActiveIndex();
        if(activeIndex === 0){

            this.__setSlide(this.props.cqItemsOrder.length - 1);
        }else{
            this.__setSlide(activeIndex - 1);
        }
    }

    __getActiveIndex(){

        return this.state.activeIndex;
    }

    __setSlide(index:number){

        this.setState({
            activeIndex: index
        });
    }



    render() {

        const isEmpty = CarouselV1IsEmptyFn(this.props);
        return (
            <div className={this.props.baseCssClass}
                 role="group"
                 data-panelcontainer="carousel"
                 aria-label={this.props.accessibilityLabel}
                 aria-roledescription="carousel">
                {
                    !isEmpty && this.renderCarousel()
                }
                { this.placeholderComponent }
            </div>
        )

    }

    displayItem(item:JSX.Element, index:number){

        const isActive = index === this.state.activeIndex;
        //we display the item if active is true, or if we are in the author mode. we need to always display the item for the author mode to work properly.
        const display = !!(isActive || this.props.isInEditor);

        const cssClass = isActive ? `${this.props.baseCssClass}__item ${this.props.baseCssClass}__item--active` : `${this.props.baseCssClass}__item`;
        const ariaLabel = formatFn(this.props.accessibility.slide, [(index + 1).toString(), this.props.cqItemsOrder.length.toString()]);

        return (
            <div key={'item-' + index}
                       className={cssClass}
                       role="tabpanel"
                       aria-label={ariaLabel}
                       data-cmp-hook-carousel="item">
                {display && item}
            </div>
        )
    }

    renderCarousel(){
        return (

            <div className={this.props.baseCssClass + '__content'} onMouseEnter={()=>this.handleOnMouseEnter()} onMouseLeave={()=>this.handleOnMouseLeave()} >
                {
                    this.childComponents.map((childComponent, index) => this.displayItem(childComponent,index))
                }
                {this.renderCarouselActions()}
                {this.renderCarouselIndicators()}
            </div>
        )
    }

    renderCarouselIndicators(){
        return (
            <ol className={this.props.baseCssClass + '__indicators'}
                role="tablist"
                aria-label={this.props.accessibility.indicators}>
                {

                    this.props.cqItemsOrder.map((key, index) => {

                        const item:CoreContainerItem = this.props.cqItems[key];

                        const cssClass = (index === this.state.activeIndex) ? `${this.props.baseCssClass}__indicator ${this.props.baseCssClass}__indicator--active` : `${this.props.baseCssClass}__indicator`;
                        const ariaLabelItem = formatFn(this.props.accessibility.indicator, [(index + 1).toString()]);
                        return (
                            <li
                                key={'item-' + index}
                                onClick={()=>this.handleIndicatorClick(index)}
                                className={cssClass}
                                role="tab"
                                aria-label={ariaLabelItem}>{item["cq:panelTitle"]}</li>
                        )
                    })
                }

            </ol>
        );
    }
    renderCarouselActions(){
        return (
            <div className={this.props.baseCssClass + '__actions'}>
                <button onClick={()=>this.handleOnButtonPrev()}
                        className={`${this.props.baseCssClass}__action ${this.props.baseCssClass}__action--previous`}
                        type="button"
                        aria-label={this.props.accessibility.previous}>
                    <span className={this.props.baseCssClass + '__action-icon'}></span>
                    <span className={this.props.baseCssClass + '__action-text'}>{this.props.accessibility.previous}</span>
                </button>
                <button onClick={()=>this.handleOnButtonNext()}
                        className={`${this.props.baseCssClass}__action ${this.props.baseCssClass}__action--next`}
                        type="button"
                        aria-label={this.props.accessibility.next}>
                    <span className={this.props.baseCssClass + '__action-icon'}></span>
                    <span className={this.props.baseCssClass + '__action-text'}>{this.props.accessibility.next}</span>
                </button>
                {
                    this.props.autoplay &&
                    <>
                        <button className={`${this.props.baseCssClass}__action ${this.props.baseCssClass}__action--pause ` + (!this.state.autoPlay ? this.props.baseCssClass + '__action--disabled' : '')}
                                type="button"
                                aria-label={this.props.accessibility.pause}
                                onClick={()=>this.toggleAutoPlay(false)}>
                            <span className={this.props.baseCssClass + '__action-icon'}></span>
                            <span className={this.props.baseCssClass + '__action-text'}>{this.props.accessibility.pause}</span>
                        </button>
                        <button className={`${this.props.baseCssClass}__action ${this.props.baseCssClass}__action--play ` + (this.state.autoPlay ? this.props.baseCssClass + '__action--disabled' : '')}
                                type="button"
                                aria-label={this.props.accessibility.play}
                                onClick={()=>this.toggleAutoPlay(true)}
                        >
                            <span className={this.props.baseCssClass + '__action-icon'}></span>
                            <span className={this.props.baseCssClass + '__action-text'}>{this.props.accessibility.play}</span>
                        </button>
                    </>
                }

            </div>
        )
    }

}

export default withStandardBaseCssClass(withAuthorPanelSwitch(CarouselV1Impl), "cmp-carousel");