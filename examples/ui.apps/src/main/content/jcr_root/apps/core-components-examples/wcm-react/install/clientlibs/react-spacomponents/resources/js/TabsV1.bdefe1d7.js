(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["TabsV1"],{

/***/ "../../react-spa-components/dist/container/tabs/v1/TabsV1.js":
/*!*********************************************************************************************************************!*\
  !*** /Users/raaijmak/workspace/aem-react-core-wcm-components/react-spa-components/dist/container/tabs/v1/TabsV1.js ***!
  \*********************************************************************************************************************/
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

      return __webpack_require__(__webpack_require__.s = 5);
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
      "./src/container/tabs/v1/TabsV1.tsx":
      /*!******************************************!*\
        !*** ./src/container/tabs/v1/TabsV1.tsx ***!
        \******************************************/

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
        /* harmony import */


        var _TabsV1IsEmptyFn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
        /*! ./TabsV1IsEmptyFn */
        "./src/container/tabs/v1/TabsV1IsEmptyFn.ts");
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


        class TabsV1Impl extends _adobe_aem_react_editable_components__WEBPACK_IMPORTED_MODULE_1__["Container"] {
          constructor(props) {
            super(props);
            this.state = {
              activeIndex: !!props.activeItem && props.activeItem.length > 0 ? this.props.cqItemsOrder.indexOf(props.activeItem) : 0,
              componentMapping: this.props.componentMapping || _adobe_aem_react_editable_components__WEBPACK_IMPORTED_MODULE_1__["ComponentMapping"]
            };
            this.handleTabNavClick = this.handleTabNavClick.bind(this);
          }

          componentDidUpdate(prevProps, prevState, snapshot) {
            if (this.props.activeIndexFromAuthorPanel !== undefined && prevProps.activeIndexFromAuthorPanel != this.props.activeIndexFromAuthorPanel) {
              this.setState({
                activeIndex: this.props.activeIndexFromAuthorPanel
              });
            }
          }
          /**
          * Overload childComponents getter to only return the active tab's items.
          * @returns {Object[]} An array with the components instantiated to JSX
          */


          tabbedChildComponents() {
            if (this.props.isInEditor === true) {
              //for editing capabilities to work properly, we always need to render each item.
              //we will hide the disabled items instead.
              return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, this.childComponents.map((item, index) => {
                const isVisible = this.state.activeIndex === index;
                const styles = {
                  display: !isVisible ? 'none' : 'block'
                };
                return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
                  key: "tab-content-" + index,
                  className: this.props.baseCssClass + '__author-tab-content',
                  style: styles
                }, this.childComponents[index]);
              }));
            } else {
              //when the editor is disabled, we can just show the active item only.
              return this.childComponents[this.state.activeIndex];
            }
          }

          handleTabNavClick(index) {
            if (this.state.activeIndex !== index) {
              this.setState({
                activeIndex: index
              });
            }
          }

          tabNavigation() {
            const childComponents = [];

            if (!this.props.cqItems || !this.props.cqItemsOrder) {
              return childComponents;
            }

            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ol", {
              role: "tablist",
              className: this.props.baseCssClass + '__tablist',
              "aria-label": this.props.accessibilityLabel,
              "aria-multiselectable": "false"
            }, this.props.cqItemsOrder.map((item, index) => {
              const tab = this.props.cqItems[item];
              const isActive = index === this.state.activeIndex;
              return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
                role: "tab",
                key: "tab-" + index,
                onClick: () => this.handleTabNavClick(index),
                className: this.props.baseCssClass + '__tab' + (isActive ? ' ' + this.props.baseCssClass + '__tab--active' : ''),
                tabIndex: isActive ? 0 : -1,
                "data-cmp-hook-tabs": "tab"
              }, tab['cq:panelTitle']);
            }));
          }

          get tabContainerProps() {
            const attrs = this.containerProps;
            attrs['className'] = attrs.className + ' ' + this.props.baseCssClass;
            attrs['data-cmp-is'] = 'tabs';
            return attrs;
          }

          render() {
            const isEmpty = Object(_TabsV1IsEmptyFn__WEBPACK_IMPORTED_MODULE_3__["TabsV1IsEmptyFn"])(this.props);
            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", Object.assign({}, this.tabContainerProps), !isEmpty && this.tabNavigation(), !isEmpty && this.tabbedChildComponents(), this.placeholderComponent);
          }

        }
        /* harmony default export */


        __webpack_exports__["default"] = Object(_AbstractCoreContainerComponent__WEBPACK_IMPORTED_MODULE_2__["withStandardBaseCssClass"])(Object(_AbstractCoreContainerComponent__WEBPACK_IMPORTED_MODULE_2__["withAuthorPanelSwitch"])(TabsV1Impl), "cmp-tabs"); //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGFic1YxLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiVGFic1YxLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7R0FjRztBQUVILE9BQU8sS0FBSyxNQUFNLE9BQU8sQ0FBQztBQUMxQixPQUFPLEVBQUMsZ0JBQWdCLEVBQUUsU0FBUyxFQUFDLE1BQU0sc0NBQXNDLENBQUM7QUFDakYsT0FBTyxFQUE4QyxxQkFBcUIsRUFBRSx3QkFBd0IsRUFBb0IsTUFBTSx5Q0FBeUMsQ0FBQztBQUN4SyxPQUFPLEVBQUMsZUFBZSxFQUFDLE1BQU0sbUJBQW1CLENBQUM7QUFlbEQsTUFBTSxVQUFXLFNBQVEsU0FBdUM7SUFFNUQsWUFBWSxLQUFzQjtRQUM5QixLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7UUFFYixJQUFJLENBQUMsS0FBSyxHQUFHO1lBQ1QsV0FBVyxFQUFFLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxVQUFVLElBQUksS0FBSyxDQUFDLFVBQVUsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDeEgsZ0JBQWdCLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxnQkFBZ0IsSUFBSSxnQkFBZ0I7U0FDcEUsQ0FBQztRQUVGLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxJQUFJLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQy9ELENBQUM7SUFFRCxrQkFBa0IsQ0FBQyxTQUFxQyxFQUFFLFNBQWdDLEVBQUUsUUFBYztRQUN0RyxJQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsMEJBQTBCLEtBQUssU0FBUyxJQUFJLFNBQVMsQ0FBQywwQkFBMEIsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLDBCQUEwQixFQUFDO1lBQ3BJ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LENBQUE7UUFFTCxDQUFDLENBQUMsQ0FHVCxDQUNSLENBQUE7SUFFTCxDQUFDO0lBRUQsSUFBSSxpQkFBaUI7UUFDakIsTUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQztRQUNsQyxLQUFLLENBQUMsV0FBVyxDQUFDLEdBQUcsS0FBSyxDQUFDLFNBQVMsR0FBRyxHQUFHLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUM7UUFDckUsS0FBSyxDQUFDLGFBQWEsQ0FBQyxHQUFHLE1BQU0sQ0FBQztRQUM5QixPQUFPLEtBQUssQ0FBQztJQUNqQixDQUFDO0lBRUQsTUFBTTtRQUVGLE1BQU0sT0FBTyxHQUFHLGVBQWUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFFNUMsT0FBTyxDQUNILDZDQUFTLElBQUksQ0FBQyxpQkFBaUI7WUFDekIsQ0FBQyxPQUFPLElBQUksSUFBSSxDQUFDLGFBQWEsRUFBRTtZQUNoQyxDQUFDLE9BQU8sSUFBSSxJQUFJLENBQUMscUJBQXFCLEVBQUU7WUFDeEMsSUFBSSxDQUFDLG9CQUFvQixDQUN6QixDQUNULENBQUE7SUFDTCxDQUFDO0NBRUo7QUFFRCxlQUFlLHdCQUF3QixDQUFDLHFCQUFxQixDQUFDLFVBQVUsQ0FBQyxFQUFFLFVBQVUsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqICBDb3B5cmlnaHQgMjAyMCBBZG9iZVxuICpcbiAqICBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqICBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgICAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqICBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiAgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqICBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQge0NvbXBvbmVudE1hcHBpbmcsIENvbnRhaW5lcn0gZnJvbSAnQGFkb2JlL2FlbS1yZWFjdC1lZGl0YWJsZS1jb21wb25lbnRzJztcbmltcG9ydCB7Q29yZUNvbnRhaW5lclByb3BlcnRpZXMsIENvcmVDb250YWluZXJTdGF0ZSwgd2l0aEF1dGhvclBhbmVsU3dpdGNoLCB3aXRoU3RhbmRhcmRCYXNlQ3NzQ2xhc3MsIENvcmVDb250YWluZXJJdGVtfSBmcm9tIFwiLi4vLi4vLi4vQWJzdHJhY3RDb3JlQ29udGFpbmVyQ29tcG9uZW50XCI7XG5pbXBvcnQge1RhYnNWMUlzRW1wdHlGbn0gZnJvbSBcIi4vVGFic1YxSXNFbXB0eUZuXCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgVGFic1YxUHJvcGVydGllcyBleHRlbmRzIENvcmVDb250YWluZXJQcm9wZXJ0aWVze1xuICAgIFxuICAgIGFjY2Vzc2liaWxpdHlMYWJlbDpzdHJpbmc7XG4gICAgYWN0aXZlSXRlbT86IHN0cmluZztcbiAgICBjcUl0ZW1zOiB7IFtrZXk6IHN0cmluZ106IENvcmVDb250YWluZXJJdGVtIH07XG59XG5cblxuZXhwb3J0IGludGVyZmFjZSBUYWJzVjFTdGF0ZSBleHRlbmRzIENvcmVDb250YWluZXJTdGF0ZXtcbiAgICBhY3RpdmVJbmRleDogbnVtYmVyO1xufVxuXG5cbmNsYXNzIFRhYnNWMUltcGwgZXh0ZW5kcyBDb250YWluZXI8VGFic1YxUHJvcGVydGllcyxUYWJzVjFTdGF0ZT4ge1xuXG4gICAgY29uc3RydWN0b3IocHJvcHM6VGFic1YxUHJvcGVydGllcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG5cbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIGFjdGl2ZUluZGV4OiAoISFwcm9wcy5hY3RpdmVJdGVtICYmIHByb3BzLmFjdGl2ZUl0ZW0ubGVuZ3RoID4gMCkgPyB0aGlzLnByb3BzLmNxSXRlbXNPcmRlci5pbmRleE9mKHByb3BzLmFjdGl2ZUl0ZW0pIDogMCxcbiAgICAgICAgICAgIGNvbXBvbmVudE1hcHBpbmc6IHRoaXMucHJvcHMuY29tcG9uZW50TWFwcGluZyB8fCBDb21wb25lbnRNYXBwaW5nXG4gICAgICAgIH07XG5cbiAgICAgICAgdGhpcy5oYW5kbGVUYWJOYXZDbGljayA9IHRoaXMuaGFuZGxlVGFiTmF2Q2xpY2suYmluZCh0aGlzKTtcbiAgICB9XG5cbiAgICBjb21wb25lbnREaWRVcGRhdGUocHJldlByb3BzOiBSZWFkb25seTxUYWJzVjFQcm9wZXJ0aWVzPiwgcHJldlN0YXRlOiBSZWFkb25seTxUYWJzVjFTdGF0ZT4sIHNuYXBzaG90PzogYW55KTogdm9pZCB7XG4gICAgICAgIGlmKHRoaXMucHJvcHMuYWN0aXZlSW5kZXhGcm9tQXV0aG9yUGFuZWwgIT09IHVuZGVmaW5lZCAmJiBwcmV2UHJvcHMuYWN0aXZlSW5kZXhGcm9tQXV0aG9yUGFuZWwgIT0gdGhpcy5wcm9wcy5hY3RpdmVJbmRleEZyb21BdXRob3JQYW5lbCl7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgYWN0aXZlSW5kZXg6IHRoaXMucHJvcHMuYWN0aXZlSW5kZXhGcm9tQXV0aG9yUGFuZWwgfSApO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgICAvKipcbiAgICAgKiBPdmVybG9hZCBjaGlsZENvbXBvbmVudHMgZ2V0dGVyIHRvIG9ubHkgcmV0dXJuIHRoZSBhY3RpdmUgdGFiJ3MgaXRlbXMuXG4gICAgICogQHJldHVybnMge09iamVjdFtdfSBBbiBhcnJheSB3aXRoIHRoZSBjb21wb25lbnRzIGluc3RhbnRpYXRlZCB0byBKU1hcbiAgICAgKi9cbiAgICB0YWJiZWRDaGlsZENvbXBvbmVudHMoKSB7XG5cbiAgICAgICAgaWYodGhpcy5wcm9wcy5pc0luRWRpdG9yID09PSB0cnVlKXtcbiAgICAgICAgICAgIC8vZm9yIGVkaXRpbmcgY2FwYWJpbGl0aWVzIHRvIHdvcmsgcHJvcGVybHksIHdlIGFsd2F5cyBuZWVkIHRvIHJlbmRlciBlYWNoIGl0ZW0uXG4gICAgICAgICAgICAvL3dlIHdpbGwgaGlkZSB0aGUgZGlzYWJsZWQgaXRlbXMgaW5zdGVhZC5cbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jaGlsZENvbXBvbmVudHMubWFwKChpdGVtLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGlzVmlzaWJsZSA9ICh0aGlzLnN0YXRlLmFjdGl2ZUluZGV4ID09PSBpbmRleCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgc3R5bGVzID0geyBkaXNwbGF5OiAoIWlzVmlzaWJsZSkgPyAnbm9uZScgOiAnYmxvY2snfTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleT17XCJ0YWItY29udGVudC1cIiArIGluZGV4fSBjbGFzc05hbWU9e3RoaXMucHJvcHMuYmFzZUNzc0NsYXNzICsgJ19fYXV0aG9yLXRhYi1jb250ZW50J30gc3R5bGU9e3N0eWxlc30+e3RoaXMuY2hpbGRDb21wb25lbnRzW2luZGV4XX08L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgPC8+XG4gICAgICAgICAgICApXG4gICAgICAgIH1lbHNle1xuICAgICAgICAgICAgLy93aGVuIHRoZSBlZGl0b3IgaXMgZGlzYWJsZWQsIHdlIGNhbiBqdXN0IHNob3cgdGhlIGFjdGl2ZSBpdGVtIG9ubHkuXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jaGlsZENvbXBvbmVudHNbdGhpcy5zdGF0ZS5hY3RpdmVJbmRleF07XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBoYW5kbGVUYWJOYXZDbGljayhpbmRleDpudW1iZXIpe1xuICAgICAgICBpZih0aGlzLnN0YXRlLmFjdGl2ZUluZGV4ICE9PSBpbmRleCl7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICBhY3RpdmVJbmRleDogaW5kZXhcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgdGFiTmF2aWdhdGlvbigpe1xuXG4gICAgICAgIGNvbnN0IGNoaWxkQ29tcG9uZW50czpKU1guRWxlbWVudFtdID0gW107XG5cbiAgICAgICAgaWYgKCF0aGlzLnByb3BzLmNxSXRlbXMgfHwgIXRoaXMucHJvcHMuY3FJdGVtc09yZGVyKSB7XG4gICAgICAgICAgICByZXR1cm4gY2hpbGRDb21wb25lbnRzO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxvbCByb2xlPVwidGFibGlzdFwiXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXt0aGlzLnByb3BzLmJhc2VDc3NDbGFzcyArICdfX3RhYmxpc3QnfVxuICAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9e3RoaXMucHJvcHMuYWNjZXNzaWJpbGl0eUxhYmVsfVxuICAgICAgICAgICAgICAgIGFyaWEtbXVsdGlzZWxlY3RhYmxlPVwiZmFsc2VcIj5cbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5jcUl0ZW1zT3JkZXIubWFwKChpdGVtLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHRhYiA9IHRoaXMucHJvcHMuY3FJdGVtc1tpdGVtXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBpc0FjdGl2ZSA9IChpbmRleCA9PT0gdGhpcy5zdGF0ZS5hY3RpdmVJbmRleCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIHJvbGU9XCJ0YWJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtcInRhYi1cIiArIGluZGV4fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gdGhpcy5oYW5kbGVUYWJOYXZDbGljayhpbmRleCl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3RoaXMucHJvcHMuYmFzZUNzc0NsYXNzICsgJ19fdGFiJyArIChpc0FjdGl2ZSA/ICcgJyArIHRoaXMucHJvcHMuYmFzZUNzc0NsYXNzICsgJ19fdGFiLS1hY3RpdmUnIDogJycpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFiSW5kZXg9e2lzQWN0aXZlID8gMCA6IC0xfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS1jbXAtaG9vay10YWJzPVwidGFiXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGFiWydjcTpwYW5lbFRpdGxlJ119XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgPC9vbD5cbiAgICAgICAgKVxuXG4gICAgfVxuXG4gICAgZ2V0IHRhYkNvbnRhaW5lclByb3BzKCl7XG4gICAgICAgIGNvbnN0IGF0dHJzID0gdGhpcy5jb250YWluZXJQcm9wcztcbiAgICAgICAgYXR0cnNbJ2NsYXNzTmFtZSddID0gYXR0cnMuY2xhc3NOYW1lICsgJyAnICsgdGhpcy5wcm9wcy5iYXNlQ3NzQ2xhc3M7XG4gICAgICAgIGF0dHJzWydkYXRhLWNtcC1pcyddID0gJ3RhYnMnO1xuICAgICAgICByZXR1cm4gYXR0cnM7XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuXG4gICAgICAgIGNvbnN0IGlzRW1wdHkgPSBUYWJzVjFJc0VtcHR5Rm4odGhpcy5wcm9wcyk7XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgey4uLnRoaXMudGFiQ29udGFpbmVyUHJvcHN9PlxuICAgICAgICAgICAgICAgIHsgIWlzRW1wdHkgJiYgdGhpcy50YWJOYXZpZ2F0aW9uKCkgfVxuICAgICAgICAgICAgICAgIHsgIWlzRW1wdHkgJiYgdGhpcy50YWJiZWRDaGlsZENvbXBvbmVudHMoKSB9XG4gICAgICAgICAgICAgICAgeyB0aGlzLnBsYWNlaG9sZGVyQ29tcG9uZW50IH1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApXG4gICAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhTdGFuZGFyZEJhc2VDc3NDbGFzcyh3aXRoQXV0aG9yUGFuZWxTd2l0Y2goVGFic1YxSW1wbCksIFwiY21wLXRhYnNcIik7Il19

        /***/
      },

      /***/
      "./src/container/tabs/v1/TabsV1IsEmptyFn.ts":
      /*!**************************************************!*\
        !*** ./src/container/tabs/v1/TabsV1IsEmptyFn.ts ***!
        \**************************************************/

      /*! exports provided: TabsV1IsEmptyFn */

      /***/
      function (module, __webpack_exports__, __webpack_require__) {
        "use strict";

        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */


        __webpack_require__.d(__webpack_exports__, "TabsV1IsEmptyFn", function () {
          return TabsV1IsEmptyFn;
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


        function TabsV1IsEmptyFn(props) {
          return props.cqItemsOrder == null || props.cqItemsOrder.length === 0;
        } //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGFic1YxSXNFbXB0eUZuLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiVGFic1YxSXNFbXB0eUZuLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7OztHQWNHO0FBSUgsTUFBTSxVQUFVLGVBQWUsQ0FBQyxLQUFzQjtJQUNsRCxPQUFPLEtBQUssQ0FBQyxZQUFZLElBQUksSUFBSSxJQUFJLEtBQUssQ0FBQyxZQUFZLENBQUMsTUFBTSxLQUFLLENBQUMsQ0FBQztBQUN6RSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqICBDb3B5cmlnaHQgMjAyMCBBZG9iZVxuICpcbiAqICBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqICBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgICAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqICBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiAgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqICBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuXG5pbXBvcnQge1RhYnNWMVByb3BlcnRpZXN9IGZyb20gXCIuL1RhYnNWMVwiO1xuXG5leHBvcnQgZnVuY3Rpb24gVGFic1YxSXNFbXB0eUZuKHByb3BzOlRhYnNWMVByb3BlcnRpZXMpe1xuICAgIHJldHVybiBwcm9wcy5jcUl0ZW1zT3JkZXIgPT0gbnVsbCB8fCBwcm9wcy5jcUl0ZW1zT3JkZXIubGVuZ3RoID09PSAwO1xufSJdfQ==

        /***/

      },

      /***/
      5:
      /*!************************************************!*\
        !*** multi ./src/container/tabs/v1/TabsV1.tsx ***!
        \************************************************/

      /*! no static exports found */

      /***/
      function (module, exports, __webpack_require__) {
        module.exports = __webpack_require__(
        /*! ./src/container/tabs/v1/TabsV1.tsx */
        "./src/container/tabs/v1/TabsV1.tsx");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9yYWFpam1hay93b3Jrc3BhY2UvYWVtLXJlYWN0LWNvcmUtd2NtLWNvbXBvbmVudHMvZXhhbXBsZXMvcmVhY3Qtc3BhY29tcG9uZW50cy1leGFtcGxlLXByb2plY3QvQGFkb2JlL2FlbS1jb3JlLWNvbXBvbmVudHMtcmVhY3Qtc3BhL3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIi9Vc2Vycy9yYWFpam1hay93b3Jrc3BhY2UvYWVtLXJlYWN0LWNvcmUtd2NtLWNvbXBvbmVudHMvZXhhbXBsZXMvcmVhY3Qtc3BhY29tcG9uZW50cy1leGFtcGxlLXByb2plY3QvQGFkb2JlL2FlbS1jb3JlLWNvbXBvbmVudHMtcmVhY3Qtc3BhL3dlYnBhY2svYm9vdHN0cmFwIiwiL1VzZXJzL3JhYWlqbWFrL3dvcmtzcGFjZS9hZW0tcmVhY3QtY29yZS13Y20tY29tcG9uZW50cy9leGFtcGxlcy9yZWFjdC1zcGFjb21wb25lbnRzLWV4YW1wbGUtcHJvamVjdC9AYWRvYmUvYWVtLWNvcmUtY29tcG9uZW50cy1yZWFjdC1zcGEvc3JjL0Fic3RyYWN0Q29yZUNvbnRhaW5lckNvbXBvbmVudC50c3giLCIvVXNlcnMvcmFhaWptYWsvd29ya3NwYWNlL2FlbS1yZWFjdC1jb3JlLXdjbS1jb21wb25lbnRzL2V4YW1wbGVzL3JlYWN0LXNwYWNvbXBvbmVudHMtZXhhbXBsZS1wcm9qZWN0L0BhZG9iZS9hZW0tY29yZS1jb21wb25lbnRzLXJlYWN0LXNwYS9zcmMvY29udGFpbmVyL3RhYnMvdjEvVGFic1YxLnRzeCIsIi9Vc2Vycy9yYWFpam1hay93b3Jrc3BhY2UvYWVtLXJlYWN0LWNvcmUtd2NtLWNvbXBvbmVudHMvZXhhbXBsZXMvcmVhY3Qtc3BhY29tcG9uZW50cy1leGFtcGxlLXByb2plY3QvQGFkb2JlL2FlbS1jb3JlLWNvbXBvbmVudHMtcmVhY3Qtc3BhL3NyYy9jb250YWluZXIvdGFicy92MS9UYWJzVjFJc0VtcHR5Rm4udHMiLCIvVXNlcnMvcmFhaWptYWsvd29ya3NwYWNlL2FlbS1yZWFjdC1jb3JlLXdjbS1jb21wb25lbnRzL2V4YW1wbGVzL3JlYWN0LXNwYWNvbXBvbmVudHMtZXhhbXBsZS1wcm9qZWN0L3dlYnBhY2s6L0BhZG9iZS9hZW0tY29yZS1jb21wb25lbnRzLXJlYWN0LXNwYS9leHRlcm5hbCBcIkBhZG9iZS9hZW0tcmVhY3QtZWRpdGFibGUtY29tcG9uZW50c1wiIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBQ0EsWUFDQSwyQkFEQSxLQUVBLEVBS0E7QUFDQyxDQVRELEVBU0MseUNBVEQsRUFTQztBQUNEOzs7OztBQ1ZBO0FBQUE7O0FBQ0E7QUFBQTs7O0FBRUE7QUFBQTs7QUFDQTs7QUFBQTs7O0FBRUE7QUFBQTs7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBOztBQUNBOzs7QUFBQTtBQUNBO0FBQUEscUJBREE7O0FBRUE7QUFBQSxrQkFGQTs7QUFHQTtBQUFBO0FBQ0E7O0FBSkE7OztBQU1BO0FBQUE7O0FBQ0E7O0FBQUE7OztBQUVBO0FBQUE7O0FBQ0E7O0FBQUE7OztBQUVBO0FBQUE7O0FBQ0E7O0FBQUE7QUFDQTtBQUFBOzs7OztBQUdBO0FBQUE7O0FBQ0E7OztBQUFBOzs7QUFFQTtBQUFBOztBQUNBOztBQUFBOzs7QUFFQTtBQUFBOztBQUNBOztBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBMEMsNEJBQTFDO0FBQTBDO0FBQTFDO0FBQ0E7QUFBQTtBQUNBOztBQUFBLE9BSkE7OztBQU1BO0FBQUE7O0FBQ0E7OztBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBd0Q7QUFBeEQ7QUFDQTtBQUFBO0FBQ0E7OztBQUFBO0FBQWlEO0FBQWpEO0FBQ0E7QUFBQSxPQUxBOzs7QUFPQTtBQUFBOztBQUNBO0FBQUE7O0FBQ0E7QUFBQTs7QUFDQTtBQUFBOztBQUNBO0FBQUE7O0FBQ0E7OztBQUFBO0FBQ0E7QUFBQTtBQUNBOztBQUFBO0FBQ0E7O0FBQUE7QUFDQTs7QUFBQTtB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QUFBdEIsZUFBTCxFQUF3UixvQkFBeFIsQ0FBcEI7QUFDUyxhQUpvTCxDQUE3SyxDQUFoQjtBQUtBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBLDRCQUF3Qix5RUFBZSxVQUFmLENBQXhCO0FBQ0EsbUJBQWdCLDZDQUFLLGFBQUwsQ0FBSyxLQUFMLEVBQUssa0JBQXNDLHNCQUF0QyxDQUFMLEVBQ2hCLGdDQURnQixFQUVoQix3Q0FGZ0IsRUFHaEIseUJBSGdCLENBQWhCO0FBSUE7O0FBL0RrQztBQWlFbkI7OztBQUFBLDBJQUF5Qiw4RkFBcUIsVUFBckIsQ0FBekIsRUFBOEMsVUFBOUMsRSxDQUNmOzs7Ozs7Ozs7Ozs7Ozs7OztBQ3JGQTtBQUFBOzs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFlTztBQUNQO0FBQ0EsUyxDQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xCQTs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7O0FMVUE7Q0FWQSxFIiwiZmlsZSI6ImpzL1RhYnNWMS5iZGVmZTFkNy5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcIkBhZG9iZS9hZW0tY29yZS1jb21wb25lbnRzLXJlYWN0LXNwYVwiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJAYWRvYmUvYWVtLWNvcmUtY29tcG9uZW50cy1yZWFjdC1zcGFcIl0gPSBmYWN0b3J5KCk7XG59KSh0eXBlb2Ygc2VsZiAhPT0gJ3VuZGVmaW5lZCcgPyBzZWxmIDogdGhpcywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDUpO1xuIiwiLypcbiAqICBDb3B5cmlnaHQgMjAyMCBBZG9iZVxuICpcbiAqICBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqICBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgICAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqICBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiAgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqICBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuY29uc3QgaXNCcm93c2VyID0gKCgpID0+IHtcbiAgICB0cnkge1xuICAgICAgICByZXR1cm4gdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCc7XG4gICAgfVxuICAgIGNhdGNoIChlcnIpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbn0pKCk7XG5leHBvcnQgY29uc3Qgd2l0aFN0YW5kYXJkQmFzZUNzc0NsYXNzID0gKENvbXBvbmVudCwgZGVmYXVsdEJhc2VDc3NDbGFzcykgPT4ge1xuICAgIHJldHVybiAocHJvcHMpID0+IHtcbiAgICAgICAgY29uc3QgYmFzZUNzc0NsYXNzID0gcHJvcHMuYmFzZUNzc0NsYXNzO1xuICAgICAgICBjb25zdCB0b0JlVXNlZENzc0NsYXNzID0gYmFzZUNzc0NsYXNzICYmIGJhc2VDc3NDbGFzcy50cmltKCkubGVuZ3RoID4gMCA/IGJhc2VDc3NDbGFzcyA6IGRlZmF1bHRCYXNlQ3NzQ2xhc3M7XG4gICAgICAgIGNvbnN0IG1lcmdlZFByb3BzID0ge1xuICAgICAgICAgICAgLi4ucHJvcHMsXG4gICAgICAgICAgICBiYXNlQ3NzQ2xhc3M6IHRvQmVVc2VkQ3NzQ2xhc3NcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQ29tcG9uZW50LCBPYmplY3QuYXNzaWduKHt9LCBtZXJnZWRQcm9wcykpO1xuICAgIH07XG59O1xuZXhwb3J0IGNvbnN0IHdpdGhBdXRob3JQYW5lbFN3aXRjaCA9IChDb21wb25lbnQpID0+IHtcbiAgICByZXR1cm4gY2xhc3MgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgICAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgICAgICAgICAgdGhpcy5zdGF0ZSA9IHt9O1xuICAgICAgICAgICAgLy9AdHMtaWdub3JlXG4gICAgICAgICAgICBpZiAoaXNCcm93c2VyICYmIHdpbmRvdy5HcmFuaXRlICYmIHdpbmRvdy5HcmFuaXRlLmF1dGhvciAmJiB3aW5kb3cuR3Jhbml0ZS5hdXRob3IuTWVzc2FnZUNoYW5uZWwpIHtcbiAgICAgICAgICAgICAgICAvL0B0cy1pZ25vcmVcbiAgICAgICAgICAgICAgICB0aGlzLm1lc3NhZ2VDaGFubmVsID0gbmV3IHdpbmRvdy5HcmFuaXRlLmF1dGhvci5NZXNzYWdlQ2hhbm5lbChcImNxYXV0aG9yXCIsIHdpbmRvdyk7XG4gICAgICAgICAgICAgICAgdGhpcy5jYWxsYmFjayA9IHRoaXMuY2FsbGJhY2suYmluZCh0aGlzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjYWxsYmFjayhtZXNzYWdlKSB7XG4gICAgICAgICAgICBpZiAobWVzc2FnZS5kYXRhICYmIG1lc3NhZ2UuZGF0YS5pZCA9PT0gdGhpcy5wcm9wcy5jcVBhdGgpIHtcbiAgICAgICAgICAgICAgICBpZiAobWVzc2FnZS5kYXRhLm9wZXJhdGlvbiA9PT0gXCJuYXZpZ2F0ZVwiKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGluZGV4ID0gbWVzc2FnZS5kYXRhLmluZGV4O1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFjdGl2ZUluZGV4RnJvbUF1dGhvclBhbmVsOiBpbmRleFxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5tZXNzYWdlQ2hhbm5lbCkge1xuICAgICAgICAgICAgICAgIHRoaXMubWVzc2FnZUNoYW5uZWwuc3Vic2NyaWJlUmVxdWVzdE1lc3NhZ2UoXCJjbXAucGFuZWxjb250YWluZXJcIiwgdGhpcy5jYWxsYmFjayk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5tZXNzYWdlQ2hhbm5lbCkge1xuICAgICAgICAgICAgICAgIHRoaXMubWVzc2FnZUNoYW5uZWwudW5zdWJzY3JpYmVSZXF1ZXN0TWVzc2FnZShcImNtcC5wYW5lbGNvbnRhaW5lclwiLCB0aGlzLmNhbGxiYWNrKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZW5kZXIoKSB7XG4gICAgICAgICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChDb21wb25lbnQsIE9iamVjdC5hc3NpZ24oe30sIHRoaXMucHJvcHMsIHsgYWN0aXZlSW5kZXhGcm9tQXV0aG9yUGFuZWw6IHRoaXMuc3RhdGUuYWN0aXZlSW5kZXhGcm9tQXV0aG9yUGFuZWwgfSkpO1xuICAgICAgICB9XG4gICAgfTtcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lRV0p6ZEhKaFkzUkRiM0psUTI5dWRHRnBibVZ5UTI5dGNHOXVaVzUwTG1weklpd2ljMjkxY21ObFVtOXZkQ0k2SWlJc0luTnZkWEpqWlhNaU9sc2lRV0p6ZEhKaFkzUkRiM0psUTI5dWRHRnBibVZ5UTI5dGNHOXVaVzUwTG5SemVDSmRMQ0p1WVcxbGN5STZXMTBzSW0xaGNIQnBibWR6SWpvaVFVRkJRVHM3T3pzN096czdPenM3T3pzN1IwRmpSenRCUVVWSUxFOUJRVThzUzBGQlN5eExRVUZMTEUxQlFVMHNUMEZCVHl4RFFVRkRPMEZCZFVJdlFpeE5RVUZOTEZOQlFWTXNSMEZCUnl4RFFVRkRMRWRCUVVjc1JVRkJSVHRKUVVOd1FpeEpRVUZITzFGQlEwTXNUMEZCVHl4UFFVRlBMRTFCUVUwc1MwRkJTeXhYUVVGWExFTkJRVU03UzBGRGVFTTdTVUZCUVN4UFFVRk5MRWRCUVVjc1JVRkJRenRSUVVOUUxFOUJRVThzUzBGQlN5eERRVUZETzB0QlEyaENPMEZCUTB3c1EwRkJReXhEUVVGRExFVkJRVVVzUTBGQlF6dEJRVWRNTEUxQlFVMHNRMEZCUXl4TlFVRk5MSGRDUVVGM1FpeEhRVUZITEVOQlJYQkRMRk5CUVRCQ0xFVkJRekZDTEcxQ1FVRXdRaXhGUVVOS0xFVkJRVVU3U1VGRGVFSXNUMEZCVHl4RFFVRkRMRXRCUVU4c1JVRkJSU3hGUVVGRk8xRkJSV1lzVFVGQlRTeFpRVUZaTEVkQlFVY3NTMEZCU3l4RFFVRkRMRmxCUVZrc1EwRkJRenRSUVVONFF5eE5RVUZOTEdkQ1FVRm5RaXhIUVVGSExGbEJRVmtzU1VGQlNTeFpRVUZaTEVOQlFVTXNTVUZCU1N4RlFVRkZMRU5CUVVNc1RVRkJUU3hIUVVGSExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNXVUZCV1N4RFFVRkRMRU5CUVVNc1EwRkJReXh0UWtGQmJVSXNRMEZCUXp0UlFVVTNSeXhOUVVGTkxGZEJRVmNzUjBGQlN6dFpRVU5zUWl4SFFVRkhMRXRCUVVzN1dVRkRVaXhaUVVGWkxFVkJRVVVzWjBKQlFXZENPMU5CUTJwRExFTkJRVU03VVVGRlJpeFBRVUZQTEc5Q1FVRkRMRk5CUVZNc2IwSkJRVXNzVjBGQlZ5eEZRVUZKTEVOQlFVTTdTVUZETVVNc1EwRkJReXhEUVVGQk8wRkJRMHdzUTBGQlF5eERRVUZETzBGQlNVWXNUVUZCVFN4RFFVRkRMRTFCUVUwc2NVSkJRWEZDTEVkQlFVY3NRMEZEYWtNc1UwRkJNRUlzUlVGRFRDeEZRVUZGTzBsQlJYWkNMRTlCUVU4c1MwRkJUU3hUUVVGUkxFdEJRVXNzUTBGQlF5eFRRVUZ2UXp0UlFVc3pSQ3haUVVGWkxFdEJRVTg3V1VGRFppeExRVUZMTEVOQlFVTXNTMEZCU3l4RFFVRkRMRU5CUVVNN1dVRkRZaXhKUVVGSkxFTkJRVU1zUzBGQlN5eEhRVUZITEVWQlFVVXNRMEZCUVR0WlFVVm1MRmxCUVZrN1dVRkRXaXhKUVVGSkxGTkJRVk1zU1VGQlNTeE5RVUZOTEVOQlFVTXNUMEZCVHl4SlFVRkpMRTFCUVUwc1EwRkJReXhQUVVGUExFTkJRVU1zVFVGQlRTeEpRVUZKTEUxQlFVMHNRMEZCUXl4UFFVRlBMRU5CUVVNc1RVRkJUU3hEUVVGRExHTkJRV01zUlVGQlJUdG5Ra0ZET1VZc1dVRkJXVHRuUWtGRFdpeEpRVUZKTEVOQlFVTXNZMEZCWXl4SFFVRkhMRWxCUVVrc1RVRkJUU3hEUVVGRExFOUJRVThzUTBGQlF5eE5RVUZOTEVOQlFVTXNZMEZCWXl4RFFVRkRMRlZCUVZVc1JVRkJSU3hOUVVGTkxFTkJRVU1zUTBGQlF6dG5Ra0ZEYmtZc1NVRkJTU3hEUVVGRExGRkJRVkVzUjBGQlJ5eEpRVUZKTEVOQlFVTXNVVUZCVVN4RFFVRkRMRWxCUVVrc1EwRkJReXhKUVVGSkxFTkJRVU1zUTBGQlF6dGhRVU0xUXp0UlFVTk1MRU5CUVVNN1VVRkZSQ3hSUVVGUkxFTkJRVU1zVDBGQlZ6dFpRVU5vUWl4SlFVRkpMRTlCUVU4c1EwRkJReXhKUVVGSkxFbEJRVWtzVDBGQlR5eERRVUZETEVsQlFVa3NRMEZCUXl4RlFVRkZMRXRCUVVzc1NVRkJTU3hEUVVGRExFdEJRVXNzUTBGQlF5eE5RVUZOTEVWQlFVVTdaMEpCUTNaRUxFbEJRVWtzVDBGQlR5eERRVUZETEVsQlFVa3NRMEZCUXl4VFFVRlRMRXRCUVVzc1ZVRkJWU3hGUVVGRk8yOUNRVU4yUXl4TlFVRk5MRXRCUVVzc1IwRkJSeXhQUVVGUExFTkJRVU1zU1VGQlNTeERRVUZETEV0QlFXVXNRMEZCUXp0dlFrRkRNME1zU1VGQlNTeERRVUZETEZGQlFWRXNRMEZCUXp0M1FrRkRWaXd3UWtGQk1FSXNSVUZCUlN4TFFVRkxPM0ZDUVVOd1F5eERRVUZETEVOQlFVRTdhVUpCUTB3N1lVRkRTanRSUVVOTUxFTkJRVU03VVVGRlJDeHBRa0ZCYVVJN1dVRkRZaXhKUVVGSExFbEJRVWtzUTBGQlF5eGpRVUZqTEVWQlFVTTdaMEpCUTI1Q0xFbEJRVWtzUTBGQlF5eGpRVUZqTEVOQlFVTXNkVUpCUVhWQ0xFTkJRVU1zYjBKQlFXOUNMRVZCUVVVc1NVRkJTU3hEUVVGRExGRkJRVkVzUTBGQlF5eERRVUZETzJGQlEzQkdPMUZCUTB3c1EwRkJRenRSUVVWRUxHOUNRVUZ2UWp0WlFVTm9RaXhKUVVGSExFbEJRVWtzUTBGQlF5eGpRVUZqTEVWQlFVTTdaMEpCUTI1Q0xFbEJRVWtzUTBGQlF5eGpRVUZqTEVOQlFVTXNlVUpCUVhsQ0xFTkJRVU1zYjBKQlFXOUNMRVZCUVVVc1NVRkJTU3hEUVVGRExGRkJRVkVzUTBGQlF5eERRVUZETzJGQlEzUkdPMUZCUTB3c1EwRkJRenRSUVVkRUxFMUJRVTA3V1VGRFJpeFBRVUZQTEc5Q1FVRkRMRk5CUVZNc2IwSkJRVXNzU1VGQlNTeERRVUZETEV0QlFVc3NTVUZCUlN3d1FrRkJNRUlzUlVGQlJTeEpRVUZKTEVOQlFVTXNTMEZCU3l4RFFVRkRMREJDUVVFd1FpeEpRVUZKTEVOQlFVTTdVVUZETlVjc1EwRkJRenRMUVVOS0xFTkJRVUU3UVVGRlRDeERRVUZETEVOQlFVTWlMQ0p6YjNWeVkyVnpRMjl1ZEdWdWRDSTZXeUl2S2x4dUlDb2dJRU52Y0hseWFXZG9kQ0F5TURJd0lFRmtiMkpsWEc0Z0tseHVJQ29nSUV4cFkyVnVjMlZrSUhWdVpHVnlJSFJvWlNCQmNHRmphR1VnVEdsalpXNXpaU3dnVm1WeWMybHZiaUF5TGpBZ0tIUm9aU0JjSWt4cFkyVnVjMlZjSWlrN1hHNGdLaUFnZVc5MUlHMWhlU0J1YjNRZ2RYTmxJSFJvYVhNZ1ptbHNaU0JsZUdObGNIUWdhVzRnWTI5dGNHeHBZVzVqWlNCM2FYUm9JSFJvWlNCTWFXTmxibk5sTGx4dUlDb2dJRmx2ZFNCdFlYa2diMkowWVdsdUlHRWdZMjl3ZVNCdlppQjBhR1VnVEdsalpXNXpaU0JoZEZ4dUlDcGNiaUFxSUNBZ0lDQWdhSFIwY0RvdkwzZDNkeTVoY0dGamFHVXViM0puTDJ4cFkyVnVjMlZ6TDB4SlEwVk9VMFV0TWk0d1hHNGdLbHh1SUNvZ0lGVnViR1Z6Y3lCeVpYRjFhWEpsWkNCaWVTQmhjSEJzYVdOaFlteGxJR3hoZHlCdmNpQmhaM0psWldRZ2RHOGdhVzRnZDNKcGRHbHVaeXdnYzI5bWRIZGhjbVZjYmlBcUlDQmthWE4wY21saWRYUmxaQ0IxYm1SbGNpQjBhR1VnVEdsalpXNXpaU0JwY3lCa2FYTjBjbWxpZFhSbFpDQnZiaUJoYmlCY0lrRlRJRWxUWENJZ1FrRlRTVk1zWEc0Z0tpQWdWMGxVU0U5VlZDQlhRVkpTUVU1VVNVVlRJRTlTSUVOUFRrUkpWRWxQVGxNZ1QwWWdRVTVaSUV0SlRrUXNJR1ZwZEdobGNpQmxlSEJ5WlhOeklHOXlJR2x0Y0d4cFpXUXVYRzRnS2lBZ1UyVmxJSFJvWlNCTWFXTmxibk5sSUdadmNpQjBhR1VnYzNCbFkybG1hV01nYkdGdVozVmhaMlVnWjI5MlpYSnVhVzVuSUhCbGNtMXBjM05wYjI1eklHRnVaRnh1SUNvZ0lHeHBiV2wwWVhScGIyNXpJSFZ1WkdWeUlIUm9aU0JNYVdObGJuTmxMbHh1SUNvdlhHNWNibWx0Y0c5eWRDQXFJR0Z6SUZKbFlXTjBJR1p5YjIwZ0ozSmxZV04wSnp0Y2JseHVhVzF3YjNKMElIdERiMjUwWVdsdVpYSlRkR0YwWlN3Z1FXeHNiM2RsWkVOdmJYQnZibVZ1ZEhOUWNtOXdaWEowYVdWemZTQm1jbTl0SUNkQVlXUnZZbVV2WVdWdExYSmxZV04wTFdWa2FYUmhZbXhsTFdOdmJYQnZibVZ1ZEhNbk8xeHVhVzF3YjNKMElIdERiMjF3YjI1bGJuUlVlWEJsZlNCbWNtOXRJRndpY21WaFkzUmNJanRjYm1sdGNHOXlkQ0I3SUUxdlpHVnNJSDBnWm5KdmJTQW5RR0ZrYjJKbEwyRmxiUzF6Y0dFdGNHRm5aUzF0YjJSbGJDMXRZVzVoWjJWeUp6dGNibHh1Wlhod2IzSjBJR2x1ZEdWeVptRmpaU0JEYjNKbFEyOXVkR0ZwYm1WeVVISnZjR1Z5ZEdsbGN5QmxlSFJsYm1SeklFRnNiRzkzWldSRGIyMXdiMjVsYm5SelVISnZjR1Z5ZEdsbGMzdGNiaUFnSUNCaVlYTmxRM056UTJ4aGMzTS9Pbk4wY21sdVp6dGNiaUFnSUNCaFkzUnBkbVZKYm1SbGVFWnliMjFCZFhSb2IzSlFZVzVsYkQ4NmJuVnRZbVZ5WEc1OVhHNWNibVY0Y0c5eWRDQnBiblJsY21aaFkyVWdRMjl5WlVOdmJuUmhhVzVsY2tsMFpXMGdaWGgwWlc1a2N5Qk5iMlJsYkNCN1hHNGdJQ0FnSjJOeE9uQmhibVZzVkdsMGJHVW5PaUJ6ZEhKcGJtZGNibjFjYmx4dVpYaHdiM0owSUdsdWRHVnlabUZqWlNCRGIzSmxRMjl1ZEdGcGJtVnlVM1JoZEdVZ1pYaDBaVzVrY3lCRGIyNTBZV2x1WlhKVGRHRjBaU0I3WEc1Y2JuMWNibHh1Wlhod2IzSjBJR2x1ZEdWeVptRmpaU0JCZFhSb2IzSlFZVzVsYkZOM2FYUmphRk4wWVhSbElIdGNiaUFnSUNCaFkzUnBkbVZKYm1SbGVFWnliMjFCZFhSb2IzSlFZVzVsYkQ4NklHNTFiV0psY2x4dWZWeHVYRzVqYjI1emRDQnBjMEp5YjNkelpYSWdQU0FvS0NrZ1BUNGdlMXh1SUNBZ0lIUnllWHRjYmlBZ0lDQWdJQ0FnY21WMGRYSnVJSFI1Y0dWdlppQjNhVzVrYjNjZ0lUMDlJQ2QxYm1SbFptbHVaV1FuTzF4dUlDQWdJSDFqWVhSamFDaGxjbklwZTF4dUlDQWdJQ0FnSUNCeVpYUjFjbTRnWm1Gc2MyVTdYRzRnSUNBZ2ZWeHVmU2tvS1R0Y2JseHVYRzVsZUhCdmNuUWdZMjl1YzNRZ2QybDBhRk4wWVc1a1lYSmtRbUZ6WlVOemMwTnNZWE56SUQwZ1BFMGdaWGgwWlc1a2N5QkRiM0psUTI5dWRHRnBibVZ5VUhKdmNHVnlkR2xsY3o1Y2JpaGNiaUFnSUNCRGIyMXdiMjVsYm5RNlEyOXRjRzl1Wlc1MFZIbHdaVHhOUGl4Y2JpQWdJQ0JrWldaaGRXeDBRbUZ6WlVOemMwTnNZWE56T25OMGNtbHVaMXh1S1RwU1pXRmpkQzVEYjIxd2IyNWxiblJVZVhCbFBFMCtJQ0E5UGlCN1hHNGdJQ0FnY21WMGRYSnVJQ2h3Y205d2N6cE5LU0E5UGlCN1hHNWNiaUFnSUNBZ0lDQWdZMjl1YzNRZ1ltRnpaVU56YzBOc1lYTnpJRDBnY0hKdmNITXVZbUZ6WlVOemMwTnNZWE56TzF4dUlDQWdJQ0FnSUNCamIyNXpkQ0IwYjBKbFZYTmxaRU56YzBOc1lYTnpJRDBnWW1GelpVTnpjME5zWVhOeklDWW1JR0poYzJWRGMzTkRiR0Z6Y3k1MGNtbHRLQ2t1YkdWdVozUm9JRDRnTUNBL0lHSmhjMlZEYzNORGJHRnpjeUE2SUdSbFptRjFiSFJDWVhObFEzTnpRMnhoYzNNN1hHNWNiaUFnSUNBZ0lDQWdZMjl1YzNRZ2JXVnlaMlZrVUhKdmNITTZJRTA5SUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJQzR1TG5CeWIzQnpMRnh1SUNBZ0lDQWdJQ0FnSUNBZ1ltRnpaVU56YzBOc1lYTnpPaUIwYjBKbFZYTmxaRU56YzBOc1lYTnpYRzRnSUNBZ0lDQWdJSDA3WEc1Y2JpQWdJQ0FnSUNBZ2NtVjBkWEp1SUR4RGIyMXdiMjVsYm5RZ2V5NHVMbTFsY21kbFpGQnliM0J6ZlNBdlBqdGNiaUFnSUNCOVhHNTlPMXh1WEc1Y2JseHVaWGh3YjNKMElHTnZibk4wSUhkcGRHaEJkWFJvYjNKUVlXNWxiRk4zYVhSamFDQTlJRHhOSUdWNGRHVnVaSE1nUTI5eVpVTnZiblJoYVc1bGNsQnliM0JsY25ScFpYTStLRnh1SUNBZ0lFTnZiWEJ2Ym1WdWREcERiMjF3YjI1bGJuUlVlWEJsUEUwK1hHNHBPbEpsWVdOMExrTnZiWEJ2Ym1WdWRGUjVjR1U4VFQ0Z1BUNGdlMXh1WEc0Z0lDQWdjbVYwZFhKdUlHTnNZWE56SUdWNGRHVnVaSE1nVW1WaFkzUXVRMjl0Y0c5dVpXNTBQRTBzSUVGMWRHaHZjbEJoYm1Wc1UzZHBkR05vVTNSaGRHVStJSHRjYmx4dUlDQWdJQ0FnSUNBdkwwQjBjeTFwWjI1dmNtVmNiaUFnSUNBZ0lDQWdiV1Z6YzJGblpVTm9ZVzV1Wld3N1hHNWNiaUFnSUNBZ0lDQWdZMjl1YzNSeWRXTjBiM0lvY0hKdmNITTZUU2tnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdjM1Z3WlhJb2NISnZjSE1wTzF4dUlDQWdJQ0FnSUNBZ0lDQWdkR2hwY3k1emRHRjBaU0E5SUh0OVhHNWNiaUFnSUNBZ0lDQWdJQ0FnSUM4dlFIUnpMV2xuYm05eVpWeHVJQ0FnSUNBZ0lDQWdJQ0FnYVdZZ0tHbHpRbkp2ZDNObGNpQW1KaUIzYVc1a2IzY3VSM0poYm1sMFpTQW1KaUIzYVc1a2IzY3VSM0poYm1sMFpTNWhkWFJvYjNJZ0ppWWdkMmx1Wkc5M0xrZHlZVzVwZEdVdVlYVjBhRzl5TGsxbGMzTmhaMlZEYUdGdWJtVnNLU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnTHk5QWRITXRhV2R1YjNKbFhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2RHaHBjeTV0WlhOellXZGxRMmhoYm01bGJDQTlJRzVsZHlCM2FXNWtiM2N1UjNKaGJtbDBaUzVoZFhSb2IzSXVUV1Z6YzJGblpVTm9ZVzV1Wld3b1hDSmpjV0YxZEdodmNsd2lMQ0IzYVc1a2IzY3BPMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJSFJvYVhNdVkyRnNiR0poWTJzZ1BTQjBhR2x6TG1OaGJHeGlZV05yTG1KcGJtUW9kR2hwY3lrN1hHNGdJQ0FnSUNBZ0lDQWdJQ0I5WEc0Z0lDQWdJQ0FnSUgxY2JseHVJQ0FnSUNBZ0lDQmpZV3hzWW1GamF5aHRaWE56WVdkbE9tRnVlU2w3WEc0Z0lDQWdJQ0FnSUNBZ0lDQnBaaUFvYldWemMyRm5aUzVrWVhSaElDWW1JRzFsYzNOaFoyVXVaR0YwWVM1cFpDQTlQVDBnZEdocGN5NXdjbTl3Y3k1amNWQmhkR2dwSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCcFppQW9iV1Z6YzJGblpTNWtZWFJoTG05d1pYSmhkR2x2YmlBOVBUMGdYQ0p1WVhacFoyRjBaVndpS1NCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJR052Ym5OMElHbHVaR1Y0SUQwZ2JXVnpjMkZuWlM1a1lYUmhMbWx1WkdWNElHRnpJRzUxYldKbGNqdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnZEdocGN5NXpaWFJUZEdGMFpTaDdYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQmhZM1JwZG1WSmJtUmxlRVp5YjIxQmRYUm9iM0pRWVc1bGJEb2dhVzVrWlhoY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdmU2xjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0I5WEc0Z0lDQWdJQ0FnSUNBZ0lDQjlYRzRnSUNBZ0lDQWdJSDFjYmx4dUlDQWdJQ0FnSUNCamIyMXdiMjVsYm5SRWFXUk5iM1Z1ZENncE9pQjJiMmxrSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJR2xtS0hSb2FYTXViV1Z6YzJGblpVTm9ZVzV1Wld3cGUxeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lIUm9hWE11YldWemMyRm5aVU5vWVc1dVpXd3VjM1ZpYzJOeWFXSmxVbVZ4ZFdWemRFMWxjM05oWjJVb1hDSmpiWEF1Y0dGdVpXeGpiMjUwWVdsdVpYSmNJaXdnZEdocGN5NWpZV3hzWW1GamF5azdYRzRnSUNBZ0lDQWdJQ0FnSUNCOVhHNGdJQ0FnSUNBZ0lIMWNibHh1SUNBZ0lDQWdJQ0JqYjIxd2IyNWxiblJYYVd4c1ZXNXRiM1Z1ZENncE9pQjJiMmxrSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJR2xtS0hSb2FYTXViV1Z6YzJGblpVTm9ZVzV1Wld3cGUxeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lIUm9hWE11YldWemMyRm5aVU5vWVc1dVpXd3VkVzV6ZFdKelkzSnBZbVZTWlhGMVpYTjBUV1Z6YzJGblpTaGNJbU50Y0M1d1lXNWxiR052Ym5SaGFXNWxjbHdpTENCMGFHbHpMbU5oYkd4aVlXTnJLVHRjYmlBZ0lDQWdJQ0FnSUNBZ0lIMWNiaUFnSUNBZ0lDQWdmVnh1WEc1Y2JpQWdJQ0FnSUNBZ2NtVnVaR1Z5S0NsN1hHNGdJQ0FnSUNBZ0lDQWdJQ0J5WlhSMWNtNGdQRU52YlhCdmJtVnVkQ0I3TGk0dWRHaHBjeTV3Y205d2MzMGdZV04wYVhabFNXNWtaWGhHY205dFFYVjBhRzl5VUdGdVpXdzllM1JvYVhNdWMzUmhkR1V1WVdOMGFYWmxTVzVrWlhoR2NtOXRRWFYwYUc5eVVHRnVaV3g5SUM4K08xeHVJQ0FnSUNBZ0lDQjlYRzRnSUNBZ2ZWeHVYRzU5TzF4dUlsMTkiLCIvKlxuICogIENvcHlyaWdodCAyMDIwIEFkb2JlXG4gKlxuICogIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiAgeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICAgICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqICBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiAgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiAgU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBDb21wb25lbnRNYXBwaW5nLCBDb250YWluZXIgfSBmcm9tICdAYWRvYmUvYWVtLXJlYWN0LWVkaXRhYmxlLWNvbXBvbmVudHMnO1xuaW1wb3J0IHsgd2l0aEF1dGhvclBhbmVsU3dpdGNoLCB3aXRoU3RhbmRhcmRCYXNlQ3NzQ2xhc3MgfSBmcm9tIFwiLi4vLi4vLi4vQWJzdHJhY3RDb3JlQ29udGFpbmVyQ29tcG9uZW50XCI7XG5pbXBvcnQgeyBUYWJzVjFJc0VtcHR5Rm4gfSBmcm9tIFwiLi9UYWJzVjFJc0VtcHR5Rm5cIjtcbmNsYXNzIFRhYnNWMUltcGwgZXh0ZW5kcyBDb250YWluZXIge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIGFjdGl2ZUluZGV4OiAoISFwcm9wcy5hY3RpdmVJdGVtICYmIHByb3BzLmFjdGl2ZUl0ZW0ubGVuZ3RoID4gMCkgPyB0aGlzLnByb3BzLmNxSXRlbXNPcmRlci5pbmRleE9mKHByb3BzLmFjdGl2ZUl0ZW0pIDogMCxcbiAgICAgICAgICAgIGNvbXBvbmVudE1hcHBpbmc6IHRoaXMucHJvcHMuY29tcG9uZW50TWFwcGluZyB8fCBDb21wb25lbnRNYXBwaW5nXG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuaGFuZGxlVGFiTmF2Q2xpY2sgPSB0aGlzLmhhbmRsZVRhYk5hdkNsaWNrLmJpbmQodGhpcyk7XG4gICAgfVxuICAgIGNvbXBvbmVudERpZFVwZGF0ZShwcmV2UHJvcHMsIHByZXZTdGF0ZSwgc25hcHNob3QpIHtcbiAgICAgICAgaWYgKHRoaXMucHJvcHMuYWN0aXZlSW5kZXhGcm9tQXV0aG9yUGFuZWwgIT09IHVuZGVmaW5lZCAmJiBwcmV2UHJvcHMuYWN0aXZlSW5kZXhGcm9tQXV0aG9yUGFuZWwgIT0gdGhpcy5wcm9wcy5hY3RpdmVJbmRleEZyb21BdXRob3JQYW5lbCkge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGFjdGl2ZUluZGV4OiB0aGlzLnByb3BzLmFjdGl2ZUluZGV4RnJvbUF1dGhvclBhbmVsIH0pO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8qKlxuICAgKiBPdmVybG9hZCBjaGlsZENvbXBvbmVudHMgZ2V0dGVyIHRvIG9ubHkgcmV0dXJuIHRoZSBhY3RpdmUgdGFiJ3MgaXRlbXMuXG4gICAqIEByZXR1cm5zIHtPYmplY3RbXX0gQW4gYXJyYXkgd2l0aCB0aGUgY29tcG9uZW50cyBpbnN0YW50aWF0ZWQgdG8gSlNYXG4gICAqL1xuICAgIHRhYmJlZENoaWxkQ29tcG9uZW50cygpIHtcbiAgICAgICAgaWYgKHRoaXMucHJvcHMuaXNJbkVkaXRvciA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgLy9mb3IgZWRpdGluZyBjYXBhYmlsaXRpZXMgdG8gd29yayBwcm9wZXJseSwgd2UgYWx3YXlzIG5lZWQgdG8gcmVuZGVyIGVhY2ggaXRlbS5cbiAgICAgICAgICAgIC8vd2Ugd2lsbCBoaWRlIHRoZSBkaXNhYmxlZCBpdGVtcyBpbnN0ZWFkLlxuICAgICAgICAgICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KFJlYWN0LkZyYWdtZW50LCBudWxsLCB0aGlzLmNoaWxkQ29tcG9uZW50cy5tYXAoKGl0ZW0sIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgaXNWaXNpYmxlID0gKHRoaXMuc3RhdGUuYWN0aXZlSW5kZXggPT09IGluZGV4KTtcbiAgICAgICAgICAgICAgICBjb25zdCBzdHlsZXMgPSB7IGRpc3BsYXk6ICghaXNWaXNpYmxlKSA/ICdub25lJyA6ICdibG9jaycgfTtcbiAgICAgICAgICAgICAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBrZXk6IFwidGFiLWNvbnRlbnQtXCIgKyBpbmRleCwgY2xhc3NOYW1lOiB0aGlzLnByb3BzLmJhc2VDc3NDbGFzcyArICdfX2F1dGhvci10YWItY29udGVudCcsIHN0eWxlOiBzdHlsZXMgfSwgdGhpcy5jaGlsZENvbXBvbmVudHNbaW5kZXhdKSk7XG4gICAgICAgICAgICB9KSkpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgLy93aGVuIHRoZSBlZGl0b3IgaXMgZGlzYWJsZWQsIHdlIGNhbiBqdXN0IHNob3cgdGhlIGFjdGl2ZSBpdGVtIG9ubHkuXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jaGlsZENvbXBvbmVudHNbdGhpcy5zdGF0ZS5hY3RpdmVJbmRleF07XG4gICAgICAgIH1cbiAgICB9XG4gICAgaGFuZGxlVGFiTmF2Q2xpY2soaW5kZXgpIHtcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUuYWN0aXZlSW5kZXggIT09IGluZGV4KSB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICBhY3RpdmVJbmRleDogaW5kZXhcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuICAgIHRhYk5hdmlnYXRpb24oKSB7XG4gICAgICAgIGNvbnN0IGNoaWxkQ29tcG9uZW50cyA9IFtdO1xuICAgICAgICBpZiAoIXRoaXMucHJvcHMuY3FJdGVtcyB8fCAhdGhpcy5wcm9wcy5jcUl0ZW1zT3JkZXIpIHtcbiAgICAgICAgICAgIHJldHVybiBjaGlsZENvbXBvbmVudHM7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KFwib2xcIiwgeyByb2xlOiBcInRhYmxpc3RcIiwgY2xhc3NOYW1lOiB0aGlzLnByb3BzLmJhc2VDc3NDbGFzcyArICdfX3RhYmxpc3QnLCBcImFyaWEtbGFiZWxcIjogdGhpcy5wcm9wcy5hY2Nlc3NpYmlsaXR5TGFiZWwsIFwiYXJpYS1tdWx0aXNlbGVjdGFibGVcIjogXCJmYWxzZVwiIH0sIHRoaXMucHJvcHMuY3FJdGVtc09yZGVyLm1hcCgoaXRlbSwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHRhYiA9IHRoaXMucHJvcHMuY3FJdGVtc1tpdGVtXTtcbiAgICAgICAgICAgIGNvbnN0IGlzQWN0aXZlID0gKGluZGV4ID09PSB0aGlzLnN0YXRlLmFjdGl2ZUluZGV4KTtcbiAgICAgICAgICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChcImxpXCIsIHsgcm9sZTogXCJ0YWJcIiwga2V5OiBcInRhYi1cIiArIGluZGV4LCBvbkNsaWNrOiAoKSA9PiB0aGlzLmhhbmRsZVRhYk5hdkNsaWNrKGluZGV4KSwgY2xhc3NOYW1lOiB0aGlzLnByb3BzLmJhc2VDc3NDbGFzcyArICdfX3RhYicgKyAoaXNBY3RpdmUgPyAnICcgKyB0aGlzLnByb3BzLmJhc2VDc3NDbGFzcyArICdfX3RhYi0tYWN0aXZlJyA6ICcnKSwgdGFiSW5kZXg6IGlzQWN0aXZlID8gMCA6IC0xLCBcImRhdGEtY21wLWhvb2stdGFic1wiOiBcInRhYlwiIH0sIHRhYlsnY3E6cGFuZWxUaXRsZSddKSk7XG4gICAgICAgIH0pKSk7XG4gICAgfVxuICAgIGdldCB0YWJDb250YWluZXJQcm9wcygpIHtcbiAgICAgICAgY29uc3QgYXR0cnMgPSB0aGlzLmNvbnRhaW5lclByb3BzO1xuICAgICAgICBhdHRyc1snY2xhc3NOYW1lJ10gPSBhdHRycy5jbGFzc05hbWUgKyAnICcgKyB0aGlzLnByb3BzLmJhc2VDc3NDbGFzcztcbiAgICAgICAgYXR0cnNbJ2RhdGEtY21wLWlzJ10gPSAndGFicyc7XG4gICAgICAgIHJldHVybiBhdHRycztcbiAgICB9XG4gICAgcmVuZGVyKCkge1xuICAgICAgICBjb25zdCBpc0VtcHR5ID0gVGFic1YxSXNFbXB0eUZuKHRoaXMucHJvcHMpO1xuICAgICAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgT2JqZWN0LmFzc2lnbih7fSwgdGhpcy50YWJDb250YWluZXJQcm9wcyksXG4gICAgICAgICAgICAhaXNFbXB0eSAmJiB0aGlzLnRhYk5hdmlnYXRpb24oKSxcbiAgICAgICAgICAgICFpc0VtcHR5ICYmIHRoaXMudGFiYmVkQ2hpbGRDb21wb25lbnRzKCksXG4gICAgICAgICAgICB0aGlzLnBsYWNlaG9sZGVyQ29tcG9uZW50KSk7XG4gICAgfVxufVxuZXhwb3J0IGRlZmF1bHQgd2l0aFN0YW5kYXJkQmFzZUNzc0NsYXNzKHdpdGhBdXRob3JQYW5lbFN3aXRjaChUYWJzVjFJbXBsKSwgXCJjbXAtdGFic1wiKTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaVZHRmljMVl4TG1weklpd2ljMjkxY21ObFVtOXZkQ0k2SWlJc0luTnZkWEpqWlhNaU9sc2lWR0ZpYzFZeExuUnplQ0pkTENKdVlXMWxjeUk2VzEwc0ltMWhjSEJwYm1keklqb2lRVUZCUVRzN096czdPenM3T3pzN096czdSMEZqUnp0QlFVVklMRTlCUVU4c1MwRkJTeXhOUVVGTkxFOUJRVThzUTBGQlF6dEJRVU14UWl4UFFVRlBMRVZCUVVNc1owSkJRV2RDTEVWQlFVVXNVMEZCVXl4RlFVRkRMRTFCUVUwc2MwTkJRWE5ETEVOQlFVTTdRVUZEYWtZc1QwRkJUeXhGUVVFNFF5eHhRa0ZCY1VJc1JVRkJSU3gzUWtGQmQwSXNSVUZCYjBJc1RVRkJUU3g1UTBGQmVVTXNRMEZCUXp0QlFVTjRTeXhQUVVGUExFVkJRVU1zWlVGQlpTeEZRVUZETEUxQlFVMHNiVUpCUVcxQ0xFTkJRVU03UVVGbGJFUXNUVUZCVFN4VlFVRlhMRk5CUVZFc1UwRkJkVU03U1VGRk5VUXNXVUZCV1N4TFFVRnpRanRSUVVNNVFpeExRVUZMTEVOQlFVTXNTMEZCU3l4RFFVRkRMRU5CUVVNN1VVRkZZaXhKUVVGSkxFTkJRVU1zUzBGQlN5eEhRVUZITzFsQlExUXNWMEZCVnl4RlFVRkZMRU5CUVVNc1EwRkJReXhEUVVGRExFdEJRVXNzUTBGQlF5eFZRVUZWTEVsQlFVa3NTMEZCU3l4RFFVRkRMRlZCUVZVc1EwRkJReXhOUVVGTkxFZEJRVWNzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRWxCUVVrc1EwRkJReXhMUVVGTExFTkJRVU1zV1VGQldTeERRVUZETEU5QlFVOHNRMEZCUXl4TFFVRkxMRU5CUVVNc1ZVRkJWU3hEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTTdXVUZEZUVnc1owSkJRV2RDTEVWQlFVVXNTVUZCU1N4RFFVRkRMRXRCUVVzc1EwRkJReXhuUWtGQlowSXNTVUZCU1N4blFrRkJaMEk3VTBGRGNFVXNRMEZCUXp0UlFVVkdMRWxCUVVrc1EwRkJReXhwUWtGQmFVSXNSMEZCUnl4SlFVRkpMRU5CUVVNc2FVSkJRV2xDTEVOQlFVTXNTVUZCU1N4RFFVRkRMRWxCUVVrc1EwRkJReXhEUVVGRE8wbEJReTlFTEVOQlFVTTdTVUZGUkN4clFrRkJhMElzUTBGQlF5eFRRVUZ4UXl4RlFVRkZMRk5CUVdkRExFVkJRVVVzVVVGQll6dFJRVU4wUnl4SlFVRkhMRWxCUVVrc1EwRkJReXhMUVVGTExFTkJRVU1zTUVKQlFUQkNMRXRCUVVzc1UwRkJVeXhKUVVGSkxGTkJRVk1zUTBGQlF5d3dRa0ZCTUVJc1NVRkJTU3hKUVVGSkxFTkJRVU1zUzBGQlN5eERRVUZETERCQ1FVRXdRaXhGUVVGRE8xbEJRM0JKTEVsQlFVa3NRMEZCUXl4UlFVRlJMRU5CUVVNc1JVRkJSU3hYUVVGWExFVkJRVVVzU1VGQlNTeERRVUZETEV0QlFVc3NRMEZCUXl3d1FrRkJNRUlzUlVGQlJTeERRVUZGTEVOQlFVTTdVMEZETVVVN1NVRkRUQ3hEUVVGRE8wbEJSVU03T3p0TFFVZERPMGxCUTBnc2NVSkJRWEZDTzFGQlJXcENMRWxCUVVjc1NVRkJTU3hEUVVGRExFdEJRVXNzUTBGQlF5eFZRVUZWTEV0QlFVc3NTVUZCU1N4RlFVRkRPMWxCUXpsQ0xHZEdRVUZuUmp0WlFVTm9SaXd3UTBGQk1FTTdXVUZETVVNc1QwRkJUeXhEUVVOSUxEQkRRVVZSTEVsQlFVa3NRMEZCUXl4bFFVRmxMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU1zU1VGQlNTeEZRVUZGTEV0QlFVc3NSVUZCUlN4RlFVRkZPMmRDUVVOeVF5eE5RVUZOTEZOQlFWTXNSMEZCUnl4RFFVRkRMRWxCUVVrc1EwRkJReXhMUVVGTExFTkJRVU1zVjBGQlZ5eExRVUZMTEV0QlFVc3NRMEZCUXl4RFFVRkRPMmRDUVVOeVJDeE5RVUZOTEUxQlFVMHNSMEZCUnl4RlFVRkZMRTlCUVU4c1JVRkJSU3hEUVVGRExFTkJRVU1zVTBGQlV5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRTFCUVUwc1EwRkJReXhEUVVGRExFTkJRVU1zVDBGQlR5eEZRVUZETEVOQlFVTTdaMEpCUXpORUxFOUJRVThzUTBGRFNDdzJRa0ZCU3l4SFFVRkhMRVZCUVVVc1kwRkJZeXhIUVVGSExFdEJRVXNzUlVGQlJTeFRRVUZUTEVWQlFVVXNTVUZCU1N4RFFVRkRMRXRCUVVzc1EwRkJReXhaUVVGWkxFZEJRVWNzYzBKQlFYTkNMRVZCUVVVc1MwRkJTeXhGUVVGRkxFMUJRVTBzU1VGQlJ5eEpRVUZKTEVOQlFVTXNaVUZCWlN4RFFVRkRMRXRCUVVzc1EwRkJReXhEUVVGUExFTkJRM0JLTEVOQlFVRTdXVUZEVEN4RFFVRkRMRU5CUVVNc1EwRkZVQ3hEUVVOT0xFTkJRVUU3VTBGRFNqdGhRVUZKTzFsQlEwUXNjVVZCUVhGRk8xbEJRM0pGTEU5QlFVOHNTVUZCU1N4RFFVRkRMR1ZCUVdVc1EwRkJReXhKUVVGSkxFTkJRVU1zUzBGQlN5eERRVUZETEZkQlFWY3NRMEZCUXl4RFFVRkRPMU5CUTNaRU8wbEJRMHdzUTBGQlF6dEpRVVZFTEdsQ1FVRnBRaXhEUVVGRExFdEJRVms3VVVGRE1VSXNTVUZCUnl4SlFVRkpMRU5CUVVNc1MwRkJTeXhEUVVGRExGZEJRVmNzUzBGQlN5eExRVUZMTEVWQlFVTTdXVUZEYUVNc1NVRkJTU3hEUVVGRExGRkJRVkVzUTBGQlF6dG5Ra0ZEVml4WFFVRlhMRVZCUVVVc1MwRkJTenRoUVVOeVFpeERRVUZETEVOQlFVTTdVMEZEVGp0SlFVTk1MRU5CUVVNN1NVRkZSQ3hoUVVGaE8xRkJSVlFzVFVGQlRTeGxRVUZsTEVkQlFXbENMRVZCUVVVc1EwRkJRenRSUVVWNlF5eEpRVUZKTEVOQlFVTXNTVUZCU1N4RFFVRkRMRXRCUVVzc1EwRkJReXhQUVVGUExFbEJRVWtzUTBGQlF5eEpRVUZKTEVOQlFVTXNTMEZCU3l4RFFVRkRMRmxCUVZrc1JVRkJSVHRaUVVOcVJDeFBRVUZQTEdWQlFXVXNRMEZCUXp0VFFVTXhRanRSUVVWRUxFOUJRVThzUTBGRFNDdzBRa0ZCU1N4SlFVRkpMRVZCUVVNc1UwRkJVeXhGUVVOa0xGTkJRVk1zUlVGQlJTeEpRVUZKTEVOQlFVTXNTMEZCU3l4RFFVRkRMRmxCUVZrc1IwRkJSeXhYUVVGWExHZENRVU53UXl4SlFVRkpMRU5CUVVNc1MwRkJTeXhEUVVGRExHdENRVUZyUWl3d1FrRkRjRUlzVDBGQlR5eEpRVVZ3UWl4SlFVRkpMRU5CUVVNc1MwRkJTeXhEUVVGRExGbEJRVmtzUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXl4SlFVRkpMRVZCUVVVc1MwRkJTeXhGUVVGRkxFVkJRVVU3V1VGRGVFTXNUVUZCVFN4SFFVRkhMRWRCUVVjc1NVRkJTU3hEUVVGRExFdEJRVXNzUTBGQlF5eFBRVUZQTEVOQlFVTXNTVUZCU1N4RFFVRkRMRU5CUVVNN1dVRkRja01zVFVGQlRTeFJRVUZSTEVkQlFVY3NRMEZCUXl4TFFVRkxMRXRCUVVzc1NVRkJTU3hEUVVGRExFdEJRVXNzUTBGQlF5eFhRVUZYTEVOQlFVTXNRMEZCUXp0WlFVTndSQ3hQUVVGUExFTkJRMGdzTkVKQlFVa3NTVUZCU1N4RlFVRkRMRXRCUVVzc1JVRkRWaXhIUVVGSExFVkJRVVVzVFVGQlRTeEhRVUZITEV0QlFVc3NSVUZEYmtJc1QwRkJUeXhGUVVGRkxFZEJRVWNzUlVGQlJTeERRVUZETEVsQlFVa3NRMEZCUXl4cFFrRkJhVUlzUTBGQlF5eExRVUZMTEVOQlFVTXNSVUZETlVNc1UwRkJVeXhGUVVGRkxFbEJRVWtzUTBGQlF5eExRVUZMTEVOQlFVTXNXVUZCV1N4SFFVRkhMRTlCUVU4c1IwRkJSeXhEUVVGRExGRkJRVkVzUTBGQlF5eERRVUZETEVOQlFVTXNSMEZCUnl4SFFVRkhMRWxCUVVrc1EwRkJReXhMUVVGTExFTkJRVU1zV1VGQldTeEhRVUZITEdWQlFXVXNRMEZCUXl4RFFVRkRMRU5CUVVNc1JVRkJSU3hEUVVGRExFVkJRMmhJTEZGQlFWRXNSVUZCUlN4UlFVRlJMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMSGRDUVVOU0xFdEJRVXNzU1VGRGRrSXNSMEZCUnl4RFFVRkRMR1ZCUVdVc1EwRkJReXhEUVVOd1FpeERRVU5TTEVOQlFVRTdVVUZGVEN4RFFVRkRMRU5CUVVNc1EwRkhWQ3hEUVVOU0xFTkJRVUU3U1VGRlRDeERRVUZETzBsQlJVUXNTVUZCU1N4cFFrRkJhVUk3VVVGRGFrSXNUVUZCVFN4TFFVRkxMRWRCUVVjc1NVRkJTU3hEUVVGRExHTkJRV01zUTBGQlF6dFJRVU5zUXl4TFFVRkxMRU5CUVVNc1YwRkJWeXhEUVVGRExFZEJRVWNzUzBGQlN5eERRVUZETEZOQlFWTXNSMEZCUnl4SFFVRkhMRWRCUVVjc1NVRkJTU3hEUVVGRExFdEJRVXNzUTBGQlF5eFpRVUZaTEVOQlFVTTdVVUZEY2tVc1MwRkJTeXhEUVVGRExHRkJRV0VzUTBGQlF5eEhRVUZITEUxQlFVMHNRMEZCUXp0UlFVTTVRaXhQUVVGUExFdEJRVXNzUTBGQlF6dEpRVU5xUWl4RFFVRkRPMGxCUlVRc1RVRkJUVHRSUVVWR0xFMUJRVTBzVDBGQlR5eEhRVUZITEdWQlFXVXNRMEZCUXl4SlFVRkpMRU5CUVVNc1MwRkJTeXhEUVVGRExFTkJRVU03VVVGRk5VTXNUMEZCVHl4RFFVTklMRFpEUVVGVExFbEJRVWtzUTBGQlF5eHBRa0ZCYVVJN1dVRkRla0lzUTBGQlF5eFBRVUZQTEVsQlFVa3NTVUZCU1N4RFFVRkRMR0ZCUVdFc1JVRkJSVHRaUVVOb1F5eERRVUZETEU5QlFVOHNTVUZCU1N4SlFVRkpMRU5CUVVNc2NVSkJRWEZDTEVWQlFVVTdXVUZEZUVNc1NVRkJTU3hEUVVGRExHOUNRVUZ2UWl4RFFVTjZRaXhEUVVOVUxFTkJRVUU3U1VGRFRDeERRVUZETzBOQlJVbzdRVUZGUkN4bFFVRmxMSGRDUVVGM1FpeERRVUZETEhGQ1FVRnhRaXhEUVVGRExGVkJRVlVzUTBGQlF5eEZRVUZGTEZWQlFWVXNRMEZCUXl4RFFVRkRJaXdpYzI5MWNtTmxjME52Ym5SbGJuUWlPbHNpTHlwY2JpQXFJQ0JEYjNCNWNtbG5hSFFnTWpBeU1DQkJaRzlpWlZ4dUlDcGNiaUFxSUNCTWFXTmxibk5sWkNCMWJtUmxjaUIwYUdVZ1FYQmhZMmhsSUV4cFkyVnVjMlVzSUZabGNuTnBiMjRnTWk0d0lDaDBhR1VnWENKTWFXTmxibk5sWENJcE8xeHVJQ29nSUhsdmRTQnRZWGtnYm05MElIVnpaU0IwYUdseklHWnBiR1VnWlhoalpYQjBJR2x1SUdOdmJYQnNhV0Z1WTJVZ2QybDBhQ0IwYUdVZ1RHbGpaVzV6WlM1Y2JpQXFJQ0JaYjNVZ2JXRjVJRzlpZEdGcGJpQmhJR052Y0hrZ2IyWWdkR2hsSUV4cFkyVnVjMlVnWVhSY2JpQXFYRzRnS2lBZ0lDQWdJR2gwZEhBNkx5OTNkM2N1WVhCaFkyaGxMbTl5Wnk5c2FXTmxibk5sY3k5TVNVTkZUbE5GTFRJdU1GeHVJQ3BjYmlBcUlDQlZibXhsYzNNZ2NtVnhkV2x5WldRZ1lua2dZWEJ3YkdsallXSnNaU0JzWVhjZ2IzSWdZV2R5WldWa0lIUnZJR2x1SUhkeWFYUnBibWNzSUhOdlpuUjNZWEpsWEc0Z0tpQWdaR2x6ZEhKcFluVjBaV1FnZFc1a1pYSWdkR2hsSUV4cFkyVnVjMlVnYVhNZ1pHbHpkSEpwWW5WMFpXUWdiMjRnWVc0Z1hDSkJVeUJKVTF3aUlFSkJVMGxUTEZ4dUlDb2dJRmRKVkVoUFZWUWdWMEZTVWtGT1ZFbEZVeUJQVWlCRFQwNUVTVlJKVDA1VElFOUdJRUZPV1NCTFNVNUVMQ0JsYVhSb1pYSWdaWGh3Y21WemN5QnZjaUJwYlhCc2FXVmtMbHh1SUNvZ0lGTmxaU0IwYUdVZ1RHbGpaVzV6WlNCbWIzSWdkR2hsSUhOd1pXTnBabWxqSUd4aGJtZDFZV2RsSUdkdmRtVnlibWx1WnlCd1pYSnRhWE56YVc5dWN5QmhibVJjYmlBcUlDQnNhVzFwZEdGMGFXOXVjeUIxYm1SbGNpQjBhR1VnVEdsalpXNXpaUzVjYmlBcUwxeHVYRzVwYlhCdmNuUWdVbVZoWTNRZ1puSnZiU0JjSW5KbFlXTjBYQ0k3WEc1cGJYQnZjblFnZTBOdmJYQnZibVZ1ZEUxaGNIQnBibWNzSUVOdmJuUmhhVzVsY24wZ1puSnZiU0FuUUdGa2IySmxMMkZsYlMxeVpXRmpkQzFsWkdsMFlXSnNaUzFqYjIxd2IyNWxiblJ6Snp0Y2JtbHRjRzl5ZENCN1EyOXlaVU52Ym5SaGFXNWxjbEJ5YjNCbGNuUnBaWE1zSUVOdmNtVkRiMjUwWVdsdVpYSlRkR0YwWlN3Z2QybDBhRUYxZEdodmNsQmhibVZzVTNkcGRHTm9MQ0IzYVhSb1UzUmhibVJoY21SQ1lYTmxRM056UTJ4aGMzTXNJRU52Y21WRGIyNTBZV2x1WlhKSmRHVnRmU0JtY205dElGd2lMaTR2TGk0dkxpNHZRV0p6ZEhKaFkzUkRiM0psUTI5dWRHRnBibVZ5UTI5dGNHOXVaVzUwWENJN1hHNXBiWEJ2Y25RZ2UxUmhZbk5XTVVselJXMXdkSGxHYm4wZ1puSnZiU0JjSWk0dlZHRmljMVl4U1hORmJYQjBlVVp1WENJN1hHNWNibVY0Y0c5eWRDQnBiblJsY21aaFkyVWdWR0ZpYzFZeFVISnZjR1Z5ZEdsbGN5QmxlSFJsYm1SeklFTnZjbVZEYjI1MFlXbHVaWEpRY205d1pYSjBhV1Z6ZTF4dUlDQWdJRnh1SUNBZ0lHRmpZMlZ6YzJsaWFXeHBkSGxNWVdKbGJEcHpkSEpwYm1jN1hHNGdJQ0FnWVdOMGFYWmxTWFJsYlQ4NklITjBjbWx1Wnp0Y2JpQWdJQ0JqY1VsMFpXMXpPaUI3SUZ0clpYazZJSE4wY21sdVoxMDZJRU52Y21WRGIyNTBZV2x1WlhKSmRHVnRJSDA3WEc1OVhHNWNibHh1Wlhod2IzSjBJR2x1ZEdWeVptRmpaU0JVWVdKelZqRlRkR0YwWlNCbGVIUmxibVJ6SUVOdmNtVkRiMjUwWVdsdVpYSlRkR0YwWlh0Y2JpQWdJQ0JoWTNScGRtVkpibVJsZURvZ2JuVnRZbVZ5TzF4dWZWeHVYRzVjYm1Oc1lYTnpJRlJoWW5OV01VbHRjR3dnWlhoMFpXNWtjeUJEYjI1MFlXbHVaWEk4VkdGaWMxWXhVSEp2Y0dWeWRHbGxjeXhVWVdKelZqRlRkR0YwWlQ0Z2UxeHVYRzRnSUNBZ1kyOXVjM1J5ZFdOMGIzSW9jSEp2Y0hNNlZHRmljMVl4VUhKdmNHVnlkR2xsY3lrZ2UxeHVJQ0FnSUNBZ0lDQnpkWEJsY2lod2NtOXdjeWs3WEc1Y2JpQWdJQ0FnSUNBZ2RHaHBjeTV6ZEdGMFpTQTlJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lHRmpkR2wyWlVsdVpHVjRPaUFvSVNGd2NtOXdjeTVoWTNScGRtVkpkR1Z0SUNZbUlIQnliM0J6TG1GamRHbDJaVWwwWlcwdWJHVnVaM1JvSUQ0Z01Da2dQeUIwYUdsekxuQnliM0J6TG1OeFNYUmxiWE5QY21SbGNpNXBibVJsZUU5bUtIQnliM0J6TG1GamRHbDJaVWwwWlcwcElEb2dNQ3hjYmlBZ0lDQWdJQ0FnSUNBZ0lHTnZiWEJ2Ym1WdWRFMWhjSEJwYm1jNklIUm9hWE11Y0hKdmNITXVZMjl0Y0c5dVpXNTBUV0Z3Y0dsdVp5QjhmQ0JEYjIxd2IyNWxiblJOWVhCd2FXNW5YRzRnSUNBZ0lDQWdJSDA3WEc1Y2JpQWdJQ0FnSUNBZ2RHaHBjeTVvWVc1a2JHVlVZV0pPWVhaRGJHbGpheUE5SUhSb2FYTXVhR0Z1Wkd4bFZHRmlUbUYyUTJ4cFkyc3VZbWx1WkNoMGFHbHpLVHRjYmlBZ0lDQjlYRzVjYmlBZ0lDQmpiMjF3YjI1bGJuUkVhV1JWY0dSaGRHVW9jSEpsZGxCeWIzQnpPaUJTWldGa2IyNXNlVHhVWVdKelZqRlFjbTl3WlhKMGFXVnpQaXdnY0hKbGRsTjBZWFJsT2lCU1pXRmtiMjVzZVR4VVlXSnpWakZUZEdGMFpUNHNJSE51WVhCemFHOTBQem9nWVc1NUtUb2dkbTlwWkNCN1hHNGdJQ0FnSUNBZ0lHbG1LSFJvYVhNdWNISnZjSE11WVdOMGFYWmxTVzVrWlhoR2NtOXRRWFYwYUc5eVVHRnVaV3dnSVQwOUlIVnVaR1ZtYVc1bFpDQW1KaUJ3Y21WMlVISnZjSE11WVdOMGFYWmxTVzVrWlhoR2NtOXRRWFYwYUc5eVVHRnVaV3dnSVQwZ2RHaHBjeTV3Y205d2N5NWhZM1JwZG1WSmJtUmxlRVp5YjIxQmRYUm9iM0pRWVc1bGJDbDdYRzRnSUNBZ0lDQWdJQ0FnSUNCMGFHbHpMbk5sZEZOMFlYUmxLSHNnWVdOMGFYWmxTVzVrWlhnNklIUm9hWE11Y0hKdmNITXVZV04wYVhabFNXNWtaWGhHY205dFFYVjBhRzl5VUdGdVpXd2dmU0FwTzF4dUlDQWdJQ0FnSUNCOVhHNGdJQ0FnZlZ4dVhHNGdJQ0FnSUNBdktpcGNiaUFnSUNBZ0tpQlBkbVZ5Ykc5aFpDQmphR2xzWkVOdmJYQnZibVZ1ZEhNZ1oyVjBkR1Z5SUhSdklHOXViSGtnY21WMGRYSnVJSFJvWlNCaFkzUnBkbVVnZEdGaUozTWdhWFJsYlhNdVhHNGdJQ0FnSUNvZ1FISmxkSFZ5Ym5NZ2UwOWlhbVZqZEZ0ZGZTQkJiaUJoY25KaGVTQjNhWFJvSUhSb1pTQmpiMjF3YjI1bGJuUnpJR2x1YzNSaGJuUnBZWFJsWkNCMGJ5QktVMWhjYmlBZ0lDQWdLaTljYmlBZ0lDQjBZV0ppWldSRGFHbHNaRU52YlhCdmJtVnVkSE1vS1NCN1hHNWNiaUFnSUNBZ0lDQWdhV1lvZEdocGN5NXdjbTl3Y3k1cGMwbHVSV1JwZEc5eUlEMDlQU0IwY25WbEtYdGNiaUFnSUNBZ0lDQWdJQ0FnSUM4dlptOXlJR1ZrYVhScGJtY2dZMkZ3WVdKcGJHbDBhV1Z6SUhSdklIZHZjbXNnY0hKdmNHVnliSGtzSUhkbElHRnNkMkY1Y3lCdVpXVmtJSFJ2SUhKbGJtUmxjaUJsWVdOb0lHbDBaVzB1WEc0Z0lDQWdJQ0FnSUNBZ0lDQXZMM2RsSUhkcGJHd2dhR2xrWlNCMGFHVWdaR2x6WVdKc1pXUWdhWFJsYlhNZ2FXNXpkR1ZoWkM1Y2JpQWdJQ0FnSUNBZ0lDQWdJSEpsZEhWeWJpQW9YRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdQRDVjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2RHaHBjeTVqYUdsc1pFTnZiWEJ2Ym1WdWRITXViV0Z3S0NocGRHVnRMQ0JwYm1SbGVDa2dQVDRnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lHTnZibk4wSUdselZtbHphV0pzWlNBOUlDaDBhR2x6TG5OMFlYUmxMbUZqZEdsMlpVbHVaR1Y0SUQwOVBTQnBibVJsZUNrN1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdZMjl1YzNRZ2MzUjViR1Z6SUQwZ2V5QmthWE53YkdGNU9pQW9JV2x6Vm1semFXSnNaU2tnUHlBbmJtOXVaU2NnT2lBbllteHZZMnNuZlR0Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQnlaWFIxY200Z0tGeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBOFpHbDJJR3RsZVQxN1hDSjBZV0l0WTI5dWRHVnVkQzFjSWlBcklHbHVaR1Y0ZlNCamJHRnpjMDVoYldVOWUzUm9hWE11Y0hKdmNITXVZbUZ6WlVOemMwTnNZWE56SUNzZ0oxOWZZWFYwYUc5eUxYUmhZaTFqYjI1MFpXNTBKMzBnYzNSNWJHVTllM04wZVd4bGMzMCtlM1JvYVhNdVkyaHBiR1JEYjIxd2IyNWxiblJ6VzJsdVpHVjRYWDA4TDJScGRqNWNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FwWEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0I5S1Z4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQjlYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdQQzgrWEc0Z0lDQWdJQ0FnSUNBZ0lDQXBYRzRnSUNBZ0lDQWdJSDFsYkhObGUxeHVJQ0FnSUNBZ0lDQWdJQ0FnTHk5M2FHVnVJSFJvWlNCbFpHbDBiM0lnYVhNZ1pHbHpZV0pzWldRc0lIZGxJR05oYmlCcWRYTjBJSE5vYjNjZ2RHaGxJR0ZqZEdsMlpTQnBkR1Z0SUc5dWJIa3VYRzRnSUNBZ0lDQWdJQ0FnSUNCeVpYUjFjbTRnZEdocGN5NWphR2xzWkVOdmJYQnZibVZ1ZEhOYmRHaHBjeTV6ZEdGMFpTNWhZM1JwZG1WSmJtUmxlRjA3WEc0Z0lDQWdJQ0FnSUgxY2JpQWdJQ0I5WEc1Y2JpQWdJQ0JvWVc1a2JHVlVZV0pPWVhaRGJHbGpheWhwYm1SbGVEcHVkVzFpWlhJcGUxeHVJQ0FnSUNBZ0lDQnBaaWgwYUdsekxuTjBZWFJsTG1GamRHbDJaVWx1WkdWNElDRTlQU0JwYm1SbGVDbDdYRzRnSUNBZ0lDQWdJQ0FnSUNCMGFHbHpMbk5sZEZOMFlYUmxLSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0JoWTNScGRtVkpibVJsZURvZ2FXNWtaWGhjYmlBZ0lDQWdJQ0FnSUNBZ0lIMHBPMXh1SUNBZ0lDQWdJQ0I5WEc0Z0lDQWdmVnh1WEc0Z0lDQWdkR0ZpVG1GMmFXZGhkR2x2YmlncGUxeHVYRzRnSUNBZ0lDQWdJR052Ym5OMElHTm9hV3hrUTI5dGNHOXVaVzUwY3pwS1UxZ3VSV3hsYldWdWRGdGRJRDBnVzEwN1hHNWNiaUFnSUNBZ0lDQWdhV1lnS0NGMGFHbHpMbkJ5YjNCekxtTnhTWFJsYlhNZ2ZId2dJWFJvYVhNdWNISnZjSE11WTNGSmRHVnRjMDl5WkdWeUtTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNCeVpYUjFjbTRnWTJocGJHUkRiMjF3YjI1bGJuUnpPMXh1SUNBZ0lDQWdJQ0I5WEc1Y2JpQWdJQ0FnSUNBZ2NtVjBkWEp1SUNoY2JpQWdJQ0FnSUNBZ0lDQWdJRHh2YkNCeWIyeGxQVndpZEdGaWJHbHpkRndpWEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnWTJ4aGMzTk9ZVzFsUFh0MGFHbHpMbkJ5YjNCekxtSmhjMlZEYzNORGJHRnpjeUFySUNkZlgzUmhZbXhwYzNRbmZWeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lHRnlhV0V0YkdGaVpXdzllM1JvYVhNdWNISnZjSE11WVdOalpYTnphV0pwYkdsMGVVeGhZbVZzZlZ4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUdGeWFXRXRiWFZzZEdselpXeGxZM1JoWW14bFBWd2labUZzYzJWY0lqNWNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnZEdocGN5NXdjbTl3Y3k1amNVbDBaVzF6VDNKa1pYSXViV0Z3S0NocGRHVnRMQ0JwYm1SbGVDa2dQVDRnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lHTnZibk4wSUhSaFlpQTlJSFJvYVhNdWNISnZjSE11WTNGSmRHVnRjMXRwZEdWdFhUdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0JqYjI1emRDQnBjMEZqZEdsMlpTQTlJQ2hwYm1SbGVDQTlQVDBnZEdocGN5NXpkR0YwWlM1aFkzUnBkbVZKYm1SbGVDazdYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnY21WMGRYSnVJQ2hjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdQR3hwSUhKdmJHVTlYQ0owWVdKY0lseHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdhMlY1UFh0Y0luUmhZaTFjSWlBcklHbHVaR1Y0ZlZ4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2IyNURiR2xqYXoxN0tDa2dQVDRnZEdocGN5NW9ZVzVrYkdWVVlXSk9ZWFpEYkdsamF5aHBibVJsZUNsOVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQmpiR0Z6YzA1aGJXVTllM1JvYVhNdWNISnZjSE11WW1GelpVTnpjME5zWVhOeklDc2dKMTlmZEdGaUp5QXJJQ2hwYzBGamRHbDJaU0EvSUNjZ0p5QXJJSFJvYVhNdWNISnZjSE11WW1GelpVTnpjME5zWVhOeklDc2dKMTlmZEdGaUxTMWhZM1JwZG1VbklEb2dKeWNwZlZ4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2RHRmlTVzVrWlhnOWUybHpRV04wYVhabElEOGdNQ0E2SUMweGZWeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdaR0YwWVMxamJYQXRhRzl2YXkxMFlXSnpQVndpZEdGaVhDSStYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0I3ZEdGaVd5ZGpjVHB3WVc1bGJGUnBkR3hsSjExOVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUR3dmJHaytYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnS1Z4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lGeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2ZTbGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnZlZ4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUZ4dUlDQWdJQ0FnSUNBZ0lDQWdQQzl2YkQ1Y2JpQWdJQ0FnSUNBZ0tWeHVYRzRnSUNBZ2ZWeHVYRzRnSUNBZ1oyVjBJSFJoWWtOdmJuUmhhVzVsY2xCeWIzQnpLQ2w3WEc0Z0lDQWdJQ0FnSUdOdmJuTjBJR0YwZEhKeklEMGdkR2hwY3k1amIyNTBZV2x1WlhKUWNtOXdjenRjYmlBZ0lDQWdJQ0FnWVhSMGNuTmJKMk5zWVhOelRtRnRaU2RkSUQwZ1lYUjBjbk11WTJ4aGMzTk9ZVzFsSUNzZ0p5QW5JQ3NnZEdocGN5NXdjbTl3Y3k1aVlYTmxRM056UTJ4aGMzTTdYRzRnSUNBZ0lDQWdJR0YwZEhKeld5ZGtZWFJoTFdOdGNDMXBjeWRkSUQwZ0ozUmhZbk1uTzF4dUlDQWdJQ0FnSUNCeVpYUjFjbTRnWVhSMGNuTTdYRzRnSUNBZ2ZWeHVYRzRnSUNBZ2NtVnVaR1Z5S0NrZ2UxeHVYRzRnSUNBZ0lDQWdJR052Ym5OMElHbHpSVzF3ZEhrZ1BTQlVZV0p6VmpGSmMwVnRjSFI1Um00b2RHaHBjeTV3Y205d2N5azdYRzVjYmlBZ0lDQWdJQ0FnY21WMGRYSnVJQ2hjYmlBZ0lDQWdJQ0FnSUNBZ0lEeGthWFlnZXk0dUxuUm9hWE11ZEdGaVEyOXVkR0ZwYm1WeVVISnZjSE45UGx4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUhzZ0lXbHpSVzF3ZEhrZ0ppWWdkR2hwY3k1MFlXSk9ZWFpwWjJGMGFXOXVLQ2tnZlZ4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUhzZ0lXbHpSVzF3ZEhrZ0ppWWdkR2hwY3k1MFlXSmlaV1JEYUdsc1pFTnZiWEJ2Ym1WdWRITW9LU0I5WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnZXlCMGFHbHpMbkJzWVdObGFHOXNaR1Z5UTI5dGNHOXVaVzUwSUgxY2JpQWdJQ0FnSUNBZ0lDQWdJRHd2WkdsMlBseHVJQ0FnSUNBZ0lDQXBYRzRnSUNBZ2ZWeHVYRzU5WEc1Y2JtVjRjRzl5ZENCa1pXWmhkV3gwSUhkcGRHaFRkR0Z1WkdGeVpFSmhjMlZEYzNORGJHRnpjeWgzYVhSb1FYVjBhRzl5VUdGdVpXeFRkMmwwWTJnb1ZHRmljMVl4U1cxd2JDa3NJRndpWTIxd0xYUmhZbk5jSWlrN0lsMTkiLCIvKlxuICogIENvcHlyaWdodCAyMDIwIEFkb2JlXG4gKlxuICogIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiAgeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICAgICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqICBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiAgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiAgU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5leHBvcnQgZnVuY3Rpb24gVGFic1YxSXNFbXB0eUZuKHByb3BzKSB7XG4gICAgcmV0dXJuIHByb3BzLmNxSXRlbXNPcmRlciA9PSBudWxsIHx8IHByb3BzLmNxSXRlbXNPcmRlci5sZW5ndGggPT09IDA7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lWR0ZpYzFZeFNYTkZiWEIwZVVadUxtcHpJaXdpYzI5MWNtTmxVbTl2ZENJNklpSXNJbk52ZFhKalpYTWlPbHNpVkdGaWMxWXhTWE5GYlhCMGVVWnVMblJ6SWwwc0ltNWhiV1Z6SWpwYlhTd2liV0Z3Y0dsdVozTWlPaUpCUVVGQk96czdPenM3T3pzN096czdPenRIUVdOSE8wRkJTVWdzVFVGQlRTeFZRVUZWTEdWQlFXVXNRMEZCUXl4TFFVRnpRanRKUVVOc1JDeFBRVUZQTEV0QlFVc3NRMEZCUXl4WlFVRlpMRWxCUVVrc1NVRkJTU3hKUVVGSkxFdEJRVXNzUTBGQlF5eFpRVUZaTEVOQlFVTXNUVUZCVFN4TFFVRkxMRU5CUVVNc1EwRkJRenRCUVVONlJTeERRVUZESWl3aWMyOTFjbU5sYzBOdmJuUmxiblFpT2xzaUx5cGNiaUFxSUNCRGIzQjVjbWxuYUhRZ01qQXlNQ0JCWkc5aVpWeHVJQ3BjYmlBcUlDQk1hV05sYm5ObFpDQjFibVJsY2lCMGFHVWdRWEJoWTJobElFeHBZMlZ1YzJVc0lGWmxjbk5wYjI0Z01pNHdJQ2gwYUdVZ1hDSk1hV05sYm5ObFhDSXBPMXh1SUNvZ0lIbHZkU0J0WVhrZ2JtOTBJSFZ6WlNCMGFHbHpJR1pwYkdVZ1pYaGpaWEIwSUdsdUlHTnZiWEJzYVdGdVkyVWdkMmwwYUNCMGFHVWdUR2xqWlc1elpTNWNiaUFxSUNCWmIzVWdiV0Y1SUc5aWRHRnBiaUJoSUdOdmNIa2diMllnZEdobElFeHBZMlZ1YzJVZ1lYUmNiaUFxWEc0Z0tpQWdJQ0FnSUdoMGRIQTZMeTkzZDNjdVlYQmhZMmhsTG05eVp5OXNhV05sYm5ObGN5OU1TVU5GVGxORkxUSXVNRnh1SUNwY2JpQXFJQ0JWYm14bGMzTWdjbVZ4ZFdseVpXUWdZbmtnWVhCd2JHbGpZV0pzWlNCc1lYY2diM0lnWVdkeVpXVmtJSFJ2SUdsdUlIZHlhWFJwYm1jc0lITnZablIzWVhKbFhHNGdLaUFnWkdsemRISnBZblYwWldRZ2RXNWtaWElnZEdobElFeHBZMlZ1YzJVZ2FYTWdaR2x6ZEhKcFluVjBaV1FnYjI0Z1lXNGdYQ0pCVXlCSlUxd2lJRUpCVTBsVExGeHVJQ29nSUZkSlZFaFBWVlFnVjBGU1VrRk9WRWxGVXlCUFVpQkRUMDVFU1ZSSlQwNVRJRTlHSUVGT1dTQkxTVTVFTENCbGFYUm9aWElnWlhod2NtVnpjeUJ2Y2lCcGJYQnNhV1ZrTGx4dUlDb2dJRk5sWlNCMGFHVWdUR2xqWlc1elpTQm1iM0lnZEdobElITndaV05wWm1saklHeGhibWQxWVdkbElHZHZkbVZ5Ym1sdVp5QndaWEp0YVhOemFXOXVjeUJoYm1SY2JpQXFJQ0JzYVcxcGRHRjBhVzl1Y3lCMWJtUmxjaUIwYUdVZ1RHbGpaVzV6WlM1Y2JpQXFMMXh1WEc1cGJYQnZjblFnZTFSaFluTldNVkJ5YjNCbGNuUnBaWE45SUdaeWIyMGdYQ0l1TDFSaFluTldNVndpTzF4dVhHNWxlSEJ2Y25RZ1puVnVZM1JwYjI0Z1ZHRmljMVl4U1hORmJYQjBlVVp1S0hCeWIzQnpPbFJoWW5OV01WQnliM0JsY25ScFpYTXBlMXh1SUNBZ0lISmxkSFZ5YmlCd2NtOXdjeTVqY1VsMFpXMXpUM0prWlhJZ1BUMGdiblZzYkNCOGZDQndjbTl3Y3k1amNVbDBaVzF6VDNKa1pYSXViR1Z1WjNSb0lEMDlQU0F3TzF4dWZTSmRmUT09IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGFkb2JlL2FlbS1yZWFjdC1lZGl0YWJsZS1jb21wb25lbnRzXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=