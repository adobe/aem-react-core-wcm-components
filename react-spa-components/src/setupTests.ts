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

import {configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

const callbacks: { (message: any): void; } [] = [];

jest.useFakeTimers();

//@ts-ignore
window.Granite = {
    author: {
        trigger: (path:string, index:number) => {
            callbacks.forEach((callback) => callback({
                data: {
                    id: path,
                    operation: 'navigate',
                    index: index
                }
            }))
        },

        MessageChannel : function() {

            return {
                subscribeRequestMessage: (topic:string, callback:(message:any)=>void) => {
                    callbacks.push(callback)
                },
                unsubscribeRequestMessage: (topic:string, callback:(message:any)=>void) => {
                    const index:number = callbacks.indexOf(callback);
                    callbacks.splice(index, 1);
                }
            }

        }

    }
};

configure({ adapter: new Adapter()});

