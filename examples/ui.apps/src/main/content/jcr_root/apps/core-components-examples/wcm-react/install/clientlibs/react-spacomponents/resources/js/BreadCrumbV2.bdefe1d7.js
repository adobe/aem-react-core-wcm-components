(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["BreadCrumbV2"],{

/***/ "../../react-base-components/dist/layout/breadcrumb/v2/BreadCrumbV2.js":
/*!*******************************************************************************************************************************!*\
  !*** /Users/raaijmak/workspace/aem-react-core-wcm-components/react-base-components/dist/layout/breadcrumb/v2/BreadCrumbV2.js ***!
  \*******************************************************************************************************************************/
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

      return __webpack_require__(__webpack_require__.s = 10);
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
      "./src/layout/breadcrumb/v2/BreadCrumbV2.tsx":
      /*!***************************************************!*\
        !*** ./src/layout/breadcrumb/v2/BreadCrumbV2.tsx ***!
        \***************************************************/

      /*! exports provided: BreadCrumbV2SSpan, BreadCrumbV2Link, BreadCrumbV2ListItem, default */

      /***/
      function (module, __webpack_exports__, __webpack_require__) {
        "use strict";

        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */


        __webpack_require__.d(__webpack_exports__, "BreadCrumbV2SSpan", function () {
          return BreadCrumbV2SSpan;
        });
        /* harmony export (binding) */


        __webpack_require__.d(__webpack_exports__, "BreadCrumbV2Link", function () {
          return BreadCrumbV2Link;
        });
        /* harmony export (binding) */


        __webpack_require__.d(__webpack_exports__, "BreadCrumbV2ListItem", function () {
          return BreadCrumbV2ListItem;
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


        var _BreadCrumbV2IsEmptyFn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
        /*! ./BreadCrumbV2IsEmptyFn */
        "./src/layout/breadcrumb/v2/BreadCrumbV2IsEmptyFn.ts");
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


        const BreadCrumbV2SSpan = crumbItem => {
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
            itemProp: "name"
          }, crumbItem.title);
        };

        const BreadCrumbV2Link = crumbItem => {
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_routing_RoutedLink__WEBPACK_IMPORTED_MODULE_2__["RoutedLink"], {
            to: crumbItem.url,
            isRouted: crumbItem.routed,
            className: `${crumbItem.baseCssClass}__item-link`,
            itemProp: "item"
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(BreadCrumbV2SSpan, Object.assign({}, crumbItem)));
        };

        const BreadCrumbV2ListItem = crumbItem => {
          const className = `${crumbItem.baseCssClass}__item` + (crumbItem.active ? ` ${crumbItem.baseCssClass}__item--active` : '');
          const contentIndex = crumbItem.index ? crumbItem.index.toString(2) : 'noindex';
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
            className: className,
            itemProp: "itemListElement",
            itemScope: true,
            itemType: "http://schema.org/ListItem"
          }, !crumbItem.active && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(BreadCrumbV2Link, Object.assign({}, crumbItem)), crumbItem.active && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(BreadCrumbV2SSpan, Object.assign({}, crumbItem)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
            itemProp: "position",
            content: contentIndex
          }));
        };

        const BreadCrumbV2Impl = props => {
          const {
            ariaLabelI18n = 'BreadCrumbV2'
          } = props;
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("nav", {
            className: props.baseCssClass,
            "aria-label": ariaLabelI18n
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ol", {
            className: props.baseCssClass + '__list',
            itemScope: true,
            itemType: "http://schema.org/BreadcrumbList"
          }, props.items.map((item, index) => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(BreadCrumbV2ListItem, Object.assign({}, item, {
            index: index,
            baseCssClass: props.baseCssClass,
            key: 'crumbitem-' + index
          })))));
        };

        const BreadCrumbV2 = props => {
          const Wrapped = Object(_AbstractCoreComponent__WEBPACK_IMPORTED_MODULE_1__["withConditionalPlaceHolder"])(Object(_AbstractCoreComponent__WEBPACK_IMPORTED_MODULE_1__["withStandardBaseCssClass"])(BreadCrumbV2Impl, "cmp-breadcrumb"), _BreadCrumbV2IsEmptyFn__WEBPACK_IMPORTED_MODULE_3__["BreadCrumbV2IsEmptyFn"], "Breadcrumb V2");
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Wrapped, Object.assign({}, props));
        };
        /* harmony default export */


        __webpack_exports__["default"] = BreadCrumbV2; //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQnJlYWRDcnVtYlYyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiQnJlYWRDcnVtYlYyLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7R0FjRztBQUVILE9BQU8sS0FBa0IsTUFBTSxPQUFPLENBQUM7QUFDdkMsT0FBTyxFQUFrQiwwQkFBMEIsRUFBRSx3QkFBd0IsRUFBQyxNQUFNLGdDQUFnQyxDQUFDO0FBRXJILE9BQU8sRUFBQyxVQUFVLEVBQUMsTUFBTSw2QkFBNkIsQ0FBQztBQUN2RCxPQUFPLEVBQUMscUJBQXFCLEVBQUMsTUFBTSx5QkFBeUIsQ0FBQztBQWM5RCxNQUFNLENBQUMsTUFBTSxpQkFBaUIsR0FBRyxDQUFDLFNBQStCLEVBQUUsRUFBRTtJQUNqRSxPQUFPLENBQ0gsOEJBQU0sUUFBUSxFQUFDLE1BQU0sSUFBRSxTQUFTLENBQUMsS0FBSyxDQUFRLENBQ2pELENBQUE7QUFDTCxDQUFDLENBQUM7QUFFRixNQUFNLENBQUMsTUFBTSxnQkFBZ0IsR0FBRyxDQUFDLFNBQStCLEVBQUUsRUFBRTtJQUNoRSxPQUFPLENBQ0gsb0JBQUMsVUFBVSxJQUNQLEVBQUUsRUFBRSxTQUFTLENBQUMsR0FBRyxFQUNqQixRQUFRLEVBQUUsU0FBUyxDQUFDLE1BQU0sRUFDMUIsU0FBUyxFQUFFLEdBQUcsU0FBUyxDQUFDLFlBQVksYUFBYSxFQUNqRCxRQUFRLEVBQUMsTUFBTTtRQUNmLG9CQUFDLGlCQUFpQixvQkFBSyxTQUFTLEVBQUcsQ0FDMUIsQ0FDaEIsQ0FBQTtBQUNMLENBQUMsQ0FBQztBQUVGLE1BQU0sQ0FBQyxNQUFNLG9CQUFvQixHQUFHLENBQUMsU0FBK0IsRUFBRSxFQUFFO0lBRXBFLE1BQU0sU0FBUyxHQUFHLEdBQUcsU0FBUyxDQUFDLFlBQVksUUFBUSxHQUFHLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsSUFBSSxTQUFTLENBQUMsWUFBWSxnQkFBZ0IsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDM0gsTUFBTSxZQUFZLEdBQVUsQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUM7SUFFeEYsT0FBTyxDQUNILDRCQUFJLFNBQVMsRUFBRSxTQUFTLEVBQ3BCLFFBQVEsRUFBQyxpQkFBaUIsRUFBQyxTQUFTLFFBQUMsUUFBUSxFQUFDLDRCQUE0QjtRQUV0RSxDQUFDLFNBQVMsQ0FBQyxNQUFNLElBQUksb0JBQUMsZ0JBQWdCLG9CQUFLLFNBQVMsRUFBRztRQUd2RCxTQUFTLENBQUMsTUFBTSxJQUFJLG9CQUFDLGlCQUFpQixvQkFBSyxTQUFTLEVBQUc7UUFFM0QsOEJBQU0sUUFBUSxFQUFDLFVBQVUsRUFBQyxPQUFPLEVBQUUsWUFBWSxHQUFHLENBQ2pELENBQ1IsQ0FBQztBQUNOLENBQUMsQ0FBQztBQUVGLE1BQU0sZ0JBQWdCLEdBQUcsQ0FBQyxLQUF1QixFQUFFLEVBQUU7SUFFakQsTUFBTSxFQUFDLGFBQWEsR0FBRyxjQUFjLEVBQUMsR0FBRyxLQUFLLENBQUM7SUFFL0MsT0FBTyxDQUNILDZCQUFLLFNBQVMsRUFBRSxLQUFLLENBQUMsWUFBWSxnQkFDakIsYUFBYTtRQUMxQiw0QkFBSSxTQUFTLEVBQUUsS0FBSyxDQUFDLFlBQVksR0FBRyxRQUFRLEVBQ3hDLFNBQVMsUUFBQyxRQUFRLEVBQUMsa0NBQWtDLElBQ3BELEtBQUssQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFLEtBQUssRUFBRSxFQUFFLENBQUMsb0JBQUMsb0JBQW9CLG9CQUFLLElBQUksSUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLFlBQVksRUFBRSxLQUFLLENBQUMsWUFBWSxFQUFJLEdBQUcsRUFBRSxZQUFZLEdBQUcsS0FBSyxJQUFHLENBQUUsQ0FDakosQ0FDSCxDQUNULENBQUM7QUFFTixDQUFDLENBQUM7QUFHRixNQUFNLFlBQVksR0FBRyxDQUFDLEtBQXVCLEVBQUUsRUFBRTtJQUM3QyxNQUFNLE9BQU8sR0FBRywwQkFBMEIsQ0FBQyx3QkFBd0IsQ0FBQyxnQkFBZ0IsRUFBRSxnQkFBZ0IsQ0FBQyxFQUFFLHFCQUFxQixFQUFFLGVBQWUsQ0FBQyxDQUFDO0lBQ2pKLE9BQU8sb0JBQUMsT0FBTyxvQkFBSyxLQUFLLEVBQUcsQ0FBQTtBQUNoQyxDQUFDLENBQUM7QUFFRixlQUFlLFlBQVksQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiAgQ29weXJpZ2h0IDIwMjAgQWRvYmVcbiAqXG4gKiAgTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqICB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiAgWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICAgICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiAgVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqICBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqICBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiAgbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cblxuaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tICdyZWFjdCc7XG5pbXBvcnQge0hhc0Jhc2VDc3NDbGFzcywgd2l0aENvbmRpdGlvbmFsUGxhY2VIb2xkZXIsIHdpdGhTdGFuZGFyZEJhc2VDc3NDbGFzc30gZnJvbSBcIi4uLy4uLy4uL0Fic3RyYWN0Q29yZUNvbXBvbmVudFwiO1xuaW1wb3J0IHtSb3V0ZWRDb3JlQ29tcG9uZW50TW9kZWwsIFJvdXRlZE1vZGVsfSBmcm9tIFwiLi4vLi4vLi4vcm91dGluZy9Sb3V0ZWRDb3JlQ29tcG9uZW50XCI7XG5pbXBvcnQge1JvdXRlZExpbmt9IGZyb20gXCIuLi8uLi8uLi9yb3V0aW5nL1JvdXRlZExpbmtcIjtcbmltcG9ydCB7QnJlYWRDcnVtYlYySXNFbXB0eUZufSBmcm9tIFwiLi9CcmVhZENydW1iVjJJc0VtcHR5Rm5cIjtcblxuZXhwb3J0IGludGVyZmFjZSBCcmVhZENydW1iVjJJdGVtTW9kZWwgZXh0ZW5kcyBSb3V0ZWRNb2RlbCwgSGFzQmFzZUNzc0NsYXNze1xuICAgIGFjdGl2ZTogYm9vbGVhblxuICAgIHVybDogc3RyaW5nXG4gICAgdGl0bGU6IHN0cmluZ1xuICAgIGluZGV4PzogbnVtYmVyXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQnJlYWRDcnVtYlYyTW9kZWwgZXh0ZW5kcyBSb3V0ZWRDb3JlQ29tcG9uZW50TW9kZWwge1xuICAgIGl0ZW1zOiBCcmVhZENydW1iVjJJdGVtTW9kZWxbXVxuICAgIGFyaWFMYWJlbEkxOG46IHN0cmluZ1xufVxuXG5leHBvcnQgY29uc3QgQnJlYWRDcnVtYlYyU1NwYW4gPSAoY3J1bWJJdGVtOkJyZWFkQ3J1bWJWMkl0ZW1Nb2RlbCkgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxzcGFuIGl0ZW1Qcm9wPVwibmFtZVwiPntjcnVtYkl0ZW0udGl0bGV9PC9zcGFuPlxuICAgIClcbn07XG5cbmV4cG9ydCBjb25zdCBCcmVhZENydW1iVjJMaW5rID0gKGNydW1iSXRlbTpCcmVhZENydW1iVjJJdGVtTW9kZWwpID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8Um91dGVkTGlua1xuICAgICAgICAgICAgdG89e2NydW1iSXRlbS51cmx9XG4gICAgICAgICAgICBpc1JvdXRlZD17Y3J1bWJJdGVtLnJvdXRlZH1cbiAgICAgICAgICAgIGNsYXNzTmFtZT17YCR7Y3J1bWJJdGVtLmJhc2VDc3NDbGFzc31fX2l0ZW0tbGlua2B9XG4gICAgICAgICAgICBpdGVtUHJvcD1cIml0ZW1cIj5cbiAgICAgICAgICAgIDxCcmVhZENydW1iVjJTU3BhbiB7Li4uY3J1bWJJdGVtfS8+XG4gICAgICAgIDwvUm91dGVkTGluaz5cbiAgICApXG59O1xuXG5leHBvcnQgY29uc3QgQnJlYWRDcnVtYlYyTGlzdEl0ZW0gPSAoY3J1bWJJdGVtOkJyZWFkQ3J1bWJWMkl0ZW1Nb2RlbCkgPT4ge1xuXG4gICAgY29uc3QgY2xhc3NOYW1lID0gYCR7Y3J1bWJJdGVtLmJhc2VDc3NDbGFzc31fX2l0ZW1gICsgKGNydW1iSXRlbS5hY3RpdmUgPyBgICR7Y3J1bWJJdGVtLmJhc2VDc3NDbGFzc31fX2l0ZW0tLWFjdGl2ZWAgOiAnJyk7XG4gICAgY29uc3QgY29udGVudEluZGV4OnN0cmluZyA9IChjcnVtYkl0ZW0uaW5kZXgpID8gY3J1bWJJdGVtLmluZGV4LnRvU3RyaW5nKDIpIDogJ25vaW5kZXgnO1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGxpIGNsYXNzTmFtZT17Y2xhc3NOYW1lfVxuICAgICAgICAgICAgaXRlbVByb3A9XCJpdGVtTGlzdEVsZW1lbnRcIiBpdGVtU2NvcGUgaXRlbVR5cGU9XCJodHRwOi8vc2NoZW1hLm9yZy9MaXN0SXRlbVwiPlxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICFjcnVtYkl0ZW0uYWN0aXZlICYmIDxCcmVhZENydW1iVjJMaW5rIHsuLi5jcnVtYkl0ZW19Lz5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBjcnVtYkl0ZW0uYWN0aXZlICYmIDxCcmVhZENydW1iVjJTU3BhbiB7Li4uY3J1bWJJdGVtfS8+XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICA8bWV0YSBpdGVtUHJvcD1cInBvc2l0aW9uXCIgY29udGVudD17Y29udGVudEluZGV4fS8+XG4gICAgICAgIDwvbGk+XG4gICAgKTtcbn07XG5cbmNvbnN0IEJyZWFkQ3J1bWJWMkltcGwgPSAocHJvcHM6QnJlYWRDcnVtYlYyTW9kZWwpID0+IHtcbiAgICBcbiAgICBjb25zdCB7YXJpYUxhYmVsSTE4biA9ICdCcmVhZENydW1iVjInfSA9IHByb3BzO1xuICAgIFxuICAgIHJldHVybiAoXG4gICAgICAgIDxuYXYgY2xhc3NOYW1lPXtwcm9wcy5iYXNlQ3NzQ2xhc3N9XG4gICAgICAgICAgICAgYXJpYS1sYWJlbD17YXJpYUxhYmVsSTE4bn0+XG4gICAgICAgICAgICA8b2wgY2xhc3NOYW1lPXtwcm9wcy5iYXNlQ3NzQ2xhc3MgKyAnX19saXN0J31cbiAgICAgICAgICAgICAgICBpdGVtU2NvcGUgaXRlbVR5cGU9XCJodHRwOi8vc2NoZW1hLm9yZy9CcmVhZGNydW1iTGlzdFwiPlxuICAgICAgICAgICAgICAgIHtwcm9wcy5pdGVtcy5tYXAoKGl0ZW0sIGluZGV4KSA9PiA8QnJlYWRDcnVtYlYyTGlzdEl0ZW0gey4uLml0ZW19IGluZGV4PXtpbmRleH0gYmFzZUNzc0NsYXNzPXtwcm9wcy5iYXNlQ3NzQ2xhc3N9ICAga2V5PXsnY3J1bWJpdGVtLScgKyBpbmRleH0vPiApfVxuICAgICAgICAgICAgPC9vbD5cbiAgICAgICAgPC9uYXY+XG4gICAgKTtcblxufTtcblxuXG5jb25zdCBCcmVhZENydW1iVjIgPSAocHJvcHM6QnJlYWRDcnVtYlYyTW9kZWwpID0+IHtcbiAgICBjb25zdCBXcmFwcGVkID0gd2l0aENvbmRpdGlvbmFsUGxhY2VIb2xkZXIod2l0aFN0YW5kYXJkQmFzZUNzc0NsYXNzKEJyZWFkQ3J1bWJWMkltcGwsIFwiY21wLWJyZWFkY3J1bWJcIiksIEJyZWFkQ3J1bWJWMklzRW1wdHlGbiwgXCJCcmVhZGNydW1iIFYyXCIpO1xuICAgIHJldHVybiA8V3JhcHBlZCB7Li4ucHJvcHN9Lz5cbn07XG5cbmV4cG9ydCBkZWZhdWx0IEJyZWFkQ3J1bWJWMjsiXX0=

        /***/
      },

      /***/
      "./src/layout/breadcrumb/v2/BreadCrumbV2IsEmptyFn.ts":
      /*!***********************************************************!*\
        !*** ./src/layout/breadcrumb/v2/BreadCrumbV2IsEmptyFn.ts ***!
        \***********************************************************/

      /*! exports provided: BreadCrumbV2IsEmptyFn */

      /***/
      function (module, __webpack_exports__, __webpack_require__) {
        "use strict";

        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */


        __webpack_require__.d(__webpack_exports__, "BreadCrumbV2IsEmptyFn", function () {
          return BreadCrumbV2IsEmptyFn;
        });

        function BreadCrumbV2IsEmptyFn(props) {
          return props.items == null || props.items.length === 0;
        } //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQnJlYWRDcnVtYlYySXNFbXB0eUZuLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiQnJlYWRDcnVtYlYySXNFbXB0eUZuLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBLE1BQU0sVUFBVSxxQkFBcUIsQ0FBQyxLQUF1QjtJQUN6RCxPQUFPLEtBQUssQ0FBQyxLQUFLLElBQUksSUFBSSxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsTUFBTSxLQUFLLENBQUMsQ0FBQztBQUMzRCxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtCcmVhZENydW1iVjJNb2RlbH0gZnJvbSBcIi4vQnJlYWRDcnVtYlYyXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBCcmVhZENydW1iVjJJc0VtcHR5Rm4ocHJvcHM6QnJlYWRDcnVtYlYyTW9kZWwpOiBib29sZWFue1xuICAgIHJldHVybiBwcm9wcy5pdGVtcyA9PSBudWxsIHx8IHByb3BzLml0ZW1zLmxlbmd0aCA9PT0gMDtcbn0iXX0=

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
      10:
      /*!*****************************************************!*\
        !*** multi ./src/layout/breadcrumb/v2/BreadCrumbV2 ***!
        \*****************************************************/

      /*! no static exports found */

      /***/
      function (module, exports, __webpack_require__) {
        module.exports = __webpack_require__(
        /*! ./src/layout/breadcrumb/v2/BreadCrumbV2 */
        "./src/layout/breadcrumb/v2/BreadCrumbV2.tsx");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9yYWFpam1hay93b3Jrc3BhY2UvYWVtLXJlYWN0LWNvcmUtd2NtLWNvbXBvbmVudHMvZXhhbXBsZXMvcmVhY3Qtc3BhY29tcG9uZW50cy1leGFtcGxlLXByb2plY3QvQGFkb2JlL2FlbS1jb3JlLWNvbXBvbmVudHMtcmVhY3QtYmFzZS93ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCIvVXNlcnMvcmFhaWptYWsvd29ya3NwYWNlL2FlbS1yZWFjdC1jb3JlLXdjbS1jb21wb25lbnRzL2V4YW1wbGVzL3JlYWN0LXNwYWNvbXBvbmVudHMtZXhhbXBsZS1wcm9qZWN0L0BhZG9iZS9hZW0tY29yZS1jb21wb25lbnRzLXJlYWN0LWJhc2Uvd2VicGFjay9ib290c3RyYXAiLCIvVXNlcnMvcmFhaWptYWsvd29ya3NwYWNlL2FlbS1yZWFjdC1jb3JlLXdjbS1jb21wb25lbnRzL2V4YW1wbGVzL3JlYWN0LXNwYWNvbXBvbmVudHMtZXhhbXBsZS1wcm9qZWN0L0BhZG9iZS9hZW0tY29yZS1jb21wb25lbnRzLXJlYWN0LWJhc2Uvc3JjL0Fic3RyYWN0Q29yZUNvbXBvbmVudC50c3giLCIvVXNlcnMvcmFhaWptYWsvd29ya3NwYWNlL2FlbS1yZWFjdC1jb3JlLXdjbS1jb21wb25lbnRzL2V4YW1wbGVzL3JlYWN0LXNwYWNvbXBvbmVudHMtZXhhbXBsZS1wcm9qZWN0L0BhZG9iZS9hZW0tY29yZS1jb21wb25lbnRzLXJlYWN0LWJhc2Uvc3JjL2NvbW1vbi9wbGFjZWhvbGRlci50c3giLCIvVXNlcnMvcmFhaWptYWsvd29ya3NwYWNlL2FlbS1yZWFjdC1jb3JlLXdjbS1jb21wb25lbnRzL2V4YW1wbGVzL3JlYWN0LXNwYWNvbXBvbmVudHMtZXhhbXBsZS1wcm9qZWN0L0BhZG9iZS9hZW0tY29yZS1jb21wb25lbnRzLXJlYWN0LWJhc2Uvc3JjL2xheW91dC9icmVhZGNydW1iL3YyL0JyZWFkQ3J1bWJWMi50c3giLCIvVXNlcnMvcmFhaWptYWsvd29ya3NwYWNlL2FlbS1yZWFjdC1jb3JlLXdjbS1jb21wb25lbnRzL2V4YW1wbGVzL3JlYWN0LXNwYWNvbXBvbmVudHMtZXhhbXBsZS1wcm9qZWN0L0BhZG9iZS9hZW0tY29yZS1jb21wb25lbnRzLXJlYWN0LWJhc2Uvc3JjL2xheW91dC9icmVhZGNydW1iL3YyL0JyZWFkQ3J1bWJWMklzRW1wdHlGbi50cyIsIi9Vc2Vycy9yYWFpam1hay93b3Jrc3BhY2UvYWVtLXJlYWN0LWNvcmUtd2NtLWNvbXBvbmVudHMvZXhhbXBsZXMvcmVhY3Qtc3BhY29tcG9uZW50cy1leGFtcGxlLXByb2plY3QvQGFkb2JlL2FlbS1jb3JlLWNvbXBvbmVudHMtcmVhY3QtYmFzZS9zcmMvcm91dGluZy9Sb3V0ZWRMaW5rLnRzeCIsIi9Vc2Vycy9yYWFpam1hay93b3Jrc3BhY2UvYWVtLXJlYWN0LWNvcmUtd2NtLWNvbXBvbmVudHMvZXhhbXBsZXMvcmVhY3Qtc3BhY29tcG9uZW50cy1leGFtcGxlLXByb2plY3Qvd2VicGFjazovQGFkb2JlL2FlbS1jb3JlLWNvbXBvbmVudHMtcmVhY3QtYmFzZS9leHRlcm5hbCBcInJlYWN0XCIiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFDQSxZQUNBLDJCQURBLEtBRUEsRUFLQTtBQUNDLENBVEQsRUFTQyx5Q0FURCxFQVNDO0FBQ0Q7Ozs7O0FDVkE7QUFBQTs7QUFDQTtBQUFBOzs7QUFFQTtBQUFBOztBQUNBOztBQUFBOzs7QUFFQTtBQUFBOztBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7O0FBQ0E7OztBQUFBO0FBQ0E7QUFBQSxxQkFEQTs7QUFFQTtBQUFBLGtCQUZBOztBQUdBO0FBQUE7QUFDQTs7QUFKQTs7O0FBTUE7QUFBQTs7QUFDQTs7QUFBQTs7O0FBRUE7QUFBQTs7QUFDQTs7QUFBQTs7O0FBRUE7QUFBQTs7QUFDQTs7QUFBQTtBQUNBO0FBQUE7Ozs7O0FBR0E7QUFBQTs7QUFDQTs7O0FBQUE7OztBQUVBO0FBQUE7O0FBQ0E7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d0MsS0FBeEMsQ0FBTCxDQUFYO0FBQ0EsU0FIQTtBQUllOzs7QUFBQSxzRCxDQUNmOzs7Ozs7Ozs7Ozs7Ozs7OztBQzVDQTtBQUFBOzs7QUFBQTtBQUFBO0FBQUE7O0FBQU87QUFDUDtBQUNBLFMsQ0FDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDSEE7QUFBQTs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7OztBQUFBO0FBQUE7QUFBQTtBQUFBOzs7QUFBQTtBQUFBOzs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7O0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFpQk87QUFDUDtBQUFXLGNBQVg7QUFBVyxvQkFBWDtBQUFXO0FBQVgsY0FBeUMsS0FBekM7O0FBQ0E7QUFDQSxtQkFBZSw2Q0FBSyxhQUFMLENBQUssR0FBTCxFQUFLO0FBQW1DO0FBQW5DLGVBQStDLFVBQS9DLENBQUwsQ0FBZjtBQUNBOztBQUNBO0FBQ0EsMkNBQ1MsNkNBQUssYUFBTCxDQUFLLEdBQUwsRUFBSztBQUFtQztBQUFuQyxhQUE4QyxVQUE5QyxDQUFMLENBRFQsR0FHYSw2Q0FBSyxhQUFMLENBQW9CLHFEQUFwQixFQUE4QixrQkFBa0IsVUFBbEIsRUFBa0I7QUFBZTtBQUFmLFdBQWxCLENBQTlCLENBSGI7QUFJQSxTQVZPLEMsQ0FXUDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM1QkE7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7OztBUFVBO0NBVkEsRSIsImZpbGUiOiJqcy9CcmVhZENydW1iVjIuYmRlZmUxZDcuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJAYWRvYmUvYWVtLWNvcmUtY29tcG9uZW50cy1yZWFjdC1iYXNlXCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcIkBhZG9iZS9hZW0tY29yZS1jb21wb25lbnRzLXJlYWN0LWJhc2VcIl0gPSBmYWN0b3J5KCk7XG59KSh0eXBlb2Ygc2VsZiAhPT0gJ3VuZGVmaW5lZCcgPyBzZWxmIDogdGhpcywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDEwKTtcbiIsIi8qXG4gKiAgQ29weXJpZ2h0IDIwMjAgQWRvYmVcbiAqXG4gKiAgTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqICB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiAgWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICAgICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiAgVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqICBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqICBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiAgbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IEVkaXRvclBsYWNlSG9sZGVyIH0gZnJvbSBcIi4vY29tbW9uL3BsYWNlaG9sZGVyXCI7XG5leHBvcnQgY29uc3Qgd2l0aFN0YW5kYXJkQmFzZUNzc0NsYXNzID0gKENvbXBvbmVudCwgZGVmYXVsdEJhc2VDc3NDbGFzcykgPT4ge1xuICAgIHJldHVybiAocHJvcHMpID0+IHtcbiAgICAgICAgY29uc3QgYmFzZUNzc0NsYXNzID0gcHJvcHMuYmFzZUNzc0NsYXNzO1xuICAgICAgICBjb25zdCB0b0JlVXNlZENzc0NsYXNzID0gYmFzZUNzc0NsYXNzICYmIGJhc2VDc3NDbGFzcy50cmltKCkubGVuZ3RoID4gMCA/IGJhc2VDc3NDbGFzcyA6IGRlZmF1bHRCYXNlQ3NzQ2xhc3M7XG4gICAgICAgIGNvbnN0IG1lcmdlZFByb3BzID0ge1xuICAgICAgICAgICAgLi4ucHJvcHMsXG4gICAgICAgICAgICBiYXNlQ3NzQ2xhc3M6IHRvQmVVc2VkQ3NzQ2xhc3NcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQ29tcG9uZW50LCBPYmplY3QuYXNzaWduKHt9LCBtZXJnZWRQcm9wcykpO1xuICAgIH07XG59O1xuZXhwb3J0IGNvbnN0IHdpdGhDb25kaXRpb25hbFBsYWNlSG9sZGVyID0gKENvbXBvbmVudCwgaXNFbXB0eSwgY29tcG9uZW50VGl0bGUsIGVtcHR5VGV4dCkgPT4ge1xuICAgIHJldHVybiAocHJvcHMpID0+IHtcbiAgICAgICAgY29uc3QgaXNFbXB0eVJlc3VsdCA9IGlzRW1wdHkocHJvcHMpO1xuICAgICAgICBjb25zdCB7IGhpZGVQbGFjZUhvbGRlciA9IGZhbHNlLCBpc0luRWRpdG9yID0gZmFsc2UgfSA9IHByb3BzO1xuICAgICAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoUmVhY3QuRnJhZ21lbnQsIG51bGwsXG4gICAgICAgICAgICAhaXNFbXB0eVJlc3VsdCAmJlxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQ29tcG9uZW50LCBPYmplY3QuYXNzaWduKHt9LCBwcm9wcykpLFxuICAgICAgICAgICAgKGlzRW1wdHlSZXN1bHQgJiYgaXNJbkVkaXRvciAmJiAhaGlkZVBsYWNlSG9sZGVyKSAmJlxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoRWRpdG9yUGxhY2VIb2xkZXIsIHsgZW1wdHlUZXh0QXBwZW5kOiBlbXB0eVRleHQsIGNvbXBvbmVudFRpdGxlOiBjb21wb25lbnRUaXRsZSB9KSkpO1xuICAgIH07XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pUVdKemRISmhZM1JEYjNKbFEyOXRjRzl1Wlc1MExtcHpJaXdpYzI5MWNtTmxVbTl2ZENJNklpSXNJbk52ZFhKalpYTWlPbHNpUVdKemRISmhZM1JEYjNKbFEyOXRjRzl1Wlc1MExuUnplQ0pkTENKdVlXMWxjeUk2VzEwc0ltMWhjSEJwYm1keklqb2lRVUZCUVRzN096czdPenM3T3pzN096czdSMEZqUnp0QlFVVklMRTlCUVU4c1MwRkJTeXhMUVVGTExFMUJRVTBzVDBGQlR5eERRVUZETzBGQlJ5OUNMRTlCUVU4c1JVRkJReXhwUWtGQmFVSXNSVUZCUXl4TlFVRk5MSE5DUVVGelFpeERRVUZETzBGQlpYWkVMRTFCUVUwc1EwRkJReXhOUVVGTkxIZENRVUYzUWl4SFFVRkhMRU5CUlhCRExGTkJRVEJDTEVWQlF6RkNMRzFDUVVFd1FpeEZRVU5LTEVWQlFVVTdTVUZEZUVJc1QwRkJUeXhEUVVGRExFdEJRVThzUlVGQlJTeEZRVUZGTzFGQlJXWXNUVUZCVFN4WlFVRlpMRWRCUVVjc1MwRkJTeXhEUVVGRExGbEJRVmtzUTBGQlF6dFJRVU40UXl4TlFVRk5MR2RDUVVGblFpeEhRVUZITEZsQlFWa3NTVUZCU1N4WlFVRlpMRU5CUVVNc1NVRkJTU3hGUVVGRkxFTkJRVU1zVFVGQlRTeEhRVUZITEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1dVRkJXU3hEUVVGRExFTkJRVU1zUTBGQlF5eHRRa0ZCYlVJc1EwRkJRenRSUVVVM1J5eE5RVUZOTEZkQlFWY3NSMEZCU3p0WlFVTnNRaXhIUVVGSExFdEJRVXM3V1VGRFVpeFpRVUZaTEVWQlFVVXNaMEpCUVdkQ08xTkJRMnBETEVOQlFVTTdVVUZGUml4UFFVRlBMRzlDUVVGRExGTkJRVk1zYjBKQlFVc3NWMEZCVnl4RlFVRkpMRU5CUVVNN1NVRkRNVU1zUTBGQlF5eERRVUZCTzBGQlEwd3NRMEZCUXl4RFFVRkRPMEZCUlVZc1RVRkJUU3hEUVVGRExFMUJRVTBzTUVKQlFUQkNMRWRCUVVjc1EwRkZNVUlzVTBGQk1FSXNSVUZETVVJc1QwRkJORUlzUlVGRE5VSXNZMEZCYzBJc1JVRkJSU3hUUVVGcFFpeEZRVU51UWl4RlFVRkZPMGxCUTNCRExFOUJRVThzUTBGQlF5eExRVUZQTEVWQlFVVXNSVUZCUlR0UlFVVm1MRTFCUVUwc1lVRkJZU3hIUVVGWExFOUJRVThzUTBGQlF5eExRVUZMTEVOQlFVTXNRMEZCUXp0UlFVTTNReXhOUVVGTkxFVkJRVU1zWlVGQlpTeEhRVUZITEV0QlFVc3NSVUZCUlN4VlFVRlZMRWRCUVVjc1MwRkJTeXhGUVVGRExFZEJRVWNzUzBGQlN5eERRVUZETzFGQlJUVkVMRTlCUVU4c1EwRkRTRHRaUVVOTkxFTkJRVU1zWVVGQllUdG5Ra0ZEYUVJc2IwSkJRVU1zVTBGQlV5eHZRa0ZCU3l4TFFVRkxMRVZCUVVrN1dVRkhjRUlzUTBGQlF5eGhRVUZoTEVsQlFVa3NWVUZCVlN4SlFVRkpMRU5CUVVNc1pVRkJaU3hEUVVGRE8yZENRVU5xUkN4dlFrRkJReXhwUWtGQmFVSXNTVUZEWkN4bFFVRmxMRVZCUVVVc1UwRkJVeXhGUVVNeFFpeGpRVUZqTEVWQlFVVXNZMEZCWXl4SFFVTm9ReXhEUVVWUUxFTkJRMDRzUTBGQlF6dEpRVU5PTEVOQlFVTXNRMEZCUVR0QlFVTk1MRU5CUVVNc1EwRkJReUlzSW5OdmRYSmpaWE5EYjI1MFpXNTBJanBiSWk4cVhHNGdLaUFnUTI5d2VYSnBaMmgwSURJd01qQWdRV1J2WW1WY2JpQXFYRzRnS2lBZ1RHbGpaVzV6WldRZ2RXNWtaWElnZEdobElFRndZV05vWlNCTWFXTmxibk5sTENCV1pYSnphVzl1SURJdU1DQW9kR2hsSUZ3aVRHbGpaVzV6WlZ3aUtUdGNiaUFxSUNCNWIzVWdiV0Y1SUc1dmRDQjFjMlVnZEdocGN5Qm1hV3hsSUdWNFkyVndkQ0JwYmlCamIyMXdiR2xoYm1ObElIZHBkR2dnZEdobElFeHBZMlZ1YzJVdVhHNGdLaUFnV1c5MUlHMWhlU0J2WW5SaGFXNGdZU0JqYjNCNUlHOW1JSFJvWlNCTWFXTmxibk5sSUdGMFhHNGdLbHh1SUNvZ0lDQWdJQ0JvZEhSd09pOHZkM2QzTG1Gd1lXTm9aUzV2Y21jdmJHbGpaVzV6WlhNdlRFbERSVTVUUlMweUxqQmNiaUFxWEc0Z0tpQWdWVzVzWlhOeklISmxjWFZwY21Wa0lHSjVJR0Z3Y0d4cFkyRmliR1VnYkdGM0lHOXlJR0ZuY21WbFpDQjBieUJwYmlCM2NtbDBhVzVuTENCemIyWjBkMkZ5WlZ4dUlDb2dJR1JwYzNSeWFXSjFkR1ZrSUhWdVpHVnlJSFJvWlNCTWFXTmxibk5sSUdseklHUnBjM1J5YVdKMWRHVmtJRzl1SUdGdUlGd2lRVk1nU1ZOY0lpQkNRVk5KVXl4Y2JpQXFJQ0JYU1ZSSVQxVlVJRmRCVWxKQlRsUkpSVk1nVDFJZ1EwOU9SRWxVU1U5T1V5QlBSaUJCVGxrZ1MwbE9SQ3dnWldsMGFHVnlJR1Y0Y0hKbGMzTWdiM0lnYVcxd2JHbGxaQzVjYmlBcUlDQlRaV1VnZEdobElFeHBZMlZ1YzJVZ1ptOXlJSFJvWlNCemNHVmphV1pwWXlCc1lXNW5kV0ZuWlNCbmIzWmxjbTVwYm1jZ2NHVnliV2x6YzJsdmJuTWdZVzVrWEc0Z0tpQWdiR2x0YVhSaGRHbHZibk1nZFc1a1pYSWdkR2hsSUV4cFkyVnVjMlV1WEc0Z0tpOWNibHh1YVcxd2IzSjBJQ29nWVhNZ1VtVmhZM1FnWm5KdmJTQW5jbVZoWTNRbk8xeHVhVzF3YjNKMElIdERiMjF3YjI1bGJuUlVlWEJsZlNCbWNtOXRJQ2R5WldGamRDYzdYRzVjYm1sdGNHOXlkQ0I3UldScGRHOXlVR3hoWTJWSWIyeGtaWEo5SUdaeWIyMGdYQ0l1TDJOdmJXMXZiaTl3YkdGalpXaHZiR1JsY2x3aU8xeHVYRzVsZUhCdmNuUWdhVzUwWlhKbVlXTmxJRWhoYzBKaGMyVkRjM05EYkdGemN5QjdYRzRnSUNBZ1ltRnpaVU56YzBOc1lYTnpQem9nYzNSeWFXNW5YRzU5WEc1Y2JtVjRjRzl5ZENCcGJuUmxjbVpoWTJVZ1EyOXlaVU52YlhCdmJtVnVkRTF2WkdWc0lHVjRkR1Z1WkhNZ1NHRnpRbUZ6WlVOemMwTnNZWE56ZTF4dUlDQWdJR2hwWkdWUWJHRmpaVWh2YkdSbGNqODZJR0p2YjJ4bFlXNWNiaUFnSUNCcGMwbHVSV1JwZEc5eVB6cGliMjlzWldGdVhHNTlYRzVjYm1WNGNHOXlkQ0JwYm5SbGNtWmhZMlVnUTI5eVpVTnZiWEJ2Ym1WdWRGTjBZWFJsSUh0Y2JseHVmVnh1WEc1bGVIQnZjblFnWTI5dWMzUWdkMmwwYUZOMFlXNWtZWEprUW1GelpVTnpjME5zWVhOeklEMGdQRTBnWlhoMFpXNWtjeUJEYjNKbFEyOXRjRzl1Wlc1MFRXOWtaV3crWEc0b1hHNGdJQ0FnUTI5dGNHOXVaVzUwT2tOdmJYQnZibVZ1ZEZSNWNHVThUVDRzWEc0Z0lDQWdaR1ZtWVhWc2RFSmhjMlZEYzNORGJHRnpjenB6ZEhKcGJtZGNiaWs2VW1WaFkzUXVRMjl0Y0c5dVpXNTBWSGx3WlR4TlBpQWdQVDRnZTF4dUlDQWdJSEpsZEhWeWJpQW9jSEp2Y0hNNlRTa2dQVDRnZTF4dVhHNGdJQ0FnSUNBZ0lHTnZibk4wSUdKaGMyVkRjM05EYkdGemN5QTlJSEJ5YjNCekxtSmhjMlZEYzNORGJHRnpjenRjYmlBZ0lDQWdJQ0FnWTI5dWMzUWdkRzlDWlZWelpXUkRjM05EYkdGemN5QTlJR0poYzJWRGMzTkRiR0Z6Y3lBbUppQmlZWE5sUTNOelEyeGhjM011ZEhKcGJTZ3BMbXhsYm1kMGFDQStJREFnUHlCaVlYTmxRM056UTJ4aGMzTWdPaUJrWldaaGRXeDBRbUZ6WlVOemMwTnNZWE56TzF4dVhHNGdJQ0FnSUNBZ0lHTnZibk4wSUcxbGNtZGxaRkJ5YjNCek9pQk5QU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQXVMaTV3Y205d2N5eGNiaUFnSUNBZ0lDQWdJQ0FnSUdKaGMyVkRjM05EYkdGemN6b2dkRzlDWlZWelpXUkRjM05EYkdGemMxeHVJQ0FnSUNBZ0lDQjlPMXh1WEc0Z0lDQWdJQ0FnSUhKbGRIVnliaUE4UTI5dGNHOXVaVzUwSUhzdUxpNXRaWEpuWldSUWNtOXdjMzBnTHo0N1hHNGdJQ0FnZlZ4dWZUdGNibHh1Wlhod2IzSjBJR052Ym5OMElIZHBkR2hEYjI1a2FYUnBiMjVoYkZCc1lXTmxTRzlzWkdWeUlEMGdQRTBnWlhoMFpXNWtjeUJEYjNKbFEyOXRjRzl1Wlc1MFRXOWtaV3crWEc0Z0lDQWdJQ0FnSUNBZ0lDQW9YRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdRMjl0Y0c5dVpXNTBPa052YlhCdmJtVnVkRlI1Y0dVOFRUNHNJRnh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJR2x6Ulcxd2RIazZLSEJ5YjNCek9rMHBJRDArSUdKdmIyeGxZVzRzWEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnWTI5dGNHOXVaVzUwVkdsMGJHVS9Pbk4wY21sdVp5d2daVzF3ZEhsVVpYaDBQenB6ZEhKcGJtZGNiaUFnSUNBZ0lDQWdJQ0FnSUNrNlVtVmhZM1F1UTI5dGNHOXVaVzUwVkhsd1pUeE5QaUFnUFQ0Z2UxeHVJQ0FnSUhKbGRIVnliaUFvY0hKdmNITTZUU2tnUFQ0Z2UxeHVYRzRnSUNBZ0lDQWdJR052Ym5OMElHbHpSVzF3ZEhsU1pYTjFiSFE2WW05dmJHVmhiaUE5SUdselJXMXdkSGtvY0hKdmNITXBPMXh1SUNBZ0lDQWdJQ0JqYjI1emRDQjdhR2xrWlZCc1lXTmxTRzlzWkdWeUlEMGdabUZzYzJVc0lHbHpTVzVGWkdsMGIzSWdQU0JtWVd4elpYMGdQU0J3Y205d2N6dGNibHh1SUNBZ0lDQWdJQ0J5WlhSMWNtNGdLRnh1SUNBZ0lDQWdJQ0FnSUNBZ1BENWNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQjdJQ0ZwYzBWdGNIUjVVbVZ6ZFd4MElDWW1YRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdQRU52YlhCdmJtVnVkQ0I3TGk0dWNISnZjSE45SUM4K1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2ZWeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lIdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnS0dselJXMXdkSGxTWlhOMWJIUWdKaVlnYVhOSmJrVmthWFJ2Y2lBbUppQWhhR2xrWlZCc1lXTmxTRzlzWkdWeUtTQW1KbHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBOFJXUnBkRzl5VUd4aFkyVkliMnhrWlhKY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUdWdGNIUjVWR1Y0ZEVGd2NHVnVaRDE3Wlcxd2RIbFVaWGgwZlZ4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnWTI5dGNHOXVaVzUwVkdsMGJHVTllMk52YlhCdmJtVnVkRlJwZEd4bGZWeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0F2UGx4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUgxY2JpQWdJQ0FnSUNBZ0lDQWdJRHd2UGx4dUlDQWdJQ0FnSUNBcE8xeHVJQ0FnSUgxY2JuMDdJbDE5IiwiLypcbiAqICBDb3B5cmlnaHQgMjAyMCBBZG9iZVxuICpcbiAqICBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqICBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgICAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqICBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiAgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqICBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmNvbnN0IERFRkFVTFRfRU1QVFlfVEVYVF9MQUJFTCA9ICdQbGVhc2UgY29uZmlndXJlIHRoZSBjb21wb25lbnQnO1xuZXhwb3J0IGNvbnN0IEVkaXRvclBsYWNlSG9sZGVyID0gKHByb3BzKSA9PiB7XG4gICAgY29uc3QgcGFydDEgPSAocHJvcHMuY29tcG9uZW50VGl0bGUgIT0gbnVsbCAmJiBwcm9wcy5jb21wb25lbnRUaXRsZS5sZW5ndGggPiAwKSA/IHByb3BzLmNvbXBvbmVudFRpdGxlICsgJyAtICcgOiAnJztcbiAgICBjb25zdCBwYXJ0MiA9IChwcm9wcy5lbXB0eVRleHRBcHBlbmQgIT0gbnVsbCkgPyBwcm9wcy5lbXB0eVRleHRBcHBlbmQgOiBERUZBVUxUX0VNUFRZX1RFWFRfTEFCRUw7XG4gICAgY29uc3QgZW1wdHlUZXh0ID0gcGFydDEgKyBwYXJ0MjtcbiAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzc05hbWU6ICdjcS1wbGFjZWhvbGRlcicgKyAocHJvcHMuY2xhc3NBcHBlbmQgIT0gbnVsbCA/ICcgJyArIHByb3BzLmNsYXNzQXBwZW5kIDogJycpIH0sIGVtcHR5VGV4dCkpO1xufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaWNHeGhZMlZvYjJ4a1pYSXVhbk1pTENKemIzVnlZMlZTYjI5MElqb2lJaXdpYzI5MWNtTmxjeUk2V3lKd2JHRmpaV2h2YkdSbGNpNTBjM2dpWFN3aWJtRnRaWE1pT2x0ZExDSnRZWEJ3YVc1bmN5STZJa0ZCUVVFN096czdPenM3T3pzN096czdPMGRCWTBjN1FVRkRTQ3hQUVVGUExFdEJRV3RDTEUxQlFVMHNUMEZCVHl4RFFVRkRPMEZCVDNaRExFMUJRVTBzZDBKQlFYZENMRWRCUVVjc1owTkJRV2RETEVOQlFVTTdRVUZGYkVVc1RVRkJUU3hEUVVGRExFMUJRVTBzYVVKQlFXbENMRWRCUVVjc1EwRkJReXhMUVVGelFpeEZRVUZGTEVWQlFVVTdTVUZGZUVRc1RVRkJUU3hMUVVGTExFZEJRVmNzUTBGQlF5eExRVUZMTEVOQlFVTXNZMEZCWXl4SlFVRkpMRWxCUVVrc1NVRkJTU3hMUVVGTExFTkJRVU1zWTBGQll5eERRVUZETEUxQlFVMHNSMEZCUnl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVVVzUzBGQlN5eERRVUZETEdOQlFXTXNSMEZCU1N4TFFVRkxMRU5CUVVNc1EwRkJReXhEUVVGRExFVkJRVVVzUTBGQlF6dEpRVU01U0N4TlFVRk5MRXRCUVVzc1IwRkJWeXhEUVVGRExFdEJRVXNzUTBGQlF5eGxRVUZsTEVsQlFVa3NTVUZCU1N4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRkxFdEJRVXNzUTBGQlF5eGxRVUZsTEVOQlFVTXNRMEZCUXl4RFFVRkRMSGRDUVVGM1FpeERRVUZETzBsQlF6RkhMRTFCUVUwc1UwRkJVeXhIUVVGSExFdEJRVXNzUjBGQlJ5eExRVUZMTEVOQlFVTTdTVUZGYUVNc1QwRkJUeXhEUVVOSUxEWkNRVU5KTEZOQlFWTXNSVUZCUlN4blFrRkJaMElzUjBGQlJ5eERRVUZETEV0QlFVc3NRMEZCUXl4WFFVRlhMRWxCUVVrc1NVRkJTU3hEUVVGQkxFTkJRVU1zUTBGQlF5eEhRVUZITEVkQlFVY3NTMEZCU3l4RFFVRkRMRmRCUVZjc1EwRkJReXhEUVVGRExFTkJRVU1zUlVGQlJTeERRVUZETEVsQlEzUkdMRk5CUVZNc1EwRkRVaXhEUVVOVUxFTkJRVUU3UVVGRFRDeERRVUZETEVOQlFVTWlMQ0p6YjNWeVkyVnpRMjl1ZEdWdWRDSTZXeUl2S2x4dUlDb2dJRU52Y0hseWFXZG9kQ0F5TURJd0lFRmtiMkpsWEc0Z0tseHVJQ29nSUV4cFkyVnVjMlZrSUhWdVpHVnlJSFJvWlNCQmNHRmphR1VnVEdsalpXNXpaU3dnVm1WeWMybHZiaUF5TGpBZ0tIUm9aU0JjSWt4cFkyVnVjMlZjSWlrN1hHNGdLaUFnZVc5MUlHMWhlU0J1YjNRZ2RYTmxJSFJvYVhNZ1ptbHNaU0JsZUdObGNIUWdhVzRnWTI5dGNHeHBZVzVqWlNCM2FYUm9JSFJvWlNCTWFXTmxibk5sTGx4dUlDb2dJRmx2ZFNCdFlYa2diMkowWVdsdUlHRWdZMjl3ZVNCdlppQjBhR1VnVEdsalpXNXpaU0JoZEZ4dUlDcGNiaUFxSUNBZ0lDQWdhSFIwY0RvdkwzZDNkeTVoY0dGamFHVXViM0puTDJ4cFkyVnVjMlZ6TDB4SlEwVk9VMFV0TWk0d1hHNGdLbHh1SUNvZ0lGVnViR1Z6Y3lCeVpYRjFhWEpsWkNCaWVTQmhjSEJzYVdOaFlteGxJR3hoZHlCdmNpQmhaM0psWldRZ2RHOGdhVzRnZDNKcGRHbHVaeXdnYzI5bWRIZGhjbVZjYmlBcUlDQmthWE4wY21saWRYUmxaQ0IxYm1SbGNpQjBhR1VnVEdsalpXNXpaU0JwY3lCa2FYTjBjbWxpZFhSbFpDQnZiaUJoYmlCY0lrRlRJRWxUWENJZ1FrRlRTVk1zWEc0Z0tpQWdWMGxVU0U5VlZDQlhRVkpTUVU1VVNVVlRJRTlTSUVOUFRrUkpWRWxQVGxNZ1QwWWdRVTVaSUV0SlRrUXNJR1ZwZEdobGNpQmxlSEJ5WlhOeklHOXlJR2x0Y0d4cFpXUXVYRzRnS2lBZ1UyVmxJSFJvWlNCTWFXTmxibk5sSUdadmNpQjBhR1VnYzNCbFkybG1hV01nYkdGdVozVmhaMlVnWjI5MlpYSnVhVzVuSUhCbGNtMXBjM05wYjI1eklHRnVaRnh1SUNvZ0lHeHBiV2wwWVhScGIyNXpJSFZ1WkdWeUlIUm9aU0JNYVdObGJuTmxMbHh1SUNvdlhHNXBiWEJ2Y25RZ1VtVmhZM1FzSUh0RGIyMXdiMjVsYm5SOUlHWnliMjBnSjNKbFlXTjBKenRjYmx4dVpYaHdiM0owSUdsdWRHVnlabUZqWlNCUWJHRmpaVWh2YkdSbGNrMXZaR1ZzSUh0Y2JpQWdJQ0JqYjIxd2IyNWxiblJVYVhSc1pUODZJSE4wY21sdVoxeHVJQ0FnSUdOc1lYTnpRWEJ3Wlc1a1B6b2djM1J5YVc1blhHNGdJQ0FnWlcxd2RIbFVaWGgwUVhCd1pXNWtQem9nYzNSeWFXNW5YRzU5WEc1amIyNXpkQ0JFUlVaQlZVeFVYMFZOVUZSWlgxUkZXRlJmVEVGQ1JVd2dQU0FuVUd4bFlYTmxJR052Ym1acFozVnlaU0IwYUdVZ1kyOXRjRzl1Wlc1MEp6dGNibHh1Wlhod2IzSjBJR052Ym5OMElFVmthWFJ2Y2xCc1lXTmxTRzlzWkdWeUlEMGdLSEJ5YjNCek9sQnNZV05sU0c5c1pHVnlUVzlrWld3cElEMCtJSHRjYmx4dUlDQWdJR052Ym5OMElIQmhjblF4T2lCemRISnBibWNnUFNBb2NISnZjSE11WTI5dGNHOXVaVzUwVkdsMGJHVWdJVDBnYm5Wc2JDQW1KaUJ3Y205d2N5NWpiMjF3YjI1bGJuUlVhWFJzWlM1c1pXNW5kR2dnUGlBd0tTQS9JQ0J3Y205d2N5NWpiMjF3YjI1bGJuUlVhWFJzWlNBcklDQW5JQzBnSnlBNklDY25PMXh1SUNBZ0lHTnZibk4wSUhCaGNuUXlPaUJ6ZEhKcGJtY2dQU0FvY0hKdmNITXVaVzF3ZEhsVVpYaDBRWEJ3Wlc1a0lDRTlJRzUxYkd3cElEOGdJSEJ5YjNCekxtVnRjSFI1VkdWNGRFRndjR1Z1WkNBNklFUkZSa0ZWVEZSZlJVMVFWRmxmVkVWWVZGOU1RVUpGVER0Y2JpQWdJQ0JqYjI1emRDQmxiWEIwZVZSbGVIUWdQU0J3WVhKME1TQXJJSEJoY25ReU8xeHVYRzRnSUNBZ2NtVjBkWEp1SUNoY2JpQWdJQ0FnSUNBZ1BHUnBkbHh1SUNBZ0lDQWdJQ0FnSUNBZ1kyeGhjM05PWVcxbFBYc25ZM0V0Y0d4aFkyVm9iMnhrWlhJbklDc2dLSEJ5YjNCekxtTnNZWE56UVhCd1pXNWtJQ0U5SUc1MWJHdy9JQ2NnSnlBcklIQnliM0J6TG1Oc1lYTnpRWEJ3Wlc1a0lEb2dKeWNwZlQ1Y2JpQWdJQ0FnSUNBZ0lDQWdJSHRsYlhCMGVWUmxlSFI5WEc0Z0lDQWdJQ0FnSUR3dlpHbDJQbHh1SUNBZ0lDbGNibjA3SWwxOSIsIi8qXG4gKiAgQ29weXJpZ2h0IDIwMjAgQWRvYmVcbiAqXG4gKiAgTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqICB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiAgWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICAgICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiAgVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqICBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqICBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiAgbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB3aXRoQ29uZGl0aW9uYWxQbGFjZUhvbGRlciwgd2l0aFN0YW5kYXJkQmFzZUNzc0NsYXNzIH0gZnJvbSBcIi4uLy4uLy4uL0Fic3RyYWN0Q29yZUNvbXBvbmVudFwiO1xuaW1wb3J0IHsgUm91dGVkTGluayB9IGZyb20gXCIuLi8uLi8uLi9yb3V0aW5nL1JvdXRlZExpbmtcIjtcbmltcG9ydCB7IEJyZWFkQ3J1bWJWMklzRW1wdHlGbiB9IGZyb20gXCIuL0JyZWFkQ3J1bWJWMklzRW1wdHlGblwiO1xuZXhwb3J0IGNvbnN0IEJyZWFkQ3J1bWJWMlNTcGFuID0gKGNydW1iSXRlbSkgPT4ge1xuICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChcInNwYW5cIiwgeyBpdGVtUHJvcDogXCJuYW1lXCIgfSwgY3J1bWJJdGVtLnRpdGxlKSk7XG59O1xuZXhwb3J0IGNvbnN0IEJyZWFkQ3J1bWJWMkxpbmsgPSAoY3J1bWJJdGVtKSA9PiB7XG4gICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KFJvdXRlZExpbmssIHsgdG86IGNydW1iSXRlbS51cmwsIGlzUm91dGVkOiBjcnVtYkl0ZW0ucm91dGVkLCBjbGFzc05hbWU6IGAke2NydW1iSXRlbS5iYXNlQ3NzQ2xhc3N9X19pdGVtLWxpbmtgLCBpdGVtUHJvcDogXCJpdGVtXCIgfSxcbiAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChCcmVhZENydW1iVjJTU3BhbiwgT2JqZWN0LmFzc2lnbih7fSwgY3J1bWJJdGVtKSkpKTtcbn07XG5leHBvcnQgY29uc3QgQnJlYWRDcnVtYlYyTGlzdEl0ZW0gPSAoY3J1bWJJdGVtKSA9PiB7XG4gICAgY29uc3QgY2xhc3NOYW1lID0gYCR7Y3J1bWJJdGVtLmJhc2VDc3NDbGFzc31fX2l0ZW1gICsgKGNydW1iSXRlbS5hY3RpdmUgPyBgICR7Y3J1bWJJdGVtLmJhc2VDc3NDbGFzc31fX2l0ZW0tLWFjdGl2ZWAgOiAnJyk7XG4gICAgY29uc3QgY29udGVudEluZGV4ID0gKGNydW1iSXRlbS5pbmRleCkgPyBjcnVtYkl0ZW0uaW5kZXgudG9TdHJpbmcoMikgOiAnbm9pbmRleCc7XG4gICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KFwibGlcIiwgeyBjbGFzc05hbWU6IGNsYXNzTmFtZSwgaXRlbVByb3A6IFwiaXRlbUxpc3RFbGVtZW50XCIsIGl0ZW1TY29wZTogdHJ1ZSwgaXRlbVR5cGU6IFwiaHR0cDovL3NjaGVtYS5vcmcvTGlzdEl0ZW1cIiB9LFxuICAgICAgICAhY3J1bWJJdGVtLmFjdGl2ZSAmJiBSZWFjdC5jcmVhdGVFbGVtZW50KEJyZWFkQ3J1bWJWMkxpbmssIE9iamVjdC5hc3NpZ24oe30sIGNydW1iSXRlbSkpLFxuICAgICAgICBjcnVtYkl0ZW0uYWN0aXZlICYmIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQnJlYWRDcnVtYlYyU1NwYW4sIE9iamVjdC5hc3NpZ24oe30sIGNydW1iSXRlbSkpLFxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwibWV0YVwiLCB7IGl0ZW1Qcm9wOiBcInBvc2l0aW9uXCIsIGNvbnRlbnQ6IGNvbnRlbnRJbmRleCB9KSkpO1xufTtcbmNvbnN0IEJyZWFkQ3J1bWJWMkltcGwgPSAocHJvcHMpID0+IHtcbiAgICBjb25zdCB7IGFyaWFMYWJlbEkxOG4gPSAnQnJlYWRDcnVtYlYyJyB9ID0gcHJvcHM7XG4gICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KFwibmF2XCIsIHsgY2xhc3NOYW1lOiBwcm9wcy5iYXNlQ3NzQ2xhc3MsIFwiYXJpYS1sYWJlbFwiOiBhcmlhTGFiZWxJMThuIH0sXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJvbFwiLCB7IGNsYXNzTmFtZTogcHJvcHMuYmFzZUNzc0NsYXNzICsgJ19fbGlzdCcsIGl0ZW1TY29wZTogdHJ1ZSwgaXRlbVR5cGU6IFwiaHR0cDovL3NjaGVtYS5vcmcvQnJlYWRjcnVtYkxpc3RcIiB9LCBwcm9wcy5pdGVtcy5tYXAoKGl0ZW0sIGluZGV4KSA9PiBSZWFjdC5jcmVhdGVFbGVtZW50KEJyZWFkQ3J1bWJWMkxpc3RJdGVtLCBPYmplY3QuYXNzaWduKHt9LCBpdGVtLCB7IGluZGV4OiBpbmRleCwgYmFzZUNzc0NsYXNzOiBwcm9wcy5iYXNlQ3NzQ2xhc3MsIGtleTogJ2NydW1iaXRlbS0nICsgaW5kZXggfSkpKSkpKTtcbn07XG5jb25zdCBCcmVhZENydW1iVjIgPSAocHJvcHMpID0+IHtcbiAgICBjb25zdCBXcmFwcGVkID0gd2l0aENvbmRpdGlvbmFsUGxhY2VIb2xkZXIod2l0aFN0YW5kYXJkQmFzZUNzc0NsYXNzKEJyZWFkQ3J1bWJWMkltcGwsIFwiY21wLWJyZWFkY3J1bWJcIiksIEJyZWFkQ3J1bWJWMklzRW1wdHlGbiwgXCJCcmVhZGNydW1iIFYyXCIpO1xuICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFdyYXBwZWQsIE9iamVjdC5hc3NpZ24oe30sIHByb3BzKSk7XG59O1xuZXhwb3J0IGRlZmF1bHQgQnJlYWRDcnVtYlYyO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pUW5KbFlXUkRjblZ0WWxZeUxtcHpJaXdpYzI5MWNtTmxVbTl2ZENJNklpSXNJbk52ZFhKalpYTWlPbHNpUW5KbFlXUkRjblZ0WWxZeUxuUnplQ0pkTENKdVlXMWxjeUk2VzEwc0ltMWhjSEJwYm1keklqb2lRVUZCUVRzN096czdPenM3T3pzN096czdSMEZqUnp0QlFVVklMRTlCUVU4c1MwRkJhMElzVFVGQlRTeFBRVUZQTEVOQlFVTTdRVUZEZGtNc1QwRkJUeXhGUVVGclFpd3dRa0ZCTUVJc1JVRkJSU3gzUWtGQmQwSXNSVUZCUXl4TlFVRk5MR2REUVVGblF5eERRVUZETzBGQlJYSklMRTlCUVU4c1JVRkJReXhWUVVGVkxFVkJRVU1zVFVGQlRTdzJRa0ZCTmtJc1EwRkJRenRCUVVOMlJDeFBRVUZQTEVWQlFVTXNjVUpCUVhGQ0xFVkJRVU1zVFVGQlRTeDVRa0ZCZVVJc1EwRkJRenRCUVdNNVJDeE5RVUZOTEVOQlFVTXNUVUZCVFN4cFFrRkJhVUlzUjBGQlJ5eERRVUZETEZOQlFTdENMRVZCUVVVc1JVRkJSVHRKUVVOcVJTeFBRVUZQTEVOQlEwZ3NPRUpCUVUwc1VVRkJVU3hGUVVGRExFMUJRVTBzU1VGQlJTeFRRVUZUTEVOQlFVTXNTMEZCU3l4RFFVRlJMRU5CUTJwRUxFTkJRVUU3UVVGRFRDeERRVUZETEVOQlFVTTdRVUZGUml4TlFVRk5MRU5CUVVNc1RVRkJUU3huUWtGQlowSXNSMEZCUnl4RFFVRkRMRk5CUVN0Q0xFVkJRVVVzUlVGQlJUdEpRVU5vUlN4UFFVRlBMRU5CUTBnc2IwSkJRVU1zVlVGQlZTeEpRVU5RTEVWQlFVVXNSVUZCUlN4VFFVRlRMRU5CUVVNc1IwRkJSeXhGUVVOcVFpeFJRVUZSTEVWQlFVVXNVMEZCVXl4RFFVRkRMRTFCUVUwc1JVRkRNVUlzVTBGQlV5eEZRVUZGTEVkQlFVY3NVMEZCVXl4RFFVRkRMRmxCUVZrc1lVRkJZU3hGUVVOcVJDeFJRVUZSTEVWQlFVTXNUVUZCVFR0UlFVTm1MRzlDUVVGRExHbENRVUZwUWl4dlFrRkJTeXhUUVVGVExFVkJRVWNzUTBGRE1VSXNRMEZEYUVJc1EwRkJRVHRCUVVOTUxFTkJRVU1zUTBGQlF6dEJRVVZHTEUxQlFVMHNRMEZCUXl4TlFVRk5MRzlDUVVGdlFpeEhRVUZITEVOQlFVTXNVMEZCSzBJc1JVRkJSU3hGUVVGRk8wbEJSWEJGTEUxQlFVMHNVMEZCVXl4SFFVRkhMRWRCUVVjc1UwRkJVeXhEUVVGRExGbEJRVmtzVVVGQlVTeEhRVUZITEVOQlFVTXNVMEZCVXl4RFFVRkRMRTFCUVUwc1EwRkJReXhEUVVGRExFTkJRVU1zU1VGQlNTeFRRVUZUTEVOQlFVTXNXVUZCV1N4blFrRkJaMElzUTBGQlF5eERRVUZETEVOQlFVTXNSVUZCUlN4RFFVRkRMRU5CUVVNN1NVRkRNMGdzVFVGQlRTeFpRVUZaTEVkQlFWVXNRMEZCUXl4VFFVRlRMRU5CUVVNc1MwRkJTeXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEZOQlFWTXNRMEZCUXl4TFFVRkxMRU5CUVVNc1VVRkJVU3hEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4VFFVRlRMRU5CUVVNN1NVRkZlRVlzVDBGQlR5eERRVU5JTERSQ1FVRkpMRk5CUVZNc1JVRkJSU3hUUVVGVExFVkJRM0JDTEZGQlFWRXNSVUZCUXl4cFFrRkJhVUlzUlVGQlF5eFRRVUZUTEZGQlFVTXNVVUZCVVN4RlFVRkRMRFJDUVVFMFFqdFJRVVYwUlN4RFFVRkRMRk5CUVZNc1EwRkJReXhOUVVGTkxFbEJRVWtzYjBKQlFVTXNaMEpCUVdkQ0xHOUNRVUZMTEZOQlFWTXNSVUZCUnp0UlFVZDJSQ3hUUVVGVExFTkJRVU1zVFVGQlRTeEpRVUZKTEc5Q1FVRkRMR2xDUVVGcFFpeHZRa0ZCU3l4VFFVRlRMRVZCUVVjN1VVRkZNMFFzT0VKQlFVMHNVVUZCVVN4RlFVRkRMRlZCUVZVc1JVRkJReXhQUVVGUExFVkJRVVVzV1VGQldTeEhRVUZITEVOQlEycEVMRU5CUTFJc1EwRkJRenRCUVVOT0xFTkJRVU1zUTBGQlF6dEJRVVZHTEUxQlFVMHNaMEpCUVdkQ0xFZEJRVWNzUTBGQlF5eExRVUYxUWl4RlFVRkZMRVZCUVVVN1NVRkZha1FzVFVGQlRTeEZRVUZETEdGQlFXRXNSMEZCUnl4alFVRmpMRVZCUVVNc1IwRkJSeXhMUVVGTExFTkJRVU03U1VGRkwwTXNUMEZCVHl4RFFVTklMRFpDUVVGTExGTkJRVk1zUlVGQlJTeExRVUZMTEVOQlFVTXNXVUZCV1N4blFrRkRha0lzWVVGQllUdFJRVU14UWl3MFFrRkJTU3hUUVVGVExFVkJRVVVzUzBGQlN5eERRVUZETEZsQlFWa3NSMEZCUnl4UlFVRlJMRVZCUTNoRExGTkJRVk1zVVVGQlF5eFJRVUZSTEVWQlFVTXNhME5CUVd0RExFbEJRM0JFTEV0QlFVc3NRMEZCUXl4TFFVRkxMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU1zU1VGQlNTeEZRVUZGTEV0QlFVc3NSVUZCUlN4RlFVRkZMRU5CUVVNc2IwSkJRVU1zYjBKQlFXOUNMRzlDUVVGTExFbEJRVWtzU1VGQlJTeExRVUZMTEVWQlFVVXNTMEZCU3l4RlFVRkZMRmxCUVZrc1JVRkJSU3hMUVVGTExFTkJRVU1zV1VGQldTeEZRVUZKTEVkQlFVY3NSVUZCUlN4WlFVRlpMRWRCUVVjc1MwRkJTeXhKUVVGSExFTkJRVVVzUTBGRGFrb3NRMEZEU0N4RFFVTlVMRU5CUVVNN1FVRkZUaXhEUVVGRExFTkJRVU03UVVGSFJpeE5RVUZOTEZsQlFWa3NSMEZCUnl4RFFVRkRMRXRCUVhWQ0xFVkJRVVVzUlVGQlJUdEpRVU0zUXl4TlFVRk5MRTlCUVU4c1IwRkJSeXd3UWtGQk1FSXNRMEZCUXl4M1FrRkJkMElzUTBGQlF5eG5Ra0ZCWjBJc1JVRkJSU3huUWtGQlowSXNRMEZCUXl4RlFVRkZMSEZDUVVGeFFpeEZRVUZGTEdWQlFXVXNRMEZCUXl4RFFVRkRPMGxCUTJwS0xFOUJRVThzYjBKQlFVTXNUMEZCVHl4dlFrRkJTeXhMUVVGTExFVkJRVWNzUTBGQlFUdEJRVU5vUXl4RFFVRkRMRU5CUVVNN1FVRkZSaXhsUVVGbExGbEJRVmtzUTBGQlF5SXNJbk52ZFhKalpYTkRiMjUwWlc1MElqcGJJaThxWEc0Z0tpQWdRMjl3ZVhKcFoyaDBJREl3TWpBZ1FXUnZZbVZjYmlBcVhHNGdLaUFnVEdsalpXNXpaV1FnZFc1a1pYSWdkR2hsSUVGd1lXTm9aU0JNYVdObGJuTmxMQ0JXWlhKemFXOXVJREl1TUNBb2RHaGxJRndpVEdsalpXNXpaVndpS1R0Y2JpQXFJQ0I1YjNVZ2JXRjVJRzV2ZENCMWMyVWdkR2hwY3lCbWFXeGxJR1Y0WTJWd2RDQnBiaUJqYjIxd2JHbGhibU5sSUhkcGRHZ2dkR2hsSUV4cFkyVnVjMlV1WEc0Z0tpQWdXVzkxSUcxaGVTQnZZblJoYVc0Z1lTQmpiM0I1SUc5bUlIUm9aU0JNYVdObGJuTmxJR0YwWEc0Z0tseHVJQ29nSUNBZ0lDQm9kSFJ3T2k4dmQzZDNMbUZ3WVdOb1pTNXZjbWN2YkdsalpXNXpaWE12VEVsRFJVNVRSUzB5TGpCY2JpQXFYRzRnS2lBZ1ZXNXNaWE56SUhKbGNYVnBjbVZrSUdKNUlHRndjR3hwWTJGaWJHVWdiR0YzSUc5eUlHRm5jbVZsWkNCMGJ5QnBiaUIzY21sMGFXNW5MQ0J6YjJaMGQyRnlaVnh1SUNvZ0lHUnBjM1J5YVdKMWRHVmtJSFZ1WkdWeUlIUm9aU0JNYVdObGJuTmxJR2x6SUdScGMzUnlhV0oxZEdWa0lHOXVJR0Z1SUZ3aVFWTWdTVk5jSWlCQ1FWTkpVeXhjYmlBcUlDQlhTVlJJVDFWVUlGZEJVbEpCVGxSSlJWTWdUMUlnUTA5T1JFbFVTVTlPVXlCUFJpQkJUbGtnUzBsT1JDd2daV2wwYUdWeUlHVjRjSEpsYzNNZ2IzSWdhVzF3YkdsbFpDNWNiaUFxSUNCVFpXVWdkR2hsSUV4cFkyVnVjMlVnWm05eUlIUm9aU0J6Y0dWamFXWnBZeUJzWVc1bmRXRm5aU0JuYjNabGNtNXBibWNnY0dWeWJXbHpjMmx2Ym5NZ1lXNWtYRzRnS2lBZ2JHbHRhWFJoZEdsdmJuTWdkVzVrWlhJZ2RHaGxJRXhwWTJWdWMyVXVYRzRnS2k5Y2JseHVhVzF3YjNKMElGSmxZV04wTENCN1EyOXRjRzl1Wlc1MGZTQm1jbTl0SUNkeVpXRmpkQ2M3WEc1cGJYQnZjblFnZTBoaGMwSmhjMlZEYzNORGJHRnpjeXdnZDJsMGFFTnZibVJwZEdsdmJtRnNVR3hoWTJWSWIyeGtaWElzSUhkcGRHaFRkR0Z1WkdGeVpFSmhjMlZEYzNORGJHRnpjMzBnWm5KdmJTQmNJaTR1THk0dUx5NHVMMEZpYzNSeVlXTjBRMjl5WlVOdmJYQnZibVZ1ZEZ3aU8xeHVhVzF3YjNKMElIdFNiM1YwWldSRGIzSmxRMjl0Y0c5dVpXNTBUVzlrWld3c0lGSnZkWFJsWkUxdlpHVnNmU0JtY205dElGd2lMaTR2TGk0dkxpNHZjbTkxZEdsdVp5OVNiM1YwWldSRGIzSmxRMjl0Y0c5dVpXNTBYQ0k3WEc1cGJYQnZjblFnZTFKdmRYUmxaRXhwYm10OUlHWnliMjBnWENJdUxpOHVMaTh1TGk5eWIzVjBhVzVuTDFKdmRYUmxaRXhwYm10Y0lqdGNibWx0Y0c5eWRDQjdRbkpsWVdSRGNuVnRZbFl5U1hORmJYQjBlVVp1ZlNCbWNtOXRJRndpTGk5Q2NtVmhaRU55ZFcxaVZqSkpjMFZ0Y0hSNVJtNWNJanRjYmx4dVpYaHdiM0owSUdsdWRHVnlabUZqWlNCQ2NtVmhaRU55ZFcxaVZqSkpkR1Z0VFc5a1pXd2daWGgwWlc1a2N5QlNiM1YwWldSTmIyUmxiQ3dnU0dGelFtRnpaVU56YzBOc1lYTnplMXh1SUNBZ0lHRmpkR2wyWlRvZ1ltOXZiR1ZoYmx4dUlDQWdJSFZ5YkRvZ2MzUnlhVzVuWEc0Z0lDQWdkR2wwYkdVNklITjBjbWx1WjF4dUlDQWdJR2x1WkdWNFB6b2diblZ0WW1WeVhHNTlYRzVjYm1WNGNHOXlkQ0JwYm5SbGNtWmhZMlVnUW5KbFlXUkRjblZ0WWxZeVRXOWtaV3dnWlhoMFpXNWtjeUJTYjNWMFpXUkRiM0psUTI5dGNHOXVaVzUwVFc5a1pXd2dlMXh1SUNBZ0lHbDBaVzF6T2lCQ2NtVmhaRU55ZFcxaVZqSkpkR1Z0VFc5a1pXeGJYVnh1SUNBZ0lHRnlhV0ZNWVdKbGJFa3hPRzQ2SUhOMGNtbHVaMXh1ZlZ4dVhHNWxlSEJ2Y25RZ1kyOXVjM1FnUW5KbFlXUkRjblZ0WWxZeVUxTndZVzRnUFNBb1kzSjFiV0pKZEdWdE9rSnlaV0ZrUTNKMWJXSldNa2wwWlcxTmIyUmxiQ2tnUFQ0Z2UxeHVJQ0FnSUhKbGRIVnliaUFvWEc0Z0lDQWdJQ0FnSUR4emNHRnVJR2wwWlcxUWNtOXdQVndpYm1GdFpWd2lQbnRqY25WdFlrbDBaVzB1ZEdsMGJHVjlQQzl6Y0dGdVBseHVJQ0FnSUNsY2JuMDdYRzVjYm1WNGNHOXlkQ0JqYjI1emRDQkNjbVZoWkVOeWRXMWlWakpNYVc1cklEMGdLR055ZFcxaVNYUmxiVHBDY21WaFpFTnlkVzFpVmpKSmRHVnRUVzlrWld3cElEMCtJSHRjYmlBZ0lDQnlaWFIxY200Z0tGeHVJQ0FnSUNBZ0lDQThVbTkxZEdWa1RHbHVhMXh1SUNBZ0lDQWdJQ0FnSUNBZ2RHODllMk55ZFcxaVNYUmxiUzUxY214OVhHNGdJQ0FnSUNBZ0lDQWdJQ0JwYzFKdmRYUmxaRDE3WTNKMWJXSkpkR1Z0TG5KdmRYUmxaSDFjYmlBZ0lDQWdJQ0FnSUNBZ0lHTnNZWE56VG1GdFpUMTdZQ1I3WTNKMWJXSkpkR1Z0TG1KaGMyVkRjM05EYkdGemMzMWZYMmwwWlcwdGJHbHVhMkI5WEc0Z0lDQWdJQ0FnSUNBZ0lDQnBkR1Z0VUhKdmNEMWNJbWwwWlcxY0lqNWNiaUFnSUNBZ0lDQWdJQ0FnSUR4Q2NtVmhaRU55ZFcxaVZqSlRVM0JoYmlCN0xpNHVZM0oxYldKSmRHVnRmUzgrWEc0Z0lDQWdJQ0FnSUR3dlVtOTFkR1ZrVEdsdWF6NWNiaUFnSUNBcFhHNTlPMXh1WEc1bGVIQnZjblFnWTI5dWMzUWdRbkpsWVdSRGNuVnRZbFl5VEdsemRFbDBaVzBnUFNBb1kzSjFiV0pKZEdWdE9rSnlaV0ZrUTNKMWJXSldNa2wwWlcxTmIyUmxiQ2tnUFQ0Z2UxeHVYRzRnSUNBZ1kyOXVjM1FnWTJ4aGMzTk9ZVzFsSUQwZ1lDUjdZM0oxYldKSmRHVnRMbUpoYzJWRGMzTkRiR0Z6YzMxZlgybDBaVzFnSUNzZ0tHTnlkVzFpU1hSbGJTNWhZM1JwZG1VZ1B5QmdJQ1I3WTNKMWJXSkpkR1Z0TG1KaGMyVkRjM05EYkdGemMzMWZYMmwwWlcwdExXRmpkR2wyWldBZ09pQW5KeWs3WEc0Z0lDQWdZMjl1YzNRZ1kyOXVkR1Z1ZEVsdVpHVjRPbk4wY21sdVp5QTlJQ2hqY25WdFlrbDBaVzB1YVc1a1pYZ3BJRDhnWTNKMWJXSkpkR1Z0TG1sdVpHVjRMblJ2VTNSeWFXNW5LRElwSURvZ0oyNXZhVzVrWlhnbk8xeHVYRzRnSUNBZ2NtVjBkWEp1SUNoY2JpQWdJQ0FnSUNBZ1BHeHBJR05zWVhOelRtRnRaVDE3WTJ4aGMzTk9ZVzFsZlZ4dUlDQWdJQ0FnSUNBZ0lDQWdhWFJsYlZCeWIzQTlYQ0pwZEdWdFRHbHpkRVZzWlcxbGJuUmNJaUJwZEdWdFUyTnZjR1VnYVhSbGJWUjVjR1U5WENKb2RIUndPaTh2YzJOb1pXMWhMbTl5Wnk5TWFYTjBTWFJsYlZ3aVBseHVJQ0FnSUNBZ0lDQWdJQ0FnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNGamNuVnRZa2wwWlcwdVlXTjBhWFpsSUNZbUlEeENjbVZoWkVOeWRXMWlWakpNYVc1cklIc3VMaTVqY25WdFlrbDBaVzE5THo1Y2JpQWdJQ0FnSUNBZ0lDQWdJSDFjYmlBZ0lDQWdJQ0FnSUNBZ0lIdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQmpjblZ0WWtsMFpXMHVZV04wYVhabElDWW1JRHhDY21WaFpFTnlkVzFpVmpKVFUzQmhiaUI3TGk0dVkzSjFiV0pKZEdWdGZTOCtYRzRnSUNBZ0lDQWdJQ0FnSUNCOVhHNGdJQ0FnSUNBZ0lDQWdJQ0E4YldWMFlTQnBkR1Z0VUhKdmNEMWNJbkJ2YzJsMGFXOXVYQ0lnWTI5dWRHVnVkRDE3WTI5dWRHVnVkRWx1WkdWNGZTOCtYRzRnSUNBZ0lDQWdJRHd2YkdrK1hHNGdJQ0FnS1R0Y2JuMDdYRzVjYm1OdmJuTjBJRUp5WldGa1EzSjFiV0pXTWtsdGNHd2dQU0FvY0hKdmNITTZRbkpsWVdSRGNuVnRZbFl5VFc5a1pXd3BJRDArSUh0Y2JpQWdJQ0JjYmlBZ0lDQmpiMjV6ZENCN1lYSnBZVXhoWW1Wc1NURTRiaUE5SUNkQ2NtVmhaRU55ZFcxaVZqSW5mU0E5SUhCeWIzQnpPMXh1SUNBZ0lGeHVJQ0FnSUhKbGRIVnliaUFvWEc0Z0lDQWdJQ0FnSUR4dVlYWWdZMnhoYzNOT1lXMWxQWHR3Y205d2N5NWlZWE5sUTNOelEyeGhjM045WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdZWEpwWVMxc1lXSmxiRDE3WVhKcFlVeGhZbVZzU1RFNGJuMCtYRzRnSUNBZ0lDQWdJQ0FnSUNBOGIyd2dZMnhoYzNOT1lXMWxQWHR3Y205d2N5NWlZWE5sUTNOelEyeGhjM01nS3lBblgxOXNhWE4wSjMxY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCcGRHVnRVMk52Y0dVZ2FYUmxiVlI1Y0dVOVhDSm9kSFJ3T2k4dmMyTm9aVzFoTG05eVp5OUNjbVZoWkdOeWRXMWlUR2x6ZEZ3aVBseHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lIdHdjbTl3Y3k1cGRHVnRjeTV0WVhBb0tHbDBaVzBzSUdsdVpHVjRLU0E5UGlBOFFuSmxZV1JEY25WdFlsWXlUR2x6ZEVsMFpXMGdleTR1TG1sMFpXMTlJR2x1WkdWNFBYdHBibVJsZUgwZ1ltRnpaVU56YzBOc1lYTnpQWHR3Y205d2N5NWlZWE5sUTNOelEyeGhjM045SUNBZ2EyVjVQWHNuWTNKMWJXSnBkR1Z0TFNjZ0t5QnBibVJsZUgwdlBpQXBmVnh1SUNBZ0lDQWdJQ0FnSUNBZ1BDOXZiRDVjYmlBZ0lDQWdJQ0FnUEM5dVlYWStYRzRnSUNBZ0tUdGNibHh1ZlR0Y2JseHVYRzVqYjI1emRDQkNjbVZoWkVOeWRXMWlWaklnUFNBb2NISnZjSE02UW5KbFlXUkRjblZ0WWxZeVRXOWtaV3dwSUQwK0lIdGNiaUFnSUNCamIyNXpkQ0JYY21Gd2NHVmtJRDBnZDJsMGFFTnZibVJwZEdsdmJtRnNVR3hoWTJWSWIyeGtaWElvZDJsMGFGTjBZVzVrWVhKa1FtRnpaVU56YzBOc1lYTnpLRUp5WldGa1EzSjFiV0pXTWtsdGNHd3NJRndpWTIxd0xXSnlaV0ZrWTNKMWJXSmNJaWtzSUVKeVpXRmtRM0oxYldKV01rbHpSVzF3ZEhsR2Jpd2dYQ0pDY21WaFpHTnlkVzFpSUZZeVhDSXBPMXh1SUNBZ0lISmxkSFZ5YmlBOFYzSmhjSEJsWkNCN0xpNHVjSEp2Y0hOOUx6NWNibjA3WEc1Y2JtVjRjRzl5ZENCa1pXWmhkV3gwSUVKeVpXRmtRM0oxYldKV01qc2lYWDA9IiwiZXhwb3J0IGZ1bmN0aW9uIEJyZWFkQ3J1bWJWMklzRW1wdHlGbihwcm9wcykge1xuICAgIHJldHVybiBwcm9wcy5pdGVtcyA9PSBudWxsIHx8IHByb3BzLml0ZW1zLmxlbmd0aCA9PT0gMDtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaVFuSmxZV1JEY25WdFlsWXlTWE5GYlhCMGVVWnVMbXB6SWl3aWMyOTFjbU5sVW05dmRDSTZJaUlzSW5OdmRYSmpaWE1pT2xzaVFuSmxZV1JEY25WdFlsWXlTWE5GYlhCMGVVWnVMblJ6SWwwc0ltNWhiV1Z6SWpwYlhTd2liV0Z3Y0dsdVozTWlPaUpCUVVWQkxFMUJRVTBzVlVGQlZTeHhRa0ZCY1VJc1EwRkJReXhMUVVGMVFqdEpRVU42UkN4UFFVRlBMRXRCUVVzc1EwRkJReXhMUVVGTExFbEJRVWtzU1VGQlNTeEpRVUZKTEV0QlFVc3NRMEZCUXl4TFFVRkxMRU5CUVVNc1RVRkJUU3hMUVVGTExFTkJRVU1zUTBGQlF6dEJRVU16UkN4RFFVRkRJaXdpYzI5MWNtTmxjME52Ym5SbGJuUWlPbHNpYVcxd2IzSjBJSHRDY21WaFpFTnlkVzFpVmpKTmIyUmxiSDBnWm5KdmJTQmNJaTR2UW5KbFlXUkRjblZ0WWxZeVhDSTdYRzVjYm1WNGNHOXlkQ0JtZFc1amRHbHZiaUJDY21WaFpFTnlkVzFpVmpKSmMwVnRjSFI1Um00b2NISnZjSE02UW5KbFlXUkRjblZ0WWxZeVRXOWtaV3dwT2lCaWIyOXNaV0Z1ZTF4dUlDQWdJSEpsZEhWeWJpQndjbTl3Y3k1cGRHVnRjeUE5UFNCdWRXeHNJSHg4SUhCeWIzQnpMbWwwWlcxekxteGxibWQwYUNBOVBUMGdNRHRjYm4waVhYMD0iLCIvKlxuICogIENvcHlyaWdodCAyMDIwIEFkb2JlXG4gKlxuICogIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiAgeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICAgICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqICBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiAgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiAgU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgTGluayBhcyBSb3V0ZXJMaW5rIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG5leHBvcnQgY29uc3QgUm91dGVkTGluayA9IChwcm9wcykgPT4ge1xuICAgIGNvbnN0IHsgdG8sIGlzUm91dGVkLCAuLi5vdGhlclByb3BzIH0gPSBwcm9wcztcbiAgICBpZiAodG8gPT09IHVuZGVmaW5lZCB8fCB0by50cmltKCkubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFwiYVwiLCBPYmplY3QuYXNzaWduKHsgaHJlZjogJyMnIH0sIG90aGVyUHJvcHMpKTtcbiAgICB9XG4gICAgY29uc3QgaXNFeHRlcm5hbCA9IC9eaHR0cHM/OlxcL1xcLy8udGVzdCh0byk7XG4gICAgcmV0dXJuIGlzRXh0ZXJuYWwgfHwgIWlzUm91dGVkID9cbiAgICAgICAgKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJhXCIsIE9iamVjdC5hc3NpZ24oeyBocmVmOiB0byB9LCBvdGhlclByb3BzKSkpXG4gICAgICAgIDpcbiAgICAgICAgICAgIChSZWFjdC5jcmVhdGVFbGVtZW50KFJvdXRlckxpbmssIE9iamVjdC5hc3NpZ24oe30sIG90aGVyUHJvcHMsIHsgdG86IHRvIH0pKSk7XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pVW05MWRHVmtUR2x1YXk1cWN5SXNJbk52ZFhKalpWSnZiM1FpT2lJaUxDSnpiM1Z5WTJWeklqcGJJbEp2ZFhSbFpFeHBibXN1ZEhONElsMHNJbTVoYldWeklqcGJYU3dpYldGd2NHbHVaM01pT2lKQlFVRkJPenM3T3pzN096czdPenM3T3p0SFFXTkhPMEZCUlVnc1QwRkJUeXhMUVVGTExFMUJRVTBzVDBGQlR5eERRVUZETzBGQlF6RkNMRTlCUVU4c1JVRkJReXhKUVVGSkxFbEJRVWtzVlVGQlZTeEZRVUZETEUxQlFVMHNhMEpCUVd0Q0xFTkJRVU03UVVGUGNFUXNUVUZCVFN4RFFVRkRMRTFCUVUwc1ZVRkJWU3hIUVVGSExFTkJRVU1zUzBGQlpTeEZRVUZGTEVWQlFVVTdTVUZETVVNc1RVRkJUU3hGUVVGRExFVkJRVVVzUlVGQlJTeFJRVUZSTEVWQlFVVXNSMEZCUnl4VlFVRlZMRVZCUVVNc1IwRkJSeXhMUVVGTExFTkJRVU03U1VGRk5VTXNTVUZCUnl4RlFVRkZMRXRCUVVzc1UwRkJVeXhKUVVGSkxFVkJRVVVzUTBGQlF5eEpRVUZKTEVWQlFVVXNRMEZCUXl4TlFVRk5MRXRCUVVzc1EwRkJReXhGUVVGRE8xRkJRekZETEU5QlFVOHNlVU5CUVVjc1NVRkJTU3hGUVVGRkxFZEJRVWNzU1VGRFdDeFZRVUZWTEVWQlEyaENMRU5CUVVNN1MwRkRUanRKUVVORUxFMUJRVTBzVlVGQlZTeEhRVUZITEdOQlFXTXNRMEZCUXl4SlFVRkpMRU5CUVVNc1JVRkJSU3hEUVVGRExFTkJRVU03U1VGRk0wTXNUMEZCVHl4VlFVRlZMRWxCUVVrc1EwRkJReXhSUVVGUkxFTkJRVUVzUTBGQlF6dFJRVU16UWl4RFFVRkRMSGxEUVVOSExFbEJRVWtzUlVGQlJTeEZRVUZGTEVsQlEwb3NWVUZCVlN4RlFVTm9RaXhEUVVGRE8xRkJRMGdzUTBGQlF6dFpRVU5FTEVOQlFVVXNiMEpCUVVNc1ZVRkJWU3h2UWtGQlN5eFZRVUZWTEVsQlEyUXNSVUZCUlN4RlFVRkZMRVZCUVVVc1NVRkRiRUlzUTBGQlF5eERRVUZCTzBGQlExZ3NRMEZCUXl4RFFVRkRJaXdpYzI5MWNtTmxjME52Ym5SbGJuUWlPbHNpTHlwY2JpQXFJQ0JEYjNCNWNtbG5hSFFnTWpBeU1DQkJaRzlpWlZ4dUlDcGNiaUFxSUNCTWFXTmxibk5sWkNCMWJtUmxjaUIwYUdVZ1FYQmhZMmhsSUV4cFkyVnVjMlVzSUZabGNuTnBiMjRnTWk0d0lDaDBhR1VnWENKTWFXTmxibk5sWENJcE8xeHVJQ29nSUhsdmRTQnRZWGtnYm05MElIVnpaU0IwYUdseklHWnBiR1VnWlhoalpYQjBJR2x1SUdOdmJYQnNhV0Z1WTJVZ2QybDBhQ0IwYUdVZ1RHbGpaVzV6WlM1Y2JpQXFJQ0JaYjNVZ2JXRjVJRzlpZEdGcGJpQmhJR052Y0hrZ2IyWWdkR2hsSUV4cFkyVnVjMlVnWVhSY2JpQXFYRzRnS2lBZ0lDQWdJR2gwZEhBNkx5OTNkM2N1WVhCaFkyaGxMbTl5Wnk5c2FXTmxibk5sY3k5TVNVTkZUbE5GTFRJdU1GeHVJQ3BjYmlBcUlDQlZibXhsYzNNZ2NtVnhkV2x5WldRZ1lua2dZWEJ3YkdsallXSnNaU0JzWVhjZ2IzSWdZV2R5WldWa0lIUnZJR2x1SUhkeWFYUnBibWNzSUhOdlpuUjNZWEpsWEc0Z0tpQWdaR2x6ZEhKcFluVjBaV1FnZFc1a1pYSWdkR2hsSUV4cFkyVnVjMlVnYVhNZ1pHbHpkSEpwWW5WMFpXUWdiMjRnWVc0Z1hDSkJVeUJKVTF3aUlFSkJVMGxUTEZ4dUlDb2dJRmRKVkVoUFZWUWdWMEZTVWtGT1ZFbEZVeUJQVWlCRFQwNUVTVlJKVDA1VElFOUdJRUZPV1NCTFNVNUVMQ0JsYVhSb1pYSWdaWGh3Y21WemN5QnZjaUJwYlhCc2FXVmtMbHh1SUNvZ0lGTmxaU0IwYUdVZ1RHbGpaVzV6WlNCbWIzSWdkR2hsSUhOd1pXTnBabWxqSUd4aGJtZDFZV2RsSUdkdmRtVnlibWx1WnlCd1pYSnRhWE56YVc5dWN5QmhibVJjYmlBcUlDQnNhVzFwZEdGMGFXOXVjeUIxYm1SbGNpQjBhR1VnVEdsalpXNXpaUzVjYmlBcUwxeHVYRzVwYlhCdmNuUWdVbVZoWTNRZ1puSnZiU0FuY21WaFkzUW5PMXh1YVcxd2IzSjBJSHRNYVc1cklHRnpJRkp2ZFhSbGNreHBibXQ5SUdaeWIyMGdKM0psWVdOMExYSnZkWFJsY2kxa2IyMG5PMXh1WEc1bGVIQnZjblFnYVc1MFpYSm1ZV05sSUV4cGJtdFFjbTl3Y3lCN1hHNGdJQ0FnZEc4L09pQnpkSEpwYm1jN1hHNGdJQ0FnYVhOU2IzVjBaV1EvT2lCaWIyOXNaV0Z1TzF4dUlDQWdJRnR3Y205d09pQnpkSEpwYm1kZE9pQmhibmxjYm4xY2JtVjRjRzl5ZENCamIyNXpkQ0JTYjNWMFpXUk1hVzVySUQwZ0tIQnliM0J6T2t4cGJtdFFjbTl3Y3lrZ1BUNGdlMXh1SUNBZ0lHTnZibk4wSUh0MGJ5d2dhWE5TYjNWMFpXUXNJQzR1TG05MGFHVnlVSEp2Y0hOOUlEMGdjSEp2Y0hNN1hHNWNiaUFnSUNCcFppaDBieUE5UFQwZ2RXNWtaV1pwYm1Wa0lIeDhJSFJ2TG5SeWFXMG9LUzVzWlc1bmRHZ2dQVDA5SURBcGUxeHVJQ0FnSUNBZ0lDQnlaWFIxY200Z1BHRWdhSEpsWmoxN0p5TW5mVnh1SUNBZ0lDQWdJQ0FnSUNBZ2V5NHVMbTkwYUdWeVVISnZjSE45WEc0Z0lDQWdJQ0FnSUM4K08xeHVJQ0FnSUgxY2JpQWdJQ0JqYjI1emRDQnBjMFY0ZEdWeWJtRnNJRDBnTDE1b2RIUndjejg2WEZ3dlhGd3ZMeTUwWlhOMEtIUnZLVHRjYmx4dUlDQWdJSEpsZEhWeWJpQnBjMFY0ZEdWeWJtRnNJSHg4SUNGcGMxSnZkWFJsWkQ5Y2JpQWdJQ0FnSUNBZ0tEeGhYRzRnSUNBZ0lDQWdJQ0FnSUNCb2NtVm1QWHQwYjMxY2JpQWdJQ0FnSUNBZ0lDQWdJSHN1TGk1dmRHaGxjbEJ5YjNCemZWeHVJQ0FnSUNBZ0lDQXZQaWxjYmlBZ0lDQWdJQ0FnT2x4dUlDQWdJQ0FnSUNBb0lEeFNiM1YwWlhKTWFXNXJJSHN1TGk1dmRHaGxjbEJ5YjNCemZWeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUhSdlBYdDBiMzFjYmlBZ0lDQWdJQ0FnTHo0cFhHNTlPeUpkZlE9PSIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyJdLCJzb3VyY2VSb290IjoiIn0=