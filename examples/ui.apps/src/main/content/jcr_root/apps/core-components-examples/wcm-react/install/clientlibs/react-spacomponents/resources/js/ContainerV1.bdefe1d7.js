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
              isInEditor: this.props.isInEditor
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
              isInEditor: this.props.isInEditor
            }, this.childComponents), (!this.props.layout || this.props.layout !== 'simple') && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_adobe_aem_react_editable_components__WEBPACK_IMPORTED_MODULE_1__["ResponsiveGrid"], Object.assign({}, gridProps))));
          }

        }
        /* harmony default export */


        __webpack_exports__["default"] = Object(_AbstractCoreContainerComponent__WEBPACK_IMPORTED_MODULE_2__["withStandardBaseCssClass"])(ContainerV1Impl, "cmp-container"); //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ29udGFpbmVyVjEuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJDb250YWluZXJWMS50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7O0dBY0c7QUFFSCxPQUFPLEtBQWtCLE1BQU0sT0FBTyxDQUFDO0FBRXZDLE9BQU8sRUFBQyxnQkFBZ0IsRUFBRSxTQUFTLEVBQUUsY0FBYyxFQUEyQixNQUFNLHNDQUFzQyxDQUFDO0FBQzNILE9BQU8sRUFBOEMsd0JBQXdCLEVBQUMsTUFBTSx5Q0FBeUMsQ0FBQztBQVM5SCxNQUFNLGVBQWdCLFNBQVEsU0FBbUQ7SUFJN0UsWUFBWSxLQUEyQjtRQUNuQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7UUFFYixZQUFZO1FBQ1osSUFBSSxDQUFDLEtBQUssR0FBRztZQUNULGdCQUFnQixFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsZ0JBQWdCLElBQUksZ0JBQWdCO1NBQ3BFLENBQUM7UUFDRixJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQyxTQUFTLEVBQUUsQ0FBQztJQUNyQyxDQUFDO0lBRUQsaUJBQWlCO1FBQ2IsSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sRUFBRTtZQUN0QixJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsZUFBZSxDQUFDLENBQUM7U0FDMUU7SUFFTCxDQUFDO0lBRUQsa0JBQWtCO1FBQ2QsSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sRUFBRTtZQUN0QixJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsZUFBZSxDQUFDLENBQUM7U0FDMUU7SUFDTCxDQUFDO0lBRUQsSUFBSSxrQkFBa0I7UUFDbEIsT0FBTztZQUNILFNBQVMsRUFBRSwwQkFBMEI7U0FDeEMsQ0FBQztJQUNOLENBQUM7SUFHRCxNQUFNO1FBQ0QsTUFBTSxFQUFDLGdCQUFnQixFQUFDLGlCQUFpQixFQUFDLFFBQVEsRUFBQyxNQUFNLEVBQUMsT0FBTyxFQUFDLFlBQVksRUFBQyxVQUFVLEVBQUUsR0FBRyxVQUFVLEVBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDO1FBRXZILE1BQU0sU0FBUyxHQUE0QjtZQUN4QyxpQkFBaUIsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLGlCQUFpQjtZQUMvQyxjQUFjLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxjQUFjO1lBQ3pDLGdCQUFnQixFQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsZ0JBQWdCO1lBQzVDLE9BQU8sRUFBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU87WUFDMUIsWUFBWSxFQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsWUFBWTtZQUNwQyxLQUFLLEVBQUMsRUFBRTtZQUNSLE1BQU0sRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU07WUFDekIsVUFBVSxFQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVTtTQUNsQyxDQUFDO1FBQ0gsT0FBTyxDQUNILDZDQUFTLElBQUksQ0FBQyxrQkFBa0I7WUFDNUIsNkJBQUssR0FBRyxFQUFFLElBQUksQ0FBQyxPQUFPLEVBQ2pCLEVBQUUsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUUsRUFDakIsU0FBUyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsWUFBWTtnQkFFbEMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sS0FBSyxRQUFRLENBQUM7b0JBQzVDLG9CQUFDLFNBQVMsSUFDUixnQkFBZ0IsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLGdCQUFnQixFQUM3QyxhQUFhLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxhQUFhLEVBQ3ZDLE1BQU0sRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFDekIsT0FBTyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxFQUMzQixZQUFZLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxZQUFZLEVBQ3JDLFVBQVUsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsSUFDNUIsSUFBSSxDQUFDLGVBQWUsQ0FDYjtnQkFFdkIsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxLQUFLLFFBQVEsQ0FBQztvQkFDM0Msb0JBQUMsY0FBYyxvQkFBSyxTQUFTLEVBQW1CLENBSTFELENBQ0osQ0FDVCxDQUFBO0lBQ0wsQ0FBQztDQUVKO0FBRUQsZUFBZSx3QkFBd0IsQ0FBQyxlQUFlLEVBQUUsZUFBZSxDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogIENvcHlyaWdodCAyMDIwIEFkb2JlXG4gKlxuICogIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiAgeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICAgICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqICBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiAgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiAgU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5cbmltcG9ydCBSZWFjdCwge1JlZk9iamVjdH0gZnJvbSBcInJlYWN0XCI7XG5cbmltcG9ydCB7Q29tcG9uZW50TWFwcGluZywgQ29udGFpbmVyLCBSZXNwb25zaXZlR3JpZCwgUmVzcG9uc2l2ZUdyaWRQcm9wZXJ0aWVzfSBmcm9tICdAYWRvYmUvYWVtLXJlYWN0LWVkaXRhYmxlLWNvbXBvbmVudHMnO1xuaW1wb3J0IHtDb3JlQ29udGFpbmVyUHJvcGVydGllcywgQ29yZUNvbnRhaW5lclN0YXRlLCB3aXRoU3RhbmRhcmRCYXNlQ3NzQ2xhc3N9IGZyb20gJy4uLy4uLy4uL0Fic3RyYWN0Q29yZUNvbnRhaW5lckNvbXBvbmVudCc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ29udGFpbmVyVjFQcm9wZXJ0aWVzIGV4dGVuZHMgQ29yZUNvbnRhaW5lclByb3BlcnRpZXMsUmVzcG9uc2l2ZUdyaWRQcm9wZXJ0aWVze1xuICAgIGJhY2tncm91bmRTdHlsZTpzdHJpbmc7XG4gICAgaWQ6c3RyaW5nO1xuICAgIGxheW91dD86ICdyZXNwb25zaXZlR3JpZCcgfCAnc2ltcGxlJztcbn1cblxuXG5jbGFzcyBDb250YWluZXJWMUltcGwgZXh0ZW5kcyBDb250YWluZXI8Q29udGFpbmVyVjFQcm9wZXJ0aWVzLENvcmVDb250YWluZXJTdGF0ZT4ge1xuXG4gICAgbWFpbkRpdjpSZWZPYmplY3Q8SFRNTERpdkVsZW1lbnQ+O1xuXG4gICAgY29uc3RydWN0b3IocHJvcHM6Q29udGFpbmVyVjFQcm9wZXJ0aWVzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcblxuICAgICAgICAvL0B0cy1pZ25vcmVcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIGNvbXBvbmVudE1hcHBpbmc6IHRoaXMucHJvcHMuY29tcG9uZW50TWFwcGluZyB8fCBDb21wb25lbnRNYXBwaW5nLFxuICAgICAgICB9O1xuICAgICAgICB0aGlzLm1haW5EaXYgPSBSZWFjdC5jcmVhdGVSZWYoKTtcbiAgICB9XG5cbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgaWYgKHRoaXMubWFpbkRpdi5jdXJyZW50KSB7XG4gICAgICAgICAgICB0aGlzLm1haW5EaXYuY3VycmVudC5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgdGhpcy5wcm9wcy5iYWNrZ3JvdW5kU3R5bGUpO1xuICAgICAgICB9XG5cbiAgICB9XG5cbiAgICBjb21wb25lbnREaWRVcGRhdGUoKSB7XG4gICAgICAgIGlmICh0aGlzLm1haW5EaXYuY3VycmVudCkge1xuICAgICAgICAgICAgdGhpcy5tYWluRGl2LmN1cnJlbnQuc2V0QXR0cmlidXRlKCdzdHlsZScsIHRoaXMucHJvcHMuYmFja2dyb3VuZFN0eWxlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGdldCBjb3JlQ29udGFpbmVyUHJvcHMoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBjbGFzc05hbWU6ICdjb250YWluZXIgcmVzcG9uc2l2ZWdyaWQnXG4gICAgICAgIH07XG4gICAgfVxuXG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgICBjb25zdCB7Y29tcG9uZW50TWFwcGluZyxhbGxvd2VkQ29tcG9uZW50cyxjaGlsZHJlbixjcVBhdGgsY3FJdGVtcyxjcUl0ZW1zT3JkZXIsaXNJbkVkaXRvciwgLi4ub3RoZXJQcm9wc30gPSB0aGlzLnByb3BzO1xuXG4gICAgICAgICBjb25zdCBncmlkUHJvcHM6UmVzcG9uc2l2ZUdyaWRQcm9wZXJ0aWVzID0ge1xuICAgICAgICAgICAgYWxsb3dlZENvbXBvbmVudHM6IHRoaXMucHJvcHMuYWxsb3dlZENvbXBvbmVudHMsXG4gICAgICAgICAgICBncmlkQ2xhc3NOYW1lczogdGhpcy5wcm9wcy5ncmlkQ2xhc3NOYW1lcyxcbiAgICAgICAgICAgIGNvbHVtbkNsYXNzTmFtZXM6dGhpcy5wcm9wcy5jb2x1bW5DbGFzc05hbWVzLFxuICAgICAgICAgICAgY3FJdGVtczp0aGlzLnByb3BzLmNxSXRlbXMsXG4gICAgICAgICAgICBjcUl0ZW1zT3JkZXI6dGhpcy5wcm9wcy5jcUl0ZW1zT3JkZXIsXG4gICAgICAgICAgICB0aXRsZTpcIlwiLFxuICAgICAgICAgICAgY3FQYXRoOiB0aGlzLnByb3BzLmNxUGF0aCxcbiAgICAgICAgICAgIGlzSW5FZGl0b3I6dGhpcy5wcm9wcy5pc0luRWRpdG9yXG4gICAgICAgICB9O1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiB7Li4udGhpcy5jb3JlQ29udGFpbmVyUHJvcHN9PlxuICAgICAgICAgICAgICAgIDxkaXYgcmVmPXt0aGlzLm1haW5EaXZ9XG4gICAgICAgICAgICAgICAgICAgICBpZD17dGhpcy5wcm9wcy5pZH1cbiAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17dGhpcy5wcm9wcy5iYXNlQ3NzQ2xhc3N9PlxuXG4gICAgICAgICAgICAgICAgICAgIHsodGhpcy5wcm9wcy5sYXlvdXQgJiYgdGhpcy5wcm9wcy5sYXlvdXQgPT09ICdzaW1wbGUnKSAgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDb250YWluZXJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50TWFwcGluZz17dGhpcy5zdGF0ZS5jb21wb25lbnRNYXBwaW5nfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjcUZvcmNlUmVsb2FkPXt0aGlzLnByb3BzLmNxRm9yY2VSZWxvYWR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNxUGF0aD17dGhpcy5wcm9wcy5jcVBhdGh9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNxSXRlbXM9e3RoaXMucHJvcHMuY3FJdGVtc31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3FJdGVtc09yZGVyPXt0aGlzLnByb3BzLmNxSXRlbXNPcmRlcn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNJbkVkaXRvcj17dGhpcy5wcm9wcy5pc0luRWRpdG9yfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLmNoaWxkQ29tcG9uZW50c31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Db250YWluZXI+fVxuXG4gICAgICAgICAgICAgICAgICAgIHsoIXRoaXMucHJvcHMubGF5b3V0IHx8IHRoaXMucHJvcHMubGF5b3V0ICE9PSAnc2ltcGxlJykgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJlc3BvbnNpdmVHcmlkIHsuLi5ncmlkUHJvcHN9PjwvUmVzcG9uc2l2ZUdyaWQ+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIClcbiAgICB9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aFN0YW5kYXJkQmFzZUNzc0NsYXNzKENvbnRhaW5lclYxSW1wbCwgXCJjbXAtY29udGFpbmVyXCIpO1xuIl19

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9yYWFpam1hay93b3Jrc3BhY2UvYWVtLXJlYWN0LWNvcmUtd2NtLWNvbXBvbmVudHMvZXhhbXBsZXMvcmVhY3Qtc3BhY29tcG9uZW50cy1leGFtcGxlLXByb2plY3QvQGFkb2JlL2FlbS1jb3JlLWNvbXBvbmVudHMtcmVhY3Qtc3BhL3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIi9Vc2Vycy9yYWFpam1hay93b3Jrc3BhY2UvYWVtLXJlYWN0LWNvcmUtd2NtLWNvbXBvbmVudHMvZXhhbXBsZXMvcmVhY3Qtc3BhY29tcG9uZW50cy1leGFtcGxlLXByb2plY3QvQGFkb2JlL2FlbS1jb3JlLWNvbXBvbmVudHMtcmVhY3Qtc3BhL3dlYnBhY2svYm9vdHN0cmFwIiwiL1VzZXJzL3JhYWlqbWFrL3dvcmtzcGFjZS9hZW0tcmVhY3QtY29yZS13Y20tY29tcG9uZW50cy9leGFtcGxlcy9yZWFjdC1zcGFjb21wb25lbnRzLWV4YW1wbGUtcHJvamVjdC9AYWRvYmUvYWVtLWNvcmUtY29tcG9uZW50cy1yZWFjdC1zcGEvc3JjL0Fic3RyYWN0Q29yZUNvbnRhaW5lckNvbXBvbmVudC50c3giLCIvVXNlcnMvcmFhaWptYWsvd29ya3NwYWNlL2FlbS1yZWFjdC1jb3JlLXdjbS1jb21wb25lbnRzL2V4YW1wbGVzL3JlYWN0LXNwYWNvbXBvbmVudHMtZXhhbXBsZS1wcm9qZWN0L0BhZG9iZS9hZW0tY29yZS1jb21wb25lbnRzLXJlYWN0LXNwYS9zcmMvY29udGFpbmVyL2NvbnRhaW5lci92MS9Db250YWluZXJWMS50c3giLCIvVXNlcnMvcmFhaWptYWsvd29ya3NwYWNlL2FlbS1yZWFjdC1jb3JlLXdjbS1jb21wb25lbnRzL2V4YW1wbGVzL3JlYWN0LXNwYWNvbXBvbmVudHMtZXhhbXBsZS1wcm9qZWN0L3dlYnBhY2s6L0BhZG9iZS9hZW0tY29yZS1jb21wb25lbnRzLXJlYWN0LXNwYS9leHRlcm5hbCBcIkBhZG9iZS9hZW0tcmVhY3QtZWRpdGFi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L0NvbnRhaW5lclYxLmJkZWZlMWQ3LmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiQGFkb2JlL2FlbS1jb3JlLWNvbXBvbmVudHMtcmVhY3Qtc3BhXCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcIkBhZG9iZS9hZW0tY29yZS1jb21wb25lbnRzLXJlYWN0LXNwYVwiXSA9IGZhY3RvcnkoKTtcbn0pKHR5cGVvZiBzZWxmICE9PSAndW5kZWZpbmVkJyA/IHNlbGYgOiB0aGlzLCBmdW5jdGlvbigpIHtcbnJldHVybiAiLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gNCk7XG4iLCIvKlxuICogIENvcHlyaWdodCAyMDIwIEFkb2JlXG4gKlxuICogIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiAgeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICAgICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqICBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiAgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiAgU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5jb25zdCBpc0Jyb3dzZXIgPSAoKCkgPT4ge1xuICAgIHRyeSB7XG4gICAgICAgIHJldHVybiB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJztcbiAgICB9XG4gICAgY2F0Y2ggKGVycikge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxufSkoKTtcbmV4cG9ydCBjb25zdCB3aXRoU3RhbmRhcmRCYXNlQ3NzQ2xhc3MgPSAoQ29tcG9uZW50LCBkZWZhdWx0QmFzZUNzc0NsYXNzKSA9PiB7XG4gICAgcmV0dXJuIChwcm9wcykgPT4ge1xuICAgICAgICBjb25zdCBiYXNlQ3NzQ2xhc3MgPSBwcm9wcy5iYXNlQ3NzQ2xhc3M7XG4gICAgICAgIGNvbnN0IHRvQmVVc2VkQ3NzQ2xhc3MgPSBiYXNlQ3NzQ2xhc3MgJiYgYmFzZUNzc0NsYXNzLnRyaW0oKS5sZW5ndGggPiAwID8gYmFzZUNzc0NsYXNzIDogZGVmYXVsdEJhc2VDc3NDbGFzcztcbiAgICAgICAgY29uc3QgbWVyZ2VkUHJvcHMgPSB7XG4gICAgICAgICAgICAuLi5wcm9wcyxcbiAgICAgICAgICAgIGJhc2VDc3NDbGFzczogdG9CZVVzZWRDc3NDbGFzc1xuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChDb21wb25lbnQsIE9iamVjdC5hc3NpZ24oe30sIG1lcmdlZFByb3BzKSk7XG4gICAgfTtcbn07XG5leHBvcnQgY29uc3Qgd2l0aEF1dGhvclBhbmVsU3dpdGNoID0gKENvbXBvbmVudCkgPT4ge1xuICAgIHJldHVybiBjbGFzcyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgICAgICAgICB0aGlzLnN0YXRlID0ge307XG4gICAgICAgICAgICAvL0B0cy1pZ25vcmVcbiAgICAgICAgICAgIGlmIChpc0Jyb3dzZXIgJiYgd2luZG93LkdyYW5pdGUgJiYgd2luZG93LkdyYW5pdGUuYXV0aG9yICYmIHdpbmRvdy5HcmFuaXRlLmF1dGhvci5NZXNzYWdlQ2hhbm5lbCkge1xuICAgICAgICAgICAgICAgIC8vQHRzLWlnbm9yZVxuICAgICAgICAgICAgICAgIHRoaXMubWVzc2FnZUNoYW5uZWwgPSBuZXcgd2luZG93LkdyYW5pdGUuYXV0aG9yLk1lc3NhZ2VDaGFubmVsKFwiY3FhdXRob3JcIiwgd2luZG93KTtcbiAgICAgICAgICAgICAgICB0aGlzLmNhbGxiYWNrID0gdGhpcy5jYWxsYmFjay5iaW5kKHRoaXMpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGNhbGxiYWNrKG1lc3NhZ2UpIHtcbiAgICAgICAgICAgIGlmIChtZXNzYWdlLmRhdGEgJiYgbWVzc2FnZS5kYXRhLmlkID09PSB0aGlzLnByb3BzLmNxUGF0aCkge1xuICAgICAgICAgICAgICAgIGlmIChtZXNzYWdlLmRhdGEub3BlcmF0aW9uID09PSBcIm5hdmlnYXRlXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgaW5kZXggPSBtZXNzYWdlLmRhdGEuaW5kZXg7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgICAgICAgICAgYWN0aXZlSW5kZXhGcm9tQXV0aG9yUGFuZWw6IGluZGV4XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLm1lc3NhZ2VDaGFubmVsKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5tZXNzYWdlQ2hhbm5lbC5zdWJzY3JpYmVSZXF1ZXN0TWVzc2FnZShcImNtcC5wYW5lbGNvbnRhaW5lclwiLCB0aGlzLmNhbGxiYWNrKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLm1lc3NhZ2VDaGFubmVsKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5tZXNzYWdlQ2hhbm5lbC51bnN1YnNjcmliZVJlcXVlc3RNZXNzYWdlKFwiY21wLnBhbmVsY29udGFpbmVyXCIsIHRoaXMuY2FsbGJhY2spO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJlbmRlcigpIHtcbiAgICAgICAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KENvbXBvbmVudCwgT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5wcm9wcywgeyBhY3RpdmVJbmRleEZyb21BdXRob3JQYW5lbDogdGhpcy5zdGF0ZS5hY3RpdmVJbmRleEZyb21BdXRob3JQYW5lbCB9KSk7XG4gICAgICAgIH1cbiAgICB9O1xufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaVFXSnpkSEpoWTNSRGIzSmxRMjl1ZEdGcGJtVnlRMjl0Y0c5dVpXNTBMbXB6SWl3aWMyOTFjbU5sVW05dmRDSTZJaUlzSW5OdmRYSmpaWE1pT2xzaVFXSnpkSEpoWTNSRGIzSmxRMjl1ZEdGcGJtVnlRMjl0Y0c5dVpXNTBMblJ6ZUNKZExDSnVZVzFsY3lJNlcxMHNJbTFoY0hCcGJtZHpJam9pUVVGQlFUczdPenM3T3pzN096czdPenM3UjBGalJ6dEJRVVZJTEU5QlFVOHNTMEZCU3l4TFFVRkxMRTFCUVUwc1QwRkJUeXhEUVVGRE8wRkJkVUl2UWl4TlFVRk5MRk5CUVZNc1IwRkJSeXhEUVVGRExFZEJRVWNzUlVGQlJUdEpRVU53UWl4SlFVRkhPMUZCUTBNc1QwRkJUeXhQUVVGUExFMUJRVTBzUzBGQlN5eFhRVUZYTEVOQlFVTTdTMEZEZUVNN1NVRkJRU3hQUVVGTkxFZEJRVWNzUlVGQlF6dFJRVU5RTEU5QlFVOHNTMEZCU3l4RFFVRkRPMHRCUTJoQ08wRkJRMHdzUTBGQlF5eERRVUZETEVWQlFVVXNRMEZCUXp0QlFVZE1MRTFCUVUwc1EwRkJReXhOUVVGTkxIZENRVUYzUWl4SFFVRkhMRU5CUlhCRExGTkJRVEJDTEVWQlF6RkNMRzFDUVVFd1FpeEZRVU5LTEVWQlFVVTdTVUZEZUVJc1QwRkJUeXhEUVVGRExFdEJRVThzUlVGQlJTeEZRVUZGTzFGQlJXWXNUVUZCVFN4WlFVRlpMRWRCUVVjc1MwRkJTeXhEUVVGRExGbEJRVmtzUTBGQlF6dFJRVU40UXl4TlFVRk5MR2RDUVVGblFpeEhRVUZITEZsQlFWa3NTVUZCU1N4WlFVRlpMRU5CUVVNc1NVRkJTU3hGUVVGRkxFTkJRVU1zVFVGQlRTeEhRVUZITEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1dVRkJXU3hEUVVGRExFTkJRVU1zUTBGQlF5eHRRa0ZCYlVJc1EwRkJRenRSUVVVM1J5eE5RVUZOTEZkQlFWY3NSMEZCU3p0WlFVTnNRaXhIUVVGSExFdEJRVXM3V1VGRFVpeFpRVUZaTEVWQlFVVXNaMEpCUVdkQ08xTkJRMnBETEVOQlFVTTdVVUZGUml4UFFVRlBMRzlDUVVGRExGTkJRVk1zYjBKQlFVc3NWMEZCVnl4RlFVRkpMRU5CUVVNN1NVRkRNVU1zUTBGQlF5eERRVUZCTzBGQlEwd3NRMEZCUXl4RFFVRkRPMEZCU1VZc1RVRkJUU3hEUVVGRExFMUJRVTBzY1VKQlFYRkNMRWRCUVVjc1EwRkRha01zVTBGQk1FSXNSVUZEVEN4RlFVRkZPMGxCUlhaQ0xFOUJRVThzUzBGQlRTeFRRVUZSTEV0QlFVc3NRMEZCUXl4VFFVRnZRenRSUVVzelJDeFpRVUZaTEV0QlFVODdXVUZEWml4TFFVRkxMRU5CUVVNc1MwRkJTeXhEUVVGRExFTkJRVU03V1VGRFlpeEpRVUZKTEVOQlFVTXNTMEZCU3l4SFFVRkhMRVZCUVVVc1EwRkJRVHRaUVVWbUxGbEJRVms3V1VGRFdpeEpRVUZKTEZOQlFWTXNTVUZCU1N4TlFVRk5MRU5CUVVNc1QwRkJUeXhKUVVGSkxFMUJRVTBzUTBGQlF5eFBRVUZQTEVOQlFVTXNUVUZCVFN4SlFVRkpMRTFCUVUwc1EwRkJReXhQUVVGUExFTkJRVU1zVFVGQlRTeERRVUZETEdOQlFXTXNSVUZCUlR0blFrRkRPVVlzV1VGQldUdG5Ra0ZEV2l4SlFVRkpMRU5CUVVNc1kwRkJZeXhIUVVGSExFbEJRVWtzVFVGQlRTeERRVUZETEU5QlFVOHNRMEZCUXl4TlFVRk5MRU5CUVVNc1kwRkJZeXhEUVVGRExGVkJRVlVzUlVGQlJTeE5RVUZOTEVOQlFVTXNRMEZCUXp0blFrRkRia1lzU1VGQlNTeERRVUZETEZGQlFWRXNSMEZCUnl4SlFVRkpMRU5CUVVNc1VVRkJVU3hEUVVGRExFbEJRVWtzUTBGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUXp0aFFVTTFRenRSUVVOTUxFTkJRVU03VVVGRlJDeFJRVUZSTEVOQlFVTXNUMEZCVnp0WlFVTm9RaXhKUVVGSkxFOUJRVThzUTBGQlF5eEpRVUZKTEVsQlFVa3NUMEZCVHl4RFFVRkRMRWxCUVVrc1EwRkJReXhGUVVGRkxFdEJRVXNzU1VGQlNTeERRVUZETEV0QlFVc3NRMEZCUXl4TlFVRk5MRVZCUVVVN1owSkJRM1pFTEVsQlFVa3NUMEZCVHl4RFFVRkRMRWxCUVVrc1EwRkJReXhUUVVGVExFdEJRVXNzVlVGQlZTeEZRVUZGTzI5Q1FVTjJReXhOUVVGTkxFdEJRVXNzUjBGQlJ5eFBRVUZQTEVOQlFVTXNTVUZCU1N4RFFVRkRMRXRCUVdVc1EwRkJRenR2UWtGRE0wTXNTVUZCU1N4RFFVRkRMRkZCUVZFc1EwRkJRenQzUWtGRFZpd3dRa0ZCTUVJc1JVRkJSU3hMUVVGTE8zRkNRVU53UXl4RFFVRkRMRU5CUVVFN2FVSkJRMHc3WVVGRFNqdFJRVU5NTEVOQlFVTTdVVUZGUkN4cFFrRkJhVUk3V1VGRFlpeEpRVUZITEVsQlFVa3NRMEZCUXl4alFVRmpMRVZCUVVNN1owSkJRMjVDTEVsQlFVa3NRMEZCUXl4alFVRmpMRU5CUVVNc2RVSkJRWFZDTEVOQlFVTXNiMEpCUVc5Q0xFVkJRVVVzU1VGQlNTeERRVUZETEZGQlFWRXNRMEZCUXl4RFFVRkRPMkZCUTNCR08xRkJRMHdzUTBGQlF6dFJRVVZFTEc5Q1FVRnZRanRaUVVOb1FpeEpRVUZITEVsQlFVa3NRMEZCUXl4alFVRmpMRVZCUVVNN1owSkJRMjVDTEVsQlFVa3NRMEZCUXl4alFVRmpMRU5CUVVNc2VVSkJRWGxDTEVOQlFVTXNiMEpCUVc5Q0xFVkJRVVVzU1VGQlNTeERRVUZETEZGQlFWRXNRMEZCUXl4RFFVRkRPMkZCUTNSR08xRkJRMHdzUTBGQlF6dFJRVWRFTEUxQlFVMDdXVUZEUml4UFFVRlBMRzlDUVVGRExGTkJRVk1zYjBKQlFVc3NTVUZCU1N4RFFVRkRMRXRCUVVzc1NVRkJSU3d3UWtGQk1FSXNSVUZCUlN4SlFVRkpMRU5CUVVNc1MwRkJTeXhEUVVGRExEQkNRVUV3UWl4SlFVRkpMRU5CUVVNN1VVRkROVWNzUTBGQlF6dExRVU5LTEVOQlFVRTdRVUZGVEN4RFFVRkRMRU5CUVVNaUxDSnpiM1Z5WTJWelEyOXVkR1Z1ZENJNld5SXZLbHh1SUNvZ0lFTnZjSGx5YVdkb2RDQXlNREl3SUVGa2IySmxYRzRnS2x4dUlDb2dJRXhwWTJWdWMyVmtJSFZ1WkdWeUlIUm9aU0JCY0dGamFHVWdUR2xqWlc1elpTd2dWbVZ5YzJsdmJpQXlMakFnS0hSb1pTQmNJa3hwWTJWdWMyVmNJaWs3WEc0Z0tpQWdlVzkxSUcxaGVTQnViM1FnZFhObElIUm9hWE1nWm1sc1pTQmxlR05sY0hRZ2FXNGdZMjl0Y0d4cFlXNWpaU0IzYVhSb0lIUm9aU0JNYVdObGJuTmxMbHh1SUNvZ0lGbHZkU0J0WVhrZ2IySjBZV2x1SUdFZ1kyOXdlU0J2WmlCMGFHVWdUR2xqWlc1elpTQmhkRnh1SUNwY2JpQXFJQ0FnSUNBZ2FIUjBjRG92TDNkM2R5NWhjR0ZqYUdVdWIzSm5MMnhwWTJWdWMyVnpMMHhKUTBWT1UwVXRNaTR3WEc0Z0tseHVJQ29nSUZWdWJHVnpjeUJ5WlhGMWFYSmxaQ0JpZVNCaGNIQnNhV05oWW14bElHeGhkeUJ2Y2lCaFozSmxaV1FnZEc4Z2FXNGdkM0pwZEdsdVp5d2djMjltZEhkaGNtVmNiaUFxSUNCa2FYTjBjbWxpZFhSbFpDQjFibVJsY2lCMGFHVWdUR2xqWlc1elpTQnBjeUJrYVhOMGNtbGlkWFJsWkNCdmJpQmhiaUJjSWtGVElFbFRYQ0lnUWtGVFNWTXNYRzRnS2lBZ1YwbFVTRTlWVkNCWFFWSlNRVTVVU1VWVElFOVNJRU5QVGtSSlZFbFBUbE1nVDBZZ1FVNVpJRXRKVGtRc0lHVnBkR2hsY2lCbGVIQnlaWE56SUc5eUlHbHRjR3hwWldRdVhHNGdLaUFnVTJWbElIUm9aU0JNYVdObGJuTmxJR1p2Y2lCMGFHVWdjM0JsWTJsbWFXTWdiR0Z1WjNWaFoyVWdaMjkyWlhKdWFXNW5JSEJsY20xcGMzTnBiMjV6SUdGdVpGeHVJQ29nSUd4cGJXbDBZWFJwYjI1eklIVnVaR1Z5SUhSb1pTQk1hV05sYm5ObExseHVJQ292WEc1Y2JtbHRjRzl5ZENBcUlHRnpJRkpsWVdOMElHWnliMjBnSjNKbFlXTjBKenRjYmx4dWFXMXdiM0owSUh0RGIyNTBZV2x1WlhKVGRHRjBaU3dnUVd4c2IzZGxaRU52YlhCdmJtVnVkSE5RY205d1pYSjBhV1Z6ZlNCbWNtOXRJQ2RBWVdSdlltVXZZV1Z0TFhKbFlXTjBMV1ZrYVhSaFlteGxMV052YlhCdmJtVnVkSE1uTzF4dWFXMXdiM0owSUh0RGIyMXdiMjVsYm5SVWVYQmxmU0JtY205dElGd2ljbVZoWTNSY0lqdGNibWx0Y0c5eWRDQjdJRTF2WkdWc0lIMGdabkp2YlNBblFHRmtiMkpsTDJGbGJTMXpjR0V0Y0dGblpTMXRiMlJsYkMxdFlXNWhaMlZ5Snp0Y2JseHVaWGh3YjNKMElHbHVkR1Z5Wm1GalpTQkRiM0psUTI5dWRHRnBibVZ5VUhKdmNHVnlkR2xsY3lCbGVIUmxibVJ6SUVGc2JHOTNaV1JEYjIxd2IyNWxiblJ6VUhKdmNHVnlkR2xsYzN0Y2JpQWdJQ0JpWVhObFEzTnpRMnhoYzNNL09uTjBjbWx1Wnp0Y2JpQWdJQ0JoWTNScGRtVkpibVJsZUVaeWIyMUJkWFJvYjNKUVlXNWxiRDg2Ym5WdFltVnlYRzU5WEc1Y2JtVjRjRzl5ZENCcGJuUmxjbVpoWTJVZ1EyOXlaVU52Ym5SaGFXNWxja2wwWlcwZ1pYaDBaVzVrY3lCTmIyUmxiQ0I3WEc0Z0lDQWdKMk54T25CaGJtVnNWR2wwYkdVbk9pQnpkSEpwYm1kY2JuMWNibHh1Wlhod2IzSjBJR2x1ZEdWeVptRmpaU0JEYjNKbFEyOXVkR0ZwYm1WeVUzUmhkR1VnWlhoMFpXNWtjeUJEYjI1MFlXbHVaWEpUZEdGMFpTQjdYRzVjYm4xY2JseHVaWGh3YjNKMElHbHVkR1Z5Wm1GalpTQkJkWFJvYjNKUVlXNWxiRk4zYVhSamFGTjBZWFJsSUh0Y2JpQWdJQ0JoWTNScGRtVkpibVJsZUVaeWIyMUJkWFJvYjNKUVlXNWxiRDg2SUc1MWJXSmxjbHh1ZlZ4dVhHNWpiMjV6ZENCcGMwSnliM2R6WlhJZ1BTQW9LQ2tnUFQ0Z2UxeHVJQ0FnSUhSeWVYdGNiaUFnSUNBZ0lDQWdjbVYwZFhKdUlIUjVjR1Z2WmlCM2FXNWtiM2NnSVQwOUlDZDFibVJsWm1sdVpXUW5PMXh1SUNBZ0lIMWpZWFJqYUNobGNuSXBlMXh1SUNBZ0lDQWdJQ0J5WlhSMWNtNGdabUZzYzJVN1hHNGdJQ0FnZlZ4dWZTa29LVHRjYmx4dVhHNWxlSEJ2Y25RZ1kyOXVjM1FnZDJsMGFGTjBZVzVrWVhKa1FtRnpaVU56YzBOc1lYTnpJRDBnUEUwZ1pYaDBaVzVrY3lCRGIzSmxRMjl1ZEdGcGJtVnlVSEp2Y0dWeWRHbGxjejVjYmloY2JpQWdJQ0JEYjIxd2IyNWxiblE2UTI5dGNHOXVaVzUwVkhsd1pUeE5QaXhjYmlBZ0lDQmtaV1poZFd4MFFtRnpaVU56YzBOc1lYTnpPbk4wY21sdVoxeHVLVHBTWldGamRDNURiMjF3YjI1bGJuUlVlWEJsUEUwK0lDQTlQaUI3WEc0Z0lDQWdjbVYwZFhKdUlDaHdjbTl3Y3pwTktTQTlQaUI3WEc1Y2JpQWdJQ0FnSUNBZ1kyOXVjM1FnWW1GelpVTnpjME5zWVhOeklEMGdjSEp2Y0hNdVltRnpaVU56YzBOc1lYTnpPMXh1SUNBZ0lDQWdJQ0JqYjI1emRDQjBiMEpsVlhObFpFTnpjME5zWVhOeklEMGdZbUZ6WlVOemMwTnNZWE56SUNZbUlHSmhjMlZEYzNORGJHRnpjeTUwY21sdEtDa3ViR1Z1WjNSb0lENGdNQ0EvSUdKaGMyVkRjM05EYkdGemN5QTZJR1JsWm1GMWJIUkNZWE5sUTNOelEyeGhjM003WEc1Y2JpQWdJQ0FnSUNBZ1kyOXVjM1FnYldWeVoyVmtVSEp2Y0hNNklFMDlJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDNHVMbkJ5YjNCekxGeHVJQ0FnSUNBZ0lDQWdJQ0FnWW1GelpVTnpjME5zWVhOek9pQjBiMEpsVlhObFpFTnpjME5zWVhOelhHNGdJQ0FnSUNBZ0lIMDdYRzVjYmlBZ0lDQWdJQ0FnY21WMGRYSnVJRHhEYjIxd2IyNWxiblFnZXk0dUxtMWxjbWRsWkZCeWIzQnpmU0F2UGp0Y2JpQWdJQ0I5WEc1OU8xeHVYRzVjYmx4dVpYaHdiM0owSUdOdmJuTjBJSGRwZEdoQmRYUm9iM0pRWVc1bGJGTjNhWFJqYUNBOUlEeE5JR1Y0ZEdWdVpITWdRMjl5WlVOdmJuUmhhVzVsY2xCeWIzQmxjblJwWlhNK0tGeHVJQ0FnSUVOdmJYQnZibVZ1ZERwRGIyMXdiMjVsYm5SVWVYQmxQRTArWEc0cE9sSmxZV04wTGtOdmJYQnZibVZ1ZEZSNWNHVThUVDRnUFQ0Z2UxeHVYRzRnSUNBZ2NtVjBkWEp1SUdOc1lYTnpJR1Y0ZEdWdVpITWdVbVZoWTNRdVEyOXRjRzl1Wlc1MFBFMHNJRUYxZEdodmNsQmhibVZzVTNkcGRHTm9VM1JoZEdVK0lIdGNibHh1SUNBZ0lDQWdJQ0F2TDBCMGN5MXBaMjV2Y21WY2JpQWdJQ0FnSUNBZ2JXVnpjMkZuWlVOb1lXNXVaV3c3WEc1Y2JpQWdJQ0FnSUNBZ1kyOXVjM1J5ZFdOMGIzSW9jSEp2Y0hNNlRTa2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ2MzVndaWElvY0hKdmNITXBPMXh1SUNBZ0lDQWdJQ0FnSUNBZ2RHaHBjeTV6ZEdGMFpTQTlJSHQ5WEc1Y2JpQWdJQ0FnSUNBZ0lDQWdJQzh2UUhSekxXbG5ibTl5WlZ4dUlDQWdJQ0FnSUNBZ0lDQWdhV1lnS0dselFuSnZkM05sY2lBbUppQjNhVzVrYjNjdVIzSmhibWwwWlNBbUppQjNhVzVrYjNjdVIzSmhibWwwWlM1aGRYUm9iM0lnSmlZZ2QybHVaRzkzTGtkeVlXNXBkR1V1WVhWMGFHOXlMazFsYzNOaFoyVkRhR0Z1Ym1Wc0tTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdMeTlBZEhNdGFXZHViM0psWEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnZEdocGN5NXRaWE56WVdkbFEyaGhibTVsYkNBOUlHNWxkeUIzYVc1a2IzY3VSM0poYm1sMFpTNWhkWFJvYjNJdVRXVnpjMkZuWlVOb1lXNXVaV3dvWENKamNXRjFkR2h2Y2x3aUxDQjNhVzVrYjNjcE8xeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lIUm9hWE11WTJGc2JHSmhZMnNnUFNCMGFHbHpMbU5oYkd4aVlXTnJMbUpwYm1Rb2RHaHBjeWs3WEc0Z0lDQWdJQ0FnSUNBZ0lDQjlYRzRnSUNBZ0lDQWdJSDFjYmx4dUlDQWdJQ0FnSUNCallXeHNZbUZqYXlodFpYTnpZV2RsT21GdWVTbDdYRzRnSUNBZ0lDQWdJQ0FnSUNCcFppQW9iV1Z6YzJGblpTNWtZWFJoSUNZbUlHMWxjM05oWjJVdVpHRjBZUzVwWkNBOVBUMGdkR2hwY3k1d2NtOXdjeTVqY1ZCaGRHZ3BJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0JwWmlBb2JXVnpjMkZuWlM1a1lYUmhMbTl3WlhKaGRHbHZiaUE5UFQwZ1hDSnVZWFpwWjJGMFpWd2lLU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lHTnZibk4wSUdsdVpHVjRJRDBnYldWemMyRm5aUzVrWVhSaExtbHVaR1Y0SUdGeklHNTFiV0psY2p0Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdkR2hwY3k1elpYUlRkR0YwWlNoN1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCaFkzUnBkbVZKYm1SbGVFWnliMjFCZFhSb2IzSlFZVzVsYkRvZ2FXNWtaWGhjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2ZTbGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQjlYRzRnSUNBZ0lDQWdJQ0FnSUNCOVhHNGdJQ0FnSUNBZ0lIMWNibHh1SUNBZ0lDQWdJQ0JqYjIxd2IyNWxiblJFYVdSTmIzVnVkQ2dwT2lCMmIybGtJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lHbG1LSFJvYVhNdWJXVnpjMkZuWlVOb1lXNXVaV3dwZTF4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUhSb2FYTXViV1Z6YzJGblpVTm9ZVzV1Wld3dWMzVmljMk55YVdKbFVtVnhkV1Z6ZEUxbGMzTmhaMlVvWENKamJYQXVjR0Z1Wld4amIyNTBZV2x1WlhKY0lpd2dkR2hwY3k1allXeHNZbUZqYXlrN1hHNGdJQ0FnSUNBZ0lDQWdJQ0I5WEc0Z0lDQWdJQ0FnSUgxY2JseHVJQ0FnSUNBZ0lDQmpiMjF3YjI1bGJuUlhhV3hzVlc1dGIzVnVkQ2dwT2lCMmIybGtJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lHbG1LSFJvYVhNdWJXVnpjMkZuWlVOb1lXNXVaV3dwZTF4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUhSb2FYTXViV1Z6YzJGblpVTm9ZVzV1Wld3dWRXNXpkV0p6WTNKcFltVlNaWEYxWlhOMFRXVnpjMkZuWlNoY0ltTnRjQzV3WVc1bGJHTnZiblJoYVc1bGNsd2lMQ0IwYUdsekxtTmhiR3hpWVdOcktUdGNiaUFnSUNBZ0lDQWdJQ0FnSUgxY2JpQWdJQ0FnSUNBZ2ZWeHVYRzVjYmlBZ0lDQWdJQ0FnY21WdVpHVnlLQ2w3WEc0Z0lDQWdJQ0FnSUNBZ0lDQnlaWFIxY200Z1BFTnZiWEJ2Ym1WdWRDQjdMaTR1ZEdocGN5NXdjbTl3YzMwZ1lXTjBhWFpsU1c1a1pYaEdjbTl0UVhWMGFHOXlVR0Z1Wld3OWUzUm9hWE11YzNSaGRHVXVZV04wYVhabFNXNWtaWGhHY205dFFYVjBhRzl5VUdGdVpXeDlJQzgrTzF4dUlDQWdJQ0FnSUNCOVhHNGdJQ0FnZlZ4dVhHNTlPMXh1SWwxOSIsIi8qXG4gKiAgQ29weXJpZ2h0IDIwMjAgQWRvYmVcbiAqXG4gKiAgTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqICB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiAgWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICAgICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiAgVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqICBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqICBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiAgbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IENvbXBvbmVudE1hcHBpbmcsIENvbnRhaW5lciwgUmVzcG9uc2l2ZUdyaWQgfSBmcm9tICdAYWRvYmUvYWVtLXJlYWN0LWVkaXRhYmxlLWNvbXBvbmVudHMnO1xuaW1wb3J0IHsgd2l0aFN0YW5kYXJkQmFzZUNzc0NsYXNzIH0gZnJvbSAnLi4vLi4vLi4vQWJzdHJhY3RDb3JlQ29udGFpbmVyQ29tcG9uZW50JztcbmNsYXNzIENvbnRhaW5lclYxSW1wbCBleHRlbmRzIENvbnRhaW5lciB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgICAgICAvL0B0cy1pZ25vcmVcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIGNvbXBvbmVudE1hcHBpbmc6IHRoaXMucHJvcHMuY29tcG9uZW50TWFwcGluZyB8fCBDb21wb25lbnRNYXBwaW5nLFxuICAgICAgICB9O1xuICAgICAgICB0aGlzLm1haW5EaXYgPSBSZWFjdC5jcmVhdGVSZWYoKTtcbiAgICB9XG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgIGlmICh0aGlzLm1haW5EaXYuY3VycmVudCkge1xuICAgICAgICAgICAgdGhpcy5tYWluRGl2LmN1cnJlbnQuc2V0QXR0cmlidXRlKCdzdHlsZScsIHRoaXMucHJvcHMuYmFja2dyb3VuZFN0eWxlKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBjb21wb25lbnREaWRVcGRhdGUoKSB7XG4gICAgICAgIGlmICh0aGlzLm1haW5EaXYuY3VycmVudCkge1xuICAgICAgICAgICAgdGhpcy5tYWluRGl2LmN1cnJlbnQuc2V0QXR0cmlidXRlKCdzdHlsZScsIHRoaXMucHJvcHMuYmFja2dyb3VuZFN0eWxlKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBnZXQgY29yZUNvbnRhaW5lclByb3BzKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgY2xhc3NOYW1lOiAnY29udGFpbmVyIHJlc3BvbnNpdmVncmlkJ1xuICAgICAgICB9O1xuICAgIH1cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGNvbnN0IHsgY29tcG9uZW50TWFwcGluZywgYWxsb3dlZENvbXBvbmVudHMsIGNoaWxkcmVuLCBjcVBhdGgsIGNxSXRlbXMsIGNxSXRlbXNPcmRlciwgaXNJbkVkaXRvciwgLi4ub3RoZXJQcm9wcyB9ID0gdGhpcy5wcm9wcztcbiAgICAgICAgY29uc3QgZ3JpZFByb3BzID0ge1xuICAgICAgICAgICAgYWxsb3dlZENvbXBvbmVudHM6IHRoaXMucHJvcHMuYWxsb3dlZENvbXBvbmVudHMsXG4gICAgICAgICAgICBncmlkQ2xhc3NOYW1lczogdGhpcy5wcm9wcy5ncmlkQ2xhc3NOYW1lcyxcbiAgICAgICAgICAgIGNvbHVtbkNsYXNzTmFtZXM6IHRoaXMucHJvcHMuY29sdW1uQ2xhc3NOYW1lcyxcbiAgICAgICAgICAgIGNxSXRlbXM6IHRoaXMucHJvcHMuY3FJdGVtcyxcbiAgICAgICAgICAgIGNxSXRlbXNPcmRlcjogdGhpcy5wcm9wcy5jcUl0ZW1zT3JkZXIsXG4gICAgICAgICAgICB0aXRsZTogXCJcIixcbiAgICAgICAgICAgIGNxUGF0aDogdGhpcy5wcm9wcy5jcVBhdGgsXG4gICAgICAgICAgICBpc0luRWRpdG9yOiB0aGlzLnByb3BzLmlzSW5FZGl0b3JcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIE9iamVjdC5hc3NpZ24oe30sIHRoaXMuY29yZUNvbnRhaW5lclByb3BzKSxcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyByZWY6IHRoaXMubWFpbkRpdiwgaWQ6IHRoaXMucHJvcHMuaWQsIGNsYXNzTmFtZTogdGhpcy5wcm9wcy5iYXNlQ3NzQ2xhc3MgfSxcbiAgICAgICAgICAgICAgICAodGhpcy5wcm9wcy5sYXlvdXQgJiYgdGhpcy5wcm9wcy5sYXlvdXQgPT09ICdzaW1wbGUnKSAmJlxuICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KENvbnRhaW5lciwgeyBjb21wb25lbnRNYXBwaW5nOiB0aGlzLnN0YXRlLmNvbXBvbmVudE1hcHBpbmcsIGNxRm9yY2VSZWxvYWQ6IHRoaXMucHJvcHMuY3FGb3JjZVJlbG9hZCwgY3FQYXRoOiB0aGlzLnByb3BzLmNxUGF0aCwgY3FJdGVtczogdGhpcy5wcm9wcy5jcUl0ZW1zLCBjcUl0ZW1zT3JkZXI6IHRoaXMucHJvcHMuY3FJdGVtc09yZGVyLCBpc0luRWRpdG9yOiB0aGlzLnByb3BzLmlzSW5FZGl0b3IgfSwgdGhpcy5jaGlsZENvbXBvbmVudHMpLFxuICAgICAgICAgICAgICAgICghdGhpcy5wcm9wcy5sYXlvdXQgfHwgdGhpcy5wcm9wcy5sYXlvdXQgIT09ICdzaW1wbGUnKSAmJlxuICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFJlc3BvbnNpdmVHcmlkLCBPYmplY3QuYXNzaWduKHt9LCBncmlkUHJvcHMpKSkpKTtcbiAgICB9XG59XG5leHBvcnQgZGVmYXVsdCB3aXRoU3RhbmRhcmRCYXNlQ3NzQ2xhc3MoQ29udGFpbmVyVjFJbXBsLCBcImNtcC1jb250YWluZXJcIik7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lRMjl1ZEdGcGJtVnlWakV1YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pSWl3aWMyOTFjbU5sY3lJNld5SkRiMjUwWVdsdVpYSldNUzUwYzNnaVhTd2libUZ0WlhNaU9sdGRMQ0p0WVhCd2FXNW5jeUk2SWtGQlFVRTdPenM3T3pzN096czdPenM3TzBkQlkwYzdRVUZGU0N4UFFVRlBMRXRCUVd0Q0xFMUJRVTBzVDBGQlR5eERRVUZETzBGQlJYWkRMRTlCUVU4c1JVRkJReXhuUWtGQlowSXNSVUZCUlN4VFFVRlRMRVZCUVVVc1kwRkJZeXhGUVVFeVFpeE5RVUZOTEhORFFVRnpReXhEUVVGRE8wRkJRek5JTEU5QlFVOHNSVUZCT0VNc2QwSkJRWGRDTEVWQlFVTXNUVUZCVFN4NVEwRkJlVU1zUTBGQlF6dEJRVk01U0N4TlFVRk5MR1ZCUVdkQ0xGTkJRVkVzVTBGQmJVUTdTVUZKTjBVc1dVRkJXU3hMUVVFeVFqdFJRVU51UXl4TFFVRkxMRU5CUVVNc1MwRkJTeXhEUVVGRExFTkJRVU03VVVGRllpeFpRVUZaTzFGQlExb3NTVUZCU1N4RFFVRkRMRXRCUVVzc1IwRkJSenRaUVVOVUxHZENRVUZuUWl4RlFVRkZMRWxCUVVrc1EwRkJReXhMUVVGTExFTkJRVU1zWjBKQlFXZENMRWxCUVVrc1owSkJRV2RDTzFOQlEzQkZMRU5CUVVNN1VVRkRSaXhKUVVGSkxFTkJRVU1zVDBGQlR5eEhRVUZITEV0QlFVc3NRMEZCUXl4VFFVRlRMRVZCUVVVc1EwRkJRenRKUVVOeVF5eERRVUZETzBsQlJVUXNhVUpCUVdsQ08xRkJRMklzU1VGQlNTeEpRVUZKTEVOQlFVTXNUMEZCVHl4RFFVRkRMRTlCUVU4c1JVRkJSVHRaUVVOMFFpeEpRVUZKTEVOQlFVTXNUMEZCVHl4RFFVRkRMRTlCUVU4c1EwRkJReXhaUVVGWkxFTkJRVU1zVDBGQlR5eEZRVUZGTEVsQlFVa3NRMEZCUXl4TFFVRkxMRU5CUVVNc1pVRkJaU3hEUVVGRExFTkJRVU03VTBGRE1VVTdTVUZGVEN4RFFVRkRPMGxCUlVRc2EwSkJRV3RDTzFGQlEyUXNTVUZCU1N4SlFVRkpMRU5CUVVNc1QwRkJUeXhEUVVGRExFOUJRVThzUlVGQlJUdFpRVU4wUWl4SlFVRkpMRU5CUVVNc1QwRkJUeXhEUVVGRExFOUJRVThzUTBGQlF5eFpRVUZaTEVOQlFVTXNUMEZCVHl4RlFVRkZMRWxCUVVrc1EwRkJReXhMUVVGTExFTkJRVU1zWlVGQlpTeERRVUZETEVOQlFVTTdVMEZETVVVN1NVRkRUQ3hEUVVGRE8wbEJSVVFzU1VGQlNTeHJRa0ZCYTBJN1VVRkRiRUlzVDBGQlR6dFpRVU5JTEZOQlFWTXNSVUZCUlN3d1FrRkJNRUk3VTBGRGVFTXNRMEZCUXp0SlFVTk9MRU5CUVVNN1NVRkhSQ3hOUVVGTk8xRkJRMFFzVFVGQlRTeEZRVUZETEdkQ1FVRm5RaXhGUVVGRExHbENRVUZwUWl4RlFVRkRMRkZCUVZFc1JVRkJReXhOUVVGTkxFVkJRVU1zVDBGQlR5eEZRVUZETEZsQlFWa3NSVUZCUXl4VlFVRlZMRVZCUVVVc1IwRkJSeXhWUVVGVkxFVkJRVU1zUjBGQlJ5eEpRVUZKTEVOQlFVTXNTMEZCU3l4RFFVRkRPMUZCUlhaSUxFMUJRVTBzVTBGQlV5eEhRVUUwUWp0WlFVTjRReXhwUWtGQmFVSXNSVUZCUlN4SlFVRkpMRU5CUVVNc1MwRkJTeXhEUVVGRExHbENRVUZwUWp0WlFVTXZReXhqUVVGakxFVkJRVVVzU1VGQlNTeERRVUZETEV0QlFVc3NRMEZCUXl4alFVRmpPMWxCUTNwRExHZENRVUZuUWl4RlFVRkRMRWxCUVVrc1EwRkJReXhMUVVGTExFTkJRVU1zWjBKQlFXZENPMWxCUXpWRExFOUJRVThzUlVGQlF5eEpRVUZKTEVOQlFVTXNTMEZCU3l4RFFVRkRMRTlCUVU4N1dVRkRNVUlzV1VGQldTeEZRVUZETEVsQlFVa3NRMEZCUXl4TFFVRkxMRU5CUVVNc1dVRkJXVHRaUVVOd1F5eExRVUZMTEVWQlFVTXNSVUZCUlR0WlFVTlNMRTFCUVUwc1JVRkJSU3hKUVVGSkxFTkJRVU1zUzBGQlN5eERRVUZETEUxQlFVMDdXVUZEZWtJc1ZVRkJWU3hGUVVGRExFbEJRVWtzUTBGQlF5eExRVUZMTEVOQlFVTXNWVUZCVlR0VFFVTnNReXhEUVVGRE8xRkJRMGdzVDBGQlR5eERRVU5JTERaRFFVRlRMRWxCUVVrc1EwRkJReXhyUWtGQmEwSTdXVUZETlVJc05rSkJRVXNzUjBGQlJ5eEZRVUZGTEVsQlFVa3NRMEZCUXl4UFFVRlBMRVZCUTJwQ0xFVkJRVVVzUlVGQlJTeEpRVUZKTEVOQlFVTXNTMEZCU3l4RFFVRkRMRVZCUVVVc1JVRkRha0lzVTBGQlV5eEZRVUZGTEVsQlFVa3NRMEZCUXl4TFFVRkxMRU5CUVVNc1dVRkJXVHRuUWtGRmJFTXNRMEZCUXl4SlFVRkpMRU5CUVVNc1MwRkJTeXhEUVVGRExFMUJRVTBzU1VGQlNTeEpRVUZKTEVOQlFVTXNTMEZCU3l4RFFVRkRMRTFCUVUwc1MwRkJTeXhSUVVGUkxFTkJRVU03YjBKQlF6VkRMRzlDUVVGRExGTkJRVk1zU1VGRFVpeG5Ra0ZCWjBJc1JVRkJSU3hKUVVGSkxFTkJRVU1zUzBGQlN5eERRVUZETEdkQ1FVRm5RaXhGUVVNM1F5eGhRVUZoTEVWQlFVVXNTVUZCU1N4RFFVRkRMRXRCUVVzc1EwRkJReXhoUVVGaExFVkJRM1pETEUxQlFVMHNSVUZCUlN4SlFVRkpMRU5CUVVNc1MwRkJTeXhEUVVGRExFMUJRVTBzUlVGRGVrSXNUMEZCVHl4RlFVRkZMRWxCUVVrc1EwRkJReXhMUVVGTExFTkJRVU1zVDBGQlR5eEZRVU16UWl4WlFVRlpMRVZCUVVVc1NVRkJTU3hEUVVGRExFdEJRVXNzUTBGQlF5eFpRVUZaTEVWQlEzSkRMRlZCUVZVc1JVRkJSU3hKUVVGSkxFTkJRVU1zUzBGQlN5eERRVUZETEZWQlFWVXNTVUZETlVJc1NVRkJTU3hEUVVGRExHVkJRV1VzUTBGRFlqdG5Ra0ZGZGtJc1EwRkJReXhEUVVGRExFbEJRVWtzUTBGQlF5eExRVUZMTEVOQlFVTXNUVUZCVFN4SlFVRkpMRWxCUVVrc1EwRkJReXhMUVVGTExFTkJRVU1zVFVGQlRTeExRVUZMTEZGQlFWRXNRMEZCUXp0dlFrRkRNME1zYjBKQlFVTXNZMEZCWXl4dlFrRkJTeXhUUVVGVExFVkJRVzFDTEVOQlNURkVMRU5CUTBvc1EwRkRWQ3hEUVVGQk8wbEJRMHdzUTBGQlF6dERRVVZLTzBGQlJVUXNaVUZCWlN4M1FrRkJkMElzUTBGQlF5eGxRVUZsTEVWQlFVVXNaVUZCWlN4RFFVRkRMRU5CUVVNaUxDSnpiM1Z5WTJWelEyOXVkR1Z1ZENJNld5SXZLbHh1SUNvZ0lFTnZjSGx5YVdkb2RDQXlNREl3SUVGa2IySmxYRzRnS2x4dUlDb2dJRXhwWTJWdWMyVmtJSFZ1WkdWeUlIUm9aU0JCY0dGamFHVWdUR2xqWlc1elpTd2dWbVZ5YzJsdmJpQXlMakFnS0hSb1pTQmNJa3hwWTJWdWMyVmNJaWs3WEc0Z0tpQWdlVzkxSUcxaGVTQnViM1FnZFhObElIUm9hWE1nWm1sc1pTQmxlR05sY0hRZ2FXNGdZMjl0Y0d4cFlXNWpaU0IzYVhSb0lIUm9aU0JNYVdObGJuTmxMbHh1SUNvZ0lGbHZkU0J0WVhrZ2IySjBZV2x1SUdFZ1kyOXdlU0J2WmlCMGFHVWdUR2xqWlc1elpTQmhkRnh1SUNwY2JpQXFJQ0FnSUNBZ2FIUjBjRG92TDNkM2R5NWhjR0ZqYUdVdWIzSm5MMnhwWTJWdWMyVnpMMHhKUTBWT1UwVXRNaTR3WEc0Z0tseHVJQ29nSUZWdWJHVnpjeUJ5WlhGMWFYSmxaQ0JpZVNCaGNIQnNhV05oWW14bElHeGhkeUJ2Y2lCaFozSmxaV1FnZEc4Z2FXNGdkM0pwZEdsdVp5d2djMjltZEhkaGNtVmNiaUFxSUNCa2FYTjBjbWxpZFhSbFpDQjFibVJsY2lCMGFHVWdUR2xqWlc1elpTQnBjeUJrYVhOMGNtbGlkWFJsWkNCdmJpQmhiaUJjSWtGVElFbFRYQ0lnUWtGVFNWTXNYRzRnS2lBZ1YwbFVTRTlWVkNCWFFWSlNRVTVVU1VWVElFOVNJRU5QVGtSSlZFbFBUbE1nVDBZZ1FVNVpJRXRKVGtRc0lHVnBkR2hsY2lCbGVIQnlaWE56SUc5eUlHbHRjR3hwWldRdVhHNGdLaUFnVTJWbElIUm9aU0JNYVdObGJuTmxJR1p2Y2lCMGFHVWdjM0JsWTJsbWFXTWdiR0Z1WjNWaFoyVWdaMjkyWlhKdWFXNW5JSEJsY20xcGMzTnBiMjV6SUdGdVpGeHVJQ29nSUd4cGJXbDBZWFJwYjI1eklIVnVaR1Z5SUhSb1pTQk1hV05sYm5ObExseHVJQ292WEc1Y2JtbHRjRzl5ZENCU1pXRmpkQ3dnZTFKbFprOWlhbVZqZEgwZ1puSnZiU0JjSW5KbFlXTjBYQ0k3WEc1Y2JtbHRjRzl5ZENCN1EyOXRjRzl1Wlc1MFRXRndjR2x1Wnl3Z1EyOXVkR0ZwYm1WeUxDQlNaWE53YjI1emFYWmxSM0pwWkN3Z1VtVnpjRzl1YzJsMlpVZHlhV1JRY205d1pYSjBhV1Z6ZlNCbWNtOXRJQ2RBWVdSdlltVXZZV1Z0TFhKbFlXTjBMV1ZrYVhSaFlteGxMV052YlhCdmJtVnVkSE1uTzF4dWFXMXdiM0owSUh0RGIzSmxRMjl1ZEdGcGJtVnlVSEp2Y0dWeWRHbGxjeXdnUTI5eVpVTnZiblJoYVc1bGNsTjBZWFJsTENCM2FYUm9VM1JoYm1SaGNtUkNZWE5sUTNOelEyeGhjM045SUdaeWIyMGdKeTR1THk0dUx5NHVMMEZpYzNSeVlXTjBRMjl5WlVOdmJuUmhhVzVsY2tOdmJYQnZibVZ1ZENjN1hHNWNibVY0Y0c5eWRDQnBiblJsY21aaFkyVWdRMjl1ZEdGcGJtVnlWakZRY205d1pYSjBhV1Z6SUdWNGRHVnVaSE1nUTI5eVpVTnZiblJoYVc1bGNsQnliM0JsY25ScFpYTXNVbVZ6Y0c5dWMybDJaVWR5YVdSUWNtOXdaWEowYVdWemUxeHVJQ0FnSUdKaFkydG5jbTkxYm1SVGRIbHNaVHB6ZEhKcGJtYzdYRzRnSUNBZ2FXUTZjM1J5YVc1bk8xeHVJQ0FnSUd4aGVXOTFkRDg2SUNkeVpYTndiMjV6YVhabFIzSnBaQ2NnZkNBbmMybHRjR3hsSnp0Y2JuMWNibHh1WEc1amJHRnpjeUJEYjI1MFlXbHVaWEpXTVVsdGNHd2daWGgwWlc1a2N5QkRiMjUwWVdsdVpYSThRMjl1ZEdGcGJtVnlWakZRY205d1pYSjBhV1Z6TEVOdmNtVkRiMjUwWVdsdVpYSlRkR0YwWlQ0Z2UxeHVYRzRnSUNBZ2JXRnBia1JwZGpwU1pXWlBZbXBsWTNROFNGUk5URVJwZGtWc1pXMWxiblErTzF4dVhHNGdJQ0FnWTI5dWMzUnlkV04wYjNJb2NISnZjSE02UTI5dWRHRnBibVZ5VmpGUWNtOXdaWEowYVdWektTQjdYRzRnSUNBZ0lDQWdJSE4xY0dWeUtIQnliM0J6S1R0Y2JseHVJQ0FnSUNBZ0lDQXZMMEIwY3kxcFoyNXZjbVZjYmlBZ0lDQWdJQ0FnZEdocGN5NXpkR0YwWlNBOUlIdGNiaUFnSUNBZ0lDQWdJQ0FnSUdOdmJYQnZibVZ1ZEUxaGNIQnBibWM2SUhSb2FYTXVjSEp2Y0hNdVkyOXRjRzl1Wlc1MFRXRndjR2x1WnlCOGZDQkRiMjF3YjI1bGJuUk5ZWEJ3YVc1bkxGeHVJQ0FnSUNBZ0lDQjlPMXh1SUNBZ0lDQWdJQ0IwYUdsekxtMWhhVzVFYVhZZ1BTQlNaV0ZqZEM1amNtVmhkR1ZTWldZb0tUdGNiaUFnSUNCOVhHNWNiaUFnSUNCamIyMXdiMjVsYm5SRWFXUk5iM1Z1ZENncElIdGNiaUFnSUNBZ0lDQWdhV1lnS0hSb2FYTXViV0ZwYmtScGRpNWpkWEp5Wlc1MEtTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNCMGFHbHpMbTFoYVc1RWFYWXVZM1Z5Y21WdWRDNXpaWFJCZEhSeWFXSjFkR1VvSjNOMGVXeGxKeXdnZEdocGN5NXdjbTl3Y3k1aVlXTnJaM0p2ZFc1a1UzUjViR1VwTzF4dUlDQWdJQ0FnSUNCOVhHNWNiaUFnSUNCOVhHNWNiaUFnSUNCamIyMXdiMjVsYm5SRWFXUlZjR1JoZEdVb0tTQjdYRzRnSUNBZ0lDQWdJR2xtSUNoMGFHbHpMbTFoYVc1RWFYWXVZM1Z5Y21WdWRDa2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ2RHaHBjeTV0WVdsdVJHbDJMbU4xY25KbGJuUXVjMlYwUVhSMGNtbGlkWFJsS0NkemRIbHNaU2NzSUhSb2FYTXVjSEp2Y0hNdVltRmphMmR5YjNWdVpGTjBlV3hsS1R0Y2JpQWdJQ0FnSUNBZ2ZWeHVJQ0FnSUgxY2JseHVJQ0FnSUdkbGRDQmpiM0psUTI5dWRHRnBibVZ5VUhKdmNITW9LU0I3WEc0Z0lDQWdJQ0FnSUhKbGRIVnliaUI3WEc0Z0lDQWdJQ0FnSUNBZ0lDQmpiR0Z6YzA1aGJXVTZJQ2RqYjI1MFlXbHVaWElnY21WemNHOXVjMmwyWldkeWFXUW5YRzRnSUNBZ0lDQWdJSDA3WEc0Z0lDQWdmVnh1WEc1Y2JpQWdJQ0J5Wlc1a1pYSW9LU0I3WEc0Z0lDQWdJQ0FnSUNCamIyNXpkQ0I3WTI5dGNHOXVaVzUwVFdGd2NHbHVaeXhoYkd4dmQyVmtRMjl0Y0c5dVpXNTBjeXhqYUdsc1pISmxiaXhqY1ZCaGRHZ3NZM0ZKZEdWdGN5eGpjVWwwWlcxelQzSmtaWElzYVhOSmJrVmthWFJ2Y2l3Z0xpNHViM1JvWlhKUWNtOXdjMzBnUFNCMGFHbHpMbkJ5YjNCek8xeHVYRzRnSUNBZ0lDQWdJQ0JqYjI1emRDQm5jbWxrVUhKdmNITTZVbVZ6Y0c5dWMybDJaVWR5YVdSUWNtOXdaWEowYVdWeklEMGdlMXh1SUNBZ0lDQWdJQ0FnSUNBZ1lXeHNiM2RsWkVOdmJYQnZibVZ1ZEhNNklIUm9hWE11Y0hKdmNITXVZV3hzYjNkbFpFTnZiWEJ2Ym1WdWRITXNYRzRnSUNBZ0lDQWdJQ0FnSUNCbmNtbGtRMnhoYzNOT1lXMWxjem9nZEdocGN5NXdjbTl3Y3k1bmNtbGtRMnhoYzNOT1lXMWxjeXhjYmlBZ0lDQWdJQ0FnSUNBZ0lHTnZiSFZ0YmtOc1lYTnpUbUZ0WlhNNmRHaHBjeTV3Y205d2N5NWpiMngxYlc1RGJHRnpjMDVoYldWekxGeHVJQ0FnSUNBZ0lDQWdJQ0FnWTNGSmRHVnRjenAwYUdsekxuQnliM0J6TG1OeFNYUmxiWE1zWEc0Z0lDQWdJQ0FnSUNBZ0lDQmpjVWwwWlcxelQzSmtaWEk2ZEdocGN5NXdjbTl3Y3k1amNVbDBaVzF6VDNKa1pYSXNYRzRnSUNBZ0lDQWdJQ0FnSUNCMGFYUnNaVHBjSWx3aUxGeHVJQ0FnSUNBZ0lDQWdJQ0FnWTNGUVlYUm9PaUIwYUdsekxuQnliM0J6TG1OeFVHRjBhQ3hjYmlBZ0lDQWdJQ0FnSUNBZ0lHbHpTVzVGWkdsMGIzSTZkR2hwY3k1d2NtOXdjeTVwYzBsdVJXUnBkRzl5WEc0Z0lDQWdJQ0FnSUNCOU8xeHVJQ0FnSUNBZ0lDQnlaWFIxY200Z0tGeHVJQ0FnSUNBZ0lDQWdJQ0FnUEdScGRpQjdMaTR1ZEdocGN5NWpiM0psUTI5dWRHRnBibVZ5VUhKdmNITjlQbHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJRHhrYVhZZ2NtVm1QWHQwYUdsekxtMWhhVzVFYVhaOVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0JwWkQxN2RHaHBjeTV3Y205d2N5NXBaSDFjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lHTnNZWE56VG1GdFpUMTdkR2hwY3k1d2NtOXdjeTVpWVhObFEzTnpRMnhoYzNOOVBseHVYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUhzb2RHaHBjeTV3Y205d2N5NXNZWGx2ZFhRZ0ppWWdkR2hwY3k1d2NtOXdjeTVzWVhsdmRYUWdQVDA5SUNkemFXMXdiR1VuS1NBZ0ppWmNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUR4RGIyNTBZV2x1WlhKY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnWTI5dGNHOXVaVzUwVFdGd2NHbHVaejE3ZEdocGN5NXpkR0YwWlM1amIyMXdiMjVsYm5STllYQndhVzVuZlZ4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0JqY1VadmNtTmxVbVZzYjJGa1BYdDBhR2x6TG5CeWIzQnpMbU54Um05eVkyVlNaV3h2WVdSOVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUdOeFVHRjBhRDE3ZEdocGN5NXdjbTl3Y3k1amNWQmhkR2g5WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJR054U1hSbGJYTTllM1JvYVhNdWNISnZjSE11WTNGSmRHVnRjMzFjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdZM0ZKZEdWdGMwOXlaR1Z5UFh0MGFHbHpMbkJ5YjNCekxtTnhTWFJsYlhOUGNtUmxjbjFjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdhWE5KYmtWa2FYUnZjajE3ZEdocGN5NXdjbTl3Y3k1cGMwbHVSV1JwZEc5eWZUNWNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJSHQwYUdsekxtTm9hV3hrUTI5dGNHOXVaVzUwYzMxY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnUEM5RGIyNTBZV2x1WlhJK2ZWeHVYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUhzb0lYUm9hWE11Y0hKdmNITXViR0Y1YjNWMElIeDhJSFJvYVhNdWNISnZjSE11YkdGNWIzVjBJQ0U5UFNBbmMybHRjR3hsSnlrZ0ppWmNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ1BGSmxjM0J2Ym5OcGRtVkhjbWxrSUhzdUxpNW5jbWxrVUhKdmNITjlQand2VW1WemNHOXVjMmwyWlVkeWFXUStYRzVjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lIMWNibHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJRHd2WkdsMlBseHVJQ0FnSUNBZ0lDQWdJQ0FnUEM5a2FYWStYRzRnSUNBZ0lDQWdJQ2xjYmlBZ0lDQjlYRzVjYm4xY2JseHVaWGh3YjNKMElHUmxabUYxYkhRZ2QybDBhRk4wWVc1a1lYSmtRbUZ6WlVOemMwTnNZWE56S0VOdmJuUmhhVzVsY2xZeFNXMXdiQ3dnWENKamJYQXRZMjl1ZEdGcGJtVnlYQ0lwTzF4dUlsMTkiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAYWRvYmUvYWVtLXJlYWN0LWVkaXRhYmxlLWNvbXBvbmVudHNcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==