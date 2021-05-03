(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["NavigationV1"],{

/***/ "../../react-base-components/dist/layout/navigation/v1/NavigationV1.js":
/*!*******************************************************************************************************************************!*\
  !*** /Users/raaijmak/workspace/aem-react-core-wcm-components/react-base-components/dist/layout/navigation/v1/NavigationV1.js ***!
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

      return __webpack_require__(__webpack_require__.s = 11);
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
      11:
      /*!*****************************************************!*\
        !*** multi ./src/layout/navigation/v1/NavigationV1 ***!
        \*****************************************************/

      /*! no static exports found */

      /***/
      function (module, exports, __webpack_require__) {
        module.exports = __webpack_require__(
        /*! ./src/layout/navigation/v1/NavigationV1 */
        "./src/layout/navigation/v1/NavigationV1.tsx");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9yYWFpam1hay93b3Jrc3BhY2UvYWVtLXJlYWN0LWNvcmUtd2NtLWNvbXBvbmVudHMvZXhhbXBsZXMvcmVhY3Qtc3BhY29tcG9uZW50cy1leGFtcGxlLXByb2plY3QvQGFkb2JlL2FlbS1jb3JlLWNvbXBvbmVudHMtcmVhY3QtYmFzZS93ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCIvVXNlcnMvcmFhaWptYWsvd29ya3NwYWNlL2FlbS1yZWFjdC1jb3JlLXdjbS1jb21wb25lbnRzL2V4YW1wbGVzL3JlYWN0LXNwYWNvbXBvbmVudHMtZXhhbXBsZS1wcm9qZWN0L0BhZG9iZS9hZW0tY29yZS1jb21wb25lbnRzLXJlYWN0LWJhc2Uvd2VicGFjay9ib290c3RyYXAiLCIvVXNlcnMvcmFhaWptYWsvd29ya3NwYWNlL2FlbS1yZWFjdC1jb3JlLXdjbS1jb21wb25lbnRzL2V4YW1wbGVzL3JlYWN0LXNwYWNvbXBvbmVudHMtZXhhbXBsZS1wcm9qZWN0L0BhZG9iZS9hZW0tY29yZS1jb21wb25lbnRzLXJlYWN0LWJhc2Uvc3JjL0Fic3RyYWN0Q29yZUNvbXBvbmVudC50c3giLCIvVXNlcnMvcmFhaWptYWsvd29ya3NwYWNlL2FlbS1yZWFjdC1jb3JlLXdjbS1jb21wb25lbnRzL2V4YW1wbGVzL3JlYWN0LXNwYWNvbXBvbmVudHMtZXhhbXBsZS1wcm9qZWN0L0BhZG9iZS9hZW0tY29yZS1jb21wb25lbnRzLXJlYWN0LWJhc2Uvc3JjL2NvbW1vbi9wbGFjZWhvbGRlci50c3giLCIvVXNlcnMvcmFhaWptYWsvd29ya3NwYWNlL2FlbS1yZWFjdC1jb3JlLXdjbS1jb21wb25lbnRzL2V4YW1wbGVzL3JlYWN0LXNwYWNvbXBvbmVudHMtZXhhbXBsZS1wcm9qZWN0L0BhZG9iZS9hZW0tY29yZS1jb21wb25lbnRzLXJlYWN0LWJhc2Uvc3JjL2xheW91dC9uYXZpZ2F0aW9uL3YxL05hdmlnYXRpb25WMS50c3giLCIvVXNlcnMvcmFhaWptYWsvd29ya3NwYWNlL2FlbS1yZWFjdC1jb3JlLXdjbS1jb21wb25lbnRzL2V4YW1wbGVzL3JlYWN0LXNwYWNvbXBvbmVudHMtZXhhbXBsZS1wcm9qZWN0L0BhZG9iZS9hZW0tY29yZS1jb21wb25lbnRzLXJlYWN0LWJhc2Uvc3JjL2xheW91dC9uYXZpZ2F0aW9uL3YxL05hdmlnYXRpb25WMUlzRW1wdHlGbi50cyIsIi9Vc2Vycy9yYWFpam1hay93b3Jrc3BhY2UvYWVtLXJlYWN0LWNvcmUtd2NtLWNvbXBvbmVudHMvZXhhbXBsZXMvcmVhY3Qtc3BhY29tcG9uZW50cy1leGFtcGxlLXByb2plY3QvQGFkb2JlL2FlbS1jb3JlLWNvbXBvbmVudHMtcmVhY3QtYmFzZS9zcmMvcm91dGluZy9Sb3V0ZWRMaW5rLnRzeCIsIi9Vc2Vycy9yYWFpam1hay93b3Jrc3BhY2UvYWVtLXJlYWN0LWNvcmUtd2NtLWNvbXBvbmVudHMvZXhhbXBsZXMvcmVhY3Qtc3BhY29tcG9uZW50cy1leGFtcGxlLXByb2plY3Qvd2VicGFjazovQGFkb2JlL2FlbS1jb3JlLWNvbXBvbmVudHMtcmVhY3QtYmFzZS9leHRlcm5hbCBcInJlYWN0XCIiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFDQSxZQUNBLDJCQURBLEtBRUEsRUFLQTtBQUNDLENBVEQsRUFTQyx5Q0FURCxFQVNDO0FBQ0Q7Ozs7O0FDVkE7QUFBQTs7QUFDQTtBQUFBOzs7QUFFQTtBQUFBOztBQUNBOztBQUFBOzs7QUFFQTtBQUFBOztBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7O0FBQ0E7OztBQUFBO0FBQ0E7QUFBQSxxQkFEQTs7QUFFQTtBQUFBLGtCQUZBOztBQUdBO0FBQUE7QUFDQTs7QUFKQTs7O0FBTUE7QUFBQTs7QUFDQTs7QUFBQTs7O0FBRUE7QUFBQTs7QUFDQTs7QUFBQTs7O0FBRUE7QUFBQTs7QUFDQTs7QUFBQTtBQUNBO0FBQUE7Ozs7O0FBR0E7QUFBQTs7QUFDQTs7O0FBQUE7OztBQUVBO0FBQUE7O0FBQ0E7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QUFBOzs7QUFBQTtBQUFBO0FBQUE7O0FBQU87QUFDUDtBQUNBLFMsQ0FDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDSEE7QUFBQTs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7OztBQUFBO0FBQUE7QUFBQTtBQUFBOzs7QUFBQTtBQUFBOzs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7O0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFpQk87QUFDUDtBQUFXLGNBQVg7QUFBVyxvQkFBWDtBQUFXO0FBQVgsY0FBeUMsS0FBekM7O0FBQ0E7QUFDQSxtQkFBZSw2Q0FBSyxhQUFMLENBQUssR0FBTCxFQUFLO0FBQW1DO0FBQW5DLGVBQStDLFVBQS9DLENBQUwsQ0FBZjtBQUNBOztBQUNBO0FBQ0EsMkNBQ1MsNkNBQUssYUFBTCxDQUFLLEdBQUwsRUFBSztBQUFtQztBQUFuQyxhQUE4QyxVQUE5QyxDQUFMLENBRFQsR0FHYSw2Q0FBSyxhQUFMLENBQW9CLHFEQUFwQixFQUE4QixrQkFBa0IsVUFBbEIsRUFBa0I7QUFBZTtBQUFmLFdBQWxCLENBQTlCLENBSGI7QUFJQSxTQVZPLEMsQ0FXUDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM1QkE7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7OztBUFVBO0NBVkEsRSIsImZpbGUiOiJqcy9OYXZpZ2F0aW9uVjEuMTZmNTY1NmYuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJAYWRvYmUvYWVtLWNvcmUtY29tcG9uZW50cy1yZWFjdC1iYXNlXCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcIkBhZG9iZS9hZW0tY29yZS1jb21wb25lbnRzLXJlYWN0LWJhc2VcIl0gPSBmYWN0b3J5KCk7XG59KSh0eXBlb2Ygc2VsZiAhPT0gJ3VuZGVmaW5lZCcgPyBzZWxmIDogdGhpcywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDExKTtcbiIsIi8qXG4gKiAgQ29weXJpZ2h0IDIwMjAgQWRvYmVcbiAqXG4gKiAgTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqICB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiAgWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICAgICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiAgVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqICBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqICBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiAgbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IEVkaXRvclBsYWNlSG9sZGVyIH0gZnJvbSBcIi4vY29tbW9uL3BsYWNlaG9sZGVyXCI7XG5leHBvcnQgY29uc3Qgd2l0aFN0YW5kYXJkQmFzZUNzc0NsYXNzID0gKENvbXBvbmVudCwgZGVmYXVsdEJhc2VDc3NDbGFzcykgPT4ge1xuICAgIHJldHVybiAocHJvcHMpID0+IHtcbiAgICAgICAgY29uc3QgYmFzZUNzc0NsYXNzID0gcHJvcHMuYmFzZUNzc0NsYXNzO1xuICAgICAgICBjb25zdCB0b0JlVXNlZENzc0NsYXNzID0gYmFzZUNzc0NsYXNzICYmIGJhc2VDc3NDbGFzcy50cmltKCkubGVuZ3RoID4gMCA/IGJhc2VDc3NDbGFzcyA6IGRlZmF1bHRCYXNlQ3NzQ2xhc3M7XG4gICAgICAgIGNvbnN0IG1lcmdlZFByb3BzID0ge1xuICAgICAgICAgICAgLi4ucHJvcHMsXG4gICAgICAgICAgICBiYXNlQ3NzQ2xhc3M6IHRvQmVVc2VkQ3NzQ2xhc3NcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQ29tcG9uZW50LCBPYmplY3QuYXNzaWduKHt9LCBtZXJnZWRQcm9wcykpO1xuICAgIH07XG59O1xuZXhwb3J0IGNvbnN0IHdpdGhDb25kaXRpb25hbFBsYWNlSG9sZGVyID0gKENvbXBvbmVudCwgaXNFbXB0eSwgY29tcG9uZW50VGl0bGUsIGVtcHR5VGV4dCkgPT4ge1xuICAgIHJldHVybiAocHJvcHMpID0+IHtcbiAgICAgICAgY29uc3QgaXNFbXB0eVJlc3VsdCA9IGlzRW1wdHkocHJvcHMpO1xuICAgICAgICBjb25zdCB7IGhpZGVQbGFjZUhvbGRlciA9IGZhbHNlLCBpc0luRWRpdG9yID0gZmFsc2UgfSA9IHByb3BzO1xuICAgICAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoUmVhY3QuRnJhZ21lbnQsIG51bGwsXG4gICAgICAgICAgICAhaXNFbXB0eVJlc3VsdCAmJlxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQ29tcG9uZW50LCBPYmplY3QuYXNzaWduKHt9LCBwcm9wcykpLFxuICAgICAgICAgICAgKGlzRW1wdHlSZXN1bHQgJiYgaXNJbkVkaXRvciAmJiAhaGlkZVBsYWNlSG9sZGVyKSAmJlxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoRWRpdG9yUGxhY2VIb2xkZXIsIHsgZW1wdHlUZXh0QXBwZW5kOiBlbXB0eVRleHQsIGNvbXBvbmVudFRpdGxlOiBjb21wb25lbnRUaXRsZSB9KSkpO1xuICAgIH07XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pUVdKemRISmhZM1JEYjNKbFEyOXRjRzl1Wlc1MExtcHpJaXdpYzI5MWNtTmxVbTl2ZENJNklpSXNJbk52ZFhKalpYTWlPbHNpUVdKemRISmhZM1JEYjNKbFEyOXRjRzl1Wlc1MExuUnplQ0pkTENKdVlXMWxjeUk2VzEwc0ltMWhjSEJwYm1keklqb2lRVUZCUVRzN096czdPenM3T3pzN096czdSMEZqUnp0QlFVVklMRTlCUVU4c1MwRkJTeXhMUVVGTExFMUJRVTBzVDBGQlR5eERRVUZETzBGQlJ5OUNMRTlCUVU4c1JVRkJReXhwUWtGQmFVSXNSVUZCUXl4TlFVRk5MSE5DUVVGelFpeERRVUZETzBGQlpYWkVMRTFCUVUwc1EwRkJReXhOUVVGTkxIZENRVUYzUWl4SFFVRkhMRU5CUlhCRExGTkJRVEJDTEVWQlF6RkNMRzFDUVVFd1FpeEZRVU5LTEVWQlFVVTdTVUZEZUVJc1QwRkJUeXhEUVVGRExFdEJRVThzUlVGQlJTeEZRVUZGTzFGQlJXWXNUVUZCVFN4WlFVRlpMRWRCUVVjc1MwRkJTeXhEUVVGRExGbEJRVmtzUTBGQlF6dFJRVU40UXl4TlFVRk5MR2RDUVVGblFpeEhRVUZITEZsQlFWa3NTVUZCU1N4WlFVRlpMRU5CUVVNc1NVRkJTU3hGUVVGRkxFTkJRVU1zVFVGQlRTeEhRVUZITEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1dVRkJXU3hEUVVGRExFTkJRVU1zUTBGQlF5eHRRa0ZCYlVJc1EwRkJRenRSUVVVM1J5eE5RVUZOTEZkQlFWY3NSMEZCU3p0WlFVTnNRaXhIUVVGSExFdEJRVXM3V1VGRFVpeFpRVUZaTEVWQlFVVXNaMEpCUVdkQ08xTkJRMnBETEVOQlFVTTdVVUZGUml4UFFVRlBMRzlDUVVGRExGTkJRVk1zYjBKQlFVc3NWMEZCVnl4RlFVRkpMRU5CUVVNN1NVRkRNVU1zUTBGQlF5eERRVUZCTzBGQlEwd3NRMEZCUXl4RFFVRkRPMEZCUlVZc1RVRkJUU3hEUVVGRExFMUJRVTBzTUVKQlFUQkNMRWRCUVVjc1EwRkZNVUlzVTBGQk1FSXNSVUZETVVJc1QwRkJORUlzUlVGRE5VSXNZMEZCYzBJc1JVRkJSU3hUUVVGcFFpeEZRVU51UWl4RlFVRkZPMGxCUTNCRExFOUJRVThzUTBGQlF5eExRVUZQTEVWQlFVVXNSVUZCUlR0UlFVVm1MRTFCUVUwc1lVRkJZU3hIUVVGWExFOUJRVThzUTBGQlF5eExRVUZMTEVOQlFVTXNRMEZCUXp0UlFVTTNReXhOUVVGTkxFVkJRVU1zWlVGQlpTeEhRVUZITEV0QlFVc3NSVUZCUlN4VlFVRlZMRWRCUVVjc1MwRkJTeXhGUVVGRExFZEJRVWNzUzBGQlN5eERRVUZETzFGQlJUVkVMRTlCUVU4c1EwRkRTRHRaUVVOTkxFTkJRVU1zWVVGQllUdG5Ra0ZEYUVJc2IwSkJRVU1zVTBGQlV5eHZRa0ZCU3l4TFFVRkxMRVZCUVVrN1dVRkhjRUlzUTBGQlF5eGhRVUZoTEVsQlFVa3NWVUZCVlN4SlFVRkpMRU5CUVVNc1pVRkJaU3hEUVVGRE8yZENRVU5xUkN4dlFrRkJReXhwUWtGQmFVSXNTVUZEWkN4bFFVRmxMRVZCUVVVc1UwRkJVeXhGUVVNeFFpeGpRVUZqTEVWQlFVVXNZMEZCWXl4SFFVTm9ReXhEUVVWUUxFTkJRMDRzUTBGQlF6dEpRVU5PTEVOQlFVTXNRMEZCUVR0QlFVTk1MRU5CUVVNc1EwRkJReUlzSW5OdmRYSmpaWE5EYjI1MFpXNTBJanBiSWk4cVhHNGdLaUFnUTI5d2VYSnBaMmgwSURJd01qQWdRV1J2WW1WY2JpQXFYRzRnS2lBZ1RHbGpaVzV6WldRZ2RXNWtaWElnZEdobElFRndZV05vWlNCTWFXTmxibk5sTENCV1pYSnphVzl1SURJdU1DQW9kR2hsSUZ3aVRHbGpaVzV6WlZ3aUtUdGNiaUFxSUNCNWIzVWdiV0Y1SUc1dmRDQjFjMlVnZEdocGN5Qm1hV3hsSUdWNFkyVndkQ0JwYmlCamIyMXdiR2xoYm1ObElIZHBkR2dnZEdobElFeHBZMlZ1YzJVdVhHNGdLaUFnV1c5MUlHMWhlU0J2WW5SaGFXNGdZU0JqYjNCNUlHOW1JSFJvWlNCTWFXTmxibk5sSUdGMFhHNGdLbHh1SUNvZ0lDQWdJQ0JvZEhSd09pOHZkM2QzTG1Gd1lXTm9aUzV2Y21jdmJHbGpaVzV6WlhNdlRFbERSVTVUUlMweUxqQmNiaUFxWEc0Z0tpQWdWVzVzWlhOeklISmxjWFZwY21Wa0lHSjVJR0Z3Y0d4cFkyRmliR1VnYkdGM0lHOXlJR0ZuY21WbFpDQjBieUJwYmlCM2NtbDBhVzVuTENCemIyWjBkMkZ5WlZ4dUlDb2dJR1JwYzNSeWFXSjFkR1ZrSUhWdVpHVnlJSFJvWlNCTWFXTmxibk5sSUdseklHUnBjM1J5YVdKMWRHVmtJRzl1SUdGdUlGd2lRVk1nU1ZOY0lpQkNRVk5KVXl4Y2JpQXFJQ0JYU1ZSSVQxVlVJRmRCVWxKQlRsUkpSVk1nVDFJZ1EwOU9SRWxVU1U5T1V5QlBSaUJCVGxrZ1MwbE9SQ3dnWldsMGFHVnlJR1Y0Y0hKbGMzTWdiM0lnYVcxd2JHbGxaQzVjYmlBcUlDQlRaV1VnZEdobElFeHBZMlZ1YzJVZ1ptOXlJSFJvWlNCemNHVmphV1pwWXlCc1lXNW5kV0ZuWlNCbmIzWmxjbTVwYm1jZ2NHVnliV2x6YzJsdmJuTWdZVzVrWEc0Z0tpQWdiR2x0YVhSaGRHbHZibk1nZFc1a1pYSWdkR2hsSUV4cFkyVnVjMlV1WEc0Z0tpOWNibHh1YVcxd2IzSjBJQ29nWVhNZ1VtVmhZM1FnWm5KdmJTQW5jbVZoWTNRbk8xeHVhVzF3YjNKMElIdERiMjF3YjI1bGJuUlVlWEJsZlNCbWNtOXRJQ2R5WldGamRDYzdYRzVjYm1sdGNHOXlkQ0I3UldScGRHOXlVR3hoWTJWSWIyeGtaWEo5SUdaeWIyMGdYQ0l1TDJOdmJXMXZiaTl3YkdGalpXaHZiR1JsY2x3aU8xeHVYRzVsZUhCdmNuUWdhVzUwWlhKbVlXTmxJRWhoYzBKaGMyVkRjM05EYkdGemN5QjdYRzRnSUNBZ1ltRnpaVU56YzBOc1lYTnpQem9nYzNSeWFXNW5YRzU5WEc1Y2JtVjRjRzl5ZENCcGJuUmxjbVpoWTJVZ1EyOXlaVU52YlhCdmJtVnVkRTF2WkdWc0lHVjRkR1Z1WkhNZ1NHRnpRbUZ6WlVOemMwTnNZWE56ZTF4dUlDQWdJR2hwWkdWUWJHRmpaVWh2YkdSbGNqODZJR0p2YjJ4bFlXNWNiaUFnSUNCcGMwbHVSV1JwZEc5eVB6cGliMjlzWldGdVhHNTlYRzVjYm1WNGNHOXlkQ0JwYm5SbGNtWmhZMlVnUTI5eVpVTnZiWEJ2Ym1WdWRGTjBZWFJsSUh0Y2JseHVmVnh1WEc1bGVIQnZjblFnWTI5dWMzUWdkMmwwYUZOMFlXNWtZWEprUW1GelpVTnpjME5zWVhOeklEMGdQRTBnWlhoMFpXNWtjeUJEYjNKbFEyOXRjRzl1Wlc1MFRXOWtaV3crWEc0b1hHNGdJQ0FnUTI5dGNHOXVaVzUwT2tOdmJYQnZibVZ1ZEZSNWNHVThUVDRzWEc0Z0lDQWdaR1ZtWVhWc2RFSmhjMlZEYzNORGJHRnpjenB6ZEhKcGJtZGNiaWs2VW1WaFkzUXVRMjl0Y0c5dVpXNTBWSGx3WlR4TlBpQWdQVDRnZTF4dUlDQWdJSEpsZEhWeWJpQW9jSEp2Y0hNNlRTa2dQVDRnZTF4dVhHNGdJQ0FnSUNBZ0lHTnZibk4wSUdKaGMyVkRjM05EYkdGemN5QTlJSEJ5YjNCekxtSmhjMlZEYzNORGJHRnpjenRjYmlBZ0lDQWdJQ0FnWTI5dWMzUWdkRzlDWlZWelpXUkRjM05EYkdGemN5QTlJR0poYzJWRGMzTkRiR0Z6Y3lBbUppQmlZWE5sUTNOelEyeGhjM011ZEhKcGJTZ3BMbXhsYm1kMGFDQStJREFnUHlCaVlYTmxRM056UTJ4aGMzTWdPaUJrWldaaGRXeDBRbUZ6WlVOemMwTnNZWE56TzF4dVhHNGdJQ0FnSUNBZ0lHTnZibk4wSUcxbGNtZGxaRkJ5YjNCek9pQk5QU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQXVMaTV3Y205d2N5eGNiaUFnSUNBZ0lDQWdJQ0FnSUdKaGMyVkRjM05EYkdGemN6b2dkRzlDWlZWelpXUkRjM05EYkdGemMxeHVJQ0FnSUNBZ0lDQjlPMXh1WEc0Z0lDQWdJQ0FnSUhKbGRIVnliaUE4UTI5dGNHOXVaVzUwSUhzdUxpNXRaWEpuWldSUWNtOXdjMzBnTHo0N1hHNGdJQ0FnZlZ4dWZUdGNibHh1Wlhod2IzSjBJR052Ym5OMElIZHBkR2hEYjI1a2FYUnBiMjVoYkZCc1lXTmxTRzlzWkdWeUlEMGdQRTBnWlhoMFpXNWtjeUJEYjNKbFEyOXRjRzl1Wlc1MFRXOWtaV3crWEc0Z0lDQWdJQ0FnSUNBZ0lDQW9YRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdRMjl0Y0c5dVpXNTBPa052YlhCdmJtVnVkRlI1Y0dVOFRUNHNJRnh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJR2x6Ulcxd2RIazZLSEJ5YjNCek9rMHBJRDArSUdKdmIyeGxZVzRzWEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnWTI5dGNHOXVaVzUwVkdsMGJHVS9Pbk4wY21sdVp5d2daVzF3ZEhsVVpYaDBQenB6ZEhKcGJtZGNiaUFnSUNBZ0lDQWdJQ0FnSUNrNlVtVmhZM1F1UTI5dGNHOXVaVzUwVkhsd1pUeE5QaUFnUFQ0Z2UxeHVJQ0FnSUhKbGRIVnliaUFvY0hKdmNITTZUU2tnUFQ0Z2UxeHVYRzRnSUNBZ0lDQWdJR052Ym5OMElHbHpSVzF3ZEhsU1pYTjFiSFE2WW05dmJHVmhiaUE5SUdselJXMXdkSGtvY0hKdmNITXBPMXh1SUNBZ0lDQWdJQ0JqYjI1emRDQjdhR2xrWlZCc1lXTmxTRzlzWkdWeUlEMGdabUZzYzJVc0lHbHpTVzVGWkdsMGIzSWdQU0JtWVd4elpYMGdQU0J3Y205d2N6dGNibHh1SUNBZ0lDQWdJQ0J5WlhSMWNtNGdLRnh1SUNBZ0lDQWdJQ0FnSUNBZ1BENWNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQjdJQ0ZwYzBWdGNIUjVVbVZ6ZFd4MElDWW1YRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdQRU52YlhCdmJtVnVkQ0I3TGk0dWNISnZjSE45SUM4K1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2ZWeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lIdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnS0dselJXMXdkSGxTWlhOMWJIUWdKaVlnYVhOSmJrVmthWFJ2Y2lBbUppQWhhR2xrWlZCc1lXTmxTRzlzWkdWeUtTQW1KbHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBOFJXUnBkRzl5VUd4aFkyVkliMnhrWlhKY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUdWdGNIUjVWR1Y0ZEVGd2NHVnVaRDE3Wlcxd2RIbFVaWGgwZlZ4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnWTI5dGNHOXVaVzUwVkdsMGJHVTllMk52YlhCdmJtVnVkRlJwZEd4bGZWeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0F2UGx4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUgxY2JpQWdJQ0FnSUNBZ0lDQWdJRHd2UGx4dUlDQWdJQ0FnSUNBcE8xeHVJQ0FnSUgxY2JuMDdJbDE5IiwiLypcbiAqICBDb3B5cmlnaHQgMjAyMCBBZG9iZVxuICpcbiAqICBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqICBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgICAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqICBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiAgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqICBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmNvbnN0IERFRkFVTFRfRU1QVFlfVEVYVF9MQUJFTCA9ICdQbGVhc2UgY29uZmlndXJlIHRoZSBjb21wb25lbnQnO1xuZXhwb3J0IGNvbnN0IEVkaXRvclBsYWNlSG9sZGVyID0gKHByb3BzKSA9PiB7XG4gICAgY29uc3QgcGFydDEgPSAocHJvcHMuY29tcG9uZW50VGl0bGUgIT0gbnVsbCAmJiBwcm9wcy5jb21wb25lbnRUaXRsZS5sZW5ndGggPiAwKSA/IHByb3BzLmNvbXBvbmVudFRpdGxlICsgJyAtICcgOiAnJztcbiAgICBjb25zdCBwYXJ0MiA9IChwcm9wcy5lbXB0eVRleHRBcHBlbmQgIT0gbnVsbCkgPyBwcm9wcy5lbXB0eVRleHRBcHBlbmQgOiBERUZBVUxUX0VNUFRZX1RFWFRfTEFCRUw7XG4gICAgY29uc3QgZW1wdHlUZXh0ID0gcGFydDEgKyBwYXJ0MjtcbiAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzc05hbWU6ICdjcS1wbGFjZWhvbGRlcicgKyAocHJvcHMuY2xhc3NBcHBlbmQgIT0gbnVsbCA/ICcgJyArIHByb3BzLmNsYXNzQXBwZW5kIDogJycpIH0sIGVtcHR5VGV4dCkpO1xufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaWNHeGhZMlZvYjJ4a1pYSXVhbk1pTENKemIzVnlZMlZTYjI5MElqb2lJaXdpYzI5MWNtTmxjeUk2V3lKd2JHRmpaV2h2YkdSbGNpNTBjM2dpWFN3aWJtRnRaWE1pT2x0ZExDSnRZWEJ3YVc1bmN5STZJa0ZCUVVFN096czdPenM3T3pzN096czdPMGRCWTBjN1FVRkRTQ3hQUVVGUExFdEJRV3RDTEUxQlFVMHNUMEZCVHl4RFFVRkRPMEZCVDNaRExFMUJRVTBzZDBKQlFYZENMRWRCUVVjc1owTkJRV2RETEVOQlFVTTdRVUZGYkVVc1RVRkJUU3hEUVVGRExFMUJRVTBzYVVKQlFXbENMRWRCUVVjc1EwRkJReXhMUVVGelFpeEZRVUZGTEVWQlFVVTdTVUZGZUVRc1RVRkJUU3hMUVVGTExFZEJRVmNzUTBGQlF5eExRVUZMTEVOQlFVTXNZMEZCWXl4SlFVRkpMRWxCUVVrc1NVRkJTU3hMUVVGTExFTkJRVU1zWTBGQll5eERRVUZETEUxQlFVMHNSMEZCUnl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVVVzUzBGQlN5eERRVUZETEdOQlFXTXNSMEZCU1N4TFFVRkxMRU5CUVVNc1EwRkJReXhEUVVGRExFVkJRVVVzUTBGQlF6dEpRVU01U0N4TlFVRk5MRXRCUVVzc1IwRkJWeXhEUVVGRExFdEJRVXNzUTBGQlF5eGxRVUZsTEVsQlFVa3NTVUZCU1N4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRkxFdEJRVXNzUTBGQlF5eGxRVUZsTEVOQlFVTXNRMEZCUXl4RFFVRkRMSGRDUVVGM1FpeERRVUZETzBsQlF6RkhMRTFCUVUwc1UwRkJVeXhIUVVGSExFdEJRVXNzUjBGQlJ5eExRVUZMTEVOQlFVTTdTVUZGYUVNc1QwRkJUeXhEUVVOSUxEWkNRVU5KTEZOQlFWTXNSVUZCUlN4blFrRkJaMElzUjBGQlJ5eERRVUZETEV0QlFVc3NRMEZCUXl4WFFVRlhMRWxCUVVrc1NVRkJTU3hEUVVGQkxFTkJRVU1zUTBGQlF5eEhRVUZITEVkQlFVY3NTMEZCU3l4RFFVRkRMRmRCUVZjc1EwRkJReXhEUVVGRExFTkJRVU1zUlVGQlJTeERRVUZETEVsQlEzUkdMRk5CUVZNc1EwRkRVaXhEUVVOVUxFTkJRVUU3UVVGRFRDeERRVUZETEVOQlFVTWlMQ0p6YjNWeVkyVnpRMjl1ZEdWdWRDSTZXeUl2S2x4dUlDb2dJRU52Y0hseWFXZG9kQ0F5TURJd0lFRmtiMkpsWEc0Z0tseHVJQ29nSUV4cFkyVnVjMlZrSUhWdVpHVnlJSFJvWlNCQmNHRmphR1VnVEdsalpXNXpaU3dnVm1WeWMybHZiaUF5TGpBZ0tIUm9aU0JjSWt4cFkyVnVjMlZjSWlrN1hHNGdLaUFnZVc5MUlHMWhlU0J1YjNRZ2RYTmxJSFJvYVhNZ1ptbHNaU0JsZUdObGNIUWdhVzRnWTI5dGNHeHBZVzVqWlNCM2FYUm9JSFJvWlNCTWFXTmxibk5sTGx4dUlDb2dJRmx2ZFNCdFlYa2diMkowWVdsdUlHRWdZMjl3ZVNCdlppQjBhR1VnVEdsalpXNXpaU0JoZEZ4dUlDcGNiaUFxSUNBZ0lDQWdhSFIwY0RvdkwzZDNkeTVoY0dGamFHVXViM0puTDJ4cFkyVnVjMlZ6TDB4SlEwVk9VMFV0TWk0d1hHNGdLbHh1SUNvZ0lGVnViR1Z6Y3lCeVpYRjFhWEpsWkNCaWVTQmhjSEJzYVdOaFlteGxJR3hoZHlCdmNpQmhaM0psWldRZ2RHOGdhVzRnZDNKcGRHbHVaeXdnYzI5bWRIZGhjbVZjYmlBcUlDQmthWE4wY21saWRYUmxaQ0IxYm1SbGNpQjBhR1VnVEdsalpXNXpaU0JwY3lCa2FYTjBjbWxpZFhSbFpDQnZiaUJoYmlCY0lrRlRJRWxUWENJZ1FrRlRTVk1zWEc0Z0tpQWdWMGxVU0U5VlZDQlhRVkpTUVU1VVNVVlRJRTlTSUVOUFRrUkpWRWxQVGxNZ1QwWWdRVTVaSUV0SlRrUXNJR1ZwZEdobGNpQmxlSEJ5WlhOeklHOXlJR2x0Y0d4cFpXUXVYRzRnS2lBZ1UyVmxJSFJvWlNCTWFXTmxibk5sSUdadmNpQjBhR1VnYzNCbFkybG1hV01nYkdGdVozVmhaMlVnWjI5MlpYSnVhVzVuSUhCbGNtMXBjM05wYjI1eklHRnVaRnh1SUNvZ0lHeHBiV2wwWVhScGIyNXpJSFZ1WkdWeUlIUm9aU0JNYVdObGJuTmxMbHh1SUNvdlhHNXBiWEJ2Y25RZ1VtVmhZM1FzSUh0RGIyMXdiMjVsYm5SOUlHWnliMjBnSjNKbFlXTjBKenRjYmx4dVpYaHdiM0owSUdsdWRHVnlabUZqWlNCUWJHRmpaVWh2YkdSbGNrMXZaR1ZzSUh0Y2JpQWdJQ0JqYjIxd2IyNWxiblJVYVhSc1pUODZJSE4wY21sdVoxeHVJQ0FnSUdOc1lYTnpRWEJ3Wlc1a1B6b2djM1J5YVc1blhHNGdJQ0FnWlcxd2RIbFVaWGgwUVhCd1pXNWtQem9nYzNSeWFXNW5YRzU5WEc1amIyNXpkQ0JFUlVaQlZVeFVYMFZOVUZSWlgxUkZXRlJmVEVGQ1JVd2dQU0FuVUd4bFlYTmxJR052Ym1acFozVnlaU0IwYUdVZ1kyOXRjRzl1Wlc1MEp6dGNibHh1Wlhod2IzSjBJR052Ym5OMElFVmthWFJ2Y2xCc1lXTmxTRzlzWkdWeUlEMGdLSEJ5YjNCek9sQnNZV05sU0c5c1pHVnlUVzlrWld3cElEMCtJSHRjYmx4dUlDQWdJR052Ym5OMElIQmhjblF4T2lCemRISnBibWNnUFNBb2NISnZjSE11WTI5dGNHOXVaVzUwVkdsMGJHVWdJVDBnYm5Wc2JDQW1KaUJ3Y205d2N5NWpiMjF3YjI1bGJuUlVhWFJzWlM1c1pXNW5kR2dnUGlBd0tTQS9JQ0J3Y205d2N5NWpiMjF3YjI1bGJuUlVhWFJzWlNBcklDQW5JQzBnSnlBNklDY25PMXh1SUNBZ0lHTnZibk4wSUhCaGNuUXlPaUJ6ZEhKcGJtY2dQU0FvY0hKdmNITXVaVzF3ZEhsVVpYaDBRWEJ3Wlc1a0lDRTlJRzUxYkd3cElEOGdJSEJ5YjNCekxtVnRjSFI1VkdWNGRFRndjR1Z1WkNBNklFUkZSa0ZWVEZSZlJVMVFWRmxmVkVWWVZGOU1RVUpGVER0Y2JpQWdJQ0JqYjI1emRDQmxiWEIwZVZSbGVIUWdQU0J3WVhKME1TQXJJSEJoY25ReU8xeHVYRzRnSUNBZ2NtVjBkWEp1SUNoY2JpQWdJQ0FnSUNBZ1BHUnBkbHh1SUNBZ0lDQWdJQ0FnSUNBZ1kyeGhjM05PWVcxbFBYc25ZM0V0Y0d4aFkyVm9iMnhrWlhJbklDc2dLSEJ5YjNCekxtTnNZWE56UVhCd1pXNWtJQ0U5SUc1MWJHdy9JQ2NnSnlBcklIQnliM0J6TG1Oc1lYTnpRWEJ3Wlc1a0lEb2dKeWNwZlQ1Y2JpQWdJQ0FnSUNBZ0lDQWdJSHRsYlhCMGVWUmxlSFI5WEc0Z0lDQWdJQ0FnSUR3dlpHbDJQbHh1SUNBZ0lDbGNibjA3SWwxOSIsIi8qXG4gKiAgQ29weXJpZ2h0IDIwMjAgQWRvYmVcbiAqXG4gKiAgTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqICB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiAgWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICAgICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiAgVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqICBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqICBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiAgbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB3aXRoQ29uZGl0aW9uYWxQbGFjZUhvbGRlciwgd2l0aFN0YW5kYXJkQmFzZUNzc0NsYXNzIH0gZnJvbSBcIi4uLy4uLy4uL0Fic3RyYWN0Q29yZUNvbXBvbmVudFwiO1xuaW1wb3J0IHsgUm91dGVkTGluayB9IGZyb20gXCIuLi8uLi8uLi9yb3V0aW5nL1JvdXRlZExpbmtcIjtcbmltcG9ydCB7IE5hdmlnYXRpb25WMUlzRW1wdHlGbiB9IGZyb20gXCIuL05hdmlnYXRpb25WMUlzRW1wdHlGblwiO1xuZXhwb3J0IGNvbnN0IGRldGVybWluZUlzQWN0aXZlID0gKGl0ZW0pID0+IHtcbiAgICByZXR1cm4gaXRlbS5hY3RpdmU7XG59O1xuZXhwb3J0IGNvbnN0IE5hdmlnYXRpb25WMUdyb3VwID0gKGl0ZW0pID0+IHtcbiAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoUmVhY3QuRnJhZ21lbnQsIG51bGwsICEhaXRlbS5jaGlsZHJlbiAmJiBpdGVtLmNoaWxkcmVuLmxlbmd0aCA+IDAgJiYgKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiLCB7IGNsYXNzTmFtZTogaXRlbS5iYXNlQ3NzQ2xhc3MgKyAnX19ncm91cCcgfSwgaXRlbS5jaGlsZHJlbi5tYXAoKGl0ZW0sIGluZGV4KSA9PiBSZWFjdC5jcmVhdGVFbGVtZW50KE5hdmlnYXRpb25WMUl0ZW0sIE9iamVjdC5hc3NpZ24oeyBrZXk6IGl0ZW0uYmFzZUNzc0NsYXNzICsgJ19faXRlbS0nICsgaW5kZXggfSwgaXRlbSwgeyBpbmRleDogaW5kZXggfSkpKSkpKSk7XG59O1xuZXhwb3J0IGNvbnN0IE5hdmlnYXRpb25WMUl0ZW0gPSAoaXRlbSkgPT4ge1xuICAgIGNvbnN0IGlzQWN0aXZlID0gZGV0ZXJtaW5lSXNBY3RpdmUoaXRlbSk7XG4gICAgY29uc3QgY3NzQ2xhc3MgPSBpdGVtLmJhc2VDc3NDbGFzcyArICdfX2l0ZW0gJyArXG4gICAgICAgIGl0ZW0uYmFzZUNzc0NsYXNzICsgJ19faXRlbS0tbGV2ZWwtJyArIGl0ZW0ubGV2ZWwgKyAnICdcbiAgICAgICAgKyAoaXNBY3RpdmUgPyAnICcgKyBpdGVtLmJhc2VDc3NDbGFzcyArICdfX2l0ZW0tLWFjdGl2ZScgOiAnJyk7XG4gICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KFwibGlcIiwgeyBjbGFzc05hbWU6IGNzc0NsYXNzIH0sXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoUm91dGVkTGluaywgeyBpc1JvdXRlZDogaXRlbS5yb3V0ZWQsIHRvOiBpdGVtLnVybCwgdGl0bGU6IGl0ZW0udGl0bGUsIFwiYXJpYS1jdXJyZW50XCI6IGlzQWN0aXZlICYmICdwYWdlJywgY2xhc3NOYW1lOiBpdGVtLmJhc2VDc3NDbGFzcyArICdfX2l0ZW0tbGluaycgfSwgaXRlbS50aXRsZSksXG4gICAgICAgICEhaXRlbS5jaGlsZHJlbiAmJiBpdGVtLmNoaWxkcmVuLmxlbmd0aCA+IDAgJiYgUmVhY3QuY3JlYXRlRWxlbWVudChOYXZpZ2F0aW9uVjFHcm91cCwgT2JqZWN0LmFzc2lnbih7fSwgaXRlbSkpKSk7XG59O1xuZXhwb3J0IGNvbnN0IE5hdmlnYXRpb25WMUltcGwgPSAocHJvcHMpID0+IHtcbiAgICBjb25zdCBzZWxmQ2xvbmUgPSB7XG4gICAgICAgIGFjdGl2ZTogZmFsc2UsXG4gICAgICAgIGxhc3RNb2RpZmllZDogMCxcbiAgICAgICAgbGV2ZWw6IDAsXG4gICAgICAgIHBhdGg6IFwiXCIsXG4gICAgICAgIHRpdGxlOiBcIlwiLFxuICAgICAgICB1cmw6IFwiXCIsXG4gICAgICAgIGNoaWxkcmVuOiBwcm9wcy5pdGVtc1xuICAgIH07XG4gICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KFwibmF2XCIsIHsgY2xhc3NOYW1lOiBwcm9wcy5iYXNlQ3NzQ2xhc3MsIHJvbGU6IFwibmF2aWdhdGlvblwiLCBpdGVtU2NvcGU6IHRydWUsIGl0ZW1UeXBlOiBcImh0dHA6Ly9zY2hlbWEub3JnL1NpdGVOYXZpZ2F0aW9uRWxlbWVudFwiLCBcImFyaWEtbGFiZWxcIjogcHJvcHMuYWNjZXNzaWJpbGl0eUxhYmVsIH0sXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoTmF2aWdhdGlvblYxR3JvdXAsIE9iamVjdC5hc3NpZ24oe30sIHNlbGZDbG9uZSkpKSk7XG59O1xuZXhwb3J0IGNvbnN0IE5hdmlnYXRpb25WMSA9IChwcm9wcykgPT4ge1xuICAgIGNvbnN0IFdyYXBwZWQgPSB3aXRoQ29uZGl0aW9uYWxQbGFjZUhvbGRlcih3aXRoU3RhbmRhcmRCYXNlQ3NzQ2xhc3MoTmF2aWdhdGlvblYxSW1wbCwgXCJjbXAtbmF2aWdhdGlvblwiKSwgTmF2aWdhdGlvblYxSXNFbXB0eUZuLCBcIk5hdmlnYXRpb24gVjFcIik7XG4gICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoV3JhcHBlZCwgT2JqZWN0LmFzc2lnbih7fSwgcHJvcHMpKTtcbn07XG5leHBvcnQgZGVmYXVsdCBOYXZpZ2F0aW9uVjE7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lUbUYyYVdkaGRHbHZibFl4TG1weklpd2ljMjkxY21ObFVtOXZkQ0k2SWlJc0luTnZkWEpqWlhNaU9sc2lUbUYyYVdkaGRHbHZibFl4TG5SemVDSmRMQ0p1WVcxbGN5STZXMTBzSW0xaGNIQnBibWR6SWpvaVFVRkJRVHM3T3pzN096czdPenM3T3pzN1IwRmpSenRCUVVWSUxFOUJRVThzUzBGQlN5eE5RVUZOTEU5QlFVOHNRMEZCUXp0QlFVTXhRaXhQUVVGUExFVkJRV3RDTERCQ1FVRXdRaXhGUVVGRkxIZENRVUYzUWl4RlFVRkRMRTFCUVUwc1owTkJRV2RETEVOQlFVTTdRVUZGY2tnc1QwRkJUeXhGUVVGRExGVkJRVlVzUlVGQlF5eE5RVUZOTERaQ1FVRTJRaXhEUVVGRE8wRkJRM1pFTEU5QlFVOHNSVUZCUXl4eFFrRkJjVUlzUlVGQlF5eE5RVUZOTEhsQ1FVRjVRaXhEUVVGRE8wRkJiVUk1UkN4TlFVRk5MRU5CUVVNc1RVRkJUU3hwUWtGQmFVSXNSMEZCUnl4RFFVRkRMRWxCUVhGQ0xFVkJRVVVzUlVGQlJUdEpRVU4yUkN4UFFVRlBMRWxCUVVrc1EwRkJReXhOUVVGTkxFTkJRVU03UVVGRGRrSXNRMEZCUXl4RFFVRkRPMEZCUlVZc1RVRkJUU3hEUVVGRExFMUJRVTBzYVVKQlFXbENMRWRCUVVjc1EwRkJReXhKUVVGeFFpeEZRVUZGTEVWQlFVVTdTVUZEZGtRc1QwRkJUeXhEUVVOSUxEQkRRVU5MTEVOQlFVTXNRMEZCUXl4SlFVRkpMRU5CUVVNc1VVRkJVU3hKUVVGSkxFbEJRVWtzUTBGQlF5eFJRVUZSTEVOQlFVTXNUVUZCVFN4SFFVRkhMRU5CUVVNc1NVRkJTeXhEUVVNM1F5dzBRa0ZCU3l4VFFVRlRMRVZCUVVVc1NVRkJTU3hEUVVGRExGbEJRVmtzUjBGQlJ5eFRRVUZUTEVsQlEzaERMRWxCUVVrc1EwRkJReXhSUVVGUkxFTkJRVU1zUjBGQlJ5eERRVU5rTEVOQlFVTXNTVUZCU1N4RlFVRkRMRXRCUVVzc1JVRkJSU3hGUVVGRkxFTkJRVU1zYjBKQlFVTXNaMEpCUVdkQ0xHdENRVUZETEVkQlFVY3NSVUZCUlN4SlFVRkpMRU5CUVVNc1dVRkJXU3hIUVVGSExGTkJRVk1zUjBGQlJ5eExRVUZMTEVsQlFVMHNTVUZCU1N4SlFVRkZMRXRCUVVzc1JVRkJSU3hMUVVGTExFbEJRVWNzUTBGRE1VY3NRMEZEUVN4RFFVTlNMRU5CUTBZc1EwRkRUaXhEUVVGQk8wRkJRMHdzUTBGQlF5eERRVUZETzBGQlJVWXNUVUZCVFN4RFFVRkRMRTFCUVUwc1owSkJRV2RDTEVkQlFVY3NRMEZCUXl4SlFVRnhRaXhGUVVGRkxFVkJRVVU3U1VGRmRFUXNUVUZCVFN4UlFVRlJMRWRCUVVjc2FVSkJRV2xDTEVOQlFVTXNTVUZCU1N4RFFVRkRMRU5CUVVNN1NVRkRla01zVFVGQlRTeFJRVUZSTEVkQlFVY3NTVUZCU1N4RFFVRkRMRmxCUVZrc1IwRkJSeXhUUVVGVE8xRkJRemxDTEVsQlFVa3NRMEZCUXl4WlFVRlpMRWRCUVVjc1owSkJRV2RDTEVkQlFVY3NTVUZCU1N4RFFVRkRMRXRCUVVzc1IwRkJSeXhIUVVGSE8xVkJRM0JFTEVOQlFVTXNVVUZCVVN4RFFVRkRMRU5CUVVNc1EwRkJReXhIUVVGSExFZEJRVWNzU1VGQlNTeERRVUZETEZsQlFWa3NSMEZCUnl4blFrRkJaMElzUTBGQlF5eERRVUZETEVOQlFVTXNSVUZCUlN4RFFVRkRMRU5CUVVNN1NVRkRhRVlzVDBGQlR5eERRVU5JTERSQ1FVRkpMRk5CUVZNc1JVRkJSU3hSUVVGUk8xRkJRMllzYjBKQlFVTXNWVUZCVlN4SlFVRkRMRkZCUVZFc1JVRkJSU3hKUVVGSkxFTkJRVU1zVFVGQlRTeEZRVUZGTEVWQlFVVXNSVUZCUlN4SlFVRkpMRU5CUVVNc1IwRkJSeXhGUVVGRkxFdEJRVXNzUlVGQlJTeEpRVUZKTEVOQlFVTXNTMEZCU3l4clFrRkJaMElzVVVGQlVTeEpRVUZKTEUxQlFVMHNSVUZEYUVjc1UwRkJVeXhGUVVGRkxFbEJRVWtzUTBGQlF5eFpRVUZaTEVkQlFVY3NZVUZCWVN4SlFVRkhMRWxCUVVrc1EwRkJReXhMUVVGTExFTkJRMmhFTzFGQlJWUXNRMEZCUXl4RFFVRkRMRWxCUVVrc1EwRkJReXhSUVVGUkxFbEJRVWtzU1VGQlNTeERRVUZETEZGQlFWRXNRMEZCUXl4TlFVRk5MRWRCUVVjc1EwRkJReXhKUVVGSkxHOUNRVUZETEdsQ1FVRnBRaXh2UWtGQlN5eEpRVUZKTEVWQlFVY3NRMEZGY0VZc1EwRkRVaXhEUVVGQk8wRkJSVXdzUTBGQlF5eERRVUZETzBGQlJVWXNUVUZCVFN4RFFVRkRMRTFCUVUwc1owSkJRV2RDTEVkQlFVY3NRMEZCUXl4TFFVRjFRaXhGUVVGRkxFVkJRVVU3U1VGRmVFUXNUVUZCVFN4VFFVRlRMRWRCUVc5Q08xRkJReTlDTEUxQlFVMHNSVUZCUlN4TFFVRkxPMUZCUTJJc1dVRkJXU3hGUVVGRkxFTkJRVU03VVVGRFppeExRVUZMTEVWQlFVVXNRMEZCUXp0UlFVTlNMRWxCUVVrc1JVRkJSU3hGUVVGRk8xRkJRMUlzUzBGQlN5eEZRVUZGTEVWQlFVVTdVVUZEVkN4SFFVRkhMRVZCUVVVc1JVRkJSVHRSUVVOUUxGRkJRVkVzUlVGQlJTeExRVUZMTEVOQlFVTXNTMEZCU3p0TFFVTjRRaXhEUVVGRE8wbEJSVVlzVDBGQlR5eERRVU5JTERaQ1FVRkxMRk5CUVZNc1JVRkJSU3hMUVVGTExFTkJRVU1zV1VGQldTeEZRVU0zUWl4SlFVRkpMRVZCUVVNc1dVRkJXU3hGUVVOcVFpeFRRVUZUTEZGQlFVTXNVVUZCVVN4RlFVRkRMSGxEUVVGNVF5eG5Ra0ZEYUVRc1MwRkJTeXhEUVVGRExHdENRVUZyUWp0UlFVTnlReXh2UWtGQlF5eHBRa0ZCYVVJc2IwSkJRVXNzVTBGQlV5eEZRVUZITEVOQlEycERMRU5CUTFRc1EwRkJRVHRCUVVWTUxFTkJRVU1zUTBGQlFUdEJRVWxFTEUxQlFVMHNRMEZCUXl4TlFVRk5MRmxCUVZrc1IwRkJSeXhEUVVGRExFdEJRWFZDTEVWQlFVVXNSVUZCUlR0SlFVTndSQ3hOUVVGTkxFOUJRVThzUjBGQlJ5d3dRa0ZCTUVJc1EwRkJReXgzUWtGQmQwSXNRMEZCUXl4blFrRkJaMElzUlVGQlJTeG5Ra0ZCWjBJc1EwRkJReXhGUVVGRkxIRkNRVUZ4UWl4RlFVRkZMR1ZCUVdVc1EwRkJReXhEUVVGQk8wbEJRMmhLTEU5QlFVOHNiMEpCUVVNc1QwRkJUeXh2UWtGQlN5eExRVUZMTEVWQlFVY3NRMEZCUVR0QlFVTm9ReXhEUVVGRExFTkJRVU03UVVGRlJpeGxRVUZsTEZsQlFWa3NRMEZCUXlJc0luTnZkWEpqWlhORGIyNTBaVzUwSWpwYklpOHFYRzRnS2lBZ1EyOXdlWEpwWjJoMElESXdNakFnUVdSdlltVmNiaUFxWEc0Z0tpQWdUR2xqWlc1elpXUWdkVzVrWlhJZ2RHaGxJRUZ3WVdOb1pTQk1hV05sYm5ObExDQldaWEp6YVc5dUlESXVNQ0FvZEdobElGd2lUR2xqWlc1elpWd2lLVHRjYmlBcUlDQjViM1VnYldGNUlHNXZkQ0IxYzJVZ2RHaHBjeUJtYVd4bElHVjRZMlZ3ZENCcGJpQmpiMjF3YkdsaGJtTmxJSGRwZEdnZ2RHaGxJRXhwWTJWdWMyVXVYRzRnS2lBZ1dXOTFJRzFoZVNCdlluUmhhVzRnWVNCamIzQjVJRzltSUhSb1pTQk1hV05sYm5ObElHRjBYRzRnS2x4dUlDb2dJQ0FnSUNCb2RIUndPaTh2ZDNkM0xtRndZV05vWlM1dmNtY3ZiR2xqWlc1elpYTXZURWxEUlU1VFJTMHlMakJjYmlBcVhHNGdLaUFnVlc1c1pYTnpJSEpsY1hWcGNtVmtJR0o1SUdGd2NHeHBZMkZpYkdVZ2JHRjNJRzl5SUdGbmNtVmxaQ0IwYnlCcGJpQjNjbWwwYVc1bkxDQnpiMlowZDJGeVpWeHVJQ29nSUdScGMzUnlhV0oxZEdWa0lIVnVaR1Z5SUhSb1pTQk1hV05sYm5ObElHbHpJR1JwYzNSeWFXSjFkR1ZrSUc5dUlHRnVJRndpUVZNZ1NWTmNJaUJDUVZOSlV5eGNiaUFxSUNCWFNWUklUMVZVSUZkQlVsSkJUbFJKUlZNZ1QxSWdRMDlPUkVsVVNVOU9VeUJQUmlCQlRsa2dTMGxPUkN3Z1pXbDBhR1Z5SUdWNGNISmxjM01nYjNJZ2FXMXdiR2xsWkM1Y2JpQXFJQ0JUWldVZ2RHaGxJRXhwWTJWdWMyVWdabTl5SUhSb1pTQnpjR1ZqYVdacFl5QnNZVzVuZFdGblpTQm5iM1psY201cGJtY2djR1Z5YldsemMybHZibk1nWVc1a1hHNGdLaUFnYkdsdGFYUmhkR2x2Ym5NZ2RXNWtaWElnZEdobElFeHBZMlZ1YzJVdVhHNGdLaTljYmx4dWFXMXdiM0owSUZKbFlXTjBJR1p5YjIwZ0ozSmxZV04wSnp0Y2JtbHRjRzl5ZENCN1NHRnpRbUZ6WlVOemMwTnNZWE56TENCM2FYUm9RMjl1WkdsMGFXOXVZV3hRYkdGalpVaHZiR1JsY2l3Z2QybDBhRk4wWVc1a1lYSmtRbUZ6WlVOemMwTnNZWE56ZlNCbWNtOXRJRndpTGk0dkxpNHZMaTR2UVdKemRISmhZM1JEYjNKbFEyOXRjRzl1Wlc1MFhDSTdYRzVwYlhCdmNuUWdlMUp2ZFhSbFpFTnZjbVZEYjIxd2IyNWxiblJOYjJSbGJDd2dVbTkxZEdWa1RXOWtaV3g5SUdaeWIyMGdYQ0l1TGk4dUxpOHVMaTl5YjNWMGFXNW5MMUp2ZFhSbFpFTnZjbVZEYjIxd2IyNWxiblJjSWp0Y2JtbHRjRzl5ZENCN1VtOTFkR1ZrVEdsdWEzMGdabkp2YlNCY0lpNHVMeTR1THk0dUwzSnZkWFJwYm1jdlVtOTFkR1ZrVEdsdWExd2lPMXh1YVcxd2IzSjBJSHRPWVhacFoyRjBhVzl1VmpGSmMwVnRjSFI1Um01OUlHWnliMjBnWENJdUwwNWhkbWxuWVhScGIyNVdNVWx6Ulcxd2RIbEdibHdpTzF4dVhHNWxlSEJ2Y25RZ2FXNTBaWEptWVdObElFNWhkbWxuWVhScGIyNVdNVWwwWlcwZ1pYaDBaVzVrY3lCU2IzVjBaV1JOYjJSbGJDeElZWE5DWVhObFEzTnpRMnhoYzNON1hHNGdJQ0FnYkdWMlpXdzZJRzUxYldKbGNpeGNiaUFnSUNCcGJtUmxlRDg2SUc1MWJXSmxjaXhjYmlBZ0lDQmhZM1JwZG1VNklHSnZiMnhsWVc0c1hHNGdJQ0FnZEdsMGJHVTZJSE4wY21sdVp5eGNiaUFnSUNCMWNtdzZJSE4wY21sdVp5eGNiaUFnSUNCc1lYTjBUVzlrYVdacFpXUTZJRzUxYldKbGNpeGNiaUFnSUNCa1pYTmpjbWx3ZEdsdmJqODZJSE4wY21sdVp5eGNiaUFnSUNCd1lYUm9PaUJ6ZEhKcGJtY3NYRzRnSUNBZ1kyaHBiR1J5Wlc0L09pQk9ZWFpwWjJGMGFXOXVWakZKZEdWdFcxMWNibjFjYmx4dVpYaHdiM0owSUdsdWRHVnlabUZqWlNCT1lYWnBaMkYwYVc5dVZqRk5iMlJsYkNCbGVIUmxibVJ6SUZKdmRYUmxaRU52Y21WRGIyMXdiMjVsYm5STmIyUmxiSHRjYmlBZ0lDQnBkR1Z0Y3pwT1lYWnBaMkYwYVc5dVZqRkpkR1Z0VzExY2JpQWdJQ0JoWTJObGMzTnBZbWxzYVhSNVRHRmlaV3cvT2lCemRISnBibWRjYm4xY2JseHVaWGh3YjNKMElHTnZibk4wSUdSbGRHVnliV2x1WlVselFXTjBhWFpsSUQwZ0tHbDBaVzA2VG1GMmFXZGhkR2x2YmxZeFNYUmxiU2tnUFQ0Z2UxeHVJQ0FnSUhKbGRIVnliaUJwZEdWdExtRmpkR2wyWlR0Y2JuMDdYRzVjYm1WNGNHOXlkQ0JqYjI1emRDQk9ZWFpwWjJGMGFXOXVWakZIY205MWNDQTlJQ2hwZEdWdE9rNWhkbWxuWVhScGIyNVdNVWwwWlcwcElEMCtJSHRjYmlBZ0lDQnlaWFIxY200Z0tGeHVJQ0FnSUNBZ0lDQThQbHh1SUNBZ0lDQWdJQ0FnSUNBZ2V5RWhhWFJsYlM1amFHbHNaSEpsYmlBbUppQnBkR1Z0TG1Ob2FXeGtjbVZ1TG14bGJtZDBhQ0ErSURBZ0ppWWdJQ2hjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0E4ZFd3Z0lHTnNZWE56VG1GdFpUMTdhWFJsYlM1aVlYTmxRM056UTJ4aGMzTWdLeUFuWDE5bmNtOTFjQ2Q5UGx4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQjdhWFJsYlM1amFHbHNaSEpsYmk1dFlYQW9YRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQW9hWFJsYlN4cGJtUmxlQ2tnUFQ0Z1BFNWhkbWxuWVhScGIyNVdNVWwwWlcwZ2EyVjVQWHRwZEdWdExtSmhjMlZEYzNORGJHRnpjeUFySUNkZlgybDBaVzB0SnlBcklHbHVaR1Y0ZlNCN0xpNHVhWFJsYlgwZ2FXNWtaWGc5ZTJsdVpHVjRmUzgrWEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDbDlYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdQQzkxYkQ1Y2JpQWdJQ0FnSUNBZ0lDQWdJQ2w5WEc0Z0lDQWdJQ0FnSUR3dlBseHVJQ0FnSUNsY2JuMDdYRzVjYm1WNGNHOXlkQ0JqYjI1emRDQk9ZWFpwWjJGMGFXOXVWakZKZEdWdElEMGdLR2wwWlcwNlRtRjJhV2RoZEdsdmJsWXhTWFJsYlNrZ1BUNGdlMXh1WEc0Z0lDQWdZMjl1YzNRZ2FYTkJZM1JwZG1VZ1BTQmtaWFJsY20xcGJtVkpjMEZqZEdsMlpTaHBkR1Z0S1R0Y2JpQWdJQ0JqYjI1emRDQmpjM05EYkdGemN5QTlJR2wwWlcwdVltRnpaVU56YzBOc1lYTnpJQ3NnSjE5ZmFYUmxiU0FuSUN0Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdhWFJsYlM1aVlYTmxRM056UTJ4aGMzTWdLeUFuWDE5cGRHVnRMUzFzWlhabGJDMG5JQ3NnYVhSbGJTNXNaWFpsYkNBcklDY2dKMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0t5QW9hWE5CWTNScGRtVWdQeUFuSUNjZ0t5QnBkR1Z0TG1KaGMyVkRjM05EYkdGemN5QXJJQ2RmWDJsMFpXMHRMV0ZqZEdsMlpTY2dPaUFuSnlrN1hHNGdJQ0FnY21WMGRYSnVJQ2hjYmlBZ0lDQWdJQ0FnUEd4cElHTnNZWE56VG1GdFpUMTdZM056UTJ4aGMzTjlQbHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJRHhTYjNWMFpXUk1hVzVySUdselVtOTFkR1ZrUFh0cGRHVnRMbkp2ZFhSbFpIMGdkRzg5ZTJsMFpXMHVkWEpzZlNCMGFYUnNaVDE3YVhSbGJTNTBhWFJzWlgwZ1lYSnBZUzFqZFhKeVpXNTBQWHRwYzBGamRHbDJaU0FtSmlBbmNHRm5aU2Q5WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lHTnNZWE56VG1GdFpUMTdhWFJsYlM1aVlYTmxRM056UTJ4aGMzTWdLeUFuWDE5cGRHVnRMV3hwYm1zbmZUNTdhWFJsYlM1MGFYUnNaVnh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdmVHd2VW05MWRHVmtUR2x1YXo1Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0VoYVhSbGJTNWphR2xzWkhKbGJpQW1KaUJwZEdWdExtTm9hV3hrY21WdUxteGxibWQwYUNBK0lEQWdKaVlnUEU1aGRtbG5ZWFJwYjI1V01VZHliM1Z3SUhzdUxpNXBkR1Z0ZlM4K1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2ZWeHVJQ0FnSUNBZ0lDQThMMnhwUGx4dUlDQWdJQ2xjYmx4dWZUdGNibHh1Wlhod2IzSjBJR052Ym5OMElFNWhkbWxuWVhScGIyNVdNVWx0Y0d3Z1BTQW9jSEp2Y0hNNlRtRjJhV2RoZEdsdmJsWXhUVzlrWld3cElEMCtJSHRjYmx4dUlDQWdJR052Ym5OMElITmxiR1pEYkc5dVpUcE9ZWFpwWjJGMGFXOXVWakZKZEdWdElEMGdlMXh1SUNBZ0lDQWdJQ0JoWTNScGRtVTZJR1poYkhObExGeHVJQ0FnSUNBZ0lDQnNZWE4wVFc5a2FXWnBaV1E2SURBc1hHNGdJQ0FnSUNBZ0lHeGxkbVZzT2lBd0xGeHVJQ0FnSUNBZ0lDQndZWFJvT2lCY0lsd2lMRnh1SUNBZ0lDQWdJQ0IwYVhSc1pUb2dYQ0pjSWl4Y2JpQWdJQ0FnSUNBZ2RYSnNPaUJjSWx3aUxGeHVJQ0FnSUNBZ0lDQmphR2xzWkhKbGJqb2djSEp2Y0hNdWFYUmxiWE5jYmlBZ0lDQjlPMXh1WEc0Z0lDQWdjbVYwZFhKdUlDaGNiaUFnSUNBZ0lDQWdQRzVoZGlCamJHRnpjMDVoYldVOWUzQnliM0J6TG1KaGMyVkRjM05EYkdGemMzMWNiaUFnSUNBZ0lDQWdJQ0FnSUNCeWIyeGxQVndpYm1GMmFXZGhkR2x2Ymx3aVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnYVhSbGJWTmpiM0JsSUdsMFpXMVVlWEJsUFZ3aWFIUjBjRG92TDNOamFHVnRZUzV2Y21jdlUybDBaVTVoZG1sbllYUnBiMjVGYkdWdFpXNTBYQ0pjYmlBZ0lDQWdJQ0FnSUNBZ0lDQmhjbWxoTFd4aFltVnNQWHR3Y205d2N5NWhZMk5sYzNOcFltbHNhWFI1VEdGaVpXeDlQbHh1SUNBZ0lDQWdJQ0FnSUNBZ1BFNWhkbWxuWVhScGIyNVdNVWR5YjNWd0lIc3VMaTV6Wld4bVEyeHZibVY5THo1Y2JpQWdJQ0FnSUNBZ1BDOXVZWFkrWEc0Z0lDQWdLVnh1WEc1OVhHNWNibHh1WEc1bGVIQnZjblFnWTI5dWMzUWdUbUYyYVdkaGRHbHZibFl4SUQwZ0tIQnliM0J6T2s1aGRtbG5ZWFJwYjI1V01VMXZaR1ZzS1NBOVBpQjdYRzRnSUNBZ1kyOXVjM1FnVjNKaGNIQmxaQ0E5SUhkcGRHaERiMjVrYVhScGIyNWhiRkJzWVdObFNHOXNaR1Z5S0hkcGRHaFRkR0Z1WkdGeVpFSmhjMlZEYzNORGJHRnpjeWhPWVhacFoyRjBhVzl1VmpGSmJYQnNMQ0JjSW1OdGNDMXVZWFpwWjJGMGFXOXVYQ0lwTENCT1lYWnBaMkYwYVc5dVZqRkpjMFZ0Y0hSNVJtNHNJRndpVG1GMmFXZGhkR2x2YmlCV01Wd2lLVnh1SUNBZ0lISmxkSFZ5YmlBOFYzSmhjSEJsWkNCN0xpNHVjSEp2Y0hOOUx6NWNibjA3WEc1Y2JtVjRjRzl5ZENCa1pXWmhkV3gwSUU1aGRtbG5ZWFJwYjI1V01Uc2lYWDA9IiwiZXhwb3J0IGZ1bmN0aW9uIE5hdmlnYXRpb25WMUlzRW1wdHlGbihwcm9wcykge1xuICAgIHJldHVybiBwcm9wcy5pdGVtcyA9PSBudWxsIHx8IHByb3BzLml0ZW1zLmxlbmd0aCA9PT0gMDtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaVRtRjJhV2RoZEdsdmJsWXhTWE5GYlhCMGVVWnVMbXB6SWl3aWMyOTFjbU5sVW05dmRDSTZJaUlzSW5OdmRYSmpaWE1pT2xzaVRtRjJhV2RoZEdsdmJsWXhTWE5GYlhCMGVVWnVMblJ6SWwwc0ltNWhiV1Z6SWpwYlhTd2liV0Z3Y0dsdVozTWlPaUpCUVVWQkxFMUJRVTBzVlVGQlZTeHhRa0ZCY1VJc1EwRkJReXhMUVVGMVFqdEpRVU42UkN4UFFVRlBMRXRCUVVzc1EwRkJReXhMUVVGTExFbEJRVWtzU1VGQlNTeEpRVUZKTEV0QlFVc3NRMEZCUXl4TFFVRkxMRU5CUVVNc1RVRkJUU3hMUVVGTExFTkJRVU1zUTBGQlF6dEJRVU16UkN4RFFVRkRJaXdpYzI5MWNtTmxjME52Ym5SbGJuUWlPbHNpYVcxd2IzSjBJSHRPWVhacFoyRjBhVzl1VmpGTmIyUmxiSDBnWm5KdmJTQmNJaTR2VG1GMmFXZGhkR2x2YmxZeFhDSTdYRzVjYm1WNGNHOXlkQ0JtZFc1amRHbHZiaUJPWVhacFoyRjBhVzl1VmpGSmMwVnRjSFI1Um00b2NISnZjSE02VG1GMmFXZGhkR2x2YmxZeFRXOWtaV3dwT2lCaWIyOXNaV0Z1ZTF4dUlDQWdJSEpsZEhWeWJpQndjbTl3Y3k1cGRHVnRjeUE5UFNCdWRXeHNJSHg4SUhCeWIzQnpMbWwwWlcxekxteGxibWQwYUNBOVBUMGdNRHRjYm4waVhYMD0iLCIvKlxuICogIENvcHlyaWdodCAyMDIwIEFkb2JlXG4gKlxuICogIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiAgeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICAgICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqICBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiAgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiAgU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgTGluayBhcyBSb3V0ZXJMaW5rIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG5leHBvcnQgY29uc3QgUm91dGVkTGluayA9IChwcm9wcykgPT4ge1xuICAgIGNvbnN0IHsgdG8sIGlzUm91dGVkLCAuLi5vdGhlclByb3BzIH0gPSBwcm9wcztcbiAgICBpZiAodG8gPT09IHVuZGVmaW5lZCB8fCB0by50cmltKCkubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFwiYVwiLCBPYmplY3QuYXNzaWduKHsgaHJlZjogJyMnIH0sIG90aGVyUHJvcHMpKTtcbiAgICB9XG4gICAgY29uc3QgaXNFeHRlcm5hbCA9IC9eaHR0cHM/OlxcL1xcLy8udGVzdCh0byk7XG4gICAgcmV0dXJuIGlzRXh0ZXJuYWwgfHwgIWlzUm91dGVkID9cbiAgICAgICAgKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJhXCIsIE9iamVjdC5hc3NpZ24oeyBocmVmOiB0byB9LCBvdGhlclByb3BzKSkpXG4gICAgICAgIDpcbiAgICAgICAgICAgIChSZWFjdC5jcmVhdGVFbGVtZW50KFJvdXRlckxpbmssIE9iamVjdC5hc3NpZ24oe30sIG90aGVyUHJvcHMsIHsgdG86IHRvIH0pKSk7XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pVW05MWRHVmtUR2x1YXk1cWN5SXNJbk52ZFhKalpWSnZiM1FpT2lJaUxDSnpiM1Z5WTJWeklqcGJJbEp2ZFhSbFpFeHBibXN1ZEhONElsMHNJbTVoYldWeklqcGJYU3dpYldGd2NHbHVaM01pT2lKQlFVRkJPenM3T3pzN096czdPenM3T3p0SFFXTkhPMEZCUlVnc1QwRkJUeXhMUVVGTExFMUJRVTBzVDBGQlR5eERRVUZETzBGQlF6RkNMRTlCUVU4c1JVRkJReXhKUVVGSkxFbEJRVWtzVlVGQlZTeEZRVUZETEUxQlFVMHNhMEpCUVd0Q0xFTkJRVU03UVVGUGNFUXNUVUZCVFN4RFFVRkRMRTFCUVUwc1ZVRkJWU3hIUVVGSExFTkJRVU1zUzBGQlpTeEZRVUZGTEVWQlFVVTdTVUZETVVNc1RVRkJUU3hGUVVGRExFVkJRVVVzUlVGQlJTeFJRVUZSTEVWQlFVVXNSMEZCUnl4VlFVRlZMRVZCUVVNc1IwRkJSeXhMUVVGTExFTkJRVU03U1VGRk5VTXNTVUZCUnl4RlFVRkZMRXRCUVVzc1UwRkJVeXhKUVVGSkxFVkJRVVVzUTBGQlF5eEpRVUZKTEVWQlFVVXNRMEZCUXl4TlFVRk5MRXRCUVVzc1EwRkJReXhGUVVGRE8xRkJRekZETEU5QlFVOHNlVU5CUVVjc1NVRkJTU3hGUVVGRkxFZEJRVWNzU1VGRFdDeFZRVUZWTEVWQlEyaENMRU5CUVVNN1MwRkRUanRKUVVORUxFMUJRVTBzVlVGQlZTeEhRVUZITEdOQlFXTXNRMEZCUXl4SlFVRkpMRU5CUVVNc1JVRkJSU3hEUVVGRExFTkJRVU03U1VGRk0wTXNUMEZCVHl4VlFVRlZMRWxCUVVrc1EwRkJReXhSUVVGUkxFTkJRVUVzUTBGQlF6dFJRVU16UWl4RFFVRkRMSGxEUVVOSExFbEJRVWtzUlVGQlJTeEZRVUZGTEVsQlEwb3NWVUZCVlN4RlFVTm9RaXhEUVVGRE8xRkJRMGdzUTBGQlF6dFpRVU5FTEVOQlFVVXNiMEpCUVVNc1ZVRkJWU3h2UWtGQlN5eFZRVUZWTEVsQlEyUXNSVUZCUlN4RlFVRkZMRVZCUVVVc1NVRkRiRUlzUTBGQlF5eERRVUZCTzBGQlExZ3NRMEZCUXl4RFFVRkRJaXdpYzI5MWNtTmxjME52Ym5SbGJuUWlPbHNpTHlwY2JpQXFJQ0JEYjNCNWNtbG5hSFFnTWpBeU1DQkJaRzlpWlZ4dUlDcGNiaUFxSUNCTWFXTmxibk5sWkNCMWJtUmxjaUIwYUdVZ1FYQmhZMmhsSUV4cFkyVnVjMlVzSUZabGNuTnBiMjRnTWk0d0lDaDBhR1VnWENKTWFXTmxibk5sWENJcE8xeHVJQ29nSUhsdmRTQnRZWGtnYm05MElIVnpaU0IwYUdseklHWnBiR1VnWlhoalpYQjBJR2x1SUdOdmJYQnNhV0Z1WTJVZ2QybDBhQ0IwYUdVZ1RHbGpaVzV6WlM1Y2JpQXFJQ0JaYjNVZ2JXRjVJRzlpZEdGcGJpQmhJR052Y0hrZ2IyWWdkR2hsSUV4cFkyVnVjMlVnWVhSY2JpQXFYRzRnS2lBZ0lDQWdJR2gwZEhBNkx5OTNkM2N1WVhCaFkyaGxMbTl5Wnk5c2FXTmxibk5sY3k5TVNVTkZUbE5GTFRJdU1GeHVJQ3BjYmlBcUlDQlZibXhsYzNNZ2NtVnhkV2x5WldRZ1lua2dZWEJ3YkdsallXSnNaU0JzWVhjZ2IzSWdZV2R5WldWa0lIUnZJR2x1SUhkeWFYUnBibWNzSUhOdlpuUjNZWEpsWEc0Z0tpQWdaR2x6ZEhKcFluVjBaV1FnZFc1a1pYSWdkR2hsSUV4cFkyVnVjMlVnYVhNZ1pHbHpkSEpwWW5WMFpXUWdiMjRnWVc0Z1hDSkJVeUJKVTF3aUlFSkJVMGxUTEZ4dUlDb2dJRmRKVkVoUFZWUWdWMEZTVWtGT1ZFbEZVeUJQVWlCRFQwNUVTVlJKVDA1VElFOUdJRUZPV1NCTFNVNUVMQ0JsYVhSb1pYSWdaWGh3Y21WemN5QnZjaUJwYlhCc2FXVmtMbHh1SUNvZ0lGTmxaU0IwYUdVZ1RHbGpaVzV6WlNCbWIzSWdkR2hsSUhOd1pXTnBabWxqSUd4aGJtZDFZV2RsSUdkdmRtVnlibWx1WnlCd1pYSnRhWE56YVc5dWN5QmhibVJjYmlBcUlDQnNhVzFwZEdGMGFXOXVjeUIxYm1SbGNpQjBhR1VnVEdsalpXNXpaUzVjYmlBcUwxeHVYRzVwYlhCdmNuUWdVbVZoWTNRZ1puSnZiU0FuY21WaFkzUW5PMXh1YVcxd2IzSjBJSHRNYVc1cklHRnpJRkp2ZFhSbGNreHBibXQ5SUdaeWIyMGdKM0psWVdOMExYSnZkWFJsY2kxa2IyMG5PMXh1WEc1bGVIQnZjblFnYVc1MFpYSm1ZV05sSUV4cGJtdFFjbTl3Y3lCN1hHNGdJQ0FnZEc4L09pQnpkSEpwYm1jN1hHNGdJQ0FnYVhOU2IzVjBaV1EvT2lCaWIyOXNaV0Z1TzF4dUlDQWdJRnR3Y205d09pQnpkSEpwYm1kZE9pQmhibmxjYm4xY2JtVjRjRzl5ZENCamIyNXpkQ0JTYjNWMFpXUk1hVzVySUQwZ0tIQnliM0J6T2t4cGJtdFFjbTl3Y3lrZ1BUNGdlMXh1SUNBZ0lHTnZibk4wSUh0MGJ5d2dhWE5TYjNWMFpXUXNJQzR1TG05MGFHVnlVSEp2Y0hOOUlEMGdjSEp2Y0hNN1hHNWNiaUFnSUNCcFppaDBieUE5UFQwZ2RXNWtaV1pwYm1Wa0lIeDhJSFJ2TG5SeWFXMG9LUzVzWlc1bmRHZ2dQVDA5SURBcGUxeHVJQ0FnSUNBZ0lDQnlaWFIxY200Z1BHRWdhSEpsWmoxN0p5TW5mVnh1SUNBZ0lDQWdJQ0FnSUNBZ2V5NHVMbTkwYUdWeVVISnZjSE45WEc0Z0lDQWdJQ0FnSUM4K08xeHVJQ0FnSUgxY2JpQWdJQ0JqYjI1emRDQnBjMFY0ZEdWeWJtRnNJRDBnTDE1b2RIUndjejg2WEZ3dlhGd3ZMeTUwWlhOMEtIUnZLVHRjYmx4dUlDQWdJSEpsZEhWeWJpQnBjMFY0ZEdWeWJtRnNJSHg4SUNGcGMxSnZkWFJsWkQ5Y2JpQWdJQ0FnSUNBZ0tEeGhYRzRnSUNBZ0lDQWdJQ0FnSUNCb2NtVm1QWHQwYjMxY2JpQWdJQ0FnSUNBZ0lDQWdJSHN1TGk1dmRHaGxjbEJ5YjNCemZWeHVJQ0FnSUNBZ0lDQXZQaWxjYmlBZ0lDQWdJQ0FnT2x4dUlDQWdJQ0FnSUNBb0lEeFNiM1YwWlhKTWFXNXJJSHN1TGk1dmRHaGxjbEJ5YjNCemZWeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUhSdlBYdDBiMzFjYmlBZ0lDQWdJQ0FnTHo0cFhHNTlPeUpkZlE9PSIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyJdLCJzb3VyY2VSb290IjoiIn0=