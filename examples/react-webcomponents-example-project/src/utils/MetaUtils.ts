/*
 * ADOBE CONFIDENTIAL
 *
 * Copyright 2020 Adobe Systems Incorporated
 * All Rights Reserved.
 *
 * NOTICE:  All information contained herein is, and remains
 * the property of Adobe Systems Incorporated and its suppliers,
 * if any.  The intellectual and technical concepts contained
 * herein are proprietary to Adobe Systems Incorporated and its
 * suppliers and may be covered by U.S. and Foreign Patents,
 * patents in process, and are protected by trade secret or copyright law.
 * Dissemination of this information or reproduction of this material
 * is strictly forbidden unless prior written permission is obtained
 * from Adobe Systems Incorporated.
 */
export default class MetaUtils {

    /**
     * Returns if the code executes in the browser context or not by checking for the
     * existance of the window object
     *
     * @returns {Boolean} the result of the check of the existance of the window object
     */
    static isBrowser():boolean {
        try {
            return typeof window !== 'undefined';
        } catch (e) {
            return false;
        }
    }

    static getWcmMode():string {
        return MetaUtils.getMetaPropertyValue('cq:wcmmode');
    }

    static isInEditor():boolean{
        return this.getWcmMode() === 'edit';
    }

    /**
     * Returns the value of the meta property with the given key
     *
     * @param {string} propertyName  - name of the meta property
     * @return {string|undefined}
     */
    static getMetaPropertyValue(propertyName:string):any {
        if (this.isBrowser()) {
            const meta = document.head.querySelector('meta[property="' + propertyName + '"]');
            // @ts-ignore
            return meta && meta.content;
        }
    }

}