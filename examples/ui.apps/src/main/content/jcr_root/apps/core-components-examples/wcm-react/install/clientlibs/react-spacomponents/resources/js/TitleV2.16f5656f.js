(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["TitleV2"],{

/***/ "../../react-base-components/dist/authoring/title/v2/TitleV2.js":
/*!************************************************************************************************************************!*\
  !*** /Users/raaijmak/workspace/aem-react-core-wcm-components/react-base-components/dist/authoring/title/v2/TitleV2.js ***!
  \************************************************************************************************************************/
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

      return __webpack_require__(__webpack_require__.s = 5);
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
      "./src/authoring/title/v2/TitleV2.tsx":
      /*!********************************************!*\
        !*** ./src/authoring/title/v2/TitleV2.tsx ***!
        \********************************************/

      /*! exports provided: TitleV2Link, TitleV2Contents, default */

      /***/
      function (module, __webpack_exports__, __webpack_require__) {
        "use strict";

        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */


        __webpack_require__.d(__webpack_exports__, "TitleV2Link", function () {
          return TitleV2Link;
        });
        /* harmony export (binding) */


        __webpack_require__.d(__webpack_exports__, "TitleV2Contents", function () {
          return TitleV2Contents;
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


        var _TitleV2IsEmptyFn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
        /*! ./TitleV2IsEmptyFn */
        "./src/authoring/title/v2/TitleV2IsEmptyFn.ts");
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


        const bemModifierPrefix = props => props.nested ? '-' : '__';

        const TitleV2Link = props => {
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_routing_RoutedLink__WEBPACK_IMPORTED_MODULE_2__["RoutedLink"], {
            className: props.baseCssClass + bemModifierPrefix(props) + 'link',
            isRouted: props.routed,
            to: props.linkURL
          }, props.text);
        };

        const TitleV2Contents = props => {
          if (!props.linkDisabled) {
            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(TitleV2Link, Object.assign({}, props));
          }

          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, props.text);
        };

        const TitleV2Impl = props => {
          const elementType = !!props.type ? props.type.toString() : 'h3';
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
            className: props.baseCssClass
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(elementType, {
            className: props.baseCssClass + bemModifierPrefix(props) + 'text'
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(TitleV2Contents, Object.assign({}, props))));
        };

        const TitleV2 = props => {
          const Wrapped = Object(_AbstractCoreComponent__WEBPACK_IMPORTED_MODULE_1__["withConditionalPlaceHolder"])(Object(_AbstractCoreComponent__WEBPACK_IMPORTED_MODULE_1__["withStandardBaseCssClass"])(TitleV2Impl, "cmp-title"), _TitleV2IsEmptyFn__WEBPACK_IMPORTED_MODULE_3__["TitleV2IsEmptyFn"], "TitleV2");
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Wrapped, Object.assign({}, props));
        };
        /* harmony default export */


        __webpack_exports__["default"] = TitleV2; //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGl0bGVWMi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIlRpdGxlVjIudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7OztHQWNHO0FBRUgsT0FBTyxLQUFrQixNQUFNLE9BQU8sQ0FBQztBQUN2QyxPQUFPLEVBQUMsMEJBQTBCLEVBQUUsd0JBQXdCLEVBQUMsTUFBTSxnQ0FBZ0MsQ0FBQztBQUVwRyxPQUFPLEVBQUMsVUFBVSxFQUFDLE1BQU0sNkJBQTZCLENBQUM7QUFDdkQsT0FBTyxFQUFDLGdCQUFnQixFQUFDLE1BQU0sb0JBQW9CLENBQUM7QUFVcEQsTUFBTSxpQkFBaUIsR0FBRyxDQUFDLEtBQWtCLEVBQUUsRUFBRSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO0FBRTVFLE1BQU0sQ0FBQyxNQUFNLFdBQVcsR0FBRyxDQUFDLEtBQWtCLEVBQUUsRUFBRTtJQUM5QyxPQUFPLENBQ0gsb0JBQUMsVUFBVSxJQUFDLFNBQVMsRUFBRSxLQUFLLENBQUMsWUFBWSxHQUFHLGlCQUFpQixDQUFDLEtBQUssQ0FBQyxHQUFJLE1BQU0sRUFBRSxRQUFRLEVBQUUsS0FBSyxDQUFDLE1BQU0sRUFBRSxFQUFFLEVBQUUsS0FBSyxDQUFDLE9BQU8sSUFDcEgsS0FBSyxDQUFDLElBQUksQ0FDRixDQUNoQixDQUFDO0FBQ04sQ0FBQyxDQUFDO0FBRUYsTUFBTSxDQUFDLE1BQU0sZUFBZSxHQUFHLENBQUMsS0FBa0IsRUFBRSxFQUFFO0lBQ2xELElBQUksQ0FBQyxLQUFLLENBQUMsWUFBWSxFQUFDO1FBQ3BCLE9BQU8sb0JBQUMsV0FBVyxvQkFBSyxLQUFLLEVBQUcsQ0FBQTtLQUNuQztJQUVELE9BQU8sMENBQUcsS0FBSyxDQUFDLElBQUksQ0FBSSxDQUFBO0FBQzVCLENBQUMsQ0FBQztBQUVGLE1BQU0sV0FBVyxHQUFHLENBQUMsS0FBa0IsRUFBRSxFQUFFO0lBQ3ZDLE1BQU0sV0FBVyxHQUFVLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO0lBQ3pFLE9BQU8sQ0FDSCw2QkFBSyxTQUFTLEVBQUUsS0FBSyxDQUFDLFlBQVksSUFFMUIsS0FBSyxDQUFDLGFBQWEsQ0FBQyxXQUFXLEVBQzNCO1FBQ0ksU0FBUyxFQUFFLEtBQUssQ0FBQyxZQUFZLEdBQUcsaUJBQWlCLENBQUMsS0FBSyxDQUFDLEdBQUcsTUFBTTtLQUNwRSxFQUNELG9CQUFDLGVBQWUsb0JBQUssS0FBSyxFQUFHLENBQ2hDLENBR0gsQ0FDVCxDQUFBO0FBQ0wsQ0FBQyxDQUFDO0FBRUYsTUFBTSxPQUFPLEdBQUcsQ0FBQyxLQUFrQixFQUFFLEVBQUU7SUFDbkMsTUFBTSxPQUFPLEdBQUcsMEJBQTBCLENBQUMsd0JBQXdCLENBQUMsV0FBVyxFQUFFLFdBQVcsQ0FBQyxFQUFFLGdCQUFnQixFQUFFLFNBQVMsQ0FBQyxDQUFBO0lBQzNILE9BQU8sb0JBQUMsT0FBTyxvQkFBSyxLQUFLLEVBQUcsQ0FBQTtBQUNoQyxDQUFDLENBQUM7QUFFRixlQUFlLE9BQU8sQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiAgQ29weXJpZ2h0IDIwMjAgQWRvYmVcbiAqXG4gKiAgTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqICB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiAgWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICAgICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiAgVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqICBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqICBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiAgbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cblxuaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tICdyZWFjdCc7XG5pbXBvcnQge3dpdGhDb25kaXRpb25hbFBsYWNlSG9sZGVyLCB3aXRoU3RhbmRhcmRCYXNlQ3NzQ2xhc3N9IGZyb20gXCIuLi8uLi8uLi9BYnN0cmFjdENvcmVDb21wb25lbnRcIjtcbmltcG9ydCB7Um91dGVkQ29yZUNvbXBvbmVudE1vZGVsfSBmcm9tIFwiLi4vLi4vLi4vcm91dGluZy9Sb3V0ZWRDb3JlQ29tcG9uZW50XCI7XG5pbXBvcnQge1JvdXRlZExpbmt9IGZyb20gXCIuLi8uLi8uLi9yb3V0aW5nL1JvdXRlZExpbmtcIjtcbmltcG9ydCB7VGl0bGVWMklzRW1wdHlGbn0gZnJvbSBcIi4vVGl0bGVWMklzRW1wdHlGblwiO1xuXG5leHBvcnQgaW50ZXJmYWNlIFRpdGxlVjJNb2RlbCBleHRlbmRzIFJvdXRlZENvcmVDb21wb25lbnRNb2RlbHtcbiAgICB0ZXh0OiBzdHJpbmc7XG4gICAgbGlua1VSTD86IHN0cmluZztcbiAgICBsaW5rRGlzYWJsZWQ6IGJvb2xlYW47XG4gICAgdHlwZT86IHN0cmluZztcbiAgICBuZXN0ZWQ/OiBib29sZWFuXG59XG5cbmNvbnN0IGJlbU1vZGlmaWVyUHJlZml4ID0gKHByb3BzOlRpdGxlVjJNb2RlbCkgPT4gcHJvcHMubmVzdGVkID8gJy0nIDogJ19fJztcblxuZXhwb3J0IGNvbnN0IFRpdGxlVjJMaW5rID0gKHByb3BzOlRpdGxlVjJNb2RlbCkgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxSb3V0ZWRMaW5rIGNsYXNzTmFtZT17cHJvcHMuYmFzZUNzc0NsYXNzICsgYmVtTW9kaWZpZXJQcmVmaXgocHJvcHMpICsgICdsaW5rJ30gaXNSb3V0ZWQ9e3Byb3BzLnJvdXRlZH0gdG89e3Byb3BzLmxpbmtVUkx9PlxuICAgICAgICAgICAge3Byb3BzLnRleHR9XG4gICAgICAgIDwvUm91dGVkTGluaz5cbiAgICApO1xufTtcblxuZXhwb3J0IGNvbnN0IFRpdGxlVjJDb250ZW50cyA9IChwcm9wczpUaXRsZVYyTW9kZWwpID0+IHtcbiAgICBpZiggIXByb3BzLmxpbmtEaXNhYmxlZCl7XG4gICAgICAgIHJldHVybiA8VGl0bGVWMkxpbmsgey4uLnByb3BzfS8+XG4gICAgfVxuXG4gICAgcmV0dXJuIDw+e3Byb3BzLnRleHR9PC8+XG59O1xuXG5jb25zdCBUaXRsZVYySW1wbCA9IChwcm9wczpUaXRsZVYyTW9kZWwpID0+IHtcbiAgICBjb25zdCBlbGVtZW50VHlwZTpzdHJpbmcgPSAoISFwcm9wcy50eXBlKSA/IHByb3BzLnR5cGUudG9TdHJpbmcoKSA6ICdoMyc7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3Byb3BzLmJhc2VDc3NDbGFzc30+XG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChlbGVtZW50VHlwZSxcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lOiBwcm9wcy5iYXNlQ3NzQ2xhc3MgKyBiZW1Nb2RpZmllclByZWZpeChwcm9wcykgKyAndGV4dCcsXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIDxUaXRsZVYyQ29udGVudHMgey4uLnByb3BzfS8+XG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgfVxuXG4gICAgICAgIDwvZGl2PlxuICAgIClcbn07XG5cbmNvbnN0IFRpdGxlVjIgPSAocHJvcHM6VGl0bGVWMk1vZGVsKSA9PiB7XG4gICAgY29uc3QgV3JhcHBlZCA9IHdpdGhDb25kaXRpb25hbFBsYWNlSG9sZGVyKHdpdGhTdGFuZGFyZEJhc2VDc3NDbGFzcyhUaXRsZVYySW1wbCwgXCJjbXAtdGl0bGVcIiksIFRpdGxlVjJJc0VtcHR5Rm4sIFwiVGl0bGVWMlwiKVxuICAgIHJldHVybiA8V3JhcHBlZCB7Li4ucHJvcHN9Lz5cbn07XG5cbmV4cG9ydCBkZWZhdWx0IFRpdGxlVjI7Il19

        /***/
      },

      /***/
      "./src/authoring/title/v2/TitleV2IsEmptyFn.ts":
      /*!****************************************************!*\
        !*** ./src/authoring/title/v2/TitleV2IsEmptyFn.ts ***!
        \****************************************************/

      /*! exports provided: TitleV2IsEmptyFn */

      /***/
      function (module, __webpack_exports__, __webpack_require__) {
        "use strict";

        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */


        __webpack_require__.d(__webpack_exports__, "TitleV2IsEmptyFn", function () {
          return TitleV2IsEmptyFn;
        });

        function TitleV2IsEmptyFn(props) {
          return props.text == null || props.text.trim().length === 0;
        } //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGl0bGVWMklzRW1wdHlGbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIlRpdGxlVjJJc0VtcHR5Rm4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUEsTUFBTSxVQUFVLGdCQUFnQixDQUFDLEtBQWtCO0lBQy9DLE9BQU8sS0FBSyxDQUFDLElBQUksSUFBSSxJQUFJLElBQUksS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQyxNQUFNLEtBQUssQ0FBQyxDQUFDO0FBQ2hFLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1RpdGxlVjJNb2RlbH0gZnJvbSBcIi4vVGl0bGVWMlwiO1xuXG5leHBvcnQgZnVuY3Rpb24gVGl0bGVWMklzRW1wdHlGbihwcm9wczpUaXRsZVYyTW9kZWwpOiBib29sZWFue1xuICAgIHJldHVybiBwcm9wcy50ZXh0ID09IG51bGwgfHwgcHJvcHMudGV4dC50cmltKCkubGVuZ3RoID09PSAwO1xufSJdfQ==

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
      5:
      /*!**********************************************!*\
        !*** multi ./src/authoring/title/v2/TitleV2 ***!
        \**********************************************/

      /*! no static exports found */

      /***/
      function (module, exports, __webpack_require__) {
        module.exports = __webpack_require__(
        /*! ./src/authoring/title/v2/TitleV2 */
        "./src/authoring/title/v2/TitleV2.tsx");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9yYWFpam1hay93b3Jrc3BhY2UvYWVtLXJlYWN0LWNvcmUtd2NtLWNvbXBvbmVudHMvZXhhbXBsZXMvcmVhY3Qtc3BhY29tcG9uZW50cy1leGFtcGxlLXByb2plY3QvQGFkb2JlL2FlbS1jb3JlLWNvbXBvbmVudHMtcmVhY3QtYmFzZS93ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCIvVXNlcnMvcmFhaWptYWsvd29ya3NwYWNlL2FlbS1yZWFjdC1jb3JlLXdjbS1jb21wb25lbnRzL2V4YW1wbGVzL3JlYWN0LXNwYWNvbXBvbmVudHMtZXhhbXBsZS1wcm9qZWN0L0BhZG9iZS9hZW0tY29yZS1jb21wb25lbnRzLXJlYWN0LWJhc2Uvd2VicGFjay9ib290c3RyYXAiLCIvVXNlcnMvcmFhaWptYWsvd29ya3NwYWNlL2FlbS1yZWFjdC1jb3JlLXdjbS1jb21wb25lbnRzL2V4YW1wbGVzL3JlYWN0LXNwYWNvbXBvbmVudHMtZXhhbXBsZS1wcm9qZWN0L0BhZG9iZS9hZW0tY29yZS1jb21wb25lbnRzLXJlYWN0LWJhc2Uvc3JjL0Fic3RyYWN0Q29yZUNvbXBvbmVudC50c3giLCIvVXNlcnMvcmFhaWptYWsvd29ya3NwYWNlL2FlbS1yZWFjdC1jb3JlLXdjbS1jb21wb25lbnRzL2V4YW1wbGVzL3JlYWN0LXNwYWNvbXBvbmVudHMtZXhhbXBsZS1wcm9qZWN0L0BhZG9iZS9hZW0tY29yZS1jb21wb25lbnRzLXJlYWN0LWJhc2Uvc3JjL2F1dGhvcmluZy90aXRsZS92Mi9UaXRsZVYyLnRzeCIsIi9Vc2Vycy9yYWFpam1hay93b3Jrc3BhY2UvYWVtLXJlYWN0LWNvcmUtd2NtLWNvbXBvbmVudHMvZXhhbXBsZXMvcmVhY3Qtc3BhY29tcG9uZW50cy1leGFtcGxlLXByb2plY3QvQGFkb2JlL2FlbS1jb3JlLWNvbXBvbmVudHMtcmVhY3QtYmFzZS9zcmMvYXV0aG9yaW5nL3RpdGxlL3YyL1RpdGxlVjJJc0VtcHR5Rm4udHMiLCIvVXNlcnMvcmFhaWptYWsvd29ya3NwYWNlL2FlbS1yZWFjdC1jb3JlLXdjbS1jb21wb25lbnRzL2V4YW1wbGVzL3JlYWN0LXNwYWNvbXBvbmVudHMtZXhhbXBsZS1wcm9qZWN0L0BhZG9iZS9hZW0tY29yZS1jb21wb25lbnRzLXJlYWN0LWJhc2Uvc3JjL2NvbW1vbi9wbGFjZWhvbGRlci50c3giLCIvVXNlcnMvcmFhaWptYWsvd29ya3NwYWNlL2FlbS1yZWFjdC1jb3JlLXdjbS1jb21wb25lbnRzL2V4YW1wbGVzL3JlYWN0LXNwYWNvbXBvbmVudHMtZXhhbXBsZS1wcm9qZWN0L0BhZG9iZS9hZW0tY29yZS1jb21wb25lbnRzLXJlYWN0LWJhc2Uvc3JjL3JvdXRpbmcvUm91dGVkTGluay50c3giLCIvVXNlcnMvcmFhaWptYWsvd29ya3NwYWNlL2FlbS1yZWFjdC1jb3JlLXdjbS1jb21wb25lbnRzL2V4YW1wbGVzL3JlYWN0LXNwYWNvbXBvbmVudHMtZXhhbXBsZS1wcm9qZWN0L3dlYnBhY2s6L0BhZG9iZS9hZW0tY29yZS1jb21wb25lbnRzLXJlYWN0LWJhc2UvZXh0ZXJuYWwgXCJyZWFjdFwiIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBQ0EsWUFDQSwyQkFEQSxLQUVBLEVBS0E7QUFDQyxDQVRELEVBU0MseUNBVEQsRUFTQztBQUNEOzs7OztBQ1ZBO0FBQUE7O0FBQ0E7QUFBQTs7O0FBRUE7QUFBQTs7QUFDQTs7QUFBQTs7O0FBRUE7QUFBQTs7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBOztBQUNBOzs7QUFBQTtBQUNBO0FBQUEscUJBREE7O0FBRUE7QUFBQSxrQkFGQTs7QUFHQTtBQUFBO0FBQ0E7O0FBSkE7OztBQU1BO0FBQUE7O0FBQ0E7O0FBQUE7OztBQUVBO0FBQUE7O0FBQ0E7O0FBQUE7OztBQUVBO0FBQUE7O0FBQ0E7O0FBQUE7QUFDQTtBQUFBOzs7OztBQUdBO0FBQUE7O0FBQ0E7OztBQUFBOzs7QUFFQTtBQUFBOztBQUNBOztBQUFBOzs7QUFFQTtB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LFdBQWxCLENBQTlCLENBSGI7QUFJQSxTQVZPLEMsQ0FXUDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM1QkE7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7OztBUFVBO0NBVkEsRSIsImZpbGUiOiJqcy9UaXRsZVYyLjE2ZjU2NTZmLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiQGFkb2JlL2FlbS1jb3JlLWNvbXBvbmVudHMtcmVhY3QtYmFzZVwiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJAYWRvYmUvYWVtLWNvcmUtY29tcG9uZW50cy1yZWFjdC1iYXNlXCJdID0gZmFjdG9yeSgpO1xufSkodHlwZW9mIHNlbGYgIT09ICd1bmRlZmluZWQnID8gc2VsZiA6IHRoaXMsIGZ1bmN0aW9uKCkge1xucmV0dXJuICIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSA1KTtcbiIsIi8qXG4gKiAgQ29weXJpZ2h0IDIwMjAgQWRvYmVcbiAqXG4gKiAgTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqICB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiAgWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICAgICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiAgVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqICBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqICBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiAgbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IEVkaXRvclBsYWNlSG9sZGVyIH0gZnJvbSBcIi4vY29tbW9uL3BsYWNlaG9sZGVyXCI7XG5leHBvcnQgY29uc3Qgd2l0aFN0YW5kYXJkQmFzZUNzc0NsYXNzID0gKENvbXBvbmVudCwgZGVmYXVsdEJhc2VDc3NDbGFzcykgPT4ge1xuICAgIHJldHVybiAocHJvcHMpID0+IHtcbiAgICAgICAgY29uc3QgYmFzZUNzc0NsYXNzID0gcHJvcHMuYmFzZUNzc0NsYXNzO1xuICAgICAgICBjb25zdCB0b0JlVXNlZENzc0NsYXNzID0gYmFzZUNzc0NsYXNzICYmIGJhc2VDc3NDbGFzcy50cmltKCkubGVuZ3RoID4gMCA/IGJhc2VDc3NDbGFzcyA6IGRlZmF1bHRCYXNlQ3NzQ2xhc3M7XG4gICAgICAgIGNvbnN0IG1lcmdlZFByb3BzID0ge1xuICAgICAgICAgICAgLi4ucHJvcHMsXG4gICAgICAgICAgICBiYXNlQ3NzQ2xhc3M6IHRvQmVVc2VkQ3NzQ2xhc3NcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQ29tcG9uZW50LCBPYmplY3QuYXNzaWduKHt9LCBtZXJnZWRQcm9wcykpO1xuICAgIH07XG59O1xuZXhwb3J0IGNvbnN0IHdpdGhDb25kaXRpb25hbFBsYWNlSG9sZGVyID0gKENvbXBvbmVudCwgaXNFbXB0eSwgY29tcG9uZW50VGl0bGUsIGVtcHR5VGV4dCkgPT4ge1xuICAgIHJldHVybiAocHJvcHMpID0+IHtcbiAgICAgICAgY29uc3QgaXNFbXB0eVJlc3VsdCA9IGlzRW1wdHkocHJvcHMpO1xuICAgICAgICBjb25zdCB7IGhpZGVQbGFjZUhvbGRlciA9IGZhbHNlLCBpc0luRWRpdG9yID0gZmFsc2UgfSA9IHByb3BzO1xuICAgICAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoUmVhY3QuRnJhZ21lbnQsIG51bGwsXG4gICAgICAgICAgICAhaXNFbXB0eVJlc3VsdCAmJlxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQ29tcG9uZW50LCBPYmplY3QuYXNzaWduKHt9LCBwcm9wcykpLFxuICAgICAgICAgICAgKGlzRW1wdHlSZXN1bHQgJiYgaXNJbkVkaXRvciAmJiAhaGlkZVBsYWNlSG9sZGVyKSAmJlxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoRWRpdG9yUGxhY2VIb2xkZXIsIHsgZW1wdHlUZXh0QXBwZW5kOiBlbXB0eVRleHQsIGNvbXBvbmVudFRpdGxlOiBjb21wb25lbnRUaXRsZSB9KSkpO1xuICAgIH07XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pUVdKemRISmhZM1JEYjNKbFEyOXRjRzl1Wlc1MExtcHpJaXdpYzI5MWNtTmxVbTl2ZENJNklpSXNJbk52ZFhKalpYTWlPbHNpUVdKemRISmhZM1JEYjNKbFEyOXRjRzl1Wlc1MExuUnplQ0pkTENKdVlXMWxjeUk2VzEwc0ltMWhjSEJwYm1keklqb2lRVUZCUVRzN096czdPenM3T3pzN096czdSMEZqUnp0QlFVVklMRTlCUVU4c1MwRkJTeXhMUVVGTExFMUJRVTBzVDBGQlR5eERRVUZETzBGQlJ5OUNMRTlCUVU4c1JVRkJReXhwUWtGQmFVSXNSVUZCUXl4TlFVRk5MSE5DUVVGelFpeERRVUZETzBGQlpYWkVMRTFCUVUwc1EwRkJReXhOUVVGTkxIZENRVUYzUWl4SFFVRkhMRU5CUlhCRExGTkJRVEJDTEVWQlF6RkNMRzFDUVVFd1FpeEZRVU5LTEVWQlFVVTdTVUZEZUVJc1QwRkJUeXhEUVVGRExFdEJRVThzUlVGQlJTeEZRVUZGTzFGQlJXWXNUVUZCVFN4WlFVRlpMRWRCUVVjc1MwRkJTeXhEUVVGRExGbEJRVmtzUTBGQlF6dFJRVU40UXl4TlFVRk5MR2RDUVVGblFpeEhRVUZITEZsQlFWa3NTVUZCU1N4WlFVRlpMRU5CUVVNc1NVRkJTU3hGUVVGRkxFTkJRVU1zVFVGQlRTeEhRVUZITEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1dVRkJXU3hEUVVGRExFTkJRVU1zUTBGQlF5eHRRa0ZCYlVJc1EwRkJRenRSUVVVM1J5eE5RVUZOTEZkQlFWY3NSMEZCU3p0WlFVTnNRaXhIUVVGSExFdEJRVXM3V1VGRFVpeFpRVUZaTEVWQlFVVXNaMEpCUVdkQ08xTkJRMnBETEVOQlFVTTdVVUZGUml4UFFVRlBMRzlDUVVGRExGTkJRVk1zYjBKQlFVc3NWMEZCVnl4RlFVRkpMRU5CUVVNN1NVRkRNVU1zUTBGQlF5eERRVUZCTzBGQlEwd3NRMEZCUXl4RFFVRkRPMEZCUlVZc1RVRkJUU3hEUVVGRExFMUJRVTBzTUVKQlFUQkNMRWRCUVVjc1EwRkZNVUlzVTBGQk1FSXNSVUZETVVJc1QwRkJORUlzUlVGRE5VSXNZMEZCYzBJc1JVRkJSU3hUUVVGcFFpeEZRVU51UWl4RlFVRkZPMGxCUTNCRExFOUJRVThzUTBGQlF5eExRVUZQTEVWQlFVVXNSVUZCUlR0UlFVVm1MRTFCUVUwc1lVRkJZU3hIUVVGWExFOUJRVThzUTBGQlF5eExRVUZMTEVOQlFVTXNRMEZCUXp0UlFVTTNReXhOUVVGTkxFVkJRVU1zWlVGQlpTeEhRVUZITEV0QlFVc3NSVUZCUlN4VlFVRlZMRWRCUVVjc1MwRkJTeXhGUVVGRExFZEJRVWNzUzBGQlN5eERRVUZETzFGQlJUVkVMRTlCUVU4c1EwRkRTRHRaUVVOTkxFTkJRVU1zWVVGQllUdG5Ra0ZEYUVJc2IwSkJRVU1zVTBGQlV5eHZRa0ZCU3l4TFFVRkxMRVZCUVVrN1dVRkhjRUlzUTBGQlF5eGhRVUZoTEVsQlFVa3NWVUZCVlN4SlFVRkpMRU5CUVVNc1pVRkJaU3hEUVVGRE8yZENRVU5xUkN4dlFrRkJReXhwUWtGQmFVSXNTVUZEWkN4bFFVRmxMRVZCUVVVc1UwRkJVeXhGUVVNeFFpeGpRVUZqTEVWQlFVVXNZMEZCWXl4SFFVTm9ReXhEUVVWUUxFTkJRMDRzUTBGQlF6dEpRVU5PTEVOQlFVTXNRMEZCUVR0QlFVTk1MRU5CUVVNc1EwRkJReUlzSW5OdmRYSmpaWE5EYjI1MFpXNTBJanBiSWk4cVhHNGdLaUFnUTI5d2VYSnBaMmgwSURJd01qQWdRV1J2WW1WY2JpQXFYRzRnS2lBZ1RHbGpaVzV6WldRZ2RXNWtaWElnZEdobElFRndZV05vWlNCTWFXTmxibk5sTENCV1pYSnphVzl1SURJdU1DQW9kR2hsSUZ3aVRHbGpaVzV6WlZ3aUtUdGNiaUFxSUNCNWIzVWdiV0Y1SUc1dmRDQjFjMlVnZEdocGN5Qm1hV3hsSUdWNFkyVndkQ0JwYmlCamIyMXdiR2xoYm1ObElIZHBkR2dnZEdobElFeHBZMlZ1YzJVdVhHNGdLaUFnV1c5MUlHMWhlU0J2WW5SaGFXNGdZU0JqYjNCNUlHOW1JSFJvWlNCTWFXTmxibk5sSUdGMFhHNGdLbHh1SUNvZ0lDQWdJQ0JvZEhSd09pOHZkM2QzTG1Gd1lXTm9aUzV2Y21jdmJHbGpaVzV6WlhNdlRFbERSVTVUUlMweUxqQmNiaUFxWEc0Z0tpQWdWVzVzWlhOeklISmxjWFZwY21Wa0lHSjVJR0Z3Y0d4cFkyRmliR1VnYkdGM0lHOXlJR0ZuY21WbFpDQjBieUJwYmlCM2NtbDBhVzVuTENCemIyWjBkMkZ5WlZ4dUlDb2dJR1JwYzNSeWFXSjFkR1ZrSUhWdVpHVnlJSFJvWlNCTWFXTmxibk5sSUdseklHUnBjM1J5YVdKMWRHVmtJRzl1SUdGdUlGd2lRVk1nU1ZOY0lpQkNRVk5KVXl4Y2JpQXFJQ0JYU1ZSSVQxVlVJRmRCVWxKQlRsUkpSVk1nVDFJZ1EwOU9SRWxVU1U5T1V5QlBSaUJCVGxrZ1MwbE9SQ3dnWldsMGFHVnlJR1Y0Y0hKbGMzTWdiM0lnYVcxd2JHbGxaQzVjYmlBcUlDQlRaV1VnZEdobElFeHBZMlZ1YzJVZ1ptOXlJSFJvWlNCemNHVmphV1pwWXlCc1lXNW5kV0ZuWlNCbmIzWmxjbTVwYm1jZ2NHVnliV2x6YzJsdmJuTWdZVzVrWEc0Z0tpQWdiR2x0YVhSaGRHbHZibk1nZFc1a1pYSWdkR2hsSUV4cFkyVnVjMlV1WEc0Z0tpOWNibHh1YVcxd2IzSjBJQ29nWVhNZ1VtVmhZM1FnWm5KdmJTQW5jbVZoWTNRbk8xeHVhVzF3YjNKMElIdERiMjF3YjI1bGJuUlVlWEJsZlNCbWNtOXRJQ2R5WldGamRDYzdYRzVjYm1sdGNHOXlkQ0I3UldScGRHOXlVR3hoWTJWSWIyeGtaWEo5SUdaeWIyMGdYQ0l1TDJOdmJXMXZiaTl3YkdGalpXaHZiR1JsY2x3aU8xeHVYRzVsZUhCdmNuUWdhVzUwWlhKbVlXTmxJRWhoYzBKaGMyVkRjM05EYkdGemN5QjdYRzRnSUNBZ1ltRnpaVU56YzBOc1lYTnpQem9nYzNSeWFXNW5YRzU5WEc1Y2JtVjRjRzl5ZENCcGJuUmxjbVpoWTJVZ1EyOXlaVU52YlhCdmJtVnVkRTF2WkdWc0lHVjRkR1Z1WkhNZ1NHRnpRbUZ6WlVOemMwTnNZWE56ZTF4dUlDQWdJR2hwWkdWUWJHRmpaVWh2YkdSbGNqODZJR0p2YjJ4bFlXNWNiaUFnSUNCcGMwbHVSV1JwZEc5eVB6cGliMjlzWldGdVhHNTlYRzVjYm1WNGNHOXlkQ0JwYm5SbGNtWmhZMlVnUTI5eVpVTnZiWEJ2Ym1WdWRGTjBZWFJsSUh0Y2JseHVmVnh1WEc1bGVIQnZjblFnWTI5dWMzUWdkMmwwYUZOMFlXNWtZWEprUW1GelpVTnpjME5zWVhOeklEMGdQRTBnWlhoMFpXNWtjeUJEYjNKbFEyOXRjRzl1Wlc1MFRXOWtaV3crWEc0b1hHNGdJQ0FnUTI5dGNHOXVaVzUwT2tOdmJYQnZibVZ1ZEZSNWNHVThUVDRzWEc0Z0lDQWdaR1ZtWVhWc2RFSmhjMlZEYzNORGJHRnpjenB6ZEhKcGJtZGNiaWs2VW1WaFkzUXVRMjl0Y0c5dVpXNTBWSGx3WlR4TlBpQWdQVDRnZTF4dUlDQWdJSEpsZEhWeWJpQW9jSEp2Y0hNNlRTa2dQVDRnZTF4dVhHNGdJQ0FnSUNBZ0lHTnZibk4wSUdKaGMyVkRjM05EYkdGemN5QTlJSEJ5YjNCekxtSmhjMlZEYzNORGJHRnpjenRjYmlBZ0lDQWdJQ0FnWTI5dWMzUWdkRzlDWlZWelpXUkRjM05EYkdGemN5QTlJR0poYzJWRGMzTkRiR0Z6Y3lBbUppQmlZWE5sUTNOelEyeGhjM011ZEhKcGJTZ3BMbXhsYm1kMGFDQStJREFnUHlCaVlYTmxRM056UTJ4aGMzTWdPaUJrWldaaGRXeDBRbUZ6WlVOemMwTnNZWE56TzF4dVhHNGdJQ0FnSUNBZ0lHTnZibk4wSUcxbGNtZGxaRkJ5YjNCek9pQk5QU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQXVMaTV3Y205d2N5eGNiaUFnSUNBZ0lDQWdJQ0FnSUdKaGMyVkRjM05EYkdGemN6b2dkRzlDWlZWelpXUkRjM05EYkdGemMxeHVJQ0FnSUNBZ0lDQjlPMXh1WEc0Z0lDQWdJQ0FnSUhKbGRIVnliaUE4UTI5dGNHOXVaVzUwSUhzdUxpNXRaWEpuWldSUWNtOXdjMzBnTHo0N1hHNGdJQ0FnZlZ4dWZUdGNibHh1Wlhod2IzSjBJR052Ym5OMElIZHBkR2hEYjI1a2FYUnBiMjVoYkZCc1lXTmxTRzlzWkdWeUlEMGdQRTBnWlhoMFpXNWtjeUJEYjNKbFEyOXRjRzl1Wlc1MFRXOWtaV3crWEc0Z0lDQWdJQ0FnSUNBZ0lDQW9YRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdRMjl0Y0c5dVpXNTBPa052YlhCdmJtVnVkRlI1Y0dVOFRUNHNJRnh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJR2x6Ulcxd2RIazZLSEJ5YjNCek9rMHBJRDArSUdKdmIyeGxZVzRzWEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnWTI5dGNHOXVaVzUwVkdsMGJHVS9Pbk4wY21sdVp5d2daVzF3ZEhsVVpYaDBQenB6ZEhKcGJtZGNiaUFnSUNBZ0lDQWdJQ0FnSUNrNlVtVmhZM1F1UTI5dGNHOXVaVzUwVkhsd1pUeE5QaUFnUFQ0Z2UxeHVJQ0FnSUhKbGRIVnliaUFvY0hKdmNITTZUU2tnUFQ0Z2UxeHVYRzRnSUNBZ0lDQWdJR052Ym5OMElHbHpSVzF3ZEhsU1pYTjFiSFE2WW05dmJHVmhiaUE5SUdselJXMXdkSGtvY0hKdmNITXBPMXh1SUNBZ0lDQWdJQ0JqYjI1emRDQjdhR2xrWlZCc1lXTmxTRzlzWkdWeUlEMGdabUZzYzJVc0lHbHpTVzVGWkdsMGIzSWdQU0JtWVd4elpYMGdQU0J3Y205d2N6dGNibHh1SUNBZ0lDQWdJQ0J5WlhSMWNtNGdLRnh1SUNBZ0lDQWdJQ0FnSUNBZ1BENWNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQjdJQ0ZwYzBWdGNIUjVVbVZ6ZFd4MElDWW1YRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdQRU52YlhCdmJtVnVkQ0I3TGk0dWNISnZjSE45SUM4K1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2ZWeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lIdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnS0dselJXMXdkSGxTWlhOMWJIUWdKaVlnYVhOSmJrVmthWFJ2Y2lBbUppQWhhR2xrWlZCc1lXTmxTRzlzWkdWeUtTQW1KbHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBOFJXUnBkRzl5VUd4aFkyVkliMnhrWlhKY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUdWdGNIUjVWR1Y0ZEVGd2NHVnVaRDE3Wlcxd2RIbFVaWGgwZlZ4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnWTI5dGNHOXVaVzUwVkdsMGJHVTllMk52YlhCdmJtVnVkRlJwZEd4bGZWeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0F2UGx4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUgxY2JpQWdJQ0FnSUNBZ0lDQWdJRHd2UGx4dUlDQWdJQ0FnSUNBcE8xeHVJQ0FnSUgxY2JuMDdJbDE5IiwiLypcbiAqICBDb3B5cmlnaHQgMjAyMCBBZG9iZVxuICpcbiAqICBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqICBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgICAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqICBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiAgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqICBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHdpdGhDb25kaXRpb25hbFBsYWNlSG9sZGVyLCB3aXRoU3RhbmRhcmRCYXNlQ3NzQ2xhc3MgfSBmcm9tIFwiLi4vLi4vLi4vQWJzdHJhY3RDb3JlQ29tcG9uZW50XCI7XG5pbXBvcnQgeyBSb3V0ZWRMaW5rIH0gZnJvbSBcIi4uLy4uLy4uL3JvdXRpbmcvUm91dGVkTGlua1wiO1xuaW1wb3J0IHsgVGl0bGVWMklzRW1wdHlGbiB9IGZyb20gXCIuL1RpdGxlVjJJc0VtcHR5Rm5cIjtcbmNvbnN0IGJlbU1vZGlmaWVyUHJlZml4ID0gKHByb3BzKSA9PiBwcm9wcy5uZXN0ZWQgPyAnLScgOiAnX18nO1xuZXhwb3J0IGNvbnN0IFRpdGxlVjJMaW5rID0gKHByb3BzKSA9PiB7XG4gICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KFJvdXRlZExpbmssIHsgY2xhc3NOYW1lOiBwcm9wcy5iYXNlQ3NzQ2xhc3MgKyBiZW1Nb2RpZmllclByZWZpeChwcm9wcykgKyAnbGluaycsIGlzUm91dGVkOiBwcm9wcy5yb3V0ZWQsIHRvOiBwcm9wcy5saW5rVVJMIH0sIHByb3BzLnRleHQpKTtcbn07XG5leHBvcnQgY29uc3QgVGl0bGVWMkNvbnRlbnRzID0gKHByb3BzKSA9PiB7XG4gICAgaWYgKCFwcm9wcy5saW5rRGlzYWJsZWQpIHtcbiAgICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoVGl0bGVWMkxpbmssIE9iamVjdC5hc3NpZ24oe30sIHByb3BzKSk7XG4gICAgfVxuICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFJlYWN0LkZyYWdtZW50LCBudWxsLCBwcm9wcy50ZXh0KTtcbn07XG5jb25zdCBUaXRsZVYySW1wbCA9IChwcm9wcykgPT4ge1xuICAgIGNvbnN0IGVsZW1lbnRUeXBlID0gKCEhcHJvcHMudHlwZSkgPyBwcm9wcy50eXBlLnRvU3RyaW5nKCkgOiAnaDMnO1xuICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzTmFtZTogcHJvcHMuYmFzZUNzc0NsYXNzIH0sIFJlYWN0LmNyZWF0ZUVsZW1lbnQoZWxlbWVudFR5cGUsIHtcbiAgICAgICAgY2xhc3NOYW1lOiBwcm9wcy5iYXNlQ3NzQ2xhc3MgKyBiZW1Nb2RpZmllclByZWZpeChwcm9wcykgKyAndGV4dCcsXG4gICAgfSwgUmVhY3QuY3JlYXRlRWxlbWVudChUaXRsZVYyQ29udGVudHMsIE9iamVjdC5hc3NpZ24oe30sIHByb3BzKSkpKSk7XG59O1xuY29uc3QgVGl0bGVWMiA9IChwcm9wcykgPT4ge1xuICAgIGNvbnN0IFdyYXBwZWQgPSB3aXRoQ29uZGl0aW9uYWxQbGFjZUhvbGRlcih3aXRoU3RhbmRhcmRCYXNlQ3NzQ2xhc3MoVGl0bGVWMkltcGwsIFwiY21wLXRpdGxlXCIpLCBUaXRsZVYySXNFbXB0eUZuLCBcIlRpdGxlVjJcIik7XG4gICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoV3JhcHBlZCwgT2JqZWN0LmFzc2lnbih7fSwgcHJvcHMpKTtcbn07XG5leHBvcnQgZGVmYXVsdCBUaXRsZVYyO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pVkdsMGJHVldNaTVxY3lJc0luTnZkWEpqWlZKdmIzUWlPaUlpTENKemIzVnlZMlZ6SWpwYklsUnBkR3hsVmpJdWRITjRJbDBzSW01aGJXVnpJanBiWFN3aWJXRndjR2x1WjNNaU9pSkJRVUZCT3pzN096czdPenM3T3pzN096dEhRV05ITzBGQlJVZ3NUMEZCVHl4TFFVRnJRaXhOUVVGTkxFOUJRVThzUTBGQlF6dEJRVU4yUXl4UFFVRlBMRVZCUVVNc01FSkJRVEJDTEVWQlFVVXNkMEpCUVhkQ0xFVkJRVU1zVFVGQlRTeG5RMEZCWjBNc1EwRkJRenRCUVVWd1J5eFBRVUZQTEVWQlFVTXNWVUZCVlN4RlFVRkRMRTFCUVUwc05rSkJRVFpDTEVOQlFVTTdRVUZEZGtRc1QwRkJUeXhGUVVGRExHZENRVUZuUWl4RlFVRkRMRTFCUVUwc2IwSkJRVzlDTEVOQlFVTTdRVUZWY0VRc1RVRkJUU3hwUWtGQmFVSXNSMEZCUnl4RFFVRkRMRXRCUVd0Q0xFVkJRVVVzUlVGQlJTeERRVUZETEV0QlFVc3NRMEZCUXl4TlFVRk5MRU5CUVVNc1EwRkJReXhEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETEVOQlFVTXNTVUZCU1N4RFFVRkRPMEZCUlRWRkxFMUJRVTBzUTBGQlF5eE5RVUZOTEZkQlFWY3NSMEZCUnl4RFFVRkRMRXRCUVd0Q0xFVkJRVVVzUlVGQlJUdEpRVU01UXl4UFFVRlBMRU5CUTBnc2IwSkJRVU1zVlVGQlZTeEpRVUZETEZOQlFWTXNSVUZCUlN4TFFVRkxMRU5CUVVNc1dVRkJXU3hIUVVGSExHbENRVUZwUWl4RFFVRkRMRXRCUVVzc1EwRkJReXhIUVVGSkxFMUJRVTBzUlVGQlJTeFJRVUZSTEVWQlFVVXNTMEZCU3l4RFFVRkRMRTFCUVUwc1JVRkJSU3hGUVVGRkxFVkJRVVVzUzBGQlN5eERRVUZETEU5QlFVOHNTVUZEY0Vnc1MwRkJTeXhEUVVGRExFbEJRVWtzUTBGRFJpeERRVU5vUWl4RFFVRkRPMEZCUTA0c1EwRkJReXhEUVVGRE8wRkJSVVlzVFVGQlRTeERRVUZETEUxQlFVMHNaVUZCWlN4SFFVRkhMRU5CUVVNc1MwRkJhMElzUlVGQlJTeEZRVUZGTzBsQlEyeEVMRWxCUVVrc1EwRkJReXhMUVVGTExFTkJRVU1zV1VGQldTeEZRVUZETzFGQlEzQkNMRTlCUVU4c2IwSkJRVU1zVjBGQlZ5eHZRa0ZCU3l4TFFVRkxMRVZCUVVjc1EwRkJRVHRMUVVOdVF6dEpRVVZFTEU5QlFVOHNNRU5CUVVjc1MwRkJTeXhEUVVGRExFbEJRVWtzUTBGQlNTeERRVUZCTzBGQlF6VkNMRU5CUVVNc1EwRkJRenRCUVVWR0xFMUJRVTBzVjBGQlZ5eEhRVUZITEVOQlFVTXNTMEZCYTBJc1JVRkJSU3hGUVVGRk8wbEJRM1pETEUxQlFVMHNWMEZCVnl4SFFVRlZMRU5CUVVNc1EwRkJReXhEUVVGRExFdEJRVXNzUTBGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1MwRkJTeXhEUVVGRExFbEJRVWtzUTBGQlF5eFJRVUZSTEVWQlFVVXNRMEZCUXl4RFFVRkRMRU5CUVVNc1NVRkJTU3hEUVVGRE8wbEJRM3BGTEU5QlFVOHNRMEZEU0N3MlFrRkJTeXhUUVVGVExFVkJRVVVzUzBGQlN5eERRVUZETEZsQlFWa3NTVUZGTVVJc1MwRkJTeXhEUVVGRExHRkJRV0VzUTBGQlF5eFhRVUZYTEVWQlF6TkNPMUZCUTBrc1UwRkJVeXhGUVVGRkxFdEJRVXNzUTBGQlF5eFpRVUZaTEVkQlFVY3NhVUpCUVdsQ0xFTkJRVU1zUzBGQlN5eERRVUZETEVkQlFVY3NUVUZCVFR0TFFVTndSU3hGUVVORUxHOUNRVUZETEdWQlFXVXNiMEpCUVVzc1MwRkJTeXhGUVVGSExFTkJRMmhETEVOQlIwZ3NRMEZEVkN4RFFVRkJPMEZCUTB3c1EwRkJReXhEUVVGRE8wRkJSVVlzVFVGQlRTeFBRVUZQTEVkQlFVY3NRMEZCUXl4TFFVRnJRaXhGUVVGRkxFVkJRVVU3U1VGRGJrTXNUVUZCVFN4UFFVRlBMRWRCUVVjc01FSkJRVEJDTEVOQlFVTXNkMEpCUVhkQ0xFTkJRVU1zVjBGQlZ5eEZRVUZGTEZkQlFWY3NRMEZCUXl4RlFVRkZMR2RDUVVGblFpeEZRVUZGTEZOQlFWTXNRMEZCUXl4RFFVRkJPMGxCUXpOSUxFOUJRVThzYjBKQlFVTXNUMEZCVHl4dlFrRkJTeXhMUVVGTExFVkJRVWNzUTBGQlFUdEJRVU5vUXl4RFFVRkRMRU5CUVVNN1FVRkZSaXhsUVVGbExFOUJRVThzUTBGQlF5SXNJbk52ZFhKalpYTkRiMjUwWlc1MElqcGJJaThxWEc0Z0tpQWdRMjl3ZVhKcFoyaDBJREl3TWpBZ1FXUnZZbVZjYmlBcVhHNGdLaUFnVEdsalpXNXpaV1FnZFc1a1pYSWdkR2hsSUVGd1lXTm9aU0JNYVdObGJuTmxMQ0JXWlhKemFXOXVJREl1TUNBb2RHaGxJRndpVEdsalpXNXpaVndpS1R0Y2JpQXFJQ0I1YjNVZ2JXRjVJRzV2ZENCMWMyVWdkR2hwY3lCbWFXeGxJR1Y0WTJWd2RDQnBiaUJqYjIxd2JHbGhibU5sSUhkcGRHZ2dkR2hsSUV4cFkyVnVjMlV1WEc0Z0tpQWdXVzkxSUcxaGVTQnZZblJoYVc0Z1lTQmpiM0I1SUc5bUlIUm9aU0JNYVdObGJuTmxJR0YwWEc0Z0tseHVJQ29nSUNBZ0lDQm9kSFJ3T2k4dmQzZDNMbUZ3WVdOb1pTNXZjbWN2YkdsalpXNXpaWE12VEVsRFJVNVRSUzB5TGpCY2JpQXFYRzRnS2lBZ1ZXNXNaWE56SUhKbGNYVnBjbVZrSUdKNUlHRndjR3hwWTJGaWJHVWdiR0YzSUc5eUlHRm5jbVZsWkNCMGJ5QnBiaUIzY21sMGFXNW5MQ0J6YjJaMGQyRnlaVnh1SUNvZ0lHUnBjM1J5YVdKMWRHVmtJSFZ1WkdWeUlIUm9aU0JNYVdObGJuTmxJR2x6SUdScGMzUnlhV0oxZEdWa0lHOXVJR0Z1SUZ3aVFWTWdTVk5jSWlCQ1FWTkpVeXhjYmlBcUlDQlhTVlJJVDFWVUlGZEJVbEpCVGxSSlJWTWdUMUlnUTA5T1JFbFVTVTlPVXlCUFJpQkJUbGtnUzBsT1JDd2daV2wwYUdWeUlHVjRjSEpsYzNNZ2IzSWdhVzF3YkdsbFpDNWNiaUFxSUNCVFpXVWdkR2hsSUV4cFkyVnVjMlVnWm05eUlIUm9aU0J6Y0dWamFXWnBZeUJzWVc1bmRXRm5aU0JuYjNabGNtNXBibWNnY0dWeWJXbHpjMmx2Ym5NZ1lXNWtYRzRnS2lBZ2JHbHRhWFJoZEdsdmJuTWdkVzVrWlhJZ2RHaGxJRXhwWTJWdWMyVXVYRzRnS2k5Y2JseHVhVzF3YjNKMElGSmxZV04wTENCN1EyOXRjRzl1Wlc1MGZTQm1jbTl0SUNkeVpXRmpkQ2M3WEc1cGJYQnZjblFnZTNkcGRHaERiMjVrYVhScGIyNWhiRkJzWVdObFNHOXNaR1Z5TENCM2FYUm9VM1JoYm1SaGNtUkNZWE5sUTNOelEyeGhjM045SUdaeWIyMGdYQ0l1TGk4dUxpOHVMaTlCWW5OMGNtRmpkRU52Y21WRGIyMXdiMjVsYm5SY0lqdGNibWx0Y0c5eWRDQjdVbTkxZEdWa1EyOXlaVU52YlhCdmJtVnVkRTF2WkdWc2ZTQm1jbTl0SUZ3aUxpNHZMaTR2TGk0dmNtOTFkR2x1Wnk5U2IzVjBaV1JEYjNKbFEyOXRjRzl1Wlc1MFhDSTdYRzVwYlhCdmNuUWdlMUp2ZFhSbFpFeHBibXQ5SUdaeWIyMGdYQ0l1TGk4dUxpOHVMaTl5YjNWMGFXNW5MMUp2ZFhSbFpFeHBibXRjSWp0Y2JtbHRjRzl5ZENCN1ZHbDBiR1ZXTWtselJXMXdkSGxHYm4wZ1puSnZiU0JjSWk0dlZHbDBiR1ZXTWtselJXMXdkSGxHYmx3aU8xeHVYRzVsZUhCdmNuUWdhVzUwWlhKbVlXTmxJRlJwZEd4bFZqSk5iMlJsYkNCbGVIUmxibVJ6SUZKdmRYUmxaRU52Y21WRGIyMXdiMjVsYm5STmIyUmxiSHRjYmlBZ0lDQjBaWGgwT2lCemRISnBibWM3WEc0Z0lDQWdiR2x1YTFWU1REODZJSE4wY21sdVp6dGNiaUFnSUNCc2FXNXJSR2x6WVdKc1pXUTZJR0p2YjJ4bFlXNDdYRzRnSUNBZ2RIbHdaVDg2SUhOMGNtbHVaenRjYmlBZ0lDQnVaWE4wWldRL09pQmliMjlzWldGdVhHNTlYRzVjYm1OdmJuTjBJR0psYlUxdlpHbG1hV1Z5VUhKbFptbDRJRDBnS0hCeWIzQnpPbFJwZEd4bFZqSk5iMlJsYkNrZ1BUNGdjSEp2Y0hNdWJtVnpkR1ZrSUQ4Z0p5MG5JRG9nSjE5Zkp6dGNibHh1Wlhod2IzSjBJR052Ym5OMElGUnBkR3hsVmpKTWFXNXJJRDBnS0hCeWIzQnpPbFJwZEd4bFZqSk5iMlJsYkNrZ1BUNGdlMXh1SUNBZ0lISmxkSFZ5YmlBb1hHNGdJQ0FnSUNBZ0lEeFNiM1YwWldSTWFXNXJJR05zWVhOelRtRnRaVDE3Y0hKdmNITXVZbUZ6WlVOemMwTnNZWE56SUNzZ1ltVnRUVzlrYVdacFpYSlFjbVZtYVhnb2NISnZjSE1wSUNzZ0lDZHNhVzVySjMwZ2FYTlNiM1YwWldROWUzQnliM0J6TG5KdmRYUmxaSDBnZEc4OWUzQnliM0J6TG14cGJtdFZVa3g5UGx4dUlDQWdJQ0FnSUNBZ0lDQWdlM0J5YjNCekxuUmxlSFI5WEc0Z0lDQWdJQ0FnSUR3dlVtOTFkR1ZrVEdsdWF6NWNiaUFnSUNBcE8xeHVmVHRjYmx4dVpYaHdiM0owSUdOdmJuTjBJRlJwZEd4bFZqSkRiMjUwWlc1MGN5QTlJQ2h3Y205d2N6cFVhWFJzWlZZeVRXOWtaV3dwSUQwK0lIdGNiaUFnSUNCcFppZ2dJWEJ5YjNCekxteHBibXRFYVhOaFlteGxaQ2w3WEc0Z0lDQWdJQ0FnSUhKbGRIVnliaUE4VkdsMGJHVldNa3hwYm1zZ2V5NHVMbkJ5YjNCemZTOCtYRzRnSUNBZ2ZWeHVYRzRnSUNBZ2NtVjBkWEp1SUR3K2UzQnliM0J6TG5SbGVIUjlQQzgrWEc1OU8xeHVYRzVqYjI1emRDQlVhWFJzWlZZeVNXMXdiQ0E5SUNod2NtOXdjenBVYVhSc1pWWXlUVzlrWld3cElEMCtJSHRjYmlBZ0lDQmpiMjV6ZENCbGJHVnRaVzUwVkhsd1pUcHpkSEpwYm1jZ1BTQW9JU0Z3Y205d2N5NTBlWEJsS1NBL0lIQnliM0J6TG5SNWNHVXVkRzlUZEhKcGJtY29LU0E2SUNkb015YzdYRzRnSUNBZ2NtVjBkWEp1SUNoY2JpQWdJQ0FnSUNBZ1BHUnBkaUJqYkdGemMwNWhiV1U5ZTNCeWIzQnpMbUpoYzJWRGMzTkRiR0Z6YzMwK1hHNGdJQ0FnSUNBZ0lDQWdJQ0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnVW1WaFkzUXVZM0psWVhSbFJXeGxiV1Z1ZENobGJHVnRaVzUwVkhsd1pTeGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnWTJ4aGMzTk9ZVzFsT2lCd2NtOXdjeTVpWVhObFEzTnpRMnhoYzNNZ0t5QmlaVzFOYjJScFptbGxjbEJ5WldacGVDaHdjbTl3Y3lrZ0t5QW5kR1Y0ZENjc1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJSDBzWEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lEeFVhWFJzWlZZeVEyOXVkR1Z1ZEhNZ2V5NHVMbkJ5YjNCemZTOCtYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdLVnh1SUNBZ0lDQWdJQ0FnSUNBZ2ZWeHVYRzRnSUNBZ0lDQWdJRHd2WkdsMlBseHVJQ0FnSUNsY2JuMDdYRzVjYm1OdmJuTjBJRlJwZEd4bFZqSWdQU0FvY0hKdmNITTZWR2wwYkdWV01rMXZaR1ZzS1NBOVBpQjdYRzRnSUNBZ1kyOXVjM1FnVjNKaGNIQmxaQ0E5SUhkcGRHaERiMjVrYVhScGIyNWhiRkJzWVdObFNHOXNaR1Z5S0hkcGRHaFRkR0Z1WkdGeVpFSmhjMlZEYzNORGJHRnpjeWhVYVhSc1pWWXlTVzF3YkN3Z1hDSmpiWEF0ZEdsMGJHVmNJaWtzSUZScGRHeGxWakpKYzBWdGNIUjVSbTRzSUZ3aVZHbDBiR1ZXTWx3aUtWeHVJQ0FnSUhKbGRIVnliaUE4VjNKaGNIQmxaQ0I3TGk0dWNISnZjSE45THo1Y2JuMDdYRzVjYm1WNGNHOXlkQ0JrWldaaGRXeDBJRlJwZEd4bFZqSTdJbDE5IiwiZXhwb3J0IGZ1bmN0aW9uIFRpdGxlVjJJc0VtcHR5Rm4ocHJvcHMpIHtcbiAgICByZXR1cm4gcHJvcHMudGV4dCA9PSBudWxsIHx8IHByb3BzLnRleHQudHJpbSgpLmxlbmd0aCA9PT0gMDtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaVZHbDBiR1ZXTWtselJXMXdkSGxHYmk1cWN5SXNJbk52ZFhKalpWSnZiM1FpT2lJaUxDSnpiM1Z5WTJWeklqcGJJbFJwZEd4bFZqSkpjMFZ0Y0hSNVJtNHVkSE1pWFN3aWJtRnRaWE1pT2x0ZExDSnRZWEJ3YVc1bmN5STZJa0ZCUlVFc1RVRkJUU3hWUVVGVkxHZENRVUZuUWl4RFFVRkRMRXRCUVd0Q08wbEJReTlETEU5QlFVOHNTMEZCU3l4RFFVRkRMRWxCUVVrc1NVRkJTU3hKUVVGSkxFbEJRVWtzUzBGQlN5eERRVUZETEVsQlFVa3NRMEZCUXl4SlFVRkpMRVZCUVVVc1EwRkJReXhOUVVGTkxFdEJRVXNzUTBGQlF5eERRVUZETzBGQlEyaEZMRU5CUVVNaUxDSnpiM1Z5WTJWelEyOXVkR1Z1ZENJNld5SnBiWEJ2Y25RZ2UxUnBkR3hsVmpKTmIyUmxiSDBnWm5KdmJTQmNJaTR2VkdsMGJHVldNbHdpTzF4dVhHNWxlSEJ2Y25RZ1puVnVZM1JwYjI0Z1ZHbDBiR1ZXTWtselJXMXdkSGxHYmlod2NtOXdjenBVYVhSc1pWWXlUVzlrWld3cE9pQmliMjlzWldGdWUxeHVJQ0FnSUhKbGRIVnliaUJ3Y205d2N5NTBaWGgwSUQwOUlHNTFiR3dnZkh3Z2NISnZjSE11ZEdWNGRDNTBjbWx0S0NrdWJHVnVaM1JvSUQwOVBTQXdPMXh1ZlNKZGZRPT0iLCIvKlxuICogIENvcHlyaWdodCAyMDIwIEFkb2JlXG4gKlxuICogIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiAgeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICAgICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqICBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiAgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiAgU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuY29uc3QgREVGQVVMVF9FTVBUWV9URVhUX0xBQkVMID0gJ1BsZWFzZSBjb25maWd1cmUgdGhlIGNvbXBvbmVudCc7XG5leHBvcnQgY29uc3QgRWRpdG9yUGxhY2VIb2xkZXIgPSAocHJvcHMpID0+IHtcbiAgICBjb25zdCBwYXJ0MSA9IChwcm9wcy5jb21wb25lbnRUaXRsZSAhPSBudWxsICYmIHByb3BzLmNvbXBvbmVudFRpdGxlLmxlbmd0aCA+IDApID8gcHJvcHMuY29tcG9uZW50VGl0bGUgKyAnIC0gJyA6ICcnO1xuICAgIGNvbnN0IHBhcnQyID0gKHByb3BzLmVtcHR5VGV4dEFwcGVuZCAhPSBudWxsKSA/IHByb3BzLmVtcHR5VGV4dEFwcGVuZCA6IERFRkFVTFRfRU1QVFlfVEVYVF9MQUJFTDtcbiAgICBjb25zdCBlbXB0eVRleHQgPSBwYXJ0MSArIHBhcnQyO1xuICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzTmFtZTogJ2NxLXBsYWNlaG9sZGVyJyArIChwcm9wcy5jbGFzc0FwcGVuZCAhPSBudWxsID8gJyAnICsgcHJvcHMuY2xhc3NBcHBlbmQgOiAnJykgfSwgZW1wdHlUZXh0KSk7XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pY0d4aFkyVm9iMnhrWlhJdWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUlpd2ljMjkxY21ObGN5STZXeUp3YkdGalpXaHZiR1JsY2k1MGMzZ2lYU3dpYm1GdFpYTWlPbHRkTENKdFlYQndhVzVuY3lJNklrRkJRVUU3T3pzN096czdPenM3T3pzN08wZEJZMGM3UVVGRFNDeFBRVUZQTEV0QlFXdENMRTFCUVUwc1QwRkJUeXhEUVVGRE8wRkJUM1pETEUxQlFVMHNkMEpCUVhkQ0xFZEJRVWNzWjBOQlFXZERMRU5CUVVNN1FVRkZiRVVzVFVGQlRTeERRVUZETEUxQlFVMHNhVUpCUVdsQ0xFZEJRVWNzUTBGQlF5eExRVUZ6UWl4RlFVRkZMRVZCUVVVN1NVRkZlRVFzVFVGQlRTeExRVUZMTEVkQlFWY3NRMEZCUXl4TFFVRkxMRU5CUVVNc1kwRkJZeXhKUVVGSkxFbEJRVWtzU1VGQlNTeExRVUZMTEVOQlFVTXNZMEZCWXl4RFFVRkRMRTFCUVUwc1IwRkJSeXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVVXNTMEZCU3l4RFFVRkRMR05CUVdNc1IwRkJTU3hMUVVGTExFTkJRVU1zUTBGQlF5eERRVUZETEVWQlFVVXNRMEZCUXp0SlFVTTVTQ3hOUVVGTkxFdEJRVXNzUjBGQlZ5eERRVUZETEV0QlFVc3NRMEZCUXl4bFFVRmxMRWxCUVVrc1NVRkJTU3hEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZGTEV0QlFVc3NRMEZCUXl4bFFVRmxMRU5CUVVNc1EwRkJReXhEUVVGRExIZENRVUYzUWl4RFFVRkRPMGxCUXpGSExFMUJRVTBzVTBGQlV5eEhRVUZITEV0QlFVc3NSMEZCUnl4TFFVRkxMRU5CUVVNN1NVRkZhRU1zVDBGQlR5eERRVU5JTERaQ1FVTkpMRk5CUVZNc1JVRkJSU3huUWtGQlowSXNSMEZCUnl4RFFVRkRMRXRCUVVzc1EwRkJReXhYUVVGWExFbEJRVWtzU1VGQlNTeERRVUZCTEVOQlFVTXNRMEZCUXl4SFFVRkhMRWRCUVVjc1MwRkJTeXhEUVVGRExGZEJRVmNzUTBGQlF5eERRVUZETEVOQlFVTXNSVUZCUlN4RFFVRkRMRWxCUTNSR0xGTkJRVk1zUTBGRFVpeERRVU5VTEVOQlFVRTdRVUZEVEN4RFFVRkRMRU5CUVVNaUxDSnpiM1Z5WTJWelEyOXVkR1Z1ZENJNld5SXZLbHh1SUNvZ0lFTnZjSGx5YVdkb2RDQXlNREl3SUVGa2IySmxYRzRnS2x4dUlDb2dJRXhwWTJWdWMyVmtJSFZ1WkdWeUlIUm9aU0JCY0dGamFHVWdUR2xqWlc1elpTd2dWbVZ5YzJsdmJpQXlMakFnS0hSb1pTQmNJa3hwWTJWdWMyVmNJaWs3WEc0Z0tpQWdlVzkxSUcxaGVTQnViM1FnZFhObElIUm9hWE1nWm1sc1pTQmxlR05sY0hRZ2FXNGdZMjl0Y0d4cFlXNWpaU0IzYVhSb0lIUm9aU0JNYVdObGJuTmxMbHh1SUNvZ0lGbHZkU0J0WVhrZ2IySjBZV2x1SUdFZ1kyOXdlU0J2WmlCMGFHVWdUR2xqWlc1elpTQmhkRnh1SUNwY2JpQXFJQ0FnSUNBZ2FIUjBjRG92TDNkM2R5NWhjR0ZqYUdVdWIzSm5MMnhwWTJWdWMyVnpMMHhKUTBWT1UwVXRNaTR3WEc0Z0tseHVJQ29nSUZWdWJHVnpjeUJ5WlhGMWFYSmxaQ0JpZVNCaGNIQnNhV05oWW14bElHeGhkeUJ2Y2lCaFozSmxaV1FnZEc4Z2FXNGdkM0pwZEdsdVp5d2djMjltZEhkaGNtVmNiaUFxSUNCa2FYTjBjbWxpZFhSbFpDQjFibVJsY2lCMGFHVWdUR2xqWlc1elpTQnBjeUJrYVhOMGNtbGlkWFJsWkNCdmJpQmhiaUJjSWtGVElFbFRYQ0lnUWtGVFNWTXNYRzRnS2lBZ1YwbFVTRTlWVkNCWFFWSlNRVTVVU1VWVElFOVNJRU5QVGtSSlZFbFBUbE1nVDBZZ1FVNVpJRXRKVGtRc0lHVnBkR2hsY2lCbGVIQnlaWE56SUc5eUlHbHRjR3hwWldRdVhHNGdLaUFnVTJWbElIUm9aU0JNYVdObGJuTmxJR1p2Y2lCMGFHVWdjM0JsWTJsbWFXTWdiR0Z1WjNWaFoyVWdaMjkyWlhKdWFXNW5JSEJsY20xcGMzTnBiMjV6SUdGdVpGeHVJQ29nSUd4cGJXbDBZWFJwYjI1eklIVnVaR1Z5SUhSb1pTQk1hV05sYm5ObExseHVJQ292WEc1cGJYQnZjblFnVW1WaFkzUXNJSHREYjIxd2IyNWxiblI5SUdaeWIyMGdKM0psWVdOMEp6dGNibHh1Wlhod2IzSjBJR2x1ZEdWeVptRmpaU0JRYkdGalpVaHZiR1JsY2sxdlpHVnNJSHRjYmlBZ0lDQmpiMjF3YjI1bGJuUlVhWFJzWlQ4NklITjBjbWx1WjF4dUlDQWdJR05zWVhOelFYQndaVzVrUHpvZ2MzUnlhVzVuWEc0Z0lDQWdaVzF3ZEhsVVpYaDBRWEJ3Wlc1a1B6b2djM1J5YVc1blhHNTlYRzVqYjI1emRDQkVSVVpCVlV4VVgwVk5VRlJaWDFSRldGUmZURUZDUlV3Z1BTQW5VR3hsWVhObElHTnZibVpwWjNWeVpTQjBhR1VnWTI5dGNHOXVaVzUwSnp0Y2JseHVaWGh3YjNKMElHTnZibk4wSUVWa2FYUnZjbEJzWVdObFNHOXNaR1Z5SUQwZ0tIQnliM0J6T2xCc1lXTmxTRzlzWkdWeVRXOWtaV3dwSUQwK0lIdGNibHh1SUNBZ0lHTnZibk4wSUhCaGNuUXhPaUJ6ZEhKcGJtY2dQU0FvY0hKdmNITXVZMjl0Y0c5dVpXNTBWR2wwYkdVZ0lUMGdiblZzYkNBbUppQndjbTl3Y3k1amIyMXdiMjVsYm5SVWFYUnNaUzVzWlc1bmRHZ2dQaUF3S1NBL0lDQndjbTl3Y3k1amIyMXdiMjVsYm5SVWFYUnNaU0FySUNBbklDMGdKeUE2SUNjbk8xeHVJQ0FnSUdOdmJuTjBJSEJoY25ReU9pQnpkSEpwYm1jZ1BTQW9jSEp2Y0hNdVpXMXdkSGxVWlhoMFFYQndaVzVrSUNFOUlHNTFiR3dwSUQ4Z0lIQnliM0J6TG1WdGNIUjVWR1Y0ZEVGd2NHVnVaQ0E2SUVSRlJrRlZURlJmUlUxUVZGbGZWRVZZVkY5TVFVSkZURHRjYmlBZ0lDQmpiMjV6ZENCbGJYQjBlVlJsZUhRZ1BTQndZWEowTVNBcklIQmhjblF5TzF4dVhHNGdJQ0FnY21WMGRYSnVJQ2hjYmlBZ0lDQWdJQ0FnUEdScGRseHVJQ0FnSUNBZ0lDQWdJQ0FnWTJ4aGMzTk9ZVzFsUFhzblkzRXRjR3hoWTJWb2IyeGtaWEluSUNzZ0tIQnliM0J6TG1Oc1lYTnpRWEJ3Wlc1a0lDRTlJRzUxYkd3L0lDY2dKeUFySUhCeWIzQnpMbU5zWVhOelFYQndaVzVrSURvZ0p5Y3BmVDVjYmlBZ0lDQWdJQ0FnSUNBZ0lIdGxiWEIwZVZSbGVIUjlYRzRnSUNBZ0lDQWdJRHd2WkdsMlBseHVJQ0FnSUNsY2JuMDdJbDE5IiwiLypcbiAqICBDb3B5cmlnaHQgMjAyMCBBZG9iZVxuICpcbiAqICBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqICBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgICAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqICBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiAgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqICBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IExpbmsgYXMgUm91dGVyTGluayB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xuZXhwb3J0IGNvbnN0IFJvdXRlZExpbmsgPSAocHJvcHMpID0+IHtcbiAgICBjb25zdCB7IHRvLCBpc1JvdXRlZCwgLi4ub3RoZXJQcm9wcyB9ID0gcHJvcHM7XG4gICAgaWYgKHRvID09PSB1bmRlZmluZWQgfHwgdG8udHJpbSgpLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcImFcIiwgT2JqZWN0LmFzc2lnbih7IGhyZWY6ICcjJyB9LCBvdGhlclByb3BzKSk7XG4gICAgfVxuICAgIGNvbnN0IGlzRXh0ZXJuYWwgPSAvXmh0dHBzPzpcXC9cXC8vLnRlc3QodG8pO1xuICAgIHJldHVybiBpc0V4dGVybmFsIHx8ICFpc1JvdXRlZCA/XG4gICAgICAgIChSZWFjdC5jcmVhdGVFbGVtZW50KFwiYVwiLCBPYmplY3QuYXNzaWduKHsgaHJlZjogdG8gfSwgb3RoZXJQcm9wcykpKVxuICAgICAgICA6XG4gICAgICAgICAgICAoUmVhY3QuY3JlYXRlRWxlbWVudChSb3V0ZXJMaW5rLCBPYmplY3QuYXNzaWduKHt9LCBvdGhlclByb3BzLCB7IHRvOiB0byB9KSkpO1xufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaVVtOTFkR1ZrVEdsdWF5NXFjeUlzSW5OdmRYSmpaVkp2YjNRaU9pSWlMQ0p6YjNWeVkyVnpJanBiSWxKdmRYUmxaRXhwYm1zdWRITjRJbDBzSW01aGJXVnpJanBiWFN3aWJXRndjR2x1WjNNaU9pSkJRVUZCT3pzN096czdPenM3T3pzN096dEhRV05ITzBGQlJVZ3NUMEZCVHl4TFFVRkxMRTFCUVUwc1QwRkJUeXhEUVVGRE8wRkJRekZDTEU5QlFVOHNSVUZCUXl4SlFVRkpMRWxCUVVrc1ZVRkJWU3hGUVVGRExFMUJRVTBzYTBKQlFXdENMRU5CUVVNN1FVRlBjRVFzVFVGQlRTeERRVUZETEUxQlFVMHNWVUZCVlN4SFFVRkhMRU5CUVVNc1MwRkJaU3hGUVVGRkxFVkJRVVU3U1VGRE1VTXNUVUZCVFN4RlFVRkRMRVZCUVVVc1JVRkJSU3hSUVVGUkxFVkJRVVVzUjBGQlJ5eFZRVUZWTEVWQlFVTXNSMEZCUnl4TFFVRkxMRU5CUVVNN1NVRkZOVU1zU1VGQlJ5eEZRVUZGTEV0QlFVc3NVMEZCVXl4SlFVRkpMRVZCUVVVc1EwRkJReXhKUVVGSkxFVkJRVVVzUTBGQlF5eE5RVUZOTEV0QlFVc3NRMEZCUXl4RlFVRkRPMUZCUXpGRExFOUJRVThzZVVOQlFVY3NTVUZCU1N4RlFVRkZMRWRCUVVjc1NVRkRXQ3hWUVVGVkxFVkJRMmhDTEVOQlFVTTdTMEZEVGp0SlFVTkVMRTFCUVUwc1ZVRkJWU3hIUVVGSExHTkJRV01zUTBGQlF5eEpRVUZKTEVOQlFVTXNSVUZCUlN4RFFVRkRMRU5CUVVNN1NVRkZNME1zVDBGQlR5eFZRVUZWTEVsQlFVa3NRMEZCUXl4UlFVRlJMRU5CUVVFc1EwRkJRenRSUVVNelFpeERRVUZETEhsRFFVTkhMRWxCUVVrc1JVRkJSU3hGUVVGRkxFbEJRMG9zVlVGQlZTeEZRVU5vUWl4RFFVRkRPMUZCUTBnc1EwRkJRenRaUVVORUxFTkJRVVVzYjBKQlFVTXNWVUZCVlN4dlFrRkJTeXhWUVVGVkxFbEJRMlFzUlVGQlJTeEZRVUZGTEVWQlFVVXNTVUZEYkVJc1EwRkJReXhEUVVGQk8wRkJRMWdzUTBGQlF5eERRVUZESWl3aWMyOTFjbU5sYzBOdmJuUmxiblFpT2xzaUx5cGNiaUFxSUNCRGIzQjVjbWxuYUhRZ01qQXlNQ0JCWkc5aVpWeHVJQ3BjYmlBcUlDQk1hV05sYm5ObFpDQjFibVJsY2lCMGFHVWdRWEJoWTJobElFeHBZMlZ1YzJVc0lGWmxjbk5wYjI0Z01pNHdJQ2gwYUdVZ1hDSk1hV05sYm5ObFhDSXBPMXh1SUNvZ0lIbHZkU0J0WVhrZ2JtOTBJSFZ6WlNCMGFHbHpJR1pwYkdVZ1pYaGpaWEIwSUdsdUlHTnZiWEJzYVdGdVkyVWdkMmwwYUNCMGFHVWdUR2xqWlc1elpTNWNiaUFxSUNCWmIzVWdiV0Y1SUc5aWRHRnBiaUJoSUdOdmNIa2diMllnZEdobElFeHBZMlZ1YzJVZ1lYUmNiaUFxWEc0Z0tpQWdJQ0FnSUdoMGRIQTZMeTkzZDNjdVlYQmhZMmhsTG05eVp5OXNhV05sYm5ObGN5OU1TVU5GVGxORkxUSXVNRnh1SUNwY2JpQXFJQ0JWYm14bGMzTWdjbVZ4ZFdseVpXUWdZbmtnWVhCd2JHbGpZV0pzWlNCc1lYY2diM0lnWVdkeVpXVmtJSFJ2SUdsdUlIZHlhWFJwYm1jc0lITnZablIzWVhKbFhHNGdLaUFnWkdsemRISnBZblYwWldRZ2RXNWtaWElnZEdobElFeHBZMlZ1YzJVZ2FYTWdaR2x6ZEhKcFluVjBaV1FnYjI0Z1lXNGdYQ0pCVXlCSlUxd2lJRUpCVTBsVExGeHVJQ29nSUZkSlZFaFBWVlFnVjBGU1VrRk9WRWxGVXlCUFVpQkRUMDVFU1ZSSlQwNVRJRTlHSUVGT1dTQkxTVTVFTENCbGFYUm9aWElnWlhod2NtVnpjeUJ2Y2lCcGJYQnNhV1ZrTGx4dUlDb2dJRk5sWlNCMGFHVWdUR2xqWlc1elpTQm1iM0lnZEdobElITndaV05wWm1saklHeGhibWQxWVdkbElHZHZkbVZ5Ym1sdVp5QndaWEp0YVhOemFXOXVjeUJoYm1SY2JpQXFJQ0JzYVcxcGRHRjBhVzl1Y3lCMWJtUmxjaUIwYUdVZ1RHbGpaVzV6WlM1Y2JpQXFMMXh1WEc1cGJYQnZjblFnVW1WaFkzUWdabkp2YlNBbmNtVmhZM1FuTzF4dWFXMXdiM0owSUh0TWFXNXJJR0Z6SUZKdmRYUmxja3hwYm10OUlHWnliMjBnSjNKbFlXTjBMWEp2ZFhSbGNpMWtiMjBuTzF4dVhHNWxlSEJ2Y25RZ2FXNTBaWEptWVdObElFeHBibXRRY205d2N5QjdYRzRnSUNBZ2RHOC9PaUJ6ZEhKcGJtYzdYRzRnSUNBZ2FYTlNiM1YwWldRL09pQmliMjlzWldGdU8xeHVJQ0FnSUZ0d2NtOXdPaUJ6ZEhKcGJtZGRPaUJoYm5sY2JuMWNibVY0Y0c5eWRDQmpiMjV6ZENCU2IzVjBaV1JNYVc1cklEMGdLSEJ5YjNCek9reHBibXRRY205d2N5a2dQVDRnZTF4dUlDQWdJR052Ym5OMElIdDBieXdnYVhOU2IzVjBaV1FzSUM0dUxtOTBhR1Z5VUhKdmNITjlJRDBnY0hKdmNITTdYRzVjYmlBZ0lDQnBaaWgwYnlBOVBUMGdkVzVrWldacGJtVmtJSHg4SUhSdkxuUnlhVzBvS1M1c1pXNW5kR2dnUFQwOUlEQXBlMXh1SUNBZ0lDQWdJQ0J5WlhSMWNtNGdQR0VnYUhKbFpqMTdKeU1uZlZ4dUlDQWdJQ0FnSUNBZ0lDQWdleTR1TG05MGFHVnlVSEp2Y0hOOVhHNGdJQ0FnSUNBZ0lDOCtPMXh1SUNBZ0lIMWNiaUFnSUNCamIyNXpkQ0JwYzBWNGRHVnlibUZzSUQwZ0wxNW9kSFJ3Y3o4NlhGd3ZYRnd2THk1MFpYTjBLSFJ2S1R0Y2JseHVJQ0FnSUhKbGRIVnliaUJwYzBWNGRHVnlibUZzSUh4OElDRnBjMUp2ZFhSbFpEOWNiaUFnSUNBZ0lDQWdLRHhoWEc0Z0lDQWdJQ0FnSUNBZ0lDQm9jbVZtUFh0MGIzMWNiaUFnSUNBZ0lDQWdJQ0FnSUhzdUxpNXZkR2hsY2xCeWIzQnpmVnh1SUNBZ0lDQWdJQ0F2UGlsY2JpQWdJQ0FnSUNBZ09seHVJQ0FnSUNBZ0lDQW9JRHhTYjNWMFpYSk1hVzVySUhzdUxpNXZkR2hsY2xCeWIzQnpmVnh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lIUnZQWHQwYjMxY2JpQWdJQ0FnSUNBZ0x6NHBYRzU5T3lKZGZRPT0iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9