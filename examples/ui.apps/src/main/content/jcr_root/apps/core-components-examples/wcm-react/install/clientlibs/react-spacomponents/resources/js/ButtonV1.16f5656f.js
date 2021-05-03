(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ButtonV1"],{

/***/ "../../react-base-components/dist/authoring/button/v1/ButtonV1.js":
/*!**************************************************************************************************************************!*\
  !*** /Users/raaijmak/workspace/aem-react-core-wcm-components/react-base-components/dist/authoring/button/v1/ButtonV1.js ***!
  \**************************************************************************************************************************/
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

      return __webpack_require__(__webpack_require__.s = 3);
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
      "./src/authoring/button/v1/ButtonV1.tsx":
      /*!**********************************************!*\
        !*** ./src/authoring/button/v1/ButtonV1.tsx ***!
        \**********************************************/

      /*! exports provided: ButtonV1Content, default */

      /***/
      function (module, __webpack_exports__, __webpack_require__) {
        "use strict";

        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */


        __webpack_require__.d(__webpack_exports__, "ButtonV1Content", function () {
          return ButtonV1Content;
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


        var _ButtonV1IsEmptyFn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
        /*! ./ButtonV1IsEmptyFn */
        "./src/authoring/button/v1/ButtonV1IsEmptyFn.ts");
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


        const ButtonV1Content = props => {
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, props.icon && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
            className: `${props.baseCssClass}__icon ${props.baseCssClass}__icon--${props.icon}`
          }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
            className: props.baseCssClass + '__text'
          }, props.text));
        };

        const ButtonV1Impl = props => {
          const handleOnClick = event => {
            if (props.handleOnClick) {
              props.handleOnClick(event);
            }
          };

          const generateAttributes = isLink => {
            const computedAttrs = {
              className: props.baseCssClass,
              onClick: handleOnClick
            };

            if (isLink) {
              computedAttrs['aria-label'] = props.ariaLabel;
              computedAttrs['href'] = props.link;
            }

            return computedAttrs;
          };

          const isLink = !!props.link;
          const attrs = generateAttributes(isLink);

          if (isLink) {
            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_routing_RoutedLink__WEBPACK_IMPORTED_MODULE_2__["RoutedLink"], Object.assign({
              isRouted: attrs.routed,
              to: attrs.link
            }, attrs), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ButtonV1Content, Object.assign({}, props)));
          } else {
            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", Object.assign({}, attrs), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ButtonV1Content, Object.assign({}, props)));
          }
        };

        const ButtonV1 = props => {
          const Wrapped = Object(_AbstractCoreComponent__WEBPACK_IMPORTED_MODULE_1__["withConditionalPlaceHolder"])(Object(_AbstractCoreComponent__WEBPACK_IMPORTED_MODULE_1__["withStandardBaseCssClass"])(ButtonV1Impl, "cmp-button"), _ButtonV1IsEmptyFn__WEBPACK_IMPORTED_MODULE_3__["ButtonV1IsEmptyFn"], "Button V1");
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Wrapped, Object.assign({}, props));
        };
        /* harmony default export */


        __webpack_exports__["default"] = ButtonV1; //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQnV0dG9uVjEuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJCdXR0b25WMS50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7O0dBY0c7QUFFSCxPQUFPLEtBQW1CLE1BQU0sT0FBTyxDQUFDO0FBQ3hDLE9BQU8sRUFBQywwQkFBMEIsRUFBRSx3QkFBd0IsRUFBQyxNQUFNLGdDQUFnQyxDQUFDO0FBRXBHLE9BQU8sRUFBQyxVQUFVLEVBQUMsTUFBTSw2QkFBNkIsQ0FBQztBQUN2RCxPQUFPLEVBQUMsaUJBQWlCLEVBQUMsTUFBTSxxQkFBcUIsQ0FBQztBQVd0RCxNQUFNLENBQUMsTUFBTSxlQUFlLEdBQUcsQ0FBQyxLQUFtQixFQUFFLEVBQUU7SUFDbkQsT0FBTyxDQUNIO1FBQ00sS0FBSyxDQUFDLElBQUksSUFBSSw4QkFBTSxTQUFTLEVBQUUsR0FBRyxLQUFLLENBQUMsWUFBWSxVQUFVLEtBQUssQ0FBQyxZQUFZLFdBQVcsS0FBSyxDQUFDLElBQUksRUFBRSxHQUFTO1FBQ2xILDhCQUFNLFNBQVMsRUFBRSxLQUFLLENBQUMsWUFBWSxHQUFHLFFBQVEsSUFBRyxLQUFLLENBQUMsSUFBSSxDQUFRLENBQ3BFLENBQ04sQ0FBQztBQUNOLENBQUMsQ0FBQztBQUVGLE1BQU0sWUFBWSxHQUFHLENBQUMsS0FBbUIsRUFBRSxFQUFFO0lBRXpDLE1BQU0sYUFBYSxHQUFHLENBQUMsS0FBZ0IsRUFBRSxFQUFFO1FBQ3ZDLElBQUcsS0FBSyxDQUFDLGFBQWEsRUFBQztZQUNuQixLQUFLLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQzlCO0lBQ0wsQ0FBQyxDQUFDO0lBRUYsTUFBTSxrQkFBa0IsR0FBRyxDQUFDLE1BQWUsRUFBRSxFQUFFO1FBQzNDLE1BQU0sYUFBYSxHQUFRO1lBQ3ZCLFNBQVMsRUFBRSxLQUFLLENBQUMsWUFBWTtZQUM3QixPQUFPLEVBQUUsYUFBYTtTQUN6QixDQUFDO1FBRUYsSUFBSSxNQUFNLEVBQUU7WUFDUixhQUFhLENBQUMsWUFBWSxDQUFDLEdBQUcsS0FBSyxDQUFDLFNBQVMsQ0FBQztZQUM5QyxhQUFhLENBQUMsTUFBTSxDQUFDLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQztTQUN0QztRQUNELE9BQU8sYUFBYSxDQUFDO0lBQ3pCLENBQUMsQ0FBQztJQUVGLE1BQU0sTUFBTSxHQUFJLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUMvQixNQUFNLEtBQUssR0FBRyxrQkFBa0IsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUV6QyxJQUFHLE1BQU0sRUFBQztRQUNOLE9BQU8sb0JBQUMsVUFBVSxrQkFBQyxRQUFRLEVBQUUsS0FBSyxDQUFDLE1BQU0sRUFBRSxFQUFFLEVBQUUsS0FBSyxDQUFDLElBQUksSUFBTSxLQUFLO1lBQUUsb0JBQUMsZUFBZSxvQkFBSyxLQUFLLEVBQUcsQ0FBYSxDQUFBO0tBQ25IO1NBQUk7UUFDRCxPQUFPLGdEQUFZLEtBQUs7WUFBRSxvQkFBQyxlQUFlLG9CQUFLLEtBQUssRUFBRyxDQUFTLENBQUE7S0FDbkU7QUFDTCxDQUFDLENBQUM7QUFFRixNQUFNLFFBQVEsR0FBRyxDQUFDLEtBQW1CLEVBQUUsRUFBRTtJQUNyQyxNQUFNLE9BQU8sR0FBRywwQkFBMEIsQ0FBQyx3QkFBd0IsQ0FBQyxZQUFZLEVBQUMsWUFBWSxDQUFDLEVBQUUsaUJBQWlCLEVBQUUsV0FBVyxDQUFDLENBQUM7SUFDaEksT0FBTyxvQkFBQyxPQUFPLG9CQUFLLEtBQUssRUFBRyxDQUFBO0FBQ2hDLENBQUMsQ0FBQztBQUVGLGVBQWUsUUFBUSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqICBDb3B5cmlnaHQgMjAyMCBBZG9iZVxuICpcbiAqICBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqICBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgICAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqICBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiAgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqICBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuXG5pbXBvcnQgUmVhY3QsIHtNb3VzZUV2ZW50fSBmcm9tICdyZWFjdCc7XG5pbXBvcnQge3dpdGhDb25kaXRpb25hbFBsYWNlSG9sZGVyLCB3aXRoU3RhbmRhcmRCYXNlQ3NzQ2xhc3N9IGZyb20gXCIuLi8uLi8uLi9BYnN0cmFjdENvcmVDb21wb25lbnRcIjtcbmltcG9ydCB7Um91dGVkQ29yZUNvbXBvbmVudE1vZGVsfSBmcm9tIFwiLi4vLi4vLi4vcm91dGluZy9Sb3V0ZWRDb3JlQ29tcG9uZW50XCI7XG5pbXBvcnQge1JvdXRlZExpbmt9IGZyb20gXCIuLi8uLi8uLi9yb3V0aW5nL1JvdXRlZExpbmtcIjtcbmltcG9ydCB7QnV0dG9uVjFJc0VtcHR5Rm59IGZyb20gXCIuL0J1dHRvblYxSXNFbXB0eUZuXCI7XG5cblxuZXhwb3J0IGludGVyZmFjZSBCdXR0b25WMU1vZGVsIGV4dGVuZHMgUm91dGVkQ29yZUNvbXBvbmVudE1vZGVse1xuICAgIHRleHQ/OiBzdHJpbmc7XG4gICAgbGluaz86IHN0cmluZztcbiAgICBpY29uPzogc3RyaW5nO1xuICAgIGFyaWFMYWJlbD86IHN0cmluZztcbiAgICBoYW5kbGVPbkNsaWNrPyhldmVudDogTW91c2VFdmVudCk6IHZvaWRcbn1cblxuZXhwb3J0IGNvbnN0IEJ1dHRvblYxQ29udGVudCA9IChwcm9wczpCdXR0b25WMU1vZGVsKSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPD5cbiAgICAgICAgICAgIHsgcHJvcHMuaWNvbiAmJiA8c3BhbiBjbGFzc05hbWU9e2Ake3Byb3BzLmJhc2VDc3NDbGFzc31fX2ljb24gJHtwcm9wcy5iYXNlQ3NzQ2xhc3N9X19pY29uLS0ke3Byb3BzLmljb259YH0+PC9zcGFuPiAgfVxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtwcm9wcy5iYXNlQ3NzQ2xhc3MgKyAnX190ZXh0J30+e3Byb3BzLnRleHR9PC9zcGFuPlxuICAgICAgICA8Lz5cbiAgICApO1xufTtcblxuY29uc3QgQnV0dG9uVjFJbXBsID0gKHByb3BzOkJ1dHRvblYxTW9kZWwpID0+IHtcblxuICAgIGNvbnN0IGhhbmRsZU9uQ2xpY2sgPSAoZXZlbnQ6TW91c2VFdmVudCkgPT57XG4gICAgICAgIGlmKHByb3BzLmhhbmRsZU9uQ2xpY2spe1xuICAgICAgICAgICAgcHJvcHMuaGFuZGxlT25DbGljayhldmVudCk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgY29uc3QgZ2VuZXJhdGVBdHRyaWJ1dGVzID0gKGlzTGluazogYm9vbGVhbikgPT4ge1xuICAgICAgICBjb25zdCBjb21wdXRlZEF0dHJzOiBhbnkgPSB7XG4gICAgICAgICAgICBjbGFzc05hbWU6IHByb3BzLmJhc2VDc3NDbGFzcyxcbiAgICAgICAgICAgIG9uQ2xpY2s6IGhhbmRsZU9uQ2xpY2tcbiAgICAgICAgfTtcblxuICAgICAgICBpZiAoaXNMaW5rKSB7XG4gICAgICAgICAgICBjb21wdXRlZEF0dHJzWydhcmlhLWxhYmVsJ10gPSBwcm9wcy5hcmlhTGFiZWw7XG4gICAgICAgICAgICBjb21wdXRlZEF0dHJzWydocmVmJ10gPSBwcm9wcy5saW5rO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjb21wdXRlZEF0dHJzO1xuICAgIH07XG5cbiAgICBjb25zdCBpc0xpbmsgPSAgKCEhcHJvcHMubGluayk7XG4gICAgY29uc3QgYXR0cnMgPSBnZW5lcmF0ZUF0dHJpYnV0ZXMoaXNMaW5rKTtcblxuICAgIGlmKGlzTGluayl7XG4gICAgICAgIHJldHVybiA8Um91dGVkTGluayBpc1JvdXRlZD17YXR0cnMucm91dGVkfSB0bz17YXR0cnMubGlua30gey4uLmF0dHJzfT48QnV0dG9uVjFDb250ZW50IHsuLi5wcm9wc30vPjwvUm91dGVkTGluaz5cbiAgICB9ZWxzZXtcbiAgICAgICAgcmV0dXJuIDxidXR0b24gey4uLmF0dHJzfT48QnV0dG9uVjFDb250ZW50IHsuLi5wcm9wc30vPjwvYnV0dG9uPlxuICAgIH1cbn07XG5cbmNvbnN0IEJ1dHRvblYxID0gKHByb3BzOkJ1dHRvblYxTW9kZWwpID0+IHtcbiAgICBjb25zdCBXcmFwcGVkID0gd2l0aENvbmRpdGlvbmFsUGxhY2VIb2xkZXIod2l0aFN0YW5kYXJkQmFzZUNzc0NsYXNzKEJ1dHRvblYxSW1wbCxcImNtcC1idXR0b25cIiksIEJ1dHRvblYxSXNFbXB0eUZuLCBcIkJ1dHRvbiBWMVwiKTtcbiAgICByZXR1cm4gPFdyYXBwZWQgey4uLnByb3BzfS8+XG59O1xuXG5leHBvcnQgZGVmYXVsdCBCdXR0b25WMTsiXX0=

        /***/
      },

      /***/
      "./src/authoring/button/v1/ButtonV1IsEmptyFn.ts":
      /*!******************************************************!*\
        !*** ./src/authoring/button/v1/ButtonV1IsEmptyFn.ts ***!
        \******************************************************/

      /*! exports provided: ButtonV1IsEmptyFn */

      /***/
      function (module, __webpack_exports__, __webpack_require__) {
        "use strict";

        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */


        __webpack_require__.d(__webpack_exports__, "ButtonV1IsEmptyFn", function () {
          return ButtonV1IsEmptyFn;
        });

        function ButtonV1IsEmptyFn(props) {
          return props.text == null || props.text.length === 0;
        } //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQnV0dG9uVjFJc0VtcHR5Rm4uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJCdXR0b25WMUlzRW1wdHlGbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQSxNQUFNLFVBQVUsaUJBQWlCLENBQUMsS0FBbUI7SUFDakQsT0FBTyxLQUFLLENBQUMsSUFBSSxJQUFJLElBQUksSUFBSSxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sS0FBSyxDQUFDLENBQUM7QUFDekQsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7QnV0dG9uVjFNb2RlbH0gZnJvbSBcIi4vQnV0dG9uVjFcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIEJ1dHRvblYxSXNFbXB0eUZuKHByb3BzOkJ1dHRvblYxTW9kZWwpOiBib29sZWFue1xuICAgIHJldHVybiBwcm9wcy50ZXh0ID09IG51bGwgfHwgcHJvcHMudGV4dC5sZW5ndGggPT09IDA7XG59Il19

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
      3:
      /*!************************************************!*\
        !*** multi ./src/authoring/button/v1/ButtonV1 ***!
        \************************************************/

      /*! no static exports found */

      /***/
      function (module, exports, __webpack_require__) {
        module.exports = __webpack_require__(
        /*! ./src/authoring/button/v1/ButtonV1 */
        "./src/authoring/button/v1/ButtonV1.tsx");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9yYWFpam1hay93b3Jrc3BhY2UvYWVtLXJlYWN0LWNvcmUtd2NtLWNvbXBvbmVudHMvZXhhbXBsZXMvcmVhY3Qtc3BhY29tcG9uZW50cy1leGFtcGxlLXByb2plY3QvQGFkb2JlL2FlbS1jb3JlLWNvbXBvbmVudHMtcmVhY3QtYmFzZS93ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCIvVXNlcnMvcmFhaWptYWsvd29ya3NwYWNlL2FlbS1yZWFjdC1jb3JlLXdjbS1jb21wb25lbnRzL2V4YW1wbGVzL3JlYWN0LXNwYWNvbXBvbmVudHMtZXhhbXBsZS1wcm9qZWN0L0BhZG9iZS9hZW0tY29yZS1jb21wb25lbnRzLXJlYWN0LWJhc2Uvd2VicGFjay9ib290c3RyYXAiLCIvVXNlcnMvcmFhaWptYWsvd29ya3NwYWNlL2FlbS1yZWFjdC1jb3JlLXdjbS1jb21wb25lbnRzL2V4YW1wbGVzL3JlYWN0LXNwYWNvbXBvbmVudHMtZXhhbXBsZS1wcm9qZWN0L0BhZG9iZS9hZW0tY29yZS1jb21wb25lbnRzLXJlYWN0LWJhc2Uvc3JjL0Fic3RyYWN0Q29yZUNvbXBvbmVudC50c3giLCIvVXNlcnMvcmFhaWptYWsvd29ya3NwYWNlL2FlbS1yZWFjdC1jb3JlLXdjbS1jb21wb25lbnRzL2V4YW1wbGVzL3JlYWN0LXNwYWNvbXBvbmVudHMtZXhhbXBsZS1wcm9qZWN0L0BhZG9iZS9hZW0tY29yZS1jb21wb25lbnRzLXJlYWN0LWJhc2Uvc3JjL2F1dGhvcmluZy9idXR0b24vdjEvQnV0dG9uVjEudHN4IiwiL1VzZXJzL3JhYWlqbWFrL3dvcmtzcGFjZS9hZW0tcmVhY3QtY29yZS13Y20tY29tcG9uZW50cy9leGFtcGxlcy9yZWFjdC1zcGFjb21wb25lbnRzLWV4YW1wbGUtcHJvamVjdC9AYWRvYmUvYWVtLWNvcmUtY29tcG9uZW50cy1yZWFjdC1iYXNlL3NyYy9hdXRob3JpbmcvYnV0dG9uL3YxL0J1dHRvblYxSXNFbXB0eUZuLnRzIiwiL1VzZXJzL3JhYWlqbWFrL3dvcmtzcGFjZS9hZW0tcmVhY3QtY29yZS13Y20tY29tcG9uZW50cy9leGFtcGxlcy9yZWFjdC1zcGFjb21wb25lbnRzLWV4YW1wbGUtcHJvamVjdC9AYWRvYmUvYWVtLWNvcmUtY29tcG9uZW50cy1yZWFjdC1iYXNlL3NyYy9jb21tb24vcGxhY2Vob2xkZXIudHN4IiwiL1VzZXJzL3JhYWlqbWFrL3dvcmtzcGFjZS9hZW0tcmVhY3QtY29yZS13Y20tY29tcG9uZW50cy9leGFtcGxlcy9yZWFjdC1zcGFjb21wb25lbnRzLWV4YW1wbGUtcHJvamVjdC9AYWRvYmUvYWVtLWNvcmUtY29tcG9uZW50cy1yZWFjdC1iYXNlL3NyYy9yb3V0aW5nL1JvdXRlZExpbmsudHN4IiwiL1VzZXJzL3JhYWlqbWFrL3dvcmtzcGFjZS9hZW0tcmVhY3QtY29yZS13Y20tY29tcG9uZW50cy9leGFtcGxlcy9yZWFjdC1zcGFjb21wb25lbnRzLWV4YW1wbGUtcHJvamVjdC93ZWJwYWNrOi9AYWRvYmUvYWVtLWNvcmUtY29tcG9uZW50cy1yZWFjdC1iYXNlL2V4dGVybmFsIFwicmVhY3RcIiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUNBLFlBQ0EsMkJBREEsS0FFQSxFQUtBO0FBQ0MsQ0FURCxFQVNDLHlDQVRELEVBU0M7QUFDRDs7Ozs7QUNWQTtBQUFBOztBQUNBO0FBQUE7OztBQUVBO0FBQUE7O0FBQ0E7O0FBQUE7OztBQUVBO0FBQUE7O0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTs7QUFDQTs7O0FBQUE7QUFDQTtBQUFBLHFCQURBOztBQUVBO0FBQUEsa0JBRkE7O0FBR0E7QUFBQTtBQUNBOztBQUpBOzs7QUFNQTtBQUFBOztBQUNBOztBQUFBOzs7QUFFQTtBQUFBOztBQUNBOztBQUFBOzs7QUFFQTtBQUFBOztBQUNBOztBQUFBO0FBQ0E7QUFBQTs7Ozs7QUFHQTtBQUFBOztBQUNBOzs7QUFBQTs7O0FBRUE7QUFBQTs7QUFDQTs7QUFBQTs7O0FB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QUEvQyxDQUFMLENBQWY7QUFDQTs7QUFDQTtBQUNBLDJDQUNTLDZDQUFLLGFBQUwsQ0FBSyxHQUFMLEVBQUs7QUFBbUM7QUFBbkMsYUFBOEMsVUFBOUMsQ0FBTCxDQURULEdBR2EsNkNBQUssYUFBTCxDQUFvQixxREFBcEIsRUFBOEIsa0JBQWtCLFVBQWxCLEVBQWtCO0FBQWU7QUFBZixXQUFsQixDQUE5QixDQUhiO0FBSUEsU0FWTyxDLENBV1A7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDNUJBOzs7Ozs7Ozs7Ozs7OztBQUFBOzs7Ozs7QVBVQTtDQVZBLEUiLCJmaWxlIjoianMvQnV0dG9uVjEuMTZmNTY1NmYuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJAYWRvYmUvYWVtLWNvcmUtY29tcG9uZW50cy1yZWFjdC1iYXNlXCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcIkBhZG9iZS9hZW0tY29yZS1jb21wb25lbnRzLXJlYWN0LWJhc2VcIl0gPSBmYWN0b3J5KCk7XG59KSh0eXBlb2Ygc2VsZiAhPT0gJ3VuZGVmaW5lZCcgPyBzZWxmIDogdGhpcywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDMpO1xuIiwiLypcbiAqICBDb3B5cmlnaHQgMjAyMCBBZG9iZVxuICpcbiAqICBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqICBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgICAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqICBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiAgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqICBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgRWRpdG9yUGxhY2VIb2xkZXIgfSBmcm9tIFwiLi9jb21tb24vcGxhY2Vob2xkZXJcIjtcbmV4cG9ydCBjb25zdCB3aXRoU3RhbmRhcmRCYXNlQ3NzQ2xhc3MgPSAoQ29tcG9uZW50LCBkZWZhdWx0QmFzZUNzc0NsYXNzKSA9PiB7XG4gICAgcmV0dXJuIChwcm9wcykgPT4ge1xuICAgICAgICBjb25zdCBiYXNlQ3NzQ2xhc3MgPSBwcm9wcy5iYXNlQ3NzQ2xhc3M7XG4gICAgICAgIGNvbnN0IHRvQmVVc2VkQ3NzQ2xhc3MgPSBiYXNlQ3NzQ2xhc3MgJiYgYmFzZUNzc0NsYXNzLnRyaW0oKS5sZW5ndGggPiAwID8gYmFzZUNzc0NsYXNzIDogZGVmYXVsdEJhc2VDc3NDbGFzcztcbiAgICAgICAgY29uc3QgbWVyZ2VkUHJvcHMgPSB7XG4gICAgICAgICAgICAuLi5wcm9wcyxcbiAgICAgICAgICAgIGJhc2VDc3NDbGFzczogdG9CZVVzZWRDc3NDbGFzc1xuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChDb21wb25lbnQsIE9iamVjdC5hc3NpZ24oe30sIG1lcmdlZFByb3BzKSk7XG4gICAgfTtcbn07XG5leHBvcnQgY29uc3Qgd2l0aENvbmRpdGlvbmFsUGxhY2VIb2xkZXIgPSAoQ29tcG9uZW50LCBpc0VtcHR5LCBjb21wb25lbnRUaXRsZSwgZW1wdHlUZXh0KSA9PiB7XG4gICAgcmV0dXJuIChwcm9wcykgPT4ge1xuICAgICAgICBjb25zdCBpc0VtcHR5UmVzdWx0ID0gaXNFbXB0eShwcm9wcyk7XG4gICAgICAgIGNvbnN0IHsgaGlkZVBsYWNlSG9sZGVyID0gZmFsc2UsIGlzSW5FZGl0b3IgPSBmYWxzZSB9ID0gcHJvcHM7XG4gICAgICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChSZWFjdC5GcmFnbWVudCwgbnVsbCxcbiAgICAgICAgICAgICFpc0VtcHR5UmVzdWx0ICYmXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChDb21wb25lbnQsIE9iamVjdC5hc3NpZ24oe30sIHByb3BzKSksXG4gICAgICAgICAgICAoaXNFbXB0eVJlc3VsdCAmJiBpc0luRWRpdG9yICYmICFoaWRlUGxhY2VIb2xkZXIpICYmXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChFZGl0b3JQbGFjZUhvbGRlciwgeyBlbXB0eVRleHRBcHBlbmQ6IGVtcHR5VGV4dCwgY29tcG9uZW50VGl0bGU6IGNvbXBvbmVudFRpdGxlIH0pKSk7XG4gICAgfTtcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lRV0p6ZEhKaFkzUkRiM0psUTI5dGNHOXVaVzUwTG1weklpd2ljMjkxY21ObFVtOXZkQ0k2SWlJc0luTnZkWEpqWlhNaU9sc2lRV0p6ZEhKaFkzUkRiM0psUTI5dGNHOXVaVzUwTG5SemVDSmRMQ0p1WVcxbGN5STZXMTBzSW0xaGNIQnBibWR6SWpvaVFVRkJRVHM3T3pzN096czdPenM3T3pzN1IwRmpSenRCUVVWSUxFOUJRVThzUzBGQlN5eExRVUZMTEUxQlFVMHNUMEZCVHl4RFFVRkRPMEZCUnk5Q0xFOUJRVThzUlVGQlF5eHBRa0ZCYVVJc1JVRkJReXhOUVVGTkxITkNRVUZ6UWl4RFFVRkRPMEZCWlhaRUxFMUJRVTBzUTBGQlF5eE5RVUZOTEhkQ1FVRjNRaXhIUVVGSExFTkJSWEJETEZOQlFUQkNMRVZCUXpGQ0xHMUNRVUV3UWl4RlFVTktMRVZCUVVVN1NVRkRlRUlzVDBGQlR5eERRVUZETEV0QlFVOHNSVUZCUlN4RlFVRkZPMUZCUldZc1RVRkJUU3haUVVGWkxFZEJRVWNzUzBGQlN5eERRVUZETEZsQlFWa3NRMEZCUXp0UlFVTjRReXhOUVVGTkxHZENRVUZuUWl4SFFVRkhMRmxCUVZrc1NVRkJTU3haUVVGWkxFTkJRVU1zU1VGQlNTeEZRVUZGTEVOQlFVTXNUVUZCVFN4SFFVRkhMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zV1VGQldTeERRVUZETEVOQlFVTXNRMEZCUXl4dFFrRkJiVUlzUTBGQlF6dFJRVVUzUnl4TlFVRk5MRmRCUVZjc1IwRkJTenRaUVVOc1FpeEhRVUZITEV0QlFVczdXVUZEVWl4WlFVRlpMRVZCUVVVc1owSkJRV2RDTzFOQlEycERMRU5CUVVNN1VVRkZSaXhQUVVGUExHOUNRVUZETEZOQlFWTXNiMEpCUVVzc1YwRkJWeXhGUVVGSkxFTkJRVU03U1VGRE1VTXNRMEZCUXl4RFFVRkJPMEZCUTB3c1EwRkJReXhEUVVGRE8wRkJSVVlzVFVGQlRTeERRVUZETEUxQlFVMHNNRUpCUVRCQ0xFZEJRVWNzUTBGRk1VSXNVMEZCTUVJc1JVRkRNVUlzVDBGQk5FSXNSVUZETlVJc1kwRkJjMElzUlVGQlJTeFRRVUZwUWl4RlFVTnVRaXhGUVVGRk8wbEJRM0JETEU5QlFVOHNRMEZCUXl4TFFVRlBMRVZCUVVVc1JVRkJSVHRSUVVWbUxFMUJRVTBzWVVGQllTeEhRVUZYTEU5QlFVOHNRMEZCUXl4TFFVRkxMRU5CUVVNc1EwRkJRenRSUVVNM1F5eE5RVUZOTEVWQlFVTXNaVUZCWlN4SFFVRkhMRXRCUVVzc1JVRkJSU3hWUVVGVkxFZEJRVWNzUzBGQlN5eEZRVUZETEVkQlFVY3NTMEZCU3l4RFFVRkRPMUZCUlRWRUxFOUJRVThzUTBGRFNEdFpRVU5OTEVOQlFVTXNZVUZCWVR0blFrRkRhRUlzYjBKQlFVTXNVMEZCVXl4dlFrRkJTeXhMUVVGTExFVkJRVWs3V1VGSGNFSXNRMEZCUXl4aFFVRmhMRWxCUVVrc1ZVRkJWU3hKUVVGSkxFTkJRVU1zWlVGQlpTeERRVUZETzJkQ1FVTnFSQ3h2UWtGQlF5eHBRa0ZCYVVJc1NVRkRaQ3hsUVVGbExFVkJRVVVzVTBGQlV5eEZRVU14UWl4alFVRmpMRVZCUVVVc1kwRkJZeXhIUVVOb1F5eERRVVZRTEVOQlEwNHNRMEZCUXp0SlFVTk9MRU5CUVVNc1EwRkJRVHRCUVVOTUxFTkJRVU1zUTBGQlF5SXNJbk52ZFhKalpYTkRiMjUwWlc1MElqcGJJaThxWEc0Z0tpQWdRMjl3ZVhKcFoyaDBJREl3TWpBZ1FXUnZZbVZjYmlBcVhHNGdLaUFnVEdsalpXNXpaV1FnZFc1a1pYSWdkR2hsSUVGd1lXTm9aU0JNYVdObGJuTmxMQ0JXWlhKemFXOXVJREl1TUNBb2RHaGxJRndpVEdsalpXNXpaVndpS1R0Y2JpQXFJQ0I1YjNVZ2JXRjVJRzV2ZENCMWMyVWdkR2hwY3lCbWFXeGxJR1Y0WTJWd2RDQnBiaUJqYjIxd2JHbGhibU5sSUhkcGRHZ2dkR2hsSUV4cFkyVnVjMlV1WEc0Z0tpQWdXVzkxSUcxaGVTQnZZblJoYVc0Z1lTQmpiM0I1SUc5bUlIUm9aU0JNYVdObGJuTmxJR0YwWEc0Z0tseHVJQ29nSUNBZ0lDQm9kSFJ3T2k4dmQzZDNMbUZ3WVdOb1pTNXZjbWN2YkdsalpXNXpaWE12VEVsRFJVNVRSUzB5TGpCY2JpQXFYRzRnS2lBZ1ZXNXNaWE56SUhKbGNYVnBjbVZrSUdKNUlHRndjR3hwWTJGaWJHVWdiR0YzSUc5eUlHRm5jbVZsWkNCMGJ5QnBiaUIzY21sMGFXNW5MQ0J6YjJaMGQyRnlaVnh1SUNvZ0lHUnBjM1J5YVdKMWRHVmtJSFZ1WkdWeUlIUm9aU0JNYVdObGJuTmxJR2x6SUdScGMzUnlhV0oxZEdWa0lHOXVJR0Z1SUZ3aVFWTWdTVk5jSWlCQ1FWTkpVeXhjYmlBcUlDQlhTVlJJVDFWVUlGZEJVbEpCVGxSSlJWTWdUMUlnUTA5T1JFbFVTVTlPVXlCUFJpQkJUbGtnUzBsT1JDd2daV2wwYUdWeUlHVjRjSEpsYzNNZ2IzSWdhVzF3YkdsbFpDNWNiaUFxSUNCVFpXVWdkR2hsSUV4cFkyVnVjMlVnWm05eUlIUm9aU0J6Y0dWamFXWnBZeUJzWVc1bmRXRm5aU0JuYjNabGNtNXBibWNnY0dWeWJXbHpjMmx2Ym5NZ1lXNWtYRzRnS2lBZ2JHbHRhWFJoZEdsdmJuTWdkVzVrWlhJZ2RHaGxJRXhwWTJWdWMyVXVYRzRnS2k5Y2JseHVhVzF3YjNKMElDb2dZWE1nVW1WaFkzUWdabkp2YlNBbmNtVmhZM1FuTzF4dWFXMXdiM0owSUh0RGIyMXdiMjVsYm5SVWVYQmxmU0JtY205dElDZHlaV0ZqZENjN1hHNWNibWx0Y0c5eWRDQjdSV1JwZEc5eVVHeGhZMlZJYjJ4a1pYSjlJR1p5YjIwZ1hDSXVMMk52YlcxdmJpOXdiR0ZqWldodmJHUmxjbHdpTzF4dVhHNWxlSEJ2Y25RZ2FXNTBaWEptWVdObElFaGhjMEpoYzJWRGMzTkRiR0Z6Y3lCN1hHNGdJQ0FnWW1GelpVTnpjME5zWVhOelB6b2djM1J5YVc1blhHNTlYRzVjYm1WNGNHOXlkQ0JwYm5SbGNtWmhZMlVnUTI5eVpVTnZiWEJ2Ym1WdWRFMXZaR1ZzSUdWNGRHVnVaSE1nU0dGelFtRnpaVU56YzBOc1lYTnplMXh1SUNBZ0lHaHBaR1ZRYkdGalpVaHZiR1JsY2o4NklHSnZiMnhsWVc1Y2JpQWdJQ0JwYzBsdVJXUnBkRzl5UHpwaWIyOXNaV0Z1WEc1OVhHNWNibVY0Y0c5eWRDQnBiblJsY21aaFkyVWdRMjl5WlVOdmJYQnZibVZ1ZEZOMFlYUmxJSHRjYmx4dWZWeHVYRzVsZUhCdmNuUWdZMjl1YzNRZ2QybDBhRk4wWVc1a1lYSmtRbUZ6WlVOemMwTnNZWE56SUQwZ1BFMGdaWGgwWlc1a2N5QkRiM0psUTI5dGNHOXVaVzUwVFc5a1pXdytYRzRvWEc0Z0lDQWdRMjl0Y0c5dVpXNTBPa052YlhCdmJtVnVkRlI1Y0dVOFRUNHNYRzRnSUNBZ1pHVm1ZWFZzZEVKaGMyVkRjM05EYkdGemN6cHpkSEpwYm1kY2JpazZVbVZoWTNRdVEyOXRjRzl1Wlc1MFZIbHdaVHhOUGlBZ1BUNGdlMXh1SUNBZ0lISmxkSFZ5YmlBb2NISnZjSE02VFNrZ1BUNGdlMXh1WEc0Z0lDQWdJQ0FnSUdOdmJuTjBJR0poYzJWRGMzTkRiR0Z6Y3lBOUlIQnliM0J6TG1KaGMyVkRjM05EYkdGemN6dGNiaUFnSUNBZ0lDQWdZMjl1YzNRZ2RHOUNaVlZ6WldSRGMzTkRiR0Z6Y3lBOUlHSmhjMlZEYzNORGJHRnpjeUFtSmlCaVlYTmxRM056UTJ4aGMzTXVkSEpwYlNncExteGxibWQwYUNBK0lEQWdQeUJpWVhObFEzTnpRMnhoYzNNZ09pQmtaV1poZFd4MFFtRnpaVU56YzBOc1lYTnpPMXh1WEc0Z0lDQWdJQ0FnSUdOdmJuTjBJRzFsY21kbFpGQnliM0J6T2lCTlBTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNBdUxpNXdjbTl3Y3l4Y2JpQWdJQ0FnSUNBZ0lDQWdJR0poYzJWRGMzTkRiR0Z6Y3pvZ2RHOUNaVlZ6WldSRGMzTkRiR0Z6YzF4dUlDQWdJQ0FnSUNCOU8xeHVYRzRnSUNBZ0lDQWdJSEpsZEhWeWJpQThRMjl0Y0c5dVpXNTBJSHN1TGk1dFpYSm5aV1JRY205d2MzMGdMejQ3WEc0Z0lDQWdmVnh1ZlR0Y2JseHVaWGh3YjNKMElHTnZibk4wSUhkcGRHaERiMjVrYVhScGIyNWhiRkJzWVdObFNHOXNaR1Z5SUQwZ1BFMGdaWGgwWlc1a2N5QkRiM0psUTI5dGNHOXVaVzUwVFc5a1pXdytYRzRnSUNBZ0lDQWdJQ0FnSUNBb1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ1EyOXRjRzl1Wlc1ME9rTnZiWEJ2Ym1WdWRGUjVjR1U4VFQ0c0lGeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lHbHpSVzF3ZEhrNktIQnliM0J6T2swcElEMCtJR0p2YjJ4bFlXNHNYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdZMjl0Y0c5dVpXNTBWR2wwYkdVL09uTjBjbWx1Wnl3Z1pXMXdkSGxVWlhoMFB6cHpkSEpwYm1kY2JpQWdJQ0FnSUNBZ0lDQWdJQ2s2VW1WaFkzUXVRMjl0Y0c5dVpXNTBWSGx3WlR4TlBpQWdQVDRnZTF4dUlDQWdJSEpsZEhWeWJpQW9jSEp2Y0hNNlRTa2dQVDRnZTF4dVhHNGdJQ0FnSUNBZ0lHTnZibk4wSUdselJXMXdkSGxTWlhOMWJIUTZZbTl2YkdWaGJpQTlJR2x6Ulcxd2RIa29jSEp2Y0hNcE8xeHVJQ0FnSUNBZ0lDQmpiMjV6ZENCN2FHbGtaVkJzWVdObFNHOXNaR1Z5SUQwZ1ptRnNjMlVzSUdselNXNUZaR2wwYjNJZ1BTQm1ZV3h6WlgwZ1BTQndjbTl3Y3p0Y2JseHVJQ0FnSUNBZ0lDQnlaWFIxY200Z0tGeHVJQ0FnSUNBZ0lDQWdJQ0FnUEQ1Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCN0lDRnBjMFZ0Y0hSNVVtVnpkV3gwSUNZbVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ1BFTnZiWEJ2Ym1WdWRDQjdMaTR1Y0hKdmNITjlJQzgrWEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnZlZ4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdLR2x6Ulcxd2RIbFNaWE4xYkhRZ0ppWWdhWE5KYmtWa2FYUnZjaUFtSmlBaGFHbGtaVkJzWVdObFNHOXNaR1Z5S1NBbUpseHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0E4UldScGRHOXlVR3hoWTJWSWIyeGtaWEpjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJR1Z0Y0hSNVZHVjRkRUZ3Y0dWdVpEMTdaVzF3ZEhsVVpYaDBmVnh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdZMjl0Y0c5dVpXNTBWR2wwYkdVOWUyTnZiWEJ2Ym1WdWRGUnBkR3hsZlZ4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQXZQbHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJSDFjYmlBZ0lDQWdJQ0FnSUNBZ0lEd3ZQbHh1SUNBZ0lDQWdJQ0FwTzF4dUlDQWdJSDFjYm4wN0lsMTkiLCIvKlxuICogIENvcHlyaWdodCAyMDIwIEFkb2JlXG4gKlxuICogIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiAgeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICAgICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqICBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiAgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiAgU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgd2l0aENvbmRpdGlvbmFsUGxhY2VIb2xkZXIsIHdpdGhTdGFuZGFyZEJhc2VDc3NDbGFzcyB9IGZyb20gXCIuLi8uLi8uLi9BYnN0cmFjdENvcmVDb21wb25lbnRcIjtcbmltcG9ydCB7IFJvdXRlZExpbmsgfSBmcm9tIFwiLi4vLi4vLi4vcm91dGluZy9Sb3V0ZWRMaW5rXCI7XG5pbXBvcnQgeyBCdXR0b25WMUlzRW1wdHlGbiB9IGZyb20gXCIuL0J1dHRvblYxSXNFbXB0eUZuXCI7XG5leHBvcnQgY29uc3QgQnV0dG9uVjFDb250ZW50ID0gKHByb3BzKSA9PiB7XG4gICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KFJlYWN0LkZyYWdtZW50LCBudWxsLFxuICAgICAgICBwcm9wcy5pY29uICYmIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIsIHsgY2xhc3NOYW1lOiBgJHtwcm9wcy5iYXNlQ3NzQ2xhc3N9X19pY29uICR7cHJvcHMuYmFzZUNzc0NsYXNzfV9faWNvbi0tJHtwcm9wcy5pY29ufWAgfSksXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIsIHsgY2xhc3NOYW1lOiBwcm9wcy5iYXNlQ3NzQ2xhc3MgKyAnX190ZXh0JyB9LCBwcm9wcy50ZXh0KSkpO1xufTtcbmNvbnN0IEJ1dHRvblYxSW1wbCA9IChwcm9wcykgPT4ge1xuICAgIGNvbnN0IGhhbmRsZU9uQ2xpY2sgPSAoZXZlbnQpID0+IHtcbiAgICAgICAgaWYgKHByb3BzLmhhbmRsZU9uQ2xpY2spIHtcbiAgICAgICAgICAgIHByb3BzLmhhbmRsZU9uQ2xpY2soZXZlbnQpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBjb25zdCBnZW5lcmF0ZUF0dHJpYnV0ZXMgPSAoaXNMaW5rKSA9PiB7XG4gICAgICAgIGNvbnN0IGNvbXB1dGVkQXR0cnMgPSB7XG4gICAgICAgICAgICBjbGFzc05hbWU6IHByb3BzLmJhc2VDc3NDbGFzcyxcbiAgICAgICAgICAgIG9uQ2xpY2s6IGhhbmRsZU9uQ2xpY2tcbiAgICAgICAgfTtcbiAgICAgICAgaWYgKGlzTGluaykge1xuICAgICAgICAgICAgY29tcHV0ZWRBdHRyc1snYXJpYS1sYWJlbCddID0gcHJvcHMuYXJpYUxhYmVsO1xuICAgICAgICAgICAgY29tcHV0ZWRBdHRyc1snaHJlZiddID0gcHJvcHMubGluaztcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY29tcHV0ZWRBdHRycztcbiAgICB9O1xuICAgIGNvbnN0IGlzTGluayA9ICghIXByb3BzLmxpbmspO1xuICAgIGNvbnN0IGF0dHJzID0gZ2VuZXJhdGVBdHRyaWJ1dGVzKGlzTGluayk7XG4gICAgaWYgKGlzTGluaykge1xuICAgICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChSb3V0ZWRMaW5rLCBPYmplY3QuYXNzaWduKHsgaXNSb3V0ZWQ6IGF0dHJzLnJvdXRlZCwgdG86IGF0dHJzLmxpbmsgfSwgYXR0cnMpLFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChCdXR0b25WMUNvbnRlbnQsIE9iamVjdC5hc3NpZ24oe30sIHByb3BzKSkpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIiwgT2JqZWN0LmFzc2lnbih7fSwgYXR0cnMpLFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChCdXR0b25WMUNvbnRlbnQsIE9iamVjdC5hc3NpZ24oe30sIHByb3BzKSkpO1xuICAgIH1cbn07XG5jb25zdCBCdXR0b25WMSA9IChwcm9wcykgPT4ge1xuICAgIGNvbnN0IFdyYXBwZWQgPSB3aXRoQ29uZGl0aW9uYWxQbGFjZUhvbGRlcih3aXRoU3RhbmRhcmRCYXNlQ3NzQ2xhc3MoQnV0dG9uVjFJbXBsLCBcImNtcC1idXR0b25cIiksIEJ1dHRvblYxSXNFbXB0eUZuLCBcIkJ1dHRvbiBWMVwiKTtcbiAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChXcmFwcGVkLCBPYmplY3QuYXNzaWduKHt9LCBwcm9wcykpO1xufTtcbmV4cG9ydCBkZWZhdWx0IEJ1dHRvblYxO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pUW5WMGRHOXVWakV1YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pSWl3aWMyOTFjbU5sY3lJNld5SkNkWFIwYjI1V01TNTBjM2dpWFN3aWJtRnRaWE1pT2x0ZExDSnRZWEJ3YVc1bmN5STZJa0ZCUVVFN096czdPenM3T3pzN096czdPMGRCWTBjN1FVRkZTQ3hQUVVGUExFdEJRVzFDTEUxQlFVMHNUMEZCVHl4RFFVRkRPMEZCUTNoRExFOUJRVThzUlVGQlF5d3dRa0ZCTUVJc1JVRkJSU3gzUWtGQmQwSXNSVUZCUXl4TlFVRk5MR2REUVVGblF5eERRVUZETzBGQlJYQkhMRTlCUVU4c1JVRkJReXhWUVVGVkxFVkJRVU1zVFVGQlRTdzJRa0ZCTmtJc1EwRkJRenRCUVVOMlJDeFBRVUZQTEVWQlFVTXNhVUpCUVdsQ0xFVkJRVU1zVFVGQlRTeHhRa0ZCY1VJc1EwRkJRenRCUVZkMFJDeE5RVUZOTEVOQlFVTXNUVUZCVFN4bFFVRmxMRWRCUVVjc1EwRkJReXhMUVVGdFFpeEZRVUZGTEVWQlFVVTdTVUZEYmtRc1QwRkJUeXhEUVVOSU8xRkJRMDBzUzBGQlN5eERRVUZETEVsQlFVa3NTVUZCU1N3NFFrRkJUU3hUUVVGVExFVkJRVVVzUjBGQlJ5eExRVUZMTEVOQlFVTXNXVUZCV1N4VlFVRlZMRXRCUVVzc1EwRkJReXhaUVVGWkxGZEJRVmNzUzBGQlN5eERRVUZETEVsQlFVa3NSVUZCUlN4SFFVRlRPMUZCUTJ4SUxEaENRVUZOTEZOQlFWTXNSVUZCUlN4TFFVRkxMRU5CUVVNc1dVRkJXU3hIUVVGSExGRkJRVkVzU1VGQlJ5eExRVUZMTEVOQlFVTXNTVUZCU1N4RFFVRlJMRU5CUTNCRkxFTkJRMDRzUTBGQlF6dEJRVU5PTEVOQlFVTXNRMEZCUXp0QlFVVkdMRTFCUVUwc1dVRkJXU3hIUVVGSExFTkJRVU1zUzBGQmJVSXNSVUZCUlN4RlFVRkZPMGxCUlhwRExFMUJRVTBzWVVGQllTeEhRVUZITEVOQlFVTXNTMEZCWjBJc1JVRkJSU3hGUVVGRk8xRkJRM1pETEVsQlFVY3NTMEZCU3l4RFFVRkRMR0ZCUVdFc1JVRkJRenRaUVVOdVFpeExRVUZMTEVOQlFVTXNZVUZCWVN4RFFVRkRMRXRCUVVzc1EwRkJReXhEUVVGRE8xTkJRemxDTzBsQlEwd3NRMEZCUXl4RFFVRkRPMGxCUlVZc1RVRkJUU3hyUWtGQmEwSXNSMEZCUnl4RFFVRkRMRTFCUVdVc1JVRkJSU3hGUVVGRk8xRkJRek5ETEUxQlFVMHNZVUZCWVN4SFFVRlJPMWxCUTNaQ0xGTkJRVk1zUlVGQlJTeExRVUZMTEVOQlFVTXNXVUZCV1R0WlFVTTNRaXhQUVVGUExFVkJRVVVzWVVGQllUdFRRVU42UWl4RFFVRkRPMUZCUlVZc1NVRkJTU3hOUVVGTkxFVkJRVVU3V1VGRFVpeGhRVUZoTEVOQlFVTXNXVUZCV1N4RFFVRkRMRWRCUVVjc1MwRkJTeXhEUVVGRExGTkJRVk1zUTBGQlF6dFpRVU01UXl4aFFVRmhMRU5CUVVNc1RVRkJUU3hEUVVGRExFZEJRVWNzUzBGQlN5eERRVUZETEVsQlFVa3NRMEZCUXp0VFFVTjBRenRSUVVORUxFOUJRVThzWVVGQllTeERRVUZETzBsQlEzcENMRU5CUVVNc1EwRkJRenRKUVVWR0xFMUJRVTBzVFVGQlRTeEhRVUZKTEVOQlFVTXNRMEZCUXl4RFFVRkRMRXRCUVVzc1EwRkJReXhKUVVGSkxFTkJRVU1zUTBGQlF6dEpRVU12UWl4TlFVRk5MRXRCUVVzc1IwRkJSeXhyUWtGQmEwSXNRMEZCUXl4TlFVRk5MRU5CUVVNc1EwRkJRenRKUVVWNlF5eEpRVUZITEUxQlFVMHNSVUZCUXp0UlFVTk9MRTlCUVU4c2IwSkJRVU1zVlVGQlZTeHJRa0ZCUXl4UlFVRlJMRVZCUVVVc1MwRkJTeXhEUVVGRExFMUJRVTBzUlVGQlJTeEZRVUZGTEVWQlFVVXNTMEZCU3l4RFFVRkRMRWxCUVVrc1NVRkJUU3hMUVVGTE8xbEJRVVVzYjBKQlFVTXNaVUZCWlN4dlFrRkJTeXhMUVVGTExFVkJRVWNzUTBGQllTeERRVUZCTzB0QlEyNUlPMU5CUVVrN1VVRkRSQ3hQUVVGUExHZEVRVUZaTEV0QlFVczdXVUZCUlN4dlFrRkJReXhsUVVGbExHOUNRVUZMTEV0QlFVc3NSVUZCUnl4RFFVRlRMRU5CUVVFN1MwRkRia1U3UVVGRFRDeERRVUZETEVOQlFVTTdRVUZGUml4TlFVRk5MRkZCUVZFc1IwRkJSeXhEUVVGRExFdEJRVzFDTEVWQlFVVXNSVUZCUlR0SlFVTnlReXhOUVVGTkxFOUJRVThzUjBGQlJ5d3dRa0ZCTUVJc1EwRkJReXgzUWtGQmQwSXNRMEZCUXl4WlFVRlpMRVZCUVVNc1dVRkJXU3hEUVVGRExFVkJRVVVzYVVKQlFXbENMRVZCUVVVc1YwRkJWeXhEUVVGRExFTkJRVU03U1VGRGFFa3NUMEZCVHl4dlFrRkJReXhQUVVGUExHOUNRVUZMTEV0QlFVc3NSVUZCUnl4RFFVRkJPMEZCUTJoRExFTkJRVU1zUTBGQlF6dEJRVVZHTEdWQlFXVXNVVUZCVVN4RFFVRkRJaXdpYzI5MWNtTmxjME52Ym5SbGJuUWlPbHNpTHlwY2JpQXFJQ0JEYjNCNWNtbG5hSFFnTWpBeU1DQkJaRzlpWlZ4dUlDcGNiaUFxSUNCTWFXTmxibk5sWkNCMWJtUmxjaUIwYUdVZ1FYQmhZMmhsSUV4cFkyVnVjMlVzSUZabGNuTnBiMjRnTWk0d0lDaDBhR1VnWENKTWFXTmxibk5sWENJcE8xeHVJQ29nSUhsdmRTQnRZWGtnYm05MElIVnpaU0IwYUdseklHWnBiR1VnWlhoalpYQjBJR2x1SUdOdmJYQnNhV0Z1WTJVZ2QybDBhQ0IwYUdVZ1RHbGpaVzV6WlM1Y2JpQXFJQ0JaYjNVZ2JXRjVJRzlpZEdGcGJpQmhJR052Y0hrZ2IyWWdkR2hsSUV4cFkyVnVjMlVnWVhSY2JpQXFYRzRnS2lBZ0lDQWdJR2gwZEhBNkx5OTNkM2N1WVhCaFkyaGxMbTl5Wnk5c2FXTmxibk5sY3k5TVNVTkZUbE5GTFRJdU1GeHVJQ3BjYmlBcUlDQlZibXhsYzNNZ2NtVnhkV2x5WldRZ1lua2dZWEJ3YkdsallXSnNaU0JzWVhjZ2IzSWdZV2R5WldWa0lIUnZJR2x1SUhkeWFYUnBibWNzSUhOdlpuUjNZWEpsWEc0Z0tpQWdaR2x6ZEhKcFluVjBaV1FnZFc1a1pYSWdkR2hsSUV4cFkyVnVjMlVnYVhNZ1pHbHpkSEpwWW5WMFpXUWdiMjRnWVc0Z1hDSkJVeUJKVTF3aUlFSkJVMGxUTEZ4dUlDb2dJRmRKVkVoUFZWUWdWMEZTVWtGT1ZFbEZVeUJQVWlCRFQwNUVTVlJKVDA1VElFOUdJRUZPV1NCTFNVNUVMQ0JsYVhSb1pYSWdaWGh3Y21WemN5QnZjaUJwYlhCc2FXVmtMbHh1SUNvZ0lGTmxaU0IwYUdVZ1RHbGpaVzV6WlNCbWIzSWdkR2hsSUhOd1pXTnBabWxqSUd4aGJtZDFZV2RsSUdkdmRtVnlibWx1WnlCd1pYSnRhWE56YVc5dWN5QmhibVJjYmlBcUlDQnNhVzFwZEdGMGFXOXVjeUIxYm1SbGNpQjBhR1VnVEdsalpXNXpaUzVjYmlBcUwxeHVYRzVwYlhCdmNuUWdVbVZoWTNRc0lIdE5iM1Z6WlVWMlpXNTBmU0JtY205dElDZHlaV0ZqZENjN1hHNXBiWEJ2Y25RZ2UzZHBkR2hEYjI1a2FYUnBiMjVoYkZCc1lXTmxTRzlzWkdWeUxDQjNhWFJvVTNSaGJtUmhjbVJDWVhObFEzTnpRMnhoYzNOOUlHWnliMjBnWENJdUxpOHVMaTh1TGk5QlluTjBjbUZqZEVOdmNtVkRiMjF3YjI1bGJuUmNJanRjYm1sdGNHOXlkQ0I3VW05MWRHVmtRMjl5WlVOdmJYQnZibVZ1ZEUxdlpHVnNmU0JtY205dElGd2lMaTR2TGk0dkxpNHZjbTkxZEdsdVp5OVNiM1YwWldSRGIzSmxRMjl0Y0c5dVpXNTBYQ0k3WEc1cGJYQnZjblFnZTFKdmRYUmxaRXhwYm10OUlHWnliMjBnWENJdUxpOHVMaTh1TGk5eWIzVjBhVzVuTDFKdmRYUmxaRXhwYm10Y0lqdGNibWx0Y0c5eWRDQjdRblYwZEc5dVZqRkpjMFZ0Y0hSNVJtNTlJR1p5YjIwZ1hDSXVMMEoxZEhSdmJsWXhTWE5GYlhCMGVVWnVYQ0k3WEc1Y2JseHVaWGh3YjNKMElHbHVkR1Z5Wm1GalpTQkNkWFIwYjI1V01VMXZaR1ZzSUdWNGRHVnVaSE1nVW05MWRHVmtRMjl5WlVOdmJYQnZibVZ1ZEUxdlpHVnNlMXh1SUNBZ0lIUmxlSFEvT2lCemRISnBibWM3WEc0Z0lDQWdiR2x1YXo4NklITjBjbWx1Wnp0Y2JpQWdJQ0JwWTI5dVB6b2djM1J5YVc1bk8xeHVJQ0FnSUdGeWFXRk1ZV0psYkQ4NklITjBjbWx1Wnp0Y2JpQWdJQ0JvWVc1a2JHVlBia05zYVdOclB5aGxkbVZ1ZERvZ1RXOTFjMlZGZG1WdWRDazZJSFp2YVdSY2JuMWNibHh1Wlhod2IzSjBJR052Ym5OMElFSjFkSFJ2YmxZeFEyOXVkR1Z1ZENBOUlDaHdjbTl3Y3pwQ2RYUjBiMjVXTVUxdlpHVnNLU0E5UGlCN1hHNGdJQ0FnY21WMGRYSnVJQ2hjYmlBZ0lDQWdJQ0FnUEQ1Y2JpQWdJQ0FnSUNBZ0lDQWdJSHNnY0hKdmNITXVhV052YmlBbUppQThjM0JoYmlCamJHRnpjMDVoYldVOWUyQWtlM0J5YjNCekxtSmhjMlZEYzNORGJHRnpjMzFmWDJsamIyNGdKSHR3Y205d2N5NWlZWE5sUTNOelEyeGhjM045WDE5cFkyOXVMUzBrZTNCeWIzQnpMbWxqYjI1OVlIMCtQQzl6Y0dGdVBpQWdmVnh1SUNBZ0lDQWdJQ0FnSUNBZ1BITndZVzRnWTJ4aGMzTk9ZVzFsUFh0d2NtOXdjeTVpWVhObFEzTnpRMnhoYzNNZ0t5QW5YMTkwWlhoMEozMCtlM0J5YjNCekxuUmxlSFI5UEM5emNHRnVQbHh1SUNBZ0lDQWdJQ0E4THo1Y2JpQWdJQ0FwTzF4dWZUdGNibHh1WTI5dWMzUWdRblYwZEc5dVZqRkpiWEJzSUQwZ0tIQnliM0J6T2tKMWRIUnZibFl4VFc5a1pXd3BJRDArSUh0Y2JseHVJQ0FnSUdOdmJuTjBJR2hoYm1Sc1pVOXVRMnhwWTJzZ1BTQW9aWFpsYm5RNlRXOTFjMlZGZG1WdWRDa2dQVDU3WEc0Z0lDQWdJQ0FnSUdsbUtIQnliM0J6TG1oaGJtUnNaVTl1UTJ4cFkyc3BlMXh1SUNBZ0lDQWdJQ0FnSUNBZ2NISnZjSE11YUdGdVpHeGxUMjVEYkdsamF5aGxkbVZ1ZENrN1hHNGdJQ0FnSUNBZ0lIMWNiaUFnSUNCOU8xeHVYRzRnSUNBZ1kyOXVjM1FnWjJWdVpYSmhkR1ZCZEhSeWFXSjFkR1Z6SUQwZ0tHbHpUR2x1YXpvZ1ltOXZiR1ZoYmlrZ1BUNGdlMXh1SUNBZ0lDQWdJQ0JqYjI1emRDQmpiMjF3ZFhSbFpFRjBkSEp6T2lCaGJua2dQU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQmpiR0Z6YzA1aGJXVTZJSEJ5YjNCekxtSmhjMlZEYzNORGJHRnpjeXhjYmlBZ0lDQWdJQ0FnSUNBZ0lHOXVRMnhwWTJzNklHaGhibVJzWlU5dVEyeHBZMnRjYmlBZ0lDQWdJQ0FnZlR0Y2JseHVJQ0FnSUNBZ0lDQnBaaUFvYVhOTWFXNXJLU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQmpiMjF3ZFhSbFpFRjBkSEp6V3lkaGNtbGhMV3hoWW1Wc0oxMGdQU0J3Y205d2N5NWhjbWxoVEdGaVpXdzdYRzRnSUNBZ0lDQWdJQ0FnSUNCamIyMXdkWFJsWkVGMGRISnpXeWRvY21WbUoxMGdQU0J3Y205d2N5NXNhVzVyTzF4dUlDQWdJQ0FnSUNCOVhHNGdJQ0FnSUNBZ0lISmxkSFZ5YmlCamIyMXdkWFJsWkVGMGRISnpPMXh1SUNBZ0lIMDdYRzVjYmlBZ0lDQmpiMjV6ZENCcGMweHBibXNnUFNBZ0tDRWhjSEp2Y0hNdWJHbHVheWs3WEc0Z0lDQWdZMjl1YzNRZ1lYUjBjbk1nUFNCblpXNWxjbUYwWlVGMGRISnBZblYwWlhNb2FYTk1hVzVyS1R0Y2JseHVJQ0FnSUdsbUtHbHpUR2x1YXlsN1hHNGdJQ0FnSUNBZ0lISmxkSFZ5YmlBOFVtOTFkR1ZrVEdsdWF5QnBjMUp2ZFhSbFpEMTdZWFIwY25NdWNtOTFkR1ZrZlNCMGJ6MTdZWFIwY25NdWJHbHVhMzBnZXk0dUxtRjBkSEp6ZlQ0OFFuVjBkRzl1VmpGRGIyNTBaVzUwSUhzdUxpNXdjbTl3YzMwdlBqd3ZVbTkxZEdWa1RHbHVhejVjYmlBZ0lDQjlaV3h6Wlh0Y2JpQWdJQ0FnSUNBZ2NtVjBkWEp1SUR4aWRYUjBiMjRnZXk0dUxtRjBkSEp6ZlQ0OFFuVjBkRzl1VmpGRGIyNTBaVzUwSUhzdUxpNXdjbTl3YzMwdlBqd3ZZblYwZEc5dVBseHVJQ0FnSUgxY2JuMDdYRzVjYm1OdmJuTjBJRUoxZEhSdmJsWXhJRDBnS0hCeWIzQnpPa0oxZEhSdmJsWXhUVzlrWld3cElEMCtJSHRjYmlBZ0lDQmpiMjV6ZENCWGNtRndjR1ZrSUQwZ2QybDBhRU52Ym1ScGRHbHZibUZzVUd4aFkyVkliMnhrWlhJb2QybDBhRk4wWVc1a1lYSmtRbUZ6WlVOemMwTnNZWE56S0VKMWRIUnZibFl4U1cxd2JDeGNJbU50Y0MxaWRYUjBiMjVjSWlrc0lFSjFkSFJ2YmxZeFNYTkZiWEIwZVVadUxDQmNJa0oxZEhSdmJpQldNVndpS1R0Y2JpQWdJQ0J5WlhSMWNtNGdQRmR5WVhCd1pXUWdleTR1TG5CeWIzQnpmUzgrWEc1OU8xeHVYRzVsZUhCdmNuUWdaR1ZtWVhWc2RDQkNkWFIwYjI1V01Uc2lYWDA9IiwiZXhwb3J0IGZ1bmN0aW9uIEJ1dHRvblYxSXNFbXB0eUZuKHByb3BzKSB7XG4gICAgcmV0dXJuIHByb3BzLnRleHQgPT0gbnVsbCB8fCBwcm9wcy50ZXh0Lmxlbmd0aCA9PT0gMDtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaVFuVjBkRzl1VmpGSmMwVnRjSFI1Um00dWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUlpd2ljMjkxY21ObGN5STZXeUpDZFhSMGIyNVdNVWx6Ulcxd2RIbEdiaTUwY3lKZExDSnVZVzFsY3lJNlcxMHNJbTFoY0hCcGJtZHpJam9pUVVGRlFTeE5RVUZOTEZWQlFWVXNhVUpCUVdsQ0xFTkJRVU1zUzBGQmJVSTdTVUZEYWtRc1QwRkJUeXhMUVVGTExFTkJRVU1zU1VGQlNTeEpRVUZKTEVsQlFVa3NTVUZCU1N4TFFVRkxMRU5CUVVNc1NVRkJTU3hEUVVGRExFMUJRVTBzUzBGQlN5eERRVUZETEVOQlFVTTdRVUZEZWtRc1EwRkJReUlzSW5OdmRYSmpaWE5EYjI1MFpXNTBJanBiSW1sdGNHOXlkQ0I3UW5WMGRHOXVWakZOYjJSbGJIMGdabkp2YlNCY0lpNHZRblYwZEc5dVZqRmNJanRjYmx4dVpYaHdiM0owSUdaMWJtTjBhVzl1SUVKMWRIUnZibFl4U1hORmJYQjBlVVp1S0hCeWIzQnpPa0oxZEhSdmJsWXhUVzlrWld3cE9pQmliMjlzWldGdWUxeHVJQ0FnSUhKbGRIVnliaUJ3Y205d2N5NTBaWGgwSUQwOUlHNTFiR3dnZkh3Z2NISnZjSE11ZEdWNGRDNXNaVzVuZEdnZ1BUMDlJREE3WEc1OUlsMTkiLCIvKlxuICogIENvcHlyaWdodCAyMDIwIEFkb2JlXG4gKlxuICogIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiAgeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICAgICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqICBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiAgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiAgU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuY29uc3QgREVGQVVMVF9FTVBUWV9URVhUX0xBQkVMID0gJ1BsZWFzZSBjb25maWd1cmUgdGhlIGNvbXBvbmVudCc7XG5leHBvcnQgY29uc3QgRWRpdG9yUGxhY2VIb2xkZXIgPSAocHJvcHMpID0+IHtcbiAgICBjb25zdCBwYXJ0MSA9IChwcm9wcy5jb21wb25lbnRUaXRsZSAhPSBudWxsICYmIHByb3BzLmNvbXBvbmVudFRpdGxlLmxlbmd0aCA+IDApID8gcHJvcHMuY29tcG9uZW50VGl0bGUgKyAnIC0gJyA6ICcnO1xuICAgIGNvbnN0IHBhcnQyID0gKHByb3BzLmVtcHR5VGV4dEFwcGVuZCAhPSBudWxsKSA/IHByb3BzLmVtcHR5VGV4dEFwcGVuZCA6IERFRkFVTFRfRU1QVFlfVEVYVF9MQUJFTDtcbiAgICBjb25zdCBlbXB0eVRleHQgPSBwYXJ0MSArIHBhcnQyO1xuICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzTmFtZTogJ2NxLXBsYWNlaG9sZGVyJyArIChwcm9wcy5jbGFzc0FwcGVuZCAhPSBudWxsID8gJyAnICsgcHJvcHMuY2xhc3NBcHBlbmQgOiAnJykgfSwgZW1wdHlUZXh0KSk7XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pY0d4aFkyVm9iMnhrWlhJdWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUlpd2ljMjkxY21ObGN5STZXeUp3YkdGalpXaHZiR1JsY2k1MGMzZ2lYU3dpYm1GdFpYTWlPbHRkTENKdFlYQndhVzVuY3lJNklrRkJRVUU3T3pzN096czdPenM3T3pzN08wZEJZMGM3UVVGRFNDeFBRVUZQTEV0QlFXdENMRTFCUVUwc1QwRkJUeXhEUVVGRE8wRkJUM1pETEUxQlFVMHNkMEpCUVhkQ0xFZEJRVWNzWjBOQlFXZERMRU5CUVVNN1FVRkZiRVVzVFVGQlRTeERRVUZETEUxQlFVMHNhVUpCUVdsQ0xFZEJRVWNzUTBGQlF5eExRVUZ6UWl4RlFVRkZMRVZCUVVVN1NVRkZlRVFzVFVGQlRTeExRVUZMTEVkQlFWY3NRMEZCUXl4TFFVRkxMRU5CUVVNc1kwRkJZeXhKUVVGSkxFbEJRVWtzU1VGQlNTeExRVUZMTEVOQlFVTXNZMEZCWXl4RFFVRkRMRTFCUVUwc1IwRkJSeXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVVXNTMEZCU3l4RFFVRkRMR05CUVdNc1IwRkJTU3hMUVVGTExFTkJRVU1zUTBGQlF5eERRVUZETEVWQlFVVXNRMEZCUXp0SlFVTTVTQ3hOUVVGTkxFdEJRVXNzUjBGQlZ5eERRVUZETEV0QlFVc3NRMEZCUXl4bFFVRmxMRWxCUVVrc1NVRkJTU3hEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZGTEV0QlFVc3NRMEZCUXl4bFFVRmxMRU5CUVVNc1EwRkJReXhEUVVGRExIZENRVUYzUWl4RFFVRkRPMGxCUXpGSExFMUJRVTBzVTBGQlV5eEhRVUZITEV0QlFVc3NSMEZCUnl4TFFVRkxMRU5CUVVNN1NVRkZhRU1zVDBGQlR5eERRVU5JTERaQ1FVTkpMRk5CUVZNc1JVRkJSU3huUWtGQlowSXNSMEZCUnl4RFFVRkRMRXRCUVVzc1EwRkJReXhYUVVGWExFbEJRVWtzU1VGQlNTeERRVUZCTEVOQlFVTXNRMEZCUXl4SFFVRkhMRWRCUVVjc1MwRkJTeXhEUVVGRExGZEJRVmNzUTBGQlF5eERRVUZETEVOQlFVTXNSVUZCUlN4RFFVRkRMRWxCUTNSR0xGTkJRVk1zUTBGRFVpeERRVU5VTEVOQlFVRTdRVUZEVEN4RFFVRkRMRU5CUVVNaUxDSnpiM1Z5WTJWelEyOXVkR1Z1ZENJNld5SXZLbHh1SUNvZ0lFTnZjSGx5YVdkb2RDQXlNREl3SUVGa2IySmxYRzRnS2x4dUlDb2dJRXhwWTJWdWMyVmtJSFZ1WkdWeUlIUm9aU0JCY0dGamFHVWdUR2xqWlc1elpTd2dWbVZ5YzJsdmJpQXlMakFnS0hSb1pTQmNJa3hwWTJWdWMyVmNJaWs3WEc0Z0tpQWdlVzkxSUcxaGVTQnViM1FnZFhObElIUm9hWE1nWm1sc1pTQmxlR05sY0hRZ2FXNGdZMjl0Y0d4cFlXNWpaU0IzYVhSb0lIUm9aU0JNYVdObGJuTmxMbHh1SUNvZ0lGbHZkU0J0WVhrZ2IySjBZV2x1SUdFZ1kyOXdlU0J2WmlCMGFHVWdUR2xqWlc1elpTQmhkRnh1SUNwY2JpQXFJQ0FnSUNBZ2FIUjBjRG92TDNkM2R5NWhjR0ZqYUdVdWIzSm5MMnhwWTJWdWMyVnpMMHhKUTBWT1UwVXRNaTR3WEc0Z0tseHVJQ29nSUZWdWJHVnpjeUJ5WlhGMWFYSmxaQ0JpZVNCaGNIQnNhV05oWW14bElHeGhkeUJ2Y2lCaFozSmxaV1FnZEc4Z2FXNGdkM0pwZEdsdVp5d2djMjltZEhkaGNtVmNiaUFxSUNCa2FYTjBjbWxpZFhSbFpDQjFibVJsY2lCMGFHVWdUR2xqWlc1elpTQnBjeUJrYVhOMGNtbGlkWFJsWkNCdmJpQmhiaUJjSWtGVElFbFRYQ0lnUWtGVFNWTXNYRzRnS2lBZ1YwbFVTRTlWVkNCWFFWSlNRVTVVU1VWVElFOVNJRU5QVGtSSlZFbFBUbE1nVDBZZ1FVNVpJRXRKVGtRc0lHVnBkR2hsY2lCbGVIQnlaWE56SUc5eUlHbHRjR3hwWldRdVhHNGdLaUFnVTJWbElIUm9aU0JNYVdObGJuTmxJR1p2Y2lCMGFHVWdjM0JsWTJsbWFXTWdiR0Z1WjNWaFoyVWdaMjkyWlhKdWFXNW5JSEJsY20xcGMzTnBiMjV6SUdGdVpGeHVJQ29nSUd4cGJXbDBZWFJwYjI1eklIVnVaR1Z5SUhSb1pTQk1hV05sYm5ObExseHVJQ292WEc1cGJYQnZjblFnVW1WaFkzUXNJSHREYjIxd2IyNWxiblI5SUdaeWIyMGdKM0psWVdOMEp6dGNibHh1Wlhod2IzSjBJR2x1ZEdWeVptRmpaU0JRYkdGalpVaHZiR1JsY2sxdlpHVnNJSHRjYmlBZ0lDQmpiMjF3YjI1bGJuUlVhWFJzWlQ4NklITjBjbWx1WjF4dUlDQWdJR05zWVhOelFYQndaVzVrUHpvZ2MzUnlhVzVuWEc0Z0lDQWdaVzF3ZEhsVVpYaDBRWEJ3Wlc1a1B6b2djM1J5YVc1blhHNTlYRzVqYjI1emRDQkVSVVpCVlV4VVgwVk5VRlJaWDFSRldGUmZURUZDUlV3Z1BTQW5VR3hsWVhObElHTnZibVpwWjNWeVpTQjBhR1VnWTI5dGNHOXVaVzUwSnp0Y2JseHVaWGh3YjNKMElHTnZibk4wSUVWa2FYUnZjbEJzWVdObFNHOXNaR1Z5SUQwZ0tIQnliM0J6T2xCc1lXTmxTRzlzWkdWeVRXOWtaV3dwSUQwK0lIdGNibHh1SUNBZ0lHTnZibk4wSUhCaGNuUXhPaUJ6ZEhKcGJtY2dQU0FvY0hKdmNITXVZMjl0Y0c5dVpXNTBWR2wwYkdVZ0lUMGdiblZzYkNBbUppQndjbTl3Y3k1amIyMXdiMjVsYm5SVWFYUnNaUzVzWlc1bmRHZ2dQaUF3S1NBL0lDQndjbTl3Y3k1amIyMXdiMjVsYm5SVWFYUnNaU0FySUNBbklDMGdKeUE2SUNjbk8xeHVJQ0FnSUdOdmJuTjBJSEJoY25ReU9pQnpkSEpwYm1jZ1BTQW9jSEp2Y0hNdVpXMXdkSGxVWlhoMFFYQndaVzVrSUNFOUlHNTFiR3dwSUQ4Z0lIQnliM0J6TG1WdGNIUjVWR1Y0ZEVGd2NHVnVaQ0E2SUVSRlJrRlZURlJmUlUxUVZGbGZWRVZZVkY5TVFVSkZURHRjYmlBZ0lDQmpiMjV6ZENCbGJYQjBlVlJsZUhRZ1BTQndZWEowTVNBcklIQmhjblF5TzF4dVhHNGdJQ0FnY21WMGRYSnVJQ2hjYmlBZ0lDQWdJQ0FnUEdScGRseHVJQ0FnSUNBZ0lDQWdJQ0FnWTJ4aGMzTk9ZVzFsUFhzblkzRXRjR3hoWTJWb2IyeGtaWEluSUNzZ0tIQnliM0J6TG1Oc1lYTnpRWEJ3Wlc1a0lDRTlJRzUxYkd3L0lDY2dKeUFySUhCeWIzQnpMbU5zWVhOelFYQndaVzVrSURvZ0p5Y3BmVDVjYmlBZ0lDQWdJQ0FnSUNBZ0lIdGxiWEIwZVZSbGVIUjlYRzRnSUNBZ0lDQWdJRHd2WkdsMlBseHVJQ0FnSUNsY2JuMDdJbDE5IiwiLypcbiAqICBDb3B5cmlnaHQgMjAyMCBBZG9iZVxuICpcbiAqICBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqICBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgICAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqICBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiAgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqICBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IExpbmsgYXMgUm91dGVyTGluayB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xuZXhwb3J0IGNvbnN0IFJvdXRlZExpbmsgPSAocHJvcHMpID0+IHtcbiAgICBjb25zdCB7IHRvLCBpc1JvdXRlZCwgLi4ub3RoZXJQcm9wcyB9ID0gcHJvcHM7XG4gICAgaWYgKHRvID09PSB1bmRlZmluZWQgfHwgdG8udHJpbSgpLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcImFcIiwgT2JqZWN0LmFzc2lnbih7IGhyZWY6ICcjJyB9LCBvdGhlclByb3BzKSk7XG4gICAgfVxuICAgIGNvbnN0IGlzRXh0ZXJuYWwgPSAvXmh0dHBzPzpcXC9cXC8vLnRlc3QodG8pO1xuICAgIHJldHVybiBpc0V4dGVybmFsIHx8ICFpc1JvdXRlZCA/XG4gICAgICAgIChSZWFjdC5jcmVhdGVFbGVtZW50KFwiYVwiLCBPYmplY3QuYXNzaWduKHsgaHJlZjogdG8gfSwgb3RoZXJQcm9wcykpKVxuICAgICAgICA6XG4gICAgICAgICAgICAoUmVhY3QuY3JlYXRlRWxlbWVudChSb3V0ZXJMaW5rLCBPYmplY3QuYXNzaWduKHt9LCBvdGhlclByb3BzLCB7IHRvOiB0byB9KSkpO1xufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaVVtOTFkR1ZrVEdsdWF5NXFjeUlzSW5OdmRYSmpaVkp2YjNRaU9pSWlMQ0p6YjNWeVkyVnpJanBiSWxKdmRYUmxaRXhwYm1zdWRITjRJbDBzSW01aGJXVnpJanBiWFN3aWJXRndjR2x1WjNNaU9pSkJRVUZCT3pzN096czdPenM3T3pzN096dEhRV05ITzBGQlJVZ3NUMEZCVHl4TFFVRkxMRTFCUVUwc1QwRkJUeXhEUVVGRE8wRkJRekZDTEU5QlFVOHNSVUZCUXl4SlFVRkpMRWxCUVVrc1ZVRkJWU3hGUVVGRExFMUJRVTBzYTBKQlFXdENMRU5CUVVNN1FVRlBjRVFzVFVGQlRTeERRVUZETEUxQlFVMHNWVUZCVlN4SFFVRkhMRU5CUVVNc1MwRkJaU3hGUVVGRkxFVkJRVVU3U1VGRE1VTXNUVUZCVFN4RlFVRkRMRVZCUVVVc1JVRkJSU3hSUVVGUkxFVkJRVVVzUjBGQlJ5eFZRVUZWTEVWQlFVTXNSMEZCUnl4TFFVRkxMRU5CUVVNN1NVRkZOVU1zU1VGQlJ5eEZRVUZGTEV0QlFVc3NVMEZCVXl4SlFVRkpMRVZCUVVVc1EwRkJReXhKUVVGSkxFVkJRVVVzUTBGQlF5eE5RVUZOTEV0QlFVc3NRMEZCUXl4RlFVRkRPMUZCUXpGRExFOUJRVThzZVVOQlFVY3NTVUZCU1N4RlFVRkZMRWRCUVVjc1NVRkRXQ3hWUVVGVkxFVkJRMmhDTEVOQlFVTTdTMEZEVGp0SlFVTkVMRTFCUVUwc1ZVRkJWU3hIUVVGSExHTkJRV01zUTBGQlF5eEpRVUZKTEVOQlFVTXNSVUZCUlN4RFFVRkRMRU5CUVVNN1NVRkZNME1zVDBGQlR5eFZRVUZWTEVsQlFVa3NRMEZCUXl4UlFVRlJMRU5CUVVFc1EwRkJRenRSUVVNelFpeERRVUZETEhsRFFVTkhMRWxCUVVrc1JVRkJSU3hGUVVGRkxFbEJRMG9zVlVGQlZTeEZRVU5vUWl4RFFVRkRPMUZCUTBnc1EwRkJRenRaUVVORUxFTkJRVVVzYjBKQlFVTXNWVUZCVlN4dlFrRkJTeXhWUVVGVkxFbEJRMlFzUlVGQlJTeEZRVUZGTEVWQlFVVXNTVUZEYkVJc1EwRkJReXhEUVVGQk8wRkJRMWdzUTBGQlF5eERRVUZESWl3aWMyOTFjbU5sYzBOdmJuUmxiblFpT2xzaUx5cGNiaUFxSUNCRGIzQjVjbWxuYUhRZ01qQXlNQ0JCWkc5aVpWeHVJQ3BjYmlBcUlDQk1hV05sYm5ObFpDQjFibVJsY2lCMGFHVWdRWEJoWTJobElFeHBZMlZ1YzJVc0lGWmxjbk5wYjI0Z01pNHdJQ2gwYUdVZ1hDSk1hV05sYm5ObFhDSXBPMXh1SUNvZ0lIbHZkU0J0WVhrZ2JtOTBJSFZ6WlNCMGFHbHpJR1pwYkdVZ1pYaGpaWEIwSUdsdUlHTnZiWEJzYVdGdVkyVWdkMmwwYUNCMGFHVWdUR2xqWlc1elpTNWNiaUFxSUNCWmIzVWdiV0Y1SUc5aWRHRnBiaUJoSUdOdmNIa2diMllnZEdobElFeHBZMlZ1YzJVZ1lYUmNiaUFxWEc0Z0tpQWdJQ0FnSUdoMGRIQTZMeTkzZDNjdVlYQmhZMmhsTG05eVp5OXNhV05sYm5ObGN5OU1TVU5GVGxORkxUSXVNRnh1SUNwY2JpQXFJQ0JWYm14bGMzTWdjbVZ4ZFdseVpXUWdZbmtnWVhCd2JHbGpZV0pzWlNCc1lYY2diM0lnWVdkeVpXVmtJSFJ2SUdsdUlIZHlhWFJwYm1jc0lITnZablIzWVhKbFhHNGdLaUFnWkdsemRISnBZblYwWldRZ2RXNWtaWElnZEdobElFeHBZMlZ1YzJVZ2FYTWdaR2x6ZEhKcFluVjBaV1FnYjI0Z1lXNGdYQ0pCVXlCSlUxd2lJRUpCVTBsVExGeHVJQ29nSUZkSlZFaFBWVlFnVjBGU1VrRk9WRWxGVXlCUFVpQkRUMDVFU1ZSSlQwNVRJRTlHSUVGT1dTQkxTVTVFTENCbGFYUm9aWElnWlhod2NtVnpjeUJ2Y2lCcGJYQnNhV1ZrTGx4dUlDb2dJRk5sWlNCMGFHVWdUR2xqWlc1elpTQm1iM0lnZEdobElITndaV05wWm1saklHeGhibWQxWVdkbElHZHZkbVZ5Ym1sdVp5QndaWEp0YVhOemFXOXVjeUJoYm1SY2JpQXFJQ0JzYVcxcGRHRjBhVzl1Y3lCMWJtUmxjaUIwYUdVZ1RHbGpaVzV6WlM1Y2JpQXFMMXh1WEc1cGJYQnZjblFnVW1WaFkzUWdabkp2YlNBbmNtVmhZM1FuTzF4dWFXMXdiM0owSUh0TWFXNXJJR0Z6SUZKdmRYUmxja3hwYm10OUlHWnliMjBnSjNKbFlXTjBMWEp2ZFhSbGNpMWtiMjBuTzF4dVhHNWxlSEJ2Y25RZ2FXNTBaWEptWVdObElFeHBibXRRY205d2N5QjdYRzRnSUNBZ2RHOC9PaUJ6ZEhKcGJtYzdYRzRnSUNBZ2FYTlNiM1YwWldRL09pQmliMjlzWldGdU8xeHVJQ0FnSUZ0d2NtOXdPaUJ6ZEhKcGJtZGRPaUJoYm5sY2JuMWNibVY0Y0c5eWRDQmpiMjV6ZENCU2IzVjBaV1JNYVc1cklEMGdLSEJ5YjNCek9reHBibXRRY205d2N5a2dQVDRnZTF4dUlDQWdJR052Ym5OMElIdDBieXdnYVhOU2IzVjBaV1FzSUM0dUxtOTBhR1Z5VUhKdmNITjlJRDBnY0hKdmNITTdYRzVjYmlBZ0lDQnBaaWgwYnlBOVBUMGdkVzVrWldacGJtVmtJSHg4SUhSdkxuUnlhVzBvS1M1c1pXNW5kR2dnUFQwOUlEQXBlMXh1SUNBZ0lDQWdJQ0J5WlhSMWNtNGdQR0VnYUhKbFpqMTdKeU1uZlZ4dUlDQWdJQ0FnSUNBZ0lDQWdleTR1TG05MGFHVnlVSEp2Y0hOOVhHNGdJQ0FnSUNBZ0lDOCtPMXh1SUNBZ0lIMWNiaUFnSUNCamIyNXpkQ0JwYzBWNGRHVnlibUZzSUQwZ0wxNW9kSFJ3Y3o4NlhGd3ZYRnd2THk1MFpYTjBLSFJ2S1R0Y2JseHVJQ0FnSUhKbGRIVnliaUJwYzBWNGRHVnlibUZzSUh4OElDRnBjMUp2ZFhSbFpEOWNiaUFnSUNBZ0lDQWdLRHhoWEc0Z0lDQWdJQ0FnSUNBZ0lDQm9jbVZtUFh0MGIzMWNiaUFnSUNBZ0lDQWdJQ0FnSUhzdUxpNXZkR2hsY2xCeWIzQnpmVnh1SUNBZ0lDQWdJQ0F2UGlsY2JpQWdJQ0FnSUNBZ09seHVJQ0FnSUNBZ0lDQW9JRHhTYjNWMFpYSk1hVzVySUhzdUxpNXZkR2hsY2xCeWIzQnpmVnh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lIUnZQWHQwYjMxY2JpQWdJQ0FnSUNBZ0x6NHBYRzU5T3lKZGZRPT0iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9