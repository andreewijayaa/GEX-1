(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "  <flash-messages></flash-messages>\r\n  <router-outlet></router-outlet>\r\n  <app-footer></app-footer>\r\n\r\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'angular-src';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/navbar/navbar.component */ "./src/app/components/navbar/navbar.component.ts");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _components_login_sellerLogin_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/login/sellerLogin.component */ "./src/app/components/login/sellerLogin.component.ts");
/* harmony import */ var _components_register_BuyerRegister_BuyerRegister_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/register/BuyerRegister/BuyerRegister.component */ "./src/app/components/register/BuyerRegister/BuyerRegister.component.ts");
/* harmony import */ var _components_buyer_buyer_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/buyer/buyer.component */ "./src/app/components/buyer/buyer.component.ts");
/* harmony import */ var _components_seller_seller_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/seller/seller.component */ "./src/app/components/seller/seller.component.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_buyer_make_request_make_request_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/buyer/make-request/make-request.component */ "./src/app/components/buyer/make-request/make-request.component.ts");
/* harmony import */ var _components_buyer_buyer_account_buyer_account_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/buyer/buyer-account/buyer-account.component */ "./src/app/components/buyer/buyer-account/buyer-account.component.ts");
/* harmony import */ var _components_seller_submit_offer_submit_offer_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/seller/submit-offer/submit-offer.component */ "./src/app/components/seller/submit-offer/submit-offer.component.ts");
/* harmony import */ var _components_seller_seller_account_seller_account_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/seller/seller-account/seller-account.component */ "./src/app/components/seller/seller-account/seller-account.component.ts");
/* harmony import */ var _components_register_SellerRegister_SellerRegister_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/register/SellerRegister/SellerRegister.component */ "./src/app/components/register/SellerRegister/SellerRegister.component.ts");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/footer/footer.component */ "./src/app/components/footer/footer.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _services_validate_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./services/validate.service */ "./src/app/services/validate.service.ts");
/* harmony import */ var _services_register_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./services/register.service */ "./src/app/services/register.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_storeFetch_service__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./services/storeFetch.service */ "./src/app/services/storeFetch.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _components_navbar_seller_navbar_seller_navbar_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./components/navbar/seller-navbar/seller-navbar.component */ "./src/app/components/navbar/seller-navbar/seller-navbar.component.ts");
/* harmony import */ var _components_navbar_buyer_navbar_buyer_navbar_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./components/navbar/buyer-navbar/buyer-navbar.component */ "./src/app/components/navbar/buyer-navbar/buyer-navbar.component.ts");
/* harmony import */ var _components_activation_preactivation_preactivation_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./components/activation/preactivation/preactivation.component */ "./src/app/components/activation/preactivation/preactivation.component.ts");
/* harmony import */ var _components_activation_postactivation_postactivation_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./components/activation/postactivation/postactivation.component */ "./src/app/components/activation/postactivation/postactivation.component.ts");
/* harmony import */ var _services_seller_service__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./services/seller.service */ "./src/app/services/seller.service.ts");
/* harmony import */ var _buyerAuth_guard__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./buyerAuth.guard */ "./src/app/buyerAuth.guard.ts");
/* harmony import */ var _sellerAuth_guard__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./sellerAuth.guard */ "./src/app/sellerAuth.guard.ts");
/* harmony import */ var _components_seller_seller_services_seller_services_seller_services_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./components/seller/seller-services/seller-services/seller-services.component */ "./src/app/components/seller/seller-services/seller-services/seller-services.component.ts");
/* harmony import */ var _components_request_request_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./components/request/request.component */ "./src/app/components/request/request.component.ts");
/* harmony import */ var _services_buyer_resolve__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./services/buyer.resolve */ "./src/app/services/buyer.resolve.ts");
/* harmony import */ var _services_seller_resolve__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./services/seller.resolve */ "./src/app/services/seller.resolve.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



































var appRoutes = [
    { path: '', component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_10__["HomeComponent"] },
    { path: 'buyer-register', component: _components_register_BuyerRegister_BuyerRegister_component__WEBPACK_IMPORTED_MODULE_7__["BuyerRegisterComponent"] },
    { path: 'seller-register', component: _components_register_SellerRegister_SellerRegister_component__WEBPACK_IMPORTED_MODULE_15__["SellerRegisterComponent"] },
    { path: 'login', component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"] },
    { path: 'seller-login', component: _components_login_sellerLogin_component__WEBPACK_IMPORTED_MODULE_6__["SellerLoginComponent"] },
    { path: 'buyer', component: _components_buyer_buyer_component__WEBPACK_IMPORTED_MODULE_8__["BuyerComponent"], canActivate: [_buyerAuth_guard__WEBPACK_IMPORTED_MODULE_29__["BuyerAuthGuard"]], resolve: { buyer: _services_buyer_resolve__WEBPACK_IMPORTED_MODULE_33__["BuyerResolve"] } },
    { path: 'buyer/buyer-account', component: _components_buyer_buyer_account_buyer_account_component__WEBPACK_IMPORTED_MODULE_12__["BuyerAccountComponent"], canActivate: [_buyerAuth_guard__WEBPACK_IMPORTED_MODULE_29__["BuyerAuthGuard"]], resolve: { buyer: _services_buyer_resolve__WEBPACK_IMPORTED_MODULE_33__["BuyerResolve"] } },
    { path: 'buyer/make-request', component: _components_buyer_make_request_make_request_component__WEBPACK_IMPORTED_MODULE_11__["MakeRequestComponent"], canActivate: [_buyerAuth_guard__WEBPACK_IMPORTED_MODULE_29__["BuyerAuthGuard"]] },
    { path: 'seller', component: _components_seller_seller_component__WEBPACK_IMPORTED_MODULE_9__["SellerComponent"], canActivate: [_sellerAuth_guard__WEBPACK_IMPORTED_MODULE_30__["SellerAuthGuard"]], resolve: { seller: _services_seller_resolve__WEBPACK_IMPORTED_MODULE_34__["SellerResolve"] } },
    { path: 'seller/seller-account', component: _components_seller_seller_account_seller_account_component__WEBPACK_IMPORTED_MODULE_14__["SellerAccountComponent"], canActivate: [_sellerAuth_guard__WEBPACK_IMPORTED_MODULE_30__["SellerAuthGuard"]], resolve: { seller: _services_seller_resolve__WEBPACK_IMPORTED_MODULE_34__["SellerResolve"] } },
    { path: 'seller/submit-offer/:id', component: _components_seller_submit_offer_submit_offer_component__WEBPACK_IMPORTED_MODULE_13__["SubmitOfferComponent"], canActivate: [_sellerAuth_guard__WEBPACK_IMPORTED_MODULE_30__["SellerAuthGuard"]] },
    { path: 'seller/seller-services', component: _components_seller_seller_services_seller_services_seller_services_component__WEBPACK_IMPORTED_MODULE_31__["SellerServicesComponent"], canActivate: [_sellerAuth_guard__WEBPACK_IMPORTED_MODULE_30__["SellerAuthGuard"]] },
    { path: 'preactivation', component: _components_activation_preactivation_preactivation_component__WEBPACK_IMPORTED_MODULE_26__["PreactivationComponent"] },
    { path: 'postactivation/:token', component: _components_activation_postactivation_postactivation_component__WEBPACK_IMPORTED_MODULE_27__["PostactivationComponent"] },
    { path: 'request/:id', component: _components_request_request_component__WEBPACK_IMPORTED_MODULE_32__["RequestComponent"] }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__["NavbarComponent"],
                _components_login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"],
                _components_buyer_buyer_component__WEBPACK_IMPORTED_MODULE_8__["BuyerComponent"],
                _components_seller_seller_component__WEBPACK_IMPORTED_MODULE_9__["SellerComponent"],
                _components_home_home_component__WEBPACK_IMPORTED_MODULE_10__["HomeComponent"],
                _components_buyer_make_request_make_request_component__WEBPACK_IMPORTED_MODULE_11__["MakeRequestComponent"],
                _components_buyer_buyer_account_buyer_account_component__WEBPACK_IMPORTED_MODULE_12__["BuyerAccountComponent"],
                _components_seller_submit_offer_submit_offer_component__WEBPACK_IMPORTED_MODULE_13__["SubmitOfferComponent"],
                _components_seller_seller_account_seller_account_component__WEBPACK_IMPORTED_MODULE_14__["SellerAccountComponent"],
                _components_register_SellerRegister_SellerRegister_component__WEBPACK_IMPORTED_MODULE_15__["SellerRegisterComponent"],
                _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_16__["FooterComponent"],
                _components_login_sellerLogin_component__WEBPACK_IMPORTED_MODULE_6__["SellerLoginComponent"],
                _components_navbar_seller_navbar_seller_navbar_component__WEBPACK_IMPORTED_MODULE_24__["SellerNavbarComponent"],
                _components_navbar_buyer_navbar_buyer_navbar_component__WEBPACK_IMPORTED_MODULE_25__["BuyerNavbarComponent"],
                _components_register_BuyerRegister_BuyerRegister_component__WEBPACK_IMPORTED_MODULE_7__["BuyerRegisterComponent"],
                _components_activation_preactivation_preactivation_component__WEBPACK_IMPORTED_MODULE_26__["PreactivationComponent"],
                _components_activation_postactivation_postactivation_component__WEBPACK_IMPORTED_MODULE_27__["PostactivationComponent"],
                _components_seller_seller_services_seller_services_seller_services_component__WEBPACK_IMPORTED_MODULE_31__["SellerServicesComponent"],
                _components_request_request_component__WEBPACK_IMPORTED_MODULE_32__["RequestComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(appRoutes),
                _angular_forms__WEBPACK_IMPORTED_MODULE_17__["FormsModule"],
                angular2_flash_messages__WEBPACK_IMPORTED_MODULE_18__["FlashMessagesModule"].forRoot(),
                _angular_common_http__WEBPACK_IMPORTED_MODULE_23__["HttpClientModule"]
            ],
            providers: [_services_validate_service__WEBPACK_IMPORTED_MODULE_19__["ValidateService"], _services_register_service__WEBPACK_IMPORTED_MODULE_20__["RegisterService"], _services_auth_service__WEBPACK_IMPORTED_MODULE_21__["AuthService"], _services_storeFetch_service__WEBPACK_IMPORTED_MODULE_22__["StoreFetchService"], _services_seller_service__WEBPACK_IMPORTED_MODULE_28__["SellerService"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["Title"], _services_buyer_resolve__WEBPACK_IMPORTED_MODULE_33__["BuyerResolve"], _services_seller_resolve__WEBPACK_IMPORTED_MODULE_34__["SellerResolve"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/buyerAuth.guard.ts":
/*!************************************!*\
  !*** ./src/app/buyerAuth.guard.ts ***!
  \************************************/
/*! exports provided: BuyerAuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BuyerAuthGuard", function() { return BuyerAuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_storeFetch_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/storeFetch.service */ "./src/app/services/storeFetch.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BuyerAuthGuard = /** @class */ (function () {
    function BuyerAuthGuard(storeFetch, myRoute) {
        this.storeFetch = storeFetch;
        this.myRoute = myRoute;
    }
    BuyerAuthGuard.prototype.canActivate = function (next, state) {
        return this.storeFetch.buyerIsLoggedIn();
    };
    BuyerAuthGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_services_storeFetch_service__WEBPACK_IMPORTED_MODULE_1__["StoreFetchService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], BuyerAuthGuard);
    return BuyerAuthGuard;
}());



/***/ }),

/***/ "./src/app/components/activation/postactivation/postactivation.component.css":
/*!***********************************************************************************!*\
  !*** ./src/app/components/activation/postactivation/postactivation.component.css ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "form {\r\n  border: 3px solid #f1f1f1;\r\n  position: absolute;\r\n  top: 50%;\r\n  left: 50%;\r\n  height: 300px;\r\n  -webkit-transform: translate(-50%,-50%);\r\n          transform: translate(-50%,-50%);\r\n\r\n}\r\n\r\n/* Full-width inputs */\r\n\r\ninput[type=text], input[type=password] {\r\n  width: 100%;\r\n  padding: 12px 12px;\r\n  margin: 8px 0;\r\n  display: inline-block;\r\n  border: 1px solid #ccc;\r\n  box-sizing: border-box;\r\n}\r\n\r\n/* Set a style for all buttons */\r\n\r\nbutton {\r\n  background-color: #4CAF50;\r\n  color: white;\r\n  padding: 14px 20px;\r\n  margin: 8px 0;\r\n  border: none;\r\n  cursor: pointer;\r\n  width: 100%;\r\n}\r\n\r\n.loader {\r\n\r\n  border: 8px solid #f3f3f3; /* Light grey */\r\n  border-top: 8px solid #f44336; /* Blue */\r\n  border-radius: 50%;\r\n  width: 60px;\r\n  height: 60px;\r\n  \r\n  -webkit-animation: spin 2s linear infinite;\r\n  \r\n          animation: spin 2s linear infinite;\r\n}\r\n\r\n@-webkit-keyframes spin {\r\n  0% { -webkit-transform: rotate(0deg); transform: rotate(0deg); }\r\n  100% { -webkit-transform: rotate(360deg); transform: rotate(360deg); }\r\n}\r\n\r\n@keyframes spin {\r\n  0% { -webkit-transform: rotate(0deg); transform: rotate(0deg); }\r\n  100% { -webkit-transform: rotate(360deg); transform: rotate(360deg); }\r\n}\r\n\r\n/* Center the avatar image inside this container */\r\n\r\n.imgcontainer {\r\n  text-align: center;\r\n  margin: 24px 0 12px 0;\r\n}\r\n\r\n/* Add padding to containers */\r\n\r\n.container {\r\n  padding: 16px;\r\n\r\n}\r\n\r\n\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hY3RpdmF0aW9uL3Bvc3RhY3RpdmF0aW9uL3Bvc3RhY3RpdmF0aW9uLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSwwQkFBMEI7RUFDMUIsbUJBQW1CO0VBQ25CLFNBQVM7RUFDVCxVQUFVO0VBQ1YsY0FBYztFQUNkLHdDQUFnQztVQUFoQyxnQ0FBZ0M7O0NBRWpDOztBQUVELHVCQUF1Qjs7QUFDdkI7RUFDRSxZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLGNBQWM7RUFDZCxzQkFBc0I7RUFDdEIsdUJBQXVCO0VBQ3ZCLHVCQUF1QjtDQUN4Qjs7QUFFRCxpQ0FBaUM7O0FBQ2pDO0VBQ0UsMEJBQTBCO0VBQzFCLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsY0FBYztFQUNkLGFBQWE7RUFDYixnQkFBZ0I7RUFDaEIsWUFBWTtDQUNiOztBQUVEOztFQUVFLDBCQUEwQixDQUFDLGdCQUFnQjtFQUMzQyw4QkFBOEIsQ0FBQyxVQUFVO0VBQ3pDLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1osYUFBYTs7RUFFYiwyQ0FBbUM7O1VBQW5DLG1DQUFtQztDQUNwQzs7QUFFRDtFQUNFLEtBQUssZ0NBQXdCLENBQXhCLHdCQUF3QixFQUFFO0VBQy9CLE9BQU8sa0NBQTBCLENBQTFCLDBCQUEwQixFQUFFO0NBQ3BDOztBQUhEO0VBQ0UsS0FBSyxnQ0FBd0IsQ0FBeEIsd0JBQXdCLEVBQUU7RUFDL0IsT0FBTyxrQ0FBMEIsQ0FBMUIsMEJBQTBCLEVBQUU7Q0FDcEM7O0FBS0QsbURBQW1EOztBQUNuRDtFQUNFLG1CQUFtQjtFQUNuQixzQkFBc0I7Q0FDdkI7O0FBR0QsK0JBQStCOztBQUMvQjtFQUNFLGNBQWM7O0NBRWYiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2FjdGl2YXRpb24vcG9zdGFjdGl2YXRpb24vcG9zdGFjdGl2YXRpb24uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImZvcm0ge1xyXG4gIGJvcmRlcjogM3B4IHNvbGlkICNmMWYxZjE7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogNTAlO1xyXG4gIGxlZnQ6IDUwJTtcclxuICBoZWlnaHQ6IDMwMHB4O1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsLTUwJSk7XHJcblxyXG59XHJcblxyXG4vKiBGdWxsLXdpZHRoIGlucHV0cyAqL1xyXG5pbnB1dFt0eXBlPXRleHRdLCBpbnB1dFt0eXBlPXBhc3N3b3JkXSB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgcGFkZGluZzogMTJweCAxMnB4O1xyXG4gIG1hcmdpbjogOHB4IDA7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxufVxyXG5cclxuLyogU2V0IGEgc3R5bGUgZm9yIGFsbCBidXR0b25zICovXHJcbmJ1dHRvbiB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzRDQUY1MDtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgcGFkZGluZzogMTRweCAyMHB4O1xyXG4gIG1hcmdpbjogOHB4IDA7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLmxvYWRlciB7XHJcblxyXG4gIGJvcmRlcjogOHB4IHNvbGlkICNmM2YzZjM7IC8qIExpZ2h0IGdyZXkgKi9cclxuICBib3JkZXItdG9wOiA4cHggc29saWQgI2Y0NDMzNjsgLyogQmx1ZSAqL1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICB3aWR0aDogNjBweDtcclxuICBoZWlnaHQ6IDYwcHg7XHJcbiAgXHJcbiAgYW5pbWF0aW9uOiBzcGluIDJzIGxpbmVhciBpbmZpbml0ZTtcclxufVxyXG5cclxuQGtleWZyYW1lcyBzcGluIHtcclxuICAwJSB7IHRyYW5zZm9ybTogcm90YXRlKDBkZWcpOyB9XHJcbiAgMTAwJSB7IHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7IH1cclxufVxyXG5cclxuXHJcblxyXG5cclxuLyogQ2VudGVyIHRoZSBhdmF0YXIgaW1hZ2UgaW5zaWRlIHRoaXMgY29udGFpbmVyICovXHJcbi5pbWdjb250YWluZXIge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBtYXJnaW46IDI0cHggMCAxMnB4IDA7XHJcbn1cclxuXHJcblxyXG4vKiBBZGQgcGFkZGluZyB0byBjb250YWluZXJzICovXHJcbi5jb250YWluZXIge1xyXG4gIHBhZGRpbmc6IDE2cHg7XHJcblxyXG59XHJcblxyXG5cclxuXHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/activation/postactivation/postactivation.component.html":
/*!************************************************************************************!*\
  !*** ./src/app/components/activation/postactivation/postactivation.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<form class=\"col-md-4 col-md-offset-4\">\r\n  <div class=\"imgcontainer\">\r\n    <h2>Well done!</h2>\r\n    <br>\r\n    <h4>Your account is now activated!</h4>\r\n    <br>\r\n    <h4><strong>Redirecting...</strong></h4>\r\n    <br>\r\n    <div class=\"loader\"></div>\r\n    <br>\r\n    <span class=\"Resend Email\">Not automatically redirecting? <a href=\"#\">Click here!</a></span>\r\n    \r\n  </div>\r\n    \r\n</form>\r\n\r\n"

/***/ }),

/***/ "./src/app/components/activation/postactivation/postactivation.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/components/activation/postactivation/postactivation.component.ts ***!
  \**********************************************************************************/
/*! exports provided: PostactivationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostactivationComponent", function() { return PostactivationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_register_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/register.service */ "./src/app/services/register.service.ts");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// By Roni
// Email activation through link




var PostactivationComponent = /** @class */ (function () {
    function PostactivationComponent(route, registerService, flashMessage, router) {
        this.route = route;
        this.registerService = registerService;
        this.flashMessage = flashMessage;
        this.router = router;
    }
    PostactivationComponent.prototype.ngOnInit = function () {
        var _this = this;
        // get URL parameters
        this.route.params.subscribe(function (params) {
            _this.token = params.token; // --> provided token included with the parameter
            _this.registerService.activateAccount(_this.token).subscribe(function (data) {
                if (data.success) { // Buyer account activated, prioritizing buyer activation
                    setTimeout(function () {
                        _this.flashMessage.show(data.msg, { cssClass: 'alert-danger', timeout: 3000 });
                        _this.router.navigate(['/login']);
                    }, 3000); // 5s
                }
                else { // Check if the token provided is for a seller account
                    _this.registerService.selleractivateAccount(_this.token).subscribe(function (data2) {
                        if (data2.success) { // Seller account activated
                            setTimeout(function () {
                                _this.flashMessage.show(data2.msg, { cssClass: 'alert-danger', timeout: 3000 });
                                _this.router.navigate(['/seller-login']);
                            }, 3000); // 5s
                        }
                        else { // Invalid Token/URL
                            _this.flashMessage.show(data.msg, { cssClass: 'alert-danger', timeout: 3000 });
                        }
                    });
                }
            });
        });
    };
    PostactivationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-postactivation',
            template: __webpack_require__(/*! ./postactivation.component.html */ "./src/app/components/activation/postactivation/postactivation.component.html"),
            styles: [__webpack_require__(/*! ./postactivation.component.css */ "./src/app/components/activation/postactivation/postactivation.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _services_register_service__WEBPACK_IMPORTED_MODULE_2__["RegisterService"],
            angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__["FlashMessagesService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], PostactivationComponent);
    return PostactivationComponent;
}());



/***/ }),

/***/ "./src/app/components/activation/preactivation/preactivation.component.css":
/*!*********************************************************************************!*\
  !*** ./src/app/components/activation/preactivation/preactivation.component.css ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "form {\r\n    border: 3px solid #f1f1f1;\r\n    position: absolute;\r\n    top: 50%;\r\n    left: 50%;\r\n    height: 200px;\r\n    -webkit-transform: translate(-50%,-50%);\r\n            transform: translate(-50%,-50%);\r\n  \r\n  }\r\n  \r\n  /* Full-width inputs */\r\n  \r\n  input[type=text], input[type=password] {\r\n    width: 100%;\r\n    padding: 12px 12px;\r\n    margin: 8px 0;\r\n    display: inline-block;\r\n    border: 1px solid #ccc;\r\n    box-sizing: border-box;\r\n  }\r\n  \r\n  /* Set a style for all buttons */\r\n  \r\n  button {\r\n    background-color: #4CAF50;\r\n    color: white;\r\n    padding: 14px 20px;\r\n    margin: 8px 0;\r\n    border: none;\r\n    cursor: pointer;\r\n    width: 100%;\r\n  }\r\n  \r\n  /* Center the avatar image inside this container */\r\n  \r\n  .imgcontainer {\r\n    text-align: center;\r\n    margin: 24px 0 12px 0;\r\n  }\r\n  \r\n  /* Add padding to containers */\r\n  \r\n  .container {\r\n    padding: 16px;\r\n  \r\n  }\r\n\r\n  \r\n\r\n  \r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hY3RpdmF0aW9uL3ByZWFjdGl2YXRpb24vcHJlYWN0aXZhdGlvbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksMEJBQTBCO0lBQzFCLG1CQUFtQjtJQUNuQixTQUFTO0lBQ1QsVUFBVTtJQUNWLGNBQWM7SUFDZCx3Q0FBZ0M7WUFBaEMsZ0NBQWdDOztHQUVqQzs7RUFFRCx1QkFBdUI7O0VBQ3ZCO0lBQ0UsWUFBWTtJQUNaLG1CQUFtQjtJQUNuQixjQUFjO0lBQ2Qsc0JBQXNCO0lBQ3RCLHVCQUF1QjtJQUN2Qix1QkFBdUI7R0FDeEI7O0VBRUQsaUNBQWlDOztFQUNqQztJQUNFLDBCQUEwQjtJQUMxQixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLGNBQWM7SUFDZCxhQUFhO0lBQ2IsZ0JBQWdCO0lBQ2hCLFlBQVk7R0FDYjs7RUFNRCxtREFBbUQ7O0VBQ25EO0lBQ0UsbUJBQW1CO0lBQ25CLHNCQUFzQjtHQUN2Qjs7RUFHRCwrQkFBK0I7O0VBQy9CO0lBQ0UsY0FBYzs7R0FFZiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYWN0aXZhdGlvbi9wcmVhY3RpdmF0aW9uL3ByZWFjdGl2YXRpb24uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImZvcm0ge1xyXG4gICAgYm9yZGVyOiAzcHggc29saWQgI2YxZjFmMTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogNTAlO1xyXG4gICAgbGVmdDogNTAlO1xyXG4gICAgaGVpZ2h0OiAyMDBweDtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsLTUwJSk7XHJcbiAgXHJcbiAgfVxyXG4gIFxyXG4gIC8qIEZ1bGwtd2lkdGggaW5wdXRzICovXHJcbiAgaW5wdXRbdHlwZT10ZXh0XSwgaW5wdXRbdHlwZT1wYXNzd29yZF0ge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwYWRkaW5nOiAxMnB4IDEycHg7XHJcbiAgICBtYXJnaW46IDhweCAwO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgfVxyXG4gIFxyXG4gIC8qIFNldCBhIHN0eWxlIGZvciBhbGwgYnV0dG9ucyAqL1xyXG4gIGJ1dHRvbiB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNENBRjUwO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgcGFkZGluZzogMTRweCAyMHB4O1xyXG4gICAgbWFyZ2luOiA4cHggMDtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuICBcclxuXHJcbiAgXHJcblxyXG4gIFxyXG4gIC8qIENlbnRlciB0aGUgYXZhdGFyIGltYWdlIGluc2lkZSB0aGlzIGNvbnRhaW5lciAqL1xyXG4gIC5pbWdjb250YWluZXIge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luOiAyNHB4IDAgMTJweCAwO1xyXG4gIH1cclxuICBcclxuICBcclxuICAvKiBBZGQgcGFkZGluZyB0byBjb250YWluZXJzICovXHJcbiAgLmNvbnRhaW5lciB7XHJcbiAgICBwYWRkaW5nOiAxNnB4O1xyXG4gIFxyXG4gIH1cclxuXHJcbiAgXHJcblxyXG4gICJdfQ== */"

/***/ }),

/***/ "./src/app/components/activation/preactivation/preactivation.component.html":
/*!**********************************************************************************!*\
  !*** ./src/app/components/activation/preactivation/preactivation.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n  <form class=\"col-md-4 col-md-offset-4\">\r\n    <div class=\"imgcontainer\">\r\n      <h2>Almost There!</h2>\r\n      <br>\r\n      <h4>Please check you email to validate your account</h4>\r\n      <br>\r\n      <span class=\"Resend Email\">Didn't recieve an email? <a href=\"#\">Resend Email</a></span>\r\n    </div>\r\n      \r\n  </form>\r\n\r\n"

/***/ }),

/***/ "./src/app/components/activation/preactivation/preactivation.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/components/activation/preactivation/preactivation.component.ts ***!
  \********************************************************************************/
/*! exports provided: PreactivationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PreactivationComponent", function() { return PreactivationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PreactivationComponent = /** @class */ (function () {
    function PreactivationComponent() {
    }
    PreactivationComponent.prototype.ngOnInit = function () {
    };
    PreactivationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-preactivation',
            template: __webpack_require__(/*! ./preactivation.component.html */ "./src/app/components/activation/preactivation/preactivation.component.html"),
            styles: [__webpack_require__(/*! ./preactivation.component.css */ "./src/app/components/activation/preactivation/preactivation.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PreactivationComponent);
    return PreactivationComponent;
}());



/***/ }),

/***/ "./src/app/components/buyer/buyer-account/buyer-account.component.css":
/*!****************************************************************************!*\
  !*** ./src/app/components/buyer/buyer-account/buyer-account.component.css ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".submitBtn{\r\n    margin-top: 0px;\r\n    margin-left: 923px;\r\n    position: absolute;\r\n    background-color: #e60000;\r\n    border-color: black;\r\n    border-width: 0.5px;\r\n  }\r\n  .dropDownBtn{\r\n    position: absolute;\r\n    margin-top: 0px;\r\n    margin-left: 982px;\r\n  }\r\n  .dDownBtn{\r\n    background-color: #0066ff;\r\n    border-color: black;\r\n    border-width: 0.5px;\r\n  }\r\n  .submitSearchBtn{\r\n    background-color: #e60000;\r\n    border-color: black;\r\n    border-width: 0.5px;\r\n  }\r\n  .searchBox{\r\n    position: absolute;\r\n    margin-top: 60px;\r\n    width: 1080px;\r\n  }\r\n  html, body {\r\n    height: 100%;\r\n  }\r\n  #container {\r\n    min-height: 100%;\r\n    margin-bottom: -330px;\r\n    position: relative;\r\n  }\r\n  #footer {\r\n    height: 330px;\r\n    position: relative;\r\n  }\r\n  .clearfooter {\r\n    height: 330px;\r\n    clear: both;\r\n  }\r\n  .editBtn{\r\n    background-color: darkorange;\r\n  }\r\n  .saveBtn{\r\n    background-color: #e60000;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9idXllci9idXllci1hY2NvdW50L2J1eWVyLWFjY291bnQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsbUJBQW1CO0lBQ25CLDBCQUEwQjtJQUMxQixvQkFBb0I7SUFDcEIsb0JBQW9CO0dBQ3JCO0VBQ0Q7SUFDRSxtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtHQUNwQjtFQUNEO0lBQ0UsMEJBQTBCO0lBQzFCLG9CQUFvQjtJQUNwQixvQkFBb0I7R0FDckI7RUFDRDtJQUNFLDBCQUEwQjtJQUMxQixvQkFBb0I7SUFDcEIsb0JBQW9CO0dBQ3JCO0VBQ0Q7SUFDRSxtQkFBbUI7SUFDbkIsaUJBQWlCO0lBQ2pCLGNBQWM7R0FDZjtFQUVEO0lBQ0UsYUFBYTtHQUNkO0VBRUQ7SUFDRSxpQkFBaUI7SUFDakIsc0JBQXNCO0lBQ3RCLG1CQUFtQjtHQUNwQjtFQUVEO0lBQ0UsY0FBYztJQUNkLG1CQUFtQjtHQUNwQjtFQUVEO0lBQ0UsY0FBYztJQUNkLFlBQVk7R0FDYjtFQUVEO0lBQ0UsNkJBQTZCO0dBQzlCO0VBQ0Q7SUFDRSwwQkFBMEI7R0FDM0IiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2J1eWVyL2J1eWVyLWFjY291bnQvYnV5ZXItYWNjb3VudC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnN1Ym1pdEJ0bntcclxuICAgIG1hcmdpbi10b3A6IDBweDtcclxuICAgIG1hcmdpbi1sZWZ0OiA5MjNweDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlNjAwMDA7XHJcbiAgICBib3JkZXItY29sb3I6IGJsYWNrO1xyXG4gICAgYm9yZGVyLXdpZHRoOiAwLjVweDtcclxuICB9XHJcbiAgLmRyb3BEb3duQnRue1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbWFyZ2luLXRvcDogMHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDk4MnB4O1xyXG4gIH1cclxuICAuZERvd25CdG57XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA2NmZmO1xyXG4gICAgYm9yZGVyLWNvbG9yOiBibGFjaztcclxuICAgIGJvcmRlci13aWR0aDogMC41cHg7XHJcbiAgfVxyXG4gIC5zdWJtaXRTZWFyY2hCdG57XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTYwMDAwO1xyXG4gICAgYm9yZGVyLWNvbG9yOiBibGFjaztcclxuICAgIGJvcmRlci13aWR0aDogMC41cHg7XHJcbiAgfVxyXG4gIC5zZWFyY2hCb3h7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBtYXJnaW4tdG9wOiA2MHB4O1xyXG4gICAgd2lkdGg6IDEwODBweDtcclxuICB9XHJcblxyXG4gIGh0bWwsIGJvZHkge1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gIH1cclxuXHJcbiAgI2NvbnRhaW5lciB7XHJcbiAgICBtaW4taGVpZ2h0OiAxMDAlO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogLTMzMHB4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIH1cclxuICBcclxuICAjZm9vdGVyIHtcclxuICAgIGhlaWdodDogMzMwcHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgfVxyXG5cclxuICAuY2xlYXJmb290ZXIge1xyXG4gICAgaGVpZ2h0OiAzMzBweDtcclxuICAgIGNsZWFyOiBib3RoO1xyXG4gIH1cclxuXHJcbiAgLmVkaXRCdG57XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrb3JhbmdlO1xyXG4gIH1cclxuICAuc2F2ZUJ0bntcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlNjAwMDA7XHJcbiAgfSJdfQ== */"

/***/ }),

/***/ "./src/app/components/buyer/buyer-account/buyer-account.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/components/buyer/buyer-account/buyer-account.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-buyer-navbar></app-buyer-navbar>\r\n<flash-messages></flash-messages>\r\n\r\n<!-- BOOTSTRAP via CDN -->\r\n<link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css\">\r\n<script src=\"https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js\"></script>\r\n<script src=\"https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js\"></script>\r\n<script src=\"https://maxcdn.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js\"></script>\r\n\r\n<!--Buyer account page\r\nBasic structure (labels, fields, etc) - Bryan Vu-->\r\n\r\n<div class=\"container\">\r\n  &nbsp;\r\n  <h1>My Account</h1>\r\n  &nbsp;\r\n  <div class=\"card\">\r\n    <div class=\"card-body\">\r\n      <h4>Personal Information</h4>\r\n      &nbsp;\r\n      <form action=\"/action_page.php\">\r\n        <div class=\"form-group\">\r\n          <label for=\"fName\">First Name:</label>\r\n          <input type=\"text\" class=\"form-control\" id=\"fName\" name=\"firstName\" value={{buyer.data.first_name}} disabled\r\n            required>\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <label for=\"lName\">Last Name:</label>\r\n          <input type=\"text\" class=\"form-control\" id=\"lName\" name=\"lastName\" value={{buyer.data.last_name}} disabled\r\n            required>\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <label for=\"eAddress\">Email Address:</label>\r\n          <input type=\"email\" class=\"form-control\" id=\"eAddress\" name=\"emailAddress\" value={{buyer.data.email}}\r\n            disabled required>\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <label for=\"pwd\">Password:</label>\r\n          <input type=\"password\" class=\"form-control\" id=\"pwd\" name=\"password\" value={{buyer.data.password}} disabled\r\n            required>\r\n        </div>\r\n        <div class=\"form-group\" id=\"newPass\" hidden>\r\n          <label for=\"newPwd\">New Password:</label>\r\n          <input type=\"password\" placeholder=\"New Password\" class=\"form-control\" id=\"newPwd\" name=\"newPassword\"\r\n            required>\r\n        </div>\r\n        <div class=\"form-group\" id=\"verify\" hidden>\r\n          <label for=\"verifyPwd\">Confirm Password:</label>\r\n          <input type=\"password\" placeholder=\"Confirm Password\" class=\"form-control\" id=\"verifyPwd\" name=\"verifyPassword\"\r\n            required>\r\n        </div>\r\n        <p class=\"text-danger\" id=\"errorMessage\" hidden>Password did not match!</p>\r\n        <button type=\"button\" class=\"btn editBtn btn-lg\" id=\"editBtn\" (click)=\"editFunction()\">Edit</button>\r\n        <button type=\"button\" class=\"btn saveBtn btn-lg\" id=\"saveBtn\" (click)=\"saveFunction()\" disabled=true>Save</button>\r\n      </form>\r\n\r\n    </div>\r\n  </div>\r\n  <div class=\"clearfooter\"></div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/buyer/buyer-account/buyer-account.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/components/buyer/buyer-account/buyer-account.component.ts ***!
  \***************************************************************************/
/*! exports provided: BuyerAccountComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BuyerAccountComponent", function() { return BuyerAccountComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_buyer_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/buyer.service */ "./src/app/services/buyer.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BuyerAccountComponent = /** @class */ (function () {
    function BuyerAccountComponent(buyerService, route) {
        this.buyerService = buyerService;
        this.route = route;
    }
    // When the buyer account page loads, the logged in buyer's information will be fetched and displayed on the page.
    BuyerAccountComponent.prototype.ngOnInit = function () {
        this.buyer = this.route.snapshot.data['buyer'];
    };
    // Function enables users to use the textfields in order to edit their information. 
    // This only works with the front end so far. This has not been tied in with the backend.
    BuyerAccountComponent.prototype.editFunction = function () {
        document.getElementById('fName').disabled = false;
        document.getElementById('lName').disabled = false;
        document.getElementById('eAddress').disabled = false;
        document.getElementById('saveBtn').disabled = false;
        document.getElementById('editBtn').disabled = true;
        document.getElementById('verify').hidden = false;
        document.getElementById('newPass').hidden = false;
    };
    // Function checks to see if the edited password matches before anything gets saved. A number of textfields are disabled once this function gets executed.
    // If there is no password inserted or the new password does not match when confirming. An error will be displayed to the user.
    // This only works with the front end so far. This has not been tied in with the backend.
    BuyerAccountComponent.prototype.saveFunction = function () {
        var newPass = document.getElementById('newPwd').value;
        var confirm = document.getElementById('verifyPwd').value;
        if ((newPass === confirm) && document.getElementById('verifyPwd').value !== '') {
            document.getElementById('pwd').value = document.getElementById('newPwd').value;
            document.getElementById('fName').disabled = true;
            document.getElementById('lName').disabled = true;
            document.getElementById('eAddress').disabled = true;
            document.getElementById('pwd').disabled = true;
            document.getElementById('saveBtn').disabled = true;
            document.getElementById('editBtn').disabled = false;
            document.getElementById('verify').hidden = true;
            document.getElementById('newPass').hidden = true;
            document.getElementById('newPwd').value = '';
            document.getElementById('verifyPwd').value = '';
            document.getElementById('errorMessage').hidden = true;
            document.getElementById('verifyPwd').style.backgroundColor = 'White';
            document.getElementById('newPwd').style.backgroundColor = 'White';
        }
        else {
            document.getElementById('errorMessage').hidden = false;
            document.getElementById('verifyPwd').style.backgroundColor = 'Red';
            document.getElementById('newPwd').style.backgroundColor = 'Red';
        }
    };
    // This function has not been fully implemented yet. Once this gets completed it will help tie the frontend and backend of this page together.
    BuyerAccountComponent.prototype.updateData = function () {
        this.buyer.updateData();
    };
    BuyerAccountComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-buyer-account',
            template: __webpack_require__(/*! ./buyer-account.component.html */ "./src/app/components/buyer/buyer-account/buyer-account.component.html"),
            styles: [__webpack_require__(/*! ./buyer-account.component.css */ "./src/app/components/buyer/buyer-account/buyer-account.component.css")]
        }),
        __metadata("design:paramtypes", [_services_buyer_service__WEBPACK_IMPORTED_MODULE_1__["BuyerService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], BuyerAccountComponent);
    return BuyerAccountComponent;
}());



/***/ }),

/***/ "./src/app/components/buyer/buyer.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/buyer/buyer.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body, html {\r\n  height: 100%;\r\n}\r\n.app-loading {\r\n  position: center;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  justify-content: center;\r\n  height: 100%;\r\n}\r\n.app-loading .spinner {\r\n  height: 200px;\r\n  width: 200px;\r\n  -webkit-animation: rotate 2s linear infinite;\r\n          animation: rotate 2s linear infinite;\r\n  -webkit-transform-origin: center center;\r\n          transform-origin: center center;\r\n  position: absolute;\r\n  top: 0;\r\n  bottom: 0;\r\n  left: 0;\r\n  right: 0;\r\n  margin: auto;\r\n}\r\n.app-loading .spinner .path {\r\n  stroke-dasharray: 1, 200;\r\n  stroke-dashoffset: 0;\r\n  -webkit-animation: dash 1.5s ease-in-out infinite;\r\n          animation: dash 1.5s ease-in-out infinite;\r\n  stroke-linecap: round;\r\n  stroke: #ddd;\r\n}\r\nhtml, body {\r\n  height: 100%;\r\n}\r\n.btn {\r\n\r\n  background-color: rgb(218, 64, 26);\r\n  color: white;\r\n  font-weight: bold;\r\n  opacity: .95;\r\n}\r\n/* Add a hover effect for buttons */\r\n.btn:hover {\r\n  opacity:.75;\r\n  background-color: darkgreen;\r\n}\r\n#container {\r\n  min-height: 100%;\r\n  margin-bottom: -600px;\r\n  position: relative;\r\n}\r\n#footer {\r\n  height: 600px;\r\n  position: relative;\r\n}\r\n.clearfooter {\r\n  height: 600px;\r\n  clear: both;\r\n}\r\n@-webkit-keyframes rotate {\r\n  100% {\r\n    -webkit-transform: rotate(360deg);\r\n            transform: rotate(360deg);\r\n  }\r\n}\r\n@keyframes rotate {\r\n  100% {\r\n    -webkit-transform: rotate(360deg);\r\n            transform: rotate(360deg);\r\n  }\r\n}\r\n@-webkit-keyframes dash {\r\n  0% {\r\n    stroke-dasharray: 1, 200;\r\n    stroke-dashoffset: 0;\r\n  }\r\n  50% {\r\n    stroke-dasharray: 89, 200;\r\n    stroke-dashoffset: -35px;\r\n  }\r\n  100% {\r\n    stroke-dasharray: 89, 200;\r\n    stroke-dashoffset: -124px;\r\n  }\r\n}\r\n@keyframes dash {\r\n  0% {\r\n    stroke-dasharray: 1, 200;\r\n    stroke-dashoffset: 0;\r\n  }\r\n  50% {\r\n    stroke-dasharray: 89, 200;\r\n    stroke-dashoffset: -35px;\r\n  }\r\n  100% {\r\n    stroke-dasharray: 89, 200;\r\n    stroke-dashoffset: -124px;\r\n  }\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9idXllci9idXllci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBYTtDQUNkO0FBQ0Q7RUFDRSxpQkFBaUI7RUFDakIsY0FBYztFQUNkLHVCQUF1QjtFQUN2QixvQkFBb0I7RUFDcEIsd0JBQXdCO0VBQ3hCLGFBQWE7Q0FDZDtBQUVEO0VBQ0UsY0FBYztFQUNkLGFBQWE7RUFDYiw2Q0FBcUM7VUFBckMscUNBQXFDO0VBQ3JDLHdDQUFnQztVQUFoQyxnQ0FBZ0M7RUFDaEMsbUJBQW1CO0VBQ25CLE9BQU87RUFDUCxVQUFVO0VBQ1YsUUFBUTtFQUNSLFNBQVM7RUFDVCxhQUFhO0NBQ2Q7QUFFRDtFQUNFLHlCQUF5QjtFQUN6QixxQkFBcUI7RUFDckIsa0RBQTBDO1VBQTFDLDBDQUEwQztFQUMxQyxzQkFBc0I7RUFDdEIsYUFBYTtDQUNkO0FBRUQ7RUFDRSxhQUFhO0NBQ2Q7QUFDRDs7RUFFRSxtQ0FBbUM7RUFDbkMsYUFBYTtFQUNiLGtCQUFrQjtFQUNsQixhQUFhO0NBQ2Q7QUFFRCxvQ0FBb0M7QUFDcEM7RUFDRSxZQUFZO0VBQ1osNEJBQTRCO0NBQzdCO0FBRUQ7RUFDRSxpQkFBaUI7RUFDakIsc0JBQXNCO0VBQ3RCLG1CQUFtQjtDQUNwQjtBQUVEO0VBQ0UsY0FBYztFQUNkLG1CQUFtQjtDQUNwQjtBQUVEO0VBQ0UsY0FBYztFQUNkLFlBQVk7Q0FDYjtBQUVEO0VBQ0U7SUFDRSxrQ0FBMEI7WUFBMUIsMEJBQTBCO0dBQzNCO0NBQ0Y7QUFKRDtFQUNFO0lBQ0Usa0NBQTBCO1lBQTFCLDBCQUEwQjtHQUMzQjtDQUNGO0FBRUQ7RUFDRTtJQUNFLHlCQUF5QjtJQUN6QixxQkFBcUI7R0FDdEI7RUFDRDtJQUNFLDBCQUEwQjtJQUMxQix5QkFBeUI7R0FDMUI7RUFDRDtJQUNFLDBCQUEwQjtJQUMxQiwwQkFBMEI7R0FDM0I7Q0FDRjtBQWJEO0VBQ0U7SUFDRSx5QkFBeUI7SUFDekIscUJBQXFCO0dBQ3RCO0VBQ0Q7SUFDRSwwQkFBMEI7SUFDMUIseUJBQXlCO0dBQzFCO0VBQ0Q7SUFDRSwwQkFBMEI7SUFDMUIsMEJBQTBCO0dBQzNCO0NBQ0YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2J1eWVyL2J1eWVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJib2R5LCBodG1sIHtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuLmFwcC1sb2FkaW5nIHtcclxuICBwb3NpdGlvbjogY2VudGVyO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuLmFwcC1sb2FkaW5nIC5zcGlubmVyIHtcclxuICBoZWlnaHQ6IDIwMHB4O1xyXG4gIHdpZHRoOiAyMDBweDtcclxuICBhbmltYXRpb246IHJvdGF0ZSAycyBsaW5lYXIgaW5maW5pdGU7XHJcbiAgdHJhbnNmb3JtLW9yaWdpbjogY2VudGVyIGNlbnRlcjtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAwO1xyXG4gIGJvdHRvbTogMDtcclxuICBsZWZ0OiAwO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIG1hcmdpbjogYXV0bztcclxufVxyXG5cclxuLmFwcC1sb2FkaW5nIC5zcGlubmVyIC5wYXRoIHtcclxuICBzdHJva2UtZGFzaGFycmF5OiAxLCAyMDA7XHJcbiAgc3Ryb2tlLWRhc2hvZmZzZXQ6IDA7XHJcbiAgYW5pbWF0aW9uOiBkYXNoIDEuNXMgZWFzZS1pbi1vdXQgaW5maW5pdGU7XHJcbiAgc3Ryb2tlLWxpbmVjYXA6IHJvdW5kO1xyXG4gIHN0cm9rZTogI2RkZDtcclxufVxyXG5cclxuaHRtbCwgYm9keSB7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcbi5idG4ge1xyXG5cclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjE4LCA2NCwgMjYpO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBvcGFjaXR5OiAuOTU7XHJcbn1cclxuXHJcbi8qIEFkZCBhIGhvdmVyIGVmZmVjdCBmb3IgYnV0dG9ucyAqL1xyXG4uYnRuOmhvdmVyIHtcclxuICBvcGFjaXR5Oi43NTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrZ3JlZW47XHJcbn1cclxuXHJcbiNjb250YWluZXIge1xyXG4gIG1pbi1oZWlnaHQ6IDEwMCU7XHJcbiAgbWFyZ2luLWJvdHRvbTogLTYwMHB4O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuI2Zvb3RlciB7XHJcbiAgaGVpZ2h0OiA2MDBweDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbi5jbGVhcmZvb3RlciB7XHJcbiAgaGVpZ2h0OiA2MDBweDtcclxuICBjbGVhcjogYm90aDtcclxufVxyXG5cclxuQGtleWZyYW1lcyByb3RhdGUge1xyXG4gIDEwMCUge1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcclxuICB9XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgZGFzaCB7XHJcbiAgMCUge1xyXG4gICAgc3Ryb2tlLWRhc2hhcnJheTogMSwgMjAwO1xyXG4gICAgc3Ryb2tlLWRhc2hvZmZzZXQ6IDA7XHJcbiAgfVxyXG4gIDUwJSB7XHJcbiAgICBzdHJva2UtZGFzaGFycmF5OiA4OSwgMjAwO1xyXG4gICAgc3Ryb2tlLWRhc2hvZmZzZXQ6IC0zNXB4O1xyXG4gIH1cclxuICAxMDAlIHtcclxuICAgIHN0cm9rZS1kYXNoYXJyYXk6IDg5LCAyMDA7XHJcbiAgICBzdHJva2UtZGFzaG9mZnNldDogLTEyNHB4O1xyXG4gIH1cclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/components/buyer/buyer.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/buyer/buyer.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-buyer-navbar></app-buyer-navbar>\r\n\r\n<!--\r\nBryan Vu contributed most of this buyer portal page.\r\n-->\r\n\r\n<div class = \"container\" *ngIf=\"buyer\">\r\n&nbsp;\r\n  <div class=\"row justify-content-md\">\r\n    <div class=\"col col\">\r\n      <h4 class=\"page-header\">Welcome, {{buyer.data.first_name}}</h4>\r\n    </div>\r\n    <div class=\"col col-lg-auto\">\r\n      <button type=\"button\" routerLink=\"/buyer/make-request\" class=\"btn btn-block btn-lg\">Submit New Request</button>\r\n    </div>\r\n  </div>\r\n  <div class=\"tabbable\">\r\n    <ul class=\"nav nav-tabs\" id=\"myTab\" role=\"tablist\">\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link active\" data-toggle=\"tab\" [ngClass]=\"{'active':currentTab === 'requests'}\" data-target=\"#requests\" role=\"tab\" aria-controls=\"requests\" aria-selected=\"true\" (click)=\"requests('requests')\">Requests</a>\r\n      </li>\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link\" data-toggle=\"tab\" [ngClass]=\"{'active':currentTab === 'history'}\" data-target=\"#history\" role=\"tab\" aria-controls=\"history\" aria-selected=\"false\" (click)=\"history('history')\">History</a>\r\n      </li>\r\n    </ul>\r\n    <div class=\"tab-content\" id=\"myTabContent\">\r\n      <div class=\"tab-pane fade show active\" id=\"requests\" [ngClass]=\"{'active':currentTab === 'requests'}\" role=\"tabpanel\" aria-labelledby=\"requests-tab\">\r\n          <br>\r\n          <h3>My Requests</h3>\r\n\r\n          <div class=\"row justify-content-md\">\r\n            <div class=\"col\">\r\n            </div>\r\n            <div class=\"input-group col searchBox\">\r\n              <input type=\"text\" class=\"form-control\" placeholder=\"Search Requests\">\r\n              <div class=\"input-group-append\">\r\n                <button class=\"btn btn-block btn-dark submitSearchBtn\" type=\"submit\">Search</button>\r\n                </div>\r\n            </div>\r\n          </div>\r\n          &nbsp;\r\n          <ul class=\"container\">\r\n            <li class=\"card container\" *ngFor=\"let request of requestList\">\r\n              &nbsp;\r\n\r\n              <div class=\"row\">\r\n                <div class=\"col-md-auto\">\r\n                  <h4>{{request.title}}</h4>\r\n                </div>\r\n                <div class=\"col\">\r\n                <p><b>Offer count:</b> {{request.offerCount}}</p>\r\n                </div>\r\n              </div>\r\n\r\n              <p><b>Deadline:</b> {{request.deadline}}</p>\r\n              <p><b>Description:</b> {{request.description}}</p>\r\n              <div class=\"col-sm-12\" style=\"text-align: right;\">\r\n              <button type=\"button\" routerLink=\"/request/{{request._id}}\" class=\"btn\">View Offers</button>\r\n               </div>\r\n              <hr>\r\n\r\n            </li>\r\n\r\n          </ul>\r\n          <br>\r\n\r\n      </div>\r\n\r\n\r\n      <div class=\"tab-pane fade show\" id=\"history\" [ngClass]=\"{'active':currentTab === 'history'}\" role=\"tabpanel\" aria-labelledby=\"history-tab\">\r\n\r\n        <br>\r\n        <h3>My History</h3>\r\n\r\n        <div class=\"row justify-content-md\">\r\n          <div class=\"col\">\r\n\r\n\r\n\r\n          </div>\r\n          <div class=\"input-group col searchBox\">\r\n            <input type=\"text\" class=\"form-control\" placeholder=\"Search History\">\r\n            <div class=\"input-group-append\">\r\n              <button class=\"btn btn-block btn-dark submitSearchBtn\" type=\"submit\">Search</button>\r\n              </div>\r\n          </div>\r\n        </div>\r\n        &nbsp;\r\n      </div>\r\n    </div>\r\n    <div class=\"clearfooter\"></div>\r\n  </div>\r\n"

/***/ }),

/***/ "./src/app/components/buyer/buyer.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/buyer/buyer.component.ts ***!
  \*****************************************************/
/*! exports provided: BuyerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BuyerComponent", function() { return BuyerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_register_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/register.service */ "./src/app/services/register.service.ts");
/* harmony import */ var _services_buyer_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/buyer.service */ "./src/app/services/buyer.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var BuyerComponent = /** @class */ (function () {
    function BuyerComponent(registerService, buyerService, router, route) {
        this.registerService = registerService;
        this.buyerService = buyerService;
        this.router = router;
        this.route = route;
        // tslint:disable-next-line:member-ordering
        // tabbed navigation for viewing current requests and buyer
        // account history - Bryan Vu
        this.currentTab = 'requests';
    }
    // showing buyer info when buyer portal page loads - Bryan Vu
    BuyerComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.buyer = this.route.snapshot.data['buyer'];
        this.buyerService.getBuyerRequests().subscribe(function (requests) {
            _this.requestList = requests;
        });
    };
    BuyerComponent.prototype.requests = function (currentTab) {
        this.currentTab = currentTab;
    };
    BuyerComponent.prototype.history = function (currentTab) {
        this.currentTab = currentTab;
    };
    BuyerComponent.prototype.refreshBuyer = function () {
        this.buyer = JSON.parse(localStorage.getItem('buyer'));
        if (this.buyer == null) {
            window.location.reload();
        }
        else {
            console.log(this.buyer);
        }
    };
    BuyerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-buyer',
            template: __webpack_require__(/*! ./buyer.component.html */ "./src/app/components/buyer/buyer.component.html"),
            styles: [__webpack_require__(/*! ./buyer.component.css */ "./src/app/components/buyer/buyer.component.css")]
        }),
        __metadata("design:paramtypes", [_services_register_service__WEBPACK_IMPORTED_MODULE_1__["RegisterService"],
            _services_buyer_service__WEBPACK_IMPORTED_MODULE_2__["BuyerService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], BuyerComponent);
    return BuyerComponent;
}());



/***/ }),

/***/ "./src/app/components/buyer/make-request/make-request.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/components/buyer/make-request/make-request.component.css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = " body {\r\n  -webkit-touch-callout: none;\r\n  -webkit-text-size-adjust: none;\r\n  -webkit-user-select: node;\r\n  background-image: url('logistics2.jpg');\r\n  padding: 0;\r\n  background-repeat:no-repeat;\r\n  background-size:cover;\r\n  }\r\n\r\n  form{\r\n\r\n    width: 900px;\r\n    text-align: left;\r\n    margin: auto;\r\n    opacity: .90;\r\n\r\n\r\n  }\r\n\r\n  .form-control {\r\n    padding: 6px;\r\n\r\n    position: relative;\r\n\r\n  }\r\n\r\n  .btn {\r\n    width: 100px;\r\n    background-color: rgb(218, 64, 26);\r\n    color: white;\r\n    font-weight: bold;\r\n}\r\n\r\n  /* Add a hover effect for buttons */\r\n\r\n  .btn:hover {\r\n  opacity:.75;\r\n  background-color: darkgreen;\r\n}\r\n\r\n  #container {\r\n    min-height: 100%;\r\n    margin-bottom: -330px;\r\n    position: relative;\r\n  }\r\n\r\n  #footer {\r\n    height: 330px;\r\n    position: relative;\r\n  }\r\n\r\n  .clearfooter {\r\n    height: 330px;\r\n    clear: both;\r\n  }\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9idXllci9tYWtlLXJlcXVlc3QvbWFrZS1yZXF1ZXN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkNBQUM7RUFDQyw0QkFBNEI7RUFDNUIsK0JBQStCO0VBQy9CLDBCQUEwQjtFQUMxQix3Q0FBZ0U7RUFDaEUsV0FBVztFQUNYLDRCQUE0QjtFQUM1QixzQkFBc0I7R0FDckI7O0VBRUQ7O0lBRUUsYUFBYTtJQUNiLGlCQUFpQjtJQUNqQixhQUFhO0lBQ2IsYUFBYTs7O0dBR2Q7O0VBQ0Q7SUFDRSxhQUFhOztJQUViLG1CQUFtQjs7R0FFcEI7O0VBQ0Q7SUFDRSxhQUFhO0lBQ2IsbUNBQW1DO0lBQ25DLGFBQWE7SUFDYixrQkFBa0I7Q0FDckI7O0VBRUQsb0NBQW9DOztFQUNwQztFQUNFLFlBQVk7RUFDWiw0QkFBNEI7Q0FDN0I7O0VBSUM7SUFDRSxpQkFBaUI7SUFDakIsc0JBQXNCO0lBQ3RCLG1CQUFtQjtHQUNwQjs7RUFFRDtJQUNFLGNBQWM7SUFDZCxtQkFBbUI7R0FDcEI7O0VBRUQ7SUFDRSxjQUFjO0lBQ2QsWUFBWTtHQUNiIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9idXllci9tYWtlLXJlcXVlc3QvbWFrZS1yZXF1ZXN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIgYm9keSB7XHJcbiAgLXdlYmtpdC10b3VjaC1jYWxsb3V0OiBub25lO1xyXG4gIC13ZWJraXQtdGV4dC1zaXplLWFkanVzdDogbm9uZTtcclxuICAtd2Via2l0LXVzZXItc2VsZWN0OiBub2RlO1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi8uLi8uLi8uLi8uLi9zcmMvYXNzZXRzL2xvZ2lzdGljczIuanBnKTtcclxuICBwYWRkaW5nOiAwO1xyXG4gIGJhY2tncm91bmQtcmVwZWF0Om5vLXJlcGVhdDtcclxuICBiYWNrZ3JvdW5kLXNpemU6Y292ZXI7XHJcbiAgfVxyXG5cclxuICBmb3Jte1xyXG5cclxuICAgIHdpZHRoOiA5MDBweDtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICBvcGFjaXR5OiAuOTA7XHJcblxyXG5cclxuICB9XHJcbiAgLmZvcm0tY29udHJvbCB7XHJcbiAgICBwYWRkaW5nOiA2cHg7XHJcblxyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG5cclxuICB9XHJcbiAgLmJ0biB7XHJcbiAgICB3aWR0aDogMTAwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjE4LCA2NCwgMjYpO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbi8qIEFkZCBhIGhvdmVyIGVmZmVjdCBmb3IgYnV0dG9ucyAqL1xyXG4uYnRuOmhvdmVyIHtcclxuICBvcGFjaXR5Oi43NTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrZ3JlZW47XHJcbn1cclxuXHJcblxyXG5cclxuICAjY29udGFpbmVyIHtcclxuICAgIG1pbi1oZWlnaHQ6IDEwMCU7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAtMzMwcHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgfVxyXG5cclxuICAjZm9vdGVyIHtcclxuICAgIGhlaWdodDogMzMwcHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgfVxyXG5cclxuICAuY2xlYXJmb290ZXIge1xyXG4gICAgaGVpZ2h0OiAzMzBweDtcclxuICAgIGNsZWFyOiBib3RoO1xyXG4gIH1cclxuIl19 */"

/***/ }),

/***/ "./src/app/components/buyer/make-request/make-request.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/components/buyer/make-request/make-request.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-buyer-navbar></app-buyer-navbar>\r\n<flash-messages></flash-messages>\r\n\r\n<!--Bryan Vu contributed to much of the buyer product request form,\r\nincluding the fields and labels.\r\n-->\r\n\r\n<body>\r\n<form (submit)=\"onRequestSubmit()\">\r\n  <div class=\"container\">\r\n\r\n    &nbsp;\r\n    <div class=\"card\">\r\n      <div class=\"card-body\">\r\n          <h1>Submit Product Request</h1><br><hr>\r\n        <div class=\"form-group row\">\r\n          <label class=\"col-sm-2 col-form-label\">Request Title:</label>\r\n          <div class=\"col-sm-10\">\r\n            <input class=\"form-control mr-sm-2\" type=\"text\" [(ngModel)]=\"title\" name=\"title\" value=\"\">\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group row\">\r\n          <label class=\"col-sm-2 col-form-label\">Request Category:</label>\r\n          <div class=\"col-sm-10\">\r\n            <select (change)=\"onChange($event)\">\r\n              <option *ngFor=\"let code of codes\" value={{code.code}}>\r\n                {{code.name}}\r\n              </option>\r\n            </select>\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group row\">\r\n          <label class=\"col-sm-2 col-form-label\">Enter description of desired product:</label>\r\n          <div class=\"col-sm-10\">\r\n            <textarea class=\"form-control\" [(ngModel)]=\"description\" name=\"description\" rows=\"8\" cols=\"80\"></textarea>\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group row\">\r\n          <label class=\"col-sm-2 col-form-label\">Set offer deadline:</label>\r\n          <div class=\"row col-sm-10\">\r\n            <input class=\"form-control col-sm-3\" type=\"date\" [(ngModel)]=\"deadline\" name=\"deadline\" style=\"margin-left: 13px;\">\r\n          </div>\r\n        </div>\r\n        <hr>\r\n        <div class=\"form-group row\">\r\n          <div class=\"col-sm-12\" style=\"text-align: right;\">\r\n            <button type=\"submit\" class=\"btn\" routerLink=\"/buyer\">Submit</button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"clearfooter\"></div>\r\n  </div>\r\n</form>\r\n</body>\r\n<!--\r\n<html>\r\n <head>\r\n  <title>Webslesson Tutorial | Search HTML Table Data by using JQuery</title>\r\n  <script src=\"https://ajax.googleapis.com/ajax/libs/jquery/3.1.0/jquery.min.js\"></script>\r\n  <link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css\" />\r\n  <script src=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js\"></script>\r\n  <style>\r\n  #result {\r\n   position: absolute;\r\n   width: 100%;\r\n   max-width:870px;\r\n   cursor: pointer;\r\n   overflow-y: auto;\r\n   max-height: 400px;\r\n   box-sizing: border-box;\r\n   z-index: 1001;\r\n  }\r\n  .link-class:hover{\r\n   background-color:#f1f1f1;\r\n  }\r\n  </style>\r\n </head>\r\n <body>\r\n  <br /><br />\r\n  <div class=\"container\" style=\"width:900px;\">\r\n   <h2 align=\"center\">JSON Live Data Search using Ajax JQuery</h2>\r\n   <h3 align=\"center\">Employee Data</h3>\r\n   <br /><br />\r\n   <div align=\"center\">\r\n    <input type=\"text\" name=\"search\" id=\"search\" placeholder=\"Search Employee Details\" class=\"form-control\" />\r\n   </div>\r\n   <ul class=\"list-group\" id=\"result\"></ul>\r\n   <br />\r\n  </div>\r\n </body>\r\n</html>\r\n<script>\r\n\r\n$(document).ready(function(){\r\n  const Http = new XMLHttpRequest();\r\n  const url='http://localhost:3000/codes/getCodes';\r\n  Http.open(\"GET\", url);\r\n  Http.send();\r\n  Http.onreadystatechange=(e)=>{\r\n    console.log(Http.responseText)\r\n $.ajaxSetup({ cache: false });\r\n $('#search').keyup(function(){\r\n  $('#result').html('');\r\n  $('#state').val('');\r\n  var searchField = $('#search').val();\r\n  var expression = new RegExp(searchField, \"i\");\r\n  var file = Http.responseText;\r\n  $.getJSON('file', function(data) {\r\n   $.each(data, function(key, value){\r\n    if (value.code_description.search(expression) != -1)\r\n    {\r\n     $('#result').append('<li class=\"list-group-item link-class\">'+value.code_description+' | <span class=\"text-muted\">'+value.code_number+'</span></li>');\r\n    }\r\n   });\r\n  });\r\n });\r\n}\r\n $('#result').on('click', 'li', function() {\r\n  var click_text = $(this).text().split('|');\r\n  $('#search').val($.trim(click_text[0]));\r\n  $(\"#result\").html('');\r\n });\r\n});\r\n</script>\r\n-->\r\n"

/***/ }),

/***/ "./src/app/components/buyer/make-request/make-request.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/components/buyer/make-request/make-request.component.ts ***!
  \*************************************************************************/
/*! exports provided: MakeRequestComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MakeRequestComponent", function() { return MakeRequestComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_buyer_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/buyer.service */ "./src/app/services/buyer.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// By Roni
// Buyer Request Submission




var MakeRequestComponent = /** @class */ (function () {
    function MakeRequestComponent(buyerService, flashMessage, router) {
        this.buyerService = buyerService;
        this.flashMessage = flashMessage;
        this.router = router;
        // Temp codes for MVP - Kurgan
        this.codes = [
            { code: 95141601, name: 'House' },
            { code: 95141602, name: 'Mobile Home' },
            { code: 91111603, name: 'Cooking/Food Prep' },
            { code: 82141505, name: 'Computer Generated Design' },
            { code: 82121503, name: 'Digital Printing' },
            { code: 82101503, name: 'Magazine Advertising' },
            { code: 50443200, name: 'Frozen Corn' },
            { code: 42131700, name: 'Surgical Textiles' },
            { code: 30111700, name: 'Plasters' },
            { code: 23241600, name: 'Metal Cutting Tools' },
        ];
    }
    // Used for the dropdown menu
    MakeRequestComponent.prototype.onChange = function (event) {
        var newVal = event.target.value;
        this.code = newVal;
    };
    MakeRequestComponent.prototype.ngOnInit = function () {
    };
    // Request Submission
    MakeRequestComponent.prototype.onRequestSubmit = function () {
        var _this = this;
        // Request Generated JSON
        var request = {
            title: this.title,
            code: this.code,
            description: this.description,
            deadline: this.deadline
        };
        // Register Request
        this.buyerService.postBuyerRequest(request).subscribe(function (data) {
            if (data.success) {
                _this.flashMessage.show('Your Request was submitted!', { cssClass: 'alert-success', timeout: 4000 });
                _this.router.navigate(['/buyer']);
            }
            else {
                _this.flashMessage.show(data.msg, { cssClass: 'alert-danger', timeout: 3000 });
                _this.router.navigate(['/buyer/make-request']);
            }
        });
    };
    MakeRequestComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-make-request',
            template: __webpack_require__(/*! ./make-request.component.html */ "./src/app/components/buyer/make-request/make-request.component.html"),
            styles: [__webpack_require__(/*! ./make-request.component.css */ "./src/app/components/buyer/make-request/make-request.component.css")]
        }),
        __metadata("design:paramtypes", [_services_buyer_service__WEBPACK_IMPORTED_MODULE_3__["BuyerService"],
            angular2_flash_messages__WEBPACK_IMPORTED_MODULE_1__["FlashMessagesService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], MakeRequestComponent);
    return MakeRequestComponent;
}());



/***/ }),

/***/ "./src/app/components/footer/footer.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/footer/footer.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n.navbar {\r\n\r\n  bottom: 0;\r\n  padding: 0;\r\n  margin: 0;\r\n  width: 100%;\r\n  height: 60px;\r\n\r\n\r\n\r\n}\r\n.wrapper {\r\n  background-color: rgb(41, 43, 43);\r\n  padding: 0;\r\n  height: 60px;\r\n  margin: 0;\r\n  width: 100%;\r\n  text-align: center;\r\n  color: white;\r\n\r\n}\r\n.navbar-brand {\r\n  color: lightgray;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBOztFQUVFLFVBQVU7RUFDVixXQUFXO0VBQ1gsVUFBVTtFQUNWLFlBQVk7RUFDWixhQUFhOzs7O0NBSWQ7QUFDRDtFQUNFLGtDQUFrQztFQUNsQyxXQUFXO0VBQ1gsYUFBYTtFQUNiLFVBQVU7RUFDVixZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLGFBQWE7O0NBRWQ7QUFFRDtFQUNFLGlCQUFpQjtDQUNsQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi5uYXZiYXIge1xyXG5cclxuICBib3R0b206IDA7XHJcbiAgcGFkZGluZzogMDtcclxuICBtYXJnaW46IDA7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiA2MHB4O1xyXG5cclxuXHJcblxyXG59XHJcbi53cmFwcGVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNDEsIDQzLCA0Myk7XHJcbiAgcGFkZGluZzogMDtcclxuICBoZWlnaHQ6IDYwcHg7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBjb2xvcjogd2hpdGU7XHJcblxyXG59XHJcblxyXG4ubmF2YmFyLWJyYW5kIHtcclxuICBjb2xvcjogbGlnaHRncmF5O1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/footer/footer.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/footer/footer.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<nav class=\"navbar sticky-bottom\">\r\n\r\n     <div class=\"wrapper\">© 2018 Copyright:\r\n        <a class=\"navbar-brand\" href=\"https://gex.com/about/\">gex.com</a>\r\n     </div>\r\n    </nav>\r\n\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/components/footer/footer.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/footer/footer.component.ts ***!
  \*******************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/components/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/components/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/components/home/home.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/home/home.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".navbar-brand{\r\n  max-height: 30px;\r\n  max-width: 30%;\r\n  overflow: visible;\r\n  padding: 0;\r\n\r\n}\r\n\r\n.logForm {\r\n  list-style-type: none;\r\n  margin: 0;\r\n  padding: 0;\r\n  overflow: hidden;\r\n}\r\n\r\n.nav-item2{\r\n\r\n  float: left;\r\n  list-style-type: none;\r\n  font-size: 18px;\r\n  padding-top: 0;\r\n\r\n}\r\n\r\n.nav-item2 a:hover {\r\n  background-color: lightgray;\r\n}\r\n\r\nbody {\r\n  font-family: 'Lato', 'Helvetica Neue', Helvetica, Arial, sans-serif;\r\n}\r\n\r\nh1,\r\nh2,\r\nh3,\r\nh4,\r\nh5,\r\nh6 {\r\n  font-family: 'Lato', 'Helvetica Neue', Helvetica, Arial, sans-serif;\r\n  font-weight: 700;\r\n}\r\n\r\nheader.masthead {\r\n  position: relative;\r\n\r\n  padding-top: 8rem;\r\n  padding-bottom: 8rem;\r\n  background-color: #0a2846;\r\n}\r\n\r\nheader.masthead .overlay {\r\n  background-image: url('gexGrand.jpg');\r\n  position: absolute;\r\n  background-size: cover;\r\n  background-repeat:no-repeat;\r\n  height: 100%;\r\n  width: 100%;\r\n  top: 0;\r\n  left: 0;\r\n\r\n\r\n}\r\n\r\nheader.masthead h1 {\r\n  font-size: 2rem;\r\n}\r\n\r\n@media (min-width: 768px) {\r\n  header.masthead {\r\n    padding-top: 12rem;\r\n    padding-bottom: 12rem;\r\n  }\r\n  header.masthead h1 {\r\n    font-size: 3rem;\r\n  }\r\n}\r\n\r\n.showcase .showcase-text {\r\n  padding: 3rem;\r\n}\r\n\r\n.showcase .showcase-img {\r\n  min-height: 30rem;\r\n  background-size: cover;\r\n}\r\n\r\n@media (min-width: 768px) {\r\n  .showcase .showcase-text {\r\n    padding: 7rem;\r\n  }\r\n}\r\n\r\n.features-icons {\r\n  padding-top: 7rem;\r\n  padding-bottom: 7rem;\r\n}\r\n\r\n.features-icons .features-icons-item {\r\n  max-width: 20rem;\r\n}\r\n\r\n.features-icons .features-icons-item .features-icons-icon {\r\n  height: 7rem;\r\n}\r\n\r\n.features-icons .features-icons-item .features-icons-icon i {\r\n  font-size: 4.5rem;\r\n}\r\n\r\n.features-icons .features-icons-item:hover .features-icons-icon i {\r\n  font-size: 5rem;\r\n}\r\n\r\n.testimonials {\r\n  padding-top: 7rem;\r\n  padding-bottom: 7rem;\r\n}\r\n\r\n.testimonials .testimonial-item {\r\n  max-width: 18rem;\r\n}\r\n\r\n.testimonials .testimonial-item img {\r\n  max-width: 12rem;\r\n  box-shadow: 0px 5px 5px 0px #adb5bd;\r\n}\r\n\r\n.call-to-action {\r\n  position: relative;\r\n  background-color: #343a40;\r\n\r\n  background-size: cover;\r\n  padding-top: 7rem;\r\n  padding-bottom: 7rem;\r\n}\r\n\r\n.call-to-action .overlay {\r\n  position: absolute;\r\n  background-color: #212529;\r\n  height: 100%;\r\n  width: 100%;\r\n  top: 0;\r\n  left: 0;\r\n  opacity: 0.3;\r\n}\r\n\r\nfooter.footer {\r\n  padding-top: 4rem;\r\n  padding-bottom: 4rem;\r\n}\r\n\r\n.item1 {\r\n  background-image: url('donatGex.jpg');\r\n}\r\n\r\n.item2 {\r\n  background-image: url('codeImage.jpg');\r\n}\r\n\r\n.item3 {\r\n  background-image: url('gexBusiness1.jpg');\r\n}\r\n\r\n.item4 {\r\n  background-image: url('mobile.jpg');\r\n}\r\n\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ob21lL2hvbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLFdBQVc7O0NBRVo7O0FBRUQ7RUFDRSxzQkFBc0I7RUFDdEIsVUFBVTtFQUNWLFdBQVc7RUFDWCxpQkFBaUI7Q0FDbEI7O0FBR0Q7O0VBRUUsWUFBWTtFQUNaLHNCQUFzQjtFQUN0QixnQkFBZ0I7RUFDaEIsZUFBZTs7Q0FFaEI7O0FBRUQ7RUFDRSw0QkFBNEI7Q0FDN0I7O0FBRUQ7RUFDRSxvRUFBb0U7Q0FDckU7O0FBRUQ7Ozs7OztFQU1FLG9FQUFvRTtFQUNwRSxpQkFBaUI7Q0FDbEI7O0FBRUQ7RUFDRSxtQkFBbUI7O0VBRW5CLGtCQUFrQjtFQUNsQixxQkFBcUI7RUFDckIsMEJBQTBCO0NBQzNCOztBQUVEO0VBQ0Usc0NBQTZEO0VBQzdELG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsNEJBQTRCO0VBQzVCLGFBQWE7RUFDYixZQUFZO0VBQ1osT0FBTztFQUNQLFFBQVE7OztDQUdUOztBQUVEO0VBQ0UsZ0JBQWdCO0NBQ2pCOztBQUVEO0VBQ0U7SUFDRSxtQkFBbUI7SUFDbkIsc0JBQXNCO0dBQ3ZCO0VBQ0Q7SUFDRSxnQkFBZ0I7R0FDakI7Q0FDRjs7QUFFRDtFQUNFLGNBQWM7Q0FDZjs7QUFFRDtFQUNFLGtCQUFrQjtFQUNsQix1QkFBdUI7Q0FDeEI7O0FBRUQ7RUFDRTtJQUNFLGNBQWM7R0FDZjtDQUNGOztBQUVEO0VBQ0Usa0JBQWtCO0VBQ2xCLHFCQUFxQjtDQUN0Qjs7QUFFRDtFQUNFLGlCQUFpQjtDQUNsQjs7QUFFRDtFQUNFLGFBQWE7Q0FDZDs7QUFFRDtFQUNFLGtCQUFrQjtDQUNuQjs7QUFFRDtFQUNFLGdCQUFnQjtDQUNqQjs7QUFFRDtFQUNFLGtCQUFrQjtFQUNsQixxQkFBcUI7Q0FDdEI7O0FBRUQ7RUFDRSxpQkFBaUI7Q0FDbEI7O0FBRUQ7RUFDRSxpQkFBaUI7RUFFakIsb0NBQW9DO0NBQ3JDOztBQUVEO0VBQ0UsbUJBQW1CO0VBQ25CLDBCQUEwQjs7RUFFMUIsdUJBQXVCO0VBQ3ZCLGtCQUFrQjtFQUNsQixxQkFBcUI7Q0FDdEI7O0FBRUQ7RUFDRSxtQkFBbUI7RUFDbkIsMEJBQTBCO0VBQzFCLGFBQWE7RUFDYixZQUFZO0VBQ1osT0FBTztFQUNQLFFBQVE7RUFDUixhQUFhO0NBQ2Q7O0FBRUQ7RUFDRSxrQkFBa0I7RUFDbEIscUJBQXFCO0NBQ3RCOztBQUVEO0VBQ0Usc0NBQTZEO0NBQzlEOztBQUVEO0VBQ0UsdUNBQThEO0NBQy9EOztBQUVEO0VBQ0UsMENBQWlFO0NBQ2xFOztBQUVEO0VBQ0Usb0NBQTJEO0NBQzVEIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9ob21lL2hvbWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5uYXZiYXItYnJhbmR7XHJcbiAgbWF4LWhlaWdodDogMzBweDtcclxuICBtYXgtd2lkdGg6IDMwJTtcclxuICBvdmVyZmxvdzogdmlzaWJsZTtcclxuICBwYWRkaW5nOiAwO1xyXG5cclxufVxyXG5cclxuLmxvZ0Zvcm0ge1xyXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcclxuICBtYXJnaW46IDA7XHJcbiAgcGFkZGluZzogMDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcblxyXG5cclxuLm5hdi1pdGVtMntcclxuXHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxuICBwYWRkaW5nLXRvcDogMDtcclxuXHJcbn1cclxuXHJcbi5uYXYtaXRlbTIgYTpob3ZlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmF5O1xyXG59XHJcblxyXG5ib2R5IHtcclxuICBmb250LWZhbWlseTogJ0xhdG8nLCAnSGVsdmV0aWNhIE5ldWUnLCBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmO1xyXG59XHJcblxyXG5oMSxcclxuaDIsXHJcbmgzLFxyXG5oNCxcclxuaDUsXHJcbmg2IHtcclxuICBmb250LWZhbWlseTogJ0xhdG8nLCAnSGVsdmV0aWNhIE5ldWUnLCBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmO1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbn1cclxuXHJcbmhlYWRlci5tYXN0aGVhZCB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG5cclxuICBwYWRkaW5nLXRvcDogOHJlbTtcclxuICBwYWRkaW5nLWJvdHRvbTogOHJlbTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMGEyODQ2O1xyXG59XHJcblxyXG5oZWFkZXIubWFzdGhlYWQgLm92ZXJsYXkge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uLy4uLy4uL3NyYy9hc3NldHMvZ2V4R3JhbmQuanBnXCIpO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gIGJhY2tncm91bmQtcmVwZWF0Om5vLXJlcGVhdDtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IDA7XHJcblxyXG5cclxufVxyXG5cclxuaGVhZGVyLm1hc3RoZWFkIGgxIHtcclxuICBmb250LXNpemU6IDJyZW07XHJcbn1cclxuXHJcbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xyXG4gIGhlYWRlci5tYXN0aGVhZCB7XHJcbiAgICBwYWRkaW5nLXRvcDogMTJyZW07XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMTJyZW07XHJcbiAgfVxyXG4gIGhlYWRlci5tYXN0aGVhZCBoMSB7XHJcbiAgICBmb250LXNpemU6IDNyZW07XHJcbiAgfVxyXG59XHJcblxyXG4uc2hvd2Nhc2UgLnNob3djYXNlLXRleHQge1xyXG4gIHBhZGRpbmc6IDNyZW07XHJcbn1cclxuXHJcbi5zaG93Y2FzZSAuc2hvd2Nhc2UtaW1nIHtcclxuICBtaW4taGVpZ2h0OiAzMHJlbTtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG59XHJcblxyXG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcclxuICAuc2hvd2Nhc2UgLnNob3djYXNlLXRleHQge1xyXG4gICAgcGFkZGluZzogN3JlbTtcclxuICB9XHJcbn1cclxuXHJcbi5mZWF0dXJlcy1pY29ucyB7XHJcbiAgcGFkZGluZy10b3A6IDdyZW07XHJcbiAgcGFkZGluZy1ib3R0b206IDdyZW07XHJcbn1cclxuXHJcbi5mZWF0dXJlcy1pY29ucyAuZmVhdHVyZXMtaWNvbnMtaXRlbSB7XHJcbiAgbWF4LXdpZHRoOiAyMHJlbTtcclxufVxyXG5cclxuLmZlYXR1cmVzLWljb25zIC5mZWF0dXJlcy1pY29ucy1pdGVtIC5mZWF0dXJlcy1pY29ucy1pY29uIHtcclxuICBoZWlnaHQ6IDdyZW07XHJcbn1cclxuXHJcbi5mZWF0dXJlcy1pY29ucyAuZmVhdHVyZXMtaWNvbnMtaXRlbSAuZmVhdHVyZXMtaWNvbnMtaWNvbiBpIHtcclxuICBmb250LXNpemU6IDQuNXJlbTtcclxufVxyXG5cclxuLmZlYXR1cmVzLWljb25zIC5mZWF0dXJlcy1pY29ucy1pdGVtOmhvdmVyIC5mZWF0dXJlcy1pY29ucy1pY29uIGkge1xyXG4gIGZvbnQtc2l6ZTogNXJlbTtcclxufVxyXG5cclxuLnRlc3RpbW9uaWFscyB7XHJcbiAgcGFkZGluZy10b3A6IDdyZW07XHJcbiAgcGFkZGluZy1ib3R0b206IDdyZW07XHJcbn1cclxuXHJcbi50ZXN0aW1vbmlhbHMgLnRlc3RpbW9uaWFsLWl0ZW0ge1xyXG4gIG1heC13aWR0aDogMThyZW07XHJcbn1cclxuXHJcbi50ZXN0aW1vbmlhbHMgLnRlc3RpbW9uaWFsLWl0ZW0gaW1nIHtcclxuICBtYXgtd2lkdGg6IDEycmVtO1xyXG4gIC13ZWJraXQtYm94LXNoYWRvdzogMHB4IDVweCA1cHggMHB4ICNhZGI1YmQ7XHJcbiAgYm94LXNoYWRvdzogMHB4IDVweCA1cHggMHB4ICNhZGI1YmQ7XHJcbn1cclxuXHJcbi5jYWxsLXRvLWFjdGlvbiB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMzNDNhNDA7XHJcblxyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgcGFkZGluZy10b3A6IDdyZW07XHJcbiAgcGFkZGluZy1ib3R0b206IDdyZW07XHJcbn1cclxuXHJcbi5jYWxsLXRvLWFjdGlvbiAub3ZlcmxheSB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMyMTI1Mjk7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHRvcDogMDtcclxuICBsZWZ0OiAwO1xyXG4gIG9wYWNpdHk6IDAuMztcclxufVxyXG5cclxuZm9vdGVyLmZvb3RlciB7XHJcbiAgcGFkZGluZy10b3A6IDRyZW07XHJcbiAgcGFkZGluZy1ib3R0b206IDRyZW07XHJcbn1cclxuXHJcbi5pdGVtMSB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vLi4vLi4vc3JjL2Fzc2V0cy9kb25hdEdleC5qcGdcIik7XHJcbn1cclxuXHJcbi5pdGVtMiB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vLi4vLi4vc3JjL2Fzc2V0cy9jb2RlSW1hZ2UuanBnXCIpO1xyXG59XHJcblxyXG4uaXRlbTMge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uLy4uLy4uL3NyYy9hc3NldHMvZ2V4QnVzaW5lc3MxLmpwZ1wiKTtcclxufVxyXG5cclxuLml0ZW00IHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi8uLi8uLi9zcmMvYXNzZXRzL21vYmlsZS5qcGdcIik7XHJcbn1cclxuXHJcblxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/components/home/home.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/home/home.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\r\n\r\n<body>\r\n\r\n  <!-- Masthead -->\r\n  <header class=\"masthead text-white text-center\">\r\n    <div class=\"overlay\"></div>\r\n    <div class=\"container\">\r\n      <div class=\"row\">\r\n        <div class=\"col-xl-9 mx-auto\">\r\n\r\n          <h1 class=\"mb-5\">Grand Exchange: Finding lower prices has never been easier.</h1>\r\n\r\n        </div>\r\n        <div class=\"col-8 col-md-4\"></div>\r\n\r\n        <div class=\"col-8 col-md-4\">\r\n          <button type=\"button\" routerLink=\"/buyer-register\" class=\"btn btn-block btn-lg btn-primary\">Register!</button>\r\n        </div>\r\n\r\n      </div>\r\n    </div>\r\n  </header>\r\n\r\n  <!-- Icons Grid -->\r\n  <section class=\"features-icons bg-light text-center\">\r\n    <div class=\"container\">\r\n      <div class=\"row\">\r\n        <div class=\"col-lg-4\">\r\n          <div class=\"features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3\">\r\n            <div class=\"features-icons-icon d-flex\">\r\n              <i class=\"icon-screen-desktop m-auto text-primary\"></i>\r\n            </div>\r\n            <h3>Spend less time searching.</h3>\r\n            <p class=\"lead mb-0\">Just create a request and the offers will come to you!</p>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-lg-4\">\r\n          <div class=\"features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3\">\r\n            <div class=\"features-icons-icon d-flex\">\r\n              <i class=\"icon-layers m-auto text-primary\"></i>\r\n            </div>\r\n            <h3>Always find the perfect match.</h3>\r\n            <p class=\"lead mb-0\">Choose from a plethora of providers.</p>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-lg-4\">\r\n          <div class=\"features-icons-item mx-auto mb-0 mb-lg-3\">\r\n            <div class=\"features-icons-icon d-flex\">\r\n              <i class=\"icon-check m-auto text-primary\"></i>\r\n            </div>\r\n            <h3>Competitive pricing.</h3>\r\n            <p class=\"lead mb-0\">Sellers will provide their goods and services as cheap as possible.</p>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </section>\r\n\r\n  <!-- Image Showcases -->\r\n  <section class=\"showcase\">\r\n    <div class=\"container-fluid p-0\">\r\n      <div class=\"row no-gutters\">\r\n\r\n        <div class=\"item1 col-lg-6 order-lg-2 text-white showcase-img\"></div>\r\n        <div class=\"col-lg-6 order-lg-1 my-auto showcase-text\">\r\n          <h2>How It Works</h2>\r\n          <p class=\"lead mb-0\">We will do the work on your behalf and will connect you with the best seller and the lowest\r\n            prices.</p>\r\n        </div>\r\n      </div>\r\n      <div class=\"row no-gutters\">\r\n        <div class=\"item2 col-lg-6 text-white showcase-img\"></div>\r\n        <div class=\"col-lg-6 my-auto showcase-text\">\r\n          <h2>A Better Way to Do Business</h2>\r\n          <p class=\"lead mb-0\">Our mission is to integrate the human and business elements. Sign up with GEX and\r\n            experiene the most efficient way to buy online.</p>\r\n        </div>\r\n      </div>\r\n      <div class=\"row no-gutters\">\r\n        <div class=\"item3 col-lg-6 order-lg-2 text-white showcase-img\" ></div>\r\n        <div class=\"col-lg-6 order-lg-1 my-auto showcase-text\">\r\n          <h2>Ready to Buy?</h2>\r\n          <p class=\"lead mb-0\">Submit your request and get matched with thousands of sellers waiting to make you personalized offers.</p>\r\n        </div>\r\n      </div>\r\n      <div class=\"row no-gutters\">\r\n        <div class=\"item4 col-lg-6 text-white showcase-img\" ></div>\r\n        <div class=\"col-lg-6 my-auto showcase-text\">\r\n          <h2>Ready to Sell?</h2>\r\n          <p class=\"lead mb-0\">List your product or service and start getting matched with thousands of buyers ready to\r\n            receive your offers.</p>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </section>\r\n\r\n<!--\r\n  //have to find out a way to add testimonial images\r\n      <section class=\"testimonials text-center bg-light\">\r\n        <div class=\"container\">\r\n          <h2 class=\"mb-5\">What people are saying...</h2>\r\n          <div class=\"row\">\r\n            <div class=\"col-lg-4\">\r\n\r\n              <div class=\"testimonial-item mx-auto mb-5 mb-lg-0\">\r\n\r\n                <h5>Margaret E.</h5>\r\n                <p class=\"font-weight-light mb-0\">\"I don't have search for lower prices anymore!\"</p>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-lg-4\">\r\n              <div class=\"testimonial-item mx-auto mb-5 mb-lg-0\">\r\n                <img class=\"img-fluid rounded-circle mb-3\" src=\"../../../../src/assets/testimonials-2.jpg\" alt=\"\">\r\n                <h5>Fred S.</h5>\r\n                <p class=\"font-weight-light mb-0\">\"I save so much time which allows me to do other things instead of shopping.\"</p>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-lg-4\">\r\n              <div class=\"testimonial-item mx-auto mb-5 mb-lg-0\">\r\n                <img class=\"img-fluid rounded-circle mb-3\" src=\"../../../../src/assets/testimonials-3.jpg\" alt=\"\">\r\n                <h5>Sarah\tW.</h5>\r\n                <p class=\"font-weight-light mb-0\">\"all I had to do was request what I wanted!\"</p>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </section>\r\n-->\r\n  <!-- Call to Action -->\r\n  <section class=\"call-to-action text-white text-center\">\r\n    <div class=\"overlay\"></div>\r\n    <div class=\"container\">\r\n      <div class=\"row\">\r\n        <div class=\"col-xl-9 mx-auto\">\r\n          <h2 class=\"mb-4\">Ready to get started? Register now!</h2>\r\n        </div>\r\n        <div class=\"col-md-10 col-lg-8 col-xl-7 mx-auto\">\r\n          <form>\r\n            <div class=\"form-row\">\r\n              <div class=\"col-12 col-md-4\"></div>\r\n              <div class=\"col-12 col-md-4\">\r\n                <button type=\"button\" routerLink=\"buyer-register\" class=\"btn btn-block btn-lg btn-primary\">Register!</button>\r\n              </div>\r\n            </div>\r\n          </form>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </section>\r\n\r\n  <!-- Footer -->\r\n  <footer class=\"footer bg-light\">\r\n    <div class=\"container\">\r\n      <div class=\"row\">\r\n        <div class=\"col-lg-6 h-100 text-center text-lg-left my-auto\">\r\n          <ul class=\"list-inline mb-2\">\r\n            <li class=\"list-inline-item\">\r\n              <a href=\"#\">About</a>\r\n            </li>\r\n            <li class=\"list-inline-item\">&sdot;</li>\r\n            <li class=\"list-inline-item\">\r\n              <a href=\"#\">Contact</a>\r\n            </li>\r\n            <li class=\"list-inline-item\">&sdot;</li>\r\n            <li class=\"list-inline-item\">\r\n              <a href=\"#\">Terms of Use</a>\r\n            </li>\r\n            <li class=\"list-inline-item\">&sdot;</li>\r\n            <li class=\"list-inline-item\">\r\n              <a href=\"#\">Privacy Policy</a>\r\n            </li>\r\n          </ul>\r\n\r\n        </div>\r\n        <div class=\"col-lg-6 h-100 text-center text-lg-right my-auto\">\r\n          <ul class=\"list-inline mb-0\">\r\n            <li class=\"list-inline-item mr-3\">\r\n              <a href=\"#\">\r\n                <i class=\"fab fa-facebook fa-2x fa-fw\"></i>\r\n              </a>\r\n            </li>\r\n            <li class=\"list-inline-item mr-3\">\r\n              <a href=\"#\">\r\n                <i class=\"fab fa-twitter-square fa-2x fa-fw\"></i>\r\n              </a>\r\n            </li>\r\n            <li class=\"list-inline-item\">\r\n              <a href=\"#\">\r\n                <i class=\"fab fa-instagram fa-2x fa-fw\"></i>\r\n              </a>\r\n            </li>\r\n          </ul>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </footer>\r\n\r\n</body>\r\n"

/***/ }),

/***/ "./src/app/components/home/home.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_storeFetch_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/storeFetch.service */ "./src/app/services/storeFetch.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomeComponent = /** @class */ (function () {
    function HomeComponent(storeFetch, router) {
        this.storeFetch = storeFetch;
        this.router = router;
    }
    // ngOnInit runs when the home component gets called. This component/function first checks if the current user that is logged in is a buyer or seller account.
    // It will then navigate the user to the correct page.
    HomeComponent.prototype.ngOnInit = function () {
        if (this.storeFetch.buyerIsLoggedIn()) {
            this.router.navigate(['/buyer']);
        }
        else if (this.storeFetch.sellerIsLoggedIn()) {
            this.router.navigate(['/seller']);
        }
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/components/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/components/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [_services_storeFetch_service__WEBPACK_IMPORTED_MODULE_2__["StoreFetchService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/components/login/SellerLogin.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/login/SellerLogin.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body{\r\n  -webkit-touch-callout: none;\r\n  -webkit-text-size-adjust: none;\r\n  -webkit-user-select: node;\r\n  height: 100vh;\r\n  background-image: url('brooklynbridge2.jpg');\r\n  margin: -50px;\r\n  padding: 0;\r\n  background-repeat:no-repeat;\r\n  background-size:cover;\r\n}\r\n\r\nh1, label{\r\n  color: white;\r\n}\r\n\r\n.psw {\r\n  text-align: center;\r\n}\r\n\r\nhr {\r\n  border: 1px solid white;\r\n}\r\n\r\nform {\r\n\r\n  position: relative;\r\n  top: 100px;\r\n  max-width: 460px;\r\n  padding: 0;\r\n  height: 520px;\r\n  margin: auto;\r\n}\r\n\r\n/* Full-width inputs */\r\n\r\ninput[type=text], input[type=password] , input[type=tel] {\r\n  width: 25rem;\r\n  height: 3.125rem;\r\n  padding: 15px;\r\n  margin: 5px 0 22px 0;\r\n  display: inline-block;\r\n  border: none;\r\n  background:#0d0f11;\r\n  opacity: .65;\r\n  color: white;\r\n  font-weight: bold;\r\n\r\n}\r\n\r\ninput[type=text]:focus, input[type=password]:focus {\r\n  background-color: rgb(112, 58, 70);\r\n  outline: none;\r\n}\r\n\r\n/* Set a style for all buttons */\r\n\r\nbutton {\r\n  background-color: rgb(173, 45, 6);\r\n  color: white;\r\n  padding: 14px 20px;\r\n  margin: 8px 0;\r\n  border: none;\r\n  cursor: pointer;\r\n  width: 400px;\r\n  height: 50px;\r\n  font-size: 16px;\r\n}\r\n\r\n/* Add a hover effect for buttons */\r\n\r\nbutton:hover {\r\n  opacity:.75;\r\n  background-color: darkgreen;\r\n}\r\n\r\n/* Extra style for the cancel button (red) */\r\n\r\n.cancelbtn {\r\n  width: auto;\r\n  height: 50px;\r\n  padding: 10px 18px;\r\n  background-color: #5f5e5b;\r\n}\r\n\r\n/* Center the avatar image inside this container */\r\n\r\n.imgcontainer {\r\n  text-align: center;\r\n  margin: 24px 0 12px 0;\r\n}\r\n\r\n/* Avatar image */\r\n\r\nimg.avatar {\r\n  width: 40%;\r\n  margin: 34px;\r\n}\r\n\r\n/* Add padding to containers */\r\n\r\n.container {\r\n  padding: 12px;\r\n  width: 100%;\r\n  position: relative;\r\n\r\n\r\n}\r\n\r\n.wrapper {\r\n  width: 400px;\r\n  height: 70px;\r\n  padding-bottom: 16px;\r\n  padding-top: 0;\r\n}\r\n\r\n/* The \"Forgot password\" text */\r\n\r\nspan.psw {\r\n  float: right;\r\n  padding-top: 16px;\r\n}\r\n\r\n/* Change styles for span and cancel button on extra small screens */\r\n\r\n@media screen and (max-width: 300px) {\r\n  span.psw {\r\n      display: block;\r\n      float: none;\r\n  }\r\n  .cancelbtn {\r\n\r\n    width: 100%;\r\n  }\r\n}\r\n\r\n::-webkit-input-placeholder {\r\n  color: white;\r\n  opacity: 1; /* Firefox */\r\n  font-size: 15px;\r\n  font-weight: 400;\r\n\r\n}\r\n\r\n::-ms-input-placeholder {\r\n  color: white;\r\n  opacity: 1; /* Firefox */\r\n  font-size: 15px;\r\n  font-weight: 400;\r\n\r\n}\r\n\r\n::placeholder {\r\n  color: white;\r\n  opacity: 1; /* Firefox */\r\n  font-size: 15px;\r\n  font-weight: 400;\r\n\r\n}\r\n\r\n:-ms-input-placeholder { /* Internet Explorer 10-11 */\r\n color: white;\r\n font-size: 15px;\r\n}\r\n\r\n::-ms-input-placeholder { /* Microsoft Edge */\r\n color: white;\r\n font-size: 15px;\r\n}\r\n\r\na {\r\n  color: white;\r\n  font-size: 14px;\r\n  font-weight: bold;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9sb2dpbi9TZWxsZXJMb2dpbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsNEJBQTRCO0VBQzVCLCtCQUErQjtFQUMvQiwwQkFBMEI7RUFDMUIsY0FBYztFQUNkLDZDQUFrRTtFQUNsRSxjQUFjO0VBQ2QsV0FBVztFQUNYLDRCQUE0QjtFQUM1QixzQkFBc0I7Q0FDdkI7O0FBRUQ7RUFDRSxhQUFhO0NBQ2Q7O0FBRUQ7RUFDRSxtQkFBbUI7Q0FDcEI7O0FBQ0Q7RUFDRSx3QkFBd0I7Q0FDekI7O0FBRUQ7O0VBRUUsbUJBQW1CO0VBQ25CLFdBQVc7RUFDWCxpQkFBaUI7RUFDakIsV0FBVztFQUNYLGNBQWM7RUFDZCxhQUFhO0NBQ2Q7O0FBRUQsdUJBQXVCOztBQUN2QjtFQUNFLGFBQWE7RUFDYixpQkFBaUI7RUFDakIsY0FBYztFQUNkLHFCQUFxQjtFQUNyQixzQkFBc0I7RUFDdEIsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixhQUFhO0VBQ2IsYUFBYTtFQUNiLGtCQUFrQjs7Q0FFbkI7O0FBRUQ7RUFDRSxtQ0FBbUM7RUFDbkMsY0FBYztDQUNmOztBQUVELGlDQUFpQzs7QUFDakM7RUFDRSxrQ0FBa0M7RUFDbEMsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixjQUFjO0VBQ2QsYUFBYTtFQUNiLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2IsYUFBYTtFQUNiLGdCQUFnQjtDQUNqQjs7QUFFRCxvQ0FBb0M7O0FBQ3BDO0VBQ0UsWUFBWTtFQUNaLDRCQUE0QjtDQUM3Qjs7QUFFRCw2Q0FBNkM7O0FBQzdDO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsMEJBQTBCO0NBQzNCOztBQUVELG1EQUFtRDs7QUFDbkQ7RUFDRSxtQkFBbUI7RUFDbkIsc0JBQXNCO0NBQ3ZCOztBQUVELGtCQUFrQjs7QUFDbEI7RUFDRSxXQUFXO0VBQ1gsYUFBYTtDQUNkOztBQUVELCtCQUErQjs7QUFDL0I7RUFDRSxjQUFjO0VBQ2QsWUFBWTtFQUNaLG1CQUFtQjs7O0NBR3BCOztBQUVEO0VBQ0UsYUFBYTtFQUNiLGFBQWE7RUFDYixxQkFBcUI7RUFDckIsZUFBZTtDQUNoQjs7QUFHRCxnQ0FBZ0M7O0FBQ2hDO0VBQ0UsYUFBYTtFQUNiLGtCQUFrQjtDQUNuQjs7QUFFRCxxRUFBcUU7O0FBQ3JFO0VBQ0U7TUFDSSxlQUFlO01BQ2YsWUFBWTtHQUNmO0VBQ0Q7O0lBRUUsWUFBWTtHQUNiO0NBQ0Y7O0FBQ0Q7RUFDRSxhQUFhO0VBQ2IsV0FBVyxDQUFDLGFBQWE7RUFDekIsZ0JBQWdCO0VBQ2hCLGlCQUFpQjs7Q0FFbEI7O0FBTkQ7RUFDRSxhQUFhO0VBQ2IsV0FBVyxDQUFDLGFBQWE7RUFDekIsZ0JBQWdCO0VBQ2hCLGlCQUFpQjs7Q0FFbEI7O0FBTkQ7RUFDRSxhQUFhO0VBQ2IsV0FBVyxDQUFDLGFBQWE7RUFDekIsZ0JBQWdCO0VBQ2hCLGlCQUFpQjs7Q0FFbEI7O0FBRUQseUJBQXlCLDZCQUE2QjtDQUNyRCxhQUFhO0NBQ2IsZ0JBQWdCO0NBQ2hCOztBQUVELDBCQUEwQixvQkFBb0I7Q0FDN0MsYUFBYTtDQUNiLGdCQUFnQjtDQUNoQjs7QUFFRDtFQUNFLGFBQWE7RUFDYixnQkFBZ0I7RUFDaEIsa0JBQWtCO0NBQ25CIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9sb2dpbi9TZWxsZXJMb2dpbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYm9keXtcclxuICAtd2Via2l0LXRvdWNoLWNhbGxvdXQ6IG5vbmU7XHJcbiAgLXdlYmtpdC10ZXh0LXNpemUtYWRqdXN0OiBub25lO1xyXG4gIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vZGU7XHJcbiAgaGVpZ2h0OiAxMDB2aDtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vLi4vLi4vLi4vc3JjL2Fzc2V0cy9icm9va2x5bmJyaWRnZTIuanBnKTtcclxuICBtYXJnaW46IC01MHB4O1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6bm8tcmVwZWF0O1xyXG4gIGJhY2tncm91bmQtc2l6ZTpjb3ZlcjtcclxufVxyXG5cclxuaDEsIGxhYmVse1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLnBzdyB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbmhyIHtcclxuICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcclxufVxyXG5cclxuZm9ybSB7XHJcblxyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB0b3A6IDEwMHB4O1xyXG4gIG1heC13aWR0aDogNDYwcHg7XHJcbiAgcGFkZGluZzogMDtcclxuICBoZWlnaHQ6IDUyMHB4O1xyXG4gIG1hcmdpbjogYXV0bztcclxufVxyXG5cclxuLyogRnVsbC13aWR0aCBpbnB1dHMgKi9cclxuaW5wdXRbdHlwZT10ZXh0XSwgaW5wdXRbdHlwZT1wYXNzd29yZF0gLCBpbnB1dFt0eXBlPXRlbF0ge1xyXG4gIHdpZHRoOiAyNXJlbTtcclxuICBoZWlnaHQ6IDMuMTI1cmVtO1xyXG4gIHBhZGRpbmc6IDE1cHg7XHJcbiAgbWFyZ2luOiA1cHggMCAyMnB4IDA7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBiYWNrZ3JvdW5kOiMwZDBmMTE7XHJcbiAgb3BhY2l0eTogLjY1O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuXHJcbn1cclxuXHJcbmlucHV0W3R5cGU9dGV4dF06Zm9jdXMsIGlucHV0W3R5cGU9cGFzc3dvcmRdOmZvY3VzIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTEyLCA1OCwgNzApO1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbn1cclxuXHJcbi8qIFNldCBhIHN0eWxlIGZvciBhbGwgYnV0dG9ucyAqL1xyXG5idXR0b24ge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxNzMsIDQ1LCA2KTtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgcGFkZGluZzogMTRweCAyMHB4O1xyXG4gIG1hcmdpbjogOHB4IDA7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICB3aWR0aDogNDAwcHg7XHJcbiAgaGVpZ2h0OiA1MHB4O1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxufVxyXG5cclxuLyogQWRkIGEgaG92ZXIgZWZmZWN0IGZvciBidXR0b25zICovXHJcbmJ1dHRvbjpob3ZlciB7XHJcbiAgb3BhY2l0eTouNzU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogZGFya2dyZWVuO1xyXG59XHJcblxyXG4vKiBFeHRyYSBzdHlsZSBmb3IgdGhlIGNhbmNlbCBidXR0b24gKHJlZCkgKi9cclxuLmNhbmNlbGJ0biB7XHJcbiAgd2lkdGg6IGF1dG87XHJcbiAgaGVpZ2h0OiA1MHB4O1xyXG4gIHBhZGRpbmc6IDEwcHggMThweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNWY1ZTViO1xyXG59XHJcblxyXG4vKiBDZW50ZXIgdGhlIGF2YXRhciBpbWFnZSBpbnNpZGUgdGhpcyBjb250YWluZXIgKi9cclxuLmltZ2NvbnRhaW5lciB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIG1hcmdpbjogMjRweCAwIDEycHggMDtcclxufVxyXG5cclxuLyogQXZhdGFyIGltYWdlICovXHJcbmltZy5hdmF0YXIge1xyXG4gIHdpZHRoOiA0MCU7XHJcbiAgbWFyZ2luOiAzNHB4O1xyXG59XHJcblxyXG4vKiBBZGQgcGFkZGluZyB0byBjb250YWluZXJzICovXHJcbi5jb250YWluZXIge1xyXG4gIHBhZGRpbmc6IDEycHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG5cclxuXHJcbn1cclxuXHJcbi53cmFwcGVyIHtcclxuICB3aWR0aDogNDAwcHg7XHJcbiAgaGVpZ2h0OiA3MHB4O1xyXG4gIHBhZGRpbmctYm90dG9tOiAxNnB4O1xyXG4gIHBhZGRpbmctdG9wOiAwO1xyXG59XHJcblxyXG5cclxuLyogVGhlIFwiRm9yZ290IHBhc3N3b3JkXCIgdGV4dCAqL1xyXG5zcGFuLnBzdyB7XHJcbiAgZmxvYXQ6IHJpZ2h0O1xyXG4gIHBhZGRpbmctdG9wOiAxNnB4O1xyXG59XHJcblxyXG4vKiBDaGFuZ2Ugc3R5bGVzIGZvciBzcGFuIGFuZCBjYW5jZWwgYnV0dG9uIG9uIGV4dHJhIHNtYWxsIHNjcmVlbnMgKi9cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzAwcHgpIHtcclxuICBzcGFuLnBzdyB7XHJcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICBmbG9hdDogbm9uZTtcclxuICB9XHJcbiAgLmNhbmNlbGJ0biB7XHJcblxyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG59XHJcbjo6cGxhY2Vob2xkZXIge1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBvcGFjaXR5OiAxOyAvKiBGaXJlZm94ICovXHJcbiAgZm9udC1zaXplOiAxNXB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XHJcblxyXG59XHJcblxyXG46LW1zLWlucHV0LXBsYWNlaG9sZGVyIHsgLyogSW50ZXJuZXQgRXhwbG9yZXIgMTAtMTEgKi9cclxuIGNvbG9yOiB3aGl0ZTtcclxuIGZvbnQtc2l6ZTogMTVweDtcclxufVxyXG5cclxuOjotbXMtaW5wdXQtcGxhY2Vob2xkZXIgeyAvKiBNaWNyb3NvZnQgRWRnZSAqL1xyXG4gY29sb3I6IHdoaXRlO1xyXG4gZm9udC1zaXplOiAxNXB4O1xyXG59XHJcblxyXG5hIHtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/login/SellerLogin.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/login/SellerLogin.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\r\n\r\n<body>\r\n  <form (submit)=\"onLoginSubmit()\" class=\" col-md-4 col-md-offset-4\">\r\n    <div class=\"imgcontainer\">\r\n      <!-- <img src=\"assets\\gexLogo.png\" alt=\"Avatar\" class=\"avatar\">-->\r\n      <h1>Log In</h1>\r\n      <label><b>Seller</b></label>\r\n    </div>\r\n    <hr>\r\n    <div class=\"container\">\r\n\r\n      <input type=\"text\" [(ngModel)]=\"email\" placeholder=\"Enter Email\" name=\"email\" required>\r\n\r\n\r\n      <input type=\"password\" [(ngModel)]=\"password\" placeholder=\"Enter Password\" name=\"password\" required>\r\n\r\n      <a routerLink=\"/seller\" (click)=\"onLoginSubmit()\"><button type=\"submit\">Login</button></a><br><br>\r\n      <label>\r\n        <input type=\"checkbox\" checked=\"checked\" name=\"remember\"> Remember me\r\n      </label>\r\n    </div>\r\n\r\n    <div class=\"container\">\r\n\r\n      <p><a href=\"#\">Forgot password?</a></p>\r\n      <p><a routerLink=\"/login\">Buyer? Log in here.</a></p>\r\n    </div>\r\n\r\n\r\n  </form>\r\n</body>\r\n\r\n\r\n<!--<form (submit)=\"onLoginSubmit()\" class=\"col-md-4 col-md-offset-4\">\r\n        <div class=\"imgcontainer\">\r\n          <img src=\"assets\\gexLogo.png\" alt=\"Avatar\" class=\"avatar\">\r\n          <label><b>Seller</b></label>\r\n        </div>\r\n\r\n        <div class=\"container\">\r\n          <label for=\"email\"><b>Email</b></label>\r\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"email\" placeholder=\"Enter Email\" name=\"email\" required>\r\n\r\n          <label for=\"password\"><b>Password</b></label>\r\n          <input type=\"password\" class=\"form-control\" [(ngModel)]=\"password\" placeholder=\"Enter Password\" name=\"password\" required>\r\n\r\n          <a routerLink=\"/seller\" (click)=\"onLoginSubmit()\"><button type=\"submit\">Login</button></a>\r\n\r\n          <button type=\"submit\">Login</button>\r\n          <label>\r\n            <input type=\"checkbox\" checked=\"checked\" name=\"remember\"> Remember me\r\n          </label>\r\n        </div>\r\n\r\n        <div class=\"container\" style=\"background-color:#f1f1f1\">\r\n          <button type=\"button\" class=\"cancelbtn\">Cancel</button>\r\n          <span class=\"psw\">Forgot <a href=\"#\">password?</a></span>\r\n        </div>\r\n\r\n        <div class=\"container signin\">\r\n            <p>Are you a Buyer? <a routerLink=\"/login\">Sign in here</a>.</p>\r\n          </div>\r\n      </form>\r\n\r\n-->"

/***/ }),

/***/ "./src/app/components/login/login.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/login/login.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body{\r\n  -webkit-touch-callout: none;\r\n  -webkit-text-size-adjust: none;\r\n  -webkit-user-select: node;\r\n  height: 100vh;\r\n  background-image: url('brooklynbridge.jpg');\r\n  margin: -50px;\r\n  padding: 0;\r\n  background-repeat:no-repeat;\r\n  background-size:cover;\r\n}\r\n\r\nh1, label{\r\n  color: white;\r\n}\r\n\r\n.psw {\r\n  text-align: center;\r\n}\r\n\r\nhr {\r\n  border: 1px solid white;\r\n}\r\n\r\nform {\r\n\r\n  position: relative;\r\n  top: 100px;\r\n  max-width: 460px;\r\n  padding: 0;\r\n  height: 520px;\r\n  margin: auto;\r\n}\r\n\r\n/* Full-width inputs */\r\n\r\ninput[type=text], input[type=password] , input[type=tel] {\r\n  width: 25rem;\r\n  height: 3.125rem;\r\n  padding: 15px;\r\n  margin: 5px 0 22px 0;\r\n  display: inline-block;\r\n  border: none;\r\n  background:#0d0f11;\r\n  opacity: .65;\r\n  color: white;\r\n  font-weight: bold;\r\n\r\n}\r\n\r\ninput[type=text]:focus, input[type=password]:focus {\r\n  background-color: rgb(112, 58, 70);\r\n  outline: none;\r\n}\r\n\r\n/* Set a style for all buttons */\r\n\r\nbutton {\r\n  background-color: rgb(173, 45, 6);\r\n  color: white;\r\n  padding: 14px 20px;\r\n  margin: 8px 0;\r\n  border: none;\r\n  cursor: pointer;\r\n  width: 400px;\r\n  height: 50px;\r\n  font-size: 16px;\r\n}\r\n\r\n/* Add a hover effect for buttons */\r\n\r\nbutton:hover {\r\n  opacity:.75;\r\n  background-color: darkgreen;\r\n}\r\n\r\n/* Extra style for the cancel button (red) */\r\n\r\n.cancelbtn {\r\n  width: auto;\r\n  height: 50px;\r\n  padding: 10px 18px;\r\n  background-color: #5f5e5b;\r\n}\r\n\r\n/* Center the avatar image inside this container */\r\n\r\n.imgcontainer {\r\n  text-align: center;\r\n  margin: 24px 0 12px 0;\r\n}\r\n\r\n/* Avatar image */\r\n\r\nimg.avatar {\r\n  width: 40%;\r\n  margin: 34px;\r\n}\r\n\r\n/* Add padding to containers */\r\n\r\n.container {\r\n  padding: 12px;\r\n  width: 100%;\r\n  position: relative;\r\n\r\n\r\n}\r\n\r\n.wrapper {\r\n  width: 400px;\r\n  height: 70px;\r\n  padding-bottom: 16px;\r\n  padding-top: 0;\r\n}\r\n\r\n/* The \"Forgot password\" text */\r\n\r\nspan.psw {\r\n  float: right;\r\n  padding-top: 16px;\r\n}\r\n\r\n/* Change styles for span and cancel button on extra small screens */\r\n\r\n::-webkit-input-placeholder {\r\n  color: white;\r\n  opacity: 1; /* Firefox */\r\n  font-size: 15px;\r\n  font-weight: 400;\r\n\r\n}\r\n\r\n::-ms-input-placeholder {\r\n  color: white;\r\n  opacity: 1; /* Firefox */\r\n  font-size: 15px;\r\n  font-weight: 400;\r\n\r\n}\r\n\r\n::placeholder {\r\n  color: white;\r\n  opacity: 1; /* Firefox */\r\n  font-size: 15px;\r\n  font-weight: 400;\r\n\r\n}\r\n\r\n:-ms-input-placeholder { /* Internet Explorer 10-11 */\r\n color: white;\r\n font-size: 15px;\r\n}\r\n\r\n::-ms-input-placeholder { /* Microsoft Edge */\r\n color: white;\r\n font-size: 15px;\r\n}\r\n\r\na {\r\n  color: white;\r\n  font-size: 14px;\r\n  font-weight: bold;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsNEJBQTRCO0VBQzVCLCtCQUErQjtFQUMvQiwwQkFBMEI7RUFDMUIsY0FBYztFQUNkLDRDQUEwRDtFQUMxRCxjQUFjO0VBQ2QsV0FBVztFQUNYLDRCQUE0QjtFQUM1QixzQkFBc0I7Q0FDdkI7O0FBRUQ7RUFDRSxhQUFhO0NBQ2Q7O0FBRUQ7RUFDRSxtQkFBbUI7Q0FDcEI7O0FBQ0Q7RUFDRSx3QkFBd0I7Q0FDekI7O0FBRUQ7O0VBRUUsbUJBQW1CO0VBQ25CLFdBQVc7RUFDWCxpQkFBaUI7RUFDakIsV0FBVztFQUNYLGNBQWM7RUFDZCxhQUFhO0NBQ2Q7O0FBRUQsdUJBQXVCOztBQUN2QjtFQUNFLGFBQWE7RUFDYixpQkFBaUI7RUFDakIsY0FBYztFQUNkLHFCQUFxQjtFQUNyQixzQkFBc0I7RUFDdEIsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixhQUFhO0VBQ2IsYUFBYTtFQUNiLGtCQUFrQjs7Q0FFbkI7O0FBRUQ7RUFDRSxtQ0FBbUM7RUFDbkMsY0FBYztDQUNmOztBQUVELGlDQUFpQzs7QUFDakM7RUFDRSxrQ0FBa0M7RUFDbEMsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixjQUFjO0VBQ2QsYUFBYTtFQUNiLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2IsYUFBYTtFQUNiLGdCQUFnQjtDQUNqQjs7QUFFRCxvQ0FBb0M7O0FBQ3BDO0VBQ0UsWUFBWTtFQUNaLDRCQUE0QjtDQUM3Qjs7QUFFRCw2Q0FBNkM7O0FBQzdDO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsMEJBQTBCO0NBQzNCOztBQUVELG1EQUFtRDs7QUFDbkQ7RUFDRSxtQkFBbUI7RUFDbkIsc0JBQXNCO0NBQ3ZCOztBQUVELGtCQUFrQjs7QUFDbEI7RUFDRSxXQUFXO0VBQ1gsYUFBYTtDQUNkOztBQUVELCtCQUErQjs7QUFDL0I7RUFDRSxjQUFjO0VBQ2QsWUFBWTtFQUNaLG1CQUFtQjs7O0NBR3BCOztBQUVEO0VBQ0UsYUFBYTtFQUNiLGFBQWE7RUFDYixxQkFBcUI7RUFDckIsZUFBZTtDQUNoQjs7QUFHRCxnQ0FBZ0M7O0FBQ2hDO0VBQ0UsYUFBYTtFQUNiLGtCQUFrQjtDQUNuQjs7QUFFRCxxRUFBcUU7O0FBRXJFO0VBQ0UsYUFBYTtFQUNiLFdBQVcsQ0FBQyxhQUFhO0VBQ3pCLGdCQUFnQjtFQUNoQixpQkFBaUI7O0NBRWxCOztBQU5EO0VBQ0UsYUFBYTtFQUNiLFdBQVcsQ0FBQyxhQUFhO0VBQ3pCLGdCQUFnQjtFQUNoQixpQkFBaUI7O0NBRWxCOztBQU5EO0VBQ0UsYUFBYTtFQUNiLFdBQVcsQ0FBQyxhQUFhO0VBQ3pCLGdCQUFnQjtFQUNoQixpQkFBaUI7O0NBRWxCOztBQUVELHlCQUF5Qiw2QkFBNkI7Q0FDckQsYUFBYTtDQUNiLGdCQUFnQjtDQUNoQjs7QUFFRCwwQkFBMEIsb0JBQW9CO0NBQzdDLGFBQWE7Q0FDYixnQkFBZ0I7Q0FDaEI7O0FBRUQ7RUFDRSxhQUFhO0VBQ2IsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtDQUNuQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImJvZHl7XHJcbiAgLXdlYmtpdC10b3VjaC1jYWxsb3V0OiBub25lO1xyXG4gIC13ZWJraXQtdGV4dC1zaXplLWFkanVzdDogbm9uZTtcclxuICAtd2Via2l0LXVzZXItc2VsZWN0OiBub2RlO1xyXG4gIGhlaWdodDogMTAwdmg7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uLy4uLy4uL2Fzc2V0cy9icm9va2x5bmJyaWRnZS5qcGcpO1xyXG4gIG1hcmdpbjogLTUwcHg7XHJcbiAgcGFkZGluZzogMDtcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDpuby1yZXBlYXQ7XHJcbiAgYmFja2dyb3VuZC1zaXplOmNvdmVyO1xyXG59XHJcblxyXG5oMSwgbGFiZWx7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4ucHN3IHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuaHIge1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xyXG59XHJcblxyXG5mb3JtIHtcclxuXHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHRvcDogMTAwcHg7XHJcbiAgbWF4LXdpZHRoOiA0NjBweDtcclxuICBwYWRkaW5nOiAwO1xyXG4gIGhlaWdodDogNTIwcHg7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG59XHJcblxyXG4vKiBGdWxsLXdpZHRoIGlucHV0cyAqL1xyXG5pbnB1dFt0eXBlPXRleHRdLCBpbnB1dFt0eXBlPXBhc3N3b3JkXSAsIGlucHV0W3R5cGU9dGVsXSB7XHJcbiAgd2lkdGg6IDI1cmVtO1xyXG4gIGhlaWdodDogMy4xMjVyZW07XHJcbiAgcGFkZGluZzogMTVweDtcclxuICBtYXJnaW46IDVweCAwIDIycHggMDtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGJhY2tncm91bmQ6IzBkMGYxMTtcclxuICBvcGFjaXR5OiAuNjU7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG5cclxufVxyXG5cclxuaW5wdXRbdHlwZT10ZXh0XTpmb2N1cywgaW5wdXRbdHlwZT1wYXNzd29yZF06Zm9jdXMge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxMTIsIDU4LCA3MCk7XHJcbiAgb3V0bGluZTogbm9uZTtcclxufVxyXG5cclxuLyogU2V0IGEgc3R5bGUgZm9yIGFsbCBidXR0b25zICovXHJcbmJ1dHRvbiB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE3MywgNDUsIDYpO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBwYWRkaW5nOiAxNHB4IDIwcHg7XHJcbiAgbWFyZ2luOiA4cHggMDtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIHdpZHRoOiA0MDBweDtcclxuICBoZWlnaHQ6IDUwcHg7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG59XHJcblxyXG4vKiBBZGQgYSBob3ZlciBlZmZlY3QgZm9yIGJ1dHRvbnMgKi9cclxuYnV0dG9uOmhvdmVyIHtcclxuICBvcGFjaXR5Oi43NTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrZ3JlZW47XHJcbn1cclxuXHJcbi8qIEV4dHJhIHN0eWxlIGZvciB0aGUgY2FuY2VsIGJ1dHRvbiAocmVkKSAqL1xyXG4uY2FuY2VsYnRuIHtcclxuICB3aWR0aDogYXV0bztcclxuICBoZWlnaHQ6IDUwcHg7XHJcbiAgcGFkZGluZzogMTBweCAxOHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM1ZjVlNWI7XHJcbn1cclxuXHJcbi8qIENlbnRlciB0aGUgYXZhdGFyIGltYWdlIGluc2lkZSB0aGlzIGNvbnRhaW5lciAqL1xyXG4uaW1nY29udGFpbmVyIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgbWFyZ2luOiAyNHB4IDAgMTJweCAwO1xyXG59XHJcblxyXG4vKiBBdmF0YXIgaW1hZ2UgKi9cclxuaW1nLmF2YXRhciB7XHJcbiAgd2lkdGg6IDQwJTtcclxuICBtYXJnaW46IDM0cHg7XHJcbn1cclxuXHJcbi8qIEFkZCBwYWRkaW5nIHRvIGNvbnRhaW5lcnMgKi9cclxuLmNvbnRhaW5lciB7XHJcbiAgcGFkZGluZzogMTJweDtcclxuICB3aWR0aDogMTAwJTtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcblxyXG5cclxufVxyXG5cclxuLndyYXBwZXIge1xyXG4gIHdpZHRoOiA0MDBweDtcclxuICBoZWlnaHQ6IDcwcHg7XHJcbiAgcGFkZGluZy1ib3R0b206IDE2cHg7XHJcbiAgcGFkZGluZy10b3A6IDA7XHJcbn1cclxuXHJcblxyXG4vKiBUaGUgXCJGb3Jnb3QgcGFzc3dvcmRcIiB0ZXh0ICovXHJcbnNwYW4ucHN3IHtcclxuICBmbG9hdDogcmlnaHQ7XHJcbiAgcGFkZGluZy10b3A6IDE2cHg7XHJcbn1cclxuXHJcbi8qIENoYW5nZSBzdHlsZXMgZm9yIHNwYW4gYW5kIGNhbmNlbCBidXR0b24gb24gZXh0cmEgc21hbGwgc2NyZWVucyAqL1xyXG5cclxuOjpwbGFjZWhvbGRlciB7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIG9wYWNpdHk6IDE7IC8qIEZpcmVmb3ggKi9cclxuICBmb250LXNpemU6IDE1cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDQwMDtcclxuXHJcbn1cclxuXHJcbjotbXMtaW5wdXQtcGxhY2Vob2xkZXIgeyAvKiBJbnRlcm5ldCBFeHBsb3JlciAxMC0xMSAqL1xyXG4gY29sb3I6IHdoaXRlO1xyXG4gZm9udC1zaXplOiAxNXB4O1xyXG59XHJcblxyXG46Oi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7IC8qIE1pY3Jvc29mdCBFZGdlICovXHJcbiBjb2xvcjogd2hpdGU7XHJcbiBmb250LXNpemU6IDE1cHg7XHJcbn1cclxuXHJcbmEge1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/components/login/login.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/login/login.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\r\n<body>\r\n  <form (submit)=\"onLoginSubmit()\" class=\" col-md-4 col-md-offset-4\">\r\n    <div class=\"imgcontainer\">\r\n     <!-- <img src=\"assets\\gexLogo.png\" alt=\"Avatar\" class=\"avatar\">-->\r\n      <h1>Log In</h1>\r\n      <label><b>Buyer</b></label>\r\n    </div>\r\n     <hr>\r\n    <div class=\"container\">\r\n\r\n      <input type=\"text\" [(ngModel)]=\"email\" placeholder=\"Enter Email\" name=\"email\" required>\r\n\r\n\r\n      <input type=\"password\" [(ngModel)]=\"password\" placeholder=\"Enter Password\" name=\"password\" required>\r\n\r\n      <a routerLink=\"/buyer\" (click)=\"onLoginSubmit()\"><button type=\"submit\">Login</button></a><br><br>\r\n      <label>\r\n        <input type=\"checkbox\" checked=\"checked\" name=\"remember\"> Remember me\r\n      </label>\r\n    </div>\r\n\r\n    <div class=\"container\">\r\n\r\n      <p><a href=\"#\">Forgot password?</a></p>\r\n      <p><a routerLink=\"/seller-login\">Seller? Log in here.</a></p>\r\n    </div>\r\n\r\n\r\n  </form>\r\n</body>\r\n"

/***/ }),

/***/ "./src/app/components/login/login.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/login/login.component.ts ***!
  \*****************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_register_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/register.service */ "./src/app/services/register.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_storeFetch_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/storeFetch.service */ "./src/app/services/storeFetch.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _buyer_buyer_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../buyer/buyer.component */ "./src/app/components/buyer/buyer.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var LoginComponent = /** @class */ (function () {
    function LoginComponent(registerService, authService, storeFetchService, router, flashMessage, buyerComp) {
        this.registerService = registerService;
        this.authService = authService;
        this.storeFetchService = storeFetchService;
        this.router = router;
        this.flashMessage = flashMessage;
        this.buyerComp = buyerComp;
    }
    LoginComponent.prototype.ngOnInit = function () {
        if (this.storeFetchService.buyerIsLoggedIn())
            this.router.navigate(['/buyer']);
        else if (this.storeFetchService.sellerIsLoggedIn())
            this.router.navigate(['/seller']);
    };
    // Login request for buyer - Roni
    LoginComponent.prototype.onLoginSubmit = function () {
        var _this = this;
        // Generated email and password, only needed fields to login
        var buyer = {
            email: this.email,
            password: this.password
        };
        // Call the buyer login service
        this.authService.AuthenticateBuyer(buyer).subscribe(function (data) {
            if (data.success) {
                _this.storeFetchService.storeBuyerData(data.token, data.buyer);
                _this.router.navigate(['/buyer']);
                _this.flashMessage.show('You are now logged in.', { cssClass: 'alert-success', timeout: 5000 });
            }
            else {
                _this.flashMessage.show(data.msg, { cssClass: 'alert-danger', timeout: 5000 });
            }
        });
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/components/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/components/login/login.component.css")],
            providers: [_buyer_buyer_component__WEBPACK_IMPORTED_MODULE_6__["BuyerComponent"]]
        }),
        __metadata("design:paramtypes", [_services_register_service__WEBPACK_IMPORTED_MODULE_1__["RegisterService"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _services_storeFetch_service__WEBPACK_IMPORTED_MODULE_3__["StoreFetchService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            angular2_flash_messages__WEBPACK_IMPORTED_MODULE_5__["FlashMessagesService"],
            _buyer_buyer_component__WEBPACK_IMPORTED_MODULE_6__["BuyerComponent"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/components/login/sellerLogin.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/login/sellerLogin.component.ts ***!
  \***********************************************************/
/*! exports provided: SellerLoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SellerLoginComponent", function() { return SellerLoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_register_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/register.service */ "./src/app/services/register.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_storeFetch_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/storeFetch.service */ "./src/app/services/storeFetch.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_5__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var SellerLoginComponent = /** @class */ (function () {
    function SellerLoginComponent(registerService, authService, storeFetchService, router, flashMessage) {
        this.registerService = registerService;
        this.authService = authService;
        this.storeFetchService = storeFetchService;
        this.router = router;
        this.flashMessage = flashMessage;
    }
    SellerLoginComponent.prototype.ngOnInit = function () {
        if (this.storeFetchService.buyerIsLoggedIn()) {
            this.router.navigate(['/buyer']);
        }
        else if (this.storeFetchService.sellerIsLoggedIn()) {
            this.router.navigate(['/seller']);
        }
    };
    // Login request for seller - Roni
    SellerLoginComponent.prototype.onLoginSubmit = function () {
        var _this = this;
        // Generated email and password, only needed fields to login
        var seller = {
            email: this.email,
            password: this.password
        };
        // Call the seller login service
        this.authService.AuthenticateSeller(seller).subscribe(function (data) {
            if (data.success) {
                _this.storeFetchService.storeSellerData(data.token, data.seller);
                _this.router.navigate(['/seller']);
                _this.flashMessage.show('You are now logged in.', { cssClass: 'alert-success', timeout: 5000 });
            }
            else {
                _this.flashMessage.show(data.msg, { cssClass: 'alert-danger', timeout: 5000 });
            }
        });
    };
    SellerLoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./SellerLogin.component.html */ "./src/app/components/login/SellerLogin.component.html"),
            styles: [__webpack_require__(/*! ./SellerLogin.component.css */ "./src/app/components/login/SellerLogin.component.css")]
        }),
        __metadata("design:paramtypes", [_services_register_service__WEBPACK_IMPORTED_MODULE_1__["RegisterService"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _services_storeFetch_service__WEBPACK_IMPORTED_MODULE_3__["StoreFetchService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            angular2_flash_messages__WEBPACK_IMPORTED_MODULE_5__["FlashMessagesService"]])
    ], SellerLoginComponent);
    return SellerLoginComponent;
}());



/***/ }),

/***/ "./src/app/components/navbar/buyer-navbar/buyer-navbar.component.css":
/*!***************************************************************************!*\
  !*** ./src/app/components/navbar/buyer-navbar/buyer-navbar.component.css ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".navbar-brand{\r\n  max-height: 30px;\r\n  max-width: 30%;\r\n  overflow: visible;\r\n  padding: 0;\r\n\r\n}\r\n\r\n.logForm {\r\n  list-style-type: none;\r\n  margin: 0;\r\n  padding: 0;\r\n  overflow: hidden;\r\n}\r\n\r\n.nav-item2 {\r\n  float: left;\r\n  list-style-type: none;\r\n  font-size: 14px;\r\n  padding-top: 0;\r\n}\r\n\r\n.nav-item2 a:hover {\r\n  background-color: lightgray;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9uYXZiYXIvYnV5ZXItbmF2YmFyL2J1eWVyLW5hdmJhci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsV0FBVzs7Q0FFWjs7QUFFRDtFQUNFLHNCQUFzQjtFQUN0QixVQUFVO0VBQ1YsV0FBVztFQUNYLGlCQUFpQjtDQUNsQjs7QUFFRDtFQUNFLFlBQVk7RUFDWixzQkFBc0I7RUFDdEIsZ0JBQWdCO0VBQ2hCLGVBQWU7Q0FDaEI7O0FBRUQ7RUFDRSw0QkFBNEI7Q0FDN0IiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL25hdmJhci9idXllci1uYXZiYXIvYnV5ZXItbmF2YmFyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubmF2YmFyLWJyYW5ke1xyXG4gIG1heC1oZWlnaHQ6IDMwcHg7XHJcbiAgbWF4LXdpZHRoOiAzMCU7XHJcbiAgb3ZlcmZsb3c6IHZpc2libGU7XHJcbiAgcGFkZGluZzogMDtcclxuXHJcbn1cclxuXHJcbi5sb2dGb3JtIHtcclxuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG5cclxuLm5hdi1pdGVtMiB7XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBwYWRkaW5nLXRvcDogMDtcclxufVxyXG5cclxuLm5hdi1pdGVtMiBhOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyYXk7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/components/navbar/buyer-navbar/buyer-navbar.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/components/navbar/buyer-navbar/buyer-navbar.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!---Buyer NavBar-->\r\n<nav class=\"navbar navbar-expand-lg navbar-light bg-light\">\r\n  <a class=\"navbar-brand\" href=\"#\"><img src=\"assets\\gexLogo.png\" style=\"max-width: 150px; margin-top: -14px;\" class=\"img-responsive\"></a>\r\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarColor03\" aria-controls=\"navbarColor03\"\r\n    aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n    <span class=\"navbar-toggler-icon\"></span>\r\n  </button>\r\n\r\n  <!--<ng-container *ngIf=\"user == 0; else second\">-->\r\n\r\n  <label id=\"userType\">Buyer</label>\r\n\r\n  <div class=\"collapse navbar-collapse\" id=\"navbarColor03\">\r\n    <ul class=\"navbar-nav mr-auto\">\r\n      <li class=\"nav-item active\">\r\n      </li>\r\n      <!---\r\n        <li class=\"nav-item\">\r\n          <a class=\"nav-link\" (click)=\"onLogoutClick()\" href=\"#\">Logout</a>\r\n        </li>\r\n      -->\r\n    </ul>\r\n    <ul class=\"logForm\">\r\n      <li class=\"nav-item2\">\r\n        <a class=\"nav-link\" routerLink=\"/buyer/make-request\">Submit Request</a>\r\n      </li>\r\n      <li class=\"nav-item2\">\r\n        <a class=\"nav-link\" routerLink=\"/buyer\">My Portal</a>\r\n      </li>\r\n      <li class=\"nav-item2\">\r\n        <a class=\"nav-link\" routerLink=\"/buyer/buyer-account\">My Account</a>\r\n      </li>\r\n      <li class=\"nav-item2\">\r\n        <a class=\"nav-link\" (click)=\"onLogoutClick()\" routerLink=\"/login\">Logout</a>\r\n      </li>\r\n    </ul>\r\n  </div>\r\n</nav>\r\n<!---------->"

/***/ }),

/***/ "./src/app/components/navbar/buyer-navbar/buyer-navbar.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/components/navbar/buyer-navbar/buyer-navbar.component.ts ***!
  \**************************************************************************/
/*! exports provided: BuyerNavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BuyerNavbarComponent", function() { return BuyerNavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_storeFetch_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/storeFetch.service */ "./src/app/services/storeFetch.service.ts");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_buyer_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/buyer.service */ "./src/app/services/buyer.service.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/*
By: Omar
This component file is the main file that offers the buyer navigation bar functionality in GEX.
*/






var BuyerNavbarComponent = /** @class */ (function () {
    function BuyerNavbarComponent(storeFetchService, router, flashMessage, buyerService, titleService) {
        this.storeFetchService = storeFetchService;
        this.router = router;
        this.flashMessage = flashMessage;
        this.buyerService = buyerService;
        this.titleService = titleService;
    }
    BuyerNavbarComponent.prototype.ngOnInit = function () {
        // This line of code sets the browser tab title when a user is navigating through the GEX application buyer related pages.
        this.titleService.setTitle("Buyer | GEX");
    };
    // This function logs out the current user when they click logout on the navbar. Every user, when they log in, gets stored locally so this funciton 
    // goes into the local memory using the services developed in order to remove the current user so that if another user wishes to log on they can.
    // It also navigates the user to the correct page since they no longer have access to the buyer pages once they log out.
    BuyerNavbarComponent.prototype.onLogoutClick = function () {
        this.buyerService.buyerLogout();
        this.storeFetchService.userLogout();
        this.flashMessage.show('You are logged out', {
            cssClass: 'alert-success',
            timeout: 3000
        });
        this.router.navigate(['/login']);
        window.location.reload();
        return false;
    };
    BuyerNavbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-buyer-navbar',
            template: __webpack_require__(/*! ./buyer-navbar.component.html */ "./src/app/components/navbar/buyer-navbar/buyer-navbar.component.html"),
            styles: [__webpack_require__(/*! ./buyer-navbar.component.css */ "./src/app/components/navbar/buyer-navbar/buyer-navbar.component.css")]
        }),
        __metadata("design:paramtypes", [_services_storeFetch_service__WEBPACK_IMPORTED_MODULE_1__["StoreFetchService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2__["FlashMessagesService"],
            _services_buyer_service__WEBPACK_IMPORTED_MODULE_4__["BuyerService"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["Title"]])
    ], BuyerNavbarComponent);
    return BuyerNavbarComponent;
}());



/***/ }),

/***/ "./src/app/components/navbar/navbar.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".navbar-brand{\r\n  max-height: 30px;\r\n  max-width: 30%;\r\n  overflow: visible;\r\n  padding: 0;\r\n\r\n}\r\n\r\n.logForm {\r\n  list-style-type: none;\r\n  margin: 0;\r\n  padding: 0;\r\n  overflow: hidden;\r\n}\r\n\r\n.nav-item2{\r\n\r\n  float: left;\r\n  list-style-type: none;\r\n  font-size: 18px;\r\n  padding-top: 0;\r\n\r\n}\r\n\r\n.nav-item2 a:hover {\r\n  background-color: lightgray;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQkFBaUI7RUFDakIsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixXQUFXOztDQUVaOztBQUVEO0VBQ0Usc0JBQXNCO0VBQ3RCLFVBQVU7RUFDVixXQUFXO0VBQ1gsaUJBQWlCO0NBQ2xCOztBQUdEOztFQUVFLFlBQVk7RUFDWixzQkFBc0I7RUFDdEIsZ0JBQWdCO0VBQ2hCLGVBQWU7O0NBRWhCOztBQUVEO0VBQ0UsNEJBQTRCO0NBQzdCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubmF2YmFyLWJyYW5ke1xyXG4gIG1heC1oZWlnaHQ6IDMwcHg7XHJcbiAgbWF4LXdpZHRoOiAzMCU7XHJcbiAgb3ZlcmZsb3c6IHZpc2libGU7XHJcbiAgcGFkZGluZzogMDtcclxuXHJcbn1cclxuXHJcbi5sb2dGb3JtIHtcclxuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG5cclxuXHJcbi5uYXYtaXRlbTJ7XHJcblxyXG4gIGZsb2F0OiBsZWZ0O1xyXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcclxuICBmb250LXNpemU6IDE4cHg7XHJcbiAgcGFkZGluZy10b3A6IDA7XHJcblxyXG59XHJcblxyXG4ubmF2LWl0ZW0yIGE6aG92ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JheTtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-light bg-light\">\r\n  <a class=\"navbar-brand\" href=\"#\"><img src=\"assets\\gexLogo.png\" style=\"max-width: 150px; margin-top: -14px;\" class=\"img-responsive\"></a>\r\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarColor03\" aria-controls=\"navbarColor03\"\r\n    aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n    <span class=\"navbar-toggler-icon\"></span>\r\n  </button>\r\n  <div class=\"collapse navbar-collapse\" id=\"navbarColor03\">\r\n    <ul class=\"navbar-nav mr-auto\">\r\n      <li class=\"nav-item active\">\r\n      </li>\r\n    </ul>\r\n    <ul class=\"logForm\">\r\n      <li class=\"nav-item2\">\r\n        <a class=\"nav-link\" routerLink=\"/login\">Sign In</a>\r\n      </li>\r\n      <li class=\"nav-item2\">\r\n        <a class=\"nav-link\" routerLink=\"/buyer-register\">Register</a>\r\n      </li>\r\n    </ul>\r\n  </div>\r\n</nav>\r\n"

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.ts ***!
  \*******************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_register_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/register.service */ "./src/app/services/register.service.ts");
/* harmony import */ var _services_storeFetch_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/storeFetch.service */ "./src/app/services/storeFetch.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/*
By: Omar
The main navbar component file used to implement the main navigation bar in GEX. We used a basic navbar initially and edited it to function appropriately.
*/






var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(registerService, storeFetchService, router, flashMessage, titleService) {
        this.registerService = registerService;
        this.storeFetchService = storeFetchService;
        this.router = router;
        this.flashMessage = flashMessage;
        this.titleService = titleService;
    }
    NavbarComponent.prototype.ngOnInit = function () {
        // This line of code sets the browser tab title when a user is navigating through the GEX application.
        this.titleService.setTitle("GEX");
    };
    NavbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/components/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.css */ "./src/app/components/navbar/navbar.component.css")]
        }),
        __metadata("design:paramtypes", [_services_register_service__WEBPACK_IMPORTED_MODULE_1__["RegisterService"],
            _services_storeFetch_service__WEBPACK_IMPORTED_MODULE_2__["StoreFetchService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            angular2_flash_messages__WEBPACK_IMPORTED_MODULE_4__["FlashMessagesService"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["Title"]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/components/navbar/seller-navbar/seller-navbar.component.css":
/*!*****************************************************************************!*\
  !*** ./src/app/components/navbar/seller-navbar/seller-navbar.component.css ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".navbar-brand{\r\n    max-height: 30px;\r\n    max-width: 30%;\r\n    overflow: visible;\r\n    padding: 0;\r\n  \r\n  }\r\n  \r\n  .logForm {\r\n    list-style-type: none;\r\n    margin: 0;\r\n    padding: 0;\r\n    overflow: hidden;\r\n  }\r\n  \r\n  .nav-item2 {\r\n    float: left;\r\n    list-style-type: none;\r\n    font-size: 14px;\r\n    padding-top: 0;\r\n  }\r\n  \r\n  .nav-item2 a:hover {\r\n    background-color: lightgray;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9uYXZiYXIvc2VsbGVyLW5hdmJhci9zZWxsZXItbmF2YmFyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxpQkFBaUI7SUFDakIsZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixXQUFXOztHQUVaOztFQUVEO0lBQ0Usc0JBQXNCO0lBQ3RCLFVBQVU7SUFDVixXQUFXO0lBQ1gsaUJBQWlCO0dBQ2xCOztFQUVEO0lBQ0UsWUFBWTtJQUNaLHNCQUFzQjtJQUN0QixnQkFBZ0I7SUFDaEIsZUFBZTtHQUNoQjs7RUFFRDtJQUNFLDRCQUE0QjtHQUM3QiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbmF2YmFyL3NlbGxlci1uYXZiYXIvc2VsbGVyLW5hdmJhci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5hdmJhci1icmFuZHtcclxuICAgIG1heC1oZWlnaHQ6IDMwcHg7XHJcbiAgICBtYXgtd2lkdGg6IDMwJTtcclxuICAgIG92ZXJmbG93OiB2aXNpYmxlO1xyXG4gICAgcGFkZGluZzogMDtcclxuICBcclxuICB9XHJcbiAgXHJcbiAgLmxvZ0Zvcm0ge1xyXG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgfVxyXG4gIFxyXG4gIC5uYXYtaXRlbTIge1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBwYWRkaW5nLXRvcDogMDtcclxuICB9XHJcbiAgXHJcbiAgLm5hdi1pdGVtMiBhOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JheTtcclxuICB9Il19 */"

/***/ }),

/***/ "./src/app/components/navbar/seller-navbar/seller-navbar.component.html":
/*!******************************************************************************!*\
  !*** ./src/app/components/navbar/seller-navbar/seller-navbar.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!---Seller NavBar-->\r\n<nav class=\"navbar navbar-expand-lg navbar-light bg-light\">\r\n  <a class=\"navbar-brand\" href=\"#\"><img src=\"assets\\gexLogo.png\" style=\"max-width: 150px; margin-top: -14px;\" class=\"img-responsive\"></a>\r\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarColor03\" aria-controls=\"navbarColor03\"\r\n    aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n    <span class=\"navbar-toggler-icon\"></span>\r\n  </button>\r\n\r\n  <label id=\"userType\">Seller</label>\r\n\r\n  <div class=\"collapse navbar-collapse\" id=\"navbarColor03\">\r\n    <ul class=\"navbar-nav mr-auto\">\r\n      <li class=\"nav-item active\">\r\n      </li>\r\n    </ul>\r\n    <ul class=\"logForm\">\r\n      <li class=\"nav-item2\">\r\n        <a class=\"nav-link\" routerLink=\"/seller/seller-services\">New Good/Service</a>\r\n      </li>\r\n      <li class=\"nav-item2\">\r\n        <a class=\"nav-link\" routerLink=\"/seller\">My Portal</a>\r\n      </li>\r\n      <li class=\"nav-item2\">\r\n        <a class=\"nav-link\" routerLink=\"/seller/seller-account\">My Account</a>\r\n      </li>\r\n      <li class=\"nav-item2\">\r\n        <a class=\"nav-link\" (click)=\"onLogoutClick()\" routerLink=\"/seller-login\">Logout</a>\r\n      </li>\r\n    </ul>\r\n  </div>\r\n</nav>\r\n<!---------->\r\n"

/***/ }),

/***/ "./src/app/components/navbar/seller-navbar/seller-navbar.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/components/navbar/seller-navbar/seller-navbar.component.ts ***!
  \****************************************************************************/
/*! exports provided: SellerNavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SellerNavbarComponent", function() { return SellerNavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_seller_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/seller.service */ "./src/app/services/seller.service.ts");
/* harmony import */ var _services_storeFetch_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/storeFetch.service */ "./src/app/services/storeFetch.service.ts");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/*
By: Omar
This component file is the main file that offers the seller navigation bar functionality in GEX.
*/






var SellerNavbarComponent = /** @class */ (function () {
    function SellerNavbarComponent(sellerService, storeFetchService, flashMessage, router, titleService) {
        this.sellerService = sellerService;
        this.storeFetchService = storeFetchService;
        this.flashMessage = flashMessage;
        this.router = router;
        this.titleService = titleService;
    }
    SellerNavbarComponent.prototype.ngOnInit = function () {
        // This line of code sets the browser tab title when a user is navigating through the GEX application seller related pages.
        this.titleService.setTitle("Seller | GEX");
    };
    // This function logs out the current user when they click logout on the navbar. Every user, when they log in, gets stored locally so this funciton 
    // goes into the local memory using the services developed in order to remove the current user so that if another user wishes to log on they can.
    // It also navigates the user to the correct page since they no longer have access to the seller pages once they log out.
    SellerNavbarComponent.prototype.onLogoutClick = function () {
        this.sellerService.sellerLogout();
        this.storeFetchService.userLogout();
        this.flashMessage.show('You are logged out', {
            cssClass: 'alert-success',
            timeout: 3000
        });
        this.router.navigate(['/seller-login']);
        window.location.reload();
        return false;
    };
    SellerNavbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-seller-navbar',
            template: __webpack_require__(/*! ./seller-navbar.component.html */ "./src/app/components/navbar/seller-navbar/seller-navbar.component.html"),
            styles: [__webpack_require__(/*! ./seller-navbar.component.css */ "./src/app/components/navbar/seller-navbar/seller-navbar.component.css")]
        }),
        __metadata("design:paramtypes", [_services_seller_service__WEBPACK_IMPORTED_MODULE_1__["SellerService"],
            _services_storeFetch_service__WEBPACK_IMPORTED_MODULE_2__["StoreFetchService"],
            angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__["FlashMessagesService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["Title"]])
    ], SellerNavbarComponent);
    return SellerNavbarComponent;
}());



/***/ }),

/***/ "./src/app/components/register/BuyerRegister/BuyerRegister.component.css":
/*!*******************************************************************************!*\
  !*** ./src/app/components/register/BuyerRegister/BuyerRegister.component.css ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\nbody{\r\n  -webkit-touch-callout: none;\r\n  -webkit-text-size-adjust: none;\r\n  -webkit-user-select: node;\r\n  height: 100vh;\r\n  background-image: url('grandCanyonGex.jpg');\r\n  background-color: rgb(5, 53, 42);\r\n  background-repeat:no-repeat;\r\n  background-size:cover;\r\n\r\n}\r\n\r\nform {\r\n\r\n  color: white;\r\n  border: none;\r\n  width: 433px;\r\n  height: 600px;\r\n  position: relative;\r\n  text-align: left;\r\n  margin-top: 35px;\r\n\r\n}\r\n\r\n/* Add padding to containers */\r\n\r\n.container {\r\n  padding: 16px;\r\n\r\n}\r\n\r\n.innerform {\r\n  padding: 20px;\r\n}\r\n\r\n.header {\r\n  text-align: center;\r\n  padding: 0;\r\n  width: 100%;\r\n  margin: 0;\r\n}\r\n\r\n/* Full-width input fields */\r\n\r\ninput[type=text], input[type=password] , input[type=tel] {\r\n  width: 400px;\r\n  height: 50px;\r\n  padding: 15px;\r\n  margin: 5px 0 22px 0;\r\n  display: inline-block;\r\n  border: none;\r\n  background: #0d0f11;\r\n  opacity: .65;\r\n  color: white;\r\n\r\n\r\n}\r\n\r\ninput[type=text]:focus, input[type=password]:focus {\r\n  background-color: rgb(112, 58, 70);\r\n  outline: none;\r\n}\r\n\r\n/* Overwrite default styles of hr */\r\n\r\nhr {\r\n  border: 1px solid #d3d3e6;\r\n  margin-bottom: 25px;\r\n}\r\n\r\n/* Set a style for the submit/register button */\r\n\r\n.btn {\r\n  background-color: rgb(177, 53, 5);\r\n  color: white;\r\n  font-size: 16px;\r\n  text-align: center;\r\n  padding: 16px;\r\n  margin: 8px 0;\r\n  border: none;\r\n  cursor: pointer;\r\n  width: 400px;\r\n  height: 50px;\r\n  padding: 15px;\r\n  opacity: 0.9;\r\n}\r\n\r\n.btn:hover {\r\n  opacity:.75;\r\n  background-color: darkgreen;\r\n}\r\n\r\n/* Add a blue text color to links */\r\n\r\na {\r\n  color: white;\r\n  font-size: 18px;\r\n}\r\n\r\n/* Set a grey background color and center the text of the \"sign in\" section */\r\n\r\n.signin {\r\n  background-color: #f1f1f1;\r\n  text-align: center;\r\n}\r\n\r\n::-webkit-input-placeholder {\r\n  color: whitesmoke;\r\n  opacity: 1; /* Firefox */\r\n  font-size: 15px;\r\n\r\n}\r\n\r\n::-ms-input-placeholder {\r\n  color: whitesmoke;\r\n  opacity: 1; /* Firefox */\r\n  font-size: 15px;\r\n\r\n}\r\n\r\n::placeholder {\r\n  color: whitesmoke;\r\n  opacity: 1; /* Firefox */\r\n  font-size: 15px;\r\n\r\n}\r\n\r\n:-ms-input-placeholder { /* Internet Explorer 10-11 */\r\n color: whitesmoke;\r\n font-size: 15px;\r\n}\r\n\r\n::-ms-input-placeholder { /* Microsoft Edge */\r\n color: whitesmoke;\r\n font-size: 15px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9yZWdpc3Rlci9CdXllclJlZ2lzdGVyL0J1eWVyUmVnaXN0ZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7RUFDRSw0QkFBNEI7RUFDNUIsK0JBQStCO0VBQy9CLDBCQUEwQjtFQUMxQixjQUFjO0VBQ2QsNENBQXNFO0VBQ3RFLGlDQUFpQztFQUNqQyw0QkFBNEI7RUFDNUIsc0JBQXNCOztDQUV2Qjs7QUFFRDs7RUFFRSxhQUFhO0VBQ2IsYUFBYTtFQUNiLGFBQWE7RUFDYixjQUFjO0VBQ2QsbUJBQW1CO0VBQ25CLGlCQUFpQjtFQUNqQixpQkFBaUI7O0NBRWxCOztBQUVELCtCQUErQjs7QUFDL0I7RUFDRSxjQUFjOztDQUVmOztBQUNEO0VBQ0UsY0FBYztDQUNmOztBQUVEO0VBQ0UsbUJBQW1CO0VBQ25CLFdBQVc7RUFDWCxZQUFZO0VBQ1osVUFBVTtDQUNYOztBQUVELDZCQUE2Qjs7QUFDN0I7RUFDRSxhQUFhO0VBQ2IsYUFBYTtFQUNiLGNBQWM7RUFDZCxxQkFBcUI7RUFDckIsc0JBQXNCO0VBQ3RCLGFBQWE7RUFDYixvQkFBb0I7RUFDcEIsYUFBYTtFQUNiLGFBQWE7OztDQUdkOztBQUVEO0VBQ0UsbUNBQW1DO0VBQ25DLGNBQWM7Q0FDZjs7QUFFRCxvQ0FBb0M7O0FBQ3BDO0VBQ0UsMEJBQTBCO0VBQzFCLG9CQUFvQjtDQUNyQjs7QUFFRCxnREFBZ0Q7O0FBQ2hEO0VBQ0Usa0NBQWtDO0VBQ2xDLGFBQWE7RUFDYixnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLGNBQWM7RUFDZCxjQUFjO0VBQ2QsYUFBYTtFQUNiLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2IsYUFBYTtFQUNiLGNBQWM7RUFDZCxhQUFhO0NBQ2Q7O0FBR0Q7RUFDRSxZQUFZO0VBQ1osNEJBQTRCO0NBQzdCOztBQUdELG9DQUFvQzs7QUFDcEM7RUFDRSxhQUFhO0VBQ2IsZ0JBQWdCO0NBQ2pCOztBQUVELDhFQUE4RTs7QUFDOUU7RUFDRSwwQkFBMEI7RUFDMUIsbUJBQW1CO0NBQ3BCOztBQUVEO0VBQ0Usa0JBQWtCO0VBQ2xCLFdBQVcsQ0FBQyxhQUFhO0VBQ3pCLGdCQUFnQjs7Q0FFakI7O0FBTEQ7RUFDRSxrQkFBa0I7RUFDbEIsV0FBVyxDQUFDLGFBQWE7RUFDekIsZ0JBQWdCOztDQUVqQjs7QUFMRDtFQUNFLGtCQUFrQjtFQUNsQixXQUFXLENBQUMsYUFBYTtFQUN6QixnQkFBZ0I7O0NBRWpCOztBQUVELHlCQUF5Qiw2QkFBNkI7Q0FDckQsa0JBQWtCO0NBQ2xCLGdCQUFnQjtDQUNoQjs7QUFFRCwwQkFBMEIsb0JBQW9CO0NBQzdDLGtCQUFrQjtDQUNsQixnQkFBZ0I7Q0FDaEIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3JlZ2lzdGVyL0J1eWVyUmVnaXN0ZXIvQnV5ZXJSZWdpc3Rlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmJvZHl7XHJcbiAgLXdlYmtpdC10b3VjaC1jYWxsb3V0OiBub25lO1xyXG4gIC13ZWJraXQtdGV4dC1zaXplLWFkanVzdDogbm9uZTtcclxuICAtd2Via2l0LXVzZXItc2VsZWN0OiBub2RlO1xyXG4gIGhlaWdodDogMTAwdmg7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vLi4vLi4vLi4vc3JjL2Fzc2V0cy9ncmFuZENhbnlvbkdleC5qcGdcIik7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDUsIDUzLCA0Mik7XHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6bm8tcmVwZWF0O1xyXG4gIGJhY2tncm91bmQtc2l6ZTpjb3ZlcjtcclxuXHJcbn1cclxuXHJcbmZvcm0ge1xyXG5cclxuICBjb2xvcjogd2hpdGU7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIHdpZHRoOiA0MzNweDtcclxuICBoZWlnaHQ6IDYwMHB4O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gIG1hcmdpbi10b3A6IDM1cHg7XHJcblxyXG59XHJcblxyXG4vKiBBZGQgcGFkZGluZyB0byBjb250YWluZXJzICovXHJcbi5jb250YWluZXIge1xyXG4gIHBhZGRpbmc6IDE2cHg7XHJcblxyXG59XHJcbi5pbm5lcmZvcm0ge1xyXG4gIHBhZGRpbmc6IDIwcHg7XHJcbn1cclxuXHJcbi5oZWFkZXIge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBwYWRkaW5nOiAwO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1hcmdpbjogMDtcclxufVxyXG5cclxuLyogRnVsbC13aWR0aCBpbnB1dCBmaWVsZHMgKi9cclxuaW5wdXRbdHlwZT10ZXh0XSwgaW5wdXRbdHlwZT1wYXNzd29yZF0gLCBpbnB1dFt0eXBlPXRlbF0ge1xyXG4gIHdpZHRoOiA0MDBweDtcclxuICBoZWlnaHQ6IDUwcHg7XHJcbiAgcGFkZGluZzogMTVweDtcclxuICBtYXJnaW46IDVweCAwIDIycHggMDtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGJhY2tncm91bmQ6ICMwZDBmMTE7XHJcbiAgb3BhY2l0eTogLjY1O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuXHJcblxyXG59XHJcblxyXG5pbnB1dFt0eXBlPXRleHRdOmZvY3VzLCBpbnB1dFt0eXBlPXBhc3N3b3JkXTpmb2N1cyB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDExMiwgNTgsIDcwKTtcclxuICBvdXRsaW5lOiBub25lO1xyXG59XHJcblxyXG4vKiBPdmVyd3JpdGUgZGVmYXVsdCBzdHlsZXMgb2YgaHIgKi9cclxuaHIge1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNkM2QzZTY7XHJcbiAgbWFyZ2luLWJvdHRvbTogMjVweDtcclxufVxyXG5cclxuLyogU2V0IGEgc3R5bGUgZm9yIHRoZSBzdWJtaXQvcmVnaXN0ZXIgYnV0dG9uICovXHJcbi5idG4ge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxNzcsIDUzLCA1KTtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBwYWRkaW5nOiAxNnB4O1xyXG4gIG1hcmdpbjogOHB4IDA7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICB3aWR0aDogNDAwcHg7XHJcbiAgaGVpZ2h0OiA1MHB4O1xyXG4gIHBhZGRpbmc6IDE1cHg7XHJcbiAgb3BhY2l0eTogMC45O1xyXG59XHJcblxyXG5cclxuLmJ0bjpob3ZlciB7XHJcbiAgb3BhY2l0eTouNzU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogZGFya2dyZWVuO1xyXG59XHJcblxyXG5cclxuLyogQWRkIGEgYmx1ZSB0ZXh0IGNvbG9yIHRvIGxpbmtzICovXHJcbmEge1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBmb250LXNpemU6IDE4cHg7XHJcbn1cclxuXHJcbi8qIFNldCBhIGdyZXkgYmFja2dyb3VuZCBjb2xvciBhbmQgY2VudGVyIHRoZSB0ZXh0IG9mIHRoZSBcInNpZ24gaW5cIiBzZWN0aW9uICovXHJcbi5zaWduaW4ge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmMWYxZjE7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG46OnBsYWNlaG9sZGVyIHtcclxuICBjb2xvcjogd2hpdGVzbW9rZTtcclxuICBvcGFjaXR5OiAxOyAvKiBGaXJlZm94ICovXHJcbiAgZm9udC1zaXplOiAxNXB4O1xyXG5cclxufVxyXG5cclxuOi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7IC8qIEludGVybmV0IEV4cGxvcmVyIDEwLTExICovXHJcbiBjb2xvcjogd2hpdGVzbW9rZTtcclxuIGZvbnQtc2l6ZTogMTVweDtcclxufVxyXG5cclxuOjotbXMtaW5wdXQtcGxhY2Vob2xkZXIgeyAvKiBNaWNyb3NvZnQgRWRnZSAqL1xyXG4gY29sb3I6IHdoaXRlc21va2U7XHJcbiBmb250LXNpemU6IDE1cHg7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/components/register/BuyerRegister/BuyerRegister.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/components/register/BuyerRegister/BuyerRegister.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\r\n    <body>\r\n\r\n        <div class=\"container\">\r\n        <form (submit)=\"OnBuyerRegisterSubmit()\" >\r\n            <div class=\"container\">\r\n              <div class =\"container header\">\r\n\r\n                <h1>Sign up</h1>\r\n\r\n                </div>\r\n\r\n                <hr>\r\n\r\n\r\n                <input type=\"text\" [(ngModel)]=\"email\" name=\"email\" placeholder=\"Enter Email\"  required>\r\n\r\n\r\n                <input type=\"text\" placeholder=\"Enter First Name\" [(ngModel)]=\"first_name\" name=\"first_name\" required>\r\n\r\n\r\n                <input type=\"text\" placeholder=\"Enter Last Name\" [(ngModel)]=\"last_name\" name=\"last_name\" required>\r\n\r\n\r\n                <input type=\"password\" placeholder=\"Enter Password\" [(ngModel)]=\"password\" name=\"psw\" required>\r\n\r\n\r\n                <p>By creating an account you agree to our <a href=\"#\">Terms & Privacy</a>.</p>\r\n\r\n                <button type=\"submit\" class=\"btn\" routerLink=\"/buyer-register\" routerLinkActive=\"active\">Register</button>\r\n\r\n                <p>Already have an account? <a routerLink=\"/login\" routerLinkActive=\"active\">Sign in</a>.</p>\r\n\r\n                <p>Seller? <a routerLink=\"/seller-register\" routerLinkActive=\"active\">Register Here.</a>.</p>\r\n\r\n\r\n            </div>\r\n         </form>\r\n        </div>\r\n    </body>\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/components/register/BuyerRegister/BuyerRegister.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/components/register/BuyerRegister/BuyerRegister.component.ts ***!
  \******************************************************************************/
/*! exports provided: BuyerRegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BuyerRegisterComponent", function() { return BuyerRegisterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_validate_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/validate.service */ "./src/app/services/validate.service.ts");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_register_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/register.service */ "./src/app/services/register.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// By Roni
// buyer Registration





var BuyerRegisterComponent = /** @class */ (function () {
    function BuyerRegisterComponent(validateService, flashMessage, router, registerService) {
        this.validateService = validateService;
        this.flashMessage = flashMessage;
        this.router = router;
        this.registerService = registerService;
    }
    BuyerRegisterComponent.prototype.ngOnInit = function () {
    };
    BuyerRegisterComponent.prototype.OnBuyerRegisterSubmit = function () {
        var _this = this;
        // JSON with the inputted fields
        var buyer = {
            first_name: this.first_name,
            last_name: this.last_name,
            email: this.email,
            password: this.password
        };
        // RequiredFields
        if (!this.validateService.ValidateBuyerRegister(buyer)) {
            this.flashMessage.show('Please fill in all fields', { cssClass: 'alert-danger', timeout: 10000 });
            return false;
        }
        // ValidateEmail
        if (!this.validateService.validateEmail(buyer.email)) {
            this.flashMessage.show('Invalid Email', { cssClass: 'alert-danger', timeout: 3000 });
            return false;
        }
        // Register Buyer
        this.registerService.RegisterBuyer(buyer).subscribe(function (data) {
            if (data.success) {
                _this.router.navigate(['/preactivation']); // Tell buyer to checkemail
            }
            else {
                _this.flashMessage.show(data.msg, { cssClass: 'alert-danger', timeout: 3000 });
                _this.router.navigate(['/buyer-register']);
            }
        });
    };
    BuyerRegisterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./BuyerRegister.component.html */ "./src/app/components/register/BuyerRegister/BuyerRegister.component.html"),
            styles: [__webpack_require__(/*! ./BuyerRegister.component.css */ "./src/app/components/register/BuyerRegister/BuyerRegister.component.css")]
        }),
        __metadata("design:paramtypes", [_services_validate_service__WEBPACK_IMPORTED_MODULE_1__["ValidateService"],
            angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2__["FlashMessagesService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _services_register_service__WEBPACK_IMPORTED_MODULE_4__["RegisterService"]])
    ], BuyerRegisterComponent);
    return BuyerRegisterComponent;
}());



/***/ }),

/***/ "./src/app/components/register/SellerRegister/SellerRegister.component.css":
/*!*********************************************************************************!*\
  !*** ./src/app/components/register/SellerRegister/SellerRegister.component.css ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\nbody{\r\n  -webkit-touch-callout: none;\r\n  -webkit-text-size-adjust: none;\r\n  -webkit-user-select: node;\r\n  height: 110vh;\r\n  background-image: url('grandCanyonGex.jpg');\r\n  background-color: rgb(5, 53, 42);\r\n  background-repeat:no-repeat;\r\n  background-size:cover;\r\n  margin: 0;\r\n  padding: 0;\r\n\r\n\r\n}\r\n\r\nform {\r\n\r\n  color: white;\r\n  opacity: 1;\r\n  border: none;\r\n  width: 435px;\r\n  height: 600px;\r\n  position: relative;\r\n  text-align: center;\r\n  margin-top: 35px;\r\n  margin: auto;\r\n\r\n}\r\n\r\nh1 {\r\n  text-align: center;\r\n}\r\n\r\np {\r\n  width: 400px;\r\n  text-align: center;\r\n}\r\n\r\n/* Add padding to containers */\r\n\r\n.container {\r\n  padding: 16px;\r\n  margin: auto;\r\n  min-width: 435px;\r\n\r\n\r\n}\r\n\r\n.wrapper {\r\n  background-color: rgb(41, 43, 43);\r\n  opacity: .90;\r\n  padding: 6px;\r\n  margin: auto;\r\n  min-width: 435px;\r\n  border-radius: 25px;\r\n  text-align: center;\r\n}\r\n\r\n.innerform {\r\n  padding: 20px;\r\n}\r\n\r\n.header {\r\n  text-align: left;\r\n  padding: 0;\r\n  max-width: 450px;\r\n  margin: 0;\r\n}\r\n\r\n/* Full-width input fields */\r\n\r\ninput[type=text], input[type=password] , input[type=tel] {\r\n  width: 400px;\r\n  height: 50px;\r\n  padding: 15px;\r\n  margin: 5px 0 22px 0;\r\n  display: inline-block;\r\n  border: none;\r\n  background: #0d0f11;\r\n  opacity: .65;\r\n  color: white;\r\n  font-weight: bold;\r\n}\r\n\r\ninput[type=text]:focus, input[type=password]:focus , input[type=tel]:focus {\r\n  background-color: rgb(112, 58, 70);\r\n  outline: none;\r\n}\r\n\r\n/* Overwrite default styles of hr */\r\n\r\nhr {\r\n  border: 1px solid #d3d3e6;\r\n  margin-bottom: 25px;\r\n}\r\n\r\n/* Set a style for the submit/register button */\r\n\r\n.btn {\r\n  background-color:rgb(177, 53, 5);\r\n  color: white;\r\n  font-size: 16px;\r\n  text-align: center;\r\n  padding: 16px;\r\n  margin: 8px 0;\r\n  border: none;\r\n  cursor: pointer;\r\n  width: 400px;\r\n  height: 50px;\r\n  padding: 15px;\r\n  opacity: 0.9;\r\n}\r\n\r\n.btn:hover {\r\n  opacity:1;\r\n  background-color: darkgreen;\r\n}\r\n\r\n/* Add a blue text color to links */\r\n\r\na {\r\n  color: white;\r\n  font-size: 18px;\r\n}\r\n\r\n/* Set a grey background color and center the text of the \"sign in\" section */\r\n\r\n.signin {\r\n  background-color: #f1f1f1;\r\n  text-align: center;\r\n}\r\n\r\n::-webkit-input-placeholder {\r\n  color: white;\r\n  opacity: 1; /* Firefox */\r\n  font-size: 15px;\r\n  font-weight: 400;\r\n\r\n}\r\n\r\n::-ms-input-placeholder {\r\n  color: white;\r\n  opacity: 1; /* Firefox */\r\n  font-size: 15px;\r\n  font-weight: 400;\r\n\r\n}\r\n\r\n::placeholder {\r\n  color: white;\r\n  opacity: 1; /* Firefox */\r\n  font-size: 15px;\r\n  font-weight: 400;\r\n\r\n}\r\n\r\n:-ms-input-placeholder { /* Internet Explorer 10-11 */\r\n color: white;\r\n font-size: 15px;\r\n}\r\n\r\n::-ms-input-placeholder { /* Microsoft Edge */\r\n color: white;\r\n font-size: 15px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9yZWdpc3Rlci9TZWxsZXJSZWdpc3Rlci9TZWxsZXJSZWdpc3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtFQUNFLDRCQUE0QjtFQUM1QiwrQkFBK0I7RUFDL0IsMEJBQTBCO0VBQzFCLGNBQWM7RUFDZCw0Q0FBc0U7RUFDdEUsaUNBQWlDO0VBQ2pDLDRCQUE0QjtFQUM1QixzQkFBc0I7RUFDdEIsVUFBVTtFQUNWLFdBQVc7OztDQUdaOztBQUVEOztFQUVFLGFBQWE7RUFDYixXQUFXO0VBQ1gsYUFBYTtFQUNiLGFBQWE7RUFDYixjQUFjO0VBQ2QsbUJBQW1CO0VBQ25CLG1CQUFtQjtFQUNuQixpQkFBaUI7RUFDakIsYUFBYTs7Q0FFZDs7QUFDRDtFQUNFLG1CQUFtQjtDQUNwQjs7QUFDRDtFQUNFLGFBQWE7RUFDYixtQkFBbUI7Q0FDcEI7O0FBRUQsK0JBQStCOztBQUMvQjtFQUNFLGNBQWM7RUFDZCxhQUFhO0VBQ2IsaUJBQWlCOzs7Q0FHbEI7O0FBQ0Q7RUFDRSxrQ0FBa0M7RUFDbEMsYUFBYTtFQUNiLGFBQWE7RUFDYixhQUFhO0VBQ2IsaUJBQWlCO0VBQ2pCLG9CQUFvQjtFQUNwQixtQkFBbUI7Q0FDcEI7O0FBRUQ7RUFDRSxjQUFjO0NBQ2Y7O0FBRUQ7RUFDRSxpQkFBaUI7RUFDakIsV0FBVztFQUNYLGlCQUFpQjtFQUNqQixVQUFVO0NBQ1g7O0FBRUQsNkJBQTZCOztBQUM3QjtFQUNFLGFBQWE7RUFDYixhQUFhO0VBQ2IsY0FBYztFQUNkLHFCQUFxQjtFQUNyQixzQkFBc0I7RUFDdEIsYUFBYTtFQUNiLG9CQUFvQjtFQUNwQixhQUFhO0VBQ2IsYUFBYTtFQUNiLGtCQUFrQjtDQUNuQjs7QUFFRDtFQUNFLG1DQUFtQztFQUNuQyxjQUFjO0NBQ2Y7O0FBRUQsb0NBQW9DOztBQUNwQztFQUNFLDBCQUEwQjtFQUMxQixvQkFBb0I7Q0FDckI7O0FBRUQsZ0RBQWdEOztBQUNoRDtFQUNFLGlDQUFpQztFQUNqQyxhQUFhO0VBQ2IsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQixjQUFjO0VBQ2QsY0FBYztFQUNkLGFBQWE7RUFDYixnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLGFBQWE7RUFDYixjQUFjO0VBQ2QsYUFBYTtDQUNkOztBQUdEO0VBQ0UsVUFBVTtFQUNWLDRCQUE0QjtDQUM3Qjs7QUFFRCxvQ0FBb0M7O0FBQ3BDO0VBQ0UsYUFBYTtFQUNiLGdCQUFnQjtDQUNqQjs7QUFFRCw4RUFBOEU7O0FBQzlFO0VBQ0UsMEJBQTBCO0VBQzFCLG1CQUFtQjtDQUNwQjs7QUFFRDtFQUNFLGFBQWE7RUFDYixXQUFXLENBQUMsYUFBYTtFQUN6QixnQkFBZ0I7RUFDaEIsaUJBQWlCOztDQUVsQjs7QUFORDtFQUNFLGFBQWE7RUFDYixXQUFXLENBQUMsYUFBYTtFQUN6QixnQkFBZ0I7RUFDaEIsaUJBQWlCOztDQUVsQjs7QUFORDtFQUNFLGFBQWE7RUFDYixXQUFXLENBQUMsYUFBYTtFQUN6QixnQkFBZ0I7RUFDaEIsaUJBQWlCOztDQUVsQjs7QUFFRCx5QkFBeUIsNkJBQTZCO0NBQ3JELGFBQWE7Q0FDYixnQkFBZ0I7Q0FDaEI7O0FBRUQsMEJBQTBCLG9CQUFvQjtDQUM3QyxhQUFhO0NBQ2IsZ0JBQWdCO0NBQ2hCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9yZWdpc3Rlci9TZWxsZXJSZWdpc3Rlci9TZWxsZXJSZWdpc3Rlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmJvZHl7XHJcbiAgLXdlYmtpdC10b3VjaC1jYWxsb3V0OiBub25lO1xyXG4gIC13ZWJraXQtdGV4dC1zaXplLWFkanVzdDogbm9uZTtcclxuICAtd2Via2l0LXVzZXItc2VsZWN0OiBub2RlO1xyXG4gIGhlaWdodDogMTEwdmg7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vLi4vLi4vLi4vc3JjL2Fzc2V0cy9ncmFuZENhbnlvbkdleC5qcGdcIik7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDUsIDUzLCA0Mik7XHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6bm8tcmVwZWF0O1xyXG4gIGJhY2tncm91bmQtc2l6ZTpjb3ZlcjtcclxuICBtYXJnaW46IDA7XHJcbiAgcGFkZGluZzogMDtcclxuXHJcblxyXG59XHJcblxyXG5mb3JtIHtcclxuXHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIG9wYWNpdHk6IDE7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIHdpZHRoOiA0MzVweDtcclxuICBoZWlnaHQ6IDYwMHB4O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgbWFyZ2luLXRvcDogMzVweDtcclxuICBtYXJnaW46IGF1dG87XHJcblxyXG59XHJcbmgxIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxucCB7XHJcbiAgd2lkdGg6IDQwMHB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLyogQWRkIHBhZGRpbmcgdG8gY29udGFpbmVycyAqL1xyXG4uY29udGFpbmVyIHtcclxuICBwYWRkaW5nOiAxNnB4O1xyXG4gIG1hcmdpbjogYXV0bztcclxuICBtaW4td2lkdGg6IDQzNXB4O1xyXG5cclxuXHJcbn1cclxuLndyYXBwZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYig0MSwgNDMsIDQzKTtcclxuICBvcGFjaXR5OiAuOTA7XHJcbiAgcGFkZGluZzogNnB4O1xyXG4gIG1hcmdpbjogYXV0bztcclxuICBtaW4td2lkdGg6IDQzNXB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDI1cHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uaW5uZXJmb3JtIHtcclxuICBwYWRkaW5nOiAyMHB4O1xyXG59XHJcblxyXG4uaGVhZGVyIHtcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgbWF4LXdpZHRoOiA0NTBweDtcclxuICBtYXJnaW46IDA7XHJcbn1cclxuXHJcbi8qIEZ1bGwtd2lkdGggaW5wdXQgZmllbGRzICovXHJcbmlucHV0W3R5cGU9dGV4dF0sIGlucHV0W3R5cGU9cGFzc3dvcmRdICwgaW5wdXRbdHlwZT10ZWxdIHtcclxuICB3aWR0aDogNDAwcHg7XHJcbiAgaGVpZ2h0OiA1MHB4O1xyXG4gIHBhZGRpbmc6IDE1cHg7XHJcbiAgbWFyZ2luOiA1cHggMCAyMnB4IDA7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBiYWNrZ3JvdW5kOiAjMGQwZjExO1xyXG4gIG9wYWNpdHk6IC42NTtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbmlucHV0W3R5cGU9dGV4dF06Zm9jdXMsIGlucHV0W3R5cGU9cGFzc3dvcmRdOmZvY3VzICwgaW5wdXRbdHlwZT10ZWxdOmZvY3VzIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTEyLCA1OCwgNzApO1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbn1cclxuXHJcbi8qIE92ZXJ3cml0ZSBkZWZhdWx0IHN0eWxlcyBvZiBociAqL1xyXG5ociB7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2QzZDNlNjtcclxuICBtYXJnaW4tYm90dG9tOiAyNXB4O1xyXG59XHJcblxyXG4vKiBTZXQgYSBzdHlsZSBmb3IgdGhlIHN1Ym1pdC9yZWdpc3RlciBidXR0b24gKi9cclxuLmJ0biB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjpyZ2IoMTc3LCA1MywgNSk7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgcGFkZGluZzogMTZweDtcclxuICBtYXJnaW46IDhweCAwO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgd2lkdGg6IDQwMHB4O1xyXG4gIGhlaWdodDogNTBweDtcclxuICBwYWRkaW5nOiAxNXB4O1xyXG4gIG9wYWNpdHk6IDAuOTtcclxufVxyXG5cclxuXHJcbi5idG46aG92ZXIge1xyXG4gIG9wYWNpdHk6MTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrZ3JlZW47XHJcbn1cclxuXHJcbi8qIEFkZCBhIGJsdWUgdGV4dCBjb2xvciB0byBsaW5rcyAqL1xyXG5hIHtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG59XHJcblxyXG4vKiBTZXQgYSBncmV5IGJhY2tncm91bmQgY29sb3IgYW5kIGNlbnRlciB0aGUgdGV4dCBvZiB0aGUgXCJzaWduIGluXCIgc2VjdGlvbiAqL1xyXG4uc2lnbmluIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjFmMWYxO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuOjpwbGFjZWhvbGRlciB7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIG9wYWNpdHk6IDE7IC8qIEZpcmVmb3ggKi9cclxuICBmb250LXNpemU6IDE1cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDQwMDtcclxuXHJcbn1cclxuXHJcbjotbXMtaW5wdXQtcGxhY2Vob2xkZXIgeyAvKiBJbnRlcm5ldCBFeHBsb3JlciAxMC0xMSAqL1xyXG4gY29sb3I6IHdoaXRlO1xyXG4gZm9udC1zaXplOiAxNXB4O1xyXG59XHJcblxyXG46Oi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7IC8qIE1pY3Jvc29mdCBFZGdlICovXHJcbiBjb2xvcjogd2hpdGU7XHJcbiBmb250LXNpemU6IDE1cHg7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/components/register/SellerRegister/SellerRegister.component.html":
/*!**********************************************************************************!*\
  !*** ./src/app/components/register/SellerRegister/SellerRegister.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\r\n   <body>\r\n<form (submit)=\"OnSellerRegisterSubmit()\" class=\"col-md-8 col-md-offset-8\">\r\n    <div class=\"container\">\r\n      <div class =\"header\">\r\n        <h1>Register</h1>\r\n      </div>\r\n      <hr>\r\n\r\n      <input type=\"text\" placeholder=\"Enter Email\" [(ngModel)]=\"email\" name=\"email\" required>\r\n\r\n\r\n      <input type=\"password\" placeholder=\"Enter Password\" [(ngModel)]=\"password\" name=\"psw\" required>\r\n      <input type=\"password\" placeholder=\"Confirm Password\" [(ngModel)]=\"confirmPassword\" name=\"psw\" required>\r\n\r\n\r\n      <input type=\"text\" placeholder=\"Legal Name of Entity\" [(ngModel)]=\"entity_name\" name=\"entity_name\" required>\r\n      <!--<input type=\"text\" placeholder=\"Doing business as...\" name=\"dba\" optional>-->\r\n      <input type=\"text\" placeholder=\"Your position\" [(ngModel)]=\"position\" name=\"position\" optional>\r\n\r\n      <input type=\"text\" placeholder=\"Enter First Name\" [(ngModel)]=\"first_name\" name=\"first_name\" required>\r\n\r\n      <input type=\"text\" placeholder=\"Enter Last Name\" [(ngModel)]=\"last_name\" name=\"last_name\" required>\r\n\r\n\r\n\r\n      <input type=\"tel\" placeholder=\"Enter phone number\" [(ngModel)]=\"phone_number\" name=\"phone_number\" required>\r\n\r\n      <hr>\r\n    </div>\r\n    <div class=\"wrapper\">\r\n      <p>By creating an account you agree to our <a href=\"#\">Terms & Privacy</a>.</p>\r\n      <button type=\"submit\" class=\"registerbtn btn\" routerLink=\"/seller-register\" routerLinkActive=\"active\">Register</button>\r\n    </div>\r\n\r\n    <div class=\"container\">\r\n      <p>Already have an account? <a routerLink=\"/seller-login\" routerLinkActive=\"active\">Sign in</a>.</p>\r\n      <br>\r\n      <p>Are you a Buyer? <a routerLink=\"/buyer-register\" routerLinkACtive=\"active\">Register here</a>.</p>\r\n    </div>\r\n  </form>\r\n</body>\r\n"

/***/ }),

/***/ "./src/app/components/register/SellerRegister/SellerRegister.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/components/register/SellerRegister/SellerRegister.component.ts ***!
  \********************************************************************************/
/*! exports provided: SellerRegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SellerRegisterComponent", function() { return SellerRegisterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_validate_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/validate.service */ "./src/app/services/validate.service.ts");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_register_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/register.service */ "./src/app/services/register.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// By Roni
// Seller Registration





var SellerRegisterComponent = /** @class */ (function () {
    function SellerRegisterComponent(validateService, flashMessage, router, registerService) {
        this.validateService = validateService;
        this.flashMessage = flashMessage;
        this.router = router;
        this.registerService = registerService;
    }
    SellerRegisterComponent.prototype.ngOnInit = function () {
    };
    SellerRegisterComponent.prototype.OnSellerRegisterSubmit = function () {
        var _this = this;
        console.log('On Seller Register Submit Called.');
        // JSON with the inputted fields
        var seller = {
            first_name: this.first_name,
            last_name: this.last_name,
            email: this.email,
            entity_name: this.entity_name,
            position: this.position,
            phone_number: this.phone_number,
            password: this.password,
            confirmPassword: this.confirmPassword,
        };
        // RequiredFields
        if (!this.validateService.ValidateSellerRegister(seller)) {
            this.flashMessage.show('Please fill in all fields', { cssClass: 'alert-danger', timeout: 10000 });
            return false;
        }
        // Password Confirmation
        // tslint:disable-next-line:triple-equals
        if (seller.password != this.confirmPassword) {
            this.flashMessage.show('Passwords do not match', { cssClass: 'alert-danger', timeout: 10000 });
            return false;
        }
        // ValidateEmail
        if (!this.validateService.validateEmail(seller.email)) {
            this.flashMessage.show('Invalid Email', { cssClass: 'alert-danger', timeout: 3000 });
            return false;
        }
        // Register Seller
        this.registerService.RegisterSeller(seller).subscribe(function (data) {
            if (data.success) { // must know if its a successful register **
                _this.router.navigate(['/preactivation']); // Tell buyer to checkemail
            }
            else {
                _this.flashMessage.show(data.msg, { cssClass: 'alert-danger', timeout: 10000 });
                _this.router.navigate(['/seller-register']);
            }
        });
    };
    SellerRegisterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./SellerRegister.component.html */ "./src/app/components/register/SellerRegister/SellerRegister.component.html"),
            styles: [__webpack_require__(/*! ./SellerRegister.component.css */ "./src/app/components/register/SellerRegister/SellerRegister.component.css")]
        }),
        __metadata("design:paramtypes", [_services_validate_service__WEBPACK_IMPORTED_MODULE_1__["ValidateService"],
            angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2__["FlashMessagesService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _services_register_service__WEBPACK_IMPORTED_MODULE_4__["RegisterService"]])
    ], SellerRegisterComponent);
    return SellerRegisterComponent;
}());



/***/ }),

/***/ "./src/app/components/request/request.component.css":
/*!**********************************************************!*\
  !*** ./src/app/components/request/request.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body {\r\n    height: 100vh;\r\n}\r\n\r\nform{\r\n    margin-top: 25px;\r\n    margin: auto;\r\n    top: 45px;\r\n\r\n}\r\n\r\n.container {\r\n    background-color: white;\r\n}\r\n\r\n.card {\r\n    border: solid 1px lightgray; \r\n}\r\n\r\n.parent {\r\n    background-color: white;\r\n\r\n}\r\n\r\np {\r\n    font-size: 16px;\r\n}\r\n\r\n.btn {\r\n\r\n    background-color: rgb(218, 64, 26);\r\n    color: white;\r\n    font-weight: bold;\r\n    opacity: .95;\r\n  }\r\n\r\n/* Add a hover effect for buttons */\r\n\r\n.btn:hover {\r\n  opacity:.75;\r\n  background-color: darkgreen;\r\n  }\r\n\r\nhr {\r\n    border: solid 2px dimgrey !important;\r\n    \r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9yZXF1ZXN0L3JlcXVlc3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGNBQWM7Q0FDakI7O0FBRUQ7SUFDSSxpQkFBaUI7SUFDakIsYUFBYTtJQUNiLFVBQVU7O0NBRWI7O0FBR0Q7SUFDSSx3QkFBd0I7Q0FDM0I7O0FBRUQ7SUFDSSw0QkFBNEI7Q0FDL0I7O0FBRUQ7SUFDSSx3QkFBd0I7O0NBRTNCOztBQUVEO0lBQ0ksZ0JBQWdCO0NBQ25COztBQUNEOztJQUVJLG1DQUFtQztJQUNuQyxhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLGFBQWE7R0FDZDs7QUFFRCxvQ0FBb0M7O0FBQ3BDO0VBQ0EsWUFBWTtFQUNaLDRCQUE0QjtHQUMzQjs7QUFFRDtJQUNFLHFDQUFxQzs7R0FFdEMiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3JlcXVlc3QvcmVxdWVzdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYm9keSB7XHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG59XHJcblxyXG5mb3Jte1xyXG4gICAgbWFyZ2luLXRvcDogMjVweDtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIHRvcDogNDVweDtcclxuXHJcbn1cclxuXHJcblxyXG4uY29udGFpbmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4uY2FyZCB7XHJcbiAgICBib3JkZXI6IHNvbGlkIDFweCBsaWdodGdyYXk7IFxyXG59XHJcblxyXG4ucGFyZW50IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG5cclxufVxyXG5cclxucCB7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbn1cclxuLmJ0biB7XHJcblxyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIxOCwgNjQsIDI2KTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgb3BhY2l0eTogLjk1O1xyXG4gIH1cclxuICBcclxuICAvKiBBZGQgYSBob3ZlciBlZmZlY3QgZm9yIGJ1dHRvbnMgKi9cclxuICAuYnRuOmhvdmVyIHtcclxuICBvcGFjaXR5Oi43NTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrZ3JlZW47XHJcbiAgfVxyXG5cclxuICBociB7XHJcbiAgICBib3JkZXI6IHNvbGlkIDJweCBkaW1ncmV5ICFpbXBvcnRhbnQ7XHJcbiAgICBcclxuICB9Il19 */"

/***/ }),

/***/ "./src/app/components/request/request.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/request/request.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-buyer-navbar *ngIf=\"status\" ></app-buyer-navbar>\r\n<app-seller-navbar *ngIf=\"!status\"></app-seller-navbar>\r\n\r\n<body>\r\n  <div class=\"container\">\r\n    <form>\r\n      <div>\r\n        <h1>Request</h1>\r\n        <hr>\r\n        <p><b>Title: </b>{{request.title}}</p>\r\n        <p><b>Description: </b>{{request.description}}</p>\r\n        <div *ngIf=\"!status\" class=\"col-sm-12\" style=\"text-align: right;\">\r\n            <button type=\"button\" routerLink=\"/seller/submit-offer/{{request._id}}\" class=\"btn\">Submit New Offer</button>\r\n          </div>\r\n      </div>\r\n    &nbsp;\r\n    <ul class=\"parent container\">\r\n      <p style=\"font-size: 20px; font-weight: bold;\">Offers</p>\r\n      <hr>\r\n      <li class=\"card container\" *ngFor=\"let offer of offerList\">\r\n        &nbsp;\r\n\r\n        <div class=\"row\">\r\n          <div class=\"col-md-auto\">\r\n            <h4>{{offer.title}}</h4>\r\n          </div>\r\n          <div class=\"col\">\r\n            <b></b>\r\n          </div>\r\n        </div>\r\n\r\n        <p><b>Price:</b> {{offer.price}}</p>\r\n        <p><b>Description:</b> {{offer.description}}</p>\r\n        <div *ngIf=\"status\" class=\"col-sm-12\" style=\"text-align: right;\">\r\n          <button type=\"button\" routerLink=\"/request/{{request._id}}\" class=\"btn\">Accept Offer</button>\r\n        </div>\r\n        <br>\r\n\r\n      </li>\r\n\r\n    </ul>\r\n    <br>\r\n    </form>\r\n  </div>\r\n</body>\r\n"

/***/ }),

/***/ "./src/app/components/request/request.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/request/request.component.ts ***!
  \*********************************************************/
/*! exports provided: RequestComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequestComponent", function() { return RequestComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_request_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/request.service */ "./src/app/services/request.service.ts");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// By Roni
// Request View Page




var RequestComponent = /** @class */ (function () {
    function RequestComponent(route, requestService, flashMessage, router) {
        this.route = route;
        this.requestService = requestService;
        this.flashMessage = flashMessage;
        this.router = router;
    }
    RequestComponent.prototype.ngOnInit = function () {
        var _this = this;
        // get URL parameters
        this.route.params.subscribe(function (params) {
            _this.id = params.id; // --> Extract the id pass with URL
            // Make a call to retrieve request information with all offers to that request
            _this.requestService.getRequest(_this.id).subscribe(function (data) {
                if (data.success) {
                    _this.request = data.request;
                    _this.offerList = data.offers;
                    // used to distinguish between if buyer is viewing the request or a seller
                    // to limit access
                    if (data.status === 0) {
                        _this.status = true; // Buyer
                    }
                    else {
                        _this.status = false; // Seller
                    }
                }
                else {
                    _this.flashMessage.show(data.msg, { cssClass: 'alert-danger', timeout: 5000 });
                }
            });
        });
    };
    RequestComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-request',
            template: __webpack_require__(/*! ./request.component.html */ "./src/app/components/request/request.component.html"),
            styles: [__webpack_require__(/*! ./request.component.css */ "./src/app/components/request/request.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _services_request_service__WEBPACK_IMPORTED_MODULE_2__["RequestService"],
            angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__["FlashMessagesService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], RequestComponent);
    return RequestComponent;
}());



/***/ }),

/***/ "./src/app/components/seller/seller-account/seller-account.component.css":
/*!*******************************************************************************!*\
  !*** ./src/app/components/seller/seller-account/seller-account.component.css ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".center {\r\n  margin: auto;\r\n  width: 60%;\r\n  padding: 10px;\r\n}\r\n.ex1 {\r\n  margin-top: 1.5%;\r\n}\r\n.editBtn{\r\n  background-color: darkorange;\r\n}\r\n.saveBtn{\r\n  background-color: #e60000;\r\n}\r\nhtml, body {\r\n  height: 100%;\r\n}\r\n#container {\r\n  min-height: 100%;\r\n  margin-bottom: -330px;\r\n  position: relative;\r\n}\r\n#footer {\r\n  height: 330px;\r\n  position: relative;\r\n}\r\n.clearfooter {\r\n  height: 330px;\r\n  clear: both;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zZWxsZXIvc2VsbGVyLWFjY291bnQvc2VsbGVyLWFjY291bnQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQWE7RUFDYixXQUFXO0VBQ1gsY0FBYztDQUNmO0FBQ0Q7RUFDRSxpQkFBaUI7Q0FDbEI7QUFDRDtFQUNFLDZCQUE2QjtDQUM5QjtBQUNEO0VBQ0UsMEJBQTBCO0NBQzNCO0FBRUQ7RUFDRSxhQUFhO0NBQ2Q7QUFFRDtFQUNFLGlCQUFpQjtFQUNqQixzQkFBc0I7RUFDdEIsbUJBQW1CO0NBQ3BCO0FBRUQ7RUFDRSxjQUFjO0VBQ2QsbUJBQW1CO0NBQ3BCO0FBRUQ7RUFDRSxjQUFjO0VBQ2QsWUFBWTtDQUNiIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9zZWxsZXIvc2VsbGVyLWFjY291bnQvc2VsbGVyLWFjY291bnQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jZW50ZXIge1xyXG4gIG1hcmdpbjogYXV0bztcclxuICB3aWR0aDogNjAlO1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbn1cclxuLmV4MSB7XHJcbiAgbWFyZ2luLXRvcDogMS41JTtcclxufVxyXG4uZWRpdEJ0bntcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrb3JhbmdlO1xyXG59XHJcbi5zYXZlQnRue1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNlNjAwMDA7XHJcbn1cclxuXHJcbmh0bWwsIGJvZHkge1xyXG4gIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuI2NvbnRhaW5lciB7XHJcbiAgbWluLWhlaWdodDogMTAwJTtcclxuICBtYXJnaW4tYm90dG9tOiAtMzMwcHg7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4jZm9vdGVyIHtcclxuICBoZWlnaHQ6IDMzMHB4O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuLmNsZWFyZm9vdGVyIHtcclxuICBoZWlnaHQ6IDMzMHB4O1xyXG4gIGNsZWFyOiBib3RoO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/components/seller/seller-account/seller-account.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/components/seller/seller-account/seller-account.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-seller-navbar></app-seller-navbar>\r\n<flash-messages></flash-messages>\r\n\r\n<!-- BOOTSTRAP via CDN -->\r\n<link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css\">\r\n<script src=\"https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js\"></script>\r\n<script src=\"https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js\"></script>\r\n<script src=\"https://maxcdn.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js\"></script>\r\n\r\n<!-- Personal Information Card for Sellers -->\r\n<div class=\"container\">\r\n  &nbsp;\r\n  <h1>My Account</h1>\r\n  &nbsp;\r\n  <div class=\"card\">\r\n    <div class=\"card-body\">\r\n      <h4>Personal Information</h4>\r\n      &nbsp;\r\n      <form action=\"/action_page.php\">\r\n        <div class=\"form-group\">\r\n          <label for=\"fName\">First Name:</label>\r\n          <input type=\"text\" class=\"form-control\" id=\"fName\" name=\"firstName\" value={{seller.data.first_name}} disabled required>\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <label for=\"lName\">Last Name:</label>\r\n          <input type=\"text\" class=\"form-control\" id=\"lName\" name=\"lastName\" value={{seller.data.last_name}} disabled required>\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <label for=\"eAddress\">Email Address:</label>\r\n          <input type=\"email\" class=\"form-control\" id=\"eAddress\" name=\"emailAddress\" value={{seller.data.email}} disabled required>\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <label for=\"pwd\">Password:</label>\r\n          <input type=\"password\" class=\"form-control\" id=\"pwd\" name=\"password\" value={{seller.data.password}} disabled required>\r\n        </div>\r\n        <div class=\"form-group\" id=\"newPass\" hidden>\r\n            <label for=\"newPwd\">New Password:</label>\r\n            <input type=\"password\" placeholder=\"New Password\" class=\"form-control\" id=\"newPwd\" name=\"newPassword\" required>\r\n        </div>\r\n        <div class=\"form-group\" id=\"verify\" hidden>\r\n            <label for=\"verifyPwd\">Confirm Password:</label>\r\n            <input type=\"password\" placeholder=\"Confirm Password\" class=\"form-control\" id=\"verifyPwd\" name=\"verifyPassword\" required>\r\n        </div>\r\n        <p class=\"text-danger\" id=\"errorMessage\" hidden>Password did not match!</p>\r\n        <button type=\"button\" class=\"btn editBtn btn-lg\" id=\"editBtn\" (click)=\"editFunction()\">Edit</button>\r\n        <button type=\"button\" class=\"btn saveBtn btn-lg\" id=\"saveBtn\" (click)=\"saveFunction()\" disabled=true>Save</button>\r\n      </form>\r\n\r\n    </div>\r\n  </div>\r\n  <div class=\"clearfooter\"></div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/seller/seller-account/seller-account.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/components/seller/seller-account/seller-account.component.ts ***!
  \******************************************************************************/
/*! exports provided: SellerAccountComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SellerAccountComponent", function() { return SellerAccountComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_seller_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/seller.service */ "./src/app/services/seller.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SellerAccountComponent = /** @class */ (function () {
    function SellerAccountComponent(sellerService, route) {
        this.sellerService = sellerService;
        this.route = route;
    }
    // When the seller account page loads, the logged in seller's information will be fetched and displayed on the page.
    SellerAccountComponent.prototype.ngOnInit = function () {
        this.seller = this.route.snapshot.data['seller'];
    };
    // Function for edit button
    // Function enables users to use the textfields in order to edit their information. 
    // This only works with the front end so far. This has not been tied in with the backend.
    SellerAccountComponent.prototype.editFunction = function () {
        document.getElementById('fName').disabled = false;
        document.getElementById('lName').disabled = false;
        document.getElementById('eAddress').disabled = false;
        document.getElementById('saveBtn').disabled = false;
        document.getElementById('editBtn').disabled = true;
        document.getElementById('verify').hidden = false;
        document.getElementById('newPass').hidden = false;
    };
    // Function for save button
    // Function checks to see if the edited password matches before anything gets saved. A number of textfields are disabled once this function gets executed.
    // If there is no password inserted or the new password does not match when confirming. An error will be displayed to the user.
    // This only works with the front end so far. This has not been tied in with the backend.
    SellerAccountComponent.prototype.saveFunction = function () {
        var newPass = document.getElementById('newPwd').value;
        var confirm = document.getElementById('verifyPwd').value;
        if ((newPass === confirm) && document.getElementById('verifyPwd').value !== '') {
            document.getElementById('pwd').value = document.getElementById('newPwd').value;
            document.getElementById('fName').disabled = true;
            document.getElementById('lName').disabled = true;
            document.getElementById('eAddress').disabled = true;
            document.getElementById('pwd').disabled = true;
            document.getElementById('saveBtn').disabled = true;
            document.getElementById('editBtn').disabled = false;
            document.getElementById('verify').hidden = true;
            document.getElementById('newPass').hidden = true;
            document.getElementById('newPwd').value = '';
            document.getElementById('verifyPwd').value = '';
            document.getElementById('errorMessage').hidden = true;
            document.getElementById('verifyPwd').style.backgroundColor = 'White';
            document.getElementById('newPwd').style.backgroundColor = 'White';
        }
        else { // if the 2 passwords did not match
            document.getElementById('errorMessage').hidden = false;
            document.getElementById('verifyPwd').style.backgroundColor = 'Red';
            document.getElementById('newPwd').style.backgroundColor = 'Red';
        }
    };
    SellerAccountComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-seller-account',
            template: __webpack_require__(/*! ./seller-account.component.html */ "./src/app/components/seller/seller-account/seller-account.component.html"),
            styles: [__webpack_require__(/*! ./seller-account.component.css */ "./src/app/components/seller/seller-account/seller-account.component.css")]
        }),
        __metadata("design:paramtypes", [_services_seller_service__WEBPACK_IMPORTED_MODULE_1__["SellerService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], SellerAccountComponent);
    return SellerAccountComponent;
}());



/***/ }),

/***/ "./src/app/components/seller/seller-services/seller-services/seller-services.component.css":
/*!*************************************************************************************************!*\
  !*** ./src/app/components/seller/seller-services/seller-services/seller-services.component.css ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "html, body {\r\n    height: 100%;\r\n  }\r\n\r\n  #container {\r\n    min-height: 100%;\r\n    margin-bottom: -600px;\r\n    position: relative;\r\n  }\r\n\r\n  #footer {\r\n    height: 600px;\r\n    position: relative;\r\n  }\r\n\r\n  .clearfooter {\r\n    height: 600px;\r\n    clear: both;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zZWxsZXIvc2VsbGVyLXNlcnZpY2VzL3NlbGxlci1zZXJ2aWNlcy9zZWxsZXItc2VydmljZXMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGFBQWE7R0FDZDs7RUFFRDtJQUNFLGlCQUFpQjtJQUNqQixzQkFBc0I7SUFDdEIsbUJBQW1CO0dBQ3BCOztFQUVEO0lBQ0UsY0FBYztJQUNkLG1CQUFtQjtHQUNwQjs7RUFFRDtJQUNFLGNBQWM7SUFDZCxZQUFZO0dBQ2IiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3NlbGxlci9zZWxsZXItc2VydmljZXMvc2VsbGVyLXNlcnZpY2VzL3NlbGxlci1zZXJ2aWNlcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaHRtbCwgYm9keSB7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgfVxyXG5cclxuICAjY29udGFpbmVyIHtcclxuICAgIG1pbi1oZWlnaHQ6IDEwMCU7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAtNjAwcHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgfVxyXG4gIFxyXG4gICNmb290ZXIge1xyXG4gICAgaGVpZ2h0OiA2MDBweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB9XHJcblxyXG4gIC5jbGVhcmZvb3RlciB7XHJcbiAgICBoZWlnaHQ6IDYwMHB4O1xyXG4gICAgY2xlYXI6IGJvdGg7XHJcbiAgfSJdfQ== */"

/***/ }),

/***/ "./src/app/components/seller/seller-services/seller-services/seller-services.component.html":
/*!**************************************************************************************************!*\
  !*** ./src/app/components/seller/seller-services/seller-services/seller-services.component.html ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-seller-navbar></app-seller-navbar>\r\n<flash-messages></flash-messages>\r\n\r\n<form (submit)=\"AddCode()\">\r\n\t<div class=\"container\">\r\n\t\t<h1>What goods/services would you like to provide?</h1>\r\n    &nbsp;\r\n    <div class=\"card\">\r\n\t\t\t<div class=\"card-body\">\r\n\t\t\t\t<div class=\"form-group row\">\r\n\t\t\t\t\t<label class=\"col-sm-4 col-form-label\">Current Good/Service:</label>\r\n\t\t\t\t\t<div *ngIf=\"None\" class=\"col-sm-6\">\r\n\t\t\t\t\t\t<label class=\"col-sm-4 col-form-label\">None</label>\r\n          </div>\r\n          <div *ngIf=\"!None\" class=\"col-sm-10\">\r\n\t\t\t\t\t\t<label class=\"col-sm-4 col-form-label\">{{codeNames}}</label>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\t\t<div class=\"card\">\r\n\t\t\t<div class=\"card-body\">\r\n\t\t\t\t<div class=\"form-group row\">\r\n\t\t\t\t\t<label class=\"col-sm-2 col-form-label\">Category:</label>\r\n\t\t\t\t\t<div class=\"col-sm-10\">\r\n\t\t\t\t\t\t<select (change)=\"onChange($event)\">\r\n\t\t\t\t\t\t\t<option *ngFor=\"let code of codes\" value={{code.code}}>\r\n\t\t\t\t\t\t\t\t{{code.name}}\r\n\t\t\t\t\t\t\t</option>\r\n\t\t\t\t\t\t</select>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"form-group row\">\r\n\t\t\t\t\t<div class=\"col-sm-10\">\r\n\t\t\t\t\t\t<button type=\"submit\" class=\"btn btn-primary\">Submit</button>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div class=\"clearfooter\"></div>\r\n\t</div>\r\n</form>\r\n"

/***/ }),

/***/ "./src/app/components/seller/seller-services/seller-services/seller-services.component.ts":
/*!************************************************************************************************!*\
  !*** ./src/app/components/seller/seller-services/seller-services/seller-services.component.ts ***!
  \************************************************************************************************/
/*! exports provided: SellerServicesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SellerServicesComponent", function() { return SellerServicesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_seller_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../services/seller.service */ "./src/app/services/seller.service.ts");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// By Roni
// View & Add offered seller goods/services




var SellerServicesComponent = /** @class */ (function () {
    function SellerServicesComponent(sellerService, flashMessage, router) {
        this.sellerService = sellerService;
        this.flashMessage = flashMessage;
        this.router = router;
        // Temp codes for MVP - Kurgan
        this.codes = [
            { code: 95141601, name: 'House' },
            { code: 95141602, name: 'Mobile Home' },
            { code: 91111603, name: 'Cooking/Food Prep' },
            { code: 82141505, name: 'Computer Generated Design' },
            { code: 82121503, name: 'Digital Printing' },
            { code: 82101503, name: 'Magazine Advertising' },
            { code: 50443200, name: 'Frozen Corn' },
            { code: 42131700, name: 'Surgical Textiles' },
            { code: 30111700, name: 'Plasters' },
            { code: 23241600, name: 'Metal Cutting Tools' },
        ];
    }
    // Used for the dropdown
    SellerServicesComponent.prototype.onChange = function (event) {
        var newVal = event.target.value;
        this.code = newVal;
    };
    // View seller current codes - Roni
    SellerServicesComponent.prototype.ngOnInit = function () {
        var _this = this;
        var LocalArray = new Array();
        this.None = false;
        // Get seller codes
        this.sellerService.getCode().subscribe(function (data) {
            if (data.success) {
                if (data.codeList.length == 0) { // Seller does not have any codes yet
                    _this.None = true;
                }
                else {
                    _this.codeList = data.codeList;
                    _this.None = false;
                    var i, j = 0;
                    // Retrieve all seller current codes
                    // FOR MVP ONLY, will find a better and suffiecent way to perform this
                    for (i = 0; i < _this.codeList.length; i++) {
                        for (j = 0; j < _this.codes.length; j++) {
                            if (_this.codes[j].code == _this.codeList[i]) {
                                LocalArray.push(_this.codes[j].name);
                            }
                        }
                    }
                    _this.codeNames = LocalArray;
                }
            }
        });
    };
    // Add new code to seller - Roni
    SellerServicesComponent.prototype.AddCode = function () {
        var _this = this;
        var code = {
            codes: this.code
        };
        this.sellerService.setNewCode(code).subscribe(function (data) {
            if (data.success) {
                _this.flashMessage.show('Your New Code was submitted!', { cssClass: 'alert-success', timeout: 4000 });
                _this.router.navigate(['/seller/seller-services']);
            }
            else {
                _this.flashMessage.show(data.msg, { cssClass: 'alert-danger', timeout: 3000 });
                _this.router.navigate(['/seller/seller-services']);
            }
        });
    };
    SellerServicesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-seller-services',
            template: __webpack_require__(/*! ./seller-services.component.html */ "./src/app/components/seller/seller-services/seller-services/seller-services.component.html"),
            styles: [__webpack_require__(/*! ./seller-services.component.css */ "./src/app/components/seller/seller-services/seller-services/seller-services.component.css")]
        }),
        __metadata("design:paramtypes", [_services_seller_service__WEBPACK_IMPORTED_MODULE_2__["SellerService"],
            angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__["FlashMessagesService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], SellerServicesComponent);
    return SellerServicesComponent;
}());



/***/ }),

/***/ "./src/app/components/seller/seller.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/seller/seller.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".submitBtn{\r\n  margin-top: 0px;\r\n  margin-left: 923px;\r\n  position: absolute;\r\n  background-color: #e60000;\r\n  border-color: black;\r\n  border-width: 0.5px;\r\n}\r\n.dropDownBtn{\r\n  position: absolute;\r\n  margin-top: 0px;\r\n  margin-left: 982px;\r\n}\r\n.dDownBtn{\r\n  background-color: #0066ff;\r\n  border-color: black;\r\n  border-width: 0.5px;\r\n}\r\n.submitSearchBtn{\r\n  background-color: #e60000;\r\n  border-color: black;\r\n  border-width: 0.5px;\r\n}\r\n.searchBox{\r\n  position: absolute;\r\n  margin-top: 60px;\r\n  width: 1080px;\r\n}\r\nbody, html {\r\n  height: 100%;\r\n}\r\n#container {\r\n  min-height: 100%;\r\n  margin-bottom: -330px;\r\n  position: relative;\r\n}\r\n#footer {\r\n  height: 330px;\r\n  position: relative;\r\n}\r\n.clearfooter {\r\n  height: 330px;\r\n  clear: both;\r\n}\r\n.app-loading {\r\n  position: center;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  justify-content: center;\r\n  height: 100%;\r\n}\r\n.app-loading .spinner {\r\n  height: 200px;\r\n  width: 200px;\r\n  -webkit-animation: rotate 2s linear infinite;\r\n          animation: rotate 2s linear infinite;\r\n  -webkit-transform-origin: center center;\r\n          transform-origin: center center;\r\n  position: absolute;\r\n  top: 0;\r\n  bottom: 0;\r\n  left: 0;\r\n  right: 0;\r\n  margin: auto;\r\n}\r\n.app-loading .spinner .path {\r\n  stroke-dasharray: 1, 200;\r\n  stroke-dashoffset: 0;\r\n  -webkit-animation: dash 1.5s ease-in-out infinite;\r\n          animation: dash 1.5s ease-in-out infinite;\r\n  stroke-linecap: round;\r\n  stroke: #ddd;\r\n}\r\n@-webkit-keyframes rotate {\r\n  100% {\r\n    -webkit-transform: rotate(360deg);\r\n            transform: rotate(360deg);\r\n  }\r\n}\r\n@keyframes rotate {\r\n  100% {\r\n    -webkit-transform: rotate(360deg);\r\n            transform: rotate(360deg);\r\n  }\r\n}\r\n@-webkit-keyframes dash {\r\n  0% {\r\n    stroke-dasharray: 1, 200;\r\n    stroke-dashoffset: 0;\r\n  }\r\n  50% {\r\n    stroke-dasharray: 89, 200;\r\n    stroke-dashoffset: -35px;\r\n  }\r\n  100% {\r\n    stroke-dasharray: 89, 200;\r\n    stroke-dashoffset: -124px;\r\n  }\r\n}\r\n@keyframes dash {\r\n  0% {\r\n    stroke-dasharray: 1, 200;\r\n    stroke-dashoffset: 0;\r\n  }\r\n  50% {\r\n    stroke-dasharray: 89, 200;\r\n    stroke-dashoffset: -35px;\r\n  }\r\n  100% {\r\n    stroke-dasharray: 89, 200;\r\n    stroke-dashoffset: -124px;\r\n  }\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zZWxsZXIvc2VsbGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLG1CQUFtQjtFQUNuQiwwQkFBMEI7RUFDMUIsb0JBQW9CO0VBQ3BCLG9CQUFvQjtDQUNyQjtBQUNEO0VBQ0UsbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQixtQkFBbUI7Q0FDcEI7QUFDRDtFQUNFLDBCQUEwQjtFQUMxQixvQkFBb0I7RUFDcEIsb0JBQW9CO0NBQ3JCO0FBQ0Q7RUFDRSwwQkFBMEI7RUFDMUIsb0JBQW9CO0VBQ3BCLG9CQUFvQjtDQUNyQjtBQUNEO0VBQ0UsbUJBQW1CO0VBQ25CLGlCQUFpQjtFQUNqQixjQUFjO0NBQ2Y7QUFFRDtFQUNFLGFBQWE7Q0FDZDtBQUVEO0VBQ0UsaUJBQWlCO0VBQ2pCLHNCQUFzQjtFQUN0QixtQkFBbUI7Q0FDcEI7QUFFRDtFQUNFLGNBQWM7RUFDZCxtQkFBbUI7Q0FDcEI7QUFFRDtFQUNFLGNBQWM7RUFDZCxZQUFZO0NBQ2I7QUFFRDtFQUNFLGlCQUFpQjtFQUNqQixjQUFjO0VBQ2QsdUJBQXVCO0VBQ3ZCLG9CQUFvQjtFQUNwQix3QkFBd0I7RUFDeEIsYUFBYTtDQUNkO0FBRUQ7RUFDRSxjQUFjO0VBQ2QsYUFBYTtFQUNiLDZDQUFxQztVQUFyQyxxQ0FBcUM7RUFDckMsd0NBQWdDO1VBQWhDLGdDQUFnQztFQUNoQyxtQkFBbUI7RUFDbkIsT0FBTztFQUNQLFVBQVU7RUFDVixRQUFRO0VBQ1IsU0FBUztFQUNULGFBQWE7Q0FDZDtBQUVEO0VBQ0UseUJBQXlCO0VBQ3pCLHFCQUFxQjtFQUNyQixrREFBMEM7VUFBMUMsMENBQTBDO0VBQzFDLHNCQUFzQjtFQUN0QixhQUFhO0NBQ2Q7QUFFRDtFQUNFO0lBQ0Usa0NBQTBCO1lBQTFCLDBCQUEwQjtHQUMzQjtDQUNGO0FBSkQ7RUFDRTtJQUNFLGtDQUEwQjtZQUExQiwwQkFBMEI7R0FDM0I7Q0FDRjtBQUVEO0VBQ0U7SUFDRSx5QkFBeUI7SUFDekIscUJBQXFCO0dBQ3RCO0VBQ0Q7SUFDRSwwQkFBMEI7SUFDMUIseUJBQXlCO0dBQzFCO0VBQ0Q7SUFDRSwwQkFBMEI7SUFDMUIsMEJBQTBCO0dBQzNCO0NBQ0Y7QUFiRDtFQUNFO0lBQ0UseUJBQXlCO0lBQ3pCLHFCQUFxQjtHQUN0QjtFQUNEO0lBQ0UsMEJBQTBCO0lBQzFCLHlCQUF5QjtHQUMxQjtFQUNEO0lBQ0UsMEJBQTBCO0lBQzFCLDBCQUEwQjtHQUMzQjtDQUNGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9zZWxsZXIvc2VsbGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc3VibWl0QnRue1xyXG4gIG1hcmdpbi10b3A6IDBweDtcclxuICBtYXJnaW4tbGVmdDogOTIzcHg7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNlNjAwMDA7XHJcbiAgYm9yZGVyLWNvbG9yOiBibGFjaztcclxuICBib3JkZXItd2lkdGg6IDAuNXB4O1xyXG59XHJcbi5kcm9wRG93bkJ0bntcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgbWFyZ2luLXRvcDogMHB4O1xyXG4gIG1hcmdpbi1sZWZ0OiA5ODJweDtcclxufVxyXG4uZERvd25CdG57XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwNjZmZjtcclxuICBib3JkZXItY29sb3I6IGJsYWNrO1xyXG4gIGJvcmRlci13aWR0aDogMC41cHg7XHJcbn1cclxuLnN1Ym1pdFNlYXJjaEJ0bntcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTYwMDAwO1xyXG4gIGJvcmRlci1jb2xvcjogYmxhY2s7XHJcbiAgYm9yZGVyLXdpZHRoOiAwLjVweDtcclxufVxyXG4uc2VhcmNoQm94e1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBtYXJnaW4tdG9wOiA2MHB4O1xyXG4gIHdpZHRoOiAxMDgwcHg7XHJcbn1cclxuXHJcbmJvZHksIGh0bWwge1xyXG4gIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuI2NvbnRhaW5lciB7XHJcbiAgbWluLWhlaWdodDogMTAwJTtcclxuICBtYXJnaW4tYm90dG9tOiAtMzMwcHg7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4jZm9vdGVyIHtcclxuICBoZWlnaHQ6IDMzMHB4O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuLmNsZWFyZm9vdGVyIHtcclxuICBoZWlnaHQ6IDMzMHB4O1xyXG4gIGNsZWFyOiBib3RoO1xyXG59XHJcblxyXG4uYXBwLWxvYWRpbmcge1xyXG4gIHBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG4uYXBwLWxvYWRpbmcgLnNwaW5uZXIge1xyXG4gIGhlaWdodDogMjAwcHg7XHJcbiAgd2lkdGg6IDIwMHB4O1xyXG4gIGFuaW1hdGlvbjogcm90YXRlIDJzIGxpbmVhciBpbmZpbml0ZTtcclxuICB0cmFuc2Zvcm0tb3JpZ2luOiBjZW50ZXIgY2VudGVyO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDA7XHJcbiAgYm90dG9tOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG59XHJcblxyXG4uYXBwLWxvYWRpbmcgLnNwaW5uZXIgLnBhdGgge1xyXG4gIHN0cm9rZS1kYXNoYXJyYXk6IDEsIDIwMDtcclxuICBzdHJva2UtZGFzaG9mZnNldDogMDtcclxuICBhbmltYXRpb246IGRhc2ggMS41cyBlYXNlLWluLW91dCBpbmZpbml0ZTtcclxuICBzdHJva2UtbGluZWNhcDogcm91bmQ7XHJcbiAgc3Ryb2tlOiAjZGRkO1xyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIHJvdGF0ZSB7XHJcbiAgMTAwJSB7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xyXG4gIH1cclxufVxyXG5cclxuQGtleWZyYW1lcyBkYXNoIHtcclxuICAwJSB7XHJcbiAgICBzdHJva2UtZGFzaGFycmF5OiAxLCAyMDA7XHJcbiAgICBzdHJva2UtZGFzaG9mZnNldDogMDtcclxuICB9XHJcbiAgNTAlIHtcclxuICAgIHN0cm9rZS1kYXNoYXJyYXk6IDg5LCAyMDA7XHJcbiAgICBzdHJva2UtZGFzaG9mZnNldDogLTM1cHg7XHJcbiAgfVxyXG4gIDEwMCUge1xyXG4gICAgc3Ryb2tlLWRhc2hhcnJheTogODksIDIwMDtcclxuICAgIHN0cm9rZS1kYXNob2Zmc2V0OiAtMTI0cHg7XHJcbiAgfVxyXG59Il19 */"

/***/ }),

/***/ "./src/app/components/seller/seller.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/seller/seller.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-seller-navbar></app-seller-navbar>\r\n\r\n<div *ngIf='!seller' class=\"app-loading\">\r\n    <div class=\"logo\"></div>\r\n    <svg class=\"spinner\" viewBox=\"25 25 50 50\">\r\n      <circle class=\"path\" cx=\"50\" cy=\"50\" r=\"20\" fill=\"none\" stroke-width=\"2\" stroke-miterlimit=\"10\"/>\r\n    </svg>\r\n  </div>\r\n\r\n<!-- BOOTSTRAP via CDN -->\r\n<link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css\">\r\n<script src=\"https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js\"></script>\r\n<script src=\"https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js\"></script>\r\n<script src=\"https://maxcdn.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js\"></script>\r\n\r\n<div class=\"center\" *ngIf=\"seller\">\r\n  <div class=\"w3-container\">\r\n    <div class=\"container\" style=\"margin-top:70px; height:750px; width: 1500px;\">\r\n\r\n      <h4>Welcome, {{seller.first_name}}</h4>\r\n\r\n      <!-- Seller's tabs -->\r\n      <div class=\"tabbable\">\r\n        <ul class=\"nav nav-tabs\" id=\"myTab\" role=\"tablist\">\r\n          <li class=\"nav-item\">\r\n            <a class=\"nav-link active\" data-toggle=\"tab\" [ngClass]=\"{'active':currentTab === 'requests'}\" data-target=\"#requests\"\r\n              role=\"tab\" aria-controls=\"requests\" aria-selected=\"true\" (click)=\"requests('requests')\">Active Requests</a>\r\n          </li>\r\n          <li class=\"nav-item\">\r\n            <a class=\"nav-link\" data-toggle=\"tab\" [ngClass]=\"{'active':currentTab === 'history'}\" data-target=\"#history\"\r\n              role=\"tab\" aria-controls=\"history\" aria-selected=\"false\" (click)=\"history('history')\">History</a>\r\n          </li>\r\n        </ul>\r\n\r\n        <!-- Content of tabs -->\r\n        <div class=\"tab-content\" id=\"myTabContent\">\r\n          <!-- The content for Active Requests tab -->\r\n          <div class=\"tab-pane fade show active\" id=\"requests\" [ngClass]=\"{'active':currentTab === 'requests'}\" role=\"tabpanel\"\r\n            aria-labelledby=\"requests-tab\">\r\n            <br>\r\n            <h3>Active Requests</h3>\r\n            <div class=\"dropdown dropDownBtn\">\r\n              <button type=\"button\" class=\"btn dDownBtn dropdown-toggle text-white\" data-toggle=\"dropdown\">\r\n                Sort By:\r\n              </button>\r\n              <div class=\"dropdown-menu\">\r\n                <a class=\"dropdown-item\" href=\"#\">Alphabetical</a>\r\n                <a class=\"dropdown-item\" href=\"#\">Earliest to Latest</a>\r\n                <a class=\"dropdown-item\" href=\"#\">Number of Requests</a>\r\n              </div>\r\n            </div>\r\n            <div class=\"input-group mb-3 searchBox\">\r\n              <input type=\"text\" class=\"form-control\" placeholder=\"Search\">\r\n              <div class=\"input-group-append\">\r\n                <button class=\"btn submitSearchBtn text-white\" type=\"submit\">Search</button>\r\n              </div>\r\n            </div>\r\n            <br>\r\n            <br>\r\n            <br>\r\n            <br>\r\n            <br>\r\n            <br>\r\n            <ul class=\"container\">\r\n              <div class=\"card container\" *ngFor=\"let request of activeRequests\">\r\n                <div class=\"card-body\">\r\n                  <h4>{{request.title}}</h4>\r\n                  <h5><b>Deadline: </b>{{request.deadline}}</h5>\r\n                  <p><b>Description: </b>{{request.description}}</p>\r\n                  <button type=\"button\" routerLink=\"/request/{{request._id}}\" class=\"btn btn-block btn-lg btn-primary\">View Request</button>\r\n                  <br>\r\n                </div>\r\n              </div>\r\n            </ul>\r\n          </div>\r\n\r\n          <!-- The content for History tab -->\r\n          <div class=\"tab-pane fade show\" id=\"history\" [ngClass]=\"{'active':currentTab === 'history'}\" role=\"tabpanel\"\r\n            aria-labelledby=\"history-tab\">\r\n            <br>\r\n            <h3>Your Offers</h3>\r\n            <div class=\"dropdown dropDownBtn\">\r\n              <button type=\"button\" class=\"btn dDownBtn dropdown-toggle text-white\" data-toggle=\"dropdown\">\r\n                Sort By:\r\n              </button>\r\n              <div class=\"dropdown-menu\">\r\n                <a class=\"dropdown-item\" href=\"#\">Alphabetical</a>\r\n                <a class=\"dropdown-item\" href=\"#\">Earliest to Latest</a>\r\n                <a class=\"dropdown-item\" href=\"#\">Number of Requests</a>\r\n              </div>\r\n            </div>\r\n            <div class=\"input-group mb-3 searchBox\">\r\n              <input type=\"text\" class=\"form-control\" placeholder=\"Search\">\r\n              <div class=\"input-group-append\">\r\n                <button class=\"btn submitSearchBtn text-white\" type=\"submit\">Search</button>\r\n              </div>\r\n            </div>\r\n            <br>\r\n            <br>\r\n            <br>\r\n            <br>\r\n            <br>\r\n            <br>\r\n            <ul class=\"container\">\r\n              <div class=\"card container\" *ngFor=\"let offer of offerList\">\r\n                <div class=\"card-body\">\r\n                  <h4 style=\"align-self:right\">$ {{offer.price}}</h4>\r\n                  <h5>{{offer.title}}</h5>\r\n                  <p><b>Description:</b> {{offer.description}}</p>\r\n                  <h6>Seller ID: {{offer.seller_ID}}</h6>\r\n                  <!---\r\n                  <button type=\"button\" routerLink=\"/offer/{{offer._id}}\" class=\"btn btn-block btn-lg btn-primary\">View Offer</button>\r\n                  -->\r\n                </div>\r\n              </div>\r\n            </ul>\r\n          </div>\r\n        </div>\r\n        <!-- End Content -->\r\n      </div>\r\n    </div>\r\n    <div class=\"clearfooter\"></div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/seller/seller.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/seller/seller.component.ts ***!
  \*******************************************************/
/*! exports provided: SellerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SellerComponent", function() { return SellerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_seller_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/seller.service */ "./src/app/services/seller.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SellerComponent = /** @class */ (function () {
    function SellerComponent(sellerService, route) {
        this.sellerService = sellerService;
        this.route = route;
        // Tab first configuration
        this.currentTab = 'requests';
    }
    // On initialization process of the webpage
    SellerComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Fetching seller profile information from the service to be used in the webpage
        this.sellerService.getSellerProfile().subscribe(function (profile) {
            _this.seller = profile.data;
            //this.loaded_seller = Promise.resolve(true);
        }, function (err) {
            console.log(err);
            return false;
        });
        // Fetching seller offer history from the service to be used in the webpage
        this.sellerService.getSellerOffersHistory().subscribe(function (offers) {
            _this.offerList = offers;
        }, function (err) {
            console.log(err);
            return false;
        });
        // Fetching seller active requests from the service to be used in the webpage
        this.sellerService.getActiveRequests().subscribe(function (requests) {
            _this.activeRequests = requests;
        }, function (err) {
            console.log(err);
            return false;
        });
    };
    // when the user changes tabs
    SellerComponent.prototype.requests = function (currentTab) {
        this.currentTab = currentTab;
    };
    SellerComponent.prototype.history = function (currentTab) {
        this.currentTab = currentTab;
    };
    SellerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-seller',
            template: __webpack_require__(/*! ./seller.component.html */ "./src/app/components/seller/seller.component.html"),
            styles: [__webpack_require__(/*! ./seller.component.css */ "./src/app/components/seller/seller.component.css")]
        }),
        __metadata("design:paramtypes", [_services_seller_service__WEBPACK_IMPORTED_MODULE_1__["SellerService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], SellerComponent);
    return SellerComponent;
}());



/***/ }),

/***/ "./src/app/components/seller/submit-offer/submit-offer.component.css":
/*!***************************************************************************!*\
  !*** ./src/app/components/seller/submit-offer/submit-offer.component.css ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "html, body {\r\n    height: 100%;\r\n  }\r\n\r\n  #container {\r\n    min-height: 100%;\r\n    margin-bottom: -330px;\r\n    position: relative;\r\n  }\r\n\r\n  #footer {\r\n    height: 330px;\r\n    position: relative;\r\n  }\r\n\r\n  .clearfooter {\r\n    height: 330px;\r\n    clear: both;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zZWxsZXIvc3VibWl0LW9mZmVyL3N1Ym1pdC1vZmZlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtHQUNkOztFQUVEO0lBQ0UsaUJBQWlCO0lBQ2pCLHNCQUFzQjtJQUN0QixtQkFBbUI7R0FDcEI7O0VBRUQ7SUFDRSxjQUFjO0lBQ2QsbUJBQW1CO0dBQ3BCOztFQUVEO0lBQ0UsY0FBYztJQUNkLFlBQVk7R0FDYiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2VsbGVyL3N1Ym1pdC1vZmZlci9zdWJtaXQtb2ZmZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImh0bWwsIGJvZHkge1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gIH1cclxuXHJcbiAgI2NvbnRhaW5lciB7XHJcbiAgICBtaW4taGVpZ2h0OiAxMDAlO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogLTMzMHB4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIH1cclxuICBcclxuICAjZm9vdGVyIHtcclxuICAgIGhlaWdodDogMzMwcHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgfVxyXG5cclxuICAuY2xlYXJmb290ZXIge1xyXG4gICAgaGVpZ2h0OiAzMzBweDtcclxuICAgIGNsZWFyOiBib3RoO1xyXG4gIH0iXX0= */"

/***/ }),

/***/ "./src/app/components/seller/submit-offer/submit-offer.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/components/seller/submit-offer/submit-offer.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-seller-navbar></app-seller-navbar>\r\n<flash-messages></flash-messages>\r\n\r\n<body>\r\n<form (submit)=\"submitOffer()\">\r\n  <div class=\"container\">\r\n    <br>\r\n    <br>\r\n    <h1>Submit Product Offer</h1>\r\n    &nbsp;\r\n    <!-- Submit Offer Form -->\r\n    <div class=\"card\">\r\n      <div class=\"card-body\">\r\n          <div class=\"form-group row\">\r\n            <label class=\"col-sm-2 col-form-label\">Offer Title:</label>\r\n            <div class=\"col-sm-10\">\r\n              <input class=\"form-control mr-sm-2\" type=\"text\" [(ngModel)]=\"title\" name=\"offer-title\" value=\"\">\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group row\">\r\n            <label class=\"col-sm-2 col-form-label\">Enter description of desired product:</label>\r\n            <div class=\"col-sm-10\">\r\n              <textarea class=\"form-control\" name=\"description\" [(ngModel)]=\"description\" rows=\"8\" cols=\"80\"></textarea>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group row\">\r\n            <label class=\"col-sm-2 col-form-label\">Enter Price:</label>\r\n            <div class=\"col-sm-10\">\r\n              <input class=\"form-control mr-sm-2\" type=\"text\" name=\"price\" [(ngModel)]=\"price\" value=\"\">\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group row\">\r\n            <div class=\"col-sm-10\">\r\n              <button type=\"submit\" routerLink=\"/seller\" routerLinkActive=\"router-link-active\"  class=\"btn btn-primary\">Submit</button>\r\n            </div>\r\n          </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"clearfooter\"></div>\r\n  </div>\r\n</form>\r\n</body>\r\n"

/***/ }),

/***/ "./src/app/components/seller/submit-offer/submit-offer.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/components/seller/submit-offer/submit-offer.component.ts ***!
  \**************************************************************************/
/*! exports provided: SubmitOfferComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubmitOfferComponent", function() { return SubmitOfferComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_seller_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/seller.service */ "./src/app/services/seller.service.ts");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SubmitOfferComponent = /** @class */ (function () {
    function SubmitOfferComponent(sellerService, route, flashMessage, router) {
        this.sellerService = sellerService;
        this.route = route;
        this.flashMessage = flashMessage;
        this.router = router;
    }
    // On initialization process of the webpage
    SubmitOfferComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.id = params.id; // --> Name must match wanted parameter
        });
    };
    // Structure for submitting offer form
    SubmitOfferComponent.prototype.submitOffer = function () {
        var _this = this;
        var offer = {
            title: this.title,
            description: this.description,
            price: this.price,
            request_ID: this.id
        };
        // Posting offer feature for seller, connect it to the service for back-end process
        this.sellerService.postOffer(offer, this.id).subscribe(function (data) {
            if (data.success) { // if the data succeed to be posted
                _this.flashMessage.show('Your Request was submitted!', { cssClass: 'alert-success', timeout: 4000 });
                _this.router.navigate(['/seller']);
            }
            else { // if it fails
                _this.flashMessage.show(data.msg, { cssClass: 'alert-danger', timeout: 3000 });
                _this.router.navigate(['/seller/submit-offer/' + _this.id]);
            }
        });
    };
    SubmitOfferComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-submit-offer',
            template: __webpack_require__(/*! ./submit-offer.component.html */ "./src/app/components/seller/submit-offer/submit-offer.component.html"),
            styles: [__webpack_require__(/*! ./submit-offer.component.css */ "./src/app/components/seller/submit-offer/submit-offer.component.css")]
        }),
        __metadata("design:paramtypes", [_services_seller_service__WEBPACK_IMPORTED_MODULE_2__["SellerService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__["FlashMessagesService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], SubmitOfferComponent);
    return SubmitOfferComponent;
}());



/***/ }),

/***/ "./src/app/sellerAuth.guard.ts":
/*!*************************************!*\
  !*** ./src/app/sellerAuth.guard.ts ***!
  \*************************************/
/*! exports provided: SellerAuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SellerAuthGuard", function() { return SellerAuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_storeFetch_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/storeFetch.service */ "./src/app/services/storeFetch.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SellerAuthGuard = /** @class */ (function () {
    function SellerAuthGuard(storeFetch, myRoute) {
        this.storeFetch = storeFetch;
        this.myRoute = myRoute;
    }
    SellerAuthGuard.prototype.canActivate = function (next, state) {
        return this.storeFetch.sellerIsLoggedIn();
    };
    SellerAuthGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_services_storeFetch_service__WEBPACK_IMPORTED_MODULE_1__["StoreFetchService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], SellerAuthGuard);
    return SellerAuthGuard;
}());



/***/ }),

/***/ "./src/app/services/auth.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// By Roni
// Buyer and seller, login services



var AuthService = /** @class */ (function () {
    function AuthService(http) {
        this.http = http;
    }
    // Buyer Authenticate Service
    AuthService.prototype.AuthenticateBuyer = function (buyer) {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json'
            })
        };
        return this.http.post('buyers/login', buyer, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (res) { return res; }));
    };
    // Seller Authenticate Service
    AuthService.prototype.AuthenticateSeller = function (seller) {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json'
            })
        };
        return this.http.post('sellers/login', seller, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (res) { return res; }));
    };
    AuthService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/services/buyer.resolve.ts":
/*!*******************************************!*\
  !*** ./src/app/services/buyer.resolve.ts ***!
  \*******************************************/
/*! exports provided: BuyerResolve */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BuyerResolve", function() { return BuyerResolve; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_buyer_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/buyer.service */ "./src/app/services/buyer.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/*
By: Omar
Buyer resolve is used to ensure the buyer data is being fetched in order to be displayed properly
before the buyer homepage gets loaded once a buyer signs in to their account. Right now only the seller name
is being fetched using this function.
*/


var BuyerResolve = /** @class */ (function () {
    function BuyerResolve(buyerService) {
        this.buyerService = buyerService;
    }
    BuyerResolve.prototype.resolve = function (route, state) {
        return this.buyerService.getBuyerProfile();
    };
    BuyerResolve = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_services_buyer_service__WEBPACK_IMPORTED_MODULE_1__["BuyerService"]])
    ], BuyerResolve);
    return BuyerResolve;
}());



/***/ }),

/***/ "./src/app/services/buyer.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/buyer.service.ts ***!
  \*******************************************/
/*! exports provided: BuyerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BuyerService", function() { return BuyerService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var BuyerService = /** @class */ (function () {
    function BuyerService(http, router) {
        this.http = http;
        this.router = router;
    }
    // Get Buyer Profile Service - Bryan Vu
    BuyerService.prototype.getBuyerProfile = function () {
        this.loadToken();
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'x-access-token': this.buyerToken
            })
        };
        return this.http.get('https://powerful-taiga-46416.herokuapp.com/buyers/profile', httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (res) { return res; }));
    };
    // Buyer Request submission service - Roni
    BuyerService.prototype.postBuyerRequest = function (request) {
        this.loadToken();
        if (this.buyerToken != null) {
            var httpOptions = {
                headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                    'Content-Type': 'application/json',
                    'x-access-token': this.buyerToken
                })
            };
            return this.http.post('https://powerful-taiga-46416.herokuapp.com/buyers/request', request, httpOptions)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (res) { return res; }));
        }
        else {
            this.router.navigate(['/buyer']);
        }
    };
    // Retrieve all buyer requests
    BuyerService.prototype.getBuyerRequests = function () {
        this.loadToken();
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'x-access-token': this.buyerToken
            })
        };
        return this.http.get('https://powerful-taiga-46416.herokuapp.com/buyers/request', httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (res) { return res; }));
    };
    // Load local token
    BuyerService.prototype.loadToken = function () {
        var token = localStorage.getItem('id_token');
        this.buyerToken = token;
    };
    // Buyer logout service
    BuyerService.prototype.buyerLogout = function () {
        this.buyerToken = null;
        this.buyer = null;
    };
    BuyerService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], BuyerService);
    return BuyerService;
}());



/***/ }),

/***/ "./src/app/services/register.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/register.service.ts ***!
  \**********************************************/
/*! exports provided: RegisterService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterService", function() { return RegisterService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// By Roni



var RegisterService = /** @class */ (function () {
    function RegisterService(http) {
        this.http = http;
    }
    // Buyer Register Service
    RegisterService.prototype.RegisterBuyer = function (buyer) {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json'
            })
        };
        return this.http.post('https://powerful-taiga-46416.herokuapp.com/buyers/register', buyer, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (res) { return res; }));
    };
    // Seller Register Service
    RegisterService.prototype.RegisterSeller = function (seller) {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json'
            })
        };
        return this.http.post('https://powerful-taiga-46416.herokuapp.com/sellers/register', seller, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (res) { return res; }));
    };
    // Buyer email activation through link, pass in the token with the function call
    RegisterService.prototype.activateAccount = function (token) {
        return this.http.post('https://powerful-taiga-46416.herokuapp.com/buyers/confirmEmail/' + token, token)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (res) { return res; }));
    };
    // Seller email activation through link, pass in the token with the function call
    RegisterService.prototype.selleractivateAccount = function (token) {
        return this.http.post('https://powerful-taiga-46416.herokuapp.com/sellers/confirmEmail/' + token, token)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (res) { return res; }));
    };
    RegisterService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], RegisterService);
    return RegisterService;
}());



/***/ }),

/***/ "./src/app/services/request.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/request.service.ts ***!
  \*********************************************/
/*! exports provided: RequestService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequestService", function() { return RequestService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// By Roni




var RequestService = /** @class */ (function () {
    function RequestService(http, router) {
        this.http = http;
        this.router = router;
    }
    // Generate request when a request id is passed in with the url
    RequestService.prototype.getRequest = function (id) {
        this.loadToken();
        // Include user token in the header
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'x-access-token': this.userToken
            })
        };
        // Call back-end route to retrieve request data
        return this.http.post('https://powerful-taiga-46416.herokuapp.com/requests/' + id, id, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (res) { return res; }));
    };
    // Load user logged in token
    RequestService.prototype.loadToken = function () {
        var token = localStorage.getItem('id_token');
        this.userToken = token;
    };
    RequestService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], RequestService);
    return RequestService;
}());



/***/ }),

/***/ "./src/app/services/seller.resolve.ts":
/*!********************************************!*\
  !*** ./src/app/services/seller.resolve.ts ***!
  \********************************************/
/*! exports provided: SellerResolve */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SellerResolve", function() { return SellerResolve; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_seller_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/seller.service */ "./src/app/services/seller.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/*
By: Omar
Seller resolve is used to ensure the seller data is being fetched in order to be displayed properly
before the seller homepage gets loaded once a seller signs in to their account. Right now only the seller name
is being fetched using this function.
*/


var SellerResolve = /** @class */ (function () {
    function SellerResolve(sellerService) {
        this.sellerService = sellerService;
    }
    SellerResolve.prototype.resolve = function (route, state) {
        return this.sellerService.getSellerProfile();
    };
    SellerResolve = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_services_seller_service__WEBPACK_IMPORTED_MODULE_1__["SellerService"]])
    ], SellerResolve);
    return SellerResolve;
}());



/***/ }),

/***/ "./src/app/services/seller.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/seller.service.ts ***!
  \********************************************/
/*! exports provided: SellerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SellerService", function() { return SellerService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SellerService = /** @class */ (function () {
    function SellerService(http) {
        this.http = http;
    }
    // Function to get user token from browser for searching pusposes in database
    SellerService.prototype.loadToken = function () {
        var token = localStorage.getItem('id_token');
        this.sellerToken = token;
    };
    // Service to fetch seller profile from database (front-end to back-end connection)
    SellerService.prototype.getSellerProfile = function () {
        this.loadToken();
        // Tokens needed to fetch data from database
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'x-access-token': this.sellerToken
            })
        };
        // This will return json file fetched from database
        return this.http.get('https://powerful-taiga-46416.herokuapp.com/sellers/profile', httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res; }));
    };
    // Service to fetch offers history of the logged in user (front-end to back-end connection)
    SellerService.prototype.getSellerOffersHistory = function () {
        this.loadToken();
        // Tokens needed to fetch data from database
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'x-access-token': this.sellerToken
            })
        };
        // This will return json file fetched from database
        return this.http.get('https://powerful-taiga-46416.herokuapp.com/sellers/viewoffers', httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res; }));
    };
    // Service to post a new offer as a feedback to the request from buyer (front-end to back-end connection)
    SellerService.prototype.postOffer = function (comingOffer, requestID) {
        this.loadToken();
        // Tokens needed to fetch data from database
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'x-access-token': this.sellerToken
            })
        };
        // This will return json file fetched from database
        return this.http.post('https://powerful-taiga-46416.herokuapp.com/sellers/makeOffer/' + this.requestID, comingOffer, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res; }));
    };
    // Service to post a new code for a seller to subscribe to a specific product code (front-end to back-end connection)
    SellerService.prototype.setNewCode = function (code) {
        this.loadToken();
        // Tokens needed to fetch data from database
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'x-access-token': this.sellerToken
            })
        };
        // This will return json file fetched from database
        return this.http.post('https://powerful-taiga-46416.herokuapp.com/sellers//addCode', code, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res; }));
    };
    // Service to fetch the code that a seller subscribed to
    SellerService.prototype.getCode = function () {
        this.loadToken();
        // Tokens needed to fetch data from database
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'x-access-token': this.sellerToken
            })
        };
        // This will return json file fetched from database
        return this.http.get('https://powerful-taiga-46416.herokuapp.com/sellers/getCode', httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res; }));
    };
    // Service to get active requests from buyers associated with seller's code
    SellerService.prototype.getActiveRequests = function () {
        this.loadToken();
        // Tokens needed to fetch data from database
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'x-access-token': this.sellerToken
            })
        };
        // This will return json file fetched from database
        return this.http.get('https://powerful-taiga-46416.herokuapp.com/sellers/viewactiverequests', httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res; }));
    };
    // logging out seller
    SellerService.prototype.sellerLogout = function () {
        this.sellerToken = null;
        this.seller = null;
    };
    SellerService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], SellerService);
    return SellerService;
}());



/***/ }),

/***/ "./src/app/services/storeFetch.service.ts":
/*!************************************************!*\
  !*** ./src/app/services/storeFetch.service.ts ***!
  \************************************************/
/*! exports provided: StoreFetchService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StoreFetchService", function() { return StoreFetchService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var StoreFetchService = /** @class */ (function () {
    function StoreFetchService(http) {
        this.http = http;
        this.user = -1;
    }
    // User Logout Service
    StoreFetchService.prototype.userLogout = function () {
        this.RegisterToken = null;
        this.buyer = null;
        this.seller = null;
        this.user = null;
        localStorage.clear();
    };
    // Fetches the Buyer token from local storage to use with getBuyerToken()
    StoreFetchService.prototype.loadUserToken = function () {
        var token = localStorage.getItem('id_token');
        this.RegisterToken = token;
    };
    // Store Buyer Data Locally Service
    StoreFetchService.prototype.storeBuyerData = function (token, buyer) {
        localStorage.setItem('id_token', token);
        localStorage.setItem('buyer', JSON.stringify(buyer)); // can only store stings not objects
        this.RegisterToken = token;
        this.buyer = buyer;
    };
    // Store Seller Data Locally Service
    StoreFetchService.prototype.storeSellerData = function (token, seller) {
        localStorage.setItem('id_token', token);
        localStorage.setItem('seller', JSON.stringify(seller)); // can only store stings not objects
        this.RegisterToken = token;
        this.seller = seller;
    };
    // Check if buyer is logged in
    StoreFetchService.prototype.buyerIsLoggedIn = function () {
        if (localStorage.getItem('buyer')) {
            return true;
        }
        else {
            return false;
        }
    };
    // Check if seller is logged in
    StoreFetchService.prototype.sellerIsLoggedIn = function () {
        if (localStorage.getItem('seller')) {
            return true;
        }
        else {
            return false;
        }
    };
    StoreFetchService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], StoreFetchService);
    return StoreFetchService;
}());



/***/ }),

/***/ "./src/app/services/validate.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/validate.service.ts ***!
  \**********************************************/
/*! exports provided: ValidateService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ValidateService", function() { return ValidateService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// By Roni

var ValidateService = /** @class */ (function () {
    function ValidateService() {
    }
    // All fields must be filled upon buyer registration
    ValidateService.prototype.ValidateBuyerRegister = function (buyer) {
        // tslint:disable-next-line:triple-equals
        if (buyer.first_name == undefined || buyer.last_name == undefined || buyer.email == undefined || buyer.password == undefined) {
            return false;
        }
        else {
            return true;
        }
    };
    // All fields must be filled upon seller registration
    ValidateService.prototype.ValidateSellerRegister = function (seller) {
        // tslint:disable-next-line:triple-equals
        if (seller.first_name == undefined || seller.last_name == undefined || seller.email == undefined || seller.password == undefined
            // tslint:disable-next-line:triple-equals
            || seller.entity_name == undefined || seller.position == undefined || seller.phone_number == undefined) {
            return false;
        }
        else {
            return true;
        }
    };
    // Email format validation upon registration
    ValidateService.prototype.validateEmail = function (email) {
        // tslint:disable-next-line:max-line-length
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    };
    ValidateService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], ValidateService);
    return ValidateService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
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


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\ronip\Dropbox\FALL 2018\CSE485\MEAN\GEX\angular-src\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map