(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["DownloadV1"],{

/***/ "../../react-base-components/dist/authoring/download/v1/DownloadV1.js":
/*!******************************************************************************************************************************!*\
  !*** /Users/raaijmak/workspace/aem-react-core-wcm-components/react-base-components/dist/authoring/download/v1/DownloadV1.js ***!
  \******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

(function webpackUniversalModuleDefinition(root, factory) {
  if (true) module.exports = factory();else {}
})(typeof self !== 'undefined' ? self : this, function () {
  return (
    /******/
    function (modules) {
      // webpackBootstrap

      /******/
      // The module cache

      /******/
      var installedModules = {};
      /******/

      /******/
      // The require function

      /******/

      function __webpack_require__(moduleId) {
        /******/

        /******/
        // Check if module is in cache

        /******/
        if (installedModules[moduleId]) {
          /******/
          return installedModules[moduleId].exports;
          /******/
        }
        /******/
        // Create a new module (and put it into the cache)

        /******/


        var module = installedModules[moduleId] = {
          /******/
          i: moduleId,

          /******/
          l: false,

          /******/
          exports: {}
          /******/

        };
        /******/

        /******/
        // Execute the module function

        /******/

        modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
        /******/

        /******/
        // Flag the module as loaded

        /******/

        module.l = true;
        /******/

        /******/
        // Return the exports of the module

        /******/

        return module.exports;
        /******/
      }
      /******/

      /******/

      /******/
      // expose the modules object (__webpack_modules__)

      /******/


      __webpack_require__.m = modules;
      /******/

      /******/
      // expose the module cache

      /******/

      __webpack_require__.c = installedModules;
      /******/

      /******/
      // define getter function for harmony exports

      /******/

      __webpack_require__.d = function (exports, name, getter) {
        /******/
        if (!__webpack_require__.o(exports, name)) {
          /******/
          Object.defineProperty(exports, name, {
            enumerable: true,
            get: getter
          });
          /******/
        }
        /******/

      };
      /******/

      /******/
      // define __esModule on exports

      /******/


      __webpack_require__.r = function (exports) {
        /******/
        if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
          /******/
          Object.defineProperty(exports, Symbol.toStringTag, {
            value: 'Module'
          });
          /******/
        }
        /******/


        Object.defineProperty(exports, '__esModule', {
          value: true
        });
        /******/
      };
      /******/

      /******/
      // create a fake namespace object

      /******/
      // mode & 1: value is a module id, require it

      /******/
      // mode & 2: merge all properties of value into the ns

      /******/
      // mode & 4: return value when already ns object

      /******/
      // mode & 8|1: behave like require

      /******/


      __webpack_require__.t = function (value, mode) {
        /******/
        if (mode & 1) value = __webpack_require__(value);
        /******/

        if (mode & 8) return value;
        /******/

        if (mode & 4 && typeof value === 'object' && value && value.__esModule) return value;
        /******/

        var ns = Object.create(null);
        /******/

        __webpack_require__.r(ns);
        /******/


        Object.defineProperty(ns, 'default', {
          enumerable: true,
          value: value
        });
        /******/

        if (mode & 2 && typeof value != 'string') for (var key in value) __webpack_require__.d(ns, key, function (key) {
          return value[key];
        }.bind(null, key));
        /******/

        return ns;
        /******/
      };
      /******/

      /******/
      // getDefaultExport function for compatibility with non-harmony modules

      /******/


      __webpack_require__.n = function (module) {
        /******/
        var getter = module && module.__esModule ?
        /******/
        function getDefault() {
          return module['default'];
        } :
        /******/
        function getModuleExports() {
          return module;
        };
        /******/

        __webpack_require__.d(getter, 'a', getter);
        /******/


        return getter;
        /******/
      };
      /******/

      /******/
      // Object.prototype.hasOwnProperty.call

      /******/


      __webpack_require__.o = function (object, property) {
        return Object.prototype.hasOwnProperty.call(object, property);
      };
      /******/

      /******/
      // __webpack_public_path__

      /******/


      __webpack_require__.p = "";
      /******/

      /******/

      /******/
      // Load entry module and return exports

      /******/

      return __webpack_require__(__webpack_require__.s = 8);
      /******/
    }(
    /************************************************************************/

    /******/
    {
      /***/
      "./src/AbstractCoreComponent.tsx":
      /*!***************************************!*\
        !*** ./src/AbstractCoreComponent.tsx ***!
        \***************************************/

      /*! exports provided: withStandardBaseCssClass, withConditionalPlaceHolder */

      /***/
      function (module, __webpack_exports__, __webpack_require__) {
        "use strict";

        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */


        __webpack_require__.d(__webpack_exports__, "withStandardBaseCssClass", function () {
          return withStandardBaseCssClass;
        });
        /* harmony export (binding) */


        __webpack_require__.d(__webpack_exports__, "withConditionalPlaceHolder", function () {
          return withConditionalPlaceHolder;
        });
        /* harmony import */


        var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
        /*! react */
        "react");
        /* harmony import */


        var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
        /* harmony import */


        var _common_placeholder__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
        /*! ./common/placeholder */
        "./src/common/placeholder.tsx");
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


        const withStandardBaseCssClass = (Component, defaultBaseCssClass) => {
          return props => {
            const baseCssClass = props.baseCssClass;
            const toBeUsedCssClass = baseCssClass && baseCssClass.trim().length > 0 ? baseCssClass : defaultBaseCssClass;
            const mergedProps = { ...props,
              baseCssClass: toBeUsedCssClass
            };
            return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](Component, Object.assign({}, mergedProps));
          };
        };

        const withConditionalPlaceHolder = (Component, isEmpty, componentTitle, emptyText) => {
          return props => {
            const isEmptyResult = isEmpty(props);
            const {
              hidePlaceHolder = false,
              isInEditor = false
            } = props;
            return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, !isEmptyResult && react__WEBPACK_IMPORTED_MODULE_0__["createElement"](Component, Object.assign({}, props)), isEmptyResult && isInEditor && !hidePlaceHolder && react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_common_placeholder__WEBPACK_IMPORTED_MODULE_1__["EditorPlaceHolder"], {
              emptyTextAppend: emptyText,
              componentTitle: componentTitle
            }));
          };
        }; //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQWJzdHJhY3RDb3JlQ29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiQWJzdHJhY3RDb3JlQ29tcG9uZW50LnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7R0FjRztBQUVILE9BQU8sS0FBSyxLQUFLLE1BQU0sT0FBTyxDQUFDO0FBRy9CLE9BQU8sRUFBQyxpQkFBaUIsRUFBQyxNQUFNLHNCQUFzQixDQUFDO0FBZXZELE1BQU0sQ0FBQyxNQUFNLHdCQUF3QixHQUFHLENBRXBDLFNBQTBCLEVBQzFCLG1CQUEwQixFQUNKLEVBQUU7SUFDeEIsT0FBTyxDQUFDLEtBQU8sRUFBRSxFQUFFO1FBRWYsTUFBTSxZQUFZLEdBQUcsS0FBSyxDQUFDLFlBQVksQ0FBQztRQUN4QyxNQUFNLGdCQUFnQixHQUFHLFlBQVksSUFBSSxZQUFZLENBQUMsSUFBSSxFQUFFLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxtQkFBbUIsQ0FBQztRQUU3RyxNQUFNLFdBQVcsR0FBSztZQUNsQixHQUFHLEtBQUs7WUFDUixZQUFZLEVBQUUsZ0JBQWdCO1NBQ2pDLENBQUM7UUFFRixPQUFPLG9CQUFDLFNBQVMsb0JBQUssV0FBVyxFQUFJLENBQUM7SUFDMUMsQ0FBQyxDQUFBO0FBQ0wsQ0FBQyxDQUFDO0FBRUYsTUFBTSxDQUFDLE1BQU0sMEJBQTBCLEdBQUcsQ0FFMUIsU0FBMEIsRUFDMUIsT0FBNEIsRUFDNUIsY0FBc0IsRUFBRSxTQUFpQixFQUNuQixFQUFFO0lBQ3BDLE9BQU8sQ0FBQyxLQUFPLEVBQUUsRUFBRTtRQUVmLE1BQU0sYUFBYSxHQUFXLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUM3QyxNQUFNLEVBQUMsZUFBZSxHQUFHLEtBQUssRUFBRSxVQUFVLEdBQUcsS0FBSyxFQUFDLEdBQUcsS0FBSyxDQUFDO1FBRTVELE9BQU8sQ0FDSDtZQUNNLENBQUMsYUFBYTtnQkFDaEIsb0JBQUMsU0FBUyxvQkFBSyxLQUFLLEVBQUk7WUFHcEIsQ0FBQyxhQUFhLElBQUksVUFBVSxJQUFJLENBQUMsZUFBZSxDQUFDO2dCQUNqRCxvQkFBQyxpQkFBaUIsSUFDZCxlQUFlLEVBQUUsU0FBUyxFQUMxQixjQUFjLEVBQUUsY0FBYyxHQUNoQyxDQUVQLENBQ04sQ0FBQztJQUNOLENBQUMsQ0FBQTtBQUNMLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiAgQ29weXJpZ2h0IDIwMjAgQWRvYmVcbiAqXG4gKiAgTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqICB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiAgWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICAgICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiAgVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqICBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqICBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiAgbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cblxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtDb21wb25lbnRUeXBlfSBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCB7RWRpdG9yUGxhY2VIb2xkZXJ9IGZyb20gXCIuL2NvbW1vbi9wbGFjZWhvbGRlclwiO1xuXG5leHBvcnQgaW50ZXJmYWNlIEhhc0Jhc2VDc3NDbGFzcyB7XG4gICAgYmFzZUNzc0NsYXNzPzogc3RyaW5nXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ29yZUNvbXBvbmVudE1vZGVsIGV4dGVuZHMgSGFzQmFzZUNzc0NsYXNze1xuICAgIGhpZGVQbGFjZUhvbGRlcj86IGJvb2xlYW5cbiAgICBpc0luRWRpdG9yPzpib29sZWFuXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ29yZUNvbXBvbmVudFN0YXRlIHtcblxufVxuXG5leHBvcnQgY29uc3Qgd2l0aFN0YW5kYXJkQmFzZUNzc0NsYXNzID0gPE0gZXh0ZW5kcyBDb3JlQ29tcG9uZW50TW9kZWw+XG4oXG4gICAgQ29tcG9uZW50OkNvbXBvbmVudFR5cGU8TT4sXG4gICAgZGVmYXVsdEJhc2VDc3NDbGFzczpzdHJpbmdcbik6UmVhY3QuQ29tcG9uZW50VHlwZTxNPiAgPT4ge1xuICAgIHJldHVybiAocHJvcHM6TSkgPT4ge1xuXG4gICAgICAgIGNvbnN0IGJhc2VDc3NDbGFzcyA9IHByb3BzLmJhc2VDc3NDbGFzcztcbiAgICAgICAgY29uc3QgdG9CZVVzZWRDc3NDbGFzcyA9IGJhc2VDc3NDbGFzcyAmJiBiYXNlQ3NzQ2xhc3MudHJpbSgpLmxlbmd0aCA+IDAgPyBiYXNlQ3NzQ2xhc3MgOiBkZWZhdWx0QmFzZUNzc0NsYXNzO1xuXG4gICAgICAgIGNvbnN0IG1lcmdlZFByb3BzOiBNPSB7XG4gICAgICAgICAgICAuLi5wcm9wcyxcbiAgICAgICAgICAgIGJhc2VDc3NDbGFzczogdG9CZVVzZWRDc3NDbGFzc1xuICAgICAgICB9O1xuXG4gICAgICAgIHJldHVybiA8Q29tcG9uZW50IHsuLi5tZXJnZWRQcm9wc30gLz47XG4gICAgfVxufTtcblxuZXhwb3J0IGNvbnN0IHdpdGhDb25kaXRpb25hbFBsYWNlSG9sZGVyID0gPE0gZXh0ZW5kcyBDb3JlQ29tcG9uZW50TW9kZWw+XG4gICAgICAgICAgICAoXG4gICAgICAgICAgICAgICAgQ29tcG9uZW50OkNvbXBvbmVudFR5cGU8TT4sIFxuICAgICAgICAgICAgICAgIGlzRW1wdHk6KHByb3BzOk0pID0+IGJvb2xlYW4sXG4gICAgICAgICAgICAgICAgY29tcG9uZW50VGl0bGU/OnN0cmluZywgZW1wdHlUZXh0PzpzdHJpbmdcbiAgICAgICAgICAgICk6UmVhY3QuQ29tcG9uZW50VHlwZTxNPiAgPT4ge1xuICAgIHJldHVybiAocHJvcHM6TSkgPT4ge1xuXG4gICAgICAgIGNvbnN0IGlzRW1wdHlSZXN1bHQ6Ym9vbGVhbiA9IGlzRW1wdHkocHJvcHMpO1xuICAgICAgICBjb25zdCB7aGlkZVBsYWNlSG9sZGVyID0gZmFsc2UsIGlzSW5FZGl0b3IgPSBmYWxzZX0gPSBwcm9wcztcblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgICB7ICFpc0VtcHR5UmVzdWx0ICYmXG4gICAgICAgICAgICAgICAgPENvbXBvbmVudCB7Li4ucHJvcHN9IC8+XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgKGlzRW1wdHlSZXN1bHQgJiYgaXNJbkVkaXRvciAmJiAhaGlkZVBsYWNlSG9sZGVyKSAmJlxuICAgICAgICAgICAgICAgICAgICA8RWRpdG9yUGxhY2VIb2xkZXJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVtcHR5VGV4dEFwcGVuZD17ZW1wdHlUZXh0fVxuICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50VGl0bGU9e2NvbXBvbmVudFRpdGxlfVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDwvPlxuICAgICAgICApO1xuICAgIH1cbn07Il19

        /***/

      },

      /***/
      "./src/authoring/download/v1/DownloadV1.tsx":
      /*!**************************************************!*\
        !*** ./src/authoring/download/v1/DownloadV1.tsx ***!
        \**************************************************/

      /*! exports provided: getDownloadV1Href, DownloadV1HeadingContent, DownloadV1HeadingElement, renderProperty, DownloadV1Details, DownloadV1Description, DownloadV1Link, DownloadV1Impl, default */

      /***/
      function (module, __webpack_exports__, __webpack_require__) {
        "use strict";

        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */


        __webpack_require__.d(__webpack_exports__, "getDownloadV1Href", function () {
          return getDownloadV1Href;
        });
        /* harmony export (binding) */


        __webpack_require__.d(__webpack_exports__, "DownloadV1HeadingContent", function () {
          return DownloadV1HeadingContent;
        });
        /* harmony export (binding) */


        __webpack_require__.d(__webpack_exports__, "DownloadV1HeadingElement", function () {
          return DownloadV1HeadingElement;
        });
        /* harmony export (binding) */


        __webpack_require__.d(__webpack_exports__, "renderProperty", function () {
          return renderProperty;
        });
        /* harmony export (binding) */


        __webpack_require__.d(__webpack_exports__, "DownloadV1Details", function () {
          return DownloadV1Details;
        });
        /* harmony export (binding) */


        __webpack_require__.d(__webpack_exports__, "DownloadV1Description", function () {
          return DownloadV1Description;
        });
        /* harmony export (binding) */


        __webpack_require__.d(__webpack_exports__, "DownloadV1Link", function () {
          return DownloadV1Link;
        });
        /* harmony export (binding) */


        __webpack_require__.d(__webpack_exports__, "DownloadV1Impl", function () {
          return DownloadV1Impl;
        });
        /* harmony import */


        var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
        /*! react */
        "react");
        /* harmony import */


        var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
        /* harmony import */


        var _AbstractCoreComponent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
        /*! ../../../AbstractCoreComponent */
        "./src/AbstractCoreComponent.tsx");
        /* harmony import */


        var _DownloadV1IsEmptyFn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
        /*! ./DownloadV1IsEmptyFn */
        "./src/authoring/download/v1/DownloadV1IsEmptyFn.ts");
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


        const getDownloadV1Href = props => !!props.url && props.url.length > 0 ? props.url : '#';

        const DownloadV1HeadingContent = props => {
          const handleOnClick = event => {
            props.handleOnClick && props.handleOnClick(event);
          };

          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, !!props.url || !!props.handleOnClick && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
            onClick: handleOnClick,
            className: props.baseCssClass + '__title-link',
            href: getDownloadV1Href(props)
          }, props.title), !props.url && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, " ", props.title, " "));
        };

        const DownloadV1HeadingElement = props => {
          const {
            titleType = 'h3'
          } = props;
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(`${titleType}`, {
            className: props.baseCssClass + '__title"'
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(DownloadV1HeadingContent, Object.assign({}, props)));
        };

        const renderProperty = (label, content, cssClassModifier, baseCssClass) => {
          const cssClass = `${baseCssClass}__property ${baseCssClass}__property--' + ${cssClassModifier}`;
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
            className: cssClass
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("dt", {
            className: baseCssClass + '__property-label'
          }, label), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("dd", {
            className: baseCssClass + '__property-content'
          }, content));
        };

        const DownloadV1Details = props => {
          const {
            displayFilename = false,
            displaySize = false,
            displayFormat = false
          } = props;
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("dl", {
            className: props.baseCssClass + '__properties'
          }, displayFilename && renderProperty('Filename', props.filename, 'filename', props.baseCssClass), displaySize && renderProperty('Size', props.size, 'size', props.baseCssClass), displayFormat && renderProperty('Format', props.format, 'format', props.baseCssClass));
        };

        const DownloadV1Description = props => {
          const html = String(props.description) || '';
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
            className: props.baseCssClass + '__description',
            dangerouslySetInnerHTML: {
              __html: html
            }
          });
        };

        const DownloadV1Link = props => {
          const handleOnClick = event => {
            props.handleOnClick && props.handleOnClick(event);
          };

          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
            onClick: handleOnClick,
            className: props.baseCssClass + '__action',
            href: getDownloadV1Href(props)
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
            className: props.baseCssClass + '__action-text'
          }, props.actionText));
        };

        const DownloadV1Impl = props => {
          const {
            displayFilename = false,
            displaySize = false,
            displayFormat = false
          } = props;
          const cssClass = props.baseCssClass + (props.isInEditor ? ' cq-dd-file' : '');
          const displayDownloadDetails = displayFilename || displaySize || displayFormat;
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
            className: cssClass
          }, !!props.title && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(DownloadV1HeadingElement, Object.assign({}, props)), !!props.description && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(DownloadV1Description, Object.assign({}, props)), displayDownloadDetails && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(DownloadV1Details, Object.assign({}, props)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(DownloadV1Link, Object.assign({}, props)));
        };

        const DownloadV1 = props => {
          const Wrapped = Object(_AbstractCoreComponent__WEBPACK_IMPORTED_MODULE_1__["withConditionalPlaceHolder"])(Object(_AbstractCoreComponent__WEBPACK_IMPORTED_MODULE_1__["withStandardBaseCssClass"])(DownloadV1Impl, "cmp-download"), _DownloadV1IsEmptyFn__WEBPACK_IMPORTED_MODULE_2__["DownloadV1IsEmptyFn"], "Download V1");
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Wrapped, Object.assign({}, props));
        };
        /* harmony default export */


        __webpack_exports__["default"] = DownloadV1; //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRG93bmxvYWRWMS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIkRvd25sb2FkVjEudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7OztHQWNHO0FBQ0gsT0FBTyxLQUFtQixNQUFNLE9BQU8sQ0FBQztBQUN4QyxPQUFPLEVBQXFCLDBCQUEwQixFQUFFLHdCQUF3QixFQUFDLE1BQU0sZ0NBQWdDLENBQUM7QUFDeEgsT0FBTyxFQUFDLG1CQUFtQixFQUFDLE1BQU0sdUJBQXVCLENBQUM7QUFtQjFELE1BQU0sQ0FBQyxNQUFNLGlCQUFpQixHQUFHLENBQUMsS0FBcUIsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLEdBQUcsSUFBSSxLQUFLLENBQUMsR0FBRyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDO0FBRXBILE1BQU0sQ0FBQyxNQUFNLHdCQUF3QixHQUFHLENBQUMsS0FBcUIsRUFBRSxFQUFFO0lBRTlELE1BQU0sYUFBYSxHQUFHLENBQUMsS0FBZ0IsRUFBRSxFQUFFO1FBQ3ZDLEtBQUssQ0FBQyxhQUFhLElBQUksS0FBSyxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUN0RCxDQUFDLENBQUM7SUFFRixPQUFPLENBQ0g7UUFDSyxDQUFDLENBQUMsS0FBSyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsS0FBSyxDQUFDLGFBQWEsSUFBSSxDQUNyQywyQkFBRyxPQUFPLEVBQUUsYUFBYSxFQUN0QixTQUFTLEVBQUUsS0FBSyxDQUFDLFlBQVksR0FBRyxjQUFjLEVBQzlDLElBQUksRUFBRSxpQkFBaUIsQ0FBQyxLQUFLLENBQUMsSUFDNUIsS0FBSyxDQUFDLEtBQUssQ0FDWixDQUNQO1FBQ0EsQ0FBQyxLQUFLLENBQUMsR0FBRyxJQUFJLENBQUU7O1lBQUksS0FBSyxDQUFDLEtBQUs7Z0JB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O0lBRXBELE1BQU0sRUFBRSxlQUFlLEdBQUcsS0FBSyxFQUFFLFdBQVcsR0FBRyxLQUFLLEVBQUcsYUFBYSxHQUFHLEtBQUssRUFBQyxHQUFHLEtBQUssQ0FBQztJQUV0RixNQUFNLFFBQVEsR0FBRyxLQUFLLENBQUMsWUFBWSxHQUFHLENBQUUsS0FBSyxDQUFDLFVBQVUsQ0FBRSxDQUFDLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUNoRixNQUFNLHNCQUFzQixHQUFHLGVBQWUsSUFBSSxXQUFXLElBQUksYUFBYSxDQUFDO0lBQy9FLE9BQU8sQ0FDSCw2QkFBSyxTQUFTLEVBQUUsUUFBUTtRQUNuQixDQUFDLENBQUMsS0FBSyxDQUFDLEtBQUssSUFBSSxvQkFBQyx3QkFBd0Isb0JBQUssS0FBSyxFQUFHO1FBQ3ZELENBQUMsQ0FBQyxLQUFLLENBQUMsV0FBVyxJQUFJLG9CQUFDLHFCQUFxQixvQkFBSyxLQUFLLEVBQUc7UUFDMUQsc0JBQXNCLElBQUksb0JBQUMsaUJBQWlCLG9CQUFLLEtBQUssRUFBRztRQUMxRCxvQkFBQyxjQUFjLG9CQUFLLEtBQUssRUFBRyxDQUMxQixDQUNULENBQUM7QUFFTixDQUFDLENBQUM7QUFJRixNQUFNLFVBQVUsR0FBRyxDQUFDLEtBQXFCLEVBQUUsRUFBRTtJQUV6QyxNQUFNLE9BQU8sR0FBRywwQkFBMEIsQ0FBQyx3QkFBd0IsQ0FBQyxjQUFjLEVBQUUsY0FBYyxDQUFDLEVBQUUsbUJBQW1CLEVBQUUsYUFBYSxDQUFDLENBQUM7SUFDekksT0FBTyxvQkFBQyxPQUFPLG9CQUFLLEtBQUssRUFBRyxDQUFBO0FBQ2hDLENBQUMsQ0FBQztBQUVGLGVBQWUsVUFBVSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqICBDb3B5cmlnaHQgMjAyMCBBZG9iZVxuICpcbiAqICBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqICBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgICAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqICBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiAgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqICBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuaW1wb3J0IFJlYWN0LCB7TW91c2VFdmVudH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtDb3JlQ29tcG9uZW50TW9kZWwsIHdpdGhDb25kaXRpb25hbFBsYWNlSG9sZGVyLCB3aXRoU3RhbmRhcmRCYXNlQ3NzQ2xhc3N9IGZyb20gXCIuLi8uLi8uLi9BYnN0cmFjdENvcmVDb21wb25lbnRcIjtcbmltcG9ydCB7RG93bmxvYWRWMUlzRW1wdHlGbn0gZnJvbSBcIi4vRG93bmxvYWRWMUlzRW1wdHlGblwiO1xuXG5cbmV4cG9ydCBpbnRlcmZhY2UgRG93bmxvYWRWMU1vZGVsIGV4dGVuZHMgQ29yZUNvbXBvbmVudE1vZGVse1xuICAgIHVybD86IHN0cmluZ1xuICAgIHRpdGxlOiBzdHJpbmdcbiAgICB0aXRsZVR5cGU6IHN0cmluZ1xuICAgIGRlc2NyaXB0aW9uPzogc3RyaW5nXG4gICAgYWN0aW9uVGV4dD86IHN0cmluZ1xuICAgIGZpbGVuYW1lPzogc3RyaW5nXG4gICAgZGlzcGxheVNpemU6IGJvb2xlYW5cbiAgICBkaXNwbGF5RmlsZW5hbWU6IGJvb2xlYW5cbiAgICBkaXNwbGF5Rm9ybWF0OiBib29sZWFuXG4gICAgZm9ybWF0Pzogc3RyaW5nXG4gICAgc2l6ZT86IHN0cmluZ1xuICAgIGV4dGVuc2lvbj86IHN0cmluZ1xuICAgIGhhbmRsZU9uQ2xpY2s/KGV2ZW50OiBNb3VzZUV2ZW50KTogdm9pZFxufVxuXG5leHBvcnQgY29uc3QgZ2V0RG93bmxvYWRWMUhyZWYgPSAocHJvcHM6RG93bmxvYWRWMU1vZGVsKSA9PiAoISFwcm9wcy51cmwgJiYgcHJvcHMudXJsLmxlbmd0aCA+IDApID8gcHJvcHMudXJsIDogJyMnO1xuXG5leHBvcnQgY29uc3QgRG93bmxvYWRWMUhlYWRpbmdDb250ZW50ID0gKHByb3BzOkRvd25sb2FkVjFNb2RlbCkgPT4ge1xuXG4gICAgY29uc3QgaGFuZGxlT25DbGljayA9IChldmVudDpNb3VzZUV2ZW50KSA9PiB7XG4gICAgICAgIHByb3BzLmhhbmRsZU9uQ2xpY2sgJiYgcHJvcHMuaGFuZGxlT25DbGljayhldmVudCk7XG4gICAgfTtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgICB7ISFwcm9wcy51cmwgfHwgISFwcm9wcy5oYW5kbGVPbkNsaWNrICYmIChcbiAgICAgICAgICAgICAgICA8YSBvbkNsaWNrPXtoYW5kbGVPbkNsaWNrfVxuICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17cHJvcHMuYmFzZUNzc0NsYXNzICsgJ19fdGl0bGUtbGluayd9XG4gICAgICAgICAgICAgICAgICAgaHJlZj17Z2V0RG93bmxvYWRWMUhyZWYocHJvcHMpfT5cbiAgICAgICAgICAgICAgICAgICAge3Byb3BzLnRpdGxlfVxuICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgICB7IXByb3BzLnVybCAmJiAoIDw+IHtwcm9wcy50aXRsZX0gPC8+KX1cbiAgICAgICAgPC8+XG4gICAgKVxufTtcblxuXG5leHBvcnQgY29uc3QgRG93bmxvYWRWMUhlYWRpbmdFbGVtZW50ID0gKHByb3BzOkRvd25sb2FkVjFNb2RlbCkgPT4ge1xuICAgIFxuICAgIGNvbnN0IHt0aXRsZVR5cGUgPSAnaDMnfSA9IHByb3BzO1xuICAgIFxuICAgIHJldHVybiAoXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICBgJHt0aXRsZVR5cGV9YCxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU6IHByb3BzLmJhc2VDc3NDbGFzcyArICdfX3RpdGxlXCInLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIDxEb3dubG9hZFYxSGVhZGluZ0NvbnRlbnQgey4uLnByb3BzfS8+XG4gICAgICAgIClcbiAgICApXG59O1xuXG5leHBvcnQgY29uc3QgcmVuZGVyUHJvcGVydHkgPSAoIGxhYmVsOiBzdHJpbmcsIGNvbnRlbnQ6IHN0cmluZ3x1bmRlZmluZWQsIGNzc0NsYXNzTW9kaWZpZXI6IHN0cmluZyxiYXNlQ3NzQ2xhc3M/OiBzdHJpbmcpID0+IHtcbiAgICBjb25zdCBjc3NDbGFzcyA9IGAke2Jhc2VDc3NDbGFzc31fX3Byb3BlcnR5ICR7YmFzZUNzc0NsYXNzfV9fcHJvcGVydHktLScgKyAke2Nzc0NsYXNzTW9kaWZpZXJ9YDtcbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y3NzQ2xhc3N9PlxuICAgICAgICAgICAgPGR0IGNsYXNzTmFtZT17YmFzZUNzc0NsYXNzICsgJ19fcHJvcGVydHktbGFiZWwnfT57bGFiZWx9PC9kdD5cbiAgICAgICAgICAgIDxkZCBjbGFzc05hbWU9e2Jhc2VDc3NDbGFzcyArICdfX3Byb3BlcnR5LWNvbnRlbnQnfT57Y29udGVudH08L2RkPlxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufTtcblxuZXhwb3J0IGNvbnN0IERvd25sb2FkVjFEZXRhaWxzID0gKHByb3BzOkRvd25sb2FkVjFNb2RlbCkgPT4ge1xuICAgIGNvbnN0IHsgZGlzcGxheUZpbGVuYW1lID0gZmFsc2UsZGlzcGxheVNpemUgPSBmYWxzZSwgIGRpc3BsYXlGb3JtYXQgPSBmYWxzZX0gPSBwcm9wcztcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkbCBjbGFzc05hbWU9e3Byb3BzLmJhc2VDc3NDbGFzcyArICdfX3Byb3BlcnRpZXMnfT5cbiAgICAgICAgICAgIHtkaXNwbGF5RmlsZW5hbWUgJiYgcmVuZGVyUHJvcGVydHkoJ0ZpbGVuYW1lJywgcHJvcHMuZmlsZW5hbWUsICdmaWxlbmFtZScscHJvcHMuYmFzZUNzc0NsYXNzKX1cbiAgICAgICAgICAgIHtkaXNwbGF5U2l6ZSAgICAgJiYgcmVuZGVyUHJvcGVydHkoJ1NpemUnLCAgICAgcHJvcHMuc2l6ZSwgICAgICdzaXplJyxwcm9wcy5iYXNlQ3NzQ2xhc3MpfVxuICAgICAgICAgICAge2Rpc3BsYXlGb3JtYXQgICAmJiByZW5kZXJQcm9wZXJ0eSgnRm9ybWF0JywgICBwcm9wcy5mb3JtYXQsICAgJ2Zvcm1hdCcscHJvcHMuYmFzZUNzc0NsYXNzKX1cbiAgICAgICAgPC9kbD5cbiAgICApXG59O1xuXG5leHBvcnQgY29uc3QgRG93bmxvYWRWMURlc2NyaXB0aW9uID0gKHByb3BzOkRvd25sb2FkVjFNb2RlbCkgPT4ge1xuICAgIGNvbnN0IGh0bWw6c3RyaW5nID0gU3RyaW5nKHByb3BzLmRlc2NyaXB0aW9uKSB8fCAnJztcbiAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9e3Byb3BzLmJhc2VDc3NDbGFzcyArICdfX2Rlc2NyaXB0aW9uJ30gZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3tfX2h0bWw6IGh0bWx9fT48L2Rpdj5cbn07XG5cbmV4cG9ydCBjb25zdCBEb3dubG9hZFYxTGluayA9IChwcm9wczpEb3dubG9hZFYxTW9kZWwpID0+IHtcblxuICAgIGNvbnN0IGhhbmRsZU9uQ2xpY2sgPSAoZXZlbnQ6TW91c2VFdmVudCkgPT4ge1xuICAgICAgICBwcm9wcy5oYW5kbGVPbkNsaWNrICYmIHByb3BzLmhhbmRsZU9uQ2xpY2soZXZlbnQpO1xuICAgIH07XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8YSBvbkNsaWNrPXtoYW5kbGVPbkNsaWNrfSBjbGFzc05hbWU9e3Byb3BzLmJhc2VDc3NDbGFzcyArICdfX2FjdGlvbid9IGhyZWY9e2dldERvd25sb2FkVjFIcmVmKHByb3BzKX0+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3Byb3BzLmJhc2VDc3NDbGFzcyArICdfX2FjdGlvbi10ZXh0J30+e3Byb3BzLmFjdGlvblRleHR9PC9zcGFuPlxuICAgICAgICA8L2E+XG4gICAgKVxufTtcblxuZXhwb3J0IGNvbnN0IERvd25sb2FkVjFJbXBsID0gKHByb3BzOkRvd25sb2FkVjFNb2RlbCkgPT4ge1xuXG4gICAgY29uc3QgeyBkaXNwbGF5RmlsZW5hbWUgPSBmYWxzZSAsZGlzcGxheVNpemUgPSBmYWxzZSwgIGRpc3BsYXlGb3JtYXQgPSBmYWxzZX0gPSBwcm9wcztcbiAgICBcbiAgICBjb25zdCBjc3NDbGFzcyA9IHByb3BzLmJhc2VDc3NDbGFzcyArICggcHJvcHMuaXNJbkVkaXRvciAgPyAnIGNxLWRkLWZpbGUnIDogJycpO1xuICAgIGNvbnN0IGRpc3BsYXlEb3dubG9hZERldGFpbHMgPSBkaXNwbGF5RmlsZW5hbWUgfHwgZGlzcGxheVNpemUgfHwgZGlzcGxheUZvcm1hdDtcbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y3NzQ2xhc3N9PlxuICAgICAgICAgICAgeyEhcHJvcHMudGl0bGUgJiYgPERvd25sb2FkVjFIZWFkaW5nRWxlbWVudCB7Li4ucHJvcHN9Lz59XG4gICAgICAgICAgICB7ISFwcm9wcy5kZXNjcmlwdGlvbiAmJiA8RG93bmxvYWRWMURlc2NyaXB0aW9uIHsuLi5wcm9wc30vPn1cbiAgICAgICAgICAgIHtkaXNwbGF5RG93bmxvYWREZXRhaWxzICYmIDxEb3dubG9hZFYxRGV0YWlscyB7Li4ucHJvcHN9Lz59XG4gICAgICAgICAgICA8RG93bmxvYWRWMUxpbmsgey4uLnByb3BzfS8+XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG5cbn07XG5cblxuXG5jb25zdCBEb3dubG9hZFYxID0gKHByb3BzOkRvd25sb2FkVjFNb2RlbCkgPT4ge1xuXG4gICAgY29uc3QgV3JhcHBlZCA9IHdpdGhDb25kaXRpb25hbFBsYWNlSG9sZGVyKHdpdGhTdGFuZGFyZEJhc2VDc3NDbGFzcyhEb3dubG9hZFYxSW1wbCwgXCJjbXAtZG93bmxvYWRcIiksIERvd25sb2FkVjFJc0VtcHR5Rm4sIFwiRG93bmxvYWQgVjFcIik7XG4gICAgcmV0dXJuIDxXcmFwcGVkIHsuLi5wcm9wc30vPlxufTtcblxuZXhwb3J0IGRlZmF1bHQgRG93bmxvYWRWMTsiXX0=

        /***/
      },

      /***/
      "./src/authoring/download/v1/DownloadV1IsEmptyFn.ts":
      /*!**********************************************************!*\
        !*** ./src/authoring/download/v1/DownloadV1IsEmptyFn.ts ***!
        \**********************************************************/

      /*! exports provided: DownloadV1IsEmptyFn */

      /***/
      function (module, __webpack_exports__, __webpack_require__) {
        "use strict";

        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */


        __webpack_require__.d(__webpack_exports__, "DownloadV1IsEmptyFn", function () {
          return DownloadV1IsEmptyFn;
        });

        function DownloadV1IsEmptyFn(props) {
          return (props.url == null || props.url.length === 0) && props.handleOnClick == null;
        } //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRG93bmxvYWRWMUlzRW1wdHlGbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIkRvd25sb2FkVjFJc0VtcHR5Rm4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0EsTUFBTSxVQUFVLG1CQUFtQixDQUFDLEtBQXFCO0lBQ3JELE9BQU8sQ0FBQyxLQUFLLENBQUMsR0FBRyxJQUFJLElBQUksSUFBSSxLQUFLLENBQUMsR0FBRyxDQUFDLE1BQU0sS0FBSyxDQUFDLENBQUMsSUFBSSxLQUFLLENBQUMsYUFBYSxJQUFJLElBQUksQ0FBQztBQUN4RixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtEb3dubG9hZFYxTW9kZWx9IGZyb20gXCIuL0Rvd25sb2FkVjFcIjtcblxuXG5leHBvcnQgZnVuY3Rpb24gRG93bmxvYWRWMUlzRW1wdHlGbihwcm9wczpEb3dubG9hZFYxTW9kZWwpOiBib29sZWFue1xuICAgIHJldHVybiAocHJvcHMudXJsID09IG51bGwgfHwgcHJvcHMudXJsLmxlbmd0aCA9PT0gMCkgJiYgcHJvcHMuaGFuZGxlT25DbGljayA9PSBudWxsO1xufSJdfQ==

        /***/

      },

      /***/
      "./src/common/placeholder.tsx":
      /*!************************************!*\
        !*** ./src/common/placeholder.tsx ***!
        \************************************/

      /*! exports provided: EditorPlaceHolder */

      /***/
      function (module, __webpack_exports__, __webpack_require__) {
        "use strict";

        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */


        __webpack_require__.d(__webpack_exports__, "EditorPlaceHolder", function () {
          return EditorPlaceHolder;
        });
        /* harmony import */


        var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
        /*! react */
        "react");
        /* harmony import */


        var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
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


        const DEFAULT_EMPTY_TEXT_LABEL = 'Please configure the component';

        const EditorPlaceHolder = props => {
          const part1 = props.componentTitle != null && props.componentTitle.length > 0 ? props.componentTitle + ' - ' : '';
          const part2 = props.emptyTextAppend != null ? props.emptyTextAppend : DEFAULT_EMPTY_TEXT_LABEL;
          const emptyText = part1 + part2;
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
            className: 'cq-placeholder' + (props.classAppend != null ? ' ' + props.classAppend : '')
          }, emptyText);
        }; //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGxhY2Vob2xkZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJwbGFjZWhvbGRlci50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7O0dBY0c7QUFDSCxPQUFPLEtBQWtCLE1BQU0sT0FBTyxDQUFDO0FBT3ZDLE1BQU0sd0JBQXdCLEdBQUcsZ0NBQWdDLENBQUM7QUFFbEUsTUFBTSxDQUFDLE1BQU0saUJBQWlCLEdBQUcsQ0FBQyxLQUFzQixFQUFFLEVBQUU7SUFFeEQsTUFBTSxLQUFLLEdBQVcsQ0FBQyxLQUFLLENBQUMsY0FBYyxJQUFJLElBQUksSUFBSSxLQUFLLENBQUMsY0FBYyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUUsS0FBSyxDQUFDLGNBQWMsR0FBSSxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztJQUM5SCxNQUFNLEtBQUssR0FBVyxDQUFDLEtBQUssQ0FBQyxlQUFlLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFFLEtBQUssQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDLHdCQUF3QixDQUFDO0lBQzFHLE1BQU0sU0FBUyxHQUFHLEtBQUssR0FBRyxLQUFLLENBQUM7SUFFaEMsT0FBTyxDQUNILDZCQUNJLFNBQVMsRUFBRSxnQkFBZ0IsR0FBRyxDQUFDLEtBQUssQ0FBQyxXQUFXLElBQUksSUFBSSxDQUFBLENBQUMsQ0FBQyxHQUFHLEdBQUcsS0FBSyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLElBQ3RGLFNBQVMsQ0FDUixDQUNULENBQUE7QUFDTCxDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogIENvcHlyaWdodCAyMDIwIEFkb2JlXG4gKlxuICogIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiAgeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICAgICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqICBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiAgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiAgU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5pbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gJ3JlYWN0JztcblxuZXhwb3J0IGludGVyZmFjZSBQbGFjZUhvbGRlck1vZGVsIHtcbiAgICBjb21wb25lbnRUaXRsZT86IHN0cmluZ1xuICAgIGNsYXNzQXBwZW5kPzogc3RyaW5nXG4gICAgZW1wdHlUZXh0QXBwZW5kPzogc3RyaW5nXG59XG5jb25zdCBERUZBVUxUX0VNUFRZX1RFWFRfTEFCRUwgPSAnUGxlYXNlIGNvbmZpZ3VyZSB0aGUgY29tcG9uZW50JztcblxuZXhwb3J0IGNvbnN0IEVkaXRvclBsYWNlSG9sZGVyID0gKHByb3BzOlBsYWNlSG9sZGVyTW9kZWwpID0+IHtcblxuICAgIGNvbnN0IHBhcnQxOiBzdHJpbmcgPSAocHJvcHMuY29tcG9uZW50VGl0bGUgIT0gbnVsbCAmJiBwcm9wcy5jb21wb25lbnRUaXRsZS5sZW5ndGggPiAwKSA/ICBwcm9wcy5jb21wb25lbnRUaXRsZSArICAnIC0gJyA6ICcnO1xuICAgIGNvbnN0IHBhcnQyOiBzdHJpbmcgPSAocHJvcHMuZW1wdHlUZXh0QXBwZW5kICE9IG51bGwpID8gIHByb3BzLmVtcHR5VGV4dEFwcGVuZCA6IERFRkFVTFRfRU1QVFlfVEVYVF9MQUJFTDtcbiAgICBjb25zdCBlbXB0eVRleHQgPSBwYXJ0MSArIHBhcnQyO1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdlxuICAgICAgICAgICAgY2xhc3NOYW1lPXsnY3EtcGxhY2Vob2xkZXInICsgKHByb3BzLmNsYXNzQXBwZW5kICE9IG51bGw/ICcgJyArIHByb3BzLmNsYXNzQXBwZW5kIDogJycpfT5cbiAgICAgICAgICAgIHtlbXB0eVRleHR9XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn07Il19

        /***/

      },

      /***/
      8:
      /*!****************************************************!*\
        !*** multi ./src/authoring/download/v1/DownloadV1 ***!
        \****************************************************/

      /*! no static exports found */

      /***/
      function (module, exports, __webpack_require__) {
        module.exports = __webpack_require__(
        /*! ./src/authoring/download/v1/DownloadV1 */
        "./src/authoring/download/v1/DownloadV1.tsx");
        /***/
      },

      /***/
      "react":
      /*!************************!*\
        !*** external "react" ***!
        \************************/

      /*! no static exports found */

      /***/
      function (module, exports) {
        module.exports = __webpack_require__(/*! react */ "./node_modules/react/index.js");
        /***/
      }
      /******/

    })
  );
});

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9yYWFpam1hay93b3Jrc3BhY2UvYWVtLXJlYWN0LWNvcmUtd2NtLWNvbXBvbmVudHMvZXhhbXBsZXMvcmVhY3Qtc3BhY29tcG9uZW50cy1leGFtcGxlLXByb2plY3QvQGFkb2JlL2FlbS1jb3JlLWNvbXBvbmVudHMtcmVhY3QtYmFzZS93ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCIvVXNlcnMvcmFhaWptYWsvd29ya3NwYWNlL2FlbS1yZWFjdC1jb3JlLXdjbS1jb21wb25lbnRzL2V4YW1wbGVzL3JlYWN0LXNwYWNvbXBvbmVudHMtZXhhbXBsZS1wcm9qZWN0L0BhZG9iZS9hZW0tY29yZS1jb21wb25lbnRzLXJlYWN0LWJhc2Uvd2VicGFjay9ib290c3RyYXAiLCIvVXNlcnMvcmFhaWptYWsvd29ya3NwYWNlL2FlbS1yZWFjdC1jb3JlLXdjbS1jb21wb25lbnRzL2V4YW1wbGVzL3JlYWN0LXNwYWNvbXBvbmVudHMtZXhhbXBsZS1wcm9qZWN0L0BhZG9iZS9hZW0tY29yZS1jb21wb25lbnRzLXJlYWN0LWJhc2Uvc3JjL0Fic3RyYWN0Q29yZUNvbXBvbmVudC50c3giLCIvVXNlcnMvcmFhaWptYWsvd29ya3NwYWNlL2FlbS1yZWFjdC1jb3JlLXdjbS1jb21wb25lbnRzL2V4YW1wbGVzL3JlYWN0LXNwYWNvbXBvbmVudHMtZXhhbXBsZS1wcm9qZWN0L0BhZG9iZS9hZW0tY29yZS1jb21wb25lbnRzLXJlYWN0LWJhc2Uvc3JjL2F1dGhvcmluZy9kb3dubG9hZC92MS9Eb3dubG9hZFYxLnRzeCIsIi9Vc2Vycy9yYWFpam1hay93b3Jrc3BhY2UvYWVtLXJlYWN0LWNvcmUtd2NtLWNvbXBvbmVudHMvZXhhbXBsZXMvcmVhY3Qtc3BhY29tcG9uZW50cy1leGFtcGxlLXByb2plY3QvQGFkb2JlL2FlbS1jb3JlLWNvbXBvbmVudHMtcmVhY3QtYmFzZS9zcmMvYXV0aG9yaW5nL2Rvd25sb2FkL3YxL0Rvd25sb2FkVjFJc0VtcHR5Rm4udHMiLCIvVXNlcnMvcmFhaWptYWsvd29ya3NwYWNlL2FlbS1yZWFjdC1jb3JlLXdjbS1jb21wb25lbnRzL2V4YW1wbGVzL3JlYWN0LXNwYWNvbXBvbmVudHMtZXhhbXBsZS1wcm9qZWN0L0BhZG9iZS9hZW0tY29yZS1jb21wb25lbnRzLXJlYWN0LWJhc2Uvc3JjL2NvbW1vbi9wbGFjZWhvbGRlci50c3giLCIvVXNlcnMvcmFhaWptYWsvd29ya3NwYWNlL2FlbS1yZWFjdC1jb3JlLXdjbS1jb21wb25lbnRzL2V4YW1wbGVzL3JlYWN0LXNwYWNvbXBvbmVudHMtZXhhbXBsZS1wcm9qZWN0L3dlYnBhY2s6L0BhZG9iZS9hZW0tY29yZS1jb21wb25lbnRzLXJlYWN0LWJhc2UvZXh0ZXJuYWwgXCJyZWFjdFwiIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBQ0EsWUFDQSwyQkFEQSxLQUVBLEVBS0E7QUFDQyxDQVRELEVBU0MseUNBVEQsRUFTQztBQUNEOzs7OztBQ1ZBO0FBQUE7O0FBQ0E7QUFBQTs7O0FBRUE7QUFBQTs7QUFDQTs7QUFBQTs7O0FBRUE7QUFBQTs7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBOztBQUNBOzs7QUFBQTtBQUNBO0FBQUEscUJBREE7O0FBRUE7QUFBQSxrQkFGQTs7QUFHQTtBQUFBO0FBQ0E7O0FBSkE7OztBQU1BO0FBQUE7O0FBQ0E7O0FBQUE7OztBQUVBO0FBQUE7O0FBQ0E7O0FBQUE7OztBQUVBO0FBQUE7O0FBQ0E7O0FBQUE7QUFDQTtBQUFBOzs7OztBQUdBO0FBQUE7O0FBQ0E7OztBQUFBOzs7QUFFQTtBQUFBOztBQUNBOztBQUFBOzs7QUFFQTtBQUFBOztBQUNBOztBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBMEMsNEJBQTFDO0FBQTBDO0FBQTFDO0FBQ0E7QUFBQTtBQUNBOztBQUFBLE9BSkE7OztBQU1BO0FBQUE7O0FBQ0E7OztBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBd0Q7QUFBeEQ7QUFDQTtBQUFBO0FB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LEVBQUssa0JBQXNELEtBQXRELENBQUwsQ0FGbkIsRUFHWiwwQkFBa0MsNkNBQUssYUFBTCxDQUFLLGlCQUFMLEVBQUssa0JBQWtELEtBQWxELENBQUwsQ0FIdEIsRUFJSiw2Q0FBSyxhQUFMLENBQUssY0FBTCxFQUFLLGtCQUErQyxLQUEvQyxDQUFMLENBSkksQ0FBWjtBQUtBLFNBVE87O0FBVVA7QUFDQSwwQkFBb0IsMEZBQTJCLHdGQUF3QixjQUF4QixFQUF3QixjQUF4QixDQUEzQixFQUFxRix3RUFBckYsRUFBd0csYUFBeEcsQ0FBcEI7QUFDQSxpQkFBVyw2Q0FBSyxhQUFMLENBQUssT0FBTCxFQUFLLGtCQUF3QyxLQUF4QyxDQUFMLENBQVg7QUFDQSxTQUhBO0FBSWU7OztBQUFBLG9ELENBQ2Y7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDM0VBO0FBQUE7OztBQUFBO0FBQUE7QUFBQTs7QUFBTztBQUNQO0FBQ0EsUyxDQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNIQTtBQUFBOzs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7OztBQUFBO0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBZ0JBOztBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsaUJBQVksNkNBQUssYUFBTCxDQUFLLEtBQUwsRUFBSztBQUF1QjtBQUF2QixXQUFMLEVBQXVILFNBQXZILENBQVo7QUFDQSxTQUxPLEMsQ0FNUDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN2QkE7Ozs7OztBTlVBO0NBVkEsRSIsImZpbGUiOiJqcy9Eb3dubG9hZFYxLmJkZWZlMWQ3LmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiQGFkb2JlL2FlbS1jb3JlLWNvbXBvbmVudHMtcmVhY3QtYmFzZVwiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJAYWRvYmUvYWVtLWNvcmUtY29tcG9uZW50cy1yZWFjdC1iYXNlXCJdID0gZmFjdG9yeSgpO1xufSkodHlwZW9mIHNlbGYgIT09ICd1bmRlZmluZWQnID8gc2VsZiA6IHRoaXMsIGZ1bmN0aW9uKCkge1xucmV0dXJuICIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSA4KTtcbiIsIi8qXG4gKiAgQ29weXJpZ2h0IDIwMjAgQWRvYmVcbiAqXG4gKiAgTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqICB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiAgWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICAgICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiAgVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqICBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqICBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiAgbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IEVkaXRvclBsYWNlSG9sZGVyIH0gZnJvbSBcIi4vY29tbW9uL3BsYWNlaG9sZGVyXCI7XG5leHBvcnQgY29uc3Qgd2l0aFN0YW5kYXJkQmFzZUNzc0NsYXNzID0gKENvbXBvbmVudCwgZGVmYXVsdEJhc2VDc3NDbGFzcykgPT4ge1xuICAgIHJldHVybiAocHJvcHMpID0+IHtcbiAgICAgICAgY29uc3QgYmFzZUNzc0NsYXNzID0gcHJvcHMuYmFzZUNzc0NsYXNzO1xuICAgICAgICBjb25zdCB0b0JlVXNlZENzc0NsYXNzID0gYmFzZUNzc0NsYXNzICYmIGJhc2VDc3NDbGFzcy50cmltKCkubGVuZ3RoID4gMCA/IGJhc2VDc3NDbGFzcyA6IGRlZmF1bHRCYXNlQ3NzQ2xhc3M7XG4gICAgICAgIGNvbnN0IG1lcmdlZFByb3BzID0ge1xuICAgICAgICAgICAgLi4ucHJvcHMsXG4gICAgICAgICAgICBiYXNlQ3NzQ2xhc3M6IHRvQmVVc2VkQ3NzQ2xhc3NcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQ29tcG9uZW50LCBPYmplY3QuYXNzaWduKHt9LCBtZXJnZWRQcm9wcykpO1xuICAgIH07XG59O1xuZXhwb3J0IGNvbnN0IHdpdGhDb25kaXRpb25hbFBsYWNlSG9sZGVyID0gKENvbXBvbmVudCwgaXNFbXB0eSwgY29tcG9uZW50VGl0bGUsIGVtcHR5VGV4dCkgPT4ge1xuICAgIHJldHVybiAocHJvcHMpID0+IHtcbiAgICAgICAgY29uc3QgaXNFbXB0eVJlc3VsdCA9IGlzRW1wdHkocHJvcHMpO1xuICAgICAgICBjb25zdCB7IGhpZGVQbGFjZUhvbGRlciA9IGZhbHNlLCBpc0luRWRpdG9yID0gZmFsc2UgfSA9IHByb3BzO1xuICAgICAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoUmVhY3QuRnJhZ21lbnQsIG51bGwsXG4gICAgICAgICAgICAhaXNFbXB0eVJlc3VsdCAmJlxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQ29tcG9uZW50LCBPYmplY3QuYXNzaWduKHt9LCBwcm9wcykpLFxuICAgICAgICAgICAgKGlzRW1wdHlSZXN1bHQgJiYgaXNJbkVkaXRvciAmJiAhaGlkZVBsYWNlSG9sZGVyKSAmJlxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoRWRpdG9yUGxhY2VIb2xkZXIsIHsgZW1wdHlUZXh0QXBwZW5kOiBlbXB0eVRleHQsIGNvbXBvbmVudFRpdGxlOiBjb21wb25lbnRUaXRsZSB9KSkpO1xuICAgIH07XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pUVdKemRISmhZM1JEYjNKbFEyOXRjRzl1Wlc1MExtcHpJaXdpYzI5MWNtTmxVbTl2ZENJNklpSXNJbk52ZFhKalpYTWlPbHNpUVdKemRISmhZM1JEYjNKbFEyOXRjRzl1Wlc1MExuUnplQ0pkTENKdVlXMWxjeUk2VzEwc0ltMWhjSEJwYm1keklqb2lRVUZCUVRzN096czdPenM3T3pzN096czdSMEZqUnp0QlFVVklMRTlCUVU4c1MwRkJTeXhMUVVGTExFMUJRVTBzVDBGQlR5eERRVUZETzBGQlJ5OUNMRTlCUVU4c1JVRkJReXhwUWtGQmFVSXNSVUZCUXl4TlFVRk5MSE5DUVVGelFpeERRVUZETzBGQlpYWkVMRTFCUVUwc1EwRkJReXhOUVVGTkxIZENRVUYzUWl4SFFVRkhMRU5CUlhCRExGTkJRVEJDTEVWQlF6RkNMRzFDUVVFd1FpeEZRVU5LTEVWQlFVVTdTVUZEZUVJc1QwRkJUeXhEUVVGRExFdEJRVThzUlVGQlJTeEZRVUZGTzFGQlJXWXNUVUZCVFN4WlFVRlpMRWRCUVVjc1MwRkJTeXhEUVVGRExGbEJRVmtzUTBGQlF6dFJRVU40UXl4TlFVRk5MR2RDUVVGblFpeEhRVUZITEZsQlFWa3NTVUZCU1N4WlFVRlpMRU5CUVVNc1NVRkJTU3hGUVVGRkxFTkJRVU1zVFVGQlRTeEhRVUZITEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1dVRkJXU3hEUVVGRExFTkJRVU1zUTBGQlF5eHRRa0ZCYlVJc1EwRkJRenRSUVVVM1J5eE5RVUZOTEZkQlFWY3NSMEZCU3p0WlFVTnNRaXhIUVVGSExFdEJRVXM3V1VGRFVpeFpRVUZaTEVWQlFVVXNaMEpCUVdkQ08xTkJRMnBETEVOQlFVTTdVVUZGUml4UFFVRlBMRzlDUVVGRExGTkJRVk1zYjBKQlFVc3NWMEZCVnl4RlFVRkpMRU5CUVVNN1NVRkRNVU1zUTBGQlF5eERRVUZCTzBGQlEwd3NRMEZCUXl4RFFVRkRPMEZCUlVZc1RVRkJUU3hEUVVGRExFMUJRVTBzTUVKQlFUQkNMRWRCUVVjc1EwRkZNVUlzVTBGQk1FSXNSVUZETVVJc1QwRkJORUlzUlVGRE5VSXNZMEZCYzBJc1JVRkJSU3hUUVVGcFFpeEZRVU51UWl4RlFVRkZPMGxCUTNCRExFOUJRVThzUTBGQlF5eExRVUZQTEVWQlFVVXNSVUZCUlR0UlFVVm1MRTFCUVUwc1lVRkJZU3hIUVVGWExFOUJRVThzUTBGQlF5eExRVUZMTEVOQlFVTXNRMEZCUXp0UlFVTTNReXhOUVVGTkxFVkJRVU1zWlVGQlpTeEhRVUZITEV0QlFVc3NSVUZCUlN4VlFVRlZMRWRCUVVjc1MwRkJTeXhGUVVGRExFZEJRVWNzUzBGQlN5eERRVUZETzFGQlJUVkVMRTlCUVU4c1EwRkRTRHRaUVVOTkxFTkJRVU1zWVVGQllUdG5Ra0ZEYUVJc2IwSkJRVU1zVTBGQlV5eHZRa0ZCU3l4TFFVRkxMRVZCUVVrN1dVRkhjRUlzUTBGQlF5eGhRVUZoTEVsQlFVa3NWVUZCVlN4SlFVRkpMRU5CUVVNc1pVRkJaU3hEUVVGRE8yZENRVU5xUkN4dlFrRkJReXhwUWtGQmFVSXNTVUZEWkN4bFFVRmxMRVZCUVVVc1UwRkJVeXhGUVVNeFFpeGpRVUZqTEVWQlFVVXNZMEZCWXl4SFFVTm9ReXhEUVVWUUxFTkJRMDRzUTBGQlF6dEpRVU5PTEVOQlFVTXNRMEZCUVR0QlFVTk1MRU5CUVVNc1EwRkJReUlzSW5OdmRYSmpaWE5EYjI1MFpXNTBJanBiSWk4cVhHNGdLaUFnUTI5d2VYSnBaMmgwSURJd01qQWdRV1J2WW1WY2JpQXFYRzRnS2lBZ1RHbGpaVzV6WldRZ2RXNWtaWElnZEdobElFRndZV05vWlNCTWFXTmxibk5sTENCV1pYSnphVzl1SURJdU1DQW9kR2hsSUZ3aVRHbGpaVzV6WlZ3aUtUdGNiaUFxSUNCNWIzVWdiV0Y1SUc1dmRDQjFjMlVnZEdocGN5Qm1hV3hsSUdWNFkyVndkQ0JwYmlCamIyMXdiR2xoYm1ObElIZHBkR2dnZEdobElFeHBZMlZ1YzJVdVhHNGdLaUFnV1c5MUlHMWhlU0J2WW5SaGFXNGdZU0JqYjNCNUlHOW1JSFJvWlNCTWFXTmxibk5sSUdGMFhHNGdLbHh1SUNvZ0lDQWdJQ0JvZEhSd09pOHZkM2QzTG1Gd1lXTm9aUzV2Y21jdmJHbGpaVzV6WlhNdlRFbERSVTVUUlMweUxqQmNiaUFxWEc0Z0tpQWdWVzVzWlhOeklISmxjWFZwY21Wa0lHSjVJR0Z3Y0d4cFkyRmliR1VnYkdGM0lHOXlJR0ZuY21WbFpDQjBieUJwYmlCM2NtbDBhVzVuTENCemIyWjBkMkZ5WlZ4dUlDb2dJR1JwYzNSeWFXSjFkR1ZrSUhWdVpHVnlJSFJvWlNCTWFXTmxibk5sSUdseklHUnBjM1J5YVdKMWRHVmtJRzl1SUdGdUlGd2lRVk1nU1ZOY0lpQkNRVk5KVXl4Y2JpQXFJQ0JYU1ZSSVQxVlVJRmRCVWxKQlRsUkpSVk1nVDFJZ1EwOU9SRWxVU1U5T1V5QlBSaUJCVGxrZ1MwbE9SQ3dnWldsMGFHVnlJR1Y0Y0hKbGMzTWdiM0lnYVcxd2JHbGxaQzVjYmlBcUlDQlRaV1VnZEdobElFeHBZMlZ1YzJVZ1ptOXlJSFJvWlNCemNHVmphV1pwWXlCc1lXNW5kV0ZuWlNCbmIzWmxjbTVwYm1jZ2NHVnliV2x6YzJsdmJuTWdZVzVrWEc0Z0tpQWdiR2x0YVhSaGRHbHZibk1nZFc1a1pYSWdkR2hsSUV4cFkyVnVjMlV1WEc0Z0tpOWNibHh1YVcxd2IzSjBJQ29nWVhNZ1VtVmhZM1FnWm5KdmJTQW5jbVZoWTNRbk8xeHVhVzF3YjNKMElIdERiMjF3YjI1bGJuUlVlWEJsZlNCbWNtOXRJQ2R5WldGamRDYzdYRzVjYm1sdGNHOXlkQ0I3UldScGRHOXlVR3hoWTJWSWIyeGtaWEo5SUdaeWIyMGdYQ0l1TDJOdmJXMXZiaTl3YkdGalpXaHZiR1JsY2x3aU8xeHVYRzVsZUhCdmNuUWdhVzUwWlhKbVlXTmxJRWhoYzBKaGMyVkRjM05EYkdGemN5QjdYRzRnSUNBZ1ltRnpaVU56YzBOc1lYTnpQem9nYzNSeWFXNW5YRzU5WEc1Y2JtVjRjRzl5ZENCcGJuUmxjbVpoWTJVZ1EyOXlaVU52YlhCdmJtVnVkRTF2WkdWc0lHVjRkR1Z1WkhNZ1NHRnpRbUZ6WlVOemMwTnNZWE56ZTF4dUlDQWdJR2hwWkdWUWJHRmpaVWh2YkdSbGNqODZJR0p2YjJ4bFlXNWNiaUFnSUNCcGMwbHVSV1JwZEc5eVB6cGliMjlzWldGdVhHNTlYRzVjYm1WNGNHOXlkQ0JwYm5SbGNtWmhZMlVnUTI5eVpVTnZiWEJ2Ym1WdWRGTjBZWFJsSUh0Y2JseHVmVnh1WEc1bGVIQnZjblFnWTI5dWMzUWdkMmwwYUZOMFlXNWtZWEprUW1GelpVTnpjME5zWVhOeklEMGdQRTBnWlhoMFpXNWtjeUJEYjNKbFEyOXRjRzl1Wlc1MFRXOWtaV3crWEc0b1hHNGdJQ0FnUTI5dGNHOXVaVzUwT2tOdmJYQnZibVZ1ZEZSNWNHVThUVDRzWEc0Z0lDQWdaR1ZtWVhWc2RFSmhjMlZEYzNORGJHRnpjenB6ZEhKcGJtZGNiaWs2VW1WaFkzUXVRMjl0Y0c5dVpXNTBWSGx3WlR4TlBpQWdQVDRnZTF4dUlDQWdJSEpsZEhWeWJpQW9jSEp2Y0hNNlRTa2dQVDRnZTF4dVhHNGdJQ0FnSUNBZ0lHTnZibk4wSUdKaGMyVkRjM05EYkdGemN5QTlJSEJ5YjNCekxtSmhjMlZEYzNORGJHRnpjenRjYmlBZ0lDQWdJQ0FnWTI5dWMzUWdkRzlDWlZWelpXUkRjM05EYkdGemN5QTlJR0poYzJWRGMzTkRiR0Z6Y3lBbUppQmlZWE5sUTNOelEyeGhjM011ZEhKcGJTZ3BMbXhsYm1kMGFDQStJREFnUHlCaVlYTmxRM056UTJ4aGMzTWdPaUJrWldaaGRXeDBRbUZ6WlVOemMwTnNZWE56TzF4dVhHNGdJQ0FnSUNBZ0lHTnZibk4wSUcxbGNtZGxaRkJ5YjNCek9pQk5QU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQXVMaTV3Y205d2N5eGNiaUFnSUNBZ0lDQWdJQ0FnSUdKaGMyVkRjM05EYkdGemN6b2dkRzlDWlZWelpXUkRjM05EYkdGemMxeHVJQ0FnSUNBZ0lDQjlPMXh1WEc0Z0lDQWdJQ0FnSUhKbGRIVnliaUE4UTI5dGNHOXVaVzUwSUhzdUxpNXRaWEpuWldSUWNtOXdjMzBnTHo0N1hHNGdJQ0FnZlZ4dWZUdGNibHh1Wlhod2IzSjBJR052Ym5OMElIZHBkR2hEYjI1a2FYUnBiMjVoYkZCc1lXTmxTRzlzWkdWeUlEMGdQRTBnWlhoMFpXNWtjeUJEYjNKbFEyOXRjRzl1Wlc1MFRXOWtaV3crWEc0Z0lDQWdJQ0FnSUNBZ0lDQW9YRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdRMjl0Y0c5dVpXNTBPa052YlhCdmJtVnVkRlI1Y0dVOFRUNHNJRnh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJR2x6Ulcxd2RIazZLSEJ5YjNCek9rMHBJRDArSUdKdmIyeGxZVzRzWEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnWTI5dGNHOXVaVzUwVkdsMGJHVS9Pbk4wY21sdVp5d2daVzF3ZEhsVVpYaDBQenB6ZEhKcGJtZGNiaUFnSUNBZ0lDQWdJQ0FnSUNrNlVtVmhZM1F1UTI5dGNHOXVaVzUwVkhsd1pUeE5QaUFnUFQ0Z2UxeHVJQ0FnSUhKbGRIVnliaUFvY0hKdmNITTZUU2tnUFQ0Z2UxeHVYRzRnSUNBZ0lDQWdJR052Ym5OMElHbHpSVzF3ZEhsU1pYTjFiSFE2WW05dmJHVmhiaUE5SUdselJXMXdkSGtvY0hKdmNITXBPMXh1SUNBZ0lDQWdJQ0JqYjI1emRDQjdhR2xrWlZCc1lXTmxTRzlzWkdWeUlEMGdabUZzYzJVc0lHbHpTVzVGWkdsMGIzSWdQU0JtWVd4elpYMGdQU0J3Y205d2N6dGNibHh1SUNBZ0lDQWdJQ0J5WlhSMWNtNGdLRnh1SUNBZ0lDQWdJQ0FnSUNBZ1BENWNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQjdJQ0ZwYzBWdGNIUjVVbVZ6ZFd4MElDWW1YRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdQRU52YlhCdmJtVnVkQ0I3TGk0dWNISnZjSE45SUM4K1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2ZWeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lIdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnS0dselJXMXdkSGxTWlhOMWJIUWdKaVlnYVhOSmJrVmthWFJ2Y2lBbUppQWhhR2xrWlZCc1lXTmxTRzlzWkdWeUtTQW1KbHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBOFJXUnBkRzl5VUd4aFkyVkliMnhrWlhKY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUdWdGNIUjVWR1Y0ZEVGd2NHVnVaRDE3Wlcxd2RIbFVaWGgwZlZ4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnWTI5dGNHOXVaVzUwVkdsMGJHVTllMk52YlhCdmJtVnVkRlJwZEd4bGZWeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0F2UGx4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUgxY2JpQWdJQ0FnSUNBZ0lDQWdJRHd2UGx4dUlDQWdJQ0FnSUNBcE8xeHVJQ0FnSUgxY2JuMDdJbDE5IiwiLypcbiAqICBDb3B5cmlnaHQgMjAyMCBBZG9iZVxuICpcbiAqICBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqICBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgICAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqICBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiAgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqICBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHdpdGhDb25kaXRpb25hbFBsYWNlSG9sZGVyLCB3aXRoU3RhbmRhcmRCYXNlQ3NzQ2xhc3MgfSBmcm9tIFwiLi4vLi4vLi4vQWJzdHJhY3RDb3JlQ29tcG9uZW50XCI7XG5pbXBvcnQgeyBEb3dubG9hZFYxSXNFbXB0eUZuIH0gZnJvbSBcIi4vRG93bmxvYWRWMUlzRW1wdHlGblwiO1xuZXhwb3J0IGNvbnN0IGdldERvd25sb2FkVjFIcmVmID0gKHByb3BzKSA9PiAoISFwcm9wcy51cmwgJiYgcHJvcHMudXJsLmxlbmd0aCA+IDApID8gcHJvcHMudXJsIDogJyMnO1xuZXhwb3J0IGNvbnN0IERvd25sb2FkVjFIZWFkaW5nQ29udGVudCA9IChwcm9wcykgPT4ge1xuICAgIGNvbnN0IGhhbmRsZU9uQ2xpY2sgPSAoZXZlbnQpID0+IHtcbiAgICAgICAgcHJvcHMuaGFuZGxlT25DbGljayAmJiBwcm9wcy5oYW5kbGVPbkNsaWNrKGV2ZW50KTtcbiAgICB9O1xuICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChSZWFjdC5GcmFnbWVudCwgbnVsbCxcbiAgICAgICAgISFwcm9wcy51cmwgfHwgISFwcm9wcy5oYW5kbGVPbkNsaWNrICYmIChSZWFjdC5jcmVhdGVFbGVtZW50KFwiYVwiLCB7IG9uQ2xpY2s6IGhhbmRsZU9uQ2xpY2ssIGNsYXNzTmFtZTogcHJvcHMuYmFzZUNzc0NsYXNzICsgJ19fdGl0bGUtbGluaycsIGhyZWY6IGdldERvd25sb2FkVjFIcmVmKHByb3BzKSB9LCBwcm9wcy50aXRsZSkpLFxuICAgICAgICAhcHJvcHMudXJsICYmIChSZWFjdC5jcmVhdGVFbGVtZW50KFJlYWN0LkZyYWdtZW50LCBudWxsLFxuICAgICAgICAgICAgXCIgXCIsXG4gICAgICAgICAgICBwcm9wcy50aXRsZSxcbiAgICAgICAgICAgIFwiIFwiKSkpKTtcbn07XG5leHBvcnQgY29uc3QgRG93bmxvYWRWMUhlYWRpbmdFbGVtZW50ID0gKHByb3BzKSA9PiB7XG4gICAgY29uc3QgeyB0aXRsZVR5cGUgPSAnaDMnIH0gPSBwcm9wcztcbiAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoYCR7dGl0bGVUeXBlfWAsIHtcbiAgICAgICAgY2xhc3NOYW1lOiBwcm9wcy5iYXNlQ3NzQ2xhc3MgKyAnX190aXRsZVwiJyxcbiAgICB9LCBSZWFjdC5jcmVhdGVFbGVtZW50KERvd25sb2FkVjFIZWFkaW5nQ29udGVudCwgT2JqZWN0LmFzc2lnbih7fSwgcHJvcHMpKSkpO1xufTtcbmV4cG9ydCBjb25zdCByZW5kZXJQcm9wZXJ0eSA9IChsYWJlbCwgY29udGVudCwgY3NzQ2xhc3NNb2RpZmllciwgYmFzZUNzc0NsYXNzKSA9PiB7XG4gICAgY29uc3QgY3NzQ2xhc3MgPSBgJHtiYXNlQ3NzQ2xhc3N9X19wcm9wZXJ0eSAke2Jhc2VDc3NDbGFzc31fX3Byb3BlcnR5LS0nICsgJHtjc3NDbGFzc01vZGlmaWVyfWA7XG4gICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3NOYW1lOiBjc3NDbGFzcyB9LFxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZHRcIiwgeyBjbGFzc05hbWU6IGJhc2VDc3NDbGFzcyArICdfX3Byb3BlcnR5LWxhYmVsJyB9LCBsYWJlbCksXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkZFwiLCB7IGNsYXNzTmFtZTogYmFzZUNzc0NsYXNzICsgJ19fcHJvcGVydHktY29udGVudCcgfSwgY29udGVudCkpKTtcbn07XG5leHBvcnQgY29uc3QgRG93bmxvYWRWMURldGFpbHMgPSAocHJvcHMpID0+IHtcbiAgICBjb25zdCB7IGRpc3BsYXlGaWxlbmFtZSA9IGZhbHNlLCBkaXNwbGF5U2l6ZSA9IGZhbHNlLCBkaXNwbGF5Rm9ybWF0ID0gZmFsc2UgfSA9IHByb3BzO1xuICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChcImRsXCIsIHsgY2xhc3NOYW1lOiBwcm9wcy5iYXNlQ3NzQ2xhc3MgKyAnX19wcm9wZXJ0aWVzJyB9LFxuICAgICAgICBkaXNwbGF5RmlsZW5hbWUgJiYgcmVuZGVyUHJvcGVydHkoJ0ZpbGVuYW1lJywgcHJvcHMuZmlsZW5hbWUsICdmaWxlbmFtZScsIHByb3BzLmJhc2VDc3NDbGFzcyksXG4gICAgICAgIGRpc3BsYXlTaXplICYmIHJlbmRlclByb3BlcnR5KCdTaXplJywgcHJvcHMuc2l6ZSwgJ3NpemUnLCBwcm9wcy5iYXNlQ3NzQ2xhc3MpLFxuICAgICAgICBkaXNwbGF5Rm9ybWF0ICYmIHJlbmRlclByb3BlcnR5KCdGb3JtYXQnLCBwcm9wcy5mb3JtYXQsICdmb3JtYXQnLCBwcm9wcy5iYXNlQ3NzQ2xhc3MpKSk7XG59O1xuZXhwb3J0IGNvbnN0IERvd25sb2FkVjFEZXNjcmlwdGlvbiA9IChwcm9wcykgPT4ge1xuICAgIGNvbnN0IGh0bWwgPSBTdHJpbmcocHJvcHMuZGVzY3JpcHRpb24pIHx8ICcnO1xuICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3NOYW1lOiBwcm9wcy5iYXNlQ3NzQ2xhc3MgKyAnX19kZXNjcmlwdGlvbicsIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MOiB7IF9faHRtbDogaHRtbCB9IH0pO1xufTtcbmV4cG9ydCBjb25zdCBEb3dubG9hZFYxTGluayA9IChwcm9wcykgPT4ge1xuICAgIGNvbnN0IGhhbmRsZU9uQ2xpY2sgPSAoZXZlbnQpID0+IHtcbiAgICAgICAgcHJvcHMuaGFuZGxlT25DbGljayAmJiBwcm9wcy5oYW5kbGVPbkNsaWNrKGV2ZW50KTtcbiAgICB9O1xuICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChcImFcIiwgeyBvbkNsaWNrOiBoYW5kbGVPbkNsaWNrLCBjbGFzc05hbWU6IHByb3BzLmJhc2VDc3NDbGFzcyArICdfX2FjdGlvbicsIGhyZWY6IGdldERvd25sb2FkVjFIcmVmKHByb3BzKSB9LFxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwic3BhblwiLCB7IGNsYXNzTmFtZTogcHJvcHMuYmFzZUNzc0NsYXNzICsgJ19fYWN0aW9uLXRleHQnIH0sIHByb3BzLmFjdGlvblRleHQpKSk7XG59O1xuZXhwb3J0IGNvbnN0IERvd25sb2FkVjFJbXBsID0gKHByb3BzKSA9PiB7XG4gICAgY29uc3QgeyBkaXNwbGF5RmlsZW5hbWUgPSBmYWxzZSwgZGlzcGxheVNpemUgPSBmYWxzZSwgZGlzcGxheUZvcm1hdCA9IGZhbHNlIH0gPSBwcm9wcztcbiAgICBjb25zdCBjc3NDbGFzcyA9IHByb3BzLmJhc2VDc3NDbGFzcyArIChwcm9wcy5pc0luRWRpdG9yID8gJyBjcS1kZC1maWxlJyA6ICcnKTtcbiAgICBjb25zdCBkaXNwbGF5RG93bmxvYWREZXRhaWxzID0gZGlzcGxheUZpbGVuYW1lIHx8IGRpc3BsYXlTaXplIHx8IGRpc3BsYXlGb3JtYXQ7XG4gICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3NOYW1lOiBjc3NDbGFzcyB9LFxuICAgICAgICAhIXByb3BzLnRpdGxlICYmIFJlYWN0LmNyZWF0ZUVsZW1lbnQoRG93bmxvYWRWMUhlYWRpbmdFbGVtZW50LCBPYmplY3QuYXNzaWduKHt9LCBwcm9wcykpLFxuICAgICAgICAhIXByb3BzLmRlc2NyaXB0aW9uICYmIFJlYWN0LmNyZWF0ZUVsZW1lbnQoRG93bmxvYWRWMURlc2NyaXB0aW9uLCBPYmplY3QuYXNzaWduKHt9LCBwcm9wcykpLFxuICAgICAgICBkaXNwbGF5RG93bmxvYWREZXRhaWxzICYmIFJlYWN0LmNyZWF0ZUVsZW1lbnQoRG93bmxvYWRWMURldGFpbHMsIE9iamVjdC5hc3NpZ24oe30sIHByb3BzKSksXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoRG93bmxvYWRWMUxpbmssIE9iamVjdC5hc3NpZ24oe30sIHByb3BzKSkpKTtcbn07XG5jb25zdCBEb3dubG9hZFYxID0gKHByb3BzKSA9PiB7XG4gICAgY29uc3QgV3JhcHBlZCA9IHdpdGhDb25kaXRpb25hbFBsYWNlSG9sZGVyKHdpdGhTdGFuZGFyZEJhc2VDc3NDbGFzcyhEb3dubG9hZFYxSW1wbCwgXCJjbXAtZG93bmxvYWRcIiksIERvd25sb2FkVjFJc0VtcHR5Rm4sIFwiRG93bmxvYWQgVjFcIik7XG4gICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoV3JhcHBlZCwgT2JqZWN0LmFzc2lnbih7fSwgcHJvcHMpKTtcbn07XG5leHBvcnQgZGVmYXVsdCBEb3dubG9hZFYxO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pUkc5M2JteHZZV1JXTVM1cWN5SXNJbk52ZFhKalpWSnZiM1FpT2lJaUxDSnpiM1Z5WTJWeklqcGJJa1J2ZDI1c2IyRmtWakV1ZEhONElsMHNJbTVoYldWeklqcGJYU3dpYldGd2NHbHVaM01pT2lKQlFVRkJPenM3T3pzN096czdPenM3T3p0SFFXTkhPMEZCUTBnc1QwRkJUeXhMUVVGdFFpeE5RVUZOTEU5QlFVOHNRMEZCUXp0QlFVTjRReXhQUVVGUExFVkJRWEZDTERCQ1FVRXdRaXhGUVVGRkxIZENRVUYzUWl4RlFVRkRMRTFCUVUwc1owTkJRV2RETEVOQlFVTTdRVUZEZUVnc1QwRkJUeXhGUVVGRExHMUNRVUZ0UWl4RlFVRkRMRTFCUVUwc2RVSkJRWFZDTEVOQlFVTTdRVUZ0UWpGRUxFMUJRVTBzUTBGQlF5eE5RVUZOTEdsQ1FVRnBRaXhIUVVGSExFTkJRVU1zUzBGQmNVSXNSVUZCUlN4RlFVRkZMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUzBGQlN5eERRVUZETEVkQlFVY3NTVUZCU1N4TFFVRkxMRU5CUVVNc1IwRkJSeXhEUVVGRExFMUJRVTBzUjBGQlJ5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1MwRkJTeXhEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETEVOQlFVTXNSMEZCUnl4RFFVRkRPMEZCUlhCSUxFMUJRVTBzUTBGQlF5eE5RVUZOTEhkQ1FVRjNRaXhIUVVGSExFTkJRVU1zUzBGQmNVSXNSVUZCUlN4RlFVRkZPMGxCUlRsRUxFMUJRVTBzWVVGQllTeEhRVUZITEVOQlFVTXNTMEZCWjBJc1JVRkJSU3hGUVVGRk8xRkJRM1pETEV0QlFVc3NRMEZCUXl4aFFVRmhMRWxCUVVrc1MwRkJTeXhEUVVGRExHRkJRV0VzUTBGQlF5eExRVUZMTEVOQlFVTXNRMEZCUXp0SlFVTjBSQ3hEUVVGRExFTkJRVU03U1VGRlJpeFBRVUZQTEVOQlEwZzdVVUZEU3l4RFFVRkRMRU5CUVVNc1MwRkJTeXhEUVVGRExFZEJRVWNzU1VGQlNTeERRVUZETEVOQlFVTXNTMEZCU3l4RFFVRkRMR0ZCUVdFc1NVRkJTU3hEUVVOeVF5d3lRa0ZCUnl4UFFVRlBMRVZCUVVVc1lVRkJZU3hGUVVOMFFpeFRRVUZUTEVWQlFVVXNTMEZCU3l4RFFVRkRMRmxCUVZrc1IwRkJSeXhqUVVGakxFVkJRemxETEVsQlFVa3NSVUZCUlN4cFFrRkJhVUlzUTBGQlF5eExRVUZMTEVOQlFVTXNTVUZETlVJc1MwRkJTeXhEUVVGRExFdEJRVXNzUTBGRFdpeERRVU5RTzFGQlEwRXNRMEZCUXl4TFFVRkxMRU5CUVVNc1IwRkJSeXhKUVVGSkxFTkJRVVU3TzFsQlFVa3NTMEZCU3l4RFFVRkRMRXRCUVVzN1owSkJRVXNzUTBGQlF5eERRVU4yUXl4RFFVTk9MRU5CUVVFN1FVRkRUQ3hEUVVGRExFTkJRVU03UVVGSFJpeE5RVUZOTEVOQlFVTXNUVUZCVFN4M1FrRkJkMElzUjBGQlJ5eERRVUZETEV0QlFYRkNMRVZCUVVVc1JVRkJSVHRKUVVVNVJDeE5RVUZOTEVWQlFVTXNVMEZCVXl4SFFVRkhMRWxCUVVrc1JVRkJReXhIUVVGSExFdEJRVXNzUTBGQlF6dEpRVVZxUXl4UFFVRlBMRU5CUTBnc1MwRkJTeXhEUVVGRExHRkJRV0VzUTBGRFppeEhRVUZITEZOQlFWTXNSVUZCUlN4RlFVTmtPMUZCUTBrc1UwRkJVeXhGUVVGRkxFdEJRVXNzUTBGQlF5eFpRVUZaTEVkQlFVY3NWVUZCVlR0TFFVTTNReXhGUVVORUxHOUNRVUZETEhkQ1FVRjNRaXh2UWtGQlN5eExRVUZMTEVWQlFVY3NRMEZEZWtNc1EwRkRTaXhEUVVGQk8wRkJRMHdzUTBGQlF5eERRVUZETzBGQlJVWXNUVUZCVFN4RFFVRkRMRTFCUVUwc1kwRkJZeXhIUVVGSExFTkJRVVVzUzBGQllTeEZRVUZGTEU5QlFYbENMRVZCUVVVc1owSkJRWGRDTEVWQlFVTXNXVUZCY1VJc1JVRkJSU3hGUVVGRk8wbEJRM2hJTEUxQlFVMHNVVUZCVVN4SFFVRkhMRWRCUVVjc1dVRkJXU3hqUVVGakxGbEJRVmtzYlVKQlFXMUNMR2RDUVVGblFpeEZRVUZGTEVOQlFVTTdTVUZEYUVjc1QwRkJUeXhEUVVOSUxEWkNRVUZMTEZOQlFWTXNSVUZCUlN4UlFVRlJPMUZCUTNCQ0xEUkNRVUZKTEZOQlFWTXNSVUZCUlN4WlFVRlpMRWRCUVVjc2EwSkJRV3RDTEVsQlFVY3NTMEZCU3l4RFFVRk5PMUZCUXpsRUxEUkNRVUZKTEZOQlFWTXNSVUZCUlN4WlFVRlpMRWRCUVVjc2IwSkJRVzlDTEVsQlFVY3NUMEZCVHl4RFFVRk5MRU5CUTJoRkxFTkJRMVFzUTBGQlF6dEJRVU5PTEVOQlFVTXNRMEZCUXp0QlFVVkdMRTFCUVUwc1EwRkJReXhOUVVGTkxHbENRVUZwUWl4SFFVRkhMRU5CUVVNc1MwRkJjVUlzUlVGQlJTeEZRVUZGTzBsQlEzWkVMRTFCUVUwc1JVRkJSU3hsUVVGbExFZEJRVWNzUzBGQlN5eEZRVUZETEZkQlFWY3NSMEZCUnl4TFFVRkxMRVZCUVVjc1lVRkJZU3hIUVVGSExFdEJRVXNzUlVGQlF5eEhRVUZITEV0QlFVc3NRMEZCUXp0SlFVVnlSaXhQUVVGUExFTkJRMGdzTkVKQlFVa3NVMEZCVXl4RlFVRkZMRXRCUVVzc1EwRkJReXhaUVVGWkxFZEJRVWNzWTBGQll6dFJRVU0zUXl4bFFVRmxMRWxCUVVrc1kwRkJZeXhEUVVGRExGVkJRVlVzUlVGQlJTeExRVUZMTEVOQlFVTXNVVUZCVVN4RlFVRkZMRlZCUVZVc1JVRkJReXhMUVVGTExFTkJRVU1zV1VGQldTeERRVUZETzFGQlF6VkdMRmRCUVZjc1NVRkJVU3hqUVVGakxFTkJRVU1zVFVGQlRTeEZRVUZOTEV0QlFVc3NRMEZCUXl4SlFVRkpMRVZCUVUwc1RVRkJUU3hGUVVGRExFdEJRVXNzUTBGQlF5eFpRVUZaTEVOQlFVTTdVVUZEZUVZc1lVRkJZU3hKUVVGTkxHTkJRV01zUTBGQlF5eFJRVUZSTEVWQlFVa3NTMEZCU3l4RFFVRkRMRTFCUVUwc1JVRkJTU3hSUVVGUkxFVkJRVU1zUzBGQlN5eERRVUZETEZsQlFWa3NRMEZCUXl4RFFVTXhSaXhEUVVOU0xFTkJRVUU3UVVGRFRDeERRVUZETEVOQlFVTTdRVUZGUml4TlFVRk5MRU5CUVVNc1RVRkJUU3h4UWtGQmNVSXNSMEZCUnl4RFFVRkRMRXRCUVhGQ0xFVkJRVVVzUlVGQlJUdEpRVU16UkN4TlFVRk5MRWxCUVVrc1IwRkJWU3hOUVVGTkxFTkJRVU1zUzBGQlN5eERRVUZETEZkQlFWY3NRMEZCUXl4SlFVRkpMRVZCUVVVc1EwRkJRenRKUVVOd1JDeFBRVUZQTERaQ1FVRkxMRk5CUVZNc1JVRkJSU3hMUVVGTExFTkJRVU1zV1VGQldTeEhRVUZITEdWQlFXVXNSVUZCUlN4MVFrRkJkVUlzUlVGQlJTeEZRVUZETEUxQlFVMHNSVUZCUlN4SlFVRkpMRVZCUVVNc1IwRkJVU3hEUVVGQk8wRkJRMmhJTEVOQlFVTXNRMEZCUXp0QlFVVkdMRTFCUVUwc1EwRkJReXhOUVVGTkxHTkJRV01zUjBGQlJ5eERRVUZETEV0QlFYRkNMRVZCUVVVc1JVRkJSVHRKUVVWd1JDeE5RVUZOTEdGQlFXRXNSMEZCUnl4RFFVRkRMRXRCUVdkQ0xFVkJRVVVzUlVGQlJUdFJRVU4yUXl4TFFVRkxMRU5CUVVNc1lVRkJZU3hKUVVGSkxFdEJRVXNzUTBGQlF5eGhRVUZoTEVOQlFVTXNTMEZCU3l4RFFVRkRMRU5CUVVNN1NVRkRkRVFzUTBGQlF5eERRVUZETzBsQlJVWXNUMEZCVHl4RFFVTklMREpDUVVGSExFOUJRVThzUlVGQlJTeGhRVUZoTEVWQlFVVXNVMEZCVXl4RlFVRkZMRXRCUVVzc1EwRkJReXhaUVVGWkxFZEJRVWNzVlVGQlZTeEZRVUZGTEVsQlFVa3NSVUZCUlN4cFFrRkJhVUlzUTBGQlF5eExRVUZMTEVOQlFVTTdVVUZEYWtjc09FSkJRVTBzVTBGQlV5eEZRVUZGTEV0QlFVc3NRMEZCUXl4WlFVRlpMRWRCUVVjc1pVRkJaU3hKUVVGSExFdEJRVXNzUTBGQlF5eFZRVUZWTEVOQlFWRXNRMEZEYUVZc1EwRkRVQ3hEUVVGQk8wRkJRMHdzUTBGQlF5eERRVUZETzBGQlJVWXNUVUZCVFN4RFFVRkRMRTFCUVUwc1kwRkJZeXhIUVVGSExFTkJRVU1zUzBGQmNVSXNSVUZCUlN4RlFVRkZPMGxCUlhCRUxFMUJRVTBzUlVGQlJTeGxRVUZsTEVkQlFVY3NTMEZCU3l4RlFVRkZMRmRCUVZjc1IwRkJSeXhMUVVGTExFVkJRVWNzWVVGQllTeEhRVUZITEV0QlFVc3NSVUZCUXl4SFFVRkhMRXRCUVVzc1EwRkJRenRKUVVWMFJpeE5RVUZOTEZGQlFWRXNSMEZCUnl4TFFVRkxMRU5CUVVNc1dVRkJXU3hIUVVGSExFTkJRVVVzUzBGQlN5eERRVUZETEZWQlFWVXNRMEZCUlN4RFFVRkRMRU5CUVVNc1lVRkJZU3hEUVVGRExFTkJRVU1zUTBGQlF5eEZRVUZGTEVOQlFVTXNRMEZCUXp0SlFVTm9SaXhOUVVGTkxITkNRVUZ6UWl4SFFVRkhMR1ZCUVdVc1NVRkJTU3hYUVVGWExFbEJRVWtzWVVGQllTeERRVUZETzBsQlF5OUZMRTlCUVU4c1EwRkRTQ3cyUWtGQlN5eFRRVUZUTEVWQlFVVXNVVUZCVVR0UlFVTnVRaXhEUVVGRExFTkJRVU1zUzBGQlN5eERRVUZETEV0QlFVc3NTVUZCU1N4dlFrRkJReXgzUWtGQmQwSXNiMEpCUVVzc1MwRkJTeXhGUVVGSE8xRkJRM1pFTEVOQlFVTXNRMEZCUXl4TFFVRkxMRU5CUVVNc1YwRkJWeXhKUVVGSkxHOUNRVUZETEhGQ1FVRnhRaXh2UWtGQlN5eExRVUZMTEVWQlFVYzdVVUZETVVRc2MwSkJRWE5DTEVsQlFVa3NiMEpCUVVNc2FVSkJRV2xDTEc5Q1FVRkxMRXRCUVVzc1JVRkJSenRSUVVNeFJDeHZRa0ZCUXl4alFVRmpMRzlDUVVGTExFdEJRVXNzUlVGQlJ5eERRVU14UWl4RFFVTlVMRU5CUVVNN1FVRkZUaXhEUVVGRExFTkJRVU03UVVGSlJpeE5RVUZOTEZWQlFWVXNSMEZCUnl4RFFVRkRMRXRCUVhGQ0xFVkJRVVVzUlVGQlJUdEpRVVY2UXl4TlFVRk5MRTlCUVU4c1IwRkJSeXd3UWtGQk1FSXNRMEZCUXl4M1FrRkJkMElzUTBGQlF5eGpRVUZqTEVWQlFVVXNZMEZCWXl4RFFVRkRMRVZCUVVVc2JVSkJRVzFDTEVWQlFVVXNZVUZCWVN4RFFVRkRMRU5CUVVNN1NVRkRla2tzVDBGQlR5eHZRa0ZCUXl4UFFVRlBMRzlDUVVGTExFdEJRVXNzUlVGQlJ5eERRVUZCTzBGQlEyaERMRU5CUVVNc1EwRkJRenRCUVVWR0xHVkJRV1VzVlVGQlZTeERRVUZESWl3aWMyOTFjbU5sYzBOdmJuUmxiblFpT2xzaUx5cGNiaUFxSUNCRGIzQjVjbWxuYUhRZ01qQXlNQ0JCWkc5aVpWeHVJQ3BjYmlBcUlDQk1hV05sYm5ObFpDQjFibVJsY2lCMGFHVWdRWEJoWTJobElFeHBZMlZ1YzJVc0lGWmxjbk5wYjI0Z01pNHdJQ2gwYUdVZ1hDSk1hV05sYm5ObFhDSXBPMXh1SUNvZ0lIbHZkU0J0WVhrZ2JtOTBJSFZ6WlNCMGFHbHpJR1pwYkdVZ1pYaGpaWEIwSUdsdUlHTnZiWEJzYVdGdVkyVWdkMmwwYUNCMGFHVWdUR2xqWlc1elpTNWNiaUFxSUNCWmIzVWdiV0Y1SUc5aWRHRnBiaUJoSUdOdmNIa2diMllnZEdobElFeHBZMlZ1YzJVZ1lYUmNiaUFxWEc0Z0tpQWdJQ0FnSUdoMGRIQTZMeTkzZDNjdVlYQmhZMmhsTG05eVp5OXNhV05sYm5ObGN5OU1TVU5GVGxORkxUSXVNRnh1SUNwY2JpQXFJQ0JWYm14bGMzTWdjbVZ4ZFdseVpXUWdZbmtnWVhCd2JHbGpZV0pzWlNCc1lYY2diM0lnWVdkeVpXVmtJSFJ2SUdsdUlIZHlhWFJwYm1jc0lITnZablIzWVhKbFhHNGdLaUFnWkdsemRISnBZblYwWldRZ2RXNWtaWElnZEdobElFeHBZMlZ1YzJVZ2FYTWdaR2x6ZEhKcFluVjBaV1FnYjI0Z1lXNGdYQ0pCVXlCSlUxd2lJRUpCVTBsVExGeHVJQ29nSUZkSlZFaFBWVlFnVjBGU1VrRk9WRWxGVXlCUFVpQkRUMDVFU1ZSSlQwNVRJRTlHSUVGT1dTQkxTVTVFTENCbGFYUm9aWElnWlhod2NtVnpjeUJ2Y2lCcGJYQnNhV1ZrTGx4dUlDb2dJRk5sWlNCMGFHVWdUR2xqWlc1elpTQm1iM0lnZEdobElITndaV05wWm1saklHeGhibWQxWVdkbElHZHZkbVZ5Ym1sdVp5QndaWEp0YVhOemFXOXVjeUJoYm1SY2JpQXFJQ0JzYVcxcGRHRjBhVzl1Y3lCMWJtUmxjaUIwYUdVZ1RHbGpaVzV6WlM1Y2JpQXFMMXh1YVcxd2IzSjBJRkpsWVdOMExDQjdUVzkxYzJWRmRtVnVkSDBnWm5KdmJTQW5jbVZoWTNRbk8xeHVhVzF3YjNKMElIdERiM0psUTI5dGNHOXVaVzUwVFc5a1pXd3NJSGRwZEdoRGIyNWthWFJwYjI1aGJGQnNZV05sU0c5c1pHVnlMQ0IzYVhSb1UzUmhibVJoY21SQ1lYTmxRM056UTJ4aGMzTjlJR1p5YjIwZ1hDSXVMaTh1TGk4dUxpOUJZbk4wY21GamRFTnZjbVZEYjIxd2IyNWxiblJjSWp0Y2JtbHRjRzl5ZENCN1JHOTNibXh2WVdSV01VbHpSVzF3ZEhsR2JuMGdabkp2YlNCY0lpNHZSRzkzYm14dllXUldNVWx6Ulcxd2RIbEdibHdpTzF4dVhHNWNibVY0Y0c5eWRDQnBiblJsY21aaFkyVWdSRzkzYm14dllXUldNVTF2WkdWc0lHVjRkR1Z1WkhNZ1EyOXlaVU52YlhCdmJtVnVkRTF2WkdWc2UxeHVJQ0FnSUhWeWJEODZJSE4wY21sdVoxeHVJQ0FnSUhScGRHeGxPaUJ6ZEhKcGJtZGNiaUFnSUNCMGFYUnNaVlI1Y0dVNklITjBjbWx1WjF4dUlDQWdJR1JsYzJOeWFYQjBhVzl1UHpvZ2MzUnlhVzVuWEc0Z0lDQWdZV04wYVc5dVZHVjRkRDg2SUhOMGNtbHVaMXh1SUNBZ0lHWnBiR1Z1WVcxbFB6b2djM1J5YVc1blhHNGdJQ0FnWkdsemNHeGhlVk5wZW1VNklHSnZiMnhsWVc1Y2JpQWdJQ0JrYVhOd2JHRjVSbWxzWlc1aGJXVTZJR0p2YjJ4bFlXNWNiaUFnSUNCa2FYTndiR0Y1Um05eWJXRjBPaUJpYjI5c1pXRnVYRzRnSUNBZ1ptOXliV0YwUHpvZ2MzUnlhVzVuWEc0Z0lDQWdjMmw2WlQ4NklITjBjbWx1WjF4dUlDQWdJR1Y0ZEdWdWMybHZiajg2SUhOMGNtbHVaMXh1SUNBZ0lHaGhibVJzWlU5dVEyeHBZMnMvS0dWMlpXNTBPaUJOYjNWelpVVjJaVzUwS1RvZ2RtOXBaRnh1ZlZ4dVhHNWxlSEJ2Y25RZ1kyOXVjM1FnWjJWMFJHOTNibXh2WVdSV01VaHlaV1lnUFNBb2NISnZjSE02Ukc5M2JteHZZV1JXTVUxdlpHVnNLU0E5UGlBb0lTRndjbTl3Y3k1MWNtd2dKaVlnY0hKdmNITXVkWEpzTG14bGJtZDBhQ0ErSURBcElEOGdjSEp2Y0hNdWRYSnNJRG9nSnlNbk8xeHVYRzVsZUhCdmNuUWdZMjl1YzNRZ1JHOTNibXh2WVdSV01VaGxZV1JwYm1kRGIyNTBaVzUwSUQwZ0tIQnliM0J6T2tSdmQyNXNiMkZrVmpGTmIyUmxiQ2tnUFQ0Z2UxeHVYRzRnSUNBZ1kyOXVjM1FnYUdGdVpHeGxUMjVEYkdsamF5QTlJQ2hsZG1WdWREcE5iM1Z6WlVWMlpXNTBLU0E5UGlCN1hHNGdJQ0FnSUNBZ0lIQnliM0J6TG1oaGJtUnNaVTl1UTJ4cFkyc2dKaVlnY0hKdmNITXVhR0Z1Wkd4bFQyNURiR2xqYXlobGRtVnVkQ2s3WEc0Z0lDQWdmVHRjYmx4dUlDQWdJSEpsZEhWeWJpQW9YRzRnSUNBZ0lDQWdJRHcrWEc0Z0lDQWdJQ0FnSUNBZ0lDQjdJU0Z3Y205d2N5NTFjbXdnZkh3Z0lTRndjbTl3Y3k1b1lXNWtiR1ZQYmtOc2FXTnJJQ1ltSUNoY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBOFlTQnZia05zYVdOclBYdG9ZVzVrYkdWUGJrTnNhV05yZlZ4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lHTnNZWE56VG1GdFpUMTdjSEp2Y0hNdVltRnpaVU56YzBOc1lYTnpJQ3NnSjE5ZmRHbDBiR1V0YkdsdWF5ZDlYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnYUhKbFpqMTdaMlYwUkc5M2JteHZZV1JXTVVoeVpXWW9jSEp2Y0hNcGZUNWNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnZTNCeWIzQnpMblJwZEd4bGZWeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lEd3ZZVDVjYmlBZ0lDQWdJQ0FnSUNBZ0lDbDlYRzRnSUNBZ0lDQWdJQ0FnSUNCN0lYQnliM0J6TG5WeWJDQW1KaUFvSUR3K0lIdHdjbTl3Y3k1MGFYUnNaWDBnUEM4K0tYMWNiaUFnSUNBZ0lDQWdQQzgrWEc0Z0lDQWdLVnh1ZlR0Y2JseHVYRzVsZUhCdmNuUWdZMjl1YzNRZ1JHOTNibXh2WVdSV01VaGxZV1JwYm1kRmJHVnRaVzUwSUQwZ0tIQnliM0J6T2tSdmQyNXNiMkZrVmpGTmIyUmxiQ2tnUFQ0Z2UxeHVJQ0FnSUZ4dUlDQWdJR052Ym5OMElIdDBhWFJzWlZSNWNHVWdQU0FuYURNbmZTQTlJSEJ5YjNCek8xeHVJQ0FnSUZ4dUlDQWdJSEpsZEhWeWJpQW9YRzRnSUNBZ0lDQWdJRkpsWVdOMExtTnlaV0YwWlVWc1pXMWxiblFvWEc0Z0lDQWdJQ0FnSUNBZ0lDQmdKSHQwYVhSc1pWUjVjR1Y5WUN4Y2JpQWdJQ0FnSUNBZ0lDQWdJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0JqYkdGemMwNWhiV1U2SUhCeWIzQnpMbUpoYzJWRGMzTkRiR0Z6Y3lBcklDZGZYM1JwZEd4bFhDSW5MRnh1SUNBZ0lDQWdJQ0FnSUNBZ2ZTeGNiaUFnSUNBZ0lDQWdJQ0FnSUR4RWIzZHViRzloWkZZeFNHVmhaR2x1WjBOdmJuUmxiblFnZXk0dUxuQnliM0J6ZlM4K1hHNGdJQ0FnSUNBZ0lDbGNiaUFnSUNBcFhHNTlPMXh1WEc1bGVIQnZjblFnWTI5dWMzUWdjbVZ1WkdWeVVISnZjR1Z5ZEhrZ1BTQW9JR3hoWW1Wc09pQnpkSEpwYm1jc0lHTnZiblJsYm5RNklITjBjbWx1WjN4MWJtUmxabWx1WldRc0lHTnpjME5zWVhOelRXOWthV1pwWlhJNklITjBjbWx1Wnl4aVlYTmxRM056UTJ4aGMzTS9PaUJ6ZEhKcGJtY3BJRDArSUh0Y2JpQWdJQ0JqYjI1emRDQmpjM05EYkdGemN5QTlJR0FrZTJKaGMyVkRjM05EYkdGemMzMWZYM0J5YjNCbGNuUjVJQ1I3WW1GelpVTnpjME5zWVhOemZWOWZjSEp2Y0dWeWRIa3RMU2NnS3lBa2UyTnpjME5zWVhOelRXOWthV1pwWlhKOVlEdGNiaUFnSUNCeVpYUjFjbTRnS0Z4dUlDQWdJQ0FnSUNBOFpHbDJJR05zWVhOelRtRnRaVDE3WTNOelEyeGhjM045UGx4dUlDQWdJQ0FnSUNBZ0lDQWdQR1IwSUdOc1lYTnpUbUZ0WlQxN1ltRnpaVU56YzBOc1lYTnpJQ3NnSjE5ZmNISnZjR1Z5ZEhrdGJHRmlaV3duZlQ1N2JHRmlaV3g5UEM5a2RENWNiaUFnSUNBZ0lDQWdJQ0FnSUR4a1pDQmpiR0Z6YzA1aGJXVTllMkpoYzJWRGMzTkRiR0Z6Y3lBcklDZGZYM0J5YjNCbGNuUjVMV052Ym5SbGJuUW5mVDU3WTI5dWRHVnVkSDA4TDJSa1BseHVJQ0FnSUNBZ0lDQThMMlJwZGo1Y2JpQWdJQ0FwTzF4dWZUdGNibHh1Wlhod2IzSjBJR052Ym5OMElFUnZkMjVzYjJGa1ZqRkVaWFJoYVd4eklEMGdLSEJ5YjNCek9rUnZkMjVzYjJGa1ZqRk5iMlJsYkNrZ1BUNGdlMXh1SUNBZ0lHTnZibk4wSUhzZ1pHbHpjR3hoZVVacGJHVnVZVzFsSUQwZ1ptRnNjMlVzWkdsemNHeGhlVk5wZW1VZ1BTQm1ZV3h6WlN3Z0lHUnBjM0JzWVhsR2IzSnRZWFFnUFNCbVlXeHpaWDBnUFNCd2NtOXdjenRjYmx4dUlDQWdJSEpsZEhWeWJpQW9YRzRnSUNBZ0lDQWdJRHhrYkNCamJHRnpjMDVoYldVOWUzQnliM0J6TG1KaGMyVkRjM05EYkdGemN5QXJJQ2RmWDNCeWIzQmxjblJwWlhNbmZUNWNiaUFnSUNBZ0lDQWdJQ0FnSUh0a2FYTndiR0Y1Um1sc1pXNWhiV1VnSmlZZ2NtVnVaR1Z5VUhKdmNHVnlkSGtvSjBacGJHVnVZVzFsSnl3Z2NISnZjSE11Wm1sc1pXNWhiV1VzSUNkbWFXeGxibUZ0WlNjc2NISnZjSE11WW1GelpVTnpjME5zWVhOektYMWNiaUFnSUNBZ0lDQWdJQ0FnSUh0a2FYTndiR0Y1VTJsNlpTQWdJQ0FnSmlZZ2NtVnVaR1Z5VUhKdmNHVnlkSGtvSjFOcGVtVW5MQ0FnSUNBZ2NISnZjSE11YzJsNlpTd2dJQ0FnSUNkemFYcGxKeXh3Y205d2N5NWlZWE5sUTNOelEyeGhjM01wZlZ4dUlDQWdJQ0FnSUNBZ0lDQWdlMlJwYzNCc1lYbEdiM0p0WVhRZ0lDQW1KaUJ5Wlc1a1pYSlFjbTl3WlhKMGVTZ25SbTl5YldGMEp5d2dJQ0J3Y205d2N5NW1iM0p0WVhRc0lDQWdKMlp2Y20xaGRDY3NjSEp2Y0hNdVltRnpaVU56YzBOc1lYTnpLWDFjYmlBZ0lDQWdJQ0FnUEM5a2JENWNiaUFnSUNBcFhHNTlPMXh1WEc1bGVIQnZjblFnWTI5dWMzUWdSRzkzYm14dllXUldNVVJsYzJOeWFYQjBhVzl1SUQwZ0tIQnliM0J6T2tSdmQyNXNiMkZrVmpGTmIyUmxiQ2tnUFQ0Z2UxeHVJQ0FnSUdOdmJuTjBJR2gwYld3NmMzUnlhVzVuSUQwZ1UzUnlhVzVuS0hCeWIzQnpMbVJsYzJOeWFYQjBhVzl1S1NCOGZDQW5KenRjYmlBZ0lDQnlaWFIxY200Z1BHUnBkaUJqYkdGemMwNWhiV1U5ZTNCeWIzQnpMbUpoYzJWRGMzTkRiR0Z6Y3lBcklDZGZYMlJsYzJOeWFYQjBhVzl1SjMwZ1pHRnVaMlZ5YjNWemJIbFRaWFJKYm01bGNraFVUVXc5ZTN0ZlgyaDBiV3c2SUdoMGJXeDlmVDQ4TDJScGRqNWNibjA3WEc1Y2JtVjRjRzl5ZENCamIyNXpkQ0JFYjNkdWJHOWhaRll4VEdsdWF5QTlJQ2h3Y205d2N6cEViM2R1Ykc5aFpGWXhUVzlrWld3cElEMCtJSHRjYmx4dUlDQWdJR052Ym5OMElHaGhibVJzWlU5dVEyeHBZMnNnUFNBb1pYWmxiblE2VFc5MWMyVkZkbVZ1ZENrZ1BUNGdlMXh1SUNBZ0lDQWdJQ0J3Y205d2N5NW9ZVzVrYkdWUGJrTnNhV05ySUNZbUlIQnliM0J6TG1oaGJtUnNaVTl1UTJ4cFkyc29aWFpsYm5RcE8xeHVJQ0FnSUgwN1hHNWNiaUFnSUNCeVpYUjFjbTRnS0Z4dUlDQWdJQ0FnSUNBOFlTQnZia05zYVdOclBYdG9ZVzVrYkdWUGJrTnNhV05yZlNCamJHRnpjMDVoYldVOWUzQnliM0J6TG1KaGMyVkRjM05EYkdGemN5QXJJQ2RmWDJGamRHbHZiaWQ5SUdoeVpXWTllMmRsZEVSdmQyNXNiMkZrVmpGSWNtVm1LSEJ5YjNCektYMCtYRzRnSUNBZ0lDQWdJQ0FnSUNBOGMzQmhiaUJqYkdGemMwNWhiV1U5ZTNCeWIzQnpMbUpoYzJWRGMzTkRiR0Z6Y3lBcklDZGZYMkZqZEdsdmJpMTBaWGgwSjMwK2UzQnliM0J6TG1GamRHbHZibFJsZUhSOVBDOXpjR0Z1UGx4dUlDQWdJQ0FnSUNBOEwyRStYRzRnSUNBZ0tWeHVmVHRjYmx4dVpYaHdiM0owSUdOdmJuTjBJRVJ2ZDI1c2IyRmtWakZKYlhCc0lEMGdLSEJ5YjNCek9rUnZkMjVzYjJGa1ZqRk5iMlJsYkNrZ1BUNGdlMXh1WEc0Z0lDQWdZMjl1YzNRZ2V5QmthWE53YkdGNVJtbHNaVzVoYldVZ1BTQm1ZV3h6WlNBc1pHbHpjR3hoZVZOcGVtVWdQU0JtWVd4elpTd2dJR1JwYzNCc1lYbEdiM0p0WVhRZ1BTQm1ZV3h6WlgwZ1BTQndjbTl3Y3p0Y2JpQWdJQ0JjYmlBZ0lDQmpiMjV6ZENCamMzTkRiR0Z6Y3lBOUlIQnliM0J6TG1KaGMyVkRjM05EYkdGemN5QXJJQ2dnY0hKdmNITXVhWE5KYmtWa2FYUnZjaUFnUHlBbklHTnhMV1JrTFdacGJHVW5JRG9nSnljcE8xeHVJQ0FnSUdOdmJuTjBJR1JwYzNCc1lYbEViM2R1Ykc5aFpFUmxkR0ZwYkhNZ1BTQmthWE53YkdGNVJtbHNaVzVoYldVZ2ZId2daR2x6Y0d4aGVWTnBlbVVnZkh3Z1pHbHpjR3hoZVVadmNtMWhkRHRjYmlBZ0lDQnlaWFIxY200Z0tGeHVJQ0FnSUNBZ0lDQThaR2wySUdOc1lYTnpUbUZ0WlQxN1kzTnpRMnhoYzNOOVBseHVJQ0FnSUNBZ0lDQWdJQ0FnZXlFaGNISnZjSE11ZEdsMGJHVWdKaVlnUEVSdmQyNXNiMkZrVmpGSVpXRmthVzVuUld4bGJXVnVkQ0I3TGk0dWNISnZjSE45THo1OVhHNGdJQ0FnSUNBZ0lDQWdJQ0I3SVNGd2NtOXdjeTVrWlhOamNtbHdkR2x2YmlBbUppQThSRzkzYm14dllXUldNVVJsYzJOeWFYQjBhVzl1SUhzdUxpNXdjbTl3YzMwdlBuMWNiaUFnSUNBZ0lDQWdJQ0FnSUh0a2FYTndiR0Y1Ukc5M2JteHZZV1JFWlhSaGFXeHpJQ1ltSUR4RWIzZHViRzloWkZZeFJHVjBZV2xzY3lCN0xpNHVjSEp2Y0hOOUx6NTlYRzRnSUNBZ0lDQWdJQ0FnSUNBOFJHOTNibXh2WVdSV01VeHBibXNnZXk0dUxuQnliM0J6ZlM4K1hHNGdJQ0FnSUNBZ0lEd3ZaR2wyUGx4dUlDQWdJQ2s3WEc1Y2JuMDdYRzVjYmx4dVhHNWpiMjV6ZENCRWIzZHViRzloWkZZeElEMGdLSEJ5YjNCek9rUnZkMjVzYjJGa1ZqRk5iMlJsYkNrZ1BUNGdlMXh1WEc0Z0lDQWdZMjl1YzNRZ1YzSmhjSEJsWkNBOUlIZHBkR2hEYjI1a2FYUnBiMjVoYkZCc1lXTmxTRzlzWkdWeUtIZHBkR2hUZEdGdVpHRnlaRUpoYzJWRGMzTkRiR0Z6Y3loRWIzZHViRzloWkZZeFNXMXdiQ3dnWENKamJYQXRaRzkzYm14dllXUmNJaWtzSUVSdmQyNXNiMkZrVmpGSmMwVnRjSFI1Um00c0lGd2lSRzkzYm14dllXUWdWakZjSWlrN1hHNGdJQ0FnY21WMGRYSnVJRHhYY21Gd2NHVmtJSHN1TGk1d2NtOXdjMzB2UGx4dWZUdGNibHh1Wlhod2IzSjBJR1JsWm1GMWJIUWdSRzkzYm14dllXUldNVHNpWFgwPSIsImV4cG9ydCBmdW5jdGlvbiBEb3dubG9hZFYxSXNFbXB0eUZuKHByb3BzKSB7XG4gICAgcmV0dXJuIChwcm9wcy51cmwgPT0gbnVsbCB8fCBwcm9wcy51cmwubGVuZ3RoID09PSAwKSAmJiBwcm9wcy5oYW5kbGVPbkNsaWNrID09IG51bGw7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lSRzkzYm14dllXUldNVWx6Ulcxd2RIbEdiaTVxY3lJc0luTnZkWEpqWlZKdmIzUWlPaUlpTENKemIzVnlZMlZ6SWpwYklrUnZkMjVzYjJGa1ZqRkpjMFZ0Y0hSNVJtNHVkSE1pWFN3aWJtRnRaWE1pT2x0ZExDSnRZWEJ3YVc1bmN5STZJa0ZCUjBFc1RVRkJUU3hWUVVGVkxHMUNRVUZ0UWl4RFFVRkRMRXRCUVhGQ08wbEJRM0pFTEU5QlFVOHNRMEZCUXl4TFFVRkxMRU5CUVVNc1IwRkJSeXhKUVVGSkxFbEJRVWtzU1VGQlNTeExRVUZMTEVOQlFVTXNSMEZCUnl4RFFVRkRMRTFCUVUwc1MwRkJTeXhEUVVGRExFTkJRVU1zU1VGQlNTeExRVUZMTEVOQlFVTXNZVUZCWVN4SlFVRkpMRWxCUVVrc1EwRkJRenRCUVVONFJpeERRVUZESWl3aWMyOTFjbU5sYzBOdmJuUmxiblFpT2xzaWFXMXdiM0owSUh0RWIzZHViRzloWkZZeFRXOWtaV3g5SUdaeWIyMGdYQ0l1TDBSdmQyNXNiMkZrVmpGY0lqdGNibHh1WEc1bGVIQnZjblFnWm5WdVkzUnBiMjRnUkc5M2JteHZZV1JXTVVselJXMXdkSGxHYmlod2NtOXdjenBFYjNkdWJHOWhaRll4VFc5a1pXd3BPaUJpYjI5c1pXRnVlMXh1SUNBZ0lISmxkSFZ5YmlBb2NISnZjSE11ZFhKc0lEMDlJRzUxYkd3Z2ZId2djSEp2Y0hNdWRYSnNMbXhsYm1kMGFDQTlQVDBnTUNrZ0ppWWdjSEp2Y0hNdWFHRnVaR3hsVDI1RGJHbGpheUE5UFNCdWRXeHNPMXh1ZlNKZGZRPT0iLCIvKlxuICogIENvcHlyaWdodCAyMDIwIEFkb2JlXG4gKlxuICogIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiAgeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICAgICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqICBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiAgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiAgU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuY29uc3QgREVGQVVMVF9FTVBUWV9URVhUX0xBQkVMID0gJ1BsZWFzZSBjb25maWd1cmUgdGhlIGNvbXBvbmVudCc7XG5leHBvcnQgY29uc3QgRWRpdG9yUGxhY2VIb2xkZXIgPSAocHJvcHMpID0+IHtcbiAgICBjb25zdCBwYXJ0MSA9IChwcm9wcy5jb21wb25lbnRUaXRsZSAhPSBudWxsICYmIHByb3BzLmNvbXBvbmVudFRpdGxlLmxlbmd0aCA+IDApID8gcHJvcHMuY29tcG9uZW50VGl0bGUgKyAnIC0gJyA6ICcnO1xuICAgIGNvbnN0IHBhcnQyID0gKHByb3BzLmVtcHR5VGV4dEFwcGVuZCAhPSBudWxsKSA/IHByb3BzLmVtcHR5VGV4dEFwcGVuZCA6IERFRkFVTFRfRU1QVFlfVEVYVF9MQUJFTDtcbiAgICBjb25zdCBlbXB0eVRleHQgPSBwYXJ0MSArIHBhcnQyO1xuICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzTmFtZTogJ2NxLXBsYWNlaG9sZGVyJyArIChwcm9wcy5jbGFzc0FwcGVuZCAhPSBudWxsID8gJyAnICsgcHJvcHMuY2xhc3NBcHBlbmQgOiAnJykgfSwgZW1wdHlUZXh0KSk7XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pY0d4aFkyVm9iMnhrWlhJdWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUlpd2ljMjkxY21ObGN5STZXeUp3YkdGalpXaHZiR1JsY2k1MGMzZ2lYU3dpYm1GdFpYTWlPbHRkTENKdFlYQndhVzVuY3lJNklrRkJRVUU3T3pzN096czdPenM3T3pzN08wZEJZMGM3UVVGRFNDeFBRVUZQTEV0QlFXdENMRTFCUVUwc1QwRkJUeXhEUVVGRE8wRkJUM1pETEUxQlFVMHNkMEpCUVhkQ0xFZEJRVWNzWjBOQlFXZERMRU5CUVVNN1FVRkZiRVVzVFVGQlRTeERRVUZETEUxQlFVMHNhVUpCUVdsQ0xFZEJRVWNzUTBGQlF5eExRVUZ6UWl4RlFVRkZMRVZCUVVVN1NVRkZlRVFzVFVGQlRTeExRVUZMTEVkQlFWY3NRMEZCUXl4TFFVRkxMRU5CUVVNc1kwRkJZeXhKUVVGSkxFbEJRVWtzU1VGQlNTeExRVUZMTEVOQlFVTXNZMEZCWXl4RFFVRkRMRTFCUVUwc1IwRkJSeXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVVXNTMEZCU3l4RFFVRkRMR05CUVdNc1IwRkJTU3hMUVVGTExFTkJRVU1zUTBGQlF5eERRVUZETEVWQlFVVXNRMEZCUXp0SlFVTTVTQ3hOUVVGTkxFdEJRVXNzUjBGQlZ5eERRVUZETEV0QlFVc3NRMEZCUXl4bFFVRmxMRWxCUVVrc1NVRkJTU3hEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZGTEV0QlFVc3NRMEZCUXl4bFFVRmxMRU5CUVVNc1EwRkJReXhEUVVGRExIZENRVUYzUWl4RFFVRkRPMGxCUXpGSExFMUJRVTBzVTBGQlV5eEhRVUZITEV0QlFVc3NSMEZCUnl4TFFVRkxMRU5CUVVNN1NVRkZhRU1zVDBGQlR5eERRVU5JTERaQ1FVTkpMRk5CUVZNc1JVRkJSU3huUWtGQlowSXNSMEZCUnl4RFFVRkRMRXRCUVVzc1EwRkJReXhYUVVGWExFbEJRVWtzU1VGQlNTeERRVUZCTEVOQlFVTXNRMEZCUXl4SFFVRkhMRWRCUVVjc1MwRkJTeXhEUVVGRExGZEJRVmNzUTBGQlF5eERRVUZETEVOQlFVTXNSVUZCUlN4RFFVRkRMRWxCUTNSR0xGTkJRVk1zUTBGRFVpeERRVU5VTEVOQlFVRTdRVUZEVEN4RFFVRkRMRU5CUVVNaUxDSnpiM1Z5WTJWelEyOXVkR1Z1ZENJNld5SXZLbHh1SUNvZ0lFTnZjSGx5YVdkb2RDQXlNREl3SUVGa2IySmxYRzRnS2x4dUlDb2dJRXhwWTJWdWMyVmtJSFZ1WkdWeUlIUm9aU0JCY0dGamFHVWdUR2xqWlc1elpTd2dWbVZ5YzJsdmJpQXlMakFnS0hSb1pTQmNJa3hwWTJWdWMyVmNJaWs3WEc0Z0tpQWdlVzkxSUcxaGVTQnViM1FnZFhObElIUm9hWE1nWm1sc1pTQmxlR05sY0hRZ2FXNGdZMjl0Y0d4cFlXNWpaU0IzYVhSb0lIUm9aU0JNYVdObGJuTmxMbHh1SUNvZ0lGbHZkU0J0WVhrZ2IySjBZV2x1SUdFZ1kyOXdlU0J2WmlCMGFHVWdUR2xqWlc1elpTQmhkRnh1SUNwY2JpQXFJQ0FnSUNBZ2FIUjBjRG92TDNkM2R5NWhjR0ZqYUdVdWIzSm5MMnhwWTJWdWMyVnpMMHhKUTBWT1UwVXRNaTR3WEc0Z0tseHVJQ29nSUZWdWJHVnpjeUJ5WlhGMWFYSmxaQ0JpZVNCaGNIQnNhV05oWW14bElHeGhkeUJ2Y2lCaFozSmxaV1FnZEc4Z2FXNGdkM0pwZEdsdVp5d2djMjltZEhkaGNtVmNiaUFxSUNCa2FYTjBjbWxpZFhSbFpDQjFibVJsY2lCMGFHVWdUR2xqWlc1elpTQnBjeUJrYVhOMGNtbGlkWFJsWkNCdmJpQmhiaUJjSWtGVElFbFRYQ0lnUWtGVFNWTXNYRzRnS2lBZ1YwbFVTRTlWVkNCWFFWSlNRVTVVU1VWVElFOVNJRU5QVGtSSlZFbFBUbE1nVDBZZ1FVNVpJRXRKVGtRc0lHVnBkR2hsY2lCbGVIQnlaWE56SUc5eUlHbHRjR3hwWldRdVhHNGdLaUFnVTJWbElIUm9aU0JNYVdObGJuTmxJR1p2Y2lCMGFHVWdjM0JsWTJsbWFXTWdiR0Z1WjNWaFoyVWdaMjkyWlhKdWFXNW5JSEJsY20xcGMzTnBiMjV6SUdGdVpGeHVJQ29nSUd4cGJXbDBZWFJwYjI1eklIVnVaR1Z5SUhSb1pTQk1hV05sYm5ObExseHVJQ292WEc1cGJYQnZjblFnVW1WaFkzUXNJSHREYjIxd2IyNWxiblI5SUdaeWIyMGdKM0psWVdOMEp6dGNibHh1Wlhod2IzSjBJR2x1ZEdWeVptRmpaU0JRYkdGalpVaHZiR1JsY2sxdlpHVnNJSHRjYmlBZ0lDQmpiMjF3YjI1bGJuUlVhWFJzWlQ4NklITjBjbWx1WjF4dUlDQWdJR05zWVhOelFYQndaVzVrUHpvZ2MzUnlhVzVuWEc0Z0lDQWdaVzF3ZEhsVVpYaDBRWEJ3Wlc1a1B6b2djM1J5YVc1blhHNTlYRzVqYjI1emRDQkVSVVpCVlV4VVgwVk5VRlJaWDFSRldGUmZURUZDUlV3Z1BTQW5VR3hsWVhObElHTnZibVpwWjNWeVpTQjBhR1VnWTI5dGNHOXVaVzUwSnp0Y2JseHVaWGh3YjNKMElHTnZibk4wSUVWa2FYUnZjbEJzWVdObFNHOXNaR1Z5SUQwZ0tIQnliM0J6T2xCc1lXTmxTRzlzWkdWeVRXOWtaV3dwSUQwK0lIdGNibHh1SUNBZ0lHTnZibk4wSUhCaGNuUXhPaUJ6ZEhKcGJtY2dQU0FvY0hKdmNITXVZMjl0Y0c5dVpXNTBWR2wwYkdVZ0lUMGdiblZzYkNBbUppQndjbTl3Y3k1amIyMXdiMjVsYm5SVWFYUnNaUzVzWlc1bmRHZ2dQaUF3S1NBL0lDQndjbTl3Y3k1amIyMXdiMjVsYm5SVWFYUnNaU0FySUNBbklDMGdKeUE2SUNjbk8xeHVJQ0FnSUdOdmJuTjBJSEJoY25ReU9pQnpkSEpwYm1jZ1BTQW9jSEp2Y0hNdVpXMXdkSGxVWlhoMFFYQndaVzVrSUNFOUlHNTFiR3dwSUQ4Z0lIQnliM0J6TG1WdGNIUjVWR1Y0ZEVGd2NHVnVaQ0E2SUVSRlJrRlZURlJmUlUxUVZGbGZWRVZZVkY5TVFVSkZURHRjYmlBZ0lDQmpiMjV6ZENCbGJYQjBlVlJsZUhRZ1BTQndZWEowTVNBcklIQmhjblF5TzF4dVhHNGdJQ0FnY21WMGRYSnVJQ2hjYmlBZ0lDQWdJQ0FnUEdScGRseHVJQ0FnSUNBZ0lDQWdJQ0FnWTJ4aGMzTk9ZVzFsUFhzblkzRXRjR3hoWTJWb2IyeGtaWEluSUNzZ0tIQnliM0J6TG1Oc1lYTnpRWEJ3Wlc1a0lDRTlJRzUxYkd3L0lDY2dKeUFySUhCeWIzQnpMbU5zWVhOelFYQndaVzVrSURvZ0p5Y3BmVDVjYmlBZ0lDQWdJQ0FnSUNBZ0lIdGxiWEIwZVZSbGVIUjlYRzRnSUNBZ0lDQWdJRHd2WkdsMlBseHVJQ0FnSUNsY2JuMDdJbDE5IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==