(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["TextV2"],{

/***/ "../../react-base-components/dist/authoring/text/v2/TextV2.js":
/*!**********************************************************************************************************************!*\
  !*** /Users/raaijmak/workspace/aem-react-core-wcm-components/react-base-components/dist/authoring/text/v2/TextV2.js ***!
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

      return __webpack_require__(__webpack_require__.s = 4);
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
      "./src/authoring/text/v2/TextV2.tsx":
      /*!******************************************!*\
        !*** ./src/authoring/text/v2/TextV2.tsx ***!
        \******************************************/

      /*! exports provided: TextV2RichText, TextV2PlainText, default */

      /***/
      function (module, __webpack_exports__, __webpack_require__) {
        "use strict";

        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */


        __webpack_require__.d(__webpack_exports__, "TextV2RichText", function () {
          return TextV2RichText;
        });
        /* harmony export (binding) */


        __webpack_require__.d(__webpack_exports__, "TextV2PlainText", function () {
          return TextV2PlainText;
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


        var _TextV2IsEmptyFn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
        /*! ./TextV2IsEmptyFn */
        "./src/authoring/text/v2/TextV2IsEmptyFn.ts");
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


        const TextV2RichText = props => {
          const text = props.text;
          const id = props.id ? props.id : props.cqPath ? props.cqPath.substr(props.cqPath.lastIndexOf('/') + 1) : "";
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
            className: props.baseCssClass,
            id: id,
            "data-rte-editelement": true,
            dangerouslySetInnerHTML: {
              __html: text
            }
          });
        };

        const TextV2PlainText = props => {
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
            className: props.baseCssClass
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
            className: "cmp-text__paragraph"
          }, props.text));
        };

        const TextV2Impl = props => {
          const {
            richText = false
          } = props;
          return richText ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(TextV2RichText, Object.assign({}, props)) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(TextV2PlainText, Object.assign({}, props));
        };

        const TextV2 = props => {
          const Wrapped = Object(_AbstractCoreComponent__WEBPACK_IMPORTED_MODULE_1__["withConditionalPlaceHolder"])(Object(_AbstractCoreComponent__WEBPACK_IMPORTED_MODULE_1__["withStandardBaseCssClass"])(TextV2Impl, "cmp-text"), _TextV2IsEmptyFn__WEBPACK_IMPORTED_MODULE_2__["TextV2IsEmptyFn"], "Text V2");
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Wrapped, Object.assign({}, props));
        };
        /* harmony default export */


        __webpack_exports__["default"] = TextV2; //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGV4dFYyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiVGV4dFYyLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7R0FjRztBQUVILE9BQU8sS0FBa0IsTUFBTSxPQUFPLENBQUM7QUFDdkMsT0FBTyxFQUFxQiwwQkFBMEIsRUFBRSx3QkFBd0IsRUFBQyxNQUFNLGdDQUFnQyxDQUFDO0FBQ3hILE9BQU8sRUFBQyxlQUFlLEVBQUMsTUFBTSxtQkFBbUIsQ0FBQztBQVNsRCxNQUFNLENBQUMsTUFBTSxjQUFjLEdBQUcsQ0FBQyxLQUFpQixFQUFFLEVBQUU7SUFDaEQsTUFBTSxJQUFJLEdBQVUsS0FBSyxDQUFDLElBQWMsQ0FBQztJQUN6QyxNQUFNLEVBQUUsR0FBRyxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUM7SUFFaEgsT0FBUSw2QkFBSyxTQUFTLEVBQUUsS0FBSyxDQUFDLFlBQVksRUFBRyxFQUFFLEVBQUUsRUFBRSxnQ0FBdUIsdUJBQXVCLEVBQUUsRUFBQyxNQUFNLEVBQUUsSUFBSSxFQUFDLEdBQUcsQ0FBQTtBQUN4SCxDQUFDLENBQUM7QUFFRixNQUFNLENBQUMsTUFBTSxlQUFlLEdBQUcsQ0FBQyxLQUFpQixFQUFFLEVBQUU7SUFDakQsT0FBUSw2QkFBSyxTQUFTLEVBQUUsS0FBSyxDQUFDLFlBQVk7UUFBRSwyQkFBRyxTQUFTLEVBQUMscUJBQXFCLElBQUUsS0FBSyxDQUFDLElBQUksQ0FBSyxDQUFNLENBQUE7QUFDekcsQ0FBQyxDQUFDO0FBRUYsTUFBTSxVQUFVLEdBQUcsQ0FBQyxLQUFpQixFQUFFLEVBQUU7SUFDckMsTUFBTSxFQUFDLFFBQVEsR0FBRyxLQUFLLEVBQUMsR0FBRyxLQUFLLENBQUM7SUFDakMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxvQkFBQyxjQUFjLG9CQUFLLEtBQUssRUFBRyxDQUFDLENBQUMsQ0FBQyxvQkFBQyxlQUFlLG9CQUFLLEtBQUssRUFBRyxDQUFDO0FBQ3JGLENBQUMsQ0FBQztBQUVGLE1BQU0sTUFBTSxHQUFHLENBQUMsS0FBaUIsRUFBRSxFQUFFO0lBQ2pDLE1BQU0sT0FBTyxHQUFHLDBCQUEwQixDQUFDLHdCQUF3QixDQUFDLFVBQVUsRUFBRSxVQUFVLENBQUMsRUFBRSxlQUFlLEVBQUUsU0FBUyxDQUFDLENBQUE7SUFDeEgsT0FBTyxvQkFBQyxPQUFPLG9CQUFLLEtBQUssRUFBRyxDQUFBO0FBQ2hDLENBQUMsQ0FBQztBQUVGLGVBQWUsTUFBTSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqICBDb3B5cmlnaHQgMjAyMCBBZG9iZVxuICpcbiAqICBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqICBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgICAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqICBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiAgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqICBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuXG5pbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7Q29yZUNvbXBvbmVudE1vZGVsLCB3aXRoQ29uZGl0aW9uYWxQbGFjZUhvbGRlciwgd2l0aFN0YW5kYXJkQmFzZUNzc0NsYXNzfSBmcm9tIFwiLi4vLi4vLi4vQWJzdHJhY3RDb3JlQ29tcG9uZW50XCI7XG5pbXBvcnQge1RleHRWMklzRW1wdHlGbn0gZnJvbSBcIi4vVGV4dFYySXNFbXB0eUZuXCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgVGV4dFYyTW9kZWwgZXh0ZW5kcyBDb3JlQ29tcG9uZW50TW9kZWx7XG4gICAgdGV4dD86IHN0cmluZztcbiAgICByaWNoVGV4dD86IGJvb2xlYW5cbiAgICBjcVBhdGg/OnN0cmluZ1xuICAgIGlkPzogc3RyaW5nXG59XG5cbmV4cG9ydCBjb25zdCBUZXh0VjJSaWNoVGV4dCA9IChwcm9wczpUZXh0VjJNb2RlbCkgPT4ge1xuICAgIGNvbnN0IHRleHQ6c3RyaW5nID0gcHJvcHMudGV4dCBhcyBzdHJpbmc7XG4gICAgY29uc3QgaWQgPSAocHJvcHMuaWQpID8gcHJvcHMuaWQgOiAocHJvcHMuY3FQYXRoID8gcHJvcHMuY3FQYXRoLnN1YnN0cihwcm9wcy5jcVBhdGgubGFzdEluZGV4T2YoJy8nKSArIDEpIDogXCJcIik7XG5cbiAgICByZXR1cm4gIDxkaXYgY2xhc3NOYW1lPXtwcm9wcy5iYXNlQ3NzQ2xhc3N9ICBpZD17aWR9IGRhdGEtcnRlLWVkaXRlbGVtZW50IGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7X19odG1sOiB0ZXh0fX0vPlxufTtcblxuZXhwb3J0IGNvbnN0IFRleHRWMlBsYWluVGV4dCA9IChwcm9wczpUZXh0VjJNb2RlbCkgPT4ge1xuICAgIHJldHVybiAgPGRpdiBjbGFzc05hbWU9e3Byb3BzLmJhc2VDc3NDbGFzc30+PHAgY2xhc3NOYW1lPVwiY21wLXRleHRfX3BhcmFncmFwaFwiPntwcm9wcy50ZXh0fTwvcD48L2Rpdj5cbn07XG5cbmNvbnN0IFRleHRWMkltcGwgPSAocHJvcHM6VGV4dFYyTW9kZWwpID0+IHtcbiAgICBjb25zdCB7cmljaFRleHQgPSBmYWxzZX0gPSBwcm9wcztcbiAgICByZXR1cm4gKHJpY2hUZXh0KSA/IDxUZXh0VjJSaWNoVGV4dCB7Li4ucHJvcHN9Lz4gOiA8VGV4dFYyUGxhaW5UZXh0IHsuLi5wcm9wc30vPjtcbn07XG5cbmNvbnN0IFRleHRWMiA9IChwcm9wczpUZXh0VjJNb2RlbCkgPT4ge1xuICAgIGNvbnN0IFdyYXBwZWQgPSB3aXRoQ29uZGl0aW9uYWxQbGFjZUhvbGRlcih3aXRoU3RhbmRhcmRCYXNlQ3NzQ2xhc3MoVGV4dFYySW1wbCwgXCJjbXAtdGV4dFwiKSwgVGV4dFYySXNFbXB0eUZuLCBcIlRleHQgVjJcIilcbiAgICByZXR1cm4gPFdyYXBwZWQgey4uLnByb3BzfS8+XG59O1xuXG5leHBvcnQgZGVmYXVsdCBUZXh0VjI7Il19

        /***/
      },

      /***/
      "./src/authoring/text/v2/TextV2IsEmptyFn.ts":
      /*!**************************************************!*\
        !*** ./src/authoring/text/v2/TextV2IsEmptyFn.ts ***!
        \**************************************************/

      /*! exports provided: TextV2IsEmptyFn */

      /***/
      function (module, __webpack_exports__, __webpack_require__) {
        "use strict";

        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */


        __webpack_require__.d(__webpack_exports__, "TextV2IsEmptyFn", function () {
          return TextV2IsEmptyFn;
        });

        function TextV2IsEmptyFn(props) {
          return props.text == null || props.text.length === 0;
        } //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGV4dFYySXNFbXB0eUZuLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiVGV4dFYySXNFbXB0eUZuLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBLE1BQU0sVUFBVSxlQUFlLENBQUMsS0FBaUI7SUFDN0MsT0FBTyxLQUFLLENBQUMsSUFBSSxJQUFJLElBQUksSUFBSSxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sS0FBSyxDQUFDLENBQUM7QUFDekQsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7VGV4dFYyTW9kZWx9IGZyb20gXCIuL1RleHRWMlwiO1xuXG5leHBvcnQgZnVuY3Rpb24gVGV4dFYySXNFbXB0eUZuKHByb3BzOlRleHRWMk1vZGVsKTogYm9vbGVhbntcbiAgICByZXR1cm4gcHJvcHMudGV4dCA9PSBudWxsIHx8IHByb3BzLnRleHQubGVuZ3RoID09PSAwO1xufSJdfQ==

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
      4:
      /*!********************************************!*\
        !*** multi ./src/authoring/text/v2/TextV2 ***!
        \********************************************/

      /*! no static exports found */

      /***/
      function (module, exports, __webpack_require__) {
        module.exports = __webpack_require__(
        /*! ./src/authoring/text/v2/TextV2 */
        "./src/authoring/text/v2/TextV2.tsx");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9yYWFpam1hay93b3Jrc3BhY2UvYWVtLXJlYWN0LWNvcmUtd2NtLWNvbXBvbmVudHMvZXhhbXBsZXMvcmVhY3Qtc3BhY29tcG9uZW50cy1leGFtcGxlLXByb2plY3QvQGFkb2JlL2FlbS1jb3JlLWNvbXBvbmVudHMtcmVhY3QtYmFzZS93ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCIvVXNlcnMvcmFhaWptYWsvd29ya3NwYWNlL2FlbS1yZWFjdC1jb3JlLXdjbS1jb21wb25lbnRzL2V4YW1wbGVzL3JlYWN0LXNwYWNvbXBvbmVudHMtZXhhbXBsZS1wcm9qZWN0L0BhZG9iZS9hZW0tY29yZS1jb21wb25lbnRzLXJlYWN0LWJhc2Uvd2VicGFjay9ib290c3RyYXAiLCIvVXNlcnMvcmFhaWptYWsvd29ya3NwYWNlL2FlbS1yZWFjdC1jb3JlLXdjbS1jb21wb25lbnRzL2V4YW1wbGVzL3JlYWN0LXNwYWNvbXBvbmVudHMtZXhhbXBsZS1wcm9qZWN0L0BhZG9iZS9hZW0tY29yZS1jb21wb25lbnRzLXJlYWN0LWJhc2Uvc3JjL0Fic3RyYWN0Q29yZUNvbXBvbmVudC50c3giLCIvVXNlcnMvcmFhaWptYWsvd29ya3NwYWNlL2FlbS1yZWFjdC1jb3JlLXdjbS1jb21wb25lbnRzL2V4YW1wbGVzL3JlYWN0LXNwYWNvbXBvbmVudHMtZXhhbXBsZS1wcm9qZWN0L0BhZG9iZS9hZW0tY29yZS1jb21wb25lbnRzLXJlYWN0LWJhc2Uvc3JjL2F1dGhvcmluZy90ZXh0L3YyL1RleHRWMi50c3giLCIvVXNlcnMvcmFhaWptYWsvd29ya3NwYWNlL2FlbS1yZWFjdC1jb3JlLXdjbS1jb21wb25lbnRzL2V4YW1wbGVzL3JlYWN0LXNwYWNvbXBvbmVudHMtZXhhbXBsZS1wcm9qZWN0L0BhZG9iZS9hZW0tY29yZS1jb21wb25lbnRzLXJlYWN0LWJhc2Uvc3JjL2F1dGhvcmluZy90ZXh0L3YyL1RleHRWMklzRW1wdHlGbi50cyIsIi9Vc2Vycy9yYWFpam1hay93b3Jrc3BhY2UvYWVtLXJlYWN0LWNvcmUtd2NtLWNvbXBvbmVudHMvZXhhbXBsZXMvcmVhY3Qtc3BhY29tcG9uZW50cy1leGFtcGxlLXByb2plY3QvQGFkb2JlL2FlbS1jb3JlLWNvbXBvbmVudHMtcmVhY3QtYmFzZS9zcmMvY29tbW9uL3BsYWNlaG9sZGVyLnRzeCIsIi9Vc2Vycy9yYWFpam1hay93b3Jrc3BhY2UvYWVtLXJlYWN0LWNvcmUtd2NtLWNvbXBvbmVudHMvZXhhbXBsZXMvcmVhY3Qtc3BhY29tcG9uZW50cy1leGFtcGxlLXByb2plY3Qvd2VicGFjazovQGFkb2JlL2FlbS1jb3JlLWNvbXBvbmVudHMtcmVhY3QtYmFzZS9leHRlcm5hbCBcInJlYWN0XCIiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFDQSxZQUNBLDJCQURBLEtBRUEsRUFLQTtBQUNDLENBVEQsRUFTQyx5Q0FURCxFQVNDO0FBQ0Q7Ozs7O0FDVkE7QUFBQTs7QUFDQTtBQUFBOzs7QUFFQTtBQUFBOztBQUNBOztBQUFBOzs7QUFFQTtBQUFBOztBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7O0FBQ0E7OztBQUFBO0FBQ0E7QUFBQSxxQkFEQTs7QUFFQTtBQUFBLGtCQUZBOztBQUdBO0FBQUE7QUFDQTs7QUFKQTs7O0FBTUE7QUFBQTs7QUFDQTs7QUFBQTs7O0FBRUE7QUFBQTs7QUFDQTs7QUFBQTs7O0FBRUE7QUFBQTs7QUFDQTs7QUFBQTtBQUNBO0FBQUE7Ozs7O0FBR0E7QUFBQTs7QUFDQTs7O0FBQUE7OztBQUVBO0FBQUE7O0FBQ0E7O0FBQUE7OztBQUVBO0FBQUE7O0FBQ0E7O0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUEwQyw0QkFBMUM7QUFBMEM7QUFBMUM7QUFDQTtBQUFBO0FBQ0E7O0FBQUEsT0FKQTs7O0FBTUE7QUFBQTs7QUFDQTs7O0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUF3RDtBQUF4RDtBQUNBO0FBQUE7QUFDQTs7O0FBQUE7QUFBaUQ7QUFBakQ7QUFDQTtBQUFBLE9BTEE7OztBQU9BO0FBQUE7O0FBQ0E7QUFBQTs7QUFDQTtBQUFBOztBQUNBO0FBQUE7O0FBQ0E7QUFBQTs7QUFDQTs7O0FBQUE7QUFDQTtBQUFBO0FBQ0E7O0FBQUE7QUFDQTs7QUFBQTtBQUNBOztBQUFBO0FBQ0E7O0FBQUE7QUFDQTs7O0FBQUE7QUFBeUMsMEJBQXpDO0FBQXlDO0FBQXpDO0FBQ0E7O0FBQUE7QUFBZ0g7QUFBcUIsU0FBckksQ0FBcUksSUFBckksQ0FBcUksSUFBckksRUFBcUksR0FBckk7QUFDQTs7QUFBQTtBQUNBO0FBQUEsT0FUQTs7O0FBV0E7QUFBQTs7QUFDQTs7O0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUEyQjtBQUE0QixTQUR2RDtBQUVBO0FBQUE7QUFBaUM7QUFBZSxTQUZoRDtBQUdBOztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7QUFBQSxPQU5BOzs7QUFRQTtBQUFBOztBQUNBOzs7QUFBQTtBQUFzRDtBQUErRCxPQUFySDs7O0FBRUE7QUFBQTs7QUFDQTs7O0FBQUE7Ozs7O0FBR0E7QUFBQTs7QUFDQTs7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUFBOzs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7OztBQUFBO0FBQUE7QUFBQTtBQUFBOzs7QUFBQTtBQUFBOzs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFpQk87QUFDUDtBQUNBO0FBQ0E7QUFDQSxrQ0FDQSxRQURBO0FBRUE7QUFGQTtBQUlBLG1CQUFlLG9EQUFtQixTQUFuQixFQUFtQixrQkFBNEIsV0FBNUIsQ0FBbkIsQ0FBZjtBQUNBLFdBUkE7QUFTQSxTQVZPOztBQVdBO0FBQ1A7QUFDQTtBQUNBO0FBQWUscUNBQWY7QUFBZTtBQUFmLGdCQUE2RCxLQUE3RDtBQUNBLG1CQUFnQixvREFBb0IsOENBQXBCLEVBQWtDLElBQWxDLEVBQ2hCLGtCQUNnQixvREFBbUIsU0FBbkIsRUFBbUIsa0JBQTRCLEtBQTVCLENBQW5CLENBRkEsRUFHaEIsbURBQ2dCLG9EQUFvQixxRUFBcEIsRUFBcUM7QUFBRyx3Q0FBSDtBQUFHO0FBQUgsYUFBckMsQ0FKQSxDQUFoQjtBQUtBLFdBUkE7QUFTQSxTQVZPLEMsQ0FXUDs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdkNBO0FBQUE7OztBQUFBO0FBQUE7QUFBQTtBQUFBOzs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7OztBQUFBO0FBQUE7OztBQUFBO0FBQUE7QUFBQTtBQUFBOzs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFrQk87QUFDUDtBQUNBO0FBQ0EsaUJBQVcsNkNBQUssYUFBTCxDQUFLLEtBQUwsRUFBSztBQUF1Qix5Q0FBdkI7QUFBdUIsa0JBQXZCO0FBQXVCLHdDQUF2QjtBQUF1QjtBQUFnRztBQUFoRztBQUF2QixXQUFMLENBQVg7QUFDQSxTQUpPOztBQUtBO0FBQ1AsaUJBQVcsNkNBQUssYUFBTCxDQUFLLEtBQUwsRUFBSztBQUF1QjtBQUF2QixXQUFMLEVBQ0gsNkNBQUssYUFBTCxDQUFLLEdBQUwsRUFBSztBQUFxQjtBQUFyQixXQUFMLEVBQTZELFVBQTdELENBREcsQ0FBWDtBQUVBLFNBSE87O0FBSVA7QUFDQTtBQUFXO0FBQVgsY0FBOEIsS0FBOUI7QUFDQSw0QkFBd0IsNkNBQUssYUFBTCxDQUFLLGNBQUwsRUFBSyxrQkFBK0MsS0FBL0MsQ0FBTCxDQUF4QixHQUF3Riw2Q0FBSyxhQUFMLENBQUssZUFBTCxFQUFLLGtCQUFnRCxLQUFoRCxDQUFMLENBQXhGO0FBQ0EsU0FIQTs7QUFJQTtBQUNBLDBCQUFvQiwwRkFBMkIsd0ZBQXdCLFVBQXhCLEVBQXdCLFVBQXhCLENBQTNCLEVBQTZFLGdFQUE3RSxFQUE0RixTQUE1RixDQUFwQjtBQUNBLGlCQUFXLDZDQUFLLGFBQUwsQ0FBSyxPQUFMLEVBQUssa0JBQXdDLEtBQXhDLENBQUwsQ0FBWDtBQUNBLFNBSEE7QUFJZTs7O0FBQUEsZ0QsQ0FDZjs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwQ0E7QUFBQTs7O0FBQUE7QUFBQTtBQUFBOztBQUFPO0FBQ1A7QUFDQSxTLENBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0hBO0FBQUE7OztBQUFBO0FBQUE7QUFBQTtBQUFBOzs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7O0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFnQkE7O0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQSxpQkFBWSw2Q0FBSyxhQUFMLENBQUssS0FBTCxFQUFLO0FBQXVCO0FBQXZCLFdBQUwsRUFBdUgsU0FBdkgsQ0FBWjtBQUNBLFNBTE8sQyxDQU1QOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZCQTs7Ozs7O0FOVUE7Q0FWQSxFIiwiZmlsZSI6ImpzL1RleHRWMi4xNmY1NjU2Zi5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcIkBhZG9iZS9hZW0tY29yZS1jb21wb25lbnRzLXJlYWN0LWJhc2VcIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1wiQGFkb2JlL2FlbS1jb3JlLWNvbXBvbmVudHMtcmVhY3QtYmFzZVwiXSA9IGZhY3RvcnkoKTtcbn0pKHR5cGVvZiBzZWxmICE9PSAndW5kZWZpbmVkJyA/IHNlbGYgOiB0aGlzLCBmdW5jdGlvbigpIHtcbnJldHVybiAiLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gNCk7XG4iLCIvKlxuICogIENvcHlyaWdodCAyMDIwIEFkb2JlXG4gKlxuICogIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiAgeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICAgICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqICBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiAgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiAgU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBFZGl0b3JQbGFjZUhvbGRlciB9IGZyb20gXCIuL2NvbW1vbi9wbGFjZWhvbGRlclwiO1xuZXhwb3J0IGNvbnN0IHdpdGhTdGFuZGFyZEJhc2VDc3NDbGFzcyA9IChDb21wb25lbnQsIGRlZmF1bHRCYXNlQ3NzQ2xhc3MpID0+IHtcbiAgICByZXR1cm4gKHByb3BzKSA9PiB7XG4gICAgICAgIGNvbnN0IGJhc2VDc3NDbGFzcyA9IHByb3BzLmJhc2VDc3NDbGFzcztcbiAgICAgICAgY29uc3QgdG9CZVVzZWRDc3NDbGFzcyA9IGJhc2VDc3NDbGFzcyAmJiBiYXNlQ3NzQ2xhc3MudHJpbSgpLmxlbmd0aCA+IDAgPyBiYXNlQ3NzQ2xhc3MgOiBkZWZhdWx0QmFzZUNzc0NsYXNzO1xuICAgICAgICBjb25zdCBtZXJnZWRQcm9wcyA9IHtcbiAgICAgICAgICAgIC4uLnByb3BzLFxuICAgICAgICAgICAgYmFzZUNzc0NsYXNzOiB0b0JlVXNlZENzc0NsYXNzXG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KENvbXBvbmVudCwgT2JqZWN0LmFzc2lnbih7fSwgbWVyZ2VkUHJvcHMpKTtcbiAgICB9O1xufTtcbmV4cG9ydCBjb25zdCB3aXRoQ29uZGl0aW9uYWxQbGFjZUhvbGRlciA9IChDb21wb25lbnQsIGlzRW1wdHksIGNvbXBvbmVudFRpdGxlLCBlbXB0eVRleHQpID0+IHtcbiAgICByZXR1cm4gKHByb3BzKSA9PiB7XG4gICAgICAgIGNvbnN0IGlzRW1wdHlSZXN1bHQgPSBpc0VtcHR5KHByb3BzKTtcbiAgICAgICAgY29uc3QgeyBoaWRlUGxhY2VIb2xkZXIgPSBmYWxzZSwgaXNJbkVkaXRvciA9IGZhbHNlIH0gPSBwcm9wcztcbiAgICAgICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KFJlYWN0LkZyYWdtZW50LCBudWxsLFxuICAgICAgICAgICAgIWlzRW1wdHlSZXN1bHQgJiZcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KENvbXBvbmVudCwgT2JqZWN0LmFzc2lnbih7fSwgcHJvcHMpKSxcbiAgICAgICAgICAgIChpc0VtcHR5UmVzdWx0ICYmIGlzSW5FZGl0b3IgJiYgIWhpZGVQbGFjZUhvbGRlcikgJiZcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KEVkaXRvclBsYWNlSG9sZGVyLCB7IGVtcHR5VGV4dEFwcGVuZDogZW1wdHlUZXh0LCBjb21wb25lbnRUaXRsZTogY29tcG9uZW50VGl0bGUgfSkpKTtcbiAgICB9O1xufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaVFXSnpkSEpoWTNSRGIzSmxRMjl0Y0c5dVpXNTBMbXB6SWl3aWMyOTFjbU5sVW05dmRDSTZJaUlzSW5OdmRYSmpaWE1pT2xzaVFXSnpkSEpoWTNSRGIzSmxRMjl0Y0c5dVpXNTBMblJ6ZUNKZExDSnVZVzFsY3lJNlcxMHNJbTFoY0hCcGJtZHpJam9pUVVGQlFUczdPenM3T3pzN096czdPenM3UjBGalJ6dEJRVVZJTEU5QlFVOHNTMEZCU3l4TFFVRkxMRTFCUVUwc1QwRkJUeXhEUVVGRE8wRkJSeTlDTEU5QlFVOHNSVUZCUXl4cFFrRkJhVUlzUlVGQlF5eE5RVUZOTEhOQ1FVRnpRaXhEUVVGRE8wRkJaWFpFTEUxQlFVMHNRMEZCUXl4TlFVRk5MSGRDUVVGM1FpeEhRVUZITEVOQlJYQkRMRk5CUVRCQ0xFVkJRekZDTEcxQ1FVRXdRaXhGUVVOS0xFVkJRVVU3U1VGRGVFSXNUMEZCVHl4RFFVRkRMRXRCUVU4c1JVRkJSU3hGUVVGRk8xRkJSV1lzVFVGQlRTeFpRVUZaTEVkQlFVY3NTMEZCU3l4RFFVRkRMRmxCUVZrc1EwRkJRenRSUVVONFF5eE5RVUZOTEdkQ1FVRm5RaXhIUVVGSExGbEJRVmtzU1VGQlNTeFpRVUZaTEVOQlFVTXNTVUZCU1N4RlFVRkZMRU5CUVVNc1RVRkJUU3hIUVVGSExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNXVUZCV1N4RFFVRkRMRU5CUVVNc1EwRkJReXh0UWtGQmJVSXNRMEZCUXp0UlFVVTNSeXhOUVVGTkxGZEJRVmNzUjBGQlN6dFpRVU5zUWl4SFFVRkhMRXRCUVVzN1dVRkRVaXhaUVVGWkxFVkJRVVVzWjBKQlFXZENPMU5CUTJwRExFTkJRVU03VVVGRlJpeFBRVUZQTEc5Q1FVRkRMRk5CUVZNc2IwSkJRVXNzVjBGQlZ5eEZRVUZKTEVOQlFVTTdTVUZETVVNc1EwRkJReXhEUVVGQk8wRkJRMHdzUTBGQlF5eERRVUZETzBGQlJVWXNUVUZCVFN4RFFVRkRMRTFCUVUwc01FSkJRVEJDTEVkQlFVY3NRMEZGTVVJc1UwRkJNRUlzUlVGRE1VSXNUMEZCTkVJc1JVRkROVUlzWTBGQmMwSXNSVUZCUlN4VFFVRnBRaXhGUVVOdVFpeEZRVUZGTzBsQlEzQkRMRTlCUVU4c1EwRkJReXhMUVVGUExFVkJRVVVzUlVGQlJUdFJRVVZtTEUxQlFVMHNZVUZCWVN4SFFVRlhMRTlCUVU4c1EwRkJReXhMUVVGTExFTkJRVU1zUTBGQlF6dFJRVU0zUXl4TlFVRk5MRVZCUVVNc1pVRkJaU3hIUVVGSExFdEJRVXNzUlVGQlJTeFZRVUZWTEVkQlFVY3NTMEZCU3l4RlFVRkRMRWRCUVVjc1MwRkJTeXhEUVVGRE8xRkJSVFZFTEU5QlFVOHNRMEZEU0R0WlFVTk5MRU5CUVVNc1lVRkJZVHRuUWtGRGFFSXNiMEpCUVVNc1UwRkJVeXh2UWtGQlN5eExRVUZMTEVWQlFVazdXVUZIY0VJc1EwRkJReXhoUVVGaExFbEJRVWtzVlVGQlZTeEpRVUZKTEVOQlFVTXNaVUZCWlN4RFFVRkRPMmRDUVVOcVJDeHZRa0ZCUXl4cFFrRkJhVUlzU1VGRFpDeGxRVUZsTEVWQlFVVXNVMEZCVXl4RlFVTXhRaXhqUVVGakxFVkJRVVVzWTBGQll5eEhRVU5vUXl4RFFVVlFMRU5CUTA0c1EwRkJRenRKUVVOT0xFTkJRVU1zUTBGQlFUdEJRVU5NTEVOQlFVTXNRMEZCUXlJc0luTnZkWEpqWlhORGIyNTBaVzUwSWpwYklpOHFYRzRnS2lBZ1EyOXdlWEpwWjJoMElESXdNakFnUVdSdlltVmNiaUFxWEc0Z0tpQWdUR2xqWlc1elpXUWdkVzVrWlhJZ2RHaGxJRUZ3WVdOb1pTQk1hV05sYm5ObExDQldaWEp6YVc5dUlESXVNQ0FvZEdobElGd2lUR2xqWlc1elpWd2lLVHRjYmlBcUlDQjViM1VnYldGNUlHNXZkQ0IxYzJVZ2RHaHBjeUJtYVd4bElHVjRZMlZ3ZENCcGJpQmpiMjF3YkdsaGJtTmxJSGRwZEdnZ2RHaGxJRXhwWTJWdWMyVXVYRzRnS2lBZ1dXOTFJRzFoZVNCdlluUmhhVzRnWVNCamIzQjVJRzltSUhSb1pTQk1hV05sYm5ObElHRjBYRzRnS2x4dUlDb2dJQ0FnSUNCb2RIUndPaTh2ZDNkM0xtRndZV05vWlM1dmNtY3ZiR2xqWlc1elpYTXZURWxEUlU1VFJTMHlMakJjYmlBcVhHNGdLaUFnVlc1c1pYTnpJSEpsY1hWcGNtVmtJR0o1SUdGd2NHeHBZMkZpYkdVZ2JHRjNJRzl5SUdGbmNtVmxaQ0IwYnlCcGJpQjNjbWwwYVc1bkxDQnpiMlowZDJGeVpWeHVJQ29nSUdScGMzUnlhV0oxZEdWa0lIVnVaR1Z5SUhSb1pTQk1hV05sYm5ObElHbHpJR1JwYzNSeWFXSjFkR1ZrSUc5dUlHRnVJRndpUVZNZ1NWTmNJaUJDUVZOSlV5eGNiaUFxSUNCWFNWUklUMVZVSUZkQlVsSkJUbFJKUlZNZ1QxSWdRMDlPUkVsVVNVOU9VeUJQUmlCQlRsa2dTMGxPUkN3Z1pXbDBhR1Z5SUdWNGNISmxjM01nYjNJZ2FXMXdiR2xsWkM1Y2JpQXFJQ0JUWldVZ2RHaGxJRXhwWTJWdWMyVWdabTl5SUhSb1pTQnpjR1ZqYVdacFl5QnNZVzVuZFdGblpTQm5iM1psY201cGJtY2djR1Z5YldsemMybHZibk1nWVc1a1hHNGdLaUFnYkdsdGFYUmhkR2x2Ym5NZ2RXNWtaWElnZEdobElFeHBZMlZ1YzJVdVhHNGdLaTljYmx4dWFXMXdiM0owSUNvZ1lYTWdVbVZoWTNRZ1puSnZiU0FuY21WaFkzUW5PMXh1YVcxd2IzSjBJSHREYjIxd2IyNWxiblJVZVhCbGZTQm1jbTl0SUNkeVpXRmpkQ2M3WEc1Y2JtbHRjRzl5ZENCN1JXUnBkRzl5VUd4aFkyVkliMnhrWlhKOUlHWnliMjBnWENJdUwyTnZiVzF2Ymk5d2JHRmpaV2h2YkdSbGNsd2lPMXh1WEc1bGVIQnZjblFnYVc1MFpYSm1ZV05sSUVoaGMwSmhjMlZEYzNORGJHRnpjeUI3WEc0Z0lDQWdZbUZ6WlVOemMwTnNZWE56UHpvZ2MzUnlhVzVuWEc1OVhHNWNibVY0Y0c5eWRDQnBiblJsY21aaFkyVWdRMjl5WlVOdmJYQnZibVZ1ZEUxdlpHVnNJR1Y0ZEdWdVpITWdTR0Z6UW1GelpVTnpjME5zWVhOemUxeHVJQ0FnSUdocFpHVlFiR0ZqWlVodmJHUmxjajg2SUdKdmIyeGxZVzVjYmlBZ0lDQnBjMGx1UldScGRHOXlQenBpYjI5c1pXRnVYRzU5WEc1Y2JtVjRjRzl5ZENCcGJuUmxjbVpoWTJVZ1EyOXlaVU52YlhCdmJtVnVkRk4wWVhSbElIdGNibHh1ZlZ4dVhHNWxlSEJ2Y25RZ1kyOXVjM1FnZDJsMGFGTjBZVzVrWVhKa1FtRnpaVU56YzBOc1lYTnpJRDBnUEUwZ1pYaDBaVzVrY3lCRGIzSmxRMjl0Y0c5dVpXNTBUVzlrWld3K1hHNG9YRzRnSUNBZ1EyOXRjRzl1Wlc1ME9rTnZiWEJ2Ym1WdWRGUjVjR1U4VFQ0c1hHNGdJQ0FnWkdWbVlYVnNkRUpoYzJWRGMzTkRiR0Z6Y3pwemRISnBibWRjYmlrNlVtVmhZM1F1UTI5dGNHOXVaVzUwVkhsd1pUeE5QaUFnUFQ0Z2UxeHVJQ0FnSUhKbGRIVnliaUFvY0hKdmNITTZUU2tnUFQ0Z2UxeHVYRzRnSUNBZ0lDQWdJR052Ym5OMElHSmhjMlZEYzNORGJHRnpjeUE5SUhCeWIzQnpMbUpoYzJWRGMzTkRiR0Z6Y3p0Y2JpQWdJQ0FnSUNBZ1kyOXVjM1FnZEc5Q1pWVnpaV1JEYzNORGJHRnpjeUE5SUdKaGMyVkRjM05EYkdGemN5QW1KaUJpWVhObFEzTnpRMnhoYzNNdWRISnBiU2dwTG14bGJtZDBhQ0ErSURBZ1B5QmlZWE5sUTNOelEyeGhjM01nT2lCa1pXWmhkV3gwUW1GelpVTnpjME5zWVhOek8xeHVYRzRnSUNBZ0lDQWdJR052Ym5OMElHMWxjbWRsWkZCeWIzQnpPaUJOUFNCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0F1TGk1d2NtOXdjeXhjYmlBZ0lDQWdJQ0FnSUNBZ0lHSmhjMlZEYzNORGJHRnpjem9nZEc5Q1pWVnpaV1JEYzNORGJHRnpjMXh1SUNBZ0lDQWdJQ0I5TzF4dVhHNGdJQ0FnSUNBZ0lISmxkSFZ5YmlBOFEyOXRjRzl1Wlc1MElIc3VMaTV0WlhKblpXUlFjbTl3YzMwZ0x6NDdYRzRnSUNBZ2ZWeHVmVHRjYmx4dVpYaHdiM0owSUdOdmJuTjBJSGRwZEdoRGIyNWthWFJwYjI1aGJGQnNZV05sU0c5c1pHVnlJRDBnUEUwZ1pYaDBaVzVrY3lCRGIzSmxRMjl0Y0c5dVpXNTBUVzlrWld3K1hHNGdJQ0FnSUNBZ0lDQWdJQ0FvWEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnUTI5dGNHOXVaVzUwT2tOdmJYQnZibVZ1ZEZSNWNHVThUVDRzSUZ4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUdselJXMXdkSGs2S0hCeWIzQnpPazBwSUQwK0lHSnZiMnhsWVc0c1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ1kyOXRjRzl1Wlc1MFZHbDBiR1UvT25OMGNtbHVaeXdnWlcxd2RIbFVaWGgwUHpwemRISnBibWRjYmlBZ0lDQWdJQ0FnSUNBZ0lDazZVbVZoWTNRdVEyOXRjRzl1Wlc1MFZIbHdaVHhOUGlBZ1BUNGdlMXh1SUNBZ0lISmxkSFZ5YmlBb2NISnZjSE02VFNrZ1BUNGdlMXh1WEc0Z0lDQWdJQ0FnSUdOdmJuTjBJR2x6Ulcxd2RIbFNaWE4xYkhRNlltOXZiR1ZoYmlBOUlHbHpSVzF3ZEhrb2NISnZjSE1wTzF4dUlDQWdJQ0FnSUNCamIyNXpkQ0I3YUdsa1pWQnNZV05sU0c5c1pHVnlJRDBnWm1Gc2MyVXNJR2x6U1c1RlpHbDBiM0lnUFNCbVlXeHpaWDBnUFNCd2NtOXdjenRjYmx4dUlDQWdJQ0FnSUNCeVpYUjFjbTRnS0Z4dUlDQWdJQ0FnSUNBZ0lDQWdQRDVjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0I3SUNGcGMwVnRjSFI1VW1WemRXeDBJQ1ltWEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnUEVOdmJYQnZibVZ1ZENCN0xpNHVjSEp2Y0hOOUlDOCtYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdmVnh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0tHbHpSVzF3ZEhsU1pYTjFiSFFnSmlZZ2FYTkpia1ZrYVhSdmNpQW1KaUFoYUdsa1pWQnNZV05sU0c5c1pHVnlLU0FtSmx4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQThSV1JwZEc5eVVHeGhZMlZJYjJ4a1pYSmNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lHVnRjSFI1VkdWNGRFRndjR1Z1WkQxN1pXMXdkSGxVWlhoMGZWeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ1kyOXRjRzl1Wlc1MFZHbDBiR1U5ZTJOdmJYQnZibVZ1ZEZScGRHeGxmVnh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBdlBseHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lIMWNiaUFnSUNBZ0lDQWdJQ0FnSUR3dlBseHVJQ0FnSUNBZ0lDQXBPMXh1SUNBZ0lIMWNibjA3SWwxOSIsIi8qXG4gKiAgQ29weXJpZ2h0IDIwMjAgQWRvYmVcbiAqXG4gKiAgTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqICB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiAgWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICAgICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiAgVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqICBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqICBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiAgbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB3aXRoQ29uZGl0aW9uYWxQbGFjZUhvbGRlciwgd2l0aFN0YW5kYXJkQmFzZUNzc0NsYXNzIH0gZnJvbSBcIi4uLy4uLy4uL0Fic3RyYWN0Q29yZUNvbXBvbmVudFwiO1xuaW1wb3J0IHsgVGV4dFYySXNFbXB0eUZuIH0gZnJvbSBcIi4vVGV4dFYySXNFbXB0eUZuXCI7XG5leHBvcnQgY29uc3QgVGV4dFYyUmljaFRleHQgPSAocHJvcHMpID0+IHtcbiAgICBjb25zdCB0ZXh0ID0gcHJvcHMudGV4dDtcbiAgICBjb25zdCBpZCA9IChwcm9wcy5pZCkgPyBwcm9wcy5pZCA6IChwcm9wcy5jcVBhdGggPyBwcm9wcy5jcVBhdGguc3Vic3RyKHByb3BzLmNxUGF0aC5sYXN0SW5kZXhPZignLycpICsgMSkgOiBcIlwiKTtcbiAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzTmFtZTogcHJvcHMuYmFzZUNzc0NsYXNzLCBpZDogaWQsIFwiZGF0YS1ydGUtZWRpdGVsZW1lbnRcIjogdHJ1ZSwgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw6IHsgX19odG1sOiB0ZXh0IH0gfSk7XG59O1xuZXhwb3J0IGNvbnN0IFRleHRWMlBsYWluVGV4dCA9IChwcm9wcykgPT4ge1xuICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3NOYW1lOiBwcm9wcy5iYXNlQ3NzQ2xhc3MgfSxcbiAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcInBcIiwgeyBjbGFzc05hbWU6IFwiY21wLXRleHRfX3BhcmFncmFwaFwiIH0sIHByb3BzLnRleHQpKTtcbn07XG5jb25zdCBUZXh0VjJJbXBsID0gKHByb3BzKSA9PiB7XG4gICAgY29uc3QgeyByaWNoVGV4dCA9IGZhbHNlIH0gPSBwcm9wcztcbiAgICByZXR1cm4gKHJpY2hUZXh0KSA/IFJlYWN0LmNyZWF0ZUVsZW1lbnQoVGV4dFYyUmljaFRleHQsIE9iamVjdC5hc3NpZ24oe30sIHByb3BzKSkgOiBSZWFjdC5jcmVhdGVFbGVtZW50KFRleHRWMlBsYWluVGV4dCwgT2JqZWN0LmFzc2lnbih7fSwgcHJvcHMpKTtcbn07XG5jb25zdCBUZXh0VjIgPSAocHJvcHMpID0+IHtcbiAgICBjb25zdCBXcmFwcGVkID0gd2l0aENvbmRpdGlvbmFsUGxhY2VIb2xkZXIod2l0aFN0YW5kYXJkQmFzZUNzc0NsYXNzKFRleHRWMkltcGwsIFwiY21wLXRleHRcIiksIFRleHRWMklzRW1wdHlGbiwgXCJUZXh0IFYyXCIpO1xuICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFdyYXBwZWQsIE9iamVjdC5hc3NpZ24oe30sIHByb3BzKSk7XG59O1xuZXhwb3J0IGRlZmF1bHQgVGV4dFYyO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pVkdWNGRGWXlMbXB6SWl3aWMyOTFjbU5sVW05dmRDSTZJaUlzSW5OdmRYSmpaWE1pT2xzaVZHVjRkRll5TG5SemVDSmRMQ0p1WVcxbGN5STZXMTBzSW0xaGNIQnBibWR6SWpvaVFVRkJRVHM3T3pzN096czdPenM3T3pzN1IwRmpSenRCUVVWSUxFOUJRVThzUzBGQmEwSXNUVUZCVFN4UFFVRlBMRU5CUVVNN1FVRkRka01zVDBGQlR5eEZRVUZ4UWl3d1FrRkJNRUlzUlVGQlJTeDNRa0ZCZDBJc1JVRkJReXhOUVVGTkxHZERRVUZuUXl4RFFVRkRPMEZCUTNoSUxFOUJRVThzUlVGQlF5eGxRVUZsTEVWQlFVTXNUVUZCVFN4dFFrRkJiVUlzUTBGQlF6dEJRVk5zUkN4TlFVRk5MRU5CUVVNc1RVRkJUU3hqUVVGakxFZEJRVWNzUTBGQlF5eExRVUZwUWl4RlFVRkZMRVZCUVVVN1NVRkRhRVFzVFVGQlRTeEpRVUZKTEVkQlFWVXNTMEZCU3l4RFFVRkRMRWxCUVdNc1EwRkJRenRKUVVONlF5eE5RVUZOTEVWQlFVVXNSMEZCUnl4RFFVRkRMRXRCUVVzc1EwRkJReXhGUVVGRkxFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNTMEZCU3l4RFFVRkRMRVZCUVVVc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eExRVUZMTEVOQlFVTXNUVUZCVFN4RFFVRkRMRU5CUVVNc1EwRkJReXhMUVVGTExFTkJRVU1zVFVGQlRTeERRVUZETEUxQlFVMHNRMEZCUXl4TFFVRkxMRU5CUVVNc1RVRkJUU3hEUVVGRExGZEJRVmNzUTBGQlF5eEhRVUZITEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUlVGQlJTeERRVUZETEVOQlFVTTdTVUZGYUVnc1QwRkJVU3cyUWtGQlN5eFRRVUZUTEVWQlFVVXNTMEZCU3l4RFFVRkRMRmxCUVZrc1JVRkJSeXhGUVVGRkxFVkJRVVVzUlVGQlJTeG5RMEZCZFVJc2RVSkJRWFZDTEVWQlFVVXNSVUZCUXl4TlFVRk5MRVZCUVVVc1NVRkJTU3hGUVVGRExFZEJRVWNzUTBGQlFUdEJRVU40U0N4RFFVRkRMRU5CUVVNN1FVRkZSaXhOUVVGTkxFTkJRVU1zVFVGQlRTeGxRVUZsTEVkQlFVY3NRMEZCUXl4TFFVRnBRaXhGUVVGRkxFVkJRVVU3U1VGRGFrUXNUMEZCVVN3MlFrRkJTeXhUUVVGVExFVkJRVVVzUzBGQlN5eERRVUZETEZsQlFWazdVVUZCUlN3eVFrRkJSeXhUUVVGVExFVkJRVU1zY1VKQlFYRkNMRWxCUVVVc1MwRkJTeXhEUVVGRExFbEJRVWtzUTBGQlN5eERRVUZOTEVOQlFVRTdRVUZEZWtjc1EwRkJReXhEUVVGRE8wRkJSVVlzVFVGQlRTeFZRVUZWTEVkQlFVY3NRMEZCUXl4TFFVRnBRaXhGUVVGRkxFVkJRVVU3U1VGRGNrTXNUVUZCVFN4RlFVRkRMRkZCUVZFc1IwRkJSeXhMUVVGTExFVkJRVU1zUjBGQlJ5eExRVUZMTEVOQlFVTTdTVUZEYWtNc1QwRkJUeXhEUVVGRExGRkJRVkVzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4dlFrRkJReXhqUVVGakxHOUNRVUZMTEV0QlFVc3NSVUZCUnl4RFFVRkRMRU5CUVVNc1EwRkJReXh2UWtGQlF5eGxRVUZsTEc5Q1FVRkxMRXRCUVVzc1JVRkJSeXhEUVVGRE8wRkJRM0pHTEVOQlFVTXNRMEZCUXp0QlFVVkdMRTFCUVUwc1RVRkJUU3hIUVVGSExFTkJRVU1zUzBGQmFVSXNSVUZCUlN4RlFVRkZPMGxCUTJwRExFMUJRVTBzVDBGQlR5eEhRVUZITERCQ1FVRXdRaXhEUVVGRExIZENRVUYzUWl4RFFVRkRMRlZCUVZVc1JVRkJSU3hWUVVGVkxFTkJRVU1zUlVGQlJTeGxRVUZsTEVWQlFVVXNVMEZCVXl4RFFVRkRMRU5CUVVFN1NVRkRlRWdzVDBGQlR5eHZRa0ZCUXl4UFFVRlBMRzlDUVVGTExFdEJRVXNzUlVGQlJ5eERRVUZCTzBGQlEyaERMRU5CUVVNc1EwRkJRenRCUVVWR0xHVkJRV1VzVFVGQlRTeERRVUZESWl3aWMyOTFjbU5sYzBOdmJuUmxiblFpT2xzaUx5cGNiaUFxSUNCRGIzQjVjbWxuYUhRZ01qQXlNQ0JCWkc5aVpWeHVJQ3BjYmlBcUlDQk1hV05sYm5ObFpDQjFibVJsY2lCMGFHVWdRWEJoWTJobElFeHBZMlZ1YzJVc0lGWmxjbk5wYjI0Z01pNHdJQ2gwYUdVZ1hDSk1hV05sYm5ObFhDSXBPMXh1SUNvZ0lIbHZkU0J0WVhrZ2JtOTBJSFZ6WlNCMGFHbHpJR1pwYkdVZ1pYaGpaWEIwSUdsdUlHTnZiWEJzYVdGdVkyVWdkMmwwYUNCMGFHVWdUR2xqWlc1elpTNWNiaUFxSUNCWmIzVWdiV0Y1SUc5aWRHRnBiaUJoSUdOdmNIa2diMllnZEdobElFeHBZMlZ1YzJVZ1lYUmNiaUFxWEc0Z0tpQWdJQ0FnSUdoMGRIQTZMeTkzZDNjdVlYQmhZMmhsTG05eVp5OXNhV05sYm5ObGN5OU1TVU5GVGxORkxUSXVNRnh1SUNwY2JpQXFJQ0JWYm14bGMzTWdjbVZ4ZFdseVpXUWdZbmtnWVhCd2JHbGpZV0pzWlNCc1lYY2diM0lnWVdkeVpXVmtJSFJ2SUdsdUlIZHlhWFJwYm1jc0lITnZablIzWVhKbFhHNGdLaUFnWkdsemRISnBZblYwWldRZ2RXNWtaWElnZEdobElFeHBZMlZ1YzJVZ2FYTWdaR2x6ZEhKcFluVjBaV1FnYjI0Z1lXNGdYQ0pCVXlCSlUxd2lJRUpCVTBsVExGeHVJQ29nSUZkSlZFaFBWVlFnVjBGU1VrRk9WRWxGVXlCUFVpQkRUMDVFU1ZSSlQwNVRJRTlHSUVGT1dTQkxTVTVFTENCbGFYUm9aWElnWlhod2NtVnpjeUJ2Y2lCcGJYQnNhV1ZrTGx4dUlDb2dJRk5sWlNCMGFHVWdUR2xqWlc1elpTQm1iM0lnZEdobElITndaV05wWm1saklHeGhibWQxWVdkbElHZHZkbVZ5Ym1sdVp5QndaWEp0YVhOemFXOXVjeUJoYm1SY2JpQXFJQ0JzYVcxcGRHRjBhVzl1Y3lCMWJtUmxjaUIwYUdVZ1RHbGpaVzV6WlM1Y2JpQXFMMXh1WEc1cGJYQnZjblFnVW1WaFkzUXNJSHREYjIxd2IyNWxiblI5SUdaeWIyMGdKM0psWVdOMEp6dGNibWx0Y0c5eWRDQjdRMjl5WlVOdmJYQnZibVZ1ZEUxdlpHVnNMQ0IzYVhSb1EyOXVaR2wwYVc5dVlXeFFiR0ZqWlVodmJHUmxjaXdnZDJsMGFGTjBZVzVrWVhKa1FtRnpaVU56YzBOc1lYTnpmU0JtY205dElGd2lMaTR2TGk0dkxpNHZRV0p6ZEhKaFkzUkRiM0psUTI5dGNHOXVaVzUwWENJN1hHNXBiWEJ2Y25RZ2UxUmxlSFJXTWtselJXMXdkSGxHYm4wZ1puSnZiU0JjSWk0dlZHVjRkRll5U1hORmJYQjBlVVp1WENJN1hHNWNibVY0Y0c5eWRDQnBiblJsY21aaFkyVWdWR1Y0ZEZZeVRXOWtaV3dnWlhoMFpXNWtjeUJEYjNKbFEyOXRjRzl1Wlc1MFRXOWtaV3g3WEc0Z0lDQWdkR1Y0ZEQ4NklITjBjbWx1Wnp0Y2JpQWdJQ0J5YVdOb1ZHVjRkRDg2SUdKdmIyeGxZVzVjYmlBZ0lDQmpjVkJoZEdnL09uTjBjbWx1WjF4dUlDQWdJR2xrUHpvZ2MzUnlhVzVuWEc1OVhHNWNibVY0Y0c5eWRDQmpiMjV6ZENCVVpYaDBWakpTYVdOb1ZHVjRkQ0E5SUNod2NtOXdjenBVWlhoMFZqSk5iMlJsYkNrZ1BUNGdlMXh1SUNBZ0lHTnZibk4wSUhSbGVIUTZjM1J5YVc1bklEMGdjSEp2Y0hNdWRHVjRkQ0JoY3lCemRISnBibWM3WEc0Z0lDQWdZMjl1YzNRZ2FXUWdQU0FvY0hKdmNITXVhV1FwSUQ4Z2NISnZjSE11YVdRZ09pQW9jSEp2Y0hNdVkzRlFZWFJvSUQ4Z2NISnZjSE11WTNGUVlYUm9Mbk4xWW5OMGNpaHdjbTl3Y3k1amNWQmhkR2d1YkdGemRFbHVaR1Y0VDJZb0p5OG5LU0FySURFcElEb2dYQ0pjSWlrN1hHNWNiaUFnSUNCeVpYUjFjbTRnSUR4a2FYWWdZMnhoYzNOT1lXMWxQWHR3Y205d2N5NWlZWE5sUTNOelEyeGhjM045SUNCcFpEMTdhV1I5SUdSaGRHRXRjblJsTFdWa2FYUmxiR1Z0Wlc1MElHUmhibWRsY205MWMyeDVVMlYwU1c1dVpYSklWRTFNUFh0N1gxOW9kRzFzT2lCMFpYaDBmWDB2UGx4dWZUdGNibHh1Wlhod2IzSjBJR052Ym5OMElGUmxlSFJXTWxCc1lXbHVWR1Y0ZENBOUlDaHdjbTl3Y3pwVVpYaDBWakpOYjJSbGJDa2dQVDRnZTF4dUlDQWdJSEpsZEhWeWJpQWdQR1JwZGlCamJHRnpjMDVoYldVOWUzQnliM0J6TG1KaGMyVkRjM05EYkdGemMzMCtQSEFnWTJ4aGMzTk9ZVzFsUFZ3aVkyMXdMWFJsZUhSZlgzQmhjbUZuY21Gd2FGd2lQbnR3Y205d2N5NTBaWGgwZlR3dmNENDhMMlJwZGo1Y2JuMDdYRzVjYm1OdmJuTjBJRlJsZUhSV01rbHRjR3dnUFNBb2NISnZjSE02VkdWNGRGWXlUVzlrWld3cElEMCtJSHRjYmlBZ0lDQmpiMjV6ZENCN2NtbGphRlJsZUhRZ1BTQm1ZV3h6WlgwZ1BTQndjbTl3Y3p0Y2JpQWdJQ0J5WlhSMWNtNGdLSEpwWTJoVVpYaDBLU0EvSUR4VVpYaDBWakpTYVdOb1ZHVjRkQ0I3TGk0dWNISnZjSE45THo0Z09pQThWR1Y0ZEZZeVVHeGhhVzVVWlhoMElIc3VMaTV3Y205d2MzMHZQanRjYm4wN1hHNWNibU52Ym5OMElGUmxlSFJXTWlBOUlDaHdjbTl3Y3pwVVpYaDBWakpOYjJSbGJDa2dQVDRnZTF4dUlDQWdJR052Ym5OMElGZHlZWEJ3WldRZ1BTQjNhWFJvUTI5dVpHbDBhVzl1WVd4UWJHRmpaVWh2YkdSbGNpaDNhWFJvVTNSaGJtUmhjbVJDWVhObFEzTnpRMnhoYzNNb1ZHVjRkRll5U1cxd2JDd2dYQ0pqYlhBdGRHVjRkRndpS1N3Z1ZHVjRkRll5U1hORmJYQjBlVVp1TENCY0lsUmxlSFFnVmpKY0lpbGNiaUFnSUNCeVpYUjFjbTRnUEZkeVlYQndaV1FnZXk0dUxuQnliM0J6ZlM4K1hHNTlPMXh1WEc1bGVIQnZjblFnWkdWbVlYVnNkQ0JVWlhoMFZqSTdJbDE5IiwiZXhwb3J0IGZ1bmN0aW9uIFRleHRWMklzRW1wdHlGbihwcm9wcykge1xuICAgIHJldHVybiBwcm9wcy50ZXh0ID09IG51bGwgfHwgcHJvcHMudGV4dC5sZW5ndGggPT09IDA7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lWR1Y0ZEZZeVNYTkZiWEIwZVVadUxtcHpJaXdpYzI5MWNtTmxVbTl2ZENJNklpSXNJbk52ZFhKalpYTWlPbHNpVkdWNGRGWXlTWE5GYlhCMGVVWnVMblJ6SWwwc0ltNWhiV1Z6SWpwYlhTd2liV0Z3Y0dsdVozTWlPaUpCUVVWQkxFMUJRVTBzVlVGQlZTeGxRVUZsTEVOQlFVTXNTMEZCYVVJN1NVRkROME1zVDBGQlR5eExRVUZMTEVOQlFVTXNTVUZCU1N4SlFVRkpMRWxCUVVrc1NVRkJTU3hMUVVGTExFTkJRVU1zU1VGQlNTeERRVUZETEUxQlFVMHNTMEZCU3l4RFFVRkRMRU5CUVVNN1FVRkRla1FzUTBGQlF5SXNJbk52ZFhKalpYTkRiMjUwWlc1MElqcGJJbWx0Y0c5eWRDQjdWR1Y0ZEZZeVRXOWtaV3g5SUdaeWIyMGdYQ0l1TDFSbGVIUldNbHdpTzF4dVhHNWxlSEJ2Y25RZ1puVnVZM1JwYjI0Z1ZHVjRkRll5U1hORmJYQjBlVVp1S0hCeWIzQnpPbFJsZUhSV01rMXZaR1ZzS1RvZ1ltOXZiR1ZoYm50Y2JpQWdJQ0J5WlhSMWNtNGdjSEp2Y0hNdWRHVjRkQ0E5UFNCdWRXeHNJSHg4SUhCeWIzQnpMblJsZUhRdWJHVnVaM1JvSUQwOVBTQXdPMXh1ZlNKZGZRPT0iLCIvKlxuICogIENvcHlyaWdodCAyMDIwIEFkb2JlXG4gKlxuICogIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiAgeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICAgICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqICBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiAgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiAgU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuY29uc3QgREVGQVVMVF9FTVBUWV9URVhUX0xBQkVMID0gJ1BsZWFzZSBjb25maWd1cmUgdGhlIGNvbXBvbmVudCc7XG5leHBvcnQgY29uc3QgRWRpdG9yUGxhY2VIb2xkZXIgPSAocHJvcHMpID0+IHtcbiAgICBjb25zdCBwYXJ0MSA9IChwcm9wcy5jb21wb25lbnRUaXRsZSAhPSBudWxsICYmIHByb3BzLmNvbXBvbmVudFRpdGxlLmxlbmd0aCA+IDApID8gcHJvcHMuY29tcG9uZW50VGl0bGUgKyAnIC0gJyA6ICcnO1xuICAgIGNvbnN0IHBhcnQyID0gKHByb3BzLmVtcHR5VGV4dEFwcGVuZCAhPSBudWxsKSA/IHByb3BzLmVtcHR5VGV4dEFwcGVuZCA6IERFRkFVTFRfRU1QVFlfVEVYVF9MQUJFTDtcbiAgICBjb25zdCBlbXB0eVRleHQgPSBwYXJ0MSArIHBhcnQyO1xuICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzTmFtZTogJ2NxLXBsYWNlaG9sZGVyJyArIChwcm9wcy5jbGFzc0FwcGVuZCAhPSBudWxsID8gJyAnICsgcHJvcHMuY2xhc3NBcHBlbmQgOiAnJykgfSwgZW1wdHlUZXh0KSk7XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pY0d4aFkyVm9iMnhrWlhJdWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUlpd2ljMjkxY21ObGN5STZXeUp3YkdGalpXaHZiR1JsY2k1MGMzZ2lYU3dpYm1GdFpYTWlPbHRkTENKdFlYQndhVzVuY3lJNklrRkJRVUU3T3pzN096czdPenM3T3pzN08wZEJZMGM3UVVGRFNDeFBRVUZQTEV0QlFXdENMRTFCUVUwc1QwRkJUeXhEUVVGRE8wRkJUM1pETEUxQlFVMHNkMEpCUVhkQ0xFZEJRVWNzWjBOQlFXZERMRU5CUVVNN1FVRkZiRVVzVFVGQlRTeERRVUZETEUxQlFVMHNhVUpCUVdsQ0xFZEJRVWNzUTBGQlF5eExRVUZ6UWl4RlFVRkZMRVZCUVVVN1NVRkZlRVFzVFVGQlRTeExRVUZMTEVkQlFWY3NRMEZCUXl4TFFVRkxMRU5CUVVNc1kwRkJZeXhKUVVGSkxFbEJRVWtzU1VGQlNTeExRVUZMTEVOQlFVTXNZMEZCWXl4RFFVRkRMRTFCUVUwc1IwRkJSeXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVVXNTMEZCU3l4RFFVRkRMR05CUVdNc1IwRkJTU3hMUVVGTExFTkJRVU1zUTBGQlF5eERRVUZETEVWQlFVVXNRMEZCUXp0SlFVTTVTQ3hOUVVGTkxFdEJRVXNzUjBGQlZ5eERRVUZETEV0QlFVc3NRMEZCUXl4bFFVRmxMRWxCUVVrc1NVRkJTU3hEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZGTEV0QlFVc3NRMEZCUXl4bFFVRmxMRU5CUVVNc1EwRkJReXhEUVVGRExIZENRVUYzUWl4RFFVRkRPMGxCUXpGSExFMUJRVTBzVTBGQlV5eEhRVUZITEV0QlFVc3NSMEZCUnl4TFFVRkxMRU5CUVVNN1NVRkZhRU1zVDBGQlR5eERRVU5JTERaQ1FVTkpMRk5CUVZNc1JVRkJSU3huUWtGQlowSXNSMEZCUnl4RFFVRkRMRXRCUVVzc1EwRkJReXhYUVVGWExFbEJRVWtzU1VGQlNTeERRVUZCTEVOQlFVTXNRMEZCUXl4SFFVRkhMRWRCUVVjc1MwRkJTeXhEUVVGRExGZEJRVmNzUTBGQlF5eERRVUZETEVOQlFVTXNSVUZCUlN4RFFVRkRMRWxCUTNSR0xGTkJRVk1zUTBGRFVpeERRVU5VTEVOQlFVRTdRVUZEVEN4RFFVRkRMRU5CUVVNaUxDSnpiM1Z5WTJWelEyOXVkR1Z1ZENJNld5SXZLbHh1SUNvZ0lFTnZjSGx5YVdkb2RDQXlNREl3SUVGa2IySmxYRzRnS2x4dUlDb2dJRXhwWTJWdWMyVmtJSFZ1WkdWeUlIUm9aU0JCY0dGamFHVWdUR2xqWlc1elpTd2dWbVZ5YzJsdmJpQXlMakFnS0hSb1pTQmNJa3hwWTJWdWMyVmNJaWs3WEc0Z0tpQWdlVzkxSUcxaGVTQnViM1FnZFhObElIUm9hWE1nWm1sc1pTQmxlR05sY0hRZ2FXNGdZMjl0Y0d4cFlXNWpaU0IzYVhSb0lIUm9aU0JNYVdObGJuTmxMbHh1SUNvZ0lGbHZkU0J0WVhrZ2IySjBZV2x1SUdFZ1kyOXdlU0J2WmlCMGFHVWdUR2xqWlc1elpTQmhkRnh1SUNwY2JpQXFJQ0FnSUNBZ2FIUjBjRG92TDNkM2R5NWhjR0ZqYUdVdWIzSm5MMnhwWTJWdWMyVnpMMHhKUTBWT1UwVXRNaTR3WEc0Z0tseHVJQ29nSUZWdWJHVnpjeUJ5WlhGMWFYSmxaQ0JpZVNCaGNIQnNhV05oWW14bElHeGhkeUJ2Y2lCaFozSmxaV1FnZEc4Z2FXNGdkM0pwZEdsdVp5d2djMjltZEhkaGNtVmNiaUFxSUNCa2FYTjBjbWxpZFhSbFpDQjFibVJsY2lCMGFHVWdUR2xqWlc1elpTQnBjeUJrYVhOMGNtbGlkWFJsWkNCdmJpQmhiaUJjSWtGVElFbFRYQ0lnUWtGVFNWTXNYRzRnS2lBZ1YwbFVTRTlWVkNCWFFWSlNRVTVVU1VWVElFOVNJRU5QVGtSSlZFbFBUbE1nVDBZZ1FVNVpJRXRKVGtRc0lHVnBkR2hsY2lCbGVIQnlaWE56SUc5eUlHbHRjR3hwWldRdVhHNGdLaUFnVTJWbElIUm9aU0JNYVdObGJuTmxJR1p2Y2lCMGFHVWdjM0JsWTJsbWFXTWdiR0Z1WjNWaFoyVWdaMjkyWlhKdWFXNW5JSEJsY20xcGMzTnBiMjV6SUdGdVpGeHVJQ29nSUd4cGJXbDBZWFJwYjI1eklIVnVaR1Z5SUhSb1pTQk1hV05sYm5ObExseHVJQ292WEc1cGJYQnZjblFnVW1WaFkzUXNJSHREYjIxd2IyNWxiblI5SUdaeWIyMGdKM0psWVdOMEp6dGNibHh1Wlhod2IzSjBJR2x1ZEdWeVptRmpaU0JRYkdGalpVaHZiR1JsY2sxdlpHVnNJSHRjYmlBZ0lDQmpiMjF3YjI1bGJuUlVhWFJzWlQ4NklITjBjbWx1WjF4dUlDQWdJR05zWVhOelFYQndaVzVrUHpvZ2MzUnlhVzVuWEc0Z0lDQWdaVzF3ZEhsVVpYaDBRWEJ3Wlc1a1B6b2djM1J5YVc1blhHNTlYRzVqYjI1emRDQkVSVVpCVlV4VVgwVk5VRlJaWDFSRldGUmZURUZDUlV3Z1BTQW5VR3hsWVhObElHTnZibVpwWjNWeVpTQjBhR1VnWTI5dGNHOXVaVzUwSnp0Y2JseHVaWGh3YjNKMElHTnZibk4wSUVWa2FYUnZjbEJzWVdObFNHOXNaR1Z5SUQwZ0tIQnliM0J6T2xCc1lXTmxTRzlzWkdWeVRXOWtaV3dwSUQwK0lIdGNibHh1SUNBZ0lHTnZibk4wSUhCaGNuUXhPaUJ6ZEhKcGJtY2dQU0FvY0hKdmNITXVZMjl0Y0c5dVpXNTBWR2wwYkdVZ0lUMGdiblZzYkNBbUppQndjbTl3Y3k1amIyMXdiMjVsYm5SVWFYUnNaUzVzWlc1bmRHZ2dQaUF3S1NBL0lDQndjbTl3Y3k1amIyMXdiMjVsYm5SVWFYUnNaU0FySUNBbklDMGdKeUE2SUNjbk8xeHVJQ0FnSUdOdmJuTjBJSEJoY25ReU9pQnpkSEpwYm1jZ1BTQW9jSEp2Y0hNdVpXMXdkSGxVWlhoMFFYQndaVzVrSUNFOUlHNTFiR3dwSUQ4Z0lIQnliM0J6TG1WdGNIUjVWR1Y0ZEVGd2NHVnVaQ0E2SUVSRlJrRlZURlJmUlUxUVZGbGZWRVZZVkY5TVFVSkZURHRjYmlBZ0lDQmpiMjV6ZENCbGJYQjBlVlJsZUhRZ1BTQndZWEowTVNBcklIQmhjblF5TzF4dVhHNGdJQ0FnY21WMGRYSnVJQ2hjYmlBZ0lDQWdJQ0FnUEdScGRseHVJQ0FnSUNBZ0lDQWdJQ0FnWTJ4aGMzTk9ZVzFsUFhzblkzRXRjR3hoWTJWb2IyeGtaWEluSUNzZ0tIQnliM0J6TG1Oc1lYTnpRWEJ3Wlc1a0lDRTlJRzUxYkd3L0lDY2dKeUFySUhCeWIzQnpMbU5zWVhOelFYQndaVzVrSURvZ0p5Y3BmVDVjYmlBZ0lDQWdJQ0FnSUNBZ0lIdGxiWEIwZVZSbGVIUjlYRzRnSUNBZ0lDQWdJRHd2WkdsMlBseHVJQ0FnSUNsY2JuMDdJbDE5IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==