(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ImageV2"],{

/***/ "../../react-base-components/dist/authoring/image/v2/ImageV2.js":
/*!************************************************************************************************************************!*\
  !*** /Users/raaijmak/workspace/aem-react-core-wcm-components/react-base-components/dist/authoring/image/v2/ImageV2.js ***!
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

      return __webpack_require__(__webpack_require__.s = 6);
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
      "./src/authoring/image/v2/ImageV2.tsx":
      /*!********************************************!*\
        !*** ./src/authoring/image/v2/ImageV2.tsx ***!
        \********************************************/

      /*! exports provided: default */

      /***/
      function (module, __webpack_exports__, __webpack_require__) {
        "use strict";

        __webpack_require__.r(__webpack_exports__);
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


        var _ImageV2IsEmptyFn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
        /*! ./ImageV2IsEmptyFn */
        "./src/authoring/image/v2/ImageV2IsEmptyFn.ts");
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


        const ImageV2InnerContents = props => {
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
            src: props.src,
            className: props.baseCssClass + '__image',
            alt: props.alt
          }), !!props.title && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
            className: props.baseCssClass + '__title',
            itemProp: "caption"
          }, props.title), props.displayPopupTitle && !!props.title && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
            itemProp: "caption",
            content: props.title
          }));
        };

        const ImageV2Contents = props => {
          if (props.link && props.link.trim().length > 0) {
            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_routing_RoutedLink__WEBPACK_IMPORTED_MODULE_2__["RoutedLink"], {
              className: props.baseCssClass + '__link',
              isRouted: props.routed,
              to: props.link
            }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ImageV2InnerContents, Object.assign({}, props)));
          }

          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ImageV2InnerContents, Object.assign({}, props));
        };

        const ImageV2Impl = props => {
          const {
            isInEditor = false
          } = props;
          const cssClassName = isInEditor ? props.baseCssClass + ' cq-dd-image' : props.baseCssClass;
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
            className: cssClassName
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ImageV2Contents, Object.assign({}, props)));
        };

        const ImageV2 = props => {
          const Wrapped = Object(_AbstractCoreComponent__WEBPACK_IMPORTED_MODULE_1__["withConditionalPlaceHolder"])(Object(_AbstractCoreComponent__WEBPACK_IMPORTED_MODULE_1__["withStandardBaseCssClass"])(ImageV2Impl, "cmp-image"), _ImageV2IsEmptyFn__WEBPACK_IMPORTED_MODULE_3__["ImageV2IsEmptyFn"], "Image V2");
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Wrapped, Object.assign({}, props));
        };
        /* harmony default export */


        __webpack_exports__["default"] = ImageV2; //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSW1hZ2VWMi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIkltYWdlVjIudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7OztHQWNHO0FBRUgsT0FBTyxLQUFrQixNQUFNLE9BQU8sQ0FBQztBQUN2QyxPQUFPLEVBQUMsMEJBQTBCLEVBQUUsd0JBQXdCLEVBQUMsTUFBTSxnQ0FBZ0MsQ0FBQztBQUVwRyxPQUFPLEVBQUMsVUFBVSxFQUFDLE1BQU0sNkJBQTZCLENBQUM7QUFDdkQsT0FBTyxFQUFDLGdCQUFnQixFQUFDLE1BQU0sb0JBQW9CLENBQUM7QUFXcEQsTUFBTSxvQkFBb0IsR0FBRyxDQUFDLEtBQWtCLEVBQUUsRUFBRTtJQUNoRCxPQUFPLENBQ0g7UUFDSSw2QkFBSyxHQUFHLEVBQUUsS0FBSyxDQUFDLEdBQUcsRUFDZCxTQUFTLEVBQUUsS0FBSyxDQUFDLFlBQVksR0FBRyxTQUFTLEVBQ3pDLEdBQUcsRUFBRSxLQUFLLENBQUMsR0FBRyxHQUFHO1FBRWxCLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsSUFBSSw4QkFBTSxTQUFTLEVBQUUsS0FBSyxDQUFDLFlBQVksR0FBRyxTQUFTLEVBQUUsUUFBUSxFQUFDLFNBQVMsSUFBRSxLQUFLLENBQUMsS0FBSyxDQUFRO1FBRzNHLEtBQUssQ0FBQyxpQkFBaUIsSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLElBQUksOEJBQU0sUUFBUSxFQUFDLFNBQVMsRUFBQyxPQUFPLEVBQUUsS0FBSyxDQUFDLEtBQUssR0FBRyxDQUVuRyxDQUNOLENBQUM7QUFDTixDQUFDLENBQUM7QUFFRixNQUFNLGVBQWUsR0FBRyxDQUFDLEtBQWtCLEVBQUUsRUFBRTtJQUMzQyxJQUFJLEtBQUssQ0FBQyxJQUFJLElBQUksS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFDO1FBQzNDLE9BQU8sQ0FDSCxvQkFBQyxVQUFVLElBQUMsU0FBUyxFQUFFLEtBQUssQ0FBQyxZQUFZLEdBQUcsUUFBUSxFQUFFLFFBQVEsRUFBRSxLQUFLLENBQUMsTUFBTSxFQUFFLEVBQUUsRUFBRSxLQUFLLENBQUMsSUFBSTtZQUN4RixvQkFBQyxvQkFBb0Isb0JBQUssS0FBSyxFQUFHLENBQ3pCLENBQ2hCLENBQUE7S0FDSjtJQUNELE9BQU8sb0JBQUMsb0JBQW9CLG9CQUFLLEtBQUssRUFBRyxDQUFBO0FBQzdDLENBQUMsQ0FBQztBQUVGLE1BQU0sV0FBVyxHQUFHLENBQUMsS0FBa0IsRUFBRSxFQUFFO0lBRXZDLE1BQU0sRUFBQyxVQUFVLEdBQUcsS0FBSyxFQUFDLEdBQUcsS0FBSyxDQUFDO0lBQ25DLE1BQU0sWUFBWSxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxZQUFZLEdBQUcsY0FBYyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDO0lBRTVGLE9BQU8sQ0FDSCw2QkFBSyxTQUFTLEVBQUUsWUFBWTtRQUN4QixvQkFBQyxlQUFlLG9CQUFLLEtBQUssRUFBRyxDQUMzQixDQUNULENBQUE7QUFFTixDQUFDLENBQUM7QUFFRixNQUFNLE9BQU8sR0FBRyxDQUFDLEtBQWtCLEVBQUUsRUFBRTtJQUVuQyxNQUFNLE9BQU8sR0FBRywwQkFBMEIsQ0FBQyx3QkFBd0IsQ0FBQyxXQUFXLEVBQUUsV0FBVyxDQUFDLEVBQUUsZ0JBQWdCLEVBQUUsVUFBVSxDQUFDLENBQUM7SUFDN0gsT0FBTyxvQkFBQyxPQUFPLG9CQUFLLEtBQUssRUFBRyxDQUFBO0FBQ2hDLENBQUMsQ0FBQztBQUVGLGVBQWUsT0FBTyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqICBDb3B5cmlnaHQgMjAyMCBBZG9iZVxuICpcbiAqICBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqICBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgICAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqICBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiAgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqICBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuXG5pbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7d2l0aENvbmRpdGlvbmFsUGxhY2VIb2xkZXIsIHdpdGhTdGFuZGFyZEJhc2VDc3NDbGFzc30gZnJvbSBcIi4uLy4uLy4uL0Fic3RyYWN0Q29yZUNvbXBvbmVudFwiO1xuaW1wb3J0IHtSb3V0ZWRDb3JlQ29tcG9uZW50TW9kZWx9IGZyb20gXCIuLi8uLi8uLi9yb3V0aW5nL1JvdXRlZENvcmVDb21wb25lbnRcIjtcbmltcG9ydCB7Um91dGVkTGlua30gZnJvbSBcIi4uLy4uLy4uL3JvdXRpbmcvUm91dGVkTGlua1wiO1xuaW1wb3J0IHtJbWFnZVYySXNFbXB0eUZufSBmcm9tIFwiLi9JbWFnZVYySXNFbXB0eUZuXCI7XG5cblxuZXhwb3J0IGludGVyZmFjZSBJbWFnZVYyTW9kZWwgZXh0ZW5kcyBSb3V0ZWRDb3JlQ29tcG9uZW50TW9kZWx7XG4gICAgc3JjOiBzdHJpbmdcbiAgICBhbHQ6IHN0cmluZ1xuICAgIGRpc3BsYXlQb3B1cFRpdGxlPzogYm9vbGVhblxuICAgIHRpdGxlPzogc3RyaW5nXG4gICAgbGluaz86IHN0cmluZ1xufVxuXG5jb25zdCBJbWFnZVYySW5uZXJDb250ZW50cyA9IChwcm9wczpJbWFnZVYyTW9kZWwpID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8PlxuICAgICAgICAgICAgPGltZyBzcmM9e3Byb3BzLnNyY31cbiAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtwcm9wcy5iYXNlQ3NzQ2xhc3MgKyAnX19pbWFnZSd9XG4gICAgICAgICAgICAgICAgIGFsdD17cHJvcHMuYWx0fS8+XG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgISEocHJvcHMudGl0bGUpICYmIDxzcGFuIGNsYXNzTmFtZT17cHJvcHMuYmFzZUNzc0NsYXNzICsgJ19fdGl0bGUnfSBpdGVtUHJvcD1cImNhcHRpb25cIj57cHJvcHMudGl0bGV9PC9zcGFuPlxuICAgICAgICAgICAgfVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHByb3BzLmRpc3BsYXlQb3B1cFRpdGxlICYmICghIXByb3BzLnRpdGxlKSAmJiA8bWV0YSBpdGVtUHJvcD1cImNhcHRpb25cIiBjb250ZW50PXtwcm9wcy50aXRsZX0vPlxuICAgICAgICAgICAgfVxuICAgICAgICA8Lz5cbiAgICApO1xufTtcblxuY29uc3QgSW1hZ2VWMkNvbnRlbnRzID0gKHByb3BzOkltYWdlVjJNb2RlbCkgPT4ge1xuICAgIGlmKCBwcm9wcy5saW5rICYmIHByb3BzLmxpbmsudHJpbSgpLmxlbmd0aCA+IDApe1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPFJvdXRlZExpbmsgY2xhc3NOYW1lPXtwcm9wcy5iYXNlQ3NzQ2xhc3MgKyAnX19saW5rJ30gaXNSb3V0ZWQ9e3Byb3BzLnJvdXRlZH0gdG89e3Byb3BzLmxpbmt9PlxuICAgICAgICAgICAgICAgIDxJbWFnZVYySW5uZXJDb250ZW50cyB7Li4ucHJvcHN9Lz5cbiAgICAgICAgICAgIDwvUm91dGVkTGluaz5cbiAgICAgICAgKVxuICAgIH1cbiAgICByZXR1cm4gPEltYWdlVjJJbm5lckNvbnRlbnRzIHsuLi5wcm9wc30vPlxufTtcblxuY29uc3QgSW1hZ2VWMkltcGwgPSAocHJvcHM6SW1hZ2VWMk1vZGVsKSA9PiB7XG5cbiAgICBjb25zdCB7aXNJbkVkaXRvciA9IGZhbHNlfSA9IHByb3BzO1xuICAgIGNvbnN0IGNzc0NsYXNzTmFtZSA9IChpc0luRWRpdG9yKSA/IHByb3BzLmJhc2VDc3NDbGFzcyArICcgY3EtZGQtaW1hZ2UnIDogcHJvcHMuYmFzZUNzc0NsYXNzO1xuXG4gICAgIHJldHVybiAoXG4gICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y3NzQ2xhc3NOYW1lfT5cbiAgICAgICAgICAgICA8SW1hZ2VWMkNvbnRlbnRzIHsuLi5wcm9wc30vPlxuICAgICAgICAgPC9kaXY+XG4gICAgIClcblxufTtcblxuY29uc3QgSW1hZ2VWMiA9IChwcm9wczpJbWFnZVYyTW9kZWwpID0+IHtcblxuICAgIGNvbnN0IFdyYXBwZWQgPSB3aXRoQ29uZGl0aW9uYWxQbGFjZUhvbGRlcih3aXRoU3RhbmRhcmRCYXNlQ3NzQ2xhc3MoSW1hZ2VWMkltcGwsIFwiY21wLWltYWdlXCIpLCBJbWFnZVYySXNFbXB0eUZuLCBcIkltYWdlIFYyXCIpO1xuICAgIHJldHVybiA8V3JhcHBlZCB7Li4ucHJvcHN9Lz5cbn07XG5cbmV4cG9ydCBkZWZhdWx0IEltYWdlVjI7Il19

        /***/
      },

      /***/
      "./src/authoring/image/v2/ImageV2IsEmptyFn.ts":
      /*!****************************************************!*\
        !*** ./src/authoring/image/v2/ImageV2IsEmptyFn.ts ***!
        \****************************************************/

      /*! exports provided: ImageV2IsEmptyFn */

      /***/
      function (module, __webpack_exports__, __webpack_require__) {
        "use strict";

        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */


        __webpack_require__.d(__webpack_exports__, "ImageV2IsEmptyFn", function () {
          return ImageV2IsEmptyFn;
        });

        function ImageV2IsEmptyFn(props) {
          return !props.src || props.src.trim().length === 0;
        } //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSW1hZ2VWMklzRW1wdHlGbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIkltYWdlVjJJc0VtcHR5Rm4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUEsTUFBTSxVQUFVLGdCQUFnQixDQUFDLEtBQWtCO0lBQy9DLE9BQU8sQ0FBQyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsSUFBSSxLQUFLLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSxDQUFDLE1BQU0sS0FBSyxDQUFDLENBQUM7QUFDekQsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SW1hZ2VWMk1vZGVsfSBmcm9tIFwiLi9JbWFnZVYyXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBJbWFnZVYySXNFbXB0eUZuKHByb3BzOkltYWdlVjJNb2RlbCkge1xuICAgIHJldHVybiAoIXByb3BzLnNyYykgfHwgcHJvcHMuc3JjLnRyaW0oKS5sZW5ndGggPT09IDA7XG59XG4iXX0=

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
      6:
      /*!**********************************************!*\
        !*** multi ./src/authoring/image/v2/ImageV2 ***!
        \**********************************************/

      /*! no static exports found */

      /***/
      function (module, exports, __webpack_require__) {
        module.exports = __webpack_require__(
        /*! ./src/authoring/image/v2/ImageV2 */
        "./src/authoring/image/v2/ImageV2.tsx");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9AYWRvYmUvYWVtLWNvcmUtY29tcG9uZW50cy1yZWFjdC1iYXNlL3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbj8wNjE3IiwiL0BhZG9iZS9hZW0tY29yZS1jb21wb25lbnRzLXJlYWN0LWJhc2Uvd2VicGFjay9ib290c3RyYXA/MGRiZSIsIi9Vc2Vycy9yYWFpam1hay93b3Jrc3BhY2UvYWVtLXJlYWN0LWNvcmUtd2NtLWNvbXBvbmVudHMvZXhhbXBsZXMvcmVhY3Qtc3BhY29tcG9uZW50cy1leGFtcGxlLXByb2plY3QvQGFkb2JlL2FlbS1jb3JlLWNvbXBvbmVudHMtcmVhY3QtYmFzZS9zcmMvQWJzdHJhY3RDb3JlQ29tcG9uZW50LnRzeCIsIi9Vc2Vycy9yYWFpam1hay93b3Jrc3BhY2UvYWVtLXJlYWN0LWNvcmUtd2NtLWNvbXBvbmVudHMvZXhhbXBsZXMvcmVhY3Qtc3BhY29tcG9uZW50cy1leGFtcGxlLXByb2plY3QvQGFkb2JlL2FlbS1jb3JlLWNvbXBvbmVudHMtcmVhY3QtYmFzZS9zcmMvYXV0aG9yaW5nL2ltYWdlL3YyL0ltYWdlVjIudHN4IiwiL0BhZG9iZS9hZW0tY29yZS1jb21wb25lbnRzLXJlYWN0LWJhc2Uvc3JjL2F1dGhvcmluZy9pbWFnZS92Mi9JbWFnZVYySXNFbXB0eUZuLnRzPzI2NTgiLCIvVXNlcnMvcmFhaWptYWsvd29ya3NwYWNlL2FlbS1yZWFjdC1jb3JlLXdjbS1jb21wb25lbnRzL2V4YW1wbGVzL3JlYWN0LXNwYWNvbXBvbmVudHMtZXhhbXBsZS1wcm9qZWN0L0BhZG9iZS9hZW0tY29yZS1jb21wb25lbnRzLXJlYWN0LWJhc2Uvc3JjL2NvbW1vbi9wbGFjZWhvbGRlci50c3giLCIvVXNlcnMvcmFhaWptYWsvd29ya3NwYWNlL2FlbS1yZWFjdC1jb3JlLXdjbS1jb21wb25lbnRzL2V4YW1wbGVzL3JlYWN0LXNwYWNvbXBvbmVudHMtZXhhbXBsZS1wcm9qZWN0L0BhZG9iZS9hZW0tY29yZS1jb21wb25lbnRzLXJlYWN0LWJhc2Uvc3JjL3JvdXRpbmcvUm91dGVkTGluay50c3giLCIvVXNlcnMvcmFhaWptYWsvd29ya3NwYWNlL2FlbS1yZWFjdC1jb3JlLXdjbS1jb21wb25lbnRzL2V4YW1wbGVzL3JlYWN0LXNwYWNvbXBvbmVudHMtZXhhbXBsZS1wcm9qZWN0L3dlYnBhY2s6L0BhZG9iZS9hZW0tY29yZS1jb21wb25lbnRzLXJlYWN0LWJhc2UvZXh0ZXJuYWwgXCJyZWFjdFwiIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBQ0EsWUFDQSwyQkFEQSxLQUVBLEVBS0E7QUFDQyxDQVRELEVBU0MseUNBVEQsRUFTQztBQUNEOzs7OztBQ1ZBO0FBQUE7O0FBQ0E7QUFBQTs7O0FBRUE7QUFBQTs7QUFDQTs7QUFBQTs7O0FBRUE7QUFBQTs7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBOztBQUNBOzs7QUFBQTtBQUNBO0FBQUEscUJBREE7O0FBRUE7QUFBQSxrQkFGQTs7QUFHQTtBQUFBO0FBQ0E7O0FBSkE7OztBQU1BO0FBQUE7O0FBQ0E7O0FBQUE7OztBQUVBO0FBQUE7O0FBQ0E7O0FBQUE7OztBQUVBO0FBQUE7O0FBQ0E7O0FBQUE7QUFDQTtBQUFBOzs7OztBQUdBO0FBQUE7O0FBQ0E7OztBQUFBOzs7QUFFQTtBQUFBOztBQUNBOztBQUFBOzs7QUFFQTtBQUFBOztBQUNBOztBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBMEMsNEJBQTFDO0FBQTBDO0FBQTFDO0FBQ0E7QUFBQTtBQUNBOztBQUFBLE9BSkE7OztBQU1BO0FBQUE7O0FBQ0E7OztBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBd0Q7QUFBeEQ7QUFDQTtBQUFBO0FBQ0E7OztBQUFBO0FBQWlEO0FBQWpEO0FBQ0E7QUFBQSxPQUxBOzs7QUFPQTtBQUFBOztBQUNBO0FBQUE7O0FBQ0E7QUFBQTs7QUFDQTtBQUFBOztBQUNBO0FBQUE7O0FBQ0E7OztBQUFBO0FBQ0E7QUFBQTtBQUNBOztBQUFBO0FB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OztBUFVBO0NBVkEsRSIsImZpbGUiOiJqcy9JbWFnZVYyLjc4ZWY5MjVkLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiQGFkb2JlL2FlbS1jb3JlLWNvbXBvbmVudHMtcmVhY3QtYmFzZVwiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJAYWRvYmUvYWVtLWNvcmUtY29tcG9uZW50cy1yZWFjdC1iYXNlXCJdID0gZmFjdG9yeSgpO1xufSkodHlwZW9mIHNlbGYgIT09ICd1bmRlZmluZWQnID8gc2VsZiA6IHRoaXMsIGZ1bmN0aW9uKCkge1xucmV0dXJuICIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSA2KTtcbiIsIi8qXG4gKiAgQ29weXJpZ2h0IDIwMjAgQWRvYmVcbiAqXG4gKiAgTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqICB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiAgWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICAgICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiAgVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqICBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqICBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiAgbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IEVkaXRvclBsYWNlSG9sZGVyIH0gZnJvbSBcIi4vY29tbW9uL3BsYWNlaG9sZGVyXCI7XG5leHBvcnQgY29uc3Qgd2l0aFN0YW5kYXJkQmFzZUNzc0NsYXNzID0gKENvbXBvbmVudCwgZGVmYXVsdEJhc2VDc3NDbGFzcykgPT4ge1xuICAgIHJldHVybiAocHJvcHMpID0+IHtcbiAgICAgICAgY29uc3QgYmFzZUNzc0NsYXNzID0gcHJvcHMuYmFzZUNzc0NsYXNzO1xuICAgICAgICBjb25zdCB0b0JlVXNlZENzc0NsYXNzID0gYmFzZUNzc0NsYXNzICYmIGJhc2VDc3NDbGFzcy50cmltKCkubGVuZ3RoID4gMCA/IGJhc2VDc3NDbGFzcyA6IGRlZmF1bHRCYXNlQ3NzQ2xhc3M7XG4gICAgICAgIGNvbnN0IG1lcmdlZFByb3BzID0ge1xuICAgICAgICAgICAgLi4ucHJvcHMsXG4gICAgICAgICAgICBiYXNlQ3NzQ2xhc3M6IHRvQmVVc2VkQ3NzQ2xhc3NcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQ29tcG9uZW50LCBPYmplY3QuYXNzaWduKHt9LCBtZXJnZWRQcm9wcykpO1xuICAgIH07XG59O1xuZXhwb3J0IGNvbnN0IHdpdGhDb25kaXRpb25hbFBsYWNlSG9sZGVyID0gKENvbXBvbmVudCwgaXNFbXB0eSwgY29tcG9uZW50VGl0bGUsIGVtcHR5VGV4dCkgPT4ge1xuICAgIHJldHVybiAocHJvcHMpID0+IHtcbiAgICAgICAgY29uc3QgaXNFbXB0eVJlc3VsdCA9IGlzRW1wdHkocHJvcHMpO1xuICAgICAgICBjb25zdCB7IGhpZGVQbGFjZUhvbGRlciA9IGZhbHNlLCBpc0luRWRpdG9yID0gZmFsc2UgfSA9IHByb3BzO1xuICAgICAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoUmVhY3QuRnJhZ21lbnQsIG51bGwsXG4gICAgICAgICAgICAhaXNFbXB0eVJlc3VsdCAmJlxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQ29tcG9uZW50LCBPYmplY3QuYXNzaWduKHt9LCBwcm9wcykpLFxuICAgICAgICAgICAgKGlzRW1wdHlSZXN1bHQgJiYgaXNJbkVkaXRvciAmJiAhaGlkZVBsYWNlSG9sZGVyKSAmJlxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoRWRpdG9yUGxhY2VIb2xkZXIsIHsgZW1wdHlUZXh0QXBwZW5kOiBlbXB0eVRleHQsIGNvbXBvbmVudFRpdGxlOiBjb21wb25lbnRUaXRsZSB9KSkpO1xuICAgIH07XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pUVdKemRISmhZM1JEYjNKbFEyOXRjRzl1Wlc1MExtcHpJaXdpYzI5MWNtTmxVbTl2ZENJNklpSXNJbk52ZFhKalpYTWlPbHNpUVdKemRISmhZM1JEYjNKbFEyOXRjRzl1Wlc1MExuUnplQ0pkTENKdVlXMWxjeUk2VzEwc0ltMWhjSEJwYm1keklqb2lRVUZCUVRzN096czdPenM3T3pzN096czdSMEZqUnp0QlFVVklMRTlCUVU4c1MwRkJTeXhMUVVGTExFMUJRVTBzVDBGQlR5eERRVUZETzBGQlJ5OUNMRTlCUVU4c1JVRkJReXhwUWtGQmFVSXNSVUZCUXl4TlFVRk5MSE5DUVVGelFpeERRVUZETzBGQlpYWkVMRTFCUVUwc1EwRkJReXhOUVVGTkxIZENRVUYzUWl4SFFVRkhMRU5CUlhCRExGTkJRVEJDTEVWQlF6RkNMRzFDUVVFd1FpeEZRVU5LTEVWQlFVVTdTVUZEZUVJc1QwRkJUeXhEUVVGRExFdEJRVThzUlVGQlJTeEZRVUZGTzFGQlJXWXNUVUZCVFN4WlFVRlpMRWRCUVVjc1MwRkJTeXhEUVVGRExGbEJRVmtzUTBGQlF6dFJRVU40UXl4TlFVRk5MR2RDUVVGblFpeEhRVUZITEZsQlFWa3NTVUZCU1N4WlFVRlpMRU5CUVVNc1NVRkJTU3hGUVVGRkxFTkJRVU1zVFVGQlRTeEhRVUZITEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1dVRkJXU3hEUVVGRExFTkJRVU1zUTBGQlF5eHRRa0ZCYlVJc1EwRkJRenRSUVVVM1J5eE5RVUZOTEZkQlFWY3NSMEZCU3p0WlFVTnNRaXhIUVVGSExFdEJRVXM3V1VGRFVpeFpRVUZaTEVWQlFVVXNaMEpCUVdkQ08xTkJRMnBETEVOQlFVTTdVVUZGUml4UFFVRlBMRzlDUVVGRExGTkJRVk1zYjBKQlFVc3NWMEZCVnl4RlFVRkpMRU5CUVVNN1NVRkRNVU1zUTBGQlF5eERRVUZCTzBGQlEwd3NRMEZCUXl4RFFVRkRPMEZCUlVZc1RVRkJUU3hEUVVGRExFMUJRVTBzTUVKQlFUQkNMRWRCUVVjc1EwRkZNVUlzVTBGQk1FSXNSVUZETVVJc1QwRkJORUlzUlVGRE5VSXNZMEZCYzBJc1JVRkJSU3hUUVVGcFFpeEZRVU51UWl4RlFVRkZPMGxCUTNCRExFOUJRVThzUTBGQlF5eExRVUZQTEVWQlFVVXNSVUZCUlR0UlFVVm1MRTFCUVUwc1lVRkJZU3hIUVVGWExFOUJRVThzUTBGQlF5eExRVUZMTEVOQlFVTXNRMEZCUXp0UlFVTTNReXhOUVVGTkxFVkJRVU1zWlVGQlpTeEhRVUZITEV0QlFVc3NSVUZCUlN4VlFVRlZMRWRCUVVjc1MwRkJTeXhGUVVGRExFZEJRVWNzUzBGQlN5eERRVUZETzFGQlJUVkVMRTlCUVU4c1EwRkRTRHRaUVVOTkxFTkJRVU1zWVVGQllUdG5Ra0ZEYUVJc2IwSkJRVU1zVTBGQlV5eHZRa0ZCU3l4TFFVRkxMRVZCUVVrN1dVRkhjRUlzUTBGQlF5eGhRVUZoTEVsQlFVa3NWVUZCVlN4SlFVRkpMRU5CUVVNc1pVRkJaU3hEUVVGRE8yZENRVU5xUkN4dlFrRkJReXhwUWtGQmFVSXNTVUZEWkN4bFFVRmxMRVZCUVVVc1UwRkJVeXhGUVVNeFFpeGpRVUZqTEVWQlFVVXNZMEZCWXl4SFFVTm9ReXhEUVVWUUxFTkJRMDRzUTBGQlF6dEpRVU5PTEVOQlFVTXNRMEZCUVR0QlFVTk1MRU5CUVVNc1EwRkJReUlzSW5OdmRYSmpaWE5EYjI1MFpXNTBJanBiSWk4cVhHNGdLaUFnUTI5d2VYSnBaMmgwSURJd01qQWdRV1J2WW1WY2JpQXFYRzRnS2lBZ1RHbGpaVzV6WldRZ2RXNWtaWElnZEdobElFRndZV05vWlNCTWFXTmxibk5sTENCV1pYSnphVzl1SURJdU1DQW9kR2hsSUZ3aVRHbGpaVzV6WlZ3aUtUdGNiaUFxSUNCNWIzVWdiV0Y1SUc1dmRDQjFjMlVnZEdocGN5Qm1hV3hsSUdWNFkyVndkQ0JwYmlCamIyMXdiR2xoYm1ObElIZHBkR2dnZEdobElFeHBZMlZ1YzJVdVhHNGdLaUFnV1c5MUlHMWhlU0J2WW5SaGFXNGdZU0JqYjNCNUlHOW1JSFJvWlNCTWFXTmxibk5sSUdGMFhHNGdLbHh1SUNvZ0lDQWdJQ0JvZEhSd09pOHZkM2QzTG1Gd1lXTm9aUzV2Y21jdmJHbGpaVzV6WlhNdlRFbERSVTVUUlMweUxqQmNiaUFxWEc0Z0tpQWdWVzVzWlhOeklISmxjWFZwY21Wa0lHSjVJR0Z3Y0d4cFkyRmliR1VnYkdGM0lHOXlJR0ZuY21WbFpDQjBieUJwYmlCM2NtbDBhVzVuTENCemIyWjBkMkZ5WlZ4dUlDb2dJR1JwYzNSeWFXSjFkR1ZrSUhWdVpHVnlJSFJvWlNCTWFXTmxibk5sSUdseklHUnBjM1J5YVdKMWRHVmtJRzl1SUdGdUlGd2lRVk1nU1ZOY0lpQkNRVk5KVXl4Y2JpQXFJQ0JYU1ZSSVQxVlVJRmRCVWxKQlRsUkpSVk1nVDFJZ1EwOU9SRWxVU1U5T1V5QlBSaUJCVGxrZ1MwbE9SQ3dnWldsMGFHVnlJR1Y0Y0hKbGMzTWdiM0lnYVcxd2JHbGxaQzVjYmlBcUlDQlRaV1VnZEdobElFeHBZMlZ1YzJVZ1ptOXlJSFJvWlNCemNHVmphV1pwWXlCc1lXNW5kV0ZuWlNCbmIzWmxjbTVwYm1jZ2NHVnliV2x6YzJsdmJuTWdZVzVrWEc0Z0tpQWdiR2x0YVhSaGRHbHZibk1nZFc1a1pYSWdkR2hsSUV4cFkyVnVjMlV1WEc0Z0tpOWNibHh1YVcxd2IzSjBJQ29nWVhNZ1VtVmhZM1FnWm5KdmJTQW5jbVZoWTNRbk8xeHVhVzF3YjNKMElIdERiMjF3YjI1bGJuUlVlWEJsZlNCbWNtOXRJQ2R5WldGamRDYzdYRzVjYm1sdGNHOXlkQ0I3UldScGRHOXlVR3hoWTJWSWIyeGtaWEo5SUdaeWIyMGdYQ0l1TDJOdmJXMXZiaTl3YkdGalpXaHZiR1JsY2x3aU8xeHVYRzVsZUhCdmNuUWdhVzUwWlhKbVlXTmxJRWhoYzBKaGMyVkRjM05EYkdGemN5QjdYRzRnSUNBZ1ltRnpaVU56YzBOc1lYTnpQem9nYzNSeWFXNW5YRzU5WEc1Y2JtVjRjRzl5ZENCcGJuUmxjbVpoWTJVZ1EyOXlaVU52YlhCdmJtVnVkRTF2WkdWc0lHVjRkR1Z1WkhNZ1NHRnpRbUZ6WlVOemMwTnNZWE56ZTF4dUlDQWdJR2hwWkdWUWJHRmpaVWh2YkdSbGNqODZJR0p2YjJ4bFlXNWNiaUFnSUNCcGMwbHVSV1JwZEc5eVB6cGliMjlzWldGdVhHNTlYRzVjYm1WNGNHOXlkQ0JwYm5SbGNtWmhZMlVnUTI5eVpVTnZiWEJ2Ym1WdWRGTjBZWFJsSUh0Y2JseHVmVnh1WEc1bGVIQnZjblFnWTI5dWMzUWdkMmwwYUZOMFlXNWtZWEprUW1GelpVTnpjME5zWVhOeklEMGdQRTBnWlhoMFpXNWtjeUJEYjNKbFEyOXRjRzl1Wlc1MFRXOWtaV3crWEc0b1hHNGdJQ0FnUTI5dGNHOXVaVzUwT2tOdmJYQnZibVZ1ZEZSNWNHVThUVDRzWEc0Z0lDQWdaR1ZtWVhWc2RFSmhjMlZEYzNORGJHRnpjenB6ZEhKcGJtZGNiaWs2VW1WaFkzUXVRMjl0Y0c5dVpXNTBWSGx3WlR4TlBpQWdQVDRnZTF4dUlDQWdJSEpsZEhWeWJpQW9jSEp2Y0hNNlRTa2dQVDRnZTF4dVhHNGdJQ0FnSUNBZ0lHTnZibk4wSUdKaGMyVkRjM05EYkdGemN5QTlJSEJ5YjNCekxtSmhjMlZEYzNORGJHRnpjenRjYmlBZ0lDQWdJQ0FnWTI5dWMzUWdkRzlDWlZWelpXUkRjM05EYkdGemN5QTlJR0poYzJWRGMzTkRiR0Z6Y3lBbUppQmlZWE5sUTNOelEyeGhjM011ZEhKcGJTZ3BMbXhsYm1kMGFDQStJREFnUHlCaVlYTmxRM056UTJ4aGMzTWdPaUJrWldaaGRXeDBRbUZ6WlVOemMwTnNZWE56TzF4dVhHNGdJQ0FnSUNBZ0lHTnZibk4wSUcxbGNtZGxaRkJ5YjNCek9pQk5QU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQXVMaTV3Y205d2N5eGNiaUFnSUNBZ0lDQWdJQ0FnSUdKaGMyVkRjM05EYkdGemN6b2dkRzlDWlZWelpXUkRjM05EYkdGemMxeHVJQ0FnSUNBZ0lDQjlPMXh1WEc0Z0lDQWdJQ0FnSUhKbGRIVnliaUE4UTI5dGNHOXVaVzUwSUhzdUxpNXRaWEpuWldSUWNtOXdjMzBnTHo0N1hHNGdJQ0FnZlZ4dWZUdGNibHh1Wlhod2IzSjBJR052Ym5OMElIZHBkR2hEYjI1a2FYUnBiMjVoYkZCc1lXTmxTRzlzWkdWeUlEMGdQRTBnWlhoMFpXNWtjeUJEYjNKbFEyOXRjRzl1Wlc1MFRXOWtaV3crWEc0Z0lDQWdJQ0FnSUNBZ0lDQW9YRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdRMjl0Y0c5dVpXNTBPa052YlhCdmJtVnVkRlI1Y0dVOFRUNHNJRnh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJR2x6Ulcxd2RIazZLSEJ5YjNCek9rMHBJRDArSUdKdmIyeGxZVzRzWEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnWTI5dGNHOXVaVzUwVkdsMGJHVS9Pbk4wY21sdVp5d2daVzF3ZEhsVVpYaDBQenB6ZEhKcGJtZGNiaUFnSUNBZ0lDQWdJQ0FnSUNrNlVtVmhZM1F1UTI5dGNHOXVaVzUwVkhsd1pUeE5QaUFnUFQ0Z2UxeHVJQ0FnSUhKbGRIVnliaUFvY0hKdmNITTZUU2tnUFQ0Z2UxeHVYRzRnSUNBZ0lDQWdJR052Ym5OMElHbHpSVzF3ZEhsU1pYTjFiSFE2WW05dmJHVmhiaUE5SUdselJXMXdkSGtvY0hKdmNITXBPMXh1SUNBZ0lDQWdJQ0JqYjI1emRDQjdhR2xrWlZCc1lXTmxTRzlzWkdWeUlEMGdabUZzYzJVc0lHbHpTVzVGWkdsMGIzSWdQU0JtWVd4elpYMGdQU0J3Y205d2N6dGNibHh1SUNBZ0lDQWdJQ0J5WlhSMWNtNGdLRnh1SUNBZ0lDQWdJQ0FnSUNBZ1BENWNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQjdJQ0ZwYzBWdGNIUjVVbVZ6ZFd4MElDWW1YRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdQRU52YlhCdmJtVnVkQ0I3TGk0dWNISnZjSE45SUM4K1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2ZWeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lIdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnS0dselJXMXdkSGxTWlhOMWJIUWdKaVlnYVhOSmJrVmthWFJ2Y2lBbUppQWhhR2xrWlZCc1lXTmxTRzlzWkdWeUtTQW1KbHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBOFJXUnBkRzl5VUd4aFkyVkliMnhrWlhKY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUdWdGNIUjVWR1Y0ZEVGd2NHVnVaRDE3Wlcxd2RIbFVaWGgwZlZ4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnWTI5dGNHOXVaVzUwVkdsMGJHVTllMk52YlhCdmJtVnVkRlJwZEd4bGZWeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0F2UGx4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUgxY2JpQWdJQ0FnSUNBZ0lDQWdJRHd2UGx4dUlDQWdJQ0FnSUNBcE8xeHVJQ0FnSUgxY2JuMDdJbDE5IiwiLypcbiAqICBDb3B5cmlnaHQgMjAyMCBBZG9iZVxuICpcbiAqICBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqICBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgICAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqICBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiAgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqICBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHdpdGhDb25kaXRpb25hbFBsYWNlSG9sZGVyLCB3aXRoU3RhbmRhcmRCYXNlQ3NzQ2xhc3MgfSBmcm9tIFwiLi4vLi4vLi4vQWJzdHJhY3RDb3JlQ29tcG9uZW50XCI7XG5pbXBvcnQgeyBSb3V0ZWRMaW5rIH0gZnJvbSBcIi4uLy4uLy4uL3JvdXRpbmcvUm91dGVkTGlua1wiO1xuaW1wb3J0IHsgSW1hZ2VWMklzRW1wdHlGbiB9IGZyb20gXCIuL0ltYWdlVjJJc0VtcHR5Rm5cIjtcbmNvbnN0IEltYWdlVjJJbm5lckNvbnRlbnRzID0gKHByb3BzKSA9PiB7XG4gICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KFJlYWN0LkZyYWdtZW50LCBudWxsLFxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiaW1nXCIsIHsgc3JjOiBwcm9wcy5zcmMsIGNsYXNzTmFtZTogcHJvcHMuYmFzZUNzc0NsYXNzICsgJ19faW1hZ2UnLCBhbHQ6IHByb3BzLmFsdCB9KSxcbiAgICAgICAgISEocHJvcHMudGl0bGUpICYmIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIsIHsgY2xhc3NOYW1lOiBwcm9wcy5iYXNlQ3NzQ2xhc3MgKyAnX190aXRsZScsIGl0ZW1Qcm9wOiBcImNhcHRpb25cIiB9LCBwcm9wcy50aXRsZSksXG4gICAgICAgIHByb3BzLmRpc3BsYXlQb3B1cFRpdGxlICYmICghIXByb3BzLnRpdGxlKSAmJiBSZWFjdC5jcmVhdGVFbGVtZW50KFwibWV0YVwiLCB7IGl0ZW1Qcm9wOiBcImNhcHRpb25cIiwgY29udGVudDogcHJvcHMudGl0bGUgfSkpKTtcbn07XG5jb25zdCBJbWFnZVYyQ29udGVudHMgPSAocHJvcHMpID0+IHtcbiAgICBpZiAocHJvcHMubGluayAmJiBwcm9wcy5saW5rLnRyaW0oKS5sZW5ndGggPiAwKSB7XG4gICAgICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChSb3V0ZWRMaW5rLCB7IGNsYXNzTmFtZTogcHJvcHMuYmFzZUNzc0NsYXNzICsgJ19fbGluaycsIGlzUm91dGVkOiBwcm9wcy5yb3V0ZWQsIHRvOiBwcm9wcy5saW5rIH0sXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KEltYWdlVjJJbm5lckNvbnRlbnRzLCBPYmplY3QuYXNzaWduKHt9LCBwcm9wcykpKSk7XG4gICAgfVxuICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KEltYWdlVjJJbm5lckNvbnRlbnRzLCBPYmplY3QuYXNzaWduKHt9LCBwcm9wcykpO1xufTtcbmNvbnN0IEltYWdlVjJJbXBsID0gKHByb3BzKSA9PiB7XG4gICAgY29uc3QgeyBpc0luRWRpdG9yID0gZmFsc2UgfSA9IHByb3BzO1xuICAgIGNvbnN0IGNzc0NsYXNzTmFtZSA9IChpc0luRWRpdG9yKSA/IHByb3BzLmJhc2VDc3NDbGFzcyArICcgY3EtZGQtaW1hZ2UnIDogcHJvcHMuYmFzZUNzc0NsYXNzO1xuICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzTmFtZTogY3NzQ2xhc3NOYW1lIH0sXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoSW1hZ2VWMkNvbnRlbnRzLCBPYmplY3QuYXNzaWduKHt9LCBwcm9wcykpKSk7XG59O1xuY29uc3QgSW1hZ2VWMiA9IChwcm9wcykgPT4ge1xuICAgIGNvbnN0IFdyYXBwZWQgPSB3aXRoQ29uZGl0aW9uYWxQbGFjZUhvbGRlcih3aXRoU3RhbmRhcmRCYXNlQ3NzQ2xhc3MoSW1hZ2VWMkltcGwsIFwiY21wLWltYWdlXCIpLCBJbWFnZVYySXNFbXB0eUZuLCBcIkltYWdlIFYyXCIpO1xuICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFdyYXBwZWQsIE9iamVjdC5hc3NpZ24oe30sIHByb3BzKSk7XG59O1xuZXhwb3J0IGRlZmF1bHQgSW1hZ2VWMjtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaVNXMWhaMlZXTWk1cWN5SXNJbk52ZFhKalpWSnZiM1FpT2lJaUxDSnpiM1Z5WTJWeklqcGJJa2x0WVdkbFZqSXVkSE40SWwwc0ltNWhiV1Z6SWpwYlhTd2liV0Z3Y0dsdVozTWlPaUpCUVVGQk96czdPenM3T3pzN096czdPenRIUVdOSE8wRkJSVWdzVDBGQlR5eExRVUZyUWl4TlFVRk5MRTlCUVU4c1EwRkJRenRCUVVOMlF5eFBRVUZQTEVWQlFVTXNNRUpCUVRCQ0xFVkJRVVVzZDBKQlFYZENMRVZCUVVNc1RVRkJUU3huUTBGQlowTXNRMEZCUXp0QlFVVndSeXhQUVVGUExFVkJRVU1zVlVGQlZTeEZRVUZETEUxQlFVMHNOa0pCUVRaQ0xFTkJRVU03UVVGRGRrUXNUMEZCVHl4RlFVRkRMR2RDUVVGblFpeEZRVUZETEUxQlFVMHNiMEpCUVc5Q0xFTkJRVU03UVVGWGNFUXNUVUZCVFN4dlFrRkJiMElzUjBGQlJ5eERRVUZETEV0QlFXdENMRVZCUVVVc1JVRkJSVHRKUVVOb1JDeFBRVUZQTEVOQlEwZzdVVUZEU1N3MlFrRkJTeXhIUVVGSExFVkJRVVVzUzBGQlN5eERRVUZETEVkQlFVY3NSVUZEWkN4VFFVRlRMRVZCUVVVc1MwRkJTeXhEUVVGRExGbEJRVmtzUjBGQlJ5eFRRVUZUTEVWQlEzcERMRWRCUVVjc1JVRkJSU3hMUVVGTExFTkJRVU1zUjBGQlJ5eEhRVUZITzFGQlJXeENMRU5CUVVNc1EwRkJReXhEUVVGRExFdEJRVXNzUTBGQlF5eExRVUZMTEVOQlFVTXNTVUZCU1N3NFFrRkJUU3hUUVVGVExFVkJRVVVzUzBGQlN5eERRVUZETEZsQlFWa3NSMEZCUnl4VFFVRlRMRVZCUVVVc1VVRkJVU3hGUVVGRExGTkJRVk1zU1VGQlJTeExRVUZMTEVOQlFVTXNTMEZCU3l4RFFVRlJPMUZCUnpOSExFdEJRVXNzUTBGQlF5eHBRa0ZCYVVJc1NVRkJTU3hEUVVGRExFTkJRVU1zUTBGQlF5eExRVUZMTEVOQlFVTXNTMEZCU3l4RFFVRkRMRWxCUVVrc09FSkJRVTBzVVVGQlVTeEZRVUZETEZOQlFWTXNSVUZCUXl4UFFVRlBMRVZCUVVVc1MwRkJTeXhEUVVGRExFdEJRVXNzUjBGQlJ5eERRVVZ1Unl4RFFVTk9MRU5CUVVNN1FVRkRUaXhEUVVGRExFTkJRVU03UVVGRlJpeE5RVUZOTEdWQlFXVXNSMEZCUnl4RFFVRkRMRXRCUVd0Q0xFVkJRVVVzUlVGQlJUdEpRVU16UXl4SlFVRkpMRXRCUVVzc1EwRkJReXhKUVVGSkxFbEJRVWtzUzBGQlN5eERRVUZETEVsQlFVa3NRMEZCUXl4SlFVRkpMRVZCUVVVc1EwRkJReXhOUVVGTkxFZEJRVWNzUTBGQlF5eEZRVUZETzFGQlF6TkRMRTlCUVU4c1EwRkRTQ3h2UWtGQlF5eFZRVUZWTEVsQlFVTXNVMEZCVXl4RlFVRkZMRXRCUVVzc1EwRkJReXhaUVVGWkxFZEJRVWNzVVVGQlVTeEZRVUZGTEZGQlFWRXNSVUZCUlN4TFFVRkxMRU5CUVVNc1RVRkJUU3hGUVVGRkxFVkJRVVVzUlVGQlJTeExRVUZMTEVOQlFVTXNTVUZCU1R0WlFVTjRSaXh2UWtGQlF5eHZRa0ZCYjBJc2IwSkJRVXNzUzBGQlN5eEZRVUZITEVOQlEzcENMRU5CUTJoQ0xFTkJRVUU3UzBGRFNqdEpRVU5FTEU5QlFVOHNiMEpCUVVNc2IwSkJRVzlDTEc5Q1FVRkxMRXRCUVVzc1JVRkJSeXhEUVVGQk8wRkJRemRETEVOQlFVTXNRMEZCUXp0QlFVVkdMRTFCUVUwc1YwRkJWeXhIUVVGSExFTkJRVU1zUzBGQmEwSXNSVUZCUlN4RlFVRkZPMGxCUlhaRExFMUJRVTBzUlVGQlF5eFZRVUZWTEVkQlFVY3NTMEZCU3l4RlFVRkRMRWRCUVVjc1MwRkJTeXhEUVVGRE8wbEJRMjVETEUxQlFVMHNXVUZCV1N4SFFVRkhMRU5CUVVNc1ZVRkJWU3hEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEV0QlFVc3NRMEZCUXl4WlFVRlpMRWRCUVVjc1kwRkJZeXhEUVVGRExFTkJRVU1zUTBGQlF5eExRVUZMTEVOQlFVTXNXVUZCV1N4RFFVRkRPMGxCUlRWR0xFOUJRVThzUTBGRFNDdzJRa0ZCU3l4VFFVRlRMRVZCUVVVc1dVRkJXVHRSUVVONFFpeHZRa0ZCUXl4bFFVRmxMRzlDUVVGTExFdEJRVXNzUlVGQlJ5eERRVU16UWl4RFFVTlVMRU5CUVVFN1FVRkZUaXhEUVVGRExFTkJRVU03UVVGRlJpeE5RVUZOTEU5QlFVOHNSMEZCUnl4RFFVRkRMRXRCUVd0Q0xFVkJRVVVzUlVGQlJUdEpRVVZ1UXl4TlFVRk5MRTlCUVU4c1IwRkJSeXd3UWtGQk1FSXNRMEZCUXl4M1FrRkJkMElzUTBGQlF5eFhRVUZYTEVWQlFVVXNWMEZCVnl4RFFVRkRMRVZCUVVVc1owSkJRV2RDTEVWQlFVVXNWVUZCVlN4RFFVRkRMRU5CUVVNN1NVRkROMGdzVDBGQlR5eHZRa0ZCUXl4UFFVRlBMRzlDUVVGTExFdEJRVXNzUlVGQlJ5eERRVUZCTzBGQlEyaERMRU5CUVVNc1EwRkJRenRCUVVWR0xHVkJRV1VzVDBGQlR5eERRVUZESWl3aWMyOTFjbU5sYzBOdmJuUmxiblFpT2xzaUx5cGNiaUFxSUNCRGIzQjVjbWxuYUhRZ01qQXlNQ0JCWkc5aVpWeHVJQ3BjYmlBcUlDQk1hV05sYm5ObFpDQjFibVJsY2lCMGFHVWdRWEJoWTJobElFeHBZMlZ1YzJVc0lGWmxjbk5wYjI0Z01pNHdJQ2gwYUdVZ1hDSk1hV05sYm5ObFhDSXBPMXh1SUNvZ0lIbHZkU0J0WVhrZ2JtOTBJSFZ6WlNCMGFHbHpJR1pwYkdVZ1pYaGpaWEIwSUdsdUlHTnZiWEJzYVdGdVkyVWdkMmwwYUNCMGFHVWdUR2xqWlc1elpTNWNiaUFxSUNCWmIzVWdiV0Y1SUc5aWRHRnBiaUJoSUdOdmNIa2diMllnZEdobElFeHBZMlZ1YzJVZ1lYUmNiaUFxWEc0Z0tpQWdJQ0FnSUdoMGRIQTZMeTkzZDNjdVlYQmhZMmhsTG05eVp5OXNhV05sYm5ObGN5OU1TVU5GVGxORkxUSXVNRnh1SUNwY2JpQXFJQ0JWYm14bGMzTWdjbVZ4ZFdseVpXUWdZbmtnWVhCd2JHbGpZV0pzWlNCc1lYY2diM0lnWVdkeVpXVmtJSFJ2SUdsdUlIZHlhWFJwYm1jc0lITnZablIzWVhKbFhHNGdLaUFnWkdsemRISnBZblYwWldRZ2RXNWtaWElnZEdobElFeHBZMlZ1YzJVZ2FYTWdaR2x6ZEhKcFluVjBaV1FnYjI0Z1lXNGdYQ0pCVXlCSlUxd2lJRUpCVTBsVExGeHVJQ29nSUZkSlZFaFBWVlFnVjBGU1VrRk9WRWxGVXlCUFVpQkRUMDVFU1ZSSlQwNVRJRTlHSUVGT1dTQkxTVTVFTENCbGFYUm9aWElnWlhod2NtVnpjeUJ2Y2lCcGJYQnNhV1ZrTGx4dUlDb2dJRk5sWlNCMGFHVWdUR2xqWlc1elpTQm1iM0lnZEdobElITndaV05wWm1saklHeGhibWQxWVdkbElHZHZkbVZ5Ym1sdVp5QndaWEp0YVhOemFXOXVjeUJoYm1SY2JpQXFJQ0JzYVcxcGRHRjBhVzl1Y3lCMWJtUmxjaUIwYUdVZ1RHbGpaVzV6WlM1Y2JpQXFMMXh1WEc1cGJYQnZjblFnVW1WaFkzUXNJSHREYjIxd2IyNWxiblI5SUdaeWIyMGdKM0psWVdOMEp6dGNibWx0Y0c5eWRDQjdkMmwwYUVOdmJtUnBkR2x2Ym1Gc1VHeGhZMlZJYjJ4a1pYSXNJSGRwZEdoVGRHRnVaR0Z5WkVKaGMyVkRjM05EYkdGemMzMGdabkp2YlNCY0lpNHVMeTR1THk0dUwwRmljM1J5WVdOMFEyOXlaVU52YlhCdmJtVnVkRndpTzF4dWFXMXdiM0owSUh0U2IzVjBaV1JEYjNKbFEyOXRjRzl1Wlc1MFRXOWtaV3g5SUdaeWIyMGdYQ0l1TGk4dUxpOHVMaTl5YjNWMGFXNW5MMUp2ZFhSbFpFTnZjbVZEYjIxd2IyNWxiblJjSWp0Y2JtbHRjRzl5ZENCN1VtOTFkR1ZrVEdsdWEzMGdabkp2YlNCY0lpNHVMeTR1THk0dUwzSnZkWFJwYm1jdlVtOTFkR1ZrVEdsdWExd2lPMXh1YVcxd2IzSjBJSHRKYldGblpWWXlTWE5GYlhCMGVVWnVmU0JtY205dElGd2lMaTlKYldGblpWWXlTWE5GYlhCMGVVWnVYQ0k3WEc1Y2JseHVaWGh3YjNKMElHbHVkR1Z5Wm1GalpTQkpiV0ZuWlZZeVRXOWtaV3dnWlhoMFpXNWtjeUJTYjNWMFpXUkRiM0psUTI5dGNHOXVaVzUwVFc5a1pXeDdYRzRnSUNBZ2MzSmpPaUJ6ZEhKcGJtZGNiaUFnSUNCaGJIUTZJSE4wY21sdVoxeHVJQ0FnSUdScGMzQnNZWGxRYjNCMWNGUnBkR3hsUHpvZ1ltOXZiR1ZoYmx4dUlDQWdJSFJwZEd4bFB6b2djM1J5YVc1blhHNGdJQ0FnYkdsdWF6ODZJSE4wY21sdVoxeHVmVnh1WEc1amIyNXpkQ0JKYldGblpWWXlTVzV1WlhKRGIyNTBaVzUwY3lBOUlDaHdjbTl3Y3pwSmJXRm5aVll5VFc5a1pXd3BJRDArSUh0Y2JpQWdJQ0J5WlhSMWNtNGdLRnh1SUNBZ0lDQWdJQ0E4UGx4dUlDQWdJQ0FnSUNBZ0lDQWdQR2x0WnlCemNtTTllM0J5YjNCekxuTnlZMzFjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnWTJ4aGMzTk9ZVzFsUFh0d2NtOXdjeTVpWVhObFEzTnpRMnhoYzNNZ0t5QW5YMTlwYldGblpTZDlYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJR0ZzZEQxN2NISnZjSE11WVd4MGZTOCtYRzRnSUNBZ0lDQWdJQ0FnSUNCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lTRW9jSEp2Y0hNdWRHbDBiR1VwSUNZbUlEeHpjR0Z1SUdOc1lYTnpUbUZ0WlQxN2NISnZjSE11WW1GelpVTnpjME5zWVhOeklDc2dKMTlmZEdsMGJHVW5mU0JwZEdWdFVISnZjRDFjSW1OaGNIUnBiMjVjSWo1N2NISnZjSE11ZEdsMGJHVjlQQzl6Y0dGdVBseHVJQ0FnSUNBZ0lDQWdJQ0FnZlZ4dUlDQWdJQ0FnSUNBZ0lDQWdlMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJSEJ5YjNCekxtUnBjM0JzWVhsUWIzQjFjRlJwZEd4bElDWW1JQ2doSVhCeWIzQnpMblJwZEd4bEtTQW1KaUE4YldWMFlTQnBkR1Z0VUhKdmNEMWNJbU5oY0hScGIyNWNJaUJqYjI1MFpXNTBQWHR3Y205d2N5NTBhWFJzWlgwdlBseHVJQ0FnSUNBZ0lDQWdJQ0FnZlZ4dUlDQWdJQ0FnSUNBOEx6NWNiaUFnSUNBcE8xeHVmVHRjYmx4dVkyOXVjM1FnU1cxaFoyVldNa052Ym5SbGJuUnpJRDBnS0hCeWIzQnpPa2x0WVdkbFZqSk5iMlJsYkNrZ1BUNGdlMXh1SUNBZ0lHbG1LQ0J3Y205d2N5NXNhVzVySUNZbUlIQnliM0J6TG14cGJtc3VkSEpwYlNncExteGxibWQwYUNBK0lEQXBlMXh1SUNBZ0lDQWdJQ0J5WlhSMWNtNGdLRnh1SUNBZ0lDQWdJQ0FnSUNBZ1BGSnZkWFJsWkV4cGJtc2dZMnhoYzNOT1lXMWxQWHR3Y205d2N5NWlZWE5sUTNOelEyeGhjM01nS3lBblgxOXNhVzVySjMwZ2FYTlNiM1YwWldROWUzQnliM0J6TG5KdmRYUmxaSDBnZEc4OWUzQnliM0J6TG14cGJtdDlQbHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJRHhKYldGblpWWXlTVzV1WlhKRGIyNTBaVzUwY3lCN0xpNHVjSEp2Y0hOOUx6NWNiaUFnSUNBZ0lDQWdJQ0FnSUR3dlVtOTFkR1ZrVEdsdWF6NWNiaUFnSUNBZ0lDQWdLVnh1SUNBZ0lIMWNiaUFnSUNCeVpYUjFjbTRnUEVsdFlXZGxWakpKYm01bGNrTnZiblJsYm5SeklIc3VMaTV3Y205d2MzMHZQbHh1ZlR0Y2JseHVZMjl1YzNRZ1NXMWhaMlZXTWtsdGNHd2dQU0FvY0hKdmNITTZTVzFoWjJWV01rMXZaR1ZzS1NBOVBpQjdYRzVjYmlBZ0lDQmpiMjV6ZENCN2FYTkpia1ZrYVhSdmNpQTlJR1poYkhObGZTQTlJSEJ5YjNCek8xeHVJQ0FnSUdOdmJuTjBJR056YzBOc1lYTnpUbUZ0WlNBOUlDaHBjMGx1UldScGRHOXlLU0EvSUhCeWIzQnpMbUpoYzJWRGMzTkRiR0Z6Y3lBcklDY2dZM0V0WkdRdGFXMWhaMlVuSURvZ2NISnZjSE11WW1GelpVTnpjME5zWVhOek8xeHVYRzRnSUNBZ0lISmxkSFZ5YmlBb1hHNGdJQ0FnSUNBZ0lDQThaR2wySUdOc1lYTnpUbUZ0WlQxN1kzTnpRMnhoYzNOT1lXMWxmVDVjYmlBZ0lDQWdJQ0FnSUNBZ0lDQThTVzFoWjJWV01rTnZiblJsYm5SeklIc3VMaTV3Y205d2MzMHZQbHh1SUNBZ0lDQWdJQ0FnUEM5a2FYWStYRzRnSUNBZ0lDbGNibHh1ZlR0Y2JseHVZMjl1YzNRZ1NXMWhaMlZXTWlBOUlDaHdjbTl3Y3pwSmJXRm5aVll5VFc5a1pXd3BJRDArSUh0Y2JseHVJQ0FnSUdOdmJuTjBJRmR5WVhCd1pXUWdQU0IzYVhSb1EyOXVaR2wwYVc5dVlXeFFiR0ZqWlVodmJHUmxjaWgzYVhSb1UzUmhibVJoY21SQ1lYTmxRM056UTJ4aGMzTW9TVzFoWjJWV01rbHRjR3dzSUZ3aVkyMXdMV2x0WVdkbFhDSXBMQ0JKYldGblpWWXlTWE5GYlhCMGVVWnVMQ0JjSWtsdFlXZGxJRll5WENJcE8xeHVJQ0FnSUhKbGRIVnliaUE4VjNKaGNIQmxaQ0I3TGk0dWNISnZjSE45THo1Y2JuMDdYRzVjYm1WNGNHOXlkQ0JrWldaaGRXeDBJRWx0WVdkbFZqSTdJbDE5IiwiZXhwb3J0IGZ1bmN0aW9uIEltYWdlVjJJc0VtcHR5Rm4ocHJvcHMpIHtcbiAgICByZXR1cm4gKCFwcm9wcy5zcmMpIHx8IHByb3BzLnNyYy50cmltKCkubGVuZ3RoID09PSAwO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pU1cxaFoyVldNa2x6Ulcxd2RIbEdiaTVxY3lJc0luTnZkWEpqWlZKdmIzUWlPaUlpTENKemIzVnlZMlZ6SWpwYklrbHRZV2RsVmpKSmMwVnRjSFI1Um00dWRITWlYU3dpYm1GdFpYTWlPbHRkTENKdFlYQndhVzVuY3lJNklrRkJSVUVzVFVGQlRTeFZRVUZWTEdkQ1FVRm5RaXhEUVVGRExFdEJRV3RDTzBsQlF5OURMRTlCUVU4c1EwRkJReXhEUVVGRExFdEJRVXNzUTBGQlF5eEhRVUZITEVOQlFVTXNTVUZCU1N4TFFVRkxMRU5CUVVNc1IwRkJSeXhEUVVGRExFbEJRVWtzUlVGQlJTeERRVUZETEUxQlFVMHNTMEZCU3l4RFFVRkRMRU5CUVVNN1FVRkRla1FzUTBGQlF5SXNJbk52ZFhKalpYTkRiMjUwWlc1MElqcGJJbWx0Y0c5eWRDQjdTVzFoWjJWV01rMXZaR1ZzZlNCbWNtOXRJRndpTGk5SmJXRm5aVll5WENJN1hHNWNibVY0Y0c5eWRDQm1kVzVqZEdsdmJpQkpiV0ZuWlZZeVNYTkZiWEIwZVVadUtIQnliM0J6T2tsdFlXZGxWakpOYjJSbGJDa2dlMXh1SUNBZ0lISmxkSFZ5YmlBb0lYQnliM0J6TG5OeVl5a2dmSHdnY0hKdmNITXVjM0pqTG5SeWFXMG9LUzVzWlc1bmRHZ2dQVDA5SURBN1hHNTlYRzRpWFgwPSIsIi8qXG4gKiAgQ29weXJpZ2h0IDIwMjAgQWRvYmVcbiAqXG4gKiAgTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqICB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiAgWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICAgICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiAgVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqICBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqICBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiAgbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5jb25zdCBERUZBVUxUX0VNUFRZX1RFWFRfTEFCRUwgPSAnUGxlYXNlIGNvbmZpZ3VyZSB0aGUgY29tcG9uZW50JztcbmV4cG9ydCBjb25zdCBFZGl0b3JQbGFjZUhvbGRlciA9IChwcm9wcykgPT4ge1xuICAgIGNvbnN0IHBhcnQxID0gKHByb3BzLmNvbXBvbmVudFRpdGxlICE9IG51bGwgJiYgcHJvcHMuY29tcG9uZW50VGl0bGUubGVuZ3RoID4gMCkgPyBwcm9wcy5jb21wb25lbnRUaXRsZSArICcgLSAnIDogJyc7XG4gICAgY29uc3QgcGFydDIgPSAocHJvcHMuZW1wdHlUZXh0QXBwZW5kICE9IG51bGwpID8gcHJvcHMuZW1wdHlUZXh0QXBwZW5kIDogREVGQVVMVF9FTVBUWV9URVhUX0xBQkVMO1xuICAgIGNvbnN0IGVtcHR5VGV4dCA9IHBhcnQxICsgcGFydDI7XG4gICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3NOYW1lOiAnY3EtcGxhY2Vob2xkZXInICsgKHByb3BzLmNsYXNzQXBwZW5kICE9IG51bGwgPyAnICcgKyBwcm9wcy5jbGFzc0FwcGVuZCA6ICcnKSB9LCBlbXB0eVRleHQpKTtcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2ljR3hoWTJWb2IyeGtaWEl1YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pSWl3aWMyOTFjbU5sY3lJNld5SndiR0ZqWldodmJHUmxjaTUwYzNnaVhTd2libUZ0WlhNaU9sdGRMQ0p0WVhCd2FXNW5jeUk2SWtGQlFVRTdPenM3T3pzN096czdPenM3TzBkQlkwYzdRVUZEU0N4UFFVRlBMRXRCUVd0Q0xFMUJRVTBzVDBGQlR5eERRVUZETzBGQlQzWkRMRTFCUVUwc2QwSkJRWGRDTEVkQlFVY3NaME5CUVdkRExFTkJRVU03UVVGRmJFVXNUVUZCVFN4RFFVRkRMRTFCUVUwc2FVSkJRV2xDTEVkQlFVY3NRMEZCUXl4TFFVRnpRaXhGUVVGRkxFVkJRVVU3U1VGRmVFUXNUVUZCVFN4TFFVRkxMRWRCUVZjc1EwRkJReXhMUVVGTExFTkJRVU1zWTBGQll5eEpRVUZKTEVsQlFVa3NTVUZCU1N4TFFVRkxMRU5CUVVNc1kwRkJZeXhEUVVGRExFMUJRVTBzUjBGQlJ5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVVc1MwRkJTeXhEUVVGRExHTkJRV01zUjBGQlNTeExRVUZMTEVOQlFVTXNRMEZCUXl4RFFVRkRMRVZCUVVVc1EwRkJRenRKUVVNNVNDeE5RVUZOTEV0QlFVc3NSMEZCVnl4RFFVRkRMRXRCUVVzc1EwRkJReXhsUVVGbExFbEJRVWtzU1VGQlNTeERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkZMRXRCUVVzc1EwRkJReXhsUVVGbExFTkJRVU1zUTBGQlF5eERRVUZETEhkQ1FVRjNRaXhEUVVGRE8wbEJRekZITEUxQlFVMHNVMEZCVXl4SFFVRkhMRXRCUVVzc1IwRkJSeXhMUVVGTExFTkJRVU03U1VGRmFFTXNUMEZCVHl4RFFVTklMRFpDUVVOSkxGTkJRVk1zUlVGQlJTeG5Ra0ZCWjBJc1IwRkJSeXhEUVVGRExFdEJRVXNzUTBGQlF5eFhRVUZYTEVsQlFVa3NTVUZCU1N4RFFVRkJMRU5CUVVNc1EwRkJReXhIUVVGSExFZEJRVWNzUzBGQlN5eERRVUZETEZkQlFWY3NRMEZCUXl4RFFVRkRMRU5CUVVNc1JVRkJSU3hEUVVGRExFbEJRM1JHTEZOQlFWTXNRMEZEVWl4RFFVTlVMRU5CUVVFN1FVRkRUQ3hEUVVGRExFTkJRVU1pTENKemIzVnlZMlZ6UTI5dWRHVnVkQ0k2V3lJdktseHVJQ29nSUVOdmNIbHlhV2RvZENBeU1ESXdJRUZrYjJKbFhHNGdLbHh1SUNvZ0lFeHBZMlZ1YzJWa0lIVnVaR1Z5SUhSb1pTQkJjR0ZqYUdVZ1RHbGpaVzV6WlN3Z1ZtVnljMmx2YmlBeUxqQWdLSFJvWlNCY0lreHBZMlZ1YzJWY0lpazdYRzRnS2lBZ2VXOTFJRzFoZVNCdWIzUWdkWE5sSUhSb2FYTWdabWxzWlNCbGVHTmxjSFFnYVc0Z1kyOXRjR3hwWVc1alpTQjNhWFJvSUhSb1pTQk1hV05sYm5ObExseHVJQ29nSUZsdmRTQnRZWGtnYjJKMFlXbHVJR0VnWTI5d2VTQnZaaUIwYUdVZ1RHbGpaVzV6WlNCaGRGeHVJQ3BjYmlBcUlDQWdJQ0FnYUhSMGNEb3ZMM2QzZHk1aGNHRmphR1V1YjNKbkwyeHBZMlZ1YzJWekwweEpRMFZPVTBVdE1pNHdYRzRnS2x4dUlDb2dJRlZ1YkdWemN5QnlaWEYxYVhKbFpDQmllU0JoY0hCc2FXTmhZbXhsSUd4aGR5QnZjaUJoWjNKbFpXUWdkRzhnYVc0Z2QzSnBkR2x1Wnl3Z2MyOW1kSGRoY21WY2JpQXFJQ0JrYVhOMGNtbGlkWFJsWkNCMWJtUmxjaUIwYUdVZ1RHbGpaVzV6WlNCcGN5QmthWE4wY21saWRYUmxaQ0J2YmlCaGJpQmNJa0ZUSUVsVFhDSWdRa0ZUU1ZNc1hHNGdLaUFnVjBsVVNFOVZWQ0JYUVZKU1FVNVVTVVZUSUU5U0lFTlBUa1JKVkVsUFRsTWdUMFlnUVU1WklFdEpUa1FzSUdWcGRHaGxjaUJsZUhCeVpYTnpJRzl5SUdsdGNHeHBaV1F1WEc0Z0tpQWdVMlZsSUhSb1pTQk1hV05sYm5ObElHWnZjaUIwYUdVZ2MzQmxZMmxtYVdNZ2JHRnVaM1ZoWjJVZ1oyOTJaWEp1YVc1bklIQmxjbTFwYzNOcGIyNXpJR0Z1WkZ4dUlDb2dJR3hwYldsMFlYUnBiMjV6SUhWdVpHVnlJSFJvWlNCTWFXTmxibk5sTGx4dUlDb3ZYRzVwYlhCdmNuUWdVbVZoWTNRc0lIdERiMjF3YjI1bGJuUjlJR1p5YjIwZ0ozSmxZV04wSnp0Y2JseHVaWGh3YjNKMElHbHVkR1Z5Wm1GalpTQlFiR0ZqWlVodmJHUmxjazF2WkdWc0lIdGNiaUFnSUNCamIyMXdiMjVsYm5SVWFYUnNaVDg2SUhOMGNtbHVaMXh1SUNBZ0lHTnNZWE56UVhCd1pXNWtQem9nYzNSeWFXNW5YRzRnSUNBZ1pXMXdkSGxVWlhoMFFYQndaVzVrUHpvZ2MzUnlhVzVuWEc1OVhHNWpiMjV6ZENCRVJVWkJWVXhVWDBWTlVGUlpYMVJGV0ZSZlRFRkNSVXdnUFNBblVHeGxZWE5sSUdOdmJtWnBaM1Z5WlNCMGFHVWdZMjl0Y0c5dVpXNTBKenRjYmx4dVpYaHdiM0owSUdOdmJuTjBJRVZrYVhSdmNsQnNZV05sU0c5c1pHVnlJRDBnS0hCeWIzQnpPbEJzWVdObFNHOXNaR1Z5VFc5a1pXd3BJRDArSUh0Y2JseHVJQ0FnSUdOdmJuTjBJSEJoY25ReE9pQnpkSEpwYm1jZ1BTQW9jSEp2Y0hNdVkyOXRjRzl1Wlc1MFZHbDBiR1VnSVQwZ2JuVnNiQ0FtSmlCd2NtOXdjeTVqYjIxd2IyNWxiblJVYVhSc1pTNXNaVzVuZEdnZ1BpQXdLU0EvSUNCd2NtOXdjeTVqYjIxd2IyNWxiblJVYVhSc1pTQXJJQ0FuSUMwZ0p5QTZJQ2NuTzF4dUlDQWdJR052Ym5OMElIQmhjblF5T2lCemRISnBibWNnUFNBb2NISnZjSE11Wlcxd2RIbFVaWGgwUVhCd1pXNWtJQ0U5SUc1MWJHd3BJRDhnSUhCeWIzQnpMbVZ0Y0hSNVZHVjRkRUZ3Y0dWdVpDQTZJRVJGUmtGVlRGUmZSVTFRVkZsZlZFVllWRjlNUVVKRlREdGNiaUFnSUNCamIyNXpkQ0JsYlhCMGVWUmxlSFFnUFNCd1lYSjBNU0FySUhCaGNuUXlPMXh1WEc0Z0lDQWdjbVYwZFhKdUlDaGNiaUFnSUNBZ0lDQWdQR1JwZGx4dUlDQWdJQ0FnSUNBZ0lDQWdZMnhoYzNOT1lXMWxQWHNuWTNFdGNHeGhZMlZvYjJ4a1pYSW5JQ3NnS0hCeWIzQnpMbU5zWVhOelFYQndaVzVrSUNFOUlHNTFiR3cvSUNjZ0p5QXJJSEJ5YjNCekxtTnNZWE56UVhCd1pXNWtJRG9nSnljcGZUNWNiaUFnSUNBZ0lDQWdJQ0FnSUh0bGJYQjBlVlJsZUhSOVhHNGdJQ0FnSUNBZ0lEd3ZaR2wyUGx4dUlDQWdJQ2xjYm4wN0lsMTkiLCIvKlxuICogIENvcHlyaWdodCAyMDIwIEFkb2JlXG4gKlxuICogIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiAgeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICAgICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqICBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiAgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiAgU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgTGluayBhcyBSb3V0ZXJMaW5rIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG5leHBvcnQgY29uc3QgUm91dGVkTGluayA9IChwcm9wcykgPT4ge1xuICAgIGNvbnN0IHsgdG8sIGlzUm91dGVkLCAuLi5vdGhlclByb3BzIH0gPSBwcm9wcztcbiAgICBpZiAodG8gPT09IHVuZGVmaW5lZCB8fCB0by50cmltKCkubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFwiYVwiLCBPYmplY3QuYXNzaWduKHsgaHJlZjogJyMnIH0sIG90aGVyUHJvcHMpKTtcbiAgICB9XG4gICAgY29uc3QgaXNFeHRlcm5hbCA9IC9eaHR0cHM/OlxcL1xcLy8udGVzdCh0byk7XG4gICAgcmV0dXJuIGlzRXh0ZXJuYWwgfHwgIWlzUm91dGVkID9cbiAgICAgICAgKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJhXCIsIE9iamVjdC5hc3NpZ24oeyBocmVmOiB0byB9LCBvdGhlclByb3BzKSkpXG4gICAgICAgIDpcbiAgICAgICAgICAgIChSZWFjdC5jcmVhdGVFbGVtZW50KFJvdXRlckxpbmssIE9iamVjdC5hc3NpZ24oe30sIG90aGVyUHJvcHMsIHsgdG86IHRvIH0pKSk7XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pVW05MWRHVmtUR2x1YXk1cWN5SXNJbk52ZFhKalpWSnZiM1FpT2lJaUxDSnpiM1Z5WTJWeklqcGJJbEp2ZFhSbFpFeHBibXN1ZEhONElsMHNJbTVoYldWeklqcGJYU3dpYldGd2NHbHVaM01pT2lKQlFVRkJPenM3T3pzN096czdPenM3T3p0SFFXTkhPMEZCUlVnc1QwRkJUeXhMUVVGTExFMUJRVTBzVDBGQlR5eERRVUZETzBGQlF6RkNMRTlCUVU4c1JVRkJReXhKUVVGSkxFbEJRVWtzVlVGQlZTeEZRVUZETEUxQlFVMHNhMEpCUVd0Q0xFTkJRVU03UVVGUGNFUXNUVUZCVFN4RFFVRkRMRTFCUVUwc1ZVRkJWU3hIUVVGSExFTkJRVU1zUzBGQlpTeEZRVUZGTEVWQlFVVTdTVUZETVVNc1RVRkJUU3hGUVVGRExFVkJRVVVzUlVGQlJTeFJRVUZSTEVWQlFVVXNSMEZCUnl4VlFVRlZMRVZCUVVNc1IwRkJSeXhMUVVGTExFTkJRVU03U1VGRk5VTXNTVUZCUnl4RlFVRkZMRXRCUVVzc1UwRkJVeXhKUVVGSkxFVkJRVVVzUTBGQlF5eEpRVUZKTEVWQlFVVXNRMEZCUXl4TlFVRk5MRXRCUVVzc1EwRkJReXhGUVVGRE8xRkJRekZETEU5QlFVOHNlVU5CUVVjc1NVRkJTU3hGUVVGRkxFZEJRVWNzU1VGRFdDeFZRVUZWTEVWQlEyaENMRU5CUVVNN1MwRkRUanRKUVVORUxFMUJRVTBzVlVGQlZTeEhRVUZITEdOQlFXTXNRMEZCUXl4SlFVRkpMRU5CUVVNc1JVRkJSU3hEUVVGRExFTkJRVU03U1VGRk0wTXNUMEZCVHl4VlFVRlZMRWxCUVVrc1EwRkJReXhSUVVGUkxFTkJRVUVzUTBGQlF6dFJRVU16UWl4RFFVRkRMSGxEUVVOSExFbEJRVWtzUlVGQlJTeEZRVUZGTEVsQlEwb3NWVUZCVlN4RlFVTm9RaXhEUVVGRE8xRkJRMGdzUTBGQlF6dFpRVU5FTEVOQlFVVXNiMEpCUVVNc1ZVRkJWU3h2UWtGQlN5eFZRVUZWTEVsQlEyUXNSVUZCUlN4RlFVRkZMRVZCUVVVc1NVRkRiRUlzUTBGQlF5eERRVUZCTzBGQlExZ3NRMEZCUXl4RFFVRkRJaXdpYzI5MWNtTmxjME52Ym5SbGJuUWlPbHNpTHlwY2JpQXFJQ0JEYjNCNWNtbG5hSFFnTWpBeU1DQkJaRzlpWlZ4dUlDcGNiaUFxSUNCTWFXTmxibk5sWkNCMWJtUmxjaUIwYUdVZ1FYQmhZMmhsSUV4cFkyVnVjMlVzSUZabGNuTnBiMjRnTWk0d0lDaDBhR1VnWENKTWFXTmxibk5sWENJcE8xeHVJQ29nSUhsdmRTQnRZWGtnYm05MElIVnpaU0IwYUdseklHWnBiR1VnWlhoalpYQjBJR2x1SUdOdmJYQnNhV0Z1WTJVZ2QybDBhQ0IwYUdVZ1RHbGpaVzV6WlM1Y2JpQXFJQ0JaYjNVZ2JXRjVJRzlpZEdGcGJpQmhJR052Y0hrZ2IyWWdkR2hsSUV4cFkyVnVjMlVnWVhSY2JpQXFYRzRnS2lBZ0lDQWdJR2gwZEhBNkx5OTNkM2N1WVhCaFkyaGxMbTl5Wnk5c2FXTmxibk5sY3k5TVNVTkZUbE5GTFRJdU1GeHVJQ3BjYmlBcUlDQlZibXhsYzNNZ2NtVnhkV2x5WldRZ1lua2dZWEJ3YkdsallXSnNaU0JzWVhjZ2IzSWdZV2R5WldWa0lIUnZJR2x1SUhkeWFYUnBibWNzSUhOdlpuUjNZWEpsWEc0Z0tpQWdaR2x6ZEhKcFluVjBaV1FnZFc1a1pYSWdkR2hsSUV4cFkyVnVjMlVnYVhNZ1pHbHpkSEpwWW5WMFpXUWdiMjRnWVc0Z1hDSkJVeUJKVTF3aUlFSkJVMGxUTEZ4dUlDb2dJRmRKVkVoUFZWUWdWMEZTVWtGT1ZFbEZVeUJQVWlCRFQwNUVTVlJKVDA1VElFOUdJRUZPV1NCTFNVNUVMQ0JsYVhSb1pYSWdaWGh3Y21WemN5QnZjaUJwYlhCc2FXVmtMbHh1SUNvZ0lGTmxaU0IwYUdVZ1RHbGpaVzV6WlNCbWIzSWdkR2hsSUhOd1pXTnBabWxqSUd4aGJtZDFZV2RsSUdkdmRtVnlibWx1WnlCd1pYSnRhWE56YVc5dWN5QmhibVJjYmlBcUlDQnNhVzFwZEdGMGFXOXVjeUIxYm1SbGNpQjBhR1VnVEdsalpXNXpaUzVjYmlBcUwxeHVYRzVwYlhCdmNuUWdVbVZoWTNRZ1puSnZiU0FuY21WaFkzUW5PMXh1YVcxd2IzSjBJSHRNYVc1cklHRnpJRkp2ZFhSbGNreHBibXQ5SUdaeWIyMGdKM0psWVdOMExYSnZkWFJsY2kxa2IyMG5PMXh1WEc1bGVIQnZjblFnYVc1MFpYSm1ZV05sSUV4cGJtdFFjbTl3Y3lCN1hHNGdJQ0FnZEc4L09pQnpkSEpwYm1jN1hHNGdJQ0FnYVhOU2IzVjBaV1EvT2lCaWIyOXNaV0Z1TzF4dUlDQWdJRnR3Y205d09pQnpkSEpwYm1kZE9pQmhibmxjYm4xY2JtVjRjRzl5ZENCamIyNXpkQ0JTYjNWMFpXUk1hVzVySUQwZ0tIQnliM0J6T2t4cGJtdFFjbTl3Y3lrZ1BUNGdlMXh1SUNBZ0lHTnZibk4wSUh0MGJ5d2dhWE5TYjNWMFpXUXNJQzR1TG05MGFHVnlVSEp2Y0hOOUlEMGdjSEp2Y0hNN1hHNWNiaUFnSUNCcFppaDBieUE5UFQwZ2RXNWtaV1pwYm1Wa0lIeDhJSFJ2TG5SeWFXMG9LUzVzWlc1bmRHZ2dQVDA5SURBcGUxeHVJQ0FnSUNBZ0lDQnlaWFIxY200Z1BHRWdhSEpsWmoxN0p5TW5mVnh1SUNBZ0lDQWdJQ0FnSUNBZ2V5NHVMbTkwYUdWeVVISnZjSE45WEc0Z0lDQWdJQ0FnSUM4K08xeHVJQ0FnSUgxY2JpQWdJQ0JqYjI1emRDQnBjMFY0ZEdWeWJtRnNJRDBnTDE1b2RIUndjejg2WEZ3dlhGd3ZMeTUwWlhOMEtIUnZLVHRjYmx4dUlDQWdJSEpsZEhWeWJpQnBjMFY0ZEdWeWJtRnNJSHg4SUNGcGMxSnZkWFJsWkQ5Y2JpQWdJQ0FnSUNBZ0tEeGhYRzRnSUNBZ0lDQWdJQ0FnSUNCb2NtVm1QWHQwYjMxY2JpQWdJQ0FnSUNBZ0lDQWdJSHN1TGk1dmRHaGxjbEJ5YjNCemZWeHVJQ0FnSUNBZ0lDQXZQaWxjYmlBZ0lDQWdJQ0FnT2x4dUlDQWdJQ0FnSUNBb0lEeFNiM1YwWlhKTWFXNXJJSHN1TGk1dmRHaGxjbEJ5YjNCemZWeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUhSdlBYdDBiMzFjYmlBZ0lDQWdJQ0FnTHo0cFhHNTlPeUpkZlE9PSIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyJdLCJzb3VyY2VSb290IjoiIn0=