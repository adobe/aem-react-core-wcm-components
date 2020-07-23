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

import {AbstractCoreContainerComponent} from "../../../AbstractCoreContainerComponent";
import {ComponentMapping} from '@adobe/cq-react-editable-components';

export function CarouselV1IsEmptyFn(props){
    return props.cqItems == null || props.cqItems.length === 0;
}

const formatFn = (value, args) => {
    var content = value;
    for (var i = 0; i < args.length; i++) {
        var replacement = '{' + i + '}';
        content = content.replace(replacement, args[i]);
    }
    return content;
};

export class CarouselV1 extends AbstractCoreContainerComponent {

    interval;


    static defaultProps = {
        isInEditor: false,
        autoplay: false,
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

    constructor(props) {
        super(props,"cmp-carousel");

        this.state = {
            activeIndex: 0,
            isMouseEntered: false,
            autoPlay: this.props.autoplay,
            componentMapping: this.props.componentMapping || ComponentMapping
        };

        this.handleIndicatorClick = this.handleIndicatorClick.bind(this);
        this.handleOnButtonPrev   = this.handleOnButtonPrev.bind(this);
        this.handleOnButtonNext   = this.handleOnButtonNext.bind(this);
        this.handleOnMouseEnter   = this.handleOnMouseEnter.bind(this);
        this.handleOnMouseLeave   = this.handleOnMouseLeave.bind(this);

        if( this.props.autoplay && !this.props.isInEditor){
            this.autoPlay();
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


    handleIndicatorClick(index){

        if(this.state.activeIndex !== index){

            this.setState({
                activeIndex: index
            });
        }
    }

    autoPlay(){
        this.interval = setInterval(() => {
            this.autoPlayTick();
        }, this.props.delay);
    }

    autoPlayTick() {

        if (!this.state.autoPlay || this.props.cqItemsOrder.length <= 1) {
            return;
        }

        this.nextSlide();
    };

    clearAutoPlay = () => {
        clearInterval(this.interval);
    };

    toggleAutoPlay(toggle){
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

    __setSlide(index){

        this.setState({
            activeIndex: index
        });
    }



    render() {

        const isEmpty = CarouselV1IsEmptyFn(this.props);
        return (
            <div className={this.baseCssCls}
                 role="group"
                 aria-label={this.props.accessibilityLabel}
                 aria-roledescription="carousel">
                {
                    !isEmpty && this.renderCarousel()
                }
                { this.placeholderComponent }
            </div>
        )

    }

    displayItem(item, index){

        const isActive = index === this.state.activeIndex;
        //we display the item if active is true, or if we are in the author mode. we need to always display the item for the author mode to work properly.
        const display = !!(isActive || this.props.isInEditor);

        const cssClass = isActive ? `${this.baseCssCls}__item ${this.baseCssCls}__item--active` : `${this.baseCssCls}__item`;
        const ariaLabel = formatFn(this.props.accessibility.slide, [(index + 1), this.props.cqItemsOrder.length]);

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

            <div className={this.baseCssCls + '__content'} onMouseEnter={()=>this.handleOnMouseEnter()} onMouseLeave={()=>this.handleOnMouseLeave()} >
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
            <ol className={this.baseCssCls + '__indicators'}
                role="tablist"
                aria-label={this.props.accessibility.indicators}>
                {

                    this.props.cqItemsOrder.map((key, index) => {

                        const item = this.props.cqItems[key];

                        const cssClass = (index === this.state.activeIndex) ? `${this.baseCssCls}__indicator ${this.baseCssCls}__indicator--active` : `${this.baseCssCls}__indicator`;
                        const ariaLabelItem = formatFn(this.props.accessibility.indicator, [(index + 1)]);
                        return (
                            <li
                                key={'item-' + index}
                                onClick={()=>this.handleIndicatorClick(index)}
                                className={cssClass}
                                role="tab"
                                aria-label={ariaLabelItem}>{item.title}</li>
                        )
                    })
                }

            </ol>
        );
    }
    renderCarouselActions(){
        return (
            <div className={this.baseCssCls + '__actions'}>
                <button onClick={()=>this.handleOnButtonPrev()}
                        className={`${this.baseCssCls}__action ${this.baseCssCls}__action--previous`}
                        type="button"
                        aria-label={this.props.accessibility.previous}>
                    <span className={this.baseCssCls + '__action-icon'}></span>
                    <span className={this.baseCssCls + '__action-text'}>{this.props.accessibility.previous}</span>
                </button>
                <button onClick={()=>this.handleOnButtonNext()}
                        className={`${this.baseCssCls}__action ${this.baseCssCls}__action--next`}
                        type="button"
                        aria-label={this.props.accessibility.next}>
                    <span className={this.baseCssCls + '__action-icon'}></span>
                    <span className={this.baseCssCls + '__action-text'}>{this.props.accessibility.next}</span>
                </button>
                {
                    this.props.autoplay &&
                    <>
                        <button className={`${this.baseCssCls}__action ${this.baseCssCls}__action--pause ` + (!this.state.autoPlay ? this.baseCssCls + '__action--disabled' : '')}
                                type="button"
                                aria-label={this.props.accessibility.pause}
                                onClick={()=>this.toggleAutoPlay(false)}>
                            <span className={this.baseCssCls + '__action-icon'}></span>
                            <span className={this.baseCssCls + '__action-text'}>{this.props.accessibility.pause}</span>
                        </button>
                        <button className={`${this.baseCssCls}__action ${this.baseCssCls}__action--play ` + (this.state.autoPlay ? this.baseCssCls + '__action--disabled' : '')}
                                type="button"
                                aria-label={this.props.accessibility.play}
                                onClick={()=>this.toggleAutoPlay(true)}
                        >
                            <span className={this.baseCssCls + '__action-icon'}></span>
                            <span className={this.baseCssCls + '__action-text'}>{this.props.accessibility.play}</span>
                        </button>
                    </>
                }

            </div>
        )
    }

}