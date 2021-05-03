(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["TeaserV1"],{

/***/ "../../react-base-components/dist/authoring/teaser/v1/TeaserV1.js":
/*!**************************************************************************************************************************!*\
  !*** /Users/raaijmak/workspace/aem-react-core-wcm-components/react-base-components/dist/authoring/teaser/v1/TeaserV1.js ***!
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

      return __webpack_require__(__webpack_require__.s = 7);
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
      "./src/authoring/teaser/v1/TeaserV1.tsx":
      /*!**********************************************!*\
        !*** ./src/authoring/teaser/v1/TeaserV1.tsx ***!
        \**********************************************/

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


        var _authoring_image_v2_ImageV2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
        /*! ../../../authoring/image/v2/ImageV2 */
        "./src/authoring/image/v2/ImageV2.tsx");
        /* harmony import */


        var _authoring_title_v2_TitleV2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
        /*! ../../../authoring/title/v2/TitleV2 */
        "./src/authoring/title/v2/TitleV2.tsx");
        /* harmony import */


        var _routing_RoutedLink__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
        /*! ../../../routing/RoutedLink */
        "./src/routing/RoutedLink.tsx");
        /* harmony import */


        var _TeaserV1IsEmptyFn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
        /*! ./TeaserV1IsEmptyFn */
        "./src/authoring/teaser/v1/TeaserV1IsEmptyFn.ts");
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


        const generateLink = (props, action, index) => {
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_routing_RoutedLink__WEBPACK_IMPORTED_MODULE_4__["RoutedLink"], {
            key: "link-" + index,
            isRouted: props.routed,
            className: props.baseCssClass + '__action-link',
            to: action.URL
          }, "$", action.title);
        };

        const TeaserV1Image = props => {
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
            className: props.baseCssClass + '__image'
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_authoring_image_v2_ImageV2__WEBPACK_IMPORTED_MODULE_2__["default"], {
            isInEditor: props.isInEditor,
            src: props.imagePath,
            alt: props.imageAlt
          }));
        };

        const TeaserV1PreTitle = props => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: props.baseCssClass + '__pretitle'
        }, props.pretitle);

        const TeaserV1Title = props => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_authoring_title_v2_TitleV2__WEBPACK_IMPORTED_MODULE_3__["default"], {
          baseCssClass: props.baseCssClass + '__title',
          nested: true,
          type: props.titleType,
          isInEditor: props.isInEditor,
          linkDisabled: false,
          text: props.title,
          linkURL: props.linkURL
        });

        const TeaserV1Description = props => {
          const text = props.description;
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
            className: props.baseCssClass + '__description',
            dangerouslySetInnerHTML: {
              __html: text
            }
          });
        };

        const TeaserV1Actions = props => {
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
            className: props.baseCssClass + '__action-container'
          }, props.actions.map((action, index) => {
            return generateLink(props, action, index);
          }));
        };

        const TeaserV1Impl = props => {
          const cssClass = props.baseCssClass || '' + props.isInEditor ? ' cq-dd-image' : '';
          const showActions = props.actions.length > 0 && props.actionsEnabled;
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
            className: cssClass
          }, props.imagePath && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(TeaserV1Image, Object.assign({}, props)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
            className: props.baseCssClass + '__content'
          }, props.pretitle && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(TeaserV1PreTitle, Object.assign({}, props)), props.title && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(TeaserV1Title, Object.assign({}, props)), props.description && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(TeaserV1Description, Object.assign({}, props)), showActions && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(TeaserV1Actions, Object.assign({}, props))));
        };

        const TeaserV1 = props => {
          const Wrapped = Object(_AbstractCoreComponent__WEBPACK_IMPORTED_MODULE_1__["withConditionalPlaceHolder"])(Object(_AbstractCoreComponent__WEBPACK_IMPORTED_MODULE_1__["withStandardBaseCssClass"])(TeaserV1Impl, "cmp-teaser"), _TeaserV1IsEmptyFn__WEBPACK_IMPORTED_MODULE_5__["TeaserV1IsEmptyFn"], "Teaser V1");
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Wrapped, Object.assign({}, props));
        };
        /* harmony default export */


        __webpack_exports__["default"] = TeaserV1; //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGVhc2VyVjEuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJUZWFzZXJWMS50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7O0dBY0c7QUFHSCxPQUFPLEtBQWtCLE1BQU0sT0FBTyxDQUFDO0FBQ3ZDLE9BQU8sRUFBQywwQkFBMEIsRUFBRSx3QkFBd0IsRUFBQyxNQUFNLGdDQUFnQyxDQUFDO0FBQ3BHLE9BQU8sT0FBTyxNQUFNLHFDQUFxQyxDQUFDO0FBQzFELE9BQU8sT0FBTyxNQUFNLHFDQUFxQyxDQUFDO0FBQzFELE9BQU8sRUFBQyxVQUFVLEVBQUMsTUFBTSw2QkFBNkIsQ0FBQztBQUV2RCxPQUFPLEVBQUMsaUJBQWlCLEVBQUMsTUFBTSxxQkFBcUIsQ0FBQztBQXFCdEQsTUFBTSxZQUFZLEdBQUcsQ0FBQyxLQUFtQixFQUFFLE1BQXFCLEVBQUUsS0FBWSxFQUFFLEVBQUU7SUFDOUUsT0FBTyxvQkFBQyxVQUFVLElBQUMsR0FBRyxFQUFFLE9BQU8sR0FBRyxLQUFLLEVBQUUsUUFBUSxFQUFFLEtBQUssQ0FBQyxNQUFNLEVBQUUsU0FBUyxFQUFFLEtBQUssQ0FBQyxZQUFZLEdBQUcsZUFBZSxFQUFFLEVBQUUsRUFBRSxNQUFNLENBQUMsR0FBRzs7UUFBSSxNQUFNLENBQUMsS0FBSyxDQUFjLENBQUE7QUFDbEssQ0FBQyxDQUFBO0FBRUQsTUFBTSxhQUFhLEdBQUcsQ0FBQyxLQUFtQixFQUFFLEVBQUU7SUFDMUMsT0FBTyxDQUNILDZCQUFLLFNBQVMsRUFBRSxLQUFLLENBQUMsWUFBWSxHQUFHLFNBQVM7UUFDMUMsb0JBQUMsT0FBTyxJQUFDLFVBQVUsRUFBRSxLQUFLLENBQUMsVUFBVSxFQUFFLEdBQUcsRUFBRSxLQUFLLENBQUMsU0FBUyxFQUFFLEdBQUcsRUFBRSxLQUFLLENBQUMsUUFBUSxHQUFHLENBQ2pGLENBQ1QsQ0FBQztBQUNOLENBQUMsQ0FBQztBQUVGLE1BQU0sZ0JBQWdCLEdBQUcsQ0FBQyxLQUFtQixFQUFFLEVBQUUsQ0FBQyw2QkFBSyxTQUFTLEVBQUUsS0FBSyxDQUFDLFlBQVksR0FBRyxZQUFZLElBQUcsS0FBSyxDQUFDLFFBQVEsQ0FBTyxDQUFDO0FBRTVILE1BQU0sYUFBYSxHQUFHLENBQUMsS0FBbUIsRUFBRSxFQUFFLENBQ3RDLG9CQUFDLE9BQU8sSUFBQyxZQUFZLEVBQUUsS0FBSyxDQUFDLFlBQVksR0FBRyxTQUFTLEVBQzVDLE1BQU0sRUFBRSxJQUFJLEVBQ1osSUFBSSxFQUFFLEtBQUssQ0FBQyxTQUFTLEVBQ3JCLFVBQVUsRUFBRSxLQUFLLENBQUMsVUFBVSxFQUM1QixZQUFZLEVBQUUsS0FBSyxFQUNuQixJQUFJLEVBQUUsS0FBSyxDQUFDLEtBQUssRUFDakIsT0FBTyxFQUFFLEtBQUssQ0FBQyxPQUFPLEdBQUcsQ0FBQztBQUczQyxNQUFNLG1CQUFtQixHQUFHLENBQUMsS0FBbUIsRUFBRSxFQUFFO0lBQ2hELE1BQU0sSUFBSSxHQUFVLEtBQUssQ0FBQyxXQUFxQixDQUFDO0lBQ2hELE9BQU8sNkJBQUssU0FBUyxFQUFFLEtBQUssQ0FBQyxZQUFZLEdBQUcsZUFBZSxFQUFFLHVCQUF1QixFQUFFLEVBQUMsTUFBTSxFQUFFLElBQUksRUFBQyxHQUFRLENBQUM7QUFDakgsQ0FBQyxDQUFDO0FBRUYsTUFBTSxlQUFlLEdBQUcsQ0FBQyxLQUFtQixFQUFFLEVBQUU7SUFDNUMsT0FBTyxDQUNILDZCQUFLLFNBQVMsRUFBRSxLQUFLLENBQUMsWUFBWSxHQUFHLG9CQUFvQixJQUVqRCxLQUFLLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLE1BQU0sRUFBRSxLQUFLLEVBQUUsRUFBRTtRQUNoQyxPQUFPLFlBQVksQ0FBQyxLQUFLLEVBQUMsTUFBTSxFQUFDLEtBQUssQ0FBQyxDQUFBO0lBQzNDLENBQUMsQ0FBQyxDQUVKLENBQ1QsQ0FBQTtBQUNMLENBQUMsQ0FBQztBQUVGLE1BQU0sWUFBWSxHQUFHLENBQUMsS0FBbUIsRUFBRSxFQUFFO0lBQ3pDLE1BQU0sUUFBUSxHQUFHLEtBQUssQ0FBQyxZQUFZLElBQUksRUFBRSxHQUFHLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztJQUNyRixNQUFNLFdBQVcsR0FBVyxDQUFFLEtBQUssQ0FBQyxPQUFPLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBRSxJQUFJLEtBQUssQ0FBQyxjQUFjLENBQUM7SUFDakYsT0FBTyxDQUNILDZCQUFLLFNBQVMsRUFBRSxRQUFRO1FBQ25CLEtBQUssQ0FBQyxTQUFTLElBQUksb0JBQUMsYUFBYSxvQkFBSyxLQUFLLEVBQUc7UUFDL0MsNkJBQUssU0FBUyxFQUFFLEtBQUssQ0FBQyxZQUFZLEdBQUcsV0FBVztZQUMzQyxLQUFLLENBQUMsUUFBUSxJQUFJLG9CQUFDLGdCQUFnQixvQkFBSyxLQUFLLEVBQUc7WUFDaEQsS0FBSyxDQUFDLEtBQUssSUFBSSxvQkFBQyxhQUFhLG9CQUFLLEtBQUssRUFBRztZQUMxQyxLQUFLLENBQUMsV0FBVyxJQUFJLG9CQUFDLG1CQUFtQixvQkFBSyxLQUFLLEVBQUc7WUFDdEQsV0FBVyxJQUFJLG9CQUFDLGVBQWUsb0JBQUssS0FBSyxFQUFHLENBQzNDLENBQ0osQ0FDVCxDQUFBO0FBQ0wsQ0FBQyxDQUFDO0FBR0YsTUFBTSxRQUFRLEdBQUcsQ0FBQyxLQUFtQixFQUFFLEVBQUU7SUFDckMsTUFBTSxPQUFPLEdBQUcsMEJBQTBCLENBQUMsd0JBQXdCLENBQUMsWUFBWSxFQUFFLFlBQVksQ0FBQyxFQUFFLGlCQUFpQixFQUFFLFdBQVcsQ0FBQyxDQUFBO0lBQ2hJLE9BQU8sb0JBQUMsT0FBTyxvQkFBSyxLQUFLLEVBQUcsQ0FBQTtBQUNoQyxDQUFDLENBQUM7QUFFRixlQUFlLFFBQVEsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiAgQ29weXJpZ2h0IDIwMjAgQWRvYmVcbiAqXG4gKiAgTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqICB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiAgWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICAgICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiAgVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqICBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqICBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiAgbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cblxuXG5pbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHt3aXRoQ29uZGl0aW9uYWxQbGFjZUhvbGRlciwgd2l0aFN0YW5kYXJkQmFzZUNzc0NsYXNzfSBmcm9tIFwiLi4vLi4vLi4vQWJzdHJhY3RDb3JlQ29tcG9uZW50XCI7XG5pbXBvcnQgSW1hZ2VWMSBmcm9tIFwiLi4vLi4vLi4vYXV0aG9yaW5nL2ltYWdlL3YyL0ltYWdlVjJcIjtcbmltcG9ydCBUaXRsZVYxIGZyb20gXCIuLi8uLi8uLi9hdXRob3JpbmcvdGl0bGUvdjIvVGl0bGVWMlwiO1xuaW1wb3J0IHtSb3V0ZWRMaW5rfSBmcm9tIFwiLi4vLi4vLi4vcm91dGluZy9Sb3V0ZWRMaW5rXCI7XG5pbXBvcnQge1JvdXRlZENvcmVDb21wb25lbnRNb2RlbCwgUm91dGVkTW9kZWx9IGZyb20gXCIuLi8uLi8uLi9yb3V0aW5nL1JvdXRlZENvcmVDb21wb25lbnRcIjtcbmltcG9ydCB7VGVhc2VyVjFJc0VtcHR5Rm59IGZyb20gXCIuL1RlYXNlclYxSXNFbXB0eUZuXCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgVGVhc2VyVjFBY3Rpb24gZXh0ZW5kcyBSb3V0ZWRNb2RlbHtcbiAgICB0aXRsZTogc3RyaW5nXG4gICAgVVJMOiBzdHJpbmdcbn1cblxuZXhwb3J0IGludGVyZmFjZSBUZWFzZXJWMU1vZGVsIGV4dGVuZHMgUm91dGVkQ29yZUNvbXBvbmVudE1vZGVse1xuICAgIHByZXRpdGxlPzogc3RyaW5nXG4gICAgdGl0bGU6IHN0cmluZ1xuICAgIGRlc2NyaXB0aW9uPzogc3RyaW5nXG4gICAgdGl0bGVUeXBlOiBzdHJpbmdcbiAgICBsaW5rVVJMOiBzdHJpbmdcbiAgICBhY3Rpb25zRW5hYmxlZDogYm9vbGVhblxuICAgIGltYWdlTGlua0hpZGRlbjogYm9vbGVhblxuICAgIGltYWdlQWx0OiBzdHJpbmdcbiAgICB0aXRsZUxpbmtIaWRkZW46IGJvb2xlYW5cbiAgICBhY3Rpb25zOiBUZWFzZXJWMUFjdGlvbltdXG4gICAgaW1hZ2VQYXRoOiBzdHJpbmdcbn1cblxuY29uc3QgZ2VuZXJhdGVMaW5rID0gKHByb3BzOlRlYXNlclYxTW9kZWwsIGFjdGlvbjpUZWFzZXJWMUFjdGlvbiwgaW5kZXg6bnVtYmVyKSA9PiB7XG4gICAgcmV0dXJuIDxSb3V0ZWRMaW5rIGtleT17XCJsaW5rLVwiICsgaW5kZXh9IGlzUm91dGVkPXtwcm9wcy5yb3V0ZWR9IGNsYXNzTmFtZT17cHJvcHMuYmFzZUNzc0NsYXNzICsgJ19fYWN0aW9uLWxpbmsnfSB0bz17YWN0aW9uLlVSTH0+JHthY3Rpb24udGl0bGV9PC9Sb3V0ZWRMaW5rPlxufVxuXG5jb25zdCBUZWFzZXJWMUltYWdlID0gKHByb3BzOlRlYXNlclYxTW9kZWwpID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17cHJvcHMuYmFzZUNzc0NsYXNzICsgJ19faW1hZ2UnfT5cbiAgICAgICAgICAgIDxJbWFnZVYxIGlzSW5FZGl0b3I9e3Byb3BzLmlzSW5FZGl0b3J9IHNyYz17cHJvcHMuaW1hZ2VQYXRofSBhbHQ9e3Byb3BzLmltYWdlQWx0fS8+XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59O1xuXG5jb25zdCBUZWFzZXJWMVByZVRpdGxlID0gKHByb3BzOlRlYXNlclYxTW9kZWwpID0+IDxkaXYgY2xhc3NOYW1lPXtwcm9wcy5iYXNlQ3NzQ2xhc3MgKyAnX19wcmV0aXRsZSd9Pntwcm9wcy5wcmV0aXRsZX08L2Rpdj47XG5cbmNvbnN0IFRlYXNlclYxVGl0bGUgPSAocHJvcHM6VGVhc2VyVjFNb2RlbCkgPT4gXG4gICAgICAgIDxUaXRsZVYxIGJhc2VDc3NDbGFzcz17cHJvcHMuYmFzZUNzc0NsYXNzICsgJ19fdGl0bGUnfVxuICAgICAgICAgICAgICAgICBuZXN0ZWQ9e3RydWV9XG4gICAgICAgICAgICAgICAgIHR5cGU9e3Byb3BzLnRpdGxlVHlwZX1cbiAgICAgICAgICAgICAgICAgaXNJbkVkaXRvcj17cHJvcHMuaXNJbkVkaXRvcn1cbiAgICAgICAgICAgICAgICAgbGlua0Rpc2FibGVkPXtmYWxzZX1cbiAgICAgICAgICAgICAgICAgdGV4dD17cHJvcHMudGl0bGV9XG4gICAgICAgICAgICAgICAgIGxpbmtVUkw9e3Byb3BzLmxpbmtVUkx9Lz47XG5cblxuY29uc3QgVGVhc2VyVjFEZXNjcmlwdGlvbiA9IChwcm9wczpUZWFzZXJWMU1vZGVsKSA9PiB7XG4gICAgY29uc3QgdGV4dDpzdHJpbmcgPSBwcm9wcy5kZXNjcmlwdGlvbiBhcyBzdHJpbmc7XG4gICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPXtwcm9wcy5iYXNlQ3NzQ2xhc3MgKyAnX19kZXNjcmlwdGlvbid9IGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7X19odG1sOiB0ZXh0fX0+PC9kaXY+O1xufTtcblxuY29uc3QgVGVhc2VyVjFBY3Rpb25zID0gKHByb3BzOlRlYXNlclYxTW9kZWwpID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17cHJvcHMuYmFzZUNzc0NsYXNzICsgJ19fYWN0aW9uLWNvbnRhaW5lcid9PlxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHByb3BzLmFjdGlvbnMubWFwKChhY3Rpb24sIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBnZW5lcmF0ZUxpbmsocHJvcHMsYWN0aW9uLGluZGV4KVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn07XG5cbmNvbnN0IFRlYXNlclYxSW1wbCA9IChwcm9wczpUZWFzZXJWMU1vZGVsKSA9PiB7XG4gICAgY29uc3QgY3NzQ2xhc3MgPSBwcm9wcy5iYXNlQ3NzQ2xhc3MgfHwgJycgKyAocHJvcHMuaXNJbkVkaXRvcikgPyAnIGNxLWRkLWltYWdlJyA6ICcnO1xuICAgIGNvbnN0IHNob3dBY3Rpb25zOmJvb2xlYW4gPSAoIHByb3BzLmFjdGlvbnMubGVuZ3RoID4gMCApICYmIHByb3BzLmFjdGlvbnNFbmFibGVkO1xuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjc3NDbGFzc30+XG4gICAgICAgICAgICB7cHJvcHMuaW1hZ2VQYXRoICYmIDxUZWFzZXJWMUltYWdlIHsuLi5wcm9wc30vPn1cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtwcm9wcy5iYXNlQ3NzQ2xhc3MgKyAnX19jb250ZW50J30+XG4gICAgICAgICAgICAgICAge3Byb3BzLnByZXRpdGxlICYmIDxUZWFzZXJWMVByZVRpdGxlIHsuLi5wcm9wc30vPn1cbiAgICAgICAgICAgICAgICB7cHJvcHMudGl0bGUgJiYgPFRlYXNlclYxVGl0bGUgey4uLnByb3BzfS8+fVxuICAgICAgICAgICAgICAgIHtwcm9wcy5kZXNjcmlwdGlvbiAmJiA8VGVhc2VyVjFEZXNjcmlwdGlvbiB7Li4ucHJvcHN9Lz59XG4gICAgICAgICAgICAgICAge3Nob3dBY3Rpb25zICYmIDxUZWFzZXJWMUFjdGlvbnMgey4uLnByb3BzfS8+fVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn07XG5cblxuY29uc3QgVGVhc2VyVjEgPSAocHJvcHM6VGVhc2VyVjFNb2RlbCkgPT4ge1xuICAgIGNvbnN0IFdyYXBwZWQgPSB3aXRoQ29uZGl0aW9uYWxQbGFjZUhvbGRlcih3aXRoU3RhbmRhcmRCYXNlQ3NzQ2xhc3MoVGVhc2VyVjFJbXBsLCBcImNtcC10ZWFzZXJcIiksIFRlYXNlclYxSXNFbXB0eUZuLCBcIlRlYXNlciBWMVwiKVxuICAgIHJldHVybiA8V3JhcHBlZCB7Li4ucHJvcHN9Lz5cbn07XG5cbmV4cG9ydCBkZWZhdWx0IFRlYXNlclYxOyJdfQ==

        /***/
      },

      /***/
      "./src/authoring/teaser/v1/TeaserV1IsEmptyFn.ts":
      /*!******************************************************!*\
        !*** ./src/authoring/teaser/v1/TeaserV1IsEmptyFn.ts ***!
        \******************************************************/

      /*! exports provided: TeaserV1IsEmptyFn */

      /***/
      function (module, __webpack_exports__, __webpack_require__) {
        "use strict";

        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */


        __webpack_require__.d(__webpack_exports__, "TeaserV1IsEmptyFn", function () {
          return TeaserV1IsEmptyFn;
        });
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


        function TeaserV1IsEmptyFn(props) {
          return !props.imagePath && !props.description && props.actions.length == 0;
        } //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGVhc2VyVjFJc0VtcHR5Rm4uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJUZWFzZXJWMUlzRW1wdHlGbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7R0FjRztBQUtILE1BQU0sVUFBVSxpQkFBaUIsQ0FBQyxLQUFtQjtJQUNqRCxPQUFPLENBQUMsQ0FBQyxLQUFLLENBQUMsU0FBUyxJQUFJLENBQUMsS0FBSyxDQUFDLFdBQVcsSUFBSyxLQUFLLENBQUMsT0FBTyxDQUFDLE1BQU0sSUFBSSxDQUFDLENBQUMsQ0FBQTtBQUNqRixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqICBDb3B5cmlnaHQgMjAyMCBBZG9iZVxuICpcbiAqICBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqICBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgICAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqICBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiAgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqICBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuXG5cbmltcG9ydCB7VGVhc2VyVjFNb2RlbH0gZnJvbSBcIi4vVGVhc2VyVjFcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIFRlYXNlclYxSXNFbXB0eUZuKHByb3BzOlRlYXNlclYxTW9kZWwpOiBib29sZWFue1xuICAgIHJldHVybiAoIXByb3BzLmltYWdlUGF0aCAmJiAhcHJvcHMuZGVzY3JpcHRpb24gJiYgIHByb3BzLmFjdGlvbnMubGVuZ3RoID09IDApXG59XG4iXX0=

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
      7:
      /*!************************************************!*\
        !*** multi ./src/authoring/teaser/v1/TeaserV1 ***!
        \************************************************/

      /*! no static exports found */

      /***/
      function (module, exports, __webpack_require__) {
        module.exports = __webpack_require__(
        /*! ./src/authoring/teaser/v1/TeaserV1 */
        "./src/authoring/teaser/v1/TeaserV1.tsx");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9AYWRvYmUvYWVtLWNvcmUtY29tcG9uZW50cy1yZWFjdC1iYXNlL3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbj8wNjE3IiwiL0BhZG9iZS9hZW0tY29yZS1jb21wb25lbnRzLXJlYWN0LWJhc2Uvd2VicGFjay9ib290c3RyYXA/MGRiZSIsIi9Vc2Vycy9yYWFpam1hay93b3Jrc3BhY2UvYWVtLXJlYWN0LWNvcmUtd2NtLWNvbXBvbmVudHMvZXhhbXBsZXMvcmVhY3Qtc3BhY29tcG9uZW50cy1leGFtcGxlLXByb2plY3QvQGFkb2JlL2FlbS1jb3JlLWNvbXBvbmVudHMtcmVhY3QtYmFzZS9zcmMvQWJzdHJhY3RDb3JlQ29tcG9uZW50LnRzeCIsIi9Vc2Vycy9yYWFpam1hay93b3Jrc3BhY2UvYWVtLXJlYWN0LWNvcmUtd2NtLWNvbXBvbmVudHMvZXhhbXBsZXMvcmVhY3Qtc3BhY29tcG9uZW50cy1leGFtcGxlLXByb2plY3QvQGFkb2JlL2FlbS1jb3JlLWNvbXBvbmVudHMtcmVhY3QtYmFzZS9zcmMvYXV0aG9yaW5nL2ltYWdlL3YyL0ltYWdlVjIudHN4IiwiL0BhZG9iZS9hZW0tY29yZS1jb21wb25lbnRzLXJlYWN0LWJhc2Uvc3JjL2F1dGhvcmluZy9pbWFnZS92Mi9JbWFnZVYySXNFbXB0eUZuLnRzPzI2NTgiLCIvVXNlcnMvcmFhaWptYWsvd29ya3NwYWNlL2FlbS1yZWFjdC1jb3JlLXdjbS1jb21wb25lbnRzL2V4YW1wbGVzL3JlYWN0LXNwYWNvbXBvbmVudHMtZXhhbXBsZS1wcm9qZWN0L0BhZG9iZS9hZW0tY29yZS1jb21wb25lbnRzLXJlYWN0LWJhc2Uvc3JjL2F1dGhvcmluZy90ZWFzZXIvdjEvVGVhc2VyVjEudHN4IiwiL0BhZG9iZS9hZW0tY29yZS1jb21wb25lbnRzLXJlYWN0LWJhc2Uvc3JjL2F1dGhvcmluZy90ZWFzZXIvdjEvVGVhc2VyVjFJc0VtcHR5Rm4udHM/N2IxMCIsIi9Vc2Vycy9yYWFpam1hay93b3Jrc3BhY2UvYWVtLXJlYWN0LWNvcmUtd2NtLWNvbXBvbmVudHMvZXhhbXBsZXMvcmVhY3Qtc3BhY29tcG9uZW50cy1leGFtcGxlLXByb2plY3QvQGFkb2JlL2FlbS1jb3JlLWNvbXBvbmVudHMtcmVhY3QtYmFzZS9zcmMvYXV0aG9yaW5nL3RpdGxlL3YyL1RpdGxlVjIudHN4IiwiL0BhZG9iZS9hZW0tY29yZS1jb21wb25lbnRzLXJlYWN0LWJhc2Uvc3JjL2F1dGhvcmluZy90aXRsZS92Mi9UaXRsZVYySXNFbXB0eUZuLnRzPzRiOWQiLCIvVXNlcnMvcmFhaWptYWsvd29ya3NwYWNlL2FlbS1yZWFjdC1jb3JlLXdjbS1jb21wb25lbnRzL2V4YW1wbGVzL3JlYWN0LXNwYWNvbXBvbmVudHMtZXhhbXBsZS1wcm9qZWN0L0BhZG9iZS9hZW0tY29yZS1jb21wb25lbnRzLXJlYWN0LWJhc2Uvc3JjL2NvbW1vbi9wbGFjZWhvbGRlci50c3giLCIvVXNlcnMvcmFhaWptYWsvd29ya3NwYWNlL2FlbS1yZWFjdC1jb3JlLXdjbS1jb21wb25lbnRzL2V4YW1wbGVzL3JlYWN0LXNwYWNvbXBvbmVudHMtZXhhbXBsZS1wcm9qZWN0L0BhZG9iZS9hZW0tY29yZS1jb21wb25lbnRzLXJlYWN0LWJhc2Uvc3JjL3JvdXRpbmcvUm91dGVkTGluay50c3giLCIvVXNlcnMvcmFhaWptYWsvd29ya3NwYWNlL2FlbS1yZWFjdC1jb3JlLXdjbS1jb21wb25lbnRzL2V4YW1wbGVzL3JlYWN0LXNwYWNvbXBvbmVudHMtZXhhbXBsZS1wcm9qZWN0L3dlYnBhY2s6L0BhZG9iZS9hZW0tY29yZS1jb21wb25lbnRzLXJlYWN0LWJhc2UvZXh0ZXJuYWwgXCJyZWFjdFwiIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBQ0EsWUFDQSwyQkFEQSxLQUVBLEVBS0E7QUFDQyxDQVRELEVBU0MseUNBVEQsRUFTQztBQUNEOzs7OztBQ1ZBO0FBQUE7O0FBQ0E7QUFBQTs7O0FBRUE7QUFBQTs7QUFDQTs7QUFBQTs7O0FBRUE7QUFBQTs7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Y0FBeUMsS0FBekM7O0FBQ0E7QUFDQSxtQkFBZSw2Q0FBSyxhQUFMLENBQUssR0FBTCxFQUFLO0FBQW1DO0FBQW5DLGVBQStDLFVBQS9DLENBQUwsQ0FBZjtBQUNBOztBQUNBO0FBQ0EsMkNBQ1MsNkNBQUssYUFBTCxDQUFLLEdBQUwsRUFBSztBQUFtQztBQUFuQyxhQUE4QyxVQUE5QyxDQUFMLENBRFQsR0FHYSw2Q0FBSyxhQUFMLENBQW9CLHFEQUFwQixFQUE4QixrQkFBa0IsVUFBbEIsRUFBa0I7QUFBZTtBQUFmLFdBQWxCLENBQTlCLENBSGI7QUFJQSxTQVZPLEMsQ0FXUDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM1QkE7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7OztBWFVBO0NBVkEsRSIsImZpbGUiOiJqcy9UZWFzZXJWMS43OGVmOTI1ZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcIkBhZG9iZS9hZW0tY29yZS1jb21wb25lbnRzLXJlYWN0LWJhc2VcIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1wiQGFkb2JlL2FlbS1jb3JlLWNvbXBvbmVudHMtcmVhY3QtYmFzZVwiXSA9IGZhY3RvcnkoKTtcbn0pKHR5cGVvZiBzZWxmICE9PSAndW5kZWZpbmVkJyA/IHNlbGYgOiB0aGlzLCBmdW5jdGlvbigpIHtcbnJldHVybiAiLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gNyk7XG4iLCIvKlxuICogIENvcHlyaWdodCAyMDIwIEFkb2JlXG4gKlxuICogIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiAgeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICAgICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqICBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiAgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiAgU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBFZGl0b3JQbGFjZUhvbGRlciB9IGZyb20gXCIuL2NvbW1vbi9wbGFjZWhvbGRlclwiO1xuZXhwb3J0IGNvbnN0IHdpdGhTdGFuZGFyZEJhc2VDc3NDbGFzcyA9IChDb21wb25lbnQsIGRlZmF1bHRCYXNlQ3NzQ2xhc3MpID0+IHtcbiAgICByZXR1cm4gKHByb3BzKSA9PiB7XG4gICAgICAgIGNvbnN0IGJhc2VDc3NDbGFzcyA9IHByb3BzLmJhc2VDc3NDbGFzcztcbiAgICAgICAgY29uc3QgdG9CZVVzZWRDc3NDbGFzcyA9IGJhc2VDc3NDbGFzcyAmJiBiYXNlQ3NzQ2xhc3MudHJpbSgpLmxlbmd0aCA+IDAgPyBiYXNlQ3NzQ2xhc3MgOiBkZWZhdWx0QmFzZUNzc0NsYXNzO1xuICAgICAgICBjb25zdCBtZXJnZWRQcm9wcyA9IHtcbiAgICAgICAgICAgIC4uLnByb3BzLFxuICAgICAgICAgICAgYmFzZUNzc0NsYXNzOiB0b0JlVXNlZENzc0NsYXNzXG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KENvbXBvbmVudCwgT2JqZWN0LmFzc2lnbih7fSwgbWVyZ2VkUHJvcHMpKTtcbiAgICB9O1xufTtcbmV4cG9ydCBjb25zdCB3aXRoQ29uZGl0aW9uYWxQbGFjZUhvbGRlciA9IChDb21wb25lbnQsIGlzRW1wdHksIGNvbXBvbmVudFRpdGxlLCBlbXB0eVRleHQpID0+IHtcbiAgICByZXR1cm4gKHByb3BzKSA9PiB7XG4gICAgICAgIGNvbnN0IGlzRW1wdHlSZXN1bHQgPSBpc0VtcHR5KHByb3BzKTtcbiAgICAgICAgY29uc3QgeyBoaWRlUGxhY2VIb2xkZXIgPSBmYWxzZSwgaXNJbkVkaXRvciA9IGZhbHNlIH0gPSBwcm9wcztcbiAgICAgICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KFJlYWN0LkZyYWdtZW50LCBudWxsLFxuICAgICAgICAgICAgIWlzRW1wdHlSZXN1bHQgJiZcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KENvbXBvbmVudCwgT2JqZWN0LmFzc2lnbih7fSwgcHJvcHMpKSxcbiAgICAgICAgICAgIChpc0VtcHR5UmVzdWx0ICYmIGlzSW5FZGl0b3IgJiYgIWhpZGVQbGFjZUhvbGRlcikgJiZcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KEVkaXRvclBsYWNlSG9sZGVyLCB7IGVtcHR5VGV4dEFwcGVuZDogZW1wdHlUZXh0LCBjb21wb25lbnRUaXRsZTogY29tcG9uZW50VGl0bGUgfSkpKTtcbiAgICB9O1xufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaVFXSnpkSEpoWTNSRGIzSmxRMjl0Y0c5dVpXNTBMbXB6SWl3aWMyOTFjbU5sVW05dmRDSTZJaUlzSW5OdmRYSmpaWE1pT2xzaVFXSnpkSEpoWTNSRGIzSmxRMjl0Y0c5dVpXNTBMblJ6ZUNKZExDSnVZVzFsY3lJNlcxMHNJbTFoY0hCcGJtZHpJam9pUVVGQlFUczdPenM3T3pzN096czdPenM3UjBGalJ6dEJRVVZJTEU5QlFVOHNTMEZCU3l4TFFVRkxMRTFCUVUwc1QwRkJUeXhEUVVGRE8wRkJSeTlDTEU5QlFVOHNSVUZCUXl4cFFrRkJhVUlzUlVGQlF5eE5RVUZOTEhOQ1FVRnpRaXhEUVVGRE8wRkJaWFpFTEUxQlFVMHNRMEZCUXl4TlFVRk5MSGRDUVVGM1FpeEhRVUZITEVOQlJYQkRMRk5CUVRCQ0xFVkJRekZDTEcxQ1FVRXdRaXhGUVVOS0xFVkJRVVU3U1VGRGVFSXNUMEZCVHl4RFFVRkRMRXRCUVU4c1JVRkJSU3hGUVVGRk8xRkJSV1lzVFVGQlRTeFpRVUZaTEVkQlFVY3NTMEZCU3l4RFFVRkRMRmxCUVZrc1EwRkJRenRSUVVONFF5eE5RVUZOTEdkQ1FVRm5RaXhIUVVGSExGbEJRVmtzU1VGQlNTeFpRVUZaTEVOQlFVTXNTVUZCU1N4RlFVRkZMRU5CUVVNc1RVRkJUU3hIUVVGSExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNXVUZCV1N4RFFVRkRMRU5CUVVNc1EwRkJReXh0UWtGQmJVSXNRMEZCUXp0UlFVVTNSeXhOUVVGTkxGZEJRVmNzUjBGQlN6dFpRVU5zUWl4SFFVRkhMRXRCUVVzN1dVRkRVaXhaUVVGWkxFVkJRVVVzWjBKQlFXZENPMU5CUTJwRExFTkJRVU03VVVGRlJpeFBRVUZQTEc5Q1FVRkRMRk5CUVZNc2IwSkJRVXNzVjBGQlZ5eEZRVUZKTEVOQlFVTTdTVUZETVVNc1EwRkJReXhEUVVGQk8wRkJRMHdzUTBGQlF5eERRVUZETzBGQlJVWXNUVUZCVFN4RFFVRkRMRTFCUVUwc01FSkJRVEJDTEVkQlFVY3NRMEZGTVVJc1UwRkJNRUlzUlVGRE1VSXNUMEZCTkVJc1JVRkROVUlzWTBGQmMwSXNSVUZCUlN4VFFVRnBRaXhGUVVOdVFpeEZRVUZGTzBsQlEzQkRMRTlCUVU4c1EwRkJReXhMUVVGUExFVkJRVVVzUlVGQlJUdFJRVVZtTEUxQlFVMHNZVUZCWVN4SFFVRlhMRTlCUVU4c1EwRkJReXhMUVVGTExFTkJRVU1zUTBGQlF6dFJRVU0zUXl4TlFVRk5MRVZCUVVNc1pVRkJaU3hIUVVGSExFdEJRVXNzUlVGQlJTeFZRVUZWTEVkQlFVY3NTMEZCU3l4RlFVRkRMRWRCUVVjc1MwRkJTeXhEUVVGRE8xRkJSVFZFTEU5QlFVOHNRMEZEU0R0WlFVTk5MRU5CUVVNc1lVRkJZVHRuUWtGRGFFSXNiMEpCUVVNc1UwRkJVeXh2UWtGQlN5eExRVUZMTEVWQlFVazdXVUZIY0VJc1EwRkJReXhoUVVGaExFbEJRVWtzVlVGQlZTeEpRVUZKTEVOQlFVTXNaVUZCWlN4RFFVRkRPMmRDUVVOcVJDeHZRa0ZCUXl4cFFrRkJhVUlzU1VGRFpDeGxRVUZsTEVWQlFVVXNVMEZCVXl4RlFVTXhRaXhqUVVGakxFVkJRVVVzWTBGQll5eEhRVU5vUXl4RFFVVlFMRU5CUTA0c1EwRkJRenRKUVVOT0xFTkJRVU1zUTBGQlFUdEJRVU5NTEVOQlFVTXNRMEZCUXlJc0luTnZkWEpqWlhORGIyNTBaVzUwSWpwYklpOHFYRzRnS2lBZ1EyOXdlWEpwWjJoMElESXdNakFnUVdSdlltVmNiaUFxWEc0Z0tpQWdUR2xqWlc1elpXUWdkVzVrWlhJZ2RHaGxJRUZ3WVdOb1pTQk1hV05sYm5ObExDQldaWEp6YVc5dUlESXVNQ0FvZEdobElGd2lUR2xqWlc1elpWd2lLVHRjYmlBcUlDQjViM1VnYldGNUlHNXZkQ0IxYzJVZ2RHaHBjeUJtYVd4bElHVjRZMlZ3ZENCcGJpQmpiMjF3YkdsaGJtTmxJSGRwZEdnZ2RHaGxJRXhwWTJWdWMyVXVYRzRnS2lBZ1dXOTFJRzFoZVNCdlluUmhhVzRnWVNCamIzQjVJRzltSUhSb1pTQk1hV05sYm5ObElHRjBYRzRnS2x4dUlDb2dJQ0FnSUNCb2RIUndPaTh2ZDNkM0xtRndZV05vWlM1dmNtY3ZiR2xqWlc1elpYTXZURWxEUlU1VFJTMHlMakJjYmlBcVhHNGdLaUFnVlc1c1pYTnpJSEpsY1hWcGNtVmtJR0o1SUdGd2NHeHBZMkZpYkdVZ2JHRjNJRzl5SUdGbmNtVmxaQ0IwYnlCcGJpQjNjbWwwYVc1bkxDQnpiMlowZDJGeVpWeHVJQ29nSUdScGMzUnlhV0oxZEdWa0lIVnVaR1Z5SUhSb1pTQk1hV05sYm5ObElHbHpJR1JwYzNSeWFXSjFkR1ZrSUc5dUlHRnVJRndpUVZNZ1NWTmNJaUJDUVZOSlV5eGNiaUFxSUNCWFNWUklUMVZVSUZkQlVsSkJUbFJKUlZNZ1QxSWdRMDlPUkVsVVNVOU9VeUJQUmlCQlRsa2dTMGxPUkN3Z1pXbDBhR1Z5SUdWNGNISmxjM01nYjNJZ2FXMXdiR2xsWkM1Y2JpQXFJQ0JUWldVZ2RHaGxJRXhwWTJWdWMyVWdabTl5SUhSb1pTQnpjR1ZqYVdacFl5QnNZVzVuZFdGblpTQm5iM1psY201cGJtY2djR1Z5YldsemMybHZibk1nWVc1a1hHNGdLaUFnYkdsdGFYUmhkR2x2Ym5NZ2RXNWtaWElnZEdobElFeHBZMlZ1YzJVdVhHNGdLaTljYmx4dWFXMXdiM0owSUNvZ1lYTWdVbVZoWTNRZ1puSnZiU0FuY21WaFkzUW5PMXh1YVcxd2IzSjBJSHREYjIxd2IyNWxiblJVZVhCbGZTQm1jbTl0SUNkeVpXRmpkQ2M3WEc1Y2JtbHRjRzl5ZENCN1JXUnBkRzl5VUd4aFkyVkliMnhrWlhKOUlHWnliMjBnWENJdUwyTnZiVzF2Ymk5d2JHRmpaV2h2YkdSbGNsd2lPMXh1WEc1bGVIQnZjblFnYVc1MFpYSm1ZV05sSUVoaGMwSmhjMlZEYzNORGJHRnpjeUI3WEc0Z0lDQWdZbUZ6WlVOemMwTnNZWE56UHpvZ2MzUnlhVzVuWEc1OVhHNWNibVY0Y0c5eWRDQnBiblJsY21aaFkyVWdRMjl5WlVOdmJYQnZibVZ1ZEUxdlpHVnNJR1Y0ZEdWdVpITWdTR0Z6UW1GelpVTnpjME5zWVhOemUxeHVJQ0FnSUdocFpHVlFiR0ZqWlVodmJHUmxjajg2SUdKdmIyeGxZVzVjYmlBZ0lDQnBjMGx1UldScGRHOXlQenBpYjI5c1pXRnVYRzU5WEc1Y2JtVjRjRzl5ZENCcGJuUmxjbVpoWTJVZ1EyOXlaVU52YlhCdmJtVnVkRk4wWVhSbElIdGNibHh1ZlZ4dVhHNWxlSEJ2Y25RZ1kyOXVjM1FnZDJsMGFGTjBZVzVrWVhKa1FtRnpaVU56YzBOc1lYTnpJRDBnUEUwZ1pYaDBaVzVrY3lCRGIzSmxRMjl0Y0c5dVpXNTBUVzlrWld3K1hHNG9YRzRnSUNBZ1EyOXRjRzl1Wlc1ME9rTnZiWEJ2Ym1WdWRGUjVjR1U4VFQ0c1hHNGdJQ0FnWkdWbVlYVnNkRUpoYzJWRGMzTkRiR0Z6Y3pwemRISnBibWRjYmlrNlVtVmhZM1F1UTI5dGNHOXVaVzUwVkhsd1pUeE5QaUFnUFQ0Z2UxeHVJQ0FnSUhKbGRIVnliaUFvY0hKdmNITTZUU2tnUFQ0Z2UxeHVYRzRnSUNBZ0lDQWdJR052Ym5OMElHSmhjMlZEYzNORGJHRnpjeUE5SUhCeWIzQnpMbUpoYzJWRGMzTkRiR0Z6Y3p0Y2JpQWdJQ0FnSUNBZ1kyOXVjM1FnZEc5Q1pWVnpaV1JEYzNORGJHRnpjeUE5SUdKaGMyVkRjM05EYkdGemN5QW1KaUJpWVhObFEzTnpRMnhoYzNNdWRISnBiU2dwTG14bGJtZDBhQ0ErSURBZ1B5QmlZWE5sUTNOelEyeGhjM01nT2lCa1pXWmhkV3gwUW1GelpVTnpjME5zWVhOek8xeHVYRzRnSUNBZ0lDQWdJR052Ym5OMElHMWxjbWRsWkZCeWIzQnpPaUJOUFNCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0F1TGk1d2NtOXdjeXhjYmlBZ0lDQWdJQ0FnSUNBZ0lHSmhjMlZEYzNORGJHRnpjem9nZEc5Q1pWVnpaV1JEYzNORGJHRnpjMXh1SUNBZ0lDQWdJQ0I5TzF4dVhHNGdJQ0FnSUNBZ0lISmxkSFZ5YmlBOFEyOXRjRzl1Wlc1MElIc3VMaTV0WlhKblpXUlFjbTl3YzMwZ0x6NDdYRzRnSUNBZ2ZWeHVmVHRjYmx4dVpYaHdiM0owSUdOdmJuTjBJSGRwZEdoRGIyNWthWFJwYjI1aGJGQnNZV05sU0c5c1pHVnlJRDBnUEUwZ1pYaDBaVzVrY3lCRGIzSmxRMjl0Y0c5dVpXNTBUVzlrWld3K1hHNGdJQ0FnSUNBZ0lDQWdJQ0FvWEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnUTI5dGNHOXVaVzUwT2tOdmJYQnZibVZ1ZEZSNWNHVThUVDRzSUZ4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUdselJXMXdkSGs2S0hCeWIzQnpPazBwSUQwK0lHSnZiMnhsWVc0c1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ1kyOXRjRzl1Wlc1MFZHbDBiR1UvT25OMGNtbHVaeXdnWlcxd2RIbFVaWGgwUHpwemRISnBibWRjYmlBZ0lDQWdJQ0FnSUNBZ0lDazZVbVZoWTNRdVEyOXRjRzl1Wlc1MFZIbHdaVHhOUGlBZ1BUNGdlMXh1SUNBZ0lISmxkSFZ5YmlBb2NISnZjSE02VFNrZ1BUNGdlMXh1WEc0Z0lDQWdJQ0FnSUdOdmJuTjBJR2x6Ulcxd2RIbFNaWE4xYkhRNlltOXZiR1ZoYmlBOUlHbHpSVzF3ZEhrb2NISnZjSE1wTzF4dUlDQWdJQ0FnSUNCamIyNXpkQ0I3YUdsa1pWQnNZV05sU0c5c1pHVnlJRDBnWm1Gc2MyVXNJR2x6U1c1RlpHbDBiM0lnUFNCbVlXeHpaWDBnUFNCd2NtOXdjenRjYmx4dUlDQWdJQ0FnSUNCeVpYUjFjbTRnS0Z4dUlDQWdJQ0FnSUNBZ0lDQWdQRDVjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0I3SUNGcGMwVnRjSFI1VW1WemRXeDBJQ1ltWEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnUEVOdmJYQnZibVZ1ZENCN0xpNHVjSEp2Y0hOOUlDOCtYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdmVnh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0tHbHpSVzF3ZEhsU1pYTjFiSFFnSmlZZ2FYTkpia1ZrYVhSdmNpQW1KaUFoYUdsa1pWQnNZV05sU0c5c1pHVnlLU0FtSmx4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQThSV1JwZEc5eVVHeGhZMlZJYjJ4a1pYSmNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lHVnRjSFI1VkdWNGRFRndjR1Z1WkQxN1pXMXdkSGxVWlhoMGZWeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ1kyOXRjRzl1Wlc1MFZHbDBiR1U5ZTJOdmJYQnZibVZ1ZEZScGRHeGxmVnh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBdlBseHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lIMWNiaUFnSUNBZ0lDQWdJQ0FnSUR3dlBseHVJQ0FnSUNBZ0lDQXBPMXh1SUNBZ0lIMWNibjA3SWwxOSIsIi8qXG4gKiAgQ29weXJpZ2h0IDIwMjAgQWRvYmVcbiAqXG4gKiAgTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqICB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiAgWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICAgICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiAgVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqICBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqICBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiAgbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB3aXRoQ29uZGl0aW9uYWxQbGFjZUhvbGRlciwgd2l0aFN0YW5kYXJkQmFzZUNzc0NsYXNzIH0gZnJvbSBcIi4uLy4uLy4uL0Fic3RyYWN0Q29yZUNvbXBvbmVudFwiO1xuaW1wb3J0IHsgUm91dGVkTGluayB9IGZyb20gXCIuLi8uLi8uLi9yb3V0aW5nL1JvdXRlZExpbmtcIjtcbmltcG9ydCB7IEltYWdlVjJJc0VtcHR5Rm4gfSBmcm9tIFwiLi9JbWFnZVYySXNFbXB0eUZuXCI7XG5jb25zdCBJbWFnZVYySW5uZXJDb250ZW50cyA9IChwcm9wcykgPT4ge1xuICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChSZWFjdC5GcmFnbWVudCwgbnVsbCxcbiAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImltZ1wiLCB7IHNyYzogcHJvcHMuc3JjLCBjbGFzc05hbWU6IHByb3BzLmJhc2VDc3NDbGFzcyArICdfX2ltYWdlJywgYWx0OiBwcm9wcy5hbHQgfSksXG4gICAgICAgICEhKHByb3BzLnRpdGxlKSAmJiBSZWFjdC5jcmVhdGVFbGVtZW50KFwic3BhblwiLCB7IGNsYXNzTmFtZTogcHJvcHMuYmFzZUNzc0NsYXNzICsgJ19fdGl0bGUnLCBpdGVtUHJvcDogXCJjYXB0aW9uXCIgfSwgcHJvcHMudGl0bGUpLFxuICAgICAgICBwcm9wcy5kaXNwbGF5UG9wdXBUaXRsZSAmJiAoISFwcm9wcy50aXRsZSkgJiYgUmVhY3QuY3JlYXRlRWxlbWVudChcIm1ldGFcIiwgeyBpdGVtUHJvcDogXCJjYXB0aW9uXCIsIGNvbnRlbnQ6IHByb3BzLnRpdGxlIH0pKSk7XG59O1xuY29uc3QgSW1hZ2VWMkNvbnRlbnRzID0gKHByb3BzKSA9PiB7XG4gICAgaWYgKHByb3BzLmxpbmsgJiYgcHJvcHMubGluay50cmltKCkubGVuZ3RoID4gMCkge1xuICAgICAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoUm91dGVkTGluaywgeyBjbGFzc05hbWU6IHByb3BzLmJhc2VDc3NDbGFzcyArICdfX2xpbmsnLCBpc1JvdXRlZDogcHJvcHMucm91dGVkLCB0bzogcHJvcHMubGluayB9LFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChJbWFnZVYySW5uZXJDb250ZW50cywgT2JqZWN0LmFzc2lnbih7fSwgcHJvcHMpKSkpO1xuICAgIH1cbiAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChJbWFnZVYySW5uZXJDb250ZW50cywgT2JqZWN0LmFzc2lnbih7fSwgcHJvcHMpKTtcbn07XG5jb25zdCBJbWFnZVYySW1wbCA9IChwcm9wcykgPT4ge1xuICAgIGNvbnN0IHsgaXNJbkVkaXRvciA9IGZhbHNlIH0gPSBwcm9wcztcbiAgICBjb25zdCBjc3NDbGFzc05hbWUgPSAoaXNJbkVkaXRvcikgPyBwcm9wcy5iYXNlQ3NzQ2xhc3MgKyAnIGNxLWRkLWltYWdlJyA6IHByb3BzLmJhc2VDc3NDbGFzcztcbiAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzc05hbWU6IGNzc0NsYXNzTmFtZSB9LFxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KEltYWdlVjJDb250ZW50cywgT2JqZWN0LmFzc2lnbih7fSwgcHJvcHMpKSkpO1xufTtcbmNvbnN0IEltYWdlVjIgPSAocHJvcHMpID0+IHtcbiAgICBjb25zdCBXcmFwcGVkID0gd2l0aENvbmRpdGlvbmFsUGxhY2VIb2xkZXIod2l0aFN0YW5kYXJkQmFzZUNzc0NsYXNzKEltYWdlVjJJbXBsLCBcImNtcC1pbWFnZVwiKSwgSW1hZ2VWMklzRW1wdHlGbiwgXCJJbWFnZSBWMlwiKTtcbiAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChXcmFwcGVkLCBPYmplY3QuYXNzaWduKHt9LCBwcm9wcykpO1xufTtcbmV4cG9ydCBkZWZhdWx0IEltYWdlVjI7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lTVzFoWjJWV01pNXFjeUlzSW5OdmRYSmpaVkp2YjNRaU9pSWlMQ0p6YjNWeVkyVnpJanBiSWtsdFlXZGxWakl1ZEhONElsMHNJbTVoYldWeklqcGJYU3dpYldGd2NHbHVaM01pT2lKQlFVRkJPenM3T3pzN096czdPenM3T3p0SFFXTkhPMEZCUlVnc1QwRkJUeXhMUVVGclFpeE5RVUZOTEU5QlFVOHNRMEZCUXp0QlFVTjJReXhQUVVGUExFVkJRVU1zTUVKQlFUQkNMRVZCUVVVc2QwSkJRWGRDTEVWQlFVTXNUVUZCVFN4blEwRkJaME1zUTBGQlF6dEJRVVZ3Unl4UFFVRlBMRVZCUVVNc1ZVRkJWU3hGUVVGRExFMUJRVTBzTmtKQlFUWkNMRU5CUVVNN1FVRkRka1FzVDBGQlR5eEZRVUZETEdkQ1FVRm5RaXhGUVVGRExFMUJRVTBzYjBKQlFXOUNMRU5CUVVNN1FVRlhjRVFzVFVGQlRTeHZRa0ZCYjBJc1IwRkJSeXhEUVVGRExFdEJRV3RDTEVWQlFVVXNSVUZCUlR0SlFVTm9SQ3hQUVVGUExFTkJRMGc3VVVGRFNTdzJRa0ZCU3l4SFFVRkhMRVZCUVVVc1MwRkJTeXhEUVVGRExFZEJRVWNzUlVGRFpDeFRRVUZUTEVWQlFVVXNTMEZCU3l4RFFVRkRMRmxCUVZrc1IwRkJSeXhUUVVGVExFVkJRM3BETEVkQlFVY3NSVUZCUlN4TFFVRkxMRU5CUVVNc1IwRkJSeXhIUVVGSE8xRkJSV3hDTEVOQlFVTXNRMEZCUXl4RFFVRkRMRXRCUVVzc1EwRkJReXhMUVVGTExFTkJRVU1zU1VGQlNTdzRRa0ZCVFN4VFFVRlRMRVZCUVVVc1MwRkJTeXhEUVVGRExGbEJRVmtzUjBGQlJ5eFRRVUZUTEVWQlFVVXNVVUZCVVN4RlFVRkRMRk5CUVZNc1NVRkJSU3hMUVVGTExFTkJRVU1zUzBGQlN5eERRVUZSTzFGQlJ6TkhMRXRCUVVzc1EwRkJReXhwUWtGQmFVSXNTVUZCU1N4RFFVRkRMRU5CUVVNc1EwRkJReXhMUVVGTExFTkJRVU1zUzBGQlN5eERRVUZETEVsQlFVa3NPRUpCUVUwc1VVRkJVU3hGUVVGRExGTkJRVk1zUlVGQlF5eFBRVUZQTEVWQlFVVXNTMEZCU3l4RFFVRkRMRXRCUVVzc1IwRkJSeXhEUVVWdVJ5eERRVU5PTEVOQlFVTTdRVUZEVGl4RFFVRkRMRU5CUVVNN1FVRkZSaXhOUVVGTkxHVkJRV1VzUjBGQlJ5eERRVUZETEV0QlFXdENMRVZCUVVVc1JVRkJSVHRKUVVNelF5eEpRVUZKTEV0QlFVc3NRMEZCUXl4SlFVRkpMRWxCUVVrc1MwRkJTeXhEUVVGRExFbEJRVWtzUTBGQlF5eEpRVUZKTEVWQlFVVXNRMEZCUXl4TlFVRk5MRWRCUVVjc1EwRkJReXhGUVVGRE8xRkJRek5ETEU5QlFVOHNRMEZEU0N4dlFrRkJReXhWUVVGVkxFbEJRVU1zVTBGQlV5eEZRVUZGTEV0QlFVc3NRMEZCUXl4WlFVRlpMRWRCUVVjc1VVRkJVU3hGUVVGRkxGRkJRVkVzUlVGQlJTeExRVUZMTEVOQlFVTXNUVUZCVFN4RlFVRkZMRVZCUVVVc1JVRkJSU3hMUVVGTExFTkJRVU1zU1VGQlNUdFpRVU40Uml4dlFrRkJReXh2UWtGQmIwSXNiMEpCUVVzc1MwRkJTeXhGUVVGSExFTkJRM3BDTEVOQlEyaENMRU5CUVVFN1MwRkRTanRKUVVORUxFOUJRVThzYjBKQlFVTXNiMEpCUVc5Q0xHOUNRVUZMTEV0QlFVc3NSVUZCUnl4RFFVRkJPMEZCUXpkRExFTkJRVU1zUTBGQlF6dEJRVVZHTEUxQlFVMHNWMEZCVnl4SFFVRkhMRU5CUVVNc1MwRkJhMElzUlVGQlJTeEZRVUZGTzBsQlJYWkRMRTFCUVUwc1JVRkJReXhWUVVGVkxFZEJRVWNzUzBGQlN5eEZRVUZETEVkQlFVY3NTMEZCU3l4RFFVRkRPMGxCUTI1RExFMUJRVTBzV1VGQldTeEhRVUZITEVOQlFVTXNWVUZCVlN4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFdEJRVXNzUTBGQlF5eFpRVUZaTEVkQlFVY3NZMEZCWXl4RFFVRkRMRU5CUVVNc1EwRkJReXhMUVVGTExFTkJRVU1zV1VGQldTeERRVUZETzBsQlJUVkdMRTlCUVU4c1EwRkRTQ3cyUWtGQlN5eFRRVUZUTEVWQlFVVXNXVUZCV1R0UlFVTjRRaXh2UWtGQlF5eGxRVUZsTEc5Q1FVRkxMRXRCUVVzc1JVRkJSeXhEUVVNelFpeERRVU5VTEVOQlFVRTdRVUZGVGl4RFFVRkRMRU5CUVVNN1FVRkZSaXhOUVVGTkxFOUJRVThzUjBGQlJ5eERRVUZETEV0QlFXdENMRVZCUVVVc1JVRkJSVHRKUVVWdVF5eE5RVUZOTEU5QlFVOHNSMEZCUnl3d1FrRkJNRUlzUTBGQlF5eDNRa0ZCZDBJc1EwRkJReXhYUVVGWExFVkJRVVVzVjBGQlZ5eERRVUZETEVWQlFVVXNaMEpCUVdkQ0xFVkJRVVVzVlVGQlZTeERRVUZETEVOQlFVTTdTVUZETjBnc1QwRkJUeXh2UWtGQlF5eFBRVUZQTEc5Q1FVRkxMRXRCUVVzc1JVRkJSeXhEUVVGQk8wRkJRMmhETEVOQlFVTXNRMEZCUXp0QlFVVkdMR1ZCUVdVc1QwRkJUeXhEUVVGRElpd2ljMjkxY21ObGMwTnZiblJsYm5RaU9sc2lMeXBjYmlBcUlDQkRiM0I1Y21sbmFIUWdNakF5TUNCQlpHOWlaVnh1SUNwY2JpQXFJQ0JNYVdObGJuTmxaQ0IxYm1SbGNpQjBhR1VnUVhCaFkyaGxJRXhwWTJWdWMyVXNJRlpsY25OcGIyNGdNaTR3SUNoMGFHVWdYQ0pNYVdObGJuTmxYQ0lwTzF4dUlDb2dJSGx2ZFNCdFlYa2dibTkwSUhWelpTQjBhR2x6SUdacGJHVWdaWGhqWlhCMElHbHVJR052YlhCc2FXRnVZMlVnZDJsMGFDQjBhR1VnVEdsalpXNXpaUzVjYmlBcUlDQlpiM1VnYldGNUlHOWlkR0ZwYmlCaElHTnZjSGtnYjJZZ2RHaGxJRXhwWTJWdWMyVWdZWFJjYmlBcVhHNGdLaUFnSUNBZ0lHaDBkSEE2THk5M2QzY3VZWEJoWTJobExtOXlaeTlzYVdObGJuTmxjeTlNU1VORlRsTkZMVEl1TUZ4dUlDcGNiaUFxSUNCVmJteGxjM01nY21WeGRXbHlaV1FnWW5rZ1lYQndiR2xqWVdKc1pTQnNZWGNnYjNJZ1lXZHlaV1ZrSUhSdklHbHVJSGR5YVhScGJtY3NJSE52Wm5SM1lYSmxYRzRnS2lBZ1pHbHpkSEpwWW5WMFpXUWdkVzVrWlhJZ2RHaGxJRXhwWTJWdWMyVWdhWE1nWkdsemRISnBZblYwWldRZ2IyNGdZVzRnWENKQlV5QkpVMXdpSUVKQlUwbFRMRnh1SUNvZ0lGZEpWRWhQVlZRZ1YwRlNVa0ZPVkVsRlV5QlBVaUJEVDA1RVNWUkpUMDVUSUU5R0lFRk9XU0JMU1U1RUxDQmxhWFJvWlhJZ1pYaHdjbVZ6Y3lCdmNpQnBiWEJzYVdWa0xseHVJQ29nSUZObFpTQjBhR1VnVEdsalpXNXpaU0JtYjNJZ2RHaGxJSE53WldOcFptbGpJR3hoYm1kMVlXZGxJR2R2ZG1WeWJtbHVaeUJ3WlhKdGFYTnphVzl1Y3lCaGJtUmNiaUFxSUNCc2FXMXBkR0YwYVc5dWN5QjFibVJsY2lCMGFHVWdUR2xqWlc1elpTNWNiaUFxTDF4dVhHNXBiWEJ2Y25RZ1VtVmhZM1FzSUh0RGIyMXdiMjVsYm5SOUlHWnliMjBnSjNKbFlXTjBKenRjYm1sdGNHOXlkQ0I3ZDJsMGFFTnZibVJwZEdsdmJtRnNVR3hoWTJWSWIyeGtaWElzSUhkcGRHaFRkR0Z1WkdGeVpFSmhjMlZEYzNORGJHRnpjMzBnWm5KdmJTQmNJaTR1THk0dUx5NHVMMEZpYzNSeVlXTjBRMjl5WlVOdmJYQnZibVZ1ZEZ3aU8xeHVhVzF3YjNKMElIdFNiM1YwWldSRGIzSmxRMjl0Y0c5dVpXNTBUVzlrWld4OUlHWnliMjBnWENJdUxpOHVMaTh1TGk5eWIzVjBhVzVuTDFKdmRYUmxaRU52Y21WRGIyMXdiMjVsYm5SY0lqdGNibWx0Y0c5eWRDQjdVbTkxZEdWa1RHbHVhMzBnWm5KdmJTQmNJaTR1THk0dUx5NHVMM0p2ZFhScGJtY3ZVbTkxZEdWa1RHbHVhMXdpTzF4dWFXMXdiM0owSUh0SmJXRm5aVll5U1hORmJYQjBlVVp1ZlNCbWNtOXRJRndpTGk5SmJXRm5aVll5U1hORmJYQjBlVVp1WENJN1hHNWNibHh1Wlhod2IzSjBJR2x1ZEdWeVptRmpaU0JKYldGblpWWXlUVzlrWld3Z1pYaDBaVzVrY3lCU2IzVjBaV1JEYjNKbFEyOXRjRzl1Wlc1MFRXOWtaV3g3WEc0Z0lDQWdjM0pqT2lCemRISnBibWRjYmlBZ0lDQmhiSFE2SUhOMGNtbHVaMXh1SUNBZ0lHUnBjM0JzWVhsUWIzQjFjRlJwZEd4bFB6b2dZbTl2YkdWaGJseHVJQ0FnSUhScGRHeGxQem9nYzNSeWFXNW5YRzRnSUNBZ2JHbHVhejg2SUhOMGNtbHVaMXh1ZlZ4dVhHNWpiMjV6ZENCSmJXRm5aVll5U1c1dVpYSkRiMjUwWlc1MGN5QTlJQ2h3Y205d2N6cEpiV0ZuWlZZeVRXOWtaV3dwSUQwK0lIdGNiaUFnSUNCeVpYUjFjbTRnS0Z4dUlDQWdJQ0FnSUNBOFBseHVJQ0FnSUNBZ0lDQWdJQ0FnUEdsdFp5QnpjbU05ZTNCeWIzQnpMbk55WTMxY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ1kyeGhjM05PWVcxbFBYdHdjbTl3Y3k1aVlYTmxRM056UTJ4aGMzTWdLeUFuWDE5cGJXRm5aU2Q5WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUdGc2REMTdjSEp2Y0hNdVlXeDBmUzgrWEc0Z0lDQWdJQ0FnSUNBZ0lDQjdYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJU0VvY0hKdmNITXVkR2wwYkdVcElDWW1JRHh6Y0dGdUlHTnNZWE56VG1GdFpUMTdjSEp2Y0hNdVltRnpaVU56YzBOc1lYTnpJQ3NnSjE5ZmRHbDBiR1VuZlNCcGRHVnRVSEp2Y0QxY0ltTmhjSFJwYjI1Y0lqNTdjSEp2Y0hNdWRHbDBiR1Y5UEM5emNHRnVQbHh1SUNBZ0lDQWdJQ0FnSUNBZ2ZWeHVJQ0FnSUNBZ0lDQWdJQ0FnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUhCeWIzQnpMbVJwYzNCc1lYbFFiM0IxY0ZScGRHeGxJQ1ltSUNnaElYQnliM0J6TG5ScGRHeGxLU0FtSmlBOGJXVjBZU0JwZEdWdFVISnZjRDFjSW1OaGNIUnBiMjVjSWlCamIyNTBaVzUwUFh0d2NtOXdjeTUwYVhSc1pYMHZQbHh1SUNBZ0lDQWdJQ0FnSUNBZ2ZWeHVJQ0FnSUNBZ0lDQThMejVjYmlBZ0lDQXBPMXh1ZlR0Y2JseHVZMjl1YzNRZ1NXMWhaMlZXTWtOdmJuUmxiblJ6SUQwZ0tIQnliM0J6T2tsdFlXZGxWakpOYjJSbGJDa2dQVDRnZTF4dUlDQWdJR2xtS0NCd2NtOXdjeTVzYVc1cklDWW1JSEJ5YjNCekxteHBibXN1ZEhKcGJTZ3BMbXhsYm1kMGFDQStJREFwZTF4dUlDQWdJQ0FnSUNCeVpYUjFjbTRnS0Z4dUlDQWdJQ0FnSUNBZ0lDQWdQRkp2ZFhSbFpFeHBibXNnWTJ4aGMzTk9ZVzFsUFh0d2NtOXdjeTVpWVhObFEzTnpRMnhoYzNNZ0t5QW5YMTlzYVc1ckozMGdhWE5TYjNWMFpXUTllM0J5YjNCekxuSnZkWFJsWkgwZ2RHODllM0J5YjNCekxteHBibXQ5UGx4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUR4SmJXRm5aVll5U1c1dVpYSkRiMjUwWlc1MGN5QjdMaTR1Y0hKdmNITjlMejVjYmlBZ0lDQWdJQ0FnSUNBZ0lEd3ZVbTkxZEdWa1RHbHVhejVjYmlBZ0lDQWdJQ0FnS1Z4dUlDQWdJSDFjYmlBZ0lDQnlaWFIxY200Z1BFbHRZV2RsVmpKSmJtNWxja052Ym5SbGJuUnpJSHN1TGk1d2NtOXdjMzB2UGx4dWZUdGNibHh1WTI5dWMzUWdTVzFoWjJWV01rbHRjR3dnUFNBb2NISnZjSE02U1cxaFoyVldNazF2WkdWc0tTQTlQaUI3WEc1Y2JpQWdJQ0JqYjI1emRDQjdhWE5KYmtWa2FYUnZjaUE5SUdaaGJITmxmU0E5SUhCeWIzQnpPMXh1SUNBZ0lHTnZibk4wSUdOemMwTnNZWE56VG1GdFpTQTlJQ2hwYzBsdVJXUnBkRzl5S1NBL0lIQnliM0J6TG1KaGMyVkRjM05EYkdGemN5QXJJQ2NnWTNFdFpHUXRhVzFoWjJVbklEb2djSEp2Y0hNdVltRnpaVU56YzBOc1lYTnpPMXh1WEc0Z0lDQWdJSEpsZEhWeWJpQW9YRzRnSUNBZ0lDQWdJQ0E4WkdsMklHTnNZWE56VG1GdFpUMTdZM056UTJ4aGMzTk9ZVzFsZlQ1Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0E4U1cxaFoyVldNa052Ym5SbGJuUnpJSHN1TGk1d2NtOXdjMzB2UGx4dUlDQWdJQ0FnSUNBZ1BDOWthWFkrWEc0Z0lDQWdJQ2xjYmx4dWZUdGNibHh1WTI5dWMzUWdTVzFoWjJWV01pQTlJQ2h3Y205d2N6cEpiV0ZuWlZZeVRXOWtaV3dwSUQwK0lIdGNibHh1SUNBZ0lHTnZibk4wSUZkeVlYQndaV1FnUFNCM2FYUm9RMjl1WkdsMGFXOXVZV3hRYkdGalpVaHZiR1JsY2loM2FYUm9VM1JoYm1SaGNtUkNZWE5sUTNOelEyeGhjM01vU1cxaFoyVldNa2x0Y0d3c0lGd2lZMjF3TFdsdFlXZGxYQ0lwTENCSmJXRm5aVll5U1hORmJYQjBlVVp1TENCY0lrbHRZV2RsSUZZeVhDSXBPMXh1SUNBZ0lISmxkSFZ5YmlBOFYzSmhjSEJsWkNCN0xpNHVjSEp2Y0hOOUx6NWNibjA3WEc1Y2JtVjRjRzl5ZENCa1pXWmhkV3gwSUVsdFlXZGxWakk3SWwxOSIsImV4cG9ydCBmdW5jdGlvbiBJbWFnZVYySXNFbXB0eUZuKHByb3BzKSB7XG4gICAgcmV0dXJuICghcHJvcHMuc3JjKSB8fCBwcm9wcy5zcmMudHJpbSgpLmxlbmd0aCA9PT0gMDtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaVNXMWhaMlZXTWtselJXMXdkSGxHYmk1cWN5SXNJbk52ZFhKalpWSnZiM1FpT2lJaUxDSnpiM1Z5WTJWeklqcGJJa2x0WVdkbFZqSkpjMFZ0Y0hSNVJtNHVkSE1pWFN3aWJtRnRaWE1pT2x0ZExDSnRZWEJ3YVc1bmN5STZJa0ZCUlVFc1RVRkJUU3hWUVVGVkxHZENRVUZuUWl4RFFVRkRMRXRCUVd0Q08wbEJReTlETEU5QlFVOHNRMEZCUXl4RFFVRkRMRXRCUVVzc1EwRkJReXhIUVVGSExFTkJRVU1zU1VGQlNTeExRVUZMTEVOQlFVTXNSMEZCUnl4RFFVRkRMRWxCUVVrc1JVRkJSU3hEUVVGRExFMUJRVTBzUzBGQlN5eERRVUZETEVOQlFVTTdRVUZEZWtRc1EwRkJReUlzSW5OdmRYSmpaWE5EYjI1MFpXNTBJanBiSW1sdGNHOXlkQ0I3U1cxaFoyVldNazF2WkdWc2ZTQm1jbTl0SUZ3aUxpOUpiV0ZuWlZZeVhDSTdYRzVjYm1WNGNHOXlkQ0JtZFc1amRHbHZiaUJKYldGblpWWXlTWE5GYlhCMGVVWnVLSEJ5YjNCek9rbHRZV2RsVmpKTmIyUmxiQ2tnZTF4dUlDQWdJSEpsZEhWeWJpQW9JWEJ5YjNCekxuTnlZeWtnZkh3Z2NISnZjSE11YzNKakxuUnlhVzBvS1M1c1pXNW5kR2dnUFQwOUlEQTdYRzU5WEc0aVhYMD0iLCIvKlxuICogIENvcHlyaWdodCAyMDIwIEFkb2JlXG4gKlxuICogIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiAgeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICAgICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqICBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiAgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiAgU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB3aXRoQ29uZGl0aW9uYWxQbGFjZUhvbGRlciwgd2l0aFN0YW5kYXJkQmFzZUNzc0NsYXNzIH0gZnJvbSBcIi4uLy4uLy4uL0Fic3RyYWN0Q29yZUNvbXBvbmVudFwiO1xuaW1wb3J0IEltYWdlVjEgZnJvbSBcIi4uLy4uLy4uL2F1dGhvcmluZy9pbWFnZS92Mi9JbWFnZVYyXCI7XG5pbXBvcnQgVGl0bGVWMSBmcm9tIFwiLi4vLi4vLi4vYXV0aG9yaW5nL3RpdGxlL3YyL1RpdGxlVjJcIjtcbmltcG9ydCB7IFJvdXRlZExpbmsgfSBmcm9tIFwiLi4vLi4vLi4vcm91dGluZy9Sb3V0ZWRMaW5rXCI7XG5pbXBvcnQgeyBUZWFzZXJWMUlzRW1wdHlGbiB9IGZyb20gXCIuL1RlYXNlclYxSXNFbXB0eUZuXCI7XG5jb25zdCBnZW5lcmF0ZUxpbmsgPSAocHJvcHMsIGFjdGlvbiwgaW5kZXgpID0+IHtcbiAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChSb3V0ZWRMaW5rLCB7IGtleTogXCJsaW5rLVwiICsgaW5kZXgsIGlzUm91dGVkOiBwcm9wcy5yb3V0ZWQsIGNsYXNzTmFtZTogcHJvcHMuYmFzZUNzc0NsYXNzICsgJ19fYWN0aW9uLWxpbmsnLCB0bzogYWN0aW9uLlVSTCB9LFxuICAgICAgICBcIiRcIixcbiAgICAgICAgYWN0aW9uLnRpdGxlKTtcbn07XG5jb25zdCBUZWFzZXJWMUltYWdlID0gKHByb3BzKSA9PiB7XG4gICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3NOYW1lOiBwcm9wcy5iYXNlQ3NzQ2xhc3MgKyAnX19pbWFnZScgfSxcbiAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChJbWFnZVYxLCB7IGlzSW5FZGl0b3I6IHByb3BzLmlzSW5FZGl0b3IsIHNyYzogcHJvcHMuaW1hZ2VQYXRoLCBhbHQ6IHByb3BzLmltYWdlQWx0IH0pKSk7XG59O1xuY29uc3QgVGVhc2VyVjFQcmVUaXRsZSA9IChwcm9wcykgPT4gUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzTmFtZTogcHJvcHMuYmFzZUNzc0NsYXNzICsgJ19fcHJldGl0bGUnIH0sIHByb3BzLnByZXRpdGxlKTtcbmNvbnN0IFRlYXNlclYxVGl0bGUgPSAocHJvcHMpID0+IFJlYWN0LmNyZWF0ZUVsZW1lbnQoVGl0bGVWMSwgeyBiYXNlQ3NzQ2xhc3M6IHByb3BzLmJhc2VDc3NDbGFzcyArICdfX3RpdGxlJywgbmVzdGVkOiB0cnVlLCB0eXBlOiBwcm9wcy50aXRsZVR5cGUsIGlzSW5FZGl0b3I6IHByb3BzLmlzSW5FZGl0b3IsIGxpbmtEaXNhYmxlZDogZmFsc2UsIHRleHQ6IHByb3BzLnRpdGxlLCBsaW5rVVJMOiBwcm9wcy5saW5rVVJMIH0pO1xuY29uc3QgVGVhc2VyVjFEZXNjcmlwdGlvbiA9IChwcm9wcykgPT4ge1xuICAgIGNvbnN0IHRleHQgPSBwcm9wcy5kZXNjcmlwdGlvbjtcbiAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzTmFtZTogcHJvcHMuYmFzZUNzc0NsYXNzICsgJ19fZGVzY3JpcHRpb24nLCBkYW5nZXJvdXNseVNldElubmVySFRNTDogeyBfX2h0bWw6IHRleHQgfSB9KTtcbn07XG5jb25zdCBUZWFzZXJWMUFjdGlvbnMgPSAocHJvcHMpID0+IHtcbiAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzc05hbWU6IHByb3BzLmJhc2VDc3NDbGFzcyArICdfX2FjdGlvbi1jb250YWluZXInIH0sIHByb3BzLmFjdGlvbnMubWFwKChhY3Rpb24sIGluZGV4KSA9PiB7XG4gICAgICAgIHJldHVybiBnZW5lcmF0ZUxpbmsocHJvcHMsIGFjdGlvbiwgaW5kZXgpO1xuICAgIH0pKSk7XG59O1xuY29uc3QgVGVhc2VyVjFJbXBsID0gKHByb3BzKSA9PiB7XG4gICAgY29uc3QgY3NzQ2xhc3MgPSBwcm9wcy5iYXNlQ3NzQ2xhc3MgfHwgJycgKyAocHJvcHMuaXNJbkVkaXRvcikgPyAnIGNxLWRkLWltYWdlJyA6ICcnO1xuICAgIGNvbnN0IHNob3dBY3Rpb25zID0gKHByb3BzLmFjdGlvbnMubGVuZ3RoID4gMCkgJiYgcHJvcHMuYWN0aW9uc0VuYWJsZWQ7XG4gICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3NOYW1lOiBjc3NDbGFzcyB9LFxuICAgICAgICBwcm9wcy5pbWFnZVBhdGggJiYgUmVhY3QuY3JlYXRlRWxlbWVudChUZWFzZXJWMUltYWdlLCBPYmplY3QuYXNzaWduKHt9LCBwcm9wcykpLFxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3NOYW1lOiBwcm9wcy5iYXNlQ3NzQ2xhc3MgKyAnX19jb250ZW50JyB9LFxuICAgICAgICAgICAgcHJvcHMucHJldGl0bGUgJiYgUmVhY3QuY3JlYXRlRWxlbWVudChUZWFzZXJWMVByZVRpdGxlLCBPYmplY3QuYXNzaWduKHt9LCBwcm9wcykpLFxuICAgICAgICAgICAgcHJvcHMudGl0bGUgJiYgUmVhY3QuY3JlYXRlRWxlbWVudChUZWFzZXJWMVRpdGxlLCBPYmplY3QuYXNzaWduKHt9LCBwcm9wcykpLFxuICAgICAgICAgICAgcHJvcHMuZGVzY3JpcHRpb24gJiYgUmVhY3QuY3JlYXRlRWxlbWVudChUZWFzZXJWMURlc2NyaXB0aW9uLCBPYmplY3QuYXNzaWduKHt9LCBwcm9wcykpLFxuICAgICAgICAgICAgc2hvd0FjdGlvbnMgJiYgUmVhY3QuY3JlYXRlRWxlbWVudChUZWFzZXJWMUFjdGlvbnMsIE9iamVjdC5hc3NpZ24oe30sIHByb3BzKSkpKSk7XG59O1xuY29uc3QgVGVhc2VyVjEgPSAocHJvcHMpID0+IHtcbiAgICBjb25zdCBXcmFwcGVkID0gd2l0aENvbmRpdGlvbmFsUGxhY2VIb2xkZXIod2l0aFN0YW5kYXJkQmFzZUNzc0NsYXNzKFRlYXNlclYxSW1wbCwgXCJjbXAtdGVhc2VyXCIpLCBUZWFzZXJWMUlzRW1wdHlGbiwgXCJUZWFzZXIgVjFcIik7XG4gICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoV3JhcHBlZCwgT2JqZWN0LmFzc2lnbih7fSwgcHJvcHMpKTtcbn07XG5leHBvcnQgZGVmYXVsdCBUZWFzZXJWMTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaVZHVmhjMlZ5VmpFdWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUlpd2ljMjkxY21ObGN5STZXeUpVWldGelpYSldNUzUwYzNnaVhTd2libUZ0WlhNaU9sdGRMQ0p0WVhCd2FXNW5jeUk2SWtGQlFVRTdPenM3T3pzN096czdPenM3TzBkQlkwYzdRVUZIU0N4UFFVRlBMRXRCUVd0Q0xFMUJRVTBzVDBGQlR5eERRVUZETzBGQlEzWkRMRTlCUVU4c1JVRkJReXd3UWtGQk1FSXNSVUZCUlN4M1FrRkJkMElzUlVGQlF5eE5RVUZOTEdkRFFVRm5ReXhEUVVGRE8wRkJRM0JITEU5QlFVOHNUMEZCVHl4TlFVRk5MSEZEUVVGeFF5eERRVUZETzBGQlF6RkVMRTlCUVU4c1QwRkJUeXhOUVVGTkxIRkRRVUZ4UXl4RFFVRkRPMEZCUXpGRUxFOUJRVThzUlVGQlF5eFZRVUZWTEVWQlFVTXNUVUZCVFN3MlFrRkJOa0lzUTBGQlF6dEJRVVYyUkN4UFFVRlBMRVZCUVVNc2FVSkJRV2xDTEVWQlFVTXNUVUZCVFN4eFFrRkJjVUlzUTBGQlF6dEJRWEZDZEVRc1RVRkJUU3haUVVGWkxFZEJRVWNzUTBGQlF5eExRVUZ0UWl4RlFVRkZMRTFCUVhGQ0xFVkJRVVVzUzBGQldTeEZRVUZGTEVWQlFVVTdTVUZET1VVc1QwRkJUeXh2UWtGQlF5eFZRVUZWTEVsQlFVTXNSMEZCUnl4RlFVRkZMRTlCUVU4c1IwRkJSeXhMUVVGTExFVkJRVVVzVVVGQlVTeEZRVUZGTEV0QlFVc3NRMEZCUXl4TlFVRk5MRVZCUVVVc1UwRkJVeXhGUVVGRkxFdEJRVXNzUTBGQlF5eFpRVUZaTEVkQlFVY3NaVUZCWlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hOUVVGTkxFTkJRVU1zUjBGQlJ6czdVVUZCU1N4TlFVRk5MRU5CUVVNc1MwRkJTeXhEUVVGakxFTkJRVUU3UVVGRGJFc3NRMEZCUXl4RFFVRkJPMEZCUlVRc1RVRkJUU3hoUVVGaExFZEJRVWNzUTBGQlF5eExRVUZ0UWl4RlFVRkZMRVZCUVVVN1NVRkRNVU1zVDBGQlR5eERRVU5JTERaQ1FVRkxMRk5CUVZNc1JVRkJSU3hMUVVGTExFTkJRVU1zV1VGQldTeEhRVUZITEZOQlFWTTdVVUZETVVNc2IwSkJRVU1zVDBGQlR5eEpRVUZETEZWQlFWVXNSVUZCUlN4TFFVRkxMRU5CUVVNc1ZVRkJWU3hGUVVGRkxFZEJRVWNzUlVGQlJTeExRVUZMTEVOQlFVTXNVMEZCVXl4RlFVRkZMRWRCUVVjc1JVRkJSU3hMUVVGTExFTkJRVU1zVVVGQlVTeEhRVUZITEVOQlEycEdMRU5CUTFRc1EwRkJRenRCUVVOT0xFTkJRVU1zUTBGQlF6dEJRVVZHTEUxQlFVMHNaMEpCUVdkQ0xFZEJRVWNzUTBGQlF5eExRVUZ0UWl4RlFVRkZMRVZCUVVVc1EwRkJReXcyUWtGQlN5eFRRVUZUTEVWQlFVVXNTMEZCU3l4RFFVRkRMRmxCUVZrc1IwRkJSeXhaUVVGWkxFbEJRVWNzUzBGQlN5eERRVUZETEZGQlFWRXNRMEZCVHl4RFFVRkRPMEZCUlRWSUxFMUJRVTBzWVVGQllTeEhRVUZITEVOQlFVTXNTMEZCYlVJc1JVRkJSU3hGUVVGRkxFTkJRM1JETEc5Q1FVRkRMRTlCUVU4c1NVRkJReXhaUVVGWkxFVkJRVVVzUzBGQlN5eERRVUZETEZsQlFWa3NSMEZCUnl4VFFVRlRMRVZCUXpWRExFMUJRVTBzUlVGQlJTeEpRVUZKTEVWQlExb3NTVUZCU1N4RlFVRkZMRXRCUVVzc1EwRkJReXhUUVVGVExFVkJRM0pDTEZWQlFWVXNSVUZCUlN4TFFVRkxMRU5CUVVNc1ZVRkJWU3hGUVVNMVFpeFpRVUZaTEVWQlFVVXNTMEZCU3l4RlFVTnVRaXhKUVVGSkxFVkJRVVVzUzBGQlN5eERRVUZETEV0QlFVc3NSVUZEYWtJc1QwRkJUeXhGUVVGRkxFdEJRVXNzUTBGQlF5eFBRVUZQTEVkQlFVY3NRMEZCUXp0QlFVY3pReXhOUVVGTkxHMUNRVUZ0UWl4SFFVRkhMRU5CUVVNc1MwRkJiVUlzUlVGQlJTeEZRVUZGTzBsQlEyaEVMRTFCUVUwc1NVRkJTU3hIUVVGVkxFdEJRVXNzUTBGQlF5eFhRVUZ4UWl4RFFVRkRPMGxCUTJoRUxFOUJRVThzTmtKQlFVc3NVMEZCVXl4RlFVRkZMRXRCUVVzc1EwRkJReXhaUVVGWkxFZEJRVWNzWlVGQlpTeEZRVUZGTEhWQ1FVRjFRaXhGUVVGRkxFVkJRVU1zVFVGQlRTeEZRVUZGTEVsQlFVa3NSVUZCUXl4SFFVRlJMRU5CUVVNN1FVRkRha2dzUTBGQlF5eERRVUZETzBGQlJVWXNUVUZCVFN4bFFVRmxMRWRCUVVjc1EwRkJReXhMUVVGdFFpeEZRVUZGTEVWQlFVVTdTVUZETlVNc1QwRkJUeXhEUVVOSUxEWkNRVUZMTEZOQlFWTXNSVUZCUlN4TFFVRkxMRU5CUVVNc1dVRkJXU3hIUVVGSExHOUNRVUZ2UWl4SlFVVnFSQ3hMUVVGTExFTkJRVU1zVDBGQlR5eERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRMRTFCUVUwc1JVRkJSU3hMUVVGTExFVkJRVVVzUlVGQlJUdFJRVU5vUXl4UFFVRlBMRmxCUVZrc1EwRkJReXhMUVVGTExFVkJRVU1zVFVGQlRTeEZRVUZETEV0QlFVc3NRMEZCUXl4RFFVRkJPMGxCUXpORExFTkJRVU1zUTBGQlF5eERRVVZLTEVOQlExUXNRMEZCUVR0QlFVTk1MRU5CUVVNc1EwRkJRenRCUVVWR0xFMUJRVTBzV1VGQldTeEhRVUZITEVOQlFVTXNTMEZCYlVJc1JVRkJSU3hGUVVGRk8wbEJRM3BETEUxQlFVMHNVVUZCVVN4SFFVRkhMRXRCUVVzc1EwRkJReXhaUVVGWkxFbEJRVWtzUlVGQlJTeEhRVUZITEVOQlFVTXNTMEZCU3l4RFFVRkRMRlZCUVZVc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eGpRVUZqTEVOQlFVTXNRMEZCUXl4RFFVRkRMRVZCUVVVc1EwRkJRenRKUVVOeVJpeE5RVUZOTEZkQlFWY3NSMEZCVnl4RFFVRkZMRXRCUVVzc1EwRkJReXhQUVVGUExFTkJRVU1zVFVGQlRTeEhRVUZITEVOQlFVTXNRMEZCUlN4SlFVRkpMRXRCUVVzc1EwRkJReXhqUVVGakxFTkJRVU03U1VGRGFrWXNUMEZCVHl4RFFVTklMRFpDUVVGTExGTkJRVk1zUlVGQlJTeFJRVUZSTzFGQlEyNUNMRXRCUVVzc1EwRkJReXhUUVVGVExFbEJRVWtzYjBKQlFVTXNZVUZCWVN4dlFrRkJTeXhMUVVGTExFVkJRVWM3VVVGREwwTXNOa0pCUVVzc1UwRkJVeXhGUVVGRkxFdEJRVXNzUTBGQlF5eFpRVUZaTEVkQlFVY3NWMEZCVnp0WlFVTXpReXhMUVVGTExFTkJRVU1zVVVGQlVTeEpRVUZKTEc5Q1FVRkRMR2RDUVVGblFpeHZRa0ZCU3l4TFFVRkxMRVZCUVVjN1dVRkRhRVFzUzBGQlN5eERRVUZETEV0QlFVc3NTVUZCU1N4dlFrRkJReXhoUVVGaExHOUNRVUZMTEV0QlFVc3NSVUZCUnp0WlFVTXhReXhMUVVGTExFTkJRVU1zVjBGQlZ5eEpRVUZKTEc5Q1FVRkRMRzFDUVVGdFFpeHZRa0ZCU3l4TFFVRkxMRVZCUVVjN1dVRkRkRVFzVjBGQlZ5eEpRVUZKTEc5Q1FVRkRMR1ZCUVdVc2IwSkJRVXNzUzBGQlN5eEZRVUZITEVOQlF6TkRMRU5CUTBvc1EwRkRWQ3hEUVVGQk8wRkJRMHdzUTBGQlF5eERRVUZETzBGQlIwWXNUVUZCVFN4UlFVRlJMRWRCUVVjc1EwRkJReXhMUVVGdFFpeEZRVUZGTEVWQlFVVTdTVUZEY2tNc1RVRkJUU3hQUVVGUExFZEJRVWNzTUVKQlFUQkNMRU5CUVVNc2QwSkJRWGRDTEVOQlFVTXNXVUZCV1N4RlFVRkZMRmxCUVZrc1EwRkJReXhGUVVGRkxHbENRVUZwUWl4RlFVRkZMRmRCUVZjc1EwRkJReXhEUVVGQk8wbEJRMmhKTEU5QlFVOHNiMEpCUVVNc1QwRkJUeXh2UWtGQlN5eExRVUZMTEVWQlFVY3NRMEZCUVR0QlFVTm9ReXhEUVVGRExFTkJRVU03UVVGRlJpeGxRVUZsTEZGQlFWRXNRMEZCUXlJc0luTnZkWEpqWlhORGIyNTBaVzUwSWpwYklpOHFYRzRnS2lBZ1EyOXdlWEpwWjJoMElESXdNakFnUVdSdlltVmNiaUFxWEc0Z0tpQWdUR2xqWlc1elpXUWdkVzVrWlhJZ2RHaGxJRUZ3WVdOb1pTQk1hV05sYm5ObExDQldaWEp6YVc5dUlESXVNQ0FvZEdobElGd2lUR2xqWlc1elpWd2lLVHRjYmlBcUlDQjViM1VnYldGNUlHNXZkQ0IxYzJVZ2RHaHBjeUJtYVd4bElHVjRZMlZ3ZENCcGJpQmpiMjF3YkdsaGJtTmxJSGRwZEdnZ2RHaGxJRXhwWTJWdWMyVXVYRzRnS2lBZ1dXOTFJRzFoZVNCdlluUmhhVzRnWVNCamIzQjVJRzltSUhSb1pTQk1hV05sYm5ObElHRjBYRzRnS2x4dUlDb2dJQ0FnSUNCb2RIUndPaTh2ZDNkM0xtRndZV05vWlM1dmNtY3ZiR2xqWlc1elpYTXZURWxEUlU1VFJTMHlMakJjYmlBcVhHNGdLaUFnVlc1c1pYTnpJSEpsY1hWcGNtVmtJR0o1SUdGd2NHeHBZMkZpYkdVZ2JHRjNJRzl5SUdGbmNtVmxaQ0IwYnlCcGJpQjNjbWwwYVc1bkxDQnpiMlowZDJGeVpWeHVJQ29nSUdScGMzUnlhV0oxZEdWa0lIVnVaR1Z5SUhSb1pTQk1hV05sYm5ObElHbHpJR1JwYzNSeWFXSjFkR1ZrSUc5dUlHRnVJRndpUVZNZ1NWTmNJaUJDUVZOSlV5eGNiaUFxSUNCWFNWUklUMVZVSUZkQlVsSkJUbFJKUlZNZ1QxSWdRMDlPUkVsVVNVOU9VeUJQUmlCQlRsa2dTMGxPUkN3Z1pXbDBhR1Z5SUdWNGNISmxjM01nYjNJZ2FXMXdiR2xsWkM1Y2JpQXFJQ0JUWldVZ2RHaGxJRXhwWTJWdWMyVWdabTl5SUhSb1pTQnpjR1ZqYVdacFl5QnNZVzVuZFdGblpTQm5iM1psY201cGJtY2djR1Z5YldsemMybHZibk1nWVc1a1hHNGdLaUFnYkdsdGFYUmhkR2x2Ym5NZ2RXNWtaWElnZEdobElFeHBZMlZ1YzJVdVhHNGdLaTljYmx4dVhHNXBiWEJ2Y25RZ1VtVmhZM1FzSUh0RGIyMXdiMjVsYm5SOUlHWnliMjBnWENKeVpXRmpkRndpTzF4dWFXMXdiM0owSUh0M2FYUm9RMjl1WkdsMGFXOXVZV3hRYkdGalpVaHZiR1JsY2l3Z2QybDBhRk4wWVc1a1lYSmtRbUZ6WlVOemMwTnNZWE56ZlNCbWNtOXRJRndpTGk0dkxpNHZMaTR2UVdKemRISmhZM1JEYjNKbFEyOXRjRzl1Wlc1MFhDSTdYRzVwYlhCdmNuUWdTVzFoWjJWV01TQm1jbTl0SUZ3aUxpNHZMaTR2TGk0dllYVjBhRzl5YVc1bkwybHRZV2RsTDNZeUwwbHRZV2RsVmpKY0lqdGNibWx0Y0c5eWRDQlVhWFJzWlZZeElHWnliMjBnWENJdUxpOHVMaTh1TGk5aGRYUm9iM0pwYm1jdmRHbDBiR1V2ZGpJdlZHbDBiR1ZXTWx3aU8xeHVhVzF3YjNKMElIdFNiM1YwWldSTWFXNXJmU0JtY205dElGd2lMaTR2TGk0dkxpNHZjbTkxZEdsdVp5OVNiM1YwWldSTWFXNXJYQ0k3WEc1cGJYQnZjblFnZTFKdmRYUmxaRU52Y21WRGIyMXdiMjVsYm5STmIyUmxiQ3dnVW05MWRHVmtUVzlrWld4OUlHWnliMjBnWENJdUxpOHVMaTh1TGk5eWIzVjBhVzVuTDFKdmRYUmxaRU52Y21WRGIyMXdiMjVsYm5SY0lqdGNibWx0Y0c5eWRDQjdWR1ZoYzJWeVZqRkpjMFZ0Y0hSNVJtNTlJR1p5YjIwZ1hDSXVMMVJsWVhObGNsWXhTWE5GYlhCMGVVWnVYQ0k3WEc1Y2JtVjRjRzl5ZENCcGJuUmxjbVpoWTJVZ1ZHVmhjMlZ5VmpGQlkzUnBiMjRnWlhoMFpXNWtjeUJTYjNWMFpXUk5iMlJsYkh0Y2JpQWdJQ0IwYVhSc1pUb2djM1J5YVc1blhHNGdJQ0FnVlZKTU9pQnpkSEpwYm1kY2JuMWNibHh1Wlhod2IzSjBJR2x1ZEdWeVptRmpaU0JVWldGelpYSldNVTF2WkdWc0lHVjRkR1Z1WkhNZ1VtOTFkR1ZrUTI5eVpVTnZiWEJ2Ym1WdWRFMXZaR1ZzZTF4dUlDQWdJSEJ5WlhScGRHeGxQem9nYzNSeWFXNW5YRzRnSUNBZ2RHbDBiR1U2SUhOMGNtbHVaMXh1SUNBZ0lHUmxjMk55YVhCMGFXOXVQem9nYzNSeWFXNW5YRzRnSUNBZ2RHbDBiR1ZVZVhCbE9pQnpkSEpwYm1kY2JpQWdJQ0JzYVc1clZWSk1PaUJ6ZEhKcGJtZGNiaUFnSUNCaFkzUnBiMjV6Ulc1aFlteGxaRG9nWW05dmJHVmhibHh1SUNBZ0lHbHRZV2RsVEdsdWEwaHBaR1JsYmpvZ1ltOXZiR1ZoYmx4dUlDQWdJR2x0WVdkbFFXeDBPaUJ6ZEhKcGJtZGNiaUFnSUNCMGFYUnNaVXhwYm10SWFXUmtaVzQ2SUdKdmIyeGxZVzVjYmlBZ0lDQmhZM1JwYjI1ek9pQlVaV0Z6WlhKV01VRmpkR2x2Ymx0ZFhHNGdJQ0FnYVcxaFoyVlFZWFJvT2lCemRISnBibWRjYm4xY2JseHVZMjl1YzNRZ1oyVnVaWEpoZEdWTWFXNXJJRDBnS0hCeWIzQnpPbFJsWVhObGNsWXhUVzlrWld3c0lHRmpkR2x2YmpwVVpXRnpaWEpXTVVGamRHbHZiaXdnYVc1a1pYZzZiblZ0WW1WeUtTQTlQaUI3WEc0Z0lDQWdjbVYwZFhKdUlEeFNiM1YwWldSTWFXNXJJR3RsZVQxN1hDSnNhVzVyTFZ3aUlDc2dhVzVrWlhoOUlHbHpVbTkxZEdWa1BYdHdjbTl3Y3k1eWIzVjBaV1I5SUdOc1lYTnpUbUZ0WlQxN2NISnZjSE11WW1GelpVTnpjME5zWVhOeklDc2dKMTlmWVdOMGFXOXVMV3hwYm1zbmZTQjBiejE3WVdOMGFXOXVMbFZTVEgwK0pIdGhZM1JwYjI0dWRHbDBiR1Y5UEM5U2IzVjBaV1JNYVc1clBseHVmVnh1WEc1amIyNXpkQ0JVWldGelpYSldNVWx0WVdkbElEMGdLSEJ5YjNCek9sUmxZWE5sY2xZeFRXOWtaV3dwSUQwK0lIdGNiaUFnSUNCeVpYUjFjbTRnS0Z4dUlDQWdJQ0FnSUNBOFpHbDJJR05zWVhOelRtRnRaVDE3Y0hKdmNITXVZbUZ6WlVOemMwTnNZWE56SUNzZ0oxOWZhVzFoWjJVbmZUNWNiaUFnSUNBZ0lDQWdJQ0FnSUR4SmJXRm5aVll4SUdselNXNUZaR2wwYjNJOWUzQnliM0J6TG1selNXNUZaR2wwYjNKOUlITnlZejE3Y0hKdmNITXVhVzFoWjJWUVlYUm9mU0JoYkhROWUzQnliM0J6TG1sdFlXZGxRV3gwZlM4K1hHNGdJQ0FnSUNBZ0lEd3ZaR2wyUGx4dUlDQWdJQ2s3WEc1OU8xeHVYRzVqYjI1emRDQlVaV0Z6WlhKV01WQnlaVlJwZEd4bElEMGdLSEJ5YjNCek9sUmxZWE5sY2xZeFRXOWtaV3dwSUQwK0lEeGthWFlnWTJ4aGMzTk9ZVzFsUFh0d2NtOXdjeTVpWVhObFEzTnpRMnhoYzNNZ0t5QW5YMTl3Y21WMGFYUnNaU2Q5UG50d2NtOXdjeTV3Y21WMGFYUnNaWDA4TDJScGRqNDdYRzVjYm1OdmJuTjBJRlJsWVhObGNsWXhWR2wwYkdVZ1BTQW9jSEp2Y0hNNlZHVmhjMlZ5VmpGTmIyUmxiQ2tnUFQ0Z1hHNGdJQ0FnSUNBZ0lEeFVhWFJzWlZZeElHSmhjMlZEYzNORGJHRnpjejE3Y0hKdmNITXVZbUZ6WlVOemMwTnNZWE56SUNzZ0oxOWZkR2wwYkdVbmZWeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQnVaWE4wWldROWUzUnlkV1Y5WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUhSNWNHVTllM0J5YjNCekxuUnBkR3hsVkhsd1pYMWNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdhWE5KYmtWa2FYUnZjajE3Y0hKdmNITXVhWE5KYmtWa2FYUnZjbjFjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnYkdsdWEwUnBjMkZpYkdWa1BYdG1ZV3h6WlgxY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2RHVjRkRDE3Y0hKdmNITXVkR2wwYkdWOVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lHeHBibXRWVWt3OWUzQnliM0J6TG14cGJtdFZVa3g5THo0N1hHNWNibHh1WTI5dWMzUWdWR1ZoYzJWeVZqRkVaWE5qY21sd2RHbHZiaUE5SUNod2NtOXdjenBVWldGelpYSldNVTF2WkdWc0tTQTlQaUI3WEc0Z0lDQWdZMjl1YzNRZ2RHVjRkRHB6ZEhKcGJtY2dQU0J3Y205d2N5NWtaWE5qY21sd2RHbHZiaUJoY3lCemRISnBibWM3WEc0Z0lDQWdjbVYwZFhKdUlEeGthWFlnWTJ4aGMzTk9ZVzFsUFh0d2NtOXdjeTVpWVhObFEzTnpRMnhoYzNNZ0t5QW5YMTlrWlhOamNtbHdkR2x2YmlkOUlHUmhibWRsY205MWMyeDVVMlYwU1c1dVpYSklWRTFNUFh0N1gxOW9kRzFzT2lCMFpYaDBmWDArUEM5a2FYWStPMXh1ZlR0Y2JseHVZMjl1YzNRZ1ZHVmhjMlZ5VmpGQlkzUnBiMjV6SUQwZ0tIQnliM0J6T2xSbFlYTmxjbFl4VFc5a1pXd3BJRDArSUh0Y2JpQWdJQ0J5WlhSMWNtNGdLRnh1SUNBZ0lDQWdJQ0E4WkdsMklHTnNZWE56VG1GdFpUMTdjSEp2Y0hNdVltRnpaVU56YzBOc1lYTnpJQ3NnSjE5ZllXTjBhVzl1TFdOdmJuUmhhVzVsY2lkOVBseHVJQ0FnSUNBZ0lDQWdJQ0FnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUhCeWIzQnpMbUZqZEdsdmJuTXViV0Z3S0NoaFkzUnBiMjRzSUdsdVpHVjRLU0E5UGlCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJSEpsZEhWeWJpQm5aVzVsY21GMFpVeHBibXNvY0hKdmNITXNZV04wYVc5dUxHbHVaR1Y0S1Z4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUgwcFhHNGdJQ0FnSUNBZ0lDQWdJQ0I5WEc0Z0lDQWdJQ0FnSUR3dlpHbDJQbHh1SUNBZ0lDbGNibjA3WEc1Y2JtTnZibk4wSUZSbFlYTmxjbFl4U1cxd2JDQTlJQ2h3Y205d2N6cFVaV0Z6WlhKV01VMXZaR1ZzS1NBOVBpQjdYRzRnSUNBZ1kyOXVjM1FnWTNOelEyeGhjM01nUFNCd2NtOXdjeTVpWVhObFEzTnpRMnhoYzNNZ2ZId2dKeWNnS3lBb2NISnZjSE11YVhOSmJrVmthWFJ2Y2lrZ1B5QW5JR054TFdSa0xXbHRZV2RsSnlBNklDY25PMXh1SUNBZ0lHTnZibk4wSUhOb2IzZEJZM1JwYjI1ek9tSnZiMnhsWVc0Z1BTQW9JSEJ5YjNCekxtRmpkR2x2Ym5NdWJHVnVaM1JvSUQ0Z01DQXBJQ1ltSUhCeWIzQnpMbUZqZEdsdmJuTkZibUZpYkdWa08xeHVJQ0FnSUhKbGRIVnliaUFvWEc0Z0lDQWdJQ0FnSUR4a2FYWWdZMnhoYzNOT1lXMWxQWHRqYzNORGJHRnpjMzArWEc0Z0lDQWdJQ0FnSUNBZ0lDQjdjSEp2Y0hNdWFXMWhaMlZRWVhSb0lDWW1JRHhVWldGelpYSldNVWx0WVdkbElIc3VMaTV3Y205d2MzMHZQbjFjYmlBZ0lDQWdJQ0FnSUNBZ0lEeGthWFlnWTJ4aGMzTk9ZVzFsUFh0d2NtOXdjeTVpWVhObFEzTnpRMnhoYzNNZ0t5QW5YMTlqYjI1MFpXNTBKMzArWEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnZTNCeWIzQnpMbkJ5WlhScGRHeGxJQ1ltSUR4VVpXRnpaWEpXTVZCeVpWUnBkR3hsSUhzdUxpNXdjbTl3YzMwdlBuMWNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQjdjSEp2Y0hNdWRHbDBiR1VnSmlZZ1BGUmxZWE5sY2xZeFZHbDBiR1VnZXk0dUxuQnliM0J6ZlM4K2ZWeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lIdHdjbTl3Y3k1a1pYTmpjbWx3ZEdsdmJpQW1KaUE4VkdWaGMyVnlWakZFWlhOamNtbHdkR2x2YmlCN0xpNHVjSEp2Y0hOOUx6NTlYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdlM05vYjNkQlkzUnBiMjV6SUNZbUlEeFVaV0Z6WlhKV01VRmpkR2x2Ym5NZ2V5NHVMbkJ5YjNCemZTOCtmVnh1SUNBZ0lDQWdJQ0FnSUNBZ1BDOWthWFkrWEc0Z0lDQWdJQ0FnSUR3dlpHbDJQbHh1SUNBZ0lDbGNibjA3WEc1Y2JseHVZMjl1YzNRZ1ZHVmhjMlZ5VmpFZ1BTQW9jSEp2Y0hNNlZHVmhjMlZ5VmpGTmIyUmxiQ2tnUFQ0Z2UxeHVJQ0FnSUdOdmJuTjBJRmR5WVhCd1pXUWdQU0IzYVhSb1EyOXVaR2wwYVc5dVlXeFFiR0ZqWlVodmJHUmxjaWgzYVhSb1UzUmhibVJoY21SQ1lYTmxRM056UTJ4aGMzTW9WR1ZoYzJWeVZqRkpiWEJzTENCY0ltTnRjQzEwWldGelpYSmNJaWtzSUZSbFlYTmxjbFl4U1hORmJYQjBlVVp1TENCY0lsUmxZWE5sY2lCV01Wd2lLVnh1SUNBZ0lISmxkSFZ5YmlBOFYzSmhjSEJsWkNCN0xpNHVjSEp2Y0hOOUx6NWNibjA3WEc1Y2JtVjRjRzl5ZENCa1pXWmhkV3gwSUZSbFlYTmxjbFl4T3lKZGZRPT0iLCIvKlxuICogIENvcHlyaWdodCAyMDIwIEFkb2JlXG4gKlxuICogIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiAgeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICAgICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqICBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiAgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiAgU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5leHBvcnQgZnVuY3Rpb24gVGVhc2VyVjFJc0VtcHR5Rm4ocHJvcHMpIHtcbiAgICByZXR1cm4gKCFwcm9wcy5pbWFnZVBhdGggJiYgIXByb3BzLmRlc2NyaXB0aW9uICYmIHByb3BzLmFjdGlvbnMubGVuZ3RoID09IDApO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pVkdWaGMyVnlWakZKYzBWdGNIUjVSbTR1YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pSWl3aWMyOTFjbU5sY3lJNld5SlVaV0Z6WlhKV01VbHpSVzF3ZEhsR2JpNTBjeUpkTENKdVlXMWxjeUk2VzEwc0ltMWhjSEJwYm1keklqb2lRVUZCUVRzN096czdPenM3T3pzN096czdSMEZqUnp0QlFVdElMRTFCUVUwc1ZVRkJWU3hwUWtGQmFVSXNRMEZCUXl4TFFVRnRRanRKUVVOcVJDeFBRVUZQTEVOQlFVTXNRMEZCUXl4TFFVRkxMRU5CUVVNc1UwRkJVeXhKUVVGSkxFTkJRVU1zUzBGQlN5eERRVUZETEZkQlFWY3NTVUZCU3l4TFFVRkxMRU5CUVVNc1QwRkJUeXhEUVVGRExFMUJRVTBzU1VGQlNTeERRVUZETEVOQlFVTXNRMEZCUVR0QlFVTnFSaXhEUVVGRElpd2ljMjkxY21ObGMwTnZiblJsYm5RaU9sc2lMeXBjYmlBcUlDQkRiM0I1Y21sbmFIUWdNakF5TUNCQlpHOWlaVnh1SUNwY2JpQXFJQ0JNYVdObGJuTmxaQ0IxYm1SbGNpQjBhR1VnUVhCaFkyaGxJRXhwWTJWdWMyVXNJRlpsY25OcGIyNGdNaTR3SUNoMGFHVWdYQ0pNYVdObGJuTmxYQ0lwTzF4dUlDb2dJSGx2ZFNCdFlYa2dibTkwSUhWelpTQjBhR2x6SUdacGJHVWdaWGhqWlhCMElHbHVJR052YlhCc2FXRnVZMlVnZDJsMGFDQjBhR1VnVEdsalpXNXpaUzVjYmlBcUlDQlpiM1VnYldGNUlHOWlkR0ZwYmlCaElHTnZjSGtnYjJZZ2RHaGxJRXhwWTJWdWMyVWdZWFJjYmlBcVhHNGdLaUFnSUNBZ0lHaDBkSEE2THk5M2QzY3VZWEJoWTJobExtOXlaeTlzYVdObGJuTmxjeTlNU1VORlRsTkZMVEl1TUZ4dUlDcGNiaUFxSUNCVmJteGxjM01nY21WeGRXbHlaV1FnWW5rZ1lYQndiR2xqWVdKc1pTQnNZWGNnYjNJZ1lXZHlaV1ZrSUhSdklHbHVJSGR5YVhScGJtY3NJSE52Wm5SM1lYSmxYRzRnS2lBZ1pHbHpkSEpwWW5WMFpXUWdkVzVrWlhJZ2RHaGxJRXhwWTJWdWMyVWdhWE1nWkdsemRISnBZblYwWldRZ2IyNGdZVzRnWENKQlV5QkpVMXdpSUVKQlUwbFRMRnh1SUNvZ0lGZEpWRWhQVlZRZ1YwRlNVa0ZPVkVsRlV5QlBVaUJEVDA1RVNWUkpUMDVUSUU5R0lFRk9XU0JMU1U1RUxDQmxhWFJvWlhJZ1pYaHdjbVZ6Y3lCdmNpQnBiWEJzYVdWa0xseHVJQ29nSUZObFpTQjBhR1VnVEdsalpXNXpaU0JtYjNJZ2RHaGxJSE53WldOcFptbGpJR3hoYm1kMVlXZGxJR2R2ZG1WeWJtbHVaeUJ3WlhKdGFYTnphVzl1Y3lCaGJtUmNiaUFxSUNCc2FXMXBkR0YwYVc5dWN5QjFibVJsY2lCMGFHVWdUR2xqWlc1elpTNWNiaUFxTDF4dVhHNWNibWx0Y0c5eWRDQjdWR1ZoYzJWeVZqRk5iMlJsYkgwZ1puSnZiU0JjSWk0dlZHVmhjMlZ5VmpGY0lqdGNibHh1Wlhod2IzSjBJR1oxYm1OMGFXOXVJRlJsWVhObGNsWXhTWE5GYlhCMGVVWnVLSEJ5YjNCek9sUmxZWE5sY2xZeFRXOWtaV3dwT2lCaWIyOXNaV0Z1ZTF4dUlDQWdJSEpsZEhWeWJpQW9JWEJ5YjNCekxtbHRZV2RsVUdGMGFDQW1KaUFoY0hKdmNITXVaR1Z6WTNKcGNIUnBiMjRnSmlZZ0lIQnliM0J6TG1GamRHbHZibk11YkdWdVozUm9JRDA5SURBcFhHNTlYRzRpWFgwPSIsIi8qXG4gKiAgQ29weXJpZ2h0IDIwMjAgQWRvYmVcbiAqXG4gKiAgTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqICB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiAgWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICAgICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiAgVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqICBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqICBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiAgbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB3aXRoQ29uZGl0aW9uYWxQbGFjZUhvbGRlciwgd2l0aFN0YW5kYXJkQmFzZUNzc0NsYXNzIH0gZnJvbSBcIi4uLy4uLy4uL0Fic3RyYWN0Q29yZUNvbXBvbmVudFwiO1xuaW1wb3J0IHsgUm91dGVkTGluayB9IGZyb20gXCIuLi8uLi8uLi9yb3V0aW5nL1JvdXRlZExpbmtcIjtcbmltcG9ydCB7IFRpdGxlVjJJc0VtcHR5Rm4gfSBmcm9tIFwiLi9UaXRsZVYySXNFbXB0eUZuXCI7XG5jb25zdCBiZW1Nb2RpZmllclByZWZpeCA9IChwcm9wcykgPT4gcHJvcHMubmVzdGVkID8gJy0nIDogJ19fJztcbmV4cG9ydCBjb25zdCBUaXRsZVYyTGluayA9IChwcm9wcykgPT4ge1xuICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChSb3V0ZWRMaW5rLCB7IGNsYXNzTmFtZTogcHJvcHMuYmFzZUNzc0NsYXNzICsgYmVtTW9kaWZpZXJQcmVmaXgocHJvcHMpICsgJ2xpbmsnLCBpc1JvdXRlZDogcHJvcHMucm91dGVkLCB0bzogcHJvcHMubGlua1VSTCB9LCBwcm9wcy50ZXh0KSk7XG59O1xuZXhwb3J0IGNvbnN0IFRpdGxlVjJDb250ZW50cyA9IChwcm9wcykgPT4ge1xuICAgIGlmICghcHJvcHMubGlua0Rpc2FibGVkKSB7XG4gICAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFRpdGxlVjJMaW5rLCBPYmplY3QuYXNzaWduKHt9LCBwcm9wcykpO1xuICAgIH1cbiAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChSZWFjdC5GcmFnbWVudCwgbnVsbCwgcHJvcHMudGV4dCk7XG59O1xuY29uc3QgVGl0bGVWMkltcGwgPSAocHJvcHMpID0+IHtcbiAgICBjb25zdCBlbGVtZW50VHlwZSA9ICghIXByb3BzLnR5cGUpID8gcHJvcHMudHlwZS50b1N0cmluZygpIDogJ2gzJztcbiAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzc05hbWU6IHByb3BzLmJhc2VDc3NDbGFzcyB9LCBSZWFjdC5jcmVhdGVFbGVtZW50KGVsZW1lbnRUeXBlLCB7XG4gICAgICAgIGNsYXNzTmFtZTogcHJvcHMuYmFzZUNzc0NsYXNzICsgYmVtTW9kaWZpZXJQcmVmaXgocHJvcHMpICsgJ3RleHQnLFxuICAgIH0sIFJlYWN0LmNyZWF0ZUVsZW1lbnQoVGl0bGVWMkNvbnRlbnRzLCBPYmplY3QuYXNzaWduKHt9LCBwcm9wcykpKSkpO1xufTtcbmNvbnN0IFRpdGxlVjIgPSAocHJvcHMpID0+IHtcbiAgICBjb25zdCBXcmFwcGVkID0gd2l0aENvbmRpdGlvbmFsUGxhY2VIb2xkZXIod2l0aFN0YW5kYXJkQmFzZUNzc0NsYXNzKFRpdGxlVjJJbXBsLCBcImNtcC10aXRsZVwiKSwgVGl0bGVWMklzRW1wdHlGbiwgXCJUaXRsZVYyXCIpO1xuICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFdyYXBwZWQsIE9iamVjdC5hc3NpZ24oe30sIHByb3BzKSk7XG59O1xuZXhwb3J0IGRlZmF1bHQgVGl0bGVWMjtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaVZHbDBiR1ZXTWk1cWN5SXNJbk52ZFhKalpWSnZiM1FpT2lJaUxDSnpiM1Z5WTJWeklqcGJJbFJwZEd4bFZqSXVkSE40SWwwc0ltNWhiV1Z6SWpwYlhTd2liV0Z3Y0dsdVozTWlPaUpCUVVGQk96czdPenM3T3pzN096czdPenRIUVdOSE8wRkJSVWdzVDBGQlR5eExRVUZyUWl4TlFVRk5MRTlCUVU4c1EwRkJRenRCUVVOMlF5eFBRVUZQTEVWQlFVTXNNRUpCUVRCQ0xFVkJRVVVzZDBKQlFYZENMRVZCUVVNc1RVRkJUU3huUTBGQlowTXNRMEZCUXp0QlFVVndSeXhQUVVGUExFVkJRVU1zVlVGQlZTeEZRVUZETEUxQlFVMHNOa0pCUVRaQ0xFTkJRVU03UVVGRGRrUXNUMEZCVHl4RlFVRkRMR2RDUVVGblFpeEZRVUZETEUxQlFVMHNiMEpCUVc5Q0xFTkJRVU03UVVGVmNFUXNUVUZCVFN4cFFrRkJhVUlzUjBGQlJ5eERRVUZETEV0QlFXdENMRVZCUVVVc1JVRkJSU3hEUVVGRExFdEJRVXNzUTBGQlF5eE5RVUZOTEVOQlFVTXNRMEZCUXl4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRExFTkJRVU1zU1VGQlNTeERRVUZETzBGQlJUVkZMRTFCUVUwc1EwRkJReXhOUVVGTkxGZEJRVmNzUjBGQlJ5eERRVUZETEV0QlFXdENMRVZCUVVVc1JVRkJSVHRKUVVNNVF5eFBRVUZQTEVOQlEwZ3NiMEpCUVVNc1ZVRkJWU3hKUVVGRExGTkJRVk1zUlVGQlJTeExRVUZMTEVOQlFVTXNXVUZCV1N4SFFVRkhMR2xDUVVGcFFpeERRVUZETEV0QlFVc3NRMEZCUXl4SFFVRkpMRTFCUVUwc1JVRkJSU3hSUVVGUkxFVkJRVVVzUzBGQlN5eERRVUZETEUxQlFVMHNSVUZCUlN4RlFVRkZMRVZCUVVVc1MwRkJTeXhEUVVGRExFOUJRVThzU1VGRGNFZ3NTMEZCU3l4RFFVRkRMRWxCUVVrc1EwRkRSaXhEUVVOb1FpeERRVUZETzBGQlEwNHNRMEZCUXl4RFFVRkRPMEZCUlVZc1RVRkJUU3hEUVVGRExFMUJRVTBzWlVGQlpTeEhRVUZITEVOQlFVTXNTMEZCYTBJc1JVRkJSU3hGUVVGRk8wbEJRMnhFTEVsQlFVa3NRMEZCUXl4TFFVRkxMRU5CUVVNc1dVRkJXU3hGUVVGRE8xRkJRM0JDTEU5QlFVOHNiMEpCUVVNc1YwRkJWeXh2UWtGQlN5eExRVUZMTEVWQlFVY3NRMEZCUVR0TFFVTnVRenRKUVVWRUxFOUJRVThzTUVOQlFVY3NTMEZCU3l4RFFVRkRMRWxCUVVrc1EwRkJTU3hEUVVGQk8wRkJRelZDTEVOQlFVTXNRMEZCUXp0QlFVVkdMRTFCUVUwc1YwRkJWeXhIUVVGSExFTkJRVU1zUzBGQmEwSXNSVUZCUlN4RlFVRkZPMGxCUTNaRExFMUJRVTBzVjBGQlZ5eEhRVUZWTEVOQlFVTXNRMEZCUXl4RFFVRkRMRXRCUVVzc1EwRkJReXhKUVVGSkxFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNTMEZCU3l4RFFVRkRMRWxCUVVrc1EwRkJReXhSUVVGUkxFVkJRVVVzUTBGQlF5eERRVUZETEVOQlFVTXNTVUZCU1N4RFFVRkRPMGxCUTNwRkxFOUJRVThzUTBGRFNDdzJRa0ZCU3l4VFFVRlRMRVZCUVVVc1MwRkJTeXhEUVVGRExGbEJRVmtzU1VGRk1VSXNTMEZCU3l4RFFVRkRMR0ZCUVdFc1EwRkJReXhYUVVGWExFVkJRek5DTzFGQlEwa3NVMEZCVXl4RlFVRkZMRXRCUVVzc1EwRkJReXhaUVVGWkxFZEJRVWNzYVVKQlFXbENMRU5CUVVNc1MwRkJTeXhEUVVGRExFZEJRVWNzVFVGQlRUdExRVU53UlN4RlFVTkVMRzlDUVVGRExHVkJRV1VzYjBKQlFVc3NTMEZCU3l4RlFVRkhMRU5CUTJoRExFTkJSMGdzUTBGRFZDeERRVUZCTzBGQlEwd3NRMEZCUXl4RFFVRkRPMEZCUlVZc1RVRkJUU3hQUVVGUExFZEJRVWNzUTBGQlF5eExRVUZyUWl4RlFVRkZMRVZCUVVVN1NVRkRia01zVFVGQlRTeFBRVUZQTEVkQlFVY3NNRUpCUVRCQ0xFTkJRVU1zZDBKQlFYZENMRU5CUVVNc1YwRkJWeXhGUVVGRkxGZEJRVmNzUTBGQlF5eEZRVUZGTEdkQ1FVRm5RaXhGUVVGRkxGTkJRVk1zUTBGQlF5eERRVUZCTzBsQlF6TklMRTlCUVU4c2IwSkJRVU1zVDBGQlR5eHZRa0ZCU3l4TFFVRkxMRVZCUVVjc1EwRkJRVHRCUVVOb1F5eERRVUZETEVOQlFVTTdRVUZGUml4bFFVRmxMRTlCUVU4c1EwRkJReUlzSW5OdmRYSmpaWE5EYjI1MFpXNTBJanBiSWk4cVhHNGdLaUFnUTI5d2VYSnBaMmgwSURJd01qQWdRV1J2WW1WY2JpQXFYRzRnS2lBZ1RHbGpaVzV6WldRZ2RXNWtaWElnZEdobElFRndZV05vWlNCTWFXTmxibk5sTENCV1pYSnphVzl1SURJdU1DQW9kR2hsSUZ3aVRHbGpaVzV6WlZ3aUtUdGNiaUFxSUNCNWIzVWdiV0Y1SUc1dmRDQjFjMlVnZEdocGN5Qm1hV3hsSUdWNFkyVndkQ0JwYmlCamIyMXdiR2xoYm1ObElIZHBkR2dnZEdobElFeHBZMlZ1YzJVdVhHNGdLaUFnV1c5MUlHMWhlU0J2WW5SaGFXNGdZU0JqYjNCNUlHOW1JSFJvWlNCTWFXTmxibk5sSUdGMFhHNGdLbHh1SUNvZ0lDQWdJQ0JvZEhSd09pOHZkM2QzTG1Gd1lXTm9aUzV2Y21jdmJHbGpaVzV6WlhNdlRFbERSVTVUUlMweUxqQmNiaUFxWEc0Z0tpQWdWVzVzWlhOeklISmxjWFZwY21Wa0lHSjVJR0Z3Y0d4cFkyRmliR1VnYkdGM0lHOXlJR0ZuY21WbFpDQjBieUJwYmlCM2NtbDBhVzVuTENCemIyWjBkMkZ5WlZ4dUlDb2dJR1JwYzNSeWFXSjFkR1ZrSUhWdVpHVnlJSFJvWlNCTWFXTmxibk5sSUdseklHUnBjM1J5YVdKMWRHVmtJRzl1SUdGdUlGd2lRVk1nU1ZOY0lpQkNRVk5KVXl4Y2JpQXFJQ0JYU1ZSSVQxVlVJRmRCVWxKQlRsUkpSVk1nVDFJZ1EwOU9SRWxVU1U5T1V5QlBSaUJCVGxrZ1MwbE9SQ3dnWldsMGFHVnlJR1Y0Y0hKbGMzTWdiM0lnYVcxd2JHbGxaQzVjYmlBcUlDQlRaV1VnZEdobElFeHBZMlZ1YzJVZ1ptOXlJSFJvWlNCemNHVmphV1pwWXlCc1lXNW5kV0ZuWlNCbmIzWmxjbTVwYm1jZ2NHVnliV2x6YzJsdmJuTWdZVzVrWEc0Z0tpQWdiR2x0YVhSaGRHbHZibk1nZFc1a1pYSWdkR2hsSUV4cFkyVnVjMlV1WEc0Z0tpOWNibHh1YVcxd2IzSjBJRkpsWVdOMExDQjdRMjl0Y0c5dVpXNTBmU0JtY205dElDZHlaV0ZqZENjN1hHNXBiWEJ2Y25RZ2UzZHBkR2hEYjI1a2FYUnBiMjVoYkZCc1lXTmxTRzlzWkdWeUxDQjNhWFJvVTNSaGJtUmhjbVJDWVhObFEzTnpRMnhoYzNOOUlHWnliMjBnWENJdUxpOHVMaTh1TGk5QlluTjBjbUZqZEVOdmNtVkRiMjF3YjI1bGJuUmNJanRjYm1sdGNHOXlkQ0I3VW05MWRHVmtRMjl5WlVOdmJYQnZibVZ1ZEUxdlpHVnNmU0JtY205dElGd2lMaTR2TGk0dkxpNHZjbTkxZEdsdVp5OVNiM1YwWldSRGIzSmxRMjl0Y0c5dVpXNTBYQ0k3WEc1cGJYQnZjblFnZTFKdmRYUmxaRXhwYm10OUlHWnliMjBnWENJdUxpOHVMaTh1TGk5eWIzVjBhVzVuTDFKdmRYUmxaRXhwYm10Y0lqdGNibWx0Y0c5eWRDQjdWR2wwYkdWV01rbHpSVzF3ZEhsR2JuMGdabkp2YlNCY0lpNHZWR2wwYkdWV01rbHpSVzF3ZEhsR2Jsd2lPMXh1WEc1bGVIQnZjblFnYVc1MFpYSm1ZV05sSUZScGRHeGxWakpOYjJSbGJDQmxlSFJsYm1SeklGSnZkWFJsWkVOdmNtVkRiMjF3YjI1bGJuUk5iMlJsYkh0Y2JpQWdJQ0IwWlhoME9pQnpkSEpwYm1jN1hHNGdJQ0FnYkdsdWExVlNURDg2SUhOMGNtbHVaenRjYmlBZ0lDQnNhVzVyUkdsellXSnNaV1E2SUdKdmIyeGxZVzQ3WEc0Z0lDQWdkSGx3WlQ4NklITjBjbWx1Wnp0Y2JpQWdJQ0J1WlhOMFpXUS9PaUJpYjI5c1pXRnVYRzU5WEc1Y2JtTnZibk4wSUdKbGJVMXZaR2xtYVdWeVVISmxabWw0SUQwZ0tIQnliM0J6T2xScGRHeGxWakpOYjJSbGJDa2dQVDRnY0hKdmNITXVibVZ6ZEdWa0lEOGdKeTBuSURvZ0oxOWZKenRjYmx4dVpYaHdiM0owSUdOdmJuTjBJRlJwZEd4bFZqSk1hVzVySUQwZ0tIQnliM0J6T2xScGRHeGxWakpOYjJSbGJDa2dQVDRnZTF4dUlDQWdJSEpsZEhWeWJpQW9YRzRnSUNBZ0lDQWdJRHhTYjNWMFpXUk1hVzVySUdOc1lYTnpUbUZ0WlQxN2NISnZjSE11WW1GelpVTnpjME5zWVhOeklDc2dZbVZ0VFc5a2FXWnBaWEpRY21WbWFYZ29jSEp2Y0hNcElDc2dJQ2RzYVc1ckozMGdhWE5TYjNWMFpXUTllM0J5YjNCekxuSnZkWFJsWkgwZ2RHODllM0J5YjNCekxteHBibXRWVWt4OVBseHVJQ0FnSUNBZ0lDQWdJQ0FnZTNCeWIzQnpMblJsZUhSOVhHNGdJQ0FnSUNBZ0lEd3ZVbTkxZEdWa1RHbHVhejVjYmlBZ0lDQXBPMXh1ZlR0Y2JseHVaWGh3YjNKMElHTnZibk4wSUZScGRHeGxWakpEYjI1MFpXNTBjeUE5SUNod2NtOXdjenBVYVhSc1pWWXlUVzlrWld3cElEMCtJSHRjYmlBZ0lDQnBaaWdnSVhCeWIzQnpMbXhwYm10RWFYTmhZbXhsWkNsN1hHNGdJQ0FnSUNBZ0lISmxkSFZ5YmlBOFZHbDBiR1ZXTWt4cGJtc2dleTR1TG5CeWIzQnpmUzgrWEc0Z0lDQWdmVnh1WEc0Z0lDQWdjbVYwZFhKdUlEdytlM0J5YjNCekxuUmxlSFI5UEM4K1hHNTlPMXh1WEc1amIyNXpkQ0JVYVhSc1pWWXlTVzF3YkNBOUlDaHdjbTl3Y3pwVWFYUnNaVll5VFc5a1pXd3BJRDArSUh0Y2JpQWdJQ0JqYjI1emRDQmxiR1Z0Wlc1MFZIbHdaVHB6ZEhKcGJtY2dQU0FvSVNGd2NtOXdjeTUwZVhCbEtTQS9JSEJ5YjNCekxuUjVjR1V1ZEc5VGRISnBibWNvS1NBNklDZG9NeWM3WEc0Z0lDQWdjbVYwZFhKdUlDaGNiaUFnSUNBZ0lDQWdQR1JwZGlCamJHRnpjMDVoYldVOWUzQnliM0J6TG1KaGMyVkRjM05EYkdGemMzMCtYRzRnSUNBZ0lDQWdJQ0FnSUNCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ1VtVmhZM1F1WTNKbFlYUmxSV3hsYldWdWRDaGxiR1Z0Wlc1MFZIbHdaU3hjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ1kyeGhjM05PWVcxbE9pQndjbTl3Y3k1aVlYTmxRM056UTJ4aGMzTWdLeUJpWlcxTmIyUnBabWxsY2xCeVpXWnBlQ2h3Y205d2N5a2dLeUFuZEdWNGRDY3NYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUgwc1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJRHhVYVhSc1pWWXlRMjl1ZEdWdWRITWdleTR1TG5CeWIzQnpmUzgrWEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnS1Z4dUlDQWdJQ0FnSUNBZ0lDQWdmVnh1WEc0Z0lDQWdJQ0FnSUR3dlpHbDJQbHh1SUNBZ0lDbGNibjA3WEc1Y2JtTnZibk4wSUZScGRHeGxWaklnUFNBb2NISnZjSE02VkdsMGJHVldNazF2WkdWc0tTQTlQaUI3WEc0Z0lDQWdZMjl1YzNRZ1YzSmhjSEJsWkNBOUlIZHBkR2hEYjI1a2FYUnBiMjVoYkZCc1lXTmxTRzlzWkdWeUtIZHBkR2hUZEdGdVpHRnlaRUpoYzJWRGMzTkRiR0Z6Y3loVWFYUnNaVll5U1cxd2JDd2dYQ0pqYlhBdGRHbDBiR1ZjSWlrc0lGUnBkR3hsVmpKSmMwVnRjSFI1Um00c0lGd2lWR2wwYkdWV01sd2lLVnh1SUNBZ0lISmxkSFZ5YmlBOFYzSmhjSEJsWkNCN0xpNHVjSEp2Y0hOOUx6NWNibjA3WEc1Y2JtVjRjRzl5ZENCa1pXWmhkV3gwSUZScGRHeGxWakk3SWwxOSIsImV4cG9ydCBmdW5jdGlvbiBUaXRsZVYySXNFbXB0eUZuKHByb3BzKSB7XG4gICAgcmV0dXJuIHByb3BzLnRleHQgPT0gbnVsbCB8fCBwcm9wcy50ZXh0LnRyaW0oKS5sZW5ndGggPT09IDA7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lWR2wwYkdWV01rbHpSVzF3ZEhsR2JpNXFjeUlzSW5OdmRYSmpaVkp2YjNRaU9pSWlMQ0p6YjNWeVkyVnpJanBiSWxScGRHeGxWakpKYzBWdGNIUjVSbTR1ZEhNaVhTd2libUZ0WlhNaU9sdGRMQ0p0WVhCd2FXNW5jeUk2SWtGQlJVRXNUVUZCVFN4VlFVRlZMR2RDUVVGblFpeERRVUZETEV0QlFXdENPMGxCUXk5RExFOUJRVThzUzBGQlN5eERRVUZETEVsQlFVa3NTVUZCU1N4SlFVRkpMRWxCUVVrc1MwRkJTeXhEUVVGRExFbEJRVWtzUTBGQlF5eEpRVUZKTEVWQlFVVXNRMEZCUXl4TlFVRk5MRXRCUVVzc1EwRkJReXhEUVVGRE8wRkJRMmhGTEVOQlFVTWlMQ0p6YjNWeVkyVnpRMjl1ZEdWdWRDSTZXeUpwYlhCdmNuUWdlMVJwZEd4bFZqSk5iMlJsYkgwZ1puSnZiU0JjSWk0dlZHbDBiR1ZXTWx3aU8xeHVYRzVsZUhCdmNuUWdablZ1WTNScGIyNGdWR2wwYkdWV01rbHpSVzF3ZEhsR2JpaHdjbTl3Y3pwVWFYUnNaVll5VFc5a1pXd3BPaUJpYjI5c1pXRnVlMXh1SUNBZ0lISmxkSFZ5YmlCd2NtOXdjeTUwWlhoMElEMDlJRzUxYkd3Z2ZId2djSEp2Y0hNdWRHVjRkQzUwY21sdEtDa3ViR1Z1WjNSb0lEMDlQU0F3TzF4dWZTSmRmUT09IiwiLypcbiAqICBDb3B5cmlnaHQgMjAyMCBBZG9iZVxuICpcbiAqICBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqICBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgICAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqICBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiAgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqICBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmNvbnN0IERFRkFVTFRfRU1QVFlfVEVYVF9MQUJFTCA9ICdQbGVhc2UgY29uZmlndXJlIHRoZSBjb21wb25lbnQnO1xuZXhwb3J0IGNvbnN0IEVkaXRvclBsYWNlSG9sZGVyID0gKHByb3BzKSA9PiB7XG4gICAgY29uc3QgcGFydDEgPSAocHJvcHMuY29tcG9uZW50VGl0bGUgIT0gbnVsbCAmJiBwcm9wcy5jb21wb25lbnRUaXRsZS5sZW5ndGggPiAwKSA/IHByb3BzLmNvbXBvbmVudFRpdGxlICsgJyAtICcgOiAnJztcbiAgICBjb25zdCBwYXJ0MiA9IChwcm9wcy5lbXB0eVRleHRBcHBlbmQgIT0gbnVsbCkgPyBwcm9wcy5lbXB0eVRleHRBcHBlbmQgOiBERUZBVUxUX0VNUFRZX1RFWFRfTEFCRUw7XG4gICAgY29uc3QgZW1wdHlUZXh0ID0gcGFydDEgKyBwYXJ0MjtcbiAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzc05hbWU6ICdjcS1wbGFjZWhvbGRlcicgKyAocHJvcHMuY2xhc3NBcHBlbmQgIT0gbnVsbCA/ICcgJyArIHByb3BzLmNsYXNzQXBwZW5kIDogJycpIH0sIGVtcHR5VGV4dCkpO1xufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaWNHeGhZMlZvYjJ4a1pYSXVhbk1pTENKemIzVnlZMlZTYjI5MElqb2lJaXdpYzI5MWNtTmxjeUk2V3lKd2JHRmpaV2h2YkdSbGNpNTBjM2dpWFN3aWJtRnRaWE1pT2x0ZExDSnRZWEJ3YVc1bmN5STZJa0ZCUVVFN096czdPenM3T3pzN096czdPMGRCWTBjN1FVRkRTQ3hQUVVGUExFdEJRV3RDTEUxQlFVMHNUMEZCVHl4RFFVRkRPMEZCVDNaRExFMUJRVTBzZDBKQlFYZENMRWRCUVVjc1owTkJRV2RETEVOQlFVTTdRVUZGYkVVc1RVRkJUU3hEUVVGRExFMUJRVTBzYVVKQlFXbENMRWRCUVVjc1EwRkJReXhMUVVGelFpeEZRVUZGTEVWQlFVVTdTVUZGZUVRc1RVRkJUU3hMUVVGTExFZEJRVmNzUTBGQlF5eExRVUZMTEVOQlFVTXNZMEZCWXl4SlFVRkpMRWxCUVVrc1NVRkJTU3hMUVVGTExFTkJRVU1zWTBGQll5eERRVUZETEUxQlFVMHNSMEZCUnl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVVVzUzBGQlN5eERRVUZETEdOQlFXTXNSMEZCU1N4TFFVRkxMRU5CUVVNc1EwRkJReXhEUVVGRExFVkJRVVVzUTBGQlF6dEpRVU01U0N4TlFVRk5MRXRCUVVzc1IwRkJWeXhEUVVGRExFdEJRVXNzUTBGQlF5eGxRVUZsTEVsQlFVa3NTVUZCU1N4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRkxFdEJRVXNzUTBGQlF5eGxRVUZsTEVOQlFVTXNRMEZCUXl4RFFVRkRMSGRDUVVGM1FpeERRVUZETzBsQlF6RkhMRTFCUVUwc1UwRkJVeXhIUVVGSExFdEJRVXNzUjBGQlJ5eExRVUZMTEVOQlFVTTdTVUZGYUVNc1QwRkJUeXhEUVVOSUxEWkNRVU5KTEZOQlFWTXNSVUZCUlN4blFrRkJaMElzUjBGQlJ5eERRVUZETEV0QlFVc3NRMEZCUXl4WFFVRlhMRWxCUVVrc1NVRkJTU3hEUVVGQkxFTkJRVU1zUTBGQlF5eEhRVUZITEVkQlFVY3NTMEZCU3l4RFFVRkRMRmRCUVZjc1EwRkJReXhEUVVGRExFTkJRVU1zUlVGQlJTeERRVUZETEVsQlEzUkdMRk5CUVZNc1EwRkRVaXhEUVVOVUxFTkJRVUU3UVVGRFRDeERRVUZETEVOQlFVTWlMQ0p6YjNWeVkyVnpRMjl1ZEdWdWRDSTZXeUl2S2x4dUlDb2dJRU52Y0hseWFXZG9kQ0F5TURJd0lFRmtiMkpsWEc0Z0tseHVJQ29nSUV4cFkyVnVjMlZrSUhWdVpHVnlJSFJvWlNCQmNHRmphR1VnVEdsalpXNXpaU3dnVm1WeWMybHZiaUF5TGpBZ0tIUm9aU0JjSWt4cFkyVnVjMlZjSWlrN1hHNGdLaUFnZVc5MUlHMWhlU0J1YjNRZ2RYTmxJSFJvYVhNZ1ptbHNaU0JsZUdObGNIUWdhVzRnWTI5dGNHeHBZVzVqWlNCM2FYUm9JSFJvWlNCTWFXTmxibk5sTGx4dUlDb2dJRmx2ZFNCdFlYa2diMkowWVdsdUlHRWdZMjl3ZVNCdlppQjBhR1VnVEdsalpXNXpaU0JoZEZ4dUlDcGNiaUFxSUNBZ0lDQWdhSFIwY0RvdkwzZDNkeTVoY0dGamFHVXViM0puTDJ4cFkyVnVjMlZ6TDB4SlEwVk9VMFV0TWk0d1hHNGdLbHh1SUNvZ0lGVnViR1Z6Y3lCeVpYRjFhWEpsWkNCaWVTQmhjSEJzYVdOaFlteGxJR3hoZHlCdmNpQmhaM0psWldRZ2RHOGdhVzRnZDNKcGRHbHVaeXdnYzI5bWRIZGhjbVZjYmlBcUlDQmthWE4wY21saWRYUmxaQ0IxYm1SbGNpQjBhR1VnVEdsalpXNXpaU0JwY3lCa2FYTjBjbWxpZFhSbFpDQnZiaUJoYmlCY0lrRlRJRWxUWENJZ1FrRlRTVk1zWEc0Z0tpQWdWMGxVU0U5VlZDQlhRVkpTUVU1VVNVVlRJRTlTSUVOUFRrUkpWRWxQVGxNZ1QwWWdRVTVaSUV0SlRrUXNJR1ZwZEdobGNpQmxlSEJ5WlhOeklHOXlJR2x0Y0d4cFpXUXVYRzRnS2lBZ1UyVmxJSFJvWlNCTWFXTmxibk5sSUdadmNpQjBhR1VnYzNCbFkybG1hV01nYkdGdVozVmhaMlVnWjI5MlpYSnVhVzVuSUhCbGNtMXBjM05wYjI1eklHRnVaRnh1SUNvZ0lHeHBiV2wwWVhScGIyNXpJSFZ1WkdWeUlIUm9aU0JNYVdObGJuTmxMbHh1SUNvdlhHNXBiWEJ2Y25RZ1VtVmhZM1FzSUh0RGIyMXdiMjVsYm5SOUlHWnliMjBnSjNKbFlXTjBKenRjYmx4dVpYaHdiM0owSUdsdWRHVnlabUZqWlNCUWJHRmpaVWh2YkdSbGNrMXZaR1ZzSUh0Y2JpQWdJQ0JqYjIxd2IyNWxiblJVYVhSc1pUODZJSE4wY21sdVoxeHVJQ0FnSUdOc1lYTnpRWEJ3Wlc1a1B6b2djM1J5YVc1blhHNGdJQ0FnWlcxd2RIbFVaWGgwUVhCd1pXNWtQem9nYzNSeWFXNW5YRzU5WEc1amIyNXpkQ0JFUlVaQlZVeFVYMFZOVUZSWlgxUkZXRlJmVEVGQ1JVd2dQU0FuVUd4bFlYTmxJR052Ym1acFozVnlaU0IwYUdVZ1kyOXRjRzl1Wlc1MEp6dGNibHh1Wlhod2IzSjBJR052Ym5OMElFVmthWFJ2Y2xCc1lXTmxTRzlzWkdWeUlEMGdLSEJ5YjNCek9sQnNZV05sU0c5c1pHVnlUVzlrWld3cElEMCtJSHRjYmx4dUlDQWdJR052Ym5OMElIQmhjblF4T2lCemRISnBibWNnUFNBb2NISnZjSE11WTI5dGNHOXVaVzUwVkdsMGJHVWdJVDBnYm5Wc2JDQW1KaUJ3Y205d2N5NWpiMjF3YjI1bGJuUlVhWFJzWlM1c1pXNW5kR2dnUGlBd0tTQS9JQ0J3Y205d2N5NWpiMjF3YjI1bGJuUlVhWFJzWlNBcklDQW5JQzBnSnlBNklDY25PMXh1SUNBZ0lHTnZibk4wSUhCaGNuUXlPaUJ6ZEhKcGJtY2dQU0FvY0hKdmNITXVaVzF3ZEhsVVpYaDBRWEJ3Wlc1a0lDRTlJRzUxYkd3cElEOGdJSEJ5YjNCekxtVnRjSFI1VkdWNGRFRndjR1Z1WkNBNklFUkZSa0ZWVEZSZlJVMVFWRmxmVkVWWVZGOU1RVUpGVER0Y2JpQWdJQ0JqYjI1emRDQmxiWEIwZVZSbGVIUWdQU0J3WVhKME1TQXJJSEJoY25ReU8xeHVYRzRnSUNBZ2NtVjBkWEp1SUNoY2JpQWdJQ0FnSUNBZ1BHUnBkbHh1SUNBZ0lDQWdJQ0FnSUNBZ1kyeGhjM05PWVcxbFBYc25ZM0V0Y0d4aFkyVm9iMnhrWlhJbklDc2dLSEJ5YjNCekxtTnNZWE56UVhCd1pXNWtJQ0U5SUc1MWJHdy9JQ2NnSnlBcklIQnliM0J6TG1Oc1lYTnpRWEJ3Wlc1a0lEb2dKeWNwZlQ1Y2JpQWdJQ0FnSUNBZ0lDQWdJSHRsYlhCMGVWUmxlSFI5WEc0Z0lDQWdJQ0FnSUR3dlpHbDJQbHh1SUNBZ0lDbGNibjA3SWwxOSIsIi8qXG4gKiAgQ29weXJpZ2h0IDIwMjAgQWRvYmVcbiAqXG4gKiAgTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqICB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiAgWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICAgICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiAgVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqICBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqICBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiAgbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBMaW5rIGFzIFJvdXRlckxpbmsgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcbmV4cG9ydCBjb25zdCBSb3V0ZWRMaW5rID0gKHByb3BzKSA9PiB7XG4gICAgY29uc3QgeyB0bywgaXNSb3V0ZWQsIC4uLm90aGVyUHJvcHMgfSA9IHByb3BzO1xuICAgIGlmICh0byA9PT0gdW5kZWZpbmVkIHx8IHRvLnRyaW0oKS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJhXCIsIE9iamVjdC5hc3NpZ24oeyBocmVmOiAnIycgfSwgb3RoZXJQcm9wcykpO1xuICAgIH1cbiAgICBjb25zdCBpc0V4dGVybmFsID0gL15odHRwcz86XFwvXFwvLy50ZXN0KHRvKTtcbiAgICByZXR1cm4gaXNFeHRlcm5hbCB8fCAhaXNSb3V0ZWQgP1xuICAgICAgICAoUmVhY3QuY3JlYXRlRWxlbWVudChcImFcIiwgT2JqZWN0LmFzc2lnbih7IGhyZWY6IHRvIH0sIG90aGVyUHJvcHMpKSlcbiAgICAgICAgOlxuICAgICAgICAgICAgKFJlYWN0LmNyZWF0ZUVsZW1lbnQoUm91dGVyTGluaywgT2JqZWN0LmFzc2lnbih7fSwgb3RoZXJQcm9wcywgeyB0bzogdG8gfSkpKTtcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lVbTkxZEdWa1RHbHVheTVxY3lJc0luTnZkWEpqWlZKdmIzUWlPaUlpTENKemIzVnlZMlZ6SWpwYklsSnZkWFJsWkV4cGJtc3VkSE40SWwwc0ltNWhiV1Z6SWpwYlhTd2liV0Z3Y0dsdVozTWlPaUpCUVVGQk96czdPenM3T3pzN096czdPenRIUVdOSE8wRkJSVWdzVDBGQlR5eExRVUZMTEUxQlFVMHNUMEZCVHl4RFFVRkRPMEZCUXpGQ0xFOUJRVThzUlVGQlF5eEpRVUZKTEVsQlFVa3NWVUZCVlN4RlFVRkRMRTFCUVUwc2EwSkJRV3RDTEVOQlFVTTdRVUZQY0VRc1RVRkJUU3hEUVVGRExFMUJRVTBzVlVGQlZTeEhRVUZITEVOQlFVTXNTMEZCWlN4RlFVRkZMRVZCUVVVN1NVRkRNVU1zVFVGQlRTeEZRVUZETEVWQlFVVXNSVUZCUlN4UlFVRlJMRVZCUVVVc1IwRkJSeXhWUVVGVkxFVkJRVU1zUjBGQlJ5eExRVUZMTEVOQlFVTTdTVUZGTlVNc1NVRkJSeXhGUVVGRkxFdEJRVXNzVTBGQlV5eEpRVUZKTEVWQlFVVXNRMEZCUXl4SlFVRkpMRVZCUVVVc1EwRkJReXhOUVVGTkxFdEJRVXNzUTBGQlF5eEZRVUZETzFGQlF6RkRMRTlCUVU4c2VVTkJRVWNzU1VGQlNTeEZRVUZGTEVkQlFVY3NTVUZEV0N4VlFVRlZMRVZCUTJoQ0xFTkJRVU03UzBGRFRqdEpRVU5FTEUxQlFVMHNWVUZCVlN4SFFVRkhMR05CUVdNc1EwRkJReXhKUVVGSkxFTkJRVU1zUlVGQlJTeERRVUZETEVOQlFVTTdTVUZGTTBNc1QwRkJUeXhWUVVGVkxFbEJRVWtzUTBGQlF5eFJRVUZSTEVOQlFVRXNRMEZCUXp0UlFVTXpRaXhEUVVGRExIbERRVU5ITEVsQlFVa3NSVUZCUlN4RlFVRkZMRWxCUTBvc1ZVRkJWU3hGUVVOb1FpeERRVUZETzFGQlEwZ3NRMEZCUXp0WlFVTkVMRU5CUVVVc2IwSkJRVU1zVlVGQlZTeHZRa0ZCU3l4VlFVRlZMRWxCUTJRc1JVRkJSU3hGUVVGRkxFVkJRVVVzU1VGRGJFSXNRMEZCUXl4RFFVRkJPMEZCUTFnc1EwRkJReXhEUVVGRElpd2ljMjkxY21ObGMwTnZiblJsYm5RaU9sc2lMeXBjYmlBcUlDQkRiM0I1Y21sbmFIUWdNakF5TUNCQlpHOWlaVnh1SUNwY2JpQXFJQ0JNYVdObGJuTmxaQ0IxYm1SbGNpQjBhR1VnUVhCaFkyaGxJRXhwWTJWdWMyVXNJRlpsY25OcGIyNGdNaTR3SUNoMGFHVWdYQ0pNYVdObGJuTmxYQ0lwTzF4dUlDb2dJSGx2ZFNCdFlYa2dibTkwSUhWelpTQjBhR2x6SUdacGJHVWdaWGhqWlhCMElHbHVJR052YlhCc2FXRnVZMlVnZDJsMGFDQjBhR1VnVEdsalpXNXpaUzVjYmlBcUlDQlpiM1VnYldGNUlHOWlkR0ZwYmlCaElHTnZjSGtnYjJZZ2RHaGxJRXhwWTJWdWMyVWdZWFJjYmlBcVhHNGdLaUFnSUNBZ0lHaDBkSEE2THk5M2QzY3VZWEJoWTJobExtOXlaeTlzYVdObGJuTmxjeTlNU1VORlRsTkZMVEl1TUZ4dUlDcGNiaUFxSUNCVmJteGxjM01nY21WeGRXbHlaV1FnWW5rZ1lYQndiR2xqWVdKc1pTQnNZWGNnYjNJZ1lXZHlaV1ZrSUhSdklHbHVJSGR5YVhScGJtY3NJSE52Wm5SM1lYSmxYRzRnS2lBZ1pHbHpkSEpwWW5WMFpXUWdkVzVrWlhJZ2RHaGxJRXhwWTJWdWMyVWdhWE1nWkdsemRISnBZblYwWldRZ2IyNGdZVzRnWENKQlV5QkpVMXdpSUVKQlUwbFRMRnh1SUNvZ0lGZEpWRWhQVlZRZ1YwRlNVa0ZPVkVsRlV5QlBVaUJEVDA1RVNWUkpUMDVUSUU5R0lFRk9XU0JMU1U1RUxDQmxhWFJvWlhJZ1pYaHdjbVZ6Y3lCdmNpQnBiWEJzYVdWa0xseHVJQ29nSUZObFpTQjBhR1VnVEdsalpXNXpaU0JtYjNJZ2RHaGxJSE53WldOcFptbGpJR3hoYm1kMVlXZGxJR2R2ZG1WeWJtbHVaeUJ3WlhKdGFYTnphVzl1Y3lCaGJtUmNiaUFxSUNCc2FXMXBkR0YwYVc5dWN5QjFibVJsY2lCMGFHVWdUR2xqWlc1elpTNWNiaUFxTDF4dVhHNXBiWEJ2Y25RZ1VtVmhZM1FnWm5KdmJTQW5jbVZoWTNRbk8xeHVhVzF3YjNKMElIdE1hVzVySUdGeklGSnZkWFJsY2t4cGJtdDlJR1p5YjIwZ0ozSmxZV04wTFhKdmRYUmxjaTFrYjIwbk8xeHVYRzVsZUhCdmNuUWdhVzUwWlhKbVlXTmxJRXhwYm10UWNtOXdjeUI3WEc0Z0lDQWdkRzgvT2lCemRISnBibWM3WEc0Z0lDQWdhWE5TYjNWMFpXUS9PaUJpYjI5c1pXRnVPMXh1SUNBZ0lGdHdjbTl3T2lCemRISnBibWRkT2lCaGJubGNibjFjYm1WNGNHOXlkQ0JqYjI1emRDQlNiM1YwWldSTWFXNXJJRDBnS0hCeWIzQnpPa3hwYm10UWNtOXdjeWtnUFQ0Z2UxeHVJQ0FnSUdOdmJuTjBJSHQwYnl3Z2FYTlNiM1YwWldRc0lDNHVMbTkwYUdWeVVISnZjSE45SUQwZ2NISnZjSE03WEc1Y2JpQWdJQ0JwWmloMGJ5QTlQVDBnZFc1a1pXWnBibVZrSUh4OElIUnZMblJ5YVcwb0tTNXNaVzVuZEdnZ1BUMDlJREFwZTF4dUlDQWdJQ0FnSUNCeVpYUjFjbTRnUEdFZ2FISmxaajE3SnlNbmZWeHVJQ0FnSUNBZ0lDQWdJQ0FnZXk0dUxtOTBhR1Z5VUhKdmNITjlYRzRnSUNBZ0lDQWdJQzgrTzF4dUlDQWdJSDFjYmlBZ0lDQmpiMjV6ZENCcGMwVjRkR1Z5Ym1Gc0lEMGdMMTVvZEhSd2N6ODZYRnd2WEZ3dkx5NTBaWE4wS0hSdktUdGNibHh1SUNBZ0lISmxkSFZ5YmlCcGMwVjRkR1Z5Ym1Gc0lIeDhJQ0ZwYzFKdmRYUmxaRDljYmlBZ0lDQWdJQ0FnS0R4aFhHNGdJQ0FnSUNBZ0lDQWdJQ0JvY21WbVBYdDBiMzFjYmlBZ0lDQWdJQ0FnSUNBZ0lIc3VMaTV2ZEdobGNsQnliM0J6ZlZ4dUlDQWdJQ0FnSUNBdlBpbGNiaUFnSUNBZ0lDQWdPbHh1SUNBZ0lDQWdJQ0FvSUR4U2IzVjBaWEpNYVc1cklIc3VMaTV2ZEdobGNsQnliM0J6ZlZ4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJSFJ2UFh0MGIzMWNiaUFnSUNBZ0lDQWdMejRwWEc1OU95SmRmUT09IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==