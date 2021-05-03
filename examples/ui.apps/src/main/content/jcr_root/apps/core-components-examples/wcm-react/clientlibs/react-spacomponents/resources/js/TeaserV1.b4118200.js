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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9yYWFpam1hay93b3Jrc3BhY2UvYWVtLXJlYWN0LWNvcmUtd2NtLWNvbXBvbmVudHMvZXhhbXBsZXMvcmVhY3Qtc3BhY29tcG9uZW50cy1leGFtcGxlLXByb2plY3QvQGFkb2JlL2FlbS1jb3JlLWNvbXBvbmVudHMtcmVhY3QtYmFzZS93ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCIvVXNlcnMvcmFhaWptYWsvd29ya3NwYWNlL2FlbS1yZWFjdC1jb3JlLXdjbS1jb21wb25lbnRzL2V4YW1wbGVzL3JlYWN0LXNwYWNvbXBvbmVudHMtZXhhbXBsZS1wcm9qZWN0L0BhZG9iZS9hZW0tY29yZS1jb21wb25lbnRzLXJlYWN0LWJhc2Uvd2VicGFjay9ib290c3RyYXAiLCIvVXNlcnMvcmFhaWptYWsvd29ya3NwYWNlL2FlbS1yZWFjdC1jb3JlLXdjbS1jb21wb25lbnRzL2V4YW1wbGVzL3JlYWN0LXNwYWNvbXBvbmVudHMtZXhhbXBsZS1wcm9qZWN0L0BhZG9iZS9hZW0tY29yZS1jb21wb25lbnRzLXJlYWN0LWJhc2Uvc3JjL0Fic3RyYWN0Q29yZUNvbXBvbmVudC50c3giLCIvVXNlcnMvcmFhaWptYWsvd29ya3NwYWNlL2FlbS1yZWFjdC1jb3JlLXdjbS1jb21wb25lbnRzL2V4YW1wbGVzL3JlYWN0LXNwYWNvbXBvbmVudHMtZXhhbXBsZS1wcm9qZWN0L0BhZG9iZS9hZW0tY29yZS1jb21wb25lbnRzLXJlYWN0LWJhc2Uvc3JjL2F1dGhvcmluZy9pbWFnZS92Mi9JbWFnZVYyLnRzeCIsIi9Vc2Vycy9yYWFpam1hay93b3Jrc3BhY2UvYWVtLXJlYWN0LWNvcmUtd2NtLWNvbXBvbmVudHMvZXhhbXBsZXMvcmVhY3Qtc3BhY29tcG9uZW50cy1leGFtcGxlLXByb2plY3QvQGFkb2JlL2FlbS1jb3JlLWNvbXBvbmVudHMtcmVhY3QtYmFzZS9zcmMvYXV0aG9yaW5nL2ltYWdlL3YyL0ltYWdlVjJJc0VtcHR5Rm4udHMiLCIvVXNlcnMvcmFhaWptYWsvd29ya3NwYWNlL2FlbS1yZWFjdC1jb3JlLXdjbS1jb21wb25lbnRzL2V4YW1wbGVzL3JlYWN0LXNwYWNvbXBvbmVudHMtZXhhbXBsZS1wcm9qZWN0L0BhZG9iZS9hZW0tY29yZS1jb21wb25lbnRzLXJlYWN0LWJhc2Uvc3JjL2F1dGhvcmluZy90ZWFzZXIvdjEvVGVhc2VyVjEudHN4IiwiL1VzZXJzL3JhYWlqbWFrL3dvcmtzcGFjZS9hZW0tcmVhY3QtY29yZS13Y20tY29tcG9uZW50cy9leGFtcGxlcy9yZWFjdC1zcGFjb21wb25lbnRzLWV4YW1wbGUtcHJvamVjdC9AYWRvYmUvYWVtLWNvcmUtY29tcG9uZW50cy1yZWFjdC1iYXNlL3NyYy9hdXRob3JpbmcvdGVhc2VyL3YxL1RlYXNlclYxSXNFbXB0eUZuLnRzIiwiL1VzZXJzL3JhYWlqbWFrL3dvcmtzcGFjZS9hZW0tcmVhY3QtY29yZS13Y20tY29tcG9uZW50cy9leGFtcGxlcy9yZWFjdC1zcGFjb21wb25lbnRzLWV4YW1wbGUtcHJvamVjdC9AYWRvYmUvYWVtLWNvcmUtY29tcG9uZW50cy1yZWFjdC1iYXNlL3NyYy9hdXRob3JpbmcvdGl0bGUvdjIvVGl0bGVWMi50c3giLCIvVXNlcnMvcmFhaWptYWsvd29ya3NwYWNlL2FlbS1yZWFjdC1jb3JlLXdjbS1jb21wb25lbnRzL2V4YW1wbGVzL3JlYWN0LXNwYWNvbXBvbmVudHMtZXhhbXBsZS1wcm9qZWN0L0BhZG9iZS9hZW0tY29yZS1jb21wb25lbnRzLXJlYWN0LWJhc2Uvc3JjL2F1dGhvcmluZy90aXRsZS92Mi9UaXRsZVYySXNFbXB0eUZuLnRzIiwiL1VzZXJzL3JhYWlqbWFrL3dvcmtzcGFjZS9hZW0tcmVhY3QtY29yZS13Y20tY29tcG9uZW50cy9leGFtcGxlcy9yZWFjdC1zcGFjb21wb25lbnRzLWV4YW1wbGUtcHJvamVjdC9AYWRvYmUvYWVtLWNvcmUtY29tcG9uZW50cy1yZWFjdC1iYXNlL3NyYy9jb21tb24vcGxhY2Vob2xkZXIudHN4IiwiL1VzZXJzL3JhYWlqbWFrL3dvcmtzcGFjZS9hZW0tcmVhY3QtY29yZS13Y20tY29tcG9uZW50cy9leGFtcGxlcy9yZWFjdC1zcGFjb21wb25lbnRzLWV4YW1wbGUtcHJvamVjdC9AYWRvYmUvYWVtLWNvcmUtY29tcG9uZW50cy1yZWFjdC1iYXNlL3NyYy9yb3V0aW5nL1JvdXRlZExpbmsudHN4IiwiL1VzZXJzL3JhYWlqbWFrL3dvcmtzcGFjZS9hZW0tcmVhY3QtY29yZS13Y20tY29tcG9uZW50cy9leGFtcGxlcy9yZWFjdC1zcGFjb21wb25lbnRzLWV4YW1wbGUtcHJvamVjdC93ZWJwYWNrOi9AYWRvYmUvYWVtLWNvcmUtY29tcG9uZW50cy1yZWFjdC1iYXNlL2V4dGVybmFsIFwicmVhY3RcIiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUNBLFlBQ0EsMkJBREEsS0FFQSxFQUtBO0FBQ0MsQ0FURCxFQVNDLHlDQVRELEVBU0M7QUFDRDs7Ozs7QUNWQTtBQUFBOztBQUNBO0FBQUE7OztBQUVBO0FBQUE7O0FBQ0E7O0FBQUE7OztBQUVBO0FBQUE7O0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTs7QUFDQTs7O0FBQUE7QUFDQTtBQUFBLHFCQURBOztBQUVBO0FBQUEsa0JBRkE7O0FBR0E7QUFBQTtBQUNBOztBQUpBOzs7QUFNQTtBQUFBOztBQUNBOztBQUFBOzs7QUFFQTtBQUFBOztBQUNBOztBQUFBOzs7QUFFQTtBQUFBOztBQUNBOztBQUFBO0FBQ0E7QUFBQTs7Ozs7QUFHQTtBQUFBOztBQUNBOzs7QUFBQTs7O0FBRUE7QUFBQTs7QUFDQTs7QUFBQTs7O0FBRUE7QUFBQTs7QUFDQTs7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQTBDLDRCQUExQztBQUEwQztBQUExQztBQUNBO0FBQUE7QUFDQTs7QUFBQSxPQUpBOzs7QUFNQTtBQUFBOztBQUNBOzs7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQXdEO0FBQXhEO0FBQ0E7QUFBQTtBQUNBOzs7QUFBQTtBQUFpRDtBQUFq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SWU7OztBQUFBLGlELENBQ2Y7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeENBO0FBQUE7OztBQUFBO0FBQUE7QUFBQTs7QUFBTztBQUNQO0FBQ0EsUyxDQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNIQTtBQUFBOzs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7OztBQUFBO0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBZ0JBOztBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsaUJBQVksNkNBQUssYUFBTCxDQUFLLEtBQUwsRUFBSztBQUF1QjtBQUF2QixXQUFMLEVBQXVILFNBQXZILENBQVo7QUFDQSxTQUxPLEMsQ0FNUDs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdkJBO0FBQUE7OztBQUFBO0FBQUE7QUFBQTtBQUFBOzs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7O0FBQUE7QUFBQTs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7OztBQUFBO0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBaUJPO0FBQ1A7QUFBVyxjQUFYO0FBQVcsb0JBQVg7QUFBVztBQUFYLGNBQXlDLEtBQXpDOztBQUNBO0FBQ0EsbUJBQWUsNkNBQUssYUFBTCxDQUFLLEdBQUwsRUFBSztBQUFtQztBQUFuQyxlQUErQyxVQUEvQyxDQUFMLENBQWY7QUFDQTs7QUFDQTtBQUNBLDJDQUNTLDZDQUFLLGFBQUwsQ0FBSyxHQUFMLEVBQUs7QUFBbUM7QUFBbkMsYUFBOEMsVUFBOUMsQ0FBTCxDQURULEdBR2EsNkNBQUssYUFBTCxDQUFvQixxREFBcEIsRUFBOEIsa0JBQWtCLFVBQWxCLEVBQWtCO0FBQWU7QUFBZixXQUFsQixDQUE5QixDQUhiO0FBSUEsU0FWTyxDLENBV1A7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDNUJBOzs7Ozs7Ozs7Ozs7OztBQUFBOzs7Ozs7QVhVQTtDQVZBLEUiLCJmaWxlIjoianMvVGVhc2VyVjEuYjQxMTgyMDAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJAYWRvYmUvYWVtLWNvcmUtY29tcG9uZW50cy1yZWFjdC1iYXNlXCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcIkBhZG9iZS9hZW0tY29yZS1jb21wb25lbnRzLXJlYWN0LWJhc2VcIl0gPSBmYWN0b3J5KCk7XG59KSh0eXBlb2Ygc2VsZiAhPT0gJ3VuZGVmaW5lZCcgPyBzZWxmIDogdGhpcywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDcpO1xuIiwiLypcbiAqICBDb3B5cmlnaHQgMjAyMCBBZG9iZVxuICpcbiAqICBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqICBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgICAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqICBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiAgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqICBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgRWRpdG9yUGxhY2VIb2xkZXIgfSBmcm9tIFwiLi9jb21tb24vcGxhY2Vob2xkZXJcIjtcbmV4cG9ydCBjb25zdCB3aXRoU3RhbmRhcmRCYXNlQ3NzQ2xhc3MgPSAoQ29tcG9uZW50LCBkZWZhdWx0QmFzZUNzc0NsYXNzKSA9PiB7XG4gICAgcmV0dXJuIChwcm9wcykgPT4ge1xuICAgICAgICBjb25zdCBiYXNlQ3NzQ2xhc3MgPSBwcm9wcy5iYXNlQ3NzQ2xhc3M7XG4gICAgICAgIGNvbnN0IHRvQmVVc2VkQ3NzQ2xhc3MgPSBiYXNlQ3NzQ2xhc3MgJiYgYmFzZUNzc0NsYXNzLnRyaW0oKS5sZW5ndGggPiAwID8gYmFzZUNzc0NsYXNzIDogZGVmYXVsdEJhc2VDc3NDbGFzcztcbiAgICAgICAgY29uc3QgbWVyZ2VkUHJvcHMgPSB7XG4gICAgICAgICAgICAuLi5wcm9wcyxcbiAgICAgICAgICAgIGJhc2VDc3NDbGFzczogdG9CZVVzZWRDc3NDbGFzc1xuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChDb21wb25lbnQsIE9iamVjdC5hc3NpZ24oe30sIG1lcmdlZFByb3BzKSk7XG4gICAgfTtcbn07XG5leHBvcnQgY29uc3Qgd2l0aENvbmRpdGlvbmFsUGxhY2VIb2xkZXIgPSAoQ29tcG9uZW50LCBpc0VtcHR5LCBjb21wb25lbnRUaXRsZSwgZW1wdHlUZXh0KSA9PiB7XG4gICAgcmV0dXJuIChwcm9wcykgPT4ge1xuICAgICAgICBjb25zdCBpc0VtcHR5UmVzdWx0ID0gaXNFbXB0eShwcm9wcyk7XG4gICAgICAgIGNvbnN0IHsgaGlkZVBsYWNlSG9sZGVyID0gZmFsc2UsIGlzSW5FZGl0b3IgPSBmYWxzZSB9ID0gcHJvcHM7XG4gICAgICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChSZWFjdC5GcmFnbWVudCwgbnVsbCxcbiAgICAgICAgICAgICFpc0VtcHR5UmVzdWx0ICYmXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChDb21wb25lbnQsIE9iamVjdC5hc3NpZ24oe30sIHByb3BzKSksXG4gICAgICAgICAgICAoaXNFbXB0eVJlc3VsdCAmJiBpc0luRWRpdG9yICYmICFoaWRlUGxhY2VIb2xkZXIpICYmXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChFZGl0b3JQbGFjZUhvbGRlciwgeyBlbXB0eVRleHRBcHBlbmQ6IGVtcHR5VGV4dCwgY29tcG9uZW50VGl0bGU6IGNvbXBvbmVudFRpdGxlIH0pKSk7XG4gICAgfTtcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lRV0p6ZEhKaFkzUkRiM0psUTI5dGNHOXVaVzUwTG1weklpd2ljMjkxY21ObFVtOXZkQ0k2SWlJc0luTnZkWEpqWlhNaU9sc2lRV0p6ZEhKaFkzUkRiM0psUTI5dGNHOXVaVzUwTG5SemVDSmRMQ0p1WVcxbGN5STZXMTBzSW0xaGNIQnBibWR6SWpvaVFVRkJRVHM3T3pzN096czdPenM3T3pzN1IwRmpSenRCUVVWSUxFOUJRVThzUzBGQlN5eExRVUZMTEUxQlFVMHNUMEZCVHl4RFFVRkRPMEZCUnk5Q0xFOUJRVThzUlVGQlF5eHBRa0ZCYVVJc1JVRkJReXhOUVVGTkxITkNRVUZ6UWl4RFFVRkRPMEZCWlhaRUxFMUJRVTBzUTBGQlF5eE5RVUZOTEhkQ1FVRjNRaXhIUVVGSExFTkJSWEJETEZOQlFUQkNMRVZCUXpGQ0xHMUNRVUV3UWl4RlFVTktMRVZCUVVVN1NVRkRlRUlzVDBGQlR5eERRVUZETEV0QlFVOHNSVUZCUlN4RlFVRkZPMUZCUldZc1RVRkJUU3haUVVGWkxFZEJRVWNzUzBGQlN5eERRVUZETEZsQlFWa3NRMEZCUXp0UlFVTjRReXhOUVVGTkxHZENRVUZuUWl4SFFVRkhMRmxCUVZrc1NVRkJTU3haUVVGWkxFTkJRVU1zU1VGQlNTeEZRVUZGTEVOQlFVTXNUVUZCVFN4SFFVRkhMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zV1VGQldTeERRVUZETEVOQlFVTXNRMEZCUXl4dFFrRkJiVUlzUTBGQlF6dFJRVVUzUnl4TlFVRk5MRmRCUVZjc1IwRkJTenRaUVVOc1FpeEhRVUZITEV0QlFVczdXVUZEVWl4WlFVRlpMRVZCUVVVc1owSkJRV2RDTzFOQlEycERMRU5CUVVNN1VVRkZSaXhQUVVGUExHOUNRVUZETEZOQlFWTXNiMEpCUVVzc1YwRkJWeXhGUVVGSkxFTkJRVU03U1VGRE1VTXNRMEZCUXl4RFFVRkJPMEZCUTB3c1EwRkJReXhEUVVGRE8wRkJSVVlzVFVGQlRTeERRVUZETEUxQlFVMHNNRUpCUVRCQ0xFZEJRVWNzUTBGRk1VSXNVMEZCTUVJc1JVRkRNVUlzVDBGQk5FSXNSVUZETlVJc1kwRkJjMElzUlVGQlJTeFRRVUZwUWl4RlFVTnVRaXhGUVVGRk8wbEJRM0JETEU5QlFVOHNRMEZCUXl4TFFVRlBMRVZCUVVVc1JVRkJSVHRSUVVWbUxFMUJRVTBzWVVGQllTeEhRVUZYTEU5QlFVOHNRMEZCUXl4TFFVRkxMRU5CUVVNc1EwRkJRenRSUVVNM1F5eE5RVUZOTEVWQlFVTXNaVUZCWlN4SFFVRkhMRXRCUVVzc1JVRkJSU3hWUVVGVkxFZEJRVWNzUzBGQlN5eEZRVUZETEVkQlFVY3NTMEZCU3l4RFFVRkRPMUZCUlRWRUxFOUJRVThzUTBGRFNEdFpRVU5OTEVOQlFVTXNZVUZCWVR0blFrRkRhRUlzYjBKQlFVTXNVMEZCVXl4dlFrRkJTeXhMUVVGTExFVkJRVWs3V1VGSGNFSXNRMEZCUXl4aFFVRmhMRWxCUVVrc1ZVRkJWU3hKUVVGSkxFTkJRVU1zWlVGQlpTeERRVUZETzJkQ1FVTnFSQ3h2UWtGQlF5eHBRa0ZCYVVJc1NVRkRaQ3hsUVVGbExFVkJRVVVzVTBGQlV5eEZRVU14UWl4alFVRmpMRVZCUVVVc1kwRkJZeXhIUVVOb1F5eERRVVZRTEVOQlEwNHNRMEZCUXp0SlFVTk9MRU5CUVVNc1EwRkJRVHRCUVVOTUxFTkJRVU1zUTBGQlF5SXNJbk52ZFhKalpYTkRiMjUwWlc1MElqcGJJaThxWEc0Z0tpQWdRMjl3ZVhKcFoyaDBJREl3TWpBZ1FXUnZZbVZjYmlBcVhHNGdLaUFnVEdsalpXNXpaV1FnZFc1a1pYSWdkR2hsSUVGd1lXTm9aU0JNYVdObGJuTmxMQ0JXWlhKemFXOXVJREl1TUNBb2RHaGxJRndpVEdsalpXNXpaVndpS1R0Y2JpQXFJQ0I1YjNVZ2JXRjVJRzV2ZENCMWMyVWdkR2hwY3lCbWFXeGxJR1Y0WTJWd2RDQnBiaUJqYjIxd2JHbGhibU5sSUhkcGRHZ2dkR2hsSUV4cFkyVnVjMlV1WEc0Z0tpQWdXVzkxSUcxaGVTQnZZblJoYVc0Z1lTQmpiM0I1SUc5bUlIUm9aU0JNYVdObGJuTmxJR0YwWEc0Z0tseHVJQ29nSUNBZ0lDQm9kSFJ3T2k4dmQzZDNMbUZ3WVdOb1pTNXZjbWN2YkdsalpXNXpaWE12VEVsRFJVNVRSUzB5TGpCY2JpQXFYRzRnS2lBZ1ZXNXNaWE56SUhKbGNYVnBjbVZrSUdKNUlHRndjR3hwWTJGaWJHVWdiR0YzSUc5eUlHRm5jbVZsWkNCMGJ5QnBiaUIzY21sMGFXNW5MQ0J6YjJaMGQyRnlaVnh1SUNvZ0lHUnBjM1J5YVdKMWRHVmtJSFZ1WkdWeUlIUm9aU0JNYVdObGJuTmxJR2x6SUdScGMzUnlhV0oxZEdWa0lHOXVJR0Z1SUZ3aVFWTWdTVk5jSWlCQ1FWTkpVeXhjYmlBcUlDQlhTVlJJVDFWVUlGZEJVbEpCVGxSSlJWTWdUMUlnUTA5T1JFbFVTVTlPVXlCUFJpQkJUbGtnUzBsT1JDd2daV2wwYUdWeUlHVjRjSEpsYzNNZ2IzSWdhVzF3YkdsbFpDNWNiaUFxSUNCVFpXVWdkR2hsSUV4cFkyVnVjMlVnWm05eUlIUm9aU0J6Y0dWamFXWnBZeUJzWVc1bmRXRm5aU0JuYjNabGNtNXBibWNnY0dWeWJXbHpjMmx2Ym5NZ1lXNWtYRzRnS2lBZ2JHbHRhWFJoZEdsdmJuTWdkVzVrWlhJZ2RHaGxJRXhwWTJWdWMyVXVYRzRnS2k5Y2JseHVhVzF3YjNKMElDb2dZWE1nVW1WaFkzUWdabkp2YlNBbmNtVmhZM1FuTzF4dWFXMXdiM0owSUh0RGIyMXdiMjVsYm5SVWVYQmxmU0JtY205dElDZHlaV0ZqZENjN1hHNWNibWx0Y0c5eWRDQjdSV1JwZEc5eVVHeGhZMlZJYjJ4a1pYSjlJR1p5YjIwZ1hDSXVMMk52YlcxdmJpOXdiR0ZqWldodmJHUmxjbHdpTzF4dVhHNWxlSEJ2Y25RZ2FXNTBaWEptWVdObElFaGhjMEpoYzJWRGMzTkRiR0Z6Y3lCN1hHNGdJQ0FnWW1GelpVTnpjME5zWVhOelB6b2djM1J5YVc1blhHNTlYRzVjYm1WNGNHOXlkQ0JwYm5SbGNtWmhZMlVnUTI5eVpVTnZiWEJ2Ym1WdWRFMXZaR1ZzSUdWNGRHVnVaSE1nU0dGelFtRnpaVU56YzBOc1lYTnplMXh1SUNBZ0lHaHBaR1ZRYkdGalpVaHZiR1JsY2o4NklHSnZiMnhsWVc1Y2JpQWdJQ0JwYzBsdVJXUnBkRzl5UHpwaWIyOXNaV0Z1WEc1OVhHNWNibVY0Y0c5eWRDQnBiblJsY21aaFkyVWdRMjl5WlVOdmJYQnZibVZ1ZEZOMFlYUmxJSHRjYmx4dWZWeHVYRzVsZUhCdmNuUWdZMjl1YzNRZ2QybDBhRk4wWVc1a1lYSmtRbUZ6WlVOemMwTnNZWE56SUQwZ1BFMGdaWGgwWlc1a2N5QkRiM0psUTI5dGNHOXVaVzUwVFc5a1pXdytYRzRvWEc0Z0lDQWdRMjl0Y0c5dVpXNTBPa052YlhCdmJtVnVkRlI1Y0dVOFRUNHNYRzRnSUNBZ1pHVm1ZWFZzZEVKaGMyVkRjM05EYkdGemN6cHpkSEpwYm1kY2JpazZVbVZoWTNRdVEyOXRjRzl1Wlc1MFZIbHdaVHhOUGlBZ1BUNGdlMXh1SUNBZ0lISmxkSFZ5YmlBb2NISnZjSE02VFNrZ1BUNGdlMXh1WEc0Z0lDQWdJQ0FnSUdOdmJuTjBJR0poYzJWRGMzTkRiR0Z6Y3lBOUlIQnliM0J6TG1KaGMyVkRjM05EYkdGemN6dGNiaUFnSUNBZ0lDQWdZMjl1YzNRZ2RHOUNaVlZ6WldSRGMzTkRiR0Z6Y3lBOUlHSmhjMlZEYzNORGJHRnpjeUFtSmlCaVlYTmxRM056UTJ4aGMzTXVkSEpwYlNncExteGxibWQwYUNBK0lEQWdQeUJpWVhObFEzTnpRMnhoYzNNZ09pQmtaV1poZFd4MFFtRnpaVU56YzBOc1lYTnpPMXh1WEc0Z0lDQWdJQ0FnSUdOdmJuTjBJRzFsY21kbFpGQnliM0J6T2lCTlBTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNBdUxpNXdjbTl3Y3l4Y2JpQWdJQ0FnSUNBZ0lDQWdJR0poYzJWRGMzTkRiR0Z6Y3pvZ2RHOUNaVlZ6WldSRGMzTkRiR0Z6YzF4dUlDQWdJQ0FnSUNCOU8xeHVYRzRnSUNBZ0lDQWdJSEpsZEhWeWJpQThRMjl0Y0c5dVpXNTBJSHN1TGk1dFpYSm5aV1JRY205d2MzMGdMejQ3WEc0Z0lDQWdmVnh1ZlR0Y2JseHVaWGh3YjNKMElHTnZibk4wSUhkcGRHaERiMjVrYVhScGIyNWhiRkJzWVdObFNHOXNaR1Z5SUQwZ1BFMGdaWGgwWlc1a2N5QkRiM0psUTI5dGNHOXVaVzUwVFc5a1pXdytYRzRnSUNBZ0lDQWdJQ0FnSUNBb1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ1EyOXRjRzl1Wlc1ME9rTnZiWEJ2Ym1WdWRGUjVjR1U4VFQ0c0lGeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lHbHpSVzF3ZEhrNktIQnliM0J6T2swcElEMCtJR0p2YjJ4bFlXNHNYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdZMjl0Y0c5dVpXNTBWR2wwYkdVL09uTjBjbWx1Wnl3Z1pXMXdkSGxVWlhoMFB6cHpkSEpwYm1kY2JpQWdJQ0FnSUNBZ0lDQWdJQ2s2VW1WaFkzUXVRMjl0Y0c5dVpXNTBWSGx3WlR4TlBpQWdQVDRnZTF4dUlDQWdJSEpsZEhWeWJpQW9jSEp2Y0hNNlRTa2dQVDRnZTF4dVhHNGdJQ0FnSUNBZ0lHTnZibk4wSUdselJXMXdkSGxTWlhOMWJIUTZZbTl2YkdWaGJpQTlJR2x6Ulcxd2RIa29jSEp2Y0hNcE8xeHVJQ0FnSUNBZ0lDQmpiMjV6ZENCN2FHbGtaVkJzWVdObFNHOXNaR1Z5SUQwZ1ptRnNjMlVzSUdselNXNUZaR2wwYjNJZ1BTQm1ZV3h6WlgwZ1BTQndjbTl3Y3p0Y2JseHVJQ0FnSUNBZ0lDQnlaWFIxY200Z0tGeHVJQ0FnSUNBZ0lDQWdJQ0FnUEQ1Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCN0lDRnBjMFZ0Y0hSNVVtVnpkV3gwSUNZbVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ1BFTnZiWEJ2Ym1WdWRDQjdMaTR1Y0hKdmNITjlJQzgrWEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnZlZ4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdLR2x6Ulcxd2RIbFNaWE4xYkhRZ0ppWWdhWE5KYmtWa2FYUnZjaUFtSmlBaGFHbGtaVkJzWVdObFNHOXNaR1Z5S1NBbUpseHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0E4UldScGRHOXlVR3hoWTJWSWIyeGtaWEpjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJR1Z0Y0hSNVZHVjRkRUZ3Y0dWdVpEMTdaVzF3ZEhsVVpYaDBmVnh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdZMjl0Y0c5dVpXNTBWR2wwYkdVOWUyTnZiWEJ2Ym1WdWRGUnBkR3hsZlZ4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQXZQbHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJSDFjYmlBZ0lDQWdJQ0FnSUNBZ0lEd3ZQbHh1SUNBZ0lDQWdJQ0FwTzF4dUlDQWdJSDFjYm4wN0lsMTkiLCIvKlxuICogIENvcHlyaWdodCAyMDIwIEFkb2JlXG4gKlxuICogIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiAgeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICAgICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqICBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiAgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiAgU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgd2l0aENvbmRpdGlvbmFsUGxhY2VIb2xkZXIsIHdpdGhTdGFuZGFyZEJhc2VDc3NDbGFzcyB9IGZyb20gXCIuLi8uLi8uLi9BYnN0cmFjdENvcmVDb21wb25lbnRcIjtcbmltcG9ydCB7IFJvdXRlZExpbmsgfSBmcm9tIFwiLi4vLi4vLi4vcm91dGluZy9Sb3V0ZWRMaW5rXCI7XG5pbXBvcnQgeyBJbWFnZVYySXNFbXB0eUZuIH0gZnJvbSBcIi4vSW1hZ2VWMklzRW1wdHlGblwiO1xuY29uc3QgSW1hZ2VWMklubmVyQ29udGVudHMgPSAocHJvcHMpID0+IHtcbiAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoUmVhY3QuRnJhZ21lbnQsIG51bGwsXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIiwgeyBzcmM6IHByb3BzLnNyYywgY2xhc3NOYW1lOiBwcm9wcy5iYXNlQ3NzQ2xhc3MgKyAnX19pbWFnZScsIGFsdDogcHJvcHMuYWx0IH0pLFxuICAgICAgICAhIShwcm9wcy50aXRsZSkgJiYgUmVhY3QuY3JlYXRlRWxlbWVudChcInNwYW5cIiwgeyBjbGFzc05hbWU6IHByb3BzLmJhc2VDc3NDbGFzcyArICdfX3RpdGxlJywgaXRlbVByb3A6IFwiY2FwdGlvblwiIH0sIHByb3BzLnRpdGxlKSxcbiAgICAgICAgcHJvcHMuZGlzcGxheVBvcHVwVGl0bGUgJiYgKCEhcHJvcHMudGl0bGUpICYmIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJtZXRhXCIsIHsgaXRlbVByb3A6IFwiY2FwdGlvblwiLCBjb250ZW50OiBwcm9wcy50aXRsZSB9KSkpO1xufTtcbmNvbnN0IEltYWdlVjJDb250ZW50cyA9IChwcm9wcykgPT4ge1xuICAgIGlmIChwcm9wcy5saW5rICYmIHByb3BzLmxpbmsudHJpbSgpLmxlbmd0aCA+IDApIHtcbiAgICAgICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KFJvdXRlZExpbmssIHsgY2xhc3NOYW1lOiBwcm9wcy5iYXNlQ3NzQ2xhc3MgKyAnX19saW5rJywgaXNSb3V0ZWQ6IHByb3BzLnJvdXRlZCwgdG86IHByb3BzLmxpbmsgfSxcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoSW1hZ2VWMklubmVyQ29udGVudHMsIE9iamVjdC5hc3NpZ24oe30sIHByb3BzKSkpKTtcbiAgICB9XG4gICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoSW1hZ2VWMklubmVyQ29udGVudHMsIE9iamVjdC5hc3NpZ24oe30sIHByb3BzKSk7XG59O1xuY29uc3QgSW1hZ2VWMkltcGwgPSAocHJvcHMpID0+IHtcbiAgICBjb25zdCB7IGlzSW5FZGl0b3IgPSBmYWxzZSB9ID0gcHJvcHM7XG4gICAgY29uc3QgY3NzQ2xhc3NOYW1lID0gKGlzSW5FZGl0b3IpID8gcHJvcHMuYmFzZUNzc0NsYXNzICsgJyBjcS1kZC1pbWFnZScgOiBwcm9wcy5iYXNlQ3NzQ2xhc3M7XG4gICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3NOYW1lOiBjc3NDbGFzc05hbWUgfSxcbiAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChJbWFnZVYyQ29udGVudHMsIE9iamVjdC5hc3NpZ24oe30sIHByb3BzKSkpKTtcbn07XG5jb25zdCBJbWFnZVYyID0gKHByb3BzKSA9PiB7XG4gICAgY29uc3QgV3JhcHBlZCA9IHdpdGhDb25kaXRpb25hbFBsYWNlSG9sZGVyKHdpdGhTdGFuZGFyZEJhc2VDc3NDbGFzcyhJbWFnZVYySW1wbCwgXCJjbXAtaW1hZ2VcIiksIEltYWdlVjJJc0VtcHR5Rm4sIFwiSW1hZ2UgVjJcIik7XG4gICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoV3JhcHBlZCwgT2JqZWN0LmFzc2lnbih7fSwgcHJvcHMpKTtcbn07XG5leHBvcnQgZGVmYXVsdCBJbWFnZVYyO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pU1cxaFoyVldNaTVxY3lJc0luTnZkWEpqWlZKdmIzUWlPaUlpTENKemIzVnlZMlZ6SWpwYklrbHRZV2RsVmpJdWRITjRJbDBzSW01aGJXVnpJanBiWFN3aWJXRndjR2x1WjNNaU9pSkJRVUZCT3pzN096czdPenM3T3pzN096dEhRV05ITzBGQlJVZ3NUMEZCVHl4TFFVRnJRaXhOUVVGTkxFOUJRVThzUTBGQlF6dEJRVU4yUXl4UFFVRlBMRVZCUVVNc01FSkJRVEJDTEVWQlFVVXNkMEpCUVhkQ0xFVkJRVU1zVFVGQlRTeG5RMEZCWjBNc1EwRkJRenRCUVVWd1J5eFBRVUZQTEVWQlFVTXNWVUZCVlN4RlFVRkRMRTFCUVUwc05rSkJRVFpDTEVOQlFVTTdRVUZEZGtRc1QwRkJUeXhGUVVGRExHZENRVUZuUWl4RlFVRkRMRTFCUVUwc2IwSkJRVzlDTEVOQlFVTTdRVUZYY0VRc1RVRkJUU3h2UWtGQmIwSXNSMEZCUnl4RFFVRkRMRXRCUVd0Q0xFVkJRVVVzUlVGQlJUdEpRVU5vUkN4UFFVRlBMRU5CUTBnN1VVRkRTU3cyUWtGQlN5eEhRVUZITEVWQlFVVXNTMEZCU3l4RFFVRkRMRWRCUVVjc1JVRkRaQ3hUUVVGVExFVkJRVVVzUzBGQlN5eERRVUZETEZsQlFWa3NSMEZCUnl4VFFVRlRMRVZCUTNwRExFZEJRVWNzUlVGQlJTeExRVUZMTEVOQlFVTXNSMEZCUnl4SFFVRkhPMUZCUld4Q0xFTkJRVU1zUTBGQlF5eERRVUZETEV0QlFVc3NRMEZCUXl4TFFVRkxMRU5CUVVNc1NVRkJTU3c0UWtGQlRTeFRRVUZUTEVWQlFVVXNTMEZCU3l4RFFVRkRMRmxCUVZrc1IwRkJSeXhUUVVGVExFVkJRVVVzVVVGQlVTeEZRVUZETEZOQlFWTXNTVUZCUlN4TFFVRkxMRU5CUVVNc1MwRkJTeXhEUVVGUk8xRkJSek5ITEV0QlFVc3NRMEZCUXl4cFFrRkJhVUlzU1VGQlNTeERRVUZETEVOQlFVTXNRMEZCUXl4TFFVRkxMRU5CUVVNc1MwRkJTeXhEUVVGRExFbEJRVWtzT0VKQlFVMHNVVUZCVVN4RlFVRkRMRk5CUVZNc1JVRkJReXhQUVVGUExFVkJRVVVzUzBGQlN5eERRVUZETEV0QlFVc3NSMEZCUnl4RFFVVnVSeXhEUVVOT0xFTkJRVU03UVVGRFRpeERRVUZETEVOQlFVTTdRVUZGUml4TlFVRk5MR1ZCUVdVc1IwRkJSeXhEUVVGRExFdEJRV3RDTEVWQlFVVXNSVUZCUlR0SlFVTXpReXhKUVVGSkxFdEJRVXNzUTBGQlF5eEpRVUZKTEVsQlFVa3NTMEZCU3l4RFFVRkRMRWxCUVVrc1EwRkJReXhKUVVGSkxFVkJRVVVzUTBGQlF5eE5RVUZOTEVkQlFVY3NRMEZCUXl4RlFVRkRPMUZCUXpORExFOUJRVThzUTBGRFNDeHZRa0ZCUXl4VlFVRlZMRWxCUVVNc1UwRkJVeXhGUVVGRkxFdEJRVXNzUTBGQlF5eFpRVUZaTEVkQlFVY3NVVUZCVVN4RlFVRkZMRkZCUVZFc1JVRkJSU3hMUVVGTExFTkJRVU1zVFVGQlRTeEZRVUZGTEVWQlFVVXNSVUZCUlN4TFFVRkxMRU5CUVVNc1NVRkJTVHRaUVVONFJpeHZRa0ZCUXl4dlFrRkJiMElzYjBKQlFVc3NTMEZCU3l4RlFVRkhMRU5CUTNwQ0xFTkJRMmhDTEVOQlFVRTdTMEZEU2p0SlFVTkVMRTlCUVU4c2IwSkJRVU1zYjBKQlFXOUNMRzlDUVVGTExFdEJRVXNzUlVGQlJ5eERRVUZCTzBGQlF6ZERMRU5CUVVNc1EwRkJRenRCUVVWR0xFMUJRVTBzVjBGQlZ5eEhRVUZITEVOQlFVTXNTMEZCYTBJc1JVRkJSU3hGUVVGRk8wbEJSWFpETEUxQlFVMHNSVUZCUXl4VlFVRlZMRWRCUVVjc1MwRkJTeXhGUVVGRExFZEJRVWNzUzBGQlN5eERRVUZETzBsQlEyNURMRTFCUVUwc1dVRkJXU3hIUVVGSExFTkJRVU1zVlVGQlZTeERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRXRCUVVzc1EwRkJReXhaUVVGWkxFZEJRVWNzWTBGQll5eERRVUZETEVOQlFVTXNRMEZCUXl4TFFVRkxMRU5CUVVNc1dVRkJXU3hEUVVGRE8wbEJSVFZHTEU5QlFVOHNRMEZEU0N3MlFrRkJTeXhUUVVGVExFVkJRVVVzV1VGQldUdFJRVU40UWl4dlFrRkJReXhsUVVGbExHOUNRVUZMTEV0QlFVc3NSVUZCUnl4RFFVTXpRaXhEUVVOVUxFTkJRVUU3UVVGRlRpeERRVUZETEVOQlFVTTdRVUZGUml4TlFVRk5MRTlCUVU4c1IwRkJSeXhEUVVGRExFdEJRV3RDTEVWQlFVVXNSVUZCUlR0SlFVVnVReXhOUVVGTkxFOUJRVThzUjBGQlJ5d3dRa0ZCTUVJc1EwRkJReXgzUWtGQmQwSXNRMEZCUXl4WFFVRlhMRVZCUVVVc1YwRkJWeXhEUVVGRExFVkJRVVVzWjBKQlFXZENMRVZCUVVVc1ZVRkJWU3hEUVVGRExFTkJRVU03U1VGRE4wZ3NUMEZCVHl4dlFrRkJReXhQUVVGUExHOUNRVUZMTEV0QlFVc3NSVUZCUnl4RFFVRkJPMEZCUTJoRExFTkJRVU1zUTBGQlF6dEJRVVZHTEdWQlFXVXNUMEZCVHl4RFFVRkRJaXdpYzI5MWNtTmxjME52Ym5SbGJuUWlPbHNpTHlwY2JpQXFJQ0JEYjNCNWNtbG5hSFFnTWpBeU1DQkJaRzlpWlZ4dUlDcGNiaUFxSUNCTWFXTmxibk5sWkNCMWJtUmxjaUIwYUdVZ1FYQmhZMmhsSUV4cFkyVnVjMlVzSUZabGNuTnBiMjRnTWk0d0lDaDBhR1VnWENKTWFXTmxibk5sWENJcE8xeHVJQ29nSUhsdmRTQnRZWGtnYm05MElIVnpaU0IwYUdseklHWnBiR1VnWlhoalpYQjBJR2x1SUdOdmJYQnNhV0Z1WTJVZ2QybDBhQ0IwYUdVZ1RHbGpaVzV6WlM1Y2JpQXFJQ0JaYjNVZ2JXRjVJRzlpZEdGcGJpQmhJR052Y0hrZ2IyWWdkR2hsSUV4cFkyVnVjMlVnWVhSY2JpQXFYRzRnS2lBZ0lDQWdJR2gwZEhBNkx5OTNkM2N1WVhCaFkyaGxMbTl5Wnk5c2FXTmxibk5sY3k5TVNVTkZUbE5GTFRJdU1GeHVJQ3BjYmlBcUlDQlZibXhsYzNNZ2NtVnhkV2x5WldRZ1lua2dZWEJ3YkdsallXSnNaU0JzWVhjZ2IzSWdZV2R5WldWa0lIUnZJR2x1SUhkeWFYUnBibWNzSUhOdlpuUjNZWEpsWEc0Z0tpQWdaR2x6ZEhKcFluVjBaV1FnZFc1a1pYSWdkR2hsSUV4cFkyVnVjMlVnYVhNZ1pHbHpkSEpwWW5WMFpXUWdiMjRnWVc0Z1hDSkJVeUJKVTF3aUlFSkJVMGxUTEZ4dUlDb2dJRmRKVkVoUFZWUWdWMEZTVWtGT1ZFbEZVeUJQVWlCRFQwNUVTVlJKVDA1VElFOUdJRUZPV1NCTFNVNUVMQ0JsYVhSb1pYSWdaWGh3Y21WemN5QnZjaUJwYlhCc2FXVmtMbHh1SUNvZ0lGTmxaU0IwYUdVZ1RHbGpaVzV6WlNCbWIzSWdkR2hsSUhOd1pXTnBabWxqSUd4aGJtZDFZV2RsSUdkdmRtVnlibWx1WnlCd1pYSnRhWE56YVc5dWN5QmhibVJjYmlBcUlDQnNhVzFwZEdGMGFXOXVjeUIxYm1SbGNpQjBhR1VnVEdsalpXNXpaUzVjYmlBcUwxeHVYRzVwYlhCdmNuUWdVbVZoWTNRc0lIdERiMjF3YjI1bGJuUjlJR1p5YjIwZ0ozSmxZV04wSnp0Y2JtbHRjRzl5ZENCN2QybDBhRU52Ym1ScGRHbHZibUZzVUd4aFkyVkliMnhrWlhJc0lIZHBkR2hUZEdGdVpHRnlaRUpoYzJWRGMzTkRiR0Z6YzMwZ1puSnZiU0JjSWk0dUx5NHVMeTR1TDBGaWMzUnlZV04wUTI5eVpVTnZiWEJ2Ym1WdWRGd2lPMXh1YVcxd2IzSjBJSHRTYjNWMFpXUkRiM0psUTI5dGNHOXVaVzUwVFc5a1pXeDlJR1p5YjIwZ1hDSXVMaTh1TGk4dUxpOXliM1YwYVc1bkwxSnZkWFJsWkVOdmNtVkRiMjF3YjI1bGJuUmNJanRjYm1sdGNHOXlkQ0I3VW05MWRHVmtUR2x1YTMwZ1puSnZiU0JjSWk0dUx5NHVMeTR1TDNKdmRYUnBibWN2VW05MWRHVmtUR2x1YTF3aU8xeHVhVzF3YjNKMElIdEpiV0ZuWlZZeVNYTkZiWEIwZVVadWZTQm1jbTl0SUZ3aUxpOUpiV0ZuWlZZeVNYTkZiWEIwZVVadVhDSTdYRzVjYmx4dVpYaHdiM0owSUdsdWRHVnlabUZqWlNCSmJXRm5aVll5VFc5a1pXd2daWGgwWlc1a2N5QlNiM1YwWldSRGIzSmxRMjl0Y0c5dVpXNTBUVzlrWld4N1hHNGdJQ0FnYzNKak9pQnpkSEpwYm1kY2JpQWdJQ0JoYkhRNklITjBjbWx1WjF4dUlDQWdJR1JwYzNCc1lYbFFiM0IxY0ZScGRHeGxQem9nWW05dmJHVmhibHh1SUNBZ0lIUnBkR3hsUHpvZ2MzUnlhVzVuWEc0Z0lDQWdiR2x1YXo4NklITjBjbWx1WjF4dWZWeHVYRzVqYjI1emRDQkpiV0ZuWlZZeVNXNXVaWEpEYjI1MFpXNTBjeUE5SUNod2NtOXdjenBKYldGblpWWXlUVzlrWld3cElEMCtJSHRjYmlBZ0lDQnlaWFIxY200Z0tGeHVJQ0FnSUNBZ0lDQThQbHh1SUNBZ0lDQWdJQ0FnSUNBZ1BHbHRaeUJ6Y21NOWUzQnliM0J6TG5OeVkzMWNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdZMnhoYzNOT1lXMWxQWHR3Y205d2N5NWlZWE5sUTNOelEyeGhjM01nS3lBblgxOXBiV0ZuWlNkOVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lHRnNkRDE3Y0hKdmNITXVZV3gwZlM4K1hHNGdJQ0FnSUNBZ0lDQWdJQ0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSVNFb2NISnZjSE11ZEdsMGJHVXBJQ1ltSUR4emNHRnVJR05zWVhOelRtRnRaVDE3Y0hKdmNITXVZbUZ6WlVOemMwTnNZWE56SUNzZ0oxOWZkR2wwYkdVbmZTQnBkR1Z0VUhKdmNEMWNJbU5oY0hScGIyNWNJajU3Y0hKdmNITXVkR2wwYkdWOVBDOXpjR0Z1UGx4dUlDQWdJQ0FnSUNBZ0lDQWdmVnh1SUNBZ0lDQWdJQ0FnSUNBZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lIQnliM0J6TG1ScGMzQnNZWGxRYjNCMWNGUnBkR3hsSUNZbUlDZ2hJWEJ5YjNCekxuUnBkR3hsS1NBbUppQThiV1YwWVNCcGRHVnRVSEp2Y0QxY0ltTmhjSFJwYjI1Y0lpQmpiMjUwWlc1MFBYdHdjbTl3Y3k1MGFYUnNaWDB2UGx4dUlDQWdJQ0FnSUNBZ0lDQWdmVnh1SUNBZ0lDQWdJQ0E4THo1Y2JpQWdJQ0FwTzF4dWZUdGNibHh1WTI5dWMzUWdTVzFoWjJWV01rTnZiblJsYm5SeklEMGdLSEJ5YjNCek9rbHRZV2RsVmpKTmIyUmxiQ2tnUFQ0Z2UxeHVJQ0FnSUdsbUtDQndjbTl3Y3k1c2FXNXJJQ1ltSUhCeWIzQnpMbXhwYm1zdWRISnBiU2dwTG14bGJtZDBhQ0ErSURBcGUxeHVJQ0FnSUNBZ0lDQnlaWFIxY200Z0tGeHVJQ0FnSUNBZ0lDQWdJQ0FnUEZKdmRYUmxaRXhwYm1zZ1kyeGhjM05PWVcxbFBYdHdjbTl3Y3k1aVlYTmxRM056UTJ4aGMzTWdLeUFuWDE5c2FXNXJKMzBnYVhOU2IzVjBaV1E5ZTNCeWIzQnpMbkp2ZFhSbFpIMGdkRzg5ZTNCeWIzQnpMbXhwYm10OVBseHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lEeEpiV0ZuWlZZeVNXNXVaWEpEYjI1MFpXNTBjeUI3TGk0dWNISnZjSE45THo1Y2JpQWdJQ0FnSUNBZ0lDQWdJRHd2VW05MWRHVmtUR2x1YXo1Y2JpQWdJQ0FnSUNBZ0tWeHVJQ0FnSUgxY2JpQWdJQ0J5WlhSMWNtNGdQRWx0WVdkbFZqSkpibTVsY2tOdmJuUmxiblJ6SUhzdUxpNXdjbTl3YzMwdlBseHVmVHRjYmx4dVkyOXVjM1FnU1cxaFoyVldNa2x0Y0d3Z1BTQW9jSEp2Y0hNNlNXMWhaMlZXTWsxdlpHVnNLU0E5UGlCN1hHNWNiaUFnSUNCamIyNXpkQ0I3YVhOSmJrVmthWFJ2Y2lBOUlHWmhiSE5sZlNBOUlIQnliM0J6TzF4dUlDQWdJR052Ym5OMElHTnpjME5zWVhOelRtRnRaU0E5SUNocGMwbHVSV1JwZEc5eUtTQS9JSEJ5YjNCekxtSmhjMlZEYzNORGJHRnpjeUFySUNjZ1kzRXRaR1F0YVcxaFoyVW5JRG9nY0hKdmNITXVZbUZ6WlVOemMwTnNZWE56TzF4dVhHNGdJQ0FnSUhKbGRIVnliaUFvWEc0Z0lDQWdJQ0FnSUNBOFpHbDJJR05zWVhOelRtRnRaVDE3WTNOelEyeGhjM05PWVcxbGZUNWNiaUFnSUNBZ0lDQWdJQ0FnSUNBOFNXMWhaMlZXTWtOdmJuUmxiblJ6SUhzdUxpNXdjbTl3YzMwdlBseHVJQ0FnSUNBZ0lDQWdQQzlrYVhZK1hHNGdJQ0FnSUNsY2JseHVmVHRjYmx4dVkyOXVjM1FnU1cxaFoyVldNaUE5SUNod2NtOXdjenBKYldGblpWWXlUVzlrWld3cElEMCtJSHRjYmx4dUlDQWdJR052Ym5OMElGZHlZWEJ3WldRZ1BTQjNhWFJvUTI5dVpHbDBhVzl1WVd4UWJHRmpaVWh2YkdSbGNpaDNhWFJvVTNSaGJtUmhjbVJDWVhObFEzTnpRMnhoYzNNb1NXMWhaMlZXTWtsdGNHd3NJRndpWTIxd0xXbHRZV2RsWENJcExDQkpiV0ZuWlZZeVNYTkZiWEIwZVVadUxDQmNJa2x0WVdkbElGWXlYQ0lwTzF4dUlDQWdJSEpsZEhWeWJpQThWM0poY0hCbFpDQjdMaTR1Y0hKdmNITjlMejVjYm4wN1hHNWNibVY0Y0c5eWRDQmtaV1poZFd4MElFbHRZV2RsVmpJN0lsMTkiLCJleHBvcnQgZnVuY3Rpb24gSW1hZ2VWMklzRW1wdHlGbihwcm9wcykge1xuICAgIHJldHVybiAoIXByb3BzLnNyYykgfHwgcHJvcHMuc3JjLnRyaW0oKS5sZW5ndGggPT09IDA7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lTVzFoWjJWV01rbHpSVzF3ZEhsR2JpNXFjeUlzSW5OdmRYSmpaVkp2YjNRaU9pSWlMQ0p6YjNWeVkyVnpJanBiSWtsdFlXZGxWakpKYzBWdGNIUjVSbTR1ZEhNaVhTd2libUZ0WlhNaU9sdGRMQ0p0WVhCd2FXNW5jeUk2SWtGQlJVRXNUVUZCVFN4VlFVRlZMR2RDUVVGblFpeERRVUZETEV0QlFXdENPMGxCUXk5RExFOUJRVThzUTBGQlF5eERRVUZETEV0QlFVc3NRMEZCUXl4SFFVRkhMRU5CUVVNc1NVRkJTU3hMUVVGTExFTkJRVU1zUjBGQlJ5eERRVUZETEVsQlFVa3NSVUZCUlN4RFFVRkRMRTFCUVUwc1MwRkJTeXhEUVVGRExFTkJRVU03UVVGRGVrUXNRMEZCUXlJc0luTnZkWEpqWlhORGIyNTBaVzUwSWpwYkltbHRjRzl5ZENCN1NXMWhaMlZXTWsxdlpHVnNmU0JtY205dElGd2lMaTlKYldGblpWWXlYQ0k3WEc1Y2JtVjRjRzl5ZENCbWRXNWpkR2x2YmlCSmJXRm5aVll5U1hORmJYQjBlVVp1S0hCeWIzQnpPa2x0WVdkbFZqSk5iMlJsYkNrZ2UxeHVJQ0FnSUhKbGRIVnliaUFvSVhCeWIzQnpMbk55WXlrZ2ZId2djSEp2Y0hNdWMzSmpMblJ5YVcwb0tTNXNaVzVuZEdnZ1BUMDlJREE3WEc1OVhHNGlYWDA9IiwiLypcbiAqICBDb3B5cmlnaHQgMjAyMCBBZG9iZVxuICpcbiAqICBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqICBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgICAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqICBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiAgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqICBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgd2l0aENvbmRpdGlvbmFsUGxhY2VIb2xkZXIsIHdpdGhTdGFuZGFyZEJhc2VDc3NDbGFzcyB9IGZyb20gXCIuLi8uLi8uLi9BYnN0cmFjdENvcmVDb21wb25lbnRcIjtcbmltcG9ydCBJbWFnZVYxIGZyb20gXCIuLi8uLi8uLi9hdXRob3JpbmcvaW1hZ2UvdjIvSW1hZ2VWMlwiO1xuaW1wb3J0IFRpdGxlVjEgZnJvbSBcIi4uLy4uLy4uL2F1dGhvcmluZy90aXRsZS92Mi9UaXRsZVYyXCI7XG5pbXBvcnQgeyBSb3V0ZWRMaW5rIH0gZnJvbSBcIi4uLy4uLy4uL3JvdXRpbmcvUm91dGVkTGlua1wiO1xuaW1wb3J0IHsgVGVhc2VyVjFJc0VtcHR5Rm4gfSBmcm9tIFwiLi9UZWFzZXJWMUlzRW1wdHlGblwiO1xuY29uc3QgZ2VuZXJhdGVMaW5rID0gKHByb3BzLCBhY3Rpb24sIGluZGV4KSA9PiB7XG4gICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoUm91dGVkTGluaywgeyBrZXk6IFwibGluay1cIiArIGluZGV4LCBpc1JvdXRlZDogcHJvcHMucm91dGVkLCBjbGFzc05hbWU6IHByb3BzLmJhc2VDc3NDbGFzcyArICdfX2FjdGlvbi1saW5rJywgdG86IGFjdGlvbi5VUkwgfSxcbiAgICAgICAgXCIkXCIsXG4gICAgICAgIGFjdGlvbi50aXRsZSk7XG59O1xuY29uc3QgVGVhc2VyVjFJbWFnZSA9IChwcm9wcykgPT4ge1xuICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzTmFtZTogcHJvcHMuYmFzZUNzc0NsYXNzICsgJ19faW1hZ2UnIH0sXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoSW1hZ2VWMSwgeyBpc0luRWRpdG9yOiBwcm9wcy5pc0luRWRpdG9yLCBzcmM6IHByb3BzLmltYWdlUGF0aCwgYWx0OiBwcm9wcy5pbWFnZUFsdCB9KSkpO1xufTtcbmNvbnN0IFRlYXNlclYxUHJlVGl0bGUgPSAocHJvcHMpID0+IFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzc05hbWU6IHByb3BzLmJhc2VDc3NDbGFzcyArICdfX3ByZXRpdGxlJyB9LCBwcm9wcy5wcmV0aXRsZSk7XG5jb25zdCBUZWFzZXJWMVRpdGxlID0gKHByb3BzKSA9PiBSZWFjdC5jcmVhdGVFbGVtZW50KFRpdGxlVjEsIHsgYmFzZUNzc0NsYXNzOiBwcm9wcy5iYXNlQ3NzQ2xhc3MgKyAnX190aXRsZScsIG5lc3RlZDogdHJ1ZSwgdHlwZTogcHJvcHMudGl0bGVUeXBlLCBpc0luRWRpdG9yOiBwcm9wcy5pc0luRWRpdG9yLCBsaW5rRGlzYWJsZWQ6IGZhbHNlLCB0ZXh0OiBwcm9wcy50aXRsZSwgbGlua1VSTDogcHJvcHMubGlua1VSTCB9KTtcbmNvbnN0IFRlYXNlclYxRGVzY3JpcHRpb24gPSAocHJvcHMpID0+IHtcbiAgICBjb25zdCB0ZXh0ID0gcHJvcHMuZGVzY3JpcHRpb247XG4gICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzc05hbWU6IHByb3BzLmJhc2VDc3NDbGFzcyArICdfX2Rlc2NyaXB0aW9uJywgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw6IHsgX19odG1sOiB0ZXh0IH0gfSk7XG59O1xuY29uc3QgVGVhc2VyVjFBY3Rpb25zID0gKHByb3BzKSA9PiB7XG4gICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3NOYW1lOiBwcm9wcy5iYXNlQ3NzQ2xhc3MgKyAnX19hY3Rpb24tY29udGFpbmVyJyB9LCBwcm9wcy5hY3Rpb25zLm1hcCgoYWN0aW9uLCBpbmRleCkgPT4ge1xuICAgICAgICByZXR1cm4gZ2VuZXJhdGVMaW5rKHByb3BzLCBhY3Rpb24sIGluZGV4KTtcbiAgICB9KSkpO1xufTtcbmNvbnN0IFRlYXNlclYxSW1wbCA9IChwcm9wcykgPT4ge1xuICAgIGNvbnN0IGNzc0NsYXNzID0gcHJvcHMuYmFzZUNzc0NsYXNzIHx8ICcnICsgKHByb3BzLmlzSW5FZGl0b3IpID8gJyBjcS1kZC1pbWFnZScgOiAnJztcbiAgICBjb25zdCBzaG93QWN0aW9ucyA9IChwcm9wcy5hY3Rpb25zLmxlbmd0aCA+IDApICYmIHByb3BzLmFjdGlvbnNFbmFibGVkO1xuICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzTmFtZTogY3NzQ2xhc3MgfSxcbiAgICAgICAgcHJvcHMuaW1hZ2VQYXRoICYmIFJlYWN0LmNyZWF0ZUVsZW1lbnQoVGVhc2VyVjFJbWFnZSwgT2JqZWN0LmFzc2lnbih7fSwgcHJvcHMpKSxcbiAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzTmFtZTogcHJvcHMuYmFzZUNzc0NsYXNzICsgJ19fY29udGVudCcgfSxcbiAgICAgICAgICAgIHByb3BzLnByZXRpdGxlICYmIFJlYWN0LmNyZWF0ZUVsZW1lbnQoVGVhc2VyVjFQcmVUaXRsZSwgT2JqZWN0LmFzc2lnbih7fSwgcHJvcHMpKSxcbiAgICAgICAgICAgIHByb3BzLnRpdGxlICYmIFJlYWN0LmNyZWF0ZUVsZW1lbnQoVGVhc2VyVjFUaXRsZSwgT2JqZWN0LmFzc2lnbih7fSwgcHJvcHMpKSxcbiAgICAgICAgICAgIHByb3BzLmRlc2NyaXB0aW9uICYmIFJlYWN0LmNyZWF0ZUVsZW1lbnQoVGVhc2VyVjFEZXNjcmlwdGlvbiwgT2JqZWN0LmFzc2lnbih7fSwgcHJvcHMpKSxcbiAgICAgICAgICAgIHNob3dBY3Rpb25zICYmIFJlYWN0LmNyZWF0ZUVsZW1lbnQoVGVhc2VyVjFBY3Rpb25zLCBPYmplY3QuYXNzaWduKHt9LCBwcm9wcykpKSkpO1xufTtcbmNvbnN0IFRlYXNlclYxID0gKHByb3BzKSA9PiB7XG4gICAgY29uc3QgV3JhcHBlZCA9IHdpdGhDb25kaXRpb25hbFBsYWNlSG9sZGVyKHdpdGhTdGFuZGFyZEJhc2VDc3NDbGFzcyhUZWFzZXJWMUltcGwsIFwiY21wLXRlYXNlclwiKSwgVGVhc2VyVjFJc0VtcHR5Rm4sIFwiVGVhc2VyIFYxXCIpO1xuICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFdyYXBwZWQsIE9iamVjdC5hc3NpZ24oe30sIHByb3BzKSk7XG59O1xuZXhwb3J0IGRlZmF1bHQgVGVhc2VyVjE7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lWR1ZoYzJWeVZqRXVhbk1pTENKemIzVnlZMlZTYjI5MElqb2lJaXdpYzI5MWNtTmxjeUk2V3lKVVpXRnpaWEpXTVM1MGMzZ2lYU3dpYm1GdFpYTWlPbHRkTENKdFlYQndhVzVuY3lJNklrRkJRVUU3T3pzN096czdPenM3T3pzN08wZEJZMGM3UVVGSFNDeFBRVUZQTEV0QlFXdENMRTFCUVUwc1QwRkJUeXhEUVVGRE8wRkJRM1pETEU5QlFVOHNSVUZCUXl3d1FrRkJNRUlzUlVGQlJTeDNRa0ZCZDBJc1JVRkJReXhOUVVGTkxHZERRVUZuUXl4RFFVRkRPMEZCUTNCSExFOUJRVThzVDBGQlR5eE5RVUZOTEhGRFFVRnhReXhEUVVGRE8wRkJRekZFTEU5QlFVOHNUMEZCVHl4TlFVRk5MSEZEUVVGeFF5eERRVUZETzBGQlF6RkVMRTlCUVU4c1JVRkJReXhWUVVGVkxFVkJRVU1zVFVGQlRTdzJRa0ZCTmtJc1EwRkJRenRCUVVWMlJDeFBRVUZQTEVWQlFVTXNhVUpCUVdsQ0xFVkJRVU1zVFVGQlRTeHhRa0ZCY1VJc1EwRkJRenRCUVhGQ2RFUXNUVUZCVFN4WlFVRlpMRWRCUVVjc1EwRkJReXhMUVVGdFFpeEZRVUZGTEUxQlFYRkNMRVZCUVVVc1MwRkJXU3hGUVVGRkxFVkJRVVU3U1VGRE9VVXNUMEZCVHl4dlFrRkJReXhWUVVGVkxFbEJRVU1zUjBGQlJ5eEZRVUZGTEU5QlFVOHNSMEZCUnl4TFFVRkxMRVZCUVVVc1VVRkJVU3hGUVVGRkxFdEJRVXNzUTBGQlF5eE5RVUZOTEVWQlFVVXNVMEZCVXl4RlFVRkZMRXRCUVVzc1EwRkJReXhaUVVGWkxFZEJRVWNzWlVGQlpTeEZRVUZGTEVWQlFVVXNSVUZCUlN4TlFVRk5MRU5CUVVNc1IwRkJSenM3VVVGQlNTeE5RVUZOTEVOQlFVTXNTMEZCU3l4RFFVRmpMRU5CUVVFN1FVRkRiRXNzUTBGQlF5eERRVUZCTzBGQlJVUXNUVUZCVFN4aFFVRmhMRWRCUVVjc1EwRkJReXhMUVVGdFFpeEZRVUZGTEVWQlFVVTdTVUZETVVNc1QwRkJUeXhEUVVOSUxEWkNRVUZMTEZOQlFWTXNSVUZCUlN4TFFVRkxMRU5CUVVNc1dVRkJXU3hIUVVGSExGTkJRVk03VVVGRE1VTXNiMEpCUVVNc1QwRkJUeXhKUVVGRExGVkJRVlVzUlVGQlJTeExRVUZMTEVOQlFVTXNWVUZCVlN4RlFVRkZMRWRCUVVjc1JVRkJSU3hMUVVGTExFTkJRVU1zVTBGQlV5eEZRVUZGTEVkQlFVY3NSVUZCUlN4TFFVRkxMRU5CUVVNc1VVRkJVU3hIUVVGSExFTkJRMnBHTEVOQlExUXNRMEZCUXp0QlFVTk9MRU5CUVVNc1EwRkJRenRCUVVWR0xFMUJRVTBzWjBKQlFXZENMRWRCUVVjc1EwRkJReXhMUVVGdFFpeEZRVUZGTEVWQlFVVXNRMEZCUXl3MlFrRkJTeXhUUVVGVExFVkJRVVVzUzBGQlN5eERRVUZETEZsQlFWa3NSMEZCUnl4WlFVRlpMRWxCUVVjc1MwRkJTeXhEUVVGRExGRkJRVkVzUTBGQlR5eERRVUZETzBGQlJUVklMRTFCUVUwc1lVRkJZU3hIUVVGSExFTkJRVU1zUzBGQmJVSXNSVUZCUlN4RlFVRkZMRU5CUTNSRExHOUNRVUZETEU5QlFVOHNTVUZCUXl4WlFVRlpMRVZCUVVVc1MwRkJTeXhEUVVGRExGbEJRVmtzUjBGQlJ5eFRRVUZUTEVWQlF6VkRMRTFCUVUwc1JVRkJSU3hKUVVGSkxFVkJRMW9zU1VGQlNTeEZRVUZGTEV0QlFVc3NRMEZCUXl4VFFVRlRMRVZCUTNKQ0xGVkJRVlVzUlVGQlJTeExRVUZMTEVOQlFVTXNWVUZCVlN4RlFVTTFRaXhaUVVGWkxFVkJRVVVzUzBGQlN5eEZRVU51UWl4SlFVRkpMRVZCUVVVc1MwRkJTeXhEUVVGRExFdEJRVXNzUlVGRGFrSXNUMEZCVHl4RlFVRkZMRXRCUVVzc1EwRkJReXhQUVVGUExFZEJRVWNzUTBGQlF6dEJRVWN6UXl4TlFVRk5MRzFDUVVGdFFpeEhRVUZITEVOQlFVTXNTMEZCYlVJc1JVRkJSU3hGUVVGRk8wbEJRMmhFTEUxQlFVMHNTVUZCU1N4SFFVRlZMRXRCUVVzc1EwRkJReXhYUVVGeFFpeERRVUZETzBsQlEyaEVMRTlCUVU4c05rSkJRVXNzVTBGQlV5eEZRVUZGTEV0QlFVc3NRMEZCUXl4WlFVRlpMRWRCUVVjc1pVRkJaU3hGUVVGRkxIVkNRVUYxUWl4RlFVRkZMRVZCUVVNc1RVRkJUU3hGUVVGRkxFbEJRVWtzUlVGQlF5eEhRVUZSTEVOQlFVTTdRVUZEYWtnc1EwRkJReXhEUVVGRE8wRkJSVVlzVFVGQlRTeGxRVUZsTEVkQlFVY3NRMEZCUXl4TFFVRnRRaXhGUVVGRkxFVkJRVVU3U1VGRE5VTXNUMEZCVHl4RFFVTklMRFpDUVVGTExGTkJRVk1zUlVGQlJTeExRVUZMTEVOQlFVTXNXVUZCV1N4SFFVRkhMRzlDUVVGdlFpeEpRVVZxUkN4TFFVRkxMRU5CUVVNc1QwRkJUeXhEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETEUxQlFVMHNSVUZCUlN4TFFVRkxMRVZCUVVVc1JVRkJSVHRSUVVOb1F5eFBRVUZQTEZsQlFWa3NRMEZCUXl4TFFVRkxMRVZCUVVNc1RVRkJUU3hGUVVGRExFdEJRVXNzUTBGQlF5eERRVUZCTzBsQlF6TkRMRU5CUVVNc1EwRkJReXhEUVVWS0xFTkJRMVFzUTBGQlFUdEJRVU5NTEVOQlFVTXNRMEZCUXp0QlFVVkdMRTFCUVUwc1dVRkJXU3hIUVVGSExFTkJRVU1zUzBGQmJVSXNSVUZCUlN4RlFVRkZPMGxCUTNwRExFMUJRVTBzVVVGQlVTeEhRVUZITEV0QlFVc3NRMEZCUXl4WlFVRlpMRWxCUVVrc1JVRkJSU3hIUVVGSExFTkJRVU1zUzBGQlN5eERRVUZETEZWQlFWVXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhqUVVGakxFTkJRVU1zUTBGQlF5eERRVUZETEVWQlFVVXNRMEZCUXp0SlFVTnlSaXhOUVVGTkxGZEJRVmNzUjBGQlZ5eERRVUZGTEV0QlFVc3NRMEZCUXl4UFFVRlBMRU5CUVVNc1RVRkJUU3hIUVVGSExFTkJRVU1zUTBGQlJTeEpRVUZKTEV0QlFVc3NRMEZCUXl4alFVRmpMRU5CUVVNN1NVRkRha1lzVDBGQlR5eERRVU5JTERaQ1FVRkxMRk5CUVZNc1JVRkJSU3hSUVVGUk8xRkJRMjVDTEV0QlFVc3NRMEZCUXl4VFFVRlRMRWxCUVVrc2IwSkJRVU1zWVVGQllTeHZRa0ZCU3l4TFFVRkxMRVZCUVVjN1VVRkRMME1zTmtKQlFVc3NVMEZCVXl4RlFVRkZMRXRCUVVzc1EwRkJReXhaUVVGWkxFZEJRVWNzVjBGQlZ6dFpRVU16UXl4TFFVRkxMRU5CUVVNc1VVRkJVU3hKUVVGSkxHOUNRVUZETEdkQ1FVRm5RaXh2UWtGQlN5eExRVUZMTEVWQlFVYzdXVUZEYUVRc1MwRkJTeXhEUVVGRExFdEJRVXNzU1VGQlNTeHZRa0ZCUXl4aFFVRmhMRzlDUVVGTExFdEJRVXNzUlVGQlJ6dFpRVU14UXl4TFFVRkxMRU5CUVVNc1YwRkJWeXhKUVVGSkxHOUNRVUZETEcxQ1FVRnRRaXh2UWtGQlN5eExRVUZMTEVWQlFVYzdXVUZEZEVRc1YwRkJWeXhKUVVGSkxHOUNRVUZETEdWQlFXVXNiMEpCUVVzc1MwRkJTeXhGUVVGSExFTkJRek5ETEVOQlEwb3NRMEZEVkN4RFFVRkJPMEZCUTB3c1EwRkJReXhEUVVGRE8wRkJSMFlzVFVGQlRTeFJRVUZSTEVkQlFVY3NRMEZCUXl4TFFVRnRRaXhGUVVGRkxFVkJRVVU3U1VGRGNrTXNUVUZCVFN4UFFVRlBMRWRCUVVjc01FSkJRVEJDTEVOQlFVTXNkMEpCUVhkQ0xFTkJRVU1zV1VGQldTeEZRVUZGTEZsQlFWa3NRMEZCUXl4RlFVRkZMR2xDUVVGcFFpeEZRVUZGTEZkQlFWY3NRMEZCUXl4RFFVRkJPMGxCUTJoSkxFOUJRVThzYjBKQlFVTXNUMEZCVHl4dlFrRkJTeXhMUVVGTExFVkJRVWNzUTBGQlFUdEJRVU5vUXl4RFFVRkRMRU5CUVVNN1FVRkZSaXhsUVVGbExGRkJRVkVzUTBGQlF5SXNJbk52ZFhKalpYTkRiMjUwWlc1MElqcGJJaThxWEc0Z0tpQWdRMjl3ZVhKcFoyaDBJREl3TWpBZ1FXUnZZbVZjYmlBcVhHNGdLaUFnVEdsalpXNXpaV1FnZFc1a1pYSWdkR2hsSUVGd1lXTm9aU0JNYVdObGJuTmxMQ0JXWlhKemFXOXVJREl1TUNBb2RHaGxJRndpVEdsalpXNXpaVndpS1R0Y2JpQXFJQ0I1YjNVZ2JXRjVJRzV2ZENCMWMyVWdkR2hwY3lCbWFXeGxJR1Y0WTJWd2RDQnBiaUJqYjIxd2JHbGhibU5sSUhkcGRHZ2dkR2hsSUV4cFkyVnVjMlV1WEc0Z0tpQWdXVzkxSUcxaGVTQnZZblJoYVc0Z1lTQmpiM0I1SUc5bUlIUm9aU0JNYVdObGJuTmxJR0YwWEc0Z0tseHVJQ29nSUNBZ0lDQm9kSFJ3T2k4dmQzZDNMbUZ3WVdOb1pTNXZjbWN2YkdsalpXNXpaWE12VEVsRFJVNVRSUzB5TGpCY2JpQXFYRzRnS2lBZ1ZXNXNaWE56SUhKbGNYVnBjbVZrSUdKNUlHRndjR3hwWTJGaWJHVWdiR0YzSUc5eUlHRm5jbVZsWkNCMGJ5QnBiaUIzY21sMGFXNW5MQ0J6YjJaMGQyRnlaVnh1SUNvZ0lHUnBjM1J5YVdKMWRHVmtJSFZ1WkdWeUlIUm9aU0JNYVdObGJuTmxJR2x6SUdScGMzUnlhV0oxZEdWa0lHOXVJR0Z1SUZ3aVFWTWdTVk5jSWlCQ1FWTkpVeXhjYmlBcUlDQlhTVlJJVDFWVUlGZEJVbEpCVGxSSlJWTWdUMUlnUTA5T1JFbFVTVTlPVXlCUFJpQkJUbGtnUzBsT1JDd2daV2wwYUdWeUlHVjRjSEpsYzNNZ2IzSWdhVzF3YkdsbFpDNWNiaUFxSUNCVFpXVWdkR2hsSUV4cFkyVnVjMlVnWm05eUlIUm9aU0J6Y0dWamFXWnBZeUJzWVc1bmRXRm5aU0JuYjNabGNtNXBibWNnY0dWeWJXbHpjMmx2Ym5NZ1lXNWtYRzRnS2lBZ2JHbHRhWFJoZEdsdmJuTWdkVzVrWlhJZ2RHaGxJRXhwWTJWdWMyVXVYRzRnS2k5Y2JseHVYRzVwYlhCdmNuUWdVbVZoWTNRc0lIdERiMjF3YjI1bGJuUjlJR1p5YjIwZ1hDSnlaV0ZqZEZ3aU8xeHVhVzF3YjNKMElIdDNhWFJvUTI5dVpHbDBhVzl1WVd4UWJHRmpaVWh2YkdSbGNpd2dkMmwwYUZOMFlXNWtZWEprUW1GelpVTnpjME5zWVhOemZTQm1jbTl0SUZ3aUxpNHZMaTR2TGk0dlFXSnpkSEpoWTNSRGIzSmxRMjl0Y0c5dVpXNTBYQ0k3WEc1cGJYQnZjblFnU1cxaFoyVldNU0JtY205dElGd2lMaTR2TGk0dkxpNHZZWFYwYUc5eWFXNW5MMmx0WVdkbEwzWXlMMGx0WVdkbFZqSmNJanRjYm1sdGNHOXlkQ0JVYVhSc1pWWXhJR1p5YjIwZ1hDSXVMaTh1TGk4dUxpOWhkWFJvYjNKcGJtY3ZkR2wwYkdVdmRqSXZWR2wwYkdWV01sd2lPMXh1YVcxd2IzSjBJSHRTYjNWMFpXUk1hVzVyZlNCbWNtOXRJRndpTGk0dkxpNHZMaTR2Y205MWRHbHVaeTlTYjNWMFpXUk1hVzVyWENJN1hHNXBiWEJ2Y25RZ2UxSnZkWFJsWkVOdmNtVkRiMjF3YjI1bGJuUk5iMlJsYkN3Z1VtOTFkR1ZrVFc5a1pXeDlJR1p5YjIwZ1hDSXVMaTh1TGk4dUxpOXliM1YwYVc1bkwxSnZkWFJsWkVOdmNtVkRiMjF3YjI1bGJuUmNJanRjYm1sdGNHOXlkQ0I3VkdWaGMyVnlWakZKYzBWdGNIUjVSbTU5SUdaeWIyMGdYQ0l1TDFSbFlYTmxjbFl4U1hORmJYQjBlVVp1WENJN1hHNWNibVY0Y0c5eWRDQnBiblJsY21aaFkyVWdWR1ZoYzJWeVZqRkJZM1JwYjI0Z1pYaDBaVzVrY3lCU2IzVjBaV1JOYjJSbGJIdGNiaUFnSUNCMGFYUnNaVG9nYzNSeWFXNW5YRzRnSUNBZ1ZWSk1PaUJ6ZEhKcGJtZGNibjFjYmx4dVpYaHdiM0owSUdsdWRHVnlabUZqWlNCVVpXRnpaWEpXTVUxdlpHVnNJR1Y0ZEdWdVpITWdVbTkxZEdWa1EyOXlaVU52YlhCdmJtVnVkRTF2WkdWc2UxeHVJQ0FnSUhCeVpYUnBkR3hsUHpvZ2MzUnlhVzVuWEc0Z0lDQWdkR2wwYkdVNklITjBjbWx1WjF4dUlDQWdJR1JsYzJOeWFYQjBhVzl1UHpvZ2MzUnlhVzVuWEc0Z0lDQWdkR2wwYkdWVWVYQmxPaUJ6ZEhKcGJtZGNiaUFnSUNCc2FXNXJWVkpNT2lCemRISnBibWRjYmlBZ0lDQmhZM1JwYjI1elJXNWhZbXhsWkRvZ1ltOXZiR1ZoYmx4dUlDQWdJR2x0WVdkbFRHbHVhMGhwWkdSbGJqb2dZbTl2YkdWaGJseHVJQ0FnSUdsdFlXZGxRV3gwT2lCemRISnBibWRjYmlBZ0lDQjBhWFJzWlV4cGJtdElhV1JrWlc0NklHSnZiMnhsWVc1Y2JpQWdJQ0JoWTNScGIyNXpPaUJVWldGelpYSldNVUZqZEdsdmJsdGRYRzRnSUNBZ2FXMWhaMlZRWVhSb09pQnpkSEpwYm1kY2JuMWNibHh1WTI5dWMzUWdaMlZ1WlhKaGRHVk1hVzVySUQwZ0tIQnliM0J6T2xSbFlYTmxjbFl4VFc5a1pXd3NJR0ZqZEdsdmJqcFVaV0Z6WlhKV01VRmpkR2x2Yml3Z2FXNWtaWGc2Ym5WdFltVnlLU0E5UGlCN1hHNGdJQ0FnY21WMGRYSnVJRHhTYjNWMFpXUk1hVzVySUd0bGVUMTdYQ0pzYVc1ckxWd2lJQ3NnYVc1a1pYaDlJR2x6VW05MWRHVmtQWHR3Y205d2N5NXliM1YwWldSOUlHTnNZWE56VG1GdFpUMTdjSEp2Y0hNdVltRnpaVU56YzBOc1lYTnpJQ3NnSjE5ZllXTjBhVzl1TFd4cGJtc25mU0IwYnoxN1lXTjBhVzl1TGxWU1RIMCtKSHRoWTNScGIyNHVkR2wwYkdWOVBDOVNiM1YwWldSTWFXNXJQbHh1ZlZ4dVhHNWpiMjV6ZENCVVpXRnpaWEpXTVVsdFlXZGxJRDBnS0hCeWIzQnpPbFJsWVhObGNsWXhUVzlrWld3cElEMCtJSHRjYmlBZ0lDQnlaWFIxY200Z0tGeHVJQ0FnSUNBZ0lDQThaR2wySUdOc1lYTnpUbUZ0WlQxN2NISnZjSE11WW1GelpVTnpjME5zWVhOeklDc2dKMTlmYVcxaFoyVW5mVDVjYmlBZ0lDQWdJQ0FnSUNBZ0lEeEpiV0ZuWlZZeElHbHpTVzVGWkdsMGIzSTllM0J5YjNCekxtbHpTVzVGWkdsMGIzSjlJSE55WXoxN2NISnZjSE11YVcxaFoyVlFZWFJvZlNCaGJIUTllM0J5YjNCekxtbHRZV2RsUVd4MGZTOCtYRzRnSUNBZ0lDQWdJRHd2WkdsMlBseHVJQ0FnSUNrN1hHNTlPMXh1WEc1amIyNXpkQ0JVWldGelpYSldNVkJ5WlZScGRHeGxJRDBnS0hCeWIzQnpPbFJsWVhObGNsWXhUVzlrWld3cElEMCtJRHhrYVhZZ1kyeGhjM05PWVcxbFBYdHdjbTl3Y3k1aVlYTmxRM056UTJ4aGMzTWdLeUFuWDE5d2NtVjBhWFJzWlNkOVBudHdjbTl3Y3k1d2NtVjBhWFJzWlgwOEwyUnBkajQ3WEc1Y2JtTnZibk4wSUZSbFlYTmxjbFl4VkdsMGJHVWdQU0FvY0hKdmNITTZWR1ZoYzJWeVZqRk5iMlJsYkNrZ1BUNGdYRzRnSUNBZ0lDQWdJRHhVYVhSc1pWWXhJR0poYzJWRGMzTkRiR0Z6Y3oxN2NISnZjSE11WW1GelpVTnpjME5zWVhOeklDc2dKMTlmZEdsMGJHVW5mVnh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0J1WlhOMFpXUTllM1J5ZFdWOVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lIUjVjR1U5ZTNCeWIzQnpMblJwZEd4bFZIbHdaWDFjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnYVhOSmJrVmthWFJ2Y2oxN2NISnZjSE11YVhOSmJrVmthWFJ2Y24xY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2JHbHVhMFJwYzJGaWJHVmtQWHRtWVd4elpYMWNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdkR1Y0ZEQxN2NISnZjSE11ZEdsMGJHVjlYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJR3hwYm10VlVrdzllM0J5YjNCekxteHBibXRWVWt4OUx6NDdYRzVjYmx4dVkyOXVjM1FnVkdWaGMyVnlWakZFWlhOamNtbHdkR2x2YmlBOUlDaHdjbTl3Y3pwVVpXRnpaWEpXTVUxdlpHVnNLU0E5UGlCN1hHNGdJQ0FnWTI5dWMzUWdkR1Y0ZERwemRISnBibWNnUFNCd2NtOXdjeTVrWlhOamNtbHdkR2x2YmlCaGN5QnpkSEpwYm1jN1hHNGdJQ0FnY21WMGRYSnVJRHhrYVhZZ1kyeGhjM05PWVcxbFBYdHdjbTl3Y3k1aVlYTmxRM056UTJ4aGMzTWdLeUFuWDE5a1pYTmpjbWx3ZEdsdmJpZDlJR1JoYm1kbGNtOTFjMng1VTJWMFNXNXVaWEpJVkUxTVBYdDdYMTlvZEcxc09pQjBaWGgwZlgwK1BDOWthWFkrTzF4dWZUdGNibHh1WTI5dWMzUWdWR1ZoYzJWeVZqRkJZM1JwYjI1eklEMGdLSEJ5YjNCek9sUmxZWE5sY2xZeFRXOWtaV3dwSUQwK0lIdGNiaUFnSUNCeVpYUjFjbTRnS0Z4dUlDQWdJQ0FnSUNBOFpHbDJJR05zWVhOelRtRnRaVDE3Y0hKdmNITXVZbUZ6WlVOemMwTnNZWE56SUNzZ0oxOWZZV04wYVc5dUxXTnZiblJoYVc1bGNpZDlQbHh1SUNBZ0lDQWdJQ0FnSUNBZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lIQnliM0J6TG1GamRHbHZibk11YldGd0tDaGhZM1JwYjI0c0lHbHVaR1Y0S1NBOVBpQjdYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUhKbGRIVnliaUJuWlc1bGNtRjBaVXhwYm1zb2NISnZjSE1zWVdOMGFXOXVMR2x1WkdWNEtWeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lIMHBYRzRnSUNBZ0lDQWdJQ0FnSUNCOVhHNGdJQ0FnSUNBZ0lEd3ZaR2wyUGx4dUlDQWdJQ2xjYm4wN1hHNWNibU52Ym5OMElGUmxZWE5sY2xZeFNXMXdiQ0E5SUNod2NtOXdjenBVWldGelpYSldNVTF2WkdWc0tTQTlQaUI3WEc0Z0lDQWdZMjl1YzNRZ1kzTnpRMnhoYzNNZ1BTQndjbTl3Y3k1aVlYTmxRM056UTJ4aGMzTWdmSHdnSnljZ0t5QW9jSEp2Y0hNdWFYTkpia1ZrYVhSdmNpa2dQeUFuSUdOeExXUmtMV2x0WVdkbEp5QTZJQ2NuTzF4dUlDQWdJR052Ym5OMElITm9iM2RCWTNScGIyNXpPbUp2YjJ4bFlXNGdQU0FvSUhCeWIzQnpMbUZqZEdsdmJuTXViR1Z1WjNSb0lENGdNQ0FwSUNZbUlIQnliM0J6TG1GamRHbHZibk5GYm1GaWJHVmtPMXh1SUNBZ0lISmxkSFZ5YmlBb1hHNGdJQ0FnSUNBZ0lEeGthWFlnWTJ4aGMzTk9ZVzFsUFh0amMzTkRiR0Z6YzMwK1hHNGdJQ0FnSUNBZ0lDQWdJQ0I3Y0hKdmNITXVhVzFoWjJWUVlYUm9JQ1ltSUR4VVpXRnpaWEpXTVVsdFlXZGxJSHN1TGk1d2NtOXdjMzB2UG4xY2JpQWdJQ0FnSUNBZ0lDQWdJRHhrYVhZZ1kyeGhjM05PWVcxbFBYdHdjbTl3Y3k1aVlYTmxRM056UTJ4aGMzTWdLeUFuWDE5amIyNTBaVzUwSjMwK1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2UzQnliM0J6TG5CeVpYUnBkR3hsSUNZbUlEeFVaV0Z6WlhKV01WQnlaVlJwZEd4bElIc3VMaTV3Y205d2MzMHZQbjFjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0I3Y0hKdmNITXVkR2wwYkdVZ0ppWWdQRlJsWVhObGNsWXhWR2wwYkdVZ2V5NHVMbkJ5YjNCemZTOCtmVnh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJSHR3Y205d2N5NWtaWE5qY21sd2RHbHZiaUFtSmlBOFZHVmhjMlZ5VmpGRVpYTmpjbWx3ZEdsdmJpQjdMaTR1Y0hKdmNITjlMejU5WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnZTNOb2IzZEJZM1JwYjI1eklDWW1JRHhVWldGelpYSldNVUZqZEdsdmJuTWdleTR1TG5CeWIzQnpmUzgrZlZ4dUlDQWdJQ0FnSUNBZ0lDQWdQQzlrYVhZK1hHNGdJQ0FnSUNBZ0lEd3ZaR2wyUGx4dUlDQWdJQ2xjYm4wN1hHNWNibHh1WTI5dWMzUWdWR1ZoYzJWeVZqRWdQU0FvY0hKdmNITTZWR1ZoYzJWeVZqRk5iMlJsYkNrZ1BUNGdlMXh1SUNBZ0lHTnZibk4wSUZkeVlYQndaV1FnUFNCM2FYUm9RMjl1WkdsMGFXOXVZV3hRYkdGalpVaHZiR1JsY2loM2FYUm9VM1JoYm1SaGNtUkNZWE5sUTNOelEyeGhjM01vVkdWaGMyVnlWakZKYlhCc0xDQmNJbU50Y0MxMFpXRnpaWEpjSWlrc0lGUmxZWE5sY2xZeFNYTkZiWEIwZVVadUxDQmNJbFJsWVhObGNpQldNVndpS1Z4dUlDQWdJSEpsZEhWeWJpQThWM0poY0hCbFpDQjdMaTR1Y0hKdmNITjlMejVjYm4wN1hHNWNibVY0Y0c5eWRDQmtaV1poZFd4MElGUmxZWE5sY2xZeE95SmRmUT09IiwiLypcbiAqICBDb3B5cmlnaHQgMjAyMCBBZG9iZVxuICpcbiAqICBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqICBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgICAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqICBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiAgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqICBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIFRlYXNlclYxSXNFbXB0eUZuKHByb3BzKSB7XG4gICAgcmV0dXJuICghcHJvcHMuaW1hZ2VQYXRoICYmICFwcm9wcy5kZXNjcmlwdGlvbiAmJiBwcm9wcy5hY3Rpb25zLmxlbmd0aCA9PSAwKTtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaVZHVmhjMlZ5VmpGSmMwVnRjSFI1Um00dWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUlpd2ljMjkxY21ObGN5STZXeUpVWldGelpYSldNVWx6Ulcxd2RIbEdiaTUwY3lKZExDSnVZVzFsY3lJNlcxMHNJbTFoY0hCcGJtZHpJam9pUVVGQlFUczdPenM3T3pzN096czdPenM3UjBGalJ6dEJRVXRJTEUxQlFVMHNWVUZCVlN4cFFrRkJhVUlzUTBGQlF5eExRVUZ0UWp0SlFVTnFSQ3hQUVVGUExFTkJRVU1zUTBGQlF5eExRVUZMTEVOQlFVTXNVMEZCVXl4SlFVRkpMRU5CUVVNc1MwRkJTeXhEUVVGRExGZEJRVmNzU1VGQlN5eExRVUZMTEVOQlFVTXNUMEZCVHl4RFFVRkRMRTFCUVUwc1NVRkJTU3hEUVVGRExFTkJRVU1zUTBGQlFUdEJRVU5xUml4RFFVRkRJaXdpYzI5MWNtTmxjME52Ym5SbGJuUWlPbHNpTHlwY2JpQXFJQ0JEYjNCNWNtbG5hSFFnTWpBeU1DQkJaRzlpWlZ4dUlDcGNiaUFxSUNCTWFXTmxibk5sWkNCMWJtUmxjaUIwYUdVZ1FYQmhZMmhsSUV4cFkyVnVjMlVzSUZabGNuTnBiMjRnTWk0d0lDaDBhR1VnWENKTWFXTmxibk5sWENJcE8xeHVJQ29nSUhsdmRTQnRZWGtnYm05MElIVnpaU0IwYUdseklHWnBiR1VnWlhoalpYQjBJR2x1SUdOdmJYQnNhV0Z1WTJVZ2QybDBhQ0IwYUdVZ1RHbGpaVzV6WlM1Y2JpQXFJQ0JaYjNVZ2JXRjVJRzlpZEdGcGJpQmhJR052Y0hrZ2IyWWdkR2hsSUV4cFkyVnVjMlVnWVhSY2JpQXFYRzRnS2lBZ0lDQWdJR2gwZEhBNkx5OTNkM2N1WVhCaFkyaGxMbTl5Wnk5c2FXTmxibk5sY3k5TVNVTkZUbE5GTFRJdU1GeHVJQ3BjYmlBcUlDQlZibXhsYzNNZ2NtVnhkV2x5WldRZ1lua2dZWEJ3YkdsallXSnNaU0JzWVhjZ2IzSWdZV2R5WldWa0lIUnZJR2x1SUhkeWFYUnBibWNzSUhOdlpuUjNZWEpsWEc0Z0tpQWdaR2x6ZEhKcFluVjBaV1FnZFc1a1pYSWdkR2hsSUV4cFkyVnVjMlVnYVhNZ1pHbHpkSEpwWW5WMFpXUWdiMjRnWVc0Z1hDSkJVeUJKVTF3aUlFSkJVMGxUTEZ4dUlDb2dJRmRKVkVoUFZWUWdWMEZTVWtGT1ZFbEZVeUJQVWlCRFQwNUVTVlJKVDA1VElFOUdJRUZPV1NCTFNVNUVMQ0JsYVhSb1pYSWdaWGh3Y21WemN5QnZjaUJwYlhCc2FXVmtMbHh1SUNvZ0lGTmxaU0IwYUdVZ1RHbGpaVzV6WlNCbWIzSWdkR2hsSUhOd1pXTnBabWxqSUd4aGJtZDFZV2RsSUdkdmRtVnlibWx1WnlCd1pYSnRhWE56YVc5dWN5QmhibVJjYmlBcUlDQnNhVzFwZEdGMGFXOXVjeUIxYm1SbGNpQjBhR1VnVEdsalpXNXpaUzVjYmlBcUwxeHVYRzVjYm1sdGNHOXlkQ0I3VkdWaGMyVnlWakZOYjJSbGJIMGdabkp2YlNCY0lpNHZWR1ZoYzJWeVZqRmNJanRjYmx4dVpYaHdiM0owSUdaMWJtTjBhVzl1SUZSbFlYTmxjbFl4U1hORmJYQjBlVVp1S0hCeWIzQnpPbFJsWVhObGNsWXhUVzlrWld3cE9pQmliMjlzWldGdWUxeHVJQ0FnSUhKbGRIVnliaUFvSVhCeWIzQnpMbWx0WVdkbFVHRjBhQ0FtSmlBaGNISnZjSE11WkdWelkzSnBjSFJwYjI0Z0ppWWdJSEJ5YjNCekxtRmpkR2x2Ym5NdWJHVnVaM1JvSUQwOUlEQXBYRzU5WEc0aVhYMD0iLCIvKlxuICogIENvcHlyaWdodCAyMDIwIEFkb2JlXG4gKlxuICogIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiAgeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICAgICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqICBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiAgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiAgU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgd2l0aENvbmRpdGlvbmFsUGxhY2VIb2xkZXIsIHdpdGhTdGFuZGFyZEJhc2VDc3NDbGFzcyB9IGZyb20gXCIuLi8uLi8uLi9BYnN0cmFjdENvcmVDb21wb25lbnRcIjtcbmltcG9ydCB7IFJvdXRlZExpbmsgfSBmcm9tIFwiLi4vLi4vLi4vcm91dGluZy9Sb3V0ZWRMaW5rXCI7XG5pbXBvcnQgeyBUaXRsZVYySXNFbXB0eUZuIH0gZnJvbSBcIi4vVGl0bGVWMklzRW1wdHlGblwiO1xuY29uc3QgYmVtTW9kaWZpZXJQcmVmaXggPSAocHJvcHMpID0+IHByb3BzLm5lc3RlZCA/ICctJyA6ICdfXyc7XG5leHBvcnQgY29uc3QgVGl0bGVWMkxpbmsgPSAocHJvcHMpID0+IHtcbiAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoUm91dGVkTGluaywgeyBjbGFzc05hbWU6IHByb3BzLmJhc2VDc3NDbGFzcyArIGJlbU1vZGlmaWVyUHJlZml4KHByb3BzKSArICdsaW5rJywgaXNSb3V0ZWQ6IHByb3BzLnJvdXRlZCwgdG86IHByb3BzLmxpbmtVUkwgfSwgcHJvcHMudGV4dCkpO1xufTtcbmV4cG9ydCBjb25zdCBUaXRsZVYyQ29udGVudHMgPSAocHJvcHMpID0+IHtcbiAgICBpZiAoIXByb3BzLmxpbmtEaXNhYmxlZCkge1xuICAgICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChUaXRsZVYyTGluaywgT2JqZWN0LmFzc2lnbih7fSwgcHJvcHMpKTtcbiAgICB9XG4gICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoUmVhY3QuRnJhZ21lbnQsIG51bGwsIHByb3BzLnRleHQpO1xufTtcbmNvbnN0IFRpdGxlVjJJbXBsID0gKHByb3BzKSA9PiB7XG4gICAgY29uc3QgZWxlbWVudFR5cGUgPSAoISFwcm9wcy50eXBlKSA/IHByb3BzLnR5cGUudG9TdHJpbmcoKSA6ICdoMyc7XG4gICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3NOYW1lOiBwcm9wcy5iYXNlQ3NzQ2xhc3MgfSwgUmVhY3QuY3JlYXRlRWxlbWVudChlbGVtZW50VHlwZSwge1xuICAgICAgICBjbGFzc05hbWU6IHByb3BzLmJhc2VDc3NDbGFzcyArIGJlbU1vZGlmaWVyUHJlZml4KHByb3BzKSArICd0ZXh0JyxcbiAgICB9LCBSZWFjdC5jcmVhdGVFbGVtZW50KFRpdGxlVjJDb250ZW50cywgT2JqZWN0LmFzc2lnbih7fSwgcHJvcHMpKSkpKTtcbn07XG5jb25zdCBUaXRsZVYyID0gKHByb3BzKSA9PiB7XG4gICAgY29uc3QgV3JhcHBlZCA9IHdpdGhDb25kaXRpb25hbFBsYWNlSG9sZGVyKHdpdGhTdGFuZGFyZEJhc2VDc3NDbGFzcyhUaXRsZVYySW1wbCwgXCJjbXAtdGl0bGVcIiksIFRpdGxlVjJJc0VtcHR5Rm4sIFwiVGl0bGVWMlwiKTtcbiAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChXcmFwcGVkLCBPYmplY3QuYXNzaWduKHt9LCBwcm9wcykpO1xufTtcbmV4cG9ydCBkZWZhdWx0IFRpdGxlVjI7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lWR2wwYkdWV01pNXFjeUlzSW5OdmRYSmpaVkp2YjNRaU9pSWlMQ0p6YjNWeVkyVnpJanBiSWxScGRHeGxWakl1ZEhONElsMHNJbTVoYldWeklqcGJYU3dpYldGd2NHbHVaM01pT2lKQlFVRkJPenM3T3pzN096czdPenM3T3p0SFFXTkhPMEZCUlVnc1QwRkJUeXhMUVVGclFpeE5RVUZOTEU5QlFVOHNRMEZCUXp0QlFVTjJReXhQUVVGUExFVkJRVU1zTUVKQlFUQkNMRVZCUVVVc2QwSkJRWGRDTEVWQlFVTXNUVUZCVFN4blEwRkJaME1zUTBGQlF6dEJRVVZ3Unl4UFFVRlBMRVZCUVVNc1ZVRkJWU3hGUVVGRExFMUJRVTBzTmtKQlFUWkNMRU5CUVVNN1FVRkRka1FzVDBGQlR5eEZRVUZETEdkQ1FVRm5RaXhGUVVGRExFMUJRVTBzYjBKQlFXOUNMRU5CUVVNN1FVRlZjRVFzVFVGQlRTeHBRa0ZCYVVJc1IwRkJSeXhEUVVGRExFdEJRV3RDTEVWQlFVVXNSVUZCUlN4RFFVRkRMRXRCUVVzc1EwRkJReXhOUVVGTkxFTkJRVU1zUTBGQlF5eERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRMRU5CUVVNc1NVRkJTU3hEUVVGRE8wRkJSVFZGTEUxQlFVMHNRMEZCUXl4TlFVRk5MRmRCUVZjc1IwRkJSeXhEUVVGRExFdEJRV3RDTEVWQlFVVXNSVUZCUlR0SlFVTTVReXhQUVVGUExFTkJRMGdzYjBKQlFVTXNWVUZCVlN4SlFVRkRMRk5CUVZNc1JVRkJSU3hMUVVGTExFTkJRVU1zV1VGQldTeEhRVUZITEdsQ1FVRnBRaXhEUVVGRExFdEJRVXNzUTBGQlF5eEhRVUZKTEUxQlFVMHNSVUZCUlN4UlFVRlJMRVZCUVVVc1MwRkJTeXhEUVVGRExFMUJRVTBzUlVGQlJTeEZRVUZGTEVWQlFVVXNTMEZCU3l4RFFVRkRMRTlCUVU4c1NVRkRjRWdzUzBGQlN5eERRVUZETEVsQlFVa3NRMEZEUml4RFFVTm9RaXhEUVVGRE8wRkJRMDRzUTBGQlF5eERRVUZETzBGQlJVWXNUVUZCVFN4RFFVRkRMRTFCUVUwc1pVRkJaU3hIUVVGSExFTkJRVU1zUzBGQmEwSXNSVUZCUlN4RlFVRkZPMGxCUTJ4RUxFbEJRVWtzUTBGQlF5eExRVUZMTEVOQlFVTXNXVUZCV1N4RlFVRkRPMUZCUTNCQ0xFOUJRVThzYjBKQlFVTXNWMEZCVnl4dlFrRkJTeXhMUVVGTExFVkJRVWNzUTBGQlFUdExRVU51UXp0SlFVVkVMRTlCUVU4c01FTkJRVWNzUzBGQlN5eERRVUZETEVsQlFVa3NRMEZCU1N4RFFVRkJPMEZCUXpWQ0xFTkJRVU1zUTBGQlF6dEJRVVZHTEUxQlFVMHNWMEZCVnl4SFFVRkhMRU5CUVVNc1MwRkJhMElzUlVGQlJTeEZRVUZGTzBsQlEzWkRMRTFCUVUwc1YwRkJWeXhIUVVGVkxFTkJRVU1zUTBGQlF5eERRVUZETEV0QlFVc3NRMEZCUXl4SlFVRkpMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUzBGQlN5eERRVUZETEVsQlFVa3NRMEZCUXl4UlFVRlJMRVZCUVVVc1EwRkJReXhEUVVGRExFTkJRVU1zU1VGQlNTeERRVUZETzBsQlEzcEZMRTlCUVU4c1EwRkRTQ3cyUWtGQlN5eFRRVUZUTEVWQlFVVXNTMEZCU3l4RFFVRkRMRmxCUVZrc1NVRkZNVUlzUzBGQlN5eERRVUZETEdGQlFXRXNRMEZCUXl4WFFVRlhMRVZCUXpOQ08xRkJRMGtzVTBGQlV5eEZRVUZGTEV0QlFVc3NRMEZCUXl4WlFVRlpMRWRCUVVjc2FVSkJRV2xDTEVOQlFVTXNTMEZCU3l4RFFVRkRMRWRCUVVjc1RVRkJUVHRMUVVOd1JTeEZRVU5FTEc5Q1FVRkRMR1ZCUVdVc2IwSkJRVXNzUzBGQlN5eEZRVUZITEVOQlEyaERMRU5CUjBnc1EwRkRWQ3hEUVVGQk8wRkJRMHdzUTBGQlF5eERRVUZETzBGQlJVWXNUVUZCVFN4UFFVRlBMRWRCUVVjc1EwRkJReXhMUVVGclFpeEZRVUZGTEVWQlFVVTdTVUZEYmtNc1RVRkJUU3hQUVVGUExFZEJRVWNzTUVKQlFUQkNMRU5CUVVNc2QwSkJRWGRDTEVOQlFVTXNWMEZCVnl4RlFVRkZMRmRCUVZjc1EwRkJReXhGUVVGRkxHZENRVUZuUWl4RlFVRkZMRk5CUVZNc1EwRkJReXhEUVVGQk8wbEJRek5JTEU5QlFVOHNiMEpCUVVNc1QwRkJUeXh2UWtGQlN5eExRVUZMTEVWQlFVY3NRMEZCUVR0QlFVTm9ReXhEUVVGRExFTkJRVU03UVVGRlJpeGxRVUZsTEU5QlFVOHNRMEZCUXlJc0luTnZkWEpqWlhORGIyNTBaVzUwSWpwYklpOHFYRzRnS2lBZ1EyOXdlWEpwWjJoMElESXdNakFnUVdSdlltVmNiaUFxWEc0Z0tpQWdUR2xqWlc1elpXUWdkVzVrWlhJZ2RHaGxJRUZ3WVdOb1pTQk1hV05sYm5ObExDQldaWEp6YVc5dUlESXVNQ0FvZEdobElGd2lUR2xqWlc1elpWd2lLVHRjYmlBcUlDQjViM1VnYldGNUlHNXZkQ0IxYzJVZ2RHaHBjeUJtYVd4bElHVjRZMlZ3ZENCcGJpQmpiMjF3YkdsaGJtTmxJSGRwZEdnZ2RHaGxJRXhwWTJWdWMyVXVYRzRnS2lBZ1dXOTFJRzFoZVNCdlluUmhhVzRnWVNCamIzQjVJRzltSUhSb1pTQk1hV05sYm5ObElHRjBYRzRnS2x4dUlDb2dJQ0FnSUNCb2RIUndPaTh2ZDNkM0xtRndZV05vWlM1dmNtY3ZiR2xqWlc1elpYTXZURWxEUlU1VFJTMHlMakJjYmlBcVhHNGdLaUFnVlc1c1pYTnpJSEpsY1hWcGNtVmtJR0o1SUdGd2NHeHBZMkZpYkdVZ2JHRjNJRzl5SUdGbmNtVmxaQ0IwYnlCcGJpQjNjbWwwYVc1bkxDQnpiMlowZDJGeVpWeHVJQ29nSUdScGMzUnlhV0oxZEdWa0lIVnVaR1Z5SUhSb1pTQk1hV05sYm5ObElHbHpJR1JwYzNSeWFXSjFkR1ZrSUc5dUlHRnVJRndpUVZNZ1NWTmNJaUJDUVZOSlV5eGNiaUFxSUNCWFNWUklUMVZVSUZkQlVsSkJUbFJKUlZNZ1QxSWdRMDlPUkVsVVNVOU9VeUJQUmlCQlRsa2dTMGxPUkN3Z1pXbDBhR1Z5SUdWNGNISmxjM01nYjNJZ2FXMXdiR2xsWkM1Y2JpQXFJQ0JUWldVZ2RHaGxJRXhwWTJWdWMyVWdabTl5SUhSb1pTQnpjR1ZqYVdacFl5QnNZVzVuZFdGblpTQm5iM1psY201cGJtY2djR1Z5YldsemMybHZibk1nWVc1a1hHNGdLaUFnYkdsdGFYUmhkR2x2Ym5NZ2RXNWtaWElnZEdobElFeHBZMlZ1YzJVdVhHNGdLaTljYmx4dWFXMXdiM0owSUZKbFlXTjBMQ0I3UTI5dGNHOXVaVzUwZlNCbWNtOXRJQ2R5WldGamRDYzdYRzVwYlhCdmNuUWdlM2RwZEdoRGIyNWthWFJwYjI1aGJGQnNZV05sU0c5c1pHVnlMQ0IzYVhSb1UzUmhibVJoY21SQ1lYTmxRM056UTJ4aGMzTjlJR1p5YjIwZ1hDSXVMaTh1TGk4dUxpOUJZbk4wY21GamRFTnZjbVZEYjIxd2IyNWxiblJjSWp0Y2JtbHRjRzl5ZENCN1VtOTFkR1ZrUTI5eVpVTnZiWEJ2Ym1WdWRFMXZaR1ZzZlNCbWNtOXRJRndpTGk0dkxpNHZMaTR2Y205MWRHbHVaeTlTYjNWMFpXUkRiM0psUTI5dGNHOXVaVzUwWENJN1hHNXBiWEJ2Y25RZ2UxSnZkWFJsWkV4cGJtdDlJR1p5YjIwZ1hDSXVMaTh1TGk4dUxpOXliM1YwYVc1bkwxSnZkWFJsWkV4cGJtdGNJanRjYm1sdGNHOXlkQ0I3VkdsMGJHVldNa2x6Ulcxd2RIbEdibjBnWm5KdmJTQmNJaTR2VkdsMGJHVldNa2x6Ulcxd2RIbEdibHdpTzF4dVhHNWxlSEJ2Y25RZ2FXNTBaWEptWVdObElGUnBkR3hsVmpKTmIyUmxiQ0JsZUhSbGJtUnpJRkp2ZFhSbFpFTnZjbVZEYjIxd2IyNWxiblJOYjJSbGJIdGNiaUFnSUNCMFpYaDBPaUJ6ZEhKcGJtYzdYRzRnSUNBZ2JHbHVhMVZTVEQ4NklITjBjbWx1Wnp0Y2JpQWdJQ0JzYVc1clJHbHpZV0pzWldRNklHSnZiMnhsWVc0N1hHNGdJQ0FnZEhsd1pUODZJSE4wY21sdVp6dGNiaUFnSUNCdVpYTjBaV1EvT2lCaWIyOXNaV0Z1WEc1OVhHNWNibU52Ym5OMElHSmxiVTF2WkdsbWFXVnlVSEpsWm1sNElEMGdLSEJ5YjNCek9sUnBkR3hsVmpKTmIyUmxiQ2tnUFQ0Z2NISnZjSE11Ym1WemRHVmtJRDhnSnkwbklEb2dKMTlmSnp0Y2JseHVaWGh3YjNKMElHTnZibk4wSUZScGRHeGxWakpNYVc1cklEMGdLSEJ5YjNCek9sUnBkR3hsVmpKTmIyUmxiQ2tnUFQ0Z2UxeHVJQ0FnSUhKbGRIVnliaUFvWEc0Z0lDQWdJQ0FnSUR4U2IzVjBaV1JNYVc1cklHTnNZWE56VG1GdFpUMTdjSEp2Y0hNdVltRnpaVU56YzBOc1lYTnpJQ3NnWW1WdFRXOWthV1pwWlhKUWNtVm1hWGdvY0hKdmNITXBJQ3NnSUNkc2FXNXJKMzBnYVhOU2IzVjBaV1E5ZTNCeWIzQnpMbkp2ZFhSbFpIMGdkRzg5ZTNCeWIzQnpMbXhwYm10VlVreDlQbHh1SUNBZ0lDQWdJQ0FnSUNBZ2UzQnliM0J6TG5SbGVIUjlYRzRnSUNBZ0lDQWdJRHd2VW05MWRHVmtUR2x1YXo1Y2JpQWdJQ0FwTzF4dWZUdGNibHh1Wlhod2IzSjBJR052Ym5OMElGUnBkR3hsVmpKRGIyNTBaVzUwY3lBOUlDaHdjbTl3Y3pwVWFYUnNaVll5VFc5a1pXd3BJRDArSUh0Y2JpQWdJQ0JwWmlnZ0lYQnliM0J6TG14cGJtdEVhWE5oWW14bFpDbDdYRzRnSUNBZ0lDQWdJSEpsZEhWeWJpQThWR2wwYkdWV01reHBibXNnZXk0dUxuQnliM0J6ZlM4K1hHNGdJQ0FnZlZ4dVhHNGdJQ0FnY21WMGRYSnVJRHcrZTNCeWIzQnpMblJsZUhSOVBDOCtYRzU5TzF4dVhHNWpiMjV6ZENCVWFYUnNaVll5U1cxd2JDQTlJQ2h3Y205d2N6cFVhWFJzWlZZeVRXOWtaV3dwSUQwK0lIdGNiaUFnSUNCamIyNXpkQ0JsYkdWdFpXNTBWSGx3WlRwemRISnBibWNnUFNBb0lTRndjbTl3Y3k1MGVYQmxLU0EvSUhCeWIzQnpMblI1Y0dVdWRHOVRkSEpwYm1jb0tTQTZJQ2RvTXljN1hHNGdJQ0FnY21WMGRYSnVJQ2hjYmlBZ0lDQWdJQ0FnUEdScGRpQmpiR0Z6YzA1aGJXVTllM0J5YjNCekxtSmhjMlZEYzNORGJHRnpjMzArWEc0Z0lDQWdJQ0FnSUNBZ0lDQjdYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdVbVZoWTNRdVkzSmxZWFJsUld4bGJXVnVkQ2hsYkdWdFpXNTBWSGx3WlN4Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdlMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdZMnhoYzNOT1lXMWxPaUJ3Y205d2N5NWlZWE5sUTNOelEyeGhjM01nS3lCaVpXMU5iMlJwWm1sbGNsQnlaV1pwZUNod2NtOXdjeWtnS3lBbmRHVjRkQ2NzWEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lIMHNYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUR4VWFYUnNaVll5UTI5dWRHVnVkSE1nZXk0dUxuQnliM0J6ZlM4K1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0tWeHVJQ0FnSUNBZ0lDQWdJQ0FnZlZ4dVhHNGdJQ0FnSUNBZ0lEd3ZaR2wyUGx4dUlDQWdJQ2xjYm4wN1hHNWNibU52Ym5OMElGUnBkR3hsVmpJZ1BTQW9jSEp2Y0hNNlZHbDBiR1ZXTWsxdlpHVnNLU0E5UGlCN1hHNGdJQ0FnWTI5dWMzUWdWM0poY0hCbFpDQTlJSGRwZEdoRGIyNWthWFJwYjI1aGJGQnNZV05sU0c5c1pHVnlLSGRwZEdoVGRHRnVaR0Z5WkVKaGMyVkRjM05EYkdGemN5aFVhWFJzWlZZeVNXMXdiQ3dnWENKamJYQXRkR2wwYkdWY0lpa3NJRlJwZEd4bFZqSkpjMFZ0Y0hSNVJtNHNJRndpVkdsMGJHVldNbHdpS1Z4dUlDQWdJSEpsZEhWeWJpQThWM0poY0hCbFpDQjdMaTR1Y0hKdmNITjlMejVjYm4wN1hHNWNibVY0Y0c5eWRDQmtaV1poZFd4MElGUnBkR3hsVmpJN0lsMTkiLCJleHBvcnQgZnVuY3Rpb24gVGl0bGVWMklzRW1wdHlGbihwcm9wcykge1xuICAgIHJldHVybiBwcm9wcy50ZXh0ID09IG51bGwgfHwgcHJvcHMudGV4dC50cmltKCkubGVuZ3RoID09PSAwO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pVkdsMGJHVldNa2x6Ulcxd2RIbEdiaTVxY3lJc0luTnZkWEpqWlZKdmIzUWlPaUlpTENKemIzVnlZMlZ6SWpwYklsUnBkR3hsVmpKSmMwVnRjSFI1Um00dWRITWlYU3dpYm1GdFpYTWlPbHRkTENKdFlYQndhVzVuY3lJNklrRkJSVUVzVFVGQlRTeFZRVUZWTEdkQ1FVRm5RaXhEUVVGRExFdEJRV3RDTzBsQlF5OURMRTlCUVU4c1MwRkJTeXhEUVVGRExFbEJRVWtzU1VGQlNTeEpRVUZKTEVsQlFVa3NTMEZCU3l4RFFVRkRMRWxCUVVrc1EwRkJReXhKUVVGSkxFVkJRVVVzUTBGQlF5eE5RVUZOTEV0QlFVc3NRMEZCUXl4RFFVRkRPMEZCUTJoRkxFTkJRVU1pTENKemIzVnlZMlZ6UTI5dWRHVnVkQ0k2V3lKcGJYQnZjblFnZTFScGRHeGxWakpOYjJSbGJIMGdabkp2YlNCY0lpNHZWR2wwYkdWV01sd2lPMXh1WEc1bGVIQnZjblFnWm5WdVkzUnBiMjRnVkdsMGJHVldNa2x6Ulcxd2RIbEdiaWh3Y205d2N6cFVhWFJzWlZZeVRXOWtaV3dwT2lCaWIyOXNaV0Z1ZTF4dUlDQWdJSEpsZEhWeWJpQndjbTl3Y3k1MFpYaDBJRDA5SUc1MWJHd2dmSHdnY0hKdmNITXVkR1Y0ZEM1MGNtbHRLQ2t1YkdWdVozUm9JRDA5UFNBd08xeHVmU0pkZlE9PSIsIi8qXG4gKiAgQ29weXJpZ2h0IDIwMjAgQWRvYmVcbiAqXG4gKiAgTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqICB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiAgWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICAgICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiAgVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqICBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqICBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiAgbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5jb25zdCBERUZBVUxUX0VNUFRZX1RFWFRfTEFCRUwgPSAnUGxlYXNlIGNvbmZpZ3VyZSB0aGUgY29tcG9uZW50JztcbmV4cG9ydCBjb25zdCBFZGl0b3JQbGFjZUhvbGRlciA9IChwcm9wcykgPT4ge1xuICAgIGNvbnN0IHBhcnQxID0gKHByb3BzLmNvbXBvbmVudFRpdGxlICE9IG51bGwgJiYgcHJvcHMuY29tcG9uZW50VGl0bGUubGVuZ3RoID4gMCkgPyBwcm9wcy5jb21wb25lbnRUaXRsZSArICcgLSAnIDogJyc7XG4gICAgY29uc3QgcGFydDIgPSAocHJvcHMuZW1wdHlUZXh0QXBwZW5kICE9IG51bGwpID8gcHJvcHMuZW1wdHlUZXh0QXBwZW5kIDogREVGQVVMVF9FTVBUWV9URVhUX0xBQkVMO1xuICAgIGNvbnN0IGVtcHR5VGV4dCA9IHBhcnQxICsgcGFydDI7XG4gICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3NOYW1lOiAnY3EtcGxhY2Vob2xkZXInICsgKHByb3BzLmNsYXNzQXBwZW5kICE9IG51bGwgPyAnICcgKyBwcm9wcy5jbGFzc0FwcGVuZCA6ICcnKSB9LCBlbXB0eVRleHQpKTtcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2ljR3hoWTJWb2IyeGtaWEl1YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pSWl3aWMyOTFjbU5sY3lJNld5SndiR0ZqWldodmJHUmxjaTUwYzNnaVhTd2libUZ0WlhNaU9sdGRMQ0p0WVhCd2FXNW5jeUk2SWtGQlFVRTdPenM3T3pzN096czdPenM3TzBkQlkwYzdRVUZEU0N4UFFVRlBMRXRCUVd0Q0xFMUJRVTBzVDBGQlR5eERRVUZETzBGQlQzWkRMRTFCUVUwc2QwSkJRWGRDTEVkQlFVY3NaME5CUVdkRExFTkJRVU03UVVGRmJFVXNUVUZCVFN4RFFVRkRMRTFCUVUwc2FVSkJRV2xDTEVkQlFVY3NRMEZCUXl4TFFVRnpRaXhGUVVGRkxFVkJRVVU3U1VGRmVFUXNUVUZCVFN4TFFVRkxMRWRCUVZjc1EwRkJReXhMUVVGTExFTkJRVU1zWTBGQll5eEpRVUZKTEVsQlFVa3NTVUZCU1N4TFFVRkxMRU5CUVVNc1kwRkJZeXhEUVVGRExFMUJRVTBzUjBGQlJ5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVVc1MwRkJTeXhEUVVGRExHTkJRV01zUjBGQlNTeExRVUZMTEVOQlFVTXNRMEZCUXl4RFFVRkRMRVZCUVVVc1EwRkJRenRKUVVNNVNDeE5RVUZOTEV0QlFVc3NSMEZCVnl4RFFVRkRMRXRCUVVzc1EwRkJReXhsUVVGbExFbEJRVWtzU1VGQlNTeERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkZMRXRCUVVzc1EwRkJReXhsUVVGbExFTkJRVU1zUTBGQlF5eERRVUZETEhkQ1FVRjNRaXhEUVVGRE8wbEJRekZITEUxQlFVMHNVMEZCVXl4SFFVRkhMRXRCUVVzc1IwRkJSeXhMUVVGTExFTkJRVU03U1VGRmFFTXNUMEZCVHl4RFFVTklMRFpDUVVOSkxGTkJRVk1zUlVGQlJTeG5Ra0ZCWjBJc1IwRkJSeXhEUVVGRExFdEJRVXNzUTBGQlF5eFhRVUZYTEVsQlFVa3NTVUZCU1N4RFFVRkJMRU5CUVVNc1EwRkJReXhIUVVGSExFZEJRVWNzUzBGQlN5eERRVUZETEZkQlFWY3NRMEZCUXl4RFFVRkRMRU5CUVVNc1JVRkJSU3hEUVVGRExFbEJRM1JHTEZOQlFWTXNRMEZEVWl4RFFVTlVMRU5CUVVFN1FVRkRUQ3hEUVVGRExFTkJRVU1pTENKemIzVnlZMlZ6UTI5dWRHVnVkQ0k2V3lJdktseHVJQ29nSUVOdmNIbHlhV2RvZENBeU1ESXdJRUZrYjJKbFhHNGdLbHh1SUNvZ0lFeHBZMlZ1YzJWa0lIVnVaR1Z5SUhSb1pTQkJjR0ZqYUdVZ1RHbGpaVzV6WlN3Z1ZtVnljMmx2YmlBeUxqQWdLSFJvWlNCY0lreHBZMlZ1YzJWY0lpazdYRzRnS2lBZ2VXOTFJRzFoZVNCdWIzUWdkWE5sSUhSb2FYTWdabWxzWlNCbGVHTmxjSFFnYVc0Z1kyOXRjR3hwWVc1alpTQjNhWFJvSUhSb1pTQk1hV05sYm5ObExseHVJQ29nSUZsdmRTQnRZWGtnYjJKMFlXbHVJR0VnWTI5d2VTQnZaaUIwYUdVZ1RHbGpaVzV6WlNCaGRGeHVJQ3BjYmlBcUlDQWdJQ0FnYUhSMGNEb3ZMM2QzZHk1aGNHRmphR1V1YjNKbkwyeHBZMlZ1YzJWekwweEpRMFZPVTBVdE1pNHdYRzRnS2x4dUlDb2dJRlZ1YkdWemN5QnlaWEYxYVhKbFpDQmllU0JoY0hCc2FXTmhZbXhsSUd4aGR5QnZjaUJoWjNKbFpXUWdkRzhnYVc0Z2QzSnBkR2x1Wnl3Z2MyOW1kSGRoY21WY2JpQXFJQ0JrYVhOMGNtbGlkWFJsWkNCMWJtUmxjaUIwYUdVZ1RHbGpaVzV6WlNCcGN5QmthWE4wY21saWRYUmxaQ0J2YmlCaGJpQmNJa0ZUSUVsVFhDSWdRa0ZUU1ZNc1hHNGdLaUFnVjBsVVNFOVZWQ0JYUVZKU1FVNVVTVVZUSUU5U0lFTlBUa1JKVkVsUFRsTWdUMFlnUVU1WklFdEpUa1FzSUdWcGRHaGxjaUJsZUhCeVpYTnpJRzl5SUdsdGNHeHBaV1F1WEc0Z0tpQWdVMlZsSUhSb1pTQk1hV05sYm5ObElHWnZjaUIwYUdVZ2MzQmxZMmxtYVdNZ2JHRnVaM1ZoWjJVZ1oyOTJaWEp1YVc1bklIQmxjbTFwYzNOcGIyNXpJR0Z1WkZ4dUlDb2dJR3hwYldsMFlYUnBiMjV6SUhWdVpHVnlJSFJvWlNCTWFXTmxibk5sTGx4dUlDb3ZYRzVwYlhCdmNuUWdVbVZoWTNRc0lIdERiMjF3YjI1bGJuUjlJR1p5YjIwZ0ozSmxZV04wSnp0Y2JseHVaWGh3YjNKMElHbHVkR1Z5Wm1GalpTQlFiR0ZqWlVodmJHUmxjazF2WkdWc0lIdGNiaUFnSUNCamIyMXdiMjVsYm5SVWFYUnNaVDg2SUhOMGNtbHVaMXh1SUNBZ0lHTnNZWE56UVhCd1pXNWtQem9nYzNSeWFXNW5YRzRnSUNBZ1pXMXdkSGxVWlhoMFFYQndaVzVrUHpvZ2MzUnlhVzVuWEc1OVhHNWpiMjV6ZENCRVJVWkJWVXhVWDBWTlVGUlpYMVJGV0ZSZlRFRkNSVXdnUFNBblVHeGxZWE5sSUdOdmJtWnBaM1Z5WlNCMGFHVWdZMjl0Y0c5dVpXNTBKenRjYmx4dVpYaHdiM0owSUdOdmJuTjBJRVZrYVhSdmNsQnNZV05sU0c5c1pHVnlJRDBnS0hCeWIzQnpPbEJzWVdObFNHOXNaR1Z5VFc5a1pXd3BJRDArSUh0Y2JseHVJQ0FnSUdOdmJuTjBJSEJoY25ReE9pQnpkSEpwYm1jZ1BTQW9jSEp2Y0hNdVkyOXRjRzl1Wlc1MFZHbDBiR1VnSVQwZ2JuVnNiQ0FtSmlCd2NtOXdjeTVqYjIxd2IyNWxiblJVYVhSc1pTNXNaVzVuZEdnZ1BpQXdLU0EvSUNCd2NtOXdjeTVqYjIxd2IyNWxiblJVYVhSc1pTQXJJQ0FuSUMwZ0p5QTZJQ2NuTzF4dUlDQWdJR052Ym5OMElIQmhjblF5T2lCemRISnBibWNnUFNBb2NISnZjSE11Wlcxd2RIbFVaWGgwUVhCd1pXNWtJQ0U5SUc1MWJHd3BJRDhnSUhCeWIzQnpMbVZ0Y0hSNVZHVjRkRUZ3Y0dWdVpDQTZJRVJGUmtGVlRGUmZSVTFRVkZsZlZFVllWRjlNUVVKRlREdGNiaUFnSUNCamIyNXpkQ0JsYlhCMGVWUmxlSFFnUFNCd1lYSjBNU0FySUhCaGNuUXlPMXh1WEc0Z0lDQWdjbVYwZFhKdUlDaGNiaUFnSUNBZ0lDQWdQR1JwZGx4dUlDQWdJQ0FnSUNBZ0lDQWdZMnhoYzNOT1lXMWxQWHNuWTNFdGNHeGhZMlZvYjJ4a1pYSW5JQ3NnS0hCeWIzQnpMbU5zWVhOelFYQndaVzVrSUNFOUlHNTFiR3cvSUNjZ0p5QXJJSEJ5YjNCekxtTnNZWE56UVhCd1pXNWtJRG9nSnljcGZUNWNiaUFnSUNBZ0lDQWdJQ0FnSUh0bGJYQjBlVlJsZUhSOVhHNGdJQ0FnSUNBZ0lEd3ZaR2wyUGx4dUlDQWdJQ2xjYm4wN0lsMTkiLCIvKlxuICogIENvcHlyaWdodCAyMDIwIEFkb2JlXG4gKlxuICogIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiAgeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICAgICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqICBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiAgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiAgU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgTGluayBhcyBSb3V0ZXJMaW5rIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG5leHBvcnQgY29uc3QgUm91dGVkTGluayA9IChwcm9wcykgPT4ge1xuICAgIGNvbnN0IHsgdG8sIGlzUm91dGVkLCAuLi5vdGhlclByb3BzIH0gPSBwcm9wcztcbiAgICBpZiAodG8gPT09IHVuZGVmaW5lZCB8fCB0by50cmltKCkubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFwiYVwiLCBPYmplY3QuYXNzaWduKHsgaHJlZjogJyMnIH0sIG90aGVyUHJvcHMpKTtcbiAgICB9XG4gICAgY29uc3QgaXNFeHRlcm5hbCA9IC9eaHR0cHM/OlxcL1xcLy8udGVzdCh0byk7XG4gICAgcmV0dXJuIGlzRXh0ZXJuYWwgfHwgIWlzUm91dGVkID9cbiAgICAgICAgKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJhXCIsIE9iamVjdC5hc3NpZ24oeyBocmVmOiB0byB9LCBvdGhlclByb3BzKSkpXG4gICAgICAgIDpcbiAgICAgICAgICAgIChSZWFjdC5jcmVhdGVFbGVtZW50KFJvdXRlckxpbmssIE9iamVjdC5hc3NpZ24oe30sIG90aGVyUHJvcHMsIHsgdG86IHRvIH0pKSk7XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pVW05MWRHVmtUR2x1YXk1cWN5SXNJbk52ZFhKalpWSnZiM1FpT2lJaUxDSnpiM1Z5WTJWeklqcGJJbEp2ZFhSbFpFeHBibXN1ZEhONElsMHNJbTVoYldWeklqcGJYU3dpYldGd2NHbHVaM01pT2lKQlFVRkJPenM3T3pzN096czdPenM3T3p0SFFXTkhPMEZCUlVnc1QwRkJUeXhMUVVGTExFMUJRVTBzVDBGQlR5eERRVUZETzBGQlF6RkNMRTlCUVU4c1JVRkJReXhKUVVGSkxFbEJRVWtzVlVGQlZTeEZRVUZETEUxQlFVMHNhMEpCUVd0Q0xFTkJRVU03UVVGUGNFUXNUVUZCVFN4RFFVRkRMRTFCUVUwc1ZVRkJWU3hIUVVGSExFTkJRVU1zUzBGQlpTeEZRVUZGTEVWQlFVVTdTVUZETVVNc1RVRkJUU3hGUVVGRExFVkJRVVVzUlVGQlJTeFJRVUZSTEVWQlFVVXNSMEZCUnl4VlFVRlZMRVZCUVVNc1IwRkJSeXhMUVVGTExFTkJRVU03U1VGRk5VTXNTVUZCUnl4RlFVRkZMRXRCUVVzc1UwRkJVeXhKUVVGSkxFVkJRVVVzUTBGQlF5eEpRVUZKTEVWQlFVVXNRMEZCUXl4TlFVRk5MRXRCUVVzc1EwRkJReXhGUVVGRE8xRkJRekZETEU5QlFVOHNlVU5CUVVjc1NVRkJTU3hGUVVGRkxFZEJRVWNzU1VGRFdDeFZRVUZWTEVWQlEyaENMRU5CUVVNN1MwRkRUanRKUVVORUxFMUJRVTBzVlVGQlZTeEhRVUZITEdOQlFXTXNRMEZCUXl4SlFVRkpMRU5CUVVNc1JVRkJSU3hEUVVGRExFTkJRVU03U1VGRk0wTXNUMEZCVHl4VlFVRlZMRWxCUVVrc1EwRkJReXhSUVVGUkxFTkJRVUVzUTBGQlF6dFJRVU16UWl4RFFVRkRMSGxEUVVOSExFbEJRVWtzUlVGQlJTeEZRVUZGTEVsQlEwb3NWVUZCVlN4RlFVTm9RaXhEUVVGRE8xRkJRMGdzUTBGQlF6dFpRVU5FTEVOQlFVVXNiMEpCUVVNc1ZVRkJWU3h2UWtGQlN5eFZRVUZWTEVsQlEyUXNSVUZCUlN4RlFVRkZMRVZCUVVVc1NVRkRiRUlzUTBGQlF5eERRVUZCTzBGQlExZ3NRMEZCUXl4RFFVRkRJaXdpYzI5MWNtTmxjME52Ym5SbGJuUWlPbHNpTHlwY2JpQXFJQ0JEYjNCNWNtbG5hSFFnTWpBeU1DQkJaRzlpWlZ4dUlDcGNiaUFxSUNCTWFXTmxibk5sWkNCMWJtUmxjaUIwYUdVZ1FYQmhZMmhsSUV4cFkyVnVjMlVzSUZabGNuTnBiMjRnTWk0d0lDaDBhR1VnWENKTWFXTmxibk5sWENJcE8xeHVJQ29nSUhsdmRTQnRZWGtnYm05MElIVnpaU0IwYUdseklHWnBiR1VnWlhoalpYQjBJR2x1SUdOdmJYQnNhV0Z1WTJVZ2QybDBhQ0IwYUdVZ1RHbGpaVzV6WlM1Y2JpQXFJQ0JaYjNVZ2JXRjVJRzlpZEdGcGJpQmhJR052Y0hrZ2IyWWdkR2hsSUV4cFkyVnVjMlVnWVhSY2JpQXFYRzRnS2lBZ0lDQWdJR2gwZEhBNkx5OTNkM2N1WVhCaFkyaGxMbTl5Wnk5c2FXTmxibk5sY3k5TVNVTkZUbE5GTFRJdU1GeHVJQ3BjYmlBcUlDQlZibXhsYzNNZ2NtVnhkV2x5WldRZ1lua2dZWEJ3YkdsallXSnNaU0JzWVhjZ2IzSWdZV2R5WldWa0lIUnZJR2x1SUhkeWFYUnBibWNzSUhOdlpuUjNZWEpsWEc0Z0tpQWdaR2x6ZEhKcFluVjBaV1FnZFc1a1pYSWdkR2hsSUV4cFkyVnVjMlVnYVhNZ1pHbHpkSEpwWW5WMFpXUWdiMjRnWVc0Z1hDSkJVeUJKVTF3aUlFSkJVMGxUTEZ4dUlDb2dJRmRKVkVoUFZWUWdWMEZTVWtGT1ZFbEZVeUJQVWlCRFQwNUVTVlJKVDA1VElFOUdJRUZPV1NCTFNVNUVMQ0JsYVhSb1pYSWdaWGh3Y21WemN5QnZjaUJwYlhCc2FXVmtMbHh1SUNvZ0lGTmxaU0IwYUdVZ1RHbGpaVzV6WlNCbWIzSWdkR2hsSUhOd1pXTnBabWxqSUd4aGJtZDFZV2RsSUdkdmRtVnlibWx1WnlCd1pYSnRhWE56YVc5dWN5QmhibVJjYmlBcUlDQnNhVzFwZEdGMGFXOXVjeUIxYm1SbGNpQjBhR1VnVEdsalpXNXpaUzVjYmlBcUwxeHVYRzVwYlhCdmNuUWdVbVZoWTNRZ1puSnZiU0FuY21WaFkzUW5PMXh1YVcxd2IzSjBJSHRNYVc1cklHRnpJRkp2ZFhSbGNreHBibXQ5SUdaeWIyMGdKM0psWVdOMExYSnZkWFJsY2kxa2IyMG5PMXh1WEc1bGVIQnZjblFnYVc1MFpYSm1ZV05sSUV4cGJtdFFjbTl3Y3lCN1hHNGdJQ0FnZEc4L09pQnpkSEpwYm1jN1hHNGdJQ0FnYVhOU2IzVjBaV1EvT2lCaWIyOXNaV0Z1TzF4dUlDQWdJRnR3Y205d09pQnpkSEpwYm1kZE9pQmhibmxjYm4xY2JtVjRjRzl5ZENCamIyNXpkQ0JTYjNWMFpXUk1hVzVySUQwZ0tIQnliM0J6T2t4cGJtdFFjbTl3Y3lrZ1BUNGdlMXh1SUNBZ0lHTnZibk4wSUh0MGJ5d2dhWE5TYjNWMFpXUXNJQzR1TG05MGFHVnlVSEp2Y0hOOUlEMGdjSEp2Y0hNN1hHNWNiaUFnSUNCcFppaDBieUE5UFQwZ2RXNWtaV1pwYm1Wa0lIeDhJSFJ2TG5SeWFXMG9LUzVzWlc1bmRHZ2dQVDA5SURBcGUxeHVJQ0FnSUNBZ0lDQnlaWFIxY200Z1BHRWdhSEpsWmoxN0p5TW5mVnh1SUNBZ0lDQWdJQ0FnSUNBZ2V5NHVMbTkwYUdWeVVISnZjSE45WEc0Z0lDQWdJQ0FnSUM4K08xeHVJQ0FnSUgxY2JpQWdJQ0JqYjI1emRDQnBjMFY0ZEdWeWJtRnNJRDBnTDE1b2RIUndjejg2WEZ3dlhGd3ZMeTUwWlhOMEtIUnZLVHRjYmx4dUlDQWdJSEpsZEhWeWJpQnBjMFY0ZEdWeWJtRnNJSHg4SUNGcGMxSnZkWFJsWkQ5Y2JpQWdJQ0FnSUNBZ0tEeGhYRzRnSUNBZ0lDQWdJQ0FnSUNCb2NtVm1QWHQwYjMxY2JpQWdJQ0FnSUNBZ0lDQWdJSHN1TGk1dmRHaGxjbEJ5YjNCemZWeHVJQ0FnSUNBZ0lDQXZQaWxjYmlBZ0lDQWdJQ0FnT2x4dUlDQWdJQ0FnSUNBb0lEeFNiM1YwWlhKTWFXNXJJSHN1TGk1dmRHaGxjbEJ5YjNCemZWeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUhSdlBYdDBiMzFjYmlBZ0lDQWdJQ0FnTHo0cFhHNTlPeUpkZlE9PSIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyJdLCJzb3VyY2VSb290IjoiIn0=