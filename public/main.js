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

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "  <notifier-container></notifier-container>\r\n  <router-outlet></router-outlet>\r\n  <app-footer></app-footer>\r\n\r\n"

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
/* harmony import */ var angular_notifier__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-notifier */ "./node_modules/angular-notifier/esm5/angular-notifier.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/navbar/navbar.component */ "./src/app/components/navbar/navbar.component.ts");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _components_login_sellerLogin_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/login/sellerLogin.component */ "./src/app/components/login/sellerLogin.component.ts");
/* harmony import */ var _components_register_BuyerRegister_BuyerRegister_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/register/BuyerRegister/BuyerRegister.component */ "./src/app/components/register/BuyerRegister/BuyerRegister.component.ts");
/* harmony import */ var _components_buyer_buyer_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/buyer/buyer.component */ "./src/app/components/buyer/buyer.component.ts");
/* harmony import */ var _components_seller_seller_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/seller/seller.component */ "./src/app/components/seller/seller.component.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_buyer_make_request_make_request_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/buyer/make-request/make-request.component */ "./src/app/components/buyer/make-request/make-request.component.ts");
/* harmony import */ var _components_buyer_buyer_account_buyer_account_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/buyer/buyer-account/buyer-account.component */ "./src/app/components/buyer/buyer-account/buyer-account.component.ts");
/* harmony import */ var _components_seller_submit_offer_submit_offer_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/seller/submit-offer/submit-offer.component */ "./src/app/components/seller/submit-offer/submit-offer.component.ts");
/* harmony import */ var _components_seller_seller_account_seller_account_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/seller/seller-account/seller-account.component */ "./src/app/components/seller/seller-account/seller-account.component.ts");
/* harmony import */ var _components_register_SellerRegister_SellerRegister_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/register/SellerRegister/SellerRegister.component */ "./src/app/components/register/SellerRegister/SellerRegister.component.ts");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/footer/footer.component */ "./src/app/components/footer/footer.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
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
/* harmony import */ var _components_seller_submit_categories_submit_categories_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./components/seller/submit-categories/submit-categories.component */ "./src/app/components/seller/submit-categories/submit-categories.component.ts");
/* harmony import */ var _components_buyer_buyer_checkout_buyer_checkout_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./components/buyer/buyer-checkout/buyer-checkout.component */ "./src/app/components/buyer/buyer-checkout/buyer-checkout.component.ts");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ngx-pagination */ "./node_modules/ngx-pagination/dist/ngx-pagination.js");
/* harmony import */ var ng2_search_filter__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ng2-search-filter */ "./node_modules/ng2-search-filter/ng2-search-filter.es5.js");
/* harmony import */ var _ckeditor_ckeditor5_angular__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! @ckeditor/ckeditor5-angular */ "./node_modules/@ckeditor/ckeditor5-angular/fesm5/ckeditor-ckeditor5-angular.js");
/* harmony import */ var ngx_stripe__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ngx-stripe */ "../node_modules/ngx-stripe/fesm5/ngx-stripe.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_41___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_41__);
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! @angular/material/stepper */ "./node_modules/@angular/material/esm5/stepper.es5.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _components_buyer_buyer_cart_buyer_cart_component__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ./components/buyer/buyer-cart/buyer-cart.component */ "./src/app/components/buyer/buyer-cart/buyer-cart.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















































var appRoutes = [
    { path: '', component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_11__["HomeComponent"] },
    { path: 'buyer-register', component: _components_register_BuyerRegister_BuyerRegister_component__WEBPACK_IMPORTED_MODULE_8__["BuyerRegisterComponent"] },
    { path: 'seller-register', component: _components_register_SellerRegister_SellerRegister_component__WEBPACK_IMPORTED_MODULE_16__["SellerRegisterComponent"] },
    { path: 'login', component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"] },
    { path: 'seller-login', component: _components_login_sellerLogin_component__WEBPACK_IMPORTED_MODULE_7__["SellerLoginComponent"] },
    { path: 'buyer', component: _components_buyer_buyer_component__WEBPACK_IMPORTED_MODULE_9__["BuyerComponent"], canActivate: [_buyerAuth_guard__WEBPACK_IMPORTED_MODULE_29__["BuyerAuthGuard"]], resolve: { buyer: _services_buyer_resolve__WEBPACK_IMPORTED_MODULE_33__["BuyerResolve"] } },
    { path: 'buyer/buyer-account', component: _components_buyer_buyer_account_buyer_account_component__WEBPACK_IMPORTED_MODULE_13__["BuyerAccountComponent"], canActivate: [_buyerAuth_guard__WEBPACK_IMPORTED_MODULE_29__["BuyerAuthGuard"]], resolve: { buyer: _services_buyer_resolve__WEBPACK_IMPORTED_MODULE_33__["BuyerResolve"] } },
    { path: 'buyer/cart', component: _components_buyer_buyer_cart_buyer_cart_component__WEBPACK_IMPORTED_MODULE_45__["BuyerCartComponent"], canActivate: [_buyerAuth_guard__WEBPACK_IMPORTED_MODULE_29__["BuyerAuthGuard"]], resolve: { buyer: _services_buyer_resolve__WEBPACK_IMPORTED_MODULE_33__["BuyerResolve"] } },
    { path: 'buyer/checkout/', component: _components_buyer_buyer_checkout_buyer_checkout_component__WEBPACK_IMPORTED_MODULE_36__["BuyerCheckoutComponent"], canActivate: [_buyerAuth_guard__WEBPACK_IMPORTED_MODULE_29__["BuyerAuthGuard"]],
        resolve: { buyer: _services_buyer_resolve__WEBPACK_IMPORTED_MODULE_33__["BuyerResolve"] } },
    { path: 'buyer/make-request', component: _components_buyer_make_request_make_request_component__WEBPACK_IMPORTED_MODULE_12__["MakeRequestComponent"], canActivate: [_buyerAuth_guard__WEBPACK_IMPORTED_MODULE_29__["BuyerAuthGuard"]], resolve: { buyer: _services_buyer_resolve__WEBPACK_IMPORTED_MODULE_33__["BuyerResolve"] } },
    { path: 'seller', component: _components_seller_seller_component__WEBPACK_IMPORTED_MODULE_10__["SellerComponent"], canActivate: [_sellerAuth_guard__WEBPACK_IMPORTED_MODULE_30__["SellerAuthGuard"]], resolve: { seller: _services_seller_resolve__WEBPACK_IMPORTED_MODULE_34__["SellerResolve"] } },
    { path: 'seller/seller-account', component: _components_seller_seller_account_seller_account_component__WEBPACK_IMPORTED_MODULE_15__["SellerAccountComponent"], canActivate: [_sellerAuth_guard__WEBPACK_IMPORTED_MODULE_30__["SellerAuthGuard"]], resolve: { seller: _services_seller_resolve__WEBPACK_IMPORTED_MODULE_34__["SellerResolve"] } },
    { path: 'seller/submit-offer/:id', component: _components_seller_submit_offer_submit_offer_component__WEBPACK_IMPORTED_MODULE_14__["SubmitOfferComponent"], canActivate: [_sellerAuth_guard__WEBPACK_IMPORTED_MODULE_30__["SellerAuthGuard"]], resolve: { seller: _services_seller_resolve__WEBPACK_IMPORTED_MODULE_34__["SellerResolve"] } },
    { path: 'seller/seller-services', component: _components_seller_seller_services_seller_services_seller_services_component__WEBPACK_IMPORTED_MODULE_31__["SellerServicesComponent"], canActivate: [_sellerAuth_guard__WEBPACK_IMPORTED_MODULE_30__["SellerAuthGuard"]], resolve: { seller: _services_seller_resolve__WEBPACK_IMPORTED_MODULE_34__["SellerResolve"] } },
    { path: 'seller/submit-categories', component: _components_seller_submit_categories_submit_categories_component__WEBPACK_IMPORTED_MODULE_35__["SubmitCategoriesComponent"], canActivate: [_sellerAuth_guard__WEBPACK_IMPORTED_MODULE_30__["SellerAuthGuard"]],
        resolve: { seller: _services_seller_resolve__WEBPACK_IMPORTED_MODULE_34__["SellerResolve"] } },
    { path: 'preactivation', component: _components_activation_preactivation_preactivation_component__WEBPACK_IMPORTED_MODULE_26__["PreactivationComponent"] },
    { path: 'postactivation/:token', component: _components_activation_postactivation_postactivation_component__WEBPACK_IMPORTED_MODULE_27__["PostactivationComponent"] },
    { path: 'request/:id', component: _components_request_request_component__WEBPACK_IMPORTED_MODULE_32__["RequestComponent"], resolve: { buyer: _services_buyer_resolve__WEBPACK_IMPORTED_MODULE_33__["BuyerResolve"], seller: _services_seller_resolve__WEBPACK_IMPORTED_MODULE_34__["SellerResolve"] } },
    { path: '**', redirectTo: '/' }
];
// NOTIFICATION SETTINGS
// TYPES
// default, error, info, success, warning
var customNotifierOptions = {
    position: {
        horizontal: {
            position: 'left',
            distance: 12
        },
        vertical: {
            position: 'bottom',
            distance: 12,
            gap: 10
        }
    },
    theme: 'material',
    behaviour: {
        autoHide: 3000,
        onClick: false,
        onMouseover: 'pauseAutoHide',
        showDismissButton: true,
        stacking: 4
    },
    animations: {
        enabled: true,
        show: {
            preset: 'slide',
            speed: 300,
            easing: 'ease'
        },
        hide: {
            preset: 'fade',
            speed: 300,
            easing: 'ease',
            offset: 50
        },
        shift: {
            speed: 300,
            easing: 'ease'
        },
        overlap: 150
    }
};
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_5__["NavbarComponent"],
                _components_login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"],
                _components_buyer_buyer_component__WEBPACK_IMPORTED_MODULE_9__["BuyerComponent"],
                _components_seller_seller_component__WEBPACK_IMPORTED_MODULE_10__["SellerComponent"],
                _components_home_home_component__WEBPACK_IMPORTED_MODULE_11__["HomeComponent"],
                _components_buyer_make_request_make_request_component__WEBPACK_IMPORTED_MODULE_12__["MakeRequestComponent"],
                _components_buyer_buyer_account_buyer_account_component__WEBPACK_IMPORTED_MODULE_13__["BuyerAccountComponent"],
                _components_seller_submit_offer_submit_offer_component__WEBPACK_IMPORTED_MODULE_14__["SubmitOfferComponent"],
                _components_seller_seller_account_seller_account_component__WEBPACK_IMPORTED_MODULE_15__["SellerAccountComponent"],
                _components_register_SellerRegister_SellerRegister_component__WEBPACK_IMPORTED_MODULE_16__["SellerRegisterComponent"],
                _components_seller_submit_categories_submit_categories_component__WEBPACK_IMPORTED_MODULE_35__["SubmitCategoriesComponent"],
                _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_17__["FooterComponent"],
                _components_login_sellerLogin_component__WEBPACK_IMPORTED_MODULE_7__["SellerLoginComponent"],
                _components_navbar_seller_navbar_seller_navbar_component__WEBPACK_IMPORTED_MODULE_24__["SellerNavbarComponent"],
                _components_navbar_buyer_navbar_buyer_navbar_component__WEBPACK_IMPORTED_MODULE_25__["BuyerNavbarComponent"],
                _components_register_BuyerRegister_BuyerRegister_component__WEBPACK_IMPORTED_MODULE_8__["BuyerRegisterComponent"],
                _components_activation_preactivation_preactivation_component__WEBPACK_IMPORTED_MODULE_26__["PreactivationComponent"],
                _components_activation_postactivation_postactivation_component__WEBPACK_IMPORTED_MODULE_27__["PostactivationComponent"],
                _components_seller_seller_services_seller_services_seller_services_component__WEBPACK_IMPORTED_MODULE_31__["SellerServicesComponent"],
                _components_request_request_component__WEBPACK_IMPORTED_MODULE_32__["RequestComponent"],
                _components_buyer_buyer_checkout_buyer_checkout_component__WEBPACK_IMPORTED_MODULE_36__["BuyerCheckoutComponent"],
                _components_buyer_buyer_component__WEBPACK_IMPORTED_MODULE_9__["AcceptOfferDialogComponent"],
                _components_buyer_buyer_cart_buyer_cart_component__WEBPACK_IMPORTED_MODULE_45__["BuyerCartComponent"]
            ],
            entryComponents: [
                _components_buyer_buyer_component__WEBPACK_IMPORTED_MODULE_9__["AcceptOfferDialogComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(appRoutes),
                _angular_forms__WEBPACK_IMPORTED_MODULE_18__["FormsModule"],
                angular2_flash_messages__WEBPACK_IMPORTED_MODULE_41__["FlashMessagesModule"].forRoot(),
                _angular_forms__WEBPACK_IMPORTED_MODULE_18__["ReactiveFormsModule"],
                _angular_material_stepper__WEBPACK_IMPORTED_MODULE_42__["MatStepperModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_43__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_43__["MatInputModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_44__["BrowserAnimationsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_43__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_43__["MatOptionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_43__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_43__["MatExpansionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_43__["MatBadgeModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_43__["MatDialogModule"],
                // Site Notifications
                angular_notifier__WEBPACK_IMPORTED_MODULE_3__["NotifierModule"].withConfig(customNotifierOptions),
                _angular_common_http__WEBPACK_IMPORTED_MODULE_23__["HttpClientModule"],
                ngx_pagination__WEBPACK_IMPORTED_MODULE_37__["NgxPaginationModule"],
                ng2_search_filter__WEBPACK_IMPORTED_MODULE_38__["Ng2SearchPipeModule"],
                _ckeditor_ckeditor5_angular__WEBPACK_IMPORTED_MODULE_39__["CKEditorModule"],
                ngx_stripe__WEBPACK_IMPORTED_MODULE_40__["NgxStripeModule"].forRoot('pk_test_9uQtOrFYROc49Js8RhyMDJtB')
            ],
            providers: [_services_validate_service__WEBPACK_IMPORTED_MODULE_19__["ValidateService"], _services_register_service__WEBPACK_IMPORTED_MODULE_20__["RegisterService"], _services_auth_service__WEBPACK_IMPORTED_MODULE_21__["AuthService"], _services_storeFetch_service__WEBPACK_IMPORTED_MODULE_22__["StoreFetchService"], _services_seller_service__WEBPACK_IMPORTED_MODULE_28__["SellerService"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["Title"], _services_buyer_resolve__WEBPACK_IMPORTED_MODULE_33__["BuyerResolve"], _services_seller_resolve__WEBPACK_IMPORTED_MODULE_34__["SellerResolve"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
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

module.exports = "form {\r\n  border: 3px solid #f1f1f1;\r\n  position: absolute;\r\n  top: 50%;\r\n  left: 50%;\r\n  height: 310px;\r\n  -webkit-transform: translate(-50%,-50%);\r\n          transform: translate(-50%,-50%);\r\n\r\n}\r\n\r\n/* Full-width inputs */\r\n\r\ninput[type=text], input[type=password] {\r\n  width: 100%;\r\n  padding: 12px 12px;\r\n  margin: 8px 0;\r\n  display: inline-block;\r\n  border: 1px solid #ccc;\r\n  box-sizing: border-box;\r\n}\r\n\r\n/* Set a style for all buttons */\r\n\r\nbutton {\r\n  background-color: #4CAF50;\r\n  color: white;\r\n  padding: 14px 20px;\r\n  margin: 8px 0;\r\n  border: none;\r\n  cursor: pointer;\r\n  width: 100%;\r\n}\r\n\r\n.loader {\r\n  text-align: center;\r\n  border: 8px solid #f3f3f3; /* Light grey */\r\n  border-top: 8px solid #f44336; /* Blue */\r\n  border-radius: 50%;\r\n  width: 60px;\r\n  height: 60px;\r\n  -webkit-animation: spin 2s linear infinite;\r\n          animation: spin 2s linear infinite;\r\n}\r\n\r\n@-webkit-keyframes spin {\r\n  0% { -webkit-transform: rotate(0deg); transform: rotate(0deg); }\r\n  100% { -webkit-transform: rotate(360deg); transform: rotate(360deg); }\r\n}\r\n\r\n@keyframes spin {\r\n  0% { -webkit-transform: rotate(0deg); transform: rotate(0deg); }\r\n  100% { -webkit-transform: rotate(360deg); transform: rotate(360deg); }\r\n}\r\n\r\n/* Center the avatar image inside this container */\r\n\r\n.imgcontainer {\r\n  text-align: center;\r\n  margin: 24px 0 12px 0;\r\n}\r\n\r\n/* Add padding to containers */\r\n\r\n.container {\r\n  padding: 16px;\r\n\r\n}\r\n\r\n\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hY3RpdmF0aW9uL3Bvc3RhY3RpdmF0aW9uL3Bvc3RhY3RpdmF0aW9uLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx5QkFBeUI7RUFDekIsa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixTQUFTO0VBQ1QsYUFBYTtFQUNiLHVDQUErQjtVQUEvQiwrQkFBK0I7O0FBRWpDOztBQUVBLHNCQUFzQjs7QUFDdEI7RUFDRSxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixxQkFBcUI7RUFDckIsc0JBQXNCO0VBQ3RCLHNCQUFzQjtBQUN4Qjs7QUFFQSxnQ0FBZ0M7O0FBQ2hDO0VBQ0UseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLFlBQVk7RUFDWixlQUFlO0VBQ2YsV0FBVztBQUNiOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLHlCQUF5QixFQUFFLGVBQWU7RUFDMUMsNkJBQTZCLEVBQUUsU0FBUztFQUN4QyxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFlBQVk7RUFDWiwwQ0FBa0M7VUFBbEMsa0NBQWtDO0FBQ3BDOztBQUVBO0VBQ0UsS0FBSywrQkFBdUIsRUFBdkIsdUJBQXVCLEVBQUU7RUFDOUIsT0FBTyxpQ0FBeUIsRUFBekIseUJBQXlCLEVBQUU7QUFDcEM7O0FBSEE7RUFDRSxLQUFLLCtCQUF1QixFQUF2Qix1QkFBdUIsRUFBRTtFQUM5QixPQUFPLGlDQUF5QixFQUF6Qix5QkFBeUIsRUFBRTtBQUNwQzs7QUFLQSxrREFBa0Q7O0FBQ2xEO0VBQ0Usa0JBQWtCO0VBQ2xCLHFCQUFxQjtBQUN2Qjs7QUFHQSw4QkFBOEI7O0FBQzlCO0VBQ0UsYUFBYTs7QUFFZiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYWN0aXZhdGlvbi9wb3N0YWN0aXZhdGlvbi9wb3N0YWN0aXZhdGlvbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiZm9ybSB7XHJcbiAgYm9yZGVyOiAzcHggc29saWQgI2YxZjFmMTtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiA1MCU7XHJcbiAgbGVmdDogNTAlO1xyXG4gIGhlaWdodDogMzEwcHg7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwtNTAlKTtcclxuXHJcbn1cclxuXHJcbi8qIEZ1bGwtd2lkdGggaW5wdXRzICovXHJcbmlucHV0W3R5cGU9dGV4dF0sIGlucHV0W3R5cGU9cGFzc3dvcmRdIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBwYWRkaW5nOiAxMnB4IDEycHg7XHJcbiAgbWFyZ2luOiA4cHggMDtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG59XHJcblxyXG4vKiBTZXQgYSBzdHlsZSBmb3IgYWxsIGJ1dHRvbnMgKi9cclxuYnV0dG9uIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNENBRjUwO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBwYWRkaW5nOiAxNHB4IDIwcHg7XHJcbiAgbWFyZ2luOiA4cHggMDtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4ubG9hZGVyIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgYm9yZGVyOiA4cHggc29saWQgI2YzZjNmMzsgLyogTGlnaHQgZ3JleSAqL1xyXG4gIGJvcmRlci10b3A6IDhweCBzb2xpZCAjZjQ0MzM2OyAvKiBCbHVlICovXHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIHdpZHRoOiA2MHB4O1xyXG4gIGhlaWdodDogNjBweDtcclxuICBhbmltYXRpb246IHNwaW4gMnMgbGluZWFyIGluZmluaXRlO1xyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIHNwaW4ge1xyXG4gIDAlIHsgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7IH1cclxuICAxMDAlIHsgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTsgfVxyXG59XHJcblxyXG5cclxuXHJcblxyXG4vKiBDZW50ZXIgdGhlIGF2YXRhciBpbWFnZSBpbnNpZGUgdGhpcyBjb250YWluZXIgKi9cclxuLmltZ2NvbnRhaW5lciB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIG1hcmdpbjogMjRweCAwIDEycHggMDtcclxufVxyXG5cclxuXHJcbi8qIEFkZCBwYWRkaW5nIHRvIGNvbnRhaW5lcnMgKi9cclxuLmNvbnRhaW5lciB7XHJcbiAgcGFkZGluZzogMTZweDtcclxuXHJcbn1cclxuXHJcblxyXG5cclxuIl19 */"

/***/ }),

/***/ "./src/app/components/activation/postactivation/postactivation.component.html":
/*!************************************************************************************!*\
  !*** ./src/app/components/activation/postactivation/postactivation.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\r\n<body>\r\n<form class=\"col-md-4 col-md-offset-4\">\r\n  <div class=\"imgcontainer\">\r\n    <h2>Well done!</h2>\r\n    <br>\r\n    <h4>Your account is now activated!</h4>\r\n    <br>\r\n    <h4><strong>Redirecting...</strong></h4>\r\n    <br>\r\n    <!--<div class=\"loader\"></div>-->\r\n    <img src=\"../../../../assets/loadingICon.gif\"  width=\"70\" height=\"70\" title=\"loading icon\">\r\n    <br>\r\n    <br>\r\n    <span class=\"Resend Email\">Not automatically redirecting? <a href=\"#\">Click here!</a></span>\r\n\r\n  </div>\r\n\r\n</form>\r\n</body>\r\n"

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
/* harmony import */ var angular_notifier__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-notifier */ "./node_modules/angular-notifier/esm5/angular-notifier.js");
/* harmony import */ var _services_storeFetch_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/storeFetch.service */ "./src/app/services/storeFetch.service.ts");
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
    function PostactivationComponent(route, registerService, notifierService, router, storeFetchService) {
        this.route = route;
        this.registerService = registerService;
        this.notifierService = notifierService;
        this.router = router;
        this.storeFetchService = storeFetchService;
        this.notifier = notifierService;
    }
    PostactivationComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.storeFetchService.buyerIsLoggedIn()) {
            this.router.navigate(['/buyer']);
        }
        else if (this.storeFetchService.sellerIsLoggedIn()) {
            this.router.navigate(['/seller']);
        }
        // get URL parameters
        this.route.params.subscribe(function (params) {
            _this.token = params.token; // --> provided token included with the parameter
            _this.registerService.activateAccount(_this.token).subscribe(function (data) {
                if (data.success) { // Buyer account activated, prioritizing buyer activation
                    setTimeout(function () {
                        _this.notifier.notify('success', data.msg);
                    }, 3000); // 5s
                    // Automatically login user after account activation
                    _this.storeFetchService.storeBuyerData(data.token, data.buyer);
                    _this.router.navigate(['/buyer']);
                    _this.notifier.notify('success', 'You are now logged in.');
                }
                else { // Check if the token provided is for a seller account
                    _this.registerService.selleractivateAccount(_this.token).subscribe(function (data2) {
                        if (data2.success) { // Seller account activated
                            setTimeout(function () {
                                _this.notifier.notify('success', data2.msg);
                            }, 3000); // 5s
                            // Automatically login user after account activation
                            _this.storeFetchService.storeSellerData(data2.token, data2.seller);
                            _this.router.navigate(['/seller-login']);
                            _this.notifier.notify('success', 'You are now logged in.');
                        }
                        else { // Invalid Token/URL
                            _this.router.navigate(['/buyer-register']);
                            _this.notifier.notify('error', 'Error activating account.');
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
            angular_notifier__WEBPACK_IMPORTED_MODULE_3__["NotifierService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _services_storeFetch_service__WEBPACK_IMPORTED_MODULE_4__["StoreFetchService"]])
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

module.exports = "body{\r\n  -webkit-touch-callout: none;\r\n  -webkit-text-size-adjust: none;\r\n  -webkit-user-select: node;\r\n  height: 100vh;\r\n  margin: 0 auto;\r\n  padding: 0;\r\n  overflow-x: hidden;\r\n  overflow-y: hidden;\r\n\r\n}\r\n\r\n\r\n\r\nform {\r\n    border: 3px solid #fcfdfc;\r\n    position: relative;\r\n    top:30%;\r\n    left: 50%;\r\n    bottom: 50%;\r\n    width: 600px;\r\n    height: 400px;\r\n    -webkit-transform: translate(-50%,-50%);\r\n            transform: translate(-50%,-50%);\r\n    overflow: hidden;\r\n\r\n  }\r\n\r\n\r\n\r\n/* Full-width inputs */\r\n\r\n\r\n\r\ninput[type=text], input[type=password] {\r\n    width: 100%;\r\n    padding: 12px 12px;\r\n    margin: 8px 0;\r\n    display: inline-block;\r\n    border: 1px solid #ccc;\r\n    box-sizing: border-box;\r\n  }\r\n\r\n\r\n\r\n/* Set a style for all buttons */\r\n\r\n\r\n\r\nbutton {\r\n    background-color: #4CAF50;\r\n    color: white;\r\n    padding: 14px 20px;\r\n    margin: 8px 0;\r\n    border: none;\r\n    cursor: pointer;\r\n    width: 100%;\r\n  }\r\n\r\n\r\n\r\n/* Center the avatar image inside this container */\r\n\r\n\r\n\r\n.imgcontainer {\r\n    text-align: center;\r\n    margin: 24px 0 12px 0;\r\n  }\r\n\r\n\r\n\r\n/* Add padding to containers */\r\n\r\n\r\n\r\n.container {\r\n    padding: 16px;\r\n\r\n  }\r\n\r\n\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hY3RpdmF0aW9uL3ByZWFjdGl2YXRpb24vcHJlYWN0aXZhdGlvbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsMkJBQTJCO0VBQzNCLDhCQUE4QjtFQUM5Qix5QkFBeUI7RUFDekIsYUFBYTtFQUNiLGNBQWM7RUFDZCxVQUFVO0VBQ1Ysa0JBQWtCO0VBQ2xCLGtCQUFrQjs7QUFFcEI7Ozs7QUFJQTtJQUNJLHlCQUF5QjtJQUN6QixrQkFBa0I7SUFDbEIsT0FBTztJQUNQLFNBQVM7SUFDVCxXQUFXO0lBQ1gsWUFBWTtJQUNaLGFBQWE7SUFDYix1Q0FBK0I7WUFBL0IsK0JBQStCO0lBQy9CLGdCQUFnQjs7RUFFbEI7Ozs7QUFFQSxzQkFBc0I7Ozs7QUFDdEI7SUFDRSxXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixxQkFBcUI7SUFDckIsc0JBQXNCO0lBQ3RCLHNCQUFzQjtFQUN4Qjs7OztBQUVBLGdDQUFnQzs7OztBQUNoQztJQUNFLHlCQUF5QjtJQUN6QixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixZQUFZO0lBQ1osZUFBZTtJQUNmLFdBQVc7RUFDYjs7OztBQUVBLGtEQUFrRDs7OztBQUNsRDtJQUNFLGtCQUFrQjtJQUNsQixxQkFBcUI7RUFDdkI7Ozs7QUFFQSw4QkFBOEI7Ozs7QUFDOUI7SUFDRSxhQUFhOztFQUVmIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9hY3RpdmF0aW9uL3ByZWFjdGl2YXRpb24vcHJlYWN0aXZhdGlvbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYm9keXtcclxuICAtd2Via2l0LXRvdWNoLWNhbGxvdXQ6IG5vbmU7XHJcbiAgLXdlYmtpdC10ZXh0LXNpemUtYWRqdXN0OiBub25lO1xyXG4gIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vZGU7XHJcbiAgaGVpZ2h0OiAxMDB2aDtcclxuICBtYXJnaW46IDAgYXV0bztcclxuICBwYWRkaW5nOiAwO1xyXG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcclxuICBvdmVyZmxvdy15OiBoaWRkZW47XHJcblxyXG59XHJcblxyXG5cclxuXHJcbmZvcm0ge1xyXG4gICAgYm9yZGVyOiAzcHggc29saWQgI2ZjZmRmYztcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHRvcDozMCU7XHJcbiAgICBsZWZ0OiA1MCU7XHJcbiAgICBib3R0b206IDUwJTtcclxuICAgIHdpZHRoOiA2MDBweDtcclxuICAgIGhlaWdodDogNDAwcHg7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLC01MCUpO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuXHJcbiAgfVxyXG5cclxuICAvKiBGdWxsLXdpZHRoIGlucHV0cyAqL1xyXG4gIGlucHV0W3R5cGU9dGV4dF0sIGlucHV0W3R5cGU9cGFzc3dvcmRdIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcGFkZGluZzogMTJweCAxMnB4O1xyXG4gICAgbWFyZ2luOiA4cHggMDtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIH1cclxuXHJcbiAgLyogU2V0IGEgc3R5bGUgZm9yIGFsbCBidXR0b25zICovXHJcbiAgYnV0dG9uIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM0Q0FGNTA7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBwYWRkaW5nOiAxNHB4IDIwcHg7XHJcbiAgICBtYXJnaW46IDhweCAwO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG5cclxuICAvKiBDZW50ZXIgdGhlIGF2YXRhciBpbWFnZSBpbnNpZGUgdGhpcyBjb250YWluZXIgKi9cclxuICAuaW1nY29udGFpbmVyIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbjogMjRweCAwIDEycHggMDtcclxuICB9XHJcblxyXG4gIC8qIEFkZCBwYWRkaW5nIHRvIGNvbnRhaW5lcnMgKi9cclxuICAuY29udGFpbmVyIHtcclxuICAgIHBhZGRpbmc6IDE2cHg7XHJcblxyXG4gIH1cclxuXHJcblxyXG5cclxuIl19 */"

/***/ }),

/***/ "./src/app/components/activation/preactivation/preactivation.component.html":
/*!**********************************************************************************!*\
  !*** ./src/app/components/activation/preactivation/preactivation.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\r\n<body>\r\n  <form class=\"col-md-4 col-md-offset-4\">\r\n    <div class=\"imgcontainer\">\r\n      <h2>Almost There!</h2>\r\n      <img src=\"../../../../assets/tenor.gif\" width=\"100\" height=\"100\" title=\"Email sent gif\" />\r\n      <br>\r\n      <h4>We sent you a link to verify your account...Please verify your e-mail address and we'll get started!</h4>\r\n      <br>\r\n      <span class=\"Resend Email\">Didn't recieve an email? <a href=\"#\">Resend Email</a></span>\r\n    </div>\r\n  </form>\r\n</body>\r\n\r\n"

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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_storeFetch_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/storeFetch.service */ "./src/app/services/storeFetch.service.ts");
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
    function PreactivationComponent(router, storeFetchService) {
        this.router = router;
        this.storeFetchService = storeFetchService;
    }
    PreactivationComponent.prototype.ngOnInit = function () {
        // if (this.storeFetchService.buyerIsLoggedIn()) {
        //   this.router.navigate(['/buyer']);
        // }
        // else if (this.storeFetchService.sellerIsLoggedIn()) {
        //   this.router.navigate(['/seller']);
        // }
        // else {
        //   this.router.navigate(['/']);
        // }
    };
    PreactivationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-preactivation',
            template: __webpack_require__(/*! ./preactivation.component.html */ "./src/app/components/activation/preactivation/preactivation.component.html"),
            styles: [__webpack_require__(/*! ./preactivation.component.css */ "./src/app/components/activation/preactivation/preactivation.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _services_storeFetch_service__WEBPACK_IMPORTED_MODULE_2__["StoreFetchService"]])
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

module.exports = ".submitBtn{\r\n    margin-top: 0px;\r\n    margin-left: 923px;\r\n    position: absolute;\r\n    background-color: #e60000;\r\n    border-color: black;\r\n    border-width: 0.5px;\r\n  }\r\n  .dropDownBtn{\r\n    position: absolute;\r\n    margin-top: 0px;\r\n    margin-left: 982px;\r\n  }\r\n  .dDownBtn{\r\n    background-color: #0066ff;\r\n    border-color: black;\r\n    border-width: 0.5px;\r\n  }\r\n  .submitSearchBtn{\r\n    background-color: #e60000;\r\n    border-color: black;\r\n    border-width: 0.5px;\r\n  }\r\n  .searchBox{\r\n    position: absolute;\r\n    margin-top: 60px;\r\n    width: 1080px;\r\n  }\r\n  html, body {\r\n    height: 100%;\r\n  }\r\n  #container {\r\n    min-height: 100%;\r\n    margin-bottom: -330px;\r\n    position: relative;\r\n  }\r\n  #footer {\r\n    height: 330px;\r\n    position: relative;\r\n  }\r\n  .clearfooter {\r\n    height: 330px;\r\n    clear: both;\r\n  }\r\n  .editBtn{\r\n    background-color: darkorange;\r\n  }\r\n  .saveBtn{\r\n    background-color: #e60000;\r\n  }\r\n  .divider{\r\n    width:10px;\r\n    height:auto;\r\n    display:inline-block;\r\n  }\r\n  .clearheader {\r\n    height: 100px;\r\n    clear: both;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9idXllci9idXllci1hY2NvdW50L2J1eWVyLWFjY291bnQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLHlCQUF5QjtJQUN6QixtQkFBbUI7SUFDbkIsbUJBQW1CO0VBQ3JCO0VBQ0E7SUFDRSxrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLGtCQUFrQjtFQUNwQjtFQUNBO0lBQ0UseUJBQXlCO0lBQ3pCLG1CQUFtQjtJQUNuQixtQkFBbUI7RUFDckI7RUFDQTtJQUNFLHlCQUF5QjtJQUN6QixtQkFBbUI7SUFDbkIsbUJBQW1CO0VBQ3JCO0VBQ0E7SUFDRSxrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLGFBQWE7RUFDZjtFQUVBO0lBQ0UsWUFBWTtFQUNkO0VBRUE7SUFDRSxnQkFBZ0I7SUFDaEIscUJBQXFCO0lBQ3JCLGtCQUFrQjtFQUNwQjtFQUVBO0lBQ0UsYUFBYTtJQUNiLGtCQUFrQjtFQUNwQjtFQUVBO0lBQ0UsYUFBYTtJQUNiLFdBQVc7RUFDYjtFQUVBO0lBQ0UsNEJBQTRCO0VBQzlCO0VBQ0E7SUFDRSx5QkFBeUI7RUFDM0I7RUFFQTtJQUNFLFVBQVU7SUFDVixXQUFXO0lBQ1gsb0JBQW9CO0VBQ3RCO0VBRUE7SUFDRSxhQUFhO0lBQ2IsV0FBVztBQUNmIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9idXllci9idXllci1hY2NvdW50L2J1eWVyLWFjY291bnQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zdWJtaXRCdG57XHJcbiAgICBtYXJnaW4tdG9wOiAwcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogOTIzcHg7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTYwMDAwO1xyXG4gICAgYm9yZGVyLWNvbG9yOiBibGFjaztcclxuICAgIGJvcmRlci13aWR0aDogMC41cHg7XHJcbiAgfVxyXG4gIC5kcm9wRG93bkJ0bntcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIG1hcmdpbi10b3A6IDBweDtcclxuICAgIG1hcmdpbi1sZWZ0OiA5ODJweDtcclxuICB9XHJcbiAgLmREb3duQnRue1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwNjZmZjtcclxuICAgIGJvcmRlci1jb2xvcjogYmxhY2s7XHJcbiAgICBib3JkZXItd2lkdGg6IDAuNXB4O1xyXG4gIH1cclxuICAuc3VibWl0U2VhcmNoQnRue1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2U2MDAwMDtcclxuICAgIGJvcmRlci1jb2xvcjogYmxhY2s7XHJcbiAgICBib3JkZXItd2lkdGg6IDAuNXB4O1xyXG4gIH1cclxuICAuc2VhcmNoQm94e1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbWFyZ2luLXRvcDogNjBweDtcclxuICAgIHdpZHRoOiAxMDgwcHg7XHJcbiAgfVxyXG5cclxuICBodG1sLCBib2R5IHtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICB9XHJcblxyXG4gICNjb250YWluZXIge1xyXG4gICAgbWluLWhlaWdodDogMTAwJTtcclxuICAgIG1hcmdpbi1ib3R0b206IC0zMzBweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB9XHJcbiAgXHJcbiAgI2Zvb3RlciB7XHJcbiAgICBoZWlnaHQ6IDMzMHB4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIH1cclxuXHJcbiAgLmNsZWFyZm9vdGVyIHtcclxuICAgIGhlaWdodDogMzMwcHg7XHJcbiAgICBjbGVhcjogYm90aDtcclxuICB9XHJcblxyXG4gIC5lZGl0QnRue1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZGFya29yYW5nZTtcclxuICB9XHJcbiAgLnNhdmVCdG57XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTYwMDAwO1xyXG4gIH1cclxuXHJcbiAgLmRpdmlkZXJ7XHJcbiAgICB3aWR0aDoxMHB4O1xyXG4gICAgaGVpZ2h0OmF1dG87XHJcbiAgICBkaXNwbGF5OmlubGluZS1ibG9jaztcclxuICB9XHJcblxyXG4gIC5jbGVhcmhlYWRlciB7XHJcbiAgICBoZWlnaHQ6IDEwMHB4O1xyXG4gICAgY2xlYXI6IGJvdGg7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/buyer/buyer-account/buyer-account.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/components/buyer/buyer-account/buyer-account.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-buyer-navbar [logout]=\"buyerLogout\"></app-buyer-navbar>\r\n\r\n<div class=\"clearheader\"></div>\r\n\r\n<!-- BOOTSTRAP via CDN -->\r\n<link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css\">\r\n<script src=\"https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js\"></script>\r\n<script src=\"https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js\"></script>\r\n<script src=\"https://maxcdn.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js\"></script>\r\n\r\n<!--Buyer account page\r\nBasic structure (labels, fields, etc) - Bryan Vu-->\r\n\r\n<div class=\"container\">\r\n  &nbsp;\r\n  <h1>My Account</h1>\r\n  &nbsp;\r\n  <div class=\"card\">\r\n    <div class=\"card-body\">\r\n      <h4>Personal Information</h4>\r\n      &nbsp;\r\n      <form action=\"/action_page.php\">\r\n        <div class=\"form-group\">\r\n          <label for=\"fName\">First Name:</label>\r\n          <input type=\"text\" class=\"form-control\" id=\"fName\" name=\"firstName\" value={{buyer.data.first_name}} disabled\r\n            required>\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <label for=\"lName\">Last Name:</label>\r\n          <input type=\"text\" class=\"form-control\" id=\"lName\" name=\"lastName\" value={{buyer.data.last_name}} disabled\r\n            required>\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <label for=\"eAddress\">Email Address:</label>\r\n          <input type=\"email\" class=\"form-control\" id=\"eAddress\" name=\"emailAddress\" value={{buyer.data.email}}\r\n            disabled required>\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <label for=\"pwd\">Password:</label>\r\n          <input type=\"password\" class=\"form-control\" id=\"pwd\" name=\"password\" value={{buyer.data.password}} disabled\r\n            required>\r\n        </div>\r\n        <div class=\"form-group\" id=\"newPass\" hidden>\r\n          <label for=\"newPwd\">New Password:</label>\r\n          <input type=\"password\" placeholder=\"New Password\" class=\"form-control\" id=\"newPwd\" name=\"newPassword\"\r\n            required>\r\n        </div>\r\n        <div class=\"form-group\" id=\"verify\" hidden>\r\n          <label for=\"verifyPwd\">Confirm Password:</label>\r\n          <input type=\"password\" placeholder=\"Confirm Password\" class=\"form-control\" id=\"verifyPwd\" name=\"verifyPassword\"\r\n            required>\r\n        </div>\r\n        <label id=\"errorMessage\" hidden>{{this.errorMessage}}</label>\r\n        <br>\r\n        <button type=\"button\" class=\"btn editBtn btn-lg\" id=\"editBtn\" (click)=\"editFunction()\">Edit</button>\r\n        <div class=\"divider\"></div>\r\n        <button type=\"button\" class=\"btn saveBtn btn-lg\" id=\"saveBtn\" (click)=\"saveFunction()\" disabled=true>Save</button>\r\n        <div class=\"divider\"></div>\r\n        <button type=\"button\" class=\"btn saveBtn btn-lg\" id=\"cancelBtn\" (click)=\"cancelButtonPressed()\" style=\"background-color: white\" hidden>Cancel</button>\r\n      </form>\r\n\r\n    </div>\r\n  </div>\r\n  <div class=\"clearfooter\"></div>\r\n</div>\r\n"

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
        this.buyer_id = this.buyer.data._id;
        this.buyerLogout = true;
    };
    // Function enables users to use the textfields in order to edit their information. 
    // This only works with the front end so far. This has not been tied in with the backend.
    BuyerAccountComponent.prototype.editFunction = function () {
        document.getElementById('fName').disabled = false;
        document.getElementById('lName').disabled = false;
        document.getElementById('eAddress').disabled = true;
        document.getElementById('saveBtn').disabled = false;
        document.getElementById('editBtn').disabled = true;
        document.getElementById('verify').hidden = false;
        document.getElementById('newPass').hidden = false;
        document.getElementById('cancelBtn').hidden = false;
    };
    // Function checks to see if the edited password matches before anything gets saved. A number of textfields are disabled once this function gets executed.
    // If there is no password inserted or the new password does not match when confirming. An error will be displayed to the user.
    // This only works with the front end so far. This has not been tied in with the backend.
    BuyerAccountComponent.prototype.saveFunction = function () {
        var success = this.updateBuyerData();
        if (success) {
            document.getElementById('pwd').value = document.getElementById('newPwd').value;
            document.getElementById('fName').disabled = true;
            document.getElementById('lName').disabled = true;
            document.getElementById('eAddress').disabled = true;
            document.getElementById('pwd').disabled = true;
            document.getElementById('saveBtn').disabled = true;
            document.getElementById('editBtn').disabled = true;
            document.getElementById('verify').hidden = true;
            document.getElementById('newPass').hidden = true;
            document.getElementById('newPwd').value = '';
            document.getElementById('verifyPwd').value = '';
            document.getElementById('verifyPwd').style.backgroundColor = 'White';
            document.getElementById('newPwd').style.backgroundColor = 'White';
        }
        else {
            // Could not update profile
        }
    };
    // By: Omar
    // This function has not been fully implemented yet. Once this gets completed it will help tie the frontend and backend of this page together.
    BuyerAccountComponent.prototype.updateBuyerData = function () {
        var newFName = document.getElementById('fName').value;
        var newLName = document.getElementById('lName').value;
        var newPass = document.getElementById('newPwd').value;
        var confirm = document.getElementById('verifyPwd').value;
        if (newFName === "" || newLName === "" || newPass === "" || confirm === "") {
            this.errorMessage = "One of the following fields is empty! Please fill in all highlighted empty fields.";
            document.getElementById('errorMessage').style.color = "Red";
            document.getElementById('errorMessage').hidden = false;
            document.getElementById('fName').style.backgroundColor = 'Red';
            document.getElementById('lName').style.backgroundColor = 'Red';
            document.getElementById('verifyPwd').style.backgroundColor = 'Red';
            document.getElementById('newPwd').style.backgroundColor = 'Red';
        }
        else if (newPass !== confirm) {
            this.errorMessage = "Passwords do not match!";
            document.getElementById('errorMessage').style.color = "Red";
            document.getElementById('errorMessage').hidden = false;
            document.getElementById('fName').style.backgroundColor = 'White';
            document.getElementById('lName').style.backgroundColor = 'White';
            document.getElementById('verifyPwd').style.backgroundColor = 'Red';
            document.getElementById('newPwd').style.backgroundColor = 'Red';
        }
        else {
            this.buyer_updatedFirstName = document.getElementById('fName').value;
            this.buyer_updatedLastName = document.getElementById('lName').value;
            this.buyer_updatedPassword = confirm;
            var update = {
                "updater_id": this.buyer_id,
                "fName": this.buyer_updatedFirstName,
                "lName": this.buyer_updatedLastName,
                "pass": this.buyer_updatedPassword
            };
            this.buyerService.updateBuyerProfile(update).subscribe(function (data) { });
            this.errorMessage = "Account updated successfully! Please log out and log back in.";
            document.getElementById('errorMessage').hidden = false;
            document.getElementById('cancelBtn').hidden = true;
            document.getElementById('errorMessage').style.color = "Green";
            document.getElementById('fName').style.backgroundColor = 'Green';
            document.getElementById('lName').style.backgroundColor = 'Green';
            document.getElementById('verifyPwd').style.backgroundColor = 'Green';
            document.getElementById('newPwd').style.backgroundColor = 'Green';
            return true;
        }
        return false;
    };
    // By: Omar
    // Function when cancel button gets pressed
    BuyerAccountComponent.prototype.cancelButtonPressed = function () {
        document.getElementById('errorMessage').hidden = true;
        document.getElementById('cancelBtn').hidden = true;
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
        document.getElementById('verifyPwd').style.backgroundColor = 'White';
        document.getElementById('newPwd').style.backgroundColor = 'White';
        document.getElementById('fName').style.backgroundColor = 'White';
        document.getElementById('lName').style.backgroundColor = 'White';
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

/***/ "./src/app/components/buyer/buyer-cart/buyer-cart.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/components/buyer/buyer-cart/buyer-cart.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".clearfooter {\r\n    height: 400px;\r\n    clear: both;\r\n  }\r\n\r\n  .clearheader {\r\n    height: 120px;\r\n    clear: both;\r\n  }\r\n\r\n  ul {\r\n    list-style-type: none;\r\n    }\r\n\r\n  button[type=removeButton]:hover {\r\n    text-decoration: underline;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9idXllci9idXllci1jYXJ0L2J1eWVyLWNhcnQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGFBQWE7SUFDYixXQUFXO0VBQ2I7O0VBRUE7SUFDRSxhQUFhO0lBQ2IsV0FBVztFQUNiOztFQUVBO0lBQ0UscUJBQXFCO0lBQ3JCOztFQUVGO0lBQ0UsMEJBQTBCO0VBQzVCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9idXllci9idXllci1jYXJ0L2J1eWVyLWNhcnQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jbGVhcmZvb3RlciB7XHJcbiAgICBoZWlnaHQ6IDQwMHB4O1xyXG4gICAgY2xlYXI6IGJvdGg7XHJcbiAgfVxyXG5cclxuICAuY2xlYXJoZWFkZXIge1xyXG4gICAgaGVpZ2h0OiAxMjBweDtcclxuICAgIGNsZWFyOiBib3RoO1xyXG4gIH1cclxuXHJcbiAgdWwge1xyXG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xyXG4gICAgfVxyXG4gIFxyXG4gIGJ1dHRvblt0eXBlPXJlbW92ZUJ1dHRvbl06aG92ZXIge1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbiAgfSJdfQ== */"

/***/ }),

/***/ "./src/app/components/buyer/buyer-cart/buyer-cart.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/components/buyer/buyer-cart/buyer-cart.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-buyer-navbar [itemAdded_RemovedCart]=\"removeItemNavbar\"></app-buyer-navbar>\r\n<link href=\"https://fonts.googleapis.com/icon?family=Material+Icons\" rel=\"stylesheet\">\r\n<div class=\"clearheader\"></div>\r\n\r\n<!----\r\n<div class=\"container\" style=\" position: relative;\">\r\n  <h2>Shopping Cart</h2>\r\n  <hr>\r\n    <div class=\"row\">\r\n        <div *ngIf=\"emptyCart\">\r\n          <label>Cart is empty.</label>\r\n        </div>\r\n        <div *ngIf=\"!emptyCart\">\r\n          <div *ngFor=\"let offer of offersInCart\">\r\n              <p>{{offer.title}}&nbsp;&nbsp;&nbsp;{{offer.price}}</p>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-8\">\r\n        <button type=\"button\" class=\"btn btn-lg\" id=\"goBack\" routerLink=\"/\" routerLinkActive=\"active\" >Accept more offers</button>\r\n        <br>\r\n        <button type=\"button\" class=\"btn btn-primary btn-lg\" id=\"Continue\" (click)=\"ContinueCheckout()\" LinkActive=\"active\">Contine to checkout</button>\r\n      </div>\r\n      </div>\r\n</div>-->\r\n<div class=\"container\">\r\n  <h2>Shopping Cart</h2>\r\n</div>\r\n&nbsp;\r\n<div class=\"container\">\r\n  <div class=\"row\">\r\n    <div class=\"col\">\r\n      <div class=\"table-responsive\">\r\n        <table class=\"table\">\r\n          <thead style=\"background-color: #ffffff;color: #282d32;\">\r\n            <tr>\r\n              <th style=\"width: 570px;\">Offers</th>\r\n              <th class=\"text-center\" style=\"width: 195px;\">Provider</th>\r\n              <th class=\"text-center\" style=\"width: 165px;\">Price</th>\r\n              <th class=\"text-center\" style=\"width: 156px;\">Quantity</th>\r\n              <th class=\"text-center\" style=\"width: 140px;\">Total</th>\r\n            </tr>\r\n          </thead>\r\n          <div *ngIf=\"emptyCart\">\r\n            <label>Cart is empty.</label>\r\n          </div>\r\n          <tbody *ngIf=\"!emptyCart\">\r\n            <tr class=\"text-truncate\" *ngFor=\"let offer of offersInCart\">\r\n              <td style=\"height: 113px;\">{{offer.title}}</td>\r\n              <td class=\"text-center\">Seller Name</td>\r\n              <td class=\"text-center\">${{offer.price}}</td>\r\n              <!--<td class=\"text-center d-lg-flex flex-wrap align-items-lg-center\" style=\"height: 140px;margin: 0px;padding: 26px; justify-content: space-between; flex-direction: column\">\r\n                <input type=\"number\" value=\"1\" class=\"border rounded shadow-sm text-center\" style=\"width: 51px;padding: 0px;\" />\r\n                <button class=\"btn btn-warning border rounded\" type=\"button\" style=\"padding: 2px;font-size: 13px;\">Update</button>-->\r\n              <td class=\"text-center\"> <button class=\"btn btn-primary border-white\" type=\"removeButton\" (click)=\"removeOfferFromCart(offer._id)\" style=\"background-color: rgba(255,255,255,0.4);color: #0072c6;padding: 2px;font-size: 11px;\">Remove</button>\r\n              </td>\r\n              <td class=\"text-center\">$0.00</td>\r\n            </tr>\r\n            <tr></tr>\r\n          </tbody>\r\n        </table>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"row\">\r\n    <div class=\"col-md-6\"></div>\r\n    <div class=\"col-md-6 text-right\" style=\"height: 138px; left: 20%\">\r\n      <ul class=\"text-left\" style=\"width: 318px;padding: 8px;\">\r\n        <li>Offer Total:<span class=\"price\" style=\"margin-left: 137px\">${{offersPriceTotal}}</span></li>\r\n        <li>Fees:<span class=\"price\" style=\"margin-left: 179px\">${{orderFees}}</span></li>\r\n        <li>Shipping &amp; Handling:<span class=\"price\" style=\"margin-left: 62px\">$0.00</span></li>\r\n        <li><hr></li>\r\n        <li style=\"font-weight: bold\">Order Total:<span class=\"price\" style=\"margin-left: 122px\">${{orderTotal}}</span></li>\r\n      </ul>\r\n    </div>\r\n  </div>\r\n  <br><br>\r\n  <div class=\"col-md-6 text-right\" style=\"left: 50%\">\r\n    <button type=\"button\" class=\"btn btn-secondary btn-lg\" id=\"goBack\" routerLink=\"/\" routerLinkActive=\"active\" >Accept more offers</button>\r\n    &nbsp;\r\n    <button type=\"button\" class=\"btn btn-primary btn-lg\" id=\"Continue\" routerLink=\"/buyer/checkout\" routerLinkActive=\"active\">Contine to checkout</button>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"clearfooter\"></div>\r\n"

/***/ }),

/***/ "./src/app/components/buyer/buyer-cart/buyer-cart.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/buyer/buyer-cart/buyer-cart.component.ts ***!
  \*********************************************************************/
/*! exports provided: BuyerCartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BuyerCartComponent", function() { return BuyerCartComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_buyer_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/buyer.service */ "./src/app/services/buyer.service.ts");
/* harmony import */ var angular_notifier__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-notifier */ "./node_modules/angular-notifier/esm5/angular-notifier.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var BuyerCartComponent = /** @class */ (function () {
    function BuyerCartComponent(router, route, notifierService, buyerService, cd) {
        this.router = router;
        this.route = route;
        this.notifierService = notifierService;
        this.buyerService = buyerService;
        this.cd = cd;
        this.removeItemNavbar = 0;
        this.notifier = notifierService;
    }
    BuyerCartComponent.prototype.ngOnInit = function () {
        window.scrollTo(0, 0);
        this.buyer = this.route.snapshot.data['buyer'];
        this.getCart();
        //this.offerid = this.buyer['data']['offerCart'];
    };
    BuyerCartComponent.prototype.getCart = function () {
        var _this = this;
        this.buyerService.retrieveBuyerCart().subscribe(function (data) {
            if (data.success) {
                _this.emptyCart = false;
                _this.offersInCart = data.offersInCart;
                _this.offersPriceTotal = data.offerPriceTotal;
                _this.orderFees = data.orderFees;
                _this.orderTotal = data.orderTotal;
                console.log(_this.offersInCart);
            }
            else {
                _this.notifier.notify('warning', 'Must accept offers to view cart.');
                _this.router.navigate(['/buyer']);
            }
        });
    };
    BuyerCartComponent.prototype.removeOfferFromCart = function (offerid) {
        var _this = this;
        var offer_ID = {
            offerID: offerid
        };
        this.buyerService.removeOfferFromCart(offer_ID).subscribe(function (data) {
            if (data.success) {
                console.log("offer removed from cart");
                _this.removeItemNavbar = -1;
                var itemCountBefore = localStorage.getItem('buyerCart');
                var itemRemovedCount = parseInt(itemCountBefore) - 1;
                localStorage.setItem('buyerCart', itemRemovedCount.toString());
                _this.notifier.notify('success', data.msg);
                _this.getCart();
                //this.cd.detectChanges();
            }
            else {
            }
        });
    };
    BuyerCartComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-buyer-cart',
            template: __webpack_require__(/*! ./buyer-cart.component.html */ "./src/app/components/buyer/buyer-cart/buyer-cart.component.html"),
            styles: [__webpack_require__(/*! ./buyer-cart.component.css */ "./src/app/components/buyer/buyer-cart/buyer-cart.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            angular_notifier__WEBPACK_IMPORTED_MODULE_3__["NotifierService"],
            _services_buyer_service__WEBPACK_IMPORTED_MODULE_2__["BuyerService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]])
    ], BuyerCartComponent);
    return BuyerCartComponent;
}());



/***/ }),

/***/ "./src/app/components/buyer/buyer-checkout/buyer-checkout.component.css":
/*!******************************************************************************!*\
  !*** ./src/app/components/buyer/buyer-checkout/buyer-checkout.component.css ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".clearfooter {\r\n    height: 100px;\r\n    clear: both;\r\n}\r\n\r\n.clearheader {\r\n    height: 120px;\r\n    clear: both;\r\n}\r\n\r\nul {\r\n    display: flex;\r\n    align-items: stretch; /* Default */\r\n    justify-content: space-between;\r\n    width: 100%;\r\n    background: #cacaca;\r\n    margin: 0;\r\n    padding: 0;\r\n}\r\n\r\nli {\r\n    display: block;\r\n    flex: 0 1 auto; /* Default */\r\n    list-style-type: none;\r\n    background: #fafafa;\r\n}\r\n\r\n.indent {\r\n    text-indent: px;\r\n    justify-content: space-between;\r\n}\r\n\r\nspan.price {\r\n    float: right;\r\n    color: grey;\r\n  }\r\n\r\n.col-25 { /* IE10 */\r\n    flex: 25%;\r\n  }\r\n\r\n.loader {\r\n    border: 16px solid #f3f3f3; /* Light grey */\r\n    border-top: 16px solid #3498db; /* Blue */\r\n    border-radius: 50%;\r\n    width: 300px;\r\n    height: 300px;\r\n    -webkit-animation: spin 2s linear infinite;\r\n            animation: spin 2s linear infinite;\r\n    position: relative;\r\n    left: 43%;\r\n    top: 50%;\r\n  }\r\n\r\n@-webkit-keyframes spin {\r\n    0% { -webkit-transform: rotate(0deg); transform: rotate(0deg); }\r\n    100% { -webkit-transform: rotate(360deg); transform: rotate(360deg); }\r\n  }\r\n\r\n@keyframes spin {\r\n    0% { -webkit-transform: rotate(0deg); transform: rotate(0deg); }\r\n    100% { -webkit-transform: rotate(360deg); transform: rotate(360deg); }\r\n  }\r\n\r\n.StripeElement {\r\n    background-color: white;\r\n    height: 40px;\r\n    padding: 10px 12px;\r\n    border-radius: 4px;\r\n    border: 1px solid transparent;\r\n    box-shadow: 0 1px 3px 0 #e6ebf1;\r\n    transition: box-shadow 150ms ease;\r\n  }\r\n\r\n.StripeElement--focus {\r\n    box-shadow: 0 1px 3px 0 #cfd7df;\r\n  }\r\n\r\n.StripeElement--invalid {\r\n    border-color: #fa755a;\r\n  }\r\n\r\n.StripeElement--webkit-autofill {\r\n    background-color: #fefde5 !important;\r\n  }\r\n\r\n.total {\r\n    overflow-y: scroll;\r\n  }\r\n  \r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9idXllci9idXllci1jaGVja291dC9idXllci1jaGVja291dC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtJQUNiLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGFBQWE7SUFDYixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isb0JBQW9CLEVBQUUsWUFBWTtJQUNsQyw4QkFBOEI7SUFDOUIsV0FBVztJQUNYLG1CQUFtQjtJQUNuQixTQUFTO0lBQ1QsVUFBVTtBQUNkOztBQUNBO0lBQ0ksY0FBYztJQUNkLGNBQWMsRUFBRSxZQUFZO0lBQzVCLHFCQUFxQjtJQUNyQixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsOEJBQThCO0FBQ2xDOztBQUVBO0lBQ0ksWUFBWTtJQUNaLFdBQVc7RUFDYjs7QUFFQSxVQUNpQixTQUFTO0lBQ3hCLFNBQVM7RUFDWDs7QUFFQTtJQUNFLDBCQUEwQixFQUFFLGVBQWU7SUFDM0MsOEJBQThCLEVBQUUsU0FBUztJQUN6QyxrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLGFBQWE7SUFDYiwwQ0FBa0M7WUFBbEMsa0NBQWtDO0lBQ2xDLGtCQUFrQjtJQUNsQixTQUFTO0lBQ1QsUUFBUTtFQUNWOztBQUVBO0lBQ0UsS0FBSywrQkFBdUIsRUFBdkIsdUJBQXVCLEVBQUU7SUFDOUIsT0FBTyxpQ0FBeUIsRUFBekIseUJBQXlCLEVBQUU7RUFDcEM7O0FBSEE7SUFDRSxLQUFLLCtCQUF1QixFQUF2Qix1QkFBdUIsRUFBRTtJQUM5QixPQUFPLGlDQUF5QixFQUF6Qix5QkFBeUIsRUFBRTtFQUNwQzs7QUFFQTtJQUNFLHVCQUF1QjtJQUN2QixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQiw2QkFBNkI7SUFDN0IsK0JBQStCO0lBRS9CLGlDQUFpQztFQUNuQzs7QUFFQTtJQUNFLCtCQUErQjtFQUNqQzs7QUFFQTtJQUNFLHFCQUFxQjtFQUN2Qjs7QUFFQTtJQUNFLG9DQUFvQztFQUN0Qzs7QUFFQTtJQUNFLGtCQUFrQjtFQUNwQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYnV5ZXIvYnV5ZXItY2hlY2tvdXQvYnV5ZXItY2hlY2tvdXQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jbGVhcmZvb3RlciB7XHJcbiAgICBoZWlnaHQ6IDEwMHB4O1xyXG4gICAgY2xlYXI6IGJvdGg7XHJcbn1cclxuXHJcbi5jbGVhcmhlYWRlciB7XHJcbiAgICBoZWlnaHQ6IDEyMHB4O1xyXG4gICAgY2xlYXI6IGJvdGg7XHJcbn1cclxuXHJcbnVsIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogc3RyZXRjaDsgLyogRGVmYXVsdCAqL1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kOiAjY2FjYWNhO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgcGFkZGluZzogMDtcclxufVxyXG5saSB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGZsZXg6IDAgMSBhdXRvOyAvKiBEZWZhdWx0ICovXHJcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmFmYWZhO1xyXG59XHJcblxyXG4uaW5kZW50IHtcclxuICAgIHRleHQtaW5kZW50OiBweDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxufVxyXG5cclxuc3Bhbi5wcmljZSB7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICBjb2xvcjogZ3JleTtcclxuICB9XHJcblxyXG4gIC5jb2wtMjUge1xyXG4gICAgLW1zLWZsZXg6IDI1JTsgLyogSUUxMCAqL1xyXG4gICAgZmxleDogMjUlO1xyXG4gIH1cclxuXHJcbiAgLmxvYWRlciB7XHJcbiAgICBib3JkZXI6IDE2cHggc29saWQgI2YzZjNmMzsgLyogTGlnaHQgZ3JleSAqL1xyXG4gICAgYm9yZGVyLXRvcDogMTZweCBzb2xpZCAjMzQ5OGRiOyAvKiBCbHVlICovXHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICB3aWR0aDogMzAwcHg7XHJcbiAgICBoZWlnaHQ6IDMwMHB4O1xyXG4gICAgYW5pbWF0aW9uOiBzcGluIDJzIGxpbmVhciBpbmZpbml0ZTtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGxlZnQ6IDQzJTtcclxuICAgIHRvcDogNTAlO1xyXG4gIH1cclxuICBcclxuICBAa2V5ZnJhbWVzIHNwaW4ge1xyXG4gICAgMCUgeyB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTsgfVxyXG4gICAgMTAwJSB7IHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7IH1cclxuICB9XHJcblxyXG4gIC5TdHJpcGVFbGVtZW50IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgcGFkZGluZzogMTBweCAxMnB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgICBib3gtc2hhZG93OiAwIDFweCAzcHggMCAjZTZlYmYxO1xyXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBib3gtc2hhZG93IDE1MG1zIGVhc2U7XHJcbiAgICB0cmFuc2l0aW9uOiBib3gtc2hhZG93IDE1MG1zIGVhc2U7XHJcbiAgfVxyXG4gIFxyXG4gIC5TdHJpcGVFbGVtZW50LS1mb2N1cyB7XHJcbiAgICBib3gtc2hhZG93OiAwIDFweCAzcHggMCAjY2ZkN2RmO1xyXG4gIH1cclxuICBcclxuICAuU3RyaXBlRWxlbWVudC0taW52YWxpZCB7XHJcbiAgICBib3JkZXItY29sb3I6ICNmYTc1NWE7XHJcbiAgfVxyXG4gIFxyXG4gIC5TdHJpcGVFbGVtZW50LS13ZWJraXQtYXV0b2ZpbGwge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZlZmRlNSAhaW1wb3J0YW50O1xyXG4gIH1cclxuICBcclxuICAudG90YWwge1xyXG4gICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xyXG4gIH1cclxuICAiXX0= */"

/***/ }),

/***/ "./src/app/components/buyer/buyer-checkout/buyer-checkout.component.html":
/*!*******************************************************************************!*\
  !*** ./src/app/components/buyer/buyer-checkout/buyer-checkout.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-buyer-navbar></app-buyer-navbar>\r\n<link href=\"https://fonts.googleapis.com/icon?family=Material+Icons\" rel=\"stylesheet\">\r\n<div class=\"clearheader\"></div>\r\n\r\n<div class=\"container-fluid\" style=\"width: 280px; margin-left: 200px\">\r\n  <h2>Secure checkout</h2>\r\n  <hr class=\"mb-4\">\r\n</div>\r\n<br>\r\n<div class=\"container\" style=\" position: relative;\">\r\n  <div class=\"row\">\r\n    <div class=\"col-md-4 order-md-3 mb-4 position-fixed\" style=\"left: 55%; width: auto; top: 25.5%\">\r\n      <h4 class=\"d-flex justify-content-between align-items-center mb-3\">\r\n        <span class=\"text-muted\">Summary</span>\r\n      </h4>\r\n      <ul class=\"list-group mb-3\">\r\n        <li *ngFor=\"let offer of offerList\" class=\"list-group-item d-flex justify-content-between lh-condensed\">\r\n          <div *ngIf=\"offer._id == selectedOfferId\">\r\n            <h6 class=\"my-0\" id=\"offerAcceptedTitle\">{{offer.title}}</h6>\r\n            <small class=\"text-muted\" id=\"offerDescription\">{{offer.description}}</small>\r\n          </div>\r\n          <span class=\"price\" id=\"offerPrice\">${{offer.price}}</span>\r\n        </li>\r\n        <li class=\"list-group-item d-flex justify-content-between\">\r\n          <div class=\"col-25\">\r\n            <div>\r\n              <p><small href=\"#\">Offer:</small> <span class=\"price\">$0.00</span></p>\r\n              <p><small href=\"#\">Shipping & handling:</small> <span class=\"price\">$0.00</span></p>\r\n              <hr>\r\n              <p><small href=\"#\">Total before tax & fee:</small> <span class=\"price\">$0.00</span></p>\r\n              <p><small href=\"#\">Estimated tax to be collected:</small> <span class=\"price\">$0.00</span></p>\r\n              <p><small href=\"#\">Estimated fee to be collected:</small> <span class=\"price\">$0.00</span></p>\r\n              <hr>\r\n              <p style=\"color: #9a0606; font-weight: bold\">Total (USD):<span class=\"price\" style=\"color:red\" id=\"totalPrice\"><b></b></span></p>\r\n            </div>\r\n          </div>\r\n        </li>\r\n      </ul>\r\n    </div>\r\n    <div class=\"col-md-7 order-md-4\">\r\n      <mat-vertical-stepper [linear]=\"isLinear\" #stepper>\r\n        <mat-step [stepControl]=\"firstFormGroup\">\r\n          <form [formGroup]=\"firstFormGroup\">\r\n            <ng-template matStepLabel>Billing address</ng-template>\r\n            <div class=\"row\">\r\n              <div class=\"col-md-6 mb-3\">\r\n                <mat-form-field>\r\n                  <input matInput placeholder=\"First name\" formControlName=\"firstCtrl\" required>\r\n                </mat-form-field>\r\n              </div>\r\n              <div class=\"col-md-6 mb-3\">\r\n                <mat-form-field>\r\n                  <input matInput placeholder=\"Last name\" formControlName=\"firstCtrl\" required>\r\n                </mat-form-field>\r\n              </div>\r\n            </div>\r\n            <div class=\"mb-3\">\r\n              <mat-form-field>\r\n                <input matInput placeholder=\"Address 1\" formControlName=\"firstCtrl\" required>\r\n              </mat-form-field>\r\n            </div>\r\n            <div class=\"mb-3\">\r\n              <mat-form-field>\r\n                <input matInput placeholder=\"Address 2 (Optional)\" formControlName=\"firstCtrl\">\r\n              </mat-form-field>\r\n            </div>\r\n            <div class=\"row\">\r\n              <div class=\"col-md-5 mb-3\">\r\n                <mat-form-field>\r\n                  <input matInput placeholder=\"City\" formControlName=\"firstCtrl\" required>\r\n                </mat-form-field>\r\n              </div>\r\n              <div class=\"col-md-5 mb-3\">\r\n                <mat-form-field>\r\n                  <mat-select placeholder=\"State\" formControlName=\"firstCtrl\" required>\r\n                    <mat-option value>--</mat-option>\r\n                    <mat-option value=\"AL\">AL</mat-option>\r\n                    <mat-option value=\"AK\">AK</mat-option>\r\n                    <mat-option value=\"AR\">AR</mat-option>\r\n                    <mat-option value=\"AZ\">AZ</mat-option>\r\n                    <mat-option value=\"CA\">CA</mat-option>\r\n                    <mat-option value=\"CO\">CO</mat-option>\r\n                    <mat-option value=\"CT\">CT</mat-option>\r\n                    <mat-option value=\"DC\">DC</mat-option>\r\n                    <mat-option value=\"DE\">DE</mat-option>\r\n                    <mat-option value=\"FL\">FL</mat-option>\r\n                    <mat-option value=\"GA\">GA</mat-option>\r\n                    <mat-option value=\"HI\">HI</mat-option>\r\n                    <mat-option value=\"IA\">IA</mat-option>\r\n                    <mat-option value=\"ID\">ID</mat-option>\r\n                    <mat-option value=\"IL\">IL</mat-option>\r\n                    <mat-option value=\"IN\">IN</mat-option>\r\n                    <mat-option value=\"KS\">KS</mat-option>\r\n                    <mat-option value=\"KY\">KY</mat-option>\r\n                    <mat-option value=\"LA\">LA</mat-option>\r\n                    <mat-option value=\"MA\">MA</mat-option>\r\n                    <mat-option value=\"MD\">MD</mat-option>\r\n                    <mat-option value=\"ME\">ME</mat-option>\r\n                    <mat-option value=\"MI\">MI</mat-option>\r\n                    <mat-option value=\"MN\">MN</mat-option>\r\n                    <mat-option value=\"MO\">MO</mat-option>\r\n                    <mat-option value=\"MS\">MS</mat-option>\r\n                    <mat-option value=\"MT\">MT</mat-option>\r\n                    <mat-option value=\"NC\">NC</mat-option>\r\n                    <mat-option value=\"NE\">NE</mat-option>\r\n                    <mat-option value=\"NH\">NH</mat-option>\r\n                    <mat-option value=\"NJ\">NJ</mat-option>\r\n                    <mat-option value=\"NM\">NM</mat-option>\r\n                    <mat-option value=\"NV\">NV</mat-option>\r\n                    <mat-option value=\"NY\">NY</mat-option>\r\n                    <mat-option value=\"ND\">ND</mat-option>\r\n                    <mat-option value=\"OH\">OH</mat-option>\r\n                    <mat-option value=\"OK\">OK</mat-option>\r\n                    <mat-option value=\"OR\">OR</mat-option>\r\n                    <mat-option value=\"PA\">PA</mat-option>\r\n                    <mat-option value=\"RI\">RI</mat-option>\r\n                    <mat-option value=\"SC\">SC</mat-option>\r\n                    <mat-option value=\"SD\">SD</mat-option>\r\n                    <mat-option value=\"TN\">TN</mat-option>\r\n                    <mat-option value=\"TX\">TX</mat-option>\r\n                    <mat-option value=\"UT\">UT</mat-option>\r\n                    <mat-option value=\"VT\">VT</mat-option>\r\n                    <mat-option value=\"VA\">VA</mat-option>\r\n                    <mat-option value=\"WA\">WA</mat-option>\r\n                    <mat-option value=\"WI\">WI</mat-option>\r\n                    <mat-option value=\"WV\">WV</mat-option>\r\n                    <mat-option value=\"WY\">WY</mat-option>\r\n                  </mat-select>\r\n                </mat-form-field>\r\n              </div>\r\n              <div class=\"col-md-3 mb-3\">\r\n                <mat-form-field>\r\n                  <input matInput placeholder=\"Zip\" formControlName=\"firstCtrl\" required>\r\n                </mat-form-field>\r\n              </div>\r\n            </div>\r\n            <div>\r\n              <button mat-button matStepperNext style=\"background-color: #1761a0; color: white\">Next</button>\r\n            </div>\r\n          </form>\r\n        </mat-step>\r\n        <mat-step [stepControl]=\"secondFormGroup\">\r\n          <form [formGroup]=\"secondFormGroup\">\r\n            <ng-template matStepLabel>Shipping address</ng-template>\r\n            <div class=\"row\">\r\n              <div class=\"col-md-6 mb-3\">\r\n                <mat-form-field>\r\n                  <input matInput placeholder=\"First name\" formControlName=\"secondCtrl\" required>\r\n                </mat-form-field>\r\n              </div>\r\n              <div class=\"col-md-6 mb-3\">\r\n                <mat-form-field>\r\n                  <input matInput placeholder=\"Last name\" formControlName=\"secondCtrl\" required>\r\n                </mat-form-field>\r\n              </div>\r\n            </div>\r\n            <div class=\"mb-3\">\r\n              <mat-form-field>\r\n                <input matInput placeholder=\"Address 1\" formControlName=\"secondCtrl\" required>\r\n              </mat-form-field>\r\n            </div>\r\n            <div class=\"mb-3\">\r\n              <mat-form-field>\r\n                <input matInput placeholder=\"Address 2 (Optional)\" formControlName=\"secondCtrl\">\r\n              </mat-form-field>\r\n            </div>\r\n            <div class=\"row\">\r\n              <div class=\"col-md-5 mb-3\">\r\n                <mat-form-field>\r\n                  <input matInput placeholder=\"City\" formControlName=\"secondCtrl\" required>\r\n                </mat-form-field>\r\n              </div>\r\n              <div class=\"col-md-5 mb-3\">\r\n                <mat-form-field>\r\n                  <mat-select placeholder=\"State\" formControlName=\"secondCtrl\" required>\r\n                    <mat-option value>--</mat-option>\r\n                    <mat-option value=\"AL\">AL</mat-option>\r\n                    <mat-option value=\"AK\">AK</mat-option>\r\n                    <mat-option value=\"AR\">AR</mat-option>\r\n                    <mat-option value=\"AZ\">AZ</mat-option>\r\n                    <mat-option value=\"CA\">CA</mat-option>\r\n                    <mat-option value=\"CO\">CO</mat-option>\r\n                    <mat-option value=\"CT\">CT</mat-option>\r\n                    <mat-option value=\"DC\">DC</mat-option>\r\n                    <mat-option value=\"DE\">DE</mat-option>\r\n                    <mat-option value=\"FL\">FL</mat-option>\r\n                    <mat-option value=\"GA\">GA</mat-option>\r\n                    <mat-option value=\"HI\">HI</mat-option>\r\n                    <mat-option value=\"IA\">IA</mat-option>\r\n                    <mat-option value=\"ID\">ID</mat-option>\r\n                    <mat-option value=\"IL\">IL</mat-option>\r\n                    <mat-option value=\"IN\">IN</mat-option>\r\n                    <mat-option value=\"KS\">KS</mat-option>\r\n                    <mat-option value=\"KY\">KY</mat-option>\r\n                    <mat-option value=\"LA\">LA</mat-option>\r\n                    <mat-option value=\"MA\">MA</mat-option>\r\n                    <mat-option value=\"MD\">MD</mat-option>\r\n                    <mat-option value=\"ME\">ME</mat-option>\r\n                    <mat-option value=\"MI\">MI</mat-option>\r\n                    <mat-option value=\"MN\">MN</mat-option>\r\n                    <mat-option value=\"MO\">MO</mat-option>\r\n                    <mat-option value=\"MS\">MS</mat-option>\r\n                    <mat-option value=\"MT\">MT</mat-option>\r\n                    <mat-option value=\"NC\">NC</mat-option>\r\n                    <mat-option value=\"NE\">NE</mat-option>\r\n                    <mat-option value=\"NH\">NH</mat-option>\r\n                    <mat-option value=\"NJ\">NJ</mat-option>\r\n                    <mat-option value=\"NM\">NM</mat-option>\r\n                    <mat-option value=\"NV\">NV</mat-option>\r\n                    <mat-option value=\"NY\">NY</mat-option>\r\n                    <mat-option value=\"ND\">ND</mat-option>\r\n                    <mat-option value=\"OH\">OH</mat-option>\r\n                    <mat-option value=\"OK\">OK</mat-option>\r\n                    <mat-option value=\"OR\">OR</mat-option>\r\n                    <mat-option value=\"PA\">PA</mat-option>\r\n                    <mat-option value=\"RI\">RI</mat-option>\r\n                    <mat-option value=\"SC\">SC</mat-option>\r\n                    <mat-option value=\"SD\">SD</mat-option>\r\n                    <mat-option value=\"TN\">TN</mat-option>\r\n                    <mat-option value=\"TX\">TX</mat-option>\r\n                    <mat-option value=\"UT\">UT</mat-option>\r\n                    <mat-option value=\"VT\">VT</mat-option>\r\n                    <mat-option value=\"VA\">VA</mat-option>\r\n                    <mat-option value=\"WA\">WA</mat-option>\r\n                    <mat-option value=\"WI\">WI</mat-option>\r\n                    <mat-option value=\"WV\">WV</mat-option>\r\n                    <mat-option value=\"WY\">WY</mat-option>\r\n                  </mat-select>\r\n                </mat-form-field>\r\n              </div>\r\n              <div class=\"col-md-3 mb-3\">\r\n                <mat-form-field>\r\n                  <input matInput placeholder=\"Zip\" formControlName=\"secondCtrl\" required>\r\n                </mat-form-field>\r\n              </div>\r\n            </div>\r\n            <div>\r\n              <button mat-button matStepperPrevious style=\"background-color: #1761a0; color: white; margin-right: 5px;\">Back</button>\r\n              <button mat-button matStepperNext style=\"background-color: #1761a0; color: white\">Next</button>\r\n            </div>\r\n          </form>\r\n        </mat-step>\r\n        <mat-step [stepControl]=\"thirdFormGroup\">\r\n          <form [formGroup]=\"thirdFormGroup\">\r\n            <ng-template matStepLabel>Payment</ng-template>\r\n            <mat-form-field>\r\n              <input matInput placeholder=\"Cardholder's name\" formControlName=\"thirdCtrl\" required>\r\n            </mat-form-field>\r\n            <br>\r\n            <div>\r\n              <ngx-stripe-card [options]=\"cardOptions\" [elementsOptions]=\"elementsOptions\"></ngx-stripe-card>\r\n            </div>\r\n            <br>\r\n            <div>\r\n              <button mat-button matStepperPrevious style=\"background-color: #1761a0; color: white; margin-right: 5px;\">Back</button>\r\n              <button mat-button matStepperNext style=\"background-color: #1761a0; color: white\">Next</button>\r\n            </div>\r\n          </form>\r\n        </mat-step>\r\n        <mat-step>\r\n          <ng-template matStepLabel>Complete purchase</ng-template>\r\n          <br>\r\n          <div>\r\n            <button class=\"btn btn-primary btn-lg btn-block\" type=\"submit\" (click)=\"completePurchase()\" style=\"background-color: #1761a0; border: none\"\r\n              id=\"purchaseButton\">Complete\r\n              Purchase</button>\r\n          </div>\r\n          <br>\r\n          <div>\r\n            <button mat-button matStepperPrevious style=\"background-color: #1761a0; color: white; margin-right: 5px;\">Back</button>\r\n            <button mat-button (click)=\"stepper.reset()\" style=\"background-color: #1761a0; color: white\">Reset</button>\r\n          </div>\r\n        </mat-step>\r\n      </mat-vertical-stepper>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"clearfooter\"></div>"

/***/ }),

/***/ "./src/app/components/buyer/buyer-checkout/buyer-checkout.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/components/buyer/buyer-checkout/buyer-checkout.component.ts ***!
  \*****************************************************************************/
/*! exports provided: BuyerCheckoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BuyerCheckoutComponent", function() { return BuyerCheckoutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_storeFetch_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/storeFetch.service */ "./src/app/services/storeFetch.service.ts");
/* harmony import */ var _services_request_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/request.service */ "./src/app/services/request.service.ts");
/* harmony import */ var ngx_stripe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-stripe */ "../node_modules/ngx-stripe/fesm5/ngx-stripe.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _services_buyer_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../services/buyer.service */ "./src/app/services/buyer.service.ts");
/* harmony import */ var angular_notifier__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! angular-notifier */ "./node_modules/angular-notifier/esm5/angular-notifier.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
//By: Omar
//Buyer checkout page









var BuyerCheckoutComponent = /** @class */ (function () {
    function BuyerCheckoutComponent(route, router, storeFetchService, requestService, fb, stripeService, httpClient, buyerService, notifierService, _formBuilder) {
        this.route = route;
        this.router = router;
        this.storeFetchService = storeFetchService;
        this.requestService = requestService;
        this.fb = fb;
        this.stripeService = stripeService;
        this.httpClient = httpClient;
        this.buyerService = buyerService;
        this.notifierService = notifierService;
        this._formBuilder = _formBuilder;
        this.isDataAvailable = false;
        this.initialClick1 = false;
        this.initialClick2 = false;
        this.isLinear = false;
        this.cardOptions = {
            style: {
                base: {
                    iconColor: '#666EE8',
                    color: '#31325F',
                    //lineHeight: '40px',
                    //fontWeight: 300,
                    //fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
                    fontSize: '18px',
                    '::placeholder': {
                        color: '#CFD7E0'
                    }
                }
            }
        };
        this.elementsOptions = {
            locale: 'en'
        };
        this.notifier = notifierService;
    }
    BuyerCheckoutComponent.prototype.ngOnInit = function () {
        var _this = this;
        //this.buyer = this.route.snapshot.data['buyer'];
        this.buyerService.retrieveBuyerCart().subscribe(function (data) {
            if (data.success) {
                _this.emptyCart = false;
                _this.offersInCart = data.offersInCart;
                _this.offerPriceDisplay = data.offerPriceTotal;
                _this.orderFees = data.orderFees;
                _this.totalPrice = data.orderTotal;
            }
            else {
                _this.notifier.notify('warning', 'Must accept offers to checkout.');
                _this.router.navigate(['/buyer']);
            }
        });
        this.stripeTest = this.fb.group({
            name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]]
        });
        //this.fetchEvent()
        this.firstFormGroup = this._formBuilder.group({
            firstCtrl: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]
        });
        this.secondFormGroup = this._formBuilder.group({
            secondCtrl: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]
        });
        this.thirdFormGroup = this._formBuilder.group({
            thirdCtrl: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]
        });
    };
    BuyerCheckoutComponent.prototype.fetchEvent = function () {
        var _this = this;
        return this.route.params.subscribe(function (params) {
            _this.selectedOfferId = params.offerId;
            _this.request_Id = params.requestId;
            // --> Extract the id pass with URL
            // Make a call to retrieve request information with all offers to that request
            _this.requestService.getRequest(_this.request_Id).subscribe(function (data) {
                if (data.success) {
                    //this.request = data.request;
                    _this.offerList = data.offers;
                    console.log(_this.offerList);
                }
                else {
                    _this.notifier.notify('error', data.msg);
                    _this.router.navigate(['/']);
                }
            });
        });
    };
    BuyerCheckoutComponent.prototype.completePurchase = function () {
        var _this = this;
        var price = document.getElementById('offerPrice').innerText;
        console.log(price);
        var name = this.stripeTest.get('name').value;
        this.stripeService
            .createToken(this.card.getCard(), { name: name })
            .subscribe(function (result) {
            if (result.token) {
                // Creates a charge object
                var obj = {
                    "token": result.token.id,
                    "email": _this.buyer.data.email,
                    "user": name,
                    "amount": 1000,
                    "product": document.getElementById('offerAcceptedTitle').innerText,
                    "description": document.getElementById('offerDescription').innerText
                };
                //Makes a call to the server
                _this.buyerService.checkout(obj).subscribe(function (data) { console.log(data); });
            }
            else if (result.error) {
                // Error creating the token
                console.log(result.error.message);
            }
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(ngx_stripe__WEBPACK_IMPORTED_MODULE_4__["StripeCardComponent"]),
        __metadata("design:type", ngx_stripe__WEBPACK_IMPORTED_MODULE_4__["StripeCardComponent"])
    ], BuyerCheckoutComponent.prototype, "card", void 0);
    BuyerCheckoutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-buyer-checkout',
            template: __webpack_require__(/*! ./buyer-checkout.component.html */ "./src/app/components/buyer/buyer-checkout/buyer-checkout.component.html"),
            styles: [__webpack_require__(/*! ./buyer-checkout.component.css */ "./src/app/components/buyer/buyer-checkout/buyer-checkout.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _services_storeFetch_service__WEBPACK_IMPORTED_MODULE_2__["StoreFetchService"],
            _services_request_service__WEBPACK_IMPORTED_MODULE_3__["RequestService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"],
            ngx_stripe__WEBPACK_IMPORTED_MODULE_4__["StripeService"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"],
            _services_buyer_service__WEBPACK_IMPORTED_MODULE_7__["BuyerService"],
            angular_notifier__WEBPACK_IMPORTED_MODULE_8__["NotifierService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"]])
    ], BuyerCheckoutComponent);
    return BuyerCheckoutComponent;
}());



/***/ }),

/***/ "./src/app/components/buyer/buyer.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/buyer/buyer.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body, html {\r\n  height: 100%;\r\n}\r\n.app-loading {\r\n  position: center;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  justify-content: center;\r\n  height: 100%;\r\n}\r\n.clearheader {\r\n  height: 100px;\r\n  clear: both;\r\n}\r\nbutton{\r\n  white-space: pre-wrap !important;\r\n}\r\n.app-loading .spinner {\r\n  height: 200px;\r\n  width: 200px;\r\n  -webkit-animation: rotate 2s linear infinite;\r\n          animation: rotate 2s linear infinite;\r\n  -webkit-transform-origin: center center;\r\n          transform-origin: center center;\r\n  position: absolute;\r\n  top: 0;\r\n  bottom: 0;\r\n  left: 0;\r\n  right: 0;\r\n  margin: auto;\r\n}\r\n.app-loading .spinner .path {\r\n  stroke-dasharray: 1, 200;\r\n  stroke-dashoffset: 0;\r\n  -webkit-animation: dash 1.5s ease-in-out infinite;\r\n          animation: dash 1.5s ease-in-out infinite;\r\n  stroke-linecap: round;\r\n  stroke: #ddd;\r\n}\r\nhtml, body {\r\n  height: 100%;\r\n}\r\n.btn {\r\n  width: 250px;\r\n  background-color: rgb(218, 64, 26);\r\n  color: white;\r\n  font-weight: bold;\r\n  opacity: .95;\r\n}\r\n/* Add a hover effect for buttons */\r\n.btn:hover {\r\n  opacity:.75;\r\n  background-color: darkgreen;\r\n}\r\n#container {\r\n  min-height: 100%;\r\n  margin-bottom: -600px;\r\n  position: relative;\r\n}\r\n#footer {\r\n  height: 600px;\r\n  position: relative;\r\n}\r\n.clearfooter {\r\n  height: 400px;\r\n  clear: both;\r\n}\r\n@-webkit-keyframes rotate {\r\n  100% {\r\n    -webkit-transform: rotate(360deg);\r\n            transform: rotate(360deg);\r\n  }\r\n}\r\n@keyframes rotate {\r\n  100% {\r\n    -webkit-transform: rotate(360deg);\r\n            transform: rotate(360deg);\r\n  }\r\n}\r\n@-webkit-keyframes dash {\r\n  0% {\r\n    stroke-dasharray: 1, 200;\r\n    stroke-dashoffset: 0;\r\n  }\r\n  50% {\r\n    stroke-dasharray: 89, 200;\r\n    stroke-dashoffset: -35px;\r\n  }\r\n  100% {\r\n    stroke-dasharray: 89, 200;\r\n    stroke-dashoffset: -124px;\r\n  }\r\n}\r\n@keyframes dash {\r\n  0% {\r\n    stroke-dasharray: 1, 200;\r\n    stroke-dashoffset: 0;\r\n  }\r\n  50% {\r\n    stroke-dasharray: 89, 200;\r\n    stroke-dashoffset: -35px;\r\n  }\r\n  100% {\r\n    stroke-dasharray: 89, 200;\r\n    stroke-dashoffset: -124px;\r\n  }\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9idXllci9idXllci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBWTtBQUNkO0FBQ0E7RUFDRSxnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLFlBQVk7QUFDZDtBQUVBO0VBQ0UsYUFBYTtFQUNiLFdBQVc7QUFDYjtBQUVBO0VBQ0UsZ0NBQWdDO0FBQ2xDO0FBRUE7RUFDRSxhQUFhO0VBQ2IsWUFBWTtFQUNaLDRDQUFvQztVQUFwQyxvQ0FBb0M7RUFDcEMsdUNBQStCO1VBQS9CLCtCQUErQjtFQUMvQixrQkFBa0I7RUFDbEIsTUFBTTtFQUNOLFNBQVM7RUFDVCxPQUFPO0VBQ1AsUUFBUTtFQUNSLFlBQVk7QUFDZDtBQUVBO0VBQ0Usd0JBQXdCO0VBQ3hCLG9CQUFvQjtFQUNwQixpREFBeUM7VUFBekMseUNBQXlDO0VBQ3pDLHFCQUFxQjtFQUNyQixZQUFZO0FBQ2Q7QUFFQTtFQUNFLFlBQVk7QUFDZDtBQUNBO0VBQ0UsWUFBWTtFQUNaLGtDQUFrQztFQUNsQyxZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLFlBQVk7QUFDZDtBQUVBLG1DQUFtQztBQUNuQztFQUNFLFdBQVc7RUFDWCwyQkFBMkI7QUFDN0I7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixxQkFBcUI7RUFDckIsa0JBQWtCO0FBQ3BCO0FBRUE7RUFDRSxhQUFhO0VBQ2Isa0JBQWtCO0FBQ3BCO0FBRUE7RUFDRSxhQUFhO0VBQ2IsV0FBVztBQUNiO0FBRUE7RUFDRTtJQUNFLGlDQUF5QjtZQUF6Qix5QkFBeUI7RUFDM0I7QUFDRjtBQUpBO0VBQ0U7SUFDRSxpQ0FBeUI7WUFBekIseUJBQXlCO0VBQzNCO0FBQ0Y7QUFFQTtFQUNFO0lBQ0Usd0JBQXdCO0lBQ3hCLG9CQUFvQjtFQUN0QjtFQUNBO0lBQ0UseUJBQXlCO0lBQ3pCLHdCQUF3QjtFQUMxQjtFQUNBO0lBQ0UseUJBQXlCO0lBQ3pCLHlCQUF5QjtFQUMzQjtBQUNGO0FBYkE7RUFDRTtJQUNFLHdCQUF3QjtJQUN4QixvQkFBb0I7RUFDdEI7RUFDQTtJQUNFLHlCQUF5QjtJQUN6Qix3QkFBd0I7RUFDMUI7RUFDQTtJQUNFLHlCQUF5QjtJQUN6Qix5QkFBeUI7RUFDM0I7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYnV5ZXIvYnV5ZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImJvZHksIGh0bWwge1xyXG4gIGhlaWdodDogMTAwJTtcclxufVxyXG4uYXBwLWxvYWRpbmcge1xyXG4gIHBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG4uY2xlYXJoZWFkZXIge1xyXG4gIGhlaWdodDogMTAwcHg7XHJcbiAgY2xlYXI6IGJvdGg7XHJcbn1cclxuXHJcbmJ1dHRvbntcclxuICB3aGl0ZS1zcGFjZTogcHJlLXdyYXAgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmFwcC1sb2FkaW5nIC5zcGlubmVyIHtcclxuICBoZWlnaHQ6IDIwMHB4O1xyXG4gIHdpZHRoOiAyMDBweDtcclxuICBhbmltYXRpb246IHJvdGF0ZSAycyBsaW5lYXIgaW5maW5pdGU7XHJcbiAgdHJhbnNmb3JtLW9yaWdpbjogY2VudGVyIGNlbnRlcjtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAwO1xyXG4gIGJvdHRvbTogMDtcclxuICBsZWZ0OiAwO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIG1hcmdpbjogYXV0bztcclxufVxyXG5cclxuLmFwcC1sb2FkaW5nIC5zcGlubmVyIC5wYXRoIHtcclxuICBzdHJva2UtZGFzaGFycmF5OiAxLCAyMDA7XHJcbiAgc3Ryb2tlLWRhc2hvZmZzZXQ6IDA7XHJcbiAgYW5pbWF0aW9uOiBkYXNoIDEuNXMgZWFzZS1pbi1vdXQgaW5maW5pdGU7XHJcbiAgc3Ryb2tlLWxpbmVjYXA6IHJvdW5kO1xyXG4gIHN0cm9rZTogI2RkZDtcclxufVxyXG5cclxuaHRtbCwgYm9keSB7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcbi5idG4ge1xyXG4gIHdpZHRoOiAyNTBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjE4LCA2NCwgMjYpO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBvcGFjaXR5OiAuOTU7XHJcbn1cclxuXHJcbi8qIEFkZCBhIGhvdmVyIGVmZmVjdCBmb3IgYnV0dG9ucyAqL1xyXG4uYnRuOmhvdmVyIHtcclxuICBvcGFjaXR5Oi43NTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrZ3JlZW47XHJcbn1cclxuXHJcbiNjb250YWluZXIge1xyXG4gIG1pbi1oZWlnaHQ6IDEwMCU7XHJcbiAgbWFyZ2luLWJvdHRvbTogLTYwMHB4O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuI2Zvb3RlciB7XHJcbiAgaGVpZ2h0OiA2MDBweDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbi5jbGVhcmZvb3RlciB7XHJcbiAgaGVpZ2h0OiA0MDBweDtcclxuICBjbGVhcjogYm90aDtcclxufVxyXG5cclxuQGtleWZyYW1lcyByb3RhdGUge1xyXG4gIDEwMCUge1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcclxuICB9XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgZGFzaCB7XHJcbiAgMCUge1xyXG4gICAgc3Ryb2tlLWRhc2hhcnJheTogMSwgMjAwO1xyXG4gICAgc3Ryb2tlLWRhc2hvZmZzZXQ6IDA7XHJcbiAgfVxyXG4gIDUwJSB7XHJcbiAgICBzdHJva2UtZGFzaGFycmF5OiA4OSwgMjAwO1xyXG4gICAgc3Ryb2tlLWRhc2hvZmZzZXQ6IC0zNXB4O1xyXG4gIH1cclxuICAxMDAlIHtcclxuICAgIHN0cm9rZS1kYXNoYXJyYXk6IDg5LCAyMDA7XHJcbiAgICBzdHJva2UtZGFzaG9mZnNldDogLTEyNHB4O1xyXG4gIH1cclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/components/buyer/buyer.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/buyer/buyer.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-buyer-navbar [itemAdded_RemovedCart]=\"pushItemToNavbar\"></app-buyer-navbar>\r\n\r\n<div class=\"clearheader\"></div>\r\n\r\n<!--\r\nBryan Vu contributed most of this buyer portal page.\r\n-->\r\n\r\n<div class=\"container-fluid\" *ngIf=\"buyer\">\r\n  &nbsp;\r\n  <div class=\"container\">\r\n    <div class=\"row justify-content-md\">\r\n      <div>\r\n        <h4 class=\"page-header\">Welcome {{buyer.data.first_name}}!</h4>\r\n        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>\r\n        </div>\r\n        &nbsp;\r\n        <button type=\"button\" routerLink=\"/buyer/make-request\" class=\"btn btn-block\" style=\"background-color: #1761a0; color: white\">Submit\r\n          New Request</button>\r\n    </div>\r\n\r\n    <br>\r\n\r\n    <div class=\"row justify-content-md\" ng-cloak>\r\n      <div class=\"col\">\r\n        <h3>{{buyer.data.first_name}}'s Requests</h3>\r\n      </div>\r\n      <div class=\"input-group col searchBox\">\r\n        <input type=\"text\" class=\"form-control\" placeholder=\"Search Requests\" [(ngModel)]=\"filter\">\r\n      </div>\r\n    </div>\r\n  </div>\r\n  &nbsp;\r\n  <li class=\"card container\">\r\n    &nbsp;\r\n    <table class=\"table table-striped table-sm\" style=\"background-color: #282d32; color: white\">\r\n      <thead>\r\n        <tr style=\"text-align:center\">\r\n          <th>Name</th>\r\n          <th style=\"width: 300px;\">Status</th>\r\n          <th style=\"width: 300px;\">Offers</th>\r\n          <th style=\"width: 300px;\">Time Left</th>\r\n        </tr>\r\n      </thead>\r\n    </table>\r\n\r\n    <mat-accordion>\r\n      <mat-expansion-panel id=\"requestExpansionId\" *ngFor=\"let request of requestList | filter:filter | paginate: {itemsPerPage: 25, currentPage: p}\" (opened)=\"expanded(request._id)\">\r\n        <mat-expansion-panel-header style=\"text-align:center\">\r\n          <mat-panel-title style=\"width: 180px\" id=\"requestTitle\">\r\n            {{request.title}}\r\n          </mat-panel-title>\r\n          <mat-panel-title style=\"width:200px\">\r\n            Pending\r\n          </mat-panel-title>\r\n          <mat-panel-title style=\"width: 75px\">\r\n            {{request.offerCount}}\r\n          </mat-panel-title>\r\n          <mat-panel-title style=\"width: 90px\">\r\n            {{request.deadline}}\r\n          </mat-panel-title>\r\n          <mat-panel-title id=\"selectedRequestId\" hidden>\r\n            {{request._id}}\r\n          </mat-panel-title>\r\n        </mat-expansion-panel-header>\r\n\r\n        <div class=\"container\" style=\"border:3px solid black; background-color: #dcdde1\">\r\n          &nbsp;\r\n          <mat-panel-title>\r\n            Request Description:\r\n          </mat-panel-title>\r\n          <mat-panel-title>\r\n            <div [innerHTML]=\"request.description\"></div>\r\n          </mat-panel-title>\r\n          <br>\r\n          <mat-panel-title>\r\n            Offers:\r\n          </mat-panel-title>\r\n          <br>\r\n          <table class=\"table table-striped table-sm\" style=\"background-color: #487eb0; color: white\">\r\n            <thead>\r\n              <tr style=\"text-align:center;\">\r\n                <th>Title</th>\r\n                <th>Submission Date</th>\r\n                <th>Price</th>\r\n              </tr>\r\n            </thead>\r\n          </table>\r\n\r\n          <mat-expansion-panel *ngFor=\"let offer of offerList\" style=\"background-color: #f5f6fa\">\r\n            <mat-expansion-panel-header>\r\n              <mat-panel-title id=\"offerTitle\" style=\"margin-left: 3%\">\r\n                {{offer.title}}\r\n              </mat-panel-title>\r\n              <mat-panel-title id=\"offerSubDate\" style=\"margin-left: 25%\">\r\n                offer-sub-date\r\n              </mat-panel-title>\r\n              <mat-panel-title id=\"offerPrice\" style=\"margin-left: 30%\">\r\n                ${{offer.price}}\r\n              </mat-panel-title>\r\n              <mat-panel-title id=\"offerId\" hidden>\r\n                {{offer._id}}\r\n              </mat-panel-title>\r\n            </mat-expansion-panel-header>\r\n\r\n            <div class=\"container\" style=\"border:3px solid #7f8fa6\">\r\n              &nbsp;\r\n              <mat-panel-title>\r\n                Offer Details:\r\n              </mat-panel-title>\r\n              <mat-panel-title id=\"offerDescription\">\r\n                {{offer.description}}\r\n              </mat-panel-title>\r\n              <!--\r\n              <mat-panel-title *ngIf=\"offerCart.indexOf(offer._id) === -1\" style=\"margin-left: 85%\">\r\n                <button mat-button (click)=\"acceptOffer($event.target, offer._id)\" id=\"acceptOfferButton\" style=\"background-color: #8c7ae6; color: white;\">Accept Offer</button>\r\n              </mat-panel-title>\r\n              <mat-panel-title *ngIf=\"offerCart.indexOf(offer._id) !== -1\" style=\"margin-left: 85%\">\r\n                <button [disabled]=\"true\" mat-button style=\"background-color: #006400; color: white;\">Offer In Cart</button>\r\n              </mat-panel-title>-->\r\n              <mat-panel-title style=\"margin-left: 85%\">\r\n                <button mat-button (click)=\"acceptOffer($event.target, offer._id)\" id=\"acceptOfferButton\" style=\"background-color: #8c7ae6; color: white;\">Accept Offer</button>\r\n              </mat-panel-title>\r\n              &nbsp;\r\n            </div>\r\n          </mat-expansion-panel>\r\n          &nbsp;\r\n        </div>\r\n\r\n        <!----\r\n        <mat-form-field>\r\n          <input matInput placeholder=\"Age\">\r\n        </mat-form-field>-->\r\n      </mat-expansion-panel>\r\n    </mat-accordion>\r\n\r\n    &nbsp;\r\n\r\n    <pagination-controls (pageChange)=\"p = $event\" previousLabel=\"Previous\" nextLabel=\"Next\" directionLinks=\"true\"\r\n      autoHide=\"true\">\r\n    </pagination-controls>\r\n\r\n    <!----\r\n    <div class=\"row\">\r\n      <div class=\"col-md-auto\">\r\n        <h4>{{request.title}}</h4>\r\n      </div>\r\n      <div class=\"col\">\r\n        <p><b>Offer count:</b> {{request.offerCount}}</p>\r\n      </div>\r\n    </div>\r\n\r\n    <p><b>Deadline:</b> {{request.deadline}}</p>\r\n    <p><b>Description:</b> {{request.description}}</p>\r\n    <div class=\"col-sm-12\" style=\"text-align: right;\">\r\n      <button type=\"button\" routerLink=\"/request/{{request._id}}\" class=\"btn\">View Offers</button>\r\n    </div>\r\n    <br>-->\r\n  </li>\r\n</div>\r\n\r\n\r\n\r\n<div class=\"clearfooter\"></div>\r\n"

/***/ }),

/***/ "./src/app/components/buyer/buyer.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/buyer/buyer.component.ts ***!
  \*****************************************************/
/*! exports provided: BuyerComponent, AcceptOfferDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BuyerComponent", function() { return BuyerComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AcceptOfferDialogComponent", function() { return AcceptOfferDialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_register_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/register.service */ "./src/app/services/register.service.ts");
/* harmony import */ var _services_buyer_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/buyer.service */ "./src/app/services/buyer.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_request_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/request.service */ "./src/app/services/request.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
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
    //offerCart: [String] = [""];
    function BuyerComponent(registerService, buyerService, router, route, requestService, dialog) {
        this.registerService = registerService;
        this.buyerService = buyerService;
        this.router = router;
        this.route = route;
        this.requestService = requestService;
        this.dialog = dialog;
        this.panelOpenState = false;
        this.pushItemToNavbar = 0;
    }
    // showing buyer info when buyer portal page loads - Bryan Vu
    BuyerComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.buyer = this.route.snapshot.data['buyer'];
        this.getBuyer();
        this.buyerService.getBuyerRequests().subscribe(function (requests) {
            _this.requestList = requests;
        });
    };
    BuyerComponent.prototype.getBuyer = function () {
        var _this = this;
        this.buyerService.getBuyerProfile().subscribe(function (buyerdata) {
            _this.buyerProfile = buyerdata;
            console.log(_this.buyerProfile);
        });
    };
    // tslint:disable-next-line:member-ordering
    BuyerComponent.prototype.refreshBuyer = function () {
        this.buyer = JSON.parse(localStorage.getItem('buyer'));
        if (this.buyer == null) {
            window.location.reload();
        }
        else {
            console.log(this.buyer);
        }
    };
    BuyerComponent.prototype.expanded = function (id) {
        var _this = this;
        var requestId = id;
        this.getBuyer();
        // Make a call to retrieve request information with all offers to that request
        this.requestService.getRequest(requestId).subscribe(function (data) {
            if (data.success) {
                _this.offerList = data.offers;
                //this.offerCart = this.buyerProfile.data.offerCart;
                //console.log(this.offerCart);
                // used to distinguish between if buyer is viewing the request or a seller
                // to limit access
                if (data.status === 0) {
                    //this.status = true; // Buyer
                }
                else if (data.status === 1) {
                    //this.status = false; // Seller
                }
                else {
                    //this.notifier.notify('success', data.msg);
                    //this.router.navigate(['/']);
                }
            }
            else {
                //this.notifier.notify('error', data.msg);
                //this.router.navigate(['/']);
            }
        });
        this.getBuyer();
    };
    BuyerComponent.prototype.acceptOffer = function (element, offer_id) {
        var _this = this;
        //const offer_id = document.getElementById('offerId').innerHTML;
        var offerToCart = {
            offerID: offer_id
        };
        this.buyerService.addOfferToBuyerCart(offerToCart).subscribe(function (data) {
            if (data.success)
                var prevItems = localStorage.getItem('buyerCart');
            var newItem = 1;
            var newTotalItems = parseInt(prevItems, 10) + newItem;
            localStorage.setItem('buyerCart', newTotalItems.toString());
            _this.pushItemToNavbar = 1;
            element.textContent = 'Offer Accepted';
            element.disabled = true;
            _this.getBuyer();
            //(<HTMLButtonElement>document.getElementById("acceptOfferButton")).disabled = true;
        });
        /*
        const dialogRef = this.dialog.open(AcceptOfferDialogComponent);
    
        dialogRef.afterClosed().subscribe(result => {
          //console.log(`Dialog result: ${result}`);
          //console.log(this.buyer);
          const offer_id = document.getElementById('offerId').innerHTML;
          const offerToCart = {
            offerID: offer_id
          }
          this.buyerService.addOfferToBuyerCart(offerToCart).subscribe((data: any) => {
            if (data.success)
              var prevItems = localStorage.getItem('buyerCart');
              var newItem = 1;
              var newTotalItems = parseInt(prevItems, 10) + newItem;
              localStorage.setItem('buyerCart', newTotalItems.toString());
              this.pushItemToNavbar = 1;
              (<HTMLButtonElement>document.getElementById("acceptOfferButton")).disabled = true;
           });
        });
        */
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
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _services_request_service__WEBPACK_IMPORTED_MODULE_4__["RequestService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialog"]])
    ], BuyerComponent);
    return BuyerComponent;
}());

var AcceptOfferDialogComponent = /** @class */ (function () {
    function AcceptOfferDialogComponent() {
    }
    AcceptOfferDialogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'dialog-content-offer-accept',
            template: __webpack_require__(/*! ./dialog-content-offer-accept.html */ "./src/app/components/buyer/dialog-content-offer-accept.html"),
        })
    ], AcceptOfferDialogComponent);
    return AcceptOfferDialogComponent;
}());



/***/ }),

/***/ "./src/app/components/buyer/dialog-content-offer-accept.html":
/*!*******************************************************************!*\
  !*** ./src/app/components/buyer/dialog-content-offer-accept.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2 mat-dialog-title>Are you sure you want to accept this offer?</h2>\r\n<mat-dialog-content class=\"mat-typography\">\r\n  <h3>Accepting offer terms:</h3>\r\n  <p>Once the offer is accepted, it will be placed in your cart and follow through with the purchase must be completed. Failing to complete the transaction will result in a penalty.</p>\r\n</mat-dialog-content>\r\n<mat-dialog-actions>\r\n  <button mat-button mat-dialog-close>Cancel</button>\r\n  <button mat-button [mat-dialog-close]=\"true\" cdkFocusInitial>ACCEPT</button>\r\n</mat-dialog-actions>"

/***/ }),

/***/ "./src/app/components/buyer/make-request/make-request.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/components/buyer/make-request/make-request.component.css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = " body {\r\n  -webkit-touch-callout: none;\r\n  -webkit-text-size-adjust: none;\r\n  -webkit-user-select: node;\r\n  background-image: url('logistics2.jpg');\r\n  padding: 0;\r\n  background-repeat:no-repeat;\r\n  background-size:cover;\r\n  }\r\n\r\n  form{\r\n\r\n    width: 850px;\r\n    text-align: left;\r\n    margin: auto;\r\n    opacity: .90;\r\n\r\n\r\n  }\r\n\r\n  .form-control {\r\n    padding: 6px;\r\n\r\n    position: relative;\r\n\r\n  }\r\n\r\n  .btn {\r\n    width: 775px;\r\n    height: auto;\r\n    background-color: rgb(218, 64, 26);\r\n    color: white;\r\n    font-weight: bold;\r\n}\r\n\r\n  /* Add a hover effect for buttons */\r\n\r\n  .btn:hover {\r\n  opacity:.75;\r\n  background-color: darkgreen;\r\n}\r\n\r\n  #container {\r\n    min-height: 100%;\r\n    margin-bottom: -330px;\r\n    position: relative;\r\n  }\r\n\r\n  #footer {\r\n    height: 330px;\r\n    position: relative;\r\n  }\r\n\r\n  .clearfooter {\r\n    height: 330px;\r\n    clear: both;\r\n  }\r\n\r\n  .clearheader {\r\n    height: 84px;\r\n    clear: both;\r\n  }\r\n\r\n  :host ::ng-deep .ck-editor__editable {\r\n    min-height: 200px;\r\n  }\r\n\r\n  input[type=\"checkbox\"] {\r\n    display: none;\r\n  }\r\n\r\n  #otis li {\r\n    list-style-type: none;\r\n  }\r\n\r\n  label {\r\n    border: 0px solid #fff;\r\n    padding: 0px;\r\n    display: block;\r\n    position: relative;\r\n    margin: 0px;\r\n    cursor: pointer;\r\n    -webkit-touch-callout: none;\r\n    -webkit-user-select: none;\r\n    -moz-user-select: none;\r\n    -ms-user-select: none;\r\n    user-select: none;\r\n    text-align: center;\r\n  }\r\n\r\n  label::before {\r\n    text-align: center;\r\n    background-color: white;\r\n    color: white;\r\n    content: \" \";\r\n    border-radius: 50%;\r\n    position: relative;\r\n    top: -1px;\r\n    left: -1px;\r\n    width: 51px;\r\n    height: 51px;\r\n    line-height: 28px;\r\n    transition-duration: 0.4s;\r\n    -webkit-transform: scale(0);\r\n            transform: scale(0);\r\n  }\r\n\r\n  label img {\r\n    height: 50px;\r\n    width: 50px;\r\n    transition-duration: 0.2s;\r\n    -webkit-transform-origin: 50% 50%;\r\n            transform-origin: 50% 50%;\r\n    border-radius: 50%;\r\n  }\r\n\r\n  :checked+label {\r\n    border-color: #ddd;\r\n  }\r\n\r\n  :checked+label::before {\r\n    background-color: #90ee90;\r\n    content: \" \";\r\n    color: black;\r\n    border-radius: 50%;\r\n    position: relative;\r\n    top: -1px;\r\n    left: -1px;\r\n    width: 51px;\r\n    height: 51px;\r\n    -webkit-transform: scale(1);\r\n            transform: scale(1);\r\n  }\r\n\r\n  :checked+label img {\r\n    -webkit-transform: scale(0.8);\r\n            transform: scale(0.8);\r\n    box-shadow: 0 0 50px #90ee90;\r\n    z-index: -1;\r\n  }\r\n\r\n  .checkbox-grid li {\r\n    display: block;\r\n    float: left;\r\n    width: 25%;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9idXllci9tYWtlLXJlcXVlc3QvbWFrZS1yZXF1ZXN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkNBQUM7RUFDQywyQkFBMkI7RUFDM0IsOEJBQThCO0VBQzlCLHlCQUF5QjtFQUN6Qix1Q0FBK0Q7RUFDL0QsVUFBVTtFQUNWLDJCQUEyQjtFQUMzQixxQkFBcUI7RUFDckI7O0VBRUE7O0lBRUUsWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixZQUFZO0lBQ1osWUFBWTs7O0VBR2Q7O0VBQ0E7SUFDRSxZQUFZOztJQUVaLGtCQUFrQjs7RUFFcEI7O0VBQ0E7SUFDRSxZQUFZO0lBQ1osWUFBWTtJQUNaLGtDQUFrQztJQUNsQyxZQUFZO0lBQ1osaUJBQWlCO0FBQ3JCOztFQUVBLG1DQUFtQzs7RUFDbkM7RUFDRSxXQUFXO0VBQ1gsMkJBQTJCO0FBQzdCOztFQUlFO0lBQ0UsZ0JBQWdCO0lBQ2hCLHFCQUFxQjtJQUNyQixrQkFBa0I7RUFDcEI7O0VBRUE7SUFDRSxhQUFhO0lBQ2Isa0JBQWtCO0VBQ3BCOztFQUVBO0lBQ0UsYUFBYTtJQUNiLFdBQVc7RUFDYjs7RUFFQTtJQUNFLFlBQVk7SUFDWixXQUFXO0VBQ2I7O0VBRUE7SUFDRSxpQkFBaUI7RUFDbkI7O0VBR0E7SUFDRSxhQUFhO0VBQ2Y7O0VBQ0E7SUFDRSxxQkFBcUI7RUFDdkI7O0VBQ0E7SUFDRSxzQkFBc0I7SUFDdEIsWUFBWTtJQUNaLGNBQWM7SUFDZCxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLGVBQWU7SUFDZiwyQkFBMkI7SUFDM0IseUJBQXlCO0lBRXpCLHNCQUFzQjtJQUN0QixxQkFBcUI7SUFDckIsaUJBQWlCO0lBQ2pCLGtCQUFrQjtFQUNwQjs7RUFFQTtJQUNFLGtCQUFrQjtJQUNsQix1QkFBdUI7SUFDdkIsWUFBWTtJQUNaLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCxVQUFVO0lBQ1YsV0FBVztJQUNYLFlBQVk7SUFDWixpQkFBaUI7SUFDakIseUJBQXlCO0lBQ3pCLDJCQUFtQjtZQUFuQixtQkFBbUI7RUFDckI7O0VBRUE7SUFDRSxZQUFZO0lBQ1osV0FBVztJQUNYLHlCQUF5QjtJQUN6QixpQ0FBeUI7WUFBekIseUJBQXlCO0lBQ3pCLGtCQUFrQjtFQUNwQjs7RUFFQTtJQUNFLGtCQUFrQjtFQUNwQjs7RUFFQTtJQUNFLHlCQUF5QjtJQUN6QixZQUFZO0lBQ1osWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsU0FBUztJQUNULFVBQVU7SUFDVixXQUFXO0lBQ1gsWUFBWTtJQUNaLDJCQUFtQjtZQUFuQixtQkFBbUI7RUFDckI7O0VBRUE7SUFDRSw2QkFBcUI7WUFBckIscUJBQXFCO0lBQ3JCLDRCQUE0QjtJQUM1QixXQUFXO0VBQ2I7O0VBRUE7SUFDRSxjQUFjO0lBQ2QsV0FBVztJQUNYLFVBQVU7QUFDZCIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYnV5ZXIvbWFrZS1yZXF1ZXN0L21ha2UtcmVxdWVzdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiIGJvZHkge1xyXG4gIC13ZWJraXQtdG91Y2gtY2FsbG91dDogbm9uZTtcclxuICAtd2Via2l0LXRleHQtc2l6ZS1hZGp1c3Q6IG5vbmU7XHJcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9kZTtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vLi4vLi4vLi4vLi4vc3JjL2Fzc2V0cy9sb2dpc3RpY3MyLmpwZyk7XHJcbiAgcGFkZGluZzogMDtcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDpuby1yZXBlYXQ7XHJcbiAgYmFja2dyb3VuZC1zaXplOmNvdmVyO1xyXG4gIH1cclxuXHJcbiAgZm9ybXtcclxuXHJcbiAgICB3aWR0aDogODUwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgb3BhY2l0eTogLjkwO1xyXG5cclxuXHJcbiAgfVxyXG4gIC5mb3JtLWNvbnRyb2wge1xyXG4gICAgcGFkZGluZzogNnB4O1xyXG5cclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHJcbiAgfVxyXG4gIC5idG4ge1xyXG4gICAgd2lkdGg6IDc3NXB4O1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIxOCwgNjQsIDI2KTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG4vKiBBZGQgYSBob3ZlciBlZmZlY3QgZm9yIGJ1dHRvbnMgKi9cclxuLmJ0bjpob3ZlciB7XHJcbiAgb3BhY2l0eTouNzU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogZGFya2dyZWVuO1xyXG59XHJcblxyXG5cclxuXHJcbiAgI2NvbnRhaW5lciB7XHJcbiAgICBtaW4taGVpZ2h0OiAxMDAlO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogLTMzMHB4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIH1cclxuXHJcbiAgI2Zvb3RlciB7XHJcbiAgICBoZWlnaHQ6IDMzMHB4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIH1cclxuXHJcbiAgLmNsZWFyZm9vdGVyIHtcclxuICAgIGhlaWdodDogMzMwcHg7XHJcbiAgICBjbGVhcjogYm90aDtcclxuICB9XHJcblxyXG4gIC5jbGVhcmhlYWRlciB7XHJcbiAgICBoZWlnaHQ6IDg0cHg7XHJcbiAgICBjbGVhcjogYm90aDtcclxuICB9XHJcblxyXG4gIDpob3N0IDo6bmctZGVlcCAuY2stZWRpdG9yX19lZGl0YWJsZSB7XHJcbiAgICBtaW4taGVpZ2h0OiAyMDBweDtcclxuICB9XHJcblxyXG5cclxuICBpbnB1dFt0eXBlPVwiY2hlY2tib3hcIl0ge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcbiAgI290aXMgbGkge1xyXG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xyXG4gIH1cclxuICBsYWJlbCB7XHJcbiAgICBib3JkZXI6IDBweCBzb2xpZCAjZmZmO1xyXG4gICAgcGFkZGluZzogMHB4O1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBtYXJnaW46IDBweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIC13ZWJraXQtdG91Y2gtY2FsbG91dDogbm9uZTtcclxuICAgIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgICAta2h0bWwtdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xyXG4gICAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xyXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG5cclxuICBsYWJlbDo6YmVmb3JlIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgY29udGVudDogXCIgXCI7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB0b3A6IC0xcHg7XHJcbiAgICBsZWZ0OiAtMXB4O1xyXG4gICAgd2lkdGg6IDUxcHg7XHJcbiAgICBoZWlnaHQ6IDUxcHg7XHJcbiAgICBsaW5lLWhlaWdodDogMjhweDtcclxuICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDAuNHM7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDApO1xyXG4gIH1cclxuXHJcbiAgbGFiZWwgaW1nIHtcclxuICAgIGhlaWdodDogNTBweDtcclxuICAgIHdpZHRoOiA1MHB4O1xyXG4gICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC4ycztcclxuICAgIHRyYW5zZm9ybS1vcmlnaW46IDUwJSA1MCU7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgfVxyXG5cclxuICA6Y2hlY2tlZCtsYWJlbCB7XHJcbiAgICBib3JkZXItY29sb3I6ICNkZGQ7XHJcbiAgfVxyXG5cclxuICA6Y2hlY2tlZCtsYWJlbDo6YmVmb3JlIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM5MGVlOTA7XHJcbiAgICBjb250ZW50OiBcIiBcIjtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHRvcDogLTFweDtcclxuICAgIGxlZnQ6IC0xcHg7XHJcbiAgICB3aWR0aDogNTFweDtcclxuICAgIGhlaWdodDogNTFweDtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XHJcbiAgfVxyXG5cclxuICA6Y2hlY2tlZCtsYWJlbCBpbWcge1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjgpO1xyXG4gICAgYm94LXNoYWRvdzogMCAwIDUwcHggIzkwZWU5MDtcclxuICAgIHotaW5kZXg6IC0xO1xyXG4gIH1cclxuXHJcbiAgLmNoZWNrYm94LWdyaWQgbGkge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIHdpZHRoOiAyNSU7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/components/buyer/make-request/make-request.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/components/buyer/make-request/make-request.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-buyer-navbar></app-buyer-navbar>\r\n\r\n<div class=\"clearheader\"></div>\r\n\r\n<!--Bryan Vu contributed to much of the buyer product request form,\r\nincluding the fields and labels.\r\n-->\r\n\r\n<body>\r\n<form (submit)=\"onRequestSubmit()\">\r\n  <div class=\"container-fluid\">\r\n\r\n    &nbsp;\r\n    <div class=\"card\">\r\n      <div class=\"card-body\">\r\n          <h1>Submit Product Request</h1><hr>\r\n        <div class=\"form-group row\">\r\n          <div class=\"col-sm-12\">\r\n            <input class=\"form-control mr-sm-2\" type=\"text\" [(ngModel)]=\"title\" name=\"title\" value=\"\" placeholder=\"Request Title\">\r\n          </div>\r\n        </div>\r\n        <label class=\"col-sm-12\">Which category does your request fall under:</label>\r\n        <div class=\"form-group row\">\r\n            <ul *ngFor=\"let code of codes\" id=\"otis\">\r\n              <li>\r\n              <input type=\"checkbox\" name=\"code\" value={{code.code}} id={{code.code}} (change)=\"onCheckboxChange(code,$event)\"/>\r\n              <label id=\"piclabel\" for={{code.code}}><img src={{code.image}} /></label>\r\n              <label id=\"piclabel\">{{code.name}}</label>\r\n            </li>\r\n          </ul>\r\n        </div>\r\n        <div class=\"form-group row\">\r\n          <div class=\"col-sm-12\">\r\n            <ckeditor [editor]=\"Editor\" [(ngModel)]=\"description\" name=\"description\" placeholder=\"product discription...\"></ckeditor>\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group row\">\r\n          <div class=\"col-sm-10\">\r\n            <br>\r\n            <select class=\"dropdown\" id=\"selectDeadline\" (change)=\"onChange($event)\" >\r\n              <option>Select deadline...</option>\r\n              <option value=\"2days\">2 days from today</option>\r\n              <option value=\"5days\">5 days from today</option>\r\n              <option value=\"1week\">1 week from today</option>\r\n            </select>\r\n          </div>\r\n        </div>\r\n        <hr>\r\n        <div class=\"form-group row\">\r\n          <div class=\"col-sm-12\" style=\"text-align: right;\">\r\n            <button type=\"submit\" class=\"btn-block btn-primary\">{{buttonText}}</button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"clearfooter\"></div>\r\n  </div>\r\n</form>\r\n</body>\r\n<!--\r\n<html>\r\n <head>\r\n  <title>Webslesson Tutorial | Search HTML Table Data by using JQuery</title>\r\n  <script src=\"https://ajax.googleapis.com/ajax/libs/jquery/3.1.0/jquery.min.js\"></script>\r\n  <link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css\" />\r\n  <script src=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js\"></script>\r\n  <style>\r\n  #result {\r\n   position: absolute;\r\n   width: 100%;\r\n   max-width:870px;\r\n   cursor: pointer;\r\n   overflow-y: auto;\r\n   max-height: 400px;\r\n   box-sizing: border-box;\r\n   z-index: 1001;\r\n  }\r\n  .link-class:hover{\r\n   background-color:#f1f1f1;\r\n  }\r\n  </style>\r\n </head>\r\n <body>\r\n  <br /><br />\r\n  <div class=\"container\" style=\"width:900px;\">\r\n   <h2 align=\"center\">JSON Live Data Search using Ajax JQuery</h2>\r\n   <h3 align=\"center\">Employee Data</h3>\r\n   <br /><br />\r\n   <div align=\"center\">\r\n    <input type=\"text\" name=\"search\" id=\"search\" placeholder=\"Search Employee Details\" class=\"form-control\" />\r\n   </div>\r\n   <ul class=\"list-group\" id=\"result\"></ul>\r\n   <br />\r\n  </div>\r\n </body>\r\n</html>\r\n<script>\r\n\r\n$(document).ready(function(){\r\n  const Http = new XMLHttpRequest();\r\n  const url='codes/getCodes';\r\n  Http.open(\"GET\", url);\r\n  Http.send();\r\n  Http.onreadystatechange=(e)=>{\r\n    console.log(Http.responseText)\r\n $.ajaxSetup({ cache: false });\r\n $('#search').keyup(function(){\r\n  $('#result').html('');\r\n  $('#state').val('');\r\n  var searchField = $('#search').val();\r\n  var expression = new RegExp(searchField, \"i\");\r\n  var file = Http.responseText;\r\n  $.getJSON('file', function(data) {\r\n   $.each(data, function(key, value){\r\n    if (value.code_description.search(expression) != -1)\r\n    {\r\n     $('#result').append('<li class=\"list-group-item link-class\">'+value.code_description+' | <span class=\"text-muted\">'+value.code_number+'</span></li>');\r\n    }\r\n   });\r\n  });\r\n });\r\n}\r\n $('#result').on('click', 'li', function() {\r\n  var click_text = $(this).text().split('|');\r\n  $('#search').val($.trim(click_text[0]));\r\n  $(\"#result\").html('');\r\n });\r\n});\r\n</script>\r\n-->\r\n"

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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var angular_notifier__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular-notifier */ "./node_modules/angular-notifier/esm5/angular-notifier.js");
/* harmony import */ var _services_buyer_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/buyer.service */ "./src/app/services/buyer.service.ts");
/* harmony import */ var _ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ckeditor/ckeditor5-build-classic */ "./node_modules/@ckeditor/ckeditor5-build-classic/build/ckeditor.js");
/* harmony import */ var _ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_4__);
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





var DefaultImageIcon = "https://raw.githubusercontent.com/ronjonsilver/MEANstackPractice/master/images.png";
var MakeRequestComponent = /** @class */ (function () {
    function MakeRequestComponent(buyerService, notifierService, router) {
        this.buyerService = buyerService;
        this.notifierService = notifierService;
        this.router = router;
        this.Editor = _ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_4__;
        // Temp codes for MVP - Kurgan
        this.codes = [
            { code: 78965422, name: 'Jewelry', image: DefaultImageIcon, checked: false },
            { code: 78965423, name: 'Necklaces (Jewelry)', image: DefaultImageIcon, checked: false },
            { code: 78965424, name: 'Rings (Jewelry)', image: DefaultImageIcon, checked: false },
            { code: 78965425, name: 'Earrings (Jewelry)', image: DefaultImageIcon, checked: false },
            { code: 68977451, name: 'Dolls', image: DefaultImageIcon, checked: false },
            { code: 67887941, name: 'Sculptures', image: DefaultImageIcon, checked: false },
            { code: 62145331, name: 'Scarves', image: DefaultImageIcon, checked: false },
            { code: 54887921, name: 'Blankets', image: DefaultImageIcon, checked: false },
            { code: 52871151, name: 'Socks', image: DefaultImageIcon, checked: false },
            { code: 50360051, name: 'Pencils', image: DefaultImageIcon, checked: false },
            { code: 49605401, name: 'Painting', image: DefaultImageIcon, checked: false },
            { code: 49605402, name: 'Oil (Painting)', image: DefaultImageIcon, checked: false },
            { code: 49605403, name: 'Watercolor (Painting)', image: DefaultImageIcon, checked: false },
            { code: 49605404, name: 'Acrlyic (Painting)', image: DefaultImageIcon, checked: false }
        ];
        this.description = 'Enter description of desired product';
        this.buttonText = 'Submit Your Request to Sellers on Requiren';
        this.notifier = notifierService;
    }
    MakeRequestComponent.prototype.onChange = function (event) {
        if (event.target.value === '2days') {
            this.deadline = new Date();
            this.deadline.setDate(this.deadline.getDate() + 2);
        }
        if (event.target.value === '5days') {
            this.deadline = new Date();
            this.deadline.setDate(this.deadline.getDate() + 5);
        }
        if (event.target.value === '1week') {
            this.deadline = new Date();
            this.deadline.setDate(this.deadline.getDate() + 7);
        }
    };
    MakeRequestComponent.prototype.ngOnInit = function () {
        this.submitLabels = [];
        this.codeArray = [];
    };
    MakeRequestComponent.prototype.labelButton = function () {
        var btnTxt = 'Submit Your Request to ';
        var slsize = this.submitLabels.length;
        //console.log(this.submitLabels[0]);
        for (var n = 0; n < slsize; n++) {
            if (slsize <= 3) {
                btnTxt = btnTxt + this.submitLabels[n];
                if (n < (slsize - 1)) {
                    btnTxt = btnTxt + ", ";
                }
                else {
                    btnTxt = btnTxt + " ";
                }
            }
            else {
                if (n < 2) {
                    btnTxt = btnTxt + this.submitLabels[n] + ", ";
                }
                if (n == 2) {
                    btnTxt = btnTxt + this.submitLabels[n] + " ";
                }
            }
        }
        var rem = slsize - 3;
        var remd = rem.toString();
        if (slsize > 3) {
            btnTxt = btnTxt + "(+" + remd + " more) ";
        }
        this.buttonText = btnTxt + "Sellers on Requiren";
    };
    MakeRequestComponent.prototype.onCheckboxChange = function (option, event) {
        if (event.target.checked) {
            this.codeArray.push(option.code);
            this.submitLabels.push(option.name);
            this.labelButton();
        }
        else {
            for (var i = 0; i < this.codes.length; i++) {
                if (this.codeArray[i] == option.code) {
                    this.codeArray.splice(i, 1);
                    this.submitLabels.splice(i, 1);
                    this.labelButton();
                }
            }
        }
    };
    // Request Submission
    MakeRequestComponent.prototype.onRequestSubmit = function () {
        var _this = this;
        console.log(this.title);
        if (typeof this.title === 'undefined') {
            window.scrollTo(1, 1);
            return this.notifier.notify('error', 'Please input a title.');
        }
        if (this.codeArray.length <= 0) {
            return this.notifier.notify('error', 'Please select a catagory.');
        }
        if (this.description === 'Enter description of desired product') {
            return this.notifier.notify('error', 'Please input a description.');
        }
        if (!this.deadline) {
            return this.notifier.notify('error', 'Please select a deadline.');
        }
        window.scrollTo(1, 1);
        // Request Generated JSON
        var request = {
            title: this.title,
            code: this.codeArray,
            description: this.description,
            deadline: this.deadline
        };
        console.log(this.codeArray);
        // Register Request
        this.buyerService.postBuyerRequest(request).subscribe(function (data) {
            if (data.success) {
                _this.notifier.notify('success', 'Your Request was submitted!');
                _this.router.navigate(['/buyer']);
            }
            else {
                _this.notifier.notify('error', data.msg);
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
            angular_notifier__WEBPACK_IMPORTED_MODULE_2__["NotifierService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
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

module.exports = ".footer-dark {\r\n    padding: 50px 0;\r\n    color: #f0f9ff;\r\n    background-color: #282d32;\r\n    position: relative;\r\n    bottom: 0px;\r\n    width: 100%;\r\n  }\r\n  \r\n  footer {\r\n    display: block;\r\n  }\r\n  \r\n  .container {\r\n    width: 100%;\r\n    padding-right: 15px;\r\n    padding-left: 15px;\r\n    margin-right: auto;\r\n    margin-left: auto;\r\n  }\r\n  \r\n  .row {\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    margin-right: -15px;\r\n    margin-left: -15px;\r\n  }\r\n  \r\n  .col, .col-1, .col-10, .col-11, .col-12, .col-2, .col-3, .col-4, .col-5, .col-6, .col-7, .col-8, .col-9, .col-auto, .col-lg, .col-lg-1, .col-lg-10, .col-lg-11, .col-lg-12, .col-lg-2, .col-lg-3, .col-lg-4, .col-lg-5, .col-lg-6, .col-lg-7, .col-lg-8, .col-lg-9, .col-lg-auto, .col-md, .col-md-1, .col-md-10, .col-md-11, .col-md-12, .col-md-2, .col-md-3, .col-md-4, .col-md-5, .col-md-6, .col-md-7, .col-md-8, .col-md-9, .col-md-auto, .col-sm, .col-sm-1, .col-sm-10, .col-sm-11, .col-sm-12, .col-sm-2, .col-sm-3, .col-sm-4, .col-sm-5, .col-sm-6, .col-sm-7, .col-sm-8, .col-sm-9, .col-sm-auto, .col-xl, .col-xl-1, .col-xl-10, .col-xl-11, .col-xl-12, .col-xl-2, .col-xl-3, .col-xl-4, .col-xl-5, .col-xl-6, .col-xl-7, .col-xl-8, .col-xl-9, .col-xl-auto {\r\n    position: relative;\r\n    width: 100%;\r\n    padding-right: 15px;\r\n    padding-left: 15px;\r\n  }\r\n  \r\n  .footer-dark h3 {\r\n    margin-top: 0;\r\n    margin-bottom: 12px;\r\n    font-weight: bold;\r\n    font-size: 16px;\r\n  }\r\n  \r\n  .h3, h3 {\r\n    font-size: 1.75rem;\r\n  }\r\n  \r\n  .h1, .h2, .h3, .h4, .h5, .h6, h1, h2, h3, h4, h5, h6 {\r\n    margin-bottom: .5rem;\r\n    font-family: inherit;\r\n    font-weight: 500;\r\n    line-height: 1.2;\r\n    color: inherit;\r\n  }\r\n  \r\n  h1, h2, h3, h4, h5, h6 {\r\n    margin-top: 0;\r\n    margin-bottom: .5rem;\r\n  }\r\n  \r\n  .footer-dark ul {\r\n    padding: 0;\r\n    list-style: none;\r\n    line-height: 1.6;\r\n    font-size: 14px;\r\n    margin-bottom: 0;\r\n  }\r\n  \r\n  ul {\r\n    list-style-type: none;\r\n  }\r\n  \r\n  dl, ol, ul {\r\n    margin-top: 0;\r\n    margin-bottom: 1rem;\r\n  }\r\n  \r\n  .footer-dark ul a:hover {\r\n    opacity: 0.8;\r\n  }\r\n  \r\n  .footer-dark ul a {\r\n    color: inherit;\r\n    text-decoration: none;\r\n    opacity: 0.6;\r\n  }\r\n  \r\n  a:hover {\r\n    color: #0056b3;\r\n    text-decoration: underline;\r\n  }\r\n  \r\n  a {\r\n    color: #007bff;\r\n    text-decoration: none;\r\n    background-color: transparent;\r\n  }\r\n  \r\n  .footer-dark .item.text p {\r\n  opacity: 0.6;\r\n  margin-bottom: 0;\r\n}\r\n  \r\n  p {\r\n  margin-top: 0;\r\n  margin-bottom: 1rem;\r\n}\r\n  \r\n  .footer-dark {\r\n  padding: 50px 0;\r\n  color: #f0f9ff;\r\n  background-color: #282d32;\r\n  position: relative;\r\n  bottom: 0px;\r\n  width: 100%;\r\n}\r\n  \r\n  .footer-dark .copyright {\r\n    text-align: center;\r\n    padding-top: 50px;\r\n    opacity: 0.3;\r\n    font-size: 13px;\r\n    margin-bottom: 0;\r\n  }\r\n  \r\n  \r\n              \r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxlQUFlO0lBQ2YsY0FBYztJQUNkLHlCQUF5QjtJQUN6QixrQkFBa0I7SUFDbEIsV0FBVztJQUNYLFdBQVc7RUFDYjs7RUFFQTtJQUNFLGNBQWM7RUFDaEI7O0VBRUE7SUFDRSxXQUFXO0lBQ1gsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsaUJBQWlCO0VBQ25COztFQUVBO0lBRUUsYUFBYTtJQUViLGVBQWU7SUFDZixtQkFBbUI7SUFDbkIsa0JBQWtCO0VBQ3BCOztFQUVBO0lBQ0Usa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxtQkFBbUI7SUFDbkIsa0JBQWtCO0VBQ3BCOztFQUVBO0lBQ0UsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixpQkFBaUI7SUFDakIsZUFBZTtFQUNqQjs7RUFFQTtJQUNFLGtCQUFrQjtFQUNwQjs7RUFFQTtJQUNFLG9CQUFvQjtJQUNwQixvQkFBb0I7SUFDcEIsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQixjQUFjO0VBQ2hCOztFQUVBO0lBQ0UsYUFBYTtJQUNiLG9CQUFvQjtFQUN0Qjs7RUFFQTtJQUNFLFVBQVU7SUFDVixnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZixnQkFBZ0I7RUFDbEI7O0VBRUE7SUFDRSxxQkFBcUI7RUFDdkI7O0VBRUE7SUFDRSxhQUFhO0lBQ2IsbUJBQW1CO0VBQ3JCOztFQUVBO0lBQ0UsWUFBWTtFQUNkOztFQUVBO0lBQ0UsY0FBYztJQUNkLHFCQUFxQjtJQUNyQixZQUFZO0VBQ2Q7O0VBRUE7SUFDRSxjQUFjO0lBQ2QsMEJBQTBCO0VBQzVCOztFQUVBO0lBQ0UsY0FBYztJQUNkLHFCQUFxQjtJQUNyQiw2QkFBNkI7RUFDL0I7O0VBRUY7RUFDRSxZQUFZO0VBQ1osZ0JBQWdCO0FBQ2xCOztFQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtBQUNyQjs7RUFFQTtFQUNFLGVBQWU7RUFDZixjQUFjO0VBQ2QseUJBQXlCO0VBQ3pCLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsV0FBVztBQUNiOztFQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixZQUFZO0lBQ1osZUFBZTtJQUNmLGdCQUFnQjtFQUNsQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvb3Rlci1kYXJrIHtcclxuICAgIHBhZGRpbmc6IDUwcHggMDtcclxuICAgIGNvbG9yOiAjZjBmOWZmO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzI4MmQzMjtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGJvdHRvbTogMHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG4gIFxyXG4gIGZvb3RlciB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICB9XHJcbiAgXHJcbiAgLmNvbnRhaW5lciB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDE1cHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDE1cHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICB9XHJcbiAgXHJcbiAgLnJvdyB7XHJcbiAgICBkaXNwbGF5OiAtbXMtZmxleGJveDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAtbXMtZmxleC13cmFwOiB3cmFwO1xyXG4gICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAtMTVweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAtMTVweDtcclxuICB9XHJcbiAgXHJcbiAgLmNvbCwgLmNvbC0xLCAuY29sLTEwLCAuY29sLTExLCAuY29sLTEyLCAuY29sLTIsIC5jb2wtMywgLmNvbC00LCAuY29sLTUsIC5jb2wtNiwgLmNvbC03LCAuY29sLTgsIC5jb2wtOSwgLmNvbC1hdXRvLCAuY29sLWxnLCAuY29sLWxnLTEsIC5jb2wtbGctMTAsIC5jb2wtbGctMTEsIC5jb2wtbGctMTIsIC5jb2wtbGctMiwgLmNvbC1sZy0zLCAuY29sLWxnLTQsIC5jb2wtbGctNSwgLmNvbC1sZy02LCAuY29sLWxnLTcsIC5jb2wtbGctOCwgLmNvbC1sZy05LCAuY29sLWxnLWF1dG8sIC5jb2wtbWQsIC5jb2wtbWQtMSwgLmNvbC1tZC0xMCwgLmNvbC1tZC0xMSwgLmNvbC1tZC0xMiwgLmNvbC1tZC0yLCAuY29sLW1kLTMsIC5jb2wtbWQtNCwgLmNvbC1tZC01LCAuY29sLW1kLTYsIC5jb2wtbWQtNywgLmNvbC1tZC04LCAuY29sLW1kLTksIC5jb2wtbWQtYXV0bywgLmNvbC1zbSwgLmNvbC1zbS0xLCAuY29sLXNtLTEwLCAuY29sLXNtLTExLCAuY29sLXNtLTEyLCAuY29sLXNtLTIsIC5jb2wtc20tMywgLmNvbC1zbS00LCAuY29sLXNtLTUsIC5jb2wtc20tNiwgLmNvbC1zbS03LCAuY29sLXNtLTgsIC5jb2wtc20tOSwgLmNvbC1zbS1hdXRvLCAuY29sLXhsLCAuY29sLXhsLTEsIC5jb2wteGwtMTAsIC5jb2wteGwtMTEsIC5jb2wteGwtMTIsIC5jb2wteGwtMiwgLmNvbC14bC0zLCAuY29sLXhsLTQsIC5jb2wteGwtNSwgLmNvbC14bC02LCAuY29sLXhsLTcsIC5jb2wteGwtOCwgLmNvbC14bC05LCAuY29sLXhsLWF1dG8ge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxNXB4O1xyXG4gIH1cclxuICBcclxuICAuZm9vdGVyLWRhcmsgaDMge1xyXG4gICAgbWFyZ2luLXRvcDogMDtcclxuICAgIG1hcmdpbi1ib3R0b206IDEycHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICB9XHJcbiAgXHJcbiAgLmgzLCBoMyB7XHJcbiAgICBmb250LXNpemU6IDEuNzVyZW07XHJcbiAgfVxyXG4gIFxyXG4gIC5oMSwgLmgyLCAuaDMsIC5oNCwgLmg1LCAuaDYsIGgxLCBoMiwgaDMsIGg0LCBoNSwgaDYge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogLjVyZW07XHJcbiAgICBmb250LWZhbWlseTogaW5oZXJpdDtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBsaW5lLWhlaWdodDogMS4yO1xyXG4gICAgY29sb3I6IGluaGVyaXQ7XHJcbiAgfVxyXG4gIFxyXG4gIGgxLCBoMiwgaDMsIGg0LCBoNSwgaDYge1xyXG4gICAgbWFyZ2luLXRvcDogMDtcclxuICAgIG1hcmdpbi1ib3R0b206IC41cmVtO1xyXG4gIH1cclxuICBcclxuICAuZm9vdGVyLWRhcmsgdWwge1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICBsaW5lLWhlaWdodDogMS42O1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICB9XHJcbiAgXHJcbiAgdWwge1xyXG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xyXG4gIH1cclxuICBcclxuICBkbCwgb2wsIHVsIHtcclxuICAgIG1hcmdpbi10b3A6IDA7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xyXG4gIH1cclxuICBcclxuICAuZm9vdGVyLWRhcmsgdWwgYTpob3ZlciB7XHJcbiAgICBvcGFjaXR5OiAwLjg7XHJcbiAgfVxyXG4gIFxyXG4gIC5mb290ZXItZGFyayB1bCBhIHtcclxuICAgIGNvbG9yOiBpbmhlcml0O1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgb3BhY2l0eTogMC42O1xyXG4gIH1cclxuICBcclxuICBhOmhvdmVyIHtcclxuICAgIGNvbG9yOiAjMDA1NmIzO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbiAgfVxyXG4gIFxyXG4gIGEge1xyXG4gICAgY29sb3I6ICMwMDdiZmY7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICB9XHJcblxyXG4uZm9vdGVyLWRhcmsgLml0ZW0udGV4dCBwIHtcclxuICBvcGFjaXR5OiAwLjY7XHJcbiAgbWFyZ2luLWJvdHRvbTogMDtcclxufVxyXG5cclxucCB7XHJcbiAgbWFyZ2luLXRvcDogMDtcclxuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xyXG59XHJcblxyXG4uZm9vdGVyLWRhcmsge1xyXG4gIHBhZGRpbmc6IDUwcHggMDtcclxuICBjb2xvcjogI2YwZjlmZjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjgyZDMyO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBib3R0b206IDBweDtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLmZvb3Rlci1kYXJrIC5jb3B5cmlnaHQge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgcGFkZGluZy10b3A6IDUwcHg7XHJcbiAgICBvcGFjaXR5OiAwLjM7XHJcbiAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gIH1cclxuICBcclxuICBcclxuICAgICAgICAgICAgICAiXX0= */"

/***/ }),

/***/ "./src/app/components/footer/footer.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/footer/footer.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Footer -->\r\n\r\n<div class=\"footer-dark\">\r\n        <footer>\r\n                <div class=\"container\">\r\n                        <div class=\"row\">\r\n                                <div class=\"col-sm-6 col-md-3 item\">\r\n                                        <h3>Company</h3>\r\n                                        <ul>\r\n                                                <li><a href=\"#\">About</a></li>\r\n                                                <li><a href=\"#\">Privacy Notice</a></li>\r\n                                                <li><a href=\"#\">Terms of Service</a></li>\r\n                                        </ul>\r\n                                </div>\r\n                                <div class=\"col-sm-6 col-md-3 item\">\r\n                                        <h3>Support</h3>\r\n                                        <ul>\r\n                                                <li><a href=\"#\">How it works</a></li>\r\n                                                <li><a href=\"#\">Contact us</a></li>\r\n                                                <li><a href=\"#\">FAQ</a></li>\r\n                                        </ul>\r\n                                </div>\r\n                                <div class=\"col-md-6 item text\">\r\n                                        <h3>Requiren</h3>\r\n                                        <p>Praesent sed lobortis mi. Suspendisse vel placerat ligula. Vivamus ac sem\r\n                                                lacus. Ut vehicula rhoncus elementum. Etiam quis tristique lectus.\r\n                                                Aliquam in arcu eget velit pulvinar dictum vel in justo.</p>\r\n                                </div>\r\n                        </div>\r\n                        <p class=\"copyright\">Requiren.com © 2019</p>\r\n                </div>\r\n        </footer>\r\n</div>\r\n<!-- Footer -->"

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

module.exports = "\r\n\r\nbody , html {\r\n  font-family: 'Lato', 'Helvetica Neue', Helvetica, Arial, sans-serif;\r\n  margin: 0 100px 0 100px;\r\n  -webkit-touch-callout: none;\r\n  -webkit-text-size-adjust: none;\r\n  -webkit-user-select: node;\r\n  height: 100vh;\r\n  height: 100%;\r\n  overflow:hidden;\r\n}\r\n\r\n\r\n\r\n.container-fluid {\r\n  height: 800px;\r\n  min-height: 400px;\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n\r\n\r\n\r\n.steps{\r\n  background-color: rgba(47, 121, 124, 0.746);\r\n  height: 400px;\r\n  padding: 0;\r\n  margin-bottom: -50px;\r\n  box-shadow: 0px -8px 8px 2px rgba(0,0,0,0.2);\r\n  transition: 0.3s;\r\n  border-radius: 8px;\r\n  text-align: center;\r\n  color: white;\r\n  padding: 12px;\r\n\r\n}\r\n\r\n\r\n\r\n.row {\r\n  padding: 12px;\r\n}\r\n\r\n\r\n\r\n.steps:hover {\r\n  box-shadow: 0px -12px 12px 8px rgba(0,0,0,0.2);\r\n}\r\n\r\n\r\n\r\n.howitworks {\r\n  background-color: rgb(218, 214, 214);\r\n  height: 800px;\r\n  margin: 0;\r\n  padding: 25px;\r\n\r\n}\r\n\r\n\r\n\r\n.perks {\r\n\r\n  height: 800px;\r\n  margin: 0;\r\n  padding: 0;\r\n\r\n}\r\n\r\n\r\n\r\n.card {\r\n  display: flex;\r\n  flex-direction: column;\r\n  position: relative;\r\n  display: -ms-flexbox;\r\n  min-width: 400;\r\n  word-wrap: break-word;\r\n  min-height: 600px;\r\n  margin: 80px;\r\n  background-color: #fff;\r\n  background-clip: border-box;\r\n  overflow: hidden;\r\n  box-shadow: 0 8px 12px 0 rgba(0,0,0,0.2);\r\n  transition: 0.3s;\r\n}\r\n\r\n\r\n\r\n.card:hover {\r\n  box-shadow: 0 14px 30px 0 rgba(0,0,0,0.2);\r\n}\r\n\r\n\r\n\r\n.card-img-top {\r\n  min-height: 150px;\r\n  background-color: rgb(88, 84, 83);\r\n  margin: 0;\r\n  padding: 25px;\r\n  border: solid, 5px;\r\n  color: white;\r\n\r\n}\r\n\r\n\r\n\r\nul {\r\n  list-style-type: none;\r\n}\r\n\r\n\r\n\r\nh1,\r\nh2,\r\nh3,\r\nh4,\r\nh5,\r\nh6 {\r\n  font-family: 'Lato', 'Helvetica Neue', Helvetica, Arial, sans-serif;\r\n  font-weight: 700;\r\n}\r\n\r\n\r\n\r\n.mainheader {\r\n  font-size: 30px;\r\n  text-shadow: -1px -1px rgb(8, 107, 153), 1px 1px rgb(19, 101, 139), -3px 0 4px rgb(4, 5, 4);\r\n  font-family:\"Segoe print\", Arial, Helvetica, sans-serif;\r\n  color:rgb(255, 255, 255);\r\n  font-weight:bold;\r\n  text-align:center;\r\n  display:inline;\r\n  line-height:150px\r\n\r\n}\r\n\r\n\r\n\r\nheader.masthead {\r\n  position: relative;\r\n\r\n  padding-top: 8rem;\r\n  padding-bottom: 8rem;\r\n  background-color: #0a2846;\r\n}\r\n\r\n\r\n\r\nheader.masthead .overlay {\r\n  background-image: url('reqHome.jpg');\r\n  position: absolute;\r\n  background-size: cover;\r\n  background-repeat:no-repeat;\r\n  height: 100%;\r\n  width: 100%;\r\n  top: 0;\r\n  left: 0;\r\n\r\n\r\n}\r\n\r\n\r\n\r\nheader.masthead h1 {\r\n  font-size: 2rem;\r\n}\r\n\r\n\r\n\r\n@media (min-width: 768px) {\r\n  header.masthead {\r\n    padding-top: 12rem;\r\n    padding-bottom: 12rem;\r\n  }\r\n  header.masthead h1 {\r\n    font-size: 3rem;\r\n  }\r\n}\r\n\r\n\r\n\r\n.showcase .showcase-text {\r\n  padding: 3rem;\r\n}\r\n\r\n\r\n\r\n.showcase .showcase-img {\r\n  min-height: 30rem;\r\n  background-size: cover;\r\n}\r\n\r\n\r\n\r\n@media (min-width: 768px) {\r\n  .showcase .showcase-text {\r\n    padding: 7rem;\r\n  }\r\n}\r\n\r\n\r\n\r\n.features-icons {\r\n  padding-top: 7rem;\r\n  padding-bottom: 7rem;\r\n}\r\n\r\n\r\n\r\n.features-icons .features-icons-item {\r\n  max-width: 20rem;\r\n}\r\n\r\n\r\n\r\n.features-icons .features-icons-item .features-icons-icon {\r\n  height: 7rem;\r\n}\r\n\r\n\r\n\r\n.features-icons .features-icons-item .features-icons-icon i {\r\n  font-size: 4.5rem;\r\n}\r\n\r\n\r\n\r\n.features-icons .features-icons-item:hover .features-icons-icon i {\r\n  font-size: 5rem;\r\n}\r\n\r\n\r\n\r\n.call-to-action {\r\n  position: relative;\r\n  background-color: #343a40;\r\n\r\n  background-size: cover;\r\n  padding-top: 7rem;\r\n  padding-bottom: 7rem;\r\n}\r\n\r\n\r\n\r\n.call-to-action .overlay {\r\n  position: absolute;\r\n  background-color: #212529;\r\n  height: 100%;\r\n  width: 100%;\r\n  top: 0;\r\n  left: 0;\r\n  opacity: 0.3;\r\n}\r\n\r\n\r\n\r\nfooter.footer {\r\n  padding-top: 4rem;\r\n  padding-bottom: 4rem;\r\n}\r\n\r\n\r\n\r\n.item1 {\r\n  background-image: url('donatGex.jpg');\r\n}\r\n\r\n\r\n\r\n.item2 {\r\n  background-image: url('codeImage.jpg');\r\n}\r\n\r\n\r\n\r\n.item3 {\r\n  background-image: url('gexBusiness1.jpg');\r\n}\r\n\r\n\r\n\r\n.item4 {\r\n  background-image: url('mobile.jpg');\r\n}\r\n\r\n\r\n\r\n/*decorating register button */\r\n\r\n\r\n\r\n.btn {\r\n  border: none;\r\nbackground: #ce6605;\r\ncolor: #ffffff !important;\r\nfont-weight: 100;\r\npadding: 20px;\r\ntext-transform: uppercase;\r\nborder-radius: 6px;\r\ndisplay: inline-block;\r\n\r\n}\r\n\r\n\r\n\r\n.btn:hover {\r\n  color: #e2e9e1 !important;\r\nfont-weight: 700 !important;\r\nletter-spacing: 3px;\r\nbackground: rgb(107, 187, 107);\r\n-webkit-box-shadow: 0px 5px 40px -10px rgba(0,0,0,0.57);\r\n-moz-box-shadow: 0px 5px 40px -10px rgba(0,0,0,0.57);\r\ntransition: all 0.3s ease 0s;\r\n\r\n}\r\n\r\n\r\n\r\n.testimonials{\r\n  padding: 25px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ob21lL2hvbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUVBO0VBQ0UsbUVBQW1FO0VBQ25FLHVCQUF1QjtFQUN2QiwyQkFBMkI7RUFDM0IsOEJBQThCO0VBQzlCLHlCQUF5QjtFQUN6QixhQUFhO0VBQ2IsWUFBWTtFQUNaLGVBQWU7QUFDakI7Ozs7QUFJQTtFQUNFLGFBQWE7RUFDYixpQkFBaUI7RUFDakIsU0FBUztFQUNULFVBQVU7QUFDWjs7OztBQUNBO0VBQ0UsMkNBQTJDO0VBQzNDLGFBQWE7RUFDYixVQUFVO0VBQ1Ysb0JBQW9CO0VBQ3BCLDRDQUE0QztFQUM1QyxnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osYUFBYTs7QUFFZjs7OztBQUNBO0VBQ0UsYUFBYTtBQUNmOzs7O0FBRUE7RUFDRSw4Q0FBOEM7QUFDaEQ7Ozs7QUFDQTtFQUNFLG9DQUFvQztFQUNwQyxhQUFhO0VBQ2IsU0FBUztFQUNULGFBQWE7O0FBRWY7Ozs7QUFDQTs7RUFFRSxhQUFhO0VBQ2IsU0FBUztFQUNULFVBQVU7O0FBRVo7Ozs7QUFDQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsa0JBQWtCO0VBRWxCLG9CQUFvQjtFQUlwQixjQUFjO0VBQ2QscUJBQXFCO0VBQ3JCLGlCQUFpQjtFQUNqQixZQUFZO0VBQ1osc0JBQXNCO0VBQ3RCLDJCQUEyQjtFQUMzQixnQkFBZ0I7RUFDaEIsd0NBQXdDO0VBQ3hDLGdCQUFnQjtBQUNsQjs7OztBQUVBO0VBQ0UseUNBQXlDO0FBQzNDOzs7O0FBQ0E7RUFDRSxpQkFBaUI7RUFDakIsaUNBQWlDO0VBQ2pDLFNBQVM7RUFDVCxhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLFlBQVk7O0FBRWQ7Ozs7QUFFQTtFQUNFLHFCQUFxQjtBQUN2Qjs7OztBQUVBOzs7Ozs7RUFNRSxtRUFBbUU7RUFDbkUsZ0JBQWdCO0FBQ2xCOzs7O0FBQ0E7RUFDRSxlQUFlO0VBQ2YsMkZBQTJGO0VBQzNGLHVEQUF1RDtFQUN2RCx3QkFBd0I7RUFDeEIsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixjQUFjO0VBQ2Q7O0FBRUY7Ozs7QUFFQTtFQUNFLGtCQUFrQjs7RUFFbEIsaUJBQWlCO0VBQ2pCLG9CQUFvQjtFQUNwQix5QkFBeUI7QUFDM0I7Ozs7QUFFQTtFQUNFLG9DQUEyRDtFQUMzRCxrQkFBa0I7RUFDbEIsc0JBQXNCO0VBQ3RCLDJCQUEyQjtFQUMzQixZQUFZO0VBQ1osV0FBVztFQUNYLE1BQU07RUFDTixPQUFPOzs7QUFHVDs7OztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7OztBQUVBO0VBQ0U7SUFDRSxrQkFBa0I7SUFDbEIscUJBQXFCO0VBQ3ZCO0VBQ0E7SUFDRSxlQUFlO0VBQ2pCO0FBQ0Y7Ozs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7OztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLHNCQUFzQjtBQUN4Qjs7OztBQUVBO0VBQ0U7SUFDRSxhQUFhO0VBQ2Y7QUFDRjs7OztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLG9CQUFvQjtBQUN0Qjs7OztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOzs7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7Ozs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjs7OztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7OztBQUlBO0VBQ0Usa0JBQWtCO0VBQ2xCLHlCQUF5Qjs7RUFFekIsc0JBQXNCO0VBQ3RCLGlCQUFpQjtFQUNqQixvQkFBb0I7QUFDdEI7Ozs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQix5QkFBeUI7RUFDekIsWUFBWTtFQUNaLFdBQVc7RUFDWCxNQUFNO0VBQ04sT0FBTztFQUNQLFlBQVk7QUFDZDs7OztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLG9CQUFvQjtBQUN0Qjs7OztBQUVBO0VBQ0UscUNBQTREO0FBQzlEOzs7O0FBRUE7RUFDRSxzQ0FBNkQ7QUFDL0Q7Ozs7QUFFQTtFQUNFLHlDQUFnRTtBQUNsRTs7OztBQUVBO0VBQ0UsbUNBQTBEO0FBQzVEOzs7O0FBR0EsOEJBQThCOzs7O0FBRTlCO0VBQ0UsWUFBWTtBQUNkLG1CQUFtQjtBQUNuQix5QkFBeUI7QUFDekIsZ0JBQWdCO0FBQ2hCLGFBQWE7QUFDYix5QkFBeUI7QUFDekIsa0JBQWtCO0FBQ2xCLHFCQUFxQjs7QUFFckI7Ozs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQiwyQkFBMkI7QUFDM0IsbUJBQW1CO0FBQ25CLDhCQUE4QjtBQUM5Qix1REFBdUQ7QUFDdkQsb0RBQW9EO0FBQ3BELDRCQUE0Qjs7QUFFNUI7Ozs7QUFDQTtFQUNFLGFBQWE7QUFDZiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuXHJcbmJvZHkgLCBodG1sIHtcclxuICBmb250LWZhbWlseTogJ0xhdG8nLCAnSGVsdmV0aWNhIE5ldWUnLCBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmO1xyXG4gIG1hcmdpbjogMCAxMDBweCAwIDEwMHB4O1xyXG4gIC13ZWJraXQtdG91Y2gtY2FsbG91dDogbm9uZTtcclxuICAtd2Via2l0LXRleHQtc2l6ZS1hZGp1c3Q6IG5vbmU7XHJcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9kZTtcclxuICBoZWlnaHQ6IDEwMHZoO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBvdmVyZmxvdzpoaWRkZW47XHJcbn1cclxuXHJcblxyXG5cclxuLmNvbnRhaW5lci1mbHVpZCB7XHJcbiAgaGVpZ2h0OiA4MDBweDtcclxuICBtaW4taGVpZ2h0OiA0MDBweDtcclxuICBtYXJnaW46IDA7XHJcbiAgcGFkZGluZzogMDtcclxufVxyXG4uc3RlcHN7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg0NywgMTIxLCAxMjQsIDAuNzQ2KTtcclxuICBoZWlnaHQ6IDQwMHB4O1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgbWFyZ2luLWJvdHRvbTogLTUwcHg7XHJcbiAgYm94LXNoYWRvdzogMHB4IC04cHggOHB4IDJweCByZ2JhKDAsMCwwLDAuMik7XHJcbiAgdHJhbnNpdGlvbjogMC4zcztcclxuICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBwYWRkaW5nOiAxMnB4O1xyXG5cclxufVxyXG4ucm93IHtcclxuICBwYWRkaW5nOiAxMnB4O1xyXG59XHJcblxyXG4uc3RlcHM6aG92ZXIge1xyXG4gIGJveC1zaGFkb3c6IDBweCAtMTJweCAxMnB4IDhweCByZ2JhKDAsMCwwLDAuMik7XHJcbn1cclxuLmhvd2l0d29ya3Mge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMTgsIDIxNCwgMjE0KTtcclxuICBoZWlnaHQ6IDgwMHB4O1xyXG4gIG1hcmdpbjogMDtcclxuICBwYWRkaW5nOiAyNXB4O1xyXG5cclxufVxyXG4ucGVya3Mge1xyXG5cclxuICBoZWlnaHQ6IDgwMHB4O1xyXG4gIG1hcmdpbjogMDtcclxuICBwYWRkaW5nOiAwO1xyXG5cclxufVxyXG4uY2FyZCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcclxuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcclxuICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xyXG4gIC13ZWJraXQtYm94LWRpcmVjdGlvbjogbm9ybWFsO1xyXG4gIC1tcy1mbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIG1pbi13aWR0aDogNDAwO1xyXG4gIHdvcmQtd3JhcDogYnJlYWstd29yZDtcclxuICBtaW4taGVpZ2h0OiA2MDBweDtcclxuICBtYXJnaW46IDgwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICBiYWNrZ3JvdW5kLWNsaXA6IGJvcmRlci1ib3g7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBib3gtc2hhZG93OiAwIDhweCAxMnB4IDAgcmdiYSgwLDAsMCwwLjIpO1xyXG4gIHRyYW5zaXRpb246IDAuM3M7XHJcbn1cclxuXHJcbi5jYXJkOmhvdmVyIHtcclxuICBib3gtc2hhZG93OiAwIDE0cHggMzBweCAwIHJnYmEoMCwwLDAsMC4yKTtcclxufVxyXG4uY2FyZC1pbWctdG9wIHtcclxuICBtaW4taGVpZ2h0OiAxNTBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoODgsIDg0LCA4Myk7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIHBhZGRpbmc6IDI1cHg7XHJcbiAgYm9yZGVyOiBzb2xpZCwgNXB4O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuXHJcbn1cclxuXHJcbnVsIHtcclxuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XHJcbn1cclxuXHJcbmgxLFxyXG5oMixcclxuaDMsXHJcbmg0LFxyXG5oNSxcclxuaDYge1xyXG4gIGZvbnQtZmFtaWx5OiAnTGF0bycsICdIZWx2ZXRpY2EgTmV1ZScsIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWY7XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxufVxyXG4ubWFpbmhlYWRlciB7XHJcbiAgZm9udC1zaXplOiAzMHB4O1xyXG4gIHRleHQtc2hhZG93OiAtMXB4IC0xcHggcmdiKDgsIDEwNywgMTUzKSwgMXB4IDFweCByZ2IoMTksIDEwMSwgMTM5KSwgLTNweCAwIDRweCByZ2IoNCwgNSwgNCk7XHJcbiAgZm9udC1mYW1pbHk6XCJTZWdvZSBwcmludFwiLCBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xyXG4gIGNvbG9yOnJnYigyNTUsIDI1NSwgMjU1KTtcclxuICBmb250LXdlaWdodDpib2xkO1xyXG4gIHRleHQtYWxpZ246Y2VudGVyO1xyXG4gIGRpc3BsYXk6aW5saW5lO1xyXG4gIGxpbmUtaGVpZ2h0OjE1MHB4XHJcblxyXG59XHJcblxyXG5oZWFkZXIubWFzdGhlYWQge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHJcbiAgcGFkZGluZy10b3A6IDhyZW07XHJcbiAgcGFkZGluZy1ib3R0b206IDhyZW07XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzBhMjg0NjtcclxufVxyXG5cclxuaGVhZGVyLm1hc3RoZWFkIC5vdmVybGF5IHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi8uLi8uLi9zcmMvYXNzZXRzL3JlcUhvbWUuanBnXCIpO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gIGJhY2tncm91bmQtcmVwZWF0Om5vLXJlcGVhdDtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IDA7XHJcblxyXG5cclxufVxyXG5cclxuaGVhZGVyLm1hc3RoZWFkIGgxIHtcclxuICBmb250LXNpemU6IDJyZW07XHJcbn1cclxuXHJcbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xyXG4gIGhlYWRlci5tYXN0aGVhZCB7XHJcbiAgICBwYWRkaW5nLXRvcDogMTJyZW07XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMTJyZW07XHJcbiAgfVxyXG4gIGhlYWRlci5tYXN0aGVhZCBoMSB7XHJcbiAgICBmb250LXNpemU6IDNyZW07XHJcbiAgfVxyXG59XHJcblxyXG4uc2hvd2Nhc2UgLnNob3djYXNlLXRleHQge1xyXG4gIHBhZGRpbmc6IDNyZW07XHJcbn1cclxuXHJcbi5zaG93Y2FzZSAuc2hvd2Nhc2UtaW1nIHtcclxuICBtaW4taGVpZ2h0OiAzMHJlbTtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG59XHJcblxyXG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcclxuICAuc2hvd2Nhc2UgLnNob3djYXNlLXRleHQge1xyXG4gICAgcGFkZGluZzogN3JlbTtcclxuICB9XHJcbn1cclxuXHJcbi5mZWF0dXJlcy1pY29ucyB7XHJcbiAgcGFkZGluZy10b3A6IDdyZW07XHJcbiAgcGFkZGluZy1ib3R0b206IDdyZW07XHJcbn1cclxuXHJcbi5mZWF0dXJlcy1pY29ucyAuZmVhdHVyZXMtaWNvbnMtaXRlbSB7XHJcbiAgbWF4LXdpZHRoOiAyMHJlbTtcclxufVxyXG5cclxuLmZlYXR1cmVzLWljb25zIC5mZWF0dXJlcy1pY29ucy1pdGVtIC5mZWF0dXJlcy1pY29ucy1pY29uIHtcclxuICBoZWlnaHQ6IDdyZW07XHJcbn1cclxuXHJcbi5mZWF0dXJlcy1pY29ucyAuZmVhdHVyZXMtaWNvbnMtaXRlbSAuZmVhdHVyZXMtaWNvbnMtaWNvbiBpIHtcclxuICBmb250LXNpemU6IDQuNXJlbTtcclxufVxyXG5cclxuLmZlYXR1cmVzLWljb25zIC5mZWF0dXJlcy1pY29ucy1pdGVtOmhvdmVyIC5mZWF0dXJlcy1pY29ucy1pY29uIGkge1xyXG4gIGZvbnQtc2l6ZTogNXJlbTtcclxufVxyXG5cclxuXHJcblxyXG4uY2FsbC10by1hY3Rpb24ge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzQzYTQwO1xyXG5cclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gIHBhZGRpbmctdG9wOiA3cmVtO1xyXG4gIHBhZGRpbmctYm90dG9tOiA3cmVtO1xyXG59XHJcblxyXG4uY2FsbC10by1hY3Rpb24gLm92ZXJsYXkge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjEyNTI5O1xyXG4gIGhlaWdodDogMTAwJTtcclxuICB3aWR0aDogMTAwJTtcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMDtcclxuICBvcGFjaXR5OiAwLjM7XHJcbn1cclxuXHJcbmZvb3Rlci5mb290ZXIge1xyXG4gIHBhZGRpbmctdG9wOiA0cmVtO1xyXG4gIHBhZGRpbmctYm90dG9tOiA0cmVtO1xyXG59XHJcblxyXG4uaXRlbTEge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uLy4uLy4uL3NyYy9hc3NldHMvZG9uYXRHZXguanBnXCIpO1xyXG59XHJcblxyXG4uaXRlbTIge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uLy4uLy4uL3NyYy9hc3NldHMvY29kZUltYWdlLmpwZ1wiKTtcclxufVxyXG5cclxuLml0ZW0zIHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi8uLi8uLi9zcmMvYXNzZXRzL2dleEJ1c2luZXNzMS5qcGdcIik7XHJcbn1cclxuXHJcbi5pdGVtNCB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vLi4vLi4vc3JjL2Fzc2V0cy9tb2JpbGUuanBnXCIpO1xyXG59XHJcblxyXG5cclxuLypkZWNvcmF0aW5nIHJlZ2lzdGVyIGJ1dHRvbiAqL1xyXG5cclxuLmJ0biB7XHJcbiAgYm9yZGVyOiBub25lO1xyXG5iYWNrZ3JvdW5kOiAjY2U2NjA1O1xyXG5jb2xvcjogI2ZmZmZmZiAhaW1wb3J0YW50O1xyXG5mb250LXdlaWdodDogMTAwO1xyXG5wYWRkaW5nOiAyMHB4O1xyXG50ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG5ib3JkZXItcmFkaXVzOiA2cHg7XHJcbmRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuXHJcbn1cclxuXHJcbi5idG46aG92ZXIge1xyXG4gIGNvbG9yOiAjZTJlOWUxICFpbXBvcnRhbnQ7XHJcbmZvbnQtd2VpZ2h0OiA3MDAgIWltcG9ydGFudDtcclxubGV0dGVyLXNwYWNpbmc6IDNweDtcclxuYmFja2dyb3VuZDogcmdiKDEwNywgMTg3LCAxMDcpO1xyXG4td2Via2l0LWJveC1zaGFkb3c6IDBweCA1cHggNDBweCAtMTBweCByZ2JhKDAsMCwwLDAuNTcpO1xyXG4tbW96LWJveC1zaGFkb3c6IDBweCA1cHggNDBweCAtMTBweCByZ2JhKDAsMCwwLDAuNTcpO1xyXG50cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlIDBzO1xyXG5cclxufVxyXG4udGVzdGltb25pYWxze1xyXG4gIHBhZGRpbmc6IDI1cHg7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/components/home/home.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/home/home.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\r\n<body>\r\n  <!-- Masthead -->\r\n  <header class=\"masthead text-white text-center\">\r\n    <div class=\"overlay\"></div>\r\n    <div class=\"container\">\r\n      <div class=\"row\">\r\n        <div class=\"col-xl-9 mx-auto\">\r\n          <h1 class=\"mainheader mb-5\">Finding lower prices has never been easier</h1>\r\n        </div>\r\n        <div class=\"col-8 col-md-4\"></div>\r\n        <div class=\"col-8 col-md-4\">\r\n          <button type=\"button\" routerLink=\"/buyer-register\" class=\"btn btn-block btn-lg \">Register!</button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </header>\r\n  <!-- Icons Grid -->\r\n  <section class=\"features-icons bg-light text-center\">\r\n    <div class=\"container\">\r\n      <div class=\"row\">\r\n        <div class=\"col-lg-4\">\r\n          <div class=\"features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3\">\r\n            <div class=\"features-icons-icon d-flex\">\r\n              <i class=\"icon-screen-desktop m-auto text-primary\"><img src=\"../../../assets/Search.png\" style=\"height: 50px; width: 50px\"></i>\r\n            </div>\r\n            <h3>Spend less time searching.</h3>\r\n            <p class=\"lead mb-0\">Just create a request and the offers will come to you!</p>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-lg-4\">\r\n          <div class=\"features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3\">\r\n            <div class=\"features-icons-icon d-flex\">\r\n              <i class=\"icon-layers m-auto text-primary\"><img src=\"../../../assets/Bullseye.png\" style=\"height: 50px; width: 50px\"></i>\r\n            </div>\r\n            <h3>Always find the perfect match.</h3>\r\n            <p class=\"lead mb-0\">Choose from a plethora of providers.</p>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-lg-4\">\r\n          <div class=\"features-icons-item mx-auto mb-0 mb-lg-3\">\r\n            <div class=\"features-icons-icon d-flex\">\r\n              <i class=\"icon-check m-auto text-primary\"><img src=\"../../../assets/Money.png\" style=\"height: 50px; width: 50px\"></i>\r\n            </div>\r\n            <h3>Competitive pricing.</h3>\r\n            <p class=\"lead mb-0\">Sellers will provide their goods and services as cheap as possible.</p>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </section>\r\n  <section class=\"container\" style=\"margin-top: -50px\">\r\n      <div class=\"steps\">\r\n        <div class=\"row\" style=\"height: 50px\">\r\n          </div>\r\n            <h3>Nothing is better than this</h3>\r\n          <div class=\"flex-container\">\r\n        <img  src=\"../../../assets/processIcons.png\" style=\"height: 150px; width: 800px; margin-top: 20px\">\r\n      </div>\r\n  </div>\r\n</section>\r\n  <!-- Image Showcases -->\r\n  <section>\r\n    <div class=\"container-fluid\">\r\n        <div class=\"howitworks\">\r\n          <div class=\"flex-container text-center\">\r\n            <h2>Some marketing text for customers</h2>\r\n            <div class=\"row\"></div>\r\n            <div class=\"row\">\r\n            <div class=\"col-sm-4\">\r\n              <img src=\"../../../assets/mobile.jpg\" style=\"height: 300px; width: 350px; margin: 12px\">\r\n              <h6>Something about above image</h6>\r\n            </div>\r\n            <div class=\"col-sm-4\">\r\n                <img  src=\"../../../assets/mobile.jpg\" style=\"height: 300px; width: 350px; margin: 12px\">\r\n                <h6>Something about above image</h6>\r\n              </div>\r\n              <div class=\"col-sm-4\">\r\n                  <img  src=\"../../../assets/mobile.jpg\" style=\"height: 300px; width: 350px; margin: 12px\">\r\n                  <h6>Something about above image</h6>\r\n                </div>\r\n              </div>\r\n          </div>\r\n        </div>\r\n    </div>\r\n  </section>\r\n  <section class=\"container pb-3\" style=\"margin-top: -220px;\">\r\n    <div class=\"perks\">\r\n        <div class=\"card-group\">\r\n            <div class=\"card\">\r\n              <div class=\"card-img-top\">\r\n                  <h5 class=\"card-title text-center\">Card title</h5>\r\n              </div>\r\n              <div class=\"card-body\">\r\n                  <h6 class=\"card-title\">Card title</h6>\r\n                <ul>\r\n                  <li>somthing</li>\r\n                  <li>somthing</li>\r\n                  <li>somthing</li>\r\n                </ul>\r\n\r\n              </div>\r\n            </div>\r\n            <div class=\"card\">\r\n                <div class=\"card-img-top text-center no-gutters\">\r\n                    <h5 class=\"card-title\">Card title</h5>\r\n                </div>\r\n              <div class=\"card-body\">\r\n                  <h6 class=\"card-title\">Card title</h6>\r\n                <ul>\r\n                    <li>somthing</li>\r\n                    <li>somthing</li>\r\n                    <li>somthing</li>\r\n                  </ul>\r\n              </div>\r\n            </div>\r\n            <div class=\"card\">\r\n                <div class=\"card-img-top text-center\">\r\n                    <h5 class=\"card-title\">Card title</h5>\r\n                </div>\r\n              <div class=\"card-body\">\r\n                <h6 class=\"card-title\">Card title</h6>\r\n                <ul>\r\n                    <li>somthing</li>\r\n                    <li>somthing</li>\r\n                    <li>somthing</li>\r\n                  </ul>\r\n              </div>\r\n            </div>\r\n          </div>\r\n    </div>\r\n    </section>\r\n  <section class=\"showcase\">\r\n    <div class=\"container-fluid p-0\">\r\n      <div class=\"row no-gutters\">\r\n\r\n        <div class=\"item1 col-lg-6 order-lg-2 text-white showcase-img\"></div>\r\n        <div class=\"col-lg-6 order-lg-1 my-auto showcase-text\">\r\n          <h2>How It Works</h2>\r\n          <p class=\"lead mb-0\">We will do the work on your behalf and will connect you with the best seller and the\r\n            lowest\r\n            prices.</p>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </section>\r\n      <section class=\"testimonials text-center bg-light\">\r\n        <div class=\"container\">\r\n          <h2 class=\"mb-5\">What people are saying...</h2>\r\n          <div class=\"row\">\r\n            <div class=\"col-lg-4\">\r\n\r\n              <div class=\"testimonial-item mx-auto mb-5 mb-lg-0\">\r\n                  <img class=\"img-fluid rounded-circle mb-3\" src=\"../../../assets/testimonials-1.jpg\" alt=\"\">\r\n                <h5>Margaret E.</h5>\r\n                <p class=\"font-weight-light mb-0\">\"I don't have search for lower prices anymore!\"</p>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-lg-4\">\r\n              <div class=\"testimonial-item mx-auto mb-5 mb-lg-0\">\r\n                <img class=\"img-fluid rounded-circle mb-3\" src=\"../../../assets/testimonials-2.jpg\" alt=\"\">\r\n                <h5>Fred S.</h5>\r\n                <p class=\"font-weight-light mb-0\">\"I save so much time which allows me to do other things instead of shopping.\"</p>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-lg-4\">\r\n              <div class=\"testimonial-item mx-auto mb-5 mb-lg-0\">\r\n                <img class=\"img-fluid rounded-circle mb-3\" src=\"../../../assets/testimonials-3.jpg\" alt=\"\">\r\n                <h5>Sarah\tW.</h5>\r\n                <p class=\"font-weight-light mb-0\">\"all I had to do was request what I wanted!\"</p>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </section>\r\n  <!-- Call to Action -->\r\n  <section class=\"call-to-action text-white text-center\">\r\n    <div class=\"overlay\"></div>\r\n    <div class=\"container\">\r\n      <div class=\"row\">\r\n        <div class=\"col-xl-9 mx-auto\">\r\n          <h2 class=\"mb-4\">Ready to get started? Register now!</h2>\r\n        </div>\r\n        <div class=\"col-md-10 col-lg-8 col-xl-7 mx-auto\">\r\n          <form>\r\n            <div class=\"form-row\">\r\n              <div class=\"col-12 col-md-4\"></div>\r\n              <div class=\"col-12 col-md-4\">\r\n                <button type=\"button\" routerLink=\"buyer-register\" class=\"btn btn-block btn-lg btn-primary\">Register!</button>\r\n              </div>\r\n            </div>\r\n          </form>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </section>\r\n  <footer class=\"footer bg-light\">\r\n    <div class=\"container\">\r\n      <div class=\"row\">\r\n        <div class=\"col-lg-6 h-100 text-center text-lg-left my-auto\">\r\n          <p>Follow Us:</p>\r\n             <i><a href=\"#\"><img src=\"../../../assets/fcbookIcon.png\" style=\"height: 30px; width: 30px; margin: 12px\"></a></i>\r\n             <i><a href=\"#\"><img src=\"../../../assets/linkInIcon.png\" style=\"height: 30px; width: 30px; margin: 12px\"></a></i>\r\n             <i><a href=\"#\"><img src=\"../../../assets/instgramIcon.png\" style=\"height: 30px; width: 30px; margin: 12px\"></a></i>\r\n             <i><a href=\"#\"><img src=\"../../../assets/twitterIcon.png\" style=\"height: 30px; width: 30px; margin: 12px\"></a></i>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </footer>\r\n\r\n</body>\r\n"

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

module.exports = "body{\r\n  -webkit-touch-callout: none;\r\n  -webkit-text-size-adjust: none;\r\n  -webkit-user-select: node;\r\n  height: 100vh;\r\n  margin: -50px;\r\n  padding: 0;\r\n  background-repeat:no-repeat;\r\n  background-size:cover;\r\n  overflow-y: hidden;\r\n}\r\n\r\n.clearheader {\r\n  height: 90px;\r\n  clear: both;\r\n}\r\n\r\n.clearfooter {\r\n  height: 50px;\r\n  clear: both;\r\n}\r\n\r\nh1, label{\r\n  color: black;\r\n}\r\n\r\n.psw {\r\n  text-align: center;\r\n}\r\n\r\nhr {\r\n  border: 1px solid white;\r\n}\r\n\r\nform {\r\n\r\n  position: relative;\r\n  top: 100px;\r\n  max-width: 460px;\r\n  padding: 14px;\r\n  text-align: left;\r\n  height: 540px;\r\n  margin: auto;\r\n  align-content: center;\r\n  box-shadow: 0 8px 12px 0 rgba(0,0,0,0.2);\r\n  transition: 0.3s;\r\n\r\n}\r\n\r\nform:hover {\r\n  box-shadow: 0 14px 30px 0 rgba(0,0,0,0.2);\r\n}\r\n\r\n/* Add padding to containers */\r\n\r\n.container {\r\n  padding: 12px;\r\n  width: 100%;\r\n  position: relative;\r\n  overflow: hidden;\r\n\r\n}\r\n\r\n/* Full-width inputs */\r\n\r\ninput[type=text], input[type=password] , input[type=tel] {\r\n  width: 25rem;\r\n  height: 3.125rem;\r\n  padding: 15px;\r\n  margin: 5px 0 22px 0;\r\n  display: inline-block;\r\n  border: none;\r\n  background:#0d0f11;\r\n  opacity: .65;\r\n  color: white;\r\n\r\n\r\n}\r\n\r\ninput[type=text]:focus, input[type=password]:focus {\r\n  background-color: rgb(112, 58, 70);\r\n  outline: none;\r\n}\r\n\r\n/* Set a style for all buttons */\r\n\r\nbutton {\r\n  background-color: rgb(17, 112, 221);\r\n  color: white;\r\n  padding: 14px 20px;\r\n  margin: 8px 0;\r\n  border: none;\r\n  cursor: pointer;\r\n  width: 400px;\r\n  height: 50px;\r\n  font-size: 16px;\r\n}\r\n\r\n/* Add a hover effect for buttons */\r\n\r\nbutton:hover {\r\n  opacity:.75;\r\n  background-color: darkgreen;\r\n}\r\n\r\nh3 {\r\n  text-align: center;\r\n}\r\n\r\n/* Extra style for the cancel button (red) */\r\n\r\n.cancelbtn {\r\n  width: auto;\r\n  height: 50px;\r\n  padding: 10px 18px;\r\n  background-color: #5f5e5b;\r\n}\r\n\r\n/* Avatar image */\r\n\r\nimg.avatar {\r\n  width: 40%;\r\n  margin: 34px;\r\n}\r\n\r\n/* The \"Forgot password\" text */\r\n\r\nspan.psw {\r\n  float: right;\r\n  padding-top: 16px;\r\n}\r\n\r\n/* Change styles for span and cancel button on extra small screens */\r\n\r\n@media screen and (max-width: 300px) {\r\n  span.psw {\r\n      display: block;\r\n      float: none;\r\n  }\r\n  .cancelbtn {\r\n\r\n    width: 100%;\r\n  }\r\n}\r\n\r\n::-webkit-input-placeholder {\r\n  color: white;\r\n  opacity: 1; /* Firefox */\r\n  font-size: 15px;\r\n  font-weight: 400;\r\n\r\n}\r\n\r\n::-ms-input-placeholder {\r\n  color: white;\r\n  opacity: 1; /* Firefox */\r\n  font-size: 15px;\r\n  font-weight: 400;\r\n\r\n}\r\n\r\n::placeholder {\r\n  color: white;\r\n  opacity: 1; /* Firefox */\r\n  font-size: 15px;\r\n  font-weight: 400;\r\n\r\n}\r\n\r\n:-ms-input-placeholder { /* Internet Explorer 10-11 */\r\n color: white;\r\n font-size: 15px;\r\n}\r\n\r\n::-ms-input-placeholder { /* Microsoft Edge */\r\n color: white;\r\n font-size: 15px;\r\n}\r\n\r\na {\r\n  color: rgb(45, 133, 216);\r\n  font-size: 14px;\r\n  font-weight: bold;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9sb2dpbi9TZWxsZXJMb2dpbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsMkJBQTJCO0VBQzNCLDhCQUE4QjtFQUM5Qix5QkFBeUI7RUFDekIsYUFBYTtFQUNiLGFBQWE7RUFDYixVQUFVO0VBQ1YsMkJBQTJCO0VBQzNCLHFCQUFxQjtFQUNyQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osV0FBVztBQUNiOztBQUVBO0VBQ0UsWUFBWTtFQUNaLFdBQVc7QUFDYjs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFDQTtFQUNFLHVCQUF1QjtBQUN6Qjs7QUFFQTs7RUFFRSxrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2IsZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYixZQUFZO0VBQ1oscUJBQXFCO0VBQ3JCLHdDQUF3QztFQUN4QyxnQkFBZ0I7O0FBRWxCOztBQUNBO0VBQ0UseUNBQXlDO0FBQzNDOztBQUNBLDhCQUE4Qjs7QUFDOUI7RUFDRSxhQUFhO0VBQ2IsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixnQkFBZ0I7O0FBRWxCOztBQUdBLHNCQUFzQjs7QUFDdEI7RUFDRSxZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYixvQkFBb0I7RUFDcEIscUJBQXFCO0VBQ3JCLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLFlBQVk7OztBQUdkOztBQUVBO0VBQ0Usa0NBQWtDO0VBQ2xDLGFBQWE7QUFDZjs7QUFFQSxnQ0FBZ0M7O0FBQ2hDO0VBQ0UsbUNBQW1DO0VBQ25DLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLFlBQVk7RUFDWixlQUFlO0VBQ2YsWUFBWTtFQUNaLFlBQVk7RUFDWixlQUFlO0FBQ2pCOztBQUVBLG1DQUFtQzs7QUFDbkM7RUFDRSxXQUFXO0VBQ1gsMkJBQTJCO0FBQzdCOztBQUNBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBLDRDQUE0Qzs7QUFDNUM7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQix5QkFBeUI7QUFDM0I7O0FBRUEsaUJBQWlCOztBQUNqQjtFQUNFLFVBQVU7RUFDVixZQUFZO0FBQ2Q7O0FBR0EsK0JBQStCOztBQUMvQjtFQUNFLFlBQVk7RUFDWixpQkFBaUI7QUFDbkI7O0FBRUEsb0VBQW9FOztBQUNwRTtFQUNFO01BQ0ksY0FBYztNQUNkLFdBQVc7RUFDZjtFQUNBOztJQUVFLFdBQVc7RUFDYjtBQUNGOztBQUNBO0VBQ0UsWUFBWTtFQUNaLFVBQVUsRUFBRSxZQUFZO0VBQ3hCLGVBQWU7RUFDZixnQkFBZ0I7O0FBRWxCOztBQU5BO0VBQ0UsWUFBWTtFQUNaLFVBQVUsRUFBRSxZQUFZO0VBQ3hCLGVBQWU7RUFDZixnQkFBZ0I7O0FBRWxCOztBQU5BO0VBQ0UsWUFBWTtFQUNaLFVBQVUsRUFBRSxZQUFZO0VBQ3hCLGVBQWU7RUFDZixnQkFBZ0I7O0FBRWxCOztBQUVBLHlCQUF5Qiw0QkFBNEI7Q0FDcEQsWUFBWTtDQUNaLGVBQWU7QUFDaEI7O0FBRUEsMEJBQTBCLG1CQUFtQjtDQUM1QyxZQUFZO0NBQ1osZUFBZTtBQUNoQjs7QUFFQTtFQUNFLHdCQUF3QjtFQUN4QixlQUFlO0VBQ2YsaUJBQWlCO0FBQ25CIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9sb2dpbi9TZWxsZXJMb2dpbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYm9keXtcclxuICAtd2Via2l0LXRvdWNoLWNhbGxvdXQ6IG5vbmU7XHJcbiAgLXdlYmtpdC10ZXh0LXNpemUtYWRqdXN0OiBub25lO1xyXG4gIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vZGU7XHJcbiAgaGVpZ2h0OiAxMDB2aDtcclxuICBtYXJnaW46IC01MHB4O1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6bm8tcmVwZWF0O1xyXG4gIGJhY2tncm91bmQtc2l6ZTpjb3ZlcjtcclxuICBvdmVyZmxvdy15OiBoaWRkZW47XHJcbn1cclxuXHJcbi5jbGVhcmhlYWRlciB7XHJcbiAgaGVpZ2h0OiA5MHB4O1xyXG4gIGNsZWFyOiBib3RoO1xyXG59XHJcblxyXG4uY2xlYXJmb290ZXIge1xyXG4gIGhlaWdodDogNTBweDtcclxuICBjbGVhcjogYm90aDtcclxufVxyXG5cclxuaDEsIGxhYmVse1xyXG4gIGNvbG9yOiBibGFjaztcclxufVxyXG5cclxuLnBzdyB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbmhyIHtcclxuICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcclxufVxyXG5cclxuZm9ybSB7XHJcblxyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB0b3A6IDEwMHB4O1xyXG4gIG1heC13aWR0aDogNDYwcHg7XHJcbiAgcGFkZGluZzogMTRweDtcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gIGhlaWdodDogNTQwcHg7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxuICBib3gtc2hhZG93OiAwIDhweCAxMnB4IDAgcmdiYSgwLDAsMCwwLjIpO1xyXG4gIHRyYW5zaXRpb246IDAuM3M7XHJcblxyXG59XHJcbmZvcm06aG92ZXIge1xyXG4gIGJveC1zaGFkb3c6IDAgMTRweCAzMHB4IDAgcmdiYSgwLDAsMCwwLjIpO1xyXG59XHJcbi8qIEFkZCBwYWRkaW5nIHRvIGNvbnRhaW5lcnMgKi9cclxuLmNvbnRhaW5lciB7XHJcbiAgcGFkZGluZzogMTJweDtcclxuICB3aWR0aDogMTAwJTtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuXHJcbn1cclxuXHJcblxyXG4vKiBGdWxsLXdpZHRoIGlucHV0cyAqL1xyXG5pbnB1dFt0eXBlPXRleHRdLCBpbnB1dFt0eXBlPXBhc3N3b3JkXSAsIGlucHV0W3R5cGU9dGVsXSB7XHJcbiAgd2lkdGg6IDI1cmVtO1xyXG4gIGhlaWdodDogMy4xMjVyZW07XHJcbiAgcGFkZGluZzogMTVweDtcclxuICBtYXJnaW46IDVweCAwIDIycHggMDtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGJhY2tncm91bmQ6IzBkMGYxMTtcclxuICBvcGFjaXR5OiAuNjU7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG5cclxuXHJcbn1cclxuXHJcbmlucHV0W3R5cGU9dGV4dF06Zm9jdXMsIGlucHV0W3R5cGU9cGFzc3dvcmRdOmZvY3VzIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTEyLCA1OCwgNzApO1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbn1cclxuXHJcbi8qIFNldCBhIHN0eWxlIGZvciBhbGwgYnV0dG9ucyAqL1xyXG5idXR0b24ge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxNywgMTEyLCAyMjEpO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBwYWRkaW5nOiAxNHB4IDIwcHg7XHJcbiAgbWFyZ2luOiA4cHggMDtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIHdpZHRoOiA0MDBweDtcclxuICBoZWlnaHQ6IDUwcHg7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG59XHJcblxyXG4vKiBBZGQgYSBob3ZlciBlZmZlY3QgZm9yIGJ1dHRvbnMgKi9cclxuYnV0dG9uOmhvdmVyIHtcclxuICBvcGFjaXR5Oi43NTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrZ3JlZW47XHJcbn1cclxuaDMge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLyogRXh0cmEgc3R5bGUgZm9yIHRoZSBjYW5jZWwgYnV0dG9uIChyZWQpICovXHJcbi5jYW5jZWxidG4ge1xyXG4gIHdpZHRoOiBhdXRvO1xyXG4gIGhlaWdodDogNTBweDtcclxuICBwYWRkaW5nOiAxMHB4IDE4cHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzVmNWU1YjtcclxufVxyXG5cclxuLyogQXZhdGFyIGltYWdlICovXHJcbmltZy5hdmF0YXIge1xyXG4gIHdpZHRoOiA0MCU7XHJcbiAgbWFyZ2luOiAzNHB4O1xyXG59XHJcblxyXG5cclxuLyogVGhlIFwiRm9yZ290IHBhc3N3b3JkXCIgdGV4dCAqL1xyXG5zcGFuLnBzdyB7XHJcbiAgZmxvYXQ6IHJpZ2h0O1xyXG4gIHBhZGRpbmctdG9wOiAxNnB4O1xyXG59XHJcblxyXG4vKiBDaGFuZ2Ugc3R5bGVzIGZvciBzcGFuIGFuZCBjYW5jZWwgYnV0dG9uIG9uIGV4dHJhIHNtYWxsIHNjcmVlbnMgKi9cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzAwcHgpIHtcclxuICBzcGFuLnBzdyB7XHJcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICBmbG9hdDogbm9uZTtcclxuICB9XHJcbiAgLmNhbmNlbGJ0biB7XHJcblxyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG59XHJcbjo6cGxhY2Vob2xkZXIge1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBvcGFjaXR5OiAxOyAvKiBGaXJlZm94ICovXHJcbiAgZm9udC1zaXplOiAxNXB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XHJcblxyXG59XHJcblxyXG46LW1zLWlucHV0LXBsYWNlaG9sZGVyIHsgLyogSW50ZXJuZXQgRXhwbG9yZXIgMTAtMTEgKi9cclxuIGNvbG9yOiB3aGl0ZTtcclxuIGZvbnQtc2l6ZTogMTVweDtcclxufVxyXG5cclxuOjotbXMtaW5wdXQtcGxhY2Vob2xkZXIgeyAvKiBNaWNyb3NvZnQgRWRnZSAqL1xyXG4gY29sb3I6IHdoaXRlO1xyXG4gZm9udC1zaXplOiAxNXB4O1xyXG59XHJcblxyXG5hIHtcclxuICBjb2xvcjogcmdiKDQ1LCAxMzMsIDIxNik7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/login/SellerLogin.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/login/SellerLogin.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\r\n<div class=\"clearheader\"></div>\r\n<body>\r\n  <form (submit)=\"onLoginSubmit()\" class=\" col-md-4 col-md-offset-4\">\r\n    <div class=\"regular-container\">\r\n      <!-- <img src=\"assets\\gexLogo.png\" alt=\"Avatar\" class=\"avatar\">-->\r\n     <div class=\"container\">\r\n      <h3>Welcom back</h3>\r\n      <small>Seller</small>\r\n      </div>\r\n    <hr>\r\n    <div class=\"container\">\r\n      <input type=\"text\" [(ngModel)]=\"email\" placeholder=\"Enter Email\" name=\"email\" required>\r\n      <input type=\"password\" [(ngModel)]=\"password\" placeholder=\"Enter Password\" name=\"password\" required>\r\n      <a routerLink=\"/seller\" (click)=\"onLoginSubmit()\"><button type=\"submit\">Login</button></a><br><br>\r\n      <label>\r\n        <input type=\"checkbox\" checked=\"checked\" name=\"remember\"> Remember me\r\n      </label>\r\n    </div>\r\n    <div class=\"container\">\r\n      <p><a href=\"#\">Forgot password?</a></p>\r\n      <p><a routerLink=\"/login\">Buyer? Login here.</a></p>\r\n    </div>\r\n  </div>\r\n  </form>\r\n</body>\r\n<div class=\"clearfooter\"></div>\r\n\r\n\r\n\r\n<!--<form (submit)=\"onLoginSubmit()\" class=\"col-md-4 col-md-offset-4\">\r\n        <div class=\"imgcontainer\">\r\n          <img src=\"assets\\gexLogo.png\" alt=\"Avatar\" class=\"avatar\">\r\n          <label><b>Seller</b></label>\r\n        </div>\r\n\r\n        <div class=\"container\">\r\n          <label for=\"email\"><b>Email</b></label>\r\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"email\" placeholder=\"Enter Email\" name=\"email\" required>\r\n\r\n          <label for=\"password\"><b>Password</b></label>\r\n          <input type=\"password\" class=\"form-control\" [(ngModel)]=\"password\" placeholder=\"Enter Password\" name=\"password\" required>\r\n\r\n          <a routerLink=\"/seller\" (click)=\"onLoginSubmit()\"><button type=\"submit\">Login</button></a>\r\n\r\n          <button type=\"submit\">Login</button>\r\n          <label>\r\n            <input type=\"checkbox\" checked=\"checked\" name=\"remember\"> Remember me\r\n          </label>\r\n        </div>\r\n\r\n        <div class=\"container\" style=\"background-color:#f1f1f1\">\r\n          <button type=\"button\" class=\"cancelbtn\">Cancel</button>\r\n          <span class=\"psw\">Forgot <a href=\"#\">password?</a></span>\r\n        </div>\r\n\r\n        <div class=\"container signin\">\r\n            <p>Are you a Buyer? <a routerLink=\"/login\">Sign in here</a>.</p>\r\n          </div>\r\n      </form>\r\n\r\n-->\r\n"

/***/ }),

/***/ "./src/app/components/login/login.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/login/login.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body{\r\n  -webkit-touch-callout: none;\r\n  -webkit-text-size-adjust: none;\r\n  -webkit-user-select: node;\r\n  height: 100vh;\r\n  margin: -50px;\r\n  padding: 0;\r\n  background-repeat:no-repeat;\r\n  background-size:cover;\r\n  overflow-y: hidden;\r\n}\r\n\r\n.clearheader {\r\n  height: 90px;\r\n  clear: both;\r\n}\r\n\r\n.clearfooter {\r\n  height: 50px;\r\n  clear: both;\r\n}\r\n\r\nh1, label {\r\n  color: black\r\n}\r\n\r\n.psw {\r\n  text-align: center;\r\n}\r\n\r\nhr {\r\n  border: 1px solid white;\r\n}\r\n\r\nform {\r\n\r\n  position: relative;\r\n  top: 100px;\r\n  max-width: 460px;\r\n  padding: 14px;\r\n  height: 520px;\r\n  margin: auto;\r\n  overflow: hidden;\r\n  align-content: center;\r\n  box-shadow: 0 8px 12px 0 rgba(0,0,0,0.2);\r\n  transition: 0.3s;\r\n\r\n}\r\n\r\nform:hover {\r\n  box-shadow: 0 14px 30px 0 rgba(0,0,0,0.2);\r\n}\r\n\r\n/* Full-width inputs */\r\n\r\ninput[type=text], input[type=password] , input[type=tel] {\r\n  width: 25rem;\r\n  height: 3.125rem;\r\n  padding: 15px;\r\n  margin: 5px 0 22px 0;\r\n  display: inline-block;\r\n  border: none;\r\n  background:#0d0f11;\r\n  opacity: .65;\r\n  color: white;\r\n\r\n\r\n}\r\n\r\ninput[type=text]:focus, input[type=password]:focus {\r\n  background-color: rgb(112, 58, 70);\r\n  outline: none;\r\n}\r\n\r\n/* Set a style for all buttons */\r\n\r\nbutton {\r\n  background-color: rgb(17, 112, 221);\r\n  color: white;\r\n  padding: 14px 20px;\r\n  margin: 8px 0;\r\n  border: none;\r\n  cursor: pointer;\r\n  width: 400px;\r\n  height: 50px;\r\n  font-size: 16px;\r\n}\r\n\r\n/* Add a hover effect for buttons */\r\n\r\nbutton:hover {\r\n  opacity:.75;\r\n  background-color: darkgreen;\r\n}\r\n\r\nh3 {\r\n  text-align: center;\r\n}\r\n\r\n/* Extra style for the cancel button (red) */\r\n\r\n.cancelbtn {\r\n  width: auto;\r\n  height: 50px;\r\n  padding: 10px 18px;\r\n  background-color: #5f5e5b;\r\n}\r\n\r\n/* Avatar image */\r\n\r\nimg.avatar {\r\n  width: 40%;\r\n  margin: 34px;\r\n}\r\n\r\n/* Add padding to containers */\r\n\r\n.container {\r\n  padding: 12px;\r\n  width: 100%;\r\n  position: relative;\r\n  overflow: hidden;\r\n}\r\n\r\n/* The \"Forgot password\" text */\r\n\r\nspan.psw {\r\n  float: right;\r\n  padding-top: 16px;\r\n}\r\n\r\n/* Change styles for span and cancel button on extra small screens */\r\n\r\n::-webkit-input-placeholder {\r\n  color: white;\r\n  opacity: 1; /* Firefox */\r\n  font-size: 15px;\r\n  font-weight: 400;\r\n\r\n}\r\n\r\n::-ms-input-placeholder {\r\n  color: white;\r\n  opacity: 1; /* Firefox */\r\n  font-size: 15px;\r\n  font-weight: 400;\r\n\r\n}\r\n\r\n::placeholder {\r\n  color: white;\r\n  opacity: 1; /* Firefox */\r\n  font-size: 15px;\r\n  font-weight: 400;\r\n\r\n}\r\n\r\n:-ms-input-placeholder { /* Internet Explorer 10-11 */\r\n color: white;\r\n font-size: 15px;\r\n}\r\n\r\n::-ms-input-placeholder { /* Microsoft Edge */\r\n color: white;\r\n font-size: 15px;\r\n}\r\n\r\na {\r\n  color: rgb(45, 133, 216);\r\n  font-size: 14px;\r\n  font-weight: bold;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsMkJBQTJCO0VBQzNCLDhCQUE4QjtFQUM5Qix5QkFBeUI7RUFDekIsYUFBYTtFQUNiLGFBQWE7RUFDYixVQUFVO0VBQ1YsMkJBQTJCO0VBQzNCLHFCQUFxQjtFQUNyQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osV0FBVztBQUNiOztBQUVBO0VBQ0UsWUFBWTtFQUNaLFdBQVc7QUFDYjs7QUFFQTtFQUNFO0FBQ0Y7O0FBQ0E7RUFDRSxrQkFBa0I7QUFDcEI7O0FBQ0E7RUFDRSx1QkFBdUI7QUFDekI7O0FBRUE7O0VBRUUsa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLGFBQWE7RUFDYixZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLHFCQUFxQjtFQUNyQix3Q0FBd0M7RUFDeEMsZ0JBQWdCOztBQUVsQjs7QUFDQTtFQUNFLHlDQUF5QztBQUMzQzs7QUFFQSxzQkFBc0I7O0FBQ3RCO0VBQ0UsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2Isb0JBQW9CO0VBQ3BCLHFCQUFxQjtFQUNyQixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixZQUFZOzs7QUFHZDs7QUFFQTtFQUNFLGtDQUFrQztFQUNsQyxhQUFhO0FBQ2Y7O0FBRUEsZ0NBQWdDOztBQUNoQztFQUNFLG1DQUFtQztFQUNuQyxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixZQUFZO0VBQ1osZUFBZTtFQUNmLFlBQVk7RUFDWixZQUFZO0VBQ1osZUFBZTtBQUNqQjs7QUFFQSxtQ0FBbUM7O0FBQ25DO0VBQ0UsV0FBVztFQUNYLDJCQUEyQjtBQUM3Qjs7QUFDQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFDQSw0Q0FBNEM7O0FBQzVDO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIseUJBQXlCO0FBQzNCOztBQUVBLGlCQUFpQjs7QUFDakI7RUFDRSxVQUFVO0VBQ1YsWUFBWTtBQUNkOztBQUVBLDhCQUE4Qjs7QUFDOUI7RUFDRSxhQUFhO0VBQ2IsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixnQkFBZ0I7QUFDbEI7O0FBRUEsK0JBQStCOztBQUMvQjtFQUNFLFlBQVk7RUFDWixpQkFBaUI7QUFDbkI7O0FBRUEsb0VBQW9FOztBQUVwRTtFQUNFLFlBQVk7RUFDWixVQUFVLEVBQUUsWUFBWTtFQUN4QixlQUFlO0VBQ2YsZ0JBQWdCOztBQUVsQjs7QUFOQTtFQUNFLFlBQVk7RUFDWixVQUFVLEVBQUUsWUFBWTtFQUN4QixlQUFlO0VBQ2YsZ0JBQWdCOztBQUVsQjs7QUFOQTtFQUNFLFlBQVk7RUFDWixVQUFVLEVBQUUsWUFBWTtFQUN4QixlQUFlO0VBQ2YsZ0JBQWdCOztBQUVsQjs7QUFFQSx5QkFBeUIsNEJBQTRCO0NBQ3BELFlBQVk7Q0FDWixlQUFlO0FBQ2hCOztBQUVBLDBCQUEwQixtQkFBbUI7Q0FDNUMsWUFBWTtDQUNaLGVBQWU7QUFDaEI7O0FBRUE7RUFDRSx3QkFBd0I7RUFDeEIsZUFBZTtFQUNmLGlCQUFpQjtBQUNuQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImJvZHl7XHJcbiAgLXdlYmtpdC10b3VjaC1jYWxsb3V0OiBub25lO1xyXG4gIC13ZWJraXQtdGV4dC1zaXplLWFkanVzdDogbm9uZTtcclxuICAtd2Via2l0LXVzZXItc2VsZWN0OiBub2RlO1xyXG4gIGhlaWdodDogMTAwdmg7XHJcbiAgbWFyZ2luOiAtNTBweDtcclxuICBwYWRkaW5nOiAwO1xyXG4gIGJhY2tncm91bmQtcmVwZWF0Om5vLXJlcGVhdDtcclxuICBiYWNrZ3JvdW5kLXNpemU6Y292ZXI7XHJcbiAgb3ZlcmZsb3cteTogaGlkZGVuO1xyXG59XHJcblxyXG4uY2xlYXJoZWFkZXIge1xyXG4gIGhlaWdodDogOTBweDtcclxuICBjbGVhcjogYm90aDtcclxufVxyXG5cclxuLmNsZWFyZm9vdGVyIHtcclxuICBoZWlnaHQ6IDUwcHg7XHJcbiAgY2xlYXI6IGJvdGg7XHJcbn1cclxuXHJcbmgxLCBsYWJlbCB7XHJcbiAgY29sb3I6IGJsYWNrXHJcbn1cclxuLnBzdyB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbmhyIHtcclxuICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcclxufVxyXG5cclxuZm9ybSB7XHJcblxyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB0b3A6IDEwMHB4O1xyXG4gIG1heC13aWR0aDogNDYwcHg7XHJcbiAgcGFkZGluZzogMTRweDtcclxuICBoZWlnaHQ6IDUyMHB4O1xyXG4gIG1hcmdpbjogYXV0bztcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxuICBib3gtc2hhZG93OiAwIDhweCAxMnB4IDAgcmdiYSgwLDAsMCwwLjIpO1xyXG4gIHRyYW5zaXRpb246IDAuM3M7XHJcblxyXG59XHJcbmZvcm06aG92ZXIge1xyXG4gIGJveC1zaGFkb3c6IDAgMTRweCAzMHB4IDAgcmdiYSgwLDAsMCwwLjIpO1xyXG59XHJcblxyXG4vKiBGdWxsLXdpZHRoIGlucHV0cyAqL1xyXG5pbnB1dFt0eXBlPXRleHRdLCBpbnB1dFt0eXBlPXBhc3N3b3JkXSAsIGlucHV0W3R5cGU9dGVsXSB7XHJcbiAgd2lkdGg6IDI1cmVtO1xyXG4gIGhlaWdodDogMy4xMjVyZW07XHJcbiAgcGFkZGluZzogMTVweDtcclxuICBtYXJnaW46IDVweCAwIDIycHggMDtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGJhY2tncm91bmQ6IzBkMGYxMTtcclxuICBvcGFjaXR5OiAuNjU7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG5cclxuXHJcbn1cclxuXHJcbmlucHV0W3R5cGU9dGV4dF06Zm9jdXMsIGlucHV0W3R5cGU9cGFzc3dvcmRdOmZvY3VzIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTEyLCA1OCwgNzApO1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbn1cclxuXHJcbi8qIFNldCBhIHN0eWxlIGZvciBhbGwgYnV0dG9ucyAqL1xyXG5idXR0b24ge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxNywgMTEyLCAyMjEpO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBwYWRkaW5nOiAxNHB4IDIwcHg7XHJcbiAgbWFyZ2luOiA4cHggMDtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIHdpZHRoOiA0MDBweDtcclxuICBoZWlnaHQ6IDUwcHg7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG59XHJcblxyXG4vKiBBZGQgYSBob3ZlciBlZmZlY3QgZm9yIGJ1dHRvbnMgKi9cclxuYnV0dG9uOmhvdmVyIHtcclxuICBvcGFjaXR5Oi43NTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrZ3JlZW47XHJcbn1cclxuaDMge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4vKiBFeHRyYSBzdHlsZSBmb3IgdGhlIGNhbmNlbCBidXR0b24gKHJlZCkgKi9cclxuLmNhbmNlbGJ0biB7XHJcbiAgd2lkdGg6IGF1dG87XHJcbiAgaGVpZ2h0OiA1MHB4O1xyXG4gIHBhZGRpbmc6IDEwcHggMThweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNWY1ZTViO1xyXG59XHJcblxyXG4vKiBBdmF0YXIgaW1hZ2UgKi9cclxuaW1nLmF2YXRhciB7XHJcbiAgd2lkdGg6IDQwJTtcclxuICBtYXJnaW46IDM0cHg7XHJcbn1cclxuXHJcbi8qIEFkZCBwYWRkaW5nIHRvIGNvbnRhaW5lcnMgKi9cclxuLmNvbnRhaW5lciB7XHJcbiAgcGFkZGluZzogMTJweDtcclxuICB3aWR0aDogMTAwJTtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG5cclxuLyogVGhlIFwiRm9yZ290IHBhc3N3b3JkXCIgdGV4dCAqL1xyXG5zcGFuLnBzdyB7XHJcbiAgZmxvYXQ6IHJpZ2h0O1xyXG4gIHBhZGRpbmctdG9wOiAxNnB4O1xyXG59XHJcblxyXG4vKiBDaGFuZ2Ugc3R5bGVzIGZvciBzcGFuIGFuZCBjYW5jZWwgYnV0dG9uIG9uIGV4dHJhIHNtYWxsIHNjcmVlbnMgKi9cclxuXHJcbjo6cGxhY2Vob2xkZXIge1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBvcGFjaXR5OiAxOyAvKiBGaXJlZm94ICovXHJcbiAgZm9udC1zaXplOiAxNXB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XHJcblxyXG59XHJcblxyXG46LW1zLWlucHV0LXBsYWNlaG9sZGVyIHsgLyogSW50ZXJuZXQgRXhwbG9yZXIgMTAtMTEgKi9cclxuIGNvbG9yOiB3aGl0ZTtcclxuIGZvbnQtc2l6ZTogMTVweDtcclxufVxyXG5cclxuOjotbXMtaW5wdXQtcGxhY2Vob2xkZXIgeyAvKiBNaWNyb3NvZnQgRWRnZSAqL1xyXG4gY29sb3I6IHdoaXRlO1xyXG4gZm9udC1zaXplOiAxNXB4O1xyXG59XHJcblxyXG5hIHtcclxuICBjb2xvcjogcmdiKDQ1LCAxMzMsIDIxNik7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/login/login.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/login/login.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\r\n<div class=\"clearheader\"></div>\r\n<body>\r\n  <form (submit)=\"onLoginSubmit()\" class=\"flex-container\">\r\n    <div class=\"regular-container\">\r\n      <!-- <img src=\"assets\\gexLogo.png\" alt=\"Avatar\" class=\"avatar\">-->\r\n    <div class=\"container\">\r\n        <h3>Welcom back</h3>\r\n        <small>Buyer</small>\r\n      </div>\r\n      <hr>\r\n      <div class=\"container\">\r\n        <input type=\"text\" [(ngModel)]=\"email\" placeholder=\"Enter Email\" name=\"email\" required>\r\n        <input type=\"password\" [(ngModel)]=\"password\" placeholder=\"Enter Password\" name=\"password\" required>\r\n        <a routerLink=\"/buyer\" (click)=\"onLoginSubmit()\"><button type=\"submit\">Login</button></a><br><br>\r\n        <label>\r\n          <input type=\"checkbox\" checked=\"checked\" name=\"remember\"> Remember me\r\n        </label>\r\n      </div>\r\n      <div class=\"container\">\r\n        <p><a href=\"#\">Forgot password?</a></p>\r\n       <!-- <p><a routerLink=\"/seller-login\">Seller? Login here.</a></p> -->\r\n      </div>\r\n    </div>\r\n  </form>\r\n</body>\r\n<div class=\"clearfooter\"></div>\r\n\r\n"

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
/* harmony import */ var _buyer_buyer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../buyer/buyer.component */ "./src/app/components/buyer/buyer.component.ts");
/* harmony import */ var angular_notifier__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angular-notifier */ "./node_modules/angular-notifier/esm5/angular-notifier.js");
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
    function LoginComponent(registerService, authService, storeFetchService, router, notifierService, buyerComp) {
        this.registerService = registerService;
        this.authService = authService;
        this.storeFetchService = storeFetchService;
        this.router = router;
        this.notifierService = notifierService;
        this.buyerComp = buyerComp;
        this.notifier = notifierService;
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
                // window.location.reload(); //Why do we need to reload ??
                _this.notifier.notify('success', 'You are now logged in.');
            }
            else {
                _this.notifier.notify('error', data.msg);
            }
        });
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/components/login/login.component.html"),
            providers: [_buyer_buyer_component__WEBPACK_IMPORTED_MODULE_5__["BuyerComponent"]],
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/components/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [_services_register_service__WEBPACK_IMPORTED_MODULE_1__["RegisterService"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _services_storeFetch_service__WEBPACK_IMPORTED_MODULE_3__["StoreFetchService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            angular_notifier__WEBPACK_IMPORTED_MODULE_6__["NotifierService"],
            _buyer_buyer_component__WEBPACK_IMPORTED_MODULE_5__["BuyerComponent"]])
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
/* harmony import */ var angular_notifier__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angular-notifier */ "./node_modules/angular-notifier/esm5/angular-notifier.js");
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
    function SellerLoginComponent(registerService, authService, storeFetchService, router, notifierService) {
        this.registerService = registerService;
        this.authService = authService;
        this.storeFetchService = storeFetchService;
        this.router = router;
        this.notifierService = notifierService;
        this.notifier = notifierService;
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
                _this.notifier.notify('success', 'You are now logged in.');
            }
            else {
                _this.notifier.notify('error', data.msg);
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
            angular_notifier__WEBPACK_IMPORTED_MODULE_5__["NotifierService"]])
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

module.exports = "/*\r\n.navbar-brand{\r\n  max-height: 30px;\r\n  max-width: 30%;\r\n  overflow: visible;\r\n  padding: 0;\r\n\r\n}\r\n\r\n.logForm {\r\n  list-style-type: none;\r\n  margin: 0;\r\n  padding: 0;\r\n  overflow: hidden;\r\n}\r\n\r\n.nav-item2 {\r\n  float: left;\r\n  list-style-type: none;\r\n  font-size: 14px;\r\n  padding-top: 0;\r\n  nav-down: auto\r\n}\r\n\r\n.nav-item2 a:hover {\r\n  background-color: lightgray;\r\n}\r\n*/\r\n\r\n.navbar-nav > li{\r\n  padding-left:10px;\r\n  padding-right:10px;\r\n}\r\n\r\n.img-circle {\r\n  border-radius: 50%;\r\n  -webkit-transform: translateZ(10);\r\n  transform: translateZ(0);\r\n}\r\n\r\n.img-cart {\r\n  border-radius: 50%;\r\n  -webkit-transform: translateZ(10);\r\n  transform: translateZ(0);\r\n}\r\n\r\n.dropdown:hover>.dropdown-menu {\r\n  display: block;\r\n}\r\n\r\n.nav-item:hover>.img-cart {\r\n  opacity: 0.5;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9uYXZiYXIvYnV5ZXItbmF2YmFyL2J1eWVyLW5hdmJhci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Q0EyQkM7O0FBRUQ7RUFDRSxpQkFBaUI7RUFDakIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0Usa0JBQWtCO0VBRWxCLGlDQUFpQztFQUNqQyx3QkFBd0I7QUFDMUI7O0FBRUE7RUFDRSxrQkFBa0I7RUFFbEIsaUNBQWlDO0VBQ2pDLHdCQUF3QjtBQUMxQjs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxZQUFZO0FBQ2QiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL25hdmJhci9idXllci1uYXZiYXIvYnV5ZXItbmF2YmFyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxyXG4ubmF2YmFyLWJyYW5ke1xyXG4gIG1heC1oZWlnaHQ6IDMwcHg7XHJcbiAgbWF4LXdpZHRoOiAzMCU7XHJcbiAgb3ZlcmZsb3c6IHZpc2libGU7XHJcbiAgcGFkZGluZzogMDtcclxuXHJcbn1cclxuXHJcbi5sb2dGb3JtIHtcclxuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG5cclxuLm5hdi1pdGVtMiB7XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBwYWRkaW5nLXRvcDogMDtcclxuICBuYXYtZG93bjogYXV0b1xyXG59XHJcblxyXG4ubmF2LWl0ZW0yIGE6aG92ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JheTtcclxufVxyXG4qL1xyXG5cclxuLm5hdmJhci1uYXYgPiBsaXtcclxuICBwYWRkaW5nLWxlZnQ6MTBweDtcclxuICBwYWRkaW5nLXJpZ2h0OjEwcHg7XHJcbn1cclxuXHJcbi5pbWctY2lyY2xlIHtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlKDApO1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDEwKTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVooMCk7XHJcbn1cclxuXHJcbi5pbWctY2FydCB7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZSgwKTtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWigxMCk7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDApO1xyXG59XHJcblxyXG4uZHJvcGRvd246aG92ZXI+LmRyb3Bkb3duLW1lbnUge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcblxyXG4ubmF2LWl0ZW06aG92ZXI+LmltZy1jYXJ0IHtcclxuICBvcGFjaXR5OiAwLjU7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/navbar/buyer-navbar/buyer-navbar.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/components/navbar/buyer-navbar/buyer-navbar.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar fixed-top navbar-expand-lg navbar-light\" style=\"background-color:white; border-bottom: 5px solid #EDEDED; height: 100px;\">\r\n  <a class=\"navbar-brand\" style=\"font-size: 22px\"><img src=\"assets\\RequirenBuyerLogoDraft.png\" width=\"200\" height=\"175\" style=\"margin-top: 5px; margin-left: 15px\" class=\"img-responsive\"></a>\r\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\"\r\n    aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n    <span class=\"navbar-toggler-icon\"></span>\r\n  </button>\r\n  <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\" style=\"margin-right: 50px\">\r\n    <ul class=\"navbar-nav ml-auto\">\r\n      <a class=\"nav-item\">\r\n          <img class=\"img-circle\" src=\"../../../../assets/profileAvatar.png\" alt=\"\" width=\"40\" height=\"40\">\r\n      </a>\r\n      <li class=\"nav-item dropdown\">\r\n        <a class=\"nav-link dropdown-toggle\" href=\"#\" id=\"navbarDropdown\" role=\"button\" data-toggle=\"dropdown\"\r\n          aria-haspopup=\"true\" aria-expanded=\"false\" style=\"font-size: 20px; font-family: Open Sans\">\r\n          {{buyerNavbar.firstName}} {{buyerNavbar.lastName}}<span class=\"sr-only\">(current)</span>\r\n        </a>\r\n        <div class=\"dropdown-menu dropdown-menu-right\" aria-labelledby=\"navbarDropdown\" style=\"font-family: Open Sans\">\r\n          <a class=\"dropdown-item\" routerLink=\"/buyer/make-request\" routerLinkActive=\"active-link\">Submit New Request</a>\r\n          <a class=\"dropdown-item\" routerLink=\"/buyer\" routerLinkActive=\"active-link\">Go to My Portal</a>\r\n          <a class=\"dropdown-item\" routerLink=\"/buyer\" routerLinkActive=\"active-link\">Orders</a>\r\n          <div class=\"dropdown-divider\"></div>\r\n          <a class=\"dropdown-item\" routerLink=\"/buyer/buyer-account\" routerLinkActive=\"active-link\">My Account</a>\r\n          <a class=\"dropdown-item\" (click)=\"onLogoutClick()\" routerLink=\"/buyer-login\" routerLinkActive=\"active-link\" style=\"color:red\">Logout</a>\r\n          <!----<a *ngIf=\"logout == true\" class=\"dropdown-item\" (click)=\"onLogoutClick()\" routerLink=\"/buyer-login\" routerLinkActive=\"active-link\">Logout</a>-->\r\n        </div>\r\n      </li>\r\n      <li class=\"nav-item dropdown\">\r\n        <a class=\"nav-link dropdown\">\r\n          <img class=\"img-cart\" src=\"../../../../assets/cartLogo.png\" alt=\"\" width=\"35\" height=\"35\"><span *ngIf=\"(totalItemsCart + itemAdded_RemovedCart) > 0\" class=\"cartBadge\" matBadge=\"{{totalItemsCart + itemAdded_RemovedCart}}\" matBadgeColor=\"warn\" matBadgeSize=\"medium\"></span>\r\n          </a>\r\n          <div class=\"dropdown-menu dropdown-menu-right\" aria-labelledby=\"navbarDropdown\" style=\"font-family: Open Sans\">\r\n              <a *ngIf=\"(totalItemsCart + itemAdded_RemovedCart) == 0\"class=\"dropdown-item\" routerLink=\"/buyer/make-request\" routerLinkActive=\"active-link\">Cart empty.</a>\r\n              <a *ngIf=\"(totalItemsCart + itemAdded_RemovedCart) == 1\"class=\"dropdown-item\" routerLink=\"/buyer/make-request\" routerLinkActive=\"active-link\">You have {{totalItemsCart + itemAdded_RemovedCart}} offer in your cart.</a>\r\n              <a *ngIf=\"(totalItemsCart + itemAdded_RemovedCart) > 1\"class=\"dropdown-item\" routerLink=\"/buyer/make-request\" routerLinkActive=\"active-link\">You have {{totalItemsCart + itemAdded_RemovedCart}} offers in your cart.</a>\r\n              <div class=\"dropdown-divider\"></div>\r\n              <a class=\"dropdown-item\" routerLink=\"/buyer/cart\" routerLinkActive=\"active-link\"><button type=\"button\" routerLink=\"/buyer\" class=\"btn\" style=\"background-color: #4cd137;\">Go to Cart</button>\r\n              </a>\r\n            </div>\r\n      </li>\r\n    </ul>\r\n  </div>\r\n</nav>\r\n"

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
/* harmony import */ var angular_notifier__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular-notifier */ "./node_modules/angular-notifier/esm5/angular-notifier.js");
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
    function BuyerNavbarComponent(storeFetchService, router, notifierService, buyerService, titleService, route) {
        this.storeFetchService = storeFetchService;
        this.router = router;
        this.notifierService = notifierService;
        this.buyerService = buyerService;
        this.titleService = titleService;
        this.route = route;
        this.itemAdded_RemovedCart = 0;
        this.itemRemovedFromCart = 0;
        this.totalItemsCart = parseInt(localStorage.getItem('buyerCart'), 10);
        this.notifier = notifierService;
    }
    BuyerNavbarComponent.prototype.ngOnInit = function () {
        // This line of code sets the browser tab title when a user is navigating through the GEX application buyer related pages.
        this.titleService.setTitle("Buyer | Requiren");
        this.buyerNavbar = this.route.snapshot.data['buyer'];
        this.buyerNavbar.firstName = this.buyerNavbar['data']['first_name'];
        this.buyerNavbar.lastName = this.buyerNavbar['data']['last_name'];
        //this.buyerNavbar.cartItemBadge = localStorage.getItem('buyerCart');
        //console.log(this.counter.length);
    };
    // This function logs out the current user when they click logout on the navbar. Every user, when they log in, gets stored locally so this funciton
    // goes into the local memory using the services developed in order to remove the current user so that if another user wishes to log on they can.
    // It also navigates the user to the correct page since they no longer have access to the buyer pages once they log out.
    BuyerNavbarComponent.prototype.onLogoutClick = function () {
        this.buyerService.buyerLogout();
        this.storeFetchService.userLogout();
        this.notifier.notify('success', 'You are logged out');
        this.router.navigate(['/login']);
        // window.location.reload();
        return false;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], BuyerNavbarComponent.prototype, "logout", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], BuyerNavbarComponent.prototype, "itemAdded_RemovedCart", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], BuyerNavbarComponent.prototype, "itemRemovedFromCart", void 0);
    BuyerNavbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-buyer-navbar',
            template: __webpack_require__(/*! ./buyer-navbar.component.html */ "./src/app/components/navbar/buyer-navbar/buyer-navbar.component.html"),
            styles: [__webpack_require__(/*! ./buyer-navbar.component.css */ "./src/app/components/navbar/buyer-navbar/buyer-navbar.component.css")]
        }),
        __metadata("design:paramtypes", [_services_storeFetch_service__WEBPACK_IMPORTED_MODULE_1__["StoreFetchService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            angular_notifier__WEBPACK_IMPORTED_MODULE_2__["NotifierService"],
            _services_buyer_service__WEBPACK_IMPORTED_MODULE_4__["BuyerService"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["Title"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
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

module.exports = "\r\n.navbar {\r\n  margin: 0;\r\n  background-color:white;\r\n  height: 80px;\r\n  position: absulote;\r\n  border: 1px;\r\n}\r\n\r\n.navbar-brand{\r\n  max-height: 200px;\r\n  max-width: 200px;\r\n  max-width: 30%;\r\n  overflow: hidden;\r\n  padding: 0;\r\n  text-align: center;\r\n  position: relative;\r\n\r\n}\r\n\r\n.navbar-nav > li{\r\n  padding-left:10px;\r\n  padding-right:10px;\r\n}\r\n\r\nul {\r\n  list-style: none;\r\n  display: inline-flex;\r\n  margin-top: 12px;\r\n  text-align: center;\r\n\r\n}\r\n\r\na {\r\n  text-decoration: none;\r\n  color: black;\r\n\r\n}\r\n\r\n.primary-nav-item {\r\n  list-style: none;\r\n  display: inline-flex;\r\n  padding: 12px;\r\n\r\n}\r\n\r\n.dropbtn , .btn{\r\n\r\n  color: black;\r\n  padding: 12px;\r\n  font-size: 16px;\r\n  border: none;\r\n  cursor: pointer;\r\n}\r\n\r\n/* The container <div> - needed to position the dropdown content */\r\n\r\n.dropdown {\r\n  position: relative;\r\n  display: inline-block;\r\n}\r\n\r\n/* Dropdown Content (Hidden by Default) */\r\n\r\n.dropdown-content {\r\n  display: none;\r\n  position: absolute;\r\n  background-color: #f9f9f9;\r\n  min-width: 160px;\r\n  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);\r\n  z-index: 1;\r\n}\r\n\r\n/* Links inside the dropdown */\r\n\r\n.dropdown-content a {\r\n  color: black;\r\n  padding: 12px 16px;\r\n  text-decoration: none;\r\n  display: block;\r\n}\r\n\r\n/* Change color of dropdown links on hover */\r\n\r\n.dropdown-content a:hover {background-color: #f1f1f1}\r\n\r\n/* Show the dropdown menu on hover */\r\n\r\n.dropdown:hover .dropdown-content{\r\n  display: block;\r\n}\r\n\r\n.primary-nav:hover .primary-nav-item {\r\n  display: block;\r\n\r\n}\r\n\r\n/* Change the background color of the dropdown button when the dropdown content is shown */\r\n\r\n.dropdown:hover .dropbtn {\r\n  background-color: #81aee2;\r\n}\r\n\r\n.btn:hover {\r\n  background-color: rgb(193, 230, 193);\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0VBQ0UsU0FBUztFQUNULHNCQUFzQjtFQUN0QixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFDaEIsY0FBYztFQUNkLGdCQUFnQjtFQUNoQixVQUFVO0VBQ1Ysa0JBQWtCO0VBQ2xCLGtCQUFrQjs7QUFFcEI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLG9CQUFvQjtFQUNwQixnQkFBZ0I7RUFDaEIsa0JBQWtCOztBQUVwQjs7QUFDQTtFQUNFLHFCQUFxQjtFQUNyQixZQUFZOztBQUVkOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLG9CQUFvQjtFQUNwQixhQUFhOztBQUVmOztBQUVBOztFQUVFLFlBQVk7RUFDWixhQUFhO0VBQ2IsZUFBZTtFQUNmLFlBQVk7RUFDWixlQUFlO0FBQ2pCOztBQUdBLGtFQUFrRTs7QUFDbEU7RUFDRSxrQkFBa0I7RUFDbEIscUJBQXFCO0FBQ3ZCOztBQUVBLHlDQUF5Qzs7QUFDekM7RUFDRSxhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLHlCQUF5QjtFQUN6QixnQkFBZ0I7RUFDaEIsNENBQTRDO0VBQzVDLFVBQVU7QUFDWjs7QUFFQSw4QkFBOEI7O0FBQzlCO0VBQ0UsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixxQkFBcUI7RUFDckIsY0FBYztBQUNoQjs7QUFFQSw0Q0FBNEM7O0FBQzVDLDJCQUEyQix5QkFBeUI7O0FBRXBELG9DQUFvQzs7QUFDcEM7RUFDRSxjQUFjO0FBQ2hCOztBQUNBO0VBQ0UsY0FBYzs7QUFFaEI7O0FBR0EsMEZBQTBGOztBQUMxRjtFQUNFLHlCQUF5QjtBQUMzQjs7QUFDQTtFQUNFLG9DQUFvQztBQUN0QyIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbmF2YmFyL25hdmJhci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi5uYXZiYXIge1xyXG4gIG1hcmdpbjogMDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOndoaXRlO1xyXG4gIGhlaWdodDogODBweDtcclxuICBwb3NpdGlvbjogYWJzdWxvdGU7XHJcbiAgYm9yZGVyOiAxcHg7XHJcbn1cclxuXHJcbi5uYXZiYXItYnJhbmR7XHJcbiAgbWF4LWhlaWdodDogMjAwcHg7XHJcbiAgbWF4LXdpZHRoOiAyMDBweDtcclxuICBtYXgtd2lkdGg6IDMwJTtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHJcbn1cclxuXHJcbi5uYXZiYXItbmF2ID4gbGl7XHJcbiAgcGFkZGluZy1sZWZ0OjEwcHg7XHJcbiAgcGFkZGluZy1yaWdodDoxMHB4O1xyXG59XHJcblxyXG51bCB7XHJcbiAgbGlzdC1zdHlsZTogbm9uZTtcclxuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxuICBtYXJnaW4tdG9wOiAxMnB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHJcbn1cclxuYSB7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIGNvbG9yOiBibGFjaztcclxuXHJcbn1cclxuXHJcbi5wcmltYXJ5LW5hdi1pdGVtIHtcclxuICBsaXN0LXN0eWxlOiBub25lO1xyXG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG4gIHBhZGRpbmc6IDEycHg7XHJcblxyXG59XHJcblxyXG4uZHJvcGJ0biAsIC5idG57XHJcblxyXG4gIGNvbG9yOiBibGFjaztcclxuICBwYWRkaW5nOiAxMnB4O1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG5cclxuLyogVGhlIGNvbnRhaW5lciA8ZGl2PiAtIG5lZWRlZCB0byBwb3NpdGlvbiB0aGUgZHJvcGRvd24gY29udGVudCAqL1xyXG4uZHJvcGRvd24ge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbn1cclxuXHJcbi8qIERyb3Bkb3duIENvbnRlbnQgKEhpZGRlbiBieSBEZWZhdWx0KSAqL1xyXG4uZHJvcGRvd24tY29udGVudCB7XHJcbiAgZGlzcGxheTogbm9uZTtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y5ZjlmOTtcclxuICBtaW4td2lkdGg6IDE2MHB4O1xyXG4gIGJveC1zaGFkb3c6IDBweCA4cHggMTZweCAwcHggcmdiYSgwLDAsMCwwLjIpO1xyXG4gIHotaW5kZXg6IDE7XHJcbn1cclxuXHJcbi8qIExpbmtzIGluc2lkZSB0aGUgZHJvcGRvd24gKi9cclxuLmRyb3Bkb3duLWNvbnRlbnQgYSB7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG4gIHBhZGRpbmc6IDEycHggMTZweDtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuXHJcbi8qIENoYW5nZSBjb2xvciBvZiBkcm9wZG93biBsaW5rcyBvbiBob3ZlciAqL1xyXG4uZHJvcGRvd24tY29udGVudCBhOmhvdmVyIHtiYWNrZ3JvdW5kLWNvbG9yOiAjZjFmMWYxfVxyXG5cclxuLyogU2hvdyB0aGUgZHJvcGRvd24gbWVudSBvbiBob3ZlciAqL1xyXG4uZHJvcGRvd246aG92ZXIgLmRyb3Bkb3duLWNvbnRlbnR7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuLnByaW1hcnktbmF2OmhvdmVyIC5wcmltYXJ5LW5hdi1pdGVtIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuXHJcbn1cclxuXHJcblxyXG4vKiBDaGFuZ2UgdGhlIGJhY2tncm91bmQgY29sb3Igb2YgdGhlIGRyb3Bkb3duIGJ1dHRvbiB3aGVuIHRoZSBkcm9wZG93biBjb250ZW50IGlzIHNob3duICovXHJcbi5kcm9wZG93bjpob3ZlciAuZHJvcGJ0biB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzgxYWVlMjtcclxufVxyXG4uYnRuOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTkzLCAyMzAsIDE5Myk7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!----\r\n<nav class=\"navbar navbar-expand-lg navbar-light bg-light\">\r\n  <a class=\"navbar-brand\" href=\"#\"><img src=\"assets\\gexLogo.png\" style=\"max-width: 150px; margin-top: -14px;\" class=\"img-responsive\"></a>\r\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarColor03\" aria-controls=\"navbarColor03\"\r\n    aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n    <span class=\"navbar-toggler-icon\"></span>\r\n  </button>\r\n  <div class=\"collapse navbar-collapse\" id=\"navbarColor03\">\r\n    <ul class=\"navbar-nav mr-auto\">\r\n      <li class=\"nav-item active\">\r\n      </li>\r\n    </ul>\r\n    <ul class=\"logForm\">\r\n      <li class=\"nav-item2\">\r\n        <a class=\"nav-link\" routerLink=\"/login\">Log In</a>\r\n      </li>\r\n      <li class=\"nav-item2\">\r\n        <a class=\"nav-link\" routerLink=\"/buyer-register\">Register</a>\r\n      </li>\r\n    </ul>\r\n  </div>\r\n</nav>\r\n-->\r\n\r\n\r\n  <nav class=\"navbar navbar-expand-lg navbar-light\" >\r\n    <a class=\"navbar-brand\" href=\"#\"><img src=\"assets\\RequirenLogoDraft2.png\"></a>\r\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\"\r\n      aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n      <span class=\"navbar-toggler-icon\"></span>\r\n    </button>\r\n    <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\r\n\r\n        <ul class=\"primary-nav\">\r\n          <li class=\"primary-nav-item\"><a href=\"#\">Buy</a></li>\r\n          <li class=\"primary-nav-item\"><a href=\"#\">Sell</a></li>\r\n          <li class=\"primary-nav-item\"><a href=\"#\">How it works</a></li>\r\n          <li class=\"primary-nav-item\"><a href=\"#\">Pricing</a></li>\r\n          <li class=\"dropdown\">\r\n              <button class=\"dropbtn dropdown-toggle\" data-toggle=\"dropdown\">More</button>\r\n              <div class=\"dropdown-content\">\r\n                <a href=\"#\">About Us</a>\r\n                <a href=\"#\">Reviews</a>\r\n                <a href=\"#\">Vendors</a>\r\n                <a href=\"#\">FAQs</a>\r\n              </div>\r\n            </li>\r\n        </ul>\r\n\r\n      <ul class=\"primary-nav ml-auto\">\r\n        <li class=\"primary-nav\">\r\n          <button class=\"btn\" type=\"button\" routerLink=\"/login\" routerLinkActive=\"active-link\"\r\n           >Login</button>\r\n        </li>\r\n      </ul>\r\n    </div>\r\n  </nav>\r\n\r\n\r\n"

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
/* harmony import */ var angular_notifier__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular-notifier */ "./node_modules/angular-notifier/esm5/angular-notifier.js");
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
    function NavbarComponent(registerService, storeFetchService, router, notifierService, titleService, route) {
        this.registerService = registerService;
        this.storeFetchService = storeFetchService;
        this.router = router;
        this.notifierService = notifierService;
        this.titleService = titleService;
        this.route = route;
        this.notifier = notifierService;
    }
    NavbarComponent.prototype.ngOnInit = function () {
        // This line of code sets the browser tab title when a user is navigating through the GEX application.
        this.titleService.setTitle("Requiren");
        if (this.storeFetchService.buyerIsLoggedIn()) {
            this.userType = "buyer";
            this.titleService.setTitle("Buyer | GEX");
        }
        else if (this.storeFetchService.sellerIsLoggedIn()) {
            this.userType = "seller";
        }
        else {
            this.userType = "none";
        }
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
            angular_notifier__WEBPACK_IMPORTED_MODULE_4__["NotifierService"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["Title"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
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

module.exports = "/*.navbar-brand{\r\n    max-height: 30px;\r\n    max-width: 30%;\r\n    overflow: visible;\r\n    padding: 0;\r\n  \r\n  }\r\n  \r\n  .logForm {\r\n    list-style-type: none;\r\n    margin: 0;\r\n    padding: 0;\r\n    overflow: hidden;\r\n  }\r\n  \r\n  .nav-item2 {\r\n    float: left;\r\n    list-style-type: none;\r\n    font-size: 14px;\r\n    padding-top: 0;\r\n  }\r\n  \r\n  .nav-item2 a:hover {\r\n    background-color: lightgray;\r\n  }\r\n*/\r\n  .navbar-nav > li{\r\n    padding-left:10px;\r\n    padding-right:10px;\r\n  }\r\n  .img-circle {\r\n    border-radius: 50%;\r\n    -webkit-transform: translateZ(10);\r\n    transform: translateZ(0);\r\n  }\r\n  .dropdown:hover>.dropdown-menu {\r\n    display: block;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9uYXZiYXIvc2VsbGVyLW5hdmJhci9zZWxsZXItbmF2YmFyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Q0F5QkM7RUFDQztJQUNFLGlCQUFpQjtJQUNqQixrQkFBa0I7RUFDcEI7RUFFQTtJQUNFLGtCQUFrQjtJQUVsQixpQ0FBaUM7SUFDakMsd0JBQXdCO0VBQzFCO0VBRUE7SUFDRSxjQUFjO0VBQ2hCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9uYXZiYXIvc2VsbGVyLW5hdmJhci9zZWxsZXItbmF2YmFyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKi5uYXZiYXItYnJhbmR7XHJcbiAgICBtYXgtaGVpZ2h0OiAzMHB4O1xyXG4gICAgbWF4LXdpZHRoOiAzMCU7XHJcbiAgICBvdmVyZmxvdzogdmlzaWJsZTtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgXHJcbiAgfVxyXG4gIFxyXG4gIC5sb2dGb3JtIHtcclxuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIH1cclxuICBcclxuICAubmF2LWl0ZW0yIHtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgcGFkZGluZy10b3A6IDA7XHJcbiAgfVxyXG4gIFxyXG4gIC5uYXYtaXRlbTIgYTpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyYXk7XHJcbiAgfVxyXG4qL1xyXG4gIC5uYXZiYXItbmF2ID4gbGl7XHJcbiAgICBwYWRkaW5nLWxlZnQ6MTBweDtcclxuICAgIHBhZGRpbmctcmlnaHQ6MTBweDtcclxuICB9XHJcblxyXG4gIC5pbWctY2lyY2xlIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZSgwKTtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDEwKTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWigwKTtcclxuICB9XHJcblxyXG4gIC5kcm9wZG93bjpob3Zlcj4uZHJvcGRvd24tbWVudSB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICB9Il19 */"

/***/ }),

/***/ "./src/app/components/navbar/seller-navbar/seller-navbar.component.html":
/*!******************************************************************************!*\
  !*** ./src/app/components/navbar/seller-navbar/seller-navbar.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar fixed-top navbar-expand-lg navbar-light\" style=\"background-color:white; border-bottom: 5px solid #EDEDED; height: 100px;\">\r\n  <a class=\"navbar-brand\" href=\"#\" style=\"font-size: 22px\">Seller_Page(s)</a>\r\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\"\r\n    aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n    <span class=\"navbar-toggler-icon\"></span>\r\n  </button>\r\n  <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\r\n    <ul class=\"navbar-nav ml-auto\">\r\n        <a class=\"nav-item\">\r\n            <img class=\"img-circle\" src=\"../../../../assets/profileAvatar.png\" alt=\"\" width=\"40\" height=\"40\">\r\n        </a>\r\n      <li class=\"nav-item dropdown\">\r\n        <a class=\"nav-link dropdown-toggle\" href=\"#\" id=\"navbarDropdown\" role=\"button\" data-toggle=\"dropdown\"\r\n          aria-haspopup=\"true\" aria-expanded=\"false\" style=\"font-size: 18px\">\r\n          {{sellerNavbar.firstName}} {{sellerNavbar.lastName}}\r\n        </a>\r\n        <div class=\"dropdown-menu dropdown-menu-right\" aria-labelledby=\"navbarDropdown\">\r\n          <a class=\"dropdown-item\" routerLink=\"/seller/seller-services\" routerLinkActive=\"active-link\">My Services/New Service</a>\r\n          <a class=\"dropdown-item\" routerLink=\"/seller\" routerLinkActive=\"active-link\">Go to My Portal</a>\r\n          <div class=\"dropdown-divider\"></div>\r\n          <a class=\"dropdown-item\" routerLink=\"/seller/seller-account\" routerLinkActive=\"active-link\">My Account</a>\r\n          <a class=\"dropdown-item\" (click)=\"onLogoutClick()\" routerLink=\"/seller-login\" routerLinkActive=\"active-link\" style=\"color:red\">Logout</a>\r\n          <!----<a *ngIf=\"logout == true\" class=\"dropdown-item\" (click)=\"onLogoutClick()\" routerLink=\"/seller-login\" routerLinkActive=\"active-link\">Logout</a>-->\r\n        </div>\r\n      </li>\r\n    </ul>\r\n  </div>\r\n</nav>"

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
/* harmony import */ var angular_notifier__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-notifier */ "./node_modules/angular-notifier/esm5/angular-notifier.js");
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
    function SellerNavbarComponent(sellerService, storeFetchService, notifierService, router, titleService, route) {
        this.sellerService = sellerService;
        this.storeFetchService = storeFetchService;
        this.notifierService = notifierService;
        this.router = router;
        this.titleService = titleService;
        this.route = route;
        this.sellerNavbar = {};
        this.notifier = notifierService;
    }
    SellerNavbarComponent.prototype.ngOnInit = function () {
        // This line of code sets the browser tab title when a user is navigating through the GEX application seller related pages.
        this.titleService.setTitle("Seller | Requiren");
        this.sellerNavbar = this.route.snapshot.data['seller'];
        this.sellerNavbar.firstName = this.sellerNavbar['data']['first_name'];
        this.sellerNavbar.lastName = this.sellerNavbar['data']['last_name'];
        //console.log(this.sellerNavbar.lastName);
    };
    // This function logs out the current user when they click logout on the navbar. Every user, when they log in, gets stored locally so this funciton
    // goes into the local memory using the services developed in order to remove the current user so that if another user wishes to log on they can.
    // It also navigates the user to the correct page since they no longer have access to the seller pages once they log out.
    SellerNavbarComponent.prototype.onLogoutClick = function () {
        this.sellerService.sellerLogout();
        this.storeFetchService.userLogout();
        this.notifier.notify('success', 'You are logged out');
        this.router.navigate(['/seller-login']);
        // window.location.reload();
        return false;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], SellerNavbarComponent.prototype, "logout", void 0);
    SellerNavbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-seller-navbar',
            template: __webpack_require__(/*! ./seller-navbar.component.html */ "./src/app/components/navbar/seller-navbar/seller-navbar.component.html"),
            styles: [__webpack_require__(/*! ./seller-navbar.component.css */ "./src/app/components/navbar/seller-navbar/seller-navbar.component.css")]
        }),
        __metadata("design:paramtypes", [_services_seller_service__WEBPACK_IMPORTED_MODULE_1__["SellerService"],
            _services_storeFetch_service__WEBPACK_IMPORTED_MODULE_2__["StoreFetchService"],
            angular_notifier__WEBPACK_IMPORTED_MODULE_3__["NotifierService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["Title"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]])
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

module.exports = "\r\nbody{\r\n  -webkit-touch-callout: none;\r\n  -webkit-text-size-adjust: none;\r\n  -webkit-user-select: node;\r\n  height: 100vh;\r\n  background-repeat:no-repeat;\r\n  background-size:cover;\r\n  margin: 0 auto;\r\n  padding: 0;\r\n  overflow-x: hidden;\r\n}\r\n\r\nform {\r\n  color: black;\r\n  border: none;\r\n  width: 433px;\r\n  height: 630px;\r\n  position: relative;\r\n  text-align: center;\r\n  margin: auto;\r\n  margin-top: 60px;\r\n  overflow: hidden;\r\n  align-content: center;\r\n  box-shadow: 0 8px 12px 0 rgba(0,0,0,0.2);\r\n  transition: 0.3s;\r\n\r\n}\r\n\r\nform:hover {\r\n  box-shadow: 0 14px 30px 0 rgba(0,0,0,0.2);\r\n}\r\n\r\n/* Add padding to containers */\r\n\r\n.container {\r\n  padding: 16px;\r\n\r\n}\r\n\r\n.innerform {\r\n  padding: 20px;\r\n}\r\n\r\n.header {\r\n  text-align: center;\r\n  padding: 0;\r\n  width: 100%;\r\n  margin: 0;\r\n}\r\n\r\n/* Full-width input fields */\r\n\r\ninput[type=text], input[type=password] , input[type=tel] {\r\n  width: 400px;\r\n  height: 50px;\r\n  padding: 15px;\r\n  margin: 5px 0 22px 0;\r\n  display: inline-block;\r\n  border: none;\r\n  background: #0d0f11;\r\n  opacity: .65;\r\n  color: white;\r\n\r\n\r\n}\r\n\r\ninput[type=text]:focus, input[type=password]:focus {\r\n  background-color: rgb(112, 58, 70);\r\n  outline: none;\r\n}\r\n\r\n/* Overwrite default styles of hr */\r\n\r\nhr {\r\n  border: 1px solid #d3d3e6;\r\n  margin-bottom: 25px;\r\n}\r\n\r\n/* Set a style for the submit/register button */\r\n\r\n.btn {\r\n  background-color: rgb(17, 112, 221);\r\n  color: white;\r\n  font-size: 16px;\r\n  text-align: center;\r\n  padding: 16px;\r\n  margin: 12px 0px;\r\n  border: none;\r\n  cursor: pointer;\r\n  width: 400px;\r\n  height: 50px;\r\n  padding: 15px;\r\n  opacity: 0.9;\r\n}\r\n\r\n.btn:hover {\r\n  opacity:.75;\r\n  background-color: darkgreen;\r\n}\r\n\r\n/* Add a blue text color to links */\r\n\r\na {\r\n  color: rgb(45, 133, 216);\r\n  font-size: 14px;\r\n  font-weight: bold;\r\n}\r\n\r\n/* Set a grey background color and center the text of the \"sign in\" section */\r\n\r\n.signin {\r\n  background-color: #f1f1f1;\r\n  text-align: center;\r\n}\r\n\r\n::-webkit-input-placeholder {\r\n  color: whitesmoke;\r\n  opacity: 1; /* Firefox */\r\n  font-size: 15px;\r\n\r\n}\r\n\r\n::-ms-input-placeholder {\r\n  color: whitesmoke;\r\n  opacity: 1; /* Firefox */\r\n  font-size: 15px;\r\n\r\n}\r\n\r\n::placeholder {\r\n  color: whitesmoke;\r\n  opacity: 1; /* Firefox */\r\n  font-size: 15px;\r\n\r\n}\r\n\r\n:-ms-input-placeholder { /* Internet Explorer 10-11 */\r\n color: whitesmoke;\r\n font-size: 15px;\r\n}\r\n\r\n::-ms-input-placeholder { /* Microsoft Edge */\r\n color: whitesmoke;\r\n font-size: 15px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9yZWdpc3Rlci9CdXllclJlZ2lzdGVyL0J1eWVyUmVnaXN0ZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7RUFDRSwyQkFBMkI7RUFDM0IsOEJBQThCO0VBQzlCLHlCQUF5QjtFQUN6QixhQUFhO0VBQ2IsMkJBQTJCO0VBQzNCLHFCQUFxQjtFQUNyQixjQUFjO0VBQ2QsVUFBVTtFQUNWLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixZQUFZO0VBQ1osWUFBWTtFQUNaLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLHFCQUFxQjtFQUNyQix3Q0FBd0M7RUFDeEMsZ0JBQWdCOztBQUVsQjs7QUFDQTtFQUNFLHlDQUF5QztBQUMzQzs7QUFFQSw4QkFBOEI7O0FBQzlCO0VBQ0UsYUFBYTs7QUFFZjs7QUFDQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsV0FBVztFQUNYLFNBQVM7QUFDWDs7QUFFQSw0QkFBNEI7O0FBQzVCO0VBQ0UsWUFBWTtFQUNaLFlBQVk7RUFDWixhQUFhO0VBQ2Isb0JBQW9CO0VBQ3BCLHFCQUFxQjtFQUNyQixZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLFlBQVk7RUFDWixZQUFZOzs7QUFHZDs7QUFFQTtFQUNFLGtDQUFrQztFQUNsQyxhQUFhO0FBQ2Y7O0FBRUEsbUNBQW1DOztBQUNuQztFQUNFLHlCQUF5QjtFQUN6QixtQkFBbUI7QUFDckI7O0FBRUEsK0NBQStDOztBQUMvQztFQUNFLG1DQUFtQztFQUNuQyxZQUFZO0VBQ1osZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWixlQUFlO0VBQ2YsWUFBWTtFQUNaLFlBQVk7RUFDWixhQUFhO0VBQ2IsWUFBWTtBQUNkOztBQUdBO0VBQ0UsV0FBVztFQUNYLDJCQUEyQjtBQUM3Qjs7QUFHQSxtQ0FBbUM7O0FBQ25DO0VBQ0Usd0JBQXdCO0VBQ3hCLGVBQWU7RUFDZixpQkFBaUI7QUFDbkI7O0FBR0EsNkVBQTZFOztBQUM3RTtFQUNFLHlCQUF5QjtFQUN6QixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsVUFBVSxFQUFFLFlBQVk7RUFDeEIsZUFBZTs7QUFFakI7O0FBTEE7RUFDRSxpQkFBaUI7RUFDakIsVUFBVSxFQUFFLFlBQVk7RUFDeEIsZUFBZTs7QUFFakI7O0FBTEE7RUFDRSxpQkFBaUI7RUFDakIsVUFBVSxFQUFFLFlBQVk7RUFDeEIsZUFBZTs7QUFFakI7O0FBRUEseUJBQXlCLDRCQUE0QjtDQUNwRCxpQkFBaUI7Q0FDakIsZUFBZTtBQUNoQjs7QUFFQSwwQkFBMEIsbUJBQW1CO0NBQzVDLGlCQUFpQjtDQUNqQixlQUFlO0FBQ2hCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9yZWdpc3Rlci9CdXllclJlZ2lzdGVyL0J1eWVyUmVnaXN0ZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5ib2R5e1xyXG4gIC13ZWJraXQtdG91Y2gtY2FsbG91dDogbm9uZTtcclxuICAtd2Via2l0LXRleHQtc2l6ZS1hZGp1c3Q6IG5vbmU7XHJcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9kZTtcclxuICBoZWlnaHQ6IDEwMHZoO1xyXG4gIGJhY2tncm91bmQtcmVwZWF0Om5vLXJlcGVhdDtcclxuICBiYWNrZ3JvdW5kLXNpemU6Y292ZXI7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbiAgcGFkZGluZzogMDtcclxuICBvdmVyZmxvdy14OiBoaWRkZW47XHJcbn1cclxuXHJcbmZvcm0ge1xyXG4gIGNvbG9yOiBibGFjaztcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgd2lkdGg6IDQzM3B4O1xyXG4gIGhlaWdodDogNjMwcHg7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBtYXJnaW46IGF1dG87XHJcbiAgbWFyZ2luLXRvcDogNjBweDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxuICBib3gtc2hhZG93OiAwIDhweCAxMnB4IDAgcmdiYSgwLDAsMCwwLjIpO1xyXG4gIHRyYW5zaXRpb246IDAuM3M7XHJcblxyXG59XHJcbmZvcm06aG92ZXIge1xyXG4gIGJveC1zaGFkb3c6IDAgMTRweCAzMHB4IDAgcmdiYSgwLDAsMCwwLjIpO1xyXG59XHJcblxyXG4vKiBBZGQgcGFkZGluZyB0byBjb250YWluZXJzICovXHJcbi5jb250YWluZXIge1xyXG4gIHBhZGRpbmc6IDE2cHg7XHJcblxyXG59XHJcbi5pbm5lcmZvcm0ge1xyXG4gIHBhZGRpbmc6IDIwcHg7XHJcbn1cclxuXHJcbi5oZWFkZXIge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBwYWRkaW5nOiAwO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1hcmdpbjogMDtcclxufVxyXG5cclxuLyogRnVsbC13aWR0aCBpbnB1dCBmaWVsZHMgKi9cclxuaW5wdXRbdHlwZT10ZXh0XSwgaW5wdXRbdHlwZT1wYXNzd29yZF0gLCBpbnB1dFt0eXBlPXRlbF0ge1xyXG4gIHdpZHRoOiA0MDBweDtcclxuICBoZWlnaHQ6IDUwcHg7XHJcbiAgcGFkZGluZzogMTVweDtcclxuICBtYXJnaW46IDVweCAwIDIycHggMDtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGJhY2tncm91bmQ6ICMwZDBmMTE7XHJcbiAgb3BhY2l0eTogLjY1O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuXHJcblxyXG59XHJcblxyXG5pbnB1dFt0eXBlPXRleHRdOmZvY3VzLCBpbnB1dFt0eXBlPXBhc3N3b3JkXTpmb2N1cyB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDExMiwgNTgsIDcwKTtcclxuICBvdXRsaW5lOiBub25lO1xyXG59XHJcblxyXG4vKiBPdmVyd3JpdGUgZGVmYXVsdCBzdHlsZXMgb2YgaHIgKi9cclxuaHIge1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNkM2QzZTY7XHJcbiAgbWFyZ2luLWJvdHRvbTogMjVweDtcclxufVxyXG5cclxuLyogU2V0IGEgc3R5bGUgZm9yIHRoZSBzdWJtaXQvcmVnaXN0ZXIgYnV0dG9uICovXHJcbi5idG4ge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxNywgMTEyLCAyMjEpO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHBhZGRpbmc6IDE2cHg7XHJcbiAgbWFyZ2luOiAxMnB4IDBweDtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIHdpZHRoOiA0MDBweDtcclxuICBoZWlnaHQ6IDUwcHg7XHJcbiAgcGFkZGluZzogMTVweDtcclxuICBvcGFjaXR5OiAwLjk7XHJcbn1cclxuXHJcblxyXG4uYnRuOmhvdmVyIHtcclxuICBvcGFjaXR5Oi43NTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrZ3JlZW47XHJcbn1cclxuXHJcblxyXG4vKiBBZGQgYSBibHVlIHRleHQgY29sb3IgdG8gbGlua3MgKi9cclxuYSB7XHJcbiAgY29sb3I6IHJnYig0NSwgMTMzLCAyMTYpO1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuXHJcbi8qIFNldCBhIGdyZXkgYmFja2dyb3VuZCBjb2xvciBhbmQgY2VudGVyIHRoZSB0ZXh0IG9mIHRoZSBcInNpZ24gaW5cIiBzZWN0aW9uICovXHJcbi5zaWduaW4ge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmMWYxZjE7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG46OnBsYWNlaG9sZGVyIHtcclxuICBjb2xvcjogd2hpdGVzbW9rZTtcclxuICBvcGFjaXR5OiAxOyAvKiBGaXJlZm94ICovXHJcbiAgZm9udC1zaXplOiAxNXB4O1xyXG5cclxufVxyXG5cclxuOi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7IC8qIEludGVybmV0IEV4cGxvcmVyIDEwLTExICovXHJcbiBjb2xvcjogd2hpdGVzbW9rZTtcclxuIGZvbnQtc2l6ZTogMTVweDtcclxufVxyXG5cclxuOjotbXMtaW5wdXQtcGxhY2Vob2xkZXIgeyAvKiBNaWNyb3NvZnQgRWRnZSAqL1xyXG4gY29sb3I6IHdoaXRlc21va2U7XHJcbiBmb250LXNpemU6IDE1cHg7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/components/register/BuyerRegister/BuyerRegister.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/components/register/BuyerRegister/BuyerRegister.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\r\n<body>\r\n    <div class=\"container\">\r\n        <form (submit)=\"OnBuyerRegisterSubmit()\">\r\n            <div class=\"container\">\r\n                <div class=\"container header\">\r\n                <h3>Register</h3>\r\n                </div>\r\n                <hr>\r\n                <input type=\"text\" [(ngModel)]=\"email\" name=\"email\" placeholder=\"Enter Email\" required>\r\n                <p>Seller? <a routerLink=\"/seller-register\" routerLinkActive=\"active\"> Register here.</a></p>\r\n                <input type=\"text\" placeholder=\"Enter First Name\" [(ngModel)]=\"first_name\" name=\"first_name\" required>\r\n                <input type=\"text\" placeholder=\"Enter Last Name\" [(ngModel)]=\"last_name\" name=\"last_name\" required>\r\n                <input type=\"password\" placeholder=\"Enter Password\" [(ngModel)]=\"password\" name=\"psw\" required>\r\n                <p>By creating an account you agree to our <a href=\"#\">Terms & Privacy</a>.</p>\r\n                <button type=\"submit\" class=\"btn\" routerLink=\"/buyer-register\" routerLinkActive=\"active\">Register</button>\r\n                <p>Already have an account? <a routerLink=\"/login\" routerLinkActive=\"active\">Login</a>.</p>\r\n            </div>\r\n        </form>\r\n    </div>\r\n</body>\r\n"

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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_register_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/register.service */ "./src/app/services/register.service.ts");
/* harmony import */ var angular_notifier__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular-notifier */ "./node_modules/angular-notifier/esm5/angular-notifier.js");
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
    function BuyerRegisterComponent(validateService, notifierService, router, registerService) {
        this.validateService = validateService;
        this.notifierService = notifierService;
        this.router = router;
        this.registerService = registerService;
        this.notifier = notifierService;
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
            this.notifier.notify('error', 'Please fill in all fields');
            return false;
        }
        // ValidateEmail
        if (!this.validateService.validateEmail(buyer.email)) {
            this.notifier.notify('error', 'Invalid Email');
            return false;
        }
        // Register Buyer
        this.registerService.RegisterBuyer(buyer).subscribe(function (data) {
            if (data.success) {
                _this.router.navigate(['/preactivation']); // Tell buyer to checkemail
            }
            else {
                _this.notifier.notify('error', data.msg);
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
            angular_notifier__WEBPACK_IMPORTED_MODULE_4__["NotifierService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _services_register_service__WEBPACK_IMPORTED_MODULE_3__["RegisterService"]])
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

module.exports = "\r\nbody{\r\n  -webkit-touch-callout: none;\r\n  -webkit-text-size-adjust: none;\r\n  -webkit-user-select: node;\r\n  height: 110vh;\r\n  background-repeat:no-repeat;\r\n  background-size:cover;\r\n  margin: 0 auto;\r\n  padding: 0;\r\n\r\n}\r\n\r\nform {\r\n\r\n  color: black;\r\n  opacity: 1;\r\n  border: none;\r\n  width: 500px;\r\n  height: 1050px;\r\n  position: relative;\r\n  text-align: center;\r\n  margin-top: 80px;\r\n  margin: auto;\r\n  overflow: hidden;\r\n  align-content: center;\r\n  box-shadow: 0 8px 12px 0 rgba(0,0,0,0.2);\r\n  transition: 0.3s;\r\n\r\n}\r\n\r\nform:hover {\r\n  box-shadow: 0 14px 30px 0 rgba(0,0,0,0.2);\r\n}\r\n\r\n.clear-footer {\r\n  height: 100px;\r\n}\r\n\r\nh3 {\r\n  text-align: center;\r\n}\r\n\r\np {\r\n\r\n  text-align: center;\r\n}\r\n\r\n/* Add padding to containers */\r\n\r\n.container {\r\n  padding: 16px;\r\n  margin: auto;\r\n  min-width: 435px;\r\n\r\n\r\n}\r\n\r\n.wrapper {\r\n  opacity: .90;\r\n  min-width: 435px;\r\n  border-radius: 25px;\r\n  text-align: center;\r\n}\r\n\r\n.innerform {\r\n  padding: 20px;\r\n}\r\n\r\n.header {\r\n  text-align: left;\r\n  padding: 0;\r\n  max-width: 450px;\r\n  margin: 0;\r\n}\r\n\r\n/* Full-width input fields */\r\n\r\ninput[type=text], input[type=password] , input[type=tel] {\r\n  width: 400px;\r\n  height: 50px;\r\n  padding: 15px;\r\n  margin: 5px 0 22px 0;\r\n  display: inline-block;\r\n  border: none;\r\n  background: #0d0f11;\r\n  opacity: .65;\r\n  color: white;\r\n  font-weight: bold;\r\n}\r\n\r\ninput[type=text]:focus, input[type=password]:focus , input[type=tel]:focus {\r\n  background-color: rgb(112, 58, 70);\r\n  outline: none;\r\n}\r\n\r\n/* Overwrite default styles of hr */\r\n\r\nhr {\r\n  border: 1px solid #d3d3e6;\r\n  margin-bottom: 25px;\r\n}\r\n\r\n/* Set a style for the submit/register button */\r\n\r\n.btn {\r\n  background-color: rgb(17, 112, 221);\r\n  color: white;\r\n  font-size: 16px;\r\n  text-align: center;\r\n  padding: 16px;\r\n  margin: 8px 0;\r\n  border: none;\r\n  cursor: pointer;\r\n  width: 400px;\r\n  height: 50px;\r\n  padding: 15px;\r\n  opacity: 0.9;\r\n}\r\n\r\n.btn:hover {\r\n  opacity:1;\r\n  background-color: darkgreen;\r\n}\r\n\r\n/* Add a blue text color to links */\r\n\r\na {\r\n  color: rgb(45, 133, 216);\r\n  font-size: 14px;\r\n  font-weight: bold;\r\n}\r\n\r\n/* Set a grey background color and center the text of the \"sign in\" section */\r\n\r\n.signin {\r\n  background-color: #f1f1f1;\r\n  text-align: center;\r\n}\r\n\r\n::-webkit-input-placeholder {\r\n  color: white;\r\n  opacity: 1; /* Firefox */\r\n  font-size: 15px;\r\n  font-weight: 400;\r\n\r\n}\r\n\r\n::-ms-input-placeholder {\r\n  color: white;\r\n  opacity: 1; /* Firefox */\r\n  font-size: 15px;\r\n  font-weight: 400;\r\n\r\n}\r\n\r\n::placeholder {\r\n  color: white;\r\n  opacity: 1; /* Firefox */\r\n  font-size: 15px;\r\n  font-weight: 400;\r\n\r\n}\r\n\r\n:-ms-input-placeholder { /* Internet Explorer 10-11 */\r\n color: white;\r\n font-size: 15px;\r\n}\r\n\r\n::-ms-input-placeholder { /* Microsoft Edge */\r\n color: white;\r\n font-size: 15px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9yZWdpc3Rlci9TZWxsZXJSZWdpc3Rlci9TZWxsZXJSZWdpc3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtFQUNFLDJCQUEyQjtFQUMzQiw4QkFBOEI7RUFDOUIseUJBQXlCO0VBQ3pCLGFBQWE7RUFDYiwyQkFBMkI7RUFDM0IscUJBQXFCO0VBQ3JCLGNBQWM7RUFDZCxVQUFVOztBQUVaOztBQUVBOztFQUVFLFlBQVk7RUFDWixVQUFVO0VBQ1YsWUFBWTtFQUNaLFlBQVk7RUFDWixjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixxQkFBcUI7RUFDckIsd0NBQXdDO0VBQ3hDLGdCQUFnQjs7QUFFbEI7O0FBQ0E7RUFDRSx5Q0FBeUM7QUFDM0M7O0FBQ0E7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBQ0E7O0VBRUUsa0JBQWtCO0FBQ3BCOztBQUVBLDhCQUE4Qjs7QUFDOUI7RUFDRSxhQUFhO0VBQ2IsWUFBWTtFQUNaLGdCQUFnQjs7O0FBR2xCOztBQUNBO0VBQ0UsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLFVBQVU7RUFDVixnQkFBZ0I7RUFDaEIsU0FBUztBQUNYOztBQUVBLDRCQUE0Qjs7QUFDNUI7RUFDRSxZQUFZO0VBQ1osWUFBWTtFQUNaLGFBQWE7RUFDYixvQkFBb0I7RUFDcEIscUJBQXFCO0VBQ3JCLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLFlBQVk7RUFDWixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxrQ0FBa0M7RUFDbEMsYUFBYTtBQUNmOztBQUVBLG1DQUFtQzs7QUFDbkM7RUFDRSx5QkFBeUI7RUFDekIsbUJBQW1CO0FBQ3JCOztBQUVBLCtDQUErQzs7QUFDL0M7RUFDRSxtQ0FBbUM7RUFDbkMsWUFBWTtFQUNaLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLGFBQWE7RUFDYixZQUFZO0VBQ1osZUFBZTtFQUNmLFlBQVk7RUFDWixZQUFZO0VBQ1osYUFBYTtFQUNiLFlBQVk7QUFDZDs7QUFHQTtFQUNFLFNBQVM7RUFDVCwyQkFBMkI7QUFDN0I7O0FBRUEsbUNBQW1DOztBQUNuQztFQUNFLHdCQUF3QjtFQUN4QixlQUFlO0VBQ2YsaUJBQWlCO0FBQ25COztBQUNBLDZFQUE2RTs7QUFDN0U7RUFDRSx5QkFBeUI7RUFDekIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLFVBQVUsRUFBRSxZQUFZO0VBQ3hCLGVBQWU7RUFDZixnQkFBZ0I7O0FBRWxCOztBQU5BO0VBQ0UsWUFBWTtFQUNaLFVBQVUsRUFBRSxZQUFZO0VBQ3hCLGVBQWU7RUFDZixnQkFBZ0I7O0FBRWxCOztBQU5BO0VBQ0UsWUFBWTtFQUNaLFVBQVUsRUFBRSxZQUFZO0VBQ3hCLGVBQWU7RUFDZixnQkFBZ0I7O0FBRWxCOztBQUVBLHlCQUF5Qiw0QkFBNEI7Q0FDcEQsWUFBWTtDQUNaLGVBQWU7QUFDaEI7O0FBRUEsMEJBQTBCLG1CQUFtQjtDQUM1QyxZQUFZO0NBQ1osZUFBZTtBQUNoQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcmVnaXN0ZXIvU2VsbGVyUmVnaXN0ZXIvU2VsbGVyUmVnaXN0ZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5ib2R5e1xyXG4gIC13ZWJraXQtdG91Y2gtY2FsbG91dDogbm9uZTtcclxuICAtd2Via2l0LXRleHQtc2l6ZS1hZGp1c3Q6IG5vbmU7XHJcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9kZTtcclxuICBoZWlnaHQ6IDExMHZoO1xyXG4gIGJhY2tncm91bmQtcmVwZWF0Om5vLXJlcGVhdDtcclxuICBiYWNrZ3JvdW5kLXNpemU6Y292ZXI7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbiAgcGFkZGluZzogMDtcclxuXHJcbn1cclxuXHJcbmZvcm0ge1xyXG5cclxuICBjb2xvcjogYmxhY2s7XHJcbiAgb3BhY2l0eTogMTtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgd2lkdGg6IDUwMHB4O1xyXG4gIGhlaWdodDogMTA1MHB4O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgbWFyZ2luLXRvcDogODBweDtcclxuICBtYXJnaW46IGF1dG87XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbiAgYm94LXNoYWRvdzogMCA4cHggMTJweCAwIHJnYmEoMCwwLDAsMC4yKTtcclxuICB0cmFuc2l0aW9uOiAwLjNzO1xyXG5cclxufVxyXG5mb3JtOmhvdmVyIHtcclxuICBib3gtc2hhZG93OiAwIDE0cHggMzBweCAwIHJnYmEoMCwwLDAsMC4yKTtcclxufVxyXG4uY2xlYXItZm9vdGVyIHtcclxuICBoZWlnaHQ6IDEwMHB4O1xyXG59XHJcblxyXG5oMyB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbnAge1xyXG5cclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi8qIEFkZCBwYWRkaW5nIHRvIGNvbnRhaW5lcnMgKi9cclxuLmNvbnRhaW5lciB7XHJcbiAgcGFkZGluZzogMTZweDtcclxuICBtYXJnaW46IGF1dG87XHJcbiAgbWluLXdpZHRoOiA0MzVweDtcclxuXHJcblxyXG59XHJcbi53cmFwcGVyIHtcclxuICBvcGFjaXR5OiAuOTA7XHJcbiAgbWluLXdpZHRoOiA0MzVweDtcclxuICBib3JkZXItcmFkaXVzOiAyNXB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLmlubmVyZm9ybSB7XHJcbiAgcGFkZGluZzogMjBweDtcclxufVxyXG5cclxuLmhlYWRlciB7XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxuICBwYWRkaW5nOiAwO1xyXG4gIG1heC13aWR0aDogNDUwcHg7XHJcbiAgbWFyZ2luOiAwO1xyXG59XHJcblxyXG4vKiBGdWxsLXdpZHRoIGlucHV0IGZpZWxkcyAqL1xyXG5pbnB1dFt0eXBlPXRleHRdLCBpbnB1dFt0eXBlPXBhc3N3b3JkXSAsIGlucHV0W3R5cGU9dGVsXSB7XHJcbiAgd2lkdGg6IDQwMHB4O1xyXG4gIGhlaWdodDogNTBweDtcclxuICBwYWRkaW5nOiAxNXB4O1xyXG4gIG1hcmdpbjogNXB4IDAgMjJweCAwO1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgYmFja2dyb3VuZDogIzBkMGYxMTtcclxuICBvcGFjaXR5OiAuNjU7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG5pbnB1dFt0eXBlPXRleHRdOmZvY3VzLCBpbnB1dFt0eXBlPXBhc3N3b3JkXTpmb2N1cyAsIGlucHV0W3R5cGU9dGVsXTpmb2N1cyB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDExMiwgNTgsIDcwKTtcclxuICBvdXRsaW5lOiBub25lO1xyXG59XHJcblxyXG4vKiBPdmVyd3JpdGUgZGVmYXVsdCBzdHlsZXMgb2YgaHIgKi9cclxuaHIge1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNkM2QzZTY7XHJcbiAgbWFyZ2luLWJvdHRvbTogMjVweDtcclxufVxyXG5cclxuLyogU2V0IGEgc3R5bGUgZm9yIHRoZSBzdWJtaXQvcmVnaXN0ZXIgYnV0dG9uICovXHJcbi5idG4ge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxNywgMTEyLCAyMjEpO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHBhZGRpbmc6IDE2cHg7XHJcbiAgbWFyZ2luOiA4cHggMDtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIHdpZHRoOiA0MDBweDtcclxuICBoZWlnaHQ6IDUwcHg7XHJcbiAgcGFkZGluZzogMTVweDtcclxuICBvcGFjaXR5OiAwLjk7XHJcbn1cclxuXHJcblxyXG4uYnRuOmhvdmVyIHtcclxuICBvcGFjaXR5OjE7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogZGFya2dyZWVuO1xyXG59XHJcblxyXG4vKiBBZGQgYSBibHVlIHRleHQgY29sb3IgdG8gbGlua3MgKi9cclxuYSB7XHJcbiAgY29sb3I6IHJnYig0NSwgMTMzLCAyMTYpO1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG4vKiBTZXQgYSBncmV5IGJhY2tncm91bmQgY29sb3IgYW5kIGNlbnRlciB0aGUgdGV4dCBvZiB0aGUgXCJzaWduIGluXCIgc2VjdGlvbiAqL1xyXG4uc2lnbmluIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjFmMWYxO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuOjpwbGFjZWhvbGRlciB7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIG9wYWNpdHk6IDE7IC8qIEZpcmVmb3ggKi9cclxuICBmb250LXNpemU6IDE1cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDQwMDtcclxuXHJcbn1cclxuXHJcbjotbXMtaW5wdXQtcGxhY2Vob2xkZXIgeyAvKiBJbnRlcm5ldCBFeHBsb3JlciAxMC0xMSAqL1xyXG4gY29sb3I6IHdoaXRlO1xyXG4gZm9udC1zaXplOiAxNXB4O1xyXG59XHJcblxyXG46Oi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7IC8qIE1pY3Jvc29mdCBFZGdlICovXHJcbiBjb2xvcjogd2hpdGU7XHJcbiBmb250LXNpemU6IDE1cHg7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/components/register/SellerRegister/SellerRegister.component.html":
/*!**********************************************************************************!*\
  !*** ./src/app/components/register/SellerRegister/SellerRegister.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\r\n\r\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\r\n<body>\r\n    <div class=\"clear-footer\"></div>\r\n  <form (submit)=\"OnSellerRegisterSubmit()\" class=\"col-md-8 col-md-offset-8\">\r\n      <div class=\"container\">\r\n        <div class =\"header\">\r\n          <h3>Register</h3>\r\n        </div>\r\n        <hr>\r\n        <input type=\"text\" placeholder=\"Enter Email\" [(ngModel)]=\"email\" name=\"email\" required>\r\n        <input type=\"password\" placeholder=\"Enter Password\" [(ngModel)]=\"password\" name=\"psw\" required>\r\n        <input type=\"password\" placeholder=\"Confirm Password\" [(ngModel)]=\"confirmPassword\" name=\"psw\" required>\r\n        <input type=\"text\" placeholder=\"Legal Name of Entity\" [(ngModel)]=\"entity_name\" name=\"entity_name\" required>\r\n        <!--<input type=\"text\" placeholder=\"Doing business as...\" name=\"dba\" optional>-->\r\n        <input type=\"text\" placeholder=\"Your position\" [(ngModel)]=\"position\" name=\"position\" optional>\r\n        <input type=\"text\" placeholder=\"Enter First Name\" [(ngModel)]=\"first_name\" name=\"first_name\" required>\r\n        <input type=\"text\" placeholder=\"Enter Last Name\" [(ngModel)]=\"last_name\" name=\"last_name\" required>\r\n        <input type=\"tel\" placeholder=\"Enter phone number\" [(ngModel)]=\"phone_number\" name=\"phone_number\" required>\r\n        <hr>\r\n      </div>\r\n      <div class=\"wrapper\">\r\n        <p>By creating an account you agree to our <a href=\"#\">Terms & Privacy</a>.</p>\r\n        <button type=\"submit\" class=\"registerbtn btn\" routerLink=\"/seller-register\" routerLinkActive=\"active\">Register</button>\r\n      </div>\r\n      <div class=\"container\">\r\n      <p>Already have an account? <a routerLink=\"/seller-login\" routerLinkActive=\"active\">Log in</a>.</p>\r\n      <br>\r\n      <p>Are you a Buyer? <a routerLink=\"/buyer-register\" routerLinkACtive=\"active\">Register here</a>.</p>\r\n    </div>\r\n  </form>\r\n  <div class=\"clear-footer\"></div>\r\n</body>\r\n"

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
/* harmony import */ var angular_notifier__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular-notifier */ "./node_modules/angular-notifier/esm5/angular-notifier.js");
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
    function SellerRegisterComponent(validateService, notifierService, router, registerService) {
        this.validateService = validateService;
        this.notifierService = notifierService;
        this.router = router;
        this.registerService = registerService;
        this.notifier = notifierService;
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
            this.notifier.notify('error', 'Please fill in all fields');
            return false;
        }
        // Password Confirmation
        // tslint:disable-next-line:triple-equals
        if (seller.password != this.confirmPassword) {
            this.notifier.notify('error', 'Passwords do not match');
            return false;
        }
        // ValidateEmail
        if (!this.validateService.validateEmail(seller.email)) {
            this.notifier.notify('error', 'Invalid Email');
            return false;
        }
        // Register Seller
        this.registerService.RegisterSeller(seller).subscribe(function (data) {
            if (data.success) { // must know if its a successful register **
                _this.router.navigate(['/preactivation']); // Tell buyer to checkemail
            }
            else {
                _this.notifier.notify('error', data.msg);
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
            angular_notifier__WEBPACK_IMPORTED_MODULE_2__["NotifierService"],
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

module.exports = "body {\r\n    height: 100vh;\r\n    background-image: url('sky-building1.JPG');\r\n    background-position: center;\r\n    background-repeat:no-repeat;\r\n    background-size:cover;\r\n    position: relative;\r\n}\r\n\r\n.clearheader {\r\n    height: 80px;\r\n    clear: both;\r\n}\r\n\r\n.bubble {\r\n  background-color: #241da6;\r\n  color: white;\r\n}\r\n\r\nform{\r\n    margin-top: 25px;\r\n    margin: auto;\r\n    top: 45px;\r\n}\r\n\r\n.container {\r\n  color:black;\r\n  opacity: .90;\r\n}\r\n\r\n.card {\r\n    border: solid 1px gray;\r\n    background-color: whitesmoke;\r\n    color:black;\r\n    opacity: 1;\r\n}\r\n\r\n.parent {\r\n    background-color: white;\r\n\r\n}\r\n\r\np {\r\n    font-size: 16px;\r\n}\r\n\r\n.btn {\r\n\r\n    background-color: rgb(218, 64, 26);\r\n    color: white;\r\n    font-weight: bold;\r\n    opacity: .95;\r\n  }\r\n\r\n/* Add a hover effect for buttons */\r\n\r\n.btn:hover {\r\n  opacity:.75;\r\n  background-color: darkgreen;\r\n  }\r\n\r\nhr {\r\n    border: solid 2px dimgrey !important;\r\n\r\n  }\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9yZXF1ZXN0L3JlcXVlc3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGFBQWE7SUFDYiwwQ0FBd0Q7SUFDeEQsMkJBQTJCO0lBQzNCLDJCQUEyQjtJQUMzQixxQkFBcUI7SUFDckIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLFdBQVc7QUFDZjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixZQUFZO0FBQ2Q7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaLFNBQVM7QUFDYjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0FBQ2Q7O0FBRUE7SUFDSSxzQkFBc0I7SUFDdEIsNEJBQTRCO0lBQzVCLFdBQVc7SUFDWCxVQUFVO0FBQ2Q7O0FBRUE7SUFDSSx1QkFBdUI7O0FBRTNCOztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFDQTs7SUFFSSxrQ0FBa0M7SUFDbEMsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixZQUFZO0VBQ2Q7O0FBRUEsbUNBQW1DOztBQUNuQztFQUNBLFdBQVc7RUFDWCwyQkFBMkI7RUFDM0I7O0FBRUE7SUFDRSxvQ0FBb0M7O0VBRXRDIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9yZXF1ZXN0L3JlcXVlc3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImJvZHkge1xyXG4gICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi8uLi8uLi9hc3NldHMvc2t5LWJ1aWxkaW5nMS5KUEcpO1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6bm8tcmVwZWF0O1xyXG4gICAgYmFja2dyb3VuZC1zaXplOmNvdmVyO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4uY2xlYXJoZWFkZXIge1xyXG4gICAgaGVpZ2h0OiA4MHB4O1xyXG4gICAgY2xlYXI6IGJvdGg7XHJcbn1cclxuXHJcbi5idWJibGUge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMyNDFkYTY7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG5mb3Jte1xyXG4gICAgbWFyZ2luLXRvcDogMjVweDtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIHRvcDogNDVweDtcclxufVxyXG5cclxuLmNvbnRhaW5lciB7XHJcbiAgY29sb3I6YmxhY2s7XHJcbiAgb3BhY2l0eTogLjkwO1xyXG59XHJcblxyXG4uY2FyZCB7XHJcbiAgICBib3JkZXI6IHNvbGlkIDFweCBncmF5O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGVzbW9rZTtcclxuICAgIGNvbG9yOmJsYWNrO1xyXG4gICAgb3BhY2l0eTogMTtcclxufVxyXG5cclxuLnBhcmVudCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuXHJcbn1cclxuXHJcbnAge1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG59XHJcbi5idG4ge1xyXG5cclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMTgsIDY0LCAyNik7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIG9wYWNpdHk6IC45NTtcclxuICB9XHJcblxyXG4gIC8qIEFkZCBhIGhvdmVyIGVmZmVjdCBmb3IgYnV0dG9ucyAqL1xyXG4gIC5idG46aG92ZXIge1xyXG4gIG9wYWNpdHk6Ljc1O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGRhcmtncmVlbjtcclxuICB9XHJcblxyXG4gIGhyIHtcclxuICAgIGJvcmRlcjogc29saWQgMnB4IGRpbWdyZXkgIWltcG9ydGFudDtcclxuXHJcbiAgfVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/components/request/request.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/request/request.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-buyer-navbar *ngIf=\"status\" ></app-buyer-navbar>\r\n<app-seller-navbar *ngIf=\"!status\"></app-seller-navbar>\r\n\r\n<div class=\"clearheader\"></div>\r\n\r\n<body *ngIf=\"status != undefined\">\r\n  &nbsp;\r\n  &nbsp;\r\n  <div class=\"container background\">\r\n    <form>\r\n      <h1>Requests</h1>\r\n      <hr>\r\n      <li class=\"card\">\r\n        <br>\r\n        <div class=\"row\">\r\n          <div class=\"col-md-auto\">\r\n            <h4>&nbsp;{{request.title}}</h4>\r\n          </div>\r\n          <div class=\"col\">\r\n            <b></b>\r\n          </div>\r\n        </div>\r\n        <p><b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Description: </b>{{request.description}}</p>\r\n        <p><b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Offer Count: </b>{{request.offerCount}}</p>\r\n        <p><b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Deadline: </b>{{request.deadline}}</p>\r\n        <div *ngIf=\"!status\" class=\"col-sm-12\" style=\"text-align: right;\">\r\n          <button type=\"button\" routerLink=\"/seller/submit-offer/{{request._id}}\" class=\"btn\">Submit New Offer</button>\r\n        </div>\r\n        &nbsp;\r\n      </li>\r\n      &nbsp;\r\n      <h1>Offers</h1>\r\n      <hr>\r\n      <li class=\"card\" *ngFor=\"let offer of offerList\">\r\n        &nbsp;\r\n\r\n        <div class=\"row\">\r\n          <div class=\"col-md-auto\">\r\n            <h4>&nbsp;{{offer.title}}</h4>\r\n          </div>\r\n          <div class=\"col\">\r\n            <b></b>\r\n          </div>\r\n        </div>\r\n\r\n        <p><b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Price:</b> {{offer.price}}</p>\r\n        <p><b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Description:</b> {{offer.description}}</p>\r\n        <div *ngIf=\"status\" class=\"col-sm-12\" style=\"text-align: right;\">\r\n          <button type=\"button\" routerLink=\"/buyer/checkout/{{offer._id}}/{{request._id}}\" routerLinkActive=\"active-link\" class=\"btn\">Accept Offer</button>\r\n        </div>\r\n        <br>\r\n\r\n      </li>\r\n      <br>\r\n    </form>\r\n  </div>\r\n</body>\r\n"

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
/* harmony import */ var angular_notifier__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-notifier */ "./node_modules/angular-notifier/esm5/angular-notifier.js");
/* harmony import */ var _services_storeFetch_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/storeFetch.service */ "./src/app/services/storeFetch.service.ts");
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
    function RequestComponent(route, requestService, notifierService, router, storeFetchService) {
        this.route = route;
        this.requestService = requestService;
        this.notifierService = notifierService;
        this.router = router;
        this.storeFetchService = storeFetchService;
        this.notifier = notifierService;
    }
    RequestComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.storeFetchService.buyerIsLoggedIn() || this.storeFetchService.sellerIsLoggedIn()) {
        }
        else {
            this.notifier.notify('error', 'Please login to view request.');
            return this.router.navigate(['/login']);
        }
        // get URL parameters
        this.route.params.subscribe(function (params) {
            _this.id = params.id;
            // --> Extract the id pass with URL
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
                    else if (data.status === 1) {
                        _this.status = false; // Seller
                    }
                    else {
                        _this.notifier.notify('success', data.msg);
                        _this.router.navigate(['/']);
                    }
                }
                else {
                    _this.notifier.notify('error', data.msg);
                    _this.router.navigate(['/']);
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
            angular_notifier__WEBPACK_IMPORTED_MODULE_3__["NotifierService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _services_storeFetch_service__WEBPACK_IMPORTED_MODULE_4__["StoreFetchService"]])
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

module.exports = ".center {\r\n  margin: auto;\r\n  width: 60%;\r\n  padding: 10px;\r\n}\r\n.ex1 {\r\n  margin-top: 1.5%;\r\n}\r\n.editBtn{\r\n  background-color: darkorange;\r\n}\r\n.saveBtn{\r\n  background-color: #e60000;\r\n}\r\nhtml, body {\r\n  height: 100%;\r\n}\r\n.clearheader {\r\n  height: 80px;\r\n  clear: both;\r\n}\r\n#container {\r\n  min-height: 100%;\r\n  margin-bottom: -330px;\r\n  position: relative;\r\n}\r\n.contain {\r\n  opacity: 0.85;\r\n  color: black;\r\n  background-color:whitesmoke;\r\n}\r\n#footer {\r\n  height: 330px;\r\n  position: relative;\r\n}\r\n.clearfooter {\r\n  height: 330px;\r\n  clear: both;\r\n}\r\n.divider{\r\n  width:10px;\r\n  height:auto;\r\n  display:inline-block;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zZWxsZXIvc2VsbGVyLWFjY291bnQvc2VsbGVyLWFjY291bnQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQVk7RUFDWixVQUFVO0VBQ1YsYUFBYTtBQUNmO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLDRCQUE0QjtBQUM5QjtBQUNBO0VBQ0UseUJBQXlCO0FBQzNCO0FBRUE7RUFDRSxZQUFZO0FBQ2Q7QUFFQTtFQUNFLFlBQVk7RUFDWixXQUFXO0FBQ2I7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixxQkFBcUI7RUFDckIsa0JBQWtCO0FBQ3BCO0FBRUE7RUFDRSxhQUFhO0VBQ2IsWUFBWTtFQUNaLDJCQUEyQjtBQUM3QjtBQUVBO0VBQ0UsYUFBYTtFQUNiLGtCQUFrQjtBQUNwQjtBQUVBO0VBQ0UsYUFBYTtFQUNiLFdBQVc7QUFDYjtBQUVBO0VBQ0UsVUFBVTtFQUNWLFdBQVc7RUFDWCxvQkFBb0I7QUFDdEIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3NlbGxlci9zZWxsZXItYWNjb3VudC9zZWxsZXItYWNjb3VudC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNlbnRlciB7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG4gIHdpZHRoOiA2MCU7XHJcbiAgcGFkZGluZzogMTBweDtcclxufVxyXG4uZXgxIHtcclxuICBtYXJnaW4tdG9wOiAxLjUlO1xyXG59XHJcbi5lZGl0QnRue1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGRhcmtvcmFuZ2U7XHJcbn1cclxuLnNhdmVCdG57XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U2MDAwMDtcclxufVxyXG5cclxuaHRtbCwgYm9keSB7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG4uY2xlYXJoZWFkZXIge1xyXG4gIGhlaWdodDogODBweDtcclxuICBjbGVhcjogYm90aDtcclxufVxyXG5cclxuI2NvbnRhaW5lciB7XHJcbiAgbWluLWhlaWdodDogMTAwJTtcclxuICBtYXJnaW4tYm90dG9tOiAtMzMwcHg7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4uY29udGFpbiB7XHJcbiAgb3BhY2l0eTogMC44NTtcclxuICBjb2xvcjogYmxhY2s7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjp3aGl0ZXNtb2tlO1xyXG59XHJcblxyXG4jZm9vdGVyIHtcclxuICBoZWlnaHQ6IDMzMHB4O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuLmNsZWFyZm9vdGVyIHtcclxuICBoZWlnaHQ6IDMzMHB4O1xyXG4gIGNsZWFyOiBib3RoO1xyXG59XHJcblxyXG4uZGl2aWRlcntcclxuICB3aWR0aDoxMHB4O1xyXG4gIGhlaWdodDphdXRvO1xyXG4gIGRpc3BsYXk6aW5saW5lLWJsb2NrO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/seller/seller-account/seller-account.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/components/seller/seller-account/seller-account.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-seller-navbar [logout]=\"mainLogout\"></app-seller-navbar>\r\n\r\n\r\n<div class=\"clearheader\"></div>\r\n\r\n<!-- BOOTSTRAP via CDN -->\r\n<link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css\">\r\n<script src=\"https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js\"></script>\r\n<script src=\"https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js\"></script>\r\n<script src=\"https://maxcdn.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js\"></script>\r\n\r\n<body>\r\n<!-- Personal Information Card for Sellers -->\r\n<div class=\"container\">\r\n  &nbsp;\r\n  <h1 style=\"color:black\">My Account</h1>\r\n  &nbsp;\r\n  <div class=\"card contain\">\r\n    <div class=\"card-body\">\r\n      <div class=\"row justify-content-md\">\r\n        <div class=\"col\">\r\n          <h4>Personal Information</h4>\r\n        </div>\r\n        <div class=\"col\">\r\n          <p style=\"text-align: right\"><a [routerLink]=\"['/seller/submit-categories']\" routerLinkActive=\"router-link-active\" >Add More Information...</a></p>\r\n        </div>\r\n      </div>\r\n      &nbsp;\r\n      <form action=\"/action_page.php\">\r\n        <div class=\"form-group\">\r\n          <label for=\"fName\">First Name:</label>\r\n          <input type=\"text\" class=\"form-control\" id=\"fName\" name=\"firstName\" value={{seller.data.first_name}} disabled required>\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <label for=\"lName\">Last Name:</label>\r\n          <input type=\"text\" class=\"form-control\" id=\"lName\" name=\"lastName\" value={{seller.data.last_name}} disabled required>\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <label for=\"eAddress\">Email Address:</label>\r\n          <input type=\"email\" class=\"form-control\" id=\"eAddress\" name=\"emailAddress\" value={{seller.data.email}} disabled required>\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <label for=\"pwd\">Password:</label>\r\n          <input type=\"password\" class=\"form-control\" id=\"pwd\" name=\"password\" value={{seller.data.password}} disabled required>\r\n        </div>\r\n        <div class=\"form-group\" id=\"newPass\" hidden>\r\n            <label for=\"newPwd\">New Password:</label>\r\n            <input type=\"password\" placeholder=\"New Password\" class=\"form-control\" id=\"newPwd\" name=\"newPassword\" required>\r\n        </div>\r\n        <div class=\"form-group\" id=\"verify\" hidden>\r\n            <label for=\"verifyPwd\">Confirm Password:</label>\r\n            <input type=\"password\" placeholder=\"Confirm Password\" class=\"form-control\" id=\"verifyPwd\" name=\"verifyPassword\" required>\r\n        </div>\r\n        <label id=\"errorMessage\" hidden>{{this.errorMessage}}</label>\r\n        <br>\r\n        <button type=\"button\" class=\"btn editBtn btn-lg\" id=\"editBtn\" (click)=\"editFunction()\">Edit</button>\r\n        <div class=\"divider\"></div>\r\n        <button type=\"button\" class=\"btn saveBtn btn-lg\" id=\"saveBtn\" (click)=\"saveFunction()\" disabled=true>Save</button>\r\n        <div class=\"divider\"></div>\r\n        <button type=\"button\" class=\"btn saveBtn btn-lg\" id=\"cancelBtn\" (click)=\"cancelButtonPressed()\" style=\"background-color: whitesmoke\" hidden>Cancel</button>\r\n      </form>\r\n\r\n    </div>\r\n  </div>\r\n  <div class=\"clearfooter\"></div>\r\n</div>\r\n</body>\r\n"

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
        this.seller_id = this.seller.data._id;
        this.mainLogout = true;
    };
    // Function for edit button
    // Function enables users to use the textfields in order to edit their information. 
    // This only works with the front end so far. This has not been tied in with the backend.
    SellerAccountComponent.prototype.editFunction = function () {
        document.getElementById('fName').disabled = false;
        document.getElementById('lName').disabled = false;
        document.getElementById('eAddress').disabled = true;
        document.getElementById('saveBtn').disabled = false;
        document.getElementById('editBtn').disabled = true;
        document.getElementById('verify').hidden = false;
        document.getElementById('newPass').hidden = false;
        document.getElementById('cancelBtn').hidden = false;
    };
    // Function for save button
    // Function checks to see if the edited password matches before anything gets saved. A number of textfields are disabled once this function gets executed.
    // If there is no password inserted or the new password does not match when confirming. An error will be displayed to the user.
    // This only works with the front end so far. This has not been tied in with the backend.
    SellerAccountComponent.prototype.saveFunction = function () {
        var success = this.updateSellerData();
        if (success) {
            document.getElementById('pwd').value = document.getElementById('newPwd').value;
            document.getElementById('fName').disabled = true;
            document.getElementById('lName').disabled = true;
            document.getElementById('eAddress').disabled = true;
            document.getElementById('pwd').disabled = true;
            document.getElementById('saveBtn').disabled = true;
            document.getElementById('editBtn').disabled = true;
            document.getElementById('verify').hidden = true;
            document.getElementById('newPass').hidden = true;
            document.getElementById('newPwd').value = '';
            document.getElementById('verifyPwd').value = '';
            document.getElementById('verifyPwd').style.backgroundColor = 'White';
            document.getElementById('newPwd').style.backgroundColor = 'White';
        }
        else {
            // Could not update profile
        }
    };
    // By: Omar
    // This function has not been fully implemented yet. Once this gets completed it will help tie the frontend and backend of this page together.
    SellerAccountComponent.prototype.updateSellerData = function () {
        var newFName = document.getElementById('fName').value;
        var newLName = document.getElementById('lName').value;
        var newPass = document.getElementById('newPwd').value;
        var confirm = document.getElementById('verifyPwd').value;
        if (newFName === "" || newLName === "" || newPass === "" || confirm === "") {
            this.errorMessage = "One of the following fields is empty! Please fill in all highlighted empty fields.";
            document.getElementById('errorMessage').style.color = "Red";
            document.getElementById('errorMessage').hidden = false;
            document.getElementById('fName').style.backgroundColor = 'Red';
            document.getElementById('lName').style.backgroundColor = 'Red';
            document.getElementById('verifyPwd').style.backgroundColor = 'Red';
            document.getElementById('newPwd').style.backgroundColor = 'Red';
        }
        else if (newPass !== confirm) {
            this.errorMessage = "Passwords do not match!";
            document.getElementById('errorMessage').style.color = "Red";
            document.getElementById('errorMessage').hidden = false;
            document.getElementById('fName').style.backgroundColor = 'White';
            document.getElementById('lName').style.backgroundColor = 'White';
            document.getElementById('verifyPwd').style.backgroundColor = 'Red';
            document.getElementById('newPwd').style.backgroundColor = 'Red';
        }
        else {
            this.seller_updatedFirstName = document.getElementById('fName').value;
            this.seller_updatedLastName = document.getElementById('lName').value;
            this.seller_updatedPassword = confirm;
            var update = {
                "updater_id": this.seller_id,
                "fName": this.seller_updatedFirstName,
                "lName": this.seller_updatedLastName,
                "pass": this.seller_updatedPassword
            };
            this.sellerService.updateSellerProfile(update).subscribe(function (data) { });
            this.errorMessage = "Account updated successfully! Please log out and log back in.";
            document.getElementById('errorMessage').hidden = false;
            document.getElementById('cancelBtn').hidden = true;
            document.getElementById('errorMessage').style.color = "Green";
            document.getElementById('fName').style.backgroundColor = 'Green';
            document.getElementById('lName').style.backgroundColor = 'Green';
            document.getElementById('verifyPwd').style.backgroundColor = 'Green';
            document.getElementById('newPwd').style.backgroundColor = 'Green';
            return true;
        }
        return false;
    };
    // By: Omar
    // Function when cancel button gets pressed
    SellerAccountComponent.prototype.cancelButtonPressed = function () {
        document.getElementById('errorMessage').hidden = true;
        document.getElementById('cancelBtn').hidden = true;
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
        document.getElementById('verifyPwd').style.backgroundColor = 'White';
        document.getElementById('newPwd').style.backgroundColor = 'White';
        document.getElementById('fName').style.backgroundColor = 'White';
        document.getElementById('lName').style.backgroundColor = 'White';
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

module.exports = "html, body {\r\n    height: 100%;\r\n  }\r\n\r\n  #container {\r\n    min-height: 100%;\r\n    margin-bottom: -600px;\r\n    position: relative;\r\n  }\r\n\r\n  .contain {\r\n    opacity: 0.85;\r\n    color: black;\r\n    background-color:whitesmoke;\r\n  }\r\n\r\n  #footer {\r\n    height: 600px;\r\n    position: relative;\r\n  }\r\n\r\n  .clearfooter {\r\n    height: 600px;\r\n    clear: both;\r\n  }\r\n\r\n  .clearheader {\r\n    height: 80px;\r\n    clear: both;\r\n  }\r\n\r\n  form{\r\n    width: 920px;\r\n    text-align: left;\r\n    margin: auto;\r\n    opacity: .90;\r\n  }\r\n\r\n  .form-control {\r\n    padding: 6px;\r\n    position: relative;\r\n  }\r\n\r\n  input[type=\"checkbox\"] {\r\n    display: none;\r\n  }\r\n\r\n  #otis li {\r\n    list-style-type: none;\r\n  }\r\n\r\n  label {\r\n    border: 0px solid #fff;\r\n    padding: 0px;\r\n    display: block;\r\n    position: relative;\r\n    margin: 0px;\r\n    cursor: pointer;\r\n    -webkit-touch-callout: none;\r\n    -webkit-user-select: none;\r\n    -moz-user-select: none;\r\n    -ms-user-select: none;\r\n    user-select: none;\r\n    text-align: center;\r\n  }\r\n\r\n  label::before {\r\n    text-align: center;\r\n    background-color: white;\r\n    color: white;\r\n    content: \" \";\r\n    border-radius: 50%;\r\n    position: relative;\r\n    top: -1px;\r\n    left: -1px;\r\n    width: 51px;\r\n    height: 51px;\r\n    line-height: 28px;\r\n    transition-duration: 0.4s;\r\n    -webkit-transform: scale(0);\r\n            transform: scale(0);\r\n  }\r\n\r\n  label img {\r\n    height: 50px;\r\n    width: 50px;\r\n    transition-duration: 0.2s;\r\n    -webkit-transform-origin: 50% 50%;\r\n            transform-origin: 50% 50%;\r\n    border-radius: 50%;\r\n  }\r\n\r\n  :checked+label {\r\n    border-color: #ddd;\r\n  }\r\n\r\n  :checked+label::before {\r\n    background-color: #FF0000;\r\n    content: \" \";\r\n    color: black;\r\n    border-radius: 50%;\r\n    position: relative;\r\n    top: -1px;\r\n    left: -1px;\r\n    width: 51px;\r\n    height: 51px;\r\n    -webkit-transform: scale(1);\r\n            transform: scale(1);\r\n  }\r\n\r\n  :checked+label img {\r\n    -webkit-transform: scale(0.8);\r\n            transform: scale(0.8);\r\n    box-shadow: 0 0 50px #FF0000;\r\n    z-index: -1;\r\n  }\r\n\r\n  .checkbox-grid li {\r\n    display: block;\r\n    float: left;\r\n    width: 25%;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zZWxsZXIvc2VsbGVyLXNlcnZpY2VzL3NlbGxlci1zZXJ2aWNlcy9zZWxsZXItc2VydmljZXMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFlBQVk7RUFDZDs7RUFFQTtJQUNFLGdCQUFnQjtJQUNoQixxQkFBcUI7SUFDckIsa0JBQWtCO0VBQ3BCOztFQUVBO0lBQ0UsYUFBYTtJQUNiLFlBQVk7SUFDWiwyQkFBMkI7RUFDN0I7O0VBRUE7SUFDRSxhQUFhO0lBQ2Isa0JBQWtCO0VBQ3BCOztFQUVBO0lBQ0UsYUFBYTtJQUNiLFdBQVc7RUFDYjs7RUFFQTtJQUNFLFlBQVk7SUFDWixXQUFXO0VBQ2I7O0VBQ0E7SUFDRSxZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLFlBQVk7SUFDWixZQUFZO0VBQ2Q7O0VBQ0E7SUFDRSxZQUFZO0lBQ1osa0JBQWtCO0VBQ3BCOztFQUNBO0lBQ0UsYUFBYTtFQUNmOztFQUNBO0lBQ0UscUJBQXFCO0VBQ3ZCOztFQUNBO0lBQ0Usc0JBQXNCO0lBQ3RCLFlBQVk7SUFDWixjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxlQUFlO0lBQ2YsMkJBQTJCO0lBQzNCLHlCQUF5QjtJQUV6QixzQkFBc0I7SUFDdEIscUJBQXFCO0lBQ3JCLGlCQUFpQjtJQUNqQixrQkFBa0I7RUFDcEI7O0VBQ0E7SUFDRSxrQkFBa0I7SUFDbEIsdUJBQXVCO0lBQ3ZCLFlBQVk7SUFDWixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixTQUFTO0lBQ1QsVUFBVTtJQUNWLFdBQVc7SUFDWCxZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLHlCQUF5QjtJQUN6QiwyQkFBbUI7WUFBbkIsbUJBQW1CO0VBQ3JCOztFQUVBO0lBQ0UsWUFBWTtJQUNaLFdBQVc7SUFDWCx5QkFBeUI7SUFDekIsaUNBQXlCO1lBQXpCLHlCQUF5QjtJQUN6QixrQkFBa0I7RUFDcEI7O0VBRUE7SUFDRSxrQkFBa0I7RUFDcEI7O0VBRUE7SUFDRSx5QkFBeUI7SUFDekIsWUFBWTtJQUNaLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCxVQUFVO0lBQ1YsV0FBVztJQUNYLFlBQVk7SUFDWiwyQkFBbUI7WUFBbkIsbUJBQW1CO0VBQ3JCOztFQUVBO0lBQ0UsNkJBQXFCO1lBQXJCLHFCQUFxQjtJQUNyQiw0QkFBNEI7SUFDNUIsV0FBVztFQUNiOztFQUVBO0lBQ0UsY0FBYztJQUNkLFdBQVc7SUFDWCxVQUFVO0FBQ2QiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3NlbGxlci9zZWxsZXItc2VydmljZXMvc2VsbGVyLXNlcnZpY2VzL3NlbGxlci1zZXJ2aWNlcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaHRtbCwgYm9keSB7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgfVxyXG5cclxuICAjY29udGFpbmVyIHtcclxuICAgIG1pbi1oZWlnaHQ6IDEwMCU7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAtNjAwcHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgfVxyXG5cclxuICAuY29udGFpbiB7XHJcbiAgICBvcGFjaXR5OiAwLjg1O1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjp3aGl0ZXNtb2tlO1xyXG4gIH1cclxuXHJcbiAgI2Zvb3RlciB7XHJcbiAgICBoZWlnaHQ6IDYwMHB4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIH1cclxuXHJcbiAgLmNsZWFyZm9vdGVyIHtcclxuICAgIGhlaWdodDogNjAwcHg7XHJcbiAgICBjbGVhcjogYm90aDtcclxuICB9XHJcblxyXG4gIC5jbGVhcmhlYWRlciB7XHJcbiAgICBoZWlnaHQ6IDgwcHg7XHJcbiAgICBjbGVhcjogYm90aDtcclxuICB9XHJcbiAgZm9ybXtcclxuICAgIHdpZHRoOiA5MjBweDtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICBvcGFjaXR5OiAuOTA7XHJcbiAgfVxyXG4gIC5mb3JtLWNvbnRyb2wge1xyXG4gICAgcGFkZGluZzogNnB4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIH1cclxuICBpbnB1dFt0eXBlPVwiY2hlY2tib3hcIl0ge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcbiAgI290aXMgbGkge1xyXG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xyXG4gIH1cclxuICBsYWJlbCB7XHJcbiAgICBib3JkZXI6IDBweCBzb2xpZCAjZmZmO1xyXG4gICAgcGFkZGluZzogMHB4O1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBtYXJnaW46IDBweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIC13ZWJraXQtdG91Y2gtY2FsbG91dDogbm9uZTtcclxuICAgIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgICAta2h0bWwtdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xyXG4gICAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xyXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG4gIGxhYmVsOjpiZWZvcmUge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBjb250ZW50OiBcIiBcIjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHRvcDogLTFweDtcclxuICAgIGxlZnQ6IC0xcHg7XHJcbiAgICB3aWR0aDogNTFweDtcclxuICAgIGhlaWdodDogNTFweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAyOHB4O1xyXG4gICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC40cztcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMCk7XHJcbiAgfVxyXG5cclxuICBsYWJlbCBpbWcge1xyXG4gICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgd2lkdGg6IDUwcHg7XHJcbiAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjJzO1xyXG4gICAgdHJhbnNmb3JtLW9yaWdpbjogNTAlIDUwJTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICB9XHJcblxyXG4gIDpjaGVja2VkK2xhYmVsIHtcclxuICAgIGJvcmRlci1jb2xvcjogI2RkZDtcclxuICB9XHJcblxyXG4gIDpjaGVja2VkK2xhYmVsOjpiZWZvcmUge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGMDAwMDtcclxuICAgIGNvbnRlbnQ6IFwiIFwiO1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgdG9wOiAtMXB4O1xyXG4gICAgbGVmdDogLTFweDtcclxuICAgIHdpZHRoOiA1MXB4O1xyXG4gICAgaGVpZ2h0OiA1MXB4O1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcclxuICB9XHJcblxyXG4gIDpjaGVja2VkK2xhYmVsIGltZyB7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuOCk7XHJcbiAgICBib3gtc2hhZG93OiAwIDAgNTBweCAjRkYwMDAwO1xyXG4gICAgei1pbmRleDogLTE7XHJcbiAgfVxyXG5cclxuICAuY2hlY2tib3gtZ3JpZCBsaSB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgd2lkdGg6IDI1JTtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/seller/seller-services/seller-services/seller-services.component.html":
/*!**************************************************************************************************!*\
  !*** ./src/app/components/seller/seller-services/seller-services/seller-services.component.html ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-seller-navbar></app-seller-navbar>\r\n\r\n\r\n<div class=\"clearheader\"></div>\r\n\r\n<body>\r\n<form (submit)=\"AddCode()\">\r\n\t<div class=\"container\">\r\n    &nbsp;\r\n\t\t<h1>What goods/services would you like to provide?</h1>\r\n    &nbsp;\r\n    <!-- <div class=\"card contain\">\r\n\t\t\t<div class=\"card-body\">\r\n\t\t\t\t<div class=\"form-group row\">\r\n\t\t\t\t\t<label class=\"col-sm-4 col-form-label\">Current Good/Service:</label>\r\n\t\t\t\t\t<div *ngIf=\"None\" class=\"col-sm-6\">\r\n\t\t\t\t\t\t<label class=\"col-sm-4 col-form-label\">None</label>\r\n          </div>\r\n          <div *ngIf=\"!None\" class=\"col-sm-10\">\r\n\t\t\t\t\t\t<label class=\"col-sm-4 col-form-label\">{{codeNames}}</label>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div> -->\r\n\t\t<div class=\"card contain\">\r\n\t\t\t<div class=\"card-body\">\r\n\t\t\t\t<div class=\"form-group row\">\r\n          <label class=\"col-sm-12\" style=\"color:#FF0000\">You are already opted in to the selected ones:</label>\r\n          &nbsp;\r\n\t\t\t\t\t<div class=\"container-fluid\" style=\"position: relative; right: 4%\">\r\n            <ul class=\"checkbox-grid\" *ngFor=\"let code of codes\" id=\"otis\">\r\n              <li *ngIf = \"codeArray != undefined\">\r\n                <div *ngIf=\"codeArray.indexOf(code.code) !== -1\">\r\n                  <input type=\"checkbox\" name=\"code\" value={{code.code}} id={{code.code}} (change)=\"onCheckboxChange(code,$event)\" checked/>\r\n                  <label id=\"piclabel\" for={{code.code}}><img src={{code.image}} /></label>\r\n                  <label id=\"piclabel\">{{code.name}}</label>\r\n                </div>\r\n                <div *ngIf=\"codeArray.indexOf(code.code) === -1\">\r\n                  <input type=\"checkbox\" name=\"code\" value={{code.code}} id={{code.code}} (change)=\"onCheckboxChange(code,$event)\"/>\r\n                  <label id=\"piclabel\" for={{code.code}}><img src={{code.image}} /></label>\r\n                  <label id=\"piclabel\">{{code.name}}</label>\r\n                </div>\r\n              </li>\r\n              <li *ngIf = \"codeArray == undefined\">\r\n                  <div>\r\n                    <input type=\"checkbox\" name=\"code\" value={{code.code}} id={{code.code}} (change)=\"onCheckboxChange(code,$event)\"/>\r\n                    <label id=\"piclabel\" for={{code.code}}><img src={{code.image}} /></label>\r\n                    <label id=\"piclabel\">{{code.name}}</label>\r\n                  </div>\r\n                </li>\r\n            </ul>\r\n          </div>\r\n        </div>\r\n        <button type=\"submit\" class=\"btn btn-primary col-sm-12\" style=\"align-items: center\">{{buttonText}}</button>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div class=\"clearfooter\"></div>\r\n\t</div>\r\n</form>\r\n</body>\r\n"

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
/* harmony import */ var angular_notifier__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-notifier */ "./node_modules/angular-notifier/esm5/angular-notifier.js");
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




var DefaultImageIcon = "https://raw.githubusercontent.com/ronjonsilver/MEANstackPractice/master/images.png";
var SellerServicesComponent = /** @class */ (function () {
    function SellerServicesComponent(sellerService, notifierService, router) {
        this.sellerService = sellerService;
        this.notifierService = notifierService;
        this.router = router;
        // Temp codes for MVP - Kurgan
        this.codes = [
            { code: 78965422, name: 'Jewelry', image: DefaultImageIcon, checked: false },
            { code: 78965423, name: 'Necklaces (Jewelry)', image: DefaultImageIcon, checked: false },
            { code: 78965424, name: 'Rings (Jewelry)', image: DefaultImageIcon, checked: false },
            { code: 78965425, name: 'Earrings (Jewelry)', image: DefaultImageIcon, checked: false },
            { code: 68977451, name: 'Dolls', image: DefaultImageIcon, checked: false },
            { code: 67887941, name: 'Sculptures', image: DefaultImageIcon, checked: false },
            { code: 62145331, name: 'Scarves', image: DefaultImageIcon, checked: false },
            { code: 54887921, name: 'Blankets', image: DefaultImageIcon, checked: false },
            { code: 52871151, name: 'Socks', image: DefaultImageIcon, checked: false },
            { code: 50360051, name: 'Pencils', image: DefaultImageIcon, checked: false },
            { code: 49605401, name: 'Painting', image: DefaultImageIcon, checked: false },
            { code: 49605402, name: 'Oil (Painting)', image: DefaultImageIcon, checked: false },
            { code: 49605403, name: 'Watercolor (Painting)', image: DefaultImageIcon, checked: false },
            { code: 49605404, name: 'Acrlyic (Painting)', image: DefaultImageIcon, checked: false }
        ];
        this.buttonText = 'Subscribe to any products on Requiren';
        this.notifier = notifierService;
    }
    // View seller current codes - Roni
    SellerServicesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.submitLabels = [];
        // Get seller codes
        this.sellerService.getCode().subscribe(function (data) {
            if (data.success) {
                if (data.codeList.length === 0) { // Seller does not have any codes yet
                }
                else {
                    _this.codeArray = data.codeList;
                }
            }
        });
    };
    SellerServicesComponent.prototype.AddCode = function () {
        var _this = this;
        var code = {
            codes: this.codeArray
        };
        this.sellerService.setNewCode(code).subscribe(function (data) {
            if (data.success) {
                _this.notifier.notify('success', data.msg);
                _this.router.navigate(['/seller']);
            }
            else {
                _this.notifier.notify('error', data.msg);
                _this.router.navigate(['/seller/seller-services']);
            }
        });
    };
    SellerServicesComponent.prototype.labelButton = function () {
        var btnTxt = 'Subscribe to  ';
        var slsize = this.submitLabels.length;
        //console.log(this.submitLabels[0]);
        for (var n = 0; n < slsize; n++) {
            if (slsize <= 3) {
                btnTxt = btnTxt + this.submitLabels[n];
                if (n < (slsize - 1)) {
                    btnTxt = btnTxt + ', ';
                }
                else {
                    btnTxt = btnTxt + ' ';
                }
            }
            else {
                if (n < 2) {
                    btnTxt = btnTxt + this.submitLabels[n] + ', ';
                }
                if (n === 2) {
                    btnTxt = btnTxt + this.submitLabels[n] + ' ';
                }
            }
        }
        var rem = slsize - 3;
        var remd = rem.toString();
        if (slsize > 3) {
            btnTxt = btnTxt + '(+' + remd + ' more) ';
        }
        this.buttonText = btnTxt + ' on Requiren';
    };
    SellerServicesComponent.prototype.onCheckboxChange = function (option, event) {
        if (event.target.checked) {
            this.codeArray.push(option.code);
            this.submitLabels.push(option.name);
            this.labelButton();
        }
        else {
            for (var i = 0; i < this.codes.length; i++) {
                if (this.codeArray[i] === option.code) {
                    this.codeArray.splice(i, 1);
                    this.submitLabels.splice(i, 1);
                    this.labelButton();
                }
            }
        }
        console.log(this.codeArray);
    };
    SellerServicesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-seller-services',
            template: __webpack_require__(/*! ./seller-services.component.html */ "./src/app/components/seller/seller-services/seller-services/seller-services.component.html"),
            styles: [__webpack_require__(/*! ./seller-services.component.css */ "./src/app/components/seller/seller-services/seller-services/seller-services.component.css")]
        }),
        __metadata("design:paramtypes", [_services_seller_service__WEBPACK_IMPORTED_MODULE_2__["SellerService"],
            angular_notifier__WEBPACK_IMPORTED_MODULE_3__["NotifierService"],
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

module.exports = "body, html {\r\n  height: 100%;\r\n  /* background-image: url(../../../assets/portal.jpg);\r\n  background-position: center;\r\n  background-repeat:no-repeat;\r\n  background-size:cover;\r\n  position: relative;\r\n  color:white; */\r\n}\r\n\r\n.submitBtn{\r\n  margin-top: 0px;\r\n  margin-left: 923px;\r\n  position: absolute;\r\n  background-color: #e60000;\r\n  border-color: black;\r\n  border-width: 0.5px;\r\n}\r\n\r\n.dropDownBtn{\r\n  position: absolute;\r\n  margin-top: 0px;\r\n  margin-left: 982px;\r\n}\r\n\r\n.dDownBtn{\r\n  background-color: #0066ff;\r\n  border-color: black;\r\n  border-width: 0.5px;\r\n}\r\n\r\n.submitSearchBtn{\r\n  background-color: #e60000;\r\n  border-color: black;\r\n  border-width: 0.5px;\r\n}\r\n\r\n/* .searchBox{\r\n  position: absolute;\r\n  margin-top: 60px;\r\n  width: 1080px;\r\n  opacity: .75;\r\n  background-color: black;\r\n} */\r\n\r\n.searchBtn {\r\n  opacity: 1;\r\n}\r\n\r\n.parentContainer {\r\n  color:white;\r\n}\r\n\r\n#container {\r\n  min-height: 100%;\r\n  margin-bottom: -330px;\r\n  position: relative;\r\n  background-color: whitesmoke;\r\n}\r\n\r\n.contain {\r\n  color:black;\r\n  background-color:whitesmoke;\r\n  opacity: .85;\r\n}\r\n\r\n#footer {\r\n  height: 330px;\r\n  position: relative;\r\n}\r\n\r\n.clearfooter {\r\n  height: 330px;\r\n  clear: both;\r\n}\r\n\r\n.clearheader {\r\n  height: 100px;\r\n  clear: both;\r\n}\r\n\r\n.app-loading {\r\n  position: center;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  justify-content: center;\r\n  height: 100%;\r\n}\r\n\r\n.app-loading .spinner {\r\n  height: 200px;\r\n  width: 200px;\r\n  -webkit-animation: rotate 2s linear infinite;\r\n          animation: rotate 2s linear infinite;\r\n  -webkit-transform-origin: center center;\r\n          transform-origin: center center;\r\n  position: absolute;\r\n  top: 0;\r\n  bottom: 0;\r\n  left: 0;\r\n  right: 0;\r\n  margin: auto;\r\n}\r\n\r\n.app-loading .spinner .path {\r\n  stroke-dasharray: 1, 200;\r\n  stroke-dashoffset: 0;\r\n  -webkit-animation: dash 1.5s ease-in-out infinite;\r\n          animation: dash 1.5s ease-in-out infinite;\r\n  stroke-linecap: round;\r\n  stroke: #ddd;\r\n}\r\n\r\n@-webkit-keyframes rotate {\r\n  100% {\r\n    -webkit-transform: rotate(360deg);\r\n            transform: rotate(360deg);\r\n  }\r\n}\r\n\r\n@keyframes rotate {\r\n  100% {\r\n    -webkit-transform: rotate(360deg);\r\n            transform: rotate(360deg);\r\n  }\r\n}\r\n\r\n@-webkit-keyframes dash {\r\n  0% {\r\n    stroke-dasharray: 1, 200;\r\n    stroke-dashoffset: 0;\r\n  }\r\n  50% {\r\n    stroke-dasharray: 89, 200;\r\n    stroke-dashoffset: -35px;\r\n  }\r\n  100% {\r\n    stroke-dasharray: 89, 200;\r\n    stroke-dashoffset: -124px;\r\n  }\r\n}\r\n\r\n@keyframes dash {\r\n  0% {\r\n    stroke-dasharray: 1, 200;\r\n    stroke-dashoffset: 0;\r\n  }\r\n  50% {\r\n    stroke-dasharray: 89, 200;\r\n    stroke-dashoffset: -35px;\r\n  }\r\n  100% {\r\n    stroke-dasharray: 89, 200;\r\n    stroke-dashoffset: -124px;\r\n  }\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zZWxsZXIvc2VsbGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFZO0VBQ1o7Ozs7O2dCQUtjO0FBQ2hCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIseUJBQXlCO0VBQ3pCLG1CQUFtQjtFQUNuQixtQkFBbUI7QUFDckI7O0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLGtCQUFrQjtBQUNwQjs7QUFDQTtFQUNFLHlCQUF5QjtFQUN6QixtQkFBbUI7RUFDbkIsbUJBQW1CO0FBQ3JCOztBQUNBO0VBQ0UseUJBQXlCO0VBQ3pCLG1CQUFtQjtFQUNuQixtQkFBbUI7QUFDckI7O0FBQ0E7Ozs7OztHQU1HOztBQUNIO0VBQ0UsVUFBVTtBQUNaOztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLHFCQUFxQjtFQUNyQixrQkFBa0I7RUFDbEIsNEJBQTRCO0FBQzlCOztBQUVBO0VBQ0UsV0FBVztFQUNYLDJCQUEyQjtFQUMzQixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGFBQWE7RUFDYixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGFBQWE7RUFDYixZQUFZO0VBQ1osNENBQW9DO1VBQXBDLG9DQUFvQztFQUNwQyx1Q0FBK0I7VUFBL0IsK0JBQStCO0VBQy9CLGtCQUFrQjtFQUNsQixNQUFNO0VBQ04sU0FBUztFQUNULE9BQU87RUFDUCxRQUFRO0VBQ1IsWUFBWTtBQUNkOztBQUVBO0VBQ0Usd0JBQXdCO0VBQ3hCLG9CQUFvQjtFQUNwQixpREFBeUM7VUFBekMseUNBQXlDO0VBQ3pDLHFCQUFxQjtFQUNyQixZQUFZO0FBQ2Q7O0FBRUE7RUFDRTtJQUNFLGlDQUF5QjtZQUF6Qix5QkFBeUI7RUFDM0I7QUFDRjs7QUFKQTtFQUNFO0lBQ0UsaUNBQXlCO1lBQXpCLHlCQUF5QjtFQUMzQjtBQUNGOztBQUVBO0VBQ0U7SUFDRSx3QkFBd0I7SUFDeEIsb0JBQW9CO0VBQ3RCO0VBQ0E7SUFDRSx5QkFBeUI7SUFDekIsd0JBQXdCO0VBQzFCO0VBQ0E7SUFDRSx5QkFBeUI7SUFDekIseUJBQXlCO0VBQzNCO0FBQ0Y7O0FBYkE7RUFDRTtJQUNFLHdCQUF3QjtJQUN4QixvQkFBb0I7RUFDdEI7RUFDQTtJQUNFLHlCQUF5QjtJQUN6Qix3QkFBd0I7RUFDMUI7RUFDQTtJQUNFLHlCQUF5QjtJQUN6Qix5QkFBeUI7RUFDM0I7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2VsbGVyL3NlbGxlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYm9keSwgaHRtbCB7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIC8qIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi8uLi8uLi9hc3NldHMvcG9ydGFsLmpwZyk7XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gIGJhY2tncm91bmQtcmVwZWF0Om5vLXJlcGVhdDtcclxuICBiYWNrZ3JvdW5kLXNpemU6Y292ZXI7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGNvbG9yOndoaXRlOyAqL1xyXG59XHJcblxyXG4uc3VibWl0QnRue1xyXG4gIG1hcmdpbi10b3A6IDBweDtcclxuICBtYXJnaW4tbGVmdDogOTIzcHg7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNlNjAwMDA7XHJcbiAgYm9yZGVyLWNvbG9yOiBibGFjaztcclxuICBib3JkZXItd2lkdGg6IDAuNXB4O1xyXG59XHJcbi5kcm9wRG93bkJ0bntcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgbWFyZ2luLXRvcDogMHB4O1xyXG4gIG1hcmdpbi1sZWZ0OiA5ODJweDtcclxufVxyXG4uZERvd25CdG57XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwNjZmZjtcclxuICBib3JkZXItY29sb3I6IGJsYWNrO1xyXG4gIGJvcmRlci13aWR0aDogMC41cHg7XHJcbn1cclxuLnN1Ym1pdFNlYXJjaEJ0bntcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTYwMDAwO1xyXG4gIGJvcmRlci1jb2xvcjogYmxhY2s7XHJcbiAgYm9yZGVyLXdpZHRoOiAwLjVweDtcclxufVxyXG4vKiAuc2VhcmNoQm94e1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBtYXJnaW4tdG9wOiA2MHB4O1xyXG4gIHdpZHRoOiAxMDgwcHg7XHJcbiAgb3BhY2l0eTogLjc1O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xyXG59ICovXHJcbi5zZWFyY2hCdG4ge1xyXG4gIG9wYWNpdHk6IDE7XHJcbn1cclxuXHJcbi5wYXJlbnRDb250YWluZXIge1xyXG4gIGNvbG9yOndoaXRlO1xyXG59XHJcblxyXG4jY29udGFpbmVyIHtcclxuICBtaW4taGVpZ2h0OiAxMDAlO1xyXG4gIG1hcmdpbi1ib3R0b206IC0zMzBweDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGVzbW9rZTtcclxufVxyXG5cclxuLmNvbnRhaW4ge1xyXG4gIGNvbG9yOmJsYWNrO1xyXG4gIGJhY2tncm91bmQtY29sb3I6d2hpdGVzbW9rZTtcclxuICBvcGFjaXR5OiAuODU7XHJcbn1cclxuXHJcbiNmb290ZXIge1xyXG4gIGhlaWdodDogMzMwcHg7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4uY2xlYXJmb290ZXIge1xyXG4gIGhlaWdodDogMzMwcHg7XHJcbiAgY2xlYXI6IGJvdGg7XHJcbn1cclxuXHJcbi5jbGVhcmhlYWRlciB7XHJcbiAgaGVpZ2h0OiAxMDBweDtcclxuICBjbGVhcjogYm90aDtcclxufVxyXG5cclxuLmFwcC1sb2FkaW5nIHtcclxuICBwb3NpdGlvbjogY2VudGVyO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuLmFwcC1sb2FkaW5nIC5zcGlubmVyIHtcclxuICBoZWlnaHQ6IDIwMHB4O1xyXG4gIHdpZHRoOiAyMDBweDtcclxuICBhbmltYXRpb246IHJvdGF0ZSAycyBsaW5lYXIgaW5maW5pdGU7XHJcbiAgdHJhbnNmb3JtLW9yaWdpbjogY2VudGVyIGNlbnRlcjtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAwO1xyXG4gIGJvdHRvbTogMDtcclxuICBsZWZ0OiAwO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIG1hcmdpbjogYXV0bztcclxufVxyXG5cclxuLmFwcC1sb2FkaW5nIC5zcGlubmVyIC5wYXRoIHtcclxuICBzdHJva2UtZGFzaGFycmF5OiAxLCAyMDA7XHJcbiAgc3Ryb2tlLWRhc2hvZmZzZXQ6IDA7XHJcbiAgYW5pbWF0aW9uOiBkYXNoIDEuNXMgZWFzZS1pbi1vdXQgaW5maW5pdGU7XHJcbiAgc3Ryb2tlLWxpbmVjYXA6IHJvdW5kO1xyXG4gIHN0cm9rZTogI2RkZDtcclxufVxyXG5cclxuQGtleWZyYW1lcyByb3RhdGUge1xyXG4gIDEwMCUge1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcclxuICB9XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgZGFzaCB7XHJcbiAgMCUge1xyXG4gICAgc3Ryb2tlLWRhc2hhcnJheTogMSwgMjAwO1xyXG4gICAgc3Ryb2tlLWRhc2hvZmZzZXQ6IDA7XHJcbiAgfVxyXG4gIDUwJSB7XHJcbiAgICBzdHJva2UtZGFzaGFycmF5OiA4OSwgMjAwO1xyXG4gICAgc3Ryb2tlLWRhc2hvZmZzZXQ6IC0zNXB4O1xyXG4gIH1cclxuICAxMDAlIHtcclxuICAgIHN0cm9rZS1kYXNoYXJyYXk6IDg5LCAyMDA7XHJcbiAgICBzdHJva2UtZGFzaG9mZnNldDogLTEyNHB4O1xyXG4gIH1cclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/components/seller/seller.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/seller/seller.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-seller-navbar></app-seller-navbar>\r\n\r\n<div *ngIf='!seller' class=\"app-loading\">\r\n    <div class=\"logo\"></div>\r\n    <svg class=\"spinner\" viewBox=\"25 25 50 50\">\r\n      <circle class=\"path\" cx=\"50\" cy=\"50\" r=\"20\" fill=\"none\" stroke-width=\"2\" stroke-miterlimit=\"10\"/>\r\n    </svg>\r\n  </div>\r\n\r\n<!-- BOOTSTRAP via CDN -->\r\n<link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css\">\r\n<script src=\"https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js\"></script>\r\n<script src=\"https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js\"></script>\r\n<script src=\"https://maxcdn.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js\"></script>\r\n\r\n<div class=\"clearheader\"></div>\r\n\r\n<body>\r\n  <div class=\"center\" *ngIf=\"seller\">\r\n    <div class=\"w3-container\">\r\n      <div class=\"container\" style=\"margin-top:70px; height:750px; width: 1500px;\">\r\n\r\n        <h4>Welcome {{seller.first_name}}!</h4>\r\n        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>\r\n        &nbsp;\r\n\r\n        <!-- Seller's tabs -->\r\n        <div class=\"tabbable\">\r\n          <ul class=\"nav nav-tabs\" id=\"myTab\" role=\"tablist\">\r\n            <li class=\"nav-item\">\r\n              <a class=\"nav-link active\" data-toggle=\"tab\" [ngClass]=\"{'active':currentTab === 'requests'}\" data-target=\"#requests\"\r\n                role=\"tab\" aria-controls=\"requests\" aria-selected=\"true\" (click)=\"requests('requests')\">Active Requests</a>\r\n            </li>\r\n            <li class=\"nav-item\">\r\n              <a class=\"nav-link\" data-toggle=\"tab\" [ngClass]=\"{'active':currentTab === 'history'}\" data-target=\"#history\"\r\n                role=\"tab\" aria-controls=\"history\" aria-selected=\"false\" (click)=\"history('history')\">Your Offers</a>\r\n            </li>\r\n            <li class=\"nav-item\">\r\n              <a class=\"nav-link\" data-toggle=\"tab\" [ngClass]=\"{'active':currentTab === 'archive'}\" data-target=\"#archive\"\r\n                role=\"tab\" aria-controls=\"archive\" aria-selected=\"false\" (click)=\"archive('archive')\">Archived</a>\r\n            </li>\r\n          </ul>\r\n\r\n          <!-- Content of tabs -->\r\n          <div class=\"tab-content\" id=\"myTabContent\">\r\n            <!-- The content for Active Requests tab -->\r\n            <div class=\"tab-pane fade show active\" id=\"requests\" [ngClass]=\"{'active':currentTab === 'requests'}\" role=\"tabpanel\"\r\n              aria-labelledby=\"requests-tab\">\r\n              <br>\r\n              <div class=\"row justify-content-md\">\r\n                <div class=\"col\">\r\n                  <h3>&nbsp;&nbsp;{{seller.first_name}}'s Subscribed Requests</h3>\r\n                </div>\r\n                <!-- <div class=\"dropdown dropDownBtn\">\r\n                  <button type=\"button\" class=\"btn dDownBtn dropdown-toggle text-white searchBtn\" data-toggle=\"dropdown\">\r\n                    Sort By:\r\n                  </button>\r\n                  <div class=\"dropdown-menu\">\r\n                    <a class=\"dropdown-item\" href=\"#\">Alphabetical</a>\r\n                    <a class=\"dropdown-item\" href=\"#\">Earliest to Latest</a>\r\n                    <a class=\"dropdown-item\" href=\"#\">Number of Requests</a>\r\n                  </div>\r\n                </div> -->\r\n                <div class=\"col\">\r\n                  <div class=\"input-group mb-3 searchBox\">\r\n                    <input type=\"text\" class=\"form-control\" placeholder=\"Search Subscribed Requests\" [(ngModel)]=\"sfilter\">\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              &nbsp;\r\n              <li class=\"card container\">\r\n                &nbsp;\r\n                <table class=\"table table-striped table-sm\" style=\"background-color: #282d32; color: white\">\r\n                  <thead>\r\n                    <tr style=\"text-align:center\">\r\n                      <th>Name</th>\r\n                      <th style=\"width: 400px;\">Status</th>\r\n                      <th style=\"width: 400px;\">Deadline</th>\r\n                    </tr>\r\n                  </thead>\r\n                </table>\r\n\r\n                <mat-accordion>\r\n                  <mat-expansion-panel id=\"requestExpansionId\" *ngFor=\"let request of activeRequests | filter:sfilter | paginate: {itemsPerPage: 25, currentPage: pr}\">\r\n                    <mat-expansion-panel-header style=\"text-align:center\">\r\n                      <mat-panel-title style=\"width:285px\">\r\n                        {{request.title}}\r\n                      </mat-panel-title>\r\n                      <mat-panel-title style=\"width:200px\">\r\n                        Active\r\n                      </mat-panel-title>\r\n                      <mat-panel-title style=\"width: 100px\">\r\n                        {{request.deadline}}\r\n                      </mat-panel-title>\r\n                    </mat-expansion-panel-header>\r\n\r\n                    <div class=\"container\" style=\"border:3px solid black; background-color: #dcdde1\">\r\n                      &nbsp;\r\n                      <mat-panel-title>\r\n                        <b>Request Description:</b>\r\n                      </mat-panel-title>\r\n                      <mat-panel-title>\r\n                        <div [innerHTML]=\"request.description\"></div>\r\n                      </mat-panel-title>\r\n                      &nbsp;\r\n                      <div class=\"col-sm-12\" style=\"text-align: right;\">\r\n                        <button type=\"button\" class=\"btn btn-warning\">Archive</button>\r\n                        &nbsp;\r\n                        <button type=\"button\" routerLink=\"/seller/submit-offer/{{request._id}}\" class=\"btn btn-primary\">Submit New Offer</button>\r\n                      </div>\r\n                      &nbsp;\r\n                    </div>\r\n                  </mat-expansion-panel>\r\n                </mat-accordion>\r\n\r\n                <!-- <div class=\"card container contain\" *ngFor=\"let request of activeRequests\">\r\n                  <div class=\"card-body\">\r\n                    <h4>{{request.title}}</h4>\r\n                    <h5><b>Deadline: </b>{{request.deadline}}</h5>\r\n                    <p><b>Description: </b>{{request.description}}</p>\r\n                    <button type=\"button\" routerLink=\"/request/{{request._id}}\" class=\"btn btn-block btn-lg btn-primary\">View Request</button>\r\n                    <br>\r\n                  </div>\r\n                </div> -->\r\n                &nbsp;\r\n                <pagination-controls (pageChange)=\"pr = $event\" previousLabel=\"Previous\" nextLabel=\"Next\" directionLinks=\"true\"\r\n                  autoHide=\"true\">\r\n                </pagination-controls>\r\n              </li>\r\n              &nbsp;\r\n              &nbsp;\r\n            </div>\r\n\r\n            <!-- The content for History tab -->\r\n            <div class=\"tab-pane fade show\" id=\"history\" [ngClass]=\"{'active':currentTab === 'history'}\" role=\"tabpanel\"\r\n              aria-labelledby=\"history-tab\">\r\n              <br>\r\n              <div class=\"row justify-content-md\">\r\n                <div class=\"col\">\r\n                  <h3>&nbsp;&nbsp;{{seller.first_name}}'s Offers</h3>\r\n                </div>\r\n                <!-- <div class=\"dropdown dropDownBtn\">\r\n                  <button type=\"button\" class=\"btn dDownBtn dropdown-toggle text-white searchBtn\" data-toggle=\"dropdown\">\r\n                    Sort By:\r\n                  </button>\r\n                  <div class=\"dropdown-menu\">\r\n                    <a class=\"dropdown-item\" href=\"#\">Alphabetical</a>\r\n                    <a class=\"dropdown-item\" href=\"#\">Earliest to Latest</a>\r\n                    <a class=\"dropdown-item\" href=\"#\">Number of Requests</a>\r\n                  </div>\r\n                </div> -->\r\n                <div class=\"col\">\r\n                  <div class=\"input-group mb-3 searchBox\">\r\n                    <input type=\"text\" class=\"form-control\" placeholder=\"Search Offers\" [(ngModel)]=\"ofilter\">\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <ul class=\"container\">\r\n                <br>\r\n                <li class=\"card container\">\r\n                  &nbsp;\r\n                  <table class=\"table table-striped table-sm\" style=\"background-color: #282d32; color: white\">\r\n                    <thead>\r\n                      <tr style=\"text-align:center\">\r\n                        <th>Name</th>\r\n                        <th style=\"width: 400px;\">Status</th>\r\n                        <th style=\"width: 400px;\">Deadline</th>\r\n                      </tr>\r\n                    </thead>\r\n                  </table>\r\n\r\n                  <mat-accordion>\r\n                    <mat-expansion-panel id=\"requestExpansionId\" *ngFor=\"let offer of offerList | filter:ofilter | paginate: {itemsPerPage: 25, currentPage: po}\">\r\n                      <mat-expansion-panel-header style=\"text-align:center\">\r\n                        <mat-panel-title style=\"width:285px\">\r\n                            {{offer.title}}\r\n                        </mat-panel-title>\r\n                        <mat-panel-title style=\"width:200px\">\r\n                          Active\r\n                        </mat-panel-title>\r\n                        <mat-panel-title style=\"width: 100px\">\r\n                          {{offer.deadline}}\r\n                        </mat-panel-title>\r\n                      </mat-expansion-panel-header>\r\n\r\n                      <div class=\"container\" style=\"border:3px solid black; background-color: #dcdde1\">\r\n                        &nbsp;\r\n                        <mat-panel-title>\r\n                          <b>Offer Description:</b>\r\n                        </mat-panel-title>\r\n                        <mat-panel-title>\r\n                          <div [innerHTML]=\"offer.description\"></div>\r\n                        </mat-panel-title>\r\n                        &nbsp;\r\n                        <mat-panel-title>\r\n                          <b>Your Price: &nbsp;</b>\r\n                          $&nbsp;\r\n                          <div [innerHTML]=\"offer.price\"></div>\r\n                        </mat-panel-title>\r\n                        &nbsp;\r\n                      </div>\r\n                    </mat-expansion-panel>\r\n                  </mat-accordion>\r\n                  &nbsp;\r\n                  <pagination-controls (pageChange)=\"po = $event\" previousLabel=\"Previous\" nextLabel=\"Next\" directionLinks=\"true\"\r\n                    autoHide=\"true\">\r\n                  </pagination-controls>\r\n                </li>\r\n                &nbsp;\r\n                &nbsp;\r\n\r\n                <!-- <div class=\"card container\" *ngFor=\"let offer of offerList\">\r\n                  <div class=\"card-body\">\r\n                    <h4 style=\"align-self:right\">$ {{offer.price}}</h4>\r\n                    <h5>{{offer.title}}</h5>\r\n                    <p><b>Description:</b> {{offer.description}}</p>\r\n                    <h6>Seller ID: {{offer.seller_ID}}</h6>\r\n                  </div>\r\n                </div> -->\r\n              </ul>\r\n            </div>\r\n\r\n            <!-- Archive Content -->\r\n            <div class=\"tab-pane fade show\" id=\"archive\" [ngClass]=\"{'active':currentTab === 'archive'}\" role=\"tabpanel\"\r\n              aria-labelledby=\"archive-tab\">\r\n              <br>\r\n              <div class=\"row justify-content-md\">\r\n                <div class=\"col\">\r\n                  <h3>&nbsp;&nbsp;{{seller.first_name}}'s Archived Requests</h3>\r\n                </div>\r\n                <!-- <div class=\"dropdown dropDownBtn\">\r\n                  <button type=\"button\" class=\"btn dDownBtn dropdown-toggle text-white searchBtn\" data-toggle=\"dropdown\">\r\n                    Sort By:\r\n                  </button>\r\n                  <div class=\"dropdown-menu\">\r\n                    <a class=\"dropdown-item\" href=\"#\">Alphabetical</a>\r\n                    <a class=\"dropdown-item\" href=\"#\">Earliest to Latest</a>\r\n                    <a class=\"dropdown-item\" href=\"#\">Number of Requests</a>\r\n                  </div>\r\n                </div> -->\r\n                <div class=\"col\">\r\n                  <div class=\"input-group mb-3 searchBox\">\r\n                    <input type=\"text\" class=\"form-control\" placeholder=\"Search Archived Requests\">\r\n                    <div class=\"input-group-append\">\r\n                      <button class=\"btn submitSearchBtn text-white\" type=\"submit\">Search</button>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n\r\n              <ul class=\"container\">\r\n                <br>\r\n                <li class=\"card container\">\r\n                  &nbsp;\r\n                  <table class=\"table table-striped table-sm\" style=\"background-color: #282d32; color: white\">\r\n                    <thead>\r\n                      <tr style=\"text-align:center\">\r\n                        <th>Name</th>\r\n                        <th style=\"width: 400px;\">Status</th>\r\n                        <th style=\"width: 400px;\">Deadline</th>\r\n                      </tr>\r\n                    </thead>\r\n                  </table>\r\n\r\n                  <!-- Functionality here! -->\r\n\r\n                  &nbsp;\r\n                </li>\r\n                &nbsp;\r\n                &nbsp;\r\n              </ul>\r\n            </div>\r\n          <!-- End Content -->\r\n          </div>\r\n        </div>\r\n      <div class=\"clearfooter\"></div>\r\n    </div>\r\n  </div>\r\n  </div>\r\n</body>\r\n"

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
    SellerComponent.prototype.archive = function (currentTab) {
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

/***/ "./src/app/components/seller/submit-categories/submit-categories.component.css":
/*!*************************************************************************************!*\
  !*** ./src/app/components/seller/submit-categories/submit-categories.component.css ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "html, body {\r\n  height: 100%;\r\n}\r\n\r\n#container {\r\n  min-height: 100%;\r\n  margin-bottom: -600px;\r\n  position: relative;\r\n}\r\n\r\n.contain {\r\n  opacity: .90;\r\n}\r\n\r\n#footer {\r\n  height: 600px;\r\n  position: relative;\r\n}\r\n\r\n.clearfooter {\r\n  height: 600px;\r\n  clear: both;\r\n}\r\n\r\n.clearheader {\r\n  height: 40px;\r\n  clear: both;\r\n}\r\n\r\n.stepTabs {\r\n  width: 370px;\r\n}\r\n\r\ninput[type=\"checkbox\"] {\r\n  display: none;\r\n}\r\n\r\n#otis li {\r\n  list-style-type: none;\r\n}\r\n\r\nlabel {\r\n  border: 0px solid #fff;\r\n  padding: 0px;\r\n  display: block;\r\n  position: relative;\r\n  margin: 0px;\r\n  cursor: pointer;\r\n  -webkit-touch-callout: none;\r\n  -webkit-user-select: none;\r\n  -moz-user-select: none;\r\n  -ms-user-select: none;\r\n  user-select: none;\r\n  text-align: center;\r\n}\r\n\r\nlabel::before {\r\n  text-align: center;\r\n  background-color: white;\r\n  color: white;\r\n  content: \" \";\r\n  border-radius: 50%;\r\n  position: relative;\r\n  top: -1px;\r\n  left: -1px;\r\n  width: 51px;\r\n  height: 51px;\r\n  line-height: 28px;\r\n  transition-duration: 0.4s;\r\n  -webkit-transform: scale(0);\r\n          transform: scale(0);\r\n}\r\n\r\nlabel img {\r\n  height: 50px;\r\n  width: 50px;\r\n  transition-duration: 0.2s;\r\n  -webkit-transform-origin: 50% 50%;\r\n          transform-origin: 50% 50%;\r\n  border-radius: 50%;\r\n}\r\n\r\n:checked+label {\r\n  border-color: #ddd;\r\n}\r\n\r\n:checked+label::before {\r\n  background-color: #FF0000;\r\n  content: \" \";\r\n  color: black;\r\n  border-radius: 50%;\r\n  position: relative;\r\n  top: -1px;\r\n  left: -1px;\r\n  width: 51px;\r\n  height: 51px;\r\n  -webkit-transform: scale(1);\r\n          transform: scale(1);\r\n}\r\n\r\n:checked+label img {\r\n  -webkit-transform: scale(0.8);\r\n          transform: scale(0.8);\r\n  box-shadow: 0 0 50px #FF0000;\r\n  z-index: -1;\r\n}\r\n\r\n.checkbox-grid li {\r\n  display: block;\r\n  float: left;\r\n  width: 25%;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zZWxsZXIvc3VibWl0LWNhdGVnb3JpZXMvc3VibWl0LWNhdGVnb3JpZXMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixxQkFBcUI7RUFDckIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxZQUFZO0VBQ1osV0FBVztBQUNiOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUNBO0VBQ0UscUJBQXFCO0FBQ3ZCOztBQUNBO0VBQ0Usc0JBQXNCO0VBQ3RCLFlBQVk7RUFDWixjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxlQUFlO0VBQ2YsMkJBQTJCO0VBQzNCLHlCQUF5QjtFQUV6QixzQkFBc0I7RUFDdEIscUJBQXFCO0VBQ3JCLGlCQUFpQjtFQUNqQixrQkFBa0I7QUFDcEI7O0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsdUJBQXVCO0VBQ3ZCLFlBQVk7RUFDWixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsVUFBVTtFQUNWLFdBQVc7RUFDWCxZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLHlCQUF5QjtFQUN6QiwyQkFBbUI7VUFBbkIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLFdBQVc7RUFDWCx5QkFBeUI7RUFDekIsaUNBQXlCO1VBQXpCLHlCQUF5QjtFQUN6QixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsWUFBWTtFQUNaLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxVQUFVO0VBQ1YsV0FBVztFQUNYLFlBQVk7RUFDWiwyQkFBbUI7VUFBbkIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsNkJBQXFCO1VBQXJCLHFCQUFxQjtFQUNyQiw0QkFBNEI7RUFDNUIsV0FBVztBQUNiOztBQUVBO0VBQ0UsY0FBYztFQUNkLFdBQVc7RUFDWCxVQUFVO0FBQ1oiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3NlbGxlci9zdWJtaXQtY2F0ZWdvcmllcy9zdWJtaXQtY2F0ZWdvcmllcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaHRtbCwgYm9keSB7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG4jY29udGFpbmVyIHtcclxuICBtaW4taGVpZ2h0OiAxMDAlO1xyXG4gIG1hcmdpbi1ib3R0b206IC02MDBweDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbi5jb250YWluIHtcclxuICBvcGFjaXR5OiAuOTA7XHJcbn1cclxuXHJcbiNmb290ZXIge1xyXG4gIGhlaWdodDogNjAwcHg7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4uY2xlYXJmb290ZXIge1xyXG4gIGhlaWdodDogNjAwcHg7XHJcbiAgY2xlYXI6IGJvdGg7XHJcbn1cclxuXHJcbi5jbGVhcmhlYWRlciB7XHJcbiAgaGVpZ2h0OiA0MHB4O1xyXG4gIGNsZWFyOiBib3RoO1xyXG59XHJcblxyXG4uc3RlcFRhYnMge1xyXG4gIHdpZHRoOiAzNzBweDtcclxufVxyXG5cclxuaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdIHtcclxuICBkaXNwbGF5OiBub25lO1xyXG59XHJcbiNvdGlzIGxpIHtcclxuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XHJcbn1cclxubGFiZWwge1xyXG4gIGJvcmRlcjogMHB4IHNvbGlkICNmZmY7XHJcbiAgcGFkZGluZzogMHB4O1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBtYXJnaW46IDBweDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgLXdlYmtpdC10b3VjaC1jYWxsb3V0OiBub25lO1xyXG4gIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgLWtodG1sLXVzZXItc2VsZWN0OiBub25lO1xyXG4gIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xyXG4gIHVzZXItc2VsZWN0OiBub25lO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5sYWJlbDo6YmVmb3JlIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGNvbnRlbnQ6IFwiIFwiO1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgdG9wOiAtMXB4O1xyXG4gIGxlZnQ6IC0xcHg7XHJcbiAgd2lkdGg6IDUxcHg7XHJcbiAgaGVpZ2h0OiA1MXB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAyOHB4O1xyXG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDAuNHM7XHJcbiAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcclxufVxyXG5cclxubGFiZWwgaW1nIHtcclxuICBoZWlnaHQ6IDUwcHg7XHJcbiAgd2lkdGg6IDUwcHg7XHJcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC4ycztcclxuICB0cmFuc2Zvcm0tb3JpZ2luOiA1MCUgNTAlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxufVxyXG5cclxuOmNoZWNrZWQrbGFiZWwge1xyXG4gIGJvcmRlci1jb2xvcjogI2RkZDtcclxufVxyXG5cclxuOmNoZWNrZWQrbGFiZWw6OmJlZm9yZSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZGMDAwMDtcclxuICBjb250ZW50OiBcIiBcIjtcclxuICBjb2xvcjogYmxhY2s7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB0b3A6IC0xcHg7XHJcbiAgbGVmdDogLTFweDtcclxuICB3aWR0aDogNTFweDtcclxuICBoZWlnaHQ6IDUxcHg7XHJcbiAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcclxufVxyXG5cclxuOmNoZWNrZWQrbGFiZWwgaW1nIHtcclxuICB0cmFuc2Zvcm06IHNjYWxlKDAuOCk7XHJcbiAgYm94LXNoYWRvdzogMCAwIDUwcHggI0ZGMDAwMDtcclxuICB6LWluZGV4OiAtMTtcclxufVxyXG5cclxuLmNoZWNrYm94LWdyaWQgbGkge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG4gIHdpZHRoOiAyNSU7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/components/seller/submit-categories/submit-categories.component.html":
/*!**************************************************************************************!*\
  !*** ./src/app/components/seller/submit-categories/submit-categories.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-seller-navbar></app-seller-navbar>\r\n<div class=\"clearheader\"></div>\r\n\r\n&nbsp;\r\n<body>\r\n<div class=\"container contain\">\r\n    &nbsp;\r\n    &nbsp;\r\n    &nbsp;\r\n    &nbsp;\r\n    &nbsp;\r\n    <mat-horizontal-stepper [linear]=false #stepper>\r\n      <mat-step [stepControl]=\"firstFormGroup\">\r\n        <form [formGroup]=\"firstFormGroup\">\r\n          <ng-template matStepLabel>Step 1</ng-template>\r\n          <div>\r\n            <div class=\"container\">\r\n              &nbsp;\r\n              <h1>What goods/services would you like to provide?</h1>\r\n              &nbsp;\r\n              <!-- <div class=\"card contain\">\r\n                <div class=\"card-body\">\r\n                  <div class=\"form-group row\">\r\n                    <label class=\"col-sm-4 col-form-label\">Current Good/Service:</label>\r\n                    <div *ngIf=\"None\" class=\"col-sm-6\">\r\n                      <label class=\"col-sm-4 col-form-label\">None</label>\r\n                    </div>\r\n                    <div *ngIf=\"!None\" class=\"col-sm-10\">\r\n                      <label class=\"col-sm-4 col-form-label\">{{codeNames}}</label>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div> -->\r\n              <div class=\"card contain\">\r\n                <div class=\"card-body\">\r\n                  <div class=\"form-group row\">\r\n                    <label class=\"col-sm-12\" style=\"color:#FF0000\">You are already opted in to the selected ones:</label>\r\n                    &nbsp;\r\n                    <div class=\"container-fluid\" style=\"position: relative; right: 4%\">\r\n                      <ul class=\"checkbox-grid\" *ngFor=\"let code of codes\" id=\"otis\">\r\n                        <li *ngIf = \"codeArray != undefined\">\r\n                          <div *ngIf=\"codeArray.indexOf(code.code) !== -1\">\r\n                            <input type=\"checkbox\" name=\"code\" value={{code.code}} id={{code.code}} (change)=\"onCheckboxChange(code,$event)\" checked/>\r\n                            <label id=\"piclabel\" for={{code.code}}><img src={{code.image}} /></label>\r\n                            <label id=\"piclabel\">{{code.name}}</label>\r\n                          </div>\r\n                          <div *ngIf=\"codeArray.indexOf(code.code) === -1\">\r\n                            <input type=\"checkbox\" name=\"code\" value={{code.code}} id={{code.code}} (change)=\"onCheckboxChange(code,$event)\"/>\r\n                            <label id=\"piclabel\" for={{code.code}}><img src={{code.image}} /></label>\r\n                            <label id=\"piclabel\">{{code.name}}</label>\r\n                          </div>\r\n                        </li>\r\n                        <li *ngIf = \"codeArray == undefined\">\r\n                            <div>\r\n                              <input type=\"checkbox\" name=\"code\" value={{code.code}} id={{code.code}} (change)=\"onCheckboxChange(code,$event)\"/>\r\n                              <label id=\"piclabel\" for={{code.code}}><img src={{code.image}} /></label>\r\n                              <label id=\"piclabel\">{{code.name}}</label>\r\n                            </div>\r\n                          </li>\r\n                      </ul>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div>\r\n            <button mat-button matStepperNext class=\"float-right\">Next</button>\r\n          </div>\r\n        </form>\r\n      </mat-step>\r\n      <mat-step [stepControl]=\"secondFormGroup\">\r\n        <form [formGroup]=\"secondFormGroup\">\r\n          <ng-template matStepLabel>Step 2</ng-template>\r\n          <div>\r\n            <div class=\"card\">\r\n              <div class=\"card-body\">\r\n                <form>\r\n                  <div class=\"form-group\">\r\n                    <h3>Tell us a little bit about you...</h3>\r\n                    &nbsp;\r\n                    <textarea class=\"form-control\" [(ngModel)]=\"description\" name=\"description\" rows=\"20\" required></textarea>\r\n                  </div>\r\n                </form>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div>\r\n            <button mat-button matStepperPrevious>Back</button>\r\n            <button mat-button matStepperNext class=\"float-right\">Next</button>\r\n          </div>\r\n        </form>\r\n      </mat-step>\r\n      <mat-step>\r\n        <ng-template matStepLabel>Step 3</ng-template>\r\n        <form (submit)=\"OnSubmitClickBtn()\">\r\n          <div class=\"card\">\r\n            <div class=\"card-body\">\r\n              <h3>Billing Address</h3>\r\n              &nbsp;\r\n                <div class=\"form-group\">\r\n                  <label for=\"firstName\" style=\"text-align: left\">&nbsp;&nbsp;First Name:</label>\r\n                  <input [(ngModel)]=\"first_name\" placeholder=\"Enter First Name\" class=\"form-control\" name=\"first_name\" rows=\"1\" required>\r\n                </div>\r\n                <div class=\"form-group\">\r\n                  <label for=\"lastName\" style=\"text-align: left\">&nbsp;&nbsp;Last Name: </label>\r\n                  <input [(ngModel)]=\"last_name\" placeholder=\"Enter Last Name\" class=\"form-control\" name=\"last_name\" rows=\"1\" required>\r\n                </div>\r\n                <div class=\"form-group\">\r\n                  <label for=\"streetAddress\" style=\"text-align: left\">&nbsp;&nbsp;Street Address:</label>\r\n                  <input [(ngModel)]=\"street_address\" placeholder=\"Enter Street Address\" class=\"form-control\" name=\"street_address\" rows=\"3\" required>\r\n                </div>\r\n                <div class=\"form-group\">\r\n                  <label for=\"city\" style=\"text-align: left\">&nbsp;&nbsp;City: </label>\r\n                  <input [(ngModel)]=\"city\" placeholder=\"Enter City\" class=\"form-control\" name=\"city\" rows=\"1\" required>\r\n                </div>\r\n                <div class=\"form-group\">\r\n                  <label for=\"country\" style=\"text-align: left\">&nbsp;&nbsp;Country:</label>\r\n                  <input [(ngModel)]=\"country\" placeholder=\"Enter Country\" class=\"form-control\" name=\"country\" rows=\"1\" required>\r\n                </div>\r\n                <div class=\"form-group\">\r\n                  <label for=\"state_province\" style=\"text-align: left\">&nbsp;&nbsp;State/Province: </label>\r\n                  <input [(ngModel)]=\"state_province\" placeholder=\"Enter State/Province\" class=\"form-control\" name=\"state_province\" rows=\"1\" required>\r\n                </div>\r\n                <div class=\"form-group\">\r\n                  <label for=\"postal_code\" style=\"text-align: left\">&nbsp;&nbsp;Postal Code: </label>\r\n                  <input [(ngModel)]=\"postal_code\" placeholder=\"Enter Postal Code\" type=\"Postal\" class=\"form-control\" name=\"postal_code\" rows=\"1\" required>\r\n                </div>\r\n            </div>\r\n          </div>\r\n          <div>\r\n            <button mat-button matStepperPrevious>Back</button>\r\n            <button mat-button type=\"submit\" class=\"float-right\">Submit</button>\r\n            <button mat-button class=\"float-right\" (click)=\"stepper.reset()\">Reset</button>\r\n          </div>\r\n        </form>\r\n      </mat-step>\r\n    </mat-horizontal-stepper>\r\n\r\n\t\t<div class=\"clearfooter\"></div>\r\n  </div>\r\n</body>\r\n"

/***/ }),

/***/ "./src/app/components/seller/submit-categories/submit-categories.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/components/seller/submit-categories/submit-categories.component.ts ***!
  \************************************************************************************/
/*! exports provided: SubmitCategoriesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubmitCategoriesComponent", function() { return SubmitCategoriesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var angular_notifier__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular-notifier */ "./node_modules/angular-notifier/esm5/angular-notifier.js");
/* harmony import */ var _services_seller_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/seller.service */ "./src/app/services/seller.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SubmitCategoriesComponent = /** @class */ (function () {
    function SubmitCategoriesComponent(sellerService, route, notifierService, router, _formBuilder) {
        this.sellerService = sellerService;
        this.route = route;
        this.notifierService = notifierService;
        this.router = router;
        this._formBuilder = _formBuilder;
        // Temp codes for MVP - Kurgan
        this.codes = [
            { code: 78965422, name: 'Jewelry', image: 'https://picsum.photos/200', checked: false },
            { code: 78965423, name: 'Necklaces (Jewelry)', image: 'https://picsum.photos/200', checked: false },
            { code: 78965424, name: 'Rings (Jewelry)', image: 'https://picsum.photos/200', checked: false },
            { code: 78965425, name: 'Earrings (Jewelry)', image: 'https://picsum.photos/200', checked: false },
            { code: 68977451, name: 'Dolls', image: 'https://picsum.photos/200', checked: false },
            { code: 67887941, name: 'Sculptures', image: 'https://picsum.photos/200', checked: false },
            { code: 62145331, name: 'Scarves', image: 'https://picsum.photos/200', checked: false },
            { code: 54887921, name: 'Blankets', image: 'https://picsum.photos/200', checked: false },
            { code: 52871151, name: 'Socks', image: 'https://picsum.photos/200', checked: false },
            { code: 50360051, name: 'Pencils', image: 'https://picsum.photos/200', checked: false },
            { code: 49605401, name: 'Painting', image: 'https://picsum.photos/200', checked: false },
            { code: 49605402, name: 'Oil (Painting)', image: 'https://picsum.photos/200', checked: false },
            { code: 49605403, name: 'Watercolor (Painting)', image: 'https://picsum.photos/200', checked: false },
            { code: 49605404, name: 'Acrlyic (Painting)', image: 'https://picsum.photos/200', checked: false }
        ];
        this.buttonText = 'Subscribe to any products on Requiren';
        // Tab first configuration
        this.currentTab = 'step1';
        this.notifier = notifierService;
    }
    // On initialization process of the webpage
    SubmitCategoriesComponent.prototype.ngOnInit = function () {
        var _this = this;
        // for the steps
        this.first = false;
        this.second = false;
        this.third = false;
        this.firstFormGroup = this._formBuilder.group({
            firstCtrl: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]
        });
        this.secondFormGroup = this._formBuilder.group({
            secondCtrl: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]
        });
        this.submitLabels = [];
        this.None = false;
        // Get seller codes
        this.sellerService.getCode().subscribe(function (data) {
            if (data.success) {
                if (data.codeList.length === 0) { // Seller does not have any codes yet
                }
                else {
                    _this.codeArray = data.codeList;
                }
            }
        });
    };
    /* // Checking which checkboxes are checked and upload the code - By: Andre Wijaya
    AddCode() {
      // Jewelry
      var element = <HTMLInputElement> document.getElementById('78965422');
      if (element.checked === true) {
        this.code = Number(element.value);
        this.uploadCode();
      }
  
      // Necklaces (Jewelry)
      var element = <HTMLInputElement> document.getElementById('78965423');
      if (element.checked === true) {
        this.code = Number(element.value);
        this.uploadCode();
      }
  
      // Rings (Jewelry)
      var element = <HTMLInputElement> document.getElementById('789654224');
      if (element.checked === true) {
        this.code = Number(element.value);
        this.uploadCode();
      }
  
      // Earrings (Jewelry)
      var element = <HTMLInputElement> document.getElementById('78965425');
      if (element.checked === true) {
        this.code = Number(element.value);
        this.uploadCode();
      }
  
      // Dolls
      var element = <HTMLInputElement> document.getElementById('68977451');
      if (element.checked === true) {
        this.code = Number(element.value);
        this.uploadCode();
      }
  
      // Sculptures
      var element = <HTMLInputElement> document.getElementById('67887941');
      if (element.checked === true) {
        this.code = Number(element.value);
        this.uploadCode();
      }
  
      // Scarves
      var element = <HTMLInputElement> document.getElementById('62145331');
      if (element.checked === true) {
        this.code = Number(element.value);
        this.uploadCode();
      }
  
      // Blankets
      var element = <HTMLInputElement> document.getElementById('54887921');
      if (element.checked === true) {
        this.code = Number(element.value);
        this.uploadCode();
      }
  
      // Socks
      var element = <HTMLInputElement> document.getElementById('52871151');
      if (element.checked === true) {
        this.code = Number(element.value);
        this.uploadCode();
      }
  
      // Pencils
      var element = <HTMLInputElement> document.getElementById('50360051');
      if (element.checked === true) {
        this.code = Number(element.value);
        this.uploadCode();
      }
  
      // Painting
      var element = <HTMLInputElement> document.getElementById('49605401');
      if (element.checked === true) {
        this.code = Number(element.value);
        this.uploadCode();
      }
  
      // Oil (Painting)
      var element = <HTMLInputElement> document.getElementById('49605402');
      if (element.checked === true) {
        this.code = Number(element.value);
        this.uploadCode();
      }
  
      // Watercolor (Painting)
      var element = <HTMLInputElement> document.getElementById('49605403');
      if (element.checked === true) {
        this.code = Number(element.value);
        this.uploadCode();
      }
  
      // Acrlyic (Painting)
      var element = <HTMLInputElement> document.getElementById('49605404');
      if (element.checked === true) {
        this.code = Number(element.value);
        this.uploadCode();
      }
    } */
    SubmitCategoriesComponent.prototype.AddCode = function () {
        var _this = this;
        var code = {
            codes: this.codeArray
        };
        this.sellerService.setNewCode(code).subscribe(function (data) {
            if (data.success) {
                _this.notifier.notify('success', 'Your New Code was submitted!');
            }
            else {
                _this.notifier.notify('error', data.msg);
            }
        });
    };
    SubmitCategoriesComponent.prototype.labelButton = function () {
        var btnTxt = 'Subscribe to  ';
        var slsize = this.submitLabels.length;
        //console.log(this.submitLabels[0]);
        for (var n = 0; n < slsize; n++) {
            if (slsize <= 3) {
                btnTxt = btnTxt + this.submitLabels[n];
                if (n < (slsize - 1)) {
                    btnTxt = btnTxt + ', ';
                }
                else {
                    btnTxt = btnTxt + ' ';
                }
            }
            else {
                if (n < 2) {
                    btnTxt = btnTxt + this.submitLabels[n] + ', ';
                }
                if (n === 2) {
                    btnTxt = btnTxt + this.submitLabels[n] + ' ';
                }
            }
        }
        var rem = slsize - 3;
        var remd = rem.toString();
        if (slsize > 3) {
            btnTxt = btnTxt + '(+' + remd + ' more) ';
        }
        this.buttonText = btnTxt + ' on Requiren';
    };
    SubmitCategoriesComponent.prototype.onCheckboxChange = function (option, event) {
        if (event.target.checked) {
            this.codeArray.push(option.code);
            this.submitLabels.push(option.name);
            this.labelButton();
        }
        else {
            for (var i = 0; i < this.codes.length; i++) {
                if (this.codeArray[i] === option.code) {
                    this.codeArray.splice(i, 1);
                    this.submitLabels.splice(i, 1);
                    this.labelButton();
                }
            }
        }
    };
    SubmitCategoriesComponent.prototype.OnSubmitClickBtn = function () {
        var _this = this;
        var billingAddress = {
            first_name: this.first_name,
            last_name: this.last_name,
            street_address: this.street_address,
            city: this.city,
            country: this.country,
            state_province: this.state_province,
            postal_code: this.postal_code,
        };
        var desc = {
            description: this.description
        };
        var code = {
            codes: this.codeArray
        };
        // adding code
        this.sellerService.setNewCode(code).subscribe(function (data2) {
            if (data2.success) {
                _this.notifier.notify('success', 'Your New Code was submitted!');
                // setting description
                _this.sellerService.setDescription(desc).subscribe(function (data) {
                    if (data.success === true) { // if the data succeed to be posted
                        // setting billing address connect it to the service for back-end process
                        _this.sellerService.setBillingAddress(billingAddress).subscribe(function (data1) {
                            if (data1.success) { // if the data succeed to be posted
                                _this.router.navigate(['/seller']);
                            }
                            else { // if it fails
                                _this.notifier.notify('error', data1.msg);
                            }
                        });
                    }
                    else { // if it fails
                        _this.notifier.notify('error', data.msg);
                    }
                });
            }
            else {
                _this.notifier.notify('error', data2.msg);
            }
        });
    };
    // when the user changes tabs
    SubmitCategoriesComponent.prototype.step1 = function (currentTab) {
        this.currentTab = currentTab;
    };
    SubmitCategoriesComponent.prototype.step2 = function (currentTab) {
        this.currentTab = currentTab;
    };
    SubmitCategoriesComponent.prototype.step3 = function (currentTab) {
        this.currentTab = currentTab;
    };
    SubmitCategoriesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-submit-categories',
            template: __webpack_require__(/*! ./submit-categories.component.html */ "./src/app/components/seller/submit-categories/submit-categories.component.html"),
            styles: [__webpack_require__(/*! ./submit-categories.component.css */ "./src/app/components/seller/submit-categories/submit-categories.component.css")]
        }),
        __metadata("design:paramtypes", [_services_seller_service__WEBPACK_IMPORTED_MODULE_3__["SellerService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            angular_notifier__WEBPACK_IMPORTED_MODULE_2__["NotifierService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]])
    ], SubmitCategoriesComponent);
    return SubmitCategoriesComponent;
}());



/***/ }),

/***/ "./src/app/components/seller/submit-offer/submit-offer.component.css":
/*!***************************************************************************!*\
  !*** ./src/app/components/seller/submit-offer/submit-offer.component.css ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "html, body {\r\n    height: 100%;\r\n    background-image: url('logistics2.jpg');\r\n    padding: 0;\r\n    background-repeat:no-repeat;\r\n    background-size:cover;\r\n    color: white;\r\n  }\r\n\r\n  #container {\r\n    min-height: 100%;\r\n    margin-bottom: -330px;\r\n    position: relative;\r\n  }\r\n\r\n  .contain {\r\n    color: black;\r\n    background-color: white;\r\n    opacity: 0.90;\r\n  }\r\n\r\n  #footer {\r\n    height: 330px;\r\n    position: relative;\r\n  }\r\n\r\n  .clearfooter {\r\n    height: 330px;\r\n    clear: both;\r\n  }\r\n\r\n  .clearheader {\r\n    height: 50px;\r\n    clear: both;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zZWxsZXIvc3VibWl0LW9mZmVyL3N1Ym1pdC1vZmZlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksWUFBWTtJQUNaLHVDQUErRDtJQUMvRCxVQUFVO0lBQ1YsMkJBQTJCO0lBQzNCLHFCQUFxQjtJQUNyQixZQUFZO0VBQ2Q7O0VBRUE7SUFDRSxnQkFBZ0I7SUFDaEIscUJBQXFCO0lBQ3JCLGtCQUFrQjtFQUNwQjs7RUFFQTtJQUNFLFlBQVk7SUFDWix1QkFBdUI7SUFDdkIsYUFBYTtFQUNmOztFQUVBO0lBQ0UsYUFBYTtJQUNiLGtCQUFrQjtFQUNwQjs7RUFFQTtJQUNFLGFBQWE7SUFDYixXQUFXO0VBQ2I7O0VBRUE7SUFDRSxZQUFZO0lBQ1osV0FBVztFQUNiIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9zZWxsZXIvc3VibWl0LW9mZmVyL3N1Ym1pdC1vZmZlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaHRtbCwgYm9keSB7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vLi4vLi4vLi4vLi4vc3JjL2Fzc2V0cy9sb2dpc3RpY3MyLmpwZyk7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6bm8tcmVwZWF0O1xyXG4gICAgYmFja2dyb3VuZC1zaXplOmNvdmVyO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gIH1cclxuXHJcbiAgI2NvbnRhaW5lciB7XHJcbiAgICBtaW4taGVpZ2h0OiAxMDAlO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogLTMzMHB4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIH1cclxuXHJcbiAgLmNvbnRhaW4ge1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICBvcGFjaXR5OiAwLjkwO1xyXG4gIH1cclxuXHJcbiAgI2Zvb3RlciB7XHJcbiAgICBoZWlnaHQ6IDMzMHB4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIH1cclxuXHJcbiAgLmNsZWFyZm9vdGVyIHtcclxuICAgIGhlaWdodDogMzMwcHg7XHJcbiAgICBjbGVhcjogYm90aDtcclxuICB9XHJcblxyXG4gIC5jbGVhcmhlYWRlciB7XHJcbiAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICBjbGVhcjogYm90aDtcclxuICB9Il19 */"

/***/ }),

/***/ "./src/app/components/seller/submit-offer/submit-offer.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/components/seller/submit-offer/submit-offer.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-seller-navbar></app-seller-navbar>\r\n\r\n<div class=\"clearheader\"></div>\r\n<body>\r\n<form (submit)=\"submitOffer()\">\r\n  <div class=\"container\">\r\n    <br>\r\n    <br>\r\n    <h1>Submit Product Offer</h1>\r\n    &nbsp;\r\n    <!-- Submit Offer Form -->\r\n    <div class=\"card contain\">\r\n      <div class=\"card-body\">\r\n          <div class=\"form-group row\">\r\n            <label class=\"col-sm-2 col-form-label\">Offer Title:</label>\r\n            <div class=\"col-sm-10\">\r\n              <input class=\"form-control mr-sm-2\" type=\"text\" [(ngModel)]=\"title\" name=\"offer-title\" value=\"\">\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group row\">\r\n            <label class=\"col-sm-2 col-form-label\">Enter description of desired product:</label>\r\n            <div class=\"col-sm-10\">\r\n              <textarea class=\"form-control\" name=\"description\" [(ngModel)]=\"description\" rows=\"8\" cols=\"80\"></textarea>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group row\">\r\n            <label class=\"col-sm-2 col-form-label\">Enter Price:</label>\r\n            <div class=\"col-sm-10\">\r\n              <input class=\"form-control mr-sm-2\" type=\"text\" name=\"price\" [(ngModel)]=\"price\" value=\"\">\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group row\">\r\n            <div class=\"col-sm-10\">\r\n              <button type=\"submit\" routerLink=\"/seller\" routerLinkActive=\"router-link-active\"  class=\"btn btn-primary\">Submit</button>\r\n            </div>\r\n          </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"clearfooter\"></div>\r\n  </div>\r\n</form>\r\n</body>\r\n"

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
/* harmony import */ var angular_notifier__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-notifier */ "./node_modules/angular-notifier/esm5/angular-notifier.js");
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
    function SubmitOfferComponent(sellerService, route, notifierService, router) {
        this.sellerService = sellerService;
        this.route = route;
        this.notifierService = notifierService;
        this.router = router;
        this.notifier = notifierService;
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
                _this.notifier.notify('success', 'Your Offer was submitted!');
                _this.router.navigate(['/seller']);
            }
            else { // if it fails
                _this.notifier.notify('error', data.msg);
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
            angular_notifier__WEBPACK_IMPORTED_MODULE_3__["NotifierService"],
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
        if (true) {
            return this.http.post('http://localhost:3000/buyers/login', buyer, httpOptions)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (res) { return res; }));
        }
        else {}
    };
    // Seller Authenticate Service
    AuthService.prototype.AuthenticateSeller = function (seller) {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json'
            })
        };
        if (true) {
            return this.http.post('http://localhost:3000/sellers/login', seller, httpOptions)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (res) { return res; }));
        }
        else {}
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
        if (true) {
            return this.http.get('http://localhost:3000/buyers/profile', httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (res) { return res; }));
        }
        else {}
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
            if (true) {
                return this.http.post('http://localhost:3000/buyers/request', request, httpOptions)
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (res) { return res; }));
            }
            else {}
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
        if (true) {
            return this.http.get('http://localhost:3000/buyers/request', httpOptions)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (res) { return res; }));
        }
        else {}
    };
    // By: Omar
    // Update current buyers profile
    BuyerService.prototype.updateBuyerProfile = function (buyer) {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json'
            })
        };
        if (true) {
            return this.http.post('http://localhost:3000/buyers/update', buyer, httpOptions)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (res) { return res; }));
        }
        else {}
    };
    BuyerService.prototype.addOfferToBuyerCart = function (offerCartItem) {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'x-access-token': this.buyerToken
            })
        };
        if (true) {
            return this.http.post('http://localhost:3000/buyers/addToCart', offerCartItem, httpOptions)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (res) { return res; }));
        }
        else {}
    };
    // By Roni
    // Retreive buyer shopping cart
    BuyerService.prototype.retrieveBuyerCart = function () {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'x-access-token': this.buyerToken
            })
        };
        if (true) {
            return this.http.get('http://localhost:3000/buyers/retrieveCart', httpOptions)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (res) { return res; }));
        }
        else {}
    };
    // By: Omar
    // Sends the checkout information to server checkout route in app.js
    BuyerService.prototype.checkout = function (offer) {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json'
            })
        };
        console.log(offer);
        if (true) {
            return this.http.post('http://localhost:3000/checkout', offer, httpOptions)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (res) { return res; }));
        }
        else {}
    };
    BuyerService.prototype.removeOfferFromCart = function (offerID) {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'x-access-token': this.buyerToken
            })
        };
        console.log(offerID);
        if (true) {
            return this.http.post('http://localhost:3000/buyers/removeFromCart', offerID, httpOptions)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (res) { return res; }));
        }
        else {}
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
        console.log('Inside Buyer Register');
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json'
            })
        };
        if (true) {
            return this.http.post('http://localhost:3000/buyers/register', buyer, httpOptions)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (res) { return res; }));
        }
        else {}
    };
    // Seller Register Service
    RegisterService.prototype.RegisterSeller = function (seller) {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json'
            })
        };
        if (true) {
            return this.http.post('http://localhost:3000/sellers/register', seller, httpOptions)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (res) { return res; }));
        }
        else {}
    };
    // Buyer email activation through link, pass in the token with the function call
    RegisterService.prototype.activateAccount = function (token) {
        if (true) {
            return this.http.post('http://localhost:3000/buyers/confirmEmail/' + token, token)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (res) { return res; }));
        }
        else {}
    };
    // Seller email activation through link, pass in the token with the function call
    RegisterService.prototype.selleractivateAccount = function (token) {
        if (true) {
            return this.http.post('http://localhost:3000/sellers/confirmEmail/' + token, token)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (res) { return res; }));
        }
        else {}
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
        if (true) {
            return this.http.post('http://localhost:3000/requests/' + id, id, httpOptions)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (res) { return res; }));
        }
        else {}
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
        if (true) {
            return this.http.get('http://localhost:3000/sellers/profile', httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res; }));
        }
        else {}
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
        if (true) {
            return this.http.get('http://localhost:3000/sellers/viewoffers', httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res; }));
        }
        else {}
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
        if (true) {
            return this.http.post('http://localhost:3000/sellers/makeOffer/' + this.requestID, comingOffer, httpOptions)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res; }));
        }
        else {}
    };
    // By: Omar
    // Update current sellers profile
    SellerService.prototype.updateSellerProfile = function (seller) {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json'
            })
        };
        if (true) {
            return this.http.post('http://localhost:3000/sellers/update', seller, httpOptions)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res; }));
        }
        else {}
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
        if (true) {
            return this.http.post('http://localhost:3000/sellers//addCode', code, httpOptions)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res; }));
        }
        else {}
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
        if (true) {
            return this.http.get('http://localhost:3000/sellers/getCode', httpOptions)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res; }));
        }
        else {}
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
        if (true) {
            return this.http.get('http://localhost:3000/sellers/viewactiverequests', httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res; }));
        }
        else {}
    };
    // Service to post a new description for seller
    SellerService.prototype.setDescription = function (description) {
        this.loadToken();
        // Tokens needed to fetch data from database
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'x-access-token': this.sellerToken
            })
        };
        if (true) {
            return this.http.post('http://localhost:3000/sellers/addDescription', description, httpOptions)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res; }));
        }
        else {}
    };
    SellerService.prototype.setBillingAddress = function (billingAddress) {
        this.loadToken();
        // Tokens needed to fetch data from database
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'x-access-token': this.sellerToken
            })
        };
        if (true) {
            return this.http.post('http://localhost:3000/sellers/addBillingAddress', billingAddress, httpOptions)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res; }));
        }
        else {}
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
        var obj = JSON.parse(localStorage.getItem('buyer'));
        localStorage.setItem('buyerCart', obj['offerCart']['length']);
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

module.exports = __webpack_require__(/*! C:\Users\ronip\Documents\GEX\angular-src\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map