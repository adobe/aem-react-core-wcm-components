(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ContainerV1"],{

/***/ "../../react-spa-components/dist/container/container/v1/ContainerV1.js":
/*!*******************************************************************************************************************************!*\
  !*** /Users/raaijmak/workspace/aem-react-core-wcm-components/react-spa-components/dist/container/container/v1/ContainerV1.js ***!
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

      return __webpack_require__(__webpack_require__.s = 4);
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
      "./src/container/container/v1/ContainerV1.tsx":
      /*!****************************************************!*\
        !*** ./src/container/container/v1/ContainerV1.tsx ***!
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


        var _adobe_aem_react_editable_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
        /*! @adobe/aem-react-editable-components */
        "@adobe/aem-react-editable-components");
        /* harmony import */


        var _adobe_aem_react_editable_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_adobe_aem_react_editable_components__WEBPACK_IMPORTED_MODULE_1__);
        /* harmony import */


        var _AbstractCoreContainerComponent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
        /*! ../../../AbstractCoreContainerComponent */
        "./src/AbstractCoreContainerComponent.tsx");
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


        class ContainerV1Impl extends _adobe_aem_react_editable_components__WEBPACK_IMPORTED_MODULE_1__["Container"] {
          constructor(props) {
            super(props); //@ts-ignore

            this.state = {
              componentMapping: this.props.componentMapping || _adobe_aem_react_editable_components__WEBPACK_IMPORTED_MODULE_1__["ComponentMapping"]
            };
            this.mainDiv = react__WEBPACK_IMPORTED_MODULE_0___default.a.createRef();
          }

          componentDidMount() {
            if (this.mainDiv.current) {
              this.mainDiv.current.setAttribute('style', this.props.backgroundStyle);
            }
          }

          componentDidUpdate() {
            if (this.mainDiv.current) {
              this.mainDiv.current.setAttribute('style', this.props.backgroundStyle);
            }
          }

          get coreContainerProps() {
            return {
              className: 'container responsivegrid'
            };
          }

          render() {
            const {
              componentMapping,
              allowedComponents,
              children,
              cqPath,
              cqItems,
              cqItemsOrder,
              isInEditor,
              ...otherProps
            } = this.props;
            const gridProps = {
              allowedComponents: this.props.allowedComponents,
              gridClassNames: this.props.gridClassNames,
              columnClassNames: this.props.columnClassNames,
              cqItems: this.props.cqItems,
              cqItemsOrder: this.props.cqItemsOrder,
              title: "",
              cqPath: this.props.cqPath,
              isInEditor: false
            };
            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", Object.assign({}, this.coreContainerProps), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
              ref: this.mainDiv,
              id: this.props.id,
              className: this.props.baseCssClass
            }, this.props.layout && this.props.layout === 'simple' && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_adobe_aem_react_editable_components__WEBPACK_IMPORTED_MODULE_1__["Container"], {
              componentMapping: this.state.componentMapping,
              cqForceReload: this.props.cqForceReload,
              cqPath: this.props.cqPath,
              cqItems: this.props.cqItems,
              cqItemsOrder: this.props.cqItemsOrder,
              isInEditor: false
            }, this.childComponents), (!this.props.layout || this.props.layout !== 'simple') && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_adobe_aem_react_editable_components__WEBPACK_IMPORTED_MODULE_1__["ResponsiveGrid"], Object.assign({}, gridProps))));
          }

        }
        /* harmony default export */


        __webpack_exports__["default"] = Object(_AbstractCoreContainerComponent__WEBPACK_IMPORTED_MODULE_2__["withStandardBaseCssClass"])(ContainerV1Impl, "cmp-container"); //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ29udGFpbmVyVjEuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJDb250YWluZXJWMS50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7O0dBY0c7QUFFSCxPQUFPLEtBQWtCLE1BQU0sT0FBTyxDQUFDO0FBRXZDLE9BQU8sRUFBQyxnQkFBZ0IsRUFBRSxTQUFTLEVBQUUsY0FBYyxFQUEyQixNQUFNLHNDQUFzQyxDQUFDO0FBQzNILE9BQU8sRUFBOEMsd0JBQXdCLEVBQUMsTUFBTSx5Q0FBeUMsQ0FBQztBQVM5SCxNQUFNLGVBQWdCLFNBQVEsU0FBbUQ7SUFJN0UsWUFBWSxLQUEyQjtRQUNuQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7UUFFYixZQUFZO1FBQ1osSUFBSSxDQUFDLEtBQUssR0FBRztZQUNULGdCQUFnQixFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsZ0JBQWdCLElBQUksZ0JBQWdCO1NBQ3BFLENBQUM7UUFDRixJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQyxTQUFTLEVBQUUsQ0FBQztJQUNyQyxDQUFDO0lBRUQsaUJBQWlCO1FBQ2IsSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sRUFBRTtZQUN0QixJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsZUFBZSxDQUFDLENBQUM7U0FDMUU7SUFFTCxDQUFDO0lBRUQsa0JBQWtCO1FBQ2QsSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sRUFBRTtZQUN0QixJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsZUFBZSxDQUFDLENBQUM7U0FDMUU7SUFDTCxDQUFDO0lBRUQsSUFBSSxrQkFBa0I7UUFDbEIsT0FBTztZQUNILFNBQVMsRUFBRSwwQkFBMEI7U0FDeEMsQ0FBQztJQUNOLENBQUM7SUFHRCxNQUFNO1FBQ0QsTUFBTSxFQUFDLGdCQUFnQixFQUFDLGlCQUFpQixFQUFDLFFBQVEsRUFBQyxNQUFNLEVBQUMsT0FBTyxFQUFDLFlBQVksRUFBQyxVQUFVLEVBQUUsR0FBRyxVQUFVLEVBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDO1FBRXZILE1BQU0sU0FBUyxHQUE0QjtZQUN4QyxpQkFBaUIsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLGlCQUFpQjtZQUMvQyxjQUFjLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxjQUFjO1lBQ3pDLGdCQUFnQixFQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsZ0JBQWdCO1lBQzVDLE9BQU8sRUFBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU87WUFDMUIsWUFBWSxFQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsWUFBWTtZQUNwQyxLQUFLLEVBQUMsRUFBRTtZQUNSLE1BQU0sRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU07WUFDekIsVUFBVSxFQUFDLEtBQUs7U0FDbEIsQ0FBQTtRQUNGLE9BQU8sQ0FDSCw2Q0FBUyxJQUFJLENBQUMsa0JBQWtCO1lBQzVCLDZCQUFLLEdBQUcsRUFBRSxJQUFJLENBQUMsT0FBTyxFQUNqQixFQUFFLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFLEVBQ2pCLFNBQVMsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLFlBQVk7Z0JBRWxDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEtBQUssUUFBUSxDQUFDO29CQUM1QyxvQkFBQyxTQUFTLElBQ1IsZ0JBQWdCLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxnQkFBZ0IsRUFDN0MsYUFBYSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsYUFBYSxFQUN2QyxNQUFNLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQ3pCLE9BQU8sRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sRUFDM0IsWUFBWSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsWUFBWSxFQUNyQyxVQUFVLEVBQUUsS0FBSyxJQUNaLElBQUksQ0FBQyxlQUFlLENBQ2I7Z0JBRXZCLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sS0FBSyxRQUFRLENBQUM7b0JBQzNDLG9CQUFDLGNBQWMsb0JBQUssU0FBUyxFQUFtQixDQUkxRCxDQUNKLENBQ1QsQ0FBQTtJQUNMLENBQUM7Q0FFSjtBQUVELGVBQWUsd0JBQXdCLENBQUMsZUFBZSxFQUFFLGVBQWUsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqICBDb3B5cmlnaHQgMjAyMCBBZG9iZVxuICpcbiAqICBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqICBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgICAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqICBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiAgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqICBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuXG5pbXBvcnQgUmVhY3QsIHtSZWZPYmplY3R9IGZyb20gXCJyZWFjdFwiO1xuXG5pbXBvcnQge0NvbXBvbmVudE1hcHBpbmcsIENvbnRhaW5lciwgUmVzcG9uc2l2ZUdyaWQsIFJlc3BvbnNpdmVHcmlkUHJvcGVydGllc30gZnJvbSAnQGFkb2JlL2FlbS1yZWFjdC1lZGl0YWJsZS1jb21wb25lbnRzJztcbmltcG9ydCB7Q29yZUNvbnRhaW5lclByb3BlcnRpZXMsIENvcmVDb250YWluZXJTdGF0ZSwgd2l0aFN0YW5kYXJkQmFzZUNzc0NsYXNzfSBmcm9tICcuLi8uLi8uLi9BYnN0cmFjdENvcmVDb250YWluZXJDb21wb25lbnQnO1xuXG5leHBvcnQgaW50ZXJmYWNlIENvbnRhaW5lclYxUHJvcGVydGllcyBleHRlbmRzIENvcmVDb250YWluZXJQcm9wZXJ0aWVzLFJlc3BvbnNpdmVHcmlkUHJvcGVydGllc3tcbiAgICBiYWNrZ3JvdW5kU3R5bGU6c3RyaW5nO1xuICAgIGlkOnN0cmluZztcbiAgICBsYXlvdXQ/OiAncmVzcG9uc2l2ZUdyaWQnIHwgJ3NpbXBsZSc7XG59XG5cblxuY2xhc3MgQ29udGFpbmVyVjFJbXBsIGV4dGVuZHMgQ29udGFpbmVyPENvbnRhaW5lclYxUHJvcGVydGllcyxDb3JlQ29udGFpbmVyU3RhdGU+IHtcblxuICAgIG1haW5EaXY6UmVmT2JqZWN0PEhUTUxEaXZFbGVtZW50PjtcblxuICAgIGNvbnN0cnVjdG9yKHByb3BzOkNvbnRhaW5lclYxUHJvcGVydGllcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG5cbiAgICAgICAgLy9AdHMtaWdub3JlXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBjb21wb25lbnRNYXBwaW5nOiB0aGlzLnByb3BzLmNvbXBvbmVudE1hcHBpbmcgfHwgQ29tcG9uZW50TWFwcGluZyxcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5tYWluRGl2ID0gUmVhY3QuY3JlYXRlUmVmKCk7XG4gICAgfVxuXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgIGlmICh0aGlzLm1haW5EaXYuY3VycmVudCkge1xuICAgICAgICAgICAgdGhpcy5tYWluRGl2LmN1cnJlbnQuc2V0QXR0cmlidXRlKCdzdHlsZScsIHRoaXMucHJvcHMuYmFja2dyb3VuZFN0eWxlKTtcbiAgICAgICAgfVxuXG4gICAgfVxuXG4gICAgY29tcG9uZW50RGlkVXBkYXRlKCkge1xuICAgICAgICBpZiAodGhpcy5tYWluRGl2LmN1cnJlbnQpIHtcbiAgICAgICAgICAgIHRoaXMubWFpbkRpdi5jdXJyZW50LnNldEF0dHJpYnV0ZSgnc3R5bGUnLCB0aGlzLnByb3BzLmJhY2tncm91bmRTdHlsZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBnZXQgY29yZUNvbnRhaW5lclByb3BzKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgY2xhc3NOYW1lOiAnY29udGFpbmVyIHJlc3BvbnNpdmVncmlkJ1xuICAgICAgICB9O1xuICAgIH1cblxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICAgY29uc3Qge2NvbXBvbmVudE1hcHBpbmcsYWxsb3dlZENvbXBvbmVudHMsY2hpbGRyZW4sY3FQYXRoLGNxSXRlbXMsY3FJdGVtc09yZGVyLGlzSW5FZGl0b3IsIC4uLm90aGVyUHJvcHN9ID0gdGhpcy5wcm9wcztcblxuICAgICAgICAgY29uc3QgZ3JpZFByb3BzOlJlc3BvbnNpdmVHcmlkUHJvcGVydGllcyA9IHtcbiAgICAgICAgICAgIGFsbG93ZWRDb21wb25lbnRzOiB0aGlzLnByb3BzLmFsbG93ZWRDb21wb25lbnRzLFxuICAgICAgICAgICAgZ3JpZENsYXNzTmFtZXM6IHRoaXMucHJvcHMuZ3JpZENsYXNzTmFtZXMsXG4gICAgICAgICAgICBjb2x1bW5DbGFzc05hbWVzOnRoaXMucHJvcHMuY29sdW1uQ2xhc3NOYW1lcyxcbiAgICAgICAgICAgIGNxSXRlbXM6dGhpcy5wcm9wcy5jcUl0ZW1zLFxuICAgICAgICAgICAgY3FJdGVtc09yZGVyOnRoaXMucHJvcHMuY3FJdGVtc09yZGVyLFxuICAgICAgICAgICAgdGl0bGU6XCJcIixcbiAgICAgICAgICAgIGNxUGF0aDogdGhpcy5wcm9wcy5jcVBhdGgsXG4gICAgICAgICAgICBpc0luRWRpdG9yOmZhbHNlXG4gICAgICAgICB9XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IHsuLi50aGlzLmNvcmVDb250YWluZXJQcm9wc30+XG4gICAgICAgICAgICAgICAgPGRpdiByZWY9e3RoaXMubWFpbkRpdn1cbiAgICAgICAgICAgICAgICAgICAgIGlkPXt0aGlzLnByb3BzLmlkfVxuICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXt0aGlzLnByb3BzLmJhc2VDc3NDbGFzc30+XG5cbiAgICAgICAgICAgICAgICAgICAgeyh0aGlzLnByb3BzLmxheW91dCAmJiB0aGlzLnByb3BzLmxheW91dCA9PT0gJ3NpbXBsZScpICAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENvbnRhaW5lciBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50TWFwcGluZz17dGhpcy5zdGF0ZS5jb21wb25lbnRNYXBwaW5nfSAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3FGb3JjZVJlbG9hZD17dGhpcy5wcm9wcy5jcUZvcmNlUmVsb2FkfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjcVBhdGg9e3RoaXMucHJvcHMuY3FQYXRofVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjcUl0ZW1zPXt0aGlzLnByb3BzLmNxSXRlbXN9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNxSXRlbXNPcmRlcj17dGhpcy5wcm9wcy5jcUl0ZW1zT3JkZXJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzSW5FZGl0b3I9e2ZhbHNlfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLmNoaWxkQ29tcG9uZW50c31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Db250YWluZXI+fVxuXG4gICAgICAgICAgICAgICAgICAgIHsoIXRoaXMucHJvcHMubGF5b3V0IHx8IHRoaXMucHJvcHMubGF5b3V0ICE9PSAnc2ltcGxlJykgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJlc3BvbnNpdmVHcmlkIHsuLi5ncmlkUHJvcHN9PjwvUmVzcG9uc2l2ZUdyaWQ+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIClcbiAgICB9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aFN0YW5kYXJkQmFzZUNzc0NsYXNzKENvbnRhaW5lclYxSW1wbCwgXCJjbXAtY29udGFpbmVyXCIpOyJdfQ==

        /***/
      },

      /***/
      4:
      /*!**********************************************************!*\
        !*** multi ./src/container/container/v1/ContainerV1.tsx ***!
        \**********************************************************/

      /*! no static exports found */

      /***/
      function (module, exports, __webpack_require__) {
        module.exports = __webpack_require__(
        /*! ./src/container/container/v1/ContainerV1.tsx */
        "./src/container/container/v1/ContainerV1.tsx");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9AYWRvYmUvYWVtLWNvcmUtY29tcG9uZW50cy1yZWFjdC1zcGEvd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uPzFhOTEiLCIvQGFkb2JlL2FlbS1jb3JlLWNvbXBvbmVudHMtcmVhY3Qtc3BhL3dlYnBhY2svYm9vdHN0cmFwPzAxYWMiLCIvVXNlcnMvcmFhaWptYWsvd29ya3NwYWNlL2FlbS1yZWFjdC1jb3JlLXdjbS1jb21wb25lbnRzL2V4YW1wbGVzL3JlYWN0LXNwYWNvbXBvbmVudHMtZXhhbXBsZS1wcm9qZWN0L0BhZG9iZS9hZW0tY29yZS1jb21wb25lbnRzLXJlYWN0LXNwYS9zcmMvQWJzdHJhY3RDb3JlQ29udGFpbmVyQ29tcG9uZW50LnRzeCIsIi9Vc2Vycy9yYWFpam1hay93b3Jrc3BhY2UvYWVtLXJlYWN0LWNvcmUtd2NtLWNvbXBvbmVudHMvZXhhbXBsZXMvcmVhY3Qtc3BhY29tcG9uZW50cy1leGFtcGxlLXByb2plY3QvQGFkb2JlL2FlbS1jb3JlLWNvbXBvbmVudHMtcmVhY3Qtc3BhL3NyYy9jb250YWluZXIvY29udGFpbmVyL3YxL0NvbnRhaW5lclYxLnRzeCIsIi9Vc2Vycy9yYWFpam1hay93b3Jrc3BhY2UvYWVtLXJlYWN0LWNvcmUtd2NtLWNvbXBvbmVudHMvZXhhbXBsZXMvcmVhY3Qtc3BhY29tcG9uZW50cy1leGFtcGxlLXByb2plY3Qvd2VicGFjazovQGFkb2JlL2FlbS1jb3JlLWNvbXBvbmVudHMtcmVhY3Qtc3BhL2V4dGVybmFsIFwiQGFkb2JlL2FlbS1yZWFjdC1lZGl0YWJsZS1jb21wb25lbnRzXCIiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFDQSxZQUNBLDJCQURBLEtBRUEsRUFLQTtBQUNDLENBVEQsRUFTQyx5Q0FURCxFQVNDO0FBQ0Q7Ozs7O0FDVkE7QUFBQTs7QUFDQTtBQUFBOzs7QUFFQTtBQUFBOztBQUNBOztBQUFBOzs7QUFFQTtBQUFBOztBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7O0FBQ0E7OztBQUFBO0FBQ0E7QUFBQSxxQkFEQTs7QUFFQTtBQUFBLGtCQUZBOztBQUdBO0FBQUE7QUFDQTs7QUFKQTs7O0FBTUE7QUFBQTs7QUFDQTs7QUFBQTs7O0FBRUE7QUFBQTs7QUFDQTs7QUFBQTs7O0FBRUE7QUFBQTs7QUFDQTs7QUFBQTtBQUNBO0FBQUE7Ozs7O0FBR0E7QUFBQTs7QUFDQTs7O0FBQUE7OztBQUVBO0FBQUE7O0FBQ0E7O0FBQUE7OztBQUVBO0FBQUE7O0FBQ0E7O0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUEwQyw0QkFBMUM7QUFBMEM7QUFBMUM7QUFDQTtBQUFBO0FBQ0E7O0FBQUEsT0FKQTs7O0FBTUE7QUFBQTs7QUFDQTs7O0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUF3RDtBQUF4RDtBQUNBO0FBQUE7QUFDQTs7O0FBQUE7QUFBaUQ7QUFBakQ7QUFDQTtBQUFBLE9BTEE7OztBQU9BO0FBQUE7O0FBQ0E7QUFBQTs7QUFDQTtBQUFBOztBQUNBO0FBQUE7O0FBQ0E7QUFBQTs7QUFDQTs7O0FBQUE7QUFDQTtBQUFBO0FBQ0E7O0FBQUE7QUFDQTs7QUFBQTtBQUNBOztBQUFBO0FBQ0E7O0FBQUE7QUFDQTs7O0FBQUE7QUFBeUMsMEJBQXpDO0FBQXlDO0FBQXpDO0FBQ0E7O0FBQUE7QUFBZ0g7QUFBcUIsU0FBckksQ0FBcUksSUFBckksQ0FBcUksSUFBckksRUFBcUksR0FBckk7QUFDQTs7QUFBQTtBQUNBO0FBQUEsT0FUQTs7O0FBV0E7QUFBQTs7QUFDQTs7O0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUEyQjtBQUE0QixTQUR2RDtBQUVBO0FBQUE7QUFBaUM7QUFBZSxTQUZoRDtBQUdBOztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7QUFBQSxPQU5BOzs7QUFRQTtBQUFBOztBQUNBOzs7QUFBQTtBQUFzRDtBQUErRCxPQUFySDs7O0FBRUE7QUFBQTs7QUFDQTs7O0FBQUE7Ozs7O0FBR0E7QUFBQTs7QUFDQTs7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUFBOzs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7OztBQUFBO0FBQUE7QUFBQTtBQUFBOzs7QUFBQTtBQUFBOzs7Ozs7Ozs7Ozs7Ozs7OztBQWdCQTtBQUNBO0FBQ0E7QUFDQSxXQUZBLENBR0E7QUFDQTtBQUNBO0FBQ0MsU0FQRDs7QUFRTztBQUNQO0FBQ0E7QUFDQTtBQUNBLGtDQUNBLFFBREE7QUFFQTtBQUZBO0FBSUEsbUJBQWUsb0RBQW1CLFNBQW5CLEVBQW1CLGtCQUE0QixXQUE1QixDQUFuQixDQUFmO0FBQ0EsV0FSQTtBQVNBLFNBVk87O0FBV0E7QUFDUCwrQkFBeUIsK0NBQXpCLENBQXdDO0FBQ3hDO0FBQ0E7QUFDQSw4QkFGQSxDQUdBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQSxxQkFBbUIsb0RBQW1CLFNBQW5CLEVBQW1CLGtCQUE0QixVQUE1QixFQUE0QjtBQUFlO0FBQWYsZUFBNUIsQ0FBbkIsQ0FBbkI7QUFDQTs7QUFqQ3dDLFdBQXhDO0FBbUNBLFNBcENPLEMsQ0FxQ1A7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3hFQTtBQUFBOzs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7O0FBQUE7QUFBQTs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7OztBQUFBO0FBQUE7OztBQUFBO0FBQUE7QUFBQTtBQUFBOzs7Ozs7Ozs7Ozs7Ozs7OztBQWtCQSxzQ0FBOEIsOEVBQTlCLENBQXVDO0FBQ3ZDO0FBQ0EseUJBREEsQ0FFQTs7QUFDQTtBQUNBLCtEQUE2RDtBQUQ3RDtBQUdBLDJCQUF1Qiw2Q0FBSyxTQUFMLEVBQXZCO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7O0FBQ0E7QUFDQTtBQUFlLDhCQUFmO0FBQWUsK0JBQWY7QUFBZSxzQkFBZjtBQUFlLG9CQUFmO0FBQWUscUJBQWY7QUFBZSwwQkFBZjtBQUFlLHdCQUFmO0FBQWU7QUFBZixnQkFBeUgsVUFBekg7QUFDQTtBQUNBLDZEQURBO0FBRUEsdURBRkE7QUFHQSwyREFIQTtBQUlBLHlDQUpBO0FBS0EsbURBTEE7QUFNQSx1QkFOQTtBQU9BLHVDQVBBO0FBUUE7QUFSQTtBQVVBLG1CQUFnQiw2Q0FBSyxhQUFMLENBQUssS0FBTCxFQUFLLGtCQUFzQyx1QkFBdEMsQ0FBTCxFQUNKLDZDQUFLLGFBQUwsQ0FBSyxLQUFMLEVBQUs7QUFBdUIsK0JBQXZCO0FBQXVCLCtCQUF2QjtBQUF1QjtBQUF2QixhQUFMLEVBQ1osdURBQ29CLDZDQUFLLGFBQUwsQ0FBb0IsOEVBQXBCLEVBQTZCO0FBQUcsMkRBQUg7QUFBRyxxREFBSDtBQUFHLHVDQUFIO0FBQUcseUNBQUg7QUFBRyxtREFBSDtBQUFHO0FBQUgsYUFBN0IsRUFBMk8sb0JBQTNPLENBRlIsRUFHWiwwREFDb0IsNkNBQUssYUFBTCxDQUFvQixtRkFBcEIsRUFBa0Msa0JBQWtCLFNBQWxCLENBQWxDLENBSlIsQ0FESSxDQUFoQjtBQU1BOztBQTFDdUM7QUE0Q3hCOzs7QUFBQSwwSUFBd0IsZUFBeEIsRUFBd0IsZUFBeEIsRSxDQUNmOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDL0RBOzs7Ozs7Ozs7Ozs7OztBQUFBOzs7Ozs7QUpVQTtDQVZBLEUiLCJmaWxlIjoianMvQ29udGFpbmVyVjEuNzhlZjkyNWQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJAYWRvYmUvYWVtLWNvcmUtY29tcG9uZW50cy1yZWFjdC1zcGFcIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1wiQGFkb2JlL2FlbS1jb3JlLWNvbXBvbmVudHMtcmVhY3Qtc3BhXCJdID0gZmFjdG9yeSgpO1xufSkodHlwZW9mIHNlbGYgIT09ICd1bmRlZmluZWQnID8gc2VsZiA6IHRoaXMsIGZ1bmN0aW9uKCkge1xucmV0dXJuICIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSA0KTtcbiIsIi8qXG4gKiAgQ29weXJpZ2h0IDIwMjAgQWRvYmVcbiAqXG4gKiAgTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqICB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiAgWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICAgICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiAgVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqICBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqICBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiAgbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmNvbnN0IGlzQnJvd3NlciA9ICgoKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgICAgcmV0dXJuIHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnO1xuICAgIH1cbiAgICBjYXRjaCAoZXJyKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG59KSgpO1xuZXhwb3J0IGNvbnN0IHdpdGhTdGFuZGFyZEJhc2VDc3NDbGFzcyA9IChDb21wb25lbnQsIGRlZmF1bHRCYXNlQ3NzQ2xhc3MpID0+IHtcbiAgICByZXR1cm4gKHByb3BzKSA9PiB7XG4gICAgICAgIGNvbnN0IGJhc2VDc3NDbGFzcyA9IHByb3BzLmJhc2VDc3NDbGFzcztcbiAgICAgICAgY29uc3QgdG9CZVVzZWRDc3NDbGFzcyA9IGJhc2VDc3NDbGFzcyAmJiBiYXNlQ3NzQ2xhc3MudHJpbSgpLmxlbmd0aCA+IDAgPyBiYXNlQ3NzQ2xhc3MgOiBkZWZhdWx0QmFzZUNzc0NsYXNzO1xuICAgICAgICBjb25zdCBtZXJnZWRQcm9wcyA9IHtcbiAgICAgICAgICAgIC4uLnByb3BzLFxuICAgICAgICAgICAgYmFzZUNzc0NsYXNzOiB0b0JlVXNlZENzc0NsYXNzXG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KENvbXBvbmVudCwgT2JqZWN0LmFzc2lnbih7fSwgbWVyZ2VkUHJvcHMpKTtcbiAgICB9O1xufTtcbmV4cG9ydCBjb25zdCB3aXRoQXV0aG9yUGFuZWxTd2l0Y2ggPSAoQ29tcG9uZW50KSA9PiB7XG4gICAgcmV0dXJuIGNsYXNzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICAgICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgICAgICAgIHRoaXMuc3RhdGUgPSB7fTtcbiAgICAgICAgICAgIC8vQHRzLWlnbm9yZVxuICAgICAgICAgICAgaWYgKGlzQnJvd3NlciAmJiB3aW5kb3cuR3Jhbml0ZSAmJiB3aW5kb3cuR3Jhbml0ZS5hdXRob3IgJiYgd2luZG93LkdyYW5pdGUuYXV0aG9yLk1lc3NhZ2VDaGFubmVsKSB7XG4gICAgICAgICAgICAgICAgLy9AdHMtaWdub3JlXG4gICAgICAgICAgICAgICAgdGhpcy5tZXNzYWdlQ2hhbm5lbCA9IG5ldyB3aW5kb3cuR3Jhbml0ZS5hdXRob3IuTWVzc2FnZUNoYW5uZWwoXCJjcWF1dGhvclwiLCB3aW5kb3cpO1xuICAgICAgICAgICAgICAgIHRoaXMuY2FsbGJhY2sgPSB0aGlzLmNhbGxiYWNrLmJpbmQodGhpcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY2FsbGJhY2sobWVzc2FnZSkge1xuICAgICAgICAgICAgaWYgKG1lc3NhZ2UuZGF0YSAmJiBtZXNzYWdlLmRhdGEuaWQgPT09IHRoaXMucHJvcHMuY3FQYXRoKSB7XG4gICAgICAgICAgICAgICAgaWYgKG1lc3NhZ2UuZGF0YS5vcGVyYXRpb24gPT09IFwibmF2aWdhdGVcIikge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBpbmRleCA9IG1lc3NhZ2UuZGF0YS5pbmRleDtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICBhY3RpdmVJbmRleEZyb21BdXRob3JQYW5lbDogaW5kZXhcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgICAgICAgaWYgKHRoaXMubWVzc2FnZUNoYW5uZWwpIHtcbiAgICAgICAgICAgICAgICB0aGlzLm1lc3NhZ2VDaGFubmVsLnN1YnNjcmliZVJlcXVlc3RNZXNzYWdlKFwiY21wLnBhbmVsY29udGFpbmVyXCIsIHRoaXMuY2FsbGJhY2spO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgICAgICAgICAgaWYgKHRoaXMubWVzc2FnZUNoYW5uZWwpIHtcbiAgICAgICAgICAgICAgICB0aGlzLm1lc3NhZ2VDaGFubmVsLnVuc3Vic2NyaWJlUmVxdWVzdE1lc3NhZ2UoXCJjbXAucGFuZWxjb250YWluZXJcIiwgdGhpcy5jYWxsYmFjayk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmVuZGVyKCkge1xuICAgICAgICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQ29tcG9uZW50LCBPYmplY3QuYXNzaWduKHt9LCB0aGlzLnByb3BzLCB7IGFjdGl2ZUluZGV4RnJvbUF1dGhvclBhbmVsOiB0aGlzLnN0YXRlLmFjdGl2ZUluZGV4RnJvbUF1dGhvclBhbmVsIH0pKTtcbiAgICAgICAgfVxuICAgIH07XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pUVdKemRISmhZM1JEYjNKbFEyOXVkR0ZwYm1WeVEyOXRjRzl1Wlc1MExtcHpJaXdpYzI5MWNtTmxVbTl2ZENJNklpSXNJbk52ZFhKalpYTWlPbHNpUVdKemRISmhZM1JEYjNKbFEyOXVkR0ZwYm1WeVEyOXRjRzl1Wlc1MExuUnplQ0pkTENKdVlXMWxjeUk2VzEwc0ltMWhjSEJwYm1keklqb2lRVUZCUVRzN096czdPenM3T3pzN096czdSMEZqUnp0QlFVVklMRTlCUVU4c1MwRkJTeXhMUVVGTExFMUJRVTBzVDBGQlR5eERRVUZETzBGQmRVSXZRaXhOUVVGTkxGTkJRVk1zUjBGQlJ5eERRVUZETEVkQlFVY3NSVUZCUlR0SlFVTndRaXhKUVVGSE8xRkJRME1zVDBGQlR5eFBRVUZQTEUxQlFVMHNTMEZCU3l4WFFVRlhMRU5CUVVNN1MwRkRlRU03U1VGQlFTeFBRVUZOTEVkQlFVY3NSVUZCUXp0UlFVTlFMRTlCUVU4c1MwRkJTeXhEUVVGRE8wdEJRMmhDTzBGQlEwd3NRMEZCUXl4RFFVRkRMRVZCUVVVc1EwRkJRenRCUVVkTUxFMUJRVTBzUTBGQlF5eE5RVUZOTEhkQ1FVRjNRaXhIUVVGSExFTkJSWEJETEZOQlFUQkNMRVZCUXpGQ0xHMUNRVUV3UWl4RlFVTktMRVZCUVVVN1NVRkRlRUlzVDBGQlR5eERRVUZETEV0QlFVOHNSVUZCUlN4RlFVRkZPMUZCUldZc1RVRkJUU3haUVVGWkxFZEJRVWNzUzBGQlN5eERRVUZETEZsQlFWa3NRMEZCUXp0UlFVTjRReXhOUVVGTkxHZENRVUZuUWl4SFFVRkhMRmxCUVZrc1NVRkJTU3haUVVGWkxFTkJRVU1zU1VGQlNTeEZRVUZGTEVOQlFVTXNUVUZCVFN4SFFVRkhMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zV1VGQldTeERRVUZETEVOQlFVTXNRMEZCUXl4dFFrRkJiVUlzUTBGQlF6dFJRVVUzUnl4TlFVRk5MRmRCUVZjc1IwRkJTenRaUVVOc1FpeEhRVUZITEV0QlFVczdXVUZEVWl4WlFVRlpMRVZCUVVVc1owSkJRV2RDTzFOQlEycERMRU5CUVVNN1VVRkZSaXhQUVVGUExHOUNRVUZETEZOQlFWTXNiMEpCUVVzc1YwRkJWeXhGUVVGSkxFTkJRVU03U1VGRE1VTXNRMEZCUXl4RFFVRkJPMEZCUTB3c1EwRkJReXhEUVVGRE8wRkJTVVlzVFVGQlRTeERRVUZETEUxQlFVMHNjVUpCUVhGQ0xFZEJRVWNzUTBGRGFrTXNVMEZCTUVJc1JVRkRUQ3hGUVVGRk8wbEJSWFpDTEU5QlFVOHNTMEZCVFN4VFFVRlJMRXRCUVVzc1EwRkJReXhUUVVGdlF6dFJRVXN6UkN4WlFVRlpMRXRCUVU4N1dVRkRaaXhMUVVGTExFTkJRVU1zUzBGQlN5eERRVUZETEVOQlFVTTdXVUZEWWl4SlFVRkpMRU5CUVVNc1MwRkJTeXhIUVVGSExFVkJRVVVzUTBGQlFUdFpRVVZtTEZsQlFWazdXVUZEV2l4SlFVRkpMRk5CUVZNc1NVRkJTU3hOUVVGTkxFTkJRVU1zVDBGQlR5eEpRVUZKTEUxQlFVMHNRMEZCUXl4UFFVRlBMRU5CUVVNc1RVRkJUU3hKUVVGSkxFMUJRVTBzUTBGQlF5eFBRVUZQTEVOQlFVTXNUVUZCVFN4RFFVRkRMR05CUVdNc1JVRkJSVHRuUWtGRE9VWXNXVUZCV1R0blFrRkRXaXhKUVVGSkxFTkJRVU1zWTBGQll5eEhRVUZITEVsQlFVa3NUVUZCVFN4RFFVRkRMRTlCUVU4c1EwRkJReXhOUVVGTkxFTkJRVU1zWTBGQll5eERRVUZETEZWQlFWVXNSVUZCUlN4TlFVRk5MRU5CUVVNc1EwRkJRenRuUWtGRGJrWXNTVUZCU1N4RFFVRkRMRkZCUVZFc1IwRkJSeXhKUVVGSkxFTkJRVU1zVVVGQlVTeERRVUZETEVsQlFVa3NRMEZCUXl4SlFVRkpMRU5CUVVNc1EwRkJRenRoUVVNMVF6dFJRVU5NTEVOQlFVTTdVVUZGUkN4UlFVRlJMRU5CUVVNc1QwRkJWenRaUVVOb1FpeEpRVUZKTEU5QlFVOHNRMEZCUXl4SlFVRkpMRWxCUVVrc1QwRkJUeXhEUVVGRExFbEJRVWtzUTBGQlF5eEZRVUZGTEV0QlFVc3NTVUZCU1N4RFFVRkRMRXRCUVVzc1EwRkJReXhOUVVGTkxFVkJRVVU3WjBKQlEzWkVMRWxCUVVrc1QwRkJUeXhEUVVGRExFbEJRVWtzUTBGQlF5eFRRVUZUTEV0QlFVc3NWVUZCVlN4RlFVRkZPMjlDUVVOMlF5eE5RVUZOTEV0QlFVc3NSMEZCUnl4UFFVRlBMRU5CUVVNc1NVRkJTU3hEUVVGRExFdEJRV1VzUTBGQlF6dHZRa0ZETTBNc1NVRkJTU3hEUVVGRExGRkJRVkVzUTBGQlF6dDNRa0ZEVml3d1FrRkJNRUlzUlVGQlJTeExRVUZMTzNGQ1FVTndReXhEUVVGRExFTkJRVUU3YVVKQlEwdzdZVUZEU2p0UlFVTk1MRU5CUVVNN1VVRkZSQ3hwUWtGQmFVSTdXVUZEWWl4SlFVRkhMRWxCUVVrc1EwRkJReXhqUVVGakxFVkJRVU03WjBKQlEyNUNMRWxCUVVrc1EwRkJReXhqUVVGakxFTkJRVU1zZFVKQlFYVkNMRU5CUVVNc2IwSkJRVzlDTEVWQlFVVXNTVUZCU1N4RFFVRkRMRkZCUVZFc1EwRkJReXhEUVVGRE8yRkJRM0JHTzFGQlEwd3NRMEZCUXp0UlFVVkVMRzlDUVVGdlFqdFpRVU5vUWl4SlFVRkhMRWxCUVVrc1EwRkJReXhqUVVGakxFVkJRVU03WjBKQlEyNUNMRWxCUVVrc1EwRkJReXhqUVVGakxFTkJRVU1zZVVKQlFYbENMRU5CUVVNc2IwSkJRVzlDTEVWQlFVVXNTVUZCU1N4RFFVRkRMRkZCUVZFc1EwRkJReXhEUVVGRE8yRkJRM1JHTzFGQlEwd3NRMEZCUXp0UlFVZEVMRTFCUVUwN1dVRkRSaXhQUVVGUExHOUNRVUZETEZOQlFWTXNiMEpCUVVzc1NVRkJTU3hEUVVGRExFdEJRVXNzU1VGQlJTd3dRa0ZCTUVJc1JVRkJSU3hKUVVGSkxFTkJRVU1zUzBGQlN5eERRVUZETERCQ1FVRXdRaXhKUVVGSkxFTkJRVU03VVVGRE5VY3NRMEZCUXp0TFFVTktMRU5CUVVFN1FVRkZUQ3hEUVVGRExFTkJRVU1pTENKemIzVnlZMlZ6UTI5dWRHVnVkQ0k2V3lJdktseHVJQ29nSUVOdmNIbHlhV2RvZENBeU1ESXdJRUZrYjJKbFhHNGdLbHh1SUNvZ0lFeHBZMlZ1YzJWa0lIVnVaR1Z5SUhSb1pTQkJjR0ZqYUdVZ1RHbGpaVzV6WlN3Z1ZtVnljMmx2YmlBeUxqQWdLSFJvWlNCY0lreHBZMlZ1YzJWY0lpazdYRzRnS2lBZ2VXOTFJRzFoZVNCdWIzUWdkWE5sSUhSb2FYTWdabWxzWlNCbGVHTmxjSFFnYVc0Z1kyOXRjR3hwWVc1alpTQjNhWFJvSUhSb1pTQk1hV05sYm5ObExseHVJQ29nSUZsdmRTQnRZWGtnYjJKMFlXbHVJR0VnWTI5d2VTQnZaaUIwYUdVZ1RHbGpaVzV6WlNCaGRGeHVJQ3BjYmlBcUlDQWdJQ0FnYUhSMGNEb3ZMM2QzZHk1aGNHRmphR1V1YjNKbkwyeHBZMlZ1YzJWekwweEpRMFZPVTBVdE1pNHdYRzRnS2x4dUlDb2dJRlZ1YkdWemN5QnlaWEYxYVhKbFpDQmllU0JoY0hCc2FXTmhZbXhsSUd4aGR5QnZjaUJoWjNKbFpXUWdkRzhnYVc0Z2QzSnBkR2x1Wnl3Z2MyOW1kSGRoY21WY2JpQXFJQ0JrYVhOMGNtbGlkWFJsWkNCMWJtUmxjaUIwYUdVZ1RHbGpaVzV6WlNCcGN5QmthWE4wY21saWRYUmxaQ0J2YmlCaGJpQmNJa0ZUSUVsVFhDSWdRa0ZUU1ZNc1hHNGdLaUFnVjBsVVNFOVZWQ0JYUVZKU1FVNVVTVVZUSUU5U0lFTlBUa1JKVkVsUFRsTWdUMFlnUVU1WklFdEpUa1FzSUdWcGRHaGxjaUJsZUhCeVpYTnpJRzl5SUdsdGNHeHBaV1F1WEc0Z0tpQWdVMlZsSUhSb1pTQk1hV05sYm5ObElHWnZjaUIwYUdVZ2MzQmxZMmxtYVdNZ2JHRnVaM1ZoWjJVZ1oyOTJaWEp1YVc1bklIQmxjbTFwYzNOcGIyNXpJR0Z1WkZ4dUlDb2dJR3hwYldsMFlYUnBiMjV6SUhWdVpHVnlJSFJvWlNCTWFXTmxibk5sTGx4dUlDb3ZYRzVjYm1sdGNHOXlkQ0FxSUdGeklGSmxZV04wSUdaeWIyMGdKM0psWVdOMEp6dGNibHh1YVcxd2IzSjBJSHREYjI1MFlXbHVaWEpUZEdGMFpTd2dRV3hzYjNkbFpFTnZiWEJ2Ym1WdWRITlFjbTl3WlhKMGFXVnpmU0JtY205dElDZEFZV1J2WW1VdllXVnRMWEpsWVdOMExXVmthWFJoWW14bExXTnZiWEJ2Ym1WdWRITW5PMXh1YVcxd2IzSjBJSHREYjIxd2IyNWxiblJVZVhCbGZTQm1jbTl0SUZ3aWNtVmhZM1JjSWp0Y2JtbHRjRzl5ZENCN0lFMXZaR1ZzSUgwZ1puSnZiU0FuUUdGa2IySmxMMkZsYlMxemNHRXRjR0ZuWlMxdGIyUmxiQzF0WVc1aFoyVnlKenRjYmx4dVpYaHdiM0owSUdsdWRHVnlabUZqWlNCRGIzSmxRMjl1ZEdGcGJtVnlVSEp2Y0dWeWRHbGxjeUJsZUhSbGJtUnpJRUZzYkc5M1pXUkRiMjF3YjI1bGJuUnpVSEp2Y0dWeWRHbGxjM3RjYmlBZ0lDQmlZWE5sUTNOelEyeGhjM00vT25OMGNtbHVaenRjYmlBZ0lDQmhZM1JwZG1WSmJtUmxlRVp5YjIxQmRYUm9iM0pRWVc1bGJEODZiblZ0WW1WeVhHNTlYRzVjYm1WNGNHOXlkQ0JwYm5SbGNtWmhZMlVnUTI5eVpVTnZiblJoYVc1bGNrbDBaVzBnWlhoMFpXNWtjeUJOYjJSbGJDQjdYRzRnSUNBZ0oyTnhPbkJoYm1Wc1ZHbDBiR1VuT2lCemRISnBibWRjYm4xY2JseHVaWGh3YjNKMElHbHVkR1Z5Wm1GalpTQkRiM0psUTI5dWRHRnBibVZ5VTNSaGRHVWdaWGgwWlc1a2N5QkRiMjUwWVdsdVpYSlRkR0YwWlNCN1hHNWNibjFjYmx4dVpYaHdiM0owSUdsdWRHVnlabUZqWlNCQmRYUm9iM0pRWVc1bGJGTjNhWFJqYUZOMFlYUmxJSHRjYmlBZ0lDQmhZM1JwZG1WSmJtUmxlRVp5YjIxQmRYUm9iM0pRWVc1bGJEODZJRzUxYldKbGNseHVmVnh1WEc1amIyNXpkQ0JwYzBKeWIzZHpaWElnUFNBb0tDa2dQVDRnZTF4dUlDQWdJSFJ5ZVh0Y2JpQWdJQ0FnSUNBZ2NtVjBkWEp1SUhSNWNHVnZaaUIzYVc1a2IzY2dJVDA5SUNkMWJtUmxabWx1WldRbk8xeHVJQ0FnSUgxallYUmphQ2hsY25JcGUxeHVJQ0FnSUNBZ0lDQnlaWFIxY200Z1ptRnNjMlU3WEc0Z0lDQWdmVnh1ZlNrb0tUdGNibHh1WEc1bGVIQnZjblFnWTI5dWMzUWdkMmwwYUZOMFlXNWtZWEprUW1GelpVTnpjME5zWVhOeklEMGdQRTBnWlhoMFpXNWtjeUJEYjNKbFEyOXVkR0ZwYm1WeVVISnZjR1Z5ZEdsbGN6NWNiaWhjYmlBZ0lDQkRiMjF3YjI1bGJuUTZRMjl0Y0c5dVpXNTBWSGx3WlR4TlBpeGNiaUFnSUNCa1pXWmhkV3gwUW1GelpVTnpjME5zWVhOek9uTjBjbWx1WjF4dUtUcFNaV0ZqZEM1RGIyMXdiMjVsYm5SVWVYQmxQRTArSUNBOVBpQjdYRzRnSUNBZ2NtVjBkWEp1SUNod2NtOXdjenBOS1NBOVBpQjdYRzVjYmlBZ0lDQWdJQ0FnWTI5dWMzUWdZbUZ6WlVOemMwTnNZWE56SUQwZ2NISnZjSE11WW1GelpVTnpjME5zWVhOek8xeHVJQ0FnSUNBZ0lDQmpiMjV6ZENCMGIwSmxWWE5sWkVOemMwTnNZWE56SUQwZ1ltRnpaVU56YzBOc1lYTnpJQ1ltSUdKaGMyVkRjM05EYkdGemN5NTBjbWx0S0NrdWJHVnVaM1JvSUQ0Z01DQS9JR0poYzJWRGMzTkRiR0Z6Y3lBNklHUmxabUYxYkhSQ1lYTmxRM056UTJ4aGMzTTdYRzVjYmlBZ0lDQWdJQ0FnWTI5dWMzUWdiV1Z5WjJWa1VISnZjSE02SUUwOUlIdGNiaUFnSUNBZ0lDQWdJQ0FnSUM0dUxuQnliM0J6TEZ4dUlDQWdJQ0FnSUNBZ0lDQWdZbUZ6WlVOemMwTnNZWE56T2lCMGIwSmxWWE5sWkVOemMwTnNZWE56WEc0Z0lDQWdJQ0FnSUgwN1hHNWNiaUFnSUNBZ0lDQWdjbVYwZFhKdUlEeERiMjF3YjI1bGJuUWdleTR1TG0xbGNtZGxaRkJ5YjNCemZTQXZQanRjYmlBZ0lDQjlYRzU5TzF4dVhHNWNibHh1Wlhod2IzSjBJR052Ym5OMElIZHBkR2hCZFhSb2IzSlFZVzVsYkZOM2FYUmphQ0E5SUR4TklHVjRkR1Z1WkhNZ1EyOXlaVU52Ym5SaGFXNWxjbEJ5YjNCbGNuUnBaWE0rS0Z4dUlDQWdJRU52YlhCdmJtVnVkRHBEYjIxd2IyNWxiblJVZVhCbFBFMCtYRzRwT2xKbFlXTjBMa052YlhCdmJtVnVkRlI1Y0dVOFRUNGdQVDRnZTF4dVhHNGdJQ0FnY21WMGRYSnVJR05zWVhOeklHVjRkR1Z1WkhNZ1VtVmhZM1F1UTI5dGNHOXVaVzUwUEUwc0lFRjFkR2h2Y2xCaGJtVnNVM2RwZEdOb1UzUmhkR1UrSUh0Y2JseHVJQ0FnSUNBZ0lDQXZMMEIwY3kxcFoyNXZjbVZjYmlBZ0lDQWdJQ0FnYldWemMyRm5aVU5vWVc1dVpXdzdYRzVjYmlBZ0lDQWdJQ0FnWTI5dWMzUnlkV04wYjNJb2NISnZjSE02VFNrZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnYzNWd1pYSW9jSEp2Y0hNcE8xeHVJQ0FnSUNBZ0lDQWdJQ0FnZEdocGN5NXpkR0YwWlNBOUlIdDlYRzVjYmlBZ0lDQWdJQ0FnSUNBZ0lDOHZRSFJ6TFdsbmJtOXlaVnh1SUNBZ0lDQWdJQ0FnSUNBZ2FXWWdLR2x6UW5KdmQzTmxjaUFtSmlCM2FXNWtiM2N1UjNKaGJtbDBaU0FtSmlCM2FXNWtiM2N1UjNKaGJtbDBaUzVoZFhSb2IzSWdKaVlnZDJsdVpHOTNMa2R5WVc1cGRHVXVZWFYwYUc5eUxrMWxjM05oWjJWRGFHRnVibVZzS1NCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0x5OUFkSE10YVdkdWIzSmxYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdkR2hwY3k1dFpYTnpZV2RsUTJoaGJtNWxiQ0E5SUc1bGR5QjNhVzVrYjNjdVIzSmhibWwwWlM1aGRYUm9iM0l1VFdWemMyRm5aVU5vWVc1dVpXd29YQ0pqY1dGMWRHaHZjbHdpTENCM2FXNWtiM2NwTzF4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUhSb2FYTXVZMkZzYkdKaFkyc2dQU0IwYUdsekxtTmhiR3hpWVdOckxtSnBibVFvZEdocGN5azdYRzRnSUNBZ0lDQWdJQ0FnSUNCOVhHNGdJQ0FnSUNBZ0lIMWNibHh1SUNBZ0lDQWdJQ0JqWVd4c1ltRmpheWh0WlhOellXZGxPbUZ1ZVNsN1hHNGdJQ0FnSUNBZ0lDQWdJQ0JwWmlBb2JXVnpjMkZuWlM1a1lYUmhJQ1ltSUcxbGMzTmhaMlV1WkdGMFlTNXBaQ0E5UFQwZ2RHaHBjeTV3Y205d2N5NWpjVkJoZEdncElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQnBaaUFvYldWemMyRm5aUzVrWVhSaExtOXdaWEpoZEdsdmJpQTlQVDBnWENKdVlYWnBaMkYwWlZ3aUtTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUdOdmJuTjBJR2x1WkdWNElEMGdiV1Z6YzJGblpTNWtZWFJoTG1sdVpHVjRJR0Z6SUc1MWJXSmxjanRjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2RHaHBjeTV6WlhSVGRHRjBaU2g3WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0JoWTNScGRtVkpibVJsZUVaeWIyMUJkWFJvYjNKUVlXNWxiRG9nYVc1a1pYaGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnZlNsY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCOVhHNGdJQ0FnSUNBZ0lDQWdJQ0I5WEc0Z0lDQWdJQ0FnSUgxY2JseHVJQ0FnSUNBZ0lDQmpiMjF3YjI1bGJuUkVhV1JOYjNWdWRDZ3BPaUIyYjJsa0lIdGNiaUFnSUNBZ0lDQWdJQ0FnSUdsbUtIUm9hWE11YldWemMyRm5aVU5vWVc1dVpXd3BlMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJSFJvYVhNdWJXVnpjMkZuWlVOb1lXNXVaV3d1YzNWaWMyTnlhV0psVW1WeGRXVnpkRTFsYzNOaFoyVW9YQ0pqYlhBdWNHRnVaV3hqYjI1MFlXbHVaWEpjSWl3Z2RHaHBjeTVqWVd4c1ltRmpheWs3WEc0Z0lDQWdJQ0FnSUNBZ0lDQjlYRzRnSUNBZ0lDQWdJSDFjYmx4dUlDQWdJQ0FnSUNCamIyMXdiMjVsYm5SWGFXeHNWVzV0YjNWdWRDZ3BPaUIyYjJsa0lIdGNiaUFnSUNBZ0lDQWdJQ0FnSUdsbUtIUm9hWE11YldWemMyRm5aVU5vWVc1dVpXd3BlMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJSFJvYVhNdWJXVnpjMkZuWlVOb1lXNXVaV3d1ZFc1emRXSnpZM0pwWW1WU1pYRjFaWE4wVFdWemMyRm5aU2hjSW1OdGNDNXdZVzVsYkdOdmJuUmhhVzVsY2x3aUxDQjBhR2x6TG1OaGJHeGlZV05yS1R0Y2JpQWdJQ0FnSUNBZ0lDQWdJSDFjYmlBZ0lDQWdJQ0FnZlZ4dVhHNWNiaUFnSUNBZ0lDQWdjbVZ1WkdWeUtDbDdYRzRnSUNBZ0lDQWdJQ0FnSUNCeVpYUjFjbTRnUEVOdmJYQnZibVZ1ZENCN0xpNHVkR2hwY3k1d2NtOXdjMzBnWVdOMGFYWmxTVzVrWlhoR2NtOXRRWFYwYUc5eVVHRnVaV3c5ZTNSb2FYTXVjM1JoZEdVdVlXTjBhWFpsU1c1a1pYaEdjbTl0UVhWMGFHOXlVR0Z1Wld4OUlDOCtPMXh1SUNBZ0lDQWdJQ0I5WEc0Z0lDQWdmVnh1WEc1OU8xeHVJbDE5IiwiLypcbiAqICBDb3B5cmlnaHQgMjAyMCBBZG9iZVxuICpcbiAqICBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqICBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgICAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqICBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiAgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqICBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgQ29tcG9uZW50TWFwcGluZywgQ29udGFpbmVyLCBSZXNwb25zaXZlR3JpZCB9IGZyb20gJ0BhZG9iZS9hZW0tcmVhY3QtZWRpdGFibGUtY29tcG9uZW50cyc7XG5pbXBvcnQgeyB3aXRoU3RhbmRhcmRCYXNlQ3NzQ2xhc3MgfSBmcm9tICcuLi8uLi8uLi9BYnN0cmFjdENvcmVDb250YWluZXJDb21wb25lbnQnO1xuY2xhc3MgQ29udGFpbmVyVjFJbXBsIGV4dGVuZHMgQ29udGFpbmVyIHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgICAgIC8vQHRzLWlnbm9yZVxuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgY29tcG9uZW50TWFwcGluZzogdGhpcy5wcm9wcy5jb21wb25lbnRNYXBwaW5nIHx8IENvbXBvbmVudE1hcHBpbmcsXG4gICAgICAgIH07XG4gICAgICAgIHRoaXMubWFpbkRpdiA9IFJlYWN0LmNyZWF0ZVJlZigpO1xuICAgIH1cbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgaWYgKHRoaXMubWFpbkRpdi5jdXJyZW50KSB7XG4gICAgICAgICAgICB0aGlzLm1haW5EaXYuY3VycmVudC5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgdGhpcy5wcm9wcy5iYWNrZ3JvdW5kU3R5bGUpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGNvbXBvbmVudERpZFVwZGF0ZSgpIHtcbiAgICAgICAgaWYgKHRoaXMubWFpbkRpdi5jdXJyZW50KSB7XG4gICAgICAgICAgICB0aGlzLm1haW5EaXYuY3VycmVudC5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgdGhpcy5wcm9wcy5iYWNrZ3JvdW5kU3R5bGUpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGdldCBjb3JlQ29udGFpbmVyUHJvcHMoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBjbGFzc05hbWU6ICdjb250YWluZXIgcmVzcG9uc2l2ZWdyaWQnXG4gICAgICAgIH07XG4gICAgfVxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgY29uc3QgeyBjb21wb25lbnRNYXBwaW5nLCBhbGxvd2VkQ29tcG9uZW50cywgY2hpbGRyZW4sIGNxUGF0aCwgY3FJdGVtcywgY3FJdGVtc09yZGVyLCBpc0luRWRpdG9yLCAuLi5vdGhlclByb3BzIH0gPSB0aGlzLnByb3BzO1xuICAgICAgICBjb25zdCBncmlkUHJvcHMgPSB7XG4gICAgICAgICAgICBhbGxvd2VkQ29tcG9uZW50czogdGhpcy5wcm9wcy5hbGxvd2VkQ29tcG9uZW50cyxcbiAgICAgICAgICAgIGdyaWRDbGFzc05hbWVzOiB0aGlzLnByb3BzLmdyaWRDbGFzc05hbWVzLFxuICAgICAgICAgICAgY29sdW1uQ2xhc3NOYW1lczogdGhpcy5wcm9wcy5jb2x1bW5DbGFzc05hbWVzLFxuICAgICAgICAgICAgY3FJdGVtczogdGhpcy5wcm9wcy5jcUl0ZW1zLFxuICAgICAgICAgICAgY3FJdGVtc09yZGVyOiB0aGlzLnByb3BzLmNxSXRlbXNPcmRlcixcbiAgICAgICAgICAgIHRpdGxlOiBcIlwiLFxuICAgICAgICAgICAgY3FQYXRoOiB0aGlzLnByb3BzLmNxUGF0aCxcbiAgICAgICAgICAgIGlzSW5FZGl0b3I6IGZhbHNlXG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCBPYmplY3QuYXNzaWduKHt9LCB0aGlzLmNvcmVDb250YWluZXJQcm9wcyksXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgcmVmOiB0aGlzLm1haW5EaXYsIGlkOiB0aGlzLnByb3BzLmlkLCBjbGFzc05hbWU6IHRoaXMucHJvcHMuYmFzZUNzc0NsYXNzIH0sXG4gICAgICAgICAgICAgICAgKHRoaXMucHJvcHMubGF5b3V0ICYmIHRoaXMucHJvcHMubGF5b3V0ID09PSAnc2ltcGxlJykgJiZcbiAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChDb250YWluZXIsIHsgY29tcG9uZW50TWFwcGluZzogdGhpcy5zdGF0ZS5jb21wb25lbnRNYXBwaW5nLCBjcUZvcmNlUmVsb2FkOiB0aGlzLnByb3BzLmNxRm9yY2VSZWxvYWQsIGNxUGF0aDogdGhpcy5wcm9wcy5jcVBhdGgsIGNxSXRlbXM6IHRoaXMucHJvcHMuY3FJdGVtcywgY3FJdGVtc09yZGVyOiB0aGlzLnByb3BzLmNxSXRlbXNPcmRlciwgaXNJbkVkaXRvcjogZmFsc2UgfSwgdGhpcy5jaGlsZENvbXBvbmVudHMpLFxuICAgICAgICAgICAgICAgICghdGhpcy5wcm9wcy5sYXlvdXQgfHwgdGhpcy5wcm9wcy5sYXlvdXQgIT09ICdzaW1wbGUnKSAmJlxuICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFJlc3BvbnNpdmVHcmlkLCBPYmplY3QuYXNzaWduKHt9LCBncmlkUHJvcHMpKSkpKTtcbiAgICB9XG59XG5leHBvcnQgZGVmYXVsdCB3aXRoU3RhbmRhcmRCYXNlQ3NzQ2xhc3MoQ29udGFpbmVyVjFJbXBsLCBcImNtcC1jb250YWluZXJcIik7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lRMjl1ZEdGcGJtVnlWakV1YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pSWl3aWMyOTFjbU5sY3lJNld5SkRiMjUwWVdsdVpYSldNUzUwYzNnaVhTd2libUZ0WlhNaU9sdGRMQ0p0WVhCd2FXNW5jeUk2SWtGQlFVRTdPenM3T3pzN096czdPenM3TzBkQlkwYzdRVUZGU0N4UFFVRlBMRXRCUVd0Q0xFMUJRVTBzVDBGQlR5eERRVUZETzBGQlJYWkRMRTlCUVU4c1JVRkJReXhuUWtGQlowSXNSVUZCUlN4VFFVRlRMRVZCUVVVc1kwRkJZeXhGUVVFeVFpeE5RVUZOTEhORFFVRnpReXhEUVVGRE8wRkJRek5JTEU5QlFVOHNSVUZCT0VNc2QwSkJRWGRDTEVWQlFVTXNUVUZCVFN4NVEwRkJlVU1zUTBGQlF6dEJRVk01U0N4TlFVRk5MR1ZCUVdkQ0xGTkJRVkVzVTBGQmJVUTdTVUZKTjBVc1dVRkJXU3hMUVVFeVFqdFJRVU51UXl4TFFVRkxMRU5CUVVNc1MwRkJTeXhEUVVGRExFTkJRVU03VVVGRllpeFpRVUZaTzFGQlExb3NTVUZCU1N4RFFVRkRMRXRCUVVzc1IwRkJSenRaUVVOVUxHZENRVUZuUWl4RlFVRkZMRWxCUVVrc1EwRkJReXhMUVVGTExFTkJRVU1zWjBKQlFXZENMRWxCUVVrc1owSkJRV2RDTzFOQlEzQkZMRU5CUVVNN1VVRkRSaXhKUVVGSkxFTkJRVU1zVDBGQlR5eEhRVUZITEV0QlFVc3NRMEZCUXl4VFFVRlRMRVZCUVVVc1EwRkJRenRKUVVOeVF5eERRVUZETzBsQlJVUXNhVUpCUVdsQ08xRkJRMklzU1VGQlNTeEpRVUZKTEVOQlFVTXNUMEZCVHl4RFFVRkRMRTlCUVU4c1JVRkJSVHRaUVVOMFFpeEpRVUZKTEVOQlFVTXNUMEZCVHl4RFFVRkRMRTlCUVU4c1EwRkJReXhaUVVGWkxFTkJRVU1zVDBGQlR5eEZRVUZGTEVsQlFVa3NRMEZCUXl4TFFVRkxMRU5CUVVNc1pVRkJaU3hEUVVGRExFTkJRVU03VTBGRE1VVTdTVUZGVEN4RFFVRkRPMGxCUlVRc2EwSkJRV3RDTzFGQlEyUXNTVUZCU1N4SlFVRkpMRU5CUVVNc1QwRkJUeXhEUVVGRExFOUJRVThzUlVGQlJUdFpRVU4wUWl4SlFVRkpMRU5CUVVNc1QwRkJUeXhEUVVGRExFOUJRVThzUTBGQlF5eFpRVUZaTEVOQlFVTXNUMEZCVHl4RlFVRkZMRWxCUVVrc1EwRkJReXhMUVVGTExFTkJRVU1zWlVGQlpTeERRVUZETEVOQlFVTTdVMEZETVVVN1NVRkRUQ3hEUVVGRE8wbEJSVVFzU1VGQlNTeHJRa0ZCYTBJN1VVRkRiRUlzVDBGQlR6dFpRVU5JTEZOQlFWTXNSVUZCUlN3d1FrRkJNRUk3VTBGRGVFTXNRMEZCUXp0SlFVTk9MRU5CUVVNN1NVRkhSQ3hOUVVGTk8xRkJRMFFzVFVGQlRTeEZRVUZETEdkQ1FVRm5RaXhGUVVGRExHbENRVUZwUWl4RlFVRkRMRkZCUVZFc1JVRkJReXhOUVVGTkxFVkJRVU1zVDBGQlR5eEZRVUZETEZsQlFWa3NSVUZCUXl4VlFVRlZMRVZCUVVVc1IwRkJSeXhWUVVGVkxFVkJRVU1zUjBGQlJ5eEpRVUZKTEVOQlFVTXNTMEZCU3l4RFFVRkRPMUZCUlhaSUxFMUJRVTBzVTBGQlV5eEhRVUUwUWp0WlFVTjRReXhwUWtGQmFVSXNSVUZCUlN4SlFVRkpMRU5CUVVNc1MwRkJTeXhEUVVGRExHbENRVUZwUWp0WlFVTXZReXhqUVVGakxFVkJRVVVzU1VGQlNTeERRVUZETEV0QlFVc3NRMEZCUXl4alFVRmpPMWxCUTNwRExHZENRVUZuUWl4RlFVRkRMRWxCUVVrc1EwRkJReXhMUVVGTExFTkJRVU1zWjBKQlFXZENPMWxCUXpWRExFOUJRVThzUlVGQlF5eEpRVUZKTEVOQlFVTXNTMEZCU3l4RFFVRkRMRTlCUVU4N1dVRkRNVUlzV1VGQldTeEZRVUZETEVsQlFVa3NRMEZCUXl4TFFVRkxMRU5CUVVNc1dVRkJXVHRaUVVOd1F5eExRVUZMTEVWQlFVTXNSVUZCUlR0WlFVTlNMRTFCUVUwc1JVRkJSU3hKUVVGSkxFTkJRVU1zUzBGQlN5eERRVUZETEUxQlFVMDdXVUZEZWtJc1ZVRkJWU3hGUVVGRExFdEJRVXM3VTBGRGJFSXNRMEZCUVR0UlFVTkdMRTlCUVU4c1EwRkRTQ3cyUTBGQlV5eEpRVUZKTEVOQlFVTXNhMEpCUVd0Q08xbEJRelZDTERaQ1FVRkxMRWRCUVVjc1JVRkJSU3hKUVVGSkxFTkJRVU1zVDBGQlR5eEZRVU5xUWl4RlFVRkZMRVZCUVVVc1NVRkJTU3hEUVVGRExFdEJRVXNzUTBGQlF5eEZRVUZGTEVWQlEycENMRk5CUVZNc1JVRkJSU3hKUVVGSkxFTkJRVU1zUzBGQlN5eERRVUZETEZsQlFWazdaMEpCUld4RExFTkJRVU1zU1VGQlNTeERRVUZETEV0QlFVc3NRMEZCUXl4TlFVRk5MRWxCUVVrc1NVRkJTU3hEUVVGRExFdEJRVXNzUTBGQlF5eE5RVUZOTEV0QlFVc3NVVUZCVVN4RFFVRkRPMjlDUVVNMVF5eHZRa0ZCUXl4VFFVRlRMRWxCUTFJc1owSkJRV2RDTEVWQlFVVXNTVUZCU1N4RFFVRkRMRXRCUVVzc1EwRkJReXhuUWtGQlowSXNSVUZETjBNc1lVRkJZU3hGUVVGRkxFbEJRVWtzUTBGQlF5eExRVUZMTEVOQlFVTXNZVUZCWVN4RlFVTjJReXhOUVVGTkxFVkJRVVVzU1VGQlNTeERRVUZETEV0QlFVc3NRMEZCUXl4TlFVRk5MRVZCUTNwQ0xFOUJRVThzUlVGQlJTeEpRVUZKTEVOQlFVTXNTMEZCU3l4RFFVRkRMRTlCUVU4c1JVRkRNMElzV1VGQldTeEZRVUZGTEVsQlFVa3NRMEZCUXl4TFFVRkxMRU5CUVVNc1dVRkJXU3hGUVVOeVF5eFZRVUZWTEVWQlFVVXNTMEZCU3l4SlFVTmFMRWxCUVVrc1EwRkJReXhsUVVGbExFTkJRMkk3WjBKQlJYWkNMRU5CUVVNc1EwRkJReXhKUVVGSkxFTkJRVU1zUzBGQlN5eERRVUZETEUxQlFVMHNTVUZCU1N4SlFVRkpMRU5CUVVNc1MwRkJTeXhEUVVGRExFMUJRVTBzUzBGQlN5eFJRVUZSTEVOQlFVTTdiMEpCUXpORExHOUNRVUZETEdOQlFXTXNiMEpCUVVzc1UwRkJVeXhGUVVGdFFpeERRVWt4UkN4RFFVTktMRU5CUTFRc1EwRkJRVHRKUVVOTUxFTkJRVU03UTBGRlNqdEJRVVZFTEdWQlFXVXNkMEpCUVhkQ0xFTkJRVU1zWlVGQlpTeEZRVUZGTEdWQlFXVXNRMEZCUXl4RFFVRkRJaXdpYzI5MWNtTmxjME52Ym5SbGJuUWlPbHNpTHlwY2JpQXFJQ0JEYjNCNWNtbG5hSFFnTWpBeU1DQkJaRzlpWlZ4dUlDcGNiaUFxSUNCTWFXTmxibk5sWkNCMWJtUmxjaUIwYUdVZ1FYQmhZMmhsSUV4cFkyVnVjMlVzSUZabGNuTnBiMjRnTWk0d0lDaDBhR1VnWENKTWFXTmxibk5sWENJcE8xeHVJQ29nSUhsdmRTQnRZWGtnYm05MElIVnpaU0IwYUdseklHWnBiR1VnWlhoalpYQjBJR2x1SUdOdmJYQnNhV0Z1WTJVZ2QybDBhQ0IwYUdVZ1RHbGpaVzV6WlM1Y2JpQXFJQ0JaYjNVZ2JXRjVJRzlpZEdGcGJpQmhJR052Y0hrZ2IyWWdkR2hsSUV4cFkyVnVjMlVnWVhSY2JpQXFYRzRnS2lBZ0lDQWdJR2gwZEhBNkx5OTNkM2N1WVhCaFkyaGxMbTl5Wnk5c2FXTmxibk5sY3k5TVNVTkZUbE5GTFRJdU1GeHVJQ3BjYmlBcUlDQlZibXhsYzNNZ2NtVnhkV2x5WldRZ1lua2dZWEJ3YkdsallXSnNaU0JzWVhjZ2IzSWdZV2R5WldWa0lIUnZJR2x1SUhkeWFYUnBibWNzSUhOdlpuUjNZWEpsWEc0Z0tpQWdaR2x6ZEhKcFluVjBaV1FnZFc1a1pYSWdkR2hsSUV4cFkyVnVjMlVnYVhNZ1pHbHpkSEpwWW5WMFpXUWdiMjRnWVc0Z1hDSkJVeUJKVTF3aUlFSkJVMGxUTEZ4dUlDb2dJRmRKVkVoUFZWUWdWMEZTVWtGT1ZFbEZVeUJQVWlCRFQwNUVTVlJKVDA1VElFOUdJRUZPV1NCTFNVNUVMQ0JsYVhSb1pYSWdaWGh3Y21WemN5QnZjaUJwYlhCc2FXVmtMbHh1SUNvZ0lGTmxaU0IwYUdVZ1RHbGpaVzV6WlNCbWIzSWdkR2hsSUhOd1pXTnBabWxqSUd4aGJtZDFZV2RsSUdkdmRtVnlibWx1WnlCd1pYSnRhWE56YVc5dWN5QmhibVJjYmlBcUlDQnNhVzFwZEdGMGFXOXVjeUIxYm1SbGNpQjBhR1VnVEdsalpXNXpaUzVjYmlBcUwxeHVYRzVwYlhCdmNuUWdVbVZoWTNRc0lIdFNaV1pQWW1wbFkzUjlJR1p5YjIwZ1hDSnlaV0ZqZEZ3aU8xeHVYRzVwYlhCdmNuUWdlME52YlhCdmJtVnVkRTFoY0hCcGJtY3NJRU52Ym5SaGFXNWxjaXdnVW1WemNHOXVjMmwyWlVkeWFXUXNJRkpsYzNCdmJuTnBkbVZIY21sa1VISnZjR1Z5ZEdsbGMzMGdabkp2YlNBblFHRmtiMkpsTDJGbGJTMXlaV0ZqZEMxbFpHbDBZV0pzWlMxamIyMXdiMjVsYm5Sekp6dGNibWx0Y0c5eWRDQjdRMjl5WlVOdmJuUmhhVzVsY2xCeWIzQmxjblJwWlhNc0lFTnZjbVZEYjI1MFlXbHVaWEpUZEdGMFpTd2dkMmwwYUZOMFlXNWtZWEprUW1GelpVTnpjME5zWVhOemZTQm1jbTl0SUNjdUxpOHVMaTh1TGk5QlluTjBjbUZqZEVOdmNtVkRiMjUwWVdsdVpYSkRiMjF3YjI1bGJuUW5PMXh1WEc1bGVIQnZjblFnYVc1MFpYSm1ZV05sSUVOdmJuUmhhVzVsY2xZeFVISnZjR1Z5ZEdsbGN5QmxlSFJsYm1SeklFTnZjbVZEYjI1MFlXbHVaWEpRY205d1pYSjBhV1Z6TEZKbGMzQnZibk5wZG1WSGNtbGtVSEp2Y0dWeWRHbGxjM3RjYmlBZ0lDQmlZV05yWjNKdmRXNWtVM1I1YkdVNmMzUnlhVzVuTzF4dUlDQWdJR2xrT25OMGNtbHVaenRjYmlBZ0lDQnNZWGx2ZFhRL09pQW5jbVZ6Y0c5dWMybDJaVWR5YVdRbklId2dKM05wYlhCc1pTYzdYRzU5WEc1Y2JseHVZMnhoYzNNZ1EyOXVkR0ZwYm1WeVZqRkpiWEJzSUdWNGRHVnVaSE1nUTI5dWRHRnBibVZ5UEVOdmJuUmhhVzVsY2xZeFVISnZjR1Z5ZEdsbGN5eERiM0psUTI5dWRHRnBibVZ5VTNSaGRHVStJSHRjYmx4dUlDQWdJRzFoYVc1RWFYWTZVbVZtVDJKcVpXTjBQRWhVVFV4RWFYWkZiR1Z0Wlc1MFBqdGNibHh1SUNBZ0lHTnZibk4wY25WamRHOXlLSEJ5YjNCek9rTnZiblJoYVc1bGNsWXhVSEp2Y0dWeWRHbGxjeWtnZTF4dUlDQWdJQ0FnSUNCemRYQmxjaWh3Y205d2N5azdYRzVjYmlBZ0lDQWdJQ0FnTHk5QWRITXRhV2R1YjNKbFhHNGdJQ0FnSUNBZ0lIUm9hWE11YzNSaGRHVWdQU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQmpiMjF3YjI1bGJuUk5ZWEJ3YVc1bk9pQjBhR2x6TG5CeWIzQnpMbU52YlhCdmJtVnVkRTFoY0hCcGJtY2dmSHdnUTI5dGNHOXVaVzUwVFdGd2NHbHVaeXhjYmlBZ0lDQWdJQ0FnZlR0Y2JpQWdJQ0FnSUNBZ2RHaHBjeTV0WVdsdVJHbDJJRDBnVW1WaFkzUXVZM0psWVhSbFVtVm1LQ2s3WEc0Z0lDQWdmVnh1WEc0Z0lDQWdZMjl0Y0c5dVpXNTBSR2xrVFc5MWJuUW9LU0I3WEc0Z0lDQWdJQ0FnSUdsbUlDaDBhR2x6TG0xaGFXNUVhWFl1WTNWeWNtVnVkQ2tnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdkR2hwY3k1dFlXbHVSR2wyTG1OMWNuSmxiblF1YzJWMFFYUjBjbWxpZFhSbEtDZHpkSGxzWlNjc0lIUm9hWE11Y0hKdmNITXVZbUZqYTJkeWIzVnVaRk4wZVd4bEtUdGNiaUFnSUNBZ0lDQWdmVnh1WEc0Z0lDQWdmVnh1WEc0Z0lDQWdZMjl0Y0c5dVpXNTBSR2xrVlhCa1lYUmxLQ2tnZTF4dUlDQWdJQ0FnSUNCcFppQW9kR2hwY3k1dFlXbHVSR2wyTG1OMWNuSmxiblFwSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJSFJvYVhNdWJXRnBia1JwZGk1amRYSnlaVzUwTG5ObGRFRjBkSEpwWW5WMFpTZ25jM1I1YkdVbkxDQjBhR2x6TG5CeWIzQnpMbUpoWTJ0bmNtOTFibVJUZEhsc1pTazdYRzRnSUNBZ0lDQWdJSDFjYmlBZ0lDQjlYRzVjYmlBZ0lDQm5aWFFnWTI5eVpVTnZiblJoYVc1bGNsQnliM0J6S0NrZ2UxeHVJQ0FnSUNBZ0lDQnlaWFIxY200Z2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnWTJ4aGMzTk9ZVzFsT2lBblkyOXVkR0ZwYm1WeUlISmxjM0J2Ym5OcGRtVm5jbWxrSjF4dUlDQWdJQ0FnSUNCOU8xeHVJQ0FnSUgxY2JseHVYRzRnSUNBZ2NtVnVaR1Z5S0NrZ2UxeHVJQ0FnSUNBZ0lDQWdZMjl1YzNRZ2UyTnZiWEJ2Ym1WdWRFMWhjSEJwYm1jc1lXeHNiM2RsWkVOdmJYQnZibVZ1ZEhNc1kyaHBiR1J5Wlc0c1kzRlFZWFJvTEdOeFNYUmxiWE1zWTNGSmRHVnRjMDl5WkdWeUxHbHpTVzVGWkdsMGIzSXNJQzR1TG05MGFHVnlVSEp2Y0hOOUlEMGdkR2hwY3k1d2NtOXdjenRjYmx4dUlDQWdJQ0FnSUNBZ1kyOXVjM1FnWjNKcFpGQnliM0J6T2xKbGMzQnZibk5wZG1WSGNtbGtVSEp2Y0dWeWRHbGxjeUE5SUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJR0ZzYkc5M1pXUkRiMjF3YjI1bGJuUnpPaUIwYUdsekxuQnliM0J6TG1Gc2JHOTNaV1JEYjIxd2IyNWxiblJ6TEZ4dUlDQWdJQ0FnSUNBZ0lDQWdaM0pwWkVOc1lYTnpUbUZ0WlhNNklIUm9hWE11Y0hKdmNITXVaM0pwWkVOc1lYTnpUbUZ0WlhNc1hHNGdJQ0FnSUNBZ0lDQWdJQ0JqYjJ4MWJXNURiR0Z6YzA1aGJXVnpPblJvYVhNdWNISnZjSE11WTI5c2RXMXVRMnhoYzNOT1lXMWxjeXhjYmlBZ0lDQWdJQ0FnSUNBZ0lHTnhTWFJsYlhNNmRHaHBjeTV3Y205d2N5NWpjVWwwWlcxekxGeHVJQ0FnSUNBZ0lDQWdJQ0FnWTNGSmRHVnRjMDl5WkdWeU9uUm9hWE11Y0hKdmNITXVZM0ZKZEdWdGMwOXlaR1Z5TEZ4dUlDQWdJQ0FnSUNBZ0lDQWdkR2wwYkdVNlhDSmNJaXhjYmlBZ0lDQWdJQ0FnSUNBZ0lHTnhVR0YwYURvZ2RHaHBjeTV3Y205d2N5NWpjVkJoZEdnc1hHNGdJQ0FnSUNBZ0lDQWdJQ0JwYzBsdVJXUnBkRzl5T21aaGJITmxYRzRnSUNBZ0lDQWdJQ0I5WEc0Z0lDQWdJQ0FnSUhKbGRIVnliaUFvWEc0Z0lDQWdJQ0FnSUNBZ0lDQThaR2wySUhzdUxpNTBhR2x6TG1OdmNtVkRiMjUwWVdsdVpYSlFjbTl3YzMwK1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ1BHUnBkaUJ5WldZOWUzUm9hWE11YldGcGJrUnBkbjFjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lHbGtQWHQwYUdsekxuQnliM0J6TG1sa2ZWeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnWTJ4aGMzTk9ZVzFsUFh0MGFHbHpMbkJ5YjNCekxtSmhjMlZEYzNORGJHRnpjMzArWEc1Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdleWgwYUdsekxuQnliM0J6TG14aGVXOTFkQ0FtSmlCMGFHbHpMbkJ5YjNCekxteGhlVzkxZENBOVBUMGdKM05wYlhCc1pTY3BJQ0FtSmx4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdQRU52Ym5SaGFXNWxjaUJjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdZMjl0Y0c5dVpXNTBUV0Z3Y0dsdVp6MTdkR2hwY3k1emRHRjBaUzVqYjIxd2IyNWxiblJOWVhCd2FXNW5mU0FnSUNCY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnWTNGR2IzSmpaVkpsYkc5aFpEMTdkR2hwY3k1d2NtOXdjeTVqY1VadmNtTmxVbVZzYjJGa2ZWeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCamNWQmhkR2c5ZTNSb2FYTXVjSEp2Y0hNdVkzRlFZWFJvZlZ4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0JqY1VsMFpXMXpQWHQwYUdsekxuQnliM0J6TG1OeFNYUmxiWE45WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJR054U1hSbGJYTlBjbVJsY2oxN2RHaHBjeTV3Y205d2N5NWpjVWwwWlcxelQzSmtaWEo5WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJR2x6U1c1RlpHbDBiM0k5ZTJaaGJITmxmVDVjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUh0MGFHbHpMbU5vYVd4a1EyOXRjRzl1Wlc1MGMzMWNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ1BDOURiMjUwWVdsdVpYSStmVnh1WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lIc29JWFJvYVhNdWNISnZjSE11YkdGNWIzVjBJSHg4SUhSb2FYTXVjSEp2Y0hNdWJHRjViM1YwSUNFOVBTQW5jMmx0Y0d4bEp5a2dKaVpjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdQRkpsYzNCdmJuTnBkbVZIY21sa0lIc3VMaTVuY21sa1VISnZjSE45UGp3dlVtVnpjRzl1YzJsMlpVZHlhV1ErWEc1Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJSDFjYmx4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUR3dlpHbDJQbHh1SUNBZ0lDQWdJQ0FnSUNBZ1BDOWthWFkrWEc0Z0lDQWdJQ0FnSUNsY2JpQWdJQ0I5WEc1Y2JuMWNibHh1Wlhod2IzSjBJR1JsWm1GMWJIUWdkMmwwYUZOMFlXNWtZWEprUW1GelpVTnpjME5zWVhOektFTnZiblJoYVc1bGNsWXhTVzF3YkN3Z1hDSmpiWEF0WTI5dWRHRnBibVZ5WENJcE95SmRmUT09IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGFkb2JlL2FlbS1yZWFjdC1lZGl0YWJsZS1jb21wb25lbnRzXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=