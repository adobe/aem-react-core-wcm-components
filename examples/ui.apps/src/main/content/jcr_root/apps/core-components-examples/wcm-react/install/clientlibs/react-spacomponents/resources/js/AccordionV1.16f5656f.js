(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["AccordionV1"],{

/***/ "../../react-spa-components/dist/container/accordion/v1/AccordionV1.js":
/*!*******************************************************************************************************************************!*\
  !*** /Users/raaijmak/workspace/aem-react-core-wcm-components/react-spa-components/dist/container/accordion/v1/AccordionV1.js ***!
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

      return __webpack_require__(__webpack_require__.s = 2);
      /******/
    }(
    /************************************************************************/

    /******/
    {
      /***/
      "./src/AbstractCoreContainerComponent.tsx":
      /*!************************************************!*\
        !*** ./src/AbstractCoreContainerComponent.tsx ***!
        \************************************************/

      /*! exports provided: withStandardBaseCssClass, withAuthorPanelSwitch */

      /***/
      function (module, __webpack_exports__, __webpack_require__) {
        "use strict";

        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */


        __webpack_require__.d(__webpack_exports__, "withStandardBaseCssClass", function () {
          return withStandardBaseCssClass;
        });
        /* harmony export (binding) */


        __webpack_require__.d(__webpack_exports__, "withAuthorPanelSwitch", function () {
          return withAuthorPanelSwitch;
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


        const isBrowser = (() => {
          try {
            return typeof window !== 'undefined';
          } catch (err) {
            return false;
          }
        })();

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

        const withAuthorPanelSwitch = Component => {
          return class extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
            constructor(props) {
              super(props);
              this.state = {}; //@ts-ignore

              if (isBrowser && window.Granite && window.Granite.author && window.Granite.author.MessageChannel) {
                //@ts-ignore
                this.messageChannel = new window.Granite.author.MessageChannel("cqauthor", window);
                this.callback = this.callback.bind(this);
              }
            }

            callback(message) {
              if (message.data && message.data.id === this.props.cqPath) {
                if (message.data.operation === "navigate") {
                  const index = message.data.index;
                  this.setState({
                    activeIndexFromAuthorPanel: index
                  });
                }
              }
            }

            componentDidMount() {
              if (this.messageChannel) {
                this.messageChannel.subscribeRequestMessage("cmp.panelcontainer", this.callback);
              }
            }

            componentWillUnmount() {
              if (this.messageChannel) {
                this.messageChannel.unsubscribeRequestMessage("cmp.panelcontainer", this.callback);
              }
            }

            render() {
              return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](Component, Object.assign({}, this.props, {
                activeIndexFromAuthorPanel: this.state.activeIndexFromAuthorPanel
              }));
            }

          };
        }; //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQWJzdHJhY3RDb3JlQ29udGFpbmVyQ29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiQWJzdHJhY3RDb3JlQ29udGFpbmVyQ29tcG9uZW50LnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7R0FjRztBQUVILE9BQU8sS0FBSyxLQUFLLE1BQU0sT0FBTyxDQUFDO0FBdUIvQixNQUFNLFNBQVMsR0FBRyxDQUFDLEdBQUcsRUFBRTtJQUNwQixJQUFHO1FBQ0MsT0FBTyxPQUFPLE1BQU0sS0FBSyxXQUFXLENBQUM7S0FDeEM7SUFBQSxPQUFNLEdBQUcsRUFBQztRQUNQLE9BQU8sS0FBSyxDQUFDO0tBQ2hCO0FBQ0wsQ0FBQyxDQUFDLEVBQUUsQ0FBQztBQUdMLE1BQU0sQ0FBQyxNQUFNLHdCQUF3QixHQUFHLENBRXBDLFNBQTBCLEVBQzFCLG1CQUEwQixFQUNKLEVBQUU7SUFDeEIsT0FBTyxDQUFDLEtBQU8sRUFBRSxFQUFFO1FBRWYsTUFBTSxZQUFZLEdBQUcsS0FBSyxDQUFDLFlBQVksQ0FBQztRQUN4QyxNQUFNLGdCQUFnQixHQUFHLFlBQVksSUFBSSxZQUFZLENBQUMsSUFBSSxFQUFFLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxtQkFBbUIsQ0FBQztRQUU3RyxNQUFNLFdBQVcsR0FBSztZQUNsQixHQUFHLEtBQUs7WUFDUixZQUFZLEVBQUUsZ0JBQWdCO1NBQ2pDLENBQUM7UUFFRixPQUFPLG9CQUFDLFNBQVMsb0JBQUssV0FBVyxFQUFJLENBQUM7SUFDMUMsQ0FBQyxDQUFBO0FBQ0wsQ0FBQyxDQUFDO0FBSUYsTUFBTSxDQUFDLE1BQU0scUJBQXFCLEdBQUcsQ0FDakMsU0FBMEIsRUFDTCxFQUFFO0lBRXZCLE9BQU8sS0FBTSxTQUFRLEtBQUssQ0FBQyxTQUFvQztRQUszRCxZQUFZLEtBQU87WUFDZixLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDYixJQUFJLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQTtZQUVmLFlBQVk7WUFDWixJQUFJLFNBQVMsSUFBSSxNQUFNLENBQUMsT0FBTyxJQUFJLE1BQU0sQ0FBQyxPQUFPLENBQUMsTUFBTSxJQUFJLE1BQU0sQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLGNBQWMsRUFBRTtnQkFDOUYsWUFBWTtnQkFDWixJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksTUFBTSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsY0FBYyxDQUFDLFVBQVUsRUFBRSxNQUFNLENBQUMsQ0FBQztnQkFDbkYsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQzthQUM1QztRQUNMLENBQUM7UUFFRCxRQUFRLENBQUMsT0FBVztZQUNoQixJQUFJLE9BQU8sQ0FBQyxJQUFJLElBQUksT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFFLEtBQUssSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQUU7Z0JBQ3ZELElBQUksT0FBTyxDQUFDLElBQUksQ0FBQyxTQUFTLEtBQUssVUFBVSxFQUFFO29CQUN2QyxNQUFNLEtBQUssR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQWUsQ0FBQztvQkFDM0MsSUFBSSxDQUFDLFFBQVEsQ0FBQzt3QkFDViwwQkFBMEIsRUFBRSxLQUFLO3FCQUNwQyxDQUFDLENBQUE7aUJBQ0w7YUFDSjtRQUNMLENBQUM7UUFFRCxpQkFBaUI7WUFDYixJQUFHLElBQUksQ0FBQyxjQUFjLEVBQUM7Z0JBQ25CLElBQUksQ0FBQyxjQUFjLENBQUMsdUJBQXVCLENBQUMsb0JBQW9CLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO2FBQ3BGO1FBQ0wsQ0FBQztRQUVELG9CQUFvQjtZQUNoQixJQUFHLElBQUksQ0FBQyxjQUFjLEVBQUM7Z0JBQ25CLElBQUksQ0FBQyxjQUFjLENBQUMseUJBQXlCLENBQUMsb0JBQW9CLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO2FBQ3RGO1FBQ0wsQ0FBQztRQUdELE1BQU07WUFDRixPQUFPLG9CQUFDLFNBQVMsb0JBQUssSUFBSSxDQUFDLEtBQUssSUFBRSwwQkFBMEIsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLDBCQUEwQixJQUFJLENBQUM7UUFDNUcsQ0FBQztLQUNKLENBQUE7QUFFTCxDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogIENvcHlyaWdodCAyMDIwIEFkb2JlXG4gKlxuICogIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiAgeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICAgICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqICBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiAgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiAgU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5cbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHtDb250YWluZXJTdGF0ZSwgQWxsb3dlZENvbXBvbmVudHNQcm9wZXJ0aWVzfSBmcm9tICdAYWRvYmUvYWVtLXJlYWN0LWVkaXRhYmxlLWNvbXBvbmVudHMnO1xuaW1wb3J0IHtDb21wb25lbnRUeXBlfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IE1vZGVsIH0gZnJvbSAnQGFkb2JlL2FlbS1zcGEtcGFnZS1tb2RlbC1tYW5hZ2VyJztcblxuZXhwb3J0IGludGVyZmFjZSBDb3JlQ29udGFpbmVyUHJvcGVydGllcyBleHRlbmRzIEFsbG93ZWRDb21wb25lbnRzUHJvcGVydGllc3tcbiAgICBiYXNlQ3NzQ2xhc3M/OnN0cmluZztcbiAgICBhY3RpdmVJbmRleEZyb21BdXRob3JQYW5lbD86bnVtYmVyXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ29yZUNvbnRhaW5lckl0ZW0gZXh0ZW5kcyBNb2RlbCB7XG4gICAgJ2NxOnBhbmVsVGl0bGUnOiBzdHJpbmdcbn1cblxuZXhwb3J0IGludGVyZmFjZSBDb3JlQ29udGFpbmVyU3RhdGUgZXh0ZW5kcyBDb250YWluZXJTdGF0ZSB7XG5cbn1cblxuZXhwb3J0IGludGVyZmFjZSBBdXRob3JQYW5lbFN3aXRjaFN0YXRlIHtcbiAgICBhY3RpdmVJbmRleEZyb21BdXRob3JQYW5lbD86IG51bWJlclxufVxuXG5jb25zdCBpc0Jyb3dzZXIgPSAoKCkgPT4ge1xuICAgIHRyeXtcbiAgICAgICAgcmV0dXJuIHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnO1xuICAgIH1jYXRjaChlcnIpe1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxufSkoKTtcblxuXG5leHBvcnQgY29uc3Qgd2l0aFN0YW5kYXJkQmFzZUNzc0NsYXNzID0gPE0gZXh0ZW5kcyBDb3JlQ29udGFpbmVyUHJvcGVydGllcz5cbihcbiAgICBDb21wb25lbnQ6Q29tcG9uZW50VHlwZTxNPixcbiAgICBkZWZhdWx0QmFzZUNzc0NsYXNzOnN0cmluZ1xuKTpSZWFjdC5Db21wb25lbnRUeXBlPE0+ICA9PiB7XG4gICAgcmV0dXJuIChwcm9wczpNKSA9PiB7XG5cbiAgICAgICAgY29uc3QgYmFzZUNzc0NsYXNzID0gcHJvcHMuYmFzZUNzc0NsYXNzO1xuICAgICAgICBjb25zdCB0b0JlVXNlZENzc0NsYXNzID0gYmFzZUNzc0NsYXNzICYmIGJhc2VDc3NDbGFzcy50cmltKCkubGVuZ3RoID4gMCA/IGJhc2VDc3NDbGFzcyA6IGRlZmF1bHRCYXNlQ3NzQ2xhc3M7XG5cbiAgICAgICAgY29uc3QgbWVyZ2VkUHJvcHM6IE09IHtcbiAgICAgICAgICAgIC4uLnByb3BzLFxuICAgICAgICAgICAgYmFzZUNzc0NsYXNzOiB0b0JlVXNlZENzc0NsYXNzXG4gICAgICAgIH07XG5cbiAgICAgICAgcmV0dXJuIDxDb21wb25lbnQgey4uLm1lcmdlZFByb3BzfSAvPjtcbiAgICB9XG59O1xuXG5cblxuZXhwb3J0IGNvbnN0IHdpdGhBdXRob3JQYW5lbFN3aXRjaCA9IDxNIGV4dGVuZHMgQ29yZUNvbnRhaW5lclByb3BlcnRpZXM+KFxuICAgIENvbXBvbmVudDpDb21wb25lbnRUeXBlPE0+XG4pOlJlYWN0LkNvbXBvbmVudFR5cGU8TT4gPT4ge1xuXG4gICAgcmV0dXJuIGNsYXNzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PE0sIEF1dGhvclBhbmVsU3dpdGNoU3RhdGU+IHtcblxuICAgICAgICAvL0B0cy1pZ25vcmVcbiAgICAgICAgbWVzc2FnZUNoYW5uZWw7XG5cbiAgICAgICAgY29uc3RydWN0b3IocHJvcHM6TSkge1xuICAgICAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgICAgICAgICAgdGhpcy5zdGF0ZSA9IHt9XG5cbiAgICAgICAgICAgIC8vQHRzLWlnbm9yZVxuICAgICAgICAgICAgaWYgKGlzQnJvd3NlciAmJiB3aW5kb3cuR3Jhbml0ZSAmJiB3aW5kb3cuR3Jhbml0ZS5hdXRob3IgJiYgd2luZG93LkdyYW5pdGUuYXV0aG9yLk1lc3NhZ2VDaGFubmVsKSB7XG4gICAgICAgICAgICAgICAgLy9AdHMtaWdub3JlXG4gICAgICAgICAgICAgICAgdGhpcy5tZXNzYWdlQ2hhbm5lbCA9IG5ldyB3aW5kb3cuR3Jhbml0ZS5hdXRob3IuTWVzc2FnZUNoYW5uZWwoXCJjcWF1dGhvclwiLCB3aW5kb3cpO1xuICAgICAgICAgICAgICAgIHRoaXMuY2FsbGJhY2sgPSB0aGlzLmNhbGxiYWNrLmJpbmQodGhpcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBjYWxsYmFjayhtZXNzYWdlOmFueSl7XG4gICAgICAgICAgICBpZiAobWVzc2FnZS5kYXRhICYmIG1lc3NhZ2UuZGF0YS5pZCA9PT0gdGhpcy5wcm9wcy5jcVBhdGgpIHtcbiAgICAgICAgICAgICAgICBpZiAobWVzc2FnZS5kYXRhLm9wZXJhdGlvbiA9PT0gXCJuYXZpZ2F0ZVwiKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGluZGV4ID0gbWVzc2FnZS5kYXRhLmluZGV4IGFzIG51bWJlcjtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICBhY3RpdmVJbmRleEZyb21BdXRob3JQYW5lbDogaW5kZXhcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBjb21wb25lbnREaWRNb3VudCgpOiB2b2lkIHtcbiAgICAgICAgICAgIGlmKHRoaXMubWVzc2FnZUNoYW5uZWwpe1xuICAgICAgICAgICAgICAgIHRoaXMubWVzc2FnZUNoYW5uZWwuc3Vic2NyaWJlUmVxdWVzdE1lc3NhZ2UoXCJjbXAucGFuZWxjb250YWluZXJcIiwgdGhpcy5jYWxsYmFjayk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBjb21wb25lbnRXaWxsVW5tb3VudCgpOiB2b2lkIHtcbiAgICAgICAgICAgIGlmKHRoaXMubWVzc2FnZUNoYW5uZWwpe1xuICAgICAgICAgICAgICAgIHRoaXMubWVzc2FnZUNoYW5uZWwudW5zdWJzY3JpYmVSZXF1ZXN0TWVzc2FnZShcImNtcC5wYW5lbGNvbnRhaW5lclwiLCB0aGlzLmNhbGxiYWNrKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG5cbiAgICAgICAgcmVuZGVyKCl7XG4gICAgICAgICAgICByZXR1cm4gPENvbXBvbmVudCB7Li4udGhpcy5wcm9wc30gYWN0aXZlSW5kZXhGcm9tQXV0aG9yUGFuZWw9e3RoaXMuc3RhdGUuYWN0aXZlSW5kZXhGcm9tQXV0aG9yUGFuZWx9IC8+O1xuICAgICAgICB9XG4gICAgfVxuXG59O1xuIl19

        /***/

      },

      /***/
      "./src/container/accordion/v1/AccordionV1.tsx":
      /*!****************************************************!*\
        !*** ./src/container/accordion/v1/AccordionV1.tsx ***!
        \****************************************************/

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


        var _AbstractCoreContainerComponent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
        /*! ../../../AbstractCoreContainerComponent */
        "./src/AbstractCoreContainerComponent.tsx");
        /* harmony import */


        var _adobe_aem_react_editable_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
        /*! @adobe/aem-react-editable-components */
        "@adobe/aem-react-editable-components");
        /* harmony import */


        var _adobe_aem_react_editable_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_adobe_aem_react_editable_components__WEBPACK_IMPORTED_MODULE_2__);
        /* harmony import */


        var _AccordionV1IsEmptyFn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
        /*! ./AccordionV1IsEmptyFn */
        "./src/container/accordion/v1/AccordionV1IsEmptyFn.ts");
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


        class AccordionV1Impl extends _adobe_aem_react_editable_components__WEBPACK_IMPORTED_MODULE_2__["Container"] {
          constructor(props) {
            super(props);
            this.state = {
              componentMapping: this.props.componentMapping || _adobe_aem_react_editable_components__WEBPACK_IMPORTED_MODULE_2__["ComponentMapping"],
              expandedItems: this.props.expandedItems
            };
            this.handleAccordionNavClick = this.handleAccordionNavClick.bind(this);
          }

          componentDidUpdate(prevProps, prevState) {
            if (this.props.activeIndexFromAuthorPanel !== undefined && prevProps.activeIndexFromAuthorPanel != this.props.activeIndexFromAuthorPanel) {
              this.setState({
                expandedItems: [this.props.cqItemsOrder[this.props.activeIndexFromAuthorPanel]]
              });
            }
          }

          handleAccordionNavClick(itemKey) {
            const isActive = this.state.expandedItems.indexOf(itemKey) > -1;
            const isSingleExpansion = this.props.singleExpansion;
            let expandedItems = this.state.expandedItems;

            if (isSingleExpansion) {
              expandedItems = isActive ? [] : [itemKey];
            } else {
              if (isActive) {
                const index = this.state.expandedItems.indexOf(itemKey);
                expandedItems.splice(index);
              } else {
                expandedItems.push(itemKey);
              }
            }

            this.setState({
              expandedItems: expandedItems
            });
          }

          isItemExpanded(key) {
            return this.state.expandedItems.indexOf(key) > -1;
          }

          get accordionContainerProps() {
            const attrs = this.containerProps;
            attrs['className'] = attrs.className + ' ' + this.props.baseCssClass;
            attrs['data-cmp-is'] = 'accordion';
            return attrs;
          }

          displayItem(key, isExpanded) {
            const indexToShow = this.props.cqItemsOrder.indexOf(key);

            if (this.props.isInEditor === true || isExpanded) {
              const cssClass = isExpanded ? `${this.props.baseCssClass}__panel ${this.props.baseCssClass}__panel--expanded` : `${this.props.baseCssClass}__panel ${this.props.baseCssClass}__panel--hidden`;
              return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
                className: cssClass,
                role: "region"
              }, this.childComponents[indexToShow]);
            }

            return null;
          }

          renderHeadingButton(key, item, buttonCssClass) {
            return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("button", {
              className: buttonCssClass,
              onClick: () => {
                this.handleAccordionNavClick(key);
              }
            }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", {
              className: this.props.baseCssClass + '__title'
            }, item["cq:panelTitle"]), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", {
              className: this.props.baseCssClass + '__icon'
            }));
          }

          get accordionContent() {
            return this.props.cqItemsOrder.map((key, index) => {
              const item = this.props.cqItems[key];
              const isExpanded = this.isItemExpanded(key);
              const buttonCssClass = isExpanded ? `${this.props.baseCssClass}__button ${this.props.baseCssClass}__button--expanded` : `${this.props.baseCssClass}__button`;
              return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
                key: "accordion-index" + index,
                className: this.props.baseCssClass + '__item',
                "data-cmp-index": index,
                "data-cmp-expanded": isExpanded
              }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](`${this.props.headingElement || 'h3'}`, {
                className: this.props.baseCssClass + '__header'
              }, this.renderHeadingButton(key, item, buttonCssClass)), this.displayItem(key, isExpanded));
            });
          }

          render() {
            const isEmpty = Object(_AccordionV1IsEmptyFn__WEBPACK_IMPORTED_MODULE_3__["AccordionV1IsEmptyFn"])(this.props);
            return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", Object.assign({}, this.accordionContainerProps), !isEmpty && this.accordionContent, this.placeholderComponent);
          }

        }
        /* harmony default export */


        __webpack_exports__["default"] = Object(_AbstractCoreContainerComponent__WEBPACK_IMPORTED_MODULE_1__["withStandardBaseCssClass"])(Object(_AbstractCoreContainerComponent__WEBPACK_IMPORTED_MODULE_1__["withAuthorPanelSwitch"])(AccordionV1Impl), "cmp-accordion"); //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQWNjb3JkaW9uVjEuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJBY2NvcmRpb25WMS50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7O0dBY0c7QUFFSCxPQUFPLEtBQUssS0FBSyxNQUFNLE9BQU8sQ0FBQztBQUcvQixPQUFPLEVBQThDLHFCQUFxQixFQUFFLHdCQUF3QixFQUFDLE1BQU0seUNBQXlDLENBQUM7QUFDckosT0FBTyxFQUFDLGdCQUFnQixFQUFFLFNBQVMsRUFBQyxNQUFNLHNDQUFzQyxDQUFDO0FBQ2pGLE9BQU8sRUFBQyxvQkFBb0IsRUFBQyxNQUFNLHdCQUF3QixDQUFDO0FBWTVELE1BQU0sZUFBZ0IsU0FBUSxTQUFpRDtJQUUzRSxZQUFZLEtBQTJCO1FBQ25DLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUViLElBQUksQ0FBQyxLQUFLLEdBQUc7WUFDVCxnQkFBZ0IsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLGdCQUFnQixJQUFJLGdCQUFnQjtZQUNqRSxhQUFhLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxhQUFhO1NBQzFDLENBQUM7UUFFRixJQUFJLENBQUMsdUJBQXVCLEdBQUcsSUFBSSxDQUFDLHVCQUF1QixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUMzRSxDQUFDO0lBRUQsa0JBQWtCLENBQUMsU0FBMEMsRUFBRSxTQUFxQztRQUNoRyxJQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsMEJBQTBCLEtBQUssU0FBUyxJQUFJLFNBQVMsQ0FBQywwQkFBMEIsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLDBCQUEwQixFQUFDO1lBQ3BJLElBQUksQ0FBQyxRQUFRLENBQUMsRUFBRSxhQUFhLEVBQUUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLDBCQUEwQixDQUFDLENBQUMsRUFBRSxDQUFFLENBQUM7U0FDdkc7SUFDTCxDQUFD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LHVCQUF1QjtZQUMvQixDQUFDLE9BQU8sSUFBSSxJQUFJLENBQUMsZ0JBQWdCO1lBQ2pDLElBQUksQ0FBQyxvQkFBb0IsQ0FDekIsQ0FDVCxDQUFBO0lBQ0wsQ0FBQztDQUVKO0FBRUQsZUFBZSx3QkFBd0IsQ0FBQyxxQkFBcUIsQ0FBQyxlQUFlLENBQUMsRUFBRSxlQUFlLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiAgQ29weXJpZ2h0IDIwMjAgQWRvYmVcbiAqXG4gKiAgTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqICB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiAgWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICAgICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiAgVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqICBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqICBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiAgbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cblxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5cbmltcG9ydCB7Q29yZUNvbnRhaW5lclByb3BlcnRpZXMsIENvcmVDb250YWluZXJTdGF0ZSwgd2l0aEF1dGhvclBhbmVsU3dpdGNoLCB3aXRoU3RhbmRhcmRCYXNlQ3NzQ2xhc3N9IGZyb20gXCIuLi8uLi8uLi9BYnN0cmFjdENvcmVDb250YWluZXJDb21wb25lbnRcIjtcbmltcG9ydCB7Q29tcG9uZW50TWFwcGluZywgQ29udGFpbmVyfSBmcm9tICdAYWRvYmUvYWVtLXJlYWN0LWVkaXRhYmxlLWNvbXBvbmVudHMnO1xuaW1wb3J0IHtBY2NvcmRpb25WMUlzRW1wdHlGbn0gZnJvbSBcIi4vQWNjb3JkaW9uVjFJc0VtcHR5Rm5cIjtcblxuZXhwb3J0IGludGVyZmFjZSBBY2NvcmRpb25WMVByb3BlcnRpZXMgZXh0ZW5kcyBDb3JlQ29udGFpbmVyUHJvcGVydGllc3tcbiAgICBzaW5nbGVFeHBhbnNpb246IGJvb2xlYW47XG4gICAgaGVhZGluZ0VsZW1lbnQ6IHN0cmluZztcbiAgICBleHBhbmRlZEl0ZW1zOiBzdHJpbmdbXTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBBY2NvcmRpb25WMVN0YXRlIGV4dGVuZHMgQ29yZUNvbnRhaW5lclN0YXRle1xuICAgIGV4cGFuZGVkSXRlbXM6IHN0cmluZ1tdO1xufVxuXG5jbGFzcyBBY2NvcmRpb25WMUltcGwgZXh0ZW5kcyBDb250YWluZXI8QWNjb3JkaW9uVjFQcm9wZXJ0aWVzLEFjY29yZGlvblYxU3RhdGU+IHtcblxuICAgIGNvbnN0cnVjdG9yKHByb3BzOkFjY29yZGlvblYxUHJvcGVydGllcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBjb21wb25lbnRNYXBwaW5nOiB0aGlzLnByb3BzLmNvbXBvbmVudE1hcHBpbmcgfHwgQ29tcG9uZW50TWFwcGluZyxcbiAgICAgICAgICAgIGV4cGFuZGVkSXRlbXM6IHRoaXMucHJvcHMuZXhwYW5kZWRJdGVtc1xuICAgICAgICB9O1xuXG4gICAgICAgIHRoaXMuaGFuZGxlQWNjb3JkaW9uTmF2Q2xpY2sgPSB0aGlzLmhhbmRsZUFjY29yZGlvbk5hdkNsaWNrLmJpbmQodGhpcyk7XG4gICAgfVxuXG4gICAgY29tcG9uZW50RGlkVXBkYXRlKHByZXZQcm9wczogUmVhZG9ubHk8QWNjb3JkaW9uVjFQcm9wZXJ0aWVzPiwgcHJldlN0YXRlOiBSZWFkb25seTxBY2NvcmRpb25WMVN0YXRlPik6IHZvaWQge1xuICAgICAgICBpZih0aGlzLnByb3BzLmFjdGl2ZUluZGV4RnJvbUF1dGhvclBhbmVsICE9PSB1bmRlZmluZWQgJiYgcHJldlByb3BzLmFjdGl2ZUluZGV4RnJvbUF1dGhvclBhbmVsICE9IHRoaXMucHJvcHMuYWN0aXZlSW5kZXhGcm9tQXV0aG9yUGFuZWwpe1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGV4cGFuZGVkSXRlbXM6IFt0aGlzLnByb3BzLmNxSXRlbXNPcmRlclt0aGlzLnByb3BzLmFjdGl2ZUluZGV4RnJvbUF1dGhvclBhbmVsXV0gfSApO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgaGFuZGxlQWNjb3JkaW9uTmF2Q2xpY2soaXRlbUtleTpzdHJpbmcpe1xuXG4gICAgICAgIGNvbnN0IGlzQWN0aXZlID0gdGhpcy5zdGF0ZS5leHBhbmRlZEl0ZW1zLmluZGV4T2YoaXRlbUtleSkgPiAtMTtcbiAgICAgICAgY29uc3QgaXNTaW5nbGVFeHBhbnNpb24gPSB0aGlzLnByb3BzLnNpbmdsZUV4cGFuc2lvbjtcblxuICAgICAgICBsZXQgZXhwYW5kZWRJdGVtcyA9IHRoaXMuc3RhdGUuZXhwYW5kZWRJdGVtcztcbiAgICAgICAgaWYoaXNTaW5nbGVFeHBhbnNpb24pe1xuICAgICAgICAgICAgZXhwYW5kZWRJdGVtcyA9IChpc0FjdGl2ZSkgPyBbXSA6IFtpdGVtS2V5XTtcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICBpZihpc0FjdGl2ZSl7XG4gICAgICAgICAgICAgICAgY29uc3QgaW5kZXggPSAgdGhpcy5zdGF0ZS5leHBhbmRlZEl0ZW1zLmluZGV4T2YoaXRlbUtleSk7XG4gICAgICAgICAgICAgICAgZXhwYW5kZWRJdGVtcy5zcGxpY2UoIGluZGV4ICk7XG4gICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICBleHBhbmRlZEl0ZW1zLnB1c2goaXRlbUtleSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBleHBhbmRlZEl0ZW1zOiBleHBhbmRlZEl0ZW1zXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGlzSXRlbUV4cGFuZGVkKGtleTpzdHJpbmcpe1xuICAgICAgICByZXR1cm4gdGhpcy5zdGF0ZS5leHBhbmRlZEl0ZW1zLmluZGV4T2Yoa2V5KSA+IC0xO1xuICAgIH1cblxuICAgIGdldCBhY2NvcmRpb25Db250YWluZXJQcm9wcygpe1xuICAgICAgICBjb25zdCBhdHRycyA9IHRoaXMuY29udGFpbmVyUHJvcHM7XG4gICAgICAgIGF0dHJzWydjbGFzc05hbWUnXSA9IGF0dHJzLmNsYXNzTmFtZSArICcgJyArIHRoaXMucHJvcHMuYmFzZUNzc0NsYXNzO1xuICAgICAgICBhdHRyc1snZGF0YS1jbXAtaXMnXSA9ICdhY2NvcmRpb24nO1xuICAgICAgICByZXR1cm4gYXR0cnM7XG4gICAgfVxuXG5cbiAgICBkaXNwbGF5SXRlbShrZXk6c3RyaW5nLGlzRXhwYW5kZWQ6Ym9vbGVhbikge1xuXG4gICAgICAgIGNvbnN0IGluZGV4VG9TaG93ID0gdGhpcy5wcm9wcy5jcUl0ZW1zT3JkZXIuaW5kZXhPZihrZXkpO1xuXG4gICAgICAgIGlmKHRoaXMucHJvcHMuaXNJbkVkaXRvciA9PT0gdHJ1ZSB8fCBpc0V4cGFuZGVkKXtcbiAgICAgICAgICAgIGNvbnN0IGNzc0NsYXNzID0gaXNFeHBhbmRlZCA/IGAke3RoaXMucHJvcHMuYmFzZUNzc0NsYXNzfV9fcGFuZWwgJHt0aGlzLnByb3BzLmJhc2VDc3NDbGFzc31fX3BhbmVsLS1leHBhbmRlZGA6IGAke3RoaXMucHJvcHMuYmFzZUNzc0NsYXNzfV9fcGFuZWwgJHt0aGlzLnByb3BzLmJhc2VDc3NDbGFzc31fX3BhbmVsLS1oaWRkZW5gO1xuXG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjc3NDbGFzc31cbiAgICAgICAgICAgICAgICAgICAgIHJvbGU9XCJyZWdpb25cIj5cbiAgICAgICAgICAgICAgICAgICAge3RoaXMuY2hpbGRDb21wb25lbnRzW2luZGV4VG9TaG93XX1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIClcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIHJlbmRlckhlYWRpbmdCdXR0b24oa2V5OnN0cmluZywgaXRlbTphbnksYnV0dG9uQ3NzQ2xhc3M6c3RyaW5nKXtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtidXR0b25Dc3NDbGFzc30gb25DbGljaz17KCkgPT4geyB0aGlzLmhhbmRsZUFjY29yZGlvbk5hdkNsaWNrKGtleSkgfX0+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXt0aGlzLnByb3BzLmJhc2VDc3NDbGFzcyArICdfX3RpdGxlJ30+e2l0ZW1bXCJjcTpwYW5lbFRpdGxlXCJdfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3RoaXMucHJvcHMuYmFzZUNzc0NsYXNzICsgJ19faWNvbid9Pjwvc3Bhbj5cbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICApXG4gICAgfVxuXG4gICAgZ2V0IGFjY29yZGlvbkNvbnRlbnQoKXtcbiAgICAgICAgcmV0dXJuIChcblxuICAgICAgICAgICAgdGhpcy5wcm9wcy5jcUl0ZW1zT3JkZXIubWFwKChrZXksIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgaXRlbSA9IHRoaXMucHJvcHMuY3FJdGVtc1trZXldO1xuICAgICAgICAgICAgICAgIGNvbnN0IGlzRXhwYW5kZWQgPSB0aGlzLmlzSXRlbUV4cGFuZGVkKGtleSk7XG4gICAgICAgICAgICAgICAgY29uc3QgYnV0dG9uQ3NzQ2xhc3MgPSAoaXNFeHBhbmRlZCkgPyBgJHt0aGlzLnByb3BzLmJhc2VDc3NDbGFzc31fX2J1dHRvbiAke3RoaXMucHJvcHMuYmFzZUNzc0NsYXNzfV9fYnV0dG9uLS1leHBhbmRlZGAgOiBgJHt0aGlzLnByb3BzLmJhc2VDc3NDbGFzc31fX2J1dHRvbmA7XG4gICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e1wiYWNjb3JkaW9uLWluZGV4XCIgKyBpbmRleH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17dGhpcy5wcm9wcy5iYXNlQ3NzQ2xhc3MgKyAnX19pdGVtJ31cbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtY21wLWluZGV4PXtpbmRleH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtY21wLWV4cGFuZGVkPXtpc0V4cGFuZGVkfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBgJHt0aGlzLnByb3BzLmhlYWRpbmdFbGVtZW50IHx8ICdoMyd9YCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lOiB0aGlzLnByb3BzLmJhc2VDc3NDbGFzcyArICdfX2hlYWRlcicsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucmVuZGVySGVhZGluZ0J1dHRvbihrZXksaXRlbSxidXR0b25Dc3NDbGFzcylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5kaXNwbGF5SXRlbShrZXksIGlzRXhwYW5kZWQpfVxuXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgIH0pXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuXG4gICAgICAgIGNvbnN0IGlzRW1wdHkgPSBBY2NvcmRpb25WMUlzRW1wdHlGbih0aGlzLnByb3BzKTtcblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiB7Li4udGhpcy5hY2NvcmRpb25Db250YWluZXJQcm9wc30+XG4gICAgICAgICAgICAgICAgeyAhaXNFbXB0eSAmJiB0aGlzLmFjY29yZGlvbkNvbnRlbnQgfVxuICAgICAgICAgICAgICAgIHsgdGhpcy5wbGFjZWhvbGRlckNvbXBvbmVudCB9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKVxuICAgIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoU3RhbmRhcmRCYXNlQ3NzQ2xhc3Mod2l0aEF1dGhvclBhbmVsU3dpdGNoKEFjY29yZGlvblYxSW1wbCksIFwiY21wLWFjY29yZGlvblwiKTsiXX0=

        /***/
      },

      /***/
      "./src/container/accordion/v1/AccordionV1IsEmptyFn.ts":
      /*!************************************************************!*\
        !*** ./src/container/accordion/v1/AccordionV1IsEmptyFn.ts ***!
        \************************************************************/

      /*! exports provided: AccordionV1IsEmptyFn */

      /***/
      function (module, __webpack_exports__, __webpack_require__) {
        "use strict";

        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */


        __webpack_require__.d(__webpack_exports__, "AccordionV1IsEmptyFn", function () {
          return AccordionV1IsEmptyFn;
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


        function AccordionV1IsEmptyFn(props) {
          return props.cqItemsOrder == null || props.cqItemsOrder.length == 0;
        } //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQWNjb3JkaW9uVjFJc0VtcHR5Rm4uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJBY2NvcmRpb25WMUlzRW1wdHlGbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7R0FjRztBQUlILE1BQU0sVUFBVSxvQkFBb0IsQ0FBQyxLQUEyQjtJQUM1RCxPQUFPLEtBQUssQ0FBQyxZQUFZLElBQUksSUFBSSxJQUFJLEtBQUssQ0FBQyxZQUFZLENBQUMsTUFBTSxJQUFJLENBQUMsQ0FBQztBQUN4RSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqICBDb3B5cmlnaHQgMjAyMCBBZG9iZVxuICpcbiAqICBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqICBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgICAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqICBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiAgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqICBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuXG5pbXBvcnQge0FjY29yZGlvblYxUHJvcGVydGllc30gZnJvbSBcIi4vQWNjb3JkaW9uVjFcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIEFjY29yZGlvblYxSXNFbXB0eUZuKHByb3BzOkFjY29yZGlvblYxUHJvcGVydGllcyl7XG4gICAgcmV0dXJuIHByb3BzLmNxSXRlbXNPcmRlciA9PSBudWxsIHx8IHByb3BzLmNxSXRlbXNPcmRlci5sZW5ndGggPT0gMDtcbn0iXX0=

        /***/

      },

      /***/
      2:
      /*!**********************************************************!*\
        !*** multi ./src/container/accordion/v1/AccordionV1.tsx ***!
        \**********************************************************/

      /*! no static exports found */

      /***/
      function (module, exports, __webpack_require__) {
        module.exports = __webpack_require__(
        /*! ./src/container/accordion/v1/AccordionV1.tsx */
        "./src/container/accordion/v1/AccordionV1.tsx");
        /***/
      },

      /***/
      "@adobe/aem-react-editable-components":
      /*!*******************************************************!*\
        !*** external "@adobe/aem-react-editable-components" ***!
        \*******************************************************/

      /*! no static exports found */

      /***/
      function (module, exports) {
        module.exports = __webpack_require__(/*! @adobe/aem-react-editable-components */ "./node_modules/@adobe/aem-react-editable-components/dist/aem-react-editable-components.js");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9yYWFpam1hay93b3Jrc3BhY2UvYWVtLXJlYWN0LWNvcmUtd2NtLWNvbXBvbmVudHMvZXhhbXBsZXMvcmVhY3Qtc3BhY29tcG9uZW50cy1leGFtcGxlLXByb2plY3QvQGFkb2JlL2FlbS1jb3JlLWNvbXBvbmVudHMtcmVhY3Qtc3BhL3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIi9Vc2Vycy9yYWFpam1hay93b3Jrc3BhY2UvYWVtLXJlYWN0LWNvcmUtd2NtLWNvbXBvbmVudHMvZXhhbXBsZXMvcmVhY3Qtc3BhY29tcG9uZW50cy1leGFtcGxlLXByb2plY3QvQGFkb2JlL2FlbS1jb3JlLWNvbXBvbmVudHMtcmVhY3Qtc3BhL3dlYnBhY2svYm9vdHN0cmFwIiwiL1VzZXJzL3JhYWlqbWFrL3dvcmtzcGFjZS9hZW0tcmVhY3QtY29yZS13Y20tY29tcG9uZW50cy9leGFtcGxlcy9yZWFjdC1zcGFjb21wb25lbnRzLWV4YW1wbGUtcHJvamVjdC9AYWRvYmUvYWVtLWNvcmUtY29tcG9uZW50cy1yZWFjdC1zcGEvc3JjL0Fic3RyYWN0Q29yZUNvbnRhaW5lckNvbXBvbmVudC50c3giLCIvVXNlcnMvcmFhaWptYWsvd29ya3NwYWNlL2FlbS1yZWFjdC1jb3JlLXdjbS1jb21wb25lbnRzL2V4YW1wbGVzL3JlYWN0LXNwYWNvbXBvbmVudHMtZXhhbXBsZS1wcm9qZWN0L0BhZG9iZS9hZW0tY29yZS1jb21wb25lbnRzLXJlYWN0LXNwYS9zcmMvY29udGFpbmVyL2FjY29yZGlvbi92MS9BY2NvcmRpb25WMS50c3giLCIvVXNlcnMvcmFhaWptYWsvd29ya3NwYWNlL2FlbS1yZWFjdC1jb3JlLXdjbS1jb21wb25lbnRzL2V4YW1wbGVzL3JlYWN0LXNwYWNvbXBvbmVudHMtZXhhbXBsZS1wcm9qZWN0L0BhZG9iZS9hZW0tY29yZS1jb21wb25lbnRzLXJlYWN0LXNwYS9zcmMvY29udGFpbmVyL2FjY29yZGlvbi92MS9BY2NvcmRpb25WMUlzRW1wdHlGbi50cyIsIi9Vc2Vycy9yYWFpam1hay93b3Jrc3BhY2UvYWVtLXJlYWN0LWNvcmUtd2NtLWNvbXBvbmVudHMvZXhhbXBsZXMvcmVhY3Qtc3BhY29tcG9uZW50cy1leGFtcGxlLXByb2plY3Qvd2VicGFjazovQGFkb2JlL2FlbS1jb3JlLWNvbXBvbmVudHMtcmVhY3Qtc3BhL2V4dGVybmFsIFwiQGFkb2JlL2FlbS1yZWFjdC1lZGl0YWJsZS1jb21wb25lbnRzXCIiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFDQSxZQUNBLDJCQURBLEtBRUEsRUFLQTtBQUNDLENBVEQsRUFTQyx5Q0FURCxFQVNDO0FBQ0Q7Ozs7O0FDVkE7QUFBQTs7QUFDQTtBQUFBOzs7QUFFQTtBQUFBOztBQUNBOztBQUFBOzs7QUFFQTtBQUFBOztBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7O0FBQ0E7OztBQUFBO0FBQ0E7QUFBQSxxQkFEQTs7QUFFQTtBQUFBLGtCQUZBOztBQUdBO0FBQUE7QUFDQTs7QUFKQTs7O0FBTUE7QUFBQTs7QUFDQTs7QUFBQTs7O0FBRUE7QUFBQTs7QUFDQTs7QUFBQTs7O0FBRUE7QUFBQTs7QUFDQTs7QUFBQTtBQUNBO0FBQUE7Ozs7O0FBR0E7QUFBQTs7QUFDQTs7O0FBQUE7OztBQUVBO0FBQUE7O0FBQ0E7O0FBQUE7OztBQUVBO0FBQUE7O0FBQ0E7O0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUEwQyw0QkFBMUM7QUFBMEM7QUFBMUM7QUFDQTtBQUFBO0FBQ0E7O0FBQUEsT0FKQTs7O0FBTUE7QUFBQTs7QUFDQTs7O0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUF3RDtBQUF4RDtBQUNBO0FBQUE7QUFDQTs7O0FBQUE7QUFBaUQ7QUFBakQ7QUFDQTtBQUFBLE9BTEE7OztBQU9BO0FBQUE7O0FBQ0E7QUFBQTs7QUFDQTtBQUFBOztBQUNBO0FBQUE7O0FBQ0E7QUFBQTs7QUFDQTs7O0FBQUE7QUFDQTtBQUFBO0FBQ0E7O0FBQUE7QUFDQTs7QUFBQTtBQUNBOztBQUFBO0FBQ0E7O0FBQUE7QUFDQTs7O0FBQUE7QUFBeUMsMEJBQXpDO0FBQXlDO0FBQXpDO0FBQ0E7O0FBQUE7QUFBZ0g7QUFBcUIsU0FBckksQ0FBcUksSUFBckksQ0FBcUksSUFBckksRUFBcUksR0FBckk7QUFDQTs7QUFBQTtBQUNBO0FBQUEsT0FUQTs7O0FBV0E7QUFBQTs7QUFDQTs7O0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUEyQjtBQUE0QixTQUR2RDtBQUVBO0FBQUE7QUFBaUM7QUFBZSxTQUZoRDtBQUdBOztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7QUFBQSxPQU5BOzs7QUFRQTtBQUFBOztBQUNBOzs7QUFBQTtBQUFzRDtBQUErRCxPQUFySDs7O0FBRUE7QUFBQTs7QUFDQTs7O0FBQUE7Ozs7O0FBR0E7QUFBQTs7QUFDQTs7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUFBOzs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7OztBQUFBO0FBQUE7QUFBQTtBQUFBOzs7QUFBQTtBQUFBOzs7Ozs7Ozs7Ozs7Ozs7OztBQWdCQTtBQUNBO0FBQ0E7QUFDQSxXQUZBLENBR0E7QUFDQTtBQUNBO0FBQ0MsU0FQRDs7QUFRTztBQUNQO0FBQ0E7QUFDQTtBQUNBLGtDQUNBLFFBREE7QUFFQTtBQUZBO0FBSUEsbUJBQWUsb0RBQW1CLFNBQW5CLEVBQW1CLGtCQUE0QixXQUE1QixDQUFuQixDQUFmO0FBQ0EsV0FSQTtBQVNBLFNBVk87O0FBV0E7QUFDUCwrQkFBeUIsK0NBQXpCLENBQXdDO0FBQ3hDO0FBQ0E7QUFDQSw4QkFGQSxDQUdBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQSxxQkFBbUIsb0RBQW1CLFNBQW5CLEVBQW1CLGtCQUE0QixVQUE1QixFQUE0QjtBQUFlO0FBQWYsZUFBNUIsQ0FBbkIsQ0FBbkI7QUFDQTs7QUFqQ3dDLFdBQXhDO0FBbUNBLFNBcENPLEMsQ0FxQ1A7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3hFQTtBQUFBOzs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7O0FBQUE7QUFBQTs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7OztBQUFBO0FBQUE7QUFBQTtBQUFBOzs7QUFBQTtBQUFBOzs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFtQkEsc0NBQThCLDhFQUE5QixDQUF1QztBQUN2QztBQUNBO0FBQ0E7QUFDQSwrREFBNkQscUZBRDdEO0FBRUE7QUFGQTtBQUlBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBO0FBQTJCO0FBQTNCO0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0EsYUFGQSxNQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFIQSxNQUlBO0FBQ0E7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFEQTtBQUdBOztBQUNBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTs7QUFDQTtBQUNBLCtDQUE2Qyx1QkFBd0IsV0FBVSx1QkFBd0IsbUJBQXZHLEdBQXVHLEdBQXdCLHVCQUF3QixXQUFVLHVCQUF3QixpQkFBekw7QUFDQSxxQkFBb0Isb0RBQW1CLEtBQW5CLEVBQW1CO0FBQVMsbUNBQVQ7QUFBUztBQUFULGVBQW5CLEVBQWtFLGlDQUFsRSxDQUFwQjtBQUNBOztBQUNBO0FBQ0E7O0FBQ0E7QUFDQSxtQkFBZ0Isb0RBQW1CLFFBQW5CLEVBQW1CO0FBQVksdUNBQVo7QUFBWTtBQUE0QztBQUFxQztBQUE3RixhQUFuQixFQUNKLG9EQUFtQixNQUFuQixFQUFtQjtBQUFVO0FBQVYsYUFBbkIsRUFBOEUscUJBQTlFLENBREksRUFFSixvREFBbUIsTUFBbkIsRUFBbUI7QUFBVTtBQUFWLGFBQW5CLENBRkksQ0FBaEI7QUFHQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFEQUFxRCx1QkFBd0IsWUFBVyx1QkFBd0Isb0JBQWhILEdBQWdILEdBQXlCLHVCQUF3QixVQUFqSztBQUNBLHFCQUFvQixvREFBbUIsS0FBbkIsRUFBbUI7QUFBUyw4Q0FBVDtBQUFTLDZEQUFUO0FBQVMsdUNBQVQ7QUFBUztBQUFULGVBQW5CLEVBQ0osb0RBQW1CLEdBQUksaUNBQWtDLEVBQXpELEVBQXlEO0FBQ3pFO0FBRHlFLGVBQXpELEVBRUMsbURBRkQsQ0FESSxFQUlwQixpQ0FKb0IsQ0FBcEI7QUFLUyxhQVRUO0FBVUE7O0FBQ0E7QUFDQSw0QkFBd0IsbUZBQW9CLFVBQXBCLENBQXhCO0FBQ0EsbUJBQWdCLG9EQUFtQixLQUFuQixFQUFtQixrQkFBd0IsNEJBQXhCLENBQW5CLEVBQ2hCLGlDQURnQixFQUVoQix5QkFGZ0IsQ0FBaEI7QUFHQTs7QUF6RXVDO0FBMkV4Qjs7O0FBQUEsMElBQXlCLDhGQUFxQixlQUFyQixDQUF6QixFQUE4QyxlQUE5QyxFLENBQ2Y7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDL0ZBO0FBQUE7OztBQUFBO0FBQUE7QUFBQTtBQUFBOzs7Ozs7Ozs7Ozs7Ozs7OztBQWVPO0FBQ1A7QUFDQSxTLENBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbEJBOzs7Ozs7Ozs7Ozs7OztBQUFBOzs7Ozs7QUxVQTtDQVZBLEUiLCJmaWxlIjoianMvQWNjb3JkaW9uVjEuMTZmNTY1NmYuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJAYWRvYmUvYWVtLWNvcmUtY29tcG9uZW50cy1yZWFjdC1zcGFcIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1wiQGFkb2JlL2FlbS1jb3JlLWNvbXBvbmVudHMtcmVhY3Qtc3BhXCJdID0gZmFjdG9yeSgpO1xufSkodHlwZW9mIHNlbGYgIT09ICd1bmRlZmluZWQnID8gc2VsZiA6IHRoaXMsIGZ1bmN0aW9uKCkge1xucmV0dXJuICIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAyKTtcbiIsIi8qXG4gKiAgQ29weXJpZ2h0IDIwMjAgQWRvYmVcbiAqXG4gKiAgTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqICB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiAgWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICAgICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiAgVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqICBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqICBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiAgbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmNvbnN0IGlzQnJvd3NlciA9ICgoKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgICAgcmV0dXJuIHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnO1xuICAgIH1cbiAgICBjYXRjaCAoZXJyKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG59KSgpO1xuZXhwb3J0IGNvbnN0IHdpdGhTdGFuZGFyZEJhc2VDc3NDbGFzcyA9IChDb21wb25lbnQsIGRlZmF1bHRCYXNlQ3NzQ2xhc3MpID0+IHtcbiAgICByZXR1cm4gKHByb3BzKSA9PiB7XG4gICAgICAgIGNvbnN0IGJhc2VDc3NDbGFzcyA9IHByb3BzLmJhc2VDc3NDbGFzcztcbiAgICAgICAgY29uc3QgdG9CZVVzZWRDc3NDbGFzcyA9IGJhc2VDc3NDbGFzcyAmJiBiYXNlQ3NzQ2xhc3MudHJpbSgpLmxlbmd0aCA+IDAgPyBiYXNlQ3NzQ2xhc3MgOiBkZWZhdWx0QmFzZUNzc0NsYXNzO1xuICAgICAgICBjb25zdCBtZXJnZWRQcm9wcyA9IHtcbiAgICAgICAgICAgIC4uLnByb3BzLFxuICAgICAgICAgICAgYmFzZUNzc0NsYXNzOiB0b0JlVXNlZENzc0NsYXNzXG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KENvbXBvbmVudCwgT2JqZWN0LmFzc2lnbih7fSwgbWVyZ2VkUHJvcHMpKTtcbiAgICB9O1xufTtcbmV4cG9ydCBjb25zdCB3aXRoQXV0aG9yUGFuZWxTd2l0Y2ggPSAoQ29tcG9uZW50KSA9PiB7XG4gICAgcmV0dXJuIGNsYXNzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICAgICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgICAgICAgIHRoaXMuc3RhdGUgPSB7fTtcbiAgICAgICAgICAgIC8vQHRzLWlnbm9yZVxuICAgICAgICAgICAgaWYgKGlzQnJvd3NlciAmJiB3aW5kb3cuR3Jhbml0ZSAmJiB3aW5kb3cuR3Jhbml0ZS5hdXRob3IgJiYgd2luZG93LkdyYW5pdGUuYXV0aG9yLk1lc3NhZ2VDaGFubmVsKSB7XG4gICAgICAgICAgICAgICAgLy9AdHMtaWdub3JlXG4gICAgICAgICAgICAgICAgdGhpcy5tZXNzYWdlQ2hhbm5lbCA9IG5ldyB3aW5kb3cuR3Jhbml0ZS5hdXRob3IuTWVzc2FnZUNoYW5uZWwoXCJjcWF1dGhvclwiLCB3aW5kb3cpO1xuICAgICAgICAgICAgICAgIHRoaXMuY2FsbGJhY2sgPSB0aGlzLmNhbGxiYWNrLmJpbmQodGhpcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY2FsbGJhY2sobWVzc2FnZSkge1xuICAgICAgICAgICAgaWYgKG1lc3NhZ2UuZGF0YSAmJiBtZXNzYWdlLmRhdGEuaWQgPT09IHRoaXMucHJvcHMuY3FQYXRoKSB7XG4gICAgICAgICAgICAgICAgaWYgKG1lc3NhZ2UuZGF0YS5vcGVyYXRpb24gPT09IFwibmF2aWdhdGVcIikge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBpbmRleCA9IG1lc3NhZ2UuZGF0YS5pbmRleDtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICBhY3RpdmVJbmRleEZyb21BdXRob3JQYW5lbDogaW5kZXhcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgICAgICAgaWYgKHRoaXMubWVzc2FnZUNoYW5uZWwpIHtcbiAgICAgICAgICAgICAgICB0aGlzLm1lc3NhZ2VDaGFubmVsLnN1YnNjcmliZVJlcXVlc3RNZXNzYWdlKFwiY21wLnBhbmVsY29udGFpbmVyXCIsIHRoaXMuY2FsbGJhY2spO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgICAgICAgICAgaWYgKHRoaXMubWVzc2FnZUNoYW5uZWwpIHtcbiAgICAgICAgICAgICAgICB0aGlzLm1lc3NhZ2VDaGFubmVsLnVuc3Vic2NyaWJlUmVxdWVzdE1lc3NhZ2UoXCJjbXAucGFuZWxjb250YWluZXJcIiwgdGhpcy5jYWxsYmFjayk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmVuZGVyKCkge1xuICAgICAgICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQ29tcG9uZW50LCBPYmplY3QuYXNzaWduKHt9LCB0aGlzLnByb3BzLCB7IGFjdGl2ZUluZGV4RnJvbUF1dGhvclBhbmVsOiB0aGlzLnN0YXRlLmFjdGl2ZUluZGV4RnJvbUF1dGhvclBhbmVsIH0pKTtcbiAgICAgICAgfVxuICAgIH07XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pUVdKemRISmhZM1JEYjNKbFEyOXVkR0ZwYm1WeVEyOXRjRzl1Wlc1MExtcHpJaXdpYzI5MWNtTmxVbTl2ZENJNklpSXNJbk52ZFhKalpYTWlPbHNpUVdKemRISmhZM1JEYjNKbFEyOXVkR0ZwYm1WeVEyOXRjRzl1Wlc1MExuUnplQ0pkTENKdVlXMWxjeUk2VzEwc0ltMWhjSEJwYm1keklqb2lRVUZCUVRzN096czdPenM3T3pzN096czdSMEZqUnp0QlFVVklMRTlCUVU4c1MwRkJTeXhMUVVGTExFMUJRVTBzVDBGQlR5eERRVUZETzBGQmRVSXZRaXhOUVVGTkxGTkJRVk1zUjBGQlJ5eERRVUZETEVkQlFVY3NSVUZCUlR0SlFVTndRaXhKUVVGSE8xRkJRME1zVDBGQlR5eFBRVUZQTEUxQlFVMHNTMEZCU3l4WFFVRlhMRU5CUVVNN1MwRkRlRU03U1VGQlFTeFBRVUZOTEVkQlFVY3NSVUZCUXp0UlFVTlFMRTlCUVU4c1MwRkJTeXhEUVVGRE8wdEJRMmhDTzBGQlEwd3NRMEZCUXl4RFFVRkRMRVZCUVVVc1EwRkJRenRCUVVkTUxFMUJRVTBzUTBGQlF5eE5RVUZOTEhkQ1FVRjNRaXhIUVVGSExFTkJSWEJETEZOQlFUQkNMRVZCUXpGQ0xHMUNRVUV3UWl4RlFVTktMRVZCUVVVN1NVRkRlRUlzVDBGQlR5eERRVUZETEV0QlFVOHNSVUZCUlN4RlFVRkZPMUZCUldZc1RVRkJUU3haUVVGWkxFZEJRVWNzUzBGQlN5eERRVUZETEZsQlFWa3NRMEZCUXp0UlFVTjRReXhOUVVGTkxHZENRVUZuUWl4SFFVRkhMRmxCUVZrc1NVRkJTU3haUVVGWkxFTkJRVU1zU1VGQlNTeEZRVUZGTEVOQlFVTXNUVUZCVFN4SFFVRkhMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zV1VGQldTeERRVUZETEVOQlFVTXNRMEZCUXl4dFFrRkJiVUlzUTBGQlF6dFJRVVUzUnl4TlFVRk5MRmRCUVZjc1IwRkJTenRaUVVOc1FpeEhRVUZITEV0QlFVczdXVUZEVWl4WlFVRlpMRVZCUVVVc1owSkJRV2RDTzFOQlEycERMRU5CUVVNN1VVRkZSaXhQUVVGUExHOUNRVUZETEZOQlFWTXNiMEpCUVVzc1YwRkJWeXhGUVVGSkxFTkJRVU03U1VGRE1VTXNRMEZCUXl4RFFVRkJPMEZCUTB3c1EwRkJReXhEUVVGRE8wRkJTVVlzVFVGQlRTeERRVUZETEUxQlFVMHNjVUpCUVhGQ0xFZEJRVWNzUTBGRGFrTXNVMEZCTUVJc1JVRkRUQ3hGUVVGRk8wbEJSWFpDTEU5QlFVOHNTMEZCVFN4VFFVRlJMRXRCUVVzc1EwRkJReXhUUVVGdlF6dFJRVXN6UkN4WlFVRlpMRXRCUVU4N1dVRkRaaXhMUVVGTExFTkJRVU1zUzBGQlN5eERRVUZETEVOQlFVTTdXVUZEWWl4SlFVRkpMRU5CUVVNc1MwRkJTeXhIUVVGSExFVkJRVVVzUTBGQlFUdFpRVVZtTEZsQlFWazdXVUZEV2l4SlFVRkpMRk5CUVZNc1NVRkJTU3hOUVVGTkxFTkJRVU1zVDBGQlR5eEpRVUZKTEUxQlFVMHNRMEZCUXl4UFFVRlBMRU5CUVVNc1RVRkJUU3hKUVVGSkxFMUJRVTBzUTBGQlF5eFBRVUZQTEVOQlFVTXNUVUZCVFN4RFFVRkRMR05CUVdNc1JVRkJSVHRuUWtGRE9VWXNXVUZCV1R0blFrRkRXaXhKUVVGSkxFTkJRVU1zWTBGQll5eEhRVUZITEVsQlFVa3NUVUZCVFN4RFFVRkRMRTlCUVU4c1EwRkJReXhOUVVGTkxFTkJRVU1zWTBGQll5eERRVUZETEZWQlFWVXNSVUZCUlN4TlFVRk5MRU5CUVVNc1EwRkJRenRuUWtGRGJrWXNTVUZCU1N4RFFVRkRMRkZCUVZFc1IwRkJSeXhKUVVGSkxFTkJRVU1zVVVGQlVTeERRVUZETEVsQlFVa3NRMEZCUXl4SlFVRkpMRU5CUVVNc1EwRkJRenRoUVVNMVF6dFJRVU5NTEVOQlFVTTdVVUZGUkN4UlFVRlJMRU5CUVVNc1QwRkJWenRaUVVOb1FpeEpRVUZKTEU5QlFVOHNRMEZCUXl4SlFVRkpMRWxCUVVrc1QwRkJUeXhEUVVGRExFbEJRVWtzUTBGQlF5eEZRVUZGTEV0QlFVc3NTVUZCU1N4RFFVRkRMRXRCUVVzc1EwRkJReXhOUVVGTkxFVkJRVVU3WjBKQlEzWkVMRWxCUVVrc1QwRkJUeXhEUVVGRExFbEJRVWtzUTBGQlF5eFRRVUZUTEV0QlFVc3NWVUZCVlN4RlFVRkZPMjlDUVVOMlF5eE5RVUZOTEV0QlFVc3NSMEZCUnl4UFFVRlBMRU5CUVVNc1NVRkJTU3hEUVVGRExFdEJRV1VzUTBGQlF6dHZRa0ZETTBNc1NVRkJTU3hEUVVGRExGRkJRVkVzUTBGQlF6dDNRa0ZEVml3d1FrRkJNRUlzUlVGQlJTeExRVUZMTzNGQ1FVTndReXhEUVVGRExFTkJRVUU3YVVKQlEwdzdZVUZEU2p0UlFVTk1MRU5CUVVNN1VVRkZSQ3hwUWtGQmFVSTdXVUZEWWl4SlFVRkhMRWxCUVVrc1EwRkJReXhqUVVGakxFVkJRVU03WjBKQlEyNUNMRWxCUVVrc1EwRkJReXhqUVVGakxFTkJRVU1zZFVKQlFYVkNMRU5CUVVNc2IwSkJRVzlDTEVWQlFVVXNTVUZCU1N4RFFVRkRMRkZCUVZFc1EwRkJReXhEUVVGRE8yRkJRM0JHTzFGQlEwd3NRMEZCUXp0UlFVVkVMRzlDUVVGdlFqdFpRVU5vUWl4SlFVRkhMRWxCUVVrc1EwRkJReXhqUVVGakxFVkJRVU03WjBKQlEyNUNMRWxCUVVrc1EwRkJReXhqUVVGakxFTkJRVU1zZVVKQlFYbENMRU5CUVVNc2IwSkJRVzlDTEVWQlFVVXNTVUZCU1N4RFFVRkRMRkZCUVZFc1EwRkJReXhEUVVGRE8yRkJRM1JHTzFGQlEwd3NRMEZCUXp0UlFVZEVMRTFCUVUwN1dVRkRSaXhQUVVGUExHOUNRVUZETEZOQlFWTXNiMEpCUVVzc1NVRkJTU3hEUVVGRExFdEJRVXNzU1VGQlJTd3dRa0ZCTUVJc1JVRkJSU3hKUVVGSkxFTkJRVU1zUzBGQlN5eERRVUZETERCQ1FVRXdRaXhKUVVGSkxFTkJRVU03VVVGRE5VY3NRMEZCUXp0TFFVTktMRU5CUVVFN1FVRkZUQ3hEUVVGRExFTkJRVU1pTENKemIzVnlZMlZ6UTI5dWRHVnVkQ0k2V3lJdktseHVJQ29nSUVOdmNIbHlhV2RvZENBeU1ESXdJRUZrYjJKbFhHNGdLbHh1SUNvZ0lFeHBZMlZ1YzJWa0lIVnVaR1Z5SUhSb1pTQkJjR0ZqYUdVZ1RHbGpaVzV6WlN3Z1ZtVnljMmx2YmlBeUxqQWdLSFJvWlNCY0lreHBZMlZ1YzJWY0lpazdYRzRnS2lBZ2VXOTFJRzFoZVNCdWIzUWdkWE5sSUhSb2FYTWdabWxzWlNCbGVHTmxjSFFnYVc0Z1kyOXRjR3hwWVc1alpTQjNhWFJvSUhSb1pTQk1hV05sYm5ObExseHVJQ29nSUZsdmRTQnRZWGtnYjJKMFlXbHVJR0VnWTI5d2VTQnZaaUIwYUdVZ1RHbGpaVzV6WlNCaGRGeHVJQ3BjYmlBcUlDQWdJQ0FnYUhSMGNEb3ZMM2QzZHk1aGNHRmphR1V1YjNKbkwyeHBZMlZ1YzJWekwweEpRMFZPVTBVdE1pNHdYRzRnS2x4dUlDb2dJRlZ1YkdWemN5QnlaWEYxYVhKbFpDQmllU0JoY0hCc2FXTmhZbXhsSUd4aGR5QnZjaUJoWjNKbFpXUWdkRzhnYVc0Z2QzSnBkR2x1Wnl3Z2MyOW1kSGRoY21WY2JpQXFJQ0JrYVhOMGNtbGlkWFJsWkNCMWJtUmxjaUIwYUdVZ1RHbGpaVzV6WlNCcGN5QmthWE4wY21saWRYUmxaQ0J2YmlCaGJpQmNJa0ZUSUVsVFhDSWdRa0ZUU1ZNc1hHNGdLaUFnVjBsVVNFOVZWQ0JYUVZKU1FVNVVTVVZUSUU5U0lFTlBUa1JKVkVsUFRsTWdUMFlnUVU1WklFdEpUa1FzSUdWcGRHaGxjaUJsZUhCeVpYTnpJRzl5SUdsdGNHeHBaV1F1WEc0Z0tpQWdVMlZsSUhSb1pTQk1hV05sYm5ObElHWnZjaUIwYUdVZ2MzQmxZMmxtYVdNZ2JHRnVaM1ZoWjJVZ1oyOTJaWEp1YVc1bklIQmxjbTFwYzNOcGIyNXpJR0Z1WkZ4dUlDb2dJR3hwYldsMFlYUnBiMjV6SUhWdVpHVnlJSFJvWlNCTWFXTmxibk5sTGx4dUlDb3ZYRzVjYm1sdGNHOXlkQ0FxSUdGeklGSmxZV04wSUdaeWIyMGdKM0psWVdOMEp6dGNibHh1YVcxd2IzSjBJSHREYjI1MFlXbHVaWEpUZEdGMFpTd2dRV3hzYjNkbFpFTnZiWEJ2Ym1WdWRITlFjbTl3WlhKMGFXVnpmU0JtY205dElDZEFZV1J2WW1VdllXVnRMWEpsWVdOMExXVmthWFJoWW14bExXTnZiWEJ2Ym1WdWRITW5PMXh1YVcxd2IzSjBJSHREYjIxd2IyNWxiblJVZVhCbGZTQm1jbTl0SUZ3aWNtVmhZM1JjSWp0Y2JtbHRjRzl5ZENCN0lFMXZaR1ZzSUgwZ1puSnZiU0FuUUdGa2IySmxMMkZsYlMxemNHRXRjR0ZuWlMxdGIyUmxiQzF0WVc1aFoyVnlKenRjYmx4dVpYaHdiM0owSUdsdWRHVnlabUZqWlNCRGIzSmxRMjl1ZEdGcGJtVnlVSEp2Y0dWeWRHbGxjeUJsZUhSbGJtUnpJRUZzYkc5M1pXUkRiMjF3YjI1bGJuUnpVSEp2Y0dWeWRHbGxjM3RjYmlBZ0lDQmlZWE5sUTNOelEyeGhjM00vT25OMGNtbHVaenRjYmlBZ0lDQmhZM1JwZG1WSmJtUmxlRVp5YjIxQmRYUm9iM0pRWVc1bGJEODZiblZ0WW1WeVhHNTlYRzVjYm1WNGNHOXlkQ0JwYm5SbGNtWmhZMlVnUTI5eVpVTnZiblJoYVc1bGNrbDBaVzBnWlhoMFpXNWtjeUJOYjJSbGJDQjdYRzRnSUNBZ0oyTnhPbkJoYm1Wc1ZHbDBiR1VuT2lCemRISnBibWRjYm4xY2JseHVaWGh3YjNKMElHbHVkR1Z5Wm1GalpTQkRiM0psUTI5dWRHRnBibVZ5VTNSaGRHVWdaWGgwWlc1a2N5QkRiMjUwWVdsdVpYSlRkR0YwWlNCN1hHNWNibjFjYmx4dVpYaHdiM0owSUdsdWRHVnlabUZqWlNCQmRYUm9iM0pRWVc1bGJGTjNhWFJqYUZOMFlYUmxJSHRjYmlBZ0lDQmhZM1JwZG1WSmJtUmxlRVp5YjIxQmRYUm9iM0pRWVc1bGJEODZJRzUxYldKbGNseHVmVnh1WEc1amIyNXpkQ0JwYzBKeWIzZHpaWElnUFNBb0tDa2dQVDRnZTF4dUlDQWdJSFJ5ZVh0Y2JpQWdJQ0FnSUNBZ2NtVjBkWEp1SUhSNWNHVnZaaUIzYVc1a2IzY2dJVDA5SUNkMWJtUmxabWx1WldRbk8xeHVJQ0FnSUgxallYUmphQ2hsY25JcGUxeHVJQ0FnSUNBZ0lDQnlaWFIxY200Z1ptRnNjMlU3WEc0Z0lDQWdmVnh1ZlNrb0tUdGNibHh1WEc1bGVIQnZjblFnWTI5dWMzUWdkMmwwYUZOMFlXNWtZWEprUW1GelpVTnpjME5zWVhOeklEMGdQRTBnWlhoMFpXNWtjeUJEYjNKbFEyOXVkR0ZwYm1WeVVISnZjR1Z5ZEdsbGN6NWNiaWhjYmlBZ0lDQkRiMjF3YjI1bGJuUTZRMjl0Y0c5dVpXNTBWSGx3WlR4TlBpeGNiaUFnSUNCa1pXWmhkV3gwUW1GelpVTnpjME5zWVhOek9uTjBjbWx1WjF4dUtUcFNaV0ZqZEM1RGIyMXdiMjVsYm5SVWVYQmxQRTArSUNBOVBpQjdYRzRnSUNBZ2NtVjBkWEp1SUNod2NtOXdjenBOS1NBOVBpQjdYRzVjYmlBZ0lDQWdJQ0FnWTI5dWMzUWdZbUZ6WlVOemMwTnNZWE56SUQwZ2NISnZjSE11WW1GelpVTnpjME5zWVhOek8xeHVJQ0FnSUNBZ0lDQmpiMjV6ZENCMGIwSmxWWE5sWkVOemMwTnNZWE56SUQwZ1ltRnpaVU56YzBOc1lYTnpJQ1ltSUdKaGMyVkRjM05EYkdGemN5NTBjbWx0S0NrdWJHVnVaM1JvSUQ0Z01DQS9JR0poYzJWRGMzTkRiR0Z6Y3lBNklHUmxabUYxYkhSQ1lYTmxRM056UTJ4aGMzTTdYRzVjYmlBZ0lDQWdJQ0FnWTI5dWMzUWdiV1Z5WjJWa1VISnZjSE02SUUwOUlIdGNiaUFnSUNBZ0lDQWdJQ0FnSUM0dUxuQnliM0J6TEZ4dUlDQWdJQ0FnSUNBZ0lDQWdZbUZ6WlVOemMwTnNZWE56T2lCMGIwSmxWWE5sWkVOemMwTnNZWE56WEc0Z0lDQWdJQ0FnSUgwN1hHNWNiaUFnSUNBZ0lDQWdjbVYwZFhKdUlEeERiMjF3YjI1bGJuUWdleTR1TG0xbGNtZGxaRkJ5YjNCemZTQXZQanRjYmlBZ0lDQjlYRzU5TzF4dVhHNWNibHh1Wlhod2IzSjBJR052Ym5OMElIZHBkR2hCZFhSb2IzSlFZVzVsYkZOM2FYUmphQ0E5SUR4TklHVjRkR1Z1WkhNZ1EyOXlaVU52Ym5SaGFXNWxjbEJ5YjNCbGNuUnBaWE0rS0Z4dUlDQWdJRU52YlhCdmJtVnVkRHBEYjIxd2IyNWxiblJVZVhCbFBFMCtYRzRwT2xKbFlXTjBMa052YlhCdmJtVnVkRlI1Y0dVOFRUNGdQVDRnZTF4dVhHNGdJQ0FnY21WMGRYSnVJR05zWVhOeklHVjRkR1Z1WkhNZ1VtVmhZM1F1UTI5dGNHOXVaVzUwUEUwc0lFRjFkR2h2Y2xCaGJtVnNVM2RwZEdOb1UzUmhkR1UrSUh0Y2JseHVJQ0FnSUNBZ0lDQXZMMEIwY3kxcFoyNXZjbVZjYmlBZ0lDQWdJQ0FnYldWemMyRm5aVU5vWVc1dVpXdzdYRzVjYmlBZ0lDQWdJQ0FnWTI5dWMzUnlkV04wYjNJb2NISnZjSE02VFNrZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnYzNWd1pYSW9jSEp2Y0hNcE8xeHVJQ0FnSUNBZ0lDQWdJQ0FnZEdocGN5NXpkR0YwWlNBOUlIdDlYRzVjYmlBZ0lDQWdJQ0FnSUNBZ0lDOHZRSFJ6TFdsbmJtOXlaVnh1SUNBZ0lDQWdJQ0FnSUNBZ2FXWWdLR2x6UW5KdmQzTmxjaUFtSmlCM2FXNWtiM2N1UjNKaGJtbDBaU0FtSmlCM2FXNWtiM2N1UjNKaGJtbDBaUzVoZFhSb2IzSWdKaVlnZDJsdVpHOTNMa2R5WVc1cGRHVXVZWFYwYUc5eUxrMWxjM05oWjJWRGFHRnVibVZzS1NCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0x5OUFkSE10YVdkdWIzSmxYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdkR2hwY3k1dFpYTnpZV2RsUTJoaGJtNWxiQ0E5SUc1bGR5QjNhVzVrYjNjdVIzSmhibWwwWlM1aGRYUm9iM0l1VFdWemMyRm5aVU5vWVc1dVpXd29YQ0pqY1dGMWRHaHZjbHdpTENCM2FXNWtiM2NwTzF4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUhSb2FYTXVZMkZzYkdKaFkyc2dQU0IwYUdsekxtTmhiR3hpWVdOckxtSnBibVFvZEdocGN5azdYRzRnSUNBZ0lDQWdJQ0FnSUNCOVhHNGdJQ0FnSUNBZ0lIMWNibHh1SUNBZ0lDQWdJQ0JqWVd4c1ltRmpheWh0WlhOellXZGxPbUZ1ZVNsN1hHNGdJQ0FnSUNBZ0lDQWdJQ0JwWmlBb2JXVnpjMkZuWlM1a1lYUmhJQ1ltSUcxbGMzTmhaMlV1WkdGMFlTNXBaQ0E5UFQwZ2RHaHBjeTV3Y205d2N5NWpjVkJoZEdncElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQnBaaUFvYldWemMyRm5aUzVrWVhSaExtOXdaWEpoZEdsdmJpQTlQVDBnWENKdVlYWnBaMkYwWlZ3aUtTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUdOdmJuTjBJR2x1WkdWNElEMGdiV1Z6YzJGblpTNWtZWFJoTG1sdVpHVjRJR0Z6SUc1MWJXSmxjanRjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2RHaHBjeTV6WlhSVGRHRjBaU2g3WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0JoWTNScGRtVkpibVJsZUVaeWIyMUJkWFJvYjNKUVlXNWxiRG9nYVc1a1pYaGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnZlNsY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCOVhHNGdJQ0FnSUNBZ0lDQWdJQ0I5WEc0Z0lDQWdJQ0FnSUgxY2JseHVJQ0FnSUNBZ0lDQmpiMjF3YjI1bGJuUkVhV1JOYjNWdWRDZ3BPaUIyYjJsa0lIdGNiaUFnSUNBZ0lDQWdJQ0FnSUdsbUtIUm9hWE11YldWemMyRm5aVU5vWVc1dVpXd3BlMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJSFJvYVhNdWJXVnpjMkZuWlVOb1lXNXVaV3d1YzNWaWMyTnlhV0psVW1WeGRXVnpkRTFsYzNOaFoyVW9YQ0pqYlhBdWNHRnVaV3hqYjI1MFlXbHVaWEpjSWl3Z2RHaHBjeTVqWVd4c1ltRmpheWs3WEc0Z0lDQWdJQ0FnSUNBZ0lDQjlYRzRnSUNBZ0lDQWdJSDFjYmx4dUlDQWdJQ0FnSUNCamIyMXdiMjVsYm5SWGFXeHNWVzV0YjNWdWRDZ3BPaUIyYjJsa0lIdGNiaUFnSUNBZ0lDQWdJQ0FnSUdsbUtIUm9hWE11YldWemMyRm5aVU5vWVc1dVpXd3BlMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJSFJvYVhNdWJXVnpjMkZuWlVOb1lXNXVaV3d1ZFc1emRXSnpZM0pwWW1WU1pYRjFaWE4wVFdWemMyRm5aU2hjSW1OdGNDNXdZVzVsYkdOdmJuUmhhVzVsY2x3aUxDQjBhR2x6TG1OaGJHeGlZV05yS1R0Y2JpQWdJQ0FnSUNBZ0lDQWdJSDFjYmlBZ0lDQWdJQ0FnZlZ4dVhHNWNiaUFnSUNBZ0lDQWdjbVZ1WkdWeUtDbDdYRzRnSUNBZ0lDQWdJQ0FnSUNCeVpYUjFjbTRnUEVOdmJYQnZibVZ1ZENCN0xpNHVkR2hwY3k1d2NtOXdjMzBnWVdOMGFYWmxTVzVrWlhoR2NtOXRRWFYwYUc5eVVHRnVaV3c5ZTNSb2FYTXVjM1JoZEdVdVlXTjBhWFpsU1c1a1pYaEdjbTl0UVhWMGFHOXlVR0Z1Wld4OUlDOCtPMXh1SUNBZ0lDQWdJQ0I5WEc0Z0lDQWdmVnh1WEc1OU8xeHVJbDE5IiwiLypcbiAqICBDb3B5cmlnaHQgMjAyMCBBZG9iZVxuICpcbiAqICBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqICBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgICAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqICBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiAgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqICBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgd2l0aEF1dGhvclBhbmVsU3dpdGNoLCB3aXRoU3RhbmRhcmRCYXNlQ3NzQ2xhc3MgfSBmcm9tIFwiLi4vLi4vLi4vQWJzdHJhY3RDb3JlQ29udGFpbmVyQ29tcG9uZW50XCI7XG5pbXBvcnQgeyBDb21wb25lbnRNYXBwaW5nLCBDb250YWluZXIgfSBmcm9tICdAYWRvYmUvYWVtLXJlYWN0LWVkaXRhYmxlLWNvbXBvbmVudHMnO1xuaW1wb3J0IHsgQWNjb3JkaW9uVjFJc0VtcHR5Rm4gfSBmcm9tIFwiLi9BY2NvcmRpb25WMUlzRW1wdHlGblwiO1xuY2xhc3MgQWNjb3JkaW9uVjFJbXBsIGV4dGVuZHMgQ29udGFpbmVyIHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBjb21wb25lbnRNYXBwaW5nOiB0aGlzLnByb3BzLmNvbXBvbmVudE1hcHBpbmcgfHwgQ29tcG9uZW50TWFwcGluZyxcbiAgICAgICAgICAgIGV4cGFuZGVkSXRlbXM6IHRoaXMucHJvcHMuZXhwYW5kZWRJdGVtc1xuICAgICAgICB9O1xuICAgICAgICB0aGlzLmhhbmRsZUFjY29yZGlvbk5hdkNsaWNrID0gdGhpcy5oYW5kbGVBY2NvcmRpb25OYXZDbGljay5iaW5kKHRoaXMpO1xuICAgIH1cbiAgICBjb21wb25lbnREaWRVcGRhdGUocHJldlByb3BzLCBwcmV2U3RhdGUpIHtcbiAgICAgICAgaWYgKHRoaXMucHJvcHMuYWN0aXZlSW5kZXhGcm9tQXV0aG9yUGFuZWwgIT09IHVuZGVmaW5lZCAmJiBwcmV2UHJvcHMuYWN0aXZlSW5kZXhGcm9tQXV0aG9yUGFuZWwgIT0gdGhpcy5wcm9wcy5hY3RpdmVJbmRleEZyb21BdXRob3JQYW5lbCkge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGV4cGFuZGVkSXRlbXM6IFt0aGlzLnByb3BzLmNxSXRlbXNPcmRlclt0aGlzLnByb3BzLmFjdGl2ZUluZGV4RnJvbUF1dGhvclBhbmVsXV0gfSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgaGFuZGxlQWNjb3JkaW9uTmF2Q2xpY2soaXRlbUtleSkge1xuICAgICAgICBjb25zdCBpc0FjdGl2ZSA9IHRoaXMuc3RhdGUuZXhwYW5kZWRJdGVtcy5pbmRleE9mKGl0ZW1LZXkpID4gLTE7XG4gICAgICAgIGNvbnN0IGlzU2luZ2xlRXhwYW5zaW9uID0gdGhpcy5wcm9wcy5zaW5nbGVFeHBhbnNpb247XG4gICAgICAgIGxldCBleHBhbmRlZEl0ZW1zID0gdGhpcy5zdGF0ZS5leHBhbmRlZEl0ZW1zO1xuICAgICAgICBpZiAoaXNTaW5nbGVFeHBhbnNpb24pIHtcbiAgICAgICAgICAgIGV4cGFuZGVkSXRlbXMgPSAoaXNBY3RpdmUpID8gW10gOiBbaXRlbUtleV07XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBpZiAoaXNBY3RpdmUpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBpbmRleCA9IHRoaXMuc3RhdGUuZXhwYW5kZWRJdGVtcy5pbmRleE9mKGl0ZW1LZXkpO1xuICAgICAgICAgICAgICAgIGV4cGFuZGVkSXRlbXMuc3BsaWNlKGluZGV4KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGV4cGFuZGVkSXRlbXMucHVzaChpdGVtS2V5KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIGV4cGFuZGVkSXRlbXM6IGV4cGFuZGVkSXRlbXNcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGlzSXRlbUV4cGFuZGVkKGtleSkge1xuICAgICAgICByZXR1cm4gdGhpcy5zdGF0ZS5leHBhbmRlZEl0ZW1zLmluZGV4T2Yoa2V5KSA+IC0xO1xuICAgIH1cbiAgICBnZXQgYWNjb3JkaW9uQ29udGFpbmVyUHJvcHMoKSB7XG4gICAgICAgIGNvbnN0IGF0dHJzID0gdGhpcy5jb250YWluZXJQcm9wcztcbiAgICAgICAgYXR0cnNbJ2NsYXNzTmFtZSddID0gYXR0cnMuY2xhc3NOYW1lICsgJyAnICsgdGhpcy5wcm9wcy5iYXNlQ3NzQ2xhc3M7XG4gICAgICAgIGF0dHJzWydkYXRhLWNtcC1pcyddID0gJ2FjY29yZGlvbic7XG4gICAgICAgIHJldHVybiBhdHRycztcbiAgICB9XG4gICAgZGlzcGxheUl0ZW0oa2V5LCBpc0V4cGFuZGVkKSB7XG4gICAgICAgIGNvbnN0IGluZGV4VG9TaG93ID0gdGhpcy5wcm9wcy5jcUl0ZW1zT3JkZXIuaW5kZXhPZihrZXkpO1xuICAgICAgICBpZiAodGhpcy5wcm9wcy5pc0luRWRpdG9yID09PSB0cnVlIHx8IGlzRXhwYW5kZWQpIHtcbiAgICAgICAgICAgIGNvbnN0IGNzc0NsYXNzID0gaXNFeHBhbmRlZCA/IGAke3RoaXMucHJvcHMuYmFzZUNzc0NsYXNzfV9fcGFuZWwgJHt0aGlzLnByb3BzLmJhc2VDc3NDbGFzc31fX3BhbmVsLS1leHBhbmRlZGAgOiBgJHt0aGlzLnByb3BzLmJhc2VDc3NDbGFzc31fX3BhbmVsICR7dGhpcy5wcm9wcy5iYXNlQ3NzQ2xhc3N9X19wYW5lbC0taGlkZGVuYDtcbiAgICAgICAgICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzTmFtZTogY3NzQ2xhc3MsIHJvbGU6IFwicmVnaW9uXCIgfSwgdGhpcy5jaGlsZENvbXBvbmVudHNbaW5kZXhUb1Nob3ddKSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHJlbmRlckhlYWRpbmdCdXR0b24oa2V5LCBpdGVtLCBidXR0b25Dc3NDbGFzcykge1xuICAgICAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIiwgeyBjbGFzc05hbWU6IGJ1dHRvbkNzc0NsYXNzLCBvbkNsaWNrOiAoKSA9PiB7IHRoaXMuaGFuZGxlQWNjb3JkaW9uTmF2Q2xpY2soa2V5KTsgfSB9LFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcInNwYW5cIiwgeyBjbGFzc05hbWU6IHRoaXMucHJvcHMuYmFzZUNzc0NsYXNzICsgJ19fdGl0bGUnIH0sIGl0ZW1bXCJjcTpwYW5lbFRpdGxlXCJdKSxcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIsIHsgY2xhc3NOYW1lOiB0aGlzLnByb3BzLmJhc2VDc3NDbGFzcyArICdfX2ljb24nIH0pKSk7XG4gICAgfVxuICAgIGdldCBhY2NvcmRpb25Db250ZW50KCkge1xuICAgICAgICByZXR1cm4gKHRoaXMucHJvcHMuY3FJdGVtc09yZGVyLm1hcCgoa2V5LCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgaXRlbSA9IHRoaXMucHJvcHMuY3FJdGVtc1trZXldO1xuICAgICAgICAgICAgY29uc3QgaXNFeHBhbmRlZCA9IHRoaXMuaXNJdGVtRXhwYW5kZWQoa2V5KTtcbiAgICAgICAgICAgIGNvbnN0IGJ1dHRvbkNzc0NsYXNzID0gKGlzRXhwYW5kZWQpID8gYCR7dGhpcy5wcm9wcy5iYXNlQ3NzQ2xhc3N9X19idXR0b24gJHt0aGlzLnByb3BzLmJhc2VDc3NDbGFzc31fX2J1dHRvbi0tZXhwYW5kZWRgIDogYCR7dGhpcy5wcm9wcy5iYXNlQ3NzQ2xhc3N9X19idXR0b25gO1xuICAgICAgICAgICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsga2V5OiBcImFjY29yZGlvbi1pbmRleFwiICsgaW5kZXgsIGNsYXNzTmFtZTogdGhpcy5wcm9wcy5iYXNlQ3NzQ2xhc3MgKyAnX19pdGVtJywgXCJkYXRhLWNtcC1pbmRleFwiOiBpbmRleCwgXCJkYXRhLWNtcC1leHBhbmRlZFwiOiBpc0V4cGFuZGVkIH0sXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChgJHt0aGlzLnByb3BzLmhlYWRpbmdFbGVtZW50IHx8ICdoMyd9YCwge1xuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU6IHRoaXMucHJvcHMuYmFzZUNzc0NsYXNzICsgJ19faGVhZGVyJyxcbiAgICAgICAgICAgICAgICB9LCB0aGlzLnJlbmRlckhlYWRpbmdCdXR0b24oa2V5LCBpdGVtLCBidXR0b25Dc3NDbGFzcykpLFxuICAgICAgICAgICAgICAgIHRoaXMuZGlzcGxheUl0ZW0oa2V5LCBpc0V4cGFuZGVkKSkpO1xuICAgICAgICB9KSk7XG4gICAgfVxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgY29uc3QgaXNFbXB0eSA9IEFjY29yZGlvblYxSXNFbXB0eUZuKHRoaXMucHJvcHMpO1xuICAgICAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5hY2NvcmRpb25Db250YWluZXJQcm9wcyksXG4gICAgICAgICAgICAhaXNFbXB0eSAmJiB0aGlzLmFjY29yZGlvbkNvbnRlbnQsXG4gICAgICAgICAgICB0aGlzLnBsYWNlaG9sZGVyQ29tcG9uZW50KSk7XG4gICAgfVxufVxuZXhwb3J0IGRlZmF1bHQgd2l0aFN0YW5kYXJkQmFzZUNzc0NsYXNzKHdpdGhBdXRob3JQYW5lbFN3aXRjaChBY2NvcmRpb25WMUltcGwpLCBcImNtcC1hY2NvcmRpb25cIik7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lRV05qYjNKa2FXOXVWakV1YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pSWl3aWMyOTFjbU5sY3lJNld5SkJZMk52Y21ScGIyNVdNUzUwYzNnaVhTd2libUZ0WlhNaU9sdGRMQ0p0WVhCd2FXNW5jeUk2SWtGQlFVRTdPenM3T3pzN096czdPenM3TzBkQlkwYzdRVUZGU0N4UFFVRlBMRXRCUVVzc1MwRkJTeXhOUVVGTkxFOUJRVThzUTBGQlF6dEJRVWN2UWl4UFFVRlBMRVZCUVRoRExIRkNRVUZ4UWl4RlFVRkZMSGRDUVVGM1FpeEZRVUZETEUxQlFVMHNlVU5CUVhsRExFTkJRVU03UVVGRGNrb3NUMEZCVHl4RlFVRkRMR2RDUVVGblFpeEZRVUZGTEZOQlFWTXNSVUZCUXl4TlFVRk5MSE5EUVVGelF5eERRVUZETzBGQlEycEdMRTlCUVU4c1JVRkJReXh2UWtGQmIwSXNSVUZCUXl4TlFVRk5MSGRDUVVGM1FpeERRVUZETzBGQldUVkVMRTFCUVUwc1pVRkJaMElzVTBGQlVTeFRRVUZwUkR0SlFVVXpSU3haUVVGWkxFdEJRVEpDTzFGQlEyNURMRXRCUVVzc1EwRkJReXhMUVVGTExFTkJRVU1zUTBGQlF6dFJRVVZpTEVsQlFVa3NRMEZCUXl4TFFVRkxMRWRCUVVjN1dVRkRWQ3huUWtGQlowSXNSVUZCUlN4SlFVRkpMRU5CUVVNc1MwRkJTeXhEUVVGRExHZENRVUZuUWl4SlFVRkpMR2RDUVVGblFqdFpRVU5xUlN4aFFVRmhMRVZCUVVVc1NVRkJTU3hEUVVGRExFdEJRVXNzUTBGQlF5eGhRVUZoTzFOQlF6RkRMRU5CUVVNN1VVRkZSaXhKUVVGSkxFTkJRVU1zZFVKQlFYVkNMRWRCUVVjc1NVRkJTU3hEUVVGRExIVkNRVUYxUWl4RFFVRkRMRWxCUVVrc1EwRkJReXhKUVVGSkxFTkJRVU1zUTBGQlF6dEpRVU16UlN4RFFVRkRPMGxCUlVRc2EwSkJRV3RDTEVOQlFVTXNVMEZCTUVNc1JVRkJSU3hUUVVGeFF6dFJRVU5vUnl4SlFVRkhMRWxCUVVrc1EwRkJReXhMUVVGTExFTkJRVU1zTUVKQlFUQkNMRXRCUVVzc1UwRkJVeXhKUVVGSkxGTkJRVk1zUTBGQlF5d3dRa0ZCTUVJc1NVRkJTU3hKUVVGSkxFTkJRVU1zUzBGQlN5eERRVUZETERCQ1FVRXdRaXhGUVVGRE8xbEJRM0JKTEVsQlFVa3NRMEZCUXl4UlFVRlJMRU5CUVVNc1JVRkJSU3hoUVVGaExFVkJRVVVzUTBGQlF5eEpRVUZKTEVOQlFVTXNTMEZCU3l4RFFVRkRMRmxCUVZrc1EwRkJReXhKUVVGSkxFTkJRVU1zUzBGQlN5eERRVUZETERCQ1FVRXdRaXhEUVVGRExFTkJRVU1zUlVGQlJTeERRVUZGTEVOQlFVTTdVMEZEZGtjN1NVRkRUQ3hEUVVGRE8wbEJSVVFzZFVKQlFYVkNMRU5CUVVNc1QwRkJZenRSUVVWc1F5eE5RVUZOTEZGQlFWRXNSMEZCUnl4SlFVRkpMRU5CUVVNc1MwRkJTeXhEUVVGRExHRkJRV0VzUTBGQlF5eFBRVUZQTEVOQlFVTXNUMEZCVHl4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRExFTkJRVU03VVVGRGFFVXNUVUZCVFN4cFFrRkJhVUlzUjBGQlJ5eEpRVUZKTEVOQlFVTXNTMEZCU3l4RFFVRkRMR1ZCUVdVc1EwRkJRenRSUVVWeVJDeEpRVUZKTEdGQlFXRXNSMEZCUnl4SlFVRkpMRU5CUVVNc1MwRkJTeXhEUVVGRExHRkJRV0VzUTBGQlF6dFJRVU0zUXl4SlFVRkhMR2xDUVVGcFFpeEZRVUZETzFsQlEycENMR0ZCUVdFc1IwRkJSeXhEUVVGRExGRkJRVkVzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4RlFVRkZMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zVDBGQlR5eERRVUZETEVOQlFVTTdVMEZETDBNN1lVRkJTVHRaUVVORUxFbEJRVWNzVVVGQlVTeEZRVUZETzJkQ1FVTlNMRTFCUVUwc1MwRkJTeXhIUVVGSkxFbEJRVWtzUTBGQlF5eExRVUZMTEVOQlFVTXNZVUZCWVN4RFFVRkRMRTlCUVU4c1EwRkJReXhQUVVGUExFTkJRVU1zUTBGQlF6dG5Ra0ZEZWtRc1lVRkJZU3hEUVVGRExFMUJRVTBzUTBGQlJTeExRVUZMTEVOQlFVVXNRMEZCUXp0aFFVTnFRenRwUWtGQlNUdG5Ra0ZEUkN4aFFVRmhMRU5CUVVNc1NVRkJTU3hEUVVGRExFOUJRVThzUTBGQlF5eERRVUZETzJGQlF5OUNPMU5CUTBvN1VVRkRSQ3hKUVVGSkxFTkJRVU1zVVVGQlVTeERRVUZETzFsQlExWXNZVUZCWVN4RlFVRkZMR0ZCUVdFN1UwRkRMMElzUTBGQlF5eERRVUZETzBsQlExQXNRMEZCUXp0SlFVVkVMR05CUVdNc1EwRkJReXhIUVVGVk8xRkJRM0pDTEU5QlFVOHNTVUZCU1N4RFFVRkRMRXRCUVVzc1EwRkJReXhoUVVGaExFTkJRVU1zVDBGQlR5eERRVUZETEVkQlFVY3NRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJReXhEUVVGRE8wbEJRM1JFTEVOQlFVTTdTVUZGUkN4SlFVRkpMSFZDUVVGMVFqdFJRVU4yUWl4TlFVRk5MRXRCUVVzc1IwRkJSeXhKUVVGSkxFTkJRVU1zWTBGQll5eERRVUZETzFGQlEyeERMRXRCUVVzc1EwRkJReXhYUVVGWExFTkJRVU1zUjBGQlJ5eExRVUZMTEVOQlFVTXNVMEZCVXl4SFFVRkhMRWRCUVVjc1IwRkJSeXhKUVVGSkxFTkJRVU1zUzBGQlN5eERRVUZETEZsQlFWa3NRMEZCUXp0UlFVTnlSU3hMUVVGTExFTkJRVU1zWVVGQllTeERRVUZETEVkQlFVY3NWMEZCVnl4RFFVRkRPMUZCUTI1RExFOUJRVThzUzBGQlN5eERRVUZETzBsQlEycENMRU5CUVVNN1NVRkhSQ3hYUVVGWExFTkJRVU1zUjBGQlZTeEZRVUZETEZWQlFXdENPMUZCUlhKRExFMUJRVTBzVjBGQlZ5eEhRVUZITEVsQlFVa3NRMEZCUXl4TFFVRkxMRU5CUVVNc1dVRkJXU3hEUVVGRExFOUJRVThzUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXp0UlFVVjZSQ3hKUVVGSExFbEJRVWtzUTBGQlF5eExRVUZMTEVOQlFVTXNWVUZCVlN4TFFVRkxMRWxCUVVrc1NVRkJTU3hWUVVGVkxFVkJRVU03V1VGRE5VTXNUVUZCVFN4UlFVRlJMRWRCUVVjc1ZVRkJWU3hEUVVGRExFTkJRVU1zUTBGQlF5eEhRVUZITEVsQlFVa3NRMEZCUXl4TFFVRkxMRU5CUVVNc1dVRkJXU3hYUVVGWExFbEJRVWtzUTBGQlF5eExRVUZMTEVOQlFVTXNXVUZCV1N4dFFrRkJiVUlzUTBGQlFTeERRVUZETEVOQlFVTXNSMEZCUnl4SlFVRkpMRU5CUVVNc1MwRkJTeXhEUVVGRExGbEJRVmtzVjBGQlZ5eEpRVUZKTEVOQlFVTXNTMEZCU3l4RFFVRkRMRmxCUVZrc2FVSkJRV2xDTEVOQlFVTTdXVUZGTjB3c1QwRkJUeXhEUVVOSUxEWkNRVUZMTEZOQlFWTXNSVUZCUlN4UlFVRlJMRVZCUTI1Q0xFbEJRVWtzUlVGQlF5eFJRVUZSTEVsQlEySXNTVUZCU1N4RFFVRkRMR1ZCUVdVc1EwRkJReXhYUVVGWExFTkJRVU1zUTBGRGFFTXNRMEZEVkN4RFFVRkJPMU5CUTBvN1VVRkZSQ3hQUVVGUExFbEJRVWtzUTBGQlF6dEpRVU5vUWl4RFFVRkRPMGxCUlVRc2JVSkJRVzFDTEVOQlFVTXNSMEZCVlN4RlFVRkZMRWxCUVZFc1JVRkJReXhqUVVGeFFqdFJRVU14UkN4UFFVRlBMRU5CUTBnc1owTkJRVkVzVTBGQlV5eEZRVUZGTEdOQlFXTXNSVUZCUlN4UFFVRlBMRVZCUVVVc1IwRkJSeXhGUVVGRkxFZEJRVWNzU1VGQlNTeERRVUZETEhWQ1FVRjFRaXhEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZCTEVOQlFVTXNRMEZCUXp0WlFVTnVSaXc0UWtGQlRTeFRRVUZUTEVWQlFVVXNTVUZCU1N4RFFVRkRMRXRCUVVzc1EwRkJReXhaUVVGWkxFZEJRVWNzVTBGQlV5eEpRVUZITEVsQlFVa3NRMEZCUXl4bFFVRmxMRU5CUVVNc1EwRkJVVHRaUVVOd1JpdzRRa0ZCVFN4VFFVRlRMRVZCUVVVc1NVRkJTU3hEUVVGRExFdEJRVXNzUTBGQlF5eFpRVUZaTEVkQlFVY3NVVUZCVVN4SFFVRlRMRU5CUTNaRUxFTkJRMW9zUTBGQlFUdEpRVU5NTEVOQlFVTTdTVUZGUkN4SlFVRkpMR2RDUVVGblFqdFJRVU5vUWl4UFFVRlBMRU5CUlVnc1NVRkJTU3hEUVVGRExFdEJRVXNzUTBGQlF5eFpRVUZaTEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNc1IwRkJSeXhGUVVGRkxFdEJRVXNzUlVGQlJTeEZRVUZGTzFsQlEzWkRMRTFCUVUwc1NVRkJTU3hIUVVGSExFbEJRVWtzUTBGQlF5eExRVUZMTEVOQlFVTXNUMEZCVHl4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRE8xbEJRM0pETEUxQlFVMHNWVUZCVlN4SFFVRkhMRWxCUVVrc1EwRkJReXhqUVVGakxFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTTdXVUZETlVNc1RVRkJUU3hqUVVGakxFZEJRVWNzUTBGQlF5eFZRVUZWTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1IwRkJSeXhKUVVGSkxFTkJRVU1zUzBGQlN5eERRVUZETEZsQlFWa3NXVUZCV1N4SlFVRkpMRU5CUVVNc1MwRkJTeXhEUVVGRExGbEJRVmtzYjBKQlFXOUNMRU5CUVVNc1EwRkJReXhEUVVGRExFZEJRVWNzU1VGQlNTeERRVUZETEV0QlFVc3NRMEZCUXl4WlFVRlpMRlZCUVZVc1EwRkJRenRaUVVNdlNpeFBRVUZQTEVOQlEwZ3NOa0pCUVVzc1IwRkJSeXhGUVVGRkxHbENRVUZwUWl4SFFVRkhMRXRCUVVzc1JVRkRMMElzVTBGQlV5eEZRVUZGTEVsQlFVa3NRMEZCUXl4TFFVRkxMRU5CUVVNc1dVRkJXU3hIUVVGSExGRkJRVkVzYjBKQlF6ZENMRXRCUVVzc2RVSkJRMFlzVlVGQlZUdG5Ra0ZGZWtJc1MwRkJTeXhEUVVGRExHRkJRV0VzUTBGRFppeEhRVUZITEVsQlFVa3NRMEZCUXl4TFFVRkxMRU5CUVVNc1kwRkJZeXhKUVVGSkxFbEJRVWtzUlVGQlJTeEZRVU4wUXp0dlFrRkRTU3hUUVVGVExFVkJRVVVzU1VGQlNTeERRVUZETEV0QlFVc3NRMEZCUXl4WlFVRlpMRWRCUVVjc1ZVRkJWVHRwUWtGRGJFUXNSVUZEUkN4SlFVRkpMRU5CUVVNc2JVSkJRVzFDTEVOQlFVTXNSMEZCUnl4RlFVRkRMRWxCUVVrc1JVRkJReXhqUVVGakxFTkJRVU1zUTBGRGNFUTdaMEpCUlVvc1NVRkJTU3hEUVVGRExGZEJRVmNzUTBGQlF5eEhRVUZITEVWQlFVVXNWVUZCVlN4RFFVRkRMRU5CUldoRExFTkJRMVFzUTBGQlFUdFJRVU5NTEVOQlFVTXNRMEZCUXl4RFFVTk1MRU5CUVVNN1NVRkRUaXhEUVVGRE8wbEJSVVFzVFVGQlRUdFJRVVZHTEUxQlFVMHNUMEZCVHl4SFFVRkhMRzlDUVVGdlFpeERRVUZETEVsQlFVa3NRMEZCUXl4TFFVRkxMRU5CUVVNc1EwRkJRenRSUVVWcVJDeFBRVUZQTEVOQlEwZ3NOa05CUVZNc1NVRkJTU3hEUVVGRExIVkNRVUYxUWp0WlFVTXZRaXhEUVVGRExFOUJRVThzU1VGQlNTeEpRVUZKTEVOQlFVTXNaMEpCUVdkQ08xbEJRMnBETEVsQlFVa3NRMEZCUXl4dlFrRkJiMElzUTBGRGVrSXNRMEZEVkN4RFFVRkJPMGxCUTB3c1EwRkJRenREUVVWS08wRkJSVVFzWlVGQlpTeDNRa0ZCZDBJc1EwRkJReXh4UWtGQmNVSXNRMEZCUXl4bFFVRmxMRU5CUVVNc1JVRkJSU3hsUVVGbExFTkJRVU1zUTBGQlF5SXNJbk52ZFhKalpYTkRiMjUwWlc1MElqcGJJaThxWEc0Z0tpQWdRMjl3ZVhKcFoyaDBJREl3TWpBZ1FXUnZZbVZjYmlBcVhHNGdLaUFnVEdsalpXNXpaV1FnZFc1a1pYSWdkR2hsSUVGd1lXTm9aU0JNYVdObGJuTmxMQ0JXWlhKemFXOXVJREl1TUNBb2RHaGxJRndpVEdsalpXNXpaVndpS1R0Y2JpQXFJQ0I1YjNVZ2JXRjVJRzV2ZENCMWMyVWdkR2hwY3lCbWFXeGxJR1Y0WTJWd2RDQnBiaUJqYjIxd2JHbGhibU5sSUhkcGRHZ2dkR2hsSUV4cFkyVnVjMlV1WEc0Z0tpQWdXVzkxSUcxaGVTQnZZblJoYVc0Z1lTQmpiM0I1SUc5bUlIUm9aU0JNYVdObGJuTmxJR0YwWEc0Z0tseHVJQ29nSUNBZ0lDQm9kSFJ3T2k4dmQzZDNMbUZ3WVdOb1pTNXZjbWN2YkdsalpXNXpaWE12VEVsRFJVNVRSUzB5TGpCY2JpQXFYRzRnS2lBZ1ZXNXNaWE56SUhKbGNYVnBjbVZrSUdKNUlHRndjR3hwWTJGaWJHVWdiR0YzSUc5eUlHRm5jbVZsWkNCMGJ5QnBiaUIzY21sMGFXNW5MQ0J6YjJaMGQyRnlaVnh1SUNvZ0lHUnBjM1J5YVdKMWRHVmtJSFZ1WkdWeUlIUm9aU0JNYVdObGJuTmxJR2x6SUdScGMzUnlhV0oxZEdWa0lHOXVJR0Z1SUZ3aVFWTWdTVk5jSWlCQ1FWTkpVeXhjYmlBcUlDQlhTVlJJVDFWVUlGZEJVbEpCVGxSSlJWTWdUMUlnUTA5T1JFbFVTVTlPVXlCUFJpQkJUbGtnUzBsT1JDd2daV2wwYUdWeUlHVjRjSEpsYzNNZ2IzSWdhVzF3YkdsbFpDNWNiaUFxSUNCVFpXVWdkR2hsSUV4cFkyVnVjMlVnWm05eUlIUm9aU0J6Y0dWamFXWnBZeUJzWVc1bmRXRm5aU0JuYjNabGNtNXBibWNnY0dWeWJXbHpjMmx2Ym5NZ1lXNWtYRzRnS2lBZ2JHbHRhWFJoZEdsdmJuTWdkVzVrWlhJZ2RHaGxJRXhwWTJWdWMyVXVYRzRnS2k5Y2JseHVhVzF3YjNKMElDb2dZWE1nVW1WaFkzUWdabkp2YlNBbmNtVmhZM1FuTzF4dVhHNWNibWx0Y0c5eWRDQjdRMjl5WlVOdmJuUmhhVzVsY2xCeWIzQmxjblJwWlhNc0lFTnZjbVZEYjI1MFlXbHVaWEpUZEdGMFpTd2dkMmwwYUVGMWRHaHZjbEJoYm1Wc1UzZHBkR05vTENCM2FYUm9VM1JoYm1SaGNtUkNZWE5sUTNOelEyeGhjM045SUdaeWIyMGdYQ0l1TGk4dUxpOHVMaTlCWW5OMGNtRmpkRU52Y21WRGIyNTBZV2x1WlhKRGIyMXdiMjVsYm5SY0lqdGNibWx0Y0c5eWRDQjdRMjl0Y0c5dVpXNTBUV0Z3Y0dsdVp5d2dRMjl1ZEdGcGJtVnlmU0JtY205dElDZEFZV1J2WW1VdllXVnRMWEpsWVdOMExXVmthWFJoWW14bExXTnZiWEJ2Ym1WdWRITW5PMXh1YVcxd2IzSjBJSHRCWTJOdmNtUnBiMjVXTVVselJXMXdkSGxHYm4wZ1puSnZiU0JjSWk0dlFXTmpiM0prYVc5dVZqRkpjMFZ0Y0hSNVJtNWNJanRjYmx4dVpYaHdiM0owSUdsdWRHVnlabUZqWlNCQlkyTnZjbVJwYjI1V01WQnliM0JsY25ScFpYTWdaWGgwWlc1a2N5QkRiM0psUTI5dWRHRnBibVZ5VUhKdmNHVnlkR2xsYzN0Y2JpQWdJQ0J6YVc1bmJHVkZlSEJoYm5OcGIyNDZJR0p2YjJ4bFlXNDdYRzRnSUNBZ2FHVmhaR2x1WjBWc1pXMWxiblE2SUhOMGNtbHVaenRjYmlBZ0lDQmxlSEJoYm1SbFpFbDBaVzF6T2lCemRISnBibWRiWFR0Y2JuMWNibHh1Wlhod2IzSjBJR2x1ZEdWeVptRmpaU0JCWTJOdmNtUnBiMjVXTVZOMFlYUmxJR1Y0ZEdWdVpITWdRMjl5WlVOdmJuUmhhVzVsY2xOMFlYUmxlMXh1SUNBZ0lHVjRjR0Z1WkdWa1NYUmxiWE02SUhOMGNtbHVaMXRkTzF4dWZWeHVYRzVqYkdGemN5QkJZMk52Y21ScGIyNVdNVWx0Y0d3Z1pYaDBaVzVrY3lCRGIyNTBZV2x1WlhJOFFXTmpiM0prYVc5dVZqRlFjbTl3WlhKMGFXVnpMRUZqWTI5eVpHbHZibFl4VTNSaGRHVStJSHRjYmx4dUlDQWdJR052Ym5OMGNuVmpkRzl5S0hCeWIzQnpPa0ZqWTI5eVpHbHZibFl4VUhKdmNHVnlkR2xsY3lrZ2UxeHVJQ0FnSUNBZ0lDQnpkWEJsY2lod2NtOXdjeWs3WEc0Z0lDQWdYRzRnSUNBZ0lDQWdJSFJvYVhNdWMzUmhkR1VnUFNCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0JqYjIxd2IyNWxiblJOWVhCd2FXNW5PaUIwYUdsekxuQnliM0J6TG1OdmJYQnZibVZ1ZEUxaGNIQnBibWNnZkh3Z1EyOXRjRzl1Wlc1MFRXRndjR2x1Wnl4Y2JpQWdJQ0FnSUNBZ0lDQWdJR1Y0Y0dGdVpHVmtTWFJsYlhNNklIUm9hWE11Y0hKdmNITXVaWGh3WVc1a1pXUkpkR1Z0YzF4dUlDQWdJQ0FnSUNCOU8xeHVYRzRnSUNBZ0lDQWdJSFJvYVhNdWFHRnVaR3hsUVdOamIzSmthVzl1VG1GMlEyeHBZMnNnUFNCMGFHbHpMbWhoYm1Sc1pVRmpZMjl5WkdsdmJrNWhka05zYVdOckxtSnBibVFvZEdocGN5azdYRzRnSUNBZ2ZWeHVYRzRnSUNBZ1kyOXRjRzl1Wlc1MFJHbGtWWEJrWVhSbEtIQnlaWFpRY205d2N6b2dVbVZoWkc5dWJIazhRV05qYjNKa2FXOXVWakZRY205d1pYSjBhV1Z6UGl3Z2NISmxkbE4wWVhSbE9pQlNaV0ZrYjI1c2VUeEJZMk52Y21ScGIyNVdNVk4wWVhSbFBpazZJSFp2YVdRZ2UxeHVJQ0FnSUNBZ0lDQnBaaWgwYUdsekxuQnliM0J6TG1GamRHbDJaVWx1WkdWNFJuSnZiVUYxZEdodmNsQmhibVZzSUNFOVBTQjFibVJsWm1sdVpXUWdKaVlnY0hKbGRsQnliM0J6TG1GamRHbDJaVWx1WkdWNFJuSnZiVUYxZEdodmNsQmhibVZzSUNFOUlIUm9hWE11Y0hKdmNITXVZV04wYVhabFNXNWtaWGhHY205dFFYVjBhRzl5VUdGdVpXd3BlMXh1SUNBZ0lDQWdJQ0FnSUNBZ2RHaHBjeTV6WlhSVGRHRjBaU2g3SUdWNGNHRnVaR1ZrU1hSbGJYTTZJRnQwYUdsekxuQnliM0J6TG1OeFNYUmxiWE5QY21SbGNsdDBhR2x6TG5CeWIzQnpMbUZqZEdsMlpVbHVaR1Y0Um5KdmJVRjFkR2h2Y2xCaGJtVnNYVjBnZlNBcE8xeHVJQ0FnSUNBZ0lDQjlYRzRnSUNBZ2ZWeHVYRzRnSUNBZ2FHRnVaR3hsUVdOamIzSmthVzl1VG1GMlEyeHBZMnNvYVhSbGJVdGxlVHB6ZEhKcGJtY3BlMXh1WEc0Z0lDQWdJQ0FnSUdOdmJuTjBJR2x6UVdOMGFYWmxJRDBnZEdocGN5NXpkR0YwWlM1bGVIQmhibVJsWkVsMFpXMXpMbWx1WkdWNFQyWW9hWFJsYlV0bGVTa2dQaUF0TVR0Y2JpQWdJQ0FnSUNBZ1kyOXVjM1FnYVhOVGFXNW5iR1ZGZUhCaGJuTnBiMjRnUFNCMGFHbHpMbkJ5YjNCekxuTnBibWRzWlVWNGNHRnVjMmx2Ymp0Y2JseHVJQ0FnSUNBZ0lDQnNaWFFnWlhod1lXNWtaV1JKZEdWdGN5QTlJSFJvYVhNdWMzUmhkR1V1Wlhod1lXNWtaV1JKZEdWdGN6dGNiaUFnSUNBZ0lDQWdhV1lvYVhOVGFXNW5iR1ZGZUhCaGJuTnBiMjRwZTF4dUlDQWdJQ0FnSUNBZ0lDQWdaWGh3WVc1a1pXUkpkR1Z0Y3lBOUlDaHBjMEZqZEdsMlpTa2dQeUJiWFNBNklGdHBkR1Z0UzJWNVhUdGNiaUFnSUNBZ0lDQWdmV1ZzYzJWN1hHNGdJQ0FnSUNBZ0lDQWdJQ0JwWmlocGMwRmpkR2wyWlNsN1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ1kyOXVjM1FnYVc1a1pYZ2dQU0FnZEdocGN5NXpkR0YwWlM1bGVIQmhibVJsWkVsMFpXMXpMbWx1WkdWNFQyWW9hWFJsYlV0bGVTazdYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdaWGh3WVc1a1pXUkpkR1Z0Y3k1emNHeHBZMlVvSUdsdVpHVjRJQ2s3WEc0Z0lDQWdJQ0FnSUNBZ0lDQjlaV3h6Wlh0Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCbGVIQmhibVJsWkVsMFpXMXpMbkIxYzJnb2FYUmxiVXRsZVNrN1hHNGdJQ0FnSUNBZ0lDQWdJQ0I5WEc0Z0lDQWdJQ0FnSUgxY2JpQWdJQ0FnSUNBZ2RHaHBjeTV6WlhSVGRHRjBaU2g3WEc0Z0lDQWdJQ0FnSUNBZ0lDQmxlSEJoYm1SbFpFbDBaVzF6T2lCbGVIQmhibVJsWkVsMFpXMXpYRzRnSUNBZ0lDQWdJSDBwTzF4dUlDQWdJSDFjYmx4dUlDQWdJR2x6U1hSbGJVVjRjR0Z1WkdWa0tHdGxlVHB6ZEhKcGJtY3BlMXh1SUNBZ0lDQWdJQ0J5WlhSMWNtNGdkR2hwY3k1emRHRjBaUzVsZUhCaGJtUmxaRWwwWlcxekxtbHVaR1Y0VDJZb2EyVjVLU0ErSUMweE8xeHVJQ0FnSUgxY2JseHVJQ0FnSUdkbGRDQmhZMk52Y21ScGIyNURiMjUwWVdsdVpYSlFjbTl3Y3lncGUxeHVJQ0FnSUNBZ0lDQmpiMjV6ZENCaGRIUnljeUE5SUhSb2FYTXVZMjl1ZEdGcGJtVnlVSEp2Y0hNN1hHNGdJQ0FnSUNBZ0lHRjBkSEp6V3lkamJHRnpjMDVoYldVblhTQTlJR0YwZEhKekxtTnNZWE56VG1GdFpTQXJJQ2NnSnlBcklIUm9hWE11Y0hKdmNITXVZbUZ6WlVOemMwTnNZWE56TzF4dUlDQWdJQ0FnSUNCaGRIUnljMXNuWkdGMFlTMWpiWEF0YVhNblhTQTlJQ2RoWTJOdmNtUnBiMjRuTzF4dUlDQWdJQ0FnSUNCeVpYUjFjbTRnWVhSMGNuTTdYRzRnSUNBZ2ZWeHVYRzVjYmlBZ0lDQmthWE53YkdGNVNYUmxiU2hyWlhrNmMzUnlhVzVuTEdselJYaHdZVzVrWldRNlltOXZiR1ZoYmlrZ2UxeHVYRzRnSUNBZ0lDQWdJR052Ym5OMElHbHVaR1Y0Vkc5VGFHOTNJRDBnZEdocGN5NXdjbTl3Y3k1amNVbDBaVzF6VDNKa1pYSXVhVzVrWlhoUFppaHJaWGtwTzF4dVhHNGdJQ0FnSUNBZ0lHbG1LSFJvYVhNdWNISnZjSE11YVhOSmJrVmthWFJ2Y2lBOVBUMGdkSEoxWlNCOGZDQnBjMFY0Y0dGdVpHVmtLWHRjYmlBZ0lDQWdJQ0FnSUNBZ0lHTnZibk4wSUdOemMwTnNZWE56SUQwZ2FYTkZlSEJoYm1SbFpDQS9JR0FrZTNSb2FYTXVjSEp2Y0hNdVltRnpaVU56YzBOc1lYTnpmVjlmY0dGdVpXd2dKSHQwYUdsekxuQnliM0J6TG1KaGMyVkRjM05EYkdGemMzMWZYM0JoYm1Wc0xTMWxlSEJoYm1SbFpHQTZJR0FrZTNSb2FYTXVjSEp2Y0hNdVltRnpaVU56YzBOc1lYTnpmVjlmY0dGdVpXd2dKSHQwYUdsekxuQnliM0J6TG1KaGMyVkRjM05EYkdGemMzMWZYM0JoYm1Wc0xTMW9hV1JrWlc1Z08xeHVYRzRnSUNBZ0lDQWdJQ0FnSUNCeVpYUjFjbTRnS0Z4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUR4a2FYWWdZMnhoYzNOT1lXMWxQWHRqYzNORGJHRnpjMzFjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lISnZiR1U5WENKeVpXZHBiMjVjSWo1Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdlM1JvYVhNdVkyaHBiR1JEYjIxd2IyNWxiblJ6VzJsdVpHVjRWRzlUYUc5M1hYMWNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQThMMlJwZGo1Y2JpQWdJQ0FnSUNBZ0lDQWdJQ2xjYmlBZ0lDQWdJQ0FnZlZ4dVhHNGdJQ0FnSUNBZ0lISmxkSFZ5YmlCdWRXeHNPMXh1SUNBZ0lIMWNibHh1SUNBZ0lISmxibVJsY2tobFlXUnBibWRDZFhSMGIyNG9hMlY1T25OMGNtbHVaeXdnYVhSbGJUcGhibmtzWW5WMGRHOXVRM056UTJ4aGMzTTZjM1J5YVc1bktYdGNiaUFnSUNBZ0lDQWdjbVYwZFhKdUlDaGNiaUFnSUNBZ0lDQWdJQ0FnSUR4aWRYUjBiMjRnWTJ4aGMzTk9ZVzFsUFh0aWRYUjBiMjVEYzNORGJHRnpjMzBnYjI1RGJHbGphejE3S0NrZ1BUNGdleUIwYUdsekxtaGhibVJzWlVGalkyOXlaR2x2Yms1aGRrTnNhV05yS0d0bGVTa2dmWDArWEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnUEhOd1lXNGdZMnhoYzNOT1lXMWxQWHQwYUdsekxuQnliM0J6TG1KaGMyVkRjM05EYkdGemN5QXJJQ2RmWDNScGRHeGxKMzArZTJsMFpXMWJYQ0pqY1Rwd1lXNWxiRlJwZEd4bFhDSmRmVHd2YzNCaGJqNWNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQThjM0JoYmlCamJHRnpjMDVoYldVOWUzUm9hWE11Y0hKdmNITXVZbUZ6WlVOemMwTnNZWE56SUNzZ0oxOWZhV052YmlkOVBqd3ZjM0JoYmo1Y2JpQWdJQ0FnSUNBZ0lDQWdJRHd2WW5WMGRHOXVQbHh1SUNBZ0lDQWdJQ0FwWEc0Z0lDQWdmVnh1WEc0Z0lDQWdaMlYwSUdGalkyOXlaR2x2YmtOdmJuUmxiblFvS1h0Y2JpQWdJQ0FnSUNBZ2NtVjBkWEp1SUNoY2JseHVJQ0FnSUNBZ0lDQWdJQ0FnZEdocGN5NXdjbTl3Y3k1amNVbDBaVzF6VDNKa1pYSXViV0Z3S0NoclpYa3NJR2x1WkdWNEtTQTlQaUI3WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnWTI5dWMzUWdhWFJsYlNBOUlIUm9hWE11Y0hKdmNITXVZM0ZKZEdWdGMxdHJaWGxkTzF4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUdOdmJuTjBJR2x6Ulhod1lXNWtaV1FnUFNCMGFHbHpMbWx6U1hSbGJVVjRjR0Z1WkdWa0tHdGxlU2s3WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnWTI5dWMzUWdZblYwZEc5dVEzTnpRMnhoYzNNZ1BTQW9hWE5GZUhCaGJtUmxaQ2tnUHlCZ0pIdDBhR2x6TG5CeWIzQnpMbUpoYzJWRGMzTkRiR0Z6YzMxZlgySjFkSFJ2YmlBa2UzUm9hWE11Y0hKdmNITXVZbUZ6WlVOemMwTnNZWE56ZlY5ZlluVjBkRzl1TFMxbGVIQmhibVJsWkdBZ09pQmdKSHQwYUdsekxuQnliM0J6TG1KaGMyVkRjM05EYkdGemMzMWZYMkoxZEhSdmJtQTdYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdjbVYwZFhKdUlDaGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnUEdScGRpQnJaWGs5ZTF3aVlXTmpiM0prYVc5dUxXbHVaR1Y0WENJZ0t5QnBibVJsZUgxY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUdOc1lYTnpUbUZ0WlQxN2RHaHBjeTV3Y205d2N5NWlZWE5sUTNOelEyeGhjM01nS3lBblgxOXBkR1Z0SjMxY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUdSaGRHRXRZMjF3TFdsdVpHVjRQWHRwYm1SbGVIMWNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lHUmhkR0V0WTIxd0xXVjRjR0Z1WkdWa1BYdHBjMFY0Y0dGdVpHVmtmVDVjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCU1pXRmpkQzVqY21WaGRHVkZiR1Z0Wlc1MEtGeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCZ0pIdDBhR2x6TG5CeWIzQnpMbWhsWVdScGJtZEZiR1Z0Wlc1MElIeDhJQ2RvTXlkOVlDeGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdZMnhoYzNOT1lXMWxPaUIwYUdsekxuQnliM0J6TG1KaGMyVkRjM05EYkdGemN5QXJJQ2RmWDJobFlXUmxjaWNzWEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJSDBzWEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJSFJvYVhNdWNtVnVaR1Z5U0dWaFpHbHVaMEoxZEhSdmJpaHJaWGtzYVhSbGJTeGlkWFIwYjI1RGMzTkRiR0Z6Y3lsY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQXBYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQjlYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQjdkR2hwY3k1a2FYTndiR0Y1U1hSbGJTaHJaWGtzSUdselJYaHdZVzVrWldRcGZWeHVYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUR3dlpHbDJQbHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ2xjYmlBZ0lDQWdJQ0FnSUNBZ0lIMHBYRzRnSUNBZ0lDQWdJQ2s3WEc0Z0lDQWdmVnh1WEc0Z0lDQWdjbVZ1WkdWeUtDa2dlMXh1WEc0Z0lDQWdJQ0FnSUdOdmJuTjBJR2x6Ulcxd2RIa2dQU0JCWTJOdmNtUnBiMjVXTVVselJXMXdkSGxHYmloMGFHbHpMbkJ5YjNCektUdGNibHh1SUNBZ0lDQWdJQ0J5WlhSMWNtNGdLRnh1SUNBZ0lDQWdJQ0FnSUNBZ1BHUnBkaUI3TGk0dWRHaHBjeTVoWTJOdmNtUnBiMjVEYjI1MFlXbHVaWEpRY205d2MzMCtYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdleUFoYVhORmJYQjBlU0FtSmlCMGFHbHpMbUZqWTI5eVpHbHZia052Ym5SbGJuUWdmVnh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJSHNnZEdocGN5NXdiR0ZqWldodmJHUmxja052YlhCdmJtVnVkQ0I5WEc0Z0lDQWdJQ0FnSUNBZ0lDQThMMlJwZGo1Y2JpQWdJQ0FnSUNBZ0tWeHVJQ0FnSUgxY2JseHVmVnh1WEc1bGVIQnZjblFnWkdWbVlYVnNkQ0IzYVhSb1UzUmhibVJoY21SQ1lYTmxRM056UTJ4aGMzTW9kMmwwYUVGMWRHaHZjbEJoYm1Wc1UzZHBkR05vS0VGalkyOXlaR2x2YmxZeFNXMXdiQ2tzSUZ3aVkyMXdMV0ZqWTI5eVpHbHZibHdpS1RzaVhYMD0iLCIvKlxuICogIENvcHlyaWdodCAyMDIwIEFkb2JlXG4gKlxuICogIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiAgeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICAgICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqICBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiAgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiAgU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5leHBvcnQgZnVuY3Rpb24gQWNjb3JkaW9uVjFJc0VtcHR5Rm4ocHJvcHMpIHtcbiAgICByZXR1cm4gcHJvcHMuY3FJdGVtc09yZGVyID09IG51bGwgfHwgcHJvcHMuY3FJdGVtc09yZGVyLmxlbmd0aCA9PSAwO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pUVdOamIzSmthVzl1VmpGSmMwVnRjSFI1Um00dWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUlpd2ljMjkxY21ObGN5STZXeUpCWTJOdmNtUnBiMjVXTVVselJXMXdkSGxHYmk1MGN5SmRMQ0p1WVcxbGN5STZXMTBzSW0xaGNIQnBibWR6SWpvaVFVRkJRVHM3T3pzN096czdPenM3T3pzN1IwRmpSenRCUVVsSUxFMUJRVTBzVlVGQlZTeHZRa0ZCYjBJc1EwRkJReXhMUVVFeVFqdEpRVU0xUkN4UFFVRlBMRXRCUVVzc1EwRkJReXhaUVVGWkxFbEJRVWtzU1VGQlNTeEpRVUZKTEV0QlFVc3NRMEZCUXl4WlFVRlpMRU5CUVVNc1RVRkJUU3hKUVVGSkxFTkJRVU1zUTBGQlF6dEJRVU40UlN4RFFVRkRJaXdpYzI5MWNtTmxjME52Ym5SbGJuUWlPbHNpTHlwY2JpQXFJQ0JEYjNCNWNtbG5hSFFnTWpBeU1DQkJaRzlpWlZ4dUlDcGNiaUFxSUNCTWFXTmxibk5sWkNCMWJtUmxjaUIwYUdVZ1FYQmhZMmhsSUV4cFkyVnVjMlVzSUZabGNuTnBiMjRnTWk0d0lDaDBhR1VnWENKTWFXTmxibk5sWENJcE8xeHVJQ29nSUhsdmRTQnRZWGtnYm05MElIVnpaU0IwYUdseklHWnBiR1VnWlhoalpYQjBJR2x1SUdOdmJYQnNhV0Z1WTJVZ2QybDBhQ0IwYUdVZ1RHbGpaVzV6WlM1Y2JpQXFJQ0JaYjNVZ2JXRjVJRzlpZEdGcGJpQmhJR052Y0hrZ2IyWWdkR2hsSUV4cFkyVnVjMlVnWVhSY2JpQXFYRzRnS2lBZ0lDQWdJR2gwZEhBNkx5OTNkM2N1WVhCaFkyaGxMbTl5Wnk5c2FXTmxibk5sY3k5TVNVTkZUbE5GTFRJdU1GeHVJQ3BjYmlBcUlDQlZibXhsYzNNZ2NtVnhkV2x5WldRZ1lua2dZWEJ3YkdsallXSnNaU0JzWVhjZ2IzSWdZV2R5WldWa0lIUnZJR2x1SUhkeWFYUnBibWNzSUhOdlpuUjNZWEpsWEc0Z0tpQWdaR2x6ZEhKcFluVjBaV1FnZFc1a1pYSWdkR2hsSUV4cFkyVnVjMlVnYVhNZ1pHbHpkSEpwWW5WMFpXUWdiMjRnWVc0Z1hDSkJVeUJKVTF3aUlFSkJVMGxUTEZ4dUlDb2dJRmRKVkVoUFZWUWdWMEZTVWtGT1ZFbEZVeUJQVWlCRFQwNUVTVlJKVDA1VElFOUdJRUZPV1NCTFNVNUVMQ0JsYVhSb1pYSWdaWGh3Y21WemN5QnZjaUJwYlhCc2FXVmtMbHh1SUNvZ0lGTmxaU0IwYUdVZ1RHbGpaVzV6WlNCbWIzSWdkR2hsSUhOd1pXTnBabWxqSUd4aGJtZDFZV2RsSUdkdmRtVnlibWx1WnlCd1pYSnRhWE56YVc5dWN5QmhibVJjYmlBcUlDQnNhVzFwZEdGMGFXOXVjeUIxYm1SbGNpQjBhR1VnVEdsalpXNXpaUzVjYmlBcUwxeHVYRzVwYlhCdmNuUWdlMEZqWTI5eVpHbHZibFl4VUhKdmNHVnlkR2xsYzMwZ1puSnZiU0JjSWk0dlFXTmpiM0prYVc5dVZqRmNJanRjYmx4dVpYaHdiM0owSUdaMWJtTjBhVzl1SUVGalkyOXlaR2x2YmxZeFNYTkZiWEIwZVVadUtIQnliM0J6T2tGalkyOXlaR2x2YmxZeFVISnZjR1Z5ZEdsbGN5bDdYRzRnSUNBZ2NtVjBkWEp1SUhCeWIzQnpMbU54U1hSbGJYTlBjbVJsY2lBOVBTQnVkV3hzSUh4OElIQnliM0J6TG1OeFNYUmxiWE5QY21SbGNpNXNaVzVuZEdnZ1BUMGdNRHRjYm4waVhYMD0iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAYWRvYmUvYWVtLXJlYWN0LWVkaXRhYmxlLWNvbXBvbmVudHNcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==