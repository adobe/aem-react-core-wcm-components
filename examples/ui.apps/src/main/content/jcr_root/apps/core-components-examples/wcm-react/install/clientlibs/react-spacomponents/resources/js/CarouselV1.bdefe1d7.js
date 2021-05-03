(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["CarouselV1"],{

/***/ "../../react-spa-components/dist/container/carousel/v1/CarouselV1.js":
/*!*****************************************************************************************************************************!*\
  !*** /Users/raaijmak/workspace/aem-react-core-wcm-components/react-spa-components/dist/container/carousel/v1/CarouselV1.js ***!
  \*****************************************************************************************************************************/
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

      return __webpack_require__(__webpack_require__.s = 3);
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
      "./src/container/carousel/v1/CarouselV1.tsx":
      /*!**************************************************!*\
        !*** ./src/container/carousel/v1/CarouselV1.tsx ***!
        \**************************************************/

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


        var _CarouselV1IsEmptyFn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
        /*! ./CarouselV1IsEmptyFn */
        "./src/container/carousel/v1/CarouselV1IsEmptyFn.ts");
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


        const formatFn = (value, args) => {
          let content = value;

          for (let i = 0; i < args.length; i++) {
            const replacement = '{' + i + '}';
            content = content.replace(replacement, args[i]);
          }

          return content;
        };

        class CarouselV1Impl extends _adobe_aem_react_editable_components__WEBPACK_IMPORTED_MODULE_2__["Container"] {
          constructor(props) {
            super(props);
            this.interval = 0;

            this.clearAutoPlay = () => {
              window.clearInterval(this.interval);
            }; //@ts-ignore


            this.state = {
              activeIndex: 0,
              isMouseEntered: false,
              autoPlay: this.props.autoplay && !this.props.isInEditor,
              componentMapping: this.props.componentMapping || _adobe_aem_react_editable_components__WEBPACK_IMPORTED_MODULE_2__["ComponentMapping"]
            };
            this.handleIndicatorClick = this.handleIndicatorClick.bind(this);
            this.handleOnButtonPrev = this.handleOnButtonPrev.bind(this);
            this.handleOnButtonNext = this.handleOnButtonNext.bind(this);
            this.handleOnMouseEnter = this.handleOnMouseEnter.bind(this);
            this.handleOnMouseLeave = this.handleOnMouseLeave.bind(this);
          }

          componentDidUpdate(prevProps, prevState, snapshot) {
            if (this.props.activeIndexFromAuthorPanel !== undefined && prevProps.activeIndexFromAuthorPanel != this.props.activeIndexFromAuthorPanel) {
              this.setState({
                activeIndex: this.props.activeIndexFromAuthorPanel
              });
              this.toggleAutoPlay(false);
            }
          }

          componentDidMount() {
            this.autoPlay();
          }

          componentWillUnmount() {
            if (this.interval) {
              this.clearAutoPlay();
            }
          }

          handleOnMouseEnter() {
            if (!this.props.autopauseDisabled && this.props.autoplay) {
              this.clearAutoPlay();
            }
          }

          handleOnMouseLeave() {
            if (!this.props.autopauseDisabled && this.props.autoplay) {
              this.autoPlay();
            }
          }

          handleOnButtonPrev() {
            this.prevSlide();
          }

          handleOnButtonNext() {
            this.nextSlide();
          }

          handleIndicatorClick(index) {
            if (this.state.activeIndex !== index) {
              this.setState({
                activeIndex: index
              });
            }
          }

          autoPlay() {
            this.interval = window.setInterval(() => {
              this.autoPlayTick();
            }, this.props.delay);
          }

          autoPlayTick() {
            if (!this.state.autoPlay || this.props.cqItemsOrder.length <= 1) {
              return;
            }

            this.nextSlide();
          }

          toggleAutoPlay(toggle) {
            this.setState({
              autoPlay: toggle
            });
          }

          nextSlide() {
            const activeIndex = this.__getActiveIndex();

            if (activeIndex === this.props.cqItemsOrder.length - 1) {
              this.__setSlide(0);
            } else {
              this.__setSlide(activeIndex + 1);
            }
          }

          prevSlide() {
            const activeIndex = this.__getActiveIndex();

            if (activeIndex === 0) {
              this.__setSlide(this.props.cqItemsOrder.length - 1);
            } else {
              this.__setSlide(activeIndex - 1);
            }
          }

          __getActiveIndex() {
            return this.state.activeIndex;
          }

          __setSlide(index) {
            this.setState({
              activeIndex: index
            });
          }

          render() {
            const isEmpty = Object(_CarouselV1IsEmptyFn__WEBPACK_IMPORTED_MODULE_3__["CarouselV1IsEmptyFn"])(this.props);
            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
              className: this.props.baseCssClass,
              role: "group",
              "aria-label": this.props.accessibilityLabel,
              "aria-roledescription": "carousel"
            }, !isEmpty && this.renderCarousel(), this.placeholderComponent);
          }

          displayItem(item, index) {
            const isActive = index === this.state.activeIndex; //we display the item if active is true, or if we are in the author mode. we need to always display the item for the author mode to work properly.

            const display = !!(isActive || this.props.isInEditor);
            const cssClass = isActive ? `${this.props.baseCssClass}__item ${this.props.baseCssClass}__item--active` : `${this.props.baseCssClass}__item`;
            const ariaLabel = formatFn(this.props.accessibility.slide, [(index + 1).toString(), this.props.cqItemsOrder.length.toString()]);
            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
              key: 'item-' + index,
              className: cssClass,
              role: "tabpanel",
              "aria-label": ariaLabel,
              "data-cmp-hook-carousel": "item"
            }, display && item);
          }

          renderCarousel() {
            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
              className: this.props.baseCssClass + '__content',
              onMouseEnter: () => this.handleOnMouseEnter(),
              onMouseLeave: () => this.handleOnMouseLeave()
            }, this.childComponents.map((childComponent, index) => this.displayItem(childComponent, index)), this.renderCarouselActions(), this.renderCarouselIndicators());
          }

          renderCarouselIndicators() {
            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ol", {
              className: this.props.baseCssClass + '__indicators',
              role: "tablist",
              "aria-label": this.props.accessibility.indicators
            }, this.props.cqItemsOrder.map((key, index) => {
              const item = this.props.cqItems[key];
              const cssClass = index === this.state.activeIndex ? `${this.props.baseCssClass}__indicator ${this.props.baseCssClass}__indicator--active` : `${this.props.baseCssClass}__indicator`;
              const ariaLabelItem = formatFn(this.props.accessibility.indicator, [(index + 1).toString()]);
              return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
                key: 'item-' + index,
                onClick: () => this.handleIndicatorClick(index),
                className: cssClass,
                role: "tab",
                "aria-label": ariaLabelItem
              }, item["cq:panelTitle"]);
            }));
          }

          renderCarouselActions() {
            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
              className: this.props.baseCssClass + '__actions'
            }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
              onClick: () => this.handleOnButtonPrev(),
              className: `${this.props.baseCssClass}__action ${this.props.baseCssClass}__action--previous`,
              type: "button",
              "aria-label": this.props.accessibility.previous
            }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
              className: this.props.baseCssClass + '__action-icon'
            }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
              className: this.props.baseCssClass + '__action-text'
            }, this.props.accessibility.previous)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
              onClick: () => this.handleOnButtonNext(),
              className: `${this.props.baseCssClass}__action ${this.props.baseCssClass}__action--next`,
              type: "button",
              "aria-label": this.props.accessibility.next
            }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
              className: this.props.baseCssClass + '__action-icon'
            }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
              className: this.props.baseCssClass + '__action-text'
            }, this.props.accessibility.next)), this.props.autoplay && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
              className: `${this.props.baseCssClass}__action ${this.props.baseCssClass}__action--pause ` + (!this.state.autoPlay ? this.props.baseCssClass + '__action--disabled' : ''),
              type: "button",
              "aria-label": this.props.accessibility.pause,
              onClick: () => this.toggleAutoPlay(false)
            }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
              className: this.props.baseCssClass + '__action-icon'
            }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
              className: this.props.baseCssClass + '__action-text'
            }, this.props.accessibility.pause)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
              className: `${this.props.baseCssClass}__action ${this.props.baseCssClass}__action--play ` + (this.state.autoPlay ? this.props.baseCssClass + '__action--disabled' : ''),
              type: "button",
              "aria-label": this.props.accessibility.play,
              onClick: () => this.toggleAutoPlay(true)
            }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
              className: this.props.baseCssClass + '__action-icon'
            }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
              className: this.props.baseCssClass + '__action-text'
            }, this.props.accessibility.play))));
          }

        }

        CarouselV1Impl.defaultProps = {
          _allowedComponentPlaceholderListEmptyLabel: 'CarouselV1',
          isInEditor: false,
          autoplay: false,
          cqPath: '',
          cqItems: {},
          cqItemsOrder: [],
          accessibilityLabel: 'Carousel',
          accessibility: {
            play: 'Play',
            pause: 'Pause',
            next: 'Next',
            previous: 'Previous',
            slide: 'Slide {0} of {1}',
            indicator: 'Slide %{0}',
            indicators: 'Choose a slide to display'
          }
        };
        /* harmony default export */

        __webpack_exports__["default"] = Object(_AbstractCoreContainerComponent__WEBPACK_IMPORTED_MODULE_1__["withStandardBaseCssClass"])(Object(_AbstractCoreContainerComponent__WEBPACK_IMPORTED_MODULE_1__["withAuthorPanelSwitch"])(CarouselV1Impl), "cmp-carousel"); //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ2Fyb3VzZWxWMS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIkNhcm91c2VsVjEudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7OztHQWNHO0FBRUgsT0FBTyxLQUFLLE1BQU0sT0FBTyxDQUFDO0FBRzFCLE9BQU8sRUFBOEMscUJBQXFCLEVBQUUsd0JBQXdCLEVBQW9CLE1BQU0seUNBQXlDLENBQUM7QUFDeEssT0FBTyxFQUFDLGdCQUFnQixFQUFFLFNBQVMsRUFBQyxNQUFNLHNDQUFzQyxDQUFDO0FBRWpGLE9BQU8sRUFBQyxtQkFBbUIsRUFBQyxNQUFNLHVCQUF1QixDQUFDO0FBSTFELE1BQU0sUUFBUSxHQUFHLENBQUMsS0FBWSxFQUFFLElBQWEsRUFBRSxFQUFFO0lBQzdDLElBQUksT0FBTyxHQUFHLEtBQUssQ0FBQztJQUNwQixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtRQUNsQyxNQUFNLFdBQVcsR0FBRyxHQUFHLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQztRQUNsQyxPQUFPLEdBQUcsT0FBTyxDQUFDLE9BQU8sQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7S0FDbkQ7SUFDRCxPQUFPLE9BQU8sQ0FBQztBQUNuQixDQUFDLENBQUM7QUE0QkYsTUFBTSxjQUFlLFNBQVEsU0FBK0M7SUF3QnhFLFlBQVksS0FBMEI7UUFDbEMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBdkJqQixhQUFRLEdBQUcsQ0FBQyxDQUFDO1FBd0diLGtCQUFhLEdBQUcsR0FBRyxFQUFFO1lBQ2pCLE1BQU0sQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ3hDLENBQUMsQ0FBQztRQWpGRSxZQUFZO1FBQ1osSUFBSSxDQUFDLEtBQUssR0FBRztZQUNULFdBQVcsRUFBRSxDQUFD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QUFJLENBQUMsS0FBSyxDQUFDLFlBQVksR0FBRyxvQkFBb0IsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQ3ZLLElBQUksRUFBQyxRQUFRLGdCQUNELElBQUksQ0FBQyxLQUFLLENBQUMsYUFBYSxDQUFDLElBQUksRUFDekMsT0FBTyxFQUFFLEdBQUUsRUFBRSxDQUFBLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDO3dCQUUxQyw4QkFBTSxTQUFTLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxZQUFZLEdBQUcsZUFBZSxHQUFTO3dCQUNuRSw4QkFBTSxTQUFTLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxZQUFZLEdBQUcsZUFBZSxJQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBUSxDQUM3RixDQUNWLENBR0wsQ0FDVCxDQUFBO0lBQ0wsQ0FBQzs7QUF4UU0sMkJBQVksR0FBRztJQUNsQiwwQ0FBMEMsRUFBRSxZQUFZO0lBQ3hELFVBQVUsRUFBRSxLQUFLO0lBQ2pCLFFBQVEsRUFBRSxLQUFLO0lBQ2YsTUFBTSxFQUFFLEVBQUU7SUFDVixPQUFPLEVBQUUsRUFBRTtJQUNYLFlBQVksRUFBRSxFQUFFO0lBQ2hCLGtCQUFrQixFQUFFLFVBQVU7SUFDOUIsYUFBYSxFQUFFO1FBQ1gsSUFBSSxFQUFFLE1BQU07UUFDWixLQUFLLEVBQUUsT0FBTztRQUNkLElBQUksRUFBRSxNQUFNO1FBQ1osUUFBUSxFQUFFLFVBQVU7UUFDcEIsS0FBSyxFQUFFLGtCQUFrQjtRQUN6QixTQUFTLEVBQUUsWUFBWTtRQUN2QixVQUFVLEVBQUUsMkJBQTJCO0tBQzFDO0NBQ0osQ0FBQztBQTJQTixlQUFlLHdCQUF3QixDQUFDLHFCQUFxQixDQUFDLGNBQWMsQ0FBQyxFQUFFLGNBQWMsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqICBDb3B5cmlnaHQgMjAyMCBBZG9iZVxuICpcbiAqICBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqICBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgICAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqICBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiAgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqICBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5cbmltcG9ydCB7Q29yZUNvbnRhaW5lclByb3BlcnRpZXMsIENvcmVDb250YWluZXJTdGF0ZSwgd2l0aEF1dGhvclBhbmVsU3dpdGNoLCB3aXRoU3RhbmRhcmRCYXNlQ3NzQ2xhc3MsIENvcmVDb250YWluZXJJdGVtfSBmcm9tIFwiLi4vLi4vLi4vQWJzdHJhY3RDb3JlQ29udGFpbmVyQ29tcG9uZW50XCI7XG5pbXBvcnQge0NvbXBvbmVudE1hcHBpbmcsIENvbnRhaW5lcn0gZnJvbSAnQGFkb2JlL2FlbS1yZWFjdC1lZGl0YWJsZS1jb21wb25lbnRzJztcblxuaW1wb3J0IHtDYXJvdXNlbFYxSXNFbXB0eUZufSBmcm9tIFwiLi9DYXJvdXNlbFYxSXNFbXB0eUZuXCI7XG5pbXBvcnQge1RhYnNWMVByb3BlcnRpZXMsIFRhYnNWMVN0YXRlfSBmcm9tIFwiLi4vLi4vLi5cIjtcblxuXG5jb25zdCBmb3JtYXRGbiA9ICh2YWx1ZTpzdHJpbmcsIGFyZ3M6c3RyaW5nW10pID0+IHtcbiAgICBsZXQgY29udGVudCA9IHZhbHVlO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXJncy5sZW5ndGg7IGkrKykge1xuICAgICAgICBjb25zdCByZXBsYWNlbWVudCA9ICd7JyArIGkgKyAnfSc7XG4gICAgICAgIGNvbnRlbnQgPSBjb250ZW50LnJlcGxhY2UocmVwbGFjZW1lbnQsIGFyZ3NbaV0pO1xuICAgIH1cbiAgICByZXR1cm4gY29udGVudDtcbn07XG5cblxuXG5leHBvcnQgaW50ZXJmYWNlIENhcm91c2VsVjFQcm9wZXJ0aWVzIGV4dGVuZHMgQ29yZUNvbnRhaW5lclByb3BlcnRpZXN7XG4gICAgYXV0b3BsYXk6IGJvb2xlYW47XG4gICAgYXV0b3BhdXNlRGlzYWJsZWQ6IGJvb2xlYW47XG4gICAgYWNjZXNzaWJpbGl0eUxhYmVsOnN0cmluZztcbiAgICBhY2Nlc3NpYmlsaXR5OiBDYXJvdXNlbFYxQWNjZXNzaWJpbGl0eVByb3BlcnRpZXM7XG4gICAgZGVsYXk6IG51bWJlcjtcbiAgICBjcUl0ZW1zOiB7IFtrZXk6IHN0cmluZ106IENvcmVDb250YWluZXJJdGVtIH07XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ2Fyb3VzZWxWMUFjY2Vzc2liaWxpdHlQcm9wZXJ0aWVze1xuICAgIHBsYXk6IHN0cmluZztcbiAgICBwYXVzZTogc3RyaW5nO1xuICAgIG5leHQ6IHN0cmluZztcbiAgICBwcmV2aW91czogc3RyaW5nO1xuICAgIHNsaWRlOiBzdHJpbmc7XG4gICAgaW5kaWNhdG9yOiBzdHJpbmc7XG4gICAgaW5kaWNhdG9yczogc3RyaW5nO1xufVxuZXhwb3J0IGludGVyZmFjZSBDYXJvdXNlbFYxU3RhdGUgZXh0ZW5kcyBDb3JlQ29udGFpbmVyU3RhdGV7XG4gICAgYWN0aXZlSW5kZXg6IG51bWJlcixcbiAgICBpc01vdXNlRW50ZXJlZDogYm9vbGVhbixcbiAgICBhdXRvUGxheTogYm9vbGVhbixcbn1cblxuY2xhc3MgQ2Fyb3VzZWxWMUltcGwgZXh0ZW5kcyBDb250YWluZXI8Q2Fyb3VzZWxWMVByb3BlcnRpZXMsQ2Fyb3VzZWxWMVN0YXRlPiB7XG5cbiAgICBpbnRlcnZhbCA9IDA7XG5cblxuICAgIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgICAgIF9hbGxvd2VkQ29tcG9uZW50UGxhY2Vob2xkZXJMaXN0RW1wdHlMYWJlbDogJ0Nhcm91c2VsVjEnLFxuICAgICAgICBpc0luRWRpdG9yOiBmYWxzZSxcbiAgICAgICAgYXV0b3BsYXk6IGZhbHNlLFxuICAgICAgICBjcVBhdGg6ICcnLFxuICAgICAgICBjcUl0ZW1zOiB7fSxcbiAgICAgICAgY3FJdGVtc09yZGVyOiBbXSxcbiAgICAgICAgYWNjZXNzaWJpbGl0eUxhYmVsOiAnQ2Fyb3VzZWwnLFxuICAgICAgICBhY2Nlc3NpYmlsaXR5OiB7XG4gICAgICAgICAgICBwbGF5OiAnUGxheScsXG4gICAgICAgICAgICBwYXVzZTogJ1BhdXNlJyxcbiAgICAgICAgICAgIG5leHQ6ICdOZXh0JyxcbiAgICAgICAgICAgIHByZXZpb3VzOiAnUHJldmlvdXMnLFxuICAgICAgICAgICAgc2xpZGU6ICdTbGlkZSB7MH0gb2YgezF9JyxcbiAgICAgICAgICAgIGluZGljYXRvcjogJ1NsaWRlICV7MH0nLFxuICAgICAgICAgICAgaW5kaWNhdG9yczogJ0Nob29zZSBhIHNsaWRlIHRvIGRpc3BsYXknXG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgY29uc3RydWN0b3IocHJvcHM6Q2Fyb3VzZWxWMVByb3BlcnRpZXMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuXG4gICAgICAgIC8vQHRzLWlnbm9yZVxuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgYWN0aXZlSW5kZXg6IDAsXG4gICAgICAgICAgICBpc01vdXNlRW50ZXJlZDogZmFsc2UsXG4gICAgICAgICAgICBhdXRvUGxheTogdGhpcy5wcm9wcy5hdXRvcGxheSAmJiAhdGhpcy5wcm9wcy5pc0luRWRpdG9yLFxuICAgICAgICAgICAgY29tcG9uZW50TWFwcGluZzogdGhpcy5wcm9wcy5jb21wb25lbnRNYXBwaW5nIHx8IENvbXBvbmVudE1hcHBpbmdcbiAgICAgICAgfTtcblxuICAgICAgICB0aGlzLmhhbmRsZUluZGljYXRvckNsaWNrID0gdGhpcy5oYW5kbGVJbmRpY2F0b3JDbGljay5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmhhbmRsZU9uQnV0dG9uUHJldiAgID0gdGhpcy5oYW5kbGVPbkJ1dHRvblByZXYuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5oYW5kbGVPbkJ1dHRvbk5leHQgICA9IHRoaXMuaGFuZGxlT25CdXR0b25OZXh0LmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuaGFuZGxlT25Nb3VzZUVudGVyICAgPSB0aGlzLmhhbmRsZU9uTW91c2VFbnRlci5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmhhbmRsZU9uTW91c2VMZWF2ZSAgID0gdGhpcy5oYW5kbGVPbk1vdXNlTGVhdmUuYmluZCh0aGlzKTtcblxuICAgIH1cblxuICAgIGNvbXBvbmVudERpZFVwZGF0ZShwcmV2UHJvcHM6IFJlYWRvbmx5PFRhYnNWMVByb3BlcnRpZXM+LCBwcmV2U3RhdGU6IFJlYWRvbmx5PFRhYnNWMVN0YXRlPiwgc25hcHNob3Q/OiBhbnkpOiB2b2lkIHtcbiAgICAgICAgaWYodGhpcy5wcm9wcy5hY3RpdmVJbmRleEZyb21BdXRob3JQYW5lbCAhPT0gdW5kZWZpbmVkICYmIHByZXZQcm9wcy5hY3RpdmVJbmRleEZyb21BdXRob3JQYW5lbCAhPSB0aGlzLnByb3BzLmFjdGl2ZUluZGV4RnJvbUF1dGhvclBhbmVsKXtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBhY3RpdmVJbmRleDogdGhpcy5wcm9wcy5hY3RpdmVJbmRleEZyb21BdXRob3JQYW5lbCB9ICk7XG4gICAgICAgICAgICB0aGlzLnRvZ2dsZUF1dG9QbGF5KGZhbHNlKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBcbiAgICBjb21wb25lbnREaWRNb3VudCgpe1xuICAgICAgICB0aGlzLmF1dG9QbGF5KCk7XG4gICAgfVxuXG4gICAgY29tcG9uZW50V2lsbFVubW91bnQoKXtcbiAgICAgICAgaWYodGhpcy5pbnRlcnZhbCl7XG4gICAgICAgICAgICB0aGlzLmNsZWFyQXV0b1BsYXkoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGhhbmRsZU9uTW91c2VFbnRlcigpe1xuICAgICAgICBpZighdGhpcy5wcm9wcy5hdXRvcGF1c2VEaXNhYmxlZCAmJiB0aGlzLnByb3BzLmF1dG9wbGF5KXtcbiAgICAgICAgICAgIHRoaXMuY2xlYXJBdXRvUGxheSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgaGFuZGxlT25Nb3VzZUxlYXZlKCl7XG4gICAgICAgIGlmKCF0aGlzLnByb3BzLmF1dG9wYXVzZURpc2FibGVkICYmIHRoaXMucHJvcHMuYXV0b3BsYXkpe1xuICAgICAgICAgICAgdGhpcy5hdXRvUGxheSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgaGFuZGxlT25CdXR0b25QcmV2KCl7XG4gICAgICAgIHRoaXMucHJldlNsaWRlKCk7XG4gICAgfVxuXG4gICAgaGFuZGxlT25CdXR0b25OZXh0KCl7XG4gICAgICAgIHRoaXMubmV4dFNsaWRlKCk7XG4gICAgfVxuXG5cbiAgICBoYW5kbGVJbmRpY2F0b3JDbGljayhpbmRleDpudW1iZXIpe1xuXG4gICAgICAgIGlmKHRoaXMuc3RhdGUuYWN0aXZlSW5kZXggIT09IGluZGV4KXtcblxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgYWN0aXZlSW5kZXg6IGluZGV4XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGF1dG9QbGF5KCl7XG4gICAgICAgIHRoaXMuaW50ZXJ2YWwgPSB3aW5kb3cuc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5hdXRvUGxheVRpY2soKTtcbiAgICAgICAgfSwgdGhpcy5wcm9wcy5kZWxheSk7XG4gICAgfVxuXG4gICAgYXV0b1BsYXlUaWNrKCkge1xuXG4gICAgICAgIGlmICghdGhpcy5zdGF0ZS5hdXRvUGxheSB8fCB0aGlzLnByb3BzLmNxSXRlbXNPcmRlci5sZW5ndGggPD0gMSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5uZXh0U2xpZGUoKTtcbiAgICB9XG5cbiAgICBjbGVhckF1dG9QbGF5ID0gKCkgPT4ge1xuICAgICAgICB3aW5kb3cuY2xlYXJJbnRlcnZhbCh0aGlzLmludGVydmFsKTtcbiAgICB9O1xuXG4gICAgdG9nZ2xlQXV0b1BsYXkodG9nZ2xlOmJvb2xlYW4pe1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIGF1dG9QbGF5OiB0b2dnbGVcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBuZXh0U2xpZGUoKXtcblxuICAgICAgICBjb25zdCBhY3RpdmVJbmRleCA9IHRoaXMuX19nZXRBY3RpdmVJbmRleCgpO1xuXG4gICAgICAgIGlmKGFjdGl2ZUluZGV4PT09ICh0aGlzLnByb3BzLmNxSXRlbXNPcmRlci5sZW5ndGgtMSkpe1xuXG4gICAgICAgICAgICB0aGlzLl9fc2V0U2xpZGUoMCk7XG4gICAgICAgIH1lbHNle1xuICAgICAgICAgICAgdGhpcy5fX3NldFNsaWRlKGFjdGl2ZUluZGV4ICsgMSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcmV2U2xpZGUoKXtcbiAgICAgICAgY29uc3QgYWN0aXZlSW5kZXggPSB0aGlzLl9fZ2V0QWN0aXZlSW5kZXgoKTtcbiAgICAgICAgaWYoYWN0aXZlSW5kZXggPT09IDApe1xuXG4gICAgICAgICAgICB0aGlzLl9fc2V0U2xpZGUodGhpcy5wcm9wcy5jcUl0ZW1zT3JkZXIubGVuZ3RoIC0gMSk7XG4gICAgICAgIH1lbHNle1xuICAgICAgICAgICAgdGhpcy5fX3NldFNsaWRlKGFjdGl2ZUluZGV4IC0gMSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBfX2dldEFjdGl2ZUluZGV4KCl7XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuc3RhdGUuYWN0aXZlSW5kZXg7XG4gICAgfVxuXG4gICAgX19zZXRTbGlkZShpbmRleDpudW1iZXIpe1xuXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgYWN0aXZlSW5kZXg6IGluZGV4XG4gICAgICAgIH0pO1xuICAgIH1cblxuXG5cbiAgICByZW5kZXIoKSB7XG5cbiAgICAgICAgY29uc3QgaXNFbXB0eSA9IENhcm91c2VsVjFJc0VtcHR5Rm4odGhpcy5wcm9wcyk7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17dGhpcy5wcm9wcy5iYXNlQ3NzQ2xhc3N9XG4gICAgICAgICAgICAgICAgIHJvbGU9XCJncm91cFwiXG4gICAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9e3RoaXMucHJvcHMuYWNjZXNzaWJpbGl0eUxhYmVsfVxuICAgICAgICAgICAgICAgICBhcmlhLXJvbGVkZXNjcmlwdGlvbj1cImNhcm91c2VsXCI+XG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAhaXNFbXB0eSAmJiB0aGlzLnJlbmRlckNhcm91c2VsKClcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgeyB0aGlzLnBsYWNlaG9sZGVyQ29tcG9uZW50IH1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApXG5cbiAgICB9XG5cbiAgICBkaXNwbGF5SXRlbShpdGVtOkpTWC5FbGVtZW50LCBpbmRleDpudW1iZXIpe1xuXG4gICAgICAgIGNvbnN0IGlzQWN0aXZlID0gaW5kZXggPT09IHRoaXMuc3RhdGUuYWN0aXZlSW5kZXg7XG4gICAgICAgIC8vd2UgZGlzcGxheSB0aGUgaXRlbSBpZiBhY3RpdmUgaXMgdHJ1ZSwgb3IgaWYgd2UgYXJlIGluIHRoZSBhdXRob3IgbW9kZS4gd2UgbmVlZCB0byBhbHdheXMgZGlzcGxheSB0aGUgaXRlbSBmb3IgdGhlIGF1dGhvciBtb2RlIHRvIHdvcmsgcHJvcGVybHkuXG4gICAgICAgIGNvbnN0IGRpc3BsYXkgPSAhIShpc0FjdGl2ZSB8fCB0aGlzLnByb3BzLmlzSW5FZGl0b3IpO1xuXG4gICAgICAgIGNvbnN0IGNzc0NsYXNzID0gaXNBY3RpdmUgPyBgJHt0aGlzLnByb3BzLmJhc2VDc3NDbGFzc31fX2l0ZW0gJHt0aGlzLnByb3BzLmJhc2VDc3NDbGFzc31fX2l0ZW0tLWFjdGl2ZWAgOiBgJHt0aGlzLnByb3BzLmJhc2VDc3NDbGFzc31fX2l0ZW1gO1xuICAgICAgICBjb25zdCBhcmlhTGFiZWwgPSBmb3JtYXRGbih0aGlzLnByb3BzLmFjY2Vzc2liaWxpdHkuc2xpZGUsIFsoaW5kZXggKyAxKS50b1N0cmluZygpLCB0aGlzLnByb3BzLmNxSXRlbXNPcmRlci5sZW5ndGgudG9TdHJpbmcoKV0pO1xuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGtleT17J2l0ZW0tJyArIGluZGV4fVxuICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Nzc0NsYXNzfVxuICAgICAgICAgICAgICAgICAgICAgICByb2xlPVwidGFicGFuZWxcIlxuICAgICAgICAgICAgICAgICAgICAgICBhcmlhLWxhYmVsPXthcmlhTGFiZWx9XG4gICAgICAgICAgICAgICAgICAgICAgIGRhdGEtY21wLWhvb2stY2Fyb3VzZWw9XCJpdGVtXCI+XG4gICAgICAgICAgICAgICAge2Rpc3BsYXkgJiYgaXRlbX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApXG4gICAgfVxuXG4gICAgcmVuZGVyQ2Fyb3VzZWwoKXtcbiAgICAgICAgcmV0dXJuIChcblxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3RoaXMucHJvcHMuYmFzZUNzc0NsYXNzICsgJ19fY29udGVudCd9IG9uTW91c2VFbnRlcj17KCk9PnRoaXMuaGFuZGxlT25Nb3VzZUVudGVyKCl9IG9uTW91c2VMZWF2ZT17KCk9PnRoaXMuaGFuZGxlT25Nb3VzZUxlYXZlKCl9ID5cbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2hpbGRDb21wb25lbnRzLm1hcCgoY2hpbGRDb21wb25lbnQsIGluZGV4KSA9PiB0aGlzLmRpc3BsYXlJdGVtKGNoaWxkQ29tcG9uZW50LGluZGV4KSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAge3RoaXMucmVuZGVyQ2Fyb3VzZWxBY3Rpb25zKCl9XG4gICAgICAgICAgICAgICAge3RoaXMucmVuZGVyQ2Fyb3VzZWxJbmRpY2F0b3JzKCl9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKVxuICAgIH1cblxuICAgIHJlbmRlckNhcm91c2VsSW5kaWNhdG9ycygpe1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPG9sIGNsYXNzTmFtZT17dGhpcy5wcm9wcy5iYXNlQ3NzQ2xhc3MgKyAnX19pbmRpY2F0b3JzJ31cbiAgICAgICAgICAgICAgICByb2xlPVwidGFibGlzdFwiXG4gICAgICAgICAgICAgICAgYXJpYS1sYWJlbD17dGhpcy5wcm9wcy5hY2Nlc3NpYmlsaXR5LmluZGljYXRvcnN9PlxuICAgICAgICAgICAgICAgIHtcblxuICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmNxSXRlbXNPcmRlci5tYXAoKGtleSwgaW5kZXgpID0+IHtcblxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgaXRlbTpDb3JlQ29udGFpbmVySXRlbSA9IHRoaXMucHJvcHMuY3FJdGVtc1trZXldO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBjc3NDbGFzcyA9IChpbmRleCA9PT0gdGhpcy5zdGF0ZS5hY3RpdmVJbmRleCkgPyBgJHt0aGlzLnByb3BzLmJhc2VDc3NDbGFzc31fX2luZGljYXRvciAke3RoaXMucHJvcHMuYmFzZUNzc0NsYXNzfV9faW5kaWNhdG9yLS1hY3RpdmVgIDogYCR7dGhpcy5wcm9wcy5iYXNlQ3NzQ2xhc3N9X19pbmRpY2F0b3JgO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgYXJpYUxhYmVsSXRlbSA9IGZvcm1hdEZuKHRoaXMucHJvcHMuYWNjZXNzaWJpbGl0eS5pbmRpY2F0b3IsIFsoaW5kZXggKyAxKS50b1N0cmluZygpXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9eydpdGVtLScgKyBpbmRleH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCk9PnRoaXMuaGFuZGxlSW5kaWNhdG9yQ2xpY2soaW5kZXgpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Nzc0NsYXNzfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByb2xlPVwidGFiXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJpYS1sYWJlbD17YXJpYUxhYmVsSXRlbX0+e2l0ZW1bXCJjcTpwYW5lbFRpdGxlXCJdfTwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICA8L29sPlxuICAgICAgICApO1xuICAgIH1cbiAgICByZW5kZXJDYXJvdXNlbEFjdGlvbnMoKXtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXt0aGlzLnByb3BzLmJhc2VDc3NDbGFzcyArICdfX2FjdGlvbnMnfT5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpPT50aGlzLmhhbmRsZU9uQnV0dG9uUHJldigpfVxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHt0aGlzLnByb3BzLmJhc2VDc3NDbGFzc31fX2FjdGlvbiAke3RoaXMucHJvcHMuYmFzZUNzc0NsYXNzfV9fYWN0aW9uLS1wcmV2aW91c2B9XG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9e3RoaXMucHJvcHMuYWNjZXNzaWJpbGl0eS5wcmV2aW91c30+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17dGhpcy5wcm9wcy5iYXNlQ3NzQ2xhc3MgKyAnX19hY3Rpb24taWNvbid9Pjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXt0aGlzLnByb3BzLmJhc2VDc3NDbGFzcyArICdfX2FjdGlvbi10ZXh0J30+e3RoaXMucHJvcHMuYWNjZXNzaWJpbGl0eS5wcmV2aW91c308L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKT0+dGhpcy5oYW5kbGVPbkJ1dHRvbk5leHQoKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YCR7dGhpcy5wcm9wcy5iYXNlQ3NzQ2xhc3N9X19hY3Rpb24gJHt0aGlzLnByb3BzLmJhc2VDc3NDbGFzc31fX2FjdGlvbi0tbmV4dGB9XG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9e3RoaXMucHJvcHMuYWNjZXNzaWJpbGl0eS5uZXh0fT5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXt0aGlzLnByb3BzLmJhc2VDc3NDbGFzcyArICdfX2FjdGlvbi1pY29uJ30+PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3RoaXMucHJvcHMuYmFzZUNzc0NsYXNzICsgJ19fYWN0aW9uLXRleHQnfT57dGhpcy5wcm9wcy5hY2Nlc3NpYmlsaXR5Lm5leHR9PC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5hdXRvcGxheSAmJlxuICAgICAgICAgICAgICAgICAgICA8PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e2Ake3RoaXMucHJvcHMuYmFzZUNzc0NsYXNzfV9fYWN0aW9uICR7dGhpcy5wcm9wcy5iYXNlQ3NzQ2xhc3N9X19hY3Rpb24tLXBhdXNlIGAgKyAoIXRoaXMuc3RhdGUuYXV0b1BsYXkgPyB0aGlzLnByb3BzLmJhc2VDc3NDbGFzcyArICdfX2FjdGlvbi0tZGlzYWJsZWQnIDogJycpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJpYS1sYWJlbD17dGhpcy5wcm9wcy5hY2Nlc3NpYmlsaXR5LnBhdXNlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKT0+dGhpcy50b2dnbGVBdXRvUGxheShmYWxzZSl9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17dGhpcy5wcm9wcy5iYXNlQ3NzQ2xhc3MgKyAnX19hY3Rpb24taWNvbid9Pjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3RoaXMucHJvcHMuYmFzZUNzc0NsYXNzICsgJ19fYWN0aW9uLXRleHQnfT57dGhpcy5wcm9wcy5hY2Nlc3NpYmlsaXR5LnBhdXNlfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e2Ake3RoaXMucHJvcHMuYmFzZUNzc0NsYXNzfV9fYWN0aW9uICR7dGhpcy5wcm9wcy5iYXNlQ3NzQ2xhc3N9X19hY3Rpb24tLXBsYXkgYCArICh0aGlzLnN0YXRlLmF1dG9QbGF5ID8gdGhpcy5wcm9wcy5iYXNlQ3NzQ2xhc3MgKyAnX19hY3Rpb24tLWRpc2FibGVkJyA6ICcnKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9e3RoaXMucHJvcHMuYWNjZXNzaWJpbGl0eS5wbGF5fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKT0+dGhpcy50b2dnbGVBdXRvUGxheSh0cnVlKX1cbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3RoaXMucHJvcHMuYmFzZUNzc0NsYXNzICsgJ19fYWN0aW9uLWljb24nfT48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXt0aGlzLnByb3BzLmJhc2VDc3NDbGFzcyArICdfX2FjdGlvbi10ZXh0J30+e3RoaXMucHJvcHMuYWNjZXNzaWJpbGl0eS5wbGF5fTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8Lz5cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApXG4gICAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhTdGFuZGFyZEJhc2VDc3NDbGFzcyh3aXRoQXV0aG9yUGFuZWxTd2l0Y2goQ2Fyb3VzZWxWMUltcGwpLCBcImNtcC1jYXJvdXNlbFwiKTsiXX0=

        /***/
      },

      /***/
      "./src/container/carousel/v1/CarouselV1IsEmptyFn.ts":
      /*!**********************************************************!*\
        !*** ./src/container/carousel/v1/CarouselV1IsEmptyFn.ts ***!
        \**********************************************************/

      /*! exports provided: CarouselV1IsEmptyFn */

      /***/
      function (module, __webpack_exports__, __webpack_require__) {
        "use strict";

        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */


        __webpack_require__.d(__webpack_exports__, "CarouselV1IsEmptyFn", function () {
          return CarouselV1IsEmptyFn;
        });

        function CarouselV1IsEmptyFn(props) {
          return props.cqItemsOrder == null || props.cqItemsOrder.length === 0;
        } //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ2Fyb3VzZWxWMUlzRW1wdHlGbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIkNhcm91c2VsVjFJc0VtcHR5Rm4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBa0JBLE1BQU0sVUFBVSxtQkFBbUIsQ0FBQyxLQUEwQjtJQUMxRCxPQUFPLEtBQUssQ0FBQyxZQUFZLElBQUksSUFBSSxJQUFJLEtBQUssQ0FBQyxZQUFZLENBQUMsTUFBTSxLQUFLLENBQUMsQ0FBQztBQUN6RSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqICBDb3B5cmlnaHQgMjAyMCBBZG9iZVxuICpcbiAqICBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqICBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgICAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqICBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiAgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqICBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuaW1wb3J0IHtDb3JlQ29udGFpbmVyUHJvcGVydGllc30gZnJvbSBcIi4uLy4uLy4uL0Fic3RyYWN0Q29yZUNvbnRhaW5lckNvbXBvbmVudFwiO1xuaW1wb3J0IHsgQ2Fyb3VzZWxWMVByb3BlcnRpZXMgfSBmcm9tIFwiLi9DYXJvdXNlbFYxXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBDYXJvdXNlbFYxSXNFbXB0eUZuKHByb3BzOkNhcm91c2VsVjFQcm9wZXJ0aWVzKXtcbiAgICByZXR1cm4gcHJvcHMuY3FJdGVtc09yZGVyID09IG51bGwgfHwgcHJvcHMuY3FJdGVtc09yZGVyLmxlbmd0aCA9PT0gMDtcbn0iXX0=

        /***/

      },

      /***/
      3:
      /*!********************************************************!*\
        !*** multi ./src/container/carousel/v1/CarouselV1.tsx ***!
        \********************************************************/

      /*! no static exports found */

      /***/
      function (module, exports, __webpack_require__) {
        module.exports = __webpack_require__(
        /*! ./src/container/carousel/v1/CarouselV1.tsx */
        "./src/container/carousel/v1/CarouselV1.tsx");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9yYWFpam1hay93b3Jrc3BhY2UvYWVtLXJlYWN0LWNvcmUtd2NtLWNvbXBvbmVudHMvZXhhbXBsZXMvcmVhY3Qtc3BhY29tcG9uZW50cy1leGFtcGxlLXByb2plY3QvQGFkb2JlL2FlbS1jb3JlLWNvbXBvbmVudHMtcmVhY3Qtc3BhL3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIi9Vc2Vycy9yYWFpam1hay93b3Jrc3BhY2UvYWVtLXJlYWN0LWNvcmUtd2NtLWNvbXBvbmVudHMvZXhhbXBsZXMvcmVhY3Qtc3BhY29tcG9uZW50cy1leGFtcGxlLXByb2plY3QvQGFkb2JlL2FlbS1jb3JlLWNvbXBvbmVudHMtcmVhY3Qtc3BhL3dlYnBhY2svYm9vdHN0cmFwIiwiL1VzZXJzL3JhYWlqbWFrL3dvcmtzcGFjZS9hZW0tcmVhY3QtY29yZS13Y20tY29tcG9uZW50cy9leGFtcGxlcy9yZWFjdC1zcGFjb21wb25lbnRzLWV4YW1wbGUtcHJvamVjdC9AYWRvYmUvYWVtLWNvcmUtY29tcG9uZW50cy1yZWFjdC1zcGEvc3JjL0Fic3RyYWN0Q29yZUNvbnRhaW5lckNvbXBvbmVudC50c3giLCIvVXNlcnMvcmFhaWptYWsvd29ya3NwYWNlL2FlbS1yZWFjdC1jb3JlLXdjbS1jb21wb25lbnRzL2V4YW1wbGVzL3JlYWN0LXNwYWNvbXBvbmVudHMtZXhhbXBsZS1wcm9qZWN0L0BhZG9iZS9hZW0tY29yZS1jb21wb25lbnRzLXJlYWN0LXNwYS9zcmMvY29udGFpbmVyL2Nhcm91c2VsL3YxL0Nhcm91c2VsVjEudHN4IiwiL1VzZXJzL3JhYWlqbWFrL3dvcmtzcGFjZS9hZW0tcmVhY3QtY29yZS13Y20tY29tcG9uZW50cy9leGFtcGxlcy9yZWFjdC1zcGFjb21wb25lbnRzLWV4YW1wbGUtcHJvamVjdC9AYWRvYmUvYWVtLWNvcmUtY29tcG9uZW50cy1yZWFjdC1zcGEvc3JjL2NvbnRhaW5lci9jYXJvdXNlbC92MS9DYXJvdXNlbFYxSXNFbXB0eUZuLnRzIiwiL1VzZXJzL3JhYWlqbWFrL3dvcmtzcGFjZS9hZW0tcmVhY3QtY29yZS13Y20tY29tcG9uZW50cy9leGFtcGxlcy9yZWFjdC1zcGFjb21wb25lbnRzLWV4YW1wbGUtcHJvamVjdC93ZWJwYWNrOi9AYWRvYmUvYWVtLWNvcmUtY29tcG9uZW50cy1yZWFjdC1zcGEvZXh0ZXJuYWwgXCJAYWRvYmUvYWVtLXJlYWN0LWVkaXRhYmxlLWNvbXBvbmVudHNcIiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUNBLFlBQ0EsMkJBREEsS0FFQSxFQUtBO0FBQ0MsQ0FURCxFQVNDLHlDQVRELEVBU0M7QUFDRDs7Ozs7QUNWQTtBQUFBOztBQUNBO0FBQUE7OztBQUVBO0FBQUE7O0FBQ0E7O0FBQUE7OztBQUVBO0FBQUE7O0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTs7QUFDQTs7O0FBQUE7QUFDQTtBQUFBLHFCQURBOztBQUVBO0FBQUEsa0JBRkE7O0FBR0E7QUFBQTtBQUNBOztBQUpBOzs7QUFNQTtBQUFBOztBQUNBOztBQUFBOzs7QUFFQTtBQUFBOztBQUNBOztBQUFBOzs7QUFFQTtBQUFBOztBQUNBOztBQUFBO0FBQ0E7QUFBQTs7Ozs7QUFHQTtBQUFBOztBQUNBOzs7QUFBQTs7O0FBRUE7QUFBQTs7QUFDQTs7QUFBQTs7O0FBRUE7QUFBQTs7QUFDQTs7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQTBDLDRCQUExQztBQUEwQztBQUExQztBQUNBO0FBQUE7QUFDQTs7QUFBQSxPQUpBOzs7QUFNQTtBQUFBOztBQUNBOzs7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQXdEO0FBQXhEO0FBQ0E7QUFBQTtBQUNBOzs7QUFBQTtBQUFpRDtBQUFqRDtBQUNBO0FBQUEsT0FMQTs7O0FBT0E7QUFBQTs7QUFDQTtBQUFBOztBQUNBO0FBQUE7O0FBQ0E7QUFBQTs7QUFDQTtBQUFBOztBQUNBOzs7QUFBQTtBQUNBO0FBQUE7QUFDQTs7QUFBQTtBQUNBOztBQUFBO0FBQ0E7O0FBQUE7QUFDQTs7QUFBQTtBQUNBOzs7QUFBQTtBQUF5QywwQkFBekM7QUFBeUM7QUFBekM7QUFDQTs7QUFBQTtBQUFnSDtBQUFxQixTQUFySSxDQUFxSSxJQUFySSxDQUFxSSxJQUFySSxFQUFxSSxHQUFySTtBQUNBOztBQUFBO0FBQ0E7QUFBQSxPQVRBOzs7QUFXQTtBQUFBOztBQUNBOzs7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQTJCO0FBQTRCLFNBRHZEO0FBRUE7QUFBQTtBQUFpQztBQUFlLFNBRmhEO0FBR0E7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTtBQUFBLE9BTkE7OztBQVFBO0FBQUE7O0FBQ0E7OztBQUFBO0FBQXNEO0FBQStELE9BQXJIOzs7QUFFQTtBQUFBOztBQUNBOzs7QUFBQTs7Ozs7QUFHQTtBQUFBOztBQUNBOztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQUE7OztBQUFBO0FBQUE7QUFBQTtBQUFBOzs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7OztBQUFBO0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBZ0JBO0FBQ0E7QUFDQTtBQUNBLFdBRkEsQ0FHQTtBQUNBO0FBQ0E7QUFDQyxTQVBEOztBQVFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0Esa0NBQ0EsUUFEQTtBQUVBO0FBRkE7QUFJQSxtQkFBZSxvREFBbUIsU0FBbkIsRUFBbUIsa0JBQTRCLFdBQTVCLENBQW5CLENBQWY7QUFDQSxXQVJBO0FBU0EsU0FWTzs7QUFXQTtBQUNQLCtCQUF5QiwrQ0FBekIsQ0FBd0M7QUFDeEM7QUFDQTtBQUNBLDhCQUZBLENBR0E7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBLHFCQUFtQixvREFBbUIsU0FBbkIsRUFBbUIsa0JBQTRCLFVBQTVCLEVBQTRCO0FBQWU7QUFBZixlQUE1QixDQUFuQixDQUFuQjtBQUNBOztBQWpDd0MsV0FBeEM7QUFtQ0EsU0FwQ08sQyxDQXFDUDs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeEVBO0FBQUE7OztBQUFBO0FBQUE7QUFBQTtBQUFBOzs7QUFBQTtBQUFBOzs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7OztBQUFBO0FBQUE7OztBQUFBO0FBQUE7QUFBQTtBQUFBOzs7Ozs7Ozs7Ozs7Ozs7OztBQW1CQTtBQUNBOztBQUNBLDBCQUFtQixlQUFuQixFQUFvQyxHQUFwQyxFQUFvQztBQUNwQyxzQ0FBOEIsQ0FBOUIsR0FBOEIsR0FBOUI7QUFDQTtBQUNBOztBQUNBO0FBQ0EsU0FQQTs7QUFRQSxxQ0FBNkIsOEVBQTdCLENBQXNDO0FBQ3RDO0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0EsYUFGQSxDQUhBLENBTUE7OztBQUNBO0FBQ0EsNEJBREE7QUFFQSxtQ0FGQTtBQUdBLHFFQUhBO0FBSUEsK0RBQTZEO0FBSjdEO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUEyQjtBQUEzQjtBQUNBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFDUyxhQUZULEVBRVMsZ0JBRlQ7QUFHQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7O0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0EsYUFGQSxNQUdBO0FBQ0E7QUFDQTtBQUNBOztBQUNBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBLGFBRkEsTUFHQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTs7QUFDQTtBQUNBLDRCQUF3QixpRkFBbUIsVUFBbkIsQ0FBeEI7QUFDQSxtQkFBZ0IsNkNBQUssYUFBTCxDQUFLLEtBQUwsRUFBSztBQUF1QixnREFBdkI7QUFBdUIsMkJBQXZCO0FBQXVCLHlEQUF2QjtBQUF1QjtBQUF2QixhQUFMLEVBQ2hCLGlDQURnQixFQUVoQix5QkFGZ0IsQ0FBaEI7QUFHQTs7QUFDQTtBQUNBLDhEQURBLENBRUE7O0FBQ0E7QUFDQSwyQ0FBdUMsdUJBQXdCLFVBQVMsdUJBQXdCLGdCQUFoRyxHQUFnRyxHQUFxQix1QkFBd0IsUUFBN0k7QUFDQTtBQUNBLG1CQUFnQiw2Q0FBSyxhQUFMLENBQUssS0FBTCxFQUFLO0FBQXVCLGtDQUF2QjtBQUF1QixpQ0FBdkI7QUFBdUIsOEJBQXZCO0FBQXVCLHFDQUF2QjtBQUF1QjtBQUF2QixhQUFMLEVBQXFKLGVBQXJKLENBQWhCO0FBQ0E7O0FBQ0E7QUFDQSxtQkFBZ0IsNkNBQUssYUFBTCxDQUFLLEtBQUwsRUFBSztBQUF1Qiw4REFBdkI7QUFBdUIsMkRBQXZCO0FBQXVCO0FBQXZCLGFBQUwsRUFDaEIsNEZBRGdCLEVBRWhCLDRCQUZnQixFQUdoQiwrQkFIZ0IsQ0FBaEI7QUFJQTs7QUFDQTtBQUNBLG1CQUFnQiw2Q0FBSyxhQUFMLENBQUssSUFBTCxFQUFLO0FBQXNCLGlFQUF0QjtBQUFzQiw2QkFBdEI7QUFBc0I7QUFBdEIsYUFBTCxFQUFxSjtBQUNySztBQUNBLHFFQUFxRSx1QkFBd0IsZUFBYyx1QkFBd0IscUJBQW5JLEdBQW1JLEdBQTBCLHVCQUF3QixhQUFyTDtBQUNBO0FBQ0EscUJBQW9CLDZDQUFLLGFBQUwsQ0FBSyxJQUFMLEVBQUs7QUFBc0Isb0NBQXRCO0FBQXNCLCtEQUF0QjtBQUFzQixtQ0FBdEI7QUFBc0IsMkJBQXRCO0FBQXNCO0FBQXRCLGVBQUwsRUFBa0sscUJBQWxLLENBQXBCO0FBQ1MsYUFMNEosQ0FBckosQ0FBaEI7QUFNQTs7QUFDQTtBQUNBLG1CQUFnQiw2Q0FBSyxhQUFMLENBQUssS0FBTCxFQUFLO0FBQXVCO0FBQXZCLGFBQUwsRUFDSiw2Q0FBSyxhQUFMLENBQUssUUFBTCxFQUFLO0FBQTBCLHNEQUExQjtBQUEwQiw0QkFBeUQsdUJBQXdCLFlBQVcsdUJBQXdCLG9CQUE5STtBQUE4SSw0QkFBOUk7QUFBOEk7QUFBOUksYUFBTCxFQUNJLDZDQUFLLGFBQUwsQ0FBSyxNQUFMLEVBQUs7QUFBd0I7QUFBeEIsYUFBTCxDQURKLEVBRUksNkNBQUssYUFBTCxDQUFLLE1BQUwsRUFBSztBQUF3QjtBQUF4QixhQUFMLEVBQW9GLGlDQUFwRixDQUZKLENBREksRUFJSiw2Q0FBSyxhQUFMLENBQUssUUFBTCxFQUFLO0FBQTBCLHNEQUExQjtBQUEwQiw0QkFBeUQsdUJBQXdCLFlBQVcsdUJBQXdCLGdCQUE5STtBQUE4SSw0QkFBOUk7QUFBOEk7QUFBOUksYUFBTCxFQUNJLDZDQUFLLGFBQUwsQ0FBSyxNQUFMLEVBQUs7QUFBd0I7QUFBeEIsYUFBTCxDQURKLEVBRUksNkNBQUssYUFBTCxDQUFLLE1BQUwsRUFBSztBQUF3QjtBQUF4QixhQUFMLEVBQW9GLDZCQUFwRixDQUZKLENBSkksRUFPaEIsdUJBQ2dCLDZDQUFLLGFBQUwsQ0FBb0IsNkNBQUssUUFBekIsRUFBeUIsSUFBekIsRUFDSSw2Q0FBSyxhQUFMLENBQUssUUFBTCxFQUFLO0FBQTBCLDRCQUFlLHVCQUF3QixZQUFXLHVCQUF3QixrQkFBMUUsSUFBMEUsMEVBQTFFLENBQTFCO0FBQW9HLDRCQUFwRztBQUFvRywwREFBcEc7QUFBb0c7QUFBcEcsYUFBTCxFQUNJLDZDQUFLLGFBQUwsQ0FBSyxNQUFMLEVBQUs7QUFBd0I7QUFBeEIsYUFBTCxDQURKLEVBRUksNkNBQUssYUFBTCxDQUFLLE1BQUwsRUFBSztBQUF3QjtBQUF4QixhQUFMLEVBQW9GLDhCQUFwRixDQUZKLENBREosRUFJSSw2Q0FBSyxhQUFMLENBQUssUUFBTCxFQUFLO0FBQTBCLDRCQUFlLHVCQUF3QixZQUFXLHVCQUF3QixpQkFBMUUsSUFBMEUseUVBQTFFLENBQTFCO0FBQW9HLDRCQUFwRztBQUFvRyx5REFBcEc7QUFBb0c7QUFBcEcsYUFBTCxFQUNJLDZDQUFLLGFBQUwsQ0FBSyxNQUFMLEVBQUs7QUFBd0I7QUFBeEIsYUFBTCxDQURKLEVBRUksNkNBQUssYUFBTCxDQUFLLE1BQUwsRUFBSztBQUF3QjtBQUF4QixhQUFMLEVBQW9GLDZCQUFwRixDQUZKLENBSkosQ0FSQSxDQUFoQjtBQWVBOztBQS9Jc0M7O0FBaUp0QztBQUNBLGtFQURBO0FBRUEsMkJBRkE7QUFHQSx5QkFIQTtBQUlBLG9CQUpBO0FBS0EscUJBTEE7QUFNQSwwQkFOQTtBQU9BLHdDQVBBO0FBUUE7QUFDQSx3QkFEQTtBQUVBLDBCQUZBO0FBR0Esd0JBSEE7QUFJQSxnQ0FKQTtBQUtBLHFDQUxBO0FBTUEsbUNBTkE7QUFPQTtBQVBBO0FBUkE7QUFrQmU7O0FBQUEsMElBQXlCLDhGQUFxQixjQUFyQixDQUF6QixFQUE4QyxjQUE5QyxFLENBQ2Y7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDL0xBO0FBQUE7OztBQUFBO0FBQUE7QUFBQTs7QUFBTztBQUNQO0FBQ0EsUyxDQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0hBOzs7Ozs7Ozs7Ozs7OztBQUFBOzs7Ozs7QUxVQTtDQVZBLEUiLCJmaWxlIjoianMvQ2Fyb3VzZWxWMS5iZGVmZTFkNy5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcIkBhZG9iZS9hZW0tY29yZS1jb21wb25lbnRzLXJlYWN0LXNwYVwiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJAYWRvYmUvYWVtLWNvcmUtY29tcG9uZW50cy1yZWFjdC1zcGFcIl0gPSBmYWN0b3J5KCk7XG59KSh0eXBlb2Ygc2VsZiAhPT0gJ3VuZGVmaW5lZCcgPyBzZWxmIDogdGhpcywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDMpO1xuIiwiLypcbiAqICBDb3B5cmlnaHQgMjAyMCBBZG9iZVxuICpcbiAqICBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqICBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgICAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqICBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiAgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqICBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuY29uc3QgaXNCcm93c2VyID0gKCgpID0+IHtcbiAgICB0cnkge1xuICAgICAgICByZXR1cm4gdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCc7XG4gICAgfVxuICAgIGNhdGNoIChlcnIpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbn0pKCk7XG5leHBvcnQgY29uc3Qgd2l0aFN0YW5kYXJkQmFzZUNzc0NsYXNzID0gKENvbXBvbmVudCwgZGVmYXVsdEJhc2VDc3NDbGFzcykgPT4ge1xuICAgIHJldHVybiAocHJvcHMpID0+IHtcbiAgICAgICAgY29uc3QgYmFzZUNzc0NsYXNzID0gcHJvcHMuYmFzZUNzc0NsYXNzO1xuICAgICAgICBjb25zdCB0b0JlVXNlZENzc0NsYXNzID0gYmFzZUNzc0NsYXNzICYmIGJhc2VDc3NDbGFzcy50cmltKCkubGVuZ3RoID4gMCA/IGJhc2VDc3NDbGFzcyA6IGRlZmF1bHRCYXNlQ3NzQ2xhc3M7XG4gICAgICAgIGNvbnN0IG1lcmdlZFByb3BzID0ge1xuICAgICAgICAgICAgLi4ucHJvcHMsXG4gICAgICAgICAgICBiYXNlQ3NzQ2xhc3M6IHRvQmVVc2VkQ3NzQ2xhc3NcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQ29tcG9uZW50LCBPYmplY3QuYXNzaWduKHt9LCBtZXJnZWRQcm9wcykpO1xuICAgIH07XG59O1xuZXhwb3J0IGNvbnN0IHdpdGhBdXRob3JQYW5lbFN3aXRjaCA9IChDb21wb25lbnQpID0+IHtcbiAgICByZXR1cm4gY2xhc3MgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgICAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgICAgICAgICAgdGhpcy5zdGF0ZSA9IHt9O1xuICAgICAgICAgICAgLy9AdHMtaWdub3JlXG4gICAgICAgICAgICBpZiAoaXNCcm93c2VyICYmIHdpbmRvdy5HcmFuaXRlICYmIHdpbmRvdy5HcmFuaXRlLmF1dGhvciAmJiB3aW5kb3cuR3Jhbml0ZS5hdXRob3IuTWVzc2FnZUNoYW5uZWwpIHtcbiAgICAgICAgICAgICAgICAvL0B0cy1pZ25vcmVcbiAgICAgICAgICAgICAgICB0aGlzLm1lc3NhZ2VDaGFubmVsID0gbmV3IHdpbmRvdy5HcmFuaXRlLmF1dGhvci5NZXNzYWdlQ2hhbm5lbChcImNxYXV0aG9yXCIsIHdpbmRvdyk7XG4gICAgICAgICAgICAgICAgdGhpcy5jYWxsYmFjayA9IHRoaXMuY2FsbGJhY2suYmluZCh0aGlzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjYWxsYmFjayhtZXNzYWdlKSB7XG4gICAgICAgICAgICBpZiAobWVzc2FnZS5kYXRhICYmIG1lc3NhZ2UuZGF0YS5pZCA9PT0gdGhpcy5wcm9wcy5jcVBhdGgpIHtcbiAgICAgICAgICAgICAgICBpZiAobWVzc2FnZS5kYXRhLm9wZXJhdGlvbiA9PT0gXCJuYXZpZ2F0ZVwiKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGluZGV4ID0gbWVzc2FnZS5kYXRhLmluZGV4O1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFjdGl2ZUluZGV4RnJvbUF1dGhvclBhbmVsOiBpbmRleFxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5tZXNzYWdlQ2hhbm5lbCkge1xuICAgICAgICAgICAgICAgIHRoaXMubWVzc2FnZUNoYW5uZWwuc3Vic2NyaWJlUmVxdWVzdE1lc3NhZ2UoXCJjbXAucGFuZWxjb250YWluZXJcIiwgdGhpcy5jYWxsYmFjayk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5tZXNzYWdlQ2hhbm5lbCkge1xuICAgICAgICAgICAgICAgIHRoaXMubWVzc2FnZUNoYW5uZWwudW5zdWJzY3JpYmVSZXF1ZXN0TWVzc2FnZShcImNtcC5wYW5lbGNvbnRhaW5lclwiLCB0aGlzLmNhbGxiYWNrKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZW5kZXIoKSB7XG4gICAgICAgICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChDb21wb25lbnQsIE9iamVjdC5hc3NpZ24oe30sIHRoaXMucHJvcHMsIHsgYWN0aXZlSW5kZXhGcm9tQXV0aG9yUGFuZWw6IHRoaXMuc3RhdGUuYWN0aXZlSW5kZXhGcm9tQXV0aG9yUGFuZWwgfSkpO1xuICAgICAgICB9XG4gICAgfTtcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lRV0p6ZEhKaFkzUkRiM0psUTI5dWRHRnBibVZ5UTI5dGNHOXVaVzUwTG1weklpd2ljMjkxY21ObFVtOXZkQ0k2SWlJc0luTnZkWEpqWlhNaU9sc2lRV0p6ZEhKaFkzUkRiM0psUTI5dWRHRnBibVZ5UTI5dGNHOXVaVzUwTG5SemVDSmRMQ0p1WVcxbGN5STZXMTBzSW0xaGNIQnBibWR6SWpvaVFVRkJRVHM3T3pzN096czdPenM3T3pzN1IwRmpSenRCUVVWSUxFOUJRVThzUzBGQlN5eExRVUZMTEUxQlFVMHNUMEZCVHl4RFFVRkRPMEZCZFVJdlFpeE5RVUZOTEZOQlFWTXNSMEZCUnl4RFFVRkRMRWRCUVVjc1JVRkJSVHRKUVVOd1FpeEpRVUZITzFGQlEwTXNUMEZCVHl4UFFVRlBMRTFCUVUwc1MwRkJTeXhYUVVGWExFTkJRVU03UzBGRGVFTTdTVUZCUVN4UFFVRk5MRWRCUVVjc1JVRkJRenRSUVVOUUxFOUJRVThzUzBGQlN5eERRVUZETzB0QlEyaENPMEZCUTB3c1EwRkJReXhEUVVGRExFVkJRVVVzUTBGQlF6dEJRVWRNTEUxQlFVMHNRMEZCUXl4TlFVRk5MSGRDUVVGM1FpeEhRVUZITEVOQlJYQkRMRk5CUVRCQ0xFVkJRekZDTEcxQ1FVRXdRaXhGUVVOS0xFVkJRVVU3U1VGRGVFSXNUMEZCVHl4RFFVRkRMRXRCUVU4c1JVRkJSU3hGUVVGRk8xRkJSV1lzVFVGQlRTeFpRVUZaTEVkQlFVY3NTMEZCU3l4RFFVRkRMRmxCUVZrc1EwRkJRenRSUVVONFF5eE5RVUZOTEdkQ1FVRm5RaXhIUVVGSExGbEJRVmtzU1VGQlNTeFpRVUZaTEVOQlFVTXNTVUZCU1N4RlFVRkZMRU5CUVVNc1RVRkJUU3hIUVVGSExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNXVUZCV1N4RFFVRkRMRU5CUVVNc1EwRkJReXh0UWtGQmJVSXNRMEZCUXp0UlFVVTNSeXhOUVVGTkxGZEJRVmNzUjBGQlN6dFpRVU5zUWl4SFFVRkhMRXRCUVVzN1dVRkRVaXhaUVVGWkxFVkJRVVVzWjBKQlFXZENPMU5CUTJwRExFTkJRVU03VVVGRlJpeFBRVUZQTEc5Q1FVRkRMRk5CUVZNc2IwSkJRVXNzVjBGQlZ5eEZRVUZKTEVOQlFVTTdTVUZETVVNc1EwRkJReXhEUVVGQk8wRkJRMHdzUTBGQlF5eERRVUZETzBGQlNVWXNUVUZCVFN4RFFVRkRMRTFCUVUwc2NVSkJRWEZDTEVkQlFVY3NRMEZEYWtNc1UwRkJNRUlzUlVGRFRDeEZRVUZGTzBsQlJYWkNMRTlCUVU4c1MwRkJUU3hUUVVGUkxFdEJRVXNzUTBGQlF5eFRRVUZ2UXp0UlFVc3pSQ3haUVVGWkxFdEJRVTg3V1VGRFppeExRVUZMTEVOQlFVTXNTMEZCU3l4RFFVRkRMRU5CUVVNN1dVRkRZaXhKUVVGSkxFTkJRVU1zUzBGQlN5eEhRVUZITEVWQlFVVXNRMEZCUVR0WlFVVm1MRmxCUVZrN1dVRkRXaXhKUVVGSkxGTkJRVk1zU1VGQlNTeE5RVUZOTEVOQlFVTXNUMEZCVHl4SlFVRkpMRTFCUVUwc1EwRkJReXhQUVVGUExFTkJRVU1zVFVGQlRTeEpRVUZKTEUxQlFVMHNRMEZCUXl4UFFVRlBMRU5CUVVNc1RVRkJUU3hEUVVGRExHTkJRV01zUlVGQlJUdG5Ra0ZET1VZc1dVRkJXVHRuUWtGRFdpeEpRVUZKTEVOQlFVTXNZMEZCWXl4SFFVRkhMRWxCUVVrc1RVRkJUU3hEUVVGRExFOUJRVThzUTBGQlF5eE5RVUZOTEVOQlFVTXNZMEZCWXl4RFFVRkRMRlZCUVZVc1JVRkJSU3hOUVVGTkxFTkJRVU1zUTBGQlF6dG5Ra0ZEYmtZc1NVRkJTU3hEUVVGRExGRkJRVkVzUjBGQlJ5eEpRVUZKTEVOQlFVTXNVVUZCVVN4RFFVRkRMRWxCUVVrc1EwRkJReXhKUVVGSkxFTkJRVU1zUTBGQlF6dGhRVU0xUXp0UlFVTk1MRU5CUVVNN1VVRkZSQ3hSUVVGUkxFTkJRVU1zVDBGQlZ6dFpRVU5vUWl4SlFVRkpMRTlCUVU4c1EwRkJReXhKUVVGSkxFbEJRVWtzVDBGQlR5eERRVUZETEVsQlFVa3NRMEZCUXl4RlFVRkZMRXRCUVVzc1NVRkJTU3hEUVVGRExFdEJRVXNzUTBGQlF5eE5RVUZOTEVWQlFVVTdaMEpCUTNaRUxFbEJRVWtzVDBGQlR5eERRVUZETEVsQlFVa3NRMEZCUXl4VFFVRlRMRXRCUVVzc1ZVRkJWU3hGUVVGRk8yOUNRVU4yUXl4TlFVRk5MRXRCUVVzc1IwRkJSeXhQUVVGUExFTkJRVU1zU1VGQlNTeERRVUZETEV0QlFXVXNRMEZCUXp0dlFrRkRNME1zU1VGQlNTeERRVUZETEZGQlFWRXNRMEZCUXp0M1FrRkRWaXd3UWtGQk1FSXNSVUZCUlN4TFFVRkxPM0ZDUVVOd1F5eERRVUZETEVOQlFVRTdhVUpCUTB3N1lVRkRTanRSUVVOTUxFTkJRVU03VVVGRlJDeHBRa0ZCYVVJN1dVRkRZaXhKUVVGSExFbEJRVWtzUTBGQlF5eGpRVUZqTEVWQlFVTTdaMEpCUTI1Q0xFbEJRVWtzUTBGQlF5eGpRVUZqTEVOQlFVTXNkVUpCUVhWQ0xFTkJRVU1zYjBKQlFXOUNMRVZCUVVVc1NVRkJTU3hEUVVGRExGRkJRVkVzUTBGQlF5eERRVUZETzJGQlEzQkdPMUZCUTB3c1EwRkJRenRSUVVWRUxHOUNRVUZ2UWp0WlFVTm9RaXhKUVVGSExFbEJRVWtzUTBGQlF5eGpRVUZqTEVWQlFVTTdaMEpCUTI1Q0xFbEJRVWtzUTBGQlF5eGpRVUZqTEVOQlFVTXNlVUpCUVhsQ0xFTkJRVU1zYjBKQlFXOUNMRVZCUVVVc1NVRkJTU3hEUVVGRExGRkJRVkVzUTBGQlF5eERRVUZETzJGQlEzUkdPMUZCUTB3c1EwRkJRenRSUVVkRUxFMUJRVTA3V1VGRFJpeFBRVUZQTEc5Q1FVRkRMRk5CUVZNc2IwSkJRVXNzU1VGQlNTeERRVUZETEV0QlFVc3NTVUZCUlN3d1FrRkJNRUlzUlVGQlJTeEpRVUZKTEVOQlFVTXNTMEZCU3l4RFFVRkRMREJDUVVFd1FpeEpRVUZKTEVOQlFVTTdVVUZETlVjc1EwRkJRenRMUVVOS0xFTkJRVUU3UVVGRlRDeERRVUZETEVOQlFVTWlMQ0p6YjNWeVkyVnpRMjl1ZEdWdWRDSTZXeUl2S2x4dUlDb2dJRU52Y0hseWFXZG9kQ0F5TURJd0lFRmtiMkpsWEc0Z0tseHVJQ29nSUV4cFkyVnVjMlZrSUhWdVpHVnlJSFJvWlNCQmNHRmphR1VnVEdsalpXNXpaU3dnVm1WeWMybHZiaUF5TGpBZ0tIUm9aU0JjSWt4cFkyVnVjMlZjSWlrN1hHNGdLaUFnZVc5MUlHMWhlU0J1YjNRZ2RYTmxJSFJvYVhNZ1ptbHNaU0JsZUdObGNIUWdhVzRnWTI5dGNHeHBZVzVqWlNCM2FYUm9JSFJvWlNCTWFXTmxibk5sTGx4dUlDb2dJRmx2ZFNCdFlYa2diMkowWVdsdUlHRWdZMjl3ZVNCdlppQjBhR1VnVEdsalpXNXpaU0JoZEZ4dUlDcGNiaUFxSUNBZ0lDQWdhSFIwY0RvdkwzZDNkeTVoY0dGamFHVXViM0puTDJ4cFkyVnVjMlZ6TDB4SlEwVk9VMFV0TWk0d1hHNGdLbHh1SUNvZ0lGVnViR1Z6Y3lCeVpYRjFhWEpsWkNCaWVTQmhjSEJzYVdOaFlteGxJR3hoZHlCdmNpQmhaM0psWldRZ2RHOGdhVzRnZDNKcGRHbHVaeXdnYzI5bWRIZGhjbVZjYmlBcUlDQmthWE4wY21saWRYUmxaQ0IxYm1SbGNpQjBhR1VnVEdsalpXNXpaU0JwY3lCa2FYTjBjbWxpZFhSbFpDQnZiaUJoYmlCY0lrRlRJRWxUWENJZ1FrRlRTVk1zWEc0Z0tpQWdWMGxVU0U5VlZDQlhRVkpTUVU1VVNVVlRJRTlTSUVOUFRrUkpWRWxQVGxNZ1QwWWdRVTVaSUV0SlRrUXNJR1ZwZEdobGNpQmxlSEJ5WlhOeklHOXlJR2x0Y0d4cFpXUXVYRzRnS2lBZ1UyVmxJSFJvWlNCTWFXTmxibk5sSUdadmNpQjBhR1VnYzNCbFkybG1hV01nYkdGdVozVmhaMlVnWjI5MlpYSnVhVzVuSUhCbGNtMXBjM05wYjI1eklHRnVaRnh1SUNvZ0lHeHBiV2wwWVhScGIyNXpJSFZ1WkdWeUlIUm9aU0JNYVdObGJuTmxMbHh1SUNvdlhHNWNibWx0Y0c5eWRDQXFJR0Z6SUZKbFlXTjBJR1p5YjIwZ0ozSmxZV04wSnp0Y2JseHVhVzF3YjNKMElIdERiMjUwWVdsdVpYSlRkR0YwWlN3Z1FXeHNiM2RsWkVOdmJYQnZibVZ1ZEhOUWNtOXdaWEowYVdWemZTQm1jbTl0SUNkQVlXUnZZbVV2WVdWdExYSmxZV04wTFdWa2FYUmhZbXhsTFdOdmJYQnZibVZ1ZEhNbk8xeHVhVzF3YjNKMElIdERiMjF3YjI1bGJuUlVlWEJsZlNCbWNtOXRJRndpY21WaFkzUmNJanRjYm1sdGNHOXlkQ0I3SUUxdlpHVnNJSDBnWm5KdmJTQW5RR0ZrYjJKbEwyRmxiUzF6Y0dFdGNHRm5aUzF0YjJSbGJDMXRZVzVoWjJWeUp6dGNibHh1Wlhod2IzSjBJR2x1ZEdWeVptRmpaU0JEYjNKbFEyOXVkR0ZwYm1WeVVISnZjR1Z5ZEdsbGN5QmxlSFJsYm1SeklFRnNiRzkzWldSRGIyMXdiMjVsYm5SelVISnZjR1Z5ZEdsbGMzdGNiaUFnSUNCaVlYTmxRM056UTJ4aGMzTS9Pbk4wY21sdVp6dGNiaUFnSUNCaFkzUnBkbVZKYm1SbGVFWnliMjFCZFhSb2IzSlFZVzVsYkQ4NmJuVnRZbVZ5WEc1OVhHNWNibVY0Y0c5eWRDQnBiblJsY21aaFkyVWdRMjl5WlVOdmJuUmhhVzVsY2tsMFpXMGdaWGgwWlc1a2N5Qk5iMlJsYkNCN1hHNGdJQ0FnSjJOeE9uQmhibVZzVkdsMGJHVW5PaUJ6ZEhKcGJtZGNibjFjYmx4dVpYaHdiM0owSUdsdWRHVnlabUZqWlNCRGIzSmxRMjl1ZEdGcGJtVnlVM1JoZEdVZ1pYaDBaVzVrY3lCRGIyNTBZV2x1WlhKVGRHRjBaU0I3WEc1Y2JuMWNibHh1Wlhod2IzSjBJR2x1ZEdWeVptRmpaU0JCZFhSb2IzSlFZVzVsYkZOM2FYUmphRk4wWVhSbElIdGNiaUFnSUNCaFkzUnBkbVZKYm1SbGVFWnliMjFCZFhSb2IzSlFZVzVsYkQ4NklHNTFiV0psY2x4dWZWeHVYRzVqYjI1emRDQnBjMEp5YjNkelpYSWdQU0FvS0NrZ1BUNGdlMXh1SUNBZ0lIUnllWHRjYmlBZ0lDQWdJQ0FnY21WMGRYSnVJSFI1Y0dWdlppQjNhVzVrYjNjZ0lUMDlJQ2QxYm1SbFptbHVaV1FuTzF4dUlDQWdJSDFqWVhSamFDaGxjbklwZTF4dUlDQWdJQ0FnSUNCeVpYUjFjbTRnWm1Gc2MyVTdYRzRnSUNBZ2ZWeHVmU2tvS1R0Y2JseHVYRzVsZUhCdmNuUWdZMjl1YzNRZ2QybDBhRk4wWVc1a1lYSmtRbUZ6WlVOemMwTnNZWE56SUQwZ1BFMGdaWGgwWlc1a2N5QkRiM0psUTI5dWRHRnBibVZ5VUhKdmNHVnlkR2xsY3o1Y2JpaGNiaUFnSUNCRGIyMXdiMjVsYm5RNlEyOXRjRzl1Wlc1MFZIbHdaVHhOUGl4Y2JpQWdJQ0JrWldaaGRXeDBRbUZ6WlVOemMwTnNZWE56T25OMGNtbHVaMXh1S1RwU1pXRmpkQzVEYjIxd2IyNWxiblJVZVhCbFBFMCtJQ0E5UGlCN1hHNGdJQ0FnY21WMGRYSnVJQ2h3Y205d2N6cE5LU0E5UGlCN1hHNWNiaUFnSUNBZ0lDQWdZMjl1YzNRZ1ltRnpaVU56YzBOc1lYTnpJRDBnY0hKdmNITXVZbUZ6WlVOemMwTnNZWE56TzF4dUlDQWdJQ0FnSUNCamIyNXpkQ0IwYjBKbFZYTmxaRU56YzBOc1lYTnpJRDBnWW1GelpVTnpjME5zWVhOeklDWW1JR0poYzJWRGMzTkRiR0Z6Y3k1MGNtbHRLQ2t1YkdWdVozUm9JRDRnTUNBL0lHSmhjMlZEYzNORGJHRnpjeUE2SUdSbFptRjFiSFJDWVhObFEzTnpRMnhoYzNNN1hHNWNiaUFnSUNBZ0lDQWdZMjl1YzNRZ2JXVnlaMlZrVUhKdmNITTZJRTA5SUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJQzR1TG5CeWIzQnpMRnh1SUNBZ0lDQWdJQ0FnSUNBZ1ltRnpaVU56YzBOc1lYTnpPaUIwYjBKbFZYTmxaRU56YzBOc1lYTnpYRzRnSUNBZ0lDQWdJSDA3WEc1Y2JpQWdJQ0FnSUNBZ2NtVjBkWEp1SUR4RGIyMXdiMjVsYm5RZ2V5NHVMbTFsY21kbFpGQnliM0J6ZlNBdlBqdGNiaUFnSUNCOVhHNTlPMXh1WEc1Y2JseHVaWGh3YjNKMElHTnZibk4wSUhkcGRHaEJkWFJvYjNKUVlXNWxiRk4zYVhSamFDQTlJRHhOSUdWNGRHVnVaSE1nUTI5eVpVTnZiblJoYVc1bGNsQnliM0JsY25ScFpYTStLRnh1SUNBZ0lFTnZiWEJ2Ym1WdWREcERiMjF3YjI1bGJuUlVlWEJsUEUwK1hHNHBPbEpsWVdOMExrTnZiWEJ2Ym1WdWRGUjVjR1U4VFQ0Z1BUNGdlMXh1WEc0Z0lDQWdjbVYwZFhKdUlHTnNZWE56SUdWNGRHVnVaSE1nVW1WaFkzUXVRMjl0Y0c5dVpXNTBQRTBzSUVGMWRHaHZjbEJoYm1Wc1UzZHBkR05vVTNSaGRHVStJSHRjYmx4dUlDQWdJQ0FnSUNBdkwwQjBjeTFwWjI1dmNtVmNiaUFnSUNBZ0lDQWdiV1Z6YzJGblpVTm9ZVzV1Wld3N1hHNWNiaUFnSUNBZ0lDQWdZMjl1YzNSeWRXTjBiM0lvY0hKdmNITTZUU2tnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdjM1Z3WlhJb2NISnZjSE1wTzF4dUlDQWdJQ0FnSUNBZ0lDQWdkR2hwY3k1emRHRjBaU0E5SUh0OVhHNWNiaUFnSUNBZ0lDQWdJQ0FnSUM4dlFIUnpMV2xuYm05eVpWeHVJQ0FnSUNBZ0lDQWdJQ0FnYVdZZ0tHbHpRbkp2ZDNObGNpQW1KaUIzYVc1a2IzY3VSM0poYm1sMFpTQW1KaUIzYVc1a2IzY3VSM0poYm1sMFpTNWhkWFJvYjNJZ0ppWWdkMmx1Wkc5M0xrZHlZVzVwZEdVdVlYVjBhRzl5TGsxbGMzTmhaMlZEYUdGdWJtVnNLU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnTHk5QWRITXRhV2R1YjNKbFhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2RHaHBjeTV0WlhOellXZGxRMmhoYm01bGJDQTlJRzVsZHlCM2FXNWtiM2N1UjNKaGJtbDBaUzVoZFhSb2IzSXVUV1Z6YzJGblpVTm9ZVzV1Wld3b1hDSmpjV0YxZEdodmNsd2lMQ0IzYVc1a2IzY3BPMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJSFJvYVhNdVkyRnNiR0poWTJzZ1BTQjBhR2x6TG1OaGJHeGlZV05yTG1KcGJtUW9kR2hwY3lrN1hHNGdJQ0FnSUNBZ0lDQWdJQ0I5WEc0Z0lDQWdJQ0FnSUgxY2JseHVJQ0FnSUNBZ0lDQmpZV3hzWW1GamF5aHRaWE56WVdkbE9tRnVlU2w3WEc0Z0lDQWdJQ0FnSUNBZ0lDQnBaaUFvYldWemMyRm5aUzVrWVhSaElDWW1JRzFsYzNOaFoyVXVaR0YwWVM1cFpDQTlQVDBnZEdocGN5NXdjbTl3Y3k1amNWQmhkR2dwSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCcFppQW9iV1Z6YzJGblpTNWtZWFJoTG05d1pYSmhkR2x2YmlBOVBUMGdYQ0p1WVhacFoyRjBaVndpS1NCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJR052Ym5OMElHbHVaR1Y0SUQwZ2JXVnpjMkZuWlM1a1lYUmhMbWx1WkdWNElHRnpJRzUxYldKbGNqdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnZEdocGN5NXpaWFJUZEdGMFpTaDdYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQmhZM1JwZG1WSmJtUmxlRVp5YjIxQmRYUm9iM0pRWVc1bGJEb2dhVzVrWlhoY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdmU2xjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0I5WEc0Z0lDQWdJQ0FnSUNBZ0lDQjlYRzRnSUNBZ0lDQWdJSDFjYmx4dUlDQWdJQ0FnSUNCamIyMXdiMjVsYm5SRWFXUk5iM1Z1ZENncE9pQjJiMmxrSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJR2xtS0hSb2FYTXViV1Z6YzJGblpVTm9ZVzV1Wld3cGUxeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lIUm9hWE11YldWemMyRm5aVU5vWVc1dVpXd3VjM1ZpYzJOeWFXSmxVbVZ4ZFdWemRFMWxjM05oWjJVb1hDSmpiWEF1Y0dGdVpXeGpiMjUwWVdsdVpYSmNJaXdnZEdocGN5NWpZV3hzWW1GamF5azdYRzRnSUNBZ0lDQWdJQ0FnSUNCOVhHNGdJQ0FnSUNBZ0lIMWNibHh1SUNBZ0lDQWdJQ0JqYjIxd2IyNWxiblJYYVd4c1ZXNXRiM1Z1ZENncE9pQjJiMmxrSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJR2xtS0hSb2FYTXViV1Z6YzJGblpVTm9ZVzV1Wld3cGUxeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lIUm9hWE11YldWemMyRm5aVU5vWVc1dVpXd3VkVzV6ZFdKelkzSnBZbVZTWlhGMVpYTjBUV1Z6YzJGblpTaGNJbU50Y0M1d1lXNWxiR052Ym5SaGFXNWxjbHdpTENCMGFHbHpMbU5oYkd4aVlXTnJLVHRjYmlBZ0lDQWdJQ0FnSUNBZ0lIMWNiaUFnSUNBZ0lDQWdmVnh1WEc1Y2JpQWdJQ0FnSUNBZ2NtVnVaR1Z5S0NsN1hHNGdJQ0FnSUNBZ0lDQWdJQ0J5WlhSMWNtNGdQRU52YlhCdmJtVnVkQ0I3TGk0dWRHaHBjeTV3Y205d2MzMGdZV04wYVhabFNXNWtaWGhHY205dFFYVjBhRzl5VUdGdVpXdzllM1JvYVhNdWMzUmhkR1V1WVdOMGFYWmxTVzVrWlhoR2NtOXRRWFYwYUc5eVVHRnVaV3g5SUM4K08xeHVJQ0FnSUNBZ0lDQjlYRzRnSUNBZ2ZWeHVYRzU5TzF4dUlsMTkiLCIvKlxuICogIENvcHlyaWdodCAyMDIwIEFkb2JlXG4gKlxuICogIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiAgeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICAgICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqICBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiAgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiAgU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgd2l0aEF1dGhvclBhbmVsU3dpdGNoLCB3aXRoU3RhbmRhcmRCYXNlQ3NzQ2xhc3MgfSBmcm9tIFwiLi4vLi4vLi4vQWJzdHJhY3RDb3JlQ29udGFpbmVyQ29tcG9uZW50XCI7XG5pbXBvcnQgeyBDb21wb25lbnRNYXBwaW5nLCBDb250YWluZXIgfSBmcm9tICdAYWRvYmUvYWVtLXJlYWN0LWVkaXRhYmxlLWNvbXBvbmVudHMnO1xuaW1wb3J0IHsgQ2Fyb3VzZWxWMUlzRW1wdHlGbiB9IGZyb20gXCIuL0Nhcm91c2VsVjFJc0VtcHR5Rm5cIjtcbmNvbnN0IGZvcm1hdEZuID0gKHZhbHVlLCBhcmdzKSA9PiB7XG4gICAgbGV0IGNvbnRlbnQgPSB2YWx1ZTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFyZ3MubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY29uc3QgcmVwbGFjZW1lbnQgPSAneycgKyBpICsgJ30nO1xuICAgICAgICBjb250ZW50ID0gY29udGVudC5yZXBsYWNlKHJlcGxhY2VtZW50LCBhcmdzW2ldKTtcbiAgICB9XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG59O1xuY2xhc3MgQ2Fyb3VzZWxWMUltcGwgZXh0ZW5kcyBDb250YWluZXIge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgICAgdGhpcy5pbnRlcnZhbCA9IDA7XG4gICAgICAgIHRoaXMuY2xlYXJBdXRvUGxheSA9ICgpID0+IHtcbiAgICAgICAgICAgIHdpbmRvdy5jbGVhckludGVydmFsKHRoaXMuaW50ZXJ2YWwpO1xuICAgICAgICB9O1xuICAgICAgICAvL0B0cy1pZ25vcmVcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIGFjdGl2ZUluZGV4OiAwLFxuICAgICAgICAgICAgaXNNb3VzZUVudGVyZWQ6IGZhbHNlLFxuICAgICAgICAgICAgYXV0b1BsYXk6IHRoaXMucHJvcHMuYXV0b3BsYXkgJiYgIXRoaXMucHJvcHMuaXNJbkVkaXRvcixcbiAgICAgICAgICAgIGNvbXBvbmVudE1hcHBpbmc6IHRoaXMucHJvcHMuY29tcG9uZW50TWFwcGluZyB8fCBDb21wb25lbnRNYXBwaW5nXG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuaGFuZGxlSW5kaWNhdG9yQ2xpY2sgPSB0aGlzLmhhbmRsZUluZGljYXRvckNsaWNrLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuaGFuZGxlT25CdXR0b25QcmV2ID0gdGhpcy5oYW5kbGVPbkJ1dHRvblByZXYuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5oYW5kbGVPbkJ1dHRvbk5leHQgPSB0aGlzLmhhbmRsZU9uQnV0dG9uTmV4dC5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmhhbmRsZU9uTW91c2VFbnRlciA9IHRoaXMuaGFuZGxlT25Nb3VzZUVudGVyLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuaGFuZGxlT25Nb3VzZUxlYXZlID0gdGhpcy5oYW5kbGVPbk1vdXNlTGVhdmUuYmluZCh0aGlzKTtcbiAgICB9XG4gICAgY29tcG9uZW50RGlkVXBkYXRlKHByZXZQcm9wcywgcHJldlN0YXRlLCBzbmFwc2hvdCkge1xuICAgICAgICBpZiAodGhpcy5wcm9wcy5hY3RpdmVJbmRleEZyb21BdXRob3JQYW5lbCAhPT0gdW5kZWZpbmVkICYmIHByZXZQcm9wcy5hY3RpdmVJbmRleEZyb21BdXRob3JQYW5lbCAhPSB0aGlzLnByb3BzLmFjdGl2ZUluZGV4RnJvbUF1dGhvclBhbmVsKSB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgYWN0aXZlSW5kZXg6IHRoaXMucHJvcHMuYWN0aXZlSW5kZXhGcm9tQXV0aG9yUGFuZWwgfSk7XG4gICAgICAgICAgICB0aGlzLnRvZ2dsZUF1dG9QbGF5KGZhbHNlKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgdGhpcy5hdXRvUGxheSgpO1xuICAgIH1cbiAgICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICAgICAgaWYgKHRoaXMuaW50ZXJ2YWwpIHtcbiAgICAgICAgICAgIHRoaXMuY2xlYXJBdXRvUGxheSgpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGhhbmRsZU9uTW91c2VFbnRlcigpIHtcbiAgICAgICAgaWYgKCF0aGlzLnByb3BzLmF1dG9wYXVzZURpc2FibGVkICYmIHRoaXMucHJvcHMuYXV0b3BsYXkpIHtcbiAgICAgICAgICAgIHRoaXMuY2xlYXJBdXRvUGxheSgpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGhhbmRsZU9uTW91c2VMZWF2ZSgpIHtcbiAgICAgICAgaWYgKCF0aGlzLnByb3BzLmF1dG9wYXVzZURpc2FibGVkICYmIHRoaXMucHJvcHMuYXV0b3BsYXkpIHtcbiAgICAgICAgICAgIHRoaXMuYXV0b1BsYXkoKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBoYW5kbGVPbkJ1dHRvblByZXYoKSB7XG4gICAgICAgIHRoaXMucHJldlNsaWRlKCk7XG4gICAgfVxuICAgIGhhbmRsZU9uQnV0dG9uTmV4dCgpIHtcbiAgICAgICAgdGhpcy5uZXh0U2xpZGUoKTtcbiAgICB9XG4gICAgaGFuZGxlSW5kaWNhdG9yQ2xpY2soaW5kZXgpIHtcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUuYWN0aXZlSW5kZXggIT09IGluZGV4KSB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICBhY3RpdmVJbmRleDogaW5kZXhcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuICAgIGF1dG9QbGF5KCkge1xuICAgICAgICB0aGlzLmludGVydmFsID0gd2luZG93LnNldEludGVydmFsKCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuYXV0b1BsYXlUaWNrKCk7XG4gICAgICAgIH0sIHRoaXMucHJvcHMuZGVsYXkpO1xuICAgIH1cbiAgICBhdXRvUGxheVRpY2soKSB7XG4gICAgICAgIGlmICghdGhpcy5zdGF0ZS5hdXRvUGxheSB8fCB0aGlzLnByb3BzLmNxSXRlbXNPcmRlci5sZW5ndGggPD0gMSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMubmV4dFNsaWRlKCk7XG4gICAgfVxuICAgIHRvZ2dsZUF1dG9QbGF5KHRvZ2dsZSkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIGF1dG9QbGF5OiB0b2dnbGVcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIG5leHRTbGlkZSgpIHtcbiAgICAgICAgY29uc3QgYWN0aXZlSW5kZXggPSB0aGlzLl9fZ2V0QWN0aXZlSW5kZXgoKTtcbiAgICAgICAgaWYgKGFjdGl2ZUluZGV4ID09PSAodGhpcy5wcm9wcy5jcUl0ZW1zT3JkZXIubGVuZ3RoIC0gMSkpIHtcbiAgICAgICAgICAgIHRoaXMuX19zZXRTbGlkZSgwKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuX19zZXRTbGlkZShhY3RpdmVJbmRleCArIDEpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHByZXZTbGlkZSgpIHtcbiAgICAgICAgY29uc3QgYWN0aXZlSW5kZXggPSB0aGlzLl9fZ2V0QWN0aXZlSW5kZXgoKTtcbiAgICAgICAgaWYgKGFjdGl2ZUluZGV4ID09PSAwKSB7XG4gICAgICAgICAgICB0aGlzLl9fc2V0U2xpZGUodGhpcy5wcm9wcy5jcUl0ZW1zT3JkZXIubGVuZ3RoIC0gMSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLl9fc2V0U2xpZGUoYWN0aXZlSW5kZXggLSAxKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBfX2dldEFjdGl2ZUluZGV4KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5zdGF0ZS5hY3RpdmVJbmRleDtcbiAgICB9XG4gICAgX19zZXRTbGlkZShpbmRleCkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIGFjdGl2ZUluZGV4OiBpbmRleFxuICAgICAgICB9KTtcbiAgICB9XG4gICAgcmVuZGVyKCkge1xuICAgICAgICBjb25zdCBpc0VtcHR5ID0gQ2Fyb3VzZWxWMUlzRW1wdHlGbih0aGlzLnByb3BzKTtcbiAgICAgICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3NOYW1lOiB0aGlzLnByb3BzLmJhc2VDc3NDbGFzcywgcm9sZTogXCJncm91cFwiLCBcImFyaWEtbGFiZWxcIjogdGhpcy5wcm9wcy5hY2Nlc3NpYmlsaXR5TGFiZWwsIFwiYXJpYS1yb2xlZGVzY3JpcHRpb25cIjogXCJjYXJvdXNlbFwiIH0sXG4gICAgICAgICAgICAhaXNFbXB0eSAmJiB0aGlzLnJlbmRlckNhcm91c2VsKCksXG4gICAgICAgICAgICB0aGlzLnBsYWNlaG9sZGVyQ29tcG9uZW50KSk7XG4gICAgfVxuICAgIGRpc3BsYXlJdGVtKGl0ZW0sIGluZGV4KSB7XG4gICAgICAgIGNvbnN0IGlzQWN0aXZlID0gaW5kZXggPT09IHRoaXMuc3RhdGUuYWN0aXZlSW5kZXg7XG4gICAgICAgIC8vd2UgZGlzcGxheSB0aGUgaXRlbSBpZiBhY3RpdmUgaXMgdHJ1ZSwgb3IgaWYgd2UgYXJlIGluIHRoZSBhdXRob3IgbW9kZS4gd2UgbmVlZCB0byBhbHdheXMgZGlzcGxheSB0aGUgaXRlbSBmb3IgdGhlIGF1dGhvciBtb2RlIHRvIHdvcmsgcHJvcGVybHkuXG4gICAgICAgIGNvbnN0IGRpc3BsYXkgPSAhIShpc0FjdGl2ZSB8fCB0aGlzLnByb3BzLmlzSW5FZGl0b3IpO1xuICAgICAgICBjb25zdCBjc3NDbGFzcyA9IGlzQWN0aXZlID8gYCR7dGhpcy5wcm9wcy5iYXNlQ3NzQ2xhc3N9X19pdGVtICR7dGhpcy5wcm9wcy5iYXNlQ3NzQ2xhc3N9X19pdGVtLS1hY3RpdmVgIDogYCR7dGhpcy5wcm9wcy5iYXNlQ3NzQ2xhc3N9X19pdGVtYDtcbiAgICAgICAgY29uc3QgYXJpYUxhYmVsID0gZm9ybWF0Rm4odGhpcy5wcm9wcy5hY2Nlc3NpYmlsaXR5LnNsaWRlLCBbKGluZGV4ICsgMSkudG9TdHJpbmcoKSwgdGhpcy5wcm9wcy5jcUl0ZW1zT3JkZXIubGVuZ3RoLnRvU3RyaW5nKCldKTtcbiAgICAgICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsga2V5OiAnaXRlbS0nICsgaW5kZXgsIGNsYXNzTmFtZTogY3NzQ2xhc3MsIHJvbGU6IFwidGFicGFuZWxcIiwgXCJhcmlhLWxhYmVsXCI6IGFyaWFMYWJlbCwgXCJkYXRhLWNtcC1ob29rLWNhcm91c2VsXCI6IFwiaXRlbVwiIH0sIGRpc3BsYXkgJiYgaXRlbSkpO1xuICAgIH1cbiAgICByZW5kZXJDYXJvdXNlbCgpIHtcbiAgICAgICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3NOYW1lOiB0aGlzLnByb3BzLmJhc2VDc3NDbGFzcyArICdfX2NvbnRlbnQnLCBvbk1vdXNlRW50ZXI6ICgpID0+IHRoaXMuaGFuZGxlT25Nb3VzZUVudGVyKCksIG9uTW91c2VMZWF2ZTogKCkgPT4gdGhpcy5oYW5kbGVPbk1vdXNlTGVhdmUoKSB9LFxuICAgICAgICAgICAgdGhpcy5jaGlsZENvbXBvbmVudHMubWFwKChjaGlsZENvbXBvbmVudCwgaW5kZXgpID0+IHRoaXMuZGlzcGxheUl0ZW0oY2hpbGRDb21wb25lbnQsIGluZGV4KSksXG4gICAgICAgICAgICB0aGlzLnJlbmRlckNhcm91c2VsQWN0aW9ucygpLFxuICAgICAgICAgICAgdGhpcy5yZW5kZXJDYXJvdXNlbEluZGljYXRvcnMoKSkpO1xuICAgIH1cbiAgICByZW5kZXJDYXJvdXNlbEluZGljYXRvcnMoKSB7XG4gICAgICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChcIm9sXCIsIHsgY2xhc3NOYW1lOiB0aGlzLnByb3BzLmJhc2VDc3NDbGFzcyArICdfX2luZGljYXRvcnMnLCByb2xlOiBcInRhYmxpc3RcIiwgXCJhcmlhLWxhYmVsXCI6IHRoaXMucHJvcHMuYWNjZXNzaWJpbGl0eS5pbmRpY2F0b3JzIH0sIHRoaXMucHJvcHMuY3FJdGVtc09yZGVyLm1hcCgoa2V5LCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgaXRlbSA9IHRoaXMucHJvcHMuY3FJdGVtc1trZXldO1xuICAgICAgICAgICAgY29uc3QgY3NzQ2xhc3MgPSAoaW5kZXggPT09IHRoaXMuc3RhdGUuYWN0aXZlSW5kZXgpID8gYCR7dGhpcy5wcm9wcy5iYXNlQ3NzQ2xhc3N9X19pbmRpY2F0b3IgJHt0aGlzLnByb3BzLmJhc2VDc3NDbGFzc31fX2luZGljYXRvci0tYWN0aXZlYCA6IGAke3RoaXMucHJvcHMuYmFzZUNzc0NsYXNzfV9faW5kaWNhdG9yYDtcbiAgICAgICAgICAgIGNvbnN0IGFyaWFMYWJlbEl0ZW0gPSBmb3JtYXRGbih0aGlzLnByb3BzLmFjY2Vzc2liaWxpdHkuaW5kaWNhdG9yLCBbKGluZGV4ICsgMSkudG9TdHJpbmcoKV0pO1xuICAgICAgICAgICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KFwibGlcIiwgeyBrZXk6ICdpdGVtLScgKyBpbmRleCwgb25DbGljazogKCkgPT4gdGhpcy5oYW5kbGVJbmRpY2F0b3JDbGljayhpbmRleCksIGNsYXNzTmFtZTogY3NzQ2xhc3MsIHJvbGU6IFwidGFiXCIsIFwiYXJpYS1sYWJlbFwiOiBhcmlhTGFiZWxJdGVtIH0sIGl0ZW1bXCJjcTpwYW5lbFRpdGxlXCJdKSk7XG4gICAgICAgIH0pKSk7XG4gICAgfVxuICAgIHJlbmRlckNhcm91c2VsQWN0aW9ucygpIHtcbiAgICAgICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3NOYW1lOiB0aGlzLnByb3BzLmJhc2VDc3NDbGFzcyArICdfX2FjdGlvbnMnIH0sXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIsIHsgb25DbGljazogKCkgPT4gdGhpcy5oYW5kbGVPbkJ1dHRvblByZXYoKSwgY2xhc3NOYW1lOiBgJHt0aGlzLnByb3BzLmJhc2VDc3NDbGFzc31fX2FjdGlvbiAke3RoaXMucHJvcHMuYmFzZUNzc0NsYXNzfV9fYWN0aW9uLS1wcmV2aW91c2AsIHR5cGU6IFwiYnV0dG9uXCIsIFwiYXJpYS1sYWJlbFwiOiB0aGlzLnByb3BzLmFjY2Vzc2liaWxpdHkucHJldmlvdXMgfSxcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwic3BhblwiLCB7IGNsYXNzTmFtZTogdGhpcy5wcm9wcy5iYXNlQ3NzQ2xhc3MgKyAnX19hY3Rpb24taWNvbicgfSksXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcInNwYW5cIiwgeyBjbGFzc05hbWU6IHRoaXMucHJvcHMuYmFzZUNzc0NsYXNzICsgJ19fYWN0aW9uLXRleHQnIH0sIHRoaXMucHJvcHMuYWNjZXNzaWJpbGl0eS5wcmV2aW91cykpLFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiLCB7IG9uQ2xpY2s6ICgpID0+IHRoaXMuaGFuZGxlT25CdXR0b25OZXh0KCksIGNsYXNzTmFtZTogYCR7dGhpcy5wcm9wcy5iYXNlQ3NzQ2xhc3N9X19hY3Rpb24gJHt0aGlzLnByb3BzLmJhc2VDc3NDbGFzc31fX2FjdGlvbi0tbmV4dGAsIHR5cGU6IFwiYnV0dG9uXCIsIFwiYXJpYS1sYWJlbFwiOiB0aGlzLnByb3BzLmFjY2Vzc2liaWxpdHkubmV4dCB9LFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIsIHsgY2xhc3NOYW1lOiB0aGlzLnByb3BzLmJhc2VDc3NDbGFzcyArICdfX2FjdGlvbi1pY29uJyB9KSxcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwic3BhblwiLCB7IGNsYXNzTmFtZTogdGhpcy5wcm9wcy5iYXNlQ3NzQ2xhc3MgKyAnX19hY3Rpb24tdGV4dCcgfSwgdGhpcy5wcm9wcy5hY2Nlc3NpYmlsaXR5Lm5leHQpKSxcbiAgICAgICAgICAgIHRoaXMucHJvcHMuYXV0b3BsYXkgJiZcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFJlYWN0LkZyYWdtZW50LCBudWxsLFxuICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIsIHsgY2xhc3NOYW1lOiBgJHt0aGlzLnByb3BzLmJhc2VDc3NDbGFzc31fX2FjdGlvbiAke3RoaXMucHJvcHMuYmFzZUNzc0NsYXNzfV9fYWN0aW9uLS1wYXVzZSBgICsgKCF0aGlzLnN0YXRlLmF1dG9QbGF5ID8gdGhpcy5wcm9wcy5iYXNlQ3NzQ2xhc3MgKyAnX19hY3Rpb24tLWRpc2FibGVkJyA6ICcnKSwgdHlwZTogXCJidXR0b25cIiwgXCJhcmlhLWxhYmVsXCI6IHRoaXMucHJvcHMuYWNjZXNzaWJpbGl0eS5wYXVzZSwgb25DbGljazogKCkgPT4gdGhpcy50b2dnbGVBdXRvUGxheShmYWxzZSkgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIsIHsgY2xhc3NOYW1lOiB0aGlzLnByb3BzLmJhc2VDc3NDbGFzcyArICdfX2FjdGlvbi1pY29uJyB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIsIHsgY2xhc3NOYW1lOiB0aGlzLnByb3BzLmJhc2VDc3NDbGFzcyArICdfX2FjdGlvbi10ZXh0JyB9LCB0aGlzLnByb3BzLmFjY2Vzc2liaWxpdHkucGF1c2UpKSxcbiAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiLCB7IGNsYXNzTmFtZTogYCR7dGhpcy5wcm9wcy5iYXNlQ3NzQ2xhc3N9X19hY3Rpb24gJHt0aGlzLnByb3BzLmJhc2VDc3NDbGFzc31fX2FjdGlvbi0tcGxheSBgICsgKHRoaXMuc3RhdGUuYXV0b1BsYXkgPyB0aGlzLnByb3BzLmJhc2VDc3NDbGFzcyArICdfX2FjdGlvbi0tZGlzYWJsZWQnIDogJycpLCB0eXBlOiBcImJ1dHRvblwiLCBcImFyaWEtbGFiZWxcIjogdGhpcy5wcm9wcy5hY2Nlc3NpYmlsaXR5LnBsYXksIG9uQ2xpY2s6ICgpID0+IHRoaXMudG9nZ2xlQXV0b1BsYXkodHJ1ZSkgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIsIHsgY2xhc3NOYW1lOiB0aGlzLnByb3BzLmJhc2VDc3NDbGFzcyArICdfX2FjdGlvbi1pY29uJyB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIsIHsgY2xhc3NOYW1lOiB0aGlzLnByb3BzLmJhc2VDc3NDbGFzcyArICdfX2FjdGlvbi10ZXh0JyB9LCB0aGlzLnByb3BzLmFjY2Vzc2liaWxpdHkucGxheSkpKSkpO1xuICAgIH1cbn1cbkNhcm91c2VsVjFJbXBsLmRlZmF1bHRQcm9wcyA9IHtcbiAgICBfYWxsb3dlZENvbXBvbmVudFBsYWNlaG9sZGVyTGlzdEVtcHR5TGFiZWw6ICdDYXJvdXNlbFYxJyxcbiAgICBpc0luRWRpdG9yOiBmYWxzZSxcbiAgICBhdXRvcGxheTogZmFsc2UsXG4gICAgY3FQYXRoOiAnJyxcbiAgICBjcUl0ZW1zOiB7fSxcbiAgICBjcUl0ZW1zT3JkZXI6IFtdLFxuICAgIGFjY2Vzc2liaWxpdHlMYWJlbDogJ0Nhcm91c2VsJyxcbiAgICBhY2Nlc3NpYmlsaXR5OiB7XG4gICAgICAgIHBsYXk6ICdQbGF5JyxcbiAgICAgICAgcGF1c2U6ICdQYXVzZScsXG4gICAgICAgIG5leHQ6ICdOZXh0JyxcbiAgICAgICAgcHJldmlvdXM6ICdQcmV2aW91cycsXG4gICAgICAgIHNsaWRlOiAnU2xpZGUgezB9IG9mIHsxfScsXG4gICAgICAgIGluZGljYXRvcjogJ1NsaWRlICV7MH0nLFxuICAgICAgICBpbmRpY2F0b3JzOiAnQ2hvb3NlIGEgc2xpZGUgdG8gZGlzcGxheSdcbiAgICB9XG59O1xuZXhwb3J0IGRlZmF1bHQgd2l0aFN0YW5kYXJkQmFzZUNzc0NsYXNzKHdpdGhBdXRob3JQYW5lbFN3aXRjaChDYXJvdXNlbFYxSW1wbCksIFwiY21wLWNhcm91c2VsXCIpO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pUTJGeWIzVnpaV3hXTVM1cWN5SXNJbk52ZFhKalpWSnZiM1FpT2lJaUxDSnpiM1Z5WTJWeklqcGJJa05oY205MWMyVnNWakV1ZEhONElsMHNJbTVoYldWeklqcGJYU3dpYldGd2NHbHVaM01pT2lKQlFVRkJPenM3T3pzN096czdPenM3T3p0SFFXTkhPMEZCUlVnc1QwRkJUeXhMUVVGTExFMUJRVTBzVDBGQlR5eERRVUZETzBGQlJ6RkNMRTlCUVU4c1JVRkJPRU1zY1VKQlFYRkNMRVZCUVVVc2QwSkJRWGRDTEVWQlFXOUNMRTFCUVUwc2VVTkJRWGxETEVOQlFVTTdRVUZEZUVzc1QwRkJUeXhGUVVGRExHZENRVUZuUWl4RlFVRkZMRk5CUVZNc1JVRkJReXhOUVVGTkxITkRRVUZ6UXl4RFFVRkRPMEZCUldwR0xFOUJRVThzUlVGQlF5eHRRa0ZCYlVJc1JVRkJReXhOUVVGTkxIVkNRVUYxUWl4RFFVRkRPMEZCU1RGRUxFMUJRVTBzVVVGQlVTeEhRVUZITEVOQlFVTXNTMEZCV1N4RlFVRkZMRWxCUVdFc1JVRkJSU3hGUVVGRk8wbEJRemRETEVsQlFVa3NUMEZCVHl4SFFVRkhMRXRCUVVzc1EwRkJRenRKUVVOd1FpeExRVUZMTEVsQlFVa3NRMEZCUXl4SFFVRkhMRU5CUVVNc1JVRkJSU3hEUVVGRExFZEJRVWNzU1VGQlNTeERRVUZETEUxQlFVMHNSVUZCUlN4RFFVRkRMRVZCUVVVc1JVRkJSVHRSUVVOc1F5eE5RVUZOTEZkQlFWY3NSMEZCUnl4SFFVRkhMRWRCUVVjc1EwRkJReXhIUVVGSExFZEJRVWNzUTBGQlF6dFJRVU5zUXl4UFFVRlBMRWRCUVVjc1QwRkJUeXhEUVVGRExFOUJRVThzUTBGQlF5eFhRVUZYTEVWQlFVVXNTVUZCU1N4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU03UzBGRGJrUTdTVUZEUkN4UFFVRlBMRTlCUVU4c1EwRkJRenRCUVVOdVFpeERRVUZETEVOQlFVTTdRVUUwUWtZc1RVRkJUU3hqUVVGbExGTkJRVkVzVTBGQkswTTdTVUYzUW5oRkxGbEJRVmtzUzBGQk1FSTdVVUZEYkVNc1MwRkJTeXhEUVVGRExFdEJRVXNzUTBGQlF5eERRVUZETzFGQmRrSnFRaXhoUVVGUkxFZEJRVWNzUTBGQlF5eERRVUZETzFGQmQwZGlMR3RDUVVGaExFZEJRVWNzUjBGQlJ5eEZRVUZGTzFsQlEycENMRTFCUVUwc1EwRkJReXhoUVVGaExFTkJRVU1zU1VGQlNTeERRVUZETEZGQlFWRXNRMEZCUXl4RFFVRkRPMUZCUTNoRExFTkJRVU1zUTBGQlF6dFJRV3BHUlN4WlFVRlpPMUZCUTFvc1NVRkJTU3hEUVVGRExFdEJRVXNzUjBGQlJ6dFpRVU5VTEZkQlFWY3NSVUZCUlN4RFFVRkRPMWxCUTJRc1kwRkJZeXhGUVVGRkxFdEJRVXM3V1VGRGNrSXNVVUZCVVN4RlFVRkZMRWxCUVVrc1EwRkJReXhMUVVGTExFTkJRVU1zVVVGQlVTeEpRVUZKTEVOQlFVTXNTVUZCU1N4RFFVRkRMRXRCUVVzc1EwRkJReXhWUVVGVk8xbEJRM1pFTEdkQ1FVRm5RaXhGUVVGRkxFbEJRVWtzUTBGQlF5eExRVUZMTEVOQlFVTXNaMEpCUVdkQ0xFbEJRVWtzWjBKQlFXZENPMU5CUTNCRkxFTkJRVU03VVVGRlJpeEpRVUZKTEVOQlFVTXNiMEpCUVc5Q0xFZEJRVWNzU1VGQlNTeERRVUZETEc5Q1FVRnZRaXhEUVVGRExFbEJRVWtzUTBGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUXp0UlFVTnFSU3hKUVVGSkxFTkJRVU1zYTBKQlFXdENMRWRCUVVzc1NVRkJTU3hEUVVGRExHdENRVUZyUWl4RFFVRkRMRWxCUVVrc1EwRkJReXhKUVVGSkxFTkJRVU1zUTBGQlF6dFJRVU12UkN4SlFVRkpMRU5CUVVNc2EwSkJRV3RDTEVkQlFVc3NTVUZCU1N4RFFVRkRMR3RDUVVGclFpeERRVUZETEVsQlFVa3NRMEZCUXl4SlFVRkpMRU5CUVVNc1EwRkJRenRSUVVNdlJDeEpRVUZKTEVOQlFVTXNhMEpCUVd0Q0xFZEJRVXNzU1VGQlNTeERRVUZETEd0Q1FVRnJRaXhEUVVGRExFbEJRVWtzUTBGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUXp0UlFVTXZSQ3hKUVVGSkxFTkJRVU1zYTBKQlFXdENMRWRCUVVzc1NVRkJTU3hEUVVGRExHdENRVUZyUWl4RFFVRkRMRWxCUVVrc1EwRkJReXhKUVVGSkxFTkJRVU1zUTBGQlF6dEpRVVZ1UlN4RFFVRkRPMGxCUlVRc2EwSkJRV3RDTEVOQlFVTXNVMEZCY1VNc1JVRkJSU3hUUVVGblF5eEZRVUZGTEZGQlFXTTdVVUZEZEVjc1NVRkJSeXhKUVVGSkxFTkJRVU1zUzBGQlN5eERRVUZETERCQ1FVRXdRaXhMUVVGTExGTkJRVk1zU1VGQlNTeFRRVUZUTEVOQlFVTXNNRUpCUVRCQ0xFbEJRVWtzU1VGQlNTeERRVUZETEV0QlFVc3NRMEZCUXl3d1FrRkJNRUlzUlVGQlF6dFpRVU53U1N4SlFVRkpMRU5CUVVNc1VVRkJVU3hEUVVGRExFVkJRVVVzVjBGQlZ5eEZRVUZGTEVsQlFVa3NRMEZCUXl4TFFVRkxMRU5CUVVNc01FSkJRVEJDTEVWQlFVVXNRMEZCUlN4RFFVRkRPMWxCUTNaRkxFbEJRVWtzUTBGQlF5eGpRVUZqTEVOQlFVTXNTMEZCU3l4RFFVRkRMRU5CUVVNN1UwRkRPVUk3U1VGRFRDeERRVUZETzBsQlJVUXNhVUpCUVdsQ08xRkJRMklzU1VGQlNTeERRVUZETEZGQlFWRXNSVUZCUlN4RFFVRkRPMGxCUTNCQ0xFTkJRVU03U1VGRlJDeHZRa0ZCYjBJN1VVRkRhRUlzU1VGQlJ5eEpRVUZKTEVOQlFVTXNVVUZCVVN4RlFVRkRPMWxCUTJJc1NVRkJTU3hEUVVGRExHRkJRV0VzUlVGQlJTeERRVUZETzFOQlEzaENPMGxCUTB3c1EwRkJRenRKUVVWRUxHdENRVUZyUWp0UlFVTmtMRWxCUVVjc1EwRkJReXhKUVVGSkxFTkJRVU1zUzBGQlN5eERRVUZETEdsQ1FVRnBRaXhKUVVGSkxFbEJRVWtzUTBGQlF5eExRVUZMTEVOQlFVTXNVVUZCVVN4RlFVRkRPMWxCUTNCRUxFbEJRVWtzUTBGQlF5eGhRVUZoTEVWQlFVVXNRMEZCUXp0VFFVTjRRanRKUVVOTUxFTkJRVU03U1VGRlJDeHJRa0ZCYTBJN1VVRkRaQ3hKUVVGSExFTkJRVU1zU1VGQlNTeERRVUZETEV0QlFVc3NRMEZCUXl4cFFrRkJhVUlzU1VGQlNTeEpRVUZKTEVOQlFVTXNTMEZCU3l4RFFVRkRMRkZCUVZFc1JVRkJRenRaUVVOd1JDeEpRVUZKTEVOQlFVTXNVVUZCVVN4RlFVRkZMRU5CUVVNN1UwRkRia0k3U1VGRFRDeERRVUZETzBsQlJVUXNhMEpCUVd0Q08xRkJRMlFzU1VGQlNTeERRVUZETEZOQlFWTXNSVUZCUlN4RFFVRkRPMGxCUTNKQ0xFTkJRVU03U1VGRlJDeHJRa0ZCYTBJN1VVRkRaQ3hKUVVGSkxFTkJRVU1zVTBGQlV5eEZRVUZGTEVOQlFVTTdTVUZEY2tJc1EwRkJRenRKUVVkRUxHOUNRVUZ2UWl4RFFVRkRMRXRCUVZrN1VVRkZOMElzU1VGQlJ5eEpRVUZKTEVOQlFVTXNTMEZCU3l4RFFVRkRMRmRCUVZjc1MwRkJTeXhMUVVGTExFVkJRVU03V1VGRmFFTXNTVUZCU1N4RFFVRkRMRkZCUVZFc1EwRkJRenRuUWtGRFZpeFhRVUZYTEVWQlFVVXNTMEZCU3p0aFFVTnlRaXhEUVVGRExFTkJRVU03VTBGRFRqdEpRVU5NTEVOQlFVTTdTVUZGUkN4UlFVRlJPMUZCUTBvc1NVRkJTU3hEUVVGRExGRkJRVkVzUjBGQlJ5eE5RVUZOTEVOQlFVTXNWMEZCVnl4RFFVRkRMRWRCUVVjc1JVRkJSVHRaUVVOd1F5eEpRVUZKTEVOQlFVTXNXVUZCV1N4RlFVRkZMRU5CUVVNN1VVRkRlRUlzUTBGQlF5eEZRVUZGTEVsQlFVa3NRMEZCUXl4TFFVRkxMRU5CUVVNc1MwRkJTeXhEUVVGRExFTkJRVU03U1VGRGVrSXNRMEZCUXp0SlFVVkVMRmxCUVZrN1VVRkZVaXhKUVVGSkxFTkJRVU1zU1VGQlNTeERRVUZETEV0QlFVc3NRMEZCUXl4UlFVRlJMRWxCUVVrc1NVRkJTU3hEUVVGRExFdEJRVXNzUTBGQlF5eFpRVUZaTEVOQlFVTXNUVUZCVFN4SlFVRkpMRU5CUVVNc1JVRkJSVHRaUVVNM1JDeFBRVUZQTzFOQlExWTdVVUZGUkN4SlFVRkpMRU5CUVVNc1UwRkJVeXhGUVVGRkxFTkJRVU03U1VGRGNrSXNRMEZCUXp0SlFVMUVMR05CUVdNc1EwRkJReXhOUVVGak8xRkJRM3BDTEVsQlFVa3NRMEZCUXl4UlFVRlJMRU5CUVVNN1dVRkRWaXhSUVVGUkxFVkJRVVVzVFVGQlRUdFRRVU51UWl4RFFVRkRMRU5CUVVFN1NVRkRUaXhEUVVGRE8wbEJSVVFzVTBGQlV6dFJRVVZNTEUxQlFVMHNWMEZCVnl4SFFVRkhMRWxCUVVrc1EwRkJReXhuUWtGQlowSXNSVUZCUlN4RFFVRkRPMUZCUlRWRExFbEJRVWNzVjBGQlZ5eExRVUZKTEVOQlFVTXNTVUZCU1N4RFFVRkRMRXRCUVVzc1EwRkJReXhaUVVGWkxFTkJRVU1zVFVGQlRTeEhRVUZETEVOQlFVTXNRMEZCUXl4RlFVRkRPMWxCUldwRUxFbEJRVWtzUTBGQlF5eFZRVUZWTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNN1UwRkRkRUk3WVVGQlNUdFpRVU5FTEVsQlFVa3NRMEZCUXl4VlFVRlZMRU5CUVVNc1YwRkJWeXhIUVVGSExFTkJRVU1zUTBGQlF5eERRVUZETzFOQlEzQkRPMGxCUTB3c1EwRkJRenRKUVVWRUxGTkJRVk03VVVGRFRDeE5RVUZOTEZkQlFWY3NSMEZCUnl4SlFVRkpMRU5CUVVNc1owSkJRV2RDTEVWQlFVVXNRMEZCUXp0UlFVTTFReXhKUVVGSExGZEJRVmNzUzBGQlN5eERRVUZETEVWQlFVTTdXVUZGYWtJc1NVRkJTU3hEUVVGRExGVkJRVlVzUTBGQlF5eEpRVUZKTEVOQlFVTXNTMEZCU3l4RFFVRkRMRmxCUVZrc1EwRkJReXhOUVVGTkxFZEJRVWNzUTBGQlF5eERRVUZETEVOQlFVTTdVMEZEZGtRN1lVRkJTVHRaUVVORUxFbEJRVWtzUTBGQlF5eFZRVUZWTEVOQlFVTXNWMEZCVnl4SFFVRkhMRU5CUVVNc1EwRkJReXhEUVVGRE8xTkJRM0JETzBsQlEwd3NRMEZCUXp0SlFVVkVMR2RDUVVGblFqdFJRVVZhTEU5QlFVOHNTVUZCU1N4RFFVRkRMRXRCUVVzc1EwRkJReXhYUVVGWExFTkJRVU03U1VGRGJFTXNRMEZCUXp0SlFVVkVMRlZCUVZVc1EwRkJReXhMUVVGWk8xRkJSVzVDTEVsQlFVa3NRMEZCUXl4UlFVRlJMRU5CUVVNN1dVRkRWaXhYUVVGWExFVkJRVVVzUzBGQlN6dFRRVU55UWl4RFFVRkRMRU5CUVVNN1NVRkRVQ3hEUVVGRE8wbEJTVVFzVFVGQlRUdFJRVVZHTEUxQlFVMHNUMEZCVHl4SFFVRkhMRzFDUVVGdFFpeERRVUZETEVsQlFVa3NRMEZCUXl4TFFVRkxMRU5CUVVNc1EwRkJRenRSUVVOb1JDeFBRVUZQTEVOQlEwZ3NOa0pCUVVzc1UwRkJVeXhGUVVGRkxFbEJRVWtzUTBGQlF5eExRVUZMTEVOQlFVTXNXVUZCV1N4RlFVTnNReXhKUVVGSkxFVkJRVU1zVDBGQlR5eG5Ra0ZEUVN4SlFVRkpMRU5CUVVNc1MwRkJTeXhEUVVGRExHdENRVUZyUWl3d1FrRkRjRUlzVlVGQlZUdFpRVVUxUWl4RFFVRkRMRTlCUVU4c1NVRkJTU3hKUVVGSkxFTkJRVU1zWTBGQll5eEZRVUZGTzFsQlJXNURMRWxCUVVrc1EwRkJReXh2UWtGQmIwSXNRMEZEZWtJc1EwRkRWQ3hEUVVGQk8wbEJSVXdzUTBGQlF6dEpRVVZFTEZkQlFWY3NRMEZCUXl4SlFVRm5RaXhGUVVGRkxFdEJRVms3VVVGRmRFTXNUVUZCVFN4UlFVRlJMRWRCUVVjc1MwRkJTeXhMUVVGTExFbEJRVWtzUTBGQlF5eExRVUZMTEVOQlFVTXNWMEZCVnl4RFFVRkRPMUZCUTJ4RUxHdEtRVUZyU2p0UlFVTnNTaXhOUVVGTkxFOUJRVThzUjBGQlJ5eERRVUZETEVOQlFVTXNRMEZCUXl4UlFVRlJMRWxCUVVrc1NVRkJTU3hEUVVGRExFdEJRVXNzUTBGQlF5eFZRVUZWTEVOQlFVTXNRMEZCUXp0UlFVVjBSQ3hOUVVGTkxGRkJRVkVzUjBGQlJ5eFJRVUZSTEVOQlFVTXNRMEZCUXl4RFFVRkRMRWRCUVVjc1NVRkJTU3hEUVVGRExFdEJRVXNzUTBGQlF5eFpRVUZaTEZWQlFWVXNTVUZCU1N4RFFVRkRMRXRCUVVzc1EwRkJReXhaUVVGWkxHZENRVUZuUWl4RFFVRkRMRU5CUVVNc1EwRkJReXhIUVVGSExFbEJRVWtzUTBGQlF5eExRVUZMTEVOQlFVTXNXVUZCV1N4UlFVRlJMRU5CUVVNN1VVRkROMGtzVFVGQlRTeFRRVUZUTEVkQlFVY3NVVUZCVVN4RFFVRkRMRWxCUVVrc1EwRkJReXhMUVVGTExFTkJRVU1zWVVGQllTeERRVUZETEV0QlFVc3NSVUZCUlN4RFFVRkRMRU5CUVVNc1MwRkJTeXhIUVVGSExFTkJRVU1zUTBGQlF5eERRVUZETEZGQlFWRXNSVUZCUlN4RlFVRkZMRWxCUVVrc1EwRkJReXhMUVVGTExFTkJRVU1zV1VGQldTeERRVUZETEUxQlFVMHNRMEZCUXl4UlFVRlJMRVZCUVVVc1EwRkJReXhEUVVGRExFTkJRVU03VVVGRmFFa3NUMEZCVHl4RFFVTklMRFpDUVVGTExFZEJRVWNzUlVGQlJTeFBRVUZQTEVkQlFVY3NTMEZCU3l4RlFVTmtMRk5CUVZNc1JVRkJSU3hSUVVGUkxFVkJRMjVDTEVsQlFVa3NSVUZCUXl4VlFVRlZMR2RDUVVOSUxGTkJRVk1zTkVKQlEwVXNUVUZCVFN4SlFVTnVReXhQUVVGUExFbEJRVWtzU1VGQlNTeERRVU5rTEVOQlExUXNRMEZCUVR0SlFVTk1MRU5CUVVNN1NVRkZSQ3hqUVVGak8xRkJRMVlzVDBGQlR5eERRVVZJTERaQ1FVRkxMRk5CUVZNc1JVRkJSU3hKUVVGSkxFTkJRVU1zUzBGQlN5eERRVUZETEZsQlFWa3NSMEZCUnl4WFFVRlhMRVZCUVVVc1dVRkJXU3hGUVVGRkxFZEJRVVVzUlVGQlJTeERRVUZCTEVsQlFVa3NRMEZCUXl4clFrRkJhMElzUlVGQlJTeEZRVUZGTEZsQlFWa3NSVUZCUlN4SFFVRkZMRVZCUVVVc1EwRkJRU3hKUVVGSkxFTkJRVU1zYTBKQlFXdENMRVZCUVVVN1dVRkZka2tzU1VGQlNTeERRVUZETEdWQlFXVXNRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJReXhqUVVGakxFVkJRVVVzUzBGQlN5eEZRVUZGTEVWQlFVVXNRMEZCUXl4SlFVRkpMRU5CUVVNc1YwRkJWeXhEUVVGRExHTkJRV01zUlVGQlF5eExRVUZMTEVOQlFVTXNRMEZCUXp0WlFVVTVSaXhKUVVGSkxFTkJRVU1zY1VKQlFYRkNMRVZCUVVVN1dVRkROVUlzU1VGQlNTeERRVUZETEhkQ1FVRjNRaXhGUVVGRkxFTkJRemxDTEVOQlExUXNRMEZCUVR0SlFVTk1MRU5CUVVNN1NVRkZSQ3gzUWtGQmQwSTdVVUZEY0VJc1QwRkJUeXhEUVVOSUxEUkNRVUZKTEZOQlFWTXNSVUZCUlN4SlFVRkpMRU5CUVVNc1MwRkJTeXhEUVVGRExGbEJRVmtzUjBGQlJ5eGpRVUZqTEVWQlEyNUVMRWxCUVVrc1JVRkJReXhUUVVGVExHZENRVU5HTEVsQlFVa3NRMEZCUXl4TFFVRkxMRU5CUVVNc1lVRkJZU3hEUVVGRExGVkJRVlVzU1VGSE0wTXNTVUZCU1N4RFFVRkRMRXRCUVVzc1EwRkJReXhaUVVGWkxFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTXNSMEZCUnl4RlFVRkZMRXRCUVVzc1JVRkJSU3hGUVVGRk8xbEJSWFpETEUxQlFVMHNTVUZCU1N4SFFVRnhRaXhKUVVGSkxFTkJRVU1zUzBGQlN5eERRVUZETEU5QlFVOHNRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJRenRaUVVWMlJDeE5RVUZOTEZGQlFWRXNSMEZCUnl4RFFVRkRMRXRCUVVzc1MwRkJTeXhKUVVGSkxFTkJRVU1zUzBGQlN5eERRVUZETEZkQlFWY3NRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhIUVVGSExFbEJRVWtzUTBGQlF5eExRVUZMTEVOQlFVTXNXVUZCV1N4bFFVRmxMRWxCUVVrc1EwRkJReXhMUVVGTExFTkJRVU1zV1VGQldTeHhRa0ZCY1VJc1EwRkJReXhEUVVGRExFTkJRVU1zUjBGQlJ5eEpRVUZKTEVOQlFVTXNTMEZCU3l4RFFVRkRMRmxCUVZrc1lVRkJZU3hEUVVGRE8xbEJRM1JNTEUxQlFVMHNZVUZCWVN4SFFVRkhMRkZCUVZFc1EwRkJReXhKUVVGSkxFTkJRVU1zUzBGQlN5eERRVUZETEdGQlFXRXNRMEZCUXl4VFFVRlRMRVZCUVVVc1EwRkJReXhEUVVGRExFdEJRVXNzUjBGQlJ5eERRVUZETEVOQlFVTXNRMEZCUXl4UlFVRlJMRVZCUVVVc1EwRkJReXhEUVVGRExFTkJRVU03V1VGRE4wWXNUMEZCVHl4RFFVTklMRFJDUVVOSkxFZEJRVWNzUlVGQlJTeFBRVUZQTEVkQlFVY3NTMEZCU3l4RlFVTndRaXhQUVVGUExFVkJRVVVzUjBGQlJTeEZRVUZGTEVOQlFVRXNTVUZCU1N4RFFVRkRMRzlDUVVGdlFpeERRVUZETEV0QlFVc3NRMEZCUXl4RlFVTTNReXhUUVVGVExFVkJRVVVzVVVGQlVTeEZRVU51UWl4SlFVRkpMRVZCUVVNc1MwRkJTeXhuUWtGRFJTeGhRVUZoTEVsQlFVY3NTVUZCU1N4RFFVRkRMR1ZCUVdVc1EwRkJReXhEUVVGTkxFTkJRemxFTEVOQlFVRTdVVUZEVEN4RFFVRkRMRU5CUVVNc1EwRkhUQ3hEUVVOU0xFTkJRVU03U1VGRFRpeERRVUZETzBsQlEwUXNjVUpCUVhGQ08xRkJRMnBDTEU5QlFVOHNRMEZEU0N3MlFrRkJTeXhUUVVGVExFVkJRVVVzU1VGQlNTeERRVUZETEV0QlFVc3NRMEZCUXl4WlFVRlpMRWRCUVVjc1YwRkJWenRaUVVOcVJDeG5RMEZCVVN4UFFVRlBMRVZCUVVVc1IwRkJSU3hGUVVGRkxFTkJRVUVzU1VGQlNTeERRVUZETEd0Q1FVRnJRaXhGUVVGRkxFVkJRM1JETEZOQlFWTXNSVUZCUlN4SFFVRkhMRWxCUVVrc1EwRkJReXhMUVVGTExFTkJRVU1zV1VGQldTeFpRVUZaTEVsQlFVa3NRMEZCUXl4TFFVRkxMRU5CUVVNc1dVRkJXU3h2UWtGQmIwSXNSVUZETlVZc1NVRkJTU3hGUVVGRExGRkJRVkVzWjBKQlEwUXNTVUZCU1N4RFFVRkRMRXRCUVVzc1EwRkJReXhoUVVGaExFTkJRVU1zVVVGQlVUdG5Ra0ZEYWtRc09FSkJRVTBzVTBGQlV5eEZRVUZGTEVsQlFVa3NRMEZCUXl4TFFVRkxMRU5CUVVNc1dVRkJXU3hIUVVGSExHVkJRV1VzUjBGQlV6dG5Ra0ZEYmtVc09FSkJRVTBzVTBGQlV5eEZRVUZGTEVsQlFVa3NRMEZCUXl4TFFVRkxMRU5CUVVNc1dVRkJXU3hIUVVGSExHVkJRV1VzU1VGQlJ5eEpRVUZKTEVOQlFVTXNTMEZCU3l4RFFVRkRMR0ZCUVdFc1EwRkJReXhSUVVGUkxFTkJRVkVzUTBGRGFrYzdXVUZEVkN4blEwRkJVU3hQUVVGUExFVkJRVVVzUjBGQlJTeEZRVUZGTEVOQlFVRXNTVUZCU1N4RFFVRkRMR3RDUVVGclFpeEZRVUZGTEVWQlEzUkRMRk5CUVZNc1JVRkJSU3hIUVVGSExFbEJRVWtzUTBGQlF5eExRVUZMTEVOQlFVTXNXVUZCV1N4WlFVRlpMRWxCUVVrc1EwRkJReXhMUVVGTExFTkJRVU1zV1VGQldTeG5Ra0ZCWjBJc1JVRkRlRVlzU1VGQlNTeEZRVUZETEZGQlFWRXNaMEpCUTBRc1NVRkJTU3hEUVVGRExFdEJRVXNzUTBGQlF5eGhRVUZoTEVOQlFVTXNTVUZCU1R0blFrRkROME1zT0VKQlFVMHNVMEZCVXl4RlFVRkZMRWxCUVVrc1EwRkJReXhMUVVGTExFTkJRVU1zV1VGQldTeEhRVUZITEdWQlFXVXNSMEZCVXp0blFrRkRia1VzT0VKQlFVMHNVMEZCVXl4RlFVRkZMRWxCUVVrc1EwRkJReXhMUVVGTExFTkJRVU1zV1VGQldTeEhRVUZITEdWQlFXVXNTVUZCUnl4SlFVRkpMRU5CUVVNc1MwRkJTeXhEUVVGRExHRkJRV0VzUTBGQlF5eEpRVUZKTEVOQlFWRXNRMEZETjBZN1dVRkZUQ3hKUVVGSkxFTkJRVU1zUzBGQlN5eERRVUZETEZGQlFWRTdaMEpCUTI1Q08yOUNRVU5KTEdkRFFVRlJMRk5CUVZNc1JVRkJSU3hIUVVGSExFbEJRVWtzUTBGQlF5eExRVUZMTEVOQlFVTXNXVUZCV1N4WlFVRlpMRWxCUVVrc1EwRkJReXhMUVVGTExFTkJRVU1zV1VGQldTeHJRa0ZCYTBJc1IwRkJSeXhEUVVGRExFTkJRVU1zU1VGQlNTeERRVUZETEV0QlFVc3NRMEZCUXl4UlFVRlJMRU5CUVVNc1EwRkJReXhEUVVGRExFbEJRVWtzUTBGQlF5eExRVUZMTEVOQlFVTXNXVUZCV1N4SFFVRkhMRzlDUVVGdlFpeERRVUZETEVOQlFVTXNRMEZCUXl4RlFVRkZMRU5CUVVNc1JVRkRla3NzU1VGQlNTeEZRVUZETEZGQlFWRXNaMEpCUTBRc1NVRkJTU3hEUVVGRExFdEJRVXNzUTBGQlF5eGhRVUZoTEVOQlFVTXNTMEZCU3l4RlFVTXhReXhQUVVGUExFVkJRVVVzUjBGQlJTeEZRVUZGTEVOQlFVRXNTVUZCU1N4RFFVRkRMR05CUVdNc1EwRkJReXhMUVVGTExFTkJRVU03ZDBKQlF6TkRMRGhDUVVGTkxGTkJRVk1zUlVGQlJTeEpRVUZKTEVOQlFVTXNTMEZCU3l4RFFVRkRMRmxCUVZrc1IwRkJSeXhsUVVGbExFZEJRVk03ZDBKQlEyNUZMRGhDUVVGTkxGTkJRVk1zUlVGQlJTeEpRVUZKTEVOQlFVTXNTMEZCU3l4RFFVRkRMRmxCUVZrc1IwRkJSeXhsUVVGbExFbEJRVWNzU1VGQlNTeERRVUZETEV0QlFVc3NRMEZCUXl4aFFVRmhMRU5CUVVNc1MwRkJTeXhEUVVGUkxFTkJRemxHTzI5Q1FVTlVMR2REUVVGUkxGTkJRVk1zUlVGQlJTeEhRVUZITEVsQlFVa3NRMEZCUXl4TFFVRkxMRU5CUVVNc1dVRkJXU3haUVVGWkxFbEJRVWtzUTBGQlF5eExRVUZMTEVOQlFVTXNXVUZCV1N4cFFrRkJhVUlzUjBGQlJ5eERRVUZETEVsQlFVa3NRMEZCUXl4TFFVRkxMRU5CUVVNc1VVRkJVU3hEUVVGRExFTkJRVU1zUTBGQlF5eEpRVUZKTEVOQlFVTXNTMEZCU3l4RFFVRkRMRmxCUVZrc1IwRkJSeXh2UWtGQmIwSXNRMEZCUXl4RFFVRkRMRU5CUVVNc1JVRkJSU3hEUVVGRExFVkJRM1pMTEVsQlFVa3NSVUZCUXl4UlFVRlJMR2RDUVVORUxFbEJRVWtzUTBGQlF5eExRVUZMTEVOQlFVTXNZVUZCWVN4RFFVRkRMRWxCUVVrc1JVRkRla01zVDBGQlR5eEZRVUZGTEVkQlFVVXNSVUZCUlN4RFFVRkJMRWxCUVVrc1EwRkJReXhqUVVGakxFTkJRVU1zU1VGQlNTeERRVUZETzNkQ1FVVXhReXc0UWtGQlRTeFRRVUZUTEVWQlFVVXNTVUZCU1N4RFFVRkRMRXRCUVVzc1EwRkJReXhaUVVGWkxFZEJRVWNzWlVGQlpTeEhRVUZUTzNkQ1FVTnVSU3c0UWtGQlRTeFRRVUZUTEVWQlFVVXNTVUZCU1N4RFFVRkRMRXRCUVVzc1EwRkJReXhaUVVGWkxFZEJRVWNzWlVGQlpTeEpRVUZITEVsQlFVa3NRMEZCUXl4TFFVRkxMRU5CUVVNc1lVRkJZU3hEUVVGRExFbEJRVWtzUTBGQlVTeERRVU0zUml4RFFVTldMRU5CUjB3c1EwRkRWQ3hEUVVGQk8wbEJRMHdzUTBGQlF6czdRVUY0VVUwc01rSkJRVmtzUjBGQlJ6dEpRVU5zUWl3d1EwRkJNRU1zUlVGQlJTeFpRVUZaTzBsQlEzaEVMRlZCUVZVc1JVRkJSU3hMUVVGTE8wbEJRMnBDTEZGQlFWRXNSVUZCUlN4TFFVRkxPMGxCUTJZc1RVRkJUU3hGUVVGRkxFVkJRVVU3U1VGRFZpeFBRVUZQTEVWQlFVVXNSVUZCUlR0SlFVTllMRmxCUVZrc1JVRkJSU3hGUVVGRk8wbEJRMmhDTEd0Q1FVRnJRaXhGUVVGRkxGVkJRVlU3U1VGRE9VSXNZVUZCWVN4RlFVRkZPMUZCUTFnc1NVRkJTU3hGUVVGRkxFMUJRVTA3VVVGRFdpeExRVUZMTEVWQlFVVXNUMEZCVHp0UlFVTmtMRWxCUVVrc1JVRkJSU3hOUVVGTk8xRkJRMW9zVVVGQlVTeEZRVUZGTEZWQlFWVTdVVUZEY0VJc1MwRkJTeXhGUVVGRkxHdENRVUZyUWp0UlFVTjZRaXhUUVVGVExFVkJRVVVzV1VGQldUdFJRVU4yUWl4VlFVRlZMRVZCUVVVc01rSkJRVEpDTzB0QlF6RkRPME5CUTBvc1EwRkJRenRCUVRKUVRpeGxRVUZsTEhkQ1FVRjNRaXhEUVVGRExIRkNRVUZ4UWl4RFFVRkRMR05CUVdNc1EwRkJReXhGUVVGRkxHTkJRV01zUTBGQlF5eERRVUZESWl3aWMyOTFjbU5sYzBOdmJuUmxiblFpT2xzaUx5cGNiaUFxSUNCRGIzQjVjbWxuYUhRZ01qQXlNQ0JCWkc5aVpWeHVJQ3BjYmlBcUlDQk1hV05sYm5ObFpDQjFibVJsY2lCMGFHVWdRWEJoWTJobElFeHBZMlZ1YzJVc0lGWmxjbk5wYjI0Z01pNHdJQ2gwYUdVZ1hDSk1hV05sYm5ObFhDSXBPMXh1SUNvZ0lIbHZkU0J0WVhrZ2JtOTBJSFZ6WlNCMGFHbHpJR1pwYkdVZ1pYaGpaWEIwSUdsdUlHTnZiWEJzYVdGdVkyVWdkMmwwYUNCMGFHVWdUR2xqWlc1elpTNWNiaUFxSUNCWmIzVWdiV0Y1SUc5aWRHRnBiaUJoSUdOdmNIa2diMllnZEdobElFeHBZMlZ1YzJVZ1lYUmNiaUFxWEc0Z0tpQWdJQ0FnSUdoMGRIQTZMeTkzZDNjdVlYQmhZMmhsTG05eVp5OXNhV05sYm5ObGN5OU1TVU5GVGxORkxUSXVNRnh1SUNwY2JpQXFJQ0JWYm14bGMzTWdjbVZ4ZFdseVpXUWdZbmtnWVhCd2JHbGpZV0pzWlNCc1lYY2diM0lnWVdkeVpXVmtJSFJ2SUdsdUlIZHlhWFJwYm1jc0lITnZablIzWVhKbFhHNGdLaUFnWkdsemRISnBZblYwWldRZ2RXNWtaWElnZEdobElFeHBZMlZ1YzJVZ2FYTWdaR2x6ZEhKcFluVjBaV1FnYjI0Z1lXNGdYQ0pCVXlCSlUxd2lJRUpCVTBsVExGeHVJQ29nSUZkSlZFaFBWVlFnVjBGU1VrRk9WRWxGVXlCUFVpQkRUMDVFU1ZSSlQwNVRJRTlHSUVGT1dTQkxTVTVFTENCbGFYUm9aWElnWlhod2NtVnpjeUJ2Y2lCcGJYQnNhV1ZrTGx4dUlDb2dJRk5sWlNCMGFHVWdUR2xqWlc1elpTQm1iM0lnZEdobElITndaV05wWm1saklHeGhibWQxWVdkbElHZHZkbVZ5Ym1sdVp5QndaWEp0YVhOemFXOXVjeUJoYm1SY2JpQXFJQ0JzYVcxcGRHRjBhVzl1Y3lCMWJtUmxjaUIwYUdVZ1RHbGpaVzV6WlM1Y2JpQXFMMXh1WEc1cGJYQnZjblFnVW1WaFkzUWdabkp2YlNBbmNtVmhZM1FuTzF4dVhHNWNibWx0Y0c5eWRDQjdRMjl5WlVOdmJuUmhhVzVsY2xCeWIzQmxjblJwWlhNc0lFTnZjbVZEYjI1MFlXbHVaWEpUZEdGMFpTd2dkMmwwYUVGMWRHaHZjbEJoYm1Wc1UzZHBkR05vTENCM2FYUm9VM1JoYm1SaGNtUkNZWE5sUTNOelEyeGhjM01zSUVOdmNtVkRiMjUwWVdsdVpYSkpkR1Z0ZlNCbWNtOXRJRndpTGk0dkxpNHZMaTR2UVdKemRISmhZM1JEYjNKbFEyOXVkR0ZwYm1WeVEyOXRjRzl1Wlc1MFhDSTdYRzVwYlhCdmNuUWdlME52YlhCdmJtVnVkRTFoY0hCcGJtY3NJRU52Ym5SaGFXNWxjbjBnWm5KdmJTQW5RR0ZrYjJKbEwyRmxiUzF5WldGamRDMWxaR2wwWVdKc1pTMWpiMjF3YjI1bGJuUnpKenRjYmx4dWFXMXdiM0owSUh0RFlYSnZkWE5sYkZZeFNYTkZiWEIwZVVadWZTQm1jbTl0SUZ3aUxpOURZWEp2ZFhObGJGWXhTWE5GYlhCMGVVWnVYQ0k3WEc1cGJYQnZjblFnZTFSaFluTldNVkJ5YjNCbGNuUnBaWE1zSUZSaFluTldNVk4wWVhSbGZTQm1jbTl0SUZ3aUxpNHZMaTR2TGk1Y0lqdGNibHh1WEc1amIyNXpkQ0JtYjNKdFlYUkdiaUE5SUNoMllXeDFaVHB6ZEhKcGJtY3NJR0Z5WjNNNmMzUnlhVzVuVzEwcElEMCtJSHRjYmlBZ0lDQnNaWFFnWTI5dWRHVnVkQ0E5SUhaaGJIVmxPMXh1SUNBZ0lHWnZjaUFvYkdWMElHa2dQU0F3T3lCcElEd2dZWEpuY3k1c1pXNW5kR2c3SUdrckt5a2dlMXh1SUNBZ0lDQWdJQ0JqYjI1emRDQnlaWEJzWVdObGJXVnVkQ0E5SUNkN0p5QXJJR2tnS3lBbmZTYzdYRzRnSUNBZ0lDQWdJR052Ym5SbGJuUWdQU0JqYjI1MFpXNTBMbkpsY0d4aFkyVW9jbVZ3YkdGalpXMWxiblFzSUdGeVozTmJhVjBwTzF4dUlDQWdJSDFjYmlBZ0lDQnlaWFIxY200Z1kyOXVkR1Z1ZER0Y2JuMDdYRzVjYmx4dVhHNWxlSEJ2Y25RZ2FXNTBaWEptWVdObElFTmhjbTkxYzJWc1ZqRlFjbTl3WlhKMGFXVnpJR1Y0ZEdWdVpITWdRMjl5WlVOdmJuUmhhVzVsY2xCeWIzQmxjblJwWlhON1hHNGdJQ0FnWVhWMGIzQnNZWGs2SUdKdmIyeGxZVzQ3WEc0Z0lDQWdZWFYwYjNCaGRYTmxSR2x6WVdKc1pXUTZJR0p2YjJ4bFlXNDdYRzRnSUNBZ1lXTmpaWE56YVdKcGJHbDBlVXhoWW1Wc09uTjBjbWx1Wnp0Y2JpQWdJQ0JoWTJObGMzTnBZbWxzYVhSNU9pQkRZWEp2ZFhObGJGWXhRV05qWlhOemFXSnBiR2wwZVZCeWIzQmxjblJwWlhNN1hHNGdJQ0FnWkdWc1lYazZJRzUxYldKbGNqdGNiaUFnSUNCamNVbDBaVzF6T2lCN0lGdHJaWGs2SUhOMGNtbHVaMTA2SUVOdmNtVkRiMjUwWVdsdVpYSkpkR1Z0SUgwN1hHNTlYRzVjYm1WNGNHOXlkQ0JwYm5SbGNtWmhZMlVnUTJGeWIzVnpaV3hXTVVGalkyVnpjMmxpYVd4cGRIbFFjbTl3WlhKMGFXVnplMXh1SUNBZ0lIQnNZWGs2SUhOMGNtbHVaenRjYmlBZ0lDQndZWFZ6WlRvZ2MzUnlhVzVuTzF4dUlDQWdJRzVsZUhRNklITjBjbWx1Wnp0Y2JpQWdJQ0J3Y21WMmFXOTFjem9nYzNSeWFXNW5PMXh1SUNBZ0lITnNhV1JsT2lCemRISnBibWM3WEc0Z0lDQWdhVzVrYVdOaGRHOXlPaUJ6ZEhKcGJtYzdYRzRnSUNBZ2FXNWthV05oZEc5eWN6b2djM1J5YVc1bk8xeHVmVnh1Wlhod2IzSjBJR2x1ZEdWeVptRmpaU0JEWVhKdmRYTmxiRll4VTNSaGRHVWdaWGgwWlc1a2N5QkRiM0psUTI5dWRHRnBibVZ5VTNSaGRHVjdYRzRnSUNBZ1lXTjBhWFpsU1c1a1pYZzZJRzUxYldKbGNpeGNiaUFnSUNCcGMwMXZkWE5sUlc1MFpYSmxaRG9nWW05dmJHVmhiaXhjYmlBZ0lDQmhkWFJ2VUd4aGVUb2dZbTl2YkdWaGJpeGNibjFjYmx4dVkyeGhjM01nUTJGeWIzVnpaV3hXTVVsdGNHd2daWGgwWlc1a2N5QkRiMjUwWVdsdVpYSThRMkZ5YjNWelpXeFdNVkJ5YjNCbGNuUnBaWE1zUTJGeWIzVnpaV3hXTVZOMFlYUmxQaUI3WEc1Y2JpQWdJQ0JwYm5SbGNuWmhiQ0E5SURBN1hHNWNibHh1SUNBZ0lITjBZWFJwWXlCa1pXWmhkV3gwVUhKdmNITWdQU0I3WEc0Z0lDQWdJQ0FnSUY5aGJHeHZkMlZrUTI5dGNHOXVaVzUwVUd4aFkyVm9iMnhrWlhKTWFYTjBSVzF3ZEhsTVlXSmxiRG9nSjBOaGNtOTFjMlZzVmpFbkxGeHVJQ0FnSUNBZ0lDQnBjMGx1UldScGRHOXlPaUJtWVd4elpTeGNiaUFnSUNBZ0lDQWdZWFYwYjNCc1lYazZJR1poYkhObExGeHVJQ0FnSUNBZ0lDQmpjVkJoZEdnNklDY25MRnh1SUNBZ0lDQWdJQ0JqY1VsMFpXMXpPaUI3ZlN4Y2JpQWdJQ0FnSUNBZ1kzRkpkR1Z0YzA5eVpHVnlPaUJiWFN4Y2JpQWdJQ0FnSUNBZ1lXTmpaWE56YVdKcGJHbDBlVXhoWW1Wc09pQW5RMkZ5YjNWelpXd25MRnh1SUNBZ0lDQWdJQ0JoWTJObGMzTnBZbWxzYVhSNU9pQjdYRzRnSUNBZ0lDQWdJQ0FnSUNCd2JHRjVPaUFuVUd4aGVTY3NYRzRnSUNBZ0lDQWdJQ0FnSUNCd1lYVnpaVG9nSjFCaGRYTmxKeXhjYmlBZ0lDQWdJQ0FnSUNBZ0lHNWxlSFE2SUNkT1pYaDBKeXhjYmlBZ0lDQWdJQ0FnSUNBZ0lIQnlaWFpwYjNWek9pQW5VSEpsZG1sdmRYTW5MRnh1SUNBZ0lDQWdJQ0FnSUNBZ2MyeHBaR1U2SUNkVGJHbGtaU0I3TUgwZ2IyWWdlekY5Snl4Y2JpQWdJQ0FnSUNBZ0lDQWdJR2x1WkdsallYUnZjam9nSjFOc2FXUmxJQ1Y3TUgwbkxGeHVJQ0FnSUNBZ0lDQWdJQ0FnYVc1a2FXTmhkRzl5Y3pvZ0owTm9iMjl6WlNCaElITnNhV1JsSUhSdklHUnBjM0JzWVhrblhHNGdJQ0FnSUNBZ0lIMWNiaUFnSUNCOU8xeHVYRzRnSUNBZ1kyOXVjM1J5ZFdOMGIzSW9jSEp2Y0hNNlEyRnliM1Z6Wld4V01WQnliM0JsY25ScFpYTXBJSHRjYmlBZ0lDQWdJQ0FnYzNWd1pYSW9jSEp2Y0hNcE8xeHVYRzRnSUNBZ0lDQWdJQzh2UUhSekxXbG5ibTl5WlZ4dUlDQWdJQ0FnSUNCMGFHbHpMbk4wWVhSbElEMGdlMXh1SUNBZ0lDQWdJQ0FnSUNBZ1lXTjBhWFpsU1c1a1pYZzZJREFzWEc0Z0lDQWdJQ0FnSUNBZ0lDQnBjMDF2ZFhObFJXNTBaWEpsWkRvZ1ptRnNjMlVzWEc0Z0lDQWdJQ0FnSUNBZ0lDQmhkWFJ2VUd4aGVUb2dkR2hwY3k1d2NtOXdjeTVoZFhSdmNHeGhlU0FtSmlBaGRHaHBjeTV3Y205d2N5NXBjMGx1UldScGRHOXlMRnh1SUNBZ0lDQWdJQ0FnSUNBZ1kyOXRjRzl1Wlc1MFRXRndjR2x1WnpvZ2RHaHBjeTV3Y205d2N5NWpiMjF3YjI1bGJuUk5ZWEJ3YVc1bklIeDhJRU52YlhCdmJtVnVkRTFoY0hCcGJtZGNiaUFnSUNBZ0lDQWdmVHRjYmx4dUlDQWdJQ0FnSUNCMGFHbHpMbWhoYm1Sc1pVbHVaR2xqWVhSdmNrTnNhV05ySUQwZ2RHaHBjeTVvWVc1a2JHVkpibVJwWTJGMGIzSkRiR2xqYXk1aWFXNWtLSFJvYVhNcE8xeHVJQ0FnSUNBZ0lDQjBhR2x6TG1oaGJtUnNaVTl1UW5WMGRHOXVVSEpsZGlBZ0lEMGdkR2hwY3k1b1lXNWtiR1ZQYmtKMWRIUnZibEJ5WlhZdVltbHVaQ2gwYUdsektUdGNiaUFnSUNBZ0lDQWdkR2hwY3k1b1lXNWtiR1ZQYmtKMWRIUnZiazVsZUhRZ0lDQTlJSFJvYVhNdWFHRnVaR3hsVDI1Q2RYUjBiMjVPWlhoMExtSnBibVFvZEdocGN5azdYRzRnSUNBZ0lDQWdJSFJvYVhNdWFHRnVaR3hsVDI1TmIzVnpaVVZ1ZEdWeUlDQWdQU0IwYUdsekxtaGhibVJzWlU5dVRXOTFjMlZGYm5SbGNpNWlhVzVrS0hSb2FYTXBPMXh1SUNBZ0lDQWdJQ0IwYUdsekxtaGhibVJzWlU5dVRXOTFjMlZNWldGMlpTQWdJRDBnZEdocGN5NW9ZVzVrYkdWUGJrMXZkWE5sVEdWaGRtVXVZbWx1WkNoMGFHbHpLVHRjYmx4dUlDQWdJSDFjYmx4dUlDQWdJR052YlhCdmJtVnVkRVJwWkZWd1pHRjBaU2h3Y21WMlVISnZjSE02SUZKbFlXUnZibXg1UEZSaFluTldNVkJ5YjNCbGNuUnBaWE0rTENCd2NtVjJVM1JoZEdVNklGSmxZV1J2Ym14NVBGUmhZbk5XTVZOMFlYUmxQaXdnYzI1aGNITm9iM1EvT2lCaGJua3BPaUIyYjJsa0lIdGNiaUFnSUNBZ0lDQWdhV1lvZEdocGN5NXdjbTl3Y3k1aFkzUnBkbVZKYm1SbGVFWnliMjFCZFhSb2IzSlFZVzVsYkNBaFBUMGdkVzVrWldacGJtVmtJQ1ltSUhCeVpYWlFjbTl3Y3k1aFkzUnBkbVZKYm1SbGVFWnliMjFCZFhSb2IzSlFZVzVsYkNBaFBTQjBhR2x6TG5CeWIzQnpMbUZqZEdsMlpVbHVaR1Y0Um5KdmJVRjFkR2h2Y2xCaGJtVnNLWHRjYmlBZ0lDQWdJQ0FnSUNBZ0lIUm9hWE11YzJWMFUzUmhkR1VvZXlCaFkzUnBkbVZKYm1SbGVEb2dkR2hwY3k1d2NtOXdjeTVoWTNScGRtVkpibVJsZUVaeWIyMUJkWFJvYjNKUVlXNWxiQ0I5SUNrN1hHNGdJQ0FnSUNBZ0lDQWdJQ0IwYUdsekxuUnZaMmRzWlVGMWRHOVFiR0Y1S0daaGJITmxLVHRjYmlBZ0lDQWdJQ0FnZlZ4dUlDQWdJSDFjYmlBZ0lDQmNiaUFnSUNCamIyMXdiMjVsYm5SRWFXUk5iM1Z1ZENncGUxeHVJQ0FnSUNBZ0lDQjBhR2x6TG1GMWRHOVFiR0Y1S0NrN1hHNGdJQ0FnZlZ4dVhHNGdJQ0FnWTI5dGNHOXVaVzUwVjJsc2JGVnViVzkxYm5Rb0tYdGNiaUFnSUNBZ0lDQWdhV1lvZEdocGN5NXBiblJsY25aaGJDbDdYRzRnSUNBZ0lDQWdJQ0FnSUNCMGFHbHpMbU5zWldGeVFYVjBiMUJzWVhrb0tUdGNiaUFnSUNBZ0lDQWdmVnh1SUNBZ0lIMWNibHh1SUNBZ0lHaGhibVJzWlU5dVRXOTFjMlZGYm5SbGNpZ3BlMXh1SUNBZ0lDQWdJQ0JwWmlnaGRHaHBjeTV3Y205d2N5NWhkWFJ2Y0dGMWMyVkVhWE5oWW14bFpDQW1KaUIwYUdsekxuQnliM0J6TG1GMWRHOXdiR0Y1S1h0Y2JpQWdJQ0FnSUNBZ0lDQWdJSFJvYVhNdVkyeGxZWEpCZFhSdlVHeGhlU2dwTzF4dUlDQWdJQ0FnSUNCOVhHNGdJQ0FnZlZ4dVhHNGdJQ0FnYUdGdVpHeGxUMjVOYjNWelpVeGxZWFpsS0NsN1hHNGdJQ0FnSUNBZ0lHbG1LQ0YwYUdsekxuQnliM0J6TG1GMWRHOXdZWFZ6WlVScGMyRmliR1ZrSUNZbUlIUm9hWE11Y0hKdmNITXVZWFYwYjNCc1lYa3BlMXh1SUNBZ0lDQWdJQ0FnSUNBZ2RHaHBjeTVoZFhSdlVHeGhlU2dwTzF4dUlDQWdJQ0FnSUNCOVhHNGdJQ0FnZlZ4dVhHNGdJQ0FnYUdGdVpHeGxUMjVDZFhSMGIyNVFjbVYyS0NsN1hHNGdJQ0FnSUNBZ0lIUm9hWE11Y0hKbGRsTnNhV1JsS0NrN1hHNGdJQ0FnZlZ4dVhHNGdJQ0FnYUdGdVpHeGxUMjVDZFhSMGIyNU9aWGgwS0NsN1hHNGdJQ0FnSUNBZ0lIUm9hWE11Ym1WNGRGTnNhV1JsS0NrN1hHNGdJQ0FnZlZ4dVhHNWNiaUFnSUNCb1lXNWtiR1ZKYm1ScFkyRjBiM0pEYkdsamF5aHBibVJsZURwdWRXMWlaWElwZTF4dVhHNGdJQ0FnSUNBZ0lHbG1LSFJvYVhNdWMzUmhkR1V1WVdOMGFYWmxTVzVrWlhnZ0lUMDlJR2x1WkdWNEtYdGNibHh1SUNBZ0lDQWdJQ0FnSUNBZ2RHaHBjeTV6WlhSVGRHRjBaU2g3WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnWVdOMGFYWmxTVzVrWlhnNklHbHVaR1Y0WEc0Z0lDQWdJQ0FnSUNBZ0lDQjlLVHRjYmlBZ0lDQWdJQ0FnZlZ4dUlDQWdJSDFjYmx4dUlDQWdJR0YxZEc5UWJHRjVLQ2w3WEc0Z0lDQWdJQ0FnSUhSb2FYTXVhVzUwWlhKMllXd2dQU0IzYVc1a2IzY3VjMlYwU1c1MFpYSjJZV3dvS0NrZ1BUNGdlMXh1SUNBZ0lDQWdJQ0FnSUNBZ2RHaHBjeTVoZFhSdlVHeGhlVlJwWTJzb0tUdGNiaUFnSUNBZ0lDQWdmU3dnZEdocGN5NXdjbTl3Y3k1a1pXeGhlU2s3WEc0Z0lDQWdmVnh1WEc0Z0lDQWdZWFYwYjFCc1lYbFVhV05yS0NrZ2UxeHVYRzRnSUNBZ0lDQWdJR2xtSUNnaGRHaHBjeTV6ZEdGMFpTNWhkWFJ2VUd4aGVTQjhmQ0IwYUdsekxuQnliM0J6TG1OeFNYUmxiWE5QY21SbGNpNXNaVzVuZEdnZ1BEMGdNU2tnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdjbVYwZFhKdU8xeHVJQ0FnSUNBZ0lDQjlYRzVjYmlBZ0lDQWdJQ0FnZEdocGN5NXVaWGgwVTJ4cFpHVW9LVHRjYmlBZ0lDQjlYRzVjYmlBZ0lDQmpiR1ZoY2tGMWRHOVFiR0Y1SUQwZ0tDa2dQVDRnZTF4dUlDQWdJQ0FnSUNCM2FXNWtiM2N1WTJ4bFlYSkpiblJsY25aaGJDaDBhR2x6TG1sdWRHVnlkbUZzS1R0Y2JpQWdJQ0I5TzF4dVhHNGdJQ0FnZEc5bloyeGxRWFYwYjFCc1lYa29kRzluWjJ4bE9tSnZiMnhsWVc0cGUxeHVJQ0FnSUNBZ0lDQjBhR2x6TG5ObGRGTjBZWFJsS0h0Y2JpQWdJQ0FnSUNBZ0lDQWdJR0YxZEc5UWJHRjVPaUIwYjJkbmJHVmNiaUFnSUNBZ0lDQWdmU2xjYmlBZ0lDQjlYRzVjYmlBZ0lDQnVaWGgwVTJ4cFpHVW9LWHRjYmx4dUlDQWdJQ0FnSUNCamIyNXpkQ0JoWTNScGRtVkpibVJsZUNBOUlIUm9hWE11WDE5blpYUkJZM1JwZG1WSmJtUmxlQ2dwTzF4dVhHNGdJQ0FnSUNBZ0lHbG1LR0ZqZEdsMlpVbHVaR1Y0UFQwOUlDaDBhR2x6TG5CeWIzQnpMbU54U1hSbGJYTlBjbVJsY2k1c1pXNW5kR2d0TVNrcGUxeHVYRzRnSUNBZ0lDQWdJQ0FnSUNCMGFHbHpMbDlmYzJWMFUyeHBaR1VvTUNrN1hHNGdJQ0FnSUNBZ0lIMWxiSE5sZTF4dUlDQWdJQ0FnSUNBZ0lDQWdkR2hwY3k1ZlgzTmxkRk5zYVdSbEtHRmpkR2wyWlVsdVpHVjRJQ3NnTVNrN1hHNGdJQ0FnSUNBZ0lIMWNiaUFnSUNCOVhHNWNiaUFnSUNCd2NtVjJVMnhwWkdVb0tYdGNiaUFnSUNBZ0lDQWdZMjl1YzNRZ1lXTjBhWFpsU1c1a1pYZ2dQU0IwYUdsekxsOWZaMlYwUVdOMGFYWmxTVzVrWlhnb0tUdGNiaUFnSUNBZ0lDQWdhV1lvWVdOMGFYWmxTVzVrWlhnZ1BUMDlJREFwZTF4dVhHNGdJQ0FnSUNBZ0lDQWdJQ0IwYUdsekxsOWZjMlYwVTJ4cFpHVW9kR2hwY3k1d2NtOXdjeTVqY1VsMFpXMXpUM0prWlhJdWJHVnVaM1JvSUMwZ01TazdYRzRnSUNBZ0lDQWdJSDFsYkhObGUxeHVJQ0FnSUNBZ0lDQWdJQ0FnZEdocGN5NWZYM05sZEZOc2FXUmxLR0ZqZEdsMlpVbHVaR1Y0SUMwZ01TazdYRzRnSUNBZ0lDQWdJSDFjYmlBZ0lDQjlYRzVjYmlBZ0lDQmZYMmRsZEVGamRHbDJaVWx1WkdWNEtDbDdYRzVjYmlBZ0lDQWdJQ0FnY21WMGRYSnVJSFJvYVhNdWMzUmhkR1V1WVdOMGFYWmxTVzVrWlhnN1hHNGdJQ0FnZlZ4dVhHNGdJQ0FnWDE5elpYUlRiR2xrWlNocGJtUmxlRHB1ZFcxaVpYSXBlMXh1WEc0Z0lDQWdJQ0FnSUhSb2FYTXVjMlYwVTNSaGRHVW9lMXh1SUNBZ0lDQWdJQ0FnSUNBZ1lXTjBhWFpsU1c1a1pYZzZJR2x1WkdWNFhHNGdJQ0FnSUNBZ0lIMHBPMXh1SUNBZ0lIMWNibHh1WEc1Y2JpQWdJQ0J5Wlc1a1pYSW9LU0I3WEc1Y2JpQWdJQ0FnSUNBZ1kyOXVjM1FnYVhORmJYQjBlU0E5SUVOaGNtOTFjMlZzVmpGSmMwVnRjSFI1Um00b2RHaHBjeTV3Y205d2N5azdYRzRnSUNBZ0lDQWdJSEpsZEhWeWJpQW9YRzRnSUNBZ0lDQWdJQ0FnSUNBOFpHbDJJR05zWVhOelRtRnRaVDE3ZEdocGN5NXdjbTl3Y3k1aVlYTmxRM056UTJ4aGMzTjlYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJSEp2YkdVOVhDSm5jbTkxY0Z3aVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lHRnlhV0V0YkdGaVpXdzllM1JvYVhNdWNISnZjSE11WVdOalpYTnphV0pwYkdsMGVVeGhZbVZzZlZ4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCaGNtbGhMWEp2YkdWa1pYTmpjbWx3ZEdsdmJqMWNJbU5oY205MWMyVnNYQ0krWEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWhhWE5GYlhCMGVTQW1KaUIwYUdsekxuSmxibVJsY2tOaGNtOTFjMlZzS0NsY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCOVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2V5QjBhR2x6TG5Cc1lXTmxhRzlzWkdWeVEyOXRjRzl1Wlc1MElIMWNiaUFnSUNBZ0lDQWdJQ0FnSUR3dlpHbDJQbHh1SUNBZ0lDQWdJQ0FwWEc1Y2JpQWdJQ0I5WEc1Y2JpQWdJQ0JrYVhOd2JHRjVTWFJsYlNocGRHVnRPa3BUV0M1RmJHVnRaVzUwTENCcGJtUmxlRHB1ZFcxaVpYSXBlMXh1WEc0Z0lDQWdJQ0FnSUdOdmJuTjBJR2x6UVdOMGFYWmxJRDBnYVc1a1pYZ2dQVDA5SUhSb2FYTXVjM1JoZEdVdVlXTjBhWFpsU1c1a1pYZzdYRzRnSUNBZ0lDQWdJQzh2ZDJVZ1pHbHpjR3hoZVNCMGFHVWdhWFJsYlNCcFppQmhZM1JwZG1VZ2FYTWdkSEoxWlN3Z2IzSWdhV1lnZDJVZ1lYSmxJR2x1SUhSb1pTQmhkWFJvYjNJZ2JXOWtaUzRnZDJVZ2JtVmxaQ0IwYnlCaGJIZGhlWE1nWkdsemNHeGhlU0IwYUdVZ2FYUmxiU0JtYjNJZ2RHaGxJR0YxZEdodmNpQnRiMlJsSUhSdklIZHZjbXNnY0hKdmNHVnliSGt1WEc0Z0lDQWdJQ0FnSUdOdmJuTjBJR1JwYzNCc1lYa2dQU0FoSVNocGMwRmpkR2wyWlNCOGZDQjBhR2x6TG5CeWIzQnpMbWx6U1c1RlpHbDBiM0lwTzF4dVhHNGdJQ0FnSUNBZ0lHTnZibk4wSUdOemMwTnNZWE56SUQwZ2FYTkJZM1JwZG1VZ1B5QmdKSHQwYUdsekxuQnliM0J6TG1KaGMyVkRjM05EYkdGemMzMWZYMmwwWlcwZ0pIdDBhR2x6TG5CeWIzQnpMbUpoYzJWRGMzTkRiR0Z6YzMxZlgybDBaVzB0TFdGamRHbDJaV0FnT2lCZ0pIdDBhR2x6TG5CeWIzQnpMbUpoYzJWRGMzTkRiR0Z6YzMxZlgybDBaVzFnTzF4dUlDQWdJQ0FnSUNCamIyNXpkQ0JoY21saFRHRmlaV3dnUFNCbWIzSnRZWFJHYmloMGFHbHpMbkJ5YjNCekxtRmpZMlZ6YzJsaWFXeHBkSGt1YzJ4cFpHVXNJRnNvYVc1a1pYZ2dLeUF4S1M1MGIxTjBjbWx1WnlncExDQjBhR2x6TG5CeWIzQnpMbU54U1hSbGJYTlBjbVJsY2k1c1pXNW5kR2d1ZEc5VGRISnBibWNvS1YwcE8xeHVYRzRnSUNBZ0lDQWdJSEpsZEhWeWJpQW9YRzRnSUNBZ0lDQWdJQ0FnSUNBOFpHbDJJR3RsZVQxN0oybDBaVzB0SnlBcklHbHVaR1Y0ZlZ4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0JqYkdGemMwNWhiV1U5ZTJOemMwTnNZWE56ZlZ4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0J5YjJ4bFBWd2lkR0ZpY0dGdVpXeGNJbHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQmhjbWxoTFd4aFltVnNQWHRoY21saFRHRmlaV3g5WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJR1JoZEdFdFkyMXdMV2h2YjJzdFkyRnliM1Z6Wld3OVhDSnBkR1Z0WENJK1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2UyUnBjM0JzWVhrZ0ppWWdhWFJsYlgxY2JpQWdJQ0FnSUNBZ0lDQWdJRHd2WkdsMlBseHVJQ0FnSUNBZ0lDQXBYRzRnSUNBZ2ZWeHVYRzRnSUNBZ2NtVnVaR1Z5UTJGeWIzVnpaV3dvS1h0Y2JpQWdJQ0FnSUNBZ2NtVjBkWEp1SUNoY2JseHVJQ0FnSUNBZ0lDQWdJQ0FnUEdScGRpQmpiR0Z6YzA1aGJXVTllM1JvYVhNdWNISnZjSE11WW1GelpVTnpjME5zWVhOeklDc2dKMTlmWTI5dWRHVnVkQ2Q5SUc5dVRXOTFjMlZGYm5SbGNqMTdLQ2s5UG5Sb2FYTXVhR0Z1Wkd4bFQyNU5iM1Z6WlVWdWRHVnlLQ2w5SUc5dVRXOTFjMlZNWldGMlpUMTdLQ2s5UG5Sb2FYTXVhR0Z1Wkd4bFQyNU5iM1Z6WlV4bFlYWmxLQ2w5SUQ1Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJSFJvYVhNdVkyaHBiR1JEYjIxd2IyNWxiblJ6TG0xaGNDZ29ZMmhwYkdSRGIyMXdiMjVsYm5Rc0lHbHVaR1Y0S1NBOVBpQjBhR2x6TG1ScGMzQnNZWGxKZEdWdEtHTm9hV3hrUTI5dGNHOXVaVzUwTEdsdVpHVjRLU2xjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0I5WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnZTNSb2FYTXVjbVZ1WkdWeVEyRnliM1Z6Wld4QlkzUnBiMjV6S0NsOVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2UzUm9hWE11Y21WdVpHVnlRMkZ5YjNWelpXeEpibVJwWTJGMGIzSnpLQ2w5WEc0Z0lDQWdJQ0FnSUNBZ0lDQThMMlJwZGo1Y2JpQWdJQ0FnSUNBZ0tWeHVJQ0FnSUgxY2JseHVJQ0FnSUhKbGJtUmxja05oY205MWMyVnNTVzVrYVdOaGRHOXljeWdwZTF4dUlDQWdJQ0FnSUNCeVpYUjFjbTRnS0Z4dUlDQWdJQ0FnSUNBZ0lDQWdQRzlzSUdOc1lYTnpUbUZ0WlQxN2RHaHBjeTV3Y205d2N5NWlZWE5sUTNOelEyeGhjM01nS3lBblgxOXBibVJwWTJGMGIzSnpKMzFjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0J5YjJ4bFBWd2lkR0ZpYkdsemRGd2lYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdZWEpwWVMxc1lXSmxiRDE3ZEdocGN5NXdjbTl3Y3k1aFkyTmxjM05wWW1sc2FYUjVMbWx1WkdsallYUnZjbk45UGx4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUh0Y2JseHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0IwYUdsekxuQnliM0J6TG1OeFNYUmxiWE5QY21SbGNpNXRZWEFvS0d0bGVTd2dhVzVrWlhncElEMCtJSHRjYmx4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnWTI5dWMzUWdhWFJsYlRwRGIzSmxRMjl1ZEdGcGJtVnlTWFJsYlNBOUlIUm9hWE11Y0hKdmNITXVZM0ZKZEdWdGMxdHJaWGxkTzF4dVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCamIyNXpkQ0JqYzNORGJHRnpjeUE5SUNocGJtUmxlQ0E5UFQwZ2RHaHBjeTV6ZEdGMFpTNWhZM1JwZG1WSmJtUmxlQ2tnUHlCZ0pIdDBhR2x6TG5CeWIzQnpMbUpoYzJWRGMzTkRiR0Z6YzMxZlgybHVaR2xqWVhSdmNpQWtlM1JvYVhNdWNISnZjSE11WW1GelpVTnpjME5zWVhOemZWOWZhVzVrYVdOaGRHOXlMUzFoWTNScGRtVmdJRG9nWUNSN2RHaHBjeTV3Y205d2N5NWlZWE5sUTNOelEyeGhjM045WDE5cGJtUnBZMkYwYjNKZ08xeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ1kyOXVjM1FnWVhKcFlVeGhZbVZzU1hSbGJTQTlJR1p2Y20xaGRFWnVLSFJvYVhNdWNISnZjSE11WVdOalpYTnphV0pwYkdsMGVTNXBibVJwWTJGMGIzSXNJRnNvYVc1a1pYZ2dLeUF4S1M1MGIxTjBjbWx1WnlncFhTazdYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQnlaWFIxY200Z0tGeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJRHhzYVZ4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0JyWlhrOWV5ZHBkR1Z0TFNjZ0t5QnBibVJsZUgxY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnYjI1RGJHbGphejE3S0NrOVBuUm9hWE11YUdGdVpHeGxTVzVrYVdOaGRHOXlRMnhwWTJzb2FXNWtaWGdwZlZ4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0JqYkdGemMwNWhiV1U5ZTJOemMwTnNZWE56ZlZ4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0J5YjJ4bFBWd2lkR0ZpWENKY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnWVhKcFlTMXNZV0psYkQxN1lYSnBZVXhoWW1Wc1NYUmxiWDArZTJsMFpXMWJYQ0pqY1Rwd1lXNWxiRlJwZEd4bFhDSmRmVHd2YkdrK1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBcFhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJSDBwWEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnZlZ4dVhHNGdJQ0FnSUNBZ0lDQWdJQ0E4TDI5c1BseHVJQ0FnSUNBZ0lDQXBPMXh1SUNBZ0lIMWNiaUFnSUNCeVpXNWtaWEpEWVhKdmRYTmxiRUZqZEdsdmJuTW9LWHRjYmlBZ0lDQWdJQ0FnY21WMGRYSnVJQ2hjYmlBZ0lDQWdJQ0FnSUNBZ0lEeGthWFlnWTJ4aGMzTk9ZVzFsUFh0MGFHbHpMbkJ5YjNCekxtSmhjMlZEYzNORGJHRnpjeUFySUNkZlgyRmpkR2x2Ym5NbmZUNWNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQThZblYwZEc5dUlHOXVRMnhwWTJzOWV5Z3BQVDUwYUdsekxtaGhibVJzWlU5dVFuVjBkRzl1VUhKbGRpZ3BmVnh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdZMnhoYzNOT1lXMWxQWHRnSkh0MGFHbHpMbkJ5YjNCekxtSmhjMlZEYzNORGJHRnpjMzFmWDJGamRHbHZiaUFrZTNSb2FYTXVjSEp2Y0hNdVltRnpaVU56YzBOc1lYTnpmVjlmWVdOMGFXOXVMUzF3Y21WMmFXOTFjMkI5WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0IwZVhCbFBWd2lZblYwZEc5dVhDSmNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lHRnlhV0V0YkdGaVpXdzllM1JvYVhNdWNISnZjSE11WVdOalpYTnphV0pwYkdsMGVTNXdjbVYyYVc5MWMzMCtYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUR4emNHRnVJR05zWVhOelRtRnRaVDE3ZEdocGN5NXdjbTl3Y3k1aVlYTmxRM056UTJ4aGMzTWdLeUFuWDE5aFkzUnBiMjR0YVdOdmJpZDlQand2YzNCaGJqNWNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnUEhOd1lXNGdZMnhoYzNOT1lXMWxQWHQwYUdsekxuQnliM0J6TG1KaGMyVkRjM05EYkdGemN5QXJJQ2RmWDJGamRHbHZiaTEwWlhoMEozMCtlM1JvYVhNdWNISnZjSE11WVdOalpYTnphV0pwYkdsMGVTNXdjbVYyYVc5MWMzMDhMM053WVc0K1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ1BDOWlkWFIwYjI0K1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ1BHSjFkSFJ2YmlCdmJrTnNhV05yUFhzb0tUMCtkR2hwY3k1b1lXNWtiR1ZQYmtKMWRIUnZiazVsZUhRb0tYMWNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lHTnNZWE56VG1GdFpUMTdZQ1I3ZEdocGN5NXdjbTl3Y3k1aVlYTmxRM056UTJ4aGMzTjlYMTloWTNScGIyNGdKSHQwYUdsekxuQnliM0J6TG1KaGMyVkRjM05EYkdGemMzMWZYMkZqZEdsdmJpMHRibVY0ZEdCOVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCMGVYQmxQVndpWW5WMGRHOXVYQ0pjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJR0Z5YVdFdGJHRmlaV3c5ZTNSb2FYTXVjSEp2Y0hNdVlXTmpaWE56YVdKcGJHbDBlUzV1WlhoMGZUNWNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnUEhOd1lXNGdZMnhoYzNOT1lXMWxQWHQwYUdsekxuQnliM0J6TG1KaGMyVkRjM05EYkdGemN5QXJJQ2RmWDJGamRHbHZiaTFwWTI5dUozMCtQQzl6Y0dGdVBseHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0E4YzNCaGJpQmpiR0Z6YzA1aGJXVTllM1JvYVhNdWNISnZjSE11WW1GelpVTnpjME5zWVhOeklDc2dKMTlmWVdOMGFXOXVMWFJsZUhRbmZUNTdkR2hwY3k1d2NtOXdjeTVoWTJObGMzTnBZbWxzYVhSNUxtNWxlSFI5UEM5emNHRnVQbHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJRHd2WW5WMGRHOXVQbHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2RHaHBjeTV3Y205d2N5NWhkWFJ2Y0d4aGVTQW1KbHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBOFBseHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ1BHSjFkSFJ2YmlCamJHRnpjMDVoYldVOWUyQWtlM1JvYVhNdWNISnZjSE11WW1GelpVTnpjME5zWVhOemZWOWZZV04wYVc5dUlDUjdkR2hwY3k1d2NtOXdjeTVpWVhObFEzTnpRMnhoYzNOOVgxOWhZM1JwYjI0dExYQmhkWE5sSUdBZ0t5QW9JWFJvYVhNdWMzUmhkR1V1WVhWMGIxQnNZWGtnUHlCMGFHbHpMbkJ5YjNCekxtSmhjMlZEYzNORGJHRnpjeUFySUNkZlgyRmpkR2x2YmkwdFpHbHpZV0pzWldRbklEb2dKeWNwZlZ4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0IwZVhCbFBWd2lZblYwZEc5dVhDSmNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ1lYSnBZUzFzWVdKbGJEMTdkR2hwY3k1d2NtOXdjeTVoWTJObGMzTnBZbWxzYVhSNUxuQmhkWE5sZlZ4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0J2YmtOc2FXTnJQWHNvS1QwK2RHaHBjeTUwYjJkbmJHVkJkWFJ2VUd4aGVTaG1ZV3h6WlNsOVBseHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJRHh6Y0dGdUlHTnNZWE56VG1GdFpUMTdkR2hwY3k1d2NtOXdjeTVpWVhObFEzTnpRMnhoYzNNZ0t5QW5YMTloWTNScGIyNHRhV052YmlkOVBqd3ZjM0JoYmo1Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQThjM0JoYmlCamJHRnpjMDVoYldVOWUzUm9hWE11Y0hKdmNITXVZbUZ6WlVOemMwTnNZWE56SUNzZ0oxOWZZV04wYVc5dUxYUmxlSFFuZlQ1N2RHaHBjeTV3Y205d2N5NWhZMk5sYzNOcFltbHNhWFI1TG5CaGRYTmxmVHd2YzNCaGJqNWNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lEd3ZZblYwZEc5dVBseHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ1BHSjFkSFJ2YmlCamJHRnpjMDVoYldVOWUyQWtlM1JvYVhNdWNISnZjSE11WW1GelpVTnpjME5zWVhOemZWOWZZV04wYVc5dUlDUjdkR2hwY3k1d2NtOXdjeTVpWVhObFEzTnpRMnhoYzNOOVgxOWhZM1JwYjI0dExYQnNZWGtnWUNBcklDaDBhR2x6TG5OMFlYUmxMbUYxZEc5UWJHRjVJRDhnZEdocGN5NXdjbTl3Y3k1aVlYTmxRM056UTJ4aGMzTWdLeUFuWDE5aFkzUnBiMjR0TFdScGMyRmliR1ZrSnlBNklDY25LWDFjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdkSGx3WlQxY0ltSjFkSFJ2Ymx3aVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUdGeWFXRXRiR0ZpWld3OWUzUm9hWE11Y0hKdmNITXVZV05qWlhOemFXSnBiR2wwZVM1d2JHRjVmVnh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQnZia05zYVdOclBYc29LVDArZEdocGN5NTBiMmRuYkdWQmRYUnZVR3hoZVNoMGNuVmxLWDFjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJRDVjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBOGMzQmhiaUJqYkdGemMwNWhiV1U5ZTNSb2FYTXVjSEp2Y0hNdVltRnpaVU56YzBOc1lYTnpJQ3NnSjE5ZllXTjBhVzl1TFdsamIyNG5mVDQ4TDNOd1lXNCtYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnUEhOd1lXNGdZMnhoYzNOT1lXMWxQWHQwYUdsekxuQnliM0J6TG1KaGMyVkRjM05EYkdGemN5QXJJQ2RmWDJGamRHbHZiaTEwWlhoMEozMCtlM1JvYVhNdWNISnZjSE11WVdOalpYTnphV0pwYkdsMGVTNXdiR0Y1ZlR3dmMzQmhiajVjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJRHd2WW5WMGRHOXVQbHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBOEx6NWNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQjlYRzVjYmlBZ0lDQWdJQ0FnSUNBZ0lEd3ZaR2wyUGx4dUlDQWdJQ0FnSUNBcFhHNGdJQ0FnZlZ4dVhHNTlYRzVjYm1WNGNHOXlkQ0JrWldaaGRXeDBJSGRwZEdoVGRHRnVaR0Z5WkVKaGMyVkRjM05EYkdGemN5aDNhWFJvUVhWMGFHOXlVR0Z1Wld4VGQybDBZMmdvUTJGeWIzVnpaV3hXTVVsdGNHd3BMQ0JjSW1OdGNDMWpZWEp2ZFhObGJGd2lLVHNpWFgwPSIsImV4cG9ydCBmdW5jdGlvbiBDYXJvdXNlbFYxSXNFbXB0eUZuKHByb3BzKSB7XG4gICAgcmV0dXJuIHByb3BzLmNxSXRlbXNPcmRlciA9PSBudWxsIHx8IHByb3BzLmNxSXRlbXNPcmRlci5sZW5ndGggPT09IDA7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lRMkZ5YjNWelpXeFdNVWx6Ulcxd2RIbEdiaTVxY3lJc0luTnZkWEpqWlZKdmIzUWlPaUlpTENKemIzVnlZMlZ6SWpwYklrTmhjbTkxYzJWc1ZqRkpjMFZ0Y0hSNVJtNHVkSE1pWFN3aWJtRnRaWE1pT2x0ZExDSnRZWEJ3YVc1bmN5STZJa0ZCYTBKQkxFMUJRVTBzVlVGQlZTeHRRa0ZCYlVJc1EwRkJReXhMUVVFd1FqdEpRVU14UkN4UFFVRlBMRXRCUVVzc1EwRkJReXhaUVVGWkxFbEJRVWtzU1VGQlNTeEpRVUZKTEV0QlFVc3NRMEZCUXl4WlFVRlpMRU5CUVVNc1RVRkJUU3hMUVVGTExFTkJRVU1zUTBGQlF6dEJRVU42UlN4RFFVRkRJaXdpYzI5MWNtTmxjME52Ym5SbGJuUWlPbHNpTHlwY2JpQXFJQ0JEYjNCNWNtbG5hSFFnTWpBeU1DQkJaRzlpWlZ4dUlDcGNiaUFxSUNCTWFXTmxibk5sWkNCMWJtUmxjaUIwYUdVZ1FYQmhZMmhsSUV4cFkyVnVjMlVzSUZabGNuTnBiMjRnTWk0d0lDaDBhR1VnWENKTWFXTmxibk5sWENJcE8xeHVJQ29nSUhsdmRTQnRZWGtnYm05MElIVnpaU0IwYUdseklHWnBiR1VnWlhoalpYQjBJR2x1SUdOdmJYQnNhV0Z1WTJVZ2QybDBhQ0IwYUdVZ1RHbGpaVzV6WlM1Y2JpQXFJQ0JaYjNVZ2JXRjVJRzlpZEdGcGJpQmhJR052Y0hrZ2IyWWdkR2hsSUV4cFkyVnVjMlVnWVhSY2JpQXFYRzRnS2lBZ0lDQWdJR2gwZEhBNkx5OTNkM2N1WVhCaFkyaGxMbTl5Wnk5c2FXTmxibk5sY3k5TVNVTkZUbE5GTFRJdU1GeHVJQ3BjYmlBcUlDQlZibXhsYzNNZ2NtVnhkV2x5WldRZ1lua2dZWEJ3YkdsallXSnNaU0JzWVhjZ2IzSWdZV2R5WldWa0lIUnZJR2x1SUhkeWFYUnBibWNzSUhOdlpuUjNZWEpsWEc0Z0tpQWdaR2x6ZEhKcFluVjBaV1FnZFc1a1pYSWdkR2hsSUV4cFkyVnVjMlVnYVhNZ1pHbHpkSEpwWW5WMFpXUWdiMjRnWVc0Z1hDSkJVeUJKVTF3aUlFSkJVMGxUTEZ4dUlDb2dJRmRKVkVoUFZWUWdWMEZTVWtGT1ZFbEZVeUJQVWlCRFQwNUVTVlJKVDA1VElFOUdJRUZPV1NCTFNVNUVMQ0JsYVhSb1pYSWdaWGh3Y21WemN5QnZjaUJwYlhCc2FXVmtMbHh1SUNvZ0lGTmxaU0IwYUdVZ1RHbGpaVzV6WlNCbWIzSWdkR2hsSUhOd1pXTnBabWxqSUd4aGJtZDFZV2RsSUdkdmRtVnlibWx1WnlCd1pYSnRhWE56YVc5dWN5QmhibVJjYmlBcUlDQnNhVzFwZEdGMGFXOXVjeUIxYm1SbGNpQjBhR1VnVEdsalpXNXpaUzVjYmlBcUwxeHVhVzF3YjNKMElIdERiM0psUTI5dWRHRnBibVZ5VUhKdmNHVnlkR2xsYzMwZ1puSnZiU0JjSWk0dUx5NHVMeTR1TDBGaWMzUnlZV04wUTI5eVpVTnZiblJoYVc1bGNrTnZiWEJ2Ym1WdWRGd2lPMXh1YVcxd2IzSjBJSHNnUTJGeWIzVnpaV3hXTVZCeWIzQmxjblJwWlhNZ2ZTQm1jbTl0SUZ3aUxpOURZWEp2ZFhObGJGWXhYQ0k3WEc1Y2JtVjRjRzl5ZENCbWRXNWpkR2x2YmlCRFlYSnZkWE5sYkZZeFNYTkZiWEIwZVVadUtIQnliM0J6T2tOaGNtOTFjMlZzVmpGUWNtOXdaWEowYVdWektYdGNiaUFnSUNCeVpYUjFjbTRnY0hKdmNITXVZM0ZKZEdWdGMwOXlaR1Z5SUQwOUlHNTFiR3dnZkh3Z2NISnZjSE11WTNGSmRHVnRjMDl5WkdWeUxteGxibWQwYUNBOVBUMGdNRHRjYm4waVhYMD0iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAYWRvYmUvYWVtLXJlYWN0LWVkaXRhYmxlLWNvbXBvbmVudHNcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==