(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
    /***/
    0:
    /*!***************************!*\
      !*** multi ./src/main.ts ***!
      \***************************/

    /*! no static exports found */

    /***/
    function _(module, exports, __webpack_require__) {
      module.exports = __webpack_require__(
      /*! D:\Training\Training PRoject\Chat_By_VPS\src\main.ts */
      "zUnb");
      /***/
    },

    /***/
    "AytR":
    /*!*****************************************!*\
      !*** ./src/environments/environment.ts ***!
      \*****************************************/

    /*! exports provided: environment */

    /***/
    function AytR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "environment", function () {
        return environment;
      }); // This file can be replaced during build by using the `fileReplacements` array.
      // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
      // The list of file replacements can be found in `angular.json`.


      var environment = {
        production: false
      };
      /*
       * For easier debugging in development mode, you can import the following file
       * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
       *
       * This import should be commented out in production mode because it will have a negative impact
       * on performance if an error is thrown.
       */
      // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

      /***/
    },

    /***/
    "Sy1n":
    /*!**********************************!*\
      !*** ./src/app/app.component.ts ***!
      \**********************************/

    /*! exports provided: AppComponent */

    /***/
    function Sy1n(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
        return AppComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _containers_chat_chat_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./containers/chat/chat.component */
      "czmX");

      var AppComponent = function AppComponent() {
        _classCallCheck(this, AppComponent);

        this.title = 'client';
      };

      AppComponent.ɵfac = function AppComponent_Factory(t) {
        return new (t || AppComponent)();
      };

      AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: AppComponent,
        selectors: [["app-root"]],
        decls: 1,
        vars: 0,
        template: function AppComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-chat");
          }
        },
        directives: [_containers_chat_chat_component__WEBPACK_IMPORTED_MODULE_1__["ChatComponent"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */"]
      });
      /***/
    },

    /***/
    "ZAI4":
    /*!*******************************!*\
      !*** ./src/app/app.module.ts ***!
      \*******************************/

    /*! exports provided: AppModule */

    /***/
    function ZAI4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppModule", function () {
        return AppModule;
      });
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app.component */
      "Sy1n");
      /* harmony import */


      var _containers_chat_chat_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./containers/chat/chat.component */
      "czmX");
      /* harmony import */


      var _components_usernname_usernname_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./components/usernname/usernname.component */
      "v6WF");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var AppModule = function AppModule() {
        _classCallCheck(this, AppModule);
      };

      AppModule.ɵfac = function AppModule_Factory(t) {
        return new (t || AppModule)();
      };

      AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({
        type: AppModule,
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
      });
      AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({
        providers: [],
        imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](AppModule, {
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"], _containers_chat_chat_component__WEBPACK_IMPORTED_MODULE_3__["ChatComponent"], _components_usernname_usernname_component__WEBPACK_IMPORTED_MODULE_4__["UsernnameComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"]]
        });
      })();
      /***/

    },

    /***/
    "czmX":
    /*!***************************************************!*\
      !*** ./src/app/containers/chat/chat.component.ts ***!
      \***************************************************/

    /*! exports provided: ChatComponent */

    /***/
    function czmX(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ChatComponent", function () {
        return ChatComponent;
      });
      /* harmony import */


      var socket_io_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! socket.io-client */
      "2qj+");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _components_usernname_usernname_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../components/usernname/usernname.component */
      "v6WF");

      function ChatComponent_app_usernname_3_Template(rf, ctx) {
        if (rf & 1) {
          var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "app-usernname", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("userNameEvent", function ChatComponent_app_usernname_3_Template_app_usernname_userNameEvent_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4);

            var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r3.userNameUpdate($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function ChatComponent_div_10_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var user_r5 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](user_r5);
        }
      }

      var _c0 = function _c0(a0) {
        return {
          mine: a0
        };
      };

      function ChatComponent_div_12_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "p", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "p", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var msg_r6 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](3, _c0, msg_r6.mine));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](msg_r6.userName);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](msg_r6.message);
        }
      }

      var ChatComponent = /*#__PURE__*/function () {
        function ChatComponent() {
          _classCallCheck(this, ChatComponent);

          this.userName = '';
          this.message = '';
          this.messageList = [];
          this.userList = [];
        }

        _createClass(ChatComponent, [{
          key: "userNameUpdate",
          value: function userNameUpdate(name) {
            var _this = this;

            this.socket = socket_io_client__WEBPACK_IMPORTED_MODULE_0__["io"]("https://chat-server-hosting.herokuapp.com/?userName=".concat(name));
            this.userName = name;
            this.socket.emit('set-user-name', name);
            this.socket.on('user-list', function (userList) {
              _this.userList = userList;
            });
            this.socket.on('message-broadcast', function (data) {
              if (data) {
                _this.messageList.push({
                  message: data.message,
                  userName: data.userName,
                  mine: false
                });
              }
            });
          }
        }, {
          key: "sendMessage",
          value: function sendMessage() {
            this.socket.emit('message', this.message);
            this.messageList.push({
              message: this.message,
              userName: this.userName,
              mine: true
            });
            this.message = '';
          }
        }]);

        return ChatComponent;
      }();

      ChatComponent.ɵfac = function ChatComponent_Factory(t) {
        return new (t || ChatComponent)();
      };

      ChatComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: ChatComponent,
        selectors: [["app-chat"]],
        decls: 17,
        vars: 5,
        consts: [[1, "container"], [3, "userNameEvent", 4, "ngIf"], [1, "userName"], [1, "chatbox"], [1, "chatbox__user-list"], ["class", "chatbox__user--active", 4, "ngFor", "ngForOf"], [1, "messages_list"], ["class", "chatbox__messages", 3, "ngClass", 4, "ngFor", "ngForOf"], [1, "send-message"], ["type", "text", "name", "chatArea", "placeholder", "Enter  Text", 3, "ngModel", "ngModelChange"], [3, "click"], [3, "userNameEvent"], [1, "chatbox__user--active"], [1, "chatbox__messages", 3, "ngClass"], [1, "user-message"], [1, "message-box"], [1, "name"], [1, "message"]],
        template: function ChatComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h1");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "VPS Domain");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, ChatComponent_app_usernname_3_Template, 1, 0, "app-usernname", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "User list");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, ChatComponent_div_10_Template, 3, 1, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, ChatComponent_div_12_Template, 8, 5, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "input", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function ChatComponent_Template_input_ngModelChange_14_listener($event) {
              return ctx.message = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "button", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ChatComponent_Template_button_click_15_listener() {
              return ctx.sendMessage();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Send");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.userName);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.userName);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.userList);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.messageList);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.message);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"], _components_usernname_usernname_component__WEBPACK_IMPORTED_MODULE_4__["UsernnameComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"]],
        styles: [".container[_ngcontent-%COMP%] {\n  justify-content: center;\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n  height: 100vh;\n  overflow: auto;\n  width: 100vw;\n  background-image: url('pexels-aleksandar-pasaric-325185.jpg');\n}\n.container[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin: 0.5em auto;\n  color: black;\n  text-align: center;\n  font-family: Georgia, \"Times  New  Roman\", Times, serif;\n}\n.userName[_ngcontent-%COMP%] {\n  font-size: 2vmax;\n  font-family: cursive;\n  color: aqua;\n  background-color: red;\n  border-radius: 10px;\n  width: 10%;\n  height: 8%;\n  text-align: center;\n}\n.chatbox[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.05);\n  width: 80%;\n  height: 75%;\n  border-radius: 0.2em;\n  position: relative;\n  box-shadow: 1px 1px 12px rgba(0, 0, 0, 0.1);\n}\n.chatbox[_ngcontent-%COMP%]   .messages_list[_ngcontent-%COMP%] {\n  overflow-y: auto;\n  height: 100%;\n  background-image: url('pexels-carlos-oliva-3586966.jpg');\n  background-size: cover;\n}\n.chatbox__messages.mine[_ngcontent-%COMP%]   .message-box[_ngcontent-%COMP%] {\n  float: right;\n}\n.chatbox__messages[_ngcontent-%COMP%]   .message-box[_ngcontent-%COMP%] {\n  float: left;\n}\n.chatbox[_ngcontent-%COMP%]   .message-box[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.2);\n  padding: 1em 0;\n  height: auto;\n  width: 55%;\n  border-radius: 5px;\n  margin: 2em 1em;\n  overflow: auto;\n}\n.chatbox[_ngcontent-%COMP%]   .message-box[_ngcontent-%COMP%]    > p.name[_ngcontent-%COMP%] {\n  color: #FFF;\n  font-size: 1em;\n}\n.chatbox[_ngcontent-%COMP%]   .message-box[_ngcontent-%COMP%]    > p.message[_ngcontent-%COMP%] {\n  color: #FFF;\n  font-size: 0.7em;\n  margin: 0 2.8em;\n}\n.chatbox__user-list[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.1);\n  width: 25%;\n  height: 100%;\n  float: right;\n  border-top-right-radius: 0.2em;\n  border-bottom-right-radius: 0.2em;\n  background-image: linear-gradient(hotpink, indigo);\n}\n.chatbox__user-list[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.05);\n  color: rgba(255, 255, 255, 0.9);\n  font-size: 0.9em;\n  padding: 1em;\n  margin: 0;\n  font-weight: 300;\n  text-align: center;\n}\n.chatbox__user[_ngcontent-%COMP%], .chatbox__user--active[_ngcontent-%COMP%] {\n  width: 0.5em;\n  height: 0.5em;\n  border-radius: 100%;\n  margin: 1em 0.7em;\n}\n.chatbox__user--active[_ngcontent-%COMP%] {\n  background: rgba(10, 245, 241, 0.8);\n}\n.chatbox[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  float: left;\n  text-align: left;\n  margin: -0.25em 2em;\n  font-size: 0.7em;\n  font-weight: 300;\n  color: #FFF;\n  width: 200px;\n}\n.chatbox[_ngcontent-%COMP%]   form[_ngcontent-%COMP%] {\n  background: #222;\n}\n.chatbox[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  background: #9f2e2e;\n  position: relative;\n  height: 100px;\n  bottom: 0;\n  left: 0;\n  border: none;\n  width: 100%;\n  padding: 1.2em;\n  outline: none;\n  color: rgba(255, 255, 255, 0.9);\n  font-weight: 300;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxjaGF0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksdUJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtFQUNBLGFBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtFQUNBLDZEQUFBO0FBQ0o7QUFBSTtFQUNJLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsdURBQUE7QUFFUjtBQUNBO0VBQ0ksZ0JBQUE7RUFDQSxvQkFBQTtFQUNBLFdBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0EsVUFBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtBQUVKO0FBQ0E7RUFDSSxxQ0FBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtFQUNBLDJDQUFBO0FBRUo7QUFESTtFQUNJLGdCQUFBO0VBQ0EsWUFBQTtFQUNSLHdEQUFBO0VBQ0Usc0JBQUE7QUFHRjtBQUNRO0VBQ0ksWUFBQTtBQUNaO0FBQ1E7RUFDSSxXQUFBO0FBQ1o7QUFFSTtFQUNJLG9DQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtBQUFSO0FBQ1E7RUFDSSxXQUFBO0VBQ0EsY0FBQTtBQUNaO0FBQ1E7RUFDSSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FBQ1o7QUFFSTtFQUNJLG9DQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsOEJBQUE7RUFDQSxpQ0FBQTtFQUNKLGtEQUFBO0FBQUo7QUFDUTtFQUNJLHFDQUFBO0VBQ0EsK0JBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxTQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQUNaO0FBRUk7RUFDSSxZQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7QUFBUjtBQUNRO0VBRUksbUNBQUE7QUFBWjtBQUdJO0VBQ0ksV0FBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUFEUjtBQUdJO0VBQ0ksZ0JBQUE7QUFEUjtBQUVRO0VBQ0ksbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFFQSxTQUFBO0VBQ0EsT0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtFQUNBLGFBQUE7RUFDQSwrQkFBQTtFQUNBLGdCQUFBO0FBRFoiLCJmaWxlIjoiY2hhdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXIgIHtcclxuICAgIGp1c3RpZnktY29udGVudDogIGNlbnRlcjtcclxuICAgIGRpc3BsYXk6ICBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6ICBjZW50ZXI7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogIGNvbHVtbjtcclxuICAgIGhlaWdodDogIDEwMHZoO1xyXG4gICAgb3ZlcmZsb3c6IGF1dG87XHJcbiAgICB3aWR0aDogIDEwMHZ3O1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogIHVybCgnLi4vLi4vLi4vYXNzZXRzL3BleGVscy1hbGVrc2FuZGFyLXBhc2FyaWMtMzI1MTg1LmpwZycpO1xyXG4gICAgaDEgIHtcclxuICAgICAgICBtYXJnaW46ICAwLjVlbSAgYXV0bztcclxuICAgICAgICBjb2xvcjogIGJsYWNrO1xyXG4gICAgICAgIHRleHQtYWxpZ246ICBjZW50ZXI7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6ICBHZW9yZ2lhLCAgJ1RpbWVzICBOZXcgIFJvbWFuJywgIFRpbWVzLCAgc2VyaWY7XHJcbiAgICB9XHJcbn1cclxuLnVzZXJOYW1le1xyXG4gICAgZm9udC1zaXplOiAydm1heDtcclxuICAgIGZvbnQtZmFtaWx5OiBjdXJzaXZlO1xyXG4gICAgY29sb3I6IGFxdWE7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgd2lkdGg6IDEwJTtcclxuICAgIGhlaWdodDogOCU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblxyXG59XHJcbi5jaGF0Ym94ICB7XHJcbiAgICBiYWNrZ3JvdW5kOiAgcmdiYSgyNTUsICAyNTUsICAyNTUsICAwLjA1KTtcclxuICAgIHdpZHRoOiAgODAlO1xyXG4gICAgaGVpZ2h0OiAgNzUlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogIDAuMmVtO1xyXG4gICAgcG9zaXRpb246ICByZWxhdGl2ZTtcclxuICAgIGJveC1zaGFkb3c6ICAxcHggIDFweCAgMTJweCAgcmdiYSgwLCAgMCwgIDAsICAwLjEpO1xyXG4gICAgLm1lc3NhZ2VzX2xpc3QgIHtcclxuICAgICAgICBvdmVyZmxvdy15OiAgYXV0bztcclxuICAgICAgICBoZWlnaHQ6ICAxMDAlO1xyXG5iYWNrZ3JvdW5kLWltYWdlOiAgdXJsKCcuLi8uLi8uLi9hc3NldHMvcGV4ZWxzLWNhcmxvcy1vbGl2YS0zNTg2OTY2LmpwZycpOyAgXHJcbiAgYmFja2dyb3VuZC1zaXplOiAgY292ZXI7XHJcbiAgXHJcbiAgfVxyXG4gICAgJl9fbWVzc2FnZXMgIHtcclxuICAgICAgICAmLm1pbmUgIC5tZXNzYWdlLWJveCAge1xyXG4gICAgICAgICAgICBmbG9hdDogIHJpZ2h0O1xyXG4gICAgICAgIH1cclxuICAgICAgICAubWVzc2FnZS1ib3ggIHtcclxuICAgICAgICAgICAgZmxvYXQ6ICBsZWZ0O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5tZXNzYWdlLWJveCAge1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICByZ2JhKDI1NSwgIDI1NSwgIDI1NSwgIDAuMik7XHJcbiAgICAgICAgcGFkZGluZzogIDFlbSAgMDtcclxuICAgICAgICBoZWlnaHQ6ICBhdXRvO1xyXG4gICAgICAgIHdpZHRoOiAgNTUlO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6ICA1cHg7XHJcbiAgICAgICAgbWFyZ2luOiAgMmVtICAxZW07XHJcbiAgICAgICAgb3ZlcmZsb3c6ICBhdXRvO1xyXG4gICAgICAgICYgID4gIHAubmFtZSAge1xyXG4gICAgICAgICAgICBjb2xvcjogICNGRkY7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogIDFlbTtcclxuICAgICAgICB9XHJcbiAgICAgICAgJiAgPiAgcC5tZXNzYWdlICB7XHJcbiAgICAgICAgICAgIGNvbG9yOiAgI0ZGRjtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAgMC43ZW07XHJcbiAgICAgICAgICAgIG1hcmdpbjogIDAgIDIuOGVtO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgICZfX3VzZXItbGlzdCAge1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICByZ2JhKDI1NSwgIDI1NSwgIDI1NSwgIDAuMSk7XHJcbiAgICAgICAgd2lkdGg6ICAyNSU7XHJcbiAgICAgICAgaGVpZ2h0OiAgMTAwJTtcclxuICAgICAgICBmbG9hdDogIHJpZ2h0O1xyXG4gICAgICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAgMC4yZW07XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6ICAwLjJlbTtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6ICBsaW5lYXItZ3JhZGllbnQoaG90cGluaywgIGluZGlnbyk7XHJcbiAgICAgICAgaDEgIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogIHJnYmEoMjU1LCAgMjU1LCAgMjU1LCAgMC4wNSk7XHJcbiAgICAgICAgICAgIGNvbG9yOiAgcmdiYSgyNTUsICAyNTUsICAyNTUsICAwLjkpO1xyXG4gICAgICAgICAgICBmb250LXNpemU6ICAwLjllbTtcclxuICAgICAgICAgICAgcGFkZGluZzogIDFlbTtcclxuICAgICAgICAgICAgbWFyZ2luOiAgMDtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6ICAzMDA7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246ICBjZW50ZXI7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgJl9fdXNlciAge1xyXG4gICAgICAgIHdpZHRoOiAgMC41ZW07XHJcbiAgICAgICAgaGVpZ2h0OiAgMC41ZW07XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogIDEwMCU7XHJcbiAgICAgICAgbWFyZ2luOiAgMWVtICAwLjdlbTtcclxuICAgICAgICAmLS1hY3RpdmUgIHtcclxuICAgICAgICAgICAgQGV4dGVuZCAgLmNoYXRib3hfX3VzZXI7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICByZ2JhKDEwLCAgMjQ1LCAgMjQxLCAgMC44KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBwICB7XHJcbiAgICAgICAgZmxvYXQ6ICBsZWZ0O1xyXG4gICAgICAgIHRleHQtYWxpZ246ICBsZWZ0O1xyXG4gICAgICAgIG1hcmdpbjogIC0wLjI1ZW0gIDJlbTtcclxuICAgICAgICBmb250LXNpemU6ICAwLjdlbTtcclxuICAgICAgICBmb250LXdlaWdodDogIDMwMDtcclxuICAgICAgICBjb2xvcjogICNGRkY7XHJcbiAgICAgICAgd2lkdGg6ICAyMDBweDtcclxuICAgIH1cclxuICAgIGZvcm0gIHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAgIzIyMjtcclxuICAgICAgICBpbnB1dCAge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAgcmdiKDE1OSwgIDQ2LCAgNDYpO1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogIHJlbGF0aXZlO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDEwMHB4O1xyXG5cclxuICAgICAgICAgICAgYm90dG9tOiAgMDtcclxuICAgICAgICAgICAgbGVmdDogIDA7XHJcbiAgICAgICAgICAgIGJvcmRlcjogIG5vbmU7XHJcbiAgICAgICAgICAgIHdpZHRoOiAgMTAwJTtcclxuICAgICAgICAgICAgcGFkZGluZzogIDEuMmVtO1xyXG4gICAgICAgICAgICBvdXRsaW5lOiAgbm9uZTtcclxuICAgICAgICAgICAgY29sb3I6ICByZ2JhKDI1NSwgIDI1NSwgIDI1NSwgIDAuOSk7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiAgMzAwO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iXX0= */"]
      });
      /***/
    },

    /***/
    "v6WF":
    /*!*************************************************************!*\
      !*** ./src/app/components/usernname/usernname.component.ts ***!
      \*************************************************************/

    /*! exports provided: UsernnameComponent */

    /***/
    function v6WF(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UsernnameComponent", function () {
        return UsernnameComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var UsernnameComponent = /*#__PURE__*/function () {
        function UsernnameComponent() {
          var _this2 = this;

          _classCallCheck(this, UsernnameComponent);

          this.userNameEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          this.userName = '';

          this.name = function () {
            _this2.userName = prompt("Enter Name");

            _this2.setUserName();
          };
        }

        _createClass(UsernnameComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.name();
          }
        }, {
          key: "setUserName",
          value: function setUserName() {
            this.userNameEvent.emit(this.userName);
          }
        }]);

        return UsernnameComponent;
      }();

      UsernnameComponent.ɵfac = function UsernnameComponent_Factory(t) {
        return new (t || UsernnameComponent)();
      };

      UsernnameComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: UsernnameComponent,
        selectors: [["app-usernname"]],
        outputs: {
          userNameEvent: "userNameEvent"
        },
        decls: 1,
        vars: 0,
        consts: [[1, "NamerX"]],
        template: function UsernnameComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 0);
          }
        },
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ1c2Vybm5hbWUuY29tcG9uZW50LnNjc3MifQ== */"]
      });
      /***/
    },

    /***/
    "zUnb":
    /*!*********************!*\
      !*** ./src/main.ts ***!
      \*********************/

    /*! no exports provided */

    /***/
    function zUnb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app/app.module */
      "ZAI4");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./environments/environment */
      "AytR");

      if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
      }

      _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
        return console.error(err);
      });
      /***/

    },

    /***/
    "zn8P":
    /*!******************************************************!*\
      !*** ./$$_lazy_route_resource lazy namespace object ***!
      \******************************************************/

    /*! no static exports found */

    /***/
    function zn8P(module, exports) {
      function webpackEmptyAsyncContext(req) {
        // Here Promise.resolve().then() is used instead of new Promise() to prevent
        // uncaught exception popping up in devtools
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      webpackEmptyAsyncContext.keys = function () {
        return [];
      };

      webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
      module.exports = webpackEmptyAsyncContext;
      webpackEmptyAsyncContext.id = "zn8P";
      /***/
    }
  }, [[0, "runtime", "vendor"]]]);
})();
//# sourceMappingURL=main-es5.js.map