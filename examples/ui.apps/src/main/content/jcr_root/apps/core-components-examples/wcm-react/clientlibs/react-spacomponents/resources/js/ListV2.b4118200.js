(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ListV2"],{

/***/ "../../react-base-components/dist/authoring/list/v2/ListV2.js":
/*!**********************************************************************************************************************!*\
  !*** /Users/raaijmak/workspace/aem-react-core-wcm-components/react-base-components/dist/authoring/list/v2/ListV2.js ***!
  \**********************************************************************************************************************/
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

      return __webpack_require__(__webpack_require__.s = 2);
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
      "./src/authoring/list/v2/ListV2.tsx":
      /*!******************************************!*\
        !*** ./src/authoring/list/v2/ListV2.tsx ***!
        \******************************************/

      /*! exports provided: ListV2ItemModificationDate, ListV2ItemContent, ListV2Anchor, ListV2ItemDescription, ListV2Impl, default */

      /***/
      function (module, __webpack_exports__, __webpack_require__) {
        "use strict";

        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */


        __webpack_require__.d(__webpack_exports__, "ListV2ItemModificationDate", function () {
          return ListV2ItemModificationDate;
        });
        /* harmony export (binding) */


        __webpack_require__.d(__webpack_exports__, "ListV2ItemContent", function () {
          return ListV2ItemContent;
        });
        /* harmony export (binding) */


        __webpack_require__.d(__webpack_exports__, "ListV2Anchor", function () {
          return ListV2Anchor;
        });
        /* harmony export (binding) */


        __webpack_require__.d(__webpack_exports__, "ListV2ItemDescription", function () {
          return ListV2ItemDescription;
        });
        /* harmony export (binding) */


        __webpack_require__.d(__webpack_exports__, "ListV2Impl", function () {
          return ListV2Impl;
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


        var _routing_RoutedLink__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
        /*! ../../../routing/RoutedLink */
        "./src/routing/RoutedLink.tsx");
        /* harmony import */


        var _ListV2IsEmptyFn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
        /*! ./ListV2IsEmptyFn */
        "./src/authoring/list/v2/ListV2IsEmptyFn.ts");
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


        const ListV2ItemModificationDate = item => {
          const dateStringToDisplay = item.lastModifiedFormatted ? item.lastModifiedFormatted : "";
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
            className: item.baseCssClass + '__item-date'
          }, dateStringToDisplay);
        };

        const ListV2ItemContent = item => {
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
            className: item.baseCssClass + '__item-title'
          }, item.title), item.showModificationDate && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ListV2ItemModificationDate, Object.assign({}, item)));
        };

        const ListV2Anchor = item => {
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_routing_RoutedLink__WEBPACK_IMPORTED_MODULE_2__["RoutedLink"], {
            isRouted: item.routed,
            className: item.baseCssClass + '__item-link',
            to: item.url
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ListV2ItemContent, Object.assign({}, item)));
        };

        const ListV2ItemDescription = item => {
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
            className: item.baseCssClass + '__item-description'
          }, "$", item.description);
        };

        const ListV2Impl = props => {
          const ListV2Item = item => {
            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
              className: props.baseCssClass + '__item'
            }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("article", null, props.linkItems && !!item.url && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ListV2Anchor, Object.assign({}, item)), !props.linkItems && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ListV2ItemContent, Object.assign({}, item, {
              index: item.index
            })), props.showDescription && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ListV2ItemDescription, Object.assign({}, item))));
          };

          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
            className: props.baseCssClass
          }, props.items.map((item, index) => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ListV2Item, Object.assign({}, item, {
            key: "cmp-list-" + index,
            baseCssClass: props.baseCssClass,
            routed: item.routed,
            index: index
          }))));
        };

        const ListV2 = props => {
          const Wrapped = Object(_AbstractCoreComponent__WEBPACK_IMPORTED_MODULE_1__["withConditionalPlaceHolder"])(Object(_AbstractCoreComponent__WEBPACK_IMPORTED_MODULE_1__["withStandardBaseCssClass"])(ListV2Impl, "cmp-list"), _ListV2IsEmptyFn__WEBPACK_IMPORTED_MODULE_3__["ListV2IsEmptyFn"], "List V2");
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Wrapped, Object.assign({}, props));
        };
        /* harmony default export */


        __webpack_exports__["default"] = ListV2; //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTGlzdFYyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiTGlzdFYyLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7R0FjRztBQUdILE9BQU8sS0FBSyxNQUFNLE9BQU8sQ0FBQztBQUMxQixPQUFPLEVBQWtCLDBCQUEwQixFQUFDLHdCQUF3QixFQUFDLE1BQU0sZ0NBQWdDLENBQUM7QUFFcEgsT0FBTyxFQUFDLFVBQVUsRUFBQyxNQUFNLDZCQUE2QixDQUFDO0FBQ3ZELE9BQU8sRUFBQyxlQUFlLEVBQUMsTUFBTSxtQkFBbUIsQ0FBQztBQXVCbEQsTUFBTSxDQUFDLE1BQU0sMEJBQTBCLEdBQUcsQ0FBQyxJQUFlLEVBQUUsRUFBRTtJQUMxRCxNQUFNLG1CQUFtQixHQUFHLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLHFCQUFxQixDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7SUFDekYsT0FBTyxDQUNILDhCQUFNLFNBQVMsRUFBRSxJQUFJLENBQUMsWUFBWSxHQUFHLGFBQWEsSUFBRyxtQkFBbUIsQ0FBUSxDQUNuRixDQUFBO0FBQ0wsQ0FBQyxDQUFDO0FBRUYsTUFBTSxDQUFDLE1BQU0saUJBQWlCLEdBQUcsQ0FBQyxJQUFlLEVBQUUsRUFBRTtJQUNqRCxPQUFPLENBQ0g7UUFDSSw4QkFBTSxTQUFTLEVBQUUsSUFBSSxDQUFDLFlBQVksR0FBRyxjQUFjLElBQUcsSUFBSSxDQUFDLEtBQUssQ0FBUTtRQUN2RSxJQUFJLENBQUMsb0JBQW9CLElBQUksb0JBQUMsMEJBQTBCLG9CQUFLLElBQUksRUFBSSxDQUN2RSxDQUNOLENBQUE7QUFDTCxDQUFDLENBQUM7QUFFRixNQUFNLENBQUMsTUFBTSxZQUFZLEdBQUcsQ0FBQyxJQUFlLEVBQUUsRUFBRTtJQUU1QyxPQUFPLENBQ0gsb0JBQUMsVUFBVSxJQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsTUFBTSxFQUFFLFNBQVMsRUFBRSxJQUFJLENBQUMsWUFBWSxHQUFHLGFBQWEsRUFBRSxFQUFFLEVBQUUsSUFBSSxDQUFDLEdBQUc7UUFDekYsb0JBQUMsaUJBQWlCLG9CQUFLLElBQUksRUFBRyxDQUNyQixDQUNoQixDQUFBO0FBQ0wsQ0FBQyxDQUFDO0FBRUYsTUFBTSxDQUFDLE1BQU0scUJBQXFCLEdBQUcsQ0FBQyxJQUFnQixFQUFFLEVBQUU7SUFDdEQsT0FBTyxDQUNILDhCQUFNLFNBQVMsRUFBRSxJQUFJLENBQUMsWUFBWSxHQUFHLG9CQUFvQjs7UUFBSSxJQUFJLENBQUMsV0FBVyxDQUFRLENBQ3hGLENBQUE7QUFDTCxDQUFDLENBQUM7QUFFRixNQUFNLENBQUMsTUFBTSxVQUFVLEdBQUcsQ0FBQyxLQUFpQixFQUFFLEVBQUU7SUFFNUMsTUFBTSxVQUFVLEdBQUcsQ0FBQyxJQUFlLEVBQUUsRUFBRTtRQUNuQyxPQUFPLENBQ0gsNEJBQUksU0FBUyxFQUFFLEtBQUssQ0FBQyxZQUFZLEdBQUcsUUFBUTtZQUN4QztnQkFDSyxLQUFLLENBQUMsU0FBUyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxJQUFJLG9CQUFDLFlBQVksb0JBQUssSUFBSSxFQUFHO2dCQUMxRCxDQUFDLEtBQUssQ0FBQyxTQUFTLElBQUksb0JBQUMsaUJBQWlCLG9CQUFLLElBQUksSUFBRSxLQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUssSUFBSTtnQkFDdEUsS0FBSyxDQUFDLGVBQWUsSUFBSSxvQkFBQyxxQkFBcUIsb0JBQUssSUFBSSxFQUFHLENBQ3RELENBQ1QsQ0FDUixDQUFBO0lBQ0wsQ0FBQyxDQUFDO0lBRUYsT0FBTyxDQUNILDRCQUFJLFNBQVMsRUFBRSxLQUFLLENBQUMsWUFBWSxJQUM1QixLQUFLLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBRSxLQUFLLEVBQUUsRUFBRSxDQUFDLG9CQUFDLFVBQVUsb0JBQUssSUFBSSxJQUFFLEdBQUcsRUFBRSxXQUFXLEdBQUcsS0FBSyxFQUFFLFlBQVksRUFBRSxLQUFLLENBQUMsWUFBWSxFQUFFLE1BQU0sRUFBRSxJQUFJLENBQUMsTUFBTSxFQUFFLEtBQUssRUFBRSxLQUFLLElBQUssQ0FBQyxDQUMxSixDQUNSLENBQUE7QUFDTCxDQUFDLENBQUM7QUFHRixNQUFNLE1BQU0sR0FBRyxDQUFDLEtBQWlCLEVBQUUsRUFBRTtJQUNqQyxNQUFNLE9BQU8sR0FBRywwQkFBMEIsQ0FBQyx3QkFBd0IsQ0FBQyxVQUFVLEVBQUUsVUFBVSxDQUFDLEVBQUUsZUFBZSxFQUFFLFNBQVMsQ0FBQyxDQUFBO0lBQ3hILE9BQU8sb0JBQUMsT0FBTyxvQkFBSyxLQUFLLEVBQUcsQ0FBQTtBQUNoQyxDQUFDLENBQUM7QUFFRixlQUFlLE1BQU0sQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiAgQ29weXJpZ2h0IDIwMjAgQWRvYmVcbiAqXG4gKiAgTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqICB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiAgWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICAgICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiAgVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqICBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqICBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiAgbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cblxuXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtIYXNCYXNlQ3NzQ2xhc3MsIHdpdGhDb25kaXRpb25hbFBsYWNlSG9sZGVyLHdpdGhTdGFuZGFyZEJhc2VDc3NDbGFzc30gZnJvbSBcIi4uLy4uLy4uL0Fic3RyYWN0Q29yZUNvbXBvbmVudFwiO1xuaW1wb3J0IHsgUm91dGVkQ29yZUNvbXBvbmVudE1vZGVsLCBSb3V0ZWRNb2RlbH0gZnJvbSBcIi4uLy4uLy4uL3JvdXRpbmcvUm91dGVkQ29yZUNvbXBvbmVudFwiO1xuaW1wb3J0IHtSb3V0ZWRMaW5rfSBmcm9tIFwiLi4vLi4vLi4vcm91dGluZy9Sb3V0ZWRMaW5rXCI7XG5pbXBvcnQge0xpc3RWMklzRW1wdHlGbn0gZnJvbSBcIi4vTGlzdFYySXNFbXB0eUZuXCI7XG5cblxuZXhwb3J0IGludGVyZmFjZSBMaXN0VjJJdGVtIGV4dGVuZHMgUm91dGVkTW9kZWwsSGFzQmFzZUNzc0NsYXNze1xuICAgIGluZGV4PzogbnVtYmVyXG4gICAgdXJsPzpzdHJpbmdcbiAgICBsYXN0TW9kaWZpZWQ/Om51bWJlclxuICAgIGxhc3RNb2RpZmllZEZvcm1hdHRlZD86c3RyaW5nXG4gICAgZGVzY3JpcHRpb24/OnN0cmluZ1xuICAgIHBhdGg6c3RyaW5nXG4gICAgdGl0bGU6c3RyaW5nLFxuICAgIHNob3dNb2RpZmljYXRpb25EYXRlPzogYm9vbGVhblxufVxuXG5cbmV4cG9ydCBpbnRlcmZhY2UgTGlzdFYyTW9kZWwgZXh0ZW5kcyBSb3V0ZWRDb3JlQ29tcG9uZW50TW9kZWx7XG4gICAgaXRlbXM6TGlzdFYySXRlbVtdXG4gICAgZGF0ZUZvcm1hdFN0cmluZzogc3RyaW5nXG4gICAgc2hvd0Rlc2NyaXB0aW9uOiBib29sZWFuXG4gICAgc2hvd01vZGlmaWNhdGlvbkRhdGU6IGJvb2xlYW5cbiAgICBsaW5rSXRlbXM6IGJvb2xlYW5cbn1cblxuZXhwb3J0IGNvbnN0IExpc3RWMkl0ZW1Nb2RpZmljYXRpb25EYXRlID0gKGl0ZW06TGlzdFYySXRlbSkgPT4ge1xuICAgIGNvbnN0IGRhdGVTdHJpbmdUb0Rpc3BsYXkgPSBpdGVtLmxhc3RNb2RpZmllZEZvcm1hdHRlZCA/IGl0ZW0ubGFzdE1vZGlmaWVkRm9ybWF0dGVkIDogXCJcIjtcbiAgICByZXR1cm4gKFxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9e2l0ZW0uYmFzZUNzc0NsYXNzICsgJ19faXRlbS1kYXRlJ30+e2RhdGVTdHJpbmdUb0Rpc3BsYXl9PC9zcGFuPlxuICAgIClcbn07XG5cbmV4cG9ydCBjb25zdCBMaXN0VjJJdGVtQ29udGVudCA9IChpdGVtOkxpc3RWMkl0ZW0pID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8PlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtpdGVtLmJhc2VDc3NDbGFzcyArICdfX2l0ZW0tdGl0bGUnfT57aXRlbS50aXRsZX08L3NwYW4+XG4gICAgICAgICAgICB7aXRlbS5zaG93TW9kaWZpY2F0aW9uRGF0ZSAmJiA8TGlzdFYySXRlbU1vZGlmaWNhdGlvbkRhdGUgey4uLml0ZW0gfS8+fVxuICAgICAgICA8Lz5cbiAgICApXG59O1xuXG5leHBvcnQgY29uc3QgTGlzdFYyQW5jaG9yID0gKGl0ZW06TGlzdFYySXRlbSkgPT4ge1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPFJvdXRlZExpbmsgaXNSb3V0ZWQ9e2l0ZW0ucm91dGVkfSBjbGFzc05hbWU9e2l0ZW0uYmFzZUNzc0NsYXNzICsgJ19faXRlbS1saW5rJ30gdG89e2l0ZW0udXJsfT5cbiAgICAgICAgICAgIDxMaXN0VjJJdGVtQ29udGVudCB7Li4uaXRlbX0vPlxuICAgICAgICA8L1JvdXRlZExpbms+XG4gICAgKVxufTtcblxuZXhwb3J0IGNvbnN0IExpc3RWMkl0ZW1EZXNjcmlwdGlvbiA9IChpdGVtOiBMaXN0VjJJdGVtKSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtpdGVtLmJhc2VDc3NDbGFzcyArICdfX2l0ZW0tZGVzY3JpcHRpb24nfT4ke2l0ZW0uZGVzY3JpcHRpb259PC9zcGFuPlxuICAgIClcbn07XG5cbmV4cG9ydCBjb25zdCBMaXN0VjJJbXBsID0gKHByb3BzOkxpc3RWMk1vZGVsKSA9PiB7XG5cbiAgICBjb25zdCBMaXN0VjJJdGVtID0gKGl0ZW06TGlzdFYySXRlbSkgPT4ge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT17cHJvcHMuYmFzZUNzc0NsYXNzICsgJ19faXRlbSd9ID5cbiAgICAgICAgICAgICAgICA8YXJ0aWNsZT5cbiAgICAgICAgICAgICAgICAgICAge3Byb3BzLmxpbmtJdGVtcyAmJiAhIWl0ZW0udXJsICYmIDxMaXN0VjJBbmNob3Igey4uLml0ZW19Lz59XG4gICAgICAgICAgICAgICAgICAgIHshcHJvcHMubGlua0l0ZW1zICYmIDxMaXN0VjJJdGVtQ29udGVudCB7Li4uaXRlbX0gaW5kZXg9e2l0ZW0uaW5kZXh9IC8+fVxuICAgICAgICAgICAgICAgICAgICB7cHJvcHMuc2hvd0Rlc2NyaXB0aW9uICYmIDxMaXN0VjJJdGVtRGVzY3JpcHRpb24gey4uLml0ZW19Lz59XG4gICAgICAgICAgICAgICAgPC9hcnRpY2xlPlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgKVxuICAgIH07XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8dWwgY2xhc3NOYW1lPXtwcm9wcy5iYXNlQ3NzQ2xhc3N9PlxuICAgICAgICAgICAge3Byb3BzLml0ZW1zLm1hcCgoaXRlbSwgaW5kZXgpID0+IDxMaXN0VjJJdGVtIHsuLi5pdGVtfSBrZXk9e1wiY21wLWxpc3QtXCIgKyBpbmRleH0gYmFzZUNzc0NsYXNzPXtwcm9wcy5iYXNlQ3NzQ2xhc3N9IHJvdXRlZD17aXRlbS5yb3V0ZWR9IGluZGV4PXtpbmRleH0gIC8+KX1cbiAgICAgICAgPC91bD5cbiAgICApXG59O1xuXG5cbmNvbnN0IExpc3RWMiA9IChwcm9wczpMaXN0VjJNb2RlbCkgPT4ge1xuICAgIGNvbnN0IFdyYXBwZWQgPSB3aXRoQ29uZGl0aW9uYWxQbGFjZUhvbGRlcih3aXRoU3RhbmRhcmRCYXNlQ3NzQ2xhc3MoTGlzdFYySW1wbCwgXCJjbXAtbGlzdFwiKSwgTGlzdFYySXNFbXB0eUZuLCBcIkxpc3QgVjJcIilcbiAgICByZXR1cm4gPFdyYXBwZWQgey4uLnByb3BzfS8+XG59O1xuXG5leHBvcnQgZGVmYXVsdCBMaXN0VjI7Il19

        /***/
      },

      /***/
      "./src/authoring/list/v2/ListV2IsEmptyFn.ts":
      /*!**************************************************!*\
        !*** ./src/authoring/list/v2/ListV2IsEmptyFn.ts ***!
        \**************************************************/

      /*! exports provided: ListV2IsEmptyFn */

      /***/
      function (module, __webpack_exports__, __webpack_require__) {
        "use strict";

        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */


        __webpack_require__.d(__webpack_exports__, "ListV2IsEmptyFn", function () {
          return ListV2IsEmptyFn;
        });

        function ListV2IsEmptyFn(props) {
          return props.items == null || props.items.length === 0;
        } //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTGlzdFYySXNFbXB0eUZuLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiTGlzdFYySXNFbXB0eUZuLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBLE1BQU0sVUFBVSxlQUFlLENBQUMsS0FBaUI7SUFDN0MsT0FBTyxLQUFLLENBQUMsS0FBSyxJQUFJLElBQUksSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLE1BQU0sS0FBSyxDQUFDLENBQUM7QUFDM0QsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7TGlzdFYyTW9kZWx9IGZyb20gXCIuL0xpc3RWMlwiO1xuXG5leHBvcnQgZnVuY3Rpb24gTGlzdFYySXNFbXB0eUZuKHByb3BzOkxpc3RWMk1vZGVsKTogYm9vbGVhbntcbiAgICByZXR1cm4gcHJvcHMuaXRlbXMgPT0gbnVsbCB8fCBwcm9wcy5pdGVtcy5sZW5ndGggPT09IDA7XG59Il19

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
      "./src/routing/RoutedLink.tsx":
      /*!************************************!*\
        !*** ./src/routing/RoutedLink.tsx ***!
        \************************************/

      /*! exports provided: RoutedLink */

      /***/
      function (module, __webpack_exports__, __webpack_require__) {
        "use strict";

        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */


        __webpack_require__.d(__webpack_exports__, "RoutedLink", function () {
          return RoutedLink;
        });
        /* harmony import */


        var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
        /*! react */
        "react");
        /* harmony import */


        var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
        /* harmony import */


        var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
        /*! react-router-dom */
        "react-router-dom");
        /* harmony import */


        var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);
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


        const RoutedLink = props => {
          const {
            to,
            isRouted,
            ...otherProps
          } = props;

          if (to === undefined || to.trim().length === 0) {
            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", Object.assign({
              href: '#'
            }, otherProps));
          }

          const isExternal = /^https?:\/\//.test(to);
          return isExternal || !isRouted ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", Object.assign({
            href: to
          }, otherProps)) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], Object.assign({}, otherProps, {
            to: to
          }));
        }; //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUm91dGVkTGluay5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIlJvdXRlZExpbmsudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7OztHQWNHO0FBRUgsT0FBTyxLQUFLLE1BQU0sT0FBTyxDQUFDO0FBQzFCLE9BQU8sRUFBQyxJQUFJLElBQUksVUFBVSxFQUFDLE1BQU0sa0JBQWtCLENBQUM7QUFPcEQsTUFBTSxDQUFDLE1BQU0sVUFBVSxHQUFHLENBQUMsS0FBZSxFQUFFLEVBQUU7SUFDMUMsTUFBTSxFQUFDLEVBQUUsRUFBRSxRQUFRLEVBQUUsR0FBRyxVQUFVLEVBQUMsR0FBRyxLQUFLLENBQUM7SUFFNUMsSUFBRyxFQUFFLEtBQUssU0FBUyxJQUFJLEVBQUUsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFDO1FBQzFDLE9BQU8seUNBQUcsSUFBSSxFQUFFLEdBQUcsSUFDWCxVQUFVLEVBQ2hCLENBQUM7S0FDTjtJQUNELE1BQU0sVUFBVSxHQUFHLGNBQWMsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7SUFFM0MsT0FBTyxVQUFVLElBQUksQ0FBQyxRQUFRLENBQUEsQ0FBQztRQUMzQixDQUFDLHlDQUNHLElBQUksRUFBRSxFQUFFLElBQ0osVUFBVSxFQUNoQixDQUFDO1FBQ0gsQ0FBQztZQUNELENBQUUsb0JBQUMsVUFBVSxvQkFBSyxVQUFVLElBQ2QsRUFBRSxFQUFFLEVBQUUsSUFDbEIsQ0FBQyxDQUFBO0FBQ1gsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqICBDb3B5cmlnaHQgMjAyMCBBZG9iZVxuICpcbiAqICBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqICBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgICAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqICBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiAgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqICBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtMaW5rIGFzIFJvdXRlckxpbmt9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xuXG5leHBvcnQgaW50ZXJmYWNlIExpbmtQcm9wcyB7XG4gICAgdG8/OiBzdHJpbmc7XG4gICAgaXNSb3V0ZWQ/OiBib29sZWFuO1xuICAgIFtwcm9wOiBzdHJpbmddOiBhbnlcbn1cbmV4cG9ydCBjb25zdCBSb3V0ZWRMaW5rID0gKHByb3BzOkxpbmtQcm9wcykgPT4ge1xuICAgIGNvbnN0IHt0bywgaXNSb3V0ZWQsIC4uLm90aGVyUHJvcHN9ID0gcHJvcHM7XG5cbiAgICBpZih0byA9PT0gdW5kZWZpbmVkIHx8IHRvLnRyaW0oKS5sZW5ndGggPT09IDApe1xuICAgICAgICByZXR1cm4gPGEgaHJlZj17JyMnfVxuICAgICAgICAgICAgey4uLm90aGVyUHJvcHN9XG4gICAgICAgIC8+O1xuICAgIH1cbiAgICBjb25zdCBpc0V4dGVybmFsID0gL15odHRwcz86XFwvXFwvLy50ZXN0KHRvKTtcblxuICAgIHJldHVybiBpc0V4dGVybmFsIHx8ICFpc1JvdXRlZD9cbiAgICAgICAgKDxhXG4gICAgICAgICAgICBocmVmPXt0b31cbiAgICAgICAgICAgIHsuLi5vdGhlclByb3BzfVxuICAgICAgICAvPilcbiAgICAgICAgOlxuICAgICAgICAoIDxSb3V0ZXJMaW5rIHsuLi5vdGhlclByb3BzfVxuICAgICAgICAgICAgICAgICAgICAgIHRvPXt0b31cbiAgICAgICAgLz4pXG59OyJdfQ==

        /***/

      },

      /***/
      2:
      /*!********************************************!*\
        !*** multi ./src/authoring/list/v2/ListV2 ***!
        \********************************************/

      /*! no static exports found */

      /***/
      function (module, exports, __webpack_require__) {
        module.exports = __webpack_require__(
        /*! ./src/authoring/list/v2/ListV2 */
        "./src/authoring/list/v2/ListV2.tsx");
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
      },

      /***/
      "react-router-dom":
      /*!***********************************!*\
        !*** external "react-router-dom" ***!
        \***********************************/

      /*! no static exports found */

      /***/
      function (module, exports) {
        module.exports = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
        /***/
      }
      /******/

    })
  );
});

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9yYWFpam1hay93b3Jrc3BhY2UvYWVtLXJlYWN0LWNvcmUtd2NtLWNvbXBvbmVudHMvZXhhbXBsZXMvcmVhY3Qtc3BhY29tcG9uZW50cy1leGFtcGxlLXByb2plY3QvQGFkb2JlL2FlbS1jb3JlLWNvbXBvbmVudHMtcmVhY3QtYmFzZS93ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCIvVXNlcnMvcmFhaWptYWsvd29ya3NwYWNlL2FlbS1yZWFjdC1jb3JlLXdjbS1jb21wb25lbnRzL2V4YW1wbGVzL3JlYWN0LXNwYWNvbXBvbmVudHMtZXhhbXBsZS1wcm9qZWN0L0BhZG9iZS9hZW0tY29yZS1jb21wb25lbnRzLXJlYWN0LWJhc2Uvd2VicGFjay9ib290c3RyYXAiLCIvVXNlcnMvcmFhaWptYWsvd29ya3NwYWNlL2FlbS1yZWFjdC1jb3JlLXdjbS1jb21wb25lbnRzL2V4YW1wbGVzL3JlYWN0LXNwYWNvbXBvbmVudHMtZXhhbXBsZS1wcm9qZWN0L0BhZG9iZS9hZW0tY29yZS1jb21wb25lbnRzLXJlYWN0LWJhc2Uvc3JjL0Fic3RyYWN0Q29yZUNvbXBvbmVudC50c3giLCIvVXNlcnMvcmFhaWptYWsvd29ya3NwYWNlL2FlbS1yZWFjdC1jb3JlLXdjbS1jb21wb25lbnRzL2V4YW1wbGVzL3JlYWN0LXNwYWNvbXBvbmVudHMtZXhhbXBsZS1wcm9qZWN0L0BhZG9iZS9hZW0tY29yZS1jb21wb25lbnRzLXJlYWN0LWJhc2Uvc3JjL2F1dGhvcmluZy9saXN0L3YyL0xpc3RWMi50c3giLCIvVXNlcnMvcmFhaWptYWsvd29ya3NwYWNlL2FlbS1yZWFjdC1jb3JlLXdjbS1jb21wb25lbnRzL2V4YW1wbGVzL3JlYWN0LXNwYWNvbXBvbmVudHMtZXhhbXBsZS1wcm9qZWN0L0BhZG9iZS9hZW0tY29yZS1jb21wb25lbnRzLXJlYWN0LWJhc2Uvc3JjL2F1dGhvcmluZy9saXN0L3YyL0xpc3RWMklzRW1wdHlGbi50cyIsIi9Vc2Vycy9yYWFpam1hay93b3Jrc3BhY2UvYWVtLXJlYWN0LWNvcmUtd2NtLWNvbXBvbmVudHMvZXhhbXBsZXMvcmVhY3Qtc3BhY29tcG9uZW50cy1leGFtcGxlLXByb2plY3QvQGFkb2JlL2FlbS1jb3JlLWNvbXBvbmVudHMtcmVhY3QtYmFzZS9zcmMvY29tbW9uL3BsYWNlaG9sZGVyLnRzeCIsIi9Vc2Vycy9yYWFpam1hay93b3Jrc3BhY2UvYWVtLXJlYWN0LWNvcmUtd2NtLWNvbXBvbmVudHMvZXhhbXBsZXMvcmVhY3Qtc3BhY29tcG9uZW50cy1leGFtcGxlLXByb2plY3QvQGFkb2JlL2FlbS1jb3JlLWNvbXBvbmVudHMtcmVhY3QtYmFzZS9zcmMvcm91dGluZy9Sb3V0ZWRMaW5rLnRzeCIsIi9Vc2Vycy9yYWFpam1hay93b3Jrc3BhY2UvYWVtLXJlYWN0LWNvcmUtd2NtLWNvbXBvbmVudHMvZXhhbXBsZXMvcmVhY3Qtc3BhY29tcG9uZW50cy1leGFtcGxlLXByb2plY3Qvd2VicGFjazovQGFkb2JlL2FlbS1jb3JlLWNvbXBvbmVudHMtcmVhY3QtYmFzZS9leHRlcm5hbCBcInJlYWN0XCIiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFDQSxZQUNBLDJCQURBLEtBRUEsRUFLQTtBQUNDLENBVEQsRUFTQyx5Q0FURCxFQVNDO0FBQ0Q7Ozs7O0FDVkE7QUFBQTs7QUFDQTtBQUFBOzs7QUFFQTtBQUFBOztBQUNBOztBQUFBOzs7QUFFQTtBQUFBOztBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7O0FBQ0E7OztBQUFBO0FBQ0E7QUFBQSxxQkFEQTs7QUFFQTtBQUFBLGtCQUZBOztBQUdBO0FBQUE7QUFDQTs7QUFKQTs7O0FBTUE7QUFBQTs7QUFDQTs7QUFBQTs7O0FBRUE7QUFBQTs7QUFDQTs7QUFBQTs7O0FBRUE7QUFBQTs7QUFDQTs7QUFBQTtBQUNBO0FBQUE7Ozs7O0FBR0E7QUFBQTs7QUFDQTs7O0FBQUE7OztBQUVBO0FBQUE7O0FBQ0E7O0FBQUE7OztBQUVBO0FBQUE7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QUFBQTs7O0FBQUE7QUFBQTtBQUFBOztBQUFPO0FBQ1A7QUFDQSxTLENBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0hBO0FBQUE7OztBQUFBO0FBQUE7QUFBQTtBQUFBOzs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7O0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFnQkE7O0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQSxpQkFBWSw2Q0FBSyxhQUFMLENBQUssS0FBTCxFQUFLO0FBQXVCO0FBQXZCLFdBQUwsRUFBdUgsU0FBdkgsQ0FBWjtBQUNBLFNBTE8sQyxDQU1QOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN2QkE7QUFBQTs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7OztBQUFBO0FBQUE7QUFBQTtBQUFBOzs7QUFBQTtBQUFBOzs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7O0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFpQk87QUFDUDtBQUFXLGNBQVg7QUFBVyxvQkFBWDtBQUFXO0FBQVgsY0FBeUMsS0FBekM7O0FBQ0E7QUFDQSxtQkFBZSw2Q0FBSyxhQUFMLENBQUssR0FBTCxFQUFLO0FBQW1DO0FBQW5DLGVBQStDLFVBQS9DLENBQUwsQ0FBZjtBQUNBOztBQUNBO0FBQ0EsMkNBQ1MsNkNBQUssYUFBTCxDQUFLLEdBQUwsRUFBSztBQUFtQztBQUFuQyxhQUE4QyxVQUE5QyxDQUFMLENBRFQsR0FHYSw2Q0FBSyxhQUFMLENBQW9CLHFEQUFwQixFQUE4QixrQkFBa0IsVUFBbEIsRUFBa0I7QUFBZTtBQUFmLFdBQWxCLENBQTlCLENBSGI7QUFJQSxTQVZPLEMsQ0FXUDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM1QkE7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7OztBUFVBO0NBVkEsRSIsImZpbGUiOiJqcy9MaXN0VjIuYjQxMTgyMDAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJAYWRvYmUvYWVtLWNvcmUtY29tcG9uZW50cy1yZWFjdC1iYXNlXCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcIkBhZG9iZS9hZW0tY29yZS1jb21wb25lbnRzLXJlYWN0LWJhc2VcIl0gPSBmYWN0b3J5KCk7XG59KSh0eXBlb2Ygc2VsZiAhPT0gJ3VuZGVmaW5lZCcgPyBzZWxmIDogdGhpcywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDIpO1xuIiwiLypcbiAqICBDb3B5cmlnaHQgMjAyMCBBZG9iZVxuICpcbiAqICBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqICBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgICAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqICBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiAgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqICBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgRWRpdG9yUGxhY2VIb2xkZXIgfSBmcm9tIFwiLi9jb21tb24vcGxhY2Vob2xkZXJcIjtcbmV4cG9ydCBjb25zdCB3aXRoU3RhbmRhcmRCYXNlQ3NzQ2xhc3MgPSAoQ29tcG9uZW50LCBkZWZhdWx0QmFzZUNzc0NsYXNzKSA9PiB7XG4gICAgcmV0dXJuIChwcm9wcykgPT4ge1xuICAgICAgICBjb25zdCBiYXNlQ3NzQ2xhc3MgPSBwcm9wcy5iYXNlQ3NzQ2xhc3M7XG4gICAgICAgIGNvbnN0IHRvQmVVc2VkQ3NzQ2xhc3MgPSBiYXNlQ3NzQ2xhc3MgJiYgYmFzZUNzc0NsYXNzLnRyaW0oKS5sZW5ndGggPiAwID8gYmFzZUNzc0NsYXNzIDogZGVmYXVsdEJhc2VDc3NDbGFzcztcbiAgICAgICAgY29uc3QgbWVyZ2VkUHJvcHMgPSB7XG4gICAgICAgICAgICAuLi5wcm9wcyxcbiAgICAgICAgICAgIGJhc2VDc3NDbGFzczogdG9CZVVzZWRDc3NDbGFzc1xuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChDb21wb25lbnQsIE9iamVjdC5hc3NpZ24oe30sIG1lcmdlZFByb3BzKSk7XG4gICAgfTtcbn07XG5leHBvcnQgY29uc3Qgd2l0aENvbmRpdGlvbmFsUGxhY2VIb2xkZXIgPSAoQ29tcG9uZW50LCBpc0VtcHR5LCBjb21wb25lbnRUaXRsZSwgZW1wdHlUZXh0KSA9PiB7XG4gICAgcmV0dXJuIChwcm9wcykgPT4ge1xuICAgICAgICBjb25zdCBpc0VtcHR5UmVzdWx0ID0gaXNFbXB0eShwcm9wcyk7XG4gICAgICAgIGNvbnN0IHsgaGlkZVBsYWNlSG9sZGVyID0gZmFsc2UsIGlzSW5FZGl0b3IgPSBmYWxzZSB9ID0gcHJvcHM7XG4gICAgICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChSZWFjdC5GcmFnbWVudCwgbnVsbCxcbiAgICAgICAgICAgICFpc0VtcHR5UmVzdWx0ICYmXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChDb21wb25lbnQsIE9iamVjdC5hc3NpZ24oe30sIHByb3BzKSksXG4gICAgICAgICAgICAoaXNFbXB0eVJlc3VsdCAmJiBpc0luRWRpdG9yICYmICFoaWRlUGxhY2VIb2xkZXIpICYmXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChFZGl0b3JQbGFjZUhvbGRlciwgeyBlbXB0eVRleHRBcHBlbmQ6IGVtcHR5VGV4dCwgY29tcG9uZW50VGl0bGU6IGNvbXBvbmVudFRpdGxlIH0pKSk7XG4gICAgfTtcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lRV0p6ZEhKaFkzUkRiM0psUTI5dGNHOXVaVzUwTG1weklpd2ljMjkxY21ObFVtOXZkQ0k2SWlJc0luTnZkWEpqWlhNaU9sc2lRV0p6ZEhKaFkzUkRiM0psUTI5dGNHOXVaVzUwTG5SemVDSmRMQ0p1WVcxbGN5STZXMTBzSW0xaGNIQnBibWR6SWpvaVFVRkJRVHM3T3pzN096czdPenM3T3pzN1IwRmpSenRCUVVWSUxFOUJRVThzUzBGQlN5eExRVUZMTEUxQlFVMHNUMEZCVHl4RFFVRkRPMEZCUnk5Q0xFOUJRVThzUlVGQlF5eHBRa0ZCYVVJc1JVRkJReXhOUVVGTkxITkNRVUZ6UWl4RFFVRkRPMEZCWlhaRUxFMUJRVTBzUTBGQlF5eE5RVUZOTEhkQ1FVRjNRaXhIUVVGSExFTkJSWEJETEZOQlFUQkNMRVZCUXpGQ0xHMUNRVUV3UWl4RlFVTktMRVZCUVVVN1NVRkRlRUlzVDBGQlR5eERRVUZETEV0QlFVOHNSVUZCUlN4RlFVRkZPMUZCUldZc1RVRkJUU3haUVVGWkxFZEJRVWNzUzBGQlN5eERRVUZETEZsQlFWa3NRMEZCUXp0UlFVTjRReXhOUVVGTkxHZENRVUZuUWl4SFFVRkhMRmxCUVZrc1NVRkJTU3haUVVGWkxFTkJRVU1zU1VGQlNTeEZRVUZGTEVOQlFVTXNUVUZCVFN4SFFVRkhMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zV1VGQldTeERRVUZETEVOQlFVTXNRMEZCUXl4dFFrRkJiVUlzUTBGQlF6dFJRVVUzUnl4TlFVRk5MRmRCUVZjc1IwRkJTenRaUVVOc1FpeEhRVUZITEV0QlFVczdXVUZEVWl4WlFVRlpMRVZCUVVVc1owSkJRV2RDTzFOQlEycERMRU5CUVVNN1VVRkZSaXhQUVVGUExHOUNRVUZETEZOQlFWTXNiMEpCUVVzc1YwRkJWeXhGUVVGSkxFTkJRVU03U1VGRE1VTXNRMEZCUXl4RFFVRkJPMEZCUTB3c1EwRkJReXhEUVVGRE8wRkJSVVlzVFVGQlRTeERRVUZETEUxQlFVMHNNRUpCUVRCQ0xFZEJRVWNzUTBGRk1VSXNVMEZCTUVJc1JVRkRNVUlzVDBGQk5FSXNSVUZETlVJc1kwRkJjMElzUlVGQlJTeFRRVUZwUWl4RlFVTnVRaXhGUVVGRk8wbEJRM0JETEU5QlFVOHNRMEZCUXl4TFFVRlBMRVZCUVVVc1JVRkJSVHRSUVVWbUxFMUJRVTBzWVVGQllTeEhRVUZYTEU5QlFVOHNRMEZCUXl4TFFVRkxMRU5CUVVNc1EwRkJRenRSUVVNM1F5eE5RVUZOTEVWQlFVTXNaVUZCWlN4SFFVRkhMRXRCUVVzc1JVRkJSU3hWUVVGVkxFZEJRVWNzUzBGQlN5eEZRVUZETEVkQlFVY3NTMEZCU3l4RFFVRkRPMUZCUlRWRUxFOUJRVThzUTBGRFNEdFpRVU5OTEVOQlFVTXNZVUZCWVR0blFrRkRhRUlzYjBKQlFVTXNVMEZCVXl4dlFrRkJTeXhMUVVGTExFVkJRVWs3V1VGSGNFSXNRMEZCUXl4aFFVRmhMRWxCUVVrc1ZVRkJWU3hKUVVGSkxFTkJRVU1zWlVGQlpTeERRVUZETzJkQ1FVTnFSQ3h2UWtGQlF5eHBRa0ZCYVVJc1NVRkRaQ3hsUVVGbExFVkJRVVVzVTBGQlV5eEZRVU14UWl4alFVRmpMRVZCUVVVc1kwRkJZeXhIUVVOb1F5eERRVVZRTEVOQlEwNHNRMEZCUXp0SlFVTk9MRU5CUVVNc1EwRkJRVHRCUVVOTUxFTkJRVU1zUTBGQlF5SXNJbk52ZFhKalpYTkRiMjUwWlc1MElqcGJJaThxWEc0Z0tpQWdRMjl3ZVhKcFoyaDBJREl3TWpBZ1FXUnZZbVZjYmlBcVhHNGdLaUFnVEdsalpXNXpaV1FnZFc1a1pYSWdkR2hsSUVGd1lXTm9aU0JNYVdObGJuTmxMQ0JXWlhKemFXOXVJREl1TUNBb2RHaGxJRndpVEdsalpXNXpaVndpS1R0Y2JpQXFJQ0I1YjNVZ2JXRjVJRzV2ZENCMWMyVWdkR2hwY3lCbWFXeGxJR1Y0WTJWd2RDQnBiaUJqYjIxd2JHbGhibU5sSUhkcGRHZ2dkR2hsSUV4cFkyVnVjMlV1WEc0Z0tpQWdXVzkxSUcxaGVTQnZZblJoYVc0Z1lTQmpiM0I1SUc5bUlIUm9aU0JNYVdObGJuTmxJR0YwWEc0Z0tseHVJQ29nSUNBZ0lDQm9kSFJ3T2k4dmQzZDNMbUZ3WVdOb1pTNXZjbWN2YkdsalpXNXpaWE12VEVsRFJVNVRSUzB5TGpCY2JpQXFYRzRnS2lBZ1ZXNXNaWE56SUhKbGNYVnBjbVZrSUdKNUlHRndjR3hwWTJGaWJHVWdiR0YzSUc5eUlHRm5jbVZsWkNCMGJ5QnBiaUIzY21sMGFXNW5MQ0J6YjJaMGQyRnlaVnh1SUNvZ0lHUnBjM1J5YVdKMWRHVmtJSFZ1WkdWeUlIUm9aU0JNYVdObGJuTmxJR2x6SUdScGMzUnlhV0oxZEdWa0lHOXVJR0Z1SUZ3aVFWTWdTVk5jSWlCQ1FWTkpVeXhjYmlBcUlDQlhTVlJJVDFWVUlGZEJVbEpCVGxSSlJWTWdUMUlnUTA5T1JFbFVTVTlPVXlCUFJpQkJUbGtnUzBsT1JDd2daV2wwYUdWeUlHVjRjSEpsYzNNZ2IzSWdhVzF3YkdsbFpDNWNiaUFxSUNCVFpXVWdkR2hsSUV4cFkyVnVjMlVnWm05eUlIUm9aU0J6Y0dWamFXWnBZeUJzWVc1bmRXRm5aU0JuYjNabGNtNXBibWNnY0dWeWJXbHpjMmx2Ym5NZ1lXNWtYRzRnS2lBZ2JHbHRhWFJoZEdsdmJuTWdkVzVrWlhJZ2RHaGxJRXhwWTJWdWMyVXVYRzRnS2k5Y2JseHVhVzF3YjNKMElDb2dZWE1nVW1WaFkzUWdabkp2YlNBbmNtVmhZM1FuTzF4dWFXMXdiM0owSUh0RGIyMXdiMjVsYm5SVWVYQmxmU0JtY205dElDZHlaV0ZqZENjN1hHNWNibWx0Y0c5eWRDQjdSV1JwZEc5eVVHeGhZMlZJYjJ4a1pYSjlJR1p5YjIwZ1hDSXVMMk52YlcxdmJpOXdiR0ZqWldodmJHUmxjbHdpTzF4dVhHNWxlSEJ2Y25RZ2FXNTBaWEptWVdObElFaGhjMEpoYzJWRGMzTkRiR0Z6Y3lCN1hHNGdJQ0FnWW1GelpVTnpjME5zWVhOelB6b2djM1J5YVc1blhHNTlYRzVjYm1WNGNHOXlkQ0JwYm5SbGNtWmhZMlVnUTI5eVpVTnZiWEJ2Ym1WdWRFMXZaR1ZzSUdWNGRHVnVaSE1nU0dGelFtRnpaVU56YzBOc1lYTnplMXh1SUNBZ0lHaHBaR1ZRYkdGalpVaHZiR1JsY2o4NklHSnZiMnhsWVc1Y2JpQWdJQ0JwYzBsdVJXUnBkRzl5UHpwaWIyOXNaV0Z1WEc1OVhHNWNibVY0Y0c5eWRDQnBiblJsY21aaFkyVWdRMjl5WlVOdmJYQnZibVZ1ZEZOMFlYUmxJSHRjYmx4dWZWeHVYRzVsZUhCdmNuUWdZMjl1YzNRZ2QybDBhRk4wWVc1a1lYSmtRbUZ6WlVOemMwTnNZWE56SUQwZ1BFMGdaWGgwWlc1a2N5QkRiM0psUTI5dGNHOXVaVzUwVFc5a1pXdytYRzRvWEc0Z0lDQWdRMjl0Y0c5dVpXNTBPa052YlhCdmJtVnVkRlI1Y0dVOFRUNHNYRzRnSUNBZ1pHVm1ZWFZzZEVKaGMyVkRjM05EYkdGemN6cHpkSEpwYm1kY2JpazZVbVZoWTNRdVEyOXRjRzl1Wlc1MFZIbHdaVHhOUGlBZ1BUNGdlMXh1SUNBZ0lISmxkSFZ5YmlBb2NISnZjSE02VFNrZ1BUNGdlMXh1WEc0Z0lDQWdJQ0FnSUdOdmJuTjBJR0poYzJWRGMzTkRiR0Z6Y3lBOUlIQnliM0J6TG1KaGMyVkRjM05EYkdGemN6dGNiaUFnSUNBZ0lDQWdZMjl1YzNRZ2RHOUNaVlZ6WldSRGMzTkRiR0Z6Y3lBOUlHSmhjMlZEYzNORGJHRnpjeUFtSmlCaVlYTmxRM056UTJ4aGMzTXVkSEpwYlNncExteGxibWQwYUNBK0lEQWdQeUJpWVhObFEzTnpRMnhoYzNNZ09pQmtaV1poZFd4MFFtRnpaVU56YzBOc1lYTnpPMXh1WEc0Z0lDQWdJQ0FnSUdOdmJuTjBJRzFsY21kbFpGQnliM0J6T2lCTlBTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNBdUxpNXdjbTl3Y3l4Y2JpQWdJQ0FnSUNBZ0lDQWdJR0poYzJWRGMzTkRiR0Z6Y3pvZ2RHOUNaVlZ6WldSRGMzTkRiR0Z6YzF4dUlDQWdJQ0FnSUNCOU8xeHVYRzRnSUNBZ0lDQWdJSEpsZEhWeWJpQThRMjl0Y0c5dVpXNTBJSHN1TGk1dFpYSm5aV1JRY205d2MzMGdMejQ3WEc0Z0lDQWdmVnh1ZlR0Y2JseHVaWGh3YjNKMElHTnZibk4wSUhkcGRHaERiMjVrYVhScGIyNWhiRkJzWVdObFNHOXNaR1Z5SUQwZ1BFMGdaWGgwWlc1a2N5QkRiM0psUTI5dGNHOXVaVzUwVFc5a1pXdytYRzRnSUNBZ0lDQWdJQ0FnSUNBb1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ1EyOXRjRzl1Wlc1ME9rTnZiWEJ2Ym1WdWRGUjVjR1U4VFQ0c0lGeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lHbHpSVzF3ZEhrNktIQnliM0J6T2swcElEMCtJR0p2YjJ4bFlXNHNYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdZMjl0Y0c5dVpXNTBWR2wwYkdVL09uTjBjbWx1Wnl3Z1pXMXdkSGxVWlhoMFB6cHpkSEpwYm1kY2JpQWdJQ0FnSUNBZ0lDQWdJQ2s2VW1WaFkzUXVRMjl0Y0c5dVpXNTBWSGx3WlR4TlBpQWdQVDRnZTF4dUlDQWdJSEpsZEhWeWJpQW9jSEp2Y0hNNlRTa2dQVDRnZTF4dVhHNGdJQ0FnSUNBZ0lHTnZibk4wSUdselJXMXdkSGxTWlhOMWJIUTZZbTl2YkdWaGJpQTlJR2x6Ulcxd2RIa29jSEp2Y0hNcE8xeHVJQ0FnSUNBZ0lDQmpiMjV6ZENCN2FHbGtaVkJzWVdObFNHOXNaR1Z5SUQwZ1ptRnNjMlVzSUdselNXNUZaR2wwYjNJZ1BTQm1ZV3h6WlgwZ1BTQndjbTl3Y3p0Y2JseHVJQ0FnSUNBZ0lDQnlaWFIxY200Z0tGeHVJQ0FnSUNBZ0lDQWdJQ0FnUEQ1Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCN0lDRnBjMFZ0Y0hSNVVtVnpkV3gwSUNZbVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ1BFTnZiWEJ2Ym1WdWRDQjdMaTR1Y0hKdmNITjlJQzgrWEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnZlZ4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdLR2x6Ulcxd2RIbFNaWE4xYkhRZ0ppWWdhWE5KYmtWa2FYUnZjaUFtSmlBaGFHbGtaVkJzWVdObFNHOXNaR1Z5S1NBbUpseHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0E4UldScGRHOXlVR3hoWTJWSWIyeGtaWEpjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJR1Z0Y0hSNVZHVjRkRUZ3Y0dWdVpEMTdaVzF3ZEhsVVpYaDBmVnh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdZMjl0Y0c5dVpXNTBWR2wwYkdVOWUyTnZiWEJ2Ym1WdWRGUnBkR3hsZlZ4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQXZQbHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJSDFjYmlBZ0lDQWdJQ0FnSUNBZ0lEd3ZQbHh1SUNBZ0lDQWdJQ0FwTzF4dUlDQWdJSDFjYm4wN0lsMTkiLCIvKlxuICogIENvcHlyaWdodCAyMDIwIEFkb2JlXG4gKlxuICogIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiAgeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICAgICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqICBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiAgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiAgU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgd2l0aENvbmRpdGlvbmFsUGxhY2VIb2xkZXIsIHdpdGhTdGFuZGFyZEJhc2VDc3NDbGFzcyB9IGZyb20gXCIuLi8uLi8uLi9BYnN0cmFjdENvcmVDb21wb25lbnRcIjtcbmltcG9ydCB7IFJvdXRlZExpbmsgfSBmcm9tIFwiLi4vLi4vLi4vcm91dGluZy9Sb3V0ZWRMaW5rXCI7XG5pbXBvcnQgeyBMaXN0VjJJc0VtcHR5Rm4gfSBmcm9tIFwiLi9MaXN0VjJJc0VtcHR5Rm5cIjtcbmV4cG9ydCBjb25zdCBMaXN0VjJJdGVtTW9kaWZpY2F0aW9uRGF0ZSA9IChpdGVtKSA9PiB7XG4gICAgY29uc3QgZGF0ZVN0cmluZ1RvRGlzcGxheSA9IGl0ZW0ubGFzdE1vZGlmaWVkRm9ybWF0dGVkID8gaXRlbS5sYXN0TW9kaWZpZWRGb3JtYXR0ZWQgOiBcIlwiO1xuICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChcInNwYW5cIiwgeyBjbGFzc05hbWU6IGl0ZW0uYmFzZUNzc0NsYXNzICsgJ19faXRlbS1kYXRlJyB9LCBkYXRlU3RyaW5nVG9EaXNwbGF5KSk7XG59O1xuZXhwb3J0IGNvbnN0IExpc3RWMkl0ZW1Db250ZW50ID0gKGl0ZW0pID0+IHtcbiAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoUmVhY3QuRnJhZ21lbnQsIG51bGwsXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIsIHsgY2xhc3NOYW1lOiBpdGVtLmJhc2VDc3NDbGFzcyArICdfX2l0ZW0tdGl0bGUnIH0sIGl0ZW0udGl0bGUpLFxuICAgICAgICBpdGVtLnNob3dNb2RpZmljYXRpb25EYXRlICYmIFJlYWN0LmNyZWF0ZUVsZW1lbnQoTGlzdFYySXRlbU1vZGlmaWNhdGlvbkRhdGUsIE9iamVjdC5hc3NpZ24oe30sIGl0ZW0pKSkpO1xufTtcbmV4cG9ydCBjb25zdCBMaXN0VjJBbmNob3IgPSAoaXRlbSkgPT4ge1xuICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChSb3V0ZWRMaW5rLCB7IGlzUm91dGVkOiBpdGVtLnJvdXRlZCwgY2xhc3NOYW1lOiBpdGVtLmJhc2VDc3NDbGFzcyArICdfX2l0ZW0tbGluaycsIHRvOiBpdGVtLnVybCB9LFxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KExpc3RWMkl0ZW1Db250ZW50LCBPYmplY3QuYXNzaWduKHt9LCBpdGVtKSkpKTtcbn07XG5leHBvcnQgY29uc3QgTGlzdFYySXRlbURlc2NyaXB0aW9uID0gKGl0ZW0pID0+IHtcbiAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIsIHsgY2xhc3NOYW1lOiBpdGVtLmJhc2VDc3NDbGFzcyArICdfX2l0ZW0tZGVzY3JpcHRpb24nIH0sXG4gICAgICAgIFwiJFwiLFxuICAgICAgICBpdGVtLmRlc2NyaXB0aW9uKSk7XG59O1xuZXhwb3J0IGNvbnN0IExpc3RWMkltcGwgPSAocHJvcHMpID0+IHtcbiAgICBjb25zdCBMaXN0VjJJdGVtID0gKGl0ZW0pID0+IHtcbiAgICAgICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KFwibGlcIiwgeyBjbGFzc05hbWU6IHByb3BzLmJhc2VDc3NDbGFzcyArICdfX2l0ZW0nIH0sXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiYXJ0aWNsZVwiLCBudWxsLFxuICAgICAgICAgICAgICAgIHByb3BzLmxpbmtJdGVtcyAmJiAhIWl0ZW0udXJsICYmIFJlYWN0LmNyZWF0ZUVsZW1lbnQoTGlzdFYyQW5jaG9yLCBPYmplY3QuYXNzaWduKHt9LCBpdGVtKSksXG4gICAgICAgICAgICAgICAgIXByb3BzLmxpbmtJdGVtcyAmJiBSZWFjdC5jcmVhdGVFbGVtZW50KExpc3RWMkl0ZW1Db250ZW50LCBPYmplY3QuYXNzaWduKHt9LCBpdGVtLCB7IGluZGV4OiBpdGVtLmluZGV4IH0pKSxcbiAgICAgICAgICAgICAgICBwcm9wcy5zaG93RGVzY3JpcHRpb24gJiYgUmVhY3QuY3JlYXRlRWxlbWVudChMaXN0VjJJdGVtRGVzY3JpcHRpb24sIE9iamVjdC5hc3NpZ24oe30sIGl0ZW0pKSkpKTtcbiAgICB9O1xuICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChcInVsXCIsIHsgY2xhc3NOYW1lOiBwcm9wcy5iYXNlQ3NzQ2xhc3MgfSwgcHJvcHMuaXRlbXMubWFwKChpdGVtLCBpbmRleCkgPT4gUmVhY3QuY3JlYXRlRWxlbWVudChMaXN0VjJJdGVtLCBPYmplY3QuYXNzaWduKHt9LCBpdGVtLCB7IGtleTogXCJjbXAtbGlzdC1cIiArIGluZGV4LCBiYXNlQ3NzQ2xhc3M6IHByb3BzLmJhc2VDc3NDbGFzcywgcm91dGVkOiBpdGVtLnJvdXRlZCwgaW5kZXg6IGluZGV4IH0pKSkpKTtcbn07XG5jb25zdCBMaXN0VjIgPSAocHJvcHMpID0+IHtcbiAgICBjb25zdCBXcmFwcGVkID0gd2l0aENvbmRpdGlvbmFsUGxhY2VIb2xkZXIod2l0aFN0YW5kYXJkQmFzZUNzc0NsYXNzKExpc3RWMkltcGwsIFwiY21wLWxpc3RcIiksIExpc3RWMklzRW1wdHlGbiwgXCJMaXN0IFYyXCIpO1xuICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFdyYXBwZWQsIE9iamVjdC5hc3NpZ24oe30sIHByb3BzKSk7XG59O1xuZXhwb3J0IGRlZmF1bHQgTGlzdFYyO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pVEdsemRGWXlMbXB6SWl3aWMyOTFjbU5sVW05dmRDSTZJaUlzSW5OdmRYSmpaWE1pT2xzaVRHbHpkRll5TG5SemVDSmRMQ0p1WVcxbGN5STZXMTBzSW0xaGNIQnBibWR6SWpvaVFVRkJRVHM3T3pzN096czdPenM3T3pzN1IwRmpSenRCUVVkSUxFOUJRVThzUzBGQlN5eE5RVUZOTEU5QlFVOHNRMEZCUXp0QlFVTXhRaXhQUVVGUExFVkJRV3RDTERCQ1FVRXdRaXhGUVVGRExIZENRVUYzUWl4RlFVRkRMRTFCUVUwc1owTkJRV2RETEVOQlFVTTdRVUZGY0Vnc1QwRkJUeXhGUVVGRExGVkJRVlVzUlVGQlF5eE5RVUZOTERaQ1FVRTJRaXhEUVVGRE8wRkJRM1pFTEU5QlFVOHNSVUZCUXl4bFFVRmxMRVZCUVVNc1RVRkJUU3h0UWtGQmJVSXNRMEZCUXp0QlFYVkNiRVFzVFVGQlRTeERRVUZETEUxQlFVMHNNRUpCUVRCQ0xFZEJRVWNzUTBGQlF5eEpRVUZsTEVWQlFVVXNSVUZCUlR0SlFVTXhSQ3hOUVVGTkxHMUNRVUZ0UWl4SFFVRkhMRWxCUVVrc1EwRkJReXh4UWtGQmNVSXNRMEZCUXl4RFFVRkRMRU5CUVVNc1NVRkJTU3hEUVVGRExIRkNRVUZ4UWl4RFFVRkRMRU5CUVVNc1EwRkJReXhGUVVGRkxFTkJRVU03U1VGRGVrWXNUMEZCVHl4RFFVTklMRGhDUVVGTkxGTkJRVk1zUlVGQlJTeEpRVUZKTEVOQlFVTXNXVUZCV1N4SFFVRkhMR0ZCUVdFc1NVRkJSeXh0UWtGQmJVSXNRMEZCVVN4RFFVTnVSaXhEUVVGQk8wRkJRMHdzUTBGQlF5eERRVUZETzBGQlJVWXNUVUZCVFN4RFFVRkRMRTFCUVUwc2FVSkJRV2xDTEVkQlFVY3NRMEZCUXl4SlFVRmxMRVZCUVVVc1JVRkJSVHRKUVVOcVJDeFBRVUZQTEVOQlEwZzdVVUZEU1N3NFFrRkJUU3hUUVVGVExFVkJRVVVzU1VGQlNTeERRVUZETEZsQlFWa3NSMEZCUnl4alFVRmpMRWxCUVVjc1NVRkJTU3hEUVVGRExFdEJRVXNzUTBGQlVUdFJRVU4yUlN4SlFVRkpMRU5CUVVNc2IwSkJRVzlDTEVsQlFVa3NiMEpCUVVNc01FSkJRVEJDTEc5Q1FVRkxMRWxCUVVrc1JVRkJTU3hEUVVOMlJTeERRVU5PTEVOQlFVRTdRVUZEVEN4RFFVRkRMRU5CUVVNN1FVRkZSaXhOUVVGTkxFTkJRVU1zVFVGQlRTeFpRVUZaTEVkQlFVY3NRMEZCUXl4SlFVRmxMRVZCUVVVc1JVRkJSVHRKUVVVMVF5eFBRVUZQTEVOQlEwZ3NiMEpCUVVNc1ZVRkJWU3hKUVVGRExGRkJRVkVzUlVGQlJTeEpRVUZKTEVOQlFVTXNUVUZCVFN4RlFVRkZMRk5CUVZNc1JVRkJSU3hKUVVGSkxFTkJRVU1zV1VGQldTeEhRVUZITEdGQlFXRXNSVUZCUlN4RlFVRkZMRVZCUVVVc1NVRkJTU3hEUVVGRExFZEJRVWM3VVVGRGVrWXNiMEpCUVVNc2FVSkJRV2xDTEc5Q1FVRkxMRWxCUVVrc1JVRkJSeXhEUVVOeVFpeERRVU5vUWl4RFFVRkJPMEZCUTB3c1EwRkJReXhEUVVGRE8wRkJSVVlzVFVGQlRTeERRVUZETEUxQlFVMHNjVUpCUVhGQ0xFZEJRVWNzUTBGQlF5eEpRVUZuUWl4RlFVRkZMRVZCUVVVN1NVRkRkRVFzVDBGQlR5eERRVU5JTERoQ1FVRk5MRk5CUVZNc1JVRkJSU3hKUVVGSkxFTkJRVU1zV1VGQldTeEhRVUZITEc5Q1FVRnZRanM3VVVGQlNTeEpRVUZKTEVOQlFVTXNWMEZCVnl4RFFVRlJMRU5CUTNoR0xFTkJRVUU3UVVGRFRDeERRVUZETEVOQlFVTTdRVUZGUml4TlFVRk5MRU5CUVVNc1RVRkJUU3hWUVVGVkxFZEJRVWNzUTBGQlF5eExRVUZwUWl4RlFVRkZMRVZCUVVVN1NVRkZOVU1zVFVGQlRTeFZRVUZWTEVkQlFVY3NRMEZCUXl4SlFVRmxMRVZCUVVVc1JVRkJSVHRSUVVOdVF5eFBRVUZQTEVOQlEwZ3NORUpCUVVrc1UwRkJVeXhGUVVGRkxFdEJRVXNzUTBGQlF5eFpRVUZaTEVkQlFVY3NVVUZCVVR0WlFVTjRRenRuUWtGRFN5eExRVUZMTEVOQlFVTXNVMEZCVXl4SlFVRkpMRU5CUVVNc1EwRkJReXhKUVVGSkxFTkJRVU1zUjBGQlJ5eEpRVUZKTEc5Q1FVRkRMRmxCUVZrc2IwSkJRVXNzU1VGQlNTeEZRVUZITzJkQ1FVTXhSQ3hEUVVGRExFdEJRVXNzUTBGQlF5eFRRVUZUTEVsQlFVa3NiMEpCUVVNc2FVSkJRV2xDTEc5Q1FVRkxMRWxCUVVrc1NVRkJSU3hMUVVGTExFVkJRVVVzU1VGQlNTeERRVUZETEV0QlFVc3NTVUZCU1R0blFrRkRkRVVzUzBGQlN5eERRVUZETEdWQlFXVXNTVUZCU1N4dlFrRkJReXh4UWtGQmNVSXNiMEpCUVVzc1NVRkJTU3hGUVVGSExFTkJRM1JFTEVOQlExUXNRMEZEVWl4RFFVRkJPMGxCUTB3c1EwRkJReXhEUVVGRE8wbEJSVVlzVDBGQlR5eERRVU5JTERSQ1FVRkpMRk5CUVZNc1JVRkJSU3hMUVVGTExFTkJRVU1zV1VGQldTeEpRVU0xUWl4TFFVRkxMRU5CUVVNc1MwRkJTeXhEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETEVsQlFVa3NSVUZCUlN4TFFVRkxMRVZCUVVVc1JVRkJSU3hEUVVGRExHOUNRVUZETEZWQlFWVXNiMEpCUVVzc1NVRkJTU3hKUVVGRkxFZEJRVWNzUlVGQlJTeFhRVUZYTEVkQlFVY3NTMEZCU3l4RlFVRkZMRmxCUVZrc1JVRkJSU3hMUVVGTExFTkJRVU1zV1VGQldTeEZRVUZGTEUxQlFVMHNSVUZCUlN4SlFVRkpMRU5CUVVNc1RVRkJUU3hGUVVGRkxFdEJRVXNzUlVGQlJTeExRVUZMTEVsQlFVc3NRMEZCUXl4RFFVTXhTaXhEUVVOU0xFTkJRVUU3UVVGRFRDeERRVUZETEVOQlFVTTdRVUZIUml4TlFVRk5MRTFCUVUwc1IwRkJSeXhEUVVGRExFdEJRV2xDTEVWQlFVVXNSVUZCUlR0SlFVTnFReXhOUVVGTkxFOUJRVThzUjBGQlJ5d3dRa0ZCTUVJc1EwRkJReXgzUWtGQmQwSXNRMEZCUXl4VlFVRlZMRVZCUVVVc1ZVRkJWU3hEUVVGRExFVkJRVVVzWlVGQlpTeEZRVUZGTEZOQlFWTXNRMEZCUXl4RFFVRkJPMGxCUTNoSUxFOUJRVThzYjBKQlFVTXNUMEZCVHl4dlFrRkJTeXhMUVVGTExFVkJRVWNzUTBGQlFUdEJRVU5vUXl4RFFVRkRMRU5CUVVNN1FVRkZSaXhsUVVGbExFMUJRVTBzUTBGQlF5SXNJbk52ZFhKalpYTkRiMjUwWlc1MElqcGJJaThxWEc0Z0tpQWdRMjl3ZVhKcFoyaDBJREl3TWpBZ1FXUnZZbVZjYmlBcVhHNGdLaUFnVEdsalpXNXpaV1FnZFc1a1pYSWdkR2hsSUVGd1lXTm9aU0JNYVdObGJuTmxMQ0JXWlhKemFXOXVJREl1TUNBb2RHaGxJRndpVEdsalpXNXpaVndpS1R0Y2JpQXFJQ0I1YjNVZ2JXRjVJRzV2ZENCMWMyVWdkR2hwY3lCbWFXeGxJR1Y0WTJWd2RDQnBiaUJqYjIxd2JHbGhibU5sSUhkcGRHZ2dkR2hsSUV4cFkyVnVjMlV1WEc0Z0tpQWdXVzkxSUcxaGVTQnZZblJoYVc0Z1lTQmpiM0I1SUc5bUlIUm9aU0JNYVdObGJuTmxJR0YwWEc0Z0tseHVJQ29nSUNBZ0lDQm9kSFJ3T2k4dmQzZDNMbUZ3WVdOb1pTNXZjbWN2YkdsalpXNXpaWE12VEVsRFJVNVRSUzB5TGpCY2JpQXFYRzRnS2lBZ1ZXNXNaWE56SUhKbGNYVnBjbVZrSUdKNUlHRndjR3hwWTJGaWJHVWdiR0YzSUc5eUlHRm5jbVZsWkNCMGJ5QnBiaUIzY21sMGFXNW5MQ0J6YjJaMGQyRnlaVnh1SUNvZ0lHUnBjM1J5YVdKMWRHVmtJSFZ1WkdWeUlIUm9aU0JNYVdObGJuTmxJR2x6SUdScGMzUnlhV0oxZEdWa0lHOXVJR0Z1SUZ3aVFWTWdTVk5jSWlCQ1FWTkpVeXhjYmlBcUlDQlhTVlJJVDFWVUlGZEJVbEpCVGxSSlJWTWdUMUlnUTA5T1JFbFVTVTlPVXlCUFJpQkJUbGtnUzBsT1JDd2daV2wwYUdWeUlHVjRjSEpsYzNNZ2IzSWdhVzF3YkdsbFpDNWNiaUFxSUNCVFpXVWdkR2hsSUV4cFkyVnVjMlVnWm05eUlIUm9aU0J6Y0dWamFXWnBZeUJzWVc1bmRXRm5aU0JuYjNabGNtNXBibWNnY0dWeWJXbHpjMmx2Ym5NZ1lXNWtYRzRnS2lBZ2JHbHRhWFJoZEdsdmJuTWdkVzVrWlhJZ2RHaGxJRXhwWTJWdWMyVXVYRzRnS2k5Y2JseHVYRzVwYlhCdmNuUWdVbVZoWTNRZ1puSnZiU0FuY21WaFkzUW5PMXh1YVcxd2IzSjBJSHRJWVhOQ1lYTmxRM056UTJ4aGMzTXNJSGRwZEdoRGIyNWthWFJwYjI1aGJGQnNZV05sU0c5c1pHVnlMSGRwZEdoVGRHRnVaR0Z5WkVKaGMyVkRjM05EYkdGemMzMGdabkp2YlNCY0lpNHVMeTR1THk0dUwwRmljM1J5WVdOMFEyOXlaVU52YlhCdmJtVnVkRndpTzF4dWFXMXdiM0owSUhzZ1VtOTFkR1ZrUTI5eVpVTnZiWEJ2Ym1WdWRFMXZaR1ZzTENCU2IzVjBaV1JOYjJSbGJIMGdabkp2YlNCY0lpNHVMeTR1THk0dUwzSnZkWFJwYm1jdlVtOTFkR1ZrUTI5eVpVTnZiWEJ2Ym1WdWRGd2lPMXh1YVcxd2IzSjBJSHRTYjNWMFpXUk1hVzVyZlNCbWNtOXRJRndpTGk0dkxpNHZMaTR2Y205MWRHbHVaeTlTYjNWMFpXUk1hVzVyWENJN1hHNXBiWEJ2Y25RZ2UweHBjM1JXTWtselJXMXdkSGxHYm4wZ1puSnZiU0JjSWk0dlRHbHpkRll5U1hORmJYQjBlVVp1WENJN1hHNWNibHh1Wlhod2IzSjBJR2x1ZEdWeVptRmpaU0JNYVhOMFZqSkpkR1Z0SUdWNGRHVnVaSE1nVW05MWRHVmtUVzlrWld3c1NHRnpRbUZ6WlVOemMwTnNZWE56ZTF4dUlDQWdJR2x1WkdWNFB6b2diblZ0WW1WeVhHNGdJQ0FnZFhKc1B6cHpkSEpwYm1kY2JpQWdJQ0JzWVhOMFRXOWthV1pwWldRL09tNTFiV0psY2x4dUlDQWdJR3hoYzNSTmIyUnBabWxsWkVadmNtMWhkSFJsWkQ4NmMzUnlhVzVuWEc0Z0lDQWdaR1Z6WTNKcGNIUnBiMjQvT25OMGNtbHVaMXh1SUNBZ0lIQmhkR2c2YzNSeWFXNW5YRzRnSUNBZ2RHbDBiR1U2YzNSeWFXNW5MRnh1SUNBZ0lITm9iM2ROYjJScFptbGpZWFJwYjI1RVlYUmxQem9nWW05dmJHVmhibHh1ZlZ4dVhHNWNibVY0Y0c5eWRDQnBiblJsY21aaFkyVWdUR2x6ZEZZeVRXOWtaV3dnWlhoMFpXNWtjeUJTYjNWMFpXUkRiM0psUTI5dGNHOXVaVzUwVFc5a1pXeDdYRzRnSUNBZ2FYUmxiWE02VEdsemRGWXlTWFJsYlZ0ZFhHNGdJQ0FnWkdGMFpVWnZjbTFoZEZOMGNtbHVaem9nYzNSeWFXNW5YRzRnSUNBZ2MyaHZkMFJsYzJOeWFYQjBhVzl1T2lCaWIyOXNaV0Z1WEc0Z0lDQWdjMmh2ZDAxdlpHbG1hV05oZEdsdmJrUmhkR1U2SUdKdmIyeGxZVzVjYmlBZ0lDQnNhVzVyU1hSbGJYTTZJR0p2YjJ4bFlXNWNibjFjYmx4dVpYaHdiM0owSUdOdmJuTjBJRXhwYzNSV01rbDBaVzFOYjJScFptbGpZWFJwYjI1RVlYUmxJRDBnS0dsMFpXMDZUR2x6ZEZZeVNYUmxiU2tnUFQ0Z2UxeHVJQ0FnSUdOdmJuTjBJR1JoZEdWVGRISnBibWRVYjBScGMzQnNZWGtnUFNCcGRHVnRMbXhoYzNSTmIyUnBabWxsWkVadmNtMWhkSFJsWkNBL0lHbDBaVzB1YkdGemRFMXZaR2xtYVdWa1JtOXliV0YwZEdWa0lEb2dYQ0pjSWp0Y2JpQWdJQ0J5WlhSMWNtNGdLRnh1SUNBZ0lDQWdJQ0E4YzNCaGJpQmpiR0Z6YzA1aGJXVTllMmwwWlcwdVltRnpaVU56YzBOc1lYTnpJQ3NnSjE5ZmFYUmxiUzFrWVhSbEozMCtlMlJoZEdWVGRISnBibWRVYjBScGMzQnNZWGw5UEM5emNHRnVQbHh1SUNBZ0lDbGNibjA3WEc1Y2JtVjRjRzl5ZENCamIyNXpkQ0JNYVhOMFZqSkpkR1Z0UTI5dWRHVnVkQ0E5SUNocGRHVnRPa3hwYzNSV01rbDBaVzBwSUQwK0lIdGNiaUFnSUNCeVpYUjFjbTRnS0Z4dUlDQWdJQ0FnSUNBOFBseHVJQ0FnSUNBZ0lDQWdJQ0FnUEhOd1lXNGdZMnhoYzNOT1lXMWxQWHRwZEdWdExtSmhjMlZEYzNORGJHRnpjeUFySUNkZlgybDBaVzB0ZEdsMGJHVW5mVDU3YVhSbGJTNTBhWFJzWlgwOEwzTndZVzQrWEc0Z0lDQWdJQ0FnSUNBZ0lDQjdhWFJsYlM1emFHOTNUVzlrYVdacFkyRjBhVzl1UkdGMFpTQW1KaUE4VEdsemRGWXlTWFJsYlUxdlpHbG1hV05oZEdsdmJrUmhkR1VnZXk0dUxtbDBaVzBnZlM4K2ZWeHVJQ0FnSUNBZ0lDQThMejVjYmlBZ0lDQXBYRzU5TzF4dVhHNWxlSEJ2Y25RZ1kyOXVjM1FnVEdsemRGWXlRVzVqYUc5eUlEMGdLR2wwWlcwNlRHbHpkRll5U1hSbGJTa2dQVDRnZTF4dVhHNGdJQ0FnY21WMGRYSnVJQ2hjYmlBZ0lDQWdJQ0FnUEZKdmRYUmxaRXhwYm1zZ2FYTlNiM1YwWldROWUybDBaVzB1Y205MWRHVmtmU0JqYkdGemMwNWhiV1U5ZTJsMFpXMHVZbUZ6WlVOemMwTnNZWE56SUNzZ0oxOWZhWFJsYlMxc2FXNXJKMzBnZEc4OWUybDBaVzB1ZFhKc2ZUNWNiaUFnSUNBZ0lDQWdJQ0FnSUR4TWFYTjBWakpKZEdWdFEyOXVkR1Z1ZENCN0xpNHVhWFJsYlgwdlBseHVJQ0FnSUNBZ0lDQThMMUp2ZFhSbFpFeHBibXMrWEc0Z0lDQWdLVnh1ZlR0Y2JseHVaWGh3YjNKMElHTnZibk4wSUV4cGMzUldNa2wwWlcxRVpYTmpjbWx3ZEdsdmJpQTlJQ2hwZEdWdE9pQk1hWE4wVmpKSmRHVnRLU0E5UGlCN1hHNGdJQ0FnY21WMGRYSnVJQ2hjYmlBZ0lDQWdJQ0FnUEhOd1lXNGdZMnhoYzNOT1lXMWxQWHRwZEdWdExtSmhjMlZEYzNORGJHRnpjeUFySUNkZlgybDBaVzB0WkdWelkzSnBjSFJwYjI0bmZUNGtlMmwwWlcwdVpHVnpZM0pwY0hScGIyNTlQQzl6Y0dGdVBseHVJQ0FnSUNsY2JuMDdYRzVjYm1WNGNHOXlkQ0JqYjI1emRDQk1hWE4wVmpKSmJYQnNJRDBnS0hCeWIzQnpPa3hwYzNSV01rMXZaR1ZzS1NBOVBpQjdYRzVjYmlBZ0lDQmpiMjV6ZENCTWFYTjBWakpKZEdWdElEMGdLR2wwWlcwNlRHbHpkRll5U1hSbGJTa2dQVDRnZTF4dUlDQWdJQ0FnSUNCeVpYUjFjbTRnS0Z4dUlDQWdJQ0FnSUNBZ0lDQWdQR3hwSUdOc1lYTnpUbUZ0WlQxN2NISnZjSE11WW1GelpVTnpjME5zWVhOeklDc2dKMTlmYVhSbGJTZDlJRDVjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0E4WVhKMGFXTnNaVDVjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2UzQnliM0J6TG14cGJtdEpkR1Z0Y3lBbUppQWhJV2wwWlcwdWRYSnNJQ1ltSUR4TWFYTjBWakpCYm1Ob2IzSWdleTR1TG1sMFpXMTlMejU5WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lIc2hjSEp2Y0hNdWJHbHVhMGwwWlcxeklDWW1JRHhNYVhOMFZqSkpkR1Z0UTI5dWRHVnVkQ0I3TGk0dWFYUmxiWDBnYVc1a1pYZzllMmwwWlcwdWFXNWtaWGg5SUM4K2ZWeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0I3Y0hKdmNITXVjMmh2ZDBSbGMyTnlhWEIwYVc5dUlDWW1JRHhNYVhOMFZqSkpkR1Z0UkdWelkzSnBjSFJwYjI0Z2V5NHVMbWwwWlcxOUx6NTlYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdQQzloY25ScFkyeGxQbHh1SUNBZ0lDQWdJQ0FnSUNBZ1BDOXNhVDVjYmlBZ0lDQWdJQ0FnS1Z4dUlDQWdJSDA3WEc1Y2JpQWdJQ0J5WlhSMWNtNGdLRnh1SUNBZ0lDQWdJQ0E4ZFd3Z1kyeGhjM05PWVcxbFBYdHdjbTl3Y3k1aVlYTmxRM056UTJ4aGMzTjlQbHh1SUNBZ0lDQWdJQ0FnSUNBZ2UzQnliM0J6TG1sMFpXMXpMbTFoY0Nnb2FYUmxiU3dnYVc1a1pYZ3BJRDArSUR4TWFYTjBWakpKZEdWdElIc3VMaTVwZEdWdGZTQnJaWGs5ZTF3aVkyMXdMV3hwYzNRdFhDSWdLeUJwYm1SbGVIMGdZbUZ6WlVOemMwTnNZWE56UFh0d2NtOXdjeTVpWVhObFEzTnpRMnhoYzNOOUlISnZkWFJsWkQxN2FYUmxiUzV5YjNWMFpXUjlJR2x1WkdWNFBYdHBibVJsZUgwZ0lDOCtLWDFjYmlBZ0lDQWdJQ0FnUEM5MWJENWNiaUFnSUNBcFhHNTlPMXh1WEc1Y2JtTnZibk4wSUV4cGMzUldNaUE5SUNod2NtOXdjenBNYVhOMFZqSk5iMlJsYkNrZ1BUNGdlMXh1SUNBZ0lHTnZibk4wSUZkeVlYQndaV1FnUFNCM2FYUm9RMjl1WkdsMGFXOXVZV3hRYkdGalpVaHZiR1JsY2loM2FYUm9VM1JoYm1SaGNtUkNZWE5sUTNOelEyeGhjM01vVEdsemRGWXlTVzF3YkN3Z1hDSmpiWEF0YkdsemRGd2lLU3dnVEdsemRGWXlTWE5GYlhCMGVVWnVMQ0JjSWt4cGMzUWdWakpjSWlsY2JpQWdJQ0J5WlhSMWNtNGdQRmR5WVhCd1pXUWdleTR1TG5CeWIzQnpmUzgrWEc1OU8xeHVYRzVsZUhCdmNuUWdaR1ZtWVhWc2RDQk1hWE4wVmpJN0lsMTkiLCJleHBvcnQgZnVuY3Rpb24gTGlzdFYySXNFbXB0eUZuKHByb3BzKSB7XG4gICAgcmV0dXJuIHByb3BzLml0ZW1zID09IG51bGwgfHwgcHJvcHMuaXRlbXMubGVuZ3RoID09PSAwO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pVEdsemRGWXlTWE5GYlhCMGVVWnVMbXB6SWl3aWMyOTFjbU5sVW05dmRDSTZJaUlzSW5OdmRYSmpaWE1pT2xzaVRHbHpkRll5U1hORmJYQjBlVVp1TG5SeklsMHNJbTVoYldWeklqcGJYU3dpYldGd2NHbHVaM01pT2lKQlFVVkJMRTFCUVUwc1ZVRkJWU3hsUVVGbExFTkJRVU1zUzBGQmFVSTdTVUZETjBNc1QwRkJUeXhMUVVGTExFTkJRVU1zUzBGQlN5eEpRVUZKTEVsQlFVa3NTVUZCU1N4TFFVRkxMRU5CUVVNc1MwRkJTeXhEUVVGRExFMUJRVTBzUzBGQlN5eERRVUZETEVOQlFVTTdRVUZETTBRc1EwRkJReUlzSW5OdmRYSmpaWE5EYjI1MFpXNTBJanBiSW1sdGNHOXlkQ0I3VEdsemRGWXlUVzlrWld4OUlHWnliMjBnWENJdUwweHBjM1JXTWx3aU8xeHVYRzVsZUhCdmNuUWdablZ1WTNScGIyNGdUR2x6ZEZZeVNYTkZiWEIwZVVadUtIQnliM0J6T2t4cGMzUldNazF2WkdWc0tUb2dZbTl2YkdWaGJudGNiaUFnSUNCeVpYUjFjbTRnY0hKdmNITXVhWFJsYlhNZ1BUMGdiblZzYkNCOGZDQndjbTl3Y3k1cGRHVnRjeTVzWlc1bmRHZ2dQVDA5SURBN1hHNTlJbDE5IiwiLypcbiAqICBDb3B5cmlnaHQgMjAyMCBBZG9iZVxuICpcbiAqICBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqICBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgICAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqICBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiAgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqICBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmNvbnN0IERFRkFVTFRfRU1QVFlfVEVYVF9MQUJFTCA9ICdQbGVhc2UgY29uZmlndXJlIHRoZSBjb21wb25lbnQnO1xuZXhwb3J0IGNvbnN0IEVkaXRvclBsYWNlSG9sZGVyID0gKHByb3BzKSA9PiB7XG4gICAgY29uc3QgcGFydDEgPSAocHJvcHMuY29tcG9uZW50VGl0bGUgIT0gbnVsbCAmJiBwcm9wcy5jb21wb25lbnRUaXRsZS5sZW5ndGggPiAwKSA/IHByb3BzLmNvbXBvbmVudFRpdGxlICsgJyAtICcgOiAnJztcbiAgICBjb25zdCBwYXJ0MiA9IChwcm9wcy5lbXB0eVRleHRBcHBlbmQgIT0gbnVsbCkgPyBwcm9wcy5lbXB0eVRleHRBcHBlbmQgOiBERUZBVUxUX0VNUFRZX1RFWFRfTEFCRUw7XG4gICAgY29uc3QgZW1wdHlUZXh0ID0gcGFydDEgKyBwYXJ0MjtcbiAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzc05hbWU6ICdjcS1wbGFjZWhvbGRlcicgKyAocHJvcHMuY2xhc3NBcHBlbmQgIT0gbnVsbCA/ICcgJyArIHByb3BzLmNsYXNzQXBwZW5kIDogJycpIH0sIGVtcHR5VGV4dCkpO1xufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaWNHeGhZMlZvYjJ4a1pYSXVhbk1pTENKemIzVnlZMlZTYjI5MElqb2lJaXdpYzI5MWNtTmxjeUk2V3lKd2JHRmpaV2h2YkdSbGNpNTBjM2dpWFN3aWJtRnRaWE1pT2x0ZExDSnRZWEJ3YVc1bmN5STZJa0ZCUVVFN096czdPenM3T3pzN096czdPMGRCWTBjN1FVRkRTQ3hQUVVGUExFdEJRV3RDTEUxQlFVMHNUMEZCVHl4RFFVRkRPMEZCVDNaRExFMUJRVTBzZDBKQlFYZENMRWRCUVVjc1owTkJRV2RETEVOQlFVTTdRVUZGYkVVc1RVRkJUU3hEUVVGRExFMUJRVTBzYVVKQlFXbENMRWRCUVVjc1EwRkJReXhMUVVGelFpeEZRVUZGTEVWQlFVVTdTVUZGZUVRc1RVRkJUU3hMUVVGTExFZEJRVmNzUTBGQlF5eExRVUZMTEVOQlFVTXNZMEZCWXl4SlFVRkpMRWxCUVVrc1NVRkJTU3hMUVVGTExFTkJRVU1zWTBGQll5eERRVUZETEUxQlFVMHNSMEZCUnl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVVVzUzBGQlN5eERRVUZETEdOQlFXTXNSMEZCU1N4TFFVRkxMRU5CUVVNc1EwRkJReXhEUVVGRExFVkJRVVVzUTBGQlF6dEpRVU01U0N4TlFVRk5MRXRCUVVzc1IwRkJWeXhEUVVGRExFdEJRVXNzUTBGQlF5eGxRVUZsTEVsQlFVa3NTVUZCU1N4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRkxFdEJRVXNzUTBGQlF5eGxRVUZsTEVOQlFVTXNRMEZCUXl4RFFVRkRMSGRDUVVGM1FpeERRVUZETzBsQlF6RkhMRTFCUVUwc1UwRkJVeXhIUVVGSExFdEJRVXNzUjBGQlJ5eExRVUZMTEVOQlFVTTdTVUZGYUVNc1QwRkJUeXhEUVVOSUxEWkNRVU5KTEZOQlFWTXNSVUZCUlN4blFrRkJaMElzUjBGQlJ5eERRVUZETEV0QlFVc3NRMEZCUXl4WFFVRlhMRWxCUVVrc1NVRkJTU3hEUVVGQkxFTkJRVU1zUTBGQlF5eEhRVUZITEVkQlFVY3NTMEZCU3l4RFFVRkRMRmRCUVZjc1EwRkJReXhEUVVGRExFTkJRVU1zUlVGQlJTeERRVUZETEVsQlEzUkdMRk5CUVZNc1EwRkRVaXhEUVVOVUxFTkJRVUU3UVVGRFRDeERRVUZETEVOQlFVTWlMQ0p6YjNWeVkyVnpRMjl1ZEdWdWRDSTZXeUl2S2x4dUlDb2dJRU52Y0hseWFXZG9kQ0F5TURJd0lFRmtiMkpsWEc0Z0tseHVJQ29nSUV4cFkyVnVjMlZrSUhWdVpHVnlJSFJvWlNCQmNHRmphR1VnVEdsalpXNXpaU3dnVm1WeWMybHZiaUF5TGpBZ0tIUm9aU0JjSWt4cFkyVnVjMlZjSWlrN1hHNGdLaUFnZVc5MUlHMWhlU0J1YjNRZ2RYTmxJSFJvYVhNZ1ptbHNaU0JsZUdObGNIUWdhVzRnWTI5dGNHeHBZVzVqWlNCM2FYUm9JSFJvWlNCTWFXTmxibk5sTGx4dUlDb2dJRmx2ZFNCdFlYa2diMkowWVdsdUlHRWdZMjl3ZVNCdlppQjBhR1VnVEdsalpXNXpaU0JoZEZ4dUlDcGNiaUFxSUNBZ0lDQWdhSFIwY0RvdkwzZDNkeTVoY0dGamFHVXViM0puTDJ4cFkyVnVjMlZ6TDB4SlEwVk9VMFV0TWk0d1hHNGdLbHh1SUNvZ0lGVnViR1Z6Y3lCeVpYRjFhWEpsWkNCaWVTQmhjSEJzYVdOaFlteGxJR3hoZHlCdmNpQmhaM0psWldRZ2RHOGdhVzRnZDNKcGRHbHVaeXdnYzI5bWRIZGhjbVZjYmlBcUlDQmthWE4wY21saWRYUmxaQ0IxYm1SbGNpQjBhR1VnVEdsalpXNXpaU0JwY3lCa2FYTjBjbWxpZFhSbFpDQnZiaUJoYmlCY0lrRlRJRWxUWENJZ1FrRlRTVk1zWEc0Z0tpQWdWMGxVU0U5VlZDQlhRVkpTUVU1VVNVVlRJRTlTSUVOUFRrUkpWRWxQVGxNZ1QwWWdRVTVaSUV0SlRrUXNJR1ZwZEdobGNpQmxlSEJ5WlhOeklHOXlJR2x0Y0d4cFpXUXVYRzRnS2lBZ1UyVmxJSFJvWlNCTWFXTmxibk5sSUdadmNpQjBhR1VnYzNCbFkybG1hV01nYkdGdVozVmhaMlVnWjI5MlpYSnVhVzVuSUhCbGNtMXBjM05wYjI1eklHRnVaRnh1SUNvZ0lHeHBiV2wwWVhScGIyNXpJSFZ1WkdWeUlIUm9aU0JNYVdObGJuTmxMbHh1SUNvdlhHNXBiWEJ2Y25RZ1VtVmhZM1FzSUh0RGIyMXdiMjVsYm5SOUlHWnliMjBnSjNKbFlXTjBKenRjYmx4dVpYaHdiM0owSUdsdWRHVnlabUZqWlNCUWJHRmpaVWh2YkdSbGNrMXZaR1ZzSUh0Y2JpQWdJQ0JqYjIxd2IyNWxiblJVYVhSc1pUODZJSE4wY21sdVoxeHVJQ0FnSUdOc1lYTnpRWEJ3Wlc1a1B6b2djM1J5YVc1blhHNGdJQ0FnWlcxd2RIbFVaWGgwUVhCd1pXNWtQem9nYzNSeWFXNW5YRzU5WEc1amIyNXpkQ0JFUlVaQlZVeFVYMFZOVUZSWlgxUkZXRlJmVEVGQ1JVd2dQU0FuVUd4bFlYTmxJR052Ym1acFozVnlaU0IwYUdVZ1kyOXRjRzl1Wlc1MEp6dGNibHh1Wlhod2IzSjBJR052Ym5OMElFVmthWFJ2Y2xCc1lXTmxTRzlzWkdWeUlEMGdLSEJ5YjNCek9sQnNZV05sU0c5c1pHVnlUVzlrWld3cElEMCtJSHRjYmx4dUlDQWdJR052Ym5OMElIQmhjblF4T2lCemRISnBibWNnUFNBb2NISnZjSE11WTI5dGNHOXVaVzUwVkdsMGJHVWdJVDBnYm5Wc2JDQW1KaUJ3Y205d2N5NWpiMjF3YjI1bGJuUlVhWFJzWlM1c1pXNW5kR2dnUGlBd0tTQS9JQ0J3Y205d2N5NWpiMjF3YjI1bGJuUlVhWFJzWlNBcklDQW5JQzBnSnlBNklDY25PMXh1SUNBZ0lHTnZibk4wSUhCaGNuUXlPaUJ6ZEhKcGJtY2dQU0FvY0hKdmNITXVaVzF3ZEhsVVpYaDBRWEJ3Wlc1a0lDRTlJRzUxYkd3cElEOGdJSEJ5YjNCekxtVnRjSFI1VkdWNGRFRndjR1Z1WkNBNklFUkZSa0ZWVEZSZlJVMVFWRmxmVkVWWVZGOU1RVUpGVER0Y2JpQWdJQ0JqYjI1emRDQmxiWEIwZVZSbGVIUWdQU0J3WVhKME1TQXJJSEJoY25ReU8xeHVYRzRnSUNBZ2NtVjBkWEp1SUNoY2JpQWdJQ0FnSUNBZ1BHUnBkbHh1SUNBZ0lDQWdJQ0FnSUNBZ1kyeGhjM05PWVcxbFBYc25ZM0V0Y0d4aFkyVm9iMnhrWlhJbklDc2dLSEJ5YjNCekxtTnNZWE56UVhCd1pXNWtJQ0U5SUc1MWJHdy9JQ2NnSnlBcklIQnliM0J6TG1Oc1lYTnpRWEJ3Wlc1a0lEb2dKeWNwZlQ1Y2JpQWdJQ0FnSUNBZ0lDQWdJSHRsYlhCMGVWUmxlSFI5WEc0Z0lDQWdJQ0FnSUR3dlpHbDJQbHh1SUNBZ0lDbGNibjA3SWwxOSIsIi8qXG4gKiAgQ29weXJpZ2h0IDIwMjAgQWRvYmVcbiAqXG4gKiAgTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqICB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiAgWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICAgICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiAgVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqICBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqICBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiAgbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBMaW5rIGFzIFJvdXRlckxpbmsgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcbmV4cG9ydCBjb25zdCBSb3V0ZWRMaW5rID0gKHByb3BzKSA9PiB7XG4gICAgY29uc3QgeyB0bywgaXNSb3V0ZWQsIC4uLm90aGVyUHJvcHMgfSA9IHByb3BzO1xuICAgIGlmICh0byA9PT0gdW5kZWZpbmVkIHx8IHRvLnRyaW0oKS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJhXCIsIE9iamVjdC5hc3NpZ24oeyBocmVmOiAnIycgfSwgb3RoZXJQcm9wcykpO1xuICAgIH1cbiAgICBjb25zdCBpc0V4dGVybmFsID0gL15odHRwcz86XFwvXFwvLy50ZXN0KHRvKTtcbiAgICByZXR1cm4gaXNFeHRlcm5hbCB8fCAhaXNSb3V0ZWQgP1xuICAgICAgICAoUmVhY3QuY3JlYXRlRWxlbWVudChcImFcIiwgT2JqZWN0LmFzc2lnbih7IGhyZWY6IHRvIH0sIG90aGVyUHJvcHMpKSlcbiAgICAgICAgOlxuICAgICAgICAgICAgKFJlYWN0LmNyZWF0ZUVsZW1lbnQoUm91dGVyTGluaywgT2JqZWN0LmFzc2lnbih7fSwgb3RoZXJQcm9wcywgeyB0bzogdG8gfSkpKTtcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lVbTkxZEdWa1RHbHVheTVxY3lJc0luTnZkWEpqWlZKdmIzUWlPaUlpTENKemIzVnlZMlZ6SWpwYklsSnZkWFJsWkV4cGJtc3VkSE40SWwwc0ltNWhiV1Z6SWpwYlhTd2liV0Z3Y0dsdVozTWlPaUpCUVVGQk96czdPenM3T3pzN096czdPenRIUVdOSE8wRkJSVWdzVDBGQlR5eExRVUZMTEUxQlFVMHNUMEZCVHl4RFFVRkRPMEZCUXpGQ0xFOUJRVThzUlVGQlF5eEpRVUZKTEVsQlFVa3NWVUZCVlN4RlFVRkRMRTFCUVUwc2EwSkJRV3RDTEVOQlFVTTdRVUZQY0VRc1RVRkJUU3hEUVVGRExFMUJRVTBzVlVGQlZTeEhRVUZITEVOQlFVTXNTMEZCWlN4RlFVRkZMRVZCUVVVN1NVRkRNVU1zVFVGQlRTeEZRVUZETEVWQlFVVXNSVUZCUlN4UlFVRlJMRVZCUVVVc1IwRkJSeXhWUVVGVkxFVkJRVU1zUjBGQlJ5eExRVUZMTEVOQlFVTTdTVUZGTlVNc1NVRkJSeXhGUVVGRkxFdEJRVXNzVTBGQlV5eEpRVUZKTEVWQlFVVXNRMEZCUXl4SlFVRkpMRVZCUVVVc1EwRkJReXhOUVVGTkxFdEJRVXNzUTBGQlF5eEZRVUZETzFGQlF6RkRMRTlCUVU4c2VVTkJRVWNzU1VGQlNTeEZRVUZGTEVkQlFVY3NTVUZEV0N4VlFVRlZMRVZCUTJoQ0xFTkJRVU03UzBGRFRqdEpRVU5FTEUxQlFVMHNWVUZCVlN4SFFVRkhMR05CUVdNc1EwRkJReXhKUVVGSkxFTkJRVU1zUlVGQlJTeERRVUZETEVOQlFVTTdTVUZGTTBNc1QwRkJUeXhWUVVGVkxFbEJRVWtzUTBGQlF5eFJRVUZSTEVOQlFVRXNRMEZCUXp0UlFVTXpRaXhEUVVGRExIbERRVU5ITEVsQlFVa3NSVUZCUlN4RlFVRkZMRWxCUTBvc1ZVRkJWU3hGUVVOb1FpeERRVUZETzFGQlEwZ3NRMEZCUXp0WlFVTkVMRU5CUVVVc2IwSkJRVU1zVlVGQlZTeHZRa0ZCU3l4VlFVRlZMRWxCUTJRc1JVRkJSU3hGUVVGRkxFVkJRVVVzU1VGRGJFSXNRMEZCUXl4RFFVRkJPMEZCUTFnc1EwRkJReXhEUVVGRElpd2ljMjkxY21ObGMwTnZiblJsYm5RaU9sc2lMeXBjYmlBcUlDQkRiM0I1Y21sbmFIUWdNakF5TUNCQlpHOWlaVnh1SUNwY2JpQXFJQ0JNYVdObGJuTmxaQ0IxYm1SbGNpQjBhR1VnUVhCaFkyaGxJRXhwWTJWdWMyVXNJRlpsY25OcGIyNGdNaTR3SUNoMGFHVWdYQ0pNYVdObGJuTmxYQ0lwTzF4dUlDb2dJSGx2ZFNCdFlYa2dibTkwSUhWelpTQjBhR2x6SUdacGJHVWdaWGhqWlhCMElHbHVJR052YlhCc2FXRnVZMlVnZDJsMGFDQjBhR1VnVEdsalpXNXpaUzVjYmlBcUlDQlpiM1VnYldGNUlHOWlkR0ZwYmlCaElHTnZjSGtnYjJZZ2RHaGxJRXhwWTJWdWMyVWdZWFJjYmlBcVhHNGdLaUFnSUNBZ0lHaDBkSEE2THk5M2QzY3VZWEJoWTJobExtOXlaeTlzYVdObGJuTmxjeTlNU1VORlRsTkZMVEl1TUZ4dUlDcGNiaUFxSUNCVmJteGxjM01nY21WeGRXbHlaV1FnWW5rZ1lYQndiR2xqWVdKc1pTQnNZWGNnYjNJZ1lXZHlaV1ZrSUhSdklHbHVJSGR5YVhScGJtY3NJSE52Wm5SM1lYSmxYRzRnS2lBZ1pHbHpkSEpwWW5WMFpXUWdkVzVrWlhJZ2RHaGxJRXhwWTJWdWMyVWdhWE1nWkdsemRISnBZblYwWldRZ2IyNGdZVzRnWENKQlV5QkpVMXdpSUVKQlUwbFRMRnh1SUNvZ0lGZEpWRWhQVlZRZ1YwRlNVa0ZPVkVsRlV5QlBVaUJEVDA1RVNWUkpUMDVUSUU5R0lFRk9XU0JMU1U1RUxDQmxhWFJvWlhJZ1pYaHdjbVZ6Y3lCdmNpQnBiWEJzYVdWa0xseHVJQ29nSUZObFpTQjBhR1VnVEdsalpXNXpaU0JtYjNJZ2RHaGxJSE53WldOcFptbGpJR3hoYm1kMVlXZGxJR2R2ZG1WeWJtbHVaeUJ3WlhKdGFYTnphVzl1Y3lCaGJtUmNiaUFxSUNCc2FXMXBkR0YwYVc5dWN5QjFibVJsY2lCMGFHVWdUR2xqWlc1elpTNWNiaUFxTDF4dVhHNXBiWEJ2Y25RZ1VtVmhZM1FnWm5KdmJTQW5jbVZoWTNRbk8xeHVhVzF3YjNKMElIdE1hVzVySUdGeklGSnZkWFJsY2t4cGJtdDlJR1p5YjIwZ0ozSmxZV04wTFhKdmRYUmxjaTFrYjIwbk8xeHVYRzVsZUhCdmNuUWdhVzUwWlhKbVlXTmxJRXhwYm10UWNtOXdjeUI3WEc0Z0lDQWdkRzgvT2lCemRISnBibWM3WEc0Z0lDQWdhWE5TYjNWMFpXUS9PaUJpYjI5c1pXRnVPMXh1SUNBZ0lGdHdjbTl3T2lCemRISnBibWRkT2lCaGJubGNibjFjYm1WNGNHOXlkQ0JqYjI1emRDQlNiM1YwWldSTWFXNXJJRDBnS0hCeWIzQnpPa3hwYm10UWNtOXdjeWtnUFQ0Z2UxeHVJQ0FnSUdOdmJuTjBJSHQwYnl3Z2FYTlNiM1YwWldRc0lDNHVMbTkwYUdWeVVISnZjSE45SUQwZ2NISnZjSE03WEc1Y2JpQWdJQ0JwWmloMGJ5QTlQVDBnZFc1a1pXWnBibVZrSUh4OElIUnZMblJ5YVcwb0tTNXNaVzVuZEdnZ1BUMDlJREFwZTF4dUlDQWdJQ0FnSUNCeVpYUjFjbTRnUEdFZ2FISmxaajE3SnlNbmZWeHVJQ0FnSUNBZ0lDQWdJQ0FnZXk0dUxtOTBhR1Z5VUhKdmNITjlYRzRnSUNBZ0lDQWdJQzgrTzF4dUlDQWdJSDFjYmlBZ0lDQmpiMjV6ZENCcGMwVjRkR1Z5Ym1Gc0lEMGdMMTVvZEhSd2N6ODZYRnd2WEZ3dkx5NTBaWE4wS0hSdktUdGNibHh1SUNBZ0lISmxkSFZ5YmlCcGMwVjRkR1Z5Ym1Gc0lIeDhJQ0ZwYzFKdmRYUmxaRDljYmlBZ0lDQWdJQ0FnS0R4aFhHNGdJQ0FnSUNBZ0lDQWdJQ0JvY21WbVBYdDBiMzFjYmlBZ0lDQWdJQ0FnSUNBZ0lIc3VMaTV2ZEdobGNsQnliM0J6ZlZ4dUlDQWdJQ0FnSUNBdlBpbGNiaUFnSUNBZ0lDQWdPbHh1SUNBZ0lDQWdJQ0FvSUR4U2IzVjBaWEpNYVc1cklIc3VMaTV2ZEdobGNsQnliM0J6ZlZ4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJSFJ2UFh0MGIzMWNiaUFnSUNBZ0lDQWdMejRwWEc1OU95SmRmUT09IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==