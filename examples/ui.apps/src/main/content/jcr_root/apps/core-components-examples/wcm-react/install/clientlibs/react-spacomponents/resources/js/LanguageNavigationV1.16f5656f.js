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


        __webpack_exports__["default"] = LanguageNavigation; //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTGFuZ3VhZ2VOYXZpZ2F0aW9uVjEuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJMYW5ndWFnZU5hdmlnYXRpb25WMS50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7O0dBY0c7QUFFSCxPQUFPLEtBQUssTUFBTSxPQUFPLENBQUM7QUFDMUIsT0FBTyxFQUFDLDBCQUEwQixFQUFFLHdCQUF3QixFQUFDLE1BQU0sZ0NBQWdDLENBQUM7QUFDcEcsT0FBTyxFQUFDLGlCQUFpQixFQUFFLGlCQUFpQixFQUFzQyxNQUFNLGtDQUFrQyxDQUFDO0FBQzNILE9BQU8sRUFBQyxVQUFVLEVBQUMsTUFBTSw2QkFBNkIsQ0FBQztBQUN2RCxPQUFPLEVBQUMsNkJBQTZCLEVBQUMsTUFBTSxpQ0FBaUMsQ0FBQztBQXFCOUUsTUFBTSxDQUFDLE1BQU0sd0JBQXdCLEdBQUcsQ0FBQyxLQUE4QixFQUFFLEVBQUU7SUFDdkUsSUFBRyxLQUFLLENBQUMsS0FBSyxHQUFHLENBQUMsRUFBQztRQUNmLE9BQU8sQ0FDSCxvQkFBQyxVQUFVLElBQ1AsUUFBUSxFQUFFLEtBQUssQ0FBQyxNQUFNLEVBQ3RCLFNBQVMsRUFBRSxLQUFLLENBQUMsWUFBWSxHQUFHLGFBQWEsRUFDN0MsRUFBRSxFQUFFLEtBQUssQ0FBQyxHQUFHLEVBQ2IsUUFBUSxFQUFFLEtBQUssQ0FBQyxRQUFRLEVBQ3hCLElBQUksRUFBRSxLQUFLLENBQUMsUUFBUSxFQUNwQixHQUFHLEVBQUMsV0FBVyxFQUNmLEtBQUssRUFBRSxLQUFLLENBQUMsS0FBSyxJQUFHLEtBQUssQ0FBQyxLQUFLLENBQWMsQ0FDckQsQ0FBQTtLQUNKO1NBQUk7UUFDRCxPQUFPLENBQ0gsOEJBQU0sU0FBUyxFQUFHLEtBQUssQ0FBQyxZQUFZLEdBQUcsY0FBYyxFQUFFLElBQUksRUFBRSxLQUFLLENBQUMsUUFBUSxJQUFHLEtBQUssQ0FBQyxLQUFLLENBQVEsQ0FDcEcsQ0FBQTtLQUNKO0FBQ0wsQ0FBQyxDQUFDO0FBRUYsTUFBTSxDQUFDLE1BQU0seUJBQXlCLEdBQUcsQ0FBQyxJQUE2QixFQUFFLEVBQUU7SUFDdkUsT0FBTyxDQUNILDBDQUNLLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxHQUFHLENBQUMsSUFBSyxDQUM3Qyw0QkFBSSxTQUFTLEVBQUUsSUFBSSxDQUFDLFlBQVksR0FBRyxTQUFTLElBQ3ZDLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUNkLENBQUMsSUFBSSxFQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsb0JBQUMsd0JBQXdCLG9CQUFLLElBQUksSUFBRSxHQUFHLEVBQUUsSUFBSSxDQUFDLFlBQVksR0FBRyxTQUFTLEdBQUcsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLElBQUcsQ0FDbEgsQ0FDQSxDQUNSLENBQ0YsQ0FDTixDQUFBO0FBQ0wsQ0FBQyxDQUFDO0FBRUYsTUFBTSxDQUFDLE1BQU0sd0JBQXdCLEdBQUcsQ0FBQyxJQUE2QixFQUFFLEVBQUU7SUFFdEUsTUFBTSxRQUFRLEdBQUcsaUJBQWlCLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDekMsTUFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLFlBQVksR0FBRyxTQUFTO1FBQzlCLElBQUksQ0FBQyxZQUFZLEdBQUcsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLEtBQUssR0FBRyxHQUFHO1FBQ3ZELEdBQUcsSUFBSSxDQUFDLFlBQVksdUJBQXVCLElBQUksQ0FBQyxPQUFPLElBQUksSUFBSSxDQUFDLFlBQVksb0JBQW9CLElBQUksQ0FBQyxRQUFRLEVBQUU7UUFDOUcsQ0FBRSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxZQUFZLEdBQUcsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQ2hGLE9BQU8sQ0FDSCw0QkFBSSxTQUFTLEVBQUUsUUFBUTtRQUNmLG9CQUFDLHdCQUF3QixvQkFBSyxJQUFJLEVBQUc7UUFFakMsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxJQUFJLG9CQUFDLGlCQUFpQixvQkFBSyxJQUFJLEVBQUcsQ0FFcEYsQ0FDUixDQUFBO0FBRUwsQ0FBQyxDQUFDO0FBRUYsTUFBTSx3QkFBd0IsR0FBRyxDQUFDLEtBQStCLEVBQUUsRUFBRTtJQUNqRSxNQUFNLFNBQVMsR0FBNEI7UUFDdkMsTUFBTSxFQUFFLEtBQUs7UUFDYixZQUFZLEVBQUUsQ0FBQztRQUNmLEtBQUssRUFBRSxDQUFDO1FBQ1IsSUFBSSxFQUFFLEVBQUU7UUFDUixLQUFLLEVBQUUsRUFBRTtRQUNULEdBQUcsRUFBRSxFQUFFO1FBQ1AsUUFBUSxFQUFFLEVBQUU7UUFDWixPQUFPLEVBQUUsRUFBRTtRQUNYLE1BQU0sRUFBRSxFQUFFO1FBQ1YsUUFBUSxFQUFFLEtBQUssQ0FBQyxLQUFLO0tBQ3hCLENBQUM7SUFFRixPQUFPLENBQ0gsNkJBQUssU0FBUyxFQUFFLEtBQUssQ0FBQyxZQUFZLEVBQzdCLElBQUksRUFBQyxZQUFZLEVBQ2pCLFNBQVMsUUFBQyxRQUFRLEVBQUMseUNBQXlDLGdCQUNoRCxLQUFLLENBQUMsa0JBQWtCO1FBQ3JDLG9CQUFDLHlCQUF5QixvQkFBSyxTQUFTLEVBQUcsQ0FDekMsQ0FDVCxDQUFBO0FBQ0wsQ0FBQyxDQUFDO0FBRUYsTUFBTSxrQkFBa0IsR0FBRyxDQUFDLEtBQStCLEVBQUUsRUFBRTtJQUMzRCxNQUFNLE9BQU8sR0FBRywwQkFBMEIsQ0FBQyx3QkFBd0IsQ0FBQyx3QkFBd0IsRUFBRSx3QkFBd0IsQ0FBQyxFQUFFLDZCQUE2QixFQUFFLHVCQUF1QixDQUFDLENBQUE7SUFDaEwsT0FBTyxvQkFBQyxPQUFPLG9CQUFLLEtBQUssRUFBRyxDQUFBO0FBQ2hDLENBQUMsQ0FBQztBQUVGLGVBQWUsa0JBQWtCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogIENvcHlyaWdodCAyMDIwIEFkb2JlXG4gKlxuICogIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiAgeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICAgICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqICBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiAgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiAgU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQge3dpdGhDb25kaXRpb25hbFBsYWNlSG9sZGVyLCB3aXRoU3RhbmRhcmRCYXNlQ3NzQ2xhc3N9IGZyb20gXCIuLi8uLi8uLi9BYnN0cmFjdENvcmVDb21wb25lbnRcIjtcbmltcG9ydCB7ZGV0ZXJtaW5lSXNBY3RpdmUsIE5hdmlnYXRpb25WMUdyb3VwLCBOYXZpZ2F0aW9uVjFJdGVtLCBOYXZpZ2F0aW9uVjFNb2RlbH0gZnJvbSBcIi4uLy4uL25hdmlnYXRpb24vdjEvTmF2aWdhdGlvblYxXCI7XG5pbXBvcnQge1JvdXRlZExpbmt9IGZyb20gXCIuLi8uLi8uLi9yb3V0aW5nL1JvdXRlZExpbmtcIjtcbmltcG9ydCB7TGFuZ3VhZ2VOYXZpZ2F0aW9uVjFJc0VtcHR5Rm59IGZyb20gXCIuL0xhbmd1YWdlTmF2aWdhdGlvblYxSXNFbXB0eUZuXCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgTGFuZ3VhZ2VOYXZpZ2F0aW9uVjFJdGVtIGV4dGVuZHMgTmF2aWdhdGlvblYxSXRlbSB7XG4gICAgbGV2ZWw6IG51bWJlcixcbiAgICBhY3RpdmU6IGJvb2xlYW4sXG4gICAgdGl0bGU6IHN0cmluZyxcbiAgICB1cmw6IHN0cmluZyxcbiAgICBsYXN0TW9kaWZpZWQ6IG51bWJlcixcbiAgICBkZXNjcmlwdGlvbj86IHN0cmluZyxcbiAgICBwYXRoOiBzdHJpbmcsXG4gICAgbG9jYWxlOiBzdHJpbmcsXG4gICAgY291bnRyeTogc3RyaW5nLFxuICAgIGxhbmd1YWdlOiBzdHJpbmcsXG4gICAgY2hpbGRyZW4/OiBMYW5ndWFnZU5hdmlnYXRpb25WMUl0ZW1bXVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIExhbmd1YWdlTmF2aWdhdGlvblYxTW9kZWwgZXh0ZW5kcyBOYXZpZ2F0aW9uVjFNb2RlbHtcbiAgICBpdGVtczpMYW5ndWFnZU5hdmlnYXRpb25WMUl0ZW1bXVxuICAgIGFjY2Vzc2liaWxpdHlMYWJlbD86IHN0cmluZ1xufVxuXG5leHBvcnQgY29uc3QgTGFuZ3VhZ2VOYXZpZ2F0aW9uVjFMaW5rID0gKHByb3BzOkxhbmd1YWdlTmF2aWdhdGlvblYxSXRlbSkgPT4ge1xuICAgIGlmKHByb3BzLmxldmVsID4gMCl7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8Um91dGVkTGlua1xuICAgICAgICAgICAgICAgIGlzUm91dGVkPXtwcm9wcy5yb3V0ZWR9XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtwcm9wcy5iYXNlQ3NzQ2xhc3MgKyAnX19pdGVtLWxpbmsnfVxuICAgICAgICAgICAgICAgIHRvPXtwcm9wcy51cmx9XG4gICAgICAgICAgICAgICAgaHJlZkxhbmc9e3Byb3BzLmxhbmd1YWdlfVxuICAgICAgICAgICAgICAgIGxhbmc9e3Byb3BzLmxhbmd1YWdlfVxuICAgICAgICAgICAgICAgIHJlbD1cImFsdGVybmF0ZVwiXG4gICAgICAgICAgICAgICAgdGl0bGU9e3Byb3BzLnRpdGxlfT57cHJvcHMudGl0bGV9PC9Sb3V0ZWRMaW5rPlxuICAgICAgICApXG4gICAgfWVsc2V7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9eyBwcm9wcy5iYXNlQ3NzQ2xhc3MgKyAnX19pdGVtLXRpdGxlJ30gbGFuZz17cHJvcHMubGFuZ3VhZ2V9Pntwcm9wcy50aXRsZX08L3NwYW4+XG4gICAgICAgIClcbiAgICB9XG59O1xuXG5leHBvcnQgY29uc3QgTGFuZ3VhZ2VOYXZpZ2F0aW9uVjFHcm91cCA9IChpdGVtOkxhbmd1YWdlTmF2aWdhdGlvblYxSXRlbSkgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgICB7ISFpdGVtLmNoaWxkcmVuICYmIGl0ZW0uY2hpbGRyZW4ubGVuZ3RoID4gMCAmJiAgKFxuICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9e2l0ZW0uYmFzZUNzc0NsYXNzICsgJ19fZ3JvdXAnfT5cbiAgICAgICAgICAgICAgICAgICAge2l0ZW0uY2hpbGRyZW4ubWFwKFxuICAgICAgICAgICAgICAgICAgICAgICAgKGl0ZW0saW5kZXgpID0+IDxMYW5ndWFnZU5hdmlnYXRpb25WMUl0ZW0gey4uLml0ZW19IGtleT17aXRlbS5iYXNlQ3NzQ2xhc3MgKyAnX19pdGVtLScgKyBpbmRleH0gaW5kZXg9e2luZGV4fS8+XG4gICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICl9XG4gICAgICAgIDwvPlxuICAgIClcbn07XG5cbmV4cG9ydCBjb25zdCBMYW5ndWFnZU5hdmlnYXRpb25WMUl0ZW0gPSAoaXRlbTpMYW5ndWFnZU5hdmlnYXRpb25WMUl0ZW0pID0+IHtcblxuICAgIGNvbnN0IGlzQWN0aXZlID0gZGV0ZXJtaW5lSXNBY3RpdmUoaXRlbSk7XG4gICAgY29uc3QgY3NzQ2xhc3MgPSBpdGVtLmJhc2VDc3NDbGFzcyArICdfX2l0ZW0gJyArXG4gICAgICAgICAgICAgICAgICAgIGl0ZW0uYmFzZUNzc0NsYXNzICsgJ19faXRlbS0tbGV2ZWwtJyArIGl0ZW0ubGV2ZWwgKyAnICcgKyBcbiAgICAgICAgICAgICAgICAgICAgYCR7aXRlbS5iYXNlQ3NzQ2xhc3N9X19pdGVtLS1jb3VudHJ5Y29kZS0ke2l0ZW0uY291bnRyeX0gJHtpdGVtLmJhc2VDc3NDbGFzc31fX2l0ZW0tLWxhbmdjb2RlLSR7aXRlbS5sYW5ndWFnZX1gICsgXG4gICAgICAgICAgICAgICAgICAgICArIChpc0FjdGl2ZSA/ICcgJyArIGl0ZW0uYmFzZUNzc0NsYXNzICsgJ19faXRlbS0tYWN0aXZlJyA6ICcnKTtcbiAgICByZXR1cm4gKFxuICAgICAgICA8bGkgY2xhc3NOYW1lPXtjc3NDbGFzc30+XG4gICAgICAgICAgICAgICAgPExhbmd1YWdlTmF2aWdhdGlvblYxTGluayB7Li4uaXRlbX0vPlxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgISFpdGVtLmNoaWxkcmVuICYmIGl0ZW0uY2hpbGRyZW4ubGVuZ3RoID4gMCAmJiA8TmF2aWdhdGlvblYxR3JvdXAgey4uLml0ZW19Lz5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgIDwvbGk+XG4gICAgKVxuXG59O1xuXG5jb25zdCBMYW5ndWFnZU5hdmlnYXRpb25WMUltcGwgPSAocHJvcHM6TGFuZ3VhZ2VOYXZpZ2F0aW9uVjFNb2RlbCkgPT4ge1xuICAgIGNvbnN0IHNlbGZDbG9uZTpMYW5ndWFnZU5hdmlnYXRpb25WMUl0ZW0gPSB7XG4gICAgICAgIGFjdGl2ZTogZmFsc2UsXG4gICAgICAgIGxhc3RNb2RpZmllZDogMCxcbiAgICAgICAgbGV2ZWw6IDAsXG4gICAgICAgIHBhdGg6IFwiXCIsXG4gICAgICAgIHRpdGxlOiBcIlwiLFxuICAgICAgICB1cmw6IFwiXCIsXG4gICAgICAgIGxhbmd1YWdlOiBcIlwiLFxuICAgICAgICBjb3VudHJ5OiBcIlwiLFxuICAgICAgICBsb2NhbGU6IFwiXCIsXG4gICAgICAgIGNoaWxkcmVuOiBwcm9wcy5pdGVtc1xuICAgIH07XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8bmF2IGNsYXNzTmFtZT17cHJvcHMuYmFzZUNzc0NsYXNzfVxuICAgICAgICAgICAgIHJvbGU9XCJuYXZpZ2F0aW9uXCJcbiAgICAgICAgICAgICBpdGVtU2NvcGUgaXRlbVR5cGU9XCJodHRwOi8vc2NoZW1hLm9yZy9TaXRlTmF2aWdhdGlvbkVsZW1lbnRcIlxuICAgICAgICAgICAgIGFyaWEtbGFiZWw9e3Byb3BzLmFjY2Vzc2liaWxpdHlMYWJlbH0+XG4gICAgICAgICAgICA8TGFuZ3VhZ2VOYXZpZ2F0aW9uVjFHcm91cCB7Li4uc2VsZkNsb25lfS8+XG4gICAgICAgIDwvbmF2PlxuICAgIClcbn07XG5cbmNvbnN0IExhbmd1YWdlTmF2aWdhdGlvbiA9IChwcm9wczpMYW5ndWFnZU5hdmlnYXRpb25WMU1vZGVsKSA9PiB7XG4gICAgY29uc3QgV3JhcHBlZCA9IHdpdGhDb25kaXRpb25hbFBsYWNlSG9sZGVyKHdpdGhTdGFuZGFyZEJhc2VDc3NDbGFzcyhMYW5ndWFnZU5hdmlnYXRpb25WMUltcGwsIFwiY21wLWxhbmd1YWdlbmF2aWdhdGlvblwiKSwgTGFuZ3VhZ2VOYXZpZ2F0aW9uVjFJc0VtcHR5Rm4sIFwiTGFuZ3VhZ2VOYXZpZ2F0aW9uIFYxXCIpXG4gICAgcmV0dXJuIDxXcmFwcGVkIHsuLi5wcm9wc30vPlxufTtcblxuZXhwb3J0IGRlZmF1bHQgTGFuZ3VhZ2VOYXZpZ2F0aW9uOyJdfQ==

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9yYWFpam1hay93b3Jrc3BhY2UvYWVtLXJlYWN0LWNvcmUtd2NtLWNvbXBvbmVudHMvZXhhbXBsZXMvcmVhY3Qtc3BhY29tcG9uZW50cy1leGFtcGxlLXByb2plY3QvQGFkb2JlL2FlbS1jb3JlLWNvbXBvbmVudHMtcmVhY3QtYmFzZS93ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCIvVXNlcnMvcmFhaWptYWsvd29ya3NwYWNlL2FlbS1yZWFjdC1jb3JlLXdjbS1jb21wb25lbnRzL2V4YW1wbGVzL3JlYWN0LXNwYWNvbXBvbmVudHMtZXhhbXBsZS1wcm9qZWN0L0BhZG9iZS9hZW0tY29yZS1jb21wb25lbnRzLXJlYWN0LWJhc2Uvd2VicGFjay9ib290c3RyYXAiLCIvVXNlcnMvcmFhaWptYWsvd29ya3NwYWNlL2FlbS1yZWFjdC1jb3JlLXdjbS1jb21wb25lbnRzL2V4YW1wbGVzL3JlYWN0LXNwYWNvbXBvbmVudHMtZXhhbXBsZS1wcm9qZWN0L0BhZG9iZS9hZW0tY29yZS1jb21wb25lbnRzLXJlYWN0LWJhc2Uvc3JjL0Fic3RyYWN0Q29yZUNvbXBvbmVudC50c3giLCIvVXNlcnMvcmFhaWptYWsvd29ya3NwYWNlL2FlbS1yZWFjdC1jb3JlLXdjbS1jb21wb25lbnRzL2V4YW1wbGVzL3JlYWN0LXNwYWNvbXBvbmVudHMtZXhhbXBsZS1wcm9qZWN0L0BhZG9iZS9hZW0tY29yZS1jb21wb25lbnRzLXJlYWN0LWJhc2Uvc3JjL2NvbW1vbi9wbGFjZWhvbGRlci50c3giLCIvVXNlcnMvcmFhaWptYWsvd29ya3NwYWNlL2FlbS1yZWFjdC1jb3JlLXdjbS1jb21wb25lbnRzL2V4YW1wbGVzL3JlYWN0LXNwYWNvbXBvbmVudHMtZXhhbXBsZS1wcm9qZWN0L0BhZG9iZS9hZW0tY29yZS1jb21wb25lbnRzLXJlYWN0LWJhc2Uvc3JjL2xheW91dC9sYW5ndWFnZS1uYXZpZ2F0aW9uL3YxL0xhbmd1YWdlTmF2aWdhdGlvblYxLnRzeCIsIi9Vc2Vycy9yYWFpam1hay93b3Jrc3BhY2UvYWVtLXJlYWN0LWNvcmUtd2NtLWNvbXBvbmVudHMvZXhhbXBsZXMvcmVhY3Qtc3BhY29tcG9uZW50cy1leGFtcGxlLXByb2plY3QvQGFkb2JlL2FlbS1jb3JlLWNvbXBvbmVudHMtcmVhY3QtYmFzZS9zcmMvbGF5b3V0L2xhbmd1YWdlLW5hdmlnYXRpb24vdjEvTGFuZ3VhZ2VOYXZpZ2F0aW9uVjFJc0VtcHR5Rm4udHMiLCIvVXNlcnMvcmFhaWptYWsvd29ya3NwYWNlL2FlbS1yZWFjdC1jb3JlLXdjbS1jb21wb25lbnRzL2V4YW1wbGVzL3JlYWN0LXNwYWNvbXBvbmVudHMtZXhhbXBsZS1wcm9qZWN0L0BhZG9iZS9hZW0tY29yZS1jb21wb25lbnRzLXJlYWN0LWJhc2Uvc3JjL2xheW91dC9uYXZpZ2F0aW9uL3YxL05hdmlnYXRpb25WMS50c3giLCIvVXNlcnMvcmFhaWptYWsvd29ya3NwYWNlL2FlbS1yZWFjdC1jb3JlLXdjbS1jb21wb25lbnRzL2V4YW1wbGVzL3JlYWN0LXNwYWNvbXBvbmVudHMtZXhhbXBsZS1wcm9qZWN0L0BhZG9iZS9hZW0tY29yZS1jb21wb25lbnRzLXJlYWN0LWJhc2Uvc3JjL2xheW91dC9uYXZpZ2F0aW9uL3YxL05hdmlnYXRpb25WMUlzRW1wdHlGbi50cyIsIi9Vc2Vycy9yYWFpam1hay93b3Jrc3BhY2UvYWVtLXJlYWN0LWNvcmUtd2NtLWNvbXBvbmVudHMvZXhhbXBsZXMvcmVhY3Qtc3BhY29tcG9uZW50cy1leGFtcGxlLXByb2plY3QvQGFkb2JlL2FlbS1jb3JlLWNvbXBvbmVudHMtcmVhY3QtYmFzZS9zcmMvcm91dGluZy9Sb3V0ZWRMaW5rLnRzeCIsIi9Vc2Vycy9yYWFpam1hay93b3Jrc3BhY2UvYWVtLXJlYWN0LWNvcmUtd2NtLWNvbXBvbmVudHMvZXhhbXBsZXMvcmVhY3Qtc3BhY29tcG9uZW50cy1leGFtcGxlLXByb2plY3Qvd2VicGFjazovQGFkb2JlL2FlbS1jb3JlLWNvbXBvbmVudHMtcmVhY3QtYmFzZS9leHRl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a0QsU0FBbEQsQ0FBTCxDQURJLENBQVo7QUFFQSxTQVpPOztBQWFBO0FBQ1AsMEJBQW9CLDBGQUEyQix3RkFBd0IsZ0JBQXhCLEVBQXdCLGdCQUF4QixDQUEzQixFQUF5Riw0RUFBekYsRUFBOEcsZUFBOUcsQ0FBcEI7QUFDQSxpQkFBVyw2Q0FBSyxhQUFMLENBQUssT0FBTCxFQUFLLGtCQUF3QyxLQUF4QyxDQUFMLENBQVg7QUFDQSxTQUhPO0FBSVE7OztBQUFBLHNELENBQ2Y7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcERBO0FBQUE7OztBQUFBO0FBQUE7QUFBQTs7QUFBTztBQUNQO0FBQ0EsUyxDQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNIQTtBQUFBOzs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7OztBQUFBO0FBQUE7OztBQUFBO0FBQUE7QUFBQTtBQUFBOzs7QUFBQTtBQUFBOzs7Ozs7Ozs7Ozs7Ozs7OztBQWlCTztBQUNQO0FBQVcsY0FBWDtBQUFXLG9CQUFYO0FBQVc7QUFBWCxjQUF5QyxLQUF6Qzs7QUFDQTtBQUNBLG1CQUFlLDZDQUFLLGFBQUwsQ0FBSyxHQUFMLEVBQUs7QUFBbUM7QUFBbkMsZUFBK0MsVUFBL0MsQ0FBTCxDQUFmO0FBQ0E7O0FBQ0E7QUFDQSwyQ0FDUyw2Q0FBSyxhQUFMLENBQUssR0FBTCxFQUFLO0FBQW1DO0FBQW5DLGFBQThDLFVBQTlDLENBQUwsQ0FEVCxHQUdhLDZDQUFLLGFBQUwsQ0FBb0IscURBQXBCLEVBQThCLGtCQUFrQixVQUFsQixFQUFrQjtBQUFlO0FBQWYsV0FBbEIsQ0FBOUIsQ0FIYjtBQUlBLFNBVk8sQyxDQVdQOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzVCQTs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7O0FUVUE7Q0FWQSxFIiwiZmlsZSI6ImpzL0xhbmd1YWdlTmF2aWdhdGlvblYxLjE2ZjU2NTZmLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiQGFkb2JlL2FlbS1jb3JlLWNvbXBvbmVudHMtcmVhY3QtYmFzZVwiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJAYWRvYmUvYWVtLWNvcmUtY29tcG9uZW50cy1yZWFjdC1iYXNlXCJdID0gZmFjdG9yeSgpO1xufSkodHlwZW9mIHNlbGYgIT09ICd1bmRlZmluZWQnID8gc2VsZiA6IHRoaXMsIGZ1bmN0aW9uKCkge1xucmV0dXJuICIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAxMik7XG4iLCIvKlxuICogIENvcHlyaWdodCAyMDIwIEFkb2JlXG4gKlxuICogIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiAgeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICAgICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqICBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiAgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiAgU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBFZGl0b3JQbGFjZUhvbGRlciB9IGZyb20gXCIuL2NvbW1vbi9wbGFjZWhvbGRlclwiO1xuZXhwb3J0IGNvbnN0IHdpdGhTdGFuZGFyZEJhc2VDc3NDbGFzcyA9IChDb21wb25lbnQsIGRlZmF1bHRCYXNlQ3NzQ2xhc3MpID0+IHtcbiAgICByZXR1cm4gKHByb3BzKSA9PiB7XG4gICAgICAgIGNvbnN0IGJhc2VDc3NDbGFzcyA9IHByb3BzLmJhc2VDc3NDbGFzcztcbiAgICAgICAgY29uc3QgdG9CZVVzZWRDc3NDbGFzcyA9IGJhc2VDc3NDbGFzcyAmJiBiYXNlQ3NzQ2xhc3MudHJpbSgpLmxlbmd0aCA+IDAgPyBiYXNlQ3NzQ2xhc3MgOiBkZWZhdWx0QmFzZUNzc0NsYXNzO1xuICAgICAgICBjb25zdCBtZXJnZWRQcm9wcyA9IHtcbiAgICAgICAgICAgIC4uLnByb3BzLFxuICAgICAgICAgICAgYmFzZUNzc0NsYXNzOiB0b0JlVXNlZENzc0NsYXNzXG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KENvbXBvbmVudCwgT2JqZWN0LmFzc2lnbih7fSwgbWVyZ2VkUHJvcHMpKTtcbiAgICB9O1xufTtcbmV4cG9ydCBjb25zdCB3aXRoQ29uZGl0aW9uYWxQbGFjZUhvbGRlciA9IChDb21wb25lbnQsIGlzRW1wdHksIGNvbXBvbmVudFRpdGxlLCBlbXB0eVRleHQpID0+IHtcbiAgICByZXR1cm4gKHByb3BzKSA9PiB7XG4gICAgICAgIGNvbnN0IGlzRW1wdHlSZXN1bHQgPSBpc0VtcHR5KHByb3BzKTtcbiAgICAgICAgY29uc3QgeyBoaWRlUGxhY2VIb2xkZXIgPSBmYWxzZSwgaXNJbkVkaXRvciA9IGZhbHNlIH0gPSBwcm9wcztcbiAgICAgICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KFJlYWN0LkZyYWdtZW50LCBudWxsLFxuICAgICAgICAgICAgIWlzRW1wdHlSZXN1bHQgJiZcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KENvbXBvbmVudCwgT2JqZWN0LmFzc2lnbih7fSwgcHJvcHMpKSxcbiAgICAgICAgICAgIChpc0VtcHR5UmVzdWx0ICYmIGlzSW5FZGl0b3IgJiYgIWhpZGVQbGFjZUhvbGRlcikgJiZcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KEVkaXRvclBsYWNlSG9sZGVyLCB7IGVtcHR5VGV4dEFwcGVuZDogZW1wdHlUZXh0LCBjb21wb25lbnRUaXRsZTogY29tcG9uZW50VGl0bGUgfSkpKTtcbiAgICB9O1xufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaVFXSnpkSEpoWTNSRGIzSmxRMjl0Y0c5dVpXNTBMbXB6SWl3aWMyOTFjbU5sVW05dmRDSTZJaUlzSW5OdmRYSmpaWE1pT2xzaVFXSnpkSEpoWTNSRGIzSmxRMjl0Y0c5dVpXNTBMblJ6ZUNKZExDSnVZVzFsY3lJNlcxMHNJbTFoY0hCcGJtZHpJam9pUVVGQlFUczdPenM3T3pzN096czdPenM3UjBGalJ6dEJRVVZJTEU5QlFVOHNTMEZCU3l4TFFVRkxMRTFCUVUwc1QwRkJUeXhEUVVGRE8wRkJSeTlDTEU5QlFVOHNSVUZCUXl4cFFrRkJhVUlzUlVGQlF5eE5RVUZOTEhOQ1FVRnpRaXhEUVVGRE8wRkJaWFpFTEUxQlFVMHNRMEZCUXl4TlFVRk5MSGRDUVVGM1FpeEhRVUZITEVOQlJYQkRMRk5CUVRCQ0xFVkJRekZDTEcxQ1FVRXdRaXhGUVVOS0xFVkJRVVU3U1VGRGVFSXNUMEZCVHl4RFFVRkRMRXRCUVU4c1JVRkJSU3hGUVVGRk8xRkJSV1lzVFVGQlRTeFpRVUZaTEVkQlFVY3NTMEZCU3l4RFFVRkRMRmxCUVZrc1EwRkJRenRSUVVONFF5eE5RVUZOTEdkQ1FVRm5RaXhIUVVGSExGbEJRVmtzU1VGQlNTeFpRVUZaTEVOQlFVTXNTVUZCU1N4RlFVRkZMRU5CUVVNc1RVRkJUU3hIUVVGSExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNXVUZCV1N4RFFVRkRMRU5CUVVNc1EwRkJReXh0UWtGQmJVSXNRMEZCUXp0UlFVVTNSeXhOUVVGTkxGZEJRVmNzUjBGQlN6dFpRVU5zUWl4SFFVRkhMRXRCUVVzN1dVRkRVaXhaUVVGWkxFVkJRVVVzWjBKQlFXZENPMU5CUTJwRExFTkJRVU03VVVGRlJpeFBRVUZQTEc5Q1FVRkRMRk5CUVZNc2IwSkJRVXNzVjBGQlZ5eEZRVUZKTEVOQlFVTTdTVUZETVVNc1EwRkJReXhEUVVGQk8wRkJRMHdzUTBGQlF5eERRVUZETzBGQlJVWXNUVUZCVFN4RFFVRkRMRTFCUVUwc01FSkJRVEJDTEVkQlFVY3NRMEZGTVVJc1UwRkJNRUlzUlVGRE1VSXNUMEZCTkVJc1JVRkROVUlzWTBGQmMwSXNSVUZCUlN4VFFVRnBRaXhGUVVOdVFpeEZRVUZGTzBsQlEzQkRMRTlCUVU4c1EwRkJReXhMUVVGUExFVkJRVVVzUlVGQlJUdFJRVVZtTEUxQlFVMHNZVUZCWVN4SFFVRlhMRTlCUVU4c1EwRkJReXhMUVVGTExFTkJRVU1zUTBGQlF6dFJRVU0zUXl4TlFVRk5MRVZCUVVNc1pVRkJaU3hIUVVGSExFdEJRVXNzUlVGQlJTeFZRVUZWTEVkQlFVY3NTMEZCU3l4RlFVRkRMRWRCUVVjc1MwRkJTeXhEUVVGRE8xRkJSVFZFTEU5QlFVOHNRMEZEU0R0WlFVTk5MRU5CUVVNc1lVRkJZVHRuUWtGRGFFSXNiMEpCUVVNc1UwRkJVeXh2UWtGQlN5eExRVUZMTEVWQlFVazdXVUZIY0VJc1EwRkJReXhoUVVGaExFbEJRVWtzVlVGQlZTeEpRVUZKTEVOQlFVTXNaVUZCWlN4RFFVRkRPMmRDUVVOcVJDeHZRa0ZCUXl4cFFrRkJhVUlzU1VGRFpDeGxRVUZsTEVWQlFVVXNVMEZCVXl4RlFVTXhRaXhqUVVGakxFVkJRVVVzWTBGQll5eEhRVU5vUXl4RFFVVlFMRU5CUTA0c1EwRkJRenRKUVVOT0xFTkJRVU1zUTBGQlFUdEJRVU5NTEVOQlFVTXNRMEZCUXlJc0luTnZkWEpqWlhORGIyNTBaVzUwSWpwYklpOHFYRzRnS2lBZ1EyOXdlWEpwWjJoMElESXdNakFnUVdSdlltVmNiaUFxWEc0Z0tpQWdUR2xqWlc1elpXUWdkVzVrWlhJZ2RHaGxJRUZ3WVdOb1pTQk1hV05sYm5ObExDQldaWEp6YVc5dUlESXVNQ0FvZEdobElGd2lUR2xqWlc1elpWd2lLVHRjYmlBcUlDQjViM1VnYldGNUlHNXZkQ0IxYzJVZ2RHaHBjeUJtYVd4bElHVjRZMlZ3ZENCcGJpQmpiMjF3YkdsaGJtTmxJSGRwZEdnZ2RHaGxJRXhwWTJWdWMyVXVYRzRnS2lBZ1dXOTFJRzFoZVNCdlluUmhhVzRnWVNCamIzQjVJRzltSUhSb1pTQk1hV05sYm5ObElHRjBYRzRnS2x4dUlDb2dJQ0FnSUNCb2RIUndPaTh2ZDNkM0xtRndZV05vWlM1dmNtY3ZiR2xqWlc1elpYTXZURWxEUlU1VFJTMHlMakJjYmlBcVhHNGdLaUFnVlc1c1pYTnpJSEpsY1hWcGNtVmtJR0o1SUdGd2NHeHBZMkZpYkdVZ2JHRjNJRzl5SUdGbmNtVmxaQ0IwYnlCcGJpQjNjbWwwYVc1bkxDQnpiMlowZDJGeVpWeHVJQ29nSUdScGMzUnlhV0oxZEdWa0lIVnVaR1Z5SUhSb1pTQk1hV05sYm5ObElHbHpJR1JwYzNSeWFXSjFkR1ZrSUc5dUlHRnVJRndpUVZNZ1NWTmNJaUJDUVZOSlV5eGNiaUFxSUNCWFNWUklUMVZVSUZkQlVsSkJUbFJKUlZNZ1QxSWdRMDlPUkVsVVNVOU9VeUJQUmlCQlRsa2dTMGxPUkN3Z1pXbDBhR1Z5SUdWNGNISmxjM01nYjNJZ2FXMXdiR2xsWkM1Y2JpQXFJQ0JUWldVZ2RHaGxJRXhwWTJWdWMyVWdabTl5SUhSb1pTQnpjR1ZqYVdacFl5QnNZVzVuZFdGblpTQm5iM1psY201cGJtY2djR1Z5YldsemMybHZibk1nWVc1a1hHNGdLaUFnYkdsdGFYUmhkR2x2Ym5NZ2RXNWtaWElnZEdobElFeHBZMlZ1YzJVdVhHNGdLaTljYmx4dWFXMXdiM0owSUNvZ1lYTWdVbVZoWTNRZ1puSnZiU0FuY21WaFkzUW5PMXh1YVcxd2IzSjBJSHREYjIxd2IyNWxiblJVZVhCbGZTQm1jbTl0SUNkeVpXRmpkQ2M3WEc1Y2JtbHRjRzl5ZENCN1JXUnBkRzl5VUd4aFkyVkliMnhrWlhKOUlHWnliMjBnWENJdUwyTnZiVzF2Ymk5d2JHRmpaV2h2YkdSbGNsd2lPMXh1WEc1bGVIQnZjblFnYVc1MFpYSm1ZV05sSUVoaGMwSmhjMlZEYzNORGJHRnpjeUI3WEc0Z0lDQWdZbUZ6WlVOemMwTnNZWE56UHpvZ2MzUnlhVzVuWEc1OVhHNWNibVY0Y0c5eWRDQnBiblJsY21aaFkyVWdRMjl5WlVOdmJYQnZibVZ1ZEUxdlpHVnNJR1Y0ZEdWdVpITWdTR0Z6UW1GelpVTnpjME5zWVhOemUxeHVJQ0FnSUdocFpHVlFiR0ZqWlVodmJHUmxjajg2SUdKdmIyeGxZVzVjYmlBZ0lDQnBjMGx1UldScGRHOXlQenBpYjI5c1pXRnVYRzU5WEc1Y2JtVjRjRzl5ZENCcGJuUmxjbVpoWTJVZ1EyOXlaVU52YlhCdmJtVnVkRk4wWVhSbElIdGNibHh1ZlZ4dVhHNWxlSEJ2Y25RZ1kyOXVjM1FnZDJsMGFGTjBZVzVrWVhKa1FtRnpaVU56YzBOc1lYTnpJRDBnUEUwZ1pYaDBaVzVrY3lCRGIzSmxRMjl0Y0c5dVpXNTBUVzlrWld3K1hHNG9YRzRnSUNBZ1EyOXRjRzl1Wlc1ME9rTnZiWEJ2Ym1WdWRGUjVjR1U4VFQ0c1hHNGdJQ0FnWkdWbVlYVnNkRUpoYzJWRGMzTkRiR0Z6Y3pwemRISnBibWRjYmlrNlVtVmhZM1F1UTI5dGNHOXVaVzUwVkhsd1pUeE5QaUFnUFQ0Z2UxeHVJQ0FnSUhKbGRIVnliaUFvY0hKdmNITTZUU2tnUFQ0Z2UxeHVYRzRnSUNBZ0lDQWdJR052Ym5OMElHSmhjMlZEYzNORGJHRnpjeUE5SUhCeWIzQnpMbUpoYzJWRGMzTkRiR0Z6Y3p0Y2JpQWdJQ0FnSUNBZ1kyOXVjM1FnZEc5Q1pWVnpaV1JEYzNORGJHRnpjeUE5SUdKaGMyVkRjM05EYkdGemN5QW1KaUJpWVhObFEzTnpRMnhoYzNNdWRISnBiU2dwTG14bGJtZDBhQ0ErSURBZ1B5QmlZWE5sUTNOelEyeGhjM01nT2lCa1pXWmhkV3gwUW1GelpVTnpjME5zWVhOek8xeHVYRzRnSUNBZ0lDQWdJR052Ym5OMElHMWxjbWRsWkZCeWIzQnpPaUJOUFNCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0F1TGk1d2NtOXdjeXhjYmlBZ0lDQWdJQ0FnSUNBZ0lHSmhjMlZEYzNORGJHRnpjem9nZEc5Q1pWVnpaV1JEYzNORGJHRnpjMXh1SUNBZ0lDQWdJQ0I5TzF4dVhHNGdJQ0FnSUNBZ0lISmxkSFZ5YmlBOFEyOXRjRzl1Wlc1MElIc3VMaTV0WlhKblpXUlFjbTl3YzMwZ0x6NDdYRzRnSUNBZ2ZWeHVmVHRjYmx4dVpYaHdiM0owSUdOdmJuTjBJSGRwZEdoRGIyNWthWFJwYjI1aGJGQnNZV05sU0c5c1pHVnlJRDBnUEUwZ1pYaDBaVzVrY3lCRGIzSmxRMjl0Y0c5dVpXNTBUVzlrWld3K1hHNGdJQ0FnSUNBZ0lDQWdJQ0FvWEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnUTI5dGNHOXVaVzUwT2tOdmJYQnZibVZ1ZEZSNWNHVThUVDRzSUZ4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUdselJXMXdkSGs2S0hCeWIzQnpPazBwSUQwK0lHSnZiMnhsWVc0c1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ1kyOXRjRzl1Wlc1MFZHbDBiR1UvT25OMGNtbHVaeXdnWlcxd2RIbFVaWGgwUHpwemRISnBibWRjYmlBZ0lDQWdJQ0FnSUNBZ0lDazZVbVZoWTNRdVEyOXRjRzl1Wlc1MFZIbHdaVHhOUGlBZ1BUNGdlMXh1SUNBZ0lISmxkSFZ5YmlBb2NISnZjSE02VFNrZ1BUNGdlMXh1WEc0Z0lDQWdJQ0FnSUdOdmJuTjBJR2x6Ulcxd2RIbFNaWE4xYkhRNlltOXZiR1ZoYmlBOUlHbHpSVzF3ZEhrb2NISnZjSE1wTzF4dUlDQWdJQ0FnSUNCamIyNXpkQ0I3YUdsa1pWQnNZV05sU0c5c1pHVnlJRDBnWm1Gc2MyVXNJR2x6U1c1RlpHbDBiM0lnUFNCbVlXeHpaWDBnUFNCd2NtOXdjenRjYmx4dUlDQWdJQ0FnSUNCeVpYUjFjbTRnS0Z4dUlDQWdJQ0FnSUNBZ0lDQWdQRDVjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0I3SUNGcGMwVnRjSFI1VW1WemRXeDBJQ1ltWEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnUEVOdmJYQnZibVZ1ZENCN0xpNHVjSEp2Y0hOOUlDOCtYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdmVnh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0tHbHpSVzF3ZEhsU1pYTjFiSFFnSmlZZ2FYTkpia1ZrYVhSdmNpQW1KaUFoYUdsa1pWQnNZV05sU0c5c1pHVnlLU0FtSmx4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQThSV1JwZEc5eVVHeGhZMlZJYjJ4a1pYSmNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lHVnRjSFI1VkdWNGRFRndjR1Z1WkQxN1pXMXdkSGxVWlhoMGZWeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ1kyOXRjRzl1Wlc1MFZHbDBiR1U5ZTJOdmJYQnZibVZ1ZEZScGRHeGxmVnh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBdlBseHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lIMWNiaUFnSUNBZ0lDQWdJQ0FnSUR3dlBseHVJQ0FnSUNBZ0lDQXBPMXh1SUNBZ0lIMWNibjA3SWwxOSIsIi8qXG4gKiAgQ29weXJpZ2h0IDIwMjAgQWRvYmVcbiAqXG4gKiAgTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqICB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiAgWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICAgICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiAgVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqICBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqICBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiAgbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5jb25zdCBERUZBVUxUX0VNUFRZX1RFWFRfTEFCRUwgPSAnUGxlYXNlIGNvbmZpZ3VyZSB0aGUgY29tcG9uZW50JztcbmV4cG9ydCBjb25zdCBFZGl0b3JQbGFjZUhvbGRlciA9IChwcm9wcykgPT4ge1xuICAgIGNvbnN0IHBhcnQxID0gKHByb3BzLmNvbXBvbmVudFRpdGxlICE9IG51bGwgJiYgcHJvcHMuY29tcG9uZW50VGl0bGUubGVuZ3RoID4gMCkgPyBwcm9wcy5jb21wb25lbnRUaXRsZSArICcgLSAnIDogJyc7XG4gICAgY29uc3QgcGFydDIgPSAocHJvcHMuZW1wdHlUZXh0QXBwZW5kICE9IG51bGwpID8gcHJvcHMuZW1wdHlUZXh0QXBwZW5kIDogREVGQVVMVF9FTVBUWV9URVhUX0xBQkVMO1xuICAgIGNvbnN0IGVtcHR5VGV4dCA9IHBhcnQxICsgcGFydDI7XG4gICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3NOYW1lOiAnY3EtcGxhY2Vob2xkZXInICsgKHByb3BzLmNsYXNzQXBwZW5kICE9IG51bGwgPyAnICcgKyBwcm9wcy5jbGFzc0FwcGVuZCA6ICcnKSB9LCBlbXB0eVRleHQpKTtcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2ljR3hoWTJWb2IyeGtaWEl1YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pSWl3aWMyOTFjbU5sY3lJNld5SndiR0ZqWldodmJHUmxjaTUwYzNnaVhTd2libUZ0WlhNaU9sdGRMQ0p0WVhCd2FXNW5jeUk2SWtGQlFVRTdPenM3T3pzN096czdPenM3TzBkQlkwYzdRVUZEU0N4UFFVRlBMRXRCUVd0Q0xFMUJRVTBzVDBGQlR5eERRVUZETzBGQlQzWkRMRTFCUVUwc2QwSkJRWGRDTEVkQlFVY3NaME5CUVdkRExFTkJRVU03UVVGRmJFVXNUVUZCVFN4RFFVRkRMRTFCUVUwc2FVSkJRV2xDTEVkQlFVY3NRMEZCUXl4TFFVRnpRaXhGUVVGRkxFVkJRVVU3U1VGRmVFUXNUVUZCVFN4TFFVRkxMRWRCUVZjc1EwRkJReXhMUVVGTExFTkJRVU1zWTBGQll5eEpRVUZKTEVsQlFVa3NTVUZCU1N4TFFVRkxMRU5CUVVNc1kwRkJZeXhEUVVGRExFMUJRVTBzUjBGQlJ5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVVc1MwRkJTeXhEUVVGRExHTkJRV01zUjBGQlNTeExRVUZMTEVOQlFVTXNRMEZCUXl4RFFVRkRMRVZCUVVVc1EwRkJRenRKUVVNNVNDeE5RVUZOTEV0QlFVc3NSMEZCVnl4RFFVRkRMRXRCUVVzc1EwRkJReXhsUVVGbExFbEJRVWtzU1VGQlNTeERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkZMRXRCUVVzc1EwRkJReXhsUVVGbExFTkJRVU1zUTBGQlF5eERRVUZETEhkQ1FVRjNRaXhEUVVGRE8wbEJRekZITEUxQlFVMHNVMEZCVXl4SFFVRkhMRXRCUVVzc1IwRkJSeXhMUVVGTExFTkJRVU03U1VGRmFFTXNUMEZCVHl4RFFVTklMRFpDUVVOSkxGTkJRVk1zUlVGQlJTeG5Ra0ZCWjBJc1IwRkJSeXhEUVVGRExFdEJRVXNzUTBGQlF5eFhRVUZYTEVsQlFVa3NTVUZCU1N4RFFVRkJMRU5CUVVNc1EwRkJReXhIUVVGSExFZEJRVWNzUzBGQlN5eERRVUZETEZkQlFWY3NRMEZCUXl4RFFVRkRMRU5CUVVNc1JVRkJSU3hEUVVGRExFbEJRM1JHTEZOQlFWTXNRMEZEVWl4RFFVTlVMRU5CUVVFN1FVRkRUQ3hEUVVGRExFTkJRVU1pTENKemIzVnlZMlZ6UTI5dWRHVnVkQ0k2V3lJdktseHVJQ29nSUVOdmNIbHlhV2RvZENBeU1ESXdJRUZrYjJKbFhHNGdLbHh1SUNvZ0lFeHBZMlZ1YzJWa0lIVnVaR1Z5SUhSb1pTQkJjR0ZqYUdVZ1RHbGpaVzV6WlN3Z1ZtVnljMmx2YmlBeUxqQWdLSFJvWlNCY0lreHBZMlZ1YzJWY0lpazdYRzRnS2lBZ2VXOTFJRzFoZVNCdWIzUWdkWE5sSUhSb2FYTWdabWxzWlNCbGVHTmxjSFFnYVc0Z1kyOXRjR3hwWVc1alpTQjNhWFJvSUhSb1pTQk1hV05sYm5ObExseHVJQ29nSUZsdmRTQnRZWGtnYjJKMFlXbHVJR0VnWTI5d2VTQnZaaUIwYUdVZ1RHbGpaVzV6WlNCaGRGeHVJQ3BjYmlBcUlDQWdJQ0FnYUhSMGNEb3ZMM2QzZHk1aGNHRmphR1V1YjNKbkwyeHBZMlZ1YzJWekwweEpRMFZPVTBVdE1pNHdYRzRnS2x4dUlDb2dJRlZ1YkdWemN5QnlaWEYxYVhKbFpDQmllU0JoY0hCc2FXTmhZbXhsSUd4aGR5QnZjaUJoWjNKbFpXUWdkRzhnYVc0Z2QzSnBkR2x1Wnl3Z2MyOW1kSGRoY21WY2JpQXFJQ0JrYVhOMGNtbGlkWFJsWkNCMWJtUmxjaUIwYUdVZ1RHbGpaVzV6WlNCcGN5QmthWE4wY21saWRYUmxaQ0J2YmlCaGJpQmNJa0ZUSUVsVFhDSWdRa0ZUU1ZNc1hHNGdLaUFnVjBsVVNFOVZWQ0JYUVZKU1FVNVVTVVZUSUU5U0lFTlBUa1JKVkVsUFRsTWdUMFlnUVU1WklFdEpUa1FzSUdWcGRHaGxjaUJsZUhCeVpYTnpJRzl5SUdsdGNHeHBaV1F1WEc0Z0tpQWdVMlZsSUhSb1pTQk1hV05sYm5ObElHWnZjaUIwYUdVZ2MzQmxZMmxtYVdNZ2JHRnVaM1ZoWjJVZ1oyOTJaWEp1YVc1bklIQmxjbTFwYzNOcGIyNXpJR0Z1WkZ4dUlDb2dJR3hwYldsMFlYUnBiMjV6SUhWdVpHVnlJSFJvWlNCTWFXTmxibk5sTGx4dUlDb3ZYRzVwYlhCdmNuUWdVbVZoWTNRc0lIdERiMjF3YjI1bGJuUjlJR1p5YjIwZ0ozSmxZV04wSnp0Y2JseHVaWGh3YjNKMElHbHVkR1Z5Wm1GalpTQlFiR0ZqWlVodmJHUmxjazF2WkdWc0lIdGNiaUFnSUNCamIyMXdiMjVsYm5SVWFYUnNaVDg2SUhOMGNtbHVaMXh1SUNBZ0lHTnNZWE56UVhCd1pXNWtQem9nYzNSeWFXNW5YRzRnSUNBZ1pXMXdkSGxVWlhoMFFYQndaVzVrUHpvZ2MzUnlhVzVuWEc1OVhHNWpiMjV6ZENCRVJVWkJWVXhVWDBWTlVGUlpYMVJGV0ZSZlRFRkNSVXdnUFNBblVHeGxZWE5sSUdOdmJtWnBaM1Z5WlNCMGFHVWdZMjl0Y0c5dVpXNTBKenRjYmx4dVpYaHdiM0owSUdOdmJuTjBJRVZrYVhSdmNsQnNZV05sU0c5c1pHVnlJRDBnS0hCeWIzQnpPbEJzWVdObFNHOXNaR1Z5VFc5a1pXd3BJRDArSUh0Y2JseHVJQ0FnSUdOdmJuTjBJSEJoY25ReE9pQnpkSEpwYm1jZ1BTQW9jSEp2Y0hNdVkyOXRjRzl1Wlc1MFZHbDBiR1VnSVQwZ2JuVnNiQ0FtSmlCd2NtOXdjeTVqYjIxd2IyNWxiblJVYVhSc1pTNXNaVzVuZEdnZ1BpQXdLU0EvSUNCd2NtOXdjeTVqYjIxd2IyNWxiblJVYVhSc1pTQXJJQ0FuSUMwZ0p5QTZJQ2NuTzF4dUlDQWdJR052Ym5OMElIQmhjblF5T2lCemRISnBibWNnUFNBb2NISnZjSE11Wlcxd2RIbFVaWGgwUVhCd1pXNWtJQ0U5SUc1MWJHd3BJRDhnSUhCeWIzQnpMbVZ0Y0hSNVZHVjRkRUZ3Y0dWdVpDQTZJRVJGUmtGVlRGUmZSVTFRVkZsZlZFVllWRjlNUVVKRlREdGNiaUFnSUNCamIyNXpkQ0JsYlhCMGVWUmxlSFFnUFNCd1lYSjBNU0FySUhCaGNuUXlPMXh1WEc0Z0lDQWdjbVYwZFhKdUlDaGNiaUFnSUNBZ0lDQWdQR1JwZGx4dUlDQWdJQ0FnSUNBZ0lDQWdZMnhoYzNOT1lXMWxQWHNuWTNFdGNHeGhZMlZvYjJ4a1pYSW5JQ3NnS0hCeWIzQnpMbU5zWVhOelFYQndaVzVrSUNFOUlHNTFiR3cvSUNjZ0p5QXJJSEJ5YjNCekxtTnNZWE56UVhCd1pXNWtJRG9nSnljcGZUNWNiaUFnSUNBZ0lDQWdJQ0FnSUh0bGJYQjBlVlJsZUhSOVhHNGdJQ0FnSUNBZ0lEd3ZaR2wyUGx4dUlDQWdJQ2xjYm4wN0lsMTkiLCIvKlxuICogIENvcHlyaWdodCAyMDIwIEFkb2JlXG4gKlxuICogIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiAgeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICAgICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqICBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiAgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiAgU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgd2l0aENvbmRpdGlvbmFsUGxhY2VIb2xkZXIsIHdpdGhTdGFuZGFyZEJhc2VDc3NDbGFzcyB9IGZyb20gXCIuLi8uLi8uLi9BYnN0cmFjdENvcmVDb21wb25lbnRcIjtcbmltcG9ydCB7IGRldGVybWluZUlzQWN0aXZlLCBOYXZpZ2F0aW9uVjFHcm91cCB9IGZyb20gXCIuLi8uLi9uYXZpZ2F0aW9uL3YxL05hdmlnYXRpb25WMVwiO1xuaW1wb3J0IHsgUm91dGVkTGluayB9IGZyb20gXCIuLi8uLi8uLi9yb3V0aW5nL1JvdXRlZExpbmtcIjtcbmltcG9ydCB7IExhbmd1YWdlTmF2aWdhdGlvblYxSXNFbXB0eUZuIH0gZnJvbSBcIi4vTGFuZ3VhZ2VOYXZpZ2F0aW9uVjFJc0VtcHR5Rm5cIjtcbmV4cG9ydCBjb25zdCBMYW5ndWFnZU5hdmlnYXRpb25WMUxpbmsgPSAocHJvcHMpID0+IHtcbiAgICBpZiAocHJvcHMubGV2ZWwgPiAwKSB7XG4gICAgICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChSb3V0ZWRMaW5rLCB7IGlzUm91dGVkOiBwcm9wcy5yb3V0ZWQsIGNsYXNzTmFtZTogcHJvcHMuYmFzZUNzc0NsYXNzICsgJ19faXRlbS1saW5rJywgdG86IHByb3BzLnVybCwgaHJlZkxhbmc6IHByb3BzLmxhbmd1YWdlLCBsYW5nOiBwcm9wcy5sYW5ndWFnZSwgcmVsOiBcImFsdGVybmF0ZVwiLCB0aXRsZTogcHJvcHMudGl0bGUgfSwgcHJvcHMudGl0bGUpKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChcInNwYW5cIiwgeyBjbGFzc05hbWU6IHByb3BzLmJhc2VDc3NDbGFzcyArICdfX2l0ZW0tdGl0bGUnLCBsYW5nOiBwcm9wcy5sYW5ndWFnZSB9LCBwcm9wcy50aXRsZSkpO1xuICAgIH1cbn07XG5leHBvcnQgY29uc3QgTGFuZ3VhZ2VOYXZpZ2F0aW9uVjFHcm91cCA9IChpdGVtKSA9PiB7XG4gICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KFJlYWN0LkZyYWdtZW50LCBudWxsLCAhIWl0ZW0uY2hpbGRyZW4gJiYgaXRlbS5jaGlsZHJlbi5sZW5ndGggPiAwICYmIChSZWFjdC5jcmVhdGVFbGVtZW50KFwidWxcIiwgeyBjbGFzc05hbWU6IGl0ZW0uYmFzZUNzc0NsYXNzICsgJ19fZ3JvdXAnIH0sIGl0ZW0uY2hpbGRyZW4ubWFwKChpdGVtLCBpbmRleCkgPT4gUmVhY3QuY3JlYXRlRWxlbWVudChMYW5ndWFnZU5hdmlnYXRpb25WMUl0ZW0sIE9iamVjdC5hc3NpZ24oe30sIGl0ZW0sIHsga2V5OiBpdGVtLmJhc2VDc3NDbGFzcyArICdfX2l0ZW0tJyArIGluZGV4LCBpbmRleDogaW5kZXggfSkpKSkpKSk7XG59O1xuZXhwb3J0IGNvbnN0IExhbmd1YWdlTmF2aWdhdGlvblYxSXRlbSA9IChpdGVtKSA9PiB7XG4gICAgY29uc3QgaXNBY3RpdmUgPSBkZXRlcm1pbmVJc0FjdGl2ZShpdGVtKTtcbiAgICBjb25zdCBjc3NDbGFzcyA9IGl0ZW0uYmFzZUNzc0NsYXNzICsgJ19faXRlbSAnICtcbiAgICAgICAgaXRlbS5iYXNlQ3NzQ2xhc3MgKyAnX19pdGVtLS1sZXZlbC0nICsgaXRlbS5sZXZlbCArICcgJyArXG4gICAgICAgIGAke2l0ZW0uYmFzZUNzc0NsYXNzfV9faXRlbS0tY291bnRyeWNvZGUtJHtpdGVtLmNvdW50cnl9ICR7aXRlbS5iYXNlQ3NzQ2xhc3N9X19pdGVtLS1sYW5nY29kZS0ke2l0ZW0ubGFuZ3VhZ2V9YCArXG4gICAgICAgICsoaXNBY3RpdmUgPyAnICcgKyBpdGVtLmJhc2VDc3NDbGFzcyArICdfX2l0ZW0tLWFjdGl2ZScgOiAnJyk7XG4gICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KFwibGlcIiwgeyBjbGFzc05hbWU6IGNzc0NsYXNzIH0sXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoTGFuZ3VhZ2VOYXZpZ2F0aW9uVjFMaW5rLCBPYmplY3QuYXNzaWduKHt9LCBpdGVtKSksXG4gICAgICAgICEhaXRlbS5jaGlsZHJlbiAmJiBpdGVtLmNoaWxkcmVuLmxlbmd0aCA+IDAgJiYgUmVhY3QuY3JlYXRlRWxlbWVudChOYXZpZ2F0aW9uVjFHcm91cCwgT2JqZWN0LmFzc2lnbih7fSwgaXRlbSkpKSk7XG59O1xuY29uc3QgTGFuZ3VhZ2VOYXZpZ2F0aW9uVjFJbXBsID0gKHByb3BzKSA9PiB7XG4gICAgY29uc3Qgc2VsZkNsb25lID0ge1xuICAgICAgICBhY3RpdmU6IGZhbHNlLFxuICAgICAgICBsYXN0TW9kaWZpZWQ6IDAsXG4gICAgICAgIGxldmVsOiAwLFxuICAgICAgICBwYXRoOiBcIlwiLFxuICAgICAgICB0aXRsZTogXCJcIixcbiAgICAgICAgdXJsOiBcIlwiLFxuICAgICAgICBsYW5ndWFnZTogXCJcIixcbiAgICAgICAgY291bnRyeTogXCJcIixcbiAgICAgICAgbG9jYWxlOiBcIlwiLFxuICAgICAgICBjaGlsZHJlbjogcHJvcHMuaXRlbXNcbiAgICB9O1xuICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChcIm5hdlwiLCB7IGNsYXNzTmFtZTogcHJvcHMuYmFzZUNzc0NsYXNzLCByb2xlOiBcIm5hdmlnYXRpb25cIiwgaXRlbVNjb3BlOiB0cnVlLCBpdGVtVHlwZTogXCJodHRwOi8vc2NoZW1hLm9yZy9TaXRlTmF2aWdhdGlvbkVsZW1lbnRcIiwgXCJhcmlhLWxhYmVsXCI6IHByb3BzLmFjY2Vzc2liaWxpdHlMYWJlbCB9LFxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KExhbmd1YWdlTmF2aWdhdGlvblYxR3JvdXAsIE9iamVjdC5hc3NpZ24oe30sIHNlbGZDbG9uZSkpKSk7XG59O1xuY29uc3QgTGFuZ3VhZ2VOYXZpZ2F0aW9uID0gKHByb3BzKSA9PiB7XG4gICAgY29uc3QgV3JhcHBlZCA9IHdpdGhDb25kaXRpb25hbFBsYWNlSG9sZGVyKHdpdGhTdGFuZGFyZEJhc2VDc3NDbGFzcyhMYW5ndWFnZU5hdmlnYXRpb25WMUltcGwsIFwiY21wLWxhbmd1YWdlbmF2aWdhdGlvblwiKSwgTGFuZ3VhZ2VOYXZpZ2F0aW9uVjFJc0VtcHR5Rm4sIFwiTGFuZ3VhZ2VOYXZpZ2F0aW9uIFYxXCIpO1xuICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFdyYXBwZWQsIE9iamVjdC5hc3NpZ24oe30sIHByb3BzKSk7XG59O1xuZXhwb3J0IGRlZmF1bHQgTGFuZ3VhZ2VOYXZpZ2F0aW9uO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pVEdGdVozVmhaMlZPWVhacFoyRjBhVzl1VmpFdWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUlpd2ljMjkxY21ObGN5STZXeUpNWVc1bmRXRm5aVTVoZG1sbllYUnBiMjVXTVM1MGMzZ2lYU3dpYm1GdFpYTWlPbHRkTENKdFlYQndhVzVuY3lJNklrRkJRVUU3T3pzN096czdPenM3T3pzN08wZEJZMGM3UVVGRlNDeFBRVUZQTEV0QlFVc3NUVUZCVFN4UFFVRlBMRU5CUVVNN1FVRkRNVUlzVDBGQlR5eEZRVUZETERCQ1FVRXdRaXhGUVVGRkxIZENRVUYzUWl4RlFVRkRMRTFCUVUwc1owTkJRV2RETEVOQlFVTTdRVUZEY0Vjc1QwRkJUeXhGUVVGRExHbENRVUZwUWl4RlFVRkZMR2xDUVVGcFFpeEZRVUZ6UXl4TlFVRk5MR3REUVVGclF5eERRVUZETzBGQlF6TklMRTlCUVU4c1JVRkJReXhWUVVGVkxFVkJRVU1zVFVGQlRTdzJRa0ZCTmtJc1EwRkJRenRCUVVOMlJDeFBRVUZQTEVWQlFVTXNOa0pCUVRaQ0xFVkJRVU1zVFVGQlRTeHBRMEZCYVVNc1EwRkJRenRCUVhGQ09VVXNUVUZCVFN4RFFVRkRMRTFCUVUwc2QwSkJRWGRDTEVkQlFVY3NRMEZCUXl4TFFVRTRRaXhGUVVGRkxFVkJRVVU3U1VGRGRrVXNTVUZCUnl4TFFVRkxMRU5CUVVNc1MwRkJTeXhIUVVGSExFTkJRVU1zUlVGQlF6dFJRVU5tTEU5QlFVOHNRMEZEU0N4dlFrRkJReXhWUVVGVkxFbEJRMUFzVVVGQlVTeEZRVUZGTEV0QlFVc3NRMEZCUXl4TlFVRk5MRVZCUTNSQ0xGTkJRVk1zUlVGQlJTeExRVUZMTEVOQlFVTXNXVUZCV1N4SFFVRkhMR0ZCUVdFc1JVRkROME1zUlVGQlJTeEZRVUZGTEV0QlFVc3NRMEZCUXl4SFFVRkhMRVZCUTJJc1VVRkJVU3hGUVVGRkxFdEJRVXNzUTBGQlF5eFJRVUZSTEVWQlEzaENMRWxCUVVrc1JVRkJSU3hMUVVGTExFTkJRVU1zVVVGQlVTeEZRVU53UWl4SFFVRkhMRVZCUVVNc1YwRkJWeXhGUVVObUxFdEJRVXNzUlVGQlJTeExRVUZMTEVOQlFVTXNTMEZCU3l4SlFVRkhMRXRCUVVzc1EwRkJReXhMUVVGTExFTkJRV01zUTBGRGNrUXNRMEZCUVR0TFFVTktPMU5CUVVrN1VVRkRSQ3hQUVVGUExFTkJRMGdzT0VKQlFVMHNVMEZCVXl4RlFVRkhMRXRCUVVzc1EwRkJReXhaUVVGWkxFZEJRVWNzWTBGQll5eEZRVUZGTEVsQlFVa3NSVUZCUlN4TFFVRkxMRU5CUVVNc1VVRkJVU3hKUVVGSExFdEJRVXNzUTBGQlF5eExRVUZMTEVOQlFWRXNRMEZEY0Vjc1EwRkJRVHRMUVVOS08wRkJRMHdzUTBGQlF5eERRVUZETzBGQlJVWXNUVUZCVFN4RFFVRkRMRTFCUVUwc2VVSkJRWGxDTEVkQlFVY3NRMEZCUXl4SlFVRTJRaXhGUVVGRkxFVkJRVVU3U1VGRGRrVXNUMEZCVHl4RFFVTklMREJEUVVOTExFTkJRVU1zUTBGQlF5eEpRVUZKTEVOQlFVTXNVVUZCVVN4SlFVRkpMRWxCUVVrc1EwRkJReXhSUVVGUkxFTkJRVU1zVFVGQlRTeEhRVUZITEVOQlFVTXNTVUZCU3l4RFFVTTNReXcwUWtGQlNTeFRRVUZUTEVWQlFVVXNTVUZCU1N4RFFVRkRMRmxCUVZrc1IwRkJSeXhUUVVGVExFbEJRM1pETEVsQlFVa3NRMEZCUXl4UlFVRlJMRU5CUVVNc1IwRkJSeXhEUVVOa0xFTkJRVU1zU1VGQlNTeEZRVUZETEV0QlFVc3NSVUZCUlN4RlFVRkZMRU5CUVVNc2IwSkJRVU1zZDBKQlFYZENMRzlDUVVGTExFbEJRVWtzU1VGQlJTeEhRVUZITEVWQlFVVXNTVUZCU1N4RFFVRkRMRmxCUVZrc1IwRkJSeXhUUVVGVExFZEJRVWNzUzBGQlN5eEZRVUZGTEV0QlFVc3NSVUZCUlN4TFFVRkxMRWxCUVVjc1EwRkRiRWdzUTBGRFFTeERRVU5TTEVOQlEwWXNRMEZEVGl4RFFVRkJPMEZCUTB3c1EwRkJReXhEUVVGRE8wRkJSVVlzVFVGQlRTeERRVUZETEUxQlFVMHNkMEpCUVhkQ0xFZEJRVWNzUTBGQlF5eEpRVUUyUWl4RlFVRkZMRVZCUVVVN1NVRkZkRVVzVFVGQlRTeFJRVUZSTEVkQlFVY3NhVUpCUVdsQ0xFTkJRVU1zU1VGQlNTeERRVUZETEVOQlFVTTdTVUZEZWtNc1RVRkJUU3hSUVVGUkxFZEJRVWNzU1VGQlNTeERRVUZETEZsQlFWa3NSMEZCUnl4VFFVRlRPMUZCUXpsQ0xFbEJRVWtzUTBGQlF5eFpRVUZaTEVkQlFVY3NaMEpCUVdkQ0xFZEJRVWNzU1VGQlNTeERRVUZETEV0QlFVc3NSMEZCUnl4SFFVRkhPMUZCUTNaRUxFZEJRVWNzU1VGQlNTeERRVUZETEZsQlFWa3NkVUpCUVhWQ0xFbEJRVWtzUTBGQlF5eFBRVUZQTEVsQlFVa3NTVUZCU1N4RFFVRkRMRmxCUVZrc2IwSkJRVzlDTEVsQlFVa3NRMEZCUXl4UlFVRlJMRVZCUVVVN1VVRkRPVWNzUTBGQlJTeERRVUZETEZGQlFWRXNRMEZCUXl4RFFVRkRMRU5CUVVNc1IwRkJSeXhIUVVGSExFbEJRVWtzUTBGQlF5eFpRVUZaTEVkQlFVY3NaMEpCUVdkQ0xFTkJRVU1zUTBGQlF5eERRVUZETEVWQlFVVXNRMEZCUXl4RFFVRkRPMGxCUTJoR0xFOUJRVThzUTBGRFNDdzBRa0ZCU1N4VFFVRlRMRVZCUVVVc1VVRkJVVHRSUVVObUxHOUNRVUZETEhkQ1FVRjNRaXh2UWtGQlN5eEpRVUZKTEVWQlFVYzdVVUZGYWtNc1EwRkJReXhEUVVGRExFbEJRVWtzUTBGQlF5eFJRVUZSTEVsQlFVa3NTVUZCU1N4RFFVRkRMRkZCUVZFc1EwRkJReXhOUVVGTkxFZEJRVWNzUTBGQlF5eEpRVUZKTEc5Q1FVRkRMR2xDUVVGcFFpeHZRa0ZCU3l4SlFVRkpMRVZCUVVjc1EwRkZjRVlzUTBGRFVpeERRVUZCTzBGQlJVd3NRMEZCUXl4RFFVRkRPMEZCUlVZc1RVRkJUU3gzUWtGQmQwSXNSMEZCUnl4RFFVRkRMRXRCUVN0Q0xFVkJRVVVzUlVGQlJUdEpRVU5xUlN4TlFVRk5MRk5CUVZNc1IwRkJORUk3VVVGRGRrTXNUVUZCVFN4RlFVRkZMRXRCUVVzN1VVRkRZaXhaUVVGWkxFVkJRVVVzUTBGQlF6dFJRVU5tTEV0QlFVc3NSVUZCUlN4RFFVRkRPMUZCUTFJc1NVRkJTU3hGUVVGRkxFVkJRVVU3VVVGRFVpeExRVUZMTEVWQlFVVXNSVUZCUlR0UlFVTlVMRWRCUVVjc1JVRkJSU3hGUVVGRk8xRkJRMUFzVVVGQlVTeEZRVUZGTEVWQlFVVTdVVUZEV2l4UFFVRlBMRVZCUVVVc1JVRkJSVHRSUVVOWUxFMUJRVTBzUlVGQlJTeEZRVUZGTzFGQlExWXNVVUZCVVN4RlFVRkZMRXRCUVVzc1EwRkJReXhMUVVGTE8wdEJRM2hDTEVOQlFVTTdTVUZGUml4UFFVRlBMRU5CUTBnc05rSkJRVXNzVTBGQlV5eEZRVUZGTEV0QlFVc3NRMEZCUXl4WlFVRlpMRVZCUXpkQ0xFbEJRVWtzUlVGQlF5eFpRVUZaTEVWQlEycENMRk5CUVZNc1VVRkJReXhSUVVGUkxFVkJRVU1zZVVOQlFYbERMR2RDUVVOb1JDeExRVUZMTEVOQlFVTXNhMEpCUVd0Q08xRkJRM0pETEc5Q1FVRkRMSGxDUVVGNVFpeHZRa0ZCU3l4VFFVRlRMRVZCUVVjc1EwRkRla01zUTBGRFZDeERRVUZCTzBGQlEwd3NRMEZCUXl4RFFVRkRPMEZCUlVZc1RVRkJUU3hyUWtGQmEwSXNSMEZCUnl4RFFVRkRMRXRCUVN0Q0xFVkJRVVVzUlVGQlJUdEpRVU16UkN4TlFVRk5MRTlCUVU4c1IwRkJSeXd3UWtGQk1FSXNRMEZCUXl4M1FrRkJkMElzUTBGQlF5eDNRa0ZCZDBJc1JVRkJSU3gzUWtGQmQwSXNRMEZCUXl4RlFVRkZMRFpDUVVFMlFpeEZRVUZGTEhWQ1FVRjFRaXhEUVVGRExFTkJRVUU3U1VGRGFFd3NUMEZCVHl4dlFrRkJReXhQUVVGUExHOUNRVUZMTEV0QlFVc3NSVUZCUnl4RFFVRkJPMEZCUTJoRExFTkJRVU1zUTBGQlF6dEJRVVZHTEdWQlFXVXNhMEpCUVd0Q0xFTkJRVU1pTENKemIzVnlZMlZ6UTI5dWRHVnVkQ0k2V3lJdktseHVJQ29nSUVOdmNIbHlhV2RvZENBeU1ESXdJRUZrYjJKbFhHNGdLbHh1SUNvZ0lFeHBZMlZ1YzJWa0lIVnVaR1Z5SUhSb1pTQkJjR0ZqYUdVZ1RHbGpaVzV6WlN3Z1ZtVnljMmx2YmlBeUxqQWdLSFJvWlNCY0lreHBZMlZ1YzJWY0lpazdYRzRnS2lBZ2VXOTFJRzFoZVNCdWIzUWdkWE5sSUhSb2FYTWdabWxzWlNCbGVHTmxjSFFnYVc0Z1kyOXRjR3hwWVc1alpTQjNhWFJvSUhSb1pTQk1hV05sYm5ObExseHVJQ29nSUZsdmRTQnRZWGtnYjJKMFlXbHVJR0VnWTI5d2VTQnZaaUIwYUdVZ1RHbGpaVzV6WlNCaGRGeHVJQ3BjYmlBcUlDQWdJQ0FnYUhSMGNEb3ZMM2QzZHk1aGNHRmphR1V1YjNKbkwyeHBZMlZ1YzJWekwweEpRMFZPVTBVdE1pNHdYRzRnS2x4dUlDb2dJRlZ1YkdWemN5QnlaWEYxYVhKbFpDQmllU0JoY0hCc2FXTmhZbXhsSUd4aGR5QnZjaUJoWjNKbFpXUWdkRzhnYVc0Z2QzSnBkR2x1Wnl3Z2MyOW1kSGRoY21WY2JpQXFJQ0JrYVhOMGNtbGlkWFJsWkNCMWJtUmxjaUIwYUdVZ1RHbGpaVzV6WlNCcGN5QmthWE4wY21saWRYUmxaQ0J2YmlCaGJpQmNJa0ZUSUVsVFhDSWdRa0ZUU1ZNc1hHNGdLaUFnVjBsVVNFOVZWQ0JYUVZKU1FVNVVTVVZUSUU5U0lFTlBUa1JKVkVsUFRsTWdUMFlnUVU1WklFdEpUa1FzSUdWcGRHaGxjaUJsZUhCeVpYTnpJRzl5SUdsdGNHeHBaV1F1WEc0Z0tpQWdVMlZsSUhSb1pTQk1hV05sYm5ObElHWnZjaUIwYUdVZ2MzQmxZMmxtYVdNZ2JHRnVaM1ZoWjJVZ1oyOTJaWEp1YVc1bklIQmxjbTFwYzNOcGIyNXpJR0Z1WkZ4dUlDb2dJR3hwYldsMFlYUnBiMjV6SUhWdVpHVnlJSFJvWlNCTWFXTmxibk5sTGx4dUlDb3ZYRzVjYm1sdGNHOXlkQ0JTWldGamRDQm1jbTl0SUNkeVpXRmpkQ2M3WEc1cGJYQnZjblFnZTNkcGRHaERiMjVrYVhScGIyNWhiRkJzWVdObFNHOXNaR1Z5TENCM2FYUm9VM1JoYm1SaGNtUkNZWE5sUTNOelEyeGhjM045SUdaeWIyMGdYQ0l1TGk4dUxpOHVMaTlCWW5OMGNtRmpkRU52Y21WRGIyMXdiMjVsYm5SY0lqdGNibWx0Y0c5eWRDQjdaR1YwWlhKdGFXNWxTWE5CWTNScGRtVXNJRTVoZG1sbllYUnBiMjVXTVVkeWIzVndMQ0JPWVhacFoyRjBhVzl1VmpGSmRHVnRMQ0JPWVhacFoyRjBhVzl1VmpGTmIyUmxiSDBnWm5KdmJTQmNJaTR1THk0dUwyNWhkbWxuWVhScGIyNHZkakV2VG1GMmFXZGhkR2x2YmxZeFhDSTdYRzVwYlhCdmNuUWdlMUp2ZFhSbFpFeHBibXQ5SUdaeWIyMGdYQ0l1TGk4dUxpOHVMaTl5YjNWMGFXNW5MMUp2ZFhSbFpFeHBibXRjSWp0Y2JtbHRjRzl5ZENCN1RHRnVaM1ZoWjJWT1lYWnBaMkYwYVc5dVZqRkpjMFZ0Y0hSNVJtNTlJR1p5YjIwZ1hDSXVMMHhoYm1kMVlXZGxUbUYyYVdkaGRHbHZibFl4U1hORmJYQjBlVVp1WENJN1hHNWNibVY0Y0c5eWRDQnBiblJsY21aaFkyVWdUR0Z1WjNWaFoyVk9ZWFpwWjJGMGFXOXVWakZKZEdWdElHVjRkR1Z1WkhNZ1RtRjJhV2RoZEdsdmJsWXhTWFJsYlNCN1hHNGdJQ0FnYkdWMlpXdzZJRzUxYldKbGNpeGNiaUFnSUNCaFkzUnBkbVU2SUdKdmIyeGxZVzRzWEc0Z0lDQWdkR2wwYkdVNklITjBjbWx1Wnl4Y2JpQWdJQ0IxY213NklITjBjbWx1Wnl4Y2JpQWdJQ0JzWVhOMFRXOWthV1pwWldRNklHNTFiV0psY2l4Y2JpQWdJQ0JrWlhOamNtbHdkR2x2Ymo4NklITjBjbWx1Wnl4Y2JpQWdJQ0J3WVhSb09pQnpkSEpwYm1jc1hHNGdJQ0FnYkc5allXeGxPaUJ6ZEhKcGJtY3NYRzRnSUNBZ1kyOTFiblJ5ZVRvZ2MzUnlhVzVuTEZ4dUlDQWdJR3hoYm1kMVlXZGxPaUJ6ZEhKcGJtY3NYRzRnSUNBZ1kyaHBiR1J5Wlc0L09pQk1ZVzVuZFdGblpVNWhkbWxuWVhScGIyNVdNVWwwWlcxYlhWeHVmVnh1WEc1bGVIQnZjblFnYVc1MFpYSm1ZV05sSUV4aGJtZDFZV2RsVG1GMmFXZGhkR2x2YmxZeFRXOWtaV3dnWlhoMFpXNWtjeUJPWVhacFoyRjBhVzl1VmpGTmIyUmxiSHRjYmlBZ0lDQnBkR1Z0Y3pwTVlXNW5kV0ZuWlU1aGRtbG5ZWFJwYjI1V01VbDBaVzFiWFZ4dUlDQWdJR0ZqWTJWemMybGlhV3hwZEhsTVlXSmxiRDg2SUhOMGNtbHVaMXh1ZlZ4dVhHNWxlSEJ2Y25RZ1kyOXVjM1FnVEdGdVozVmhaMlZPWVhacFoyRjBhVzl1VmpGTWFXNXJJRDBnS0hCeWIzQnpPa3hoYm1kMVlXZGxUbUYyYVdkaGRHbHZibFl4U1hSbGJTa2dQVDRnZTF4dUlDQWdJR2xtS0hCeWIzQnpMbXhsZG1Wc0lENGdNQ2w3WEc0Z0lDQWdJQ0FnSUhKbGRIVnliaUFvWEc0Z0lDQWdJQ0FnSUNBZ0lDQThVbTkxZEdWa1RHbHVhMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJR2x6VW05MWRHVmtQWHR3Y205d2N5NXliM1YwWldSOVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ1kyeGhjM05PWVcxbFBYdHdjbTl3Y3k1aVlYTmxRM056UTJ4aGMzTWdLeUFuWDE5cGRHVnRMV3hwYm1zbmZWeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lIUnZQWHR3Y205d2N5NTFjbXg5WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnYUhKbFpreGhibWM5ZTNCeWIzQnpMbXhoYm1kMVlXZGxmVnh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJR3hoYm1jOWUzQnliM0J6TG14aGJtZDFZV2RsZlZ4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUhKbGJEMWNJbUZzZEdWeWJtRjBaVndpWEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnZEdsMGJHVTllM0J5YjNCekxuUnBkR3hsZlQ1N2NISnZjSE11ZEdsMGJHVjlQQzlTYjNWMFpXUk1hVzVyUGx4dUlDQWdJQ0FnSUNBcFhHNGdJQ0FnZldWc2MyVjdYRzRnSUNBZ0lDQWdJSEpsZEhWeWJpQW9YRzRnSUNBZ0lDQWdJQ0FnSUNBOGMzQmhiaUJqYkdGemMwNWhiV1U5ZXlCd2NtOXdjeTVpWVhObFEzTnpRMnhoYzNNZ0t5QW5YMTlwZEdWdExYUnBkR3hsSjMwZ2JHRnVaejE3Y0hKdmNITXViR0Z1WjNWaFoyVjlQbnR3Y205d2N5NTBhWFJzWlgwOEwzTndZVzQrWEc0Z0lDQWdJQ0FnSUNsY2JpQWdJQ0I5WEc1OU8xeHVYRzVsZUhCdmNuUWdZMjl1YzNRZ1RHRnVaM1ZoWjJWT1lYWnBaMkYwYVc5dVZqRkhjbTkxY0NBOUlDaHBkR1Z0T2t4aGJtZDFZV2RsVG1GMmFXZGhkR2x2YmxZeFNYUmxiU2tnUFQ0Z2UxeHVJQ0FnSUhKbGRIVnliaUFvWEc0Z0lDQWdJQ0FnSUR3K1hHNGdJQ0FnSUNBZ0lDQWdJQ0I3SVNGcGRHVnRMbU5vYVd4a2NtVnVJQ1ltSUdsMFpXMHVZMmhwYkdSeVpXNHViR1Z1WjNSb0lENGdNQ0FtSmlBZ0tGeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lEeDFiQ0JqYkdGemMwNWhiV1U5ZTJsMFpXMHVZbUZ6WlVOemMwTnNZWE56SUNzZ0oxOWZaM0p2ZFhBbmZUNWNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnZTJsMFpXMHVZMmhwYkdSeVpXNHViV0Z3S0Z4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnS0dsMFpXMHNhVzVrWlhncElEMCtJRHhNWVc1bmRXRm5aVTVoZG1sbllYUnBiMjVXTVVsMFpXMGdleTR1TG1sMFpXMTlJR3RsZVQxN2FYUmxiUzVpWVhObFEzTnpRMnhoYzNNZ0t5QW5YMTlwZEdWdExTY2dLeUJwYm1SbGVIMGdhVzVrWlhnOWUybHVaR1Y0ZlM4K1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ2w5WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnUEM5MWJENWNiaUFnSUNBZ0lDQWdJQ0FnSUNsOVhHNGdJQ0FnSUNBZ0lEd3ZQbHh1SUNBZ0lDbGNibjA3WEc1Y2JtVjRjRzl5ZENCamIyNXpkQ0JNWVc1bmRXRm5aVTVoZG1sbllYUnBiMjVXTVVsMFpXMGdQU0FvYVhSbGJUcE1ZVzVuZFdGblpVNWhkbWxuWVhScGIyNVdNVWwwWlcwcElEMCtJSHRjYmx4dUlDQWdJR052Ym5OMElHbHpRV04wYVhabElEMGdaR1YwWlhKdGFXNWxTWE5CWTNScGRtVW9hWFJsYlNrN1hHNGdJQ0FnWTI5dWMzUWdZM056UTJ4aGMzTWdQU0JwZEdWdExtSmhjMlZEYzNORGJHRnpjeUFySUNkZlgybDBaVzBnSnlBclhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJR2wwWlcwdVltRnpaVU56YzBOc1lYTnpJQ3NnSjE5ZmFYUmxiUzB0YkdWMlpXd3RKeUFySUdsMFpXMHViR1YyWld3Z0t5QW5JQ2NnS3lCY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdZQ1I3YVhSbGJTNWlZWE5sUTNOelEyeGhjM045WDE5cGRHVnRMUzFqYjNWdWRISjVZMjlrWlMwa2UybDBaVzB1WTI5MWJuUnllWDBnSkh0cGRHVnRMbUpoYzJWRGMzTkRiR0Z6YzMxZlgybDBaVzB0TFd4aGJtZGpiMlJsTFNSN2FYUmxiUzVzWVc1bmRXRm5aWDFnSUNzZ1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FySUNocGMwRmpkR2wyWlNBL0lDY2dKeUFySUdsMFpXMHVZbUZ6WlVOemMwTnNZWE56SUNzZ0oxOWZhWFJsYlMwdFlXTjBhWFpsSnlBNklDY25LVHRjYmlBZ0lDQnlaWFIxY200Z0tGeHVJQ0FnSUNBZ0lDQThiR2tnWTJ4aGMzTk9ZVzFsUFh0amMzTkRiR0Z6YzMwK1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ1BFeGhibWQxWVdkbFRtRjJhV2RoZEdsdmJsWXhUR2x1YXlCN0xpNHVhWFJsYlgwdlBseHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lIdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSVNGcGRHVnRMbU5vYVd4a2NtVnVJQ1ltSUdsMFpXMHVZMmhwYkdSeVpXNHViR1Z1WjNSb0lENGdNQ0FtSmlBOFRtRjJhV2RoZEdsdmJsWXhSM0p2ZFhBZ2V5NHVMbWwwWlcxOUx6NWNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQjlYRzRnSUNBZ0lDQWdJRHd2YkdrK1hHNGdJQ0FnS1Z4dVhHNTlPMXh1WEc1amIyNXpkQ0JNWVc1bmRXRm5aVTVoZG1sbllYUnBiMjVXTVVsdGNHd2dQU0FvY0hKdmNITTZUR0Z1WjNWaFoyVk9ZWFpwWjJGMGFXOXVWakZOYjJSbGJDa2dQVDRnZTF4dUlDQWdJR052Ym5OMElITmxiR1pEYkc5dVpUcE1ZVzVuZFdGblpVNWhkbWxuWVhScGIyNVdNVWwwWlcwZ1BTQjdYRzRnSUNBZ0lDQWdJR0ZqZEdsMlpUb2dabUZzYzJVc1hHNGdJQ0FnSUNBZ0lHeGhjM1JOYjJScFptbGxaRG9nTUN4Y2JpQWdJQ0FnSUNBZ2JHVjJaV3c2SURBc1hHNGdJQ0FnSUNBZ0lIQmhkR2c2SUZ3aVhDSXNYRzRnSUNBZ0lDQWdJSFJwZEd4bE9pQmNJbHdpTEZ4dUlDQWdJQ0FnSUNCMWNtdzZJRndpWENJc1hHNGdJQ0FnSUNBZ0lHeGhibWQxWVdkbE9pQmNJbHdpTEZ4dUlDQWdJQ0FnSUNCamIzVnVkSEo1T2lCY0lsd2lMRnh1SUNBZ0lDQWdJQ0JzYjJOaGJHVTZJRndpWENJc1hHNGdJQ0FnSUNBZ0lHTm9hV3hrY21WdU9pQndjbTl3Y3k1cGRHVnRjMXh1SUNBZ0lIMDdYRzVjYmlBZ0lDQnlaWFIxY200Z0tGeHVJQ0FnSUNBZ0lDQThibUYySUdOc1lYTnpUbUZ0WlQxN2NISnZjSE11WW1GelpVTnpjME5zWVhOemZWeHVJQ0FnSUNBZ0lDQWdJQ0FnSUhKdmJHVTlYQ0p1WVhacFoyRjBhVzl1WENKY2JpQWdJQ0FnSUNBZ0lDQWdJQ0JwZEdWdFUyTnZjR1VnYVhSbGJWUjVjR1U5WENKb2RIUndPaTh2YzJOb1pXMWhMbTl5Wnk5VGFYUmxUbUYyYVdkaGRHbHZia1ZzWlcxbGJuUmNJbHh1SUNBZ0lDQWdJQ0FnSUNBZ0lHRnlhV0V0YkdGaVpXdzllM0J5YjNCekxtRmpZMlZ6YzJsaWFXeHBkSGxNWVdKbGJIMCtYRzRnSUNBZ0lDQWdJQ0FnSUNBOFRHRnVaM1ZoWjJWT1lYWnBaMkYwYVc5dVZqRkhjbTkxY0NCN0xpNHVjMlZzWmtOc2IyNWxmUzgrWEc0Z0lDQWdJQ0FnSUR3dmJtRjJQbHh1SUNBZ0lDbGNibjA3WEc1Y2JtTnZibk4wSUV4aGJtZDFZV2RsVG1GMmFXZGhkR2x2YmlBOUlDaHdjbTl3Y3pwTVlXNW5kV0ZuWlU1aGRtbG5ZWFJwYjI1V01VMXZaR1ZzS1NBOVBpQjdYRzRnSUNBZ1kyOXVjM1FnVjNKaGNIQmxaQ0E5SUhkcGRHaERiMjVrYVhScGIyNWhiRkJzWVdObFNHOXNaR1Z5S0hkcGRHaFRkR0Z1WkdGeVpFSmhjMlZEYzNORGJHRnpjeWhNWVc1bmRXRm5aVTVoZG1sbllYUnBiMjVXTVVsdGNHd3NJRndpWTIxd0xXeGhibWQxWVdkbGJtRjJhV2RoZEdsdmJsd2lLU3dnVEdGdVozVmhaMlZPWVhacFoyRjBhVzl1VmpGSmMwVnRjSFI1Um00c0lGd2lUR0Z1WjNWaFoyVk9ZWFpwWjJGMGFXOXVJRll4WENJcFhHNGdJQ0FnY21WMGRYSnVJRHhYY21Gd2NHVmtJSHN1TGk1d2NtOXdjMzB2UGx4dWZUdGNibHh1Wlhod2IzSjBJR1JsWm1GMWJIUWdUR0Z1WjNWaFoyVk9ZWFpwWjJGMGFXOXVPeUpkZlE9PSIsImV4cG9ydCBmdW5jdGlvbiBMYW5ndWFnZU5hdmlnYXRpb25WMUlzRW1wdHlGbihwcm9wcykge1xuICAgIHJldHVybiBwcm9wcy5pdGVtcyA9PSBudWxsIHx8IHByb3BzLml0ZW1zLmxlbmd0aCA9PT0gMDtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaVRHRnVaM1ZoWjJWT1lYWnBaMkYwYVc5dVZqRkpjMFZ0Y0hSNVJtNHVhbk1pTENKemIzVnlZMlZTYjI5MElqb2lJaXdpYzI5MWNtTmxjeUk2V3lKTVlXNW5kV0ZuWlU1aGRtbG5ZWFJwYjI1V01VbHpSVzF3ZEhsR2JpNTBjeUpkTENKdVlXMWxjeUk2VzEwc0ltMWhjSEJwYm1keklqb2lRVUZGUVN4TlFVRk5MRlZCUVZVc05rSkJRVFpDTEVOQlFVTXNTMEZCSzBJN1NVRkRla1VzVDBGQlR5eExRVUZMTEVOQlFVTXNTMEZCU3l4SlFVRkpMRWxCUVVrc1NVRkJTU3hMUVVGTExFTkJRVU1zUzBGQlN5eERRVUZETEUxQlFVMHNTMEZCU3l4RFFVRkRMRU5CUVVNN1FVRkRNMFFzUTBGQlF5SXNJbk52ZFhKalpYTkRiMjUwWlc1MElqcGJJbWx0Y0c5eWRDQjdUR0Z1WjNWaFoyVk9ZWFpwWjJGMGFXOXVWakZOYjJSbGJIMGdabkp2YlNCY0lpNHZUR0Z1WjNWaFoyVk9ZWFpwWjJGMGFXOXVWakZjSWp0Y2JseHVaWGh3YjNKMElHWjFibU4wYVc5dUlFeGhibWQxWVdkbFRtRjJhV2RoZEdsdmJsWXhTWE5GYlhCMGVVWnVLSEJ5YjNCek9reGhibWQxWVdkbFRtRjJhV2RoZEdsdmJsWXhUVzlrWld3cE9pQmliMjlzWldGdWUxeHVJQ0FnSUhKbGRIVnliaUJ3Y205d2N5NXBkR1Z0Y3lBOVBTQnVkV3hzSUh4OElIQnliM0J6TG1sMFpXMXpMbXhsYm1kMGFDQTlQVDBnTUR0Y2JuMWNiaUpkZlE9PSIsIi8qXG4gKiAgQ29weXJpZ2h0IDIwMjAgQWRvYmVcbiAqXG4gKiAgTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqICB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiAgWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICAgICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiAgVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqICBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqICBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiAgbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB3aXRoQ29uZGl0aW9uYWxQbGFjZUhvbGRlciwgd2l0aFN0YW5kYXJkQmFzZUNzc0NsYXNzIH0gZnJvbSBcIi4uLy4uLy4uL0Fic3RyYWN0Q29yZUNvbXBvbmVudFwiO1xuaW1wb3J0IHsgUm91dGVkTGluayB9IGZyb20gXCIuLi8uLi8uLi9yb3V0aW5nL1JvdXRlZExpbmtcIjtcbmltcG9ydCB7IE5hdmlnYXRpb25WMUlzRW1wdHlGbiB9IGZyb20gXCIuL05hdmlnYXRpb25WMUlzRW1wdHlGblwiO1xuZXhwb3J0IGNvbnN0IGRldGVybWluZUlzQWN0aXZlID0gKGl0ZW0pID0+IHtcbiAgICByZXR1cm4gaXRlbS5hY3RpdmU7XG59O1xuZXhwb3J0IGNvbnN0IE5hdmlnYXRpb25WMUdyb3VwID0gKGl0ZW0pID0+IHtcbiAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoUmVhY3QuRnJhZ21lbnQsIG51bGwsICEhaXRlbS5jaGlsZHJlbiAmJiBpdGVtLmNoaWxkcmVuLmxlbmd0aCA+IDAgJiYgKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiLCB7IGNsYXNzTmFtZTogaXRlbS5iYXNlQ3NzQ2xhc3MgKyAnX19ncm91cCcgfSwgaXRlbS5jaGlsZHJlbi5tYXAoKGl0ZW0sIGluZGV4KSA9PiBSZWFjdC5jcmVhdGVFbGVtZW50KE5hdmlnYXRpb25WMUl0ZW0sIE9iamVjdC5hc3NpZ24oeyBrZXk6IGl0ZW0uYmFzZUNzc0NsYXNzICsgJ19faXRlbS0nICsgaW5kZXggfSwgaXRlbSwgeyBpbmRleDogaW5kZXggfSkpKSkpKSk7XG59O1xuZXhwb3J0IGNvbnN0IE5hdmlnYXRpb25WMUl0ZW0gPSAoaXRlbSkgPT4ge1xuICAgIGNvbnN0IGlzQWN0aXZlID0gZGV0ZXJtaW5lSXNBY3RpdmUoaXRlbSk7XG4gICAgY29uc3QgY3NzQ2xhc3MgPSBpdGVtLmJhc2VDc3NDbGFzcyArICdfX2l0ZW0gJyArXG4gICAgICAgIGl0ZW0uYmFzZUNzc0NsYXNzICsgJ19faXRlbS0tbGV2ZWwtJyArIGl0ZW0ubGV2ZWwgKyAnICdcbiAgICAgICAgKyAoaXNBY3RpdmUgPyAnICcgKyBpdGVtLmJhc2VDc3NDbGFzcyArICdfX2l0ZW0tLWFjdGl2ZScgOiAnJyk7XG4gICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KFwibGlcIiwgeyBjbGFzc05hbWU6IGNzc0NsYXNzIH0sXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoUm91dGVkTGluaywgeyBpc1JvdXRlZDogaXRlbS5yb3V0ZWQsIHRvOiBpdGVtLnVybCwgdGl0bGU6IGl0ZW0udGl0bGUsIFwiYXJpYS1jdXJyZW50XCI6IGlzQWN0aXZlICYmICdwYWdlJywgY2xhc3NOYW1lOiBpdGVtLmJhc2VDc3NDbGFzcyArICdfX2l0ZW0tbGluaycgfSwgaXRlbS50aXRsZSksXG4gICAgICAgICEhaXRlbS5jaGlsZHJlbiAmJiBpdGVtLmNoaWxkcmVuLmxlbmd0aCA+IDAgJiYgUmVhY3QuY3JlYXRlRWxlbWVudChOYXZpZ2F0aW9uVjFHcm91cCwgT2JqZWN0LmFzc2lnbih7fSwgaXRlbSkpKSk7XG59O1xuZXhwb3J0IGNvbnN0IE5hdmlnYXRpb25WMUltcGwgPSAocHJvcHMpID0+IHtcbiAgICBjb25zdCBzZWxmQ2xvbmUgPSB7XG4gICAgICAgIGFjdGl2ZTogZmFsc2UsXG4gICAgICAgIGxhc3RNb2RpZmllZDogMCxcbiAgICAgICAgbGV2ZWw6IDAsXG4gICAgICAgIHBhdGg6IFwiXCIsXG4gICAgICAgIHRpdGxlOiBcIlwiLFxuICAgICAgICB1cmw6IFwiXCIsXG4gICAgICAgIGNoaWxkcmVuOiBwcm9wcy5pdGVtc1xuICAgIH07XG4gICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KFwibmF2XCIsIHsgY2xhc3NOYW1lOiBwcm9wcy5iYXNlQ3NzQ2xhc3MsIHJvbGU6IFwibmF2aWdhdGlvblwiLCBpdGVtU2NvcGU6IHRydWUsIGl0ZW1UeXBlOiBcImh0dHA6Ly9zY2hlbWEub3JnL1NpdGVOYXZpZ2F0aW9uRWxlbWVudFwiLCBcImFyaWEtbGFiZWxcIjogcHJvcHMuYWNjZXNzaWJpbGl0eUxhYmVsIH0sXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoTmF2aWdhdGlvblYxR3JvdXAsIE9iamVjdC5hc3NpZ24oe30sIHNlbGZDbG9uZSkpKSk7XG59O1xuZXhwb3J0IGNvbnN0IE5hdmlnYXRpb25WMSA9IChwcm9wcykgPT4ge1xuICAgIGNvbnN0IFdyYXBwZWQgPSB3aXRoQ29uZGl0aW9uYWxQbGFjZUhvbGRlcih3aXRoU3RhbmRhcmRCYXNlQ3NzQ2xhc3MoTmF2aWdhdGlvblYxSW1wbCwgXCJjbXAtbmF2aWdhdGlvblwiKSwgTmF2aWdhdGlvblYxSXNFbXB0eUZuLCBcIk5hdmlnYXRpb24gVjFcIik7XG4gICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoV3JhcHBlZCwgT2JqZWN0LmFzc2lnbih7fSwgcHJvcHMpKTtcbn07XG5leHBvcnQgZGVmYXVsdCBOYXZpZ2F0aW9uVjE7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lUbUYyYVdkaGRHbHZibFl4TG1weklpd2ljMjkxY21ObFVtOXZkQ0k2SWlJc0luTnZkWEpqWlhNaU9sc2lUbUYyYVdkaGRHbHZibFl4TG5SemVDSmRMQ0p1WVcxbGN5STZXMTBzSW0xaGNIQnBibWR6SWpvaVFVRkJRVHM3T3pzN096czdPenM3T3pzN1IwRmpSenRCUVVWSUxFOUJRVThzUzBGQlN5eE5RVUZOTEU5QlFVOHNRMEZCUXp0QlFVTXhRaXhQUVVGUExFVkJRV3RDTERCQ1FVRXdRaXhGUVVGRkxIZENRVUYzUWl4RlFVRkRMRTFCUVUwc1owTkJRV2RETEVOQlFVTTdRVUZGY2tnc1QwRkJUeXhGUVVGRExGVkJRVlVzUlVGQlF5eE5RVUZOTERaQ1FVRTJRaXhEUVVGRE8wRkJRM1pFTEU5QlFVOHNSVUZCUXl4eFFrRkJjVUlzUlVGQlF5eE5RVUZOTEhsQ1FVRjVRaXhEUVVGRE8wRkJiVUk1UkN4TlFVRk5MRU5CUVVNc1RVRkJUU3hwUWtGQmFVSXNSMEZCUnl4RFFVRkRMRWxCUVhGQ0xFVkJRVVVzUlVGQlJUdEpRVU4yUkN4UFFVRlBMRWxCUVVrc1EwRkJReXhOUVVGTkxFTkJRVU03UVVGRGRrSXNRMEZCUXl4RFFVRkRPMEZCUlVZc1RVRkJUU3hEUVVGRExFMUJRVTBzYVVKQlFXbENMRWRCUVVjc1EwRkJReXhKUVVGeFFpeEZRVUZGTEVWQlFVVTdTVUZEZGtRc1QwRkJUeXhEUVVOSUxEQkRRVU5MTEVOQlFVTXNRMEZCUXl4SlFVRkpMRU5CUVVNc1VVRkJVU3hKUVVGSkxFbEJRVWtzUTBGQlF5eFJRVUZSTEVOQlFVTXNUVUZCVFN4SFFVRkhMRU5CUVVNc1NVRkJTeXhEUVVNM1F5dzBRa0ZCU3l4VFFVRlRMRVZCUVVVc1NVRkJTU3hEUVVGRExGbEJRVmtzUjBGQlJ5eFRRVUZUTEVsQlEzaERMRWxCUVVrc1EwRkJReXhSUVVGUkxFTkJRVU1zUjBGQlJ5eERRVU5rTEVOQlFVTXNTVUZCU1N4RlFVRkRMRXRCUVVzc1JVRkJSU3hGUVVGRkxFTkJRVU1zYjBKQlFVTXNaMEpCUVdkQ0xHdENRVUZETEVkQlFVY3NSVUZCUlN4SlFVRkpMRU5CUVVNc1dVRkJXU3hIUVVGSExGTkJRVk1zUjBGQlJ5eExRVUZMTEVsQlFVMHNTVUZCU1N4SlFVRkZMRXRCUVVzc1JVRkJSU3hMUVVGTExFbEJRVWNzUTBGRE1VY3NRMEZEUVN4RFFVTlNMRU5CUTBZc1EwRkRUaXhEUVVGQk8wRkJRMHdzUTBGQlF5eERRVUZETzBGQlJVWXNUVUZCVFN4RFFVRkRMRTFCUVUwc1owSkJRV2RDTEVkQlFVY3NRMEZCUXl4SlFVRnhRaXhGUVVGRkxFVkJRVVU3U1VGRmRFUXNUVUZCVFN4UlFVRlJMRWRCUVVjc2FVSkJRV2xDTEVOQlFVTXNTVUZCU1N4RFFVRkRMRU5CUVVNN1NVRkRla01zVFVGQlRTeFJRVUZSTEVkQlFVY3NTVUZCU1N4RFFVRkRMRmxCUVZrc1IwRkJSeXhUUVVGVE8xRkJRemxDTEVsQlFVa3NRMEZCUXl4WlFVRlpMRWRCUVVjc1owSkJRV2RDTEVkQlFVY3NTVUZCU1N4RFFVRkRMRXRCUVVzc1IwRkJSeXhIUVVGSE8xVkJRM0JFTEVOQlFVTXNVVUZCVVN4RFFVRkRMRU5CUVVNc1EwRkJReXhIUVVGSExFZEJRVWNzU1VGQlNTeERRVUZETEZsQlFWa3NSMEZCUnl4blFrRkJaMElzUTBGQlF5eERRVUZETEVOQlFVTXNSVUZCUlN4RFFVRkRMRU5CUVVNN1NVRkRhRVlzVDBGQlR5eERRVU5JTERSQ1FVRkpMRk5CUVZNc1JVRkJSU3hSUVVGUk8xRkJRMllzYjBKQlFVTXNWVUZCVlN4SlFVRkRMRkZCUVZFc1JVRkJSU3hKUVVGSkxFTkJRVU1zVFVGQlRTeEZRVUZGTEVWQlFVVXNSVUZCUlN4SlFVRkpMRU5CUVVNc1IwRkJSeXhGUVVGRkxFdEJRVXNzUlVGQlJTeEpRVUZKTEVOQlFVTXNTMEZCU3l4clFrRkJaMElzVVVGQlVTeEpRVUZKTEUxQlFVMHNSVUZEYUVjc1UwRkJVeXhGUVVGRkxFbEJRVWtzUTBGQlF5eFpRVUZaTEVkQlFVY3NZVUZCWVN4SlFVRkhMRWxCUVVrc1EwRkJReXhMUVVGTExFTkJRMmhFTzFGQlJWUXNRMEZCUXl4RFFVRkRMRWxCUVVrc1EwRkJReXhSUVVGUkxFbEJRVWtzU1VGQlNTeERRVUZETEZGQlFWRXNRMEZCUXl4TlFVRk5MRWRCUVVjc1EwRkJReXhKUVVGSkxHOUNRVUZETEdsQ1FVRnBRaXh2UWtGQlN5eEpRVUZKTEVWQlFVY3NRMEZGY0VZc1EwRkRVaXhEUVVGQk8wRkJSVXdzUTBGQlF5eERRVUZETzBGQlJVWXNUVUZCVFN4RFFVRkRMRTFCUVUwc1owSkJRV2RDTEVkQlFVY3NRMEZCUXl4TFFVRjFRaXhGUVVGRkxFVkJRVVU3U1VGRmVFUXNUVUZCVFN4VFFVRlRMRWRCUVc5Q08xRkJReTlDTEUxQlFVMHNSVUZCUlN4TFFVRkxPMUZCUTJJc1dVRkJXU3hGUVVGRkxFTkJRVU03VVVGRFppeExRVUZMTEVWQlFVVXNRMEZCUXp0UlFVTlNMRWxCUVVrc1JVRkJSU3hGUVVGRk8xRkJRMUlzUzBGQlN5eEZRVUZGTEVWQlFVVTdVVUZEVkN4SFFVRkhMRVZCUVVVc1JVRkJSVHRSUVVOUUxGRkJRVkVzUlVGQlJTeExRVUZMTEVOQlFVTXNTMEZCU3p0TFFVTjRRaXhEUVVGRE8wbEJSVVlzVDBGQlR5eERRVU5JTERaQ1FVRkxMRk5CUVZNc1JVRkJSU3hMUVVGTExFTkJRVU1zV1VGQldTeEZRVU0zUWl4SlFVRkpMRVZCUVVNc1dVRkJXU3hGUVVOcVFpeFRRVUZUTEZGQlFVTXNVVUZCVVN4RlFVRkRMSGxEUVVGNVF5eG5Ra0ZEYUVRc1MwRkJTeXhEUVVGRExHdENRVUZyUWp0UlFVTnlReXh2UWtGQlF5eHBRa0ZCYVVJc2IwSkJRVXNzVTBGQlV5eEZRVUZITEVOQlEycERMRU5CUTFRc1EwRkJRVHRCUVVWTUxFTkJRVU1zUTBGQlFUdEJRVWxFTEUxQlFVMHNRMEZCUXl4TlFVRk5MRmxCUVZrc1IwRkJSeXhEUVVGRExFdEJRWFZDTEVWQlFVVXNSVUZCUlR0SlFVTndSQ3hOUVVGTkxFOUJRVThzUjBGQlJ5d3dRa0ZCTUVJc1EwRkJReXgzUWtGQmQwSXNRMEZCUXl4blFrRkJaMElzUlVGQlJTeG5Ra0ZCWjBJc1EwRkJReXhGUVVGRkxIRkNRVUZ4UWl4RlFVRkZMR1ZCUVdVc1EwRkJReXhEUVVGQk8wbEJRMmhLTEU5QlFVOHNiMEpCUVVNc1QwRkJUeXh2UWtGQlN5eExRVUZMTEVWQlFVY3NRMEZCUVR0QlFVTm9ReXhEUVVGRExFTkJRVU03UVVGRlJpeGxRVUZsTEZsQlFWa3NRMEZCUXlJc0luTnZkWEpqWlhORGIyNTBaVzUwSWpwYklpOHFYRzRnS2lBZ1EyOXdlWEpwWjJoMElESXdNakFnUVdSdlltVmNiaUFxWEc0Z0tpQWdUR2xqWlc1elpXUWdkVzVrWlhJZ2RHaGxJRUZ3WVdOb1pTQk1hV05sYm5ObExDQldaWEp6YVc5dUlESXVNQ0FvZEdobElGd2lUR2xqWlc1elpWd2lLVHRjYmlBcUlDQjViM1VnYldGNUlHNXZkQ0IxYzJVZ2RHaHBjeUJtYVd4bElHVjRZMlZ3ZENCcGJpQmpiMjF3YkdsaGJtTmxJSGRwZEdnZ2RHaGxJRXhwWTJWdWMyVXVYRzRnS2lBZ1dXOTFJRzFoZVNCdlluUmhhVzRnWVNCamIzQjVJRzltSUhSb1pTQk1hV05sYm5ObElHRjBYRzRnS2x4dUlDb2dJQ0FnSUNCb2RIUndPaTh2ZDNkM0xtRndZV05vWlM1dmNtY3ZiR2xqWlc1elpYTXZURWxEUlU1VFJTMHlMakJjYmlBcVhHNGdLaUFnVlc1c1pYTnpJSEpsY1hWcGNtVmtJR0o1SUdGd2NHeHBZMkZpYkdVZ2JHRjNJRzl5SUdGbmNtVmxaQ0IwYnlCcGJpQjNjbWwwYVc1bkxDQnpiMlowZDJGeVpWeHVJQ29nSUdScGMzUnlhV0oxZEdWa0lIVnVaR1Z5SUhSb1pTQk1hV05sYm5ObElHbHpJR1JwYzNSeWFXSjFkR1ZrSUc5dUlHRnVJRndpUVZNZ1NWTmNJaUJDUVZOSlV5eGNiaUFxSUNCWFNWUklUMVZVSUZkQlVsSkJUbFJKUlZNZ1QxSWdRMDlPUkVsVVNVOU9VeUJQUmlCQlRsa2dTMGxPUkN3Z1pXbDBhR1Z5SUdWNGNISmxjM01nYjNJZ2FXMXdiR2xsWkM1Y2JpQXFJQ0JUWldVZ2RHaGxJRXhwWTJWdWMyVWdabTl5SUhSb1pTQnpjR1ZqYVdacFl5QnNZVzVuZFdGblpTQm5iM1psY201cGJtY2djR1Z5YldsemMybHZibk1nWVc1a1hHNGdLaUFnYkdsdGFYUmhkR2x2Ym5NZ2RXNWtaWElnZEdobElFeHBZMlZ1YzJVdVhHNGdLaTljYmx4dWFXMXdiM0owSUZKbFlXTjBJR1p5YjIwZ0ozSmxZV04wSnp0Y2JtbHRjRzl5ZENCN1NHRnpRbUZ6WlVOemMwTnNZWE56TENCM2FYUm9RMjl1WkdsMGFXOXVZV3hRYkdGalpVaHZiR1JsY2l3Z2QybDBhRk4wWVc1a1lYSmtRbUZ6WlVOemMwTnNZWE56ZlNCbWNtOXRJRndpTGk0dkxpNHZMaTR2UVdKemRISmhZM1JEYjNKbFEyOXRjRzl1Wlc1MFhDSTdYRzVwYlhCdmNuUWdlMUp2ZFhSbFpFTnZjbVZEYjIxd2IyNWxiblJOYjJSbGJDd2dVbTkxZEdWa1RXOWtaV3g5SUdaeWIyMGdYQ0l1TGk4dUxpOHVMaTl5YjNWMGFXNW5MMUp2ZFhSbFpFTnZjbVZEYjIxd2IyNWxiblJjSWp0Y2JtbHRjRzl5ZENCN1VtOTFkR1ZrVEdsdWEzMGdabkp2YlNCY0lpNHVMeTR1THk0dUwzSnZkWFJwYm1jdlVtOTFkR1ZrVEdsdWExd2lPMXh1YVcxd2IzSjBJSHRPWVhacFoyRjBhVzl1VmpGSmMwVnRjSFI1Um01OUlHWnliMjBnWENJdUwwNWhkbWxuWVhScGIyNVdNVWx6Ulcxd2RIbEdibHdpTzF4dVhHNWxlSEJ2Y25RZ2FXNTBaWEptWVdObElFNWhkbWxuWVhScGIyNVdNVWwwWlcwZ1pYaDBaVzVrY3lCU2IzVjBaV1JOYjJSbGJDeElZWE5DWVhObFEzTnpRMnhoYzNON1hHNGdJQ0FnYkdWMlpXdzZJRzUxYldKbGNpeGNiaUFnSUNCcGJtUmxlRDg2SUc1MWJXSmxjaXhjYmlBZ0lDQmhZM1JwZG1VNklHSnZiMnhsWVc0c1hHNGdJQ0FnZEdsMGJHVTZJSE4wY21sdVp5eGNiaUFnSUNCMWNtdzZJSE4wY21sdVp5eGNiaUFnSUNCc1lYTjBUVzlrYVdacFpXUTZJRzUxYldKbGNpeGNiaUFnSUNCa1pYTmpjbWx3ZEdsdmJqODZJSE4wY21sdVp5eGNiaUFnSUNCd1lYUm9PaUJ6ZEhKcGJtY3NYRzRnSUNBZ1kyaHBiR1J5Wlc0L09pQk9ZWFpwWjJGMGFXOXVWakZKZEdWdFcxMWNibjFjYmx4dVpYaHdiM0owSUdsdWRHVnlabUZqWlNCT1lYWnBaMkYwYVc5dVZqRk5iMlJsYkNCbGVIUmxibVJ6SUZKdmRYUmxaRU52Y21WRGIyMXdiMjVsYm5STmIyUmxiSHRjYmlBZ0lDQnBkR1Z0Y3pwT1lYWnBaMkYwYVc5dVZqRkpkR1Z0VzExY2JpQWdJQ0JoWTJObGMzTnBZbWxzYVhSNVRHRmlaV3cvT2lCemRISnBibWRjYm4xY2JseHVaWGh3YjNKMElHTnZibk4wSUdSbGRHVnliV2x1WlVselFXTjBhWFpsSUQwZ0tHbDBaVzA2VG1GMmFXZGhkR2x2YmxZeFNYUmxiU2tnUFQ0Z2UxeHVJQ0FnSUhKbGRIVnliaUJwZEdWdExtRmpkR2wyWlR0Y2JuMDdYRzVjYm1WNGNHOXlkQ0JqYjI1emRDQk9ZWFpwWjJGMGFXOXVWakZIY205MWNDQTlJQ2hwZEdWdE9rNWhkbWxuWVhScGIyNVdNVWwwWlcwcElEMCtJSHRjYmlBZ0lDQnlaWFIxY200Z0tGeHVJQ0FnSUNBZ0lDQThQbHh1SUNBZ0lDQWdJQ0FnSUNBZ2V5RWhhWFJsYlM1amFHbHNaSEpsYmlBbUppQnBkR1Z0TG1Ob2FXeGtjbVZ1TG14bGJtZDBhQ0ErSURBZ0ppWWdJQ2hjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0E4ZFd3Z0lHTnNZWE56VG1GdFpUMTdhWFJsYlM1aVlYTmxRM056UTJ4aGMzTWdLeUFuWDE5bmNtOTFjQ2Q5UGx4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQjdhWFJsYlM1amFHbHNaSEpsYmk1dFlYQW9YRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQW9hWFJsYlN4cGJtUmxlQ2tnUFQ0Z1BFNWhkbWxuWVhScGIyNVdNVWwwWlcwZ2EyVjVQWHRwZEdWdExtSmhjMlZEYzNORGJHRnpjeUFySUNkZlgybDBaVzB0SnlBcklHbHVaR1Y0ZlNCN0xpNHVhWFJsYlgwZ2FXNWtaWGc5ZTJsdVpHVjRmUzgrWEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDbDlYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdQQzkxYkQ1Y2JpQWdJQ0FnSUNBZ0lDQWdJQ2w5WEc0Z0lDQWdJQ0FnSUR3dlBseHVJQ0FnSUNsY2JuMDdYRzVjYm1WNGNHOXlkQ0JqYjI1emRDQk9ZWFpwWjJGMGFXOXVWakZKZEdWdElEMGdLR2wwWlcwNlRtRjJhV2RoZEdsdmJsWXhTWFJsYlNrZ1BUNGdlMXh1WEc0Z0lDQWdZMjl1YzNRZ2FYTkJZM1JwZG1VZ1BTQmtaWFJsY20xcGJtVkpjMEZqZEdsMlpTaHBkR1Z0S1R0Y2JpQWdJQ0JqYjI1emRDQmpjM05EYkdGemN5QTlJR2wwWlcwdVltRnpaVU56YzBOc1lYTnpJQ3NnSjE5ZmFYUmxiU0FuSUN0Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdhWFJsYlM1aVlYTmxRM056UTJ4aGMzTWdLeUFuWDE5cGRHVnRMUzFzWlhabGJDMG5JQ3NnYVhSbGJTNXNaWFpsYkNBcklDY2dKMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0t5QW9hWE5CWTNScGRtVWdQeUFuSUNjZ0t5QnBkR1Z0TG1KaGMyVkRjM05EYkdGemN5QXJJQ2RmWDJsMFpXMHRMV0ZqZEdsMlpTY2dPaUFuSnlrN1hHNGdJQ0FnY21WMGRYSnVJQ2hjYmlBZ0lDQWdJQ0FnUEd4cElHTnNZWE56VG1GdFpUMTdZM056UTJ4aGMzTjlQbHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJRHhTYjNWMFpXUk1hVzVySUdselVtOTFkR1ZrUFh0cGRHVnRMbkp2ZFhSbFpIMGdkRzg5ZTJsMFpXMHVkWEpzZlNCMGFYUnNaVDE3YVhSbGJTNTBhWFJzWlgwZ1lYSnBZUzFqZFhKeVpXNTBQWHRwYzBGamRHbDJaU0FtSmlBbmNHRm5aU2Q5WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lHTnNZWE56VG1GdFpUMTdhWFJsYlM1aVlYTmxRM056UTJ4aGMzTWdLeUFuWDE5cGRHVnRMV3hwYm1zbmZUNTdhWFJsYlM1MGFYUnNaVnh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdmVHd2VW05MWRHVmtUR2x1YXo1Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0VoYVhSbGJTNWphR2xzWkhKbGJpQW1KaUJwZEdWdExtTm9hV3hrY21WdUxteGxibWQwYUNBK0lEQWdKaVlnUEU1aGRtbG5ZWFJwYjI1V01VZHliM1Z3SUhzdUxpNXBkR1Z0ZlM4K1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2ZWeHVJQ0FnSUNBZ0lDQThMMnhwUGx4dUlDQWdJQ2xjYmx4dWZUdGNibHh1Wlhod2IzSjBJR052Ym5OMElFNWhkbWxuWVhScGIyNVdNVWx0Y0d3Z1BTQW9jSEp2Y0hNNlRtRjJhV2RoZEdsdmJsWXhUVzlrWld3cElEMCtJSHRjYmx4dUlDQWdJR052Ym5OMElITmxiR1pEYkc5dVpUcE9ZWFpwWjJGMGFXOXVWakZKZEdWdElEMGdlMXh1SUNBZ0lDQWdJQ0JoWTNScGRtVTZJR1poYkhObExGeHVJQ0FnSUNBZ0lDQnNZWE4wVFc5a2FXWnBaV1E2SURBc1hHNGdJQ0FnSUNBZ0lHeGxkbVZzT2lBd0xGeHVJQ0FnSUNBZ0lDQndZWFJvT2lCY0lsd2lMRnh1SUNBZ0lDQWdJQ0IwYVhSc1pUb2dYQ0pjSWl4Y2JpQWdJQ0FnSUNBZ2RYSnNPaUJjSWx3aUxGeHVJQ0FnSUNBZ0lDQmphR2xzWkhKbGJqb2djSEp2Y0hNdWFYUmxiWE5jYmlBZ0lDQjlPMXh1WEc0Z0lDQWdjbVYwZFhKdUlDaGNiaUFnSUNBZ0lDQWdQRzVoZGlCamJHRnpjMDVoYldVOWUzQnliM0J6TG1KaGMyVkRjM05EYkdGemMzMWNiaUFnSUNBZ0lDQWdJQ0FnSUNCeWIyeGxQVndpYm1GMmFXZGhkR2x2Ymx3aVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnYVhSbGJWTmpiM0JsSUdsMFpXMVVlWEJsUFZ3aWFIUjBjRG92TDNOamFHVnRZUzV2Y21jdlUybDBaVTVoZG1sbllYUnBiMjVGYkdWdFpXNTBYQ0pjYmlBZ0lDQWdJQ0FnSUNBZ0lDQmhjbWxoTFd4aFltVnNQWHR3Y205d2N5NWhZMk5sYzNOcFltbHNhWFI1VEdGaVpXeDlQbHh1SUNBZ0lDQWdJQ0FnSUNBZ1BFNWhkbWxuWVhScGIyNVdNVWR5YjNWd0lIc3VMaTV6Wld4bVEyeHZibVY5THo1Y2JpQWdJQ0FnSUNBZ1BDOXVZWFkrWEc0Z0lDQWdLVnh1WEc1OVhHNWNibHh1WEc1bGVIQnZjblFnWTI5dWMzUWdUbUYyYVdkaGRHbHZibFl4SUQwZ0tIQnliM0J6T2s1aGRtbG5ZWFJwYjI1V01VMXZaR1ZzS1NBOVBpQjdYRzRnSUNBZ1kyOXVjM1FnVjNKaGNIQmxaQ0E5SUhkcGRHaERiMjVrYVhScGIyNWhiRkJzWVdObFNHOXNaR1Z5S0hkcGRHaFRkR0Z1WkdGeVpFSmhjMlZEYzNORGJHRnpjeWhPWVhacFoyRjBhVzl1VmpGSmJYQnNMQ0JjSW1OdGNDMXVZWFpwWjJGMGFXOXVYQ0lwTENCT1lYWnBaMkYwYVc5dVZqRkpjMFZ0Y0hSNVJtNHNJRndpVG1GMmFXZGhkR2x2YmlCV01Wd2lLVnh1SUNBZ0lISmxkSFZ5YmlBOFYzSmhjSEJsWkNCN0xpNHVjSEp2Y0hOOUx6NWNibjA3WEc1Y2JtVjRjRzl5ZENCa1pXWmhkV3gwSUU1aGRtbG5ZWFJwYjI1V01Uc2lYWDA9IiwiZXhwb3J0IGZ1bmN0aW9uIE5hdmlnYXRpb25WMUlzRW1wdHlGbihwcm9wcykge1xuICAgIHJldHVybiBwcm9wcy5pdGVtcyA9PSBudWxsIHx8IHByb3BzLml0ZW1zLmxlbmd0aCA9PT0gMDtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaVRtRjJhV2RoZEdsdmJsWXhTWE5GYlhCMGVVWnVMbXB6SWl3aWMyOTFjbU5sVW05dmRDSTZJaUlzSW5OdmRYSmpaWE1pT2xzaVRtRjJhV2RoZEdsdmJsWXhTWE5GYlhCMGVVWnVMblJ6SWwwc0ltNWhiV1Z6SWpwYlhTd2liV0Z3Y0dsdVozTWlPaUpCUVVWQkxFMUJRVTBzVlVGQlZTeHhRa0ZCY1VJc1EwRkJReXhMUVVGMVFqdEpRVU42UkN4UFFVRlBMRXRCUVVzc1EwRkJReXhMUVVGTExFbEJRVWtzU1VGQlNTeEpRVUZKTEV0QlFVc3NRMEZCUXl4TFFVRkxMRU5CUVVNc1RVRkJUU3hMUVVGTExFTkJRVU1zUTBGQlF6dEJRVU16UkN4RFFVRkRJaXdpYzI5MWNtTmxjME52Ym5SbGJuUWlPbHNpYVcxd2IzSjBJSHRPWVhacFoyRjBhVzl1VmpGTmIyUmxiSDBnWm5KdmJTQmNJaTR2VG1GMmFXZGhkR2x2YmxZeFhDSTdYRzVjYm1WNGNHOXlkQ0JtZFc1amRHbHZiaUJPWVhacFoyRjBhVzl1VmpGSmMwVnRjSFI1Um00b2NISnZjSE02VG1GMmFXZGhkR2x2YmxZeFRXOWtaV3dwT2lCaWIyOXNaV0Z1ZTF4dUlDQWdJSEpsZEhWeWJpQndjbTl3Y3k1cGRHVnRjeUE5UFNCdWRXeHNJSHg4SUhCeWIzQnpMbWwwWlcxekxteGxibWQwYUNBOVBUMGdNRHRjYm4waVhYMD0iLCIvKlxuICogIENvcHlyaWdodCAyMDIwIEFkb2JlXG4gKlxuICogIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiAgeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICAgICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqICBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiAgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiAgU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgTGluayBhcyBSb3V0ZXJMaW5rIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG5leHBvcnQgY29uc3QgUm91dGVkTGluayA9IChwcm9wcykgPT4ge1xuICAgIGNvbnN0IHsgdG8sIGlzUm91dGVkLCAuLi5vdGhlclByb3BzIH0gPSBwcm9wcztcbiAgICBpZiAodG8gPT09IHVuZGVmaW5lZCB8fCB0by50cmltKCkubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFwiYVwiLCBPYmplY3QuYXNzaWduKHsgaHJlZjogJyMnIH0sIG90aGVyUHJvcHMpKTtcbiAgICB9XG4gICAgY29uc3QgaXNFeHRlcm5hbCA9IC9eaHR0cHM/OlxcL1xcLy8udGVzdCh0byk7XG4gICAgcmV0dXJuIGlzRXh0ZXJuYWwgfHwgIWlzUm91dGVkID9cbiAgICAgICAgKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJhXCIsIE9iamVjdC5hc3NpZ24oeyBocmVmOiB0byB9LCBvdGhlclByb3BzKSkpXG4gICAgICAgIDpcbiAgICAgICAgICAgIChSZWFjdC5jcmVhdGVFbGVtZW50KFJvdXRlckxpbmssIE9iamVjdC5hc3NpZ24oe30sIG90aGVyUHJvcHMsIHsgdG86IHRvIH0pKSk7XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pVW05MWRHVmtUR2x1YXk1cWN5SXNJbk52ZFhKalpWSnZiM1FpT2lJaUxDSnpiM1Z5WTJWeklqcGJJbEp2ZFhSbFpFeHBibXN1ZEhONElsMHNJbTVoYldWeklqcGJYU3dpYldGd2NHbHVaM01pT2lKQlFVRkJPenM3T3pzN096czdPenM3T3p0SFFXTkhPMEZCUlVnc1QwRkJUeXhMUVVGTExFMUJRVTBzVDBGQlR5eERRVUZETzBGQlF6RkNMRTlCUVU4c1JVRkJReXhKUVVGSkxFbEJRVWtzVlVGQlZTeEZRVUZETEUxQlFVMHNhMEpCUVd0Q0xFTkJRVU03UVVGUGNFUXNUVUZCVFN4RFFVRkRMRTFCUVUwc1ZVRkJWU3hIUVVGSExFTkJRVU1zUzBGQlpTeEZRVUZGTEVWQlFVVTdTVUZETVVNc1RVRkJUU3hGUVVGRExFVkJRVVVzUlVGQlJTeFJRVUZSTEVWQlFVVXNSMEZCUnl4VlFVRlZMRVZCUVVNc1IwRkJSeXhMUVVGTExFTkJRVU03U1VGRk5VTXNTVUZCUnl4RlFVRkZMRXRCUVVzc1UwRkJVeXhKUVVGSkxFVkJRVVVzUTBGQlF5eEpRVUZKTEVWQlFVVXNRMEZCUXl4TlFVRk5MRXRCUVVzc1EwRkJReXhGUVVGRE8xRkJRekZETEU5QlFVOHNlVU5CUVVjc1NVRkJTU3hGUVVGRkxFZEJRVWNzU1VGRFdDeFZRVUZWTEVWQlEyaENMRU5CUVVNN1MwRkRUanRKUVVORUxFMUJRVTBzVlVGQlZTeEhRVUZITEdOQlFXTXNRMEZCUXl4SlFVRkpMRU5CUVVNc1JVRkJSU3hEUVVGRExFTkJRVU03U1VGRk0wTXNUMEZCVHl4VlFVRlZMRWxCUVVrc1EwRkJReXhSUVVGUkxFTkJRVUVzUTBGQlF6dFJRVU16UWl4RFFVRkRMSGxEUVVOSExFbEJRVWtzUlVGQlJTeEZRVUZGTEVsQlEwb3NWVUZCVlN4RlFVTm9RaXhEUVVGRE8xRkJRMGdzUTBGQlF6dFpRVU5FTEVOQlFVVXNiMEpCUVVNc1ZVRkJWU3h2UWtGQlN5eFZRVUZWTEVsQlEyUXNSVUZCUlN4RlFVRkZMRVZCUVVVc1NVRkRiRUlzUTBGQlF5eERRVUZCTzBGQlExZ3NRMEZCUXl4RFFVRkRJaXdpYzI5MWNtTmxjME52Ym5SbGJuUWlPbHNpTHlwY2JpQXFJQ0JEYjNCNWNtbG5hSFFnTWpBeU1DQkJaRzlpWlZ4dUlDcGNiaUFxSUNCTWFXTmxibk5sWkNCMWJtUmxjaUIwYUdVZ1FYQmhZMmhsSUV4cFkyVnVjMlVzSUZabGNuTnBiMjRnTWk0d0lDaDBhR1VnWENKTWFXTmxibk5sWENJcE8xeHVJQ29nSUhsdmRTQnRZWGtnYm05MElIVnpaU0IwYUdseklHWnBiR1VnWlhoalpYQjBJR2x1SUdOdmJYQnNhV0Z1WTJVZ2QybDBhQ0IwYUdVZ1RHbGpaVzV6WlM1Y2JpQXFJQ0JaYjNVZ2JXRjVJRzlpZEdGcGJpQmhJR052Y0hrZ2IyWWdkR2hsSUV4cFkyVnVjMlVnWVhSY2JpQXFYRzRnS2lBZ0lDQWdJR2gwZEhBNkx5OTNkM2N1WVhCaFkyaGxMbTl5Wnk5c2FXTmxibk5sY3k5TVNVTkZUbE5GTFRJdU1GeHVJQ3BjYmlBcUlDQlZibXhsYzNNZ2NtVnhkV2x5WldRZ1lua2dZWEJ3YkdsallXSnNaU0JzWVhjZ2IzSWdZV2R5WldWa0lIUnZJR2x1SUhkeWFYUnBibWNzSUhOdlpuUjNZWEpsWEc0Z0tpQWdaR2x6ZEhKcFluVjBaV1FnZFc1a1pYSWdkR2hsSUV4cFkyVnVjMlVnYVhNZ1pHbHpkSEpwWW5WMFpXUWdiMjRnWVc0Z1hDSkJVeUJKVTF3aUlFSkJVMGxUTEZ4dUlDb2dJRmRKVkVoUFZWUWdWMEZTVWtGT1ZFbEZVeUJQVWlCRFQwNUVTVlJKVDA1VElFOUdJRUZPV1NCTFNVNUVMQ0JsYVhSb1pYSWdaWGh3Y21WemN5QnZjaUJwYlhCc2FXVmtMbHh1SUNvZ0lGTmxaU0IwYUdVZ1RHbGpaVzV6WlNCbWIzSWdkR2hsSUhOd1pXTnBabWxqSUd4aGJtZDFZV2RsSUdkdmRtVnlibWx1WnlCd1pYSnRhWE56YVc5dWN5QmhibVJjYmlBcUlDQnNhVzFwZEdGMGFXOXVjeUIxYm1SbGNpQjBhR1VnVEdsalpXNXpaUzVjYmlBcUwxeHVYRzVwYlhCdmNuUWdVbVZoWTNRZ1puSnZiU0FuY21WaFkzUW5PMXh1YVcxd2IzSjBJSHRNYVc1cklHRnpJRkp2ZFhSbGNreHBibXQ5SUdaeWIyMGdKM0psWVdOMExYSnZkWFJsY2kxa2IyMG5PMXh1WEc1bGVIQnZjblFnYVc1MFpYSm1ZV05sSUV4cGJtdFFjbTl3Y3lCN1hHNGdJQ0FnZEc4L09pQnpkSEpwYm1jN1hHNGdJQ0FnYVhOU2IzVjBaV1EvT2lCaWIyOXNaV0Z1TzF4dUlDQWdJRnR3Y205d09pQnpkSEpwYm1kZE9pQmhibmxjYm4xY2JtVjRjRzl5ZENCamIyNXpkQ0JTYjNWMFpXUk1hVzVySUQwZ0tIQnliM0J6T2t4cGJtdFFjbTl3Y3lrZ1BUNGdlMXh1SUNBZ0lHTnZibk4wSUh0MGJ5d2dhWE5TYjNWMFpXUXNJQzR1TG05MGFHVnlVSEp2Y0hOOUlEMGdjSEp2Y0hNN1hHNWNiaUFnSUNCcFppaDBieUE5UFQwZ2RXNWtaV1pwYm1Wa0lIeDhJSFJ2TG5SeWFXMG9LUzVzWlc1bmRHZ2dQVDA5SURBcGUxeHVJQ0FnSUNBZ0lDQnlaWFIxY200Z1BHRWdhSEpsWmoxN0p5TW5mVnh1SUNBZ0lDQWdJQ0FnSUNBZ2V5NHVMbTkwYUdWeVVISnZjSE45WEc0Z0lDQWdJQ0FnSUM4K08xeHVJQ0FnSUgxY2JpQWdJQ0JqYjI1emRDQnBjMFY0ZEdWeWJtRnNJRDBnTDE1b2RIUndjejg2WEZ3dlhGd3ZMeTUwWlhOMEtIUnZLVHRjYmx4dUlDQWdJSEpsZEhWeWJpQnBjMFY0ZEdWeWJtRnNJSHg4SUNGcGMxSnZkWFJsWkQ5Y2JpQWdJQ0FnSUNBZ0tEeGhYRzRnSUNBZ0lDQWdJQ0FnSUNCb2NtVm1QWHQwYjMxY2JpQWdJQ0FnSUNBZ0lDQWdJSHN1TGk1dmRHaGxjbEJ5YjNCemZWeHVJQ0FnSUNBZ0lDQXZQaWxjYmlBZ0lDQWdJQ0FnT2x4dUlDQWdJQ0FnSUNBb0lEeFNiM1YwWlhKTWFXNXJJSHN1TGk1dmRHaGxjbEJ5YjNCemZWeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUhSdlBYdDBiMzFjYmlBZ0lDQWdJQ0FnTHo0cFhHNTlPeUpkZlE9PSIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyJdLCJzb3VyY2VSb290IjoiIn0=