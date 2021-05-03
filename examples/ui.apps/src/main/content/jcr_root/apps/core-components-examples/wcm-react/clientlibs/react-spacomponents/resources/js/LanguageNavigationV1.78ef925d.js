(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["LanguageNavigationV1"],{

/***/ "../../react-base-components/dist/layout/language-navigation/v1/LanguageNavigationV1.js":
/*!************************************************************************************************************************************************!*\
  !*** /Users/raaijmak/workspace/aem-react-core-wcm-components/react-base-components/dist/layout/language-navigation/v1/LanguageNavigationV1.js ***!
  \************************************************************************************************************************************************/
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

      return __webpack_require__(__webpack_require__.s = 12);
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
      "./src/layout/language-navigation/v1/LanguageNavigationV1.tsx":
      /*!********************************************************************!*\
        !*** ./src/layout/language-navigation/v1/LanguageNavigationV1.tsx ***!
        \********************************************************************/

      /*! exports provided: LanguageNavigationV1Link, LanguageNavigationV1Group, LanguageNavigationV1Item, default */

      /***/
      function (module, __webpack_exports__, __webpack_require__) {
        "use strict";

        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */


        __webpack_require__.d(__webpack_exports__, "LanguageNavigationV1Link", function () {
          return LanguageNavigationV1Link;
        });
        /* harmony export (binding) */


        __webpack_require__.d(__webpack_exports__, "LanguageNavigationV1Group", function () {
          return LanguageNavigationV1Group;
        });
        /* harmony export (binding) */


        __webpack_require__.d(__webpack_exports__, "LanguageNavigationV1Item", function () {
          return LanguageNavigationV1Item;
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


        var _navigation_v1_NavigationV1__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
        /*! ../../navigation/v1/NavigationV1 */
        "./src/layout/navigation/v1/NavigationV1.tsx");
        /* harmony import */


        var _routing_RoutedLink__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
        /*! ../../../routing/RoutedLink */
        "./src/routing/RoutedLink.tsx");
        /* harmony import */


        var _LanguageNavigationV1IsEmptyFn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
        /*! ./LanguageNavigationV1IsEmptyFn */
        "./src/layout/language-navigation/v1/LanguageNavigationV1IsEmptyFn.ts");
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


        const LanguageNavigationV1Link = props => {
          if (props.level > 0) {
            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_routing_RoutedLink__WEBPACK_IMPORTED_MODULE_3__["RoutedLink"], {
              isRouted: props.routed,
              className: props.baseCssClass + '__item-link',
              to: props.url,
              hrefLang: props.language,
              lang: props.language,
              rel: "alternate",
              title: props.title
            }, props.title);
          } else {
            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
              className: props.baseCssClass + '__item-title',
              lang: props.language
            }, props.title);
          }
        };

        const LanguageNavigationV1Group = item => {
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, !!item.children && item.children.length > 0 && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
            className: item.baseCssClass + '__group'
          }, item.children.map((item, index) => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(LanguageNavigationV1Item, Object.assign({}, item, {
            key: item.baseCssClass + '__item-' + index,
            index: index
          })))));
        };

        const LanguageNavigationV1Item = item => {
          const isActive = Object(_navigation_v1_NavigationV1__WEBPACK_IMPORTED_MODULE_2__["determineIsActive"])(item);
          const cssClass = item.baseCssClass + '__item ' + item.baseCssClass + '__item--level-' + item.level + ' ' + `${item.baseCssClass}__item--countrycode-${item.country} ${item.baseCssClass}__item--langcode-${item.language}` + +(isActive ? ' ' + item.baseCssClass + '__item--active' : '');
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
            className: cssClass
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(LanguageNavigationV1Link, Object.assign({}, item)), !!item.children && item.children.length > 0 && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_navigation_v1_NavigationV1__WEBPACK_IMPORTED_MODULE_2__["NavigationV1Group"], Object.assign({}, item)));
        };

        const LanguageNavigationV1Impl = props => {
          const selfClone = {
            active: false,
            lastModified: 0,
            level: 0,
            path: "",
            title: "",
            url: "",
            language: "",
            country: "",
            locale: "",
            children: props.items
          };
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("nav", {
            className: props.baseCssClass,
            role: "navigation",
            itemScope: true,
            itemType: "http://schema.org/SiteNavigationElement",
            "aria-label": props.accessibilityLabel
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(LanguageNavigationV1Group, Object.assign({}, selfClone)));
        };

        const LanguageNavigation = props => {
          const Wrapped = Object(_AbstractCoreComponent__WEBPACK_IMPORTED_MODULE_1__["withConditionalPlaceHolder"])(Object(_AbstractCoreComponent__WEBPACK_IMPORTED_MODULE_1__["withStandardBaseCssClass"])(LanguageNavigationV1Impl, "cmp-languagenavigation"), _LanguageNavigationV1IsEmptyFn__WEBPACK_IMPORTED_MODULE_4__["LanguageNavigationV1IsEmptyFn"], "LanguageNavigation V1");
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Wrapped, Object.assign({}, props));
        };
        /* harmony default export */


        __webpack_exports__["default"] = LanguageNavigation; //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTGFuZ3VhZ2VOYXZpZ2F0aW9uVjEuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJMYW5ndWFnZU5hdmlnYXRpb25WMS50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7O0dBY0c7QUFFSCxPQUFPLEtBQUssTUFBTSxPQUFPLENBQUM7QUFDMUIsT0FBTyxFQUFDLDBCQUEwQixFQUFFLHdCQUF3QixFQUFDLE1BQU0sZ0NBQWdDLENBQUM7QUFDcEcsT0FBTyxFQUFDLGlCQUFpQixFQUFFLGlCQUFpQixFQUFzQyxNQUFNLGtDQUFrQyxDQUFDO0FBQzNILE9BQU8sRUFBQyxVQUFVLEVBQUMsTUFBTSw2QkFBNkIsQ0FBQztBQUN2RCxPQUFPLEVBQUMsNkJBQTZCLEVBQUMsTUFBTSxpQ0FBaUMsQ0FBQztBQXFCOUUsTUFBTSxDQUFDLE1BQU0sd0JBQXdCLEdBQUcsQ0FBQyxLQUE4QixFQUFFLEVBQUU7SUFDdkUsSUFBRyxLQUFLLENBQUMsS0FBSyxHQUFHLENBQUMsRUFBQztRQUNmLE9BQU8sQ0FDSCxvQkFBQyxVQUFVLElBQ1AsUUFBUSxFQUFFLEtBQUssQ0FBQyxNQUFNLEVBQ3RCLFNBQVMsRUFBRSxLQUFLLENBQUMsWUFBWSxHQUFHLGFBQWEsRUFDN0MsRUFBRSxFQUFFLEtBQUssQ0FBQyxHQUFHLEVBQ2IsUUFBUSxFQUFFLEtBQUssQ0FBQyxRQUFRLEVBQ3hCLElBQUksRUFBRSxLQUFLLENBQUMsUUFBUSxFQUNwQixHQUFHLEVBQUMsV0FBVyxFQUNmLEtBQUssRUFBRSxLQUFLLENBQUMsS0FBSyxJQUFHLEtBQUssQ0FBQyxLQUFLLENBQWMsQ0FDckQsQ0FBQTtLQUNKO1NBQUk7UUFDRCxPQUFPLENBQ0gsOEJBQU0sU0FBUyxFQUFHLEtBQUssQ0FBQyxZQUFZLEdBQUcsY0FBYyxFQUFFLElBQUksRUFBRSxLQUFLLENBQUMsUUFBUSxJQUFHLEtBQUssQ0FBQyxLQUFLLENBQVEsQ0FDcEcsQ0FBQTtLQUNKO0FBQ0wsQ0FBQyxD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ZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiAgeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICAgICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqICBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiAgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiAgU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQge3dpdGhDb25kaXRpb25hbFBsYWNlSG9sZGVyLCB3aXRoU3RhbmRhcmRCYXNlQ3NzQ2xhc3N9IGZyb20gXCIuLi8uLi8uLi9BYnN0cmFjdENvcmVDb21wb25lbnRcIjtcbmltcG9ydCB7ZGV0ZXJtaW5lSXNBY3RpdmUsIE5hdmlnYXRpb25WMUdyb3VwLCBOYXZpZ2F0aW9uVjFJdGVtLCBOYXZpZ2F0aW9uVjFNb2RlbH0gZnJvbSBcIi4uLy4uL25hdmlnYXRpb24vdjEvTmF2aWdhdGlvblYxXCI7XG5pbXBvcnQge1JvdXRlZExpbmt9IGZyb20gXCIuLi8uLi8uLi9yb3V0aW5nL1JvdXRlZExpbmtcIjtcbmltcG9ydCB7TGFuZ3VhZ2VOYXZpZ2F0aW9uVjFJc0VtcHR5Rm59IGZyb20gXCIuL0xhbmd1YWdlTmF2aWdhdGlvblYxSXNFbXB0eUZuXCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgTGFuZ3VhZ2VOYXZpZ2F0aW9uVjFJdGVtIGV4dGVuZHMgTmF2aWdhdGlvblYxSXRlbSB7XG4gICAgbGV2ZWw6IG51bWJlcixcbiAgICBhY3RpdmU6IGJvb2xlYW4sXG4gICAgdGl0bGU6IHN0cmluZyxcbiAgICB1cmw6IHN0cmluZyxcbiAgICBsYXN0TW9kaWZpZWQ6IG51bWJlcixcbiAgICBkZXNjcmlwdGlvbj86IHN0cmluZyxcbiAgICBwYXRoOiBzdHJpbmcsXG4gICAgbG9jYWxlOiBzdHJpbmcsXG4gICAgY291bnRyeTogc3RyaW5nLFxuICAgIGxhbmd1YWdlOiBzdHJpbmcsXG4gICAgY2hpbGRyZW4/OiBMYW5ndWFnZU5hdmlnYXRpb25WMUl0ZW1bXVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIExhbmd1YWdlTmF2aWdhdGlvblYxTW9kZWwgZXh0ZW5kcyBOYXZpZ2F0aW9uVjFNb2RlbHtcbiAgICBpdGVtczpMYW5ndWFnZU5hdmlnYXRpb25WMUl0ZW1bXVxuICAgIGFjY2Vzc2liaWxpdHlMYWJlbD86IHN0cmluZ1xufVxuXG5leHBvcnQgY29uc3QgTGFuZ3VhZ2VOYXZpZ2F0aW9uVjFMaW5rID0gKHByb3BzOkxhbmd1YWdlTmF2aWdhdGlvblYxSXRlbSkgPT4ge1xuICAgIGlmKHByb3BzLmxldmVsID4gMCl7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8Um91dGVkTGlua1xuICAgICAgICAgICAgICAgIGlzUm91dGVkPXtwcm9wcy5yb3V0ZWR9XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtwcm9wcy5iYXNlQ3NzQ2xhc3MgKyAnX19pdGVtLWxpbmsnfVxuICAgICAgICAgICAgICAgIHRvPXtwcm9wcy51cmx9XG4gICAgICAgICAgICAgICAgaHJlZkxhbmc9e3Byb3BzLmxhbmd1YWdlfVxuICAgICAgICAgICAgICAgIGxhbmc9e3Byb3BzLmxhbmd1YWdlfVxuICAgICAgICAgICAgICAgIHJlbD1cImFsdGVybmF0ZVwiXG4gICAgICAgICAgICAgICAgdGl0bGU9e3Byb3BzLnRpdGxlfT57cHJvcHMudGl0bGV9PC9Sb3V0ZWRMaW5rPlxuICAgICAgICApXG4gICAgfWVsc2V7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9eyBwcm9wcy5iYXNlQ3NzQ2xhc3MgKyAnX19pdGVtLXRpdGxlJ30gbGFuZz17cHJvcHMubGFuZ3VhZ2V9Pntwcm9wcy50aXRsZX08L3NwYW4+XG4gICAgICAgIClcbiAgICB9XG59O1xuXG5leHBvcnQgY29uc3QgTGFuZ3VhZ2VOYXZpZ2F0aW9uVjFHcm91cCA9IChpdGVtOkxhbmd1YWdlTmF2aWdhdGlvblYxSXRlbSkgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgICB7ISFpdGVtLmNoaWxkcmVuICYmIGl0ZW0uY2hpbGRyZW4ubGVuZ3RoID4gMCAmJiAgKFxuICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9e2l0ZW0uYmFzZUNzc0NsYXNzICsgJ19fZ3JvdXAnfT5cbiAgICAgICAgICAgICAgICAgICAge2l0ZW0uY2hpbGRyZW4ubWFwKFxuICAgICAgICAgICAgICAgICAgICAgICAgKGl0ZW0saW5kZXgpID0+IDxMYW5ndWFnZU5hdmlnYXRpb25WMUl0ZW0gey4uLml0ZW19IGtleT17aXRlbS5iYXNlQ3NzQ2xhc3MgKyAnX19pdGVtLScgKyBpbmRleH0gaW5kZXg9e2luZGV4fS8+XG4gICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICl9XG4gICAgICAgIDwvPlxuICAgIClcbn07XG5cbmV4cG9ydCBjb25zdCBMYW5ndWFnZU5hdmlnYXRpb25WMUl0ZW0gPSAoaXRlbTpMYW5ndWFnZU5hdmlnYXRpb25WMUl0ZW0pID0+IHtcblxuICAgIGNvbnN0IGlzQWN0aXZlID0gZGV0ZXJtaW5lSXNBY3RpdmUoaXRlbSk7XG4gICAgY29uc3QgY3NzQ2xhc3MgPSBpdGVtLmJhc2VDc3NDbGFzcyArICdfX2l0ZW0gJyArXG4gICAgICAgICAgICAgICAgICAgIGl0ZW0uYmFzZUNzc0NsYXNzICsgJ19faXRlbS0tbGV2ZWwtJyArIGl0ZW0ubGV2ZWwgKyAnICcgKyBcbiAgICAgICAgICAgICAgICAgICAgYCR7aXRlbS5iYXNlQ3NzQ2xhc3N9X19pdGVtLS1jb3VudHJ5Y29kZS0ke2l0ZW0uY291bnRyeX0gJHtpdGVtLmJhc2VDc3NDbGFzc31fX2l0ZW0tLWxhbmdjb2RlLSR7aXRlbS5sYW5ndWFnZX1gICsgXG4gICAgICAgICAgICAgICAgICAgICArIChpc0FjdGl2ZSA/ICcgJyArIGl0ZW0uYmFzZUNzc0NsYXNzICsgJ19faXRlbS0tYWN0aXZlJyA6ICcnKTtcbiAgICByZXR1cm4gKFxuICAgICAgICA8bGkgY2xhc3NOYW1lPXtjc3NDbGFzc30+XG4gICAgICAgICAgICAgICAgPExhbmd1YWdlTmF2aWdhdGlvblYxTGluayB7Li4uaXRlbX0vPlxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgISFpdGVtLmNoaWxkcmVuICYmIGl0ZW0uY2hpbGRyZW4ubGVuZ3RoID4gMCAmJiA8TmF2aWdhdGlvblYxR3JvdXAgey4uLml0ZW19Lz5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgIDwvbGk+XG4gICAgKVxuXG59O1xuXG5jb25zdCBMYW5ndWFnZU5hdmlnYXRpb25WMUltcGwgPSAocHJvcHM6TGFuZ3VhZ2VOYXZpZ2F0aW9uVjFNb2RlbCkgPT4ge1xuICAgIGNvbnN0IHNlbGZDbG9uZTpMYW5ndWFnZU5hdmlnYXRpb25WMUl0ZW0gPSB7XG4gICAgICAgIGFjdGl2ZTogZmFsc2UsXG4gICAgICAgIGxhc3RNb2RpZmllZDogMCxcbiAgICAgICAgbGV2ZWw6IDAsXG4gICAgICAgIHBhdGg6IFwiXCIsXG4gICAgICAgIHRpdGxlOiBcIlwiLFxuICAgICAgICB1cmw6IFwiXCIsXG4gICAgICAgIGxhbmd1YWdlOiBcIlwiLFxuICAgICAgICBjb3VudHJ5OiBcIlwiLFxuICAgICAgICBsb2NhbGU6IFwiXCIsXG4gICAgICAgIGNoaWxkcmVuOiBwcm9wcy5pdGVtc1xuICAgIH07XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8bmF2IGNsYXNzTmFtZT17cHJvcHMuYmFzZUNzc0NsYXNzfVxuICAgICAgICAgICAgIHJvbGU9XCJuYXZpZ2F0aW9uXCJcbiAgICAgICAgICAgICBpdGVtU2NvcGUgaXRlbVR5cGU9XCJodHRwOi8vc2NoZW1hLm9yZy9TaXRlTmF2aWdhdGlvbkVsZW1lbnRcIlxuICAgICAgICAgICAgIGFyaWEtbGFiZWw9e3Byb3BzLmFjY2Vzc2liaWxpdHlMYWJlbH0+XG4gICAgICAgICAgICA8TGFuZ3VhZ2VOYXZpZ2F0aW9uVjFHcm91cCB7Li4uc2VsZkNsb25lfS8+XG4gICAgICAgIDwvbmF2PlxuICAgIClcbn07XG5cbmNvbnN0IExhbmd1YWdlTmF2aWdhdGlvbiA9IChwcm9wczpMYW5ndWFnZU5hdmlnYXRpb25WMU1vZGVsKSA9PiB7XG4gICAgY29uc3QgV3JhcHBlZCA9IHdpdGhDb25kaXRpb25hbFBsYWNlSG9sZGVyKHdpdGhTdGFuZGFyZEJhc2VDc3NDbGFzcyhMYW5ndWFnZU5hdmlnYXRpb25WMUltcGwsIFwiY21wLWxhbmd1YWdlbmF2aWdhdGlvblwiKSwgTGFuZ3VhZ2VOYXZpZ2F0aW9uVjFJc0VtcHR5Rm4sIFwiTGFuZ3VhZ2VOYXZpZ2F0aW9uIFYxXCIpXG4gICAgcmV0dXJuIDxXcmFwcGVkIHsuLi5wcm9wc30vPlxufTtcblxuZXhwb3J0IGRlZmF1bHQgTGFuZ3VhZ2VOYXZpZ2F0aW9uOyJdfQ==

        /***/
      },

      /***/
      "./src/layout/language-navigation/v1/LanguageNavigationV1IsEmptyFn.ts":
      /*!****************************************************************************!*\
        !*** ./src/layout/language-navigation/v1/LanguageNavigationV1IsEmptyFn.ts ***!
        \****************************************************************************/

      /*! exports provided: LanguageNavigationV1IsEmptyFn */

      /***/
      function (module, __webpack_exports__, __webpack_require__) {
        "use strict";

        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */


        __webpack_require__.d(__webpack_exports__, "LanguageNavigationV1IsEmptyFn", function () {
          return LanguageNavigationV1IsEmptyFn;
        });

        function LanguageNavigationV1IsEmptyFn(props) {
          return props.items == null || props.items.length === 0;
        } //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTGFuZ3VhZ2VOYXZpZ2F0aW9uVjFJc0VtcHR5Rm4uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJMYW5ndWFnZU5hdmlnYXRpb25WMUlzRW1wdHlGbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQSxNQUFNLFVBQVUsNkJBQTZCLENBQUMsS0FBK0I7SUFDekUsT0FBTyxLQUFLLENBQUMsS0FBSyxJQUFJLElBQUksSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLE1BQU0sS0FBSyxDQUFDLENBQUM7QUFDM0QsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7TGFuZ3VhZ2VOYXZpZ2F0aW9uVjFNb2RlbH0gZnJvbSBcIi4vTGFuZ3VhZ2VOYXZpZ2F0aW9uVjFcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIExhbmd1YWdlTmF2aWdhdGlvblYxSXNFbXB0eUZuKHByb3BzOkxhbmd1YWdlTmF2aWdhdGlvblYxTW9kZWwpOiBib29sZWFue1xuICAgIHJldHVybiBwcm9wcy5pdGVtcyA9PSBudWxsIHx8IHByb3BzLml0ZW1zLmxlbmd0aCA9PT0gMDtcbn1cbiJdfQ==

        /***/

      },

      /***/
      "./src/layout/navigation/v1/NavigationV1.tsx":
      /*!***************************************************!*\
        !*** ./src/layout/navigation/v1/NavigationV1.tsx ***!
        \***************************************************/

      /*! exports provided: determineIsActive, NavigationV1Group, NavigationV1Item, NavigationV1Impl, NavigationV1, default */

      /***/
      function (module, __webpack_exports__, __webpack_require__) {
        "use strict";

        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */


        __webpack_require__.d(__webpack_exports__, "determineIsActive", function () {
          return determineIsActive;
        });
        /* harmony export (binding) */


        __webpack_require__.d(__webpack_exports__, "NavigationV1Group", function () {
          return NavigationV1Group;
        });
        /* harmony export (binding) */


        __webpack_require__.d(__webpack_exports__, "NavigationV1Item", function () {
          return NavigationV1Item;
        });
        /* harmony export (binding) */


        __webpack_require__.d(__webpack_exports__, "NavigationV1Impl", function () {
          return NavigationV1Impl;
        });
        /* harmony export (binding) */


        __webpack_require__.d(__webpack_exports__, "NavigationV1", function () {
          return NavigationV1;
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


        var _NavigationV1IsEmptyFn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
        /*! ./NavigationV1IsEmptyFn */
        "./src/layout/navigation/v1/NavigationV1IsEmptyFn.ts");
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


        const determineIsActive = item => {
          return item.active;
        };

        const NavigationV1Group = item => {
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, !!item.children && item.children.length > 0 && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
            className: item.baseCssClass + '__group'
          }, item.children.map((item, index) => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(NavigationV1Item, Object.assign({
            key: item.baseCssClass + '__item-' + index
          }, item, {
            index: index
          })))));
        };

        const NavigationV1Item = item => {
          const isActive = determineIsActive(item);
          const cssClass = item.baseCssClass + '__item ' + item.baseCssClass + '__item--level-' + item.level + ' ' + (isActive ? ' ' + item.baseCssClass + '__item--active' : '');
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
            className: cssClass
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_routing_RoutedLink__WEBPACK_IMPORTED_MODULE_2__["RoutedLink"], {
            isRouted: item.routed,
            to: item.url,
            title: item.title,
            "aria-current": isActive && 'page',
            className: item.baseCssClass + '__item-link'
          }, item.title), !!item.children && item.children.length > 0 && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(NavigationV1Group, Object.assign({}, item)));
        };

        const NavigationV1Impl = props => {
          const selfClone = {
            active: false,
            lastModified: 0,
            level: 0,
            path: "",
            title: "",
            url: "",
            children: props.items
          };
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("nav", {
            className: props.baseCssClass,
            role: "navigation",
            itemScope: true,
            itemType: "http://schema.org/SiteNavigationElement",
            "aria-label": props.accessibilityLabel
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(NavigationV1Group, Object.assign({}, selfClone)));
        };

        const NavigationV1 = props => {
          const Wrapped = Object(_AbstractCoreComponent__WEBPACK_IMPORTED_MODULE_1__["withConditionalPlaceHolder"])(Object(_AbstractCoreComponent__WEBPACK_IMPORTED_MODULE_1__["withStandardBaseCssClass"])(NavigationV1Impl, "cmp-navigation"), _NavigationV1IsEmptyFn__WEBPACK_IMPORTED_MODULE_3__["NavigationV1IsEmptyFn"], "Navigation V1");
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Wrapped, Object.assign({}, props));
        };
        /* harmony default export */


        __webpack_exports__["default"] = NavigationV1; //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTmF2aWdhdGlvblYxLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiTmF2aWdhdGlvblYxLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7R0FjRztBQUVILE9BQU8sS0FBSyxNQUFNLE9BQU8sQ0FBQztBQUMxQixPQUFPLEVBQWtCLDBCQUEwQixFQUFFLHdCQUF3QixFQUFDLE1BQU0sZ0NBQWdDLENBQUM7QUFFckgsT0FBTyxFQUFDLFVBQVUsRUFBQyxNQUFNLDZCQUE2QixDQUFDO0FBQ3ZELE9BQU8sRUFBQyxxQkFBcUIsRUFBQyxNQUFNLHlCQUF5QixDQUFDO0FBbUI5RCxNQUFNLENBQUMsTUFBTSxpQkFBaUIsR0FBRyxDQUFDLElBQXFCLEVBQUUsRUFBRTtJQUN2RCxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUM7QUFDdkIsQ0FBQyxDQUFDO0FBRUYsTUFBTSxDQUFDLE1BQU0saUJBQWlCLEdBQUcsQ0FBQyxJQUFxQixFQUFFLEVBQUU7SUFDdkQsT0FBTyxDQUNILDBDQUNLLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxHQUFHLENBQUMsSUFBSyxDQUM3Qyw0QkFBSyxTQUFTLEVBQUUsSUFBSSxDQUFDLFlBQVksR0FBRyxTQUFTLElBQ3hDLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUNkLENBQUMsSUFBSSxFQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsb0JBQUMsZ0JBQWdCLGtCQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsWUFBWSxHQUFHLFNBQVMsR0FBRyxLQUFLLElBQU0sSUFBSSxJQUFFLEtBQUssRUFBRSxLQUFLLElBQUcsQ0FDMUcsQ0FDQSxDQUNSLENBQ0YsQ0FDTixDQUFBO0FBQ0wsQ0FBQyxDQUFDO0FBRUYsTUFBTSxDQUFDLE1BQU0sZ0JBQWdCLEdBQUcsQ0FBQyxJQUFxQixFQUFFLEVBQUU7SUFFdEQsTUFBTSxRQUFRLEdBQUcsaUJBQWlCLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDekMsTUFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLFlBQVksR0FBRyxTQUFTO1FBQzlCLElBQUksQ0FBQyxZQUFZLEdBQUcsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLEtBQUssR0FBRyxHQUFHO1VBQ3BELENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLFlBQVksR0FBRyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDaEYsT0FBTyxDQUNILDRCQUFJLFNBQVMsRUFBRSxRQUFRO1FBQ2Ysb0JBQUMsVUFBVSxJQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsTUFBTSxFQUFFLEVBQUUsRUFBRSxJQUFJLENBQUMsR0FBRyxFQUFFLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSyxrQkFBZ0IsUUFBUSxJQUFJLE1BQU0sRUFDaEcsU0FBUyxFQUFFLElBQUksQ0FBQyxZQUFZLEdBQUcsYUFBYSxJQUFHLElBQUksQ0FBQyxLQUFLLENBQ2hEO1FBRVQsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxJQUFJLG9CQUFDLGlCQUFpQixvQkFBSyxJQUFJLEVBQUcsQ0FFcEYsQ0FDUixDQUFBO0FBRUwsQ0FBQyxDQUFDO0FBRUYsTUFBTSxDQUFDLE1BQU0sZ0JBQWdCLEdBQUcsQ0FBQyxLQUF1QixFQUFFLEVBQUU7SUFFeEQsTUFBTSxTQUFTLEdBQW9CO1FBQy9CLE1BQU0sRUFBRSxLQUFLO1FBQ2IsWUFBWSxFQUFFLENBQUM7UUFDZixLQUFLLEVBQUUsQ0FBQztRQUNSLElBQUksRUFBRSxFQUFFO1FBQ1IsS0FBSyxFQUFFLEVBQUU7UUFDVCxHQUFHLEVBQUUsRUFBRTtRQUNQLFFBQVEsRUFBRSxLQUFLLENBQUMsS0FBSztLQUN4QixDQUFDO0lBRUYsT0FBTyxDQUNILDZCQUFLLFNBQVMsRUFBRSxLQUFLLENBQUMsWUFBWSxFQUM3QixJQUFJLEVBQUMsWUFBWSxFQUNqQixTQUFTLFFBQUMsUUFBUSxFQUFDLHlDQUF5QyxnQkFDaEQsS0FBSyxDQUFDLGtCQUFrQjtRQUNyQyxvQkFBQyxpQkFBaUIsb0JBQUssU0FBUyxFQUFHLENBQ2pDLENBQ1QsQ0FBQTtBQUVMLENBQUMsQ0FBQTtBQUlELE1BQU0sQ0FBQyxNQUFNLFlBQVksR0FBRyxDQUFDLEtBQXVCLEVBQUUsRUFBRTtJQUNwRCxNQUFNLE9BQU8sR0FBRywwQkFBMEIsQ0FBQyx3QkFBd0IsQ0FBQyxnQkFBZ0IsRUFBRSxnQkFBZ0IsQ0FBQyxFQUFFLHFCQUFxQixFQUFFLGVBQWUsQ0FBQyxDQUFBO0lBQ2hKLE9BQU8sb0JBQUMsT0FBTyxvQkFBSyxLQUFLLEVBQUcsQ0FBQTtBQUNoQyxDQUFDLENBQUM7QUFFRixlQUFlLFlBQVksQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiAgQ29weXJpZ2h0IDIwMjAgQWRvYmVcbiAqXG4gKiAgTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqICB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiAgWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICAgICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiAgVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqICBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqICBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiAgbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cblxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7SGFzQmFzZUNzc0NsYXNzLCB3aXRoQ29uZGl0aW9uYWxQbGFjZUhvbGRlciwgd2l0aFN0YW5kYXJkQmFzZUNzc0NsYXNzfSBmcm9tIFwiLi4vLi4vLi4vQWJzdHJhY3RDb3JlQ29tcG9uZW50XCI7XG5pbXBvcnQge1JvdXRlZENvcmVDb21wb25lbnRNb2RlbCwgUm91dGVkTW9kZWx9IGZyb20gXCIuLi8uLi8uLi9yb3V0aW5nL1JvdXRlZENvcmVDb21wb25lbnRcIjtcbmltcG9ydCB7Um91dGVkTGlua30gZnJvbSBcIi4uLy4uLy4uL3JvdXRpbmcvUm91dGVkTGlua1wiO1xuaW1wb3J0IHtOYXZpZ2F0aW9uVjFJc0VtcHR5Rm59IGZyb20gXCIuL05hdmlnYXRpb25WMUlzRW1wdHlGblwiO1xuXG5leHBvcnQgaW50ZXJmYWNlIE5hdmlnYXRpb25WMUl0ZW0gZXh0ZW5kcyBSb3V0ZWRNb2RlbCxIYXNCYXNlQ3NzQ2xhc3N7XG4gICAgbGV2ZWw6IG51bWJlcixcbiAgICBpbmRleD86IG51bWJlcixcbiAgICBhY3RpdmU6IGJvb2xlYW4sXG4gICAgdGl0bGU6IHN0cmluZyxcbiAgICB1cmw6IHN0cmluZyxcbiAgICBsYXN0TW9kaWZpZWQ6IG51bWJlcixcbiAgICBkZXNjcmlwdGlvbj86IHN0cmluZyxcbiAgICBwYXRoOiBzdHJpbmcsXG4gICAgY2hpbGRyZW4/OiBOYXZpZ2F0aW9uVjFJdGVtW11cbn1cblxuZXhwb3J0IGludGVyZmFjZSBOYXZpZ2F0aW9uVjFNb2RlbCBleHRlbmRzIFJvdXRlZENvcmVDb21wb25lbnRNb2RlbHtcbiAgICBpdGVtczpOYXZpZ2F0aW9uVjFJdGVtW11cbiAgICBhY2Nlc3NpYmlsaXR5TGFiZWw/OiBzdHJpbmdcbn1cblxuZXhwb3J0IGNvbnN0IGRldGVybWluZUlzQWN0aXZlID0gKGl0ZW06TmF2aWdhdGlvblYxSXRlbSkgPT4ge1xuICAgIHJldHVybiBpdGVtLmFjdGl2ZTtcbn07XG5cbmV4cG9ydCBjb25zdCBOYXZpZ2F0aW9uVjFHcm91cCA9IChpdGVtOk5hdmlnYXRpb25WMUl0ZW0pID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8PlxuICAgICAgICAgICAgeyEhaXRlbS5jaGlsZHJlbiAmJiBpdGVtLmNoaWxkcmVuLmxlbmd0aCA+IDAgJiYgIChcbiAgICAgICAgICAgICAgICA8dWwgIGNsYXNzTmFtZT17aXRlbS5iYXNlQ3NzQ2xhc3MgKyAnX19ncm91cCd9PlxuICAgICAgICAgICAgICAgICAgICB7aXRlbS5jaGlsZHJlbi5tYXAoXG4gICAgICAgICAgICAgICAgICAgICAgICAoaXRlbSxpbmRleCkgPT4gPE5hdmlnYXRpb25WMUl0ZW0ga2V5PXtpdGVtLmJhc2VDc3NDbGFzcyArICdfX2l0ZW0tJyArIGluZGV4fSB7Li4uaXRlbX0gaW5kZXg9e2luZGV4fS8+XG4gICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICl9XG4gICAgICAgIDwvPlxuICAgIClcbn07XG5cbmV4cG9ydCBjb25zdCBOYXZpZ2F0aW9uVjFJdGVtID0gKGl0ZW06TmF2aWdhdGlvblYxSXRlbSkgPT4ge1xuXG4gICAgY29uc3QgaXNBY3RpdmUgPSBkZXRlcm1pbmVJc0FjdGl2ZShpdGVtKTtcbiAgICBjb25zdCBjc3NDbGFzcyA9IGl0ZW0uYmFzZUNzc0NsYXNzICsgJ19faXRlbSAnICtcbiAgICAgICAgICAgICAgICAgICAgaXRlbS5iYXNlQ3NzQ2xhc3MgKyAnX19pdGVtLS1sZXZlbC0nICsgaXRlbS5sZXZlbCArICcgJ1xuICAgICAgICAgICAgICAgICAgICAgKyAoaXNBY3RpdmUgPyAnICcgKyBpdGVtLmJhc2VDc3NDbGFzcyArICdfX2l0ZW0tLWFjdGl2ZScgOiAnJyk7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGxpIGNsYXNzTmFtZT17Y3NzQ2xhc3N9PlxuICAgICAgICAgICAgICAgIDxSb3V0ZWRMaW5rIGlzUm91dGVkPXtpdGVtLnJvdXRlZH0gdG89e2l0ZW0udXJsfSB0aXRsZT17aXRlbS50aXRsZX0gYXJpYS1jdXJyZW50PXtpc0FjdGl2ZSAmJiAncGFnZSd9XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17aXRlbS5iYXNlQ3NzQ2xhc3MgKyAnX19pdGVtLWxpbmsnfT57aXRlbS50aXRsZVxuICAgICAgICAgICAgICAgfTwvUm91dGVkTGluaz5cbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICEhaXRlbS5jaGlsZHJlbiAmJiBpdGVtLmNoaWxkcmVuLmxlbmd0aCA+IDAgJiYgPE5hdmlnYXRpb25WMUdyb3VwIHsuLi5pdGVtfS8+XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICA8L2xpPlxuICAgIClcblxufTtcblxuZXhwb3J0IGNvbnN0IE5hdmlnYXRpb25WMUltcGwgPSAocHJvcHM6TmF2aWdhdGlvblYxTW9kZWwpID0+IHtcblxuICAgIGNvbnN0IHNlbGZDbG9uZTpOYXZpZ2F0aW9uVjFJdGVtID0ge1xuICAgICAgICBhY3RpdmU6IGZhbHNlLFxuICAgICAgICBsYXN0TW9kaWZpZWQ6IDAsXG4gICAgICAgIGxldmVsOiAwLFxuICAgICAgICBwYXRoOiBcIlwiLFxuICAgICAgICB0aXRsZTogXCJcIixcbiAgICAgICAgdXJsOiBcIlwiLFxuICAgICAgICBjaGlsZHJlbjogcHJvcHMuaXRlbXNcbiAgICB9O1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPG5hdiBjbGFzc05hbWU9e3Byb3BzLmJhc2VDc3NDbGFzc31cbiAgICAgICAgICAgICByb2xlPVwibmF2aWdhdGlvblwiXG4gICAgICAgICAgICAgaXRlbVNjb3BlIGl0ZW1UeXBlPVwiaHR0cDovL3NjaGVtYS5vcmcvU2l0ZU5hdmlnYXRpb25FbGVtZW50XCJcbiAgICAgICAgICAgICBhcmlhLWxhYmVsPXtwcm9wcy5hY2Nlc3NpYmlsaXR5TGFiZWx9PlxuICAgICAgICAgICAgPE5hdmlnYXRpb25WMUdyb3VwIHsuLi5zZWxmQ2xvbmV9Lz5cbiAgICAgICAgPC9uYXY+XG4gICAgKVxuXG59XG5cblxuXG5leHBvcnQgY29uc3QgTmF2aWdhdGlvblYxID0gKHByb3BzOk5hdmlnYXRpb25WMU1vZGVsKSA9PiB7XG4gICAgY29uc3QgV3JhcHBlZCA9IHdpdGhDb25kaXRpb25hbFBsYWNlSG9sZGVyKHdpdGhTdGFuZGFyZEJhc2VDc3NDbGFzcyhOYXZpZ2F0aW9uVjFJbXBsLCBcImNtcC1uYXZpZ2F0aW9uXCIpLCBOYXZpZ2F0aW9uVjFJc0VtcHR5Rm4sIFwiTmF2aWdhdGlvbiBWMVwiKVxuICAgIHJldHVybiA8V3JhcHBlZCB7Li4ucHJvcHN9Lz5cbn07XG5cbmV4cG9ydCBkZWZhdWx0IE5hdmlnYXRpb25WMTsiXX0=

        /***/
      },

      /***/
      "./src/layout/navigation/v1/NavigationV1IsEmptyFn.ts":
      /*!***********************************************************!*\
        !*** ./src/layout/navigation/v1/NavigationV1IsEmptyFn.ts ***!
        \***********************************************************/

      /*! exports provided: NavigationV1IsEmptyFn */

      /***/
      function (module, __webpack_exports__, __webpack_require__) {
        "use strict";

        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */


        __webpack_require__.d(__webpack_exports__, "NavigationV1IsEmptyFn", function () {
          return NavigationV1IsEmptyFn;
        });

        function NavigationV1IsEmptyFn(props) {
          return props.items == null || props.items.length === 0;
        } //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTmF2aWdhdGlvblYxSXNFbXB0eUZuLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiTmF2aWdhdGlvblYxSXNFbXB0eUZuLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBLE1BQU0sVUFBVSxxQkFBcUIsQ0FBQyxLQUF1QjtJQUN6RCxPQUFPLEtBQUssQ0FBQyxLQUFLLElBQUksSUFBSSxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsTUFBTSxLQUFLLENBQUMsQ0FBQztBQUMzRCxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtOYXZpZ2F0aW9uVjFNb2RlbH0gZnJvbSBcIi4vTmF2aWdhdGlvblYxXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBOYXZpZ2F0aW9uVjFJc0VtcHR5Rm4ocHJvcHM6TmF2aWdhdGlvblYxTW9kZWwpOiBib29sZWFue1xuICAgIHJldHVybiBwcm9wcy5pdGVtcyA9PSBudWxsIHx8IHByb3BzLml0ZW1zLmxlbmd0aCA9PT0gMDtcbn0iXX0=

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
      12:
      /*!**********************************************************************!*\
        !*** multi ./src/layout/language-navigation/v1/LanguageNavigationV1 ***!
        \**********************************************************************/

      /*! no static exports found */

      /***/
      function (module, exports, __webpack_require__) {
        module.exports = __webpack_require__(
        /*! ./src/layout/language-navigation/v1/LanguageNavigationV1 */
        "./src/layout/language-navigation/v1/LanguageNavigationV1.tsx");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9AYWRvYmUvYWVtLWNvcmUtY29tcG9uZW50cy1yZWFjdC1iYXNlL3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbj8wNjE3IiwiL0BhZG9iZS9hZW0tY29yZS1jb21wb25lbnRzLXJlYWN0LWJhc2Uvd2VicGFjay9ib290c3RyYXA/MGRiZSIsIi9Vc2Vycy9yYWFpam1hay93b3Jrc3BhY2UvYWVtLXJlYWN0LWNvcmUtd2NtLWNvbXBvbmVudHMvZXhhbXBsZXMvcmVhY3Qtc3BhY29tcG9uZW50cy1leGFtcGxlLXByb2plY3QvQGFkb2JlL2FlbS1jb3JlLWNvbXBvbmVudHMtcmVhY3QtYmFzZS9zcmMvQWJzdHJhY3RDb3JlQ29tcG9uZW50LnRzeCIsIi9Vc2Vycy9yYWFpam1hay93b3Jrc3BhY2UvYWVtLXJlYWN0LWNvcmUtd2NtLWNvbXBvbmVudHMvZXhhbXBsZXMvcmVhY3Qtc3BhY29tcG9uZW50cy1leGFtcGxlLXByb2plY3QvQGFkb2JlL2FlbS1jb3JlLWNvbXBvbmVudHMtcmVhY3QtYmFzZS9zcmMvY29tbW9uL3BsYWNlaG9sZGVyLnRzeCIsIi9Vc2Vycy9yYWFpam1hay93b3Jrc3BhY2UvYWVtLXJlYWN0LWNvcmUtd2NtLWNvbXBvbmVudHMvZXhhbXBsZXMvcmVhY3Qtc3BhY29tcG9uZW50cy1leGFtcGxlLXByb2plY3QvQGFkb2JlL2FlbS1jb3JlLWNvbXBvbmVudHMtcmVhY3QtYmFzZS9zcmMvbGF5b3V0L2xhbmd1YWdlLW5hdmlnYXRpb24vdjEvTGFuZ3VhZ2VOYXZpZ2F0aW9uVjEudHN4IiwiL0BhZG9iZS9hZW0tY29yZS1jb21wb25lbnRzLXJlYWN0LWJhc2Uvc3JjL2xheW91dC9sYW5ndWFnZS1uYXZpZ2F0aW9uL3YxL0xhbmd1YWdlTmF2aWdhdGlvblYxSXNFbXB0eUZuLnRzPzBkZWYiLCIvVXNlcnMvcmFhaWptYWsvd29ya3NwYWNlL2FlbS1yZWFjdC1jb3JlLXdjbS1jb21wb25lbnRzL2V4YW1wbGVzL3JlYWN0LXNwYWNvbXBvbmVudHMtZXhhbXBsZS1wcm9qZWN0L0BhZG9iZS9hZW0tY29yZS1jb21wb25lbnRzLXJlYWN0LWJhc2Uvc3JjL2xheW91dC9uYXZpZ2F0aW9uL3YxL05hdmlnYXRpb25WMS50c3giLCIvQGFkb2JlL2FlbS1jb3JlLWNvbXBvbmVudHMtcmVhY3QtYmFzZS9zcmMvbGF5b3V0L25hdmlnYXRpb24vdjEvTmF2aWdhdGlvblYxSXNFbXB0eUZuLnRzP2MzOTkiLCIvVXNlcnMvcmFhaWptYWsvd29ya3NwYWNlL2FlbS1yZWFjdC1jb3JlLXdjbS1jb21wb25lbnRzL2V4YW1wbGVzL3JlYWN0LXNwYWNvbXBvbmVudHMtZXhhbXBsZS1wcm9qZWN0L0BhZG9iZS9hZW0tY29yZS1jb21wb25lbnRzLXJlYWN0LWJhc2Uvc3JjL3JvdXRpbmcvUm91dGVkTGluay50c3giLCIvVXNlcnMvcmFhaWptYWsvd29ya3NwYWNlL2FlbS1yZWFjdC1jb3JlLXdjbS1jb21wb25lbnRzL2V4YW1wbGVzL3JlYWN0LXNwYWNvbXBvbmVudHMtZXhhbXBsZS1wcm9qZWN0L3dlYnBhY2s6L0BhZG9iZS9hZW0tY29yZS1jb21wb25lbnRzLXJlYWN0LWJhc2UvZXh0ZXJuYWwgXCJyZWFjdFwiIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBQ0EsWUFDQSwyQkFEQSxLQUVBLEVBS0E7QUFDQyxDQVRELEVBU0MseUNBVEQsRUFTQztBQUNEOzs7OztBQ1ZBO0FBQUE7O0FBQ0E7QUFBQTs7O0FBRUE7QUFBQTs7QUFDQTs7QUFBQTs7O0FBRUE7QUFBQTs7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBOztBQUNBOzs7QUFBQTtBQUNBO0FBQUEscUJBREE7O0FBRUE7QUFBQSxrQkFGQTs7QUFHQTtBQUFBO0FBQ0E7O0FBSkE7OztBQU1BO0FBQUE7O0FBQ0E7O0FBQUE7OztBQUVBO0FBQUE7O0FBQ0E7O0FBQUE7OztBQUVBO0FBQUE7O0FBQ0E7O0FBQUE7QUFDQTtBQUFBOzs7OztBQUdBO0FBQUE7O0FB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QUFBQTs7O0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFpQk87QUFDUDtBQUFXLGNBQVg7QUFBVyxvQkFBWDtBQUFXO0FBQVgsY0FBeUMsS0FBekM7O0FBQ0E7QUFDQSxtQkFBZSw2Q0FBSyxhQUFMLENBQUssR0FBTCxFQUFLO0FBQW1DO0FBQW5DLGVBQStDLFVBQS9DLENBQUwsQ0FBZjtBQUNBOztBQUNBO0FBQ0EsMkNBQ1MsNkNBQUssYUFBTCxDQUFLLEdBQUwsRUFBSztBQUFtQztBQUFuQyxhQUE4QyxVQUE5QyxDQUFMLENBRFQsR0FHYSw2Q0FBSyxhQUFMLENBQW9CLHFEQUFwQixFQUE4QixrQkFBa0IsVUFBbEIsRUFBa0I7QUFBZTtBQUFmLFdBQWxCLENBQTlCLENBSGI7QUFJQSxTQVZPLEMsQ0FXUDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM1QkE7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7OztBVFVBO0NBVkEsRSIsImZpbGUiOiJqcy9MYW5ndWFnZU5hdmlnYXRpb25WMS43OGVmOTI1ZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcIkBhZG9iZS9hZW0tY29yZS1jb21wb25lbnRzLXJlYWN0LWJhc2VcIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1wiQGFkb2JlL2FlbS1jb3JlLWNvbXBvbmVudHMtcmVhY3QtYmFzZVwiXSA9IGZhY3RvcnkoKTtcbn0pKHR5cGVvZiBzZWxmICE9PSAndW5kZWZpbmVkJyA/IHNlbGYgOiB0aGlzLCBmdW5jdGlvbigpIHtcbnJldHVybiAiLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMTIpO1xuIiwiLypcbiAqICBDb3B5cmlnaHQgMjAyMCBBZG9iZVxuICpcbiAqICBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqICBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgICAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqICBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiAgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqICBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgRWRpdG9yUGxhY2VIb2xkZXIgfSBmcm9tIFwiLi9jb21tb24vcGxhY2Vob2xkZXJcIjtcbmV4cG9ydCBjb25zdCB3aXRoU3RhbmRhcmRCYXNlQ3NzQ2xhc3MgPSAoQ29tcG9uZW50LCBkZWZhdWx0QmFzZUNzc0NsYXNzKSA9PiB7XG4gICAgcmV0dXJuIChwcm9wcykgPT4ge1xuICAgICAgICBjb25zdCBiYXNlQ3NzQ2xhc3MgPSBwcm9wcy5iYXNlQ3NzQ2xhc3M7XG4gICAgICAgIGNvbnN0IHRvQmVVc2VkQ3NzQ2xhc3MgPSBiYXNlQ3NzQ2xhc3MgJiYgYmFzZUNzc0NsYXNzLnRyaW0oKS5sZW5ndGggPiAwID8gYmFzZUNzc0NsYXNzIDogZGVmYXVsdEJhc2VDc3NDbGFzcztcbiAgICAgICAgY29uc3QgbWVyZ2VkUHJvcHMgPSB7XG4gICAgICAgICAgICAuLi5wcm9wcyxcbiAgICAgICAgICAgIGJhc2VDc3NDbGFzczogdG9CZVVzZWRDc3NDbGFzc1xuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChDb21wb25lbnQsIE9iamVjdC5hc3NpZ24oe30sIG1lcmdlZFByb3BzKSk7XG4gICAgfTtcbn07XG5leHBvcnQgY29uc3Qgd2l0aENvbmRpdGlvbmFsUGxhY2VIb2xkZXIgPSAoQ29tcG9uZW50LCBpc0VtcHR5LCBjb21wb25lbnRUaXRsZSwgZW1wdHlUZXh0KSA9PiB7XG4gICAgcmV0dXJuIChwcm9wcykgPT4ge1xuICAgICAgICBjb25zdCBpc0VtcHR5UmVzdWx0ID0gaXNFbXB0eShwcm9wcyk7XG4gICAgICAgIGNvbnN0IHsgaGlkZVBsYWNlSG9sZGVyID0gZmFsc2UsIGlzSW5FZGl0b3IgPSBmYWxzZSB9ID0gcHJvcHM7XG4gICAgICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChSZWFjdC5GcmFnbWVudCwgbnVsbCxcbiAgICAgICAgICAgICFpc0VtcHR5UmVzdWx0ICYmXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChDb21wb25lbnQsIE9iamVjdC5hc3NpZ24oe30sIHByb3BzKSksXG4gICAgICAgICAgICAoaXNFbXB0eVJlc3VsdCAmJiBpc0luRWRpdG9yICYmICFoaWRlUGxhY2VIb2xkZXIpICYmXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChFZGl0b3JQbGFjZUhvbGRlciwgeyBlbXB0eVRleHRBcHBlbmQ6IGVtcHR5VGV4dCwgY29tcG9uZW50VGl0bGU6IGNvbXBvbmVudFRpdGxlIH0pKSk7XG4gICAgfTtcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lRV0p6ZEhKaFkzUkRiM0psUTI5dGNHOXVaVzUwTG1weklpd2ljMjkxY21ObFVtOXZkQ0k2SWlJc0luTnZkWEpqWlhNaU9sc2lRV0p6ZEhKaFkzUkRiM0psUTI5dGNHOXVaVzUwTG5SemVDSmRMQ0p1WVcxbGN5STZXMTBzSW0xaGNIQnBibWR6SWpvaVFVRkJRVHM3T3pzN096czdPenM3T3pzN1IwRmpSenRCUVVWSUxFOUJRVThzUzBGQlN5eExRVUZMTEUxQlFVMHNUMEZCVHl4RFFVRkRPMEZCUnk5Q0xFOUJRVThzUlVGQlF5eHBRa0ZCYVVJc1JVRkJReXhOUVVGTkxITkNRVUZ6UWl4RFFVRkRPMEZCWlhaRUxFMUJRVTBzUTBGQlF5eE5RVUZOTEhkQ1FVRjNRaXhIUVVGSExFTkJSWEJETEZOQlFUQkNMRVZCUXpGQ0xHMUNRVUV3UWl4RlFVTktMRVZCUVVVN1NVRkRlRUlzVDBGQlR5eERRVUZETEV0QlFVOHNSVUZCUlN4RlFVRkZPMUZCUldZc1RVRkJUU3haUVVGWkxFZEJRVWNzUzBGQlN5eERRVUZETEZsQlFWa3NRMEZCUXp0UlFVTjRReXhOUVVGTkxHZENRVUZuUWl4SFFVRkhMRmxCUVZrc1NVRkJTU3haUVVGWkxFTkJRVU1zU1VGQlNTeEZRVUZGTEVOQlFVTXNUVUZCVFN4SFFVRkhMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zV1VGQldTeERRVUZETEVOQlFVTXNRMEZCUXl4dFFrRkJiVUlzUTBGQlF6dFJRVVUzUnl4TlFVRk5MRmRCUVZjc1IwRkJTenRaUVVOc1FpeEhRVUZITEV0QlFVczdXVUZEVWl4WlFVRlpMRVZCUVVVc1owSkJRV2RDTzFOQlEycERMRU5CUVVNN1VVRkZSaXhQUVVGUExHOUNRVUZETEZOQlFWTXNiMEpCUVVzc1YwRkJWeXhGUVVGSkxFTkJRVU03U1VGRE1VTXNRMEZCUXl4RFFVRkJPMEZCUTB3c1EwRkJReXhEUVVGRE8wRkJSVVlzVFVGQlRTeERRVUZETEUxQlFVMHNNRUpCUVRCQ0xFZEJRVWNzUTBGRk1VSXNVMEZCTUVJc1JVRkRNVUlzVDBGQk5FSXNSVUZETlVJc1kwRkJjMElzUlVGQlJTeFRRVUZwUWl4RlFVTnVRaXhGUVVGRk8wbEJRM0JETEU5QlFVOHNRMEZCUXl4TFFVRlBMRVZCUVVVc1JVRkJSVHRSUVVWbUxFMUJRVTBzWVVGQllTeEhRVUZYTEU5QlFVOHNRMEZCUXl4TFFVRkxMRU5CUVVNc1EwRkJRenRSUVVNM1F5eE5RVUZOTEVWQlFVTXNaVUZCWlN4SFFVRkhMRXRCUVVzc1JVRkJSU3hWUVVGVkxFZEJRVWNzUzBGQlN5eEZRVUZETEVkQlFVY3NTMEZCU3l4RFFVRkRPMUZCUlRWRUxFOUJRVThzUTBGRFNEdFpRVU5OTEVOQlFVTXNZVUZCWVR0blFrRkRhRUlzYjBKQlFVTXNVMEZCVXl4dlFrRkJTeXhMUVVGTExFVkJRVWs3V1VGSGNFSXNRMEZCUXl4aFFVRmhMRWxCUVVrc1ZVRkJWU3hKUVVGSkxFTkJRVU1zWlVGQlpTeERRVUZETzJkQ1FVTnFSQ3h2UWtGQlF5eHBRa0ZCYVVJc1NVRkRaQ3hsUVVGbExFVkJRVVVzVTBGQlV5eEZRVU14UWl4alFVRmpMRVZCUVVVc1kwRkJZeXhIUVVOb1F5eERRVVZRTEVOQlEwNHNRMEZCUXp0SlFVTk9MRU5CUVVNc1EwRkJRVHRCUVVOTUxFTkJRVU1zUTBGQlF5SXNJbk52ZFhKalpYTkRiMjUwWlc1MElqcGJJaThxWEc0Z0tpQWdRMjl3ZVhKcFoyaDBJREl3TWpBZ1FXUnZZbVZjYmlBcVhHNGdLaUFnVEdsalpXNXpaV1FnZFc1a1pYSWdkR2hsSUVGd1lXTm9aU0JNYVdObGJuTmxMQ0JXWlhKemFXOXVJREl1TUNBb2RHaGxJRndpVEdsalpXNXpaVndpS1R0Y2JpQXFJQ0I1YjNVZ2JXRjVJRzV2ZENCMWMyVWdkR2hwY3lCbWFXeGxJR1Y0WTJWd2RDQnBiaUJqYjIxd2JHbGhibU5sSUhkcGRHZ2dkR2hsSUV4cFkyVnVjMlV1WEc0Z0tpQWdXVzkxSUcxaGVTQnZZblJoYVc0Z1lTQmpiM0I1SUc5bUlIUm9aU0JNYVdObGJuTmxJR0YwWEc0Z0tseHVJQ29nSUNBZ0lDQm9kSFJ3T2k4dmQzZDNMbUZ3WVdOb1pTNXZjbWN2YkdsalpXNXpaWE12VEVsRFJVNVRSUzB5TGpCY2JpQXFYRzRnS2lBZ1ZXNXNaWE56SUhKbGNYVnBjbVZrSUdKNUlHRndjR3hwWTJGaWJHVWdiR0YzSUc5eUlHRm5jbVZsWkNCMGJ5QnBiaUIzY21sMGFXNW5MQ0J6YjJaMGQyRnlaVnh1SUNvZ0lHUnBjM1J5YVdKMWRHVmtJSFZ1WkdWeUlIUm9aU0JNYVdObGJuTmxJR2x6SUdScGMzUnlhV0oxZEdWa0lHOXVJR0Z1SUZ3aVFWTWdTVk5jSWlCQ1FWTkpVeXhjYmlBcUlDQlhTVlJJVDFWVUlGZEJVbEpCVGxSSlJWTWdUMUlnUTA5T1JFbFVTVTlPVXlCUFJpQkJUbGtnUzBsT1JDd2daV2wwYUdWeUlHVjRjSEpsYzNNZ2IzSWdhVzF3YkdsbFpDNWNiaUFxSUNCVFpXVWdkR2hsSUV4cFkyVnVjMlVnWm05eUlIUm9aU0J6Y0dWamFXWnBZeUJzWVc1bmRXRm5aU0JuYjNabGNtNXBibWNnY0dWeWJXbHpjMmx2Ym5NZ1lXNWtYRzRnS2lBZ2JHbHRhWFJoZEdsdmJuTWdkVzVrWlhJZ2RHaGxJRXhwWTJWdWMyVXVYRzRnS2k5Y2JseHVhVzF3YjNKMElDb2dZWE1nVW1WaFkzUWdabkp2YlNBbmNtVmhZM1FuTzF4dWFXMXdiM0owSUh0RGIyMXdiMjVsYm5SVWVYQmxmU0JtY205dElDZHlaV0ZqZENjN1hHNWNibWx0Y0c5eWRDQjdSV1JwZEc5eVVHeGhZMlZJYjJ4a1pYSjlJR1p5YjIwZ1hDSXVMMk52YlcxdmJpOXdiR0ZqWldodmJHUmxjbHdpTzF4dVhHNWxlSEJ2Y25RZ2FXNTBaWEptWVdObElFaGhjMEpoYzJWRGMzTkRiR0Z6Y3lCN1hHNGdJQ0FnWW1GelpVTnpjME5zWVhOelB6b2djM1J5YVc1blhHNTlYRzVjYm1WNGNHOXlkQ0JwYm5SbGNtWmhZMlVnUTI5eVpVTnZiWEJ2Ym1WdWRFMXZaR1ZzSUdWNGRHVnVaSE1nU0dGelFtRnpaVU56YzBOc1lYTnplMXh1SUNBZ0lHaHBaR1ZRYkdGalpVaHZiR1JsY2o4NklHSnZiMnhsWVc1Y2JpQWdJQ0JwYzBsdVJXUnBkRzl5UHpwaWIyOXNaV0Z1WEc1OVhHNWNibVY0Y0c5eWRDQnBiblJsY21aaFkyVWdRMjl5WlVOdmJYQnZibVZ1ZEZOMFlYUmxJSHRjYmx4dWZWeHVYRzVsZUhCdmNuUWdZMjl1YzNRZ2QybDBhRk4wWVc1a1lYSmtRbUZ6WlVOemMwTnNZWE56SUQwZ1BFMGdaWGgwWlc1a2N5QkRiM0psUTI5dGNHOXVaVzUwVFc5a1pXdytYRzRvWEc0Z0lDQWdRMjl0Y0c5dVpXNTBPa052YlhCdmJtVnVkRlI1Y0dVOFRUNHNYRzRnSUNBZ1pHVm1ZWFZzZEVKaGMyVkRjM05EYkdGemN6cHpkSEpwYm1kY2JpazZVbVZoWTNRdVEyOXRjRzl1Wlc1MFZIbHdaVHhOUGlBZ1BUNGdlMXh1SUNBZ0lISmxkSFZ5YmlBb2NISnZjSE02VFNrZ1BUNGdlMXh1WEc0Z0lDQWdJQ0FnSUdOdmJuTjBJR0poYzJWRGMzTkRiR0Z6Y3lBOUlIQnliM0J6TG1KaGMyVkRjM05EYkdGemN6dGNiaUFnSUNBZ0lDQWdZMjl1YzNRZ2RHOUNaVlZ6WldSRGMzTkRiR0Z6Y3lBOUlHSmhjMlZEYzNORGJHRnpjeUFtSmlCaVlYTmxRM056UTJ4aGMzTXVkSEpwYlNncExteGxibWQwYUNBK0lEQWdQeUJpWVhObFEzTnpRMnhoYzNNZ09pQmtaV1poZFd4MFFtRnpaVU56YzBOc1lYTnpPMXh1WEc0Z0lDQWdJQ0FnSUdOdmJuTjBJRzFsY21kbFpGQnliM0J6T2lCTlBTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNBdUxpNXdjbTl3Y3l4Y2JpQWdJQ0FnSUNBZ0lDQWdJR0poYzJWRGMzTkRiR0Z6Y3pvZ2RHOUNaVlZ6WldSRGMzTkRiR0Z6YzF4dUlDQWdJQ0FnSUNCOU8xeHVYRzRnSUNBZ0lDQWdJSEpsZEhWeWJpQThRMjl0Y0c5dVpXNTBJSHN1TGk1dFpYSm5aV1JRY205d2MzMGdMejQ3WEc0Z0lDQWdmVnh1ZlR0Y2JseHVaWGh3YjNKMElHTnZibk4wSUhkcGRHaERiMjVrYVhScGIyNWhiRkJzWVdObFNHOXNaR1Z5SUQwZ1BFMGdaWGgwWlc1a2N5QkRiM0psUTI5dGNHOXVaVzUwVFc5a1pXdytYRzRnSUNBZ0lDQWdJQ0FnSUNBb1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ1EyOXRjRzl1Wlc1ME9rTnZiWEJ2Ym1WdWRGUjVjR1U4VFQ0c0lGeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lHbHpSVzF3ZEhrNktIQnliM0J6T2swcElEMCtJR0p2YjJ4bFlXNHNYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdZMjl0Y0c5dVpXNTBWR2wwYkdVL09uTjBjbWx1Wnl3Z1pXMXdkSGxVWlhoMFB6cHpkSEpwYm1kY2JpQWdJQ0FnSUNBZ0lDQWdJQ2s2VW1WaFkzUXVRMjl0Y0c5dVpXNTBWSGx3WlR4TlBpQWdQVDRnZTF4dUlDQWdJSEpsZEhWeWJpQW9jSEp2Y0hNNlRTa2dQVDRnZTF4dVhHNGdJQ0FnSUNBZ0lHTnZibk4wSUdselJXMXdkSGxTWlhOMWJIUTZZbTl2YkdWaGJpQTlJR2x6Ulcxd2RIa29jSEp2Y0hNcE8xeHVJQ0FnSUNBZ0lDQmpiMjV6ZENCN2FHbGtaVkJzWVdObFNHOXNaR1Z5SUQwZ1ptRnNjMlVzSUdselNXNUZaR2wwYjNJZ1BTQm1ZV3h6WlgwZ1BTQndjbTl3Y3p0Y2JseHVJQ0FnSUNBZ0lDQnlaWFIxY200Z0tGeHVJQ0FnSUNBZ0lDQWdJQ0FnUEQ1Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCN0lDRnBjMFZ0Y0hSNVVtVnpkV3gwSUNZbVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ1BFTnZiWEJ2Ym1WdWRDQjdMaTR1Y0hKdmNITjlJQzgrWEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnZlZ4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdLR2x6Ulcxd2RIbFNaWE4xYkhRZ0ppWWdhWE5KYmtWa2FYUnZjaUFtSmlBaGFHbGtaVkJzWVdObFNHOXNaR1Z5S1NBbUpseHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0E4UldScGRHOXlVR3hoWTJWSWIyeGtaWEpjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJR1Z0Y0hSNVZHVjRkRUZ3Y0dWdVpEMTdaVzF3ZEhsVVpYaDBmVnh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdZMjl0Y0c5dVpXNTBWR2wwYkdVOWUyTnZiWEJ2Ym1WdWRGUnBkR3hsZlZ4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQXZQbHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJSDFjYmlBZ0lDQWdJQ0FnSUNBZ0lEd3ZQbHh1SUNBZ0lDQWdJQ0FwTzF4dUlDQWdJSDFjYm4wN0lsMTkiLCIvKlxuICogIENvcHlyaWdodCAyMDIwIEFkb2JlXG4gKlxuICogIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiAgeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICAgICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqICBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiAgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiAgU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuY29uc3QgREVGQVVMVF9FTVBUWV9URVhUX0xBQkVMID0gJ1BsZWFzZSBjb25maWd1cmUgdGhlIGNvbXBvbmVudCc7XG5leHBvcnQgY29uc3QgRWRpdG9yUGxhY2VIb2xkZXIgPSAocHJvcHMpID0+IHtcbiAgICBjb25zdCBwYXJ0MSA9IChwcm9wcy5jb21wb25lbnRUaXRsZSAhPSBudWxsICYmIHByb3BzLmNvbXBvbmVudFRpdGxlLmxlbmd0aCA+IDApID8gcHJvcHMuY29tcG9uZW50VGl0bGUgKyAnIC0gJyA6ICcnO1xuICAgIGNvbnN0IHBhcnQyID0gKHByb3BzLmVtcHR5VGV4dEFwcGVuZCAhPSBudWxsKSA/IHByb3BzLmVtcHR5VGV4dEFwcGVuZCA6IERFRkFVTFRfRU1QVFlfVEVYVF9MQUJFTDtcbiAgICBjb25zdCBlbXB0eVRleHQgPSBwYXJ0MSArIHBhcnQyO1xuICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzTmFtZTogJ2NxLXBsYWNlaG9sZGVyJyArIChwcm9wcy5jbGFzc0FwcGVuZCAhPSBudWxsID8gJyAnICsgcHJvcHMuY2xhc3NBcHBlbmQgOiAnJykgfSwgZW1wdHlUZXh0KSk7XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pY0d4aFkyVm9iMnhrWlhJdWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUlpd2ljMjkxY21ObGN5STZXeUp3YkdGalpXaHZiR1JsY2k1MGMzZ2lYU3dpYm1GdFpYTWlPbHRkTENKdFlYQndhVzVuY3lJNklrRkJRVUU3T3pzN096czdPenM3T3pzN08wZEJZMGM3UVVGRFNDeFBRVUZQTEV0QlFXdENMRTFCUVUwc1QwRkJUeXhEUVVGRE8wRkJUM1pETEUxQlFVMHNkMEpCUVhkQ0xFZEJRVWNzWjBOQlFXZERMRU5CUVVNN1FVRkZiRVVzVFVGQlRTeERRVUZETEUxQlFVMHNhVUpCUVdsQ0xFZEJRVWNzUTBGQlF5eExRVUZ6UWl4RlFVRkZMRVZCUVVVN1NVRkZlRVFzVFVGQlRTeExRVUZMTEVkQlFWY3NRMEZCUXl4TFFVRkxMRU5CUVVNc1kwRkJZeXhKUVVGSkxFbEJRVWtzU1VGQlNTeExRVUZMTEVOQlFVTXNZMEZCWXl4RFFVRkRMRTFCUVUwc1IwRkJSeXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVVXNTMEZCU3l4RFFVRkRMR05CUVdNc1IwRkJTU3hMUVVGTExFTkJRVU1zUTBGQlF5eERRVUZETEVWQlFVVXNRMEZCUXp0SlFVTTVTQ3hOUVVGTkxFdEJRVXNzUjBGQlZ5eERRVUZETEV0QlFVc3NRMEZCUXl4bFFVRmxMRWxCUVVrc1NVRkJTU3hEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZGTEV0QlFVc3NRMEZCUXl4bFFVRmxMRU5CUVVNc1EwRkJReXhEUVVGRExIZENRVUYzUWl4RFFVRkRPMGxCUXpGSExFMUJRVTBzVTBGQlV5eEhRVUZITEV0QlFVc3NSMEZCUnl4TFFVRkxMRU5CUVVNN1NVRkZhRU1zVDBGQlR5eERRVU5JTERaQ1FVTkpMRk5CUVZNc1JVRkJSU3huUWtGQlowSXNSMEZCUnl4RFFVRkRMRXRCUVVzc1EwRkJReXhYUVVGWExFbEJRVWtzU1VGQlNTeERRVUZCTEVOQlFVTXNRMEZCUXl4SFFVRkhMRWRCUVVjc1MwRkJTeXhEUVVGRExGZEJRVmNzUTBGQlF5eERRVUZETEVOQlFVTXNSVUZCUlN4RFFVRkRMRWxCUTNSR0xGTkJRVk1zUTBGRFVpeERRVU5VTEVOQlFVRTdRVUZEVEN4RFFVRkRMRU5CUVVNaUxDSnpiM1Z5WTJWelEyOXVkR1Z1ZENJNld5SXZLbHh1SUNvZ0lFTnZjSGx5YVdkb2RDQXlNREl3SUVGa2IySmxYRzRnS2x4dUlDb2dJRXhwWTJWdWMyVmtJSFZ1WkdWeUlIUm9aU0JCY0dGamFHVWdUR2xqWlc1elpTd2dWbVZ5YzJsdmJpQXlMakFnS0hSb1pTQmNJa3hwWTJWdWMyVmNJaWs3WEc0Z0tpQWdlVzkxSUcxaGVTQnViM1FnZFhObElIUm9hWE1nWm1sc1pTQmxlR05sY0hRZ2FXNGdZMjl0Y0d4cFlXNWpaU0IzYVhSb0lIUm9aU0JNYVdObGJuTmxMbHh1SUNvZ0lGbHZkU0J0WVhrZ2IySjBZV2x1SUdFZ1kyOXdlU0J2WmlCMGFHVWdUR2xqWlc1elpTQmhkRnh1SUNwY2JpQXFJQ0FnSUNBZ2FIUjBjRG92TDNkM2R5NWhjR0ZqYUdVdWIzSm5MMnhwWTJWdWMyVnpMMHhKUTBWT1UwVXRNaTR3WEc0Z0tseHVJQ29nSUZWdWJHVnpjeUJ5WlhGMWFYSmxaQ0JpZVNCaGNIQnNhV05oWW14bElHeGhkeUJ2Y2lCaFozSmxaV1FnZEc4Z2FXNGdkM0pwZEdsdVp5d2djMjltZEhkaGNtVmNiaUFxSUNCa2FYTjBjbWxpZFhSbFpDQjFibVJsY2lCMGFHVWdUR2xqWlc1elpTQnBjeUJrYVhOMGNtbGlkWFJsWkNCdmJpQmhiaUJjSWtGVElFbFRYQ0lnUWtGVFNWTXNYRzRnS2lBZ1YwbFVTRTlWVkNCWFFWSlNRVTVVU1VWVElFOVNJRU5QVGtSSlZFbFBUbE1nVDBZZ1FVNVpJRXRKVGtRc0lHVnBkR2hsY2lCbGVIQnlaWE56SUc5eUlHbHRjR3hwWldRdVhHNGdLaUFnVTJWbElIUm9aU0JNYVdObGJuTmxJR1p2Y2lCMGFHVWdjM0JsWTJsbWFXTWdiR0Z1WjNWaFoyVWdaMjkyWlhKdWFXNW5JSEJsY20xcGMzTnBiMjV6SUdGdVpGeHVJQ29nSUd4cGJXbDBZWFJwYjI1eklIVnVaR1Z5SUhSb1pTQk1hV05sYm5ObExseHVJQ292WEc1cGJYQnZjblFnVW1WaFkzUXNJSHREYjIxd2IyNWxiblI5SUdaeWIyMGdKM0psWVdOMEp6dGNibHh1Wlhod2IzSjBJR2x1ZEdWeVptRmpaU0JRYkdGalpVaHZiR1JsY2sxdlpHVnNJSHRjYmlBZ0lDQmpiMjF3YjI1bGJuUlVhWFJzWlQ4NklITjBjbWx1WjF4dUlDQWdJR05zWVhOelFYQndaVzVrUHpvZ2MzUnlhVzVuWEc0Z0lDQWdaVzF3ZEhsVVpYaDBRWEJ3Wlc1a1B6b2djM1J5YVc1blhHNTlYRzVqYjI1emRDQkVSVVpCVlV4VVgwVk5VRlJaWDFSRldGUmZURUZDUlV3Z1BTQW5VR3hsWVhObElHTnZibVpwWjNWeVpTQjBhR1VnWTI5dGNHOXVaVzUwSnp0Y2JseHVaWGh3YjNKMElHTnZibk4wSUVWa2FYUnZjbEJzWVdObFNHOXNaR1Z5SUQwZ0tIQnliM0J6T2xCc1lXTmxTRzlzWkdWeVRXOWtaV3dwSUQwK0lIdGNibHh1SUNBZ0lHTnZibk4wSUhCaGNuUXhPaUJ6ZEhKcGJtY2dQU0FvY0hKdmNITXVZMjl0Y0c5dVpXNTBWR2wwYkdVZ0lUMGdiblZzYkNBbUppQndjbTl3Y3k1amIyMXdiMjVsYm5SVWFYUnNaUzVzWlc1bmRHZ2dQaUF3S1NBL0lDQndjbTl3Y3k1amIyMXdiMjVsYm5SVWFYUnNaU0FySUNBbklDMGdKeUE2SUNjbk8xeHVJQ0FnSUdOdmJuTjBJSEJoY25ReU9pQnpkSEpwYm1jZ1BTQW9jSEp2Y0hNdVpXMXdkSGxVWlhoMFFYQndaVzVrSUNFOUlHNTFiR3dwSUQ4Z0lIQnliM0J6TG1WdGNIUjVWR1Y0ZEVGd2NHVnVaQ0E2SUVSRlJrRlZURlJmUlUxUVZGbGZWRVZZVkY5TVFVSkZURHRjYmlBZ0lDQmpiMjV6ZENCbGJYQjBlVlJsZUhRZ1BTQndZWEowTVNBcklIQmhjblF5TzF4dVhHNGdJQ0FnY21WMGRYSnVJQ2hjYmlBZ0lDQWdJQ0FnUEdScGRseHVJQ0FnSUNBZ0lDQWdJQ0FnWTJ4aGMzTk9ZVzFsUFhzblkzRXRjR3hoWTJWb2IyeGtaWEluSUNzZ0tIQnliM0J6TG1Oc1lYTnpRWEJ3Wlc1a0lDRTlJRzUxYkd3L0lDY2dKeUFySUhCeWIzQnpMbU5zWVhOelFYQndaVzVrSURvZ0p5Y3BmVDVjYmlBZ0lDQWdJQ0FnSUNBZ0lIdGxiWEIwZVZSbGVIUjlYRzRnSUNBZ0lDQWdJRHd2WkdsMlBseHVJQ0FnSUNsY2JuMDdJbDE5IiwiLypcbiAqICBDb3B5cmlnaHQgMjAyMCBBZG9iZVxuICpcbiAqICBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqICBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgICAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqICBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiAgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqICBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHdpdGhDb25kaXRpb25hbFBsYWNlSG9sZGVyLCB3aXRoU3RhbmRhcmRCYXNlQ3NzQ2xhc3MgfSBmcm9tIFwiLi4vLi4vLi4vQWJzdHJhY3RDb3JlQ29tcG9uZW50XCI7XG5pbXBvcnQgeyBkZXRlcm1pbmVJc0FjdGl2ZSwgTmF2aWdhdGlvblYxR3JvdXAgfSBmcm9tIFwiLi4vLi4vbmF2aWdhdGlvbi92MS9OYXZpZ2F0aW9uVjFcIjtcbmltcG9ydCB7IFJvdXRlZExpbmsgfSBmcm9tIFwiLi4vLi4vLi4vcm91dGluZy9Sb3V0ZWRMaW5rXCI7XG5pbXBvcnQgeyBMYW5ndWFnZU5hdmlnYXRpb25WMUlzRW1wdHlGbiB9IGZyb20gXCIuL0xhbmd1YWdlTmF2aWdhdGlvblYxSXNFbXB0eUZuXCI7XG5leHBvcnQgY29uc3QgTGFuZ3VhZ2VOYXZpZ2F0aW9uVjFMaW5rID0gKHByb3BzKSA9PiB7XG4gICAgaWYgKHByb3BzLmxldmVsID4gMCkge1xuICAgICAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoUm91dGVkTGluaywgeyBpc1JvdXRlZDogcHJvcHMucm91dGVkLCBjbGFzc05hbWU6IHByb3BzLmJhc2VDc3NDbGFzcyArICdfX2l0ZW0tbGluaycsIHRvOiBwcm9wcy51cmwsIGhyZWZMYW5nOiBwcm9wcy5sYW5ndWFnZSwgbGFuZzogcHJvcHMubGFuZ3VhZ2UsIHJlbDogXCJhbHRlcm5hdGVcIiwgdGl0bGU6IHByb3BzLnRpdGxlIH0sIHByb3BzLnRpdGxlKSk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIsIHsgY2xhc3NOYW1lOiBwcm9wcy5iYXNlQ3NzQ2xhc3MgKyAnX19pdGVtLXRpdGxlJywgbGFuZzogcHJvcHMubGFuZ3VhZ2UgfSwgcHJvcHMudGl0bGUpKTtcbiAgICB9XG59O1xuZXhwb3J0IGNvbnN0IExhbmd1YWdlTmF2aWdhdGlvblYxR3JvdXAgPSAoaXRlbSkgPT4ge1xuICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChSZWFjdC5GcmFnbWVudCwgbnVsbCwgISFpdGVtLmNoaWxkcmVuICYmIGl0ZW0uY2hpbGRyZW4ubGVuZ3RoID4gMCAmJiAoUmVhY3QuY3JlYXRlRWxlbWVudChcInVsXCIsIHsgY2xhc3NOYW1lOiBpdGVtLmJhc2VDc3NDbGFzcyArICdfX2dyb3VwJyB9LCBpdGVtLmNoaWxkcmVuLm1hcCgoaXRlbSwgaW5kZXgpID0+IFJlYWN0LmNyZWF0ZUVsZW1lbnQoTGFuZ3VhZ2VOYXZpZ2F0aW9uVjFJdGVtLCBPYmplY3QuYXNzaWduKHt9LCBpdGVtLCB7IGtleTogaXRlbS5iYXNlQ3NzQ2xhc3MgKyAnX19pdGVtLScgKyBpbmRleCwgaW5kZXg6IGluZGV4IH0pKSkpKSkpO1xufTtcbmV4cG9ydCBjb25zdCBMYW5ndWFnZU5hdmlnYXRpb25WMUl0ZW0gPSAoaXRlbSkgPT4ge1xuICAgIGNvbnN0IGlzQWN0aXZlID0gZGV0ZXJtaW5lSXNBY3RpdmUoaXRlbSk7XG4gICAgY29uc3QgY3NzQ2xhc3MgPSBpdGVtLmJhc2VDc3NDbGFzcyArICdfX2l0ZW0gJyArXG4gICAgICAgIGl0ZW0uYmFzZUNzc0NsYXNzICsgJ19faXRlbS0tbGV2ZWwtJyArIGl0ZW0ubGV2ZWwgKyAnICcgK1xuICAgICAgICBgJHtpdGVtLmJhc2VDc3NDbGFzc31fX2l0ZW0tLWNvdW50cnljb2RlLSR7aXRlbS5jb3VudHJ5fSAke2l0ZW0uYmFzZUNzc0NsYXNzfV9faXRlbS0tbGFuZ2NvZGUtJHtpdGVtLmxhbmd1YWdlfWAgK1xuICAgICAgICArKGlzQWN0aXZlID8gJyAnICsgaXRlbS5iYXNlQ3NzQ2xhc3MgKyAnX19pdGVtLS1hY3RpdmUnIDogJycpO1xuICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChcImxpXCIsIHsgY2xhc3NOYW1lOiBjc3NDbGFzcyB9LFxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KExhbmd1YWdlTmF2aWdhdGlvblYxTGluaywgT2JqZWN0LmFzc2lnbih7fSwgaXRlbSkpLFxuICAgICAgICAhIWl0ZW0uY2hpbGRyZW4gJiYgaXRlbS5jaGlsZHJlbi5sZW5ndGggPiAwICYmIFJlYWN0LmNyZWF0ZUVsZW1lbnQoTmF2aWdhdGlvblYxR3JvdXAsIE9iamVjdC5hc3NpZ24oe30sIGl0ZW0pKSkpO1xufTtcbmNvbnN0IExhbmd1YWdlTmF2aWdhdGlvblYxSW1wbCA9IChwcm9wcykgPT4ge1xuICAgIGNvbnN0IHNlbGZDbG9uZSA9IHtcbiAgICAgICAgYWN0aXZlOiBmYWxzZSxcbiAgICAgICAgbGFzdE1vZGlmaWVkOiAwLFxuICAgICAgICBsZXZlbDogMCxcbiAgICAgICAgcGF0aDogXCJcIixcbiAgICAgICAgdGl0bGU6IFwiXCIsXG4gICAgICAgIHVybDogXCJcIixcbiAgICAgICAgbGFuZ3VhZ2U6IFwiXCIsXG4gICAgICAgIGNvdW50cnk6IFwiXCIsXG4gICAgICAgIGxvY2FsZTogXCJcIixcbiAgICAgICAgY2hpbGRyZW46IHByb3BzLml0ZW1zXG4gICAgfTtcbiAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJuYXZcIiwgeyBjbGFzc05hbWU6IHByb3BzLmJhc2VDc3NDbGFzcywgcm9sZTogXCJuYXZpZ2F0aW9uXCIsIGl0ZW1TY29wZTogdHJ1ZSwgaXRlbVR5cGU6IFwiaHR0cDovL3NjaGVtYS5vcmcvU2l0ZU5hdmlnYXRpb25FbGVtZW50XCIsIFwiYXJpYS1sYWJlbFwiOiBwcm9wcy5hY2Nlc3NpYmlsaXR5TGFiZWwgfSxcbiAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChMYW5ndWFnZU5hdmlnYXRpb25WMUdyb3VwLCBPYmplY3QuYXNzaWduKHt9LCBzZWxmQ2xvbmUpKSkpO1xufTtcbmNvbnN0IExhbmd1YWdlTmF2aWdhdGlvbiA9IChwcm9wcykgPT4ge1xuICAgIGNvbnN0IFdyYXBwZWQgPSB3aXRoQ29uZGl0aW9uYWxQbGFjZUhvbGRlcih3aXRoU3RhbmRhcmRCYXNlQ3NzQ2xhc3MoTGFuZ3VhZ2VOYXZpZ2F0aW9uVjFJbXBsLCBcImNtcC1sYW5ndWFnZW5hdmlnYXRpb25cIiksIExhbmd1YWdlTmF2aWdhdGlvblYxSXNFbXB0eUZuLCBcIkxhbmd1YWdlTmF2aWdhdGlvbiBWMVwiKTtcbiAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChXcmFwcGVkLCBPYmplY3QuYXNzaWduKHt9LCBwcm9wcykpO1xufTtcbmV4cG9ydCBkZWZhdWx0IExhbmd1YWdlTmF2aWdhdGlvbjtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaVRHRnVaM1ZoWjJWT1lYWnBaMkYwYVc5dVZqRXVhbk1pTENKemIzVnlZMlZTYjI5MElqb2lJaXdpYzI5MWNtTmxjeUk2V3lKTVlXNW5kV0ZuWlU1aGRtbG5ZWFJwYjI1V01TNTBjM2dpWFN3aWJtRnRaWE1pT2x0ZExDSnRZWEJ3YVc1bmN5STZJa0ZCUVVFN096czdPenM3T3pzN096czdPMGRCWTBjN1FVRkZTQ3hQUVVGUExFdEJRVXNzVFVGQlRTeFBRVUZQTEVOQlFVTTdRVUZETVVJc1QwRkJUeXhGUVVGRExEQkNRVUV3UWl4RlFVRkZMSGRDUVVGM1FpeEZRVUZETEUxQlFVMHNaME5CUVdkRExFTkJRVU03UVVGRGNFY3NUMEZCVHl4RlFVRkRMR2xDUVVGcFFpeEZRVUZGTEdsQ1FVRnBRaXhGUVVGelF5eE5RVUZOTEd0RFFVRnJReXhEUVVGRE8wRkJRek5JTEU5QlFVOHNSVUZCUXl4VlFVRlZMRVZCUVVNc1RVRkJUU3cyUWtGQk5rSXNRMEZCUXp0QlFVTjJSQ3hQUVVGUExFVkJRVU1zTmtKQlFUWkNMRVZCUVVNc1RVRkJUU3hwUTBGQmFVTXNRMEZCUXp0QlFYRkNPVVVzVFVGQlRTeERRVUZETEUxQlFVMHNkMEpCUVhkQ0xFZEJRVWNzUTBGQlF5eExRVUU0UWl4RlFVRkZMRVZCUVVVN1NVRkRka1VzU1VGQlJ5eExRVUZMTEVOQlFVTXNTMEZCU3l4SFFVRkhMRU5CUVVNc1JVRkJRenRSUVVObUxFOUJRVThzUTBGRFNDeHZRa0ZCUXl4VlFVRlZMRWxCUTFBc1VVRkJVU3hGUVVGRkxFdEJRVXNzUTBGQlF5eE5RVUZOTEVWQlEzUkNMRk5CUVZNc1JVRkJSU3hMUVVGTExFTkJRVU1zV1VGQldTeEhRVUZITEdGQlFXRXNSVUZETjBNc1JVRkJSU3hGUVVGRkxFdEJRVXNzUTBGQlF5eEhRVUZITEVWQlEySXNVVUZCVVN4RlFVRkZMRXRCUVVzc1EwRkJReXhSUVVGUkxFVkJRM2hDTEVsQlFVa3NSVUZCUlN4TFFVRkxMRU5CUVVNc1VVRkJVU3hGUVVOd1FpeEhRVUZITEVWQlFVTXNWMEZCVnl4RlFVTm1MRXRCUVVzc1JVRkJSU3hMUVVGTExFTkJRVU1zUzBGQlN5eEpRVUZITEV0QlFVc3NRMEZCUXl4TFFVRkxMRU5CUVdNc1EwRkRja1FzUTBGQlFUdExRVU5LTzFOQlFVazdVVUZEUkN4UFFVRlBMRU5CUTBnc09FSkJRVTBzVTBGQlV5eEZRVUZITEV0QlFVc3NRMEZCUXl4WlFVRlpMRWRCUVVjc1kwRkJZeXhGUVVGRkxFbEJRVWtzUlVGQlJTeExRVUZMTEVOQlFVTXNVVUZCVVN4SlFVRkhMRXRCUVVzc1EwRkJReXhMUVVGTExFTkJRVkVzUTBGRGNFY3NRMEZCUVR0TFFVTktPMEZCUTB3c1EwRkJReXhEUVVGRE8wRkJSVVlzVFVGQlRTeERRVUZETEUxQlFVMHNlVUpCUVhsQ0xFZEJRVWNzUTBGQlF5eEpRVUUyUWl4RlFVRkZMRVZCUVVVN1NVRkRka1VzVDBGQlR5eERRVU5JTERCRFFVTkxMRU5CUVVNc1EwRkJReXhKUVVGSkxFTkJRVU1zVVVGQlVTeEpRVUZKTEVsQlFVa3NRMEZCUXl4UlFVRlJMRU5CUVVNc1RVRkJUU3hIUVVGSExFTkJRVU1zU1VGQlN5eERRVU0zUXl3MFFrRkJTU3hUUVVGVExFVkJRVVVzU1VGQlNTeERRVUZETEZsQlFWa3NSMEZCUnl4VFFVRlRMRWxCUTNaRExFbEJRVWtzUTBGQlF5eFJRVUZSTEVOQlFVTXNSMEZCUnl4RFFVTmtMRU5CUVVNc1NVRkJTU3hGUVVGRExFdEJRVXNzUlVGQlJTeEZRVUZGTEVOQlFVTXNiMEpCUVVNc2QwSkJRWGRDTEc5Q1FVRkxMRWxCUVVrc1NVRkJSU3hIUVVGSExFVkJRVVVzU1VGQlNTeERRVUZETEZsQlFWa3NSMEZCUnl4VFFVRlRMRWRCUVVjc1MwRkJTeXhGUVVGRkxFdEJRVXNzUlVGQlJTeExRVUZMTEVsQlFVY3NRMEZEYkVnc1EwRkRRU3hEUVVOU0xFTkJRMFlzUTBGRFRpeERRVUZCTzBGQlEwd3NRMEZCUXl4RFFVRkRPMEZCUlVZc1RVRkJUU3hEUVVGRExFMUJRVTBzZDBKQlFYZENMRWRCUVVjc1EwRkJReXhKUVVFMlFpeEZRVUZGTEVWQlFVVTdTVUZGZEVVc1RVRkJUU3hSUVVGUkxFZEJRVWNzYVVKQlFXbENMRU5CUVVNc1NVRkJTU3hEUVVGRExFTkJRVU03U1VGRGVrTXNUVUZCVFN4UlFVRlJMRWRCUVVjc1NVRkJTU3hEUVVGRExGbEJRVmtzUjBGQlJ5eFRRVUZUTzFGQlF6bENMRWxCUVVrc1EwRkJReXhaUVVGWkxFZEJRVWNzWjBKQlFXZENMRWRCUVVjc1NVRkJTU3hEUVVGRExFdEJRVXNzUjBGQlJ5eEhRVUZITzFGQlEzWkVMRWRCUVVjc1NVRkJTU3hEUVVGRExGbEJRVmtzZFVKQlFYVkNMRWxCUVVrc1EwRkJReXhQUVVGUExFbEJRVWtzU1VGQlNTeERRVUZETEZsQlFWa3NiMEpCUVc5Q0xFbEJRVWtzUTBGQlF5eFJRVUZSTEVWQlFVVTdVVUZET1Vjc1EwRkJSU3hEUVVGRExGRkJRVkVzUTBGQlF5eERRVUZETEVOQlFVTXNSMEZCUnl4SFFVRkhMRWxCUVVrc1EwRkJReXhaUVVGWkxFZEJRVWNzWjBKQlFXZENMRU5CUVVNc1EwRkJReXhEUVVGRExFVkJRVVVzUTBGQlF5eERRVUZETzBsQlEyaEdMRTlCUVU4c1EwRkRTQ3cwUWtGQlNTeFRRVUZUTEVWQlFVVXNVVUZCVVR0UlFVTm1MRzlDUVVGRExIZENRVUYzUWl4dlFrRkJTeXhKUVVGSkxFVkJRVWM3VVVGRmFrTXNRMEZCUXl4RFFVRkRMRWxCUVVrc1EwRkJReXhSUVVGUkxFbEJRVWtzU1VGQlNTeERRVUZETEZGQlFWRXNRMEZCUXl4TlFVRk5MRWRCUVVjc1EwRkJReXhKUVVGSkxHOUNRVUZETEdsQ1FVRnBRaXh2UWtGQlN5eEpRVUZKTEVWQlFVY3NRMEZGY0VZc1EwRkRVaXhEUVVGQk8wRkJSVXdzUTBGQlF5eERRVUZETzBGQlJVWXNUVUZCVFN4M1FrRkJkMElzUjBGQlJ5eERRVUZETEV0QlFTdENMRVZCUVVVc1JVRkJSVHRKUVVOcVJTeE5RVUZOTEZOQlFWTXNSMEZCTkVJN1VVRkRka01zVFVGQlRTeEZRVUZGTEV0QlFVczdVVUZEWWl4WlFVRlpMRVZCUVVVc1EwRkJRenRSUVVObUxFdEJRVXNzUlVGQlJTeERRVUZETzFGQlExSXNTVUZCU1N4RlFVRkZMRVZCUVVVN1VVRkRVaXhMUVVGTExFVkJRVVVzUlVGQlJUdFJRVU5VTEVkQlFVY3NSVUZCUlN4RlFVRkZPMUZCUTFBc1VVRkJVU3hGUVVGRkxFVkJRVVU3VVVGRFdpeFBRVUZQTEVWQlFVVXNSVUZCUlR0UlFVTllMRTFCUVUwc1JVRkJSU3hGUVVGRk8xRkJRMVlzVVVGQlVTeEZRVUZGTEV0QlFVc3NRMEZCUXl4TFFVRkxPMHRCUTNoQ0xFTkJRVU03U1VGRlJpeFBRVUZQTEVOQlEwZ3NOa0pCUVVzc1UwRkJVeXhGUVVGRkxFdEJRVXNzUTBGQlF5eFpRVUZaTEVWQlF6ZENMRWxCUVVrc1JVRkJReXhaUVVGWkxFVkJRMnBDTEZOQlFWTXNVVUZCUXl4UlFVRlJMRVZCUVVNc2VVTkJRWGxETEdkQ1FVTm9SQ3hMUVVGTExFTkJRVU1zYTBKQlFXdENPMUZCUTNKRExHOUNRVUZETEhsQ1FVRjVRaXh2UWtGQlN5eFRRVUZUTEVWQlFVY3NRMEZEZWtNc1EwRkRWQ3hEUVVGQk8wRkJRMHdzUTBGQlF5eERRVUZETzBGQlJVWXNUVUZCVFN4clFrRkJhMElzUjBGQlJ5eERRVUZETEV0QlFTdENMRVZCUVVVc1JVRkJSVHRKUVVNelJDeE5RVUZOTEU5QlFVOHNSMEZCUnl3d1FrRkJNRUlzUTBGQlF5eDNRa0ZCZDBJc1EwRkJReXgzUWtGQmQwSXNSVUZCUlN4M1FrRkJkMElzUTBGQlF5eEZRVUZGTERaQ1FVRTJRaXhGUVVGRkxIVkNRVUYxUWl4RFFVRkRMRU5CUVVFN1NVRkRhRXdzVDBGQlR5eHZRa0ZCUXl4UFFVRlBMRzlDUVVGTExFdEJRVXNzUlVGQlJ5eERRVUZCTzBGQlEyaERMRU5CUVVNc1EwRkJRenRCUVVWR0xHVkJRV1VzYTBKQlFXdENMRU5CUVVNaUxDSnpiM1Z5WTJWelEyOXVkR1Z1ZENJNld5SXZLbHh1SUNvZ0lFTnZjSGx5YVdkb2RDQXlNREl3SUVGa2IySmxYRzRnS2x4dUlDb2dJRXhwWTJWdWMyVmtJSFZ1WkdWeUlIUm9aU0JCY0dGamFHVWdUR2xqWlc1elpTd2dWbVZ5YzJsdmJpQXlMakFnS0hSb1pTQmNJa3hwWTJWdWMyVmNJaWs3WEc0Z0tpQWdlVzkxSUcxaGVTQnViM1FnZFhObElIUm9hWE1nWm1sc1pTQmxlR05sY0hRZ2FXNGdZMjl0Y0d4cFlXNWpaU0IzYVhSb0lIUm9aU0JNYVdObGJuTmxMbHh1SUNvZ0lGbHZkU0J0WVhrZ2IySjBZV2x1SUdFZ1kyOXdlU0J2WmlCMGFHVWdUR2xqWlc1elpTQmhkRnh1SUNwY2JpQXFJQ0FnSUNBZ2FIUjBjRG92TDNkM2R5NWhjR0ZqYUdVdWIzSm5MMnhwWTJWdWMyVnpMMHhKUTBWT1UwVXRNaTR3WEc0Z0tseHVJQ29nSUZWdWJHVnpjeUJ5WlhGMWFYSmxaQ0JpZVNCaGNIQnNhV05oWW14bElHeGhkeUJ2Y2lCaFozSmxaV1FnZEc4Z2FXNGdkM0pwZEdsdVp5d2djMjltZEhkaGNtVmNiaUFxSUNCa2FYTjBjbWxpZFhSbFpDQjFibVJsY2lCMGFHVWdUR2xqWlc1elpTQnBjeUJrYVhOMGNtbGlkWFJsWkNCdmJpQmhiaUJjSWtGVElFbFRYQ0lnUWtGVFNWTXNYRzRnS2lBZ1YwbFVTRTlWVkNCWFFWSlNRVTVVU1VWVElFOVNJRU5QVGtSSlZFbFBUbE1nVDBZZ1FVNVpJRXRKVGtRc0lHVnBkR2hsY2lCbGVIQnlaWE56SUc5eUlHbHRjR3hwWldRdVhHNGdLaUFnVTJWbElIUm9aU0JNYVdObGJuTmxJR1p2Y2lCMGFHVWdjM0JsWTJsbWFXTWdiR0Z1WjNWaFoyVWdaMjkyWlhKdWFXNW5JSEJsY20xcGMzTnBiMjV6SUdGdVpGeHVJQ29nSUd4cGJXbDBZWFJwYjI1eklIVnVaR1Z5SUhSb1pTQk1hV05sYm5ObExseHVJQ292WEc1Y2JtbHRjRzl5ZENCU1pXRmpkQ0JtY205dElDZHlaV0ZqZENjN1hHNXBiWEJ2Y25RZ2UzZHBkR2hEYjI1a2FYUnBiMjVoYkZCc1lXTmxTRzlzWkdWeUxDQjNhWFJvVTNSaGJtUmhjbVJDWVhObFEzTnpRMnhoYzNOOUlHWnliMjBnWENJdUxpOHVMaTh1TGk5QlluTjBjbUZqZEVOdmNtVkRiMjF3YjI1bGJuUmNJanRjYm1sdGNHOXlkQ0I3WkdWMFpYSnRhVzVsU1hOQlkzUnBkbVVzSUU1aGRtbG5ZWFJwYjI1V01VZHliM1Z3TENCT1lYWnBaMkYwYVc5dVZqRkpkR1Z0TENCT1lYWnBaMkYwYVc5dVZqRk5iMlJsYkgwZ1puSnZiU0JjSWk0dUx5NHVMMjVoZG1sbllYUnBiMjR2ZGpFdlRtRjJhV2RoZEdsdmJsWXhYQ0k3WEc1cGJYQnZjblFnZTFKdmRYUmxaRXhwYm10OUlHWnliMjBnWENJdUxpOHVMaTh1TGk5eWIzVjBhVzVuTDFKdmRYUmxaRXhwYm10Y0lqdGNibWx0Y0c5eWRDQjdUR0Z1WjNWaFoyVk9ZWFpwWjJGMGFXOXVWakZKYzBWdGNIUjVSbTU5SUdaeWIyMGdYQ0l1TDB4aGJtZDFZV2RsVG1GMmFXZGhkR2x2YmxZeFNYTkZiWEIwZVVadVhDSTdYRzVjYm1WNGNHOXlkQ0JwYm5SbGNtWmhZMlVnVEdGdVozVmhaMlZPWVhacFoyRjBhVzl1VmpGSmRHVnRJR1Y0ZEdWdVpITWdUbUYyYVdkaGRHbHZibFl4U1hSbGJTQjdYRzRnSUNBZ2JHVjJaV3c2SUc1MWJXSmxjaXhjYmlBZ0lDQmhZM1JwZG1VNklHSnZiMnhsWVc0c1hHNGdJQ0FnZEdsMGJHVTZJSE4wY21sdVp5eGNiaUFnSUNCMWNtdzZJSE4wY21sdVp5eGNiaUFnSUNCc1lYTjBUVzlrYVdacFpXUTZJRzUxYldKbGNpeGNiaUFnSUNCa1pYTmpjbWx3ZEdsdmJqODZJSE4wY21sdVp5eGNiaUFnSUNCd1lYUm9PaUJ6ZEhKcGJtY3NYRzRnSUNBZ2JHOWpZV3hsT2lCemRISnBibWNzWEc0Z0lDQWdZMjkxYm5SeWVUb2djM1J5YVc1bkxGeHVJQ0FnSUd4aGJtZDFZV2RsT2lCemRISnBibWNzWEc0Z0lDQWdZMmhwYkdSeVpXNC9PaUJNWVc1bmRXRm5aVTVoZG1sbllYUnBiMjVXTVVsMFpXMWJYVnh1ZlZ4dVhHNWxlSEJ2Y25RZ2FXNTBaWEptWVdObElFeGhibWQxWVdkbFRtRjJhV2RoZEdsdmJsWXhUVzlrWld3Z1pYaDBaVzVrY3lCT1lYWnBaMkYwYVc5dVZqRk5iMlJsYkh0Y2JpQWdJQ0JwZEdWdGN6cE1ZVzVuZFdGblpVNWhkbWxuWVhScGIyNVdNVWwwWlcxYlhWeHVJQ0FnSUdGalkyVnpjMmxpYVd4cGRIbE1ZV0psYkQ4NklITjBjbWx1WjF4dWZWeHVYRzVsZUhCdmNuUWdZMjl1YzNRZ1RHRnVaM1ZoWjJWT1lYWnBaMkYwYVc5dVZqRk1hVzVySUQwZ0tIQnliM0J6T2t4aGJtZDFZV2RsVG1GMmFXZGhkR2x2YmxZeFNYUmxiU2tnUFQ0Z2UxeHVJQ0FnSUdsbUtIQnliM0J6TG14bGRtVnNJRDRnTUNsN1hHNGdJQ0FnSUNBZ0lISmxkSFZ5YmlBb1hHNGdJQ0FnSUNBZ0lDQWdJQ0E4VW05MWRHVmtUR2x1YTF4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUdselVtOTFkR1ZrUFh0d2NtOXdjeTV5YjNWMFpXUjlYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdZMnhoYzNOT1lXMWxQWHR3Y205d2N5NWlZWE5sUTNOelEyeGhjM01nS3lBblgxOXBkR1Z0TFd4cGJtc25mVnh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJSFJ2UFh0d2NtOXdjeTUxY214OVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2FISmxaa3hoYm1jOWUzQnliM0J6TG14aGJtZDFZV2RsZlZ4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUd4aGJtYzllM0J5YjNCekxteGhibWQxWVdkbGZWeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lISmxiRDFjSW1Gc2RHVnlibUYwWlZ3aVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2RHbDBiR1U5ZTNCeWIzQnpMblJwZEd4bGZUNTdjSEp2Y0hNdWRHbDBiR1Y5UEM5U2IzVjBaV1JNYVc1clBseHVJQ0FnSUNBZ0lDQXBYRzRnSUNBZ2ZXVnNjMlY3WEc0Z0lDQWdJQ0FnSUhKbGRIVnliaUFvWEc0Z0lDQWdJQ0FnSUNBZ0lDQThjM0JoYmlCamJHRnpjMDVoYldVOWV5QndjbTl3Y3k1aVlYTmxRM056UTJ4aGMzTWdLeUFuWDE5cGRHVnRMWFJwZEd4bEozMGdiR0Z1WnoxN2NISnZjSE11YkdGdVozVmhaMlY5UG50d2NtOXdjeTUwYVhSc1pYMDhMM053WVc0K1hHNGdJQ0FnSUNBZ0lDbGNiaUFnSUNCOVhHNTlPMXh1WEc1bGVIQnZjblFnWTI5dWMzUWdUR0Z1WjNWaFoyVk9ZWFpwWjJGMGFXOXVWakZIY205MWNDQTlJQ2hwZEdWdE9reGhibWQxWVdkbFRtRjJhV2RoZEdsdmJsWXhTWFJsYlNrZ1BUNGdlMXh1SUNBZ0lISmxkSFZ5YmlBb1hHNGdJQ0FnSUNBZ0lEdytYRzRnSUNBZ0lDQWdJQ0FnSUNCN0lTRnBkR1Z0TG1Ob2FXeGtjbVZ1SUNZbUlHbDBaVzB1WTJocGJHUnlaVzR1YkdWdVozUm9JRDRnTUNBbUppQWdLRnh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJRHgxYkNCamJHRnpjMDVoYldVOWUybDBaVzB1WW1GelpVTnpjME5zWVhOeklDc2dKMTlmWjNKdmRYQW5mVDVjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2UybDBaVzB1WTJocGJHUnlaVzR1YldGd0tGeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0tHbDBaVzBzYVc1a1pYZ3BJRDArSUR4TVlXNW5kV0ZuWlU1aGRtbG5ZWFJwYjI1V01VbDBaVzBnZXk0dUxtbDBaVzE5SUd0bGVUMTdhWFJsYlM1aVlYTmxRM056UTJ4aGMzTWdLeUFuWDE5cGRHVnRMU2NnS3lCcGJtUmxlSDBnYVc1a1pYZzllMmx1WkdWNGZTOCtYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNsOVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ1BDOTFiRDVjYmlBZ0lDQWdJQ0FnSUNBZ0lDbDlYRzRnSUNBZ0lDQWdJRHd2UGx4dUlDQWdJQ2xjYm4wN1hHNWNibVY0Y0c5eWRDQmpiMjV6ZENCTVlXNW5kV0ZuWlU1aGRtbG5ZWFJwYjI1V01VbDBaVzBnUFNBb2FYUmxiVHBNWVc1bmRXRm5aVTVoZG1sbllYUnBiMjVXTVVsMFpXMHBJRDArSUh0Y2JseHVJQ0FnSUdOdmJuTjBJR2x6UVdOMGFYWmxJRDBnWkdWMFpYSnRhVzVsU1hOQlkzUnBkbVVvYVhSbGJTazdYRzRnSUNBZ1kyOXVjM1FnWTNOelEyeGhjM01nUFNCcGRHVnRMbUpoYzJWRGMzTkRiR0Z6Y3lBcklDZGZYMmwwWlcwZ0p5QXJYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUdsMFpXMHVZbUZ6WlVOemMwTnNZWE56SUNzZ0oxOWZhWFJsYlMwdGJHVjJaV3d0SnlBcklHbDBaVzB1YkdWMlpXd2dLeUFuSUNjZ0t5QmNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnWUNSN2FYUmxiUzVpWVhObFEzTnpRMnhoYzNOOVgxOXBkR1Z0TFMxamIzVnVkSEo1WTI5a1pTMGtlMmwwWlcwdVkyOTFiblJ5ZVgwZ0pIdHBkR1Z0TG1KaGMyVkRjM05EYkdGemMzMWZYMmwwWlcwdExXeGhibWRqYjJSbExTUjdhWFJsYlM1c1lXNW5kV0ZuWlgxZ0lDc2dYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBcklDaHBjMEZqZEdsMlpTQS9JQ2NnSnlBcklHbDBaVzB1WW1GelpVTnpjME5zWVhOeklDc2dKMTlmYVhSbGJTMHRZV04wYVhabEp5QTZJQ2NuS1R0Y2JpQWdJQ0J5WlhSMWNtNGdLRnh1SUNBZ0lDQWdJQ0E4YkdrZ1kyeGhjM05PWVcxbFBYdGpjM05EYkdGemMzMCtYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdQRXhoYm1kMVlXZGxUbUYyYVdkaGRHbHZibFl4VEdsdWF5QjdMaTR1YVhSbGJYMHZQbHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lTRnBkR1Z0TG1Ob2FXeGtjbVZ1SUNZbUlHbDBaVzB1WTJocGJHUnlaVzR1YkdWdVozUm9JRDRnTUNBbUppQThUbUYyYVdkaGRHbHZibFl4UjNKdmRYQWdleTR1TG1sMFpXMTlMejVjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0I5WEc0Z0lDQWdJQ0FnSUR3dmJHaytYRzRnSUNBZ0tWeHVYRzU5TzF4dVhHNWpiMjV6ZENCTVlXNW5kV0ZuWlU1aGRtbG5ZWFJwYjI1V01VbHRjR3dnUFNBb2NISnZjSE02VEdGdVozVmhaMlZPWVhacFoyRjBhVzl1VmpGTmIyUmxiQ2tnUFQ0Z2UxeHVJQ0FnSUdOdmJuTjBJSE5sYkdaRGJHOXVaVHBNWVc1bmRXRm5aVTVoZG1sbllYUnBiMjVXTVVsMFpXMGdQU0I3WEc0Z0lDQWdJQ0FnSUdGamRHbDJaVG9nWm1Gc2MyVXNYRzRnSUNBZ0lDQWdJR3hoYzNSTmIyUnBabWxsWkRvZ01DeGNiaUFnSUNBZ0lDQWdiR1YyWld3NklEQXNYRzRnSUNBZ0lDQWdJSEJoZEdnNklGd2lYQ0lzWEc0Z0lDQWdJQ0FnSUhScGRHeGxPaUJjSWx3aUxGeHVJQ0FnSUNBZ0lDQjFjbXc2SUZ3aVhDSXNYRzRnSUNBZ0lDQWdJR3hoYm1kMVlXZGxPaUJjSWx3aUxGeHVJQ0FnSUNBZ0lDQmpiM1Z1ZEhKNU9pQmNJbHdpTEZ4dUlDQWdJQ0FnSUNCc2IyTmhiR1U2SUZ3aVhDSXNYRzRnSUNBZ0lDQWdJR05vYVd4a2NtVnVPaUJ3Y205d2N5NXBkR1Z0YzF4dUlDQWdJSDA3WEc1Y2JpQWdJQ0J5WlhSMWNtNGdLRnh1SUNBZ0lDQWdJQ0E4Ym1GMklHTnNZWE56VG1GdFpUMTdjSEp2Y0hNdVltRnpaVU56YzBOc1lYTnpmVnh1SUNBZ0lDQWdJQ0FnSUNBZ0lISnZiR1U5WENKdVlYWnBaMkYwYVc5dVhDSmNiaUFnSUNBZ0lDQWdJQ0FnSUNCcGRHVnRVMk52Y0dVZ2FYUmxiVlI1Y0dVOVhDSm9kSFJ3T2k4dmMyTm9aVzFoTG05eVp5OVRhWFJsVG1GMmFXZGhkR2x2YmtWc1pXMWxiblJjSWx4dUlDQWdJQ0FnSUNBZ0lDQWdJR0Z5YVdFdGJHRmlaV3c5ZTNCeWIzQnpMbUZqWTJWemMybGlhV3hwZEhsTVlXSmxiSDArWEc0Z0lDQWdJQ0FnSUNBZ0lDQThUR0Z1WjNWaFoyVk9ZWFpwWjJGMGFXOXVWakZIY205MWNDQjdMaTR1YzJWc1prTnNiMjVsZlM4K1hHNGdJQ0FnSUNBZ0lEd3ZibUYyUGx4dUlDQWdJQ2xjYm4wN1hHNWNibU52Ym5OMElFeGhibWQxWVdkbFRtRjJhV2RoZEdsdmJpQTlJQ2h3Y205d2N6cE1ZVzVuZFdGblpVNWhkbWxuWVhScGIyNVdNVTF2WkdWc0tTQTlQaUI3WEc0Z0lDQWdZMjl1YzNRZ1YzSmhjSEJsWkNBOUlIZHBkR2hEYjI1a2FYUnBiMjVoYkZCc1lXTmxTRzlzWkdWeUtIZHBkR2hUZEdGdVpHRnlaRUpoYzJWRGMzTkRiR0Z6Y3loTVlXNW5kV0ZuWlU1aGRtbG5ZWFJwYjI1V01VbHRjR3dzSUZ3aVkyMXdMV3hoYm1kMVlXZGxibUYyYVdkaGRHbHZibHdpS1N3Z1RHRnVaM1ZoWjJWT1lYWnBaMkYwYVc5dVZqRkpjMFZ0Y0hSNVJtNHNJRndpVEdGdVozVmhaMlZPWVhacFoyRjBhVzl1SUZZeFhDSXBYRzRnSUNBZ2NtVjBkWEp1SUR4WGNtRndjR1ZrSUhzdUxpNXdjbTl3YzMwdlBseHVmVHRjYmx4dVpYaHdiM0owSUdSbFptRjFiSFFnVEdGdVozVmhaMlZPWVhacFoyRjBhVzl1T3lKZGZRPT0iLCJleHBvcnQgZnVuY3Rpb24gTGFuZ3VhZ2VOYXZpZ2F0aW9uVjFJc0VtcHR5Rm4ocHJvcHMpIHtcbiAgICByZXR1cm4gcHJvcHMuaXRlbXMgPT0gbnVsbCB8fCBwcm9wcy5pdGVtcy5sZW5ndGggPT09IDA7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lUR0Z1WjNWaFoyVk9ZWFpwWjJGMGFXOXVWakZKYzBWdGNIUjVSbTR1YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pSWl3aWMyOTFjbU5sY3lJNld5Sk1ZVzVuZFdGblpVNWhkbWxuWVhScGIyNVdNVWx6Ulcxd2RIbEdiaTUwY3lKZExDSnVZVzFsY3lJNlcxMHNJbTFoY0hCcGJtZHpJam9pUVVGRlFTeE5RVUZOTEZWQlFWVXNOa0pCUVRaQ0xFTkJRVU1zUzBGQkswSTdTVUZEZWtVc1QwRkJUeXhMUVVGTExFTkJRVU1zUzBGQlN5eEpRVUZKTEVsQlFVa3NTVUZCU1N4TFFVRkxMRU5CUVVNc1MwRkJTeXhEUVVGRExFMUJRVTBzUzBGQlN5eERRVUZETEVOQlFVTTdRVUZETTBRc1EwRkJReUlzSW5OdmRYSmpaWE5EYjI1MFpXNTBJanBiSW1sdGNHOXlkQ0I3VEdGdVozVmhaMlZPWVhacFoyRjBhVzl1VmpGTmIyUmxiSDBnWm5KdmJTQmNJaTR2VEdGdVozVmhaMlZPWVhacFoyRjBhVzl1VmpGY0lqdGNibHh1Wlhod2IzSjBJR1oxYm1OMGFXOXVJRXhoYm1kMVlXZGxUbUYyYVdkaGRHbHZibFl4U1hORmJYQjBlVVp1S0hCeWIzQnpPa3hoYm1kMVlXZGxUbUYyYVdkaGRHbHZibFl4VFc5a1pXd3BPaUJpYjI5c1pXRnVlMXh1SUNBZ0lISmxkSFZ5YmlCd2NtOXdjeTVwZEdWdGN5QTlQU0J1ZFd4c0lIeDhJSEJ5YjNCekxtbDBaVzF6TG14bGJtZDBhQ0E5UFQwZ01EdGNibjFjYmlKZGZRPT0iLCIvKlxuICogIENvcHlyaWdodCAyMDIwIEFkb2JlXG4gKlxuICogIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiAgeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICAgICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqICBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiAgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiAgU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgd2l0aENvbmRpdGlvbmFsUGxhY2VIb2xkZXIsIHdpdGhTdGFuZGFyZEJhc2VDc3NDbGFzcyB9IGZyb20gXCIuLi8uLi8uLi9BYnN0cmFjdENvcmVDb21wb25lbnRcIjtcbmltcG9ydCB7IFJvdXRlZExpbmsgfSBmcm9tIFwiLi4vLi4vLi4vcm91dGluZy9Sb3V0ZWRMaW5rXCI7XG5pbXBvcnQgeyBOYXZpZ2F0aW9uVjFJc0VtcHR5Rm4gfSBmcm9tIFwiLi9OYXZpZ2F0aW9uVjFJc0VtcHR5Rm5cIjtcbmV4cG9ydCBjb25zdCBkZXRlcm1pbmVJc0FjdGl2ZSA9IChpdGVtKSA9PiB7XG4gICAgcmV0dXJuIGl0ZW0uYWN0aXZlO1xufTtcbmV4cG9ydCBjb25zdCBOYXZpZ2F0aW9uVjFHcm91cCA9IChpdGVtKSA9PiB7XG4gICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KFJlYWN0LkZyYWdtZW50LCBudWxsLCAhIWl0ZW0uY2hpbGRyZW4gJiYgaXRlbS5jaGlsZHJlbi5sZW5ndGggPiAwICYmIChSZWFjdC5jcmVhdGVFbGVtZW50KFwidWxcIiwgeyBjbGFzc05hbWU6IGl0ZW0uYmFzZUNzc0NsYXNzICsgJ19fZ3JvdXAnIH0sIGl0ZW0uY2hpbGRyZW4ubWFwKChpdGVtLCBpbmRleCkgPT4gUmVhY3QuY3JlYXRlRWxlbWVudChOYXZpZ2F0aW9uVjFJdGVtLCBPYmplY3QuYXNzaWduKHsga2V5OiBpdGVtLmJhc2VDc3NDbGFzcyArICdfX2l0ZW0tJyArIGluZGV4IH0sIGl0ZW0sIHsgaW5kZXg6IGluZGV4IH0pKSkpKSkpO1xufTtcbmV4cG9ydCBjb25zdCBOYXZpZ2F0aW9uVjFJdGVtID0gKGl0ZW0pID0+IHtcbiAgICBjb25zdCBpc0FjdGl2ZSA9IGRldGVybWluZUlzQWN0aXZlKGl0ZW0pO1xuICAgIGNvbnN0IGNzc0NsYXNzID0gaXRlbS5iYXNlQ3NzQ2xhc3MgKyAnX19pdGVtICcgK1xuICAgICAgICBpdGVtLmJhc2VDc3NDbGFzcyArICdfX2l0ZW0tLWxldmVsLScgKyBpdGVtLmxldmVsICsgJyAnXG4gICAgICAgICsgKGlzQWN0aXZlID8gJyAnICsgaXRlbS5iYXNlQ3NzQ2xhc3MgKyAnX19pdGVtLS1hY3RpdmUnIDogJycpO1xuICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChcImxpXCIsIHsgY2xhc3NOYW1lOiBjc3NDbGFzcyB9LFxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFJvdXRlZExpbmssIHsgaXNSb3V0ZWQ6IGl0ZW0ucm91dGVkLCB0bzogaXRlbS51cmwsIHRpdGxlOiBpdGVtLnRpdGxlLCBcImFyaWEtY3VycmVudFwiOiBpc0FjdGl2ZSAmJiAncGFnZScsIGNsYXNzTmFtZTogaXRlbS5iYXNlQ3NzQ2xhc3MgKyAnX19pdGVtLWxpbmsnIH0sIGl0ZW0udGl0bGUpLFxuICAgICAgICAhIWl0ZW0uY2hpbGRyZW4gJiYgaXRlbS5jaGlsZHJlbi5sZW5ndGggPiAwICYmIFJlYWN0LmNyZWF0ZUVsZW1lbnQoTmF2aWdhdGlvblYxR3JvdXAsIE9iamVjdC5hc3NpZ24oe30sIGl0ZW0pKSkpO1xufTtcbmV4cG9ydCBjb25zdCBOYXZpZ2F0aW9uVjFJbXBsID0gKHByb3BzKSA9PiB7XG4gICAgY29uc3Qgc2VsZkNsb25lID0ge1xuICAgICAgICBhY3RpdmU6IGZhbHNlLFxuICAgICAgICBsYXN0TW9kaWZpZWQ6IDAsXG4gICAgICAgIGxldmVsOiAwLFxuICAgICAgICBwYXRoOiBcIlwiLFxuICAgICAgICB0aXRsZTogXCJcIixcbiAgICAgICAgdXJsOiBcIlwiLFxuICAgICAgICBjaGlsZHJlbjogcHJvcHMuaXRlbXNcbiAgICB9O1xuICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChcIm5hdlwiLCB7IGNsYXNzTmFtZTogcHJvcHMuYmFzZUNzc0NsYXNzLCByb2xlOiBcIm5hdmlnYXRpb25cIiwgaXRlbVNjb3BlOiB0cnVlLCBpdGVtVHlwZTogXCJodHRwOi8vc2NoZW1hLm9yZy9TaXRlTmF2aWdhdGlvbkVsZW1lbnRcIiwgXCJhcmlhLWxhYmVsXCI6IHByb3BzLmFjY2Vzc2liaWxpdHlMYWJlbCB9LFxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KE5hdmlnYXRpb25WMUdyb3VwLCBPYmplY3QuYXNzaWduKHt9LCBzZWxmQ2xvbmUpKSkpO1xufTtcbmV4cG9ydCBjb25zdCBOYXZpZ2F0aW9uVjEgPSAocHJvcHMpID0+IHtcbiAgICBjb25zdCBXcmFwcGVkID0gd2l0aENvbmRpdGlvbmFsUGxhY2VIb2xkZXIod2l0aFN0YW5kYXJkQmFzZUNzc0NsYXNzKE5hdmlnYXRpb25WMUltcGwsIFwiY21wLW5hdmlnYXRpb25cIiksIE5hdmlnYXRpb25WMUlzRW1wdHlGbiwgXCJOYXZpZ2F0aW9uIFYxXCIpO1xuICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFdyYXBwZWQsIE9iamVjdC5hc3NpZ24oe30sIHByb3BzKSk7XG59O1xuZXhwb3J0IGRlZmF1bHQgTmF2aWdhdGlvblYxO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pVG1GMmFXZGhkR2x2YmxZeExtcHpJaXdpYzI5MWNtTmxVbTl2ZENJNklpSXNJbk52ZFhKalpYTWlPbHNpVG1GMmFXZGhkR2x2YmxZeExuUnplQ0pkTENKdVlXMWxjeUk2VzEwc0ltMWhjSEJwYm1keklqb2lRVUZCUVRzN096czdPenM3T3pzN096czdSMEZqUnp0QlFVVklMRTlCUVU4c1MwRkJTeXhOUVVGTkxFOUJRVThzUTBGQlF6dEJRVU14UWl4UFFVRlBMRVZCUVd0Q0xEQkNRVUV3UWl4RlFVRkZMSGRDUVVGM1FpeEZRVUZETEUxQlFVMHNaME5CUVdkRExFTkJRVU03UVVGRmNrZ3NUMEZCVHl4RlFVRkRMRlZCUVZVc1JVRkJReXhOUVVGTkxEWkNRVUUyUWl4RFFVRkRPMEZCUTNaRUxFOUJRVThzUlVGQlF5eHhRa0ZCY1VJc1JVRkJReXhOUVVGTkxIbENRVUY1UWl4RFFVRkRPMEZCYlVJNVJDeE5RVUZOTEVOQlFVTXNUVUZCVFN4cFFrRkJhVUlzUjBGQlJ5eERRVUZETEVsQlFYRkNMRVZCUVVVc1JVRkJSVHRKUVVOMlJDeFBRVUZQTEVsQlFVa3NRMEZCUXl4TlFVRk5MRU5CUVVNN1FVRkRka0lzUTBGQlF5eERRVUZETzBGQlJVWXNUVUZCVFN4RFFVRkRMRTFCUVUwc2FVSkJRV2xDTEVkQlFVY3NRMEZCUXl4SlFVRnhRaXhGUVVGRkxFVkJRVVU3U1VGRGRrUXNUMEZCVHl4RFFVTklMREJEUVVOTExFTkJRVU1zUTBGQlF5eEpRVUZKTEVOQlFVTXNVVUZCVVN4SlFVRkpMRWxCUVVrc1EwRkJReXhSUVVGUkxFTkJRVU1zVFVGQlRTeEhRVUZITEVOQlFVTXNTVUZCU3l4RFFVTTNReXcwUWtGQlN5eFRRVUZUTEVWQlFVVXNTVUZCU1N4RFFVRkRMRmxCUVZrc1IwRkJSeXhUUVVGVExFbEJRM2hETEVsQlFVa3NRMEZCUXl4UlFVRlJMRU5CUVVNc1IwRkJSeXhEUVVOa0xFTkJRVU1zU1VGQlNTeEZRVUZETEV0QlFVc3NSVUZCUlN4RlFVRkZMRU5CUVVNc2IwSkJRVU1zWjBKQlFXZENMR3RDUVVGRExFZEJRVWNzUlVGQlJTeEpRVUZKTEVOQlFVTXNXVUZCV1N4SFFVRkhMRk5CUVZNc1IwRkJSeXhMUVVGTExFbEJRVTBzU1VGQlNTeEpRVUZGTEV0QlFVc3NSVUZCUlN4TFFVRkxMRWxCUVVjc1EwRkRNVWNzUTBGRFFTeERRVU5TTEVOQlEwWXNRMEZEVGl4RFFVRkJPMEZCUTB3c1EwRkJReXhEUVVGRE8wRkJSVVlzVFVGQlRTeERRVUZETEUxQlFVMHNaMEpCUVdkQ0xFZEJRVWNzUTBGQlF5eEpRVUZ4UWl4RlFVRkZMRVZCUVVVN1NVRkZkRVFzVFVGQlRTeFJRVUZSTEVkQlFVY3NhVUpCUVdsQ0xFTkJRVU1zU1VGQlNTeERRVUZETEVOQlFVTTdTVUZEZWtNc1RVRkJUU3hSUVVGUkxFZEJRVWNzU1VGQlNTeERRVUZETEZsQlFWa3NSMEZCUnl4VFFVRlRPMUZCUXpsQ0xFbEJRVWtzUTBGQlF5eFpRVUZaTEVkQlFVY3NaMEpCUVdkQ0xFZEJRVWNzU1VGQlNTeERRVUZETEV0QlFVc3NSMEZCUnl4SFFVRkhPMVZCUTNCRUxFTkJRVU1zVVVGQlVTeERRVUZETEVOQlFVTXNRMEZCUXl4SFFVRkhMRWRCUVVjc1NVRkJTU3hEUVVGRExGbEJRVmtzUjBGQlJ5eG5Ra0ZCWjBJc1EwRkJReXhEUVVGRExFTkJRVU1zUlVGQlJTeERRVUZETEVOQlFVTTdTVUZEYUVZc1QwRkJUeXhEUVVOSUxEUkNRVUZKTEZOQlFWTXNSVUZCUlN4UlFVRlJPMUZCUTJZc2IwSkJRVU1zVlVGQlZTeEpRVUZETEZGQlFWRXNSVUZCUlN4SlFVRkpMRU5CUVVNc1RVRkJUU3hGUVVGRkxFVkJRVVVzUlVGQlJTeEpRVUZKTEVOQlFVTXNSMEZCUnl4RlFVRkZMRXRCUVVzc1JVRkJSU3hKUVVGSkxFTkJRVU1zUzBGQlN5eHJRa0ZCWjBJc1VVRkJVU3hKUVVGSkxFMUJRVTBzUlVGRGFFY3NVMEZCVXl4RlFVRkZMRWxCUVVrc1EwRkJReXhaUVVGWkxFZEJRVWNzWVVGQllTeEpRVUZITEVsQlFVa3NRMEZCUXl4TFFVRkxMRU5CUTJoRU8xRkJSVlFzUTBGQlF5eERRVUZETEVsQlFVa3NRMEZCUXl4UlFVRlJMRWxCUVVrc1NVRkJTU3hEUVVGRExGRkJRVkVzUTBGQlF5eE5RVUZOTEVkQlFVY3NRMEZCUXl4SlFVRkpMRzlDUVVGRExHbENRVUZwUWl4dlFrRkJTeXhKUVVGSkxFVkJRVWNzUTBGRmNFWXNRMEZEVWl4RFFVRkJPMEZCUlV3c1EwRkJReXhEUVVGRE8wRkJSVVlzVFVGQlRTeERRVUZETEUxQlFVMHNaMEpCUVdkQ0xFZEJRVWNzUTBGQlF5eExRVUYxUWl4RlFVRkZMRVZCUVVVN1NVRkZlRVFzVFVGQlRTeFRRVUZUTEVkQlFXOUNPMUZCUXk5Q0xFMUJRVTBzUlVGQlJTeExRVUZMTzFGQlEySXNXVUZCV1N4RlFVRkZMRU5CUVVNN1VVRkRaaXhMUVVGTExFVkJRVVVzUTBGQlF6dFJRVU5TTEVsQlFVa3NSVUZCUlN4RlFVRkZPMUZCUTFJc1MwRkJTeXhGUVVGRkxFVkJRVVU3VVVGRFZDeEhRVUZITEVWQlFVVXNSVUZCUlR0UlFVTlFMRkZCUVZFc1JVRkJSU3hMUVVGTExFTkJRVU1zUzBGQlN6dExRVU40UWl4RFFVRkRPMGxCUlVZc1QwRkJUeXhEUVVOSUxEWkNRVUZMTEZOQlFWTXNSVUZCUlN4TFFVRkxMRU5CUVVNc1dVRkJXU3hGUVVNM1FpeEpRVUZKTEVWQlFVTXNXVUZCV1N4RlFVTnFRaXhUUVVGVExGRkJRVU1zVVVGQlVTeEZRVUZETEhsRFFVRjVReXhuUWtGRGFFUXNTMEZCU3l4RFFVRkRMR3RDUVVGclFqdFJRVU55UXl4dlFrRkJReXhwUWtGQmFVSXNiMEpCUVVzc1UwRkJVeXhGUVVGSExFTkJRMnBETEVOQlExUXNRMEZCUVR0QlFVVk1MRU5CUVVNc1EwRkJRVHRCUVVsRUxFMUJRVTBzUTBGQlF5eE5RVUZOTEZsQlFWa3NSMEZCUnl4RFFVRkRMRXRCUVhWQ0xFVkJRVVVzUlVGQlJUdEpRVU53UkN4TlFVRk5MRTlCUVU4c1IwRkJSeXd3UWtGQk1FSXNRMEZCUXl4M1FrRkJkMElzUTBGQlF5eG5Ra0ZCWjBJc1JVRkJSU3huUWtGQlowSXNRMEZCUXl4RlFVRkZMSEZDUVVGeFFpeEZRVUZGTEdWQlFXVXNRMEZCUXl4RFFVRkJPMGxCUTJoS0xFOUJRVThzYjBKQlFVTXNUMEZCVHl4dlFrRkJTeXhMUVVGTExFVkJRVWNzUTBGQlFUdEJRVU5vUXl4RFFVRkRMRU5CUVVNN1FVRkZSaXhsUVVGbExGbEJRVmtzUTBGQlF5SXNJbk52ZFhKalpYTkRiMjUwWlc1MElqcGJJaThxWEc0Z0tpQWdRMjl3ZVhKcFoyaDBJREl3TWpBZ1FXUnZZbVZjYmlBcVhHNGdLaUFnVEdsalpXNXpaV1FnZFc1a1pYSWdkR2hsSUVGd1lXTm9aU0JNYVdObGJuTmxMQ0JXWlhKemFXOXVJREl1TUNBb2RHaGxJRndpVEdsalpXNXpaVndpS1R0Y2JpQXFJQ0I1YjNVZ2JXRjVJRzV2ZENCMWMyVWdkR2hwY3lCbWFXeGxJR1Y0WTJWd2RDQnBiaUJqYjIxd2JHbGhibU5sSUhkcGRHZ2dkR2hsSUV4cFkyVnVjMlV1WEc0Z0tpQWdXVzkxSUcxaGVTQnZZblJoYVc0Z1lTQmpiM0I1SUc5bUlIUm9aU0JNYVdObGJuTmxJR0YwWEc0Z0tseHVJQ29nSUNBZ0lDQm9kSFJ3T2k4dmQzZDNMbUZ3WVdOb1pTNXZjbWN2YkdsalpXNXpaWE12VEVsRFJVNVRSUzB5TGpCY2JpQXFYRzRnS2lBZ1ZXNXNaWE56SUhKbGNYVnBjbVZrSUdKNUlHRndjR3hwWTJGaWJHVWdiR0YzSUc5eUlHRm5jbVZsWkNCMGJ5QnBiaUIzY21sMGFXNW5MQ0J6YjJaMGQyRnlaVnh1SUNvZ0lHUnBjM1J5YVdKMWRHVmtJSFZ1WkdWeUlIUm9aU0JNYVdObGJuTmxJR2x6SUdScGMzUnlhV0oxZEdWa0lHOXVJR0Z1SUZ3aVFWTWdTVk5jSWlCQ1FWTkpVeXhjYmlBcUlDQlhTVlJJVDFWVUlGZEJVbEpCVGxSSlJWTWdUMUlnUTA5T1JFbFVTVTlPVXlCUFJpQkJUbGtnUzBsT1JDd2daV2wwYUdWeUlHVjRjSEpsYzNNZ2IzSWdhVzF3YkdsbFpDNWNiaUFxSUNCVFpXVWdkR2hsSUV4cFkyVnVjMlVnWm05eUlIUm9aU0J6Y0dWamFXWnBZeUJzWVc1bmRXRm5aU0JuYjNabGNtNXBibWNnY0dWeWJXbHpjMmx2Ym5NZ1lXNWtYRzRnS2lBZ2JHbHRhWFJoZEdsdmJuTWdkVzVrWlhJZ2RHaGxJRXhwWTJWdWMyVXVYRzRnS2k5Y2JseHVhVzF3YjNKMElGSmxZV04wSUdaeWIyMGdKM0psWVdOMEp6dGNibWx0Y0c5eWRDQjdTR0Z6UW1GelpVTnpjME5zWVhOekxDQjNhWFJvUTI5dVpHbDBhVzl1WVd4UWJHRmpaVWh2YkdSbGNpd2dkMmwwYUZOMFlXNWtZWEprUW1GelpVTnpjME5zWVhOemZTQm1jbTl0SUZ3aUxpNHZMaTR2TGk0dlFXSnpkSEpoWTNSRGIzSmxRMjl0Y0c5dVpXNTBYQ0k3WEc1cGJYQnZjblFnZTFKdmRYUmxaRU52Y21WRGIyMXdiMjVsYm5STmIyUmxiQ3dnVW05MWRHVmtUVzlrWld4OUlHWnliMjBnWENJdUxpOHVMaTh1TGk5eWIzVjBhVzVuTDFKdmRYUmxaRU52Y21WRGIyMXdiMjVsYm5SY0lqdGNibWx0Y0c5eWRDQjdVbTkxZEdWa1RHbHVhMzBnWm5KdmJTQmNJaTR1THk0dUx5NHVMM0p2ZFhScGJtY3ZVbTkxZEdWa1RHbHVhMXdpTzF4dWFXMXdiM0owSUh0T1lYWnBaMkYwYVc5dVZqRkpjMFZ0Y0hSNVJtNTlJR1p5YjIwZ1hDSXVMMDVoZG1sbllYUnBiMjVXTVVselJXMXdkSGxHYmx3aU8xeHVYRzVsZUhCdmNuUWdhVzUwWlhKbVlXTmxJRTVoZG1sbllYUnBiMjVXTVVsMFpXMGdaWGgwWlc1a2N5QlNiM1YwWldSTmIyUmxiQ3hJWVhOQ1lYTmxRM056UTJ4aGMzTjdYRzRnSUNBZ2JHVjJaV3c2SUc1MWJXSmxjaXhjYmlBZ0lDQnBibVJsZUQ4NklHNTFiV0psY2l4Y2JpQWdJQ0JoWTNScGRtVTZJR0p2YjJ4bFlXNHNYRzRnSUNBZ2RHbDBiR1U2SUhOMGNtbHVaeXhjYmlBZ0lDQjFjbXc2SUhOMGNtbHVaeXhjYmlBZ0lDQnNZWE4wVFc5a2FXWnBaV1E2SUc1MWJXSmxjaXhjYmlBZ0lDQmtaWE5qY21sd2RHbHZiajg2SUhOMGNtbHVaeXhjYmlBZ0lDQndZWFJvT2lCemRISnBibWNzWEc0Z0lDQWdZMmhwYkdSeVpXNC9PaUJPWVhacFoyRjBhVzl1VmpGSmRHVnRXMTFjYm4xY2JseHVaWGh3YjNKMElHbHVkR1Z5Wm1GalpTQk9ZWFpwWjJGMGFXOXVWakZOYjJSbGJDQmxlSFJsYm1SeklGSnZkWFJsWkVOdmNtVkRiMjF3YjI1bGJuUk5iMlJsYkh0Y2JpQWdJQ0JwZEdWdGN6cE9ZWFpwWjJGMGFXOXVWakZKZEdWdFcxMWNiaUFnSUNCaFkyTmxjM05wWW1sc2FYUjVUR0ZpWld3L09pQnpkSEpwYm1kY2JuMWNibHh1Wlhod2IzSjBJR052Ym5OMElHUmxkR1Z5YldsdVpVbHpRV04wYVhabElEMGdLR2wwWlcwNlRtRjJhV2RoZEdsdmJsWXhTWFJsYlNrZ1BUNGdlMXh1SUNBZ0lISmxkSFZ5YmlCcGRHVnRMbUZqZEdsMlpUdGNibjA3WEc1Y2JtVjRjRzl5ZENCamIyNXpkQ0JPWVhacFoyRjBhVzl1VmpGSGNtOTFjQ0E5SUNocGRHVnRPazVoZG1sbllYUnBiMjVXTVVsMFpXMHBJRDArSUh0Y2JpQWdJQ0J5WlhSMWNtNGdLRnh1SUNBZ0lDQWdJQ0E4UGx4dUlDQWdJQ0FnSUNBZ0lDQWdleUVoYVhSbGJTNWphR2xzWkhKbGJpQW1KaUJwZEdWdExtTm9hV3hrY21WdUxteGxibWQwYUNBK0lEQWdKaVlnSUNoY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBOGRXd2dJR05zWVhOelRtRnRaVDE3YVhSbGJTNWlZWE5sUTNOelEyeGhjM01nS3lBblgxOW5jbTkxY0NkOVBseHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0I3YVhSbGJTNWphR2xzWkhKbGJpNXRZWEFvWEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FvYVhSbGJTeHBibVJsZUNrZ1BUNGdQRTVoZG1sbllYUnBiMjVXTVVsMFpXMGdhMlY1UFh0cGRHVnRMbUpoYzJWRGMzTkRiR0Z6Y3lBcklDZGZYMmwwWlcwdEp5QXJJR2x1WkdWNGZTQjdMaTR1YVhSbGJYMGdhVzVrWlhnOWUybHVaR1Y0ZlM4K1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ2w5WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnUEM5MWJENWNiaUFnSUNBZ0lDQWdJQ0FnSUNsOVhHNGdJQ0FnSUNBZ0lEd3ZQbHh1SUNBZ0lDbGNibjA3WEc1Y2JtVjRjRzl5ZENCamIyNXpkQ0JPWVhacFoyRjBhVzl1VmpGSmRHVnRJRDBnS0dsMFpXMDZUbUYyYVdkaGRHbHZibFl4U1hSbGJTa2dQVDRnZTF4dVhHNGdJQ0FnWTI5dWMzUWdhWE5CWTNScGRtVWdQU0JrWlhSbGNtMXBibVZKYzBGamRHbDJaU2hwZEdWdEtUdGNiaUFnSUNCamIyNXpkQ0JqYzNORGJHRnpjeUE5SUdsMFpXMHVZbUZ6WlVOemMwTnNZWE56SUNzZ0oxOWZhWFJsYlNBbklDdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnYVhSbGJTNWlZWE5sUTNOelEyeGhjM01nS3lBblgxOXBkR1Z0TFMxc1pYWmxiQzBuSUNzZ2FYUmxiUzVzWlhabGJDQXJJQ2NnSjF4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdLeUFvYVhOQlkzUnBkbVVnUHlBbklDY2dLeUJwZEdWdExtSmhjMlZEYzNORGJHRnpjeUFySUNkZlgybDBaVzB0TFdGamRHbDJaU2NnT2lBbkp5azdYRzRnSUNBZ2NtVjBkWEp1SUNoY2JpQWdJQ0FnSUNBZ1BHeHBJR05zWVhOelRtRnRaVDE3WTNOelEyeGhjM045UGx4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUR4U2IzVjBaV1JNYVc1cklHbHpVbTkxZEdWa1BYdHBkR1Z0TG5KdmRYUmxaSDBnZEc4OWUybDBaVzB1ZFhKc2ZTQjBhWFJzWlQxN2FYUmxiUzUwYVhSc1pYMGdZWEpwWVMxamRYSnlaVzUwUFh0cGMwRmpkR2wyWlNBbUppQW5jR0ZuWlNkOVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJR05zWVhOelRtRnRaVDE3YVhSbGJTNWlZWE5sUTNOelEyeGhjM01nS3lBblgxOXBkR1Z0TFd4cGJtc25mVDU3YVhSbGJTNTBhWFJzWlZ4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnZlR3dlVtOTFkR1ZrVEdsdWF6NWNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQjdYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNFaGFYUmxiUzVqYUdsc1pISmxiaUFtSmlCcGRHVnRMbU5vYVd4a2NtVnVMbXhsYm1kMGFDQStJREFnSmlZZ1BFNWhkbWxuWVhScGIyNVdNVWR5YjNWd0lIc3VMaTVwZEdWdGZTOCtYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdmVnh1SUNBZ0lDQWdJQ0E4TDJ4cFBseHVJQ0FnSUNsY2JseHVmVHRjYmx4dVpYaHdiM0owSUdOdmJuTjBJRTVoZG1sbllYUnBiMjVXTVVsdGNHd2dQU0FvY0hKdmNITTZUbUYyYVdkaGRHbHZibFl4VFc5a1pXd3BJRDArSUh0Y2JseHVJQ0FnSUdOdmJuTjBJSE5sYkdaRGJHOXVaVHBPWVhacFoyRjBhVzl1VmpGSmRHVnRJRDBnZTF4dUlDQWdJQ0FnSUNCaFkzUnBkbVU2SUdaaGJITmxMRnh1SUNBZ0lDQWdJQ0JzWVhOMFRXOWthV1pwWldRNklEQXNYRzRnSUNBZ0lDQWdJR3hsZG1Wc09pQXdMRnh1SUNBZ0lDQWdJQ0J3WVhSb09pQmNJbHdpTEZ4dUlDQWdJQ0FnSUNCMGFYUnNaVG9nWENKY0lpeGNiaUFnSUNBZ0lDQWdkWEpzT2lCY0lsd2lMRnh1SUNBZ0lDQWdJQ0JqYUdsc1pISmxiam9nY0hKdmNITXVhWFJsYlhOY2JpQWdJQ0I5TzF4dVhHNGdJQ0FnY21WMGRYSnVJQ2hjYmlBZ0lDQWdJQ0FnUEc1aGRpQmpiR0Z6YzA1aGJXVTllM0J5YjNCekxtSmhjMlZEYzNORGJHRnpjMzFjYmlBZ0lDQWdJQ0FnSUNBZ0lDQnliMnhsUFZ3aWJtRjJhV2RoZEdsdmJsd2lYRzRnSUNBZ0lDQWdJQ0FnSUNBZ2FYUmxiVk5qYjNCbElHbDBaVzFVZVhCbFBWd2lhSFIwY0RvdkwzTmphR1Z0WVM1dmNtY3ZVMmwwWlU1aGRtbG5ZWFJwYjI1RmJHVnRaVzUwWENKY2JpQWdJQ0FnSUNBZ0lDQWdJQ0JoY21saExXeGhZbVZzUFh0d2NtOXdjeTVoWTJObGMzTnBZbWxzYVhSNVRHRmlaV3g5UGx4dUlDQWdJQ0FnSUNBZ0lDQWdQRTVoZG1sbllYUnBiMjVXTVVkeWIzVndJSHN1TGk1elpXeG1RMnh2Ym1WOUx6NWNiaUFnSUNBZ0lDQWdQQzl1WVhZK1hHNGdJQ0FnS1Z4dVhHNTlYRzVjYmx4dVhHNWxlSEJ2Y25RZ1kyOXVjM1FnVG1GMmFXZGhkR2x2YmxZeElEMGdLSEJ5YjNCek9rNWhkbWxuWVhScGIyNVdNVTF2WkdWc0tTQTlQaUI3WEc0Z0lDQWdZMjl1YzNRZ1YzSmhjSEJsWkNBOUlIZHBkR2hEYjI1a2FYUnBiMjVoYkZCc1lXTmxTRzlzWkdWeUtIZHBkR2hUZEdGdVpHRnlaRUpoYzJWRGMzTkRiR0Z6Y3loT1lYWnBaMkYwYVc5dVZqRkpiWEJzTENCY0ltTnRjQzF1WVhacFoyRjBhVzl1WENJcExDQk9ZWFpwWjJGMGFXOXVWakZKYzBWdGNIUjVSbTRzSUZ3aVRtRjJhV2RoZEdsdmJpQldNVndpS1Z4dUlDQWdJSEpsZEhWeWJpQThWM0poY0hCbFpDQjdMaTR1Y0hKdmNITjlMejVjYm4wN1hHNWNibVY0Y0c5eWRDQmtaV1poZFd4MElFNWhkbWxuWVhScGIyNVdNVHNpWFgwPSIsImV4cG9ydCBmdW5jdGlvbiBOYXZpZ2F0aW9uVjFJc0VtcHR5Rm4ocHJvcHMpIHtcbiAgICByZXR1cm4gcHJvcHMuaXRlbXMgPT0gbnVsbCB8fCBwcm9wcy5pdGVtcy5sZW5ndGggPT09IDA7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lUbUYyYVdkaGRHbHZibFl4U1hORmJYQjBlVVp1TG1weklpd2ljMjkxY21ObFVtOXZkQ0k2SWlJc0luTnZkWEpqWlhNaU9sc2lUbUYyYVdkaGRHbHZibFl4U1hORmJYQjBlVVp1TG5SeklsMHNJbTVoYldWeklqcGJYU3dpYldGd2NHbHVaM01pT2lKQlFVVkJMRTFCUVUwc1ZVRkJWU3h4UWtGQmNVSXNRMEZCUXl4TFFVRjFRanRKUVVONlJDeFBRVUZQTEV0QlFVc3NRMEZCUXl4TFFVRkxMRWxCUVVrc1NVRkJTU3hKUVVGSkxFdEJRVXNzUTBGQlF5eExRVUZMTEVOQlFVTXNUVUZCVFN4TFFVRkxMRU5CUVVNc1EwRkJRenRCUVVNelJDeERRVUZESWl3aWMyOTFjbU5sYzBOdmJuUmxiblFpT2xzaWFXMXdiM0owSUh0T1lYWnBaMkYwYVc5dVZqRk5iMlJsYkgwZ1puSnZiU0JjSWk0dlRtRjJhV2RoZEdsdmJsWXhYQ0k3WEc1Y2JtVjRjRzl5ZENCbWRXNWpkR2x2YmlCT1lYWnBaMkYwYVc5dVZqRkpjMFZ0Y0hSNVJtNG9jSEp2Y0hNNlRtRjJhV2RoZEdsdmJsWXhUVzlrWld3cE9pQmliMjlzWldGdWUxeHVJQ0FnSUhKbGRIVnliaUJ3Y205d2N5NXBkR1Z0Y3lBOVBTQnVkV3hzSUh4OElIQnliM0J6TG1sMFpXMXpMbXhsYm1kMGFDQTlQVDBnTUR0Y2JuMGlYWDA9IiwiLypcbiAqICBDb3B5cmlnaHQgMjAyMCBBZG9iZVxuICpcbiAqICBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqICBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgICAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqICBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiAgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqICBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IExpbmsgYXMgUm91dGVyTGluayB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xuZXhwb3J0IGNvbnN0IFJvdXRlZExpbmsgPSAocHJvcHMpID0+IHtcbiAgICBjb25zdCB7IHRvLCBpc1JvdXRlZCwgLi4ub3RoZXJQcm9wcyB9ID0gcHJvcHM7XG4gICAgaWYgKHRvID09PSB1bmRlZmluZWQgfHwgdG8udHJpbSgpLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcImFcIiwgT2JqZWN0LmFzc2lnbih7IGhyZWY6ICcjJyB9LCBvdGhlclByb3BzKSk7XG4gICAgfVxuICAgIGNvbnN0IGlzRXh0ZXJuYWwgPSAvXmh0dHBzPzpcXC9cXC8vLnRlc3QodG8pO1xuICAgIHJldHVybiBpc0V4dGVybmFsIHx8ICFpc1JvdXRlZCA/XG4gICAgICAgIChSZWFjdC5jcmVhdGVFbGVtZW50KFwiYVwiLCBPYmplY3QuYXNzaWduKHsgaHJlZjogdG8gfSwgb3RoZXJQcm9wcykpKVxuICAgICAgICA6XG4gICAgICAgICAgICAoUmVhY3QuY3JlYXRlRWxlbWVudChSb3V0ZXJMaW5rLCBPYmplY3QuYXNzaWduKHt9LCBvdGhlclByb3BzLCB7IHRvOiB0byB9KSkpO1xufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaVVtOTFkR1ZrVEdsdWF5NXFjeUlzSW5OdmRYSmpaVkp2YjNRaU9pSWlMQ0p6YjNWeVkyVnpJanBiSWxKdmRYUmxaRXhwYm1zdWRITjRJbDBzSW01aGJXVnpJanBiWFN3aWJXRndjR2x1WjNNaU9pSkJRVUZCT3pzN096czdPenM3T3pzN096dEhRV05ITzBGQlJVZ3NUMEZCVHl4TFFVRkxMRTFCUVUwc1QwRkJUeXhEUVVGRE8wRkJRekZDTEU5QlFVOHNSVUZCUXl4SlFVRkpMRWxCUVVrc1ZVRkJWU3hGUVVGRExFMUJRVTBzYTBKQlFXdENMRU5CUVVNN1FVRlBjRVFzVFVGQlRTeERRVUZETEUxQlFVMHNWVUZCVlN4SFFVRkhMRU5CUVVNc1MwRkJaU3hGUVVGRkxFVkJRVVU3U1VGRE1VTXNUVUZCVFN4RlFVRkRMRVZCUVVVc1JVRkJSU3hSUVVGUkxFVkJRVVVzUjBGQlJ5eFZRVUZWTEVWQlFVTXNSMEZCUnl4TFFVRkxMRU5CUVVNN1NVRkZOVU1zU1VGQlJ5eEZRVUZGTEV0QlFVc3NVMEZCVXl4SlFVRkpMRVZCUVVVc1EwRkJReXhKUVVGSkxFVkJRVVVzUTBGQlF5eE5RVUZOTEV0QlFVc3NRMEZCUXl4RlFVRkRPMUZCUXpGRExFOUJRVThzZVVOQlFVY3NTVUZCU1N4RlFVRkZMRWRCUVVjc1NVRkRXQ3hWUVVGVkxFVkJRMmhDTEVOQlFVTTdTMEZEVGp0SlFVTkVMRTFCUVUwc1ZVRkJWU3hIUVVGSExHTkJRV01zUTBGQlF5eEpRVUZKTEVOQlFVTXNSVUZCUlN4RFFVRkRMRU5CUVVNN1NVRkZNME1zVDBGQlR5eFZRVUZWTEVsQlFVa3NRMEZCUXl4UlFVRlJMRU5CUVVFc1EwRkJRenRSUVVNelFpeERRVUZETEhsRFFVTkhMRWxCUVVrc1JVRkJSU3hGUVVGRkxFbEJRMG9zVlVGQlZTeEZRVU5vUWl4RFFVRkRPMUZCUTBnc1EwRkJRenRaUVVORUxFTkJRVVVzYjBKQlFVTXNWVUZCVlN4dlFrRkJTeXhWUVVGVkxFbEJRMlFzUlVGQlJTeEZRVUZGTEVWQlFVVXNTVUZEYkVJc1EwRkJReXhEUVVGQk8wRkJRMWdzUTBGQlF5eERRVUZESWl3aWMyOTFjbU5sYzBOdmJuUmxiblFpT2xzaUx5cGNiaUFxSUNCRGIzQjVjbWxuYUhRZ01qQXlNQ0JCWkc5aVpWeHVJQ3BjYmlBcUlDQk1hV05sYm5ObFpDQjFibVJsY2lCMGFHVWdRWEJoWTJobElFeHBZMlZ1YzJVc0lGWmxjbk5wYjI0Z01pNHdJQ2gwYUdVZ1hDSk1hV05sYm5ObFhDSXBPMXh1SUNvZ0lIbHZkU0J0WVhrZ2JtOTBJSFZ6WlNCMGFHbHpJR1pwYkdVZ1pYaGpaWEIwSUdsdUlHTnZiWEJzYVdGdVkyVWdkMmwwYUNCMGFHVWdUR2xqWlc1elpTNWNiaUFxSUNCWmIzVWdiV0Y1SUc5aWRHRnBiaUJoSUdOdmNIa2diMllnZEdobElFeHBZMlZ1YzJVZ1lYUmNiaUFxWEc0Z0tpQWdJQ0FnSUdoMGRIQTZMeTkzZDNjdVlYQmhZMmhsTG05eVp5OXNhV05sYm5ObGN5OU1TVU5GVGxORkxUSXVNRnh1SUNwY2JpQXFJQ0JWYm14bGMzTWdjbVZ4ZFdseVpXUWdZbmtnWVhCd2JHbGpZV0pzWlNCc1lYY2diM0lnWVdkeVpXVmtJSFJ2SUdsdUlIZHlhWFJwYm1jc0lITnZablIzWVhKbFhHNGdLaUFnWkdsemRISnBZblYwWldRZ2RXNWtaWElnZEdobElFeHBZMlZ1YzJVZ2FYTWdaR2x6ZEhKcFluVjBaV1FnYjI0Z1lXNGdYQ0pCVXlCSlUxd2lJRUpCVTBsVExGeHVJQ29nSUZkSlZFaFBWVlFnVjBGU1VrRk9WRWxGVXlCUFVpQkRUMDVFU1ZSSlQwNVRJRTlHSUVGT1dTQkxTVTVFTENCbGFYUm9aWElnWlhod2NtVnpjeUJ2Y2lCcGJYQnNhV1ZrTGx4dUlDb2dJRk5sWlNCMGFHVWdUR2xqWlc1elpTQm1iM0lnZEdobElITndaV05wWm1saklHeGhibWQxWVdkbElHZHZkbVZ5Ym1sdVp5QndaWEp0YVhOemFXOXVjeUJoYm1SY2JpQXFJQ0JzYVcxcGRHRjBhVzl1Y3lCMWJtUmxjaUIwYUdVZ1RHbGpaVzV6WlM1Y2JpQXFMMXh1WEc1cGJYQnZjblFnVW1WaFkzUWdabkp2YlNBbmNtVmhZM1FuTzF4dWFXMXdiM0owSUh0TWFXNXJJR0Z6SUZKdmRYUmxja3hwYm10OUlHWnliMjBnSjNKbFlXTjBMWEp2ZFhSbGNpMWtiMjBuTzF4dVhHNWxlSEJ2Y25RZ2FXNTBaWEptWVdObElFeHBibXRRY205d2N5QjdYRzRnSUNBZ2RHOC9PaUJ6ZEhKcGJtYzdYRzRnSUNBZ2FYTlNiM1YwWldRL09pQmliMjlzWldGdU8xeHVJQ0FnSUZ0d2NtOXdPaUJ6ZEhKcGJtZGRPaUJoYm5sY2JuMWNibVY0Y0c5eWRDQmpiMjV6ZENCU2IzVjBaV1JNYVc1cklEMGdLSEJ5YjNCek9reHBibXRRY205d2N5a2dQVDRnZTF4dUlDQWdJR052Ym5OMElIdDBieXdnYVhOU2IzVjBaV1FzSUM0dUxtOTBhR1Z5VUhKdmNITjlJRDBnY0hKdmNITTdYRzVjYmlBZ0lDQnBaaWgwYnlBOVBUMGdkVzVrWldacGJtVmtJSHg4SUhSdkxuUnlhVzBvS1M1c1pXNW5kR2dnUFQwOUlEQXBlMXh1SUNBZ0lDQWdJQ0J5WlhSMWNtNGdQR0VnYUhKbFpqMTdKeU1uZlZ4dUlDQWdJQ0FnSUNBZ0lDQWdleTR1TG05MGFHVnlVSEp2Y0hOOVhHNGdJQ0FnSUNBZ0lDOCtPMXh1SUNBZ0lIMWNiaUFnSUNCamIyNXpkQ0JwYzBWNGRHVnlibUZzSUQwZ0wxNW9kSFJ3Y3o4NlhGd3ZYRnd2THk1MFpYTjBLSFJ2S1R0Y2JseHVJQ0FnSUhKbGRIVnliaUJwYzBWNGRHVnlibUZzSUh4OElDRnBjMUp2ZFhSbFpEOWNiaUFnSUNBZ0lDQWdLRHhoWEc0Z0lDQWdJQ0FnSUNBZ0lDQm9jbVZtUFh0MGIzMWNiaUFnSUNBZ0lDQWdJQ0FnSUhzdUxpNXZkR2hsY2xCeWIzQnpmVnh1SUNBZ0lDQWdJQ0F2UGlsY2JpQWdJQ0FnSUNBZ09seHVJQ0FnSUNBZ0lDQW9JRHhTYjNWMFpYSk1hVzVySUhzdUxpNXZkR2hsY2xCeWIzQnpmVnh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lIUnZQWHQwYjMxY2JpQWdJQ0FnSUNBZ0x6NHBYRzU5T3lKZGZRPT0iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9