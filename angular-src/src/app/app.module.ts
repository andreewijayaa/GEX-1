import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotifierModule, NotifierOptions  } from 'angular-notifier';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { SellerLoginComponent } from './components/login/sellerLogin.component';
import { BuyerRegisterComponent } from './components/register/BuyerRegister/BuyerRegister.component';
import { BuyerComponent } from './components/buyer/buyer.component';
import { SellerComponent } from './components/seller/seller.component';
import { HomeComponent } from './components/home/home.component';
import { MakeRequestComponent } from './components/buyer/make-request/make-request.component';
import { BuyerAccountComponent } from './components/buyer/buyer-account/buyer-account.component';
import { SubmitOfferComponent } from './components/seller/submit-offer/submit-offer.component';
import { SellerAccountComponent } from './components/seller/seller-account/seller-account.component';
import { SellerRegisterComponent } from './components/register/SellerRegister/SellerRegister.component';
import { FooterComponent } from './components/footer/footer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ValidateService } from './services/validate.service';
import { RegisterService } from './services/register.service';
import { AuthService } from './services/auth.service';
import { StoreFetchService } from './services/storeFetch.service';
import { HttpClientModule } from '@angular/common/http';
import { SellerNavbarComponent } from './components/navbar/seller-navbar/seller-navbar.component';
import { BuyerNavbarComponent } from './components/navbar/buyer-navbar/buyer-navbar.component';
import { PreactivationComponent } from './components/activation/preactivation/preactivation.component';
import { PostactivationComponent } from './components/activation/postactivation/postactivation.component';
import { SellerService } from './services/seller.service';
import { BuyerAuthGuard } from './buyerAuth.guard';
import { SellerAuthGuard } from './sellerAuth.guard';
import { SellerServicesComponent } from './components/seller/seller-services/seller-services/seller-services.component';
import { RequestComponent } from './components/request/request.component';
import { BuyerResolve } from './services/buyer.resolve';
import { SellerResolve } from './services/seller.resolve';
import { resolve } from 'path';
import { SubmitCategoriesComponent } from './components/seller/submit-categories/submit-categories.component';
import { BuyerCheckoutComponent } from './components/buyer/buyer-checkout/buyer-checkout.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { Ng2SearchPipeModule} from 'ng2-search-filter';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { NgxStripeModule, STRIPE_PUBLISHABLE_KEY } from 'ngx-stripe';
import { FlashMessagesModule } from 'angular2-flash-messages';
import { MatStepperModule } from '@angular/material/stepper';
import { MatFormFieldModule, MatInputModule, MatButtonModule, MatOptionModule, MatSelectModule, MatExpansionModule, MatBadgeModule, MatDialogModule, MatProgressSpinnerModule, MatDividerModule, MatListModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SubmitOfferDialogComponent, OfferSubmittedDialogComponent, OfferSubmittedFailedDialogComponent, StipeAccountCreatedSuccessDialogComponent, StipeAccountCreatedFailedDialogComponent } from './components/seller/seller.component';
import { BuyerCartComponent } from './components/buyer/buyer-cart/buyer-cart.component';
import { MomentModule } from 'ngx-moment';
import { ErrorStateMatcher, ShowOnDirtyErrorStateMatcher } from '@angular/material/core';
import { StripeCallbackComponent } from './components/seller/stripe-callback/stripe-callback.component';

const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'buyer-register', component: BuyerRegisterComponent},
  {path: 'seller-register', component: SellerRegisterComponent},
  {path: 'login', component: LoginComponent},
  {path: 'seller-login', component: SellerLoginComponent},
  {path: 'buyer', component: BuyerComponent, canActivate: [BuyerAuthGuard], resolve: { buyer: BuyerResolve }},
  {path: 'buyer/buyer-account', component: BuyerAccountComponent, canActivate: [BuyerAuthGuard], resolve: { buyer: BuyerResolve }},
  {path: 'buyer/cart', component: BuyerCartComponent, canActivate: [BuyerAuthGuard], resolve: { buyer: BuyerResolve }},
  {path: 'buyer/checkout', component: BuyerCheckoutComponent, canActivate: [BuyerAuthGuard],
        resolve: { buyer: BuyerResolve }},
  {path: 'buyer/make-request', component: MakeRequestComponent, canActivate: [BuyerAuthGuard], resolve: { buyer: BuyerResolve}},
  {path: 'seller', component: SellerComponent, canActivate: [SellerAuthGuard], resolve: { seller: SellerResolve }},
  {path: 'seller/seller-account', component: SellerAccountComponent, canActivate: [SellerAuthGuard], resolve: { seller: SellerResolve }},
  {path: 'seller/submit-offer/:id', component: SubmitOfferComponent, canActivate: [SellerAuthGuard], resolve: { seller: SellerResolve }},
  {path: 'seller/seller-services', component: SellerServicesComponent, canActivate: [SellerAuthGuard], resolve: { seller: SellerResolve }},
  {path: 'seller/submit-categories', component: SubmitCategoriesComponent, canActivate: [SellerAuthGuard],
        resolve: { seller: SellerResolve }},
  {path: 'preactivation', component: PreactivationComponent },
  {path: 'postactivation/:token', component: PostactivationComponent },
  {path: 'request/:id', component: RequestComponent, resolve: { buyer: BuyerResolve, seller: SellerResolve }},
  {path: '**', redirectTo: '/'}
];

// NOTIFICATION SETTINGS
// TYPES
// default, error, info, success, warning
const customNotifierOptions: NotifierOptions = {
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

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    BuyerComponent,
    SellerComponent,
    HomeComponent,
    MakeRequestComponent,
    BuyerAccountComponent,
    SubmitOfferComponent,
    SellerAccountComponent,
    SellerRegisterComponent,
    SubmitCategoriesComponent,
    FooterComponent,
    SellerLoginComponent,
    SellerNavbarComponent,
    BuyerNavbarComponent,
    BuyerRegisterComponent,
    PreactivationComponent,
    PostactivationComponent,
    SellerServicesComponent,
    RequestComponent,
    BuyerCheckoutComponent,
    SubmitOfferDialogComponent,
    OfferSubmittedDialogComponent,
    OfferSubmittedFailedDialogComponent,
    StipeAccountCreatedSuccessDialogComponent,
    StipeAccountCreatedFailedDialogComponent,
    BuyerCartComponent,
    StripeCallbackComponent
  ],
  entryComponents: [
    SubmitOfferDialogComponent,
    OfferSubmittedDialogComponent,
    OfferSubmittedFailedDialogComponent,
    StipeAccountCreatedSuccessDialogComponent,
    StipeAccountCreatedFailedDialogComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    FlashMessagesModule.forRoot(),
    ReactiveFormsModule,
    MatStepperModule,
    MatFormFieldModule,
    MatInputModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatOptionModule,
    MatSelectModule,
    MatExpansionModule,
    MatBadgeModule,
    MatDialogModule,
    MatProgressSpinnerModule,
    MatDividerModule,
    MatListModule,
    // Site Notifications
    NotifierModule.withConfig (customNotifierOptions),
    HttpClientModule,
    NgxPaginationModule,
    Ng2SearchPipeModule,
    CKEditorModule,
    NgxStripeModule.forRoot('pk_test_9uQtOrFYROc49Js8RhyMDJtB'),
    MomentModule
  ],
  providers: [ValidateService, RegisterService, AuthService, StoreFetchService, SellerService, Title, BuyerResolve, SellerResolve, {provide: ErrorStateMatcher, useClass: ShowOnDirtyErrorStateMatcher}],
  bootstrap: [AppComponent]

})
export class AppModule { }
