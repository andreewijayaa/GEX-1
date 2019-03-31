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
import { FormsModule, ReactiveFormsModule, NgForm } from '@angular/forms';
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
import { resolve } from 'path';
import { SubmitCategoriesComponent } from './components/seller/submit-categories/submit-categories.component';
import { BuyerCheckoutComponent } from './components/buyer/buyer-checkout/buyer-checkout.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { Ng2SearchPipeModule} from 'ng2-search-filter';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { FlashMessagesModule } from 'angular2-flash-messages';
import { MatStepperModule } from '@angular/material/stepper';
import { MatFormFieldModule, MatInputModule, MatButtonModule, MatOptionModule,
  MatSelectModule, MatExpansionModule, MatBadgeModule, MatDialogModule,
  MatProgressSpinnerModule, MatDividerModule, MatListModule, MatTableModule,
  MatTab, MatRadioModule, MatCheckboxModule, MatPaginatorModule, MatSortModule } from '@angular/material';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SubmitOfferDialogComponent, StripeNeededDialogComponent, OfferSubmittedDialogComponent,
   OfferSubmittedFailedDialogComponent, StipeAccountCreatedSuccessDialogComponent,
    StipeAccountCreatedFailedDialogComponent } from './components/seller/seller.component';

import { BuyerCartComponent } from './components/buyer/buyer-cart/buyer-cart.component';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { MomentModule } from 'ngx-moment';
import { ErrorStateMatcher, ShowOnDirtyErrorStateMatcher } from '@angular/material/core';
import { ResendComponent } from './components/activation/resend/resend.component';
import { ForgetPasswordComponent } from './components/activation/forget-password/forget-password.component';
import { SellpageComponent } from './components/home/sellpage/sellpage.component';
import { BuypageComponent } from './components/home/buypage/buypage.component';
import { HowitworkspageComponent } from './components/home/howitworkspage/howitworkspage.component';
import { BuyerUpdatePasswordComponent } from './components/buyer/buyer-update-password/buyer-update-password.component';
import { SellerUpdatePasswordComponent } from './components/seller/seller-update-password/seller-update-password.component';
import { OrderConfirmComponent } from './components/buyer/order-confirm/order-confirm.component';
import { BuyerPurchasesComponent } from './components/buyer/buyer-purchases/buyer-purchases.component';
import { SellerOrdersComponent } from './components/seller/seller-orders/seller-orders.component';

const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'sell', component: SellpageComponent},
  {path: 'buy', component: BuypageComponent},
  {path: 'how', component: HowitworkspageComponent},
  {path: 'buyer-register', component: BuyerRegisterComponent},
  {path: 'seller-register', component: SellerRegisterComponent},
  {path: 'login', component: LoginComponent},
  {path: 'seller-login', component: SellerLoginComponent},
  {path: 'buyer', component: BuyerComponent, canActivate: [BuyerAuthGuard]},
  {path: 'buyer/buyer-account', component: BuyerAccountComponent, canActivate: [BuyerAuthGuard]},
  {path: 'buyer/cart', component: BuyerCartComponent, canActivate: [BuyerAuthGuard]},
  {path: 'buyer/updatePass', component: BuyerUpdatePasswordComponent, canActivate: [BuyerAuthGuard]},
  {path: 'buyer/checkout', component: BuyerCheckoutComponent, canActivate: [BuyerAuthGuard]},
  {path: 'buyer/make-request', component: MakeRequestComponent, canActivate: [BuyerAuthGuard]},
  {path: 'buyer/orderConfirm/:order', component: OrderConfirmComponent, canActivate: [BuyerAuthGuard]},
  {path: 'buyer/purchases', component: BuyerPurchasesComponent, canActivate: [BuyerAuthGuard]},
  {path: 'seller', component: SellerComponent, canActivate: [SellerAuthGuard]},
  {path: 'seller/seller-account', component: SellerAccountComponent, canActivate: [SellerAuthGuard]},
  {path: 'seller/submit-offer/:id', component: SubmitOfferComponent, canActivate: [SellerAuthGuard]},
  {path: 'seller/seller-services', component: SellerServicesComponent, canActivate: [SellerAuthGuard]},
  {path: 'seller/updatePass', component: SellerUpdatePasswordComponent, canActivate: [SellerAuthGuard]},
  {path: 'seller/submit-categories', component: SubmitCategoriesComponent, canActivate: [SellerAuthGuard]},
  {path: 'seller/orders', component: SellerOrdersComponent, canActivate: [SellerAuthGuard]},
  {path: 'preactivation', component: PreactivationComponent },
  {path: 'postactivation/:token', component: PostactivationComponent },
  {path: 'resend', component: ResendComponent},
  {path: 'reset', component: ForgetPasswordComponent},
  {path: '**', redirectTo: '/'}
];

// NOTIFICATION SETTINGS
// TYPES
// default, error, info, success, warning
const customNotifierOptions: NotifierOptions = {
  position: {
    horizontal: {
      position: 'middle',
      distance: 12
    },
    vertical: {
      position: 'top',
      distance: 12,
      gap: 10
    }
  },
  theme: 'material',
  behaviour: {
    autoHide: 4000,
    onClick: false,
    onMouseover: 'pauseAutoHide',
    showDismissButton: true,
    stacking: 1
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
      speed: 150,
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
    ResendComponent,
    ForgetPasswordComponent,
    StripeNeededDialogComponent,
    SellpageComponent,
    BuypageComponent,
    HowitworkspageComponent,
    BuyerUpdatePasswordComponent,
    SellerUpdatePasswordComponent,
    OrderConfirmComponent,
    BuyerPurchasesComponent,
    SellerOrdersComponent
  ],
  entryComponents: [
    SubmitOfferDialogComponent,
    StripeNeededDialogComponent,
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
    MatTableModule,
    MatRadioModule,
    MatCheckboxModule,
    MatPaginatorModule,
    MatSortModule,
    // Site Notifications
    NotifierModule.withConfig (customNotifierOptions),
    HttpClientModule,
    NgxPaginationModule,
    Ng2SearchPipeModule,
    CKEditorModule,
    MomentModule
  ],
  providers: [ValidateService, RegisterService, AuthService,
    StoreFetchService, SellerService, Title, {provide: ErrorStateMatcher, useClass: ShowOnDirtyErrorStateMatcher}],
  bootstrap: [AppComponent]

})
export class AppModule { }
