import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

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
import { FlashMessagesModule } from 'angular2-flash-messages';
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
import { NgxStripeModule, STRIPE_PUBLISHABLE_KEY } from 'ngx-stripe';

const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'buyer-register', component: BuyerRegisterComponent},
  {path: 'seller-register', component: SellerRegisterComponent},
  {path: 'login', component: LoginComponent},
  {path: 'seller-login', component: SellerLoginComponent},
  {path: 'buyer', component: BuyerComponent, canActivate: [BuyerAuthGuard], resolve: { buyer: BuyerResolve }},
  {path: 'buyer/buyer-account', component: BuyerAccountComponent, canActivate: [BuyerAuthGuard], resolve: { buyer: BuyerResolve }},
  {path: 'buyer/checkout/:offerId/:requestId', component: BuyerCheckoutComponent, canActivate: [BuyerAuthGuard], resolve: { buyer: BuyerResolve }},
  {path: 'buyer/make-request', component: MakeRequestComponent, canActivate: [BuyerAuthGuard], resolve: { buyer: BuyerResolve}},
  {path: 'seller', component: SellerComponent, canActivate: [SellerAuthGuard], resolve: { seller: SellerResolve }},
  {path: 'seller/seller-account', component: SellerAccountComponent, canActivate: [SellerAuthGuard], resolve: { seller: SellerResolve }},
  {path: 'seller/submit-offer/:id', component: SubmitOfferComponent, canActivate: [SellerAuthGuard], resolve: { seller: SellerResolve }},
  {path: 'seller/seller-services', component: SellerServicesComponent, canActivate: [SellerAuthGuard], resolve: { seller: SellerResolve }},
  {path: 'seller/submit-categories', component: SubmitCategoriesComponent, canActivate: [SellerAuthGuard],
        resolve: { seller: SellerResolve }},
  {path: 'preactivation', component: PreactivationComponent },
  {path: 'postactivation/:token', component: PostactivationComponent },
  {path: 'request/:id', component: RequestComponent, resolve: { buyer: BuyerResolve, seller: SellerResolve }}
];

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
    BuyerCheckoutComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    ReactiveFormsModule,
    FlashMessagesModule.forRoot(),
    HttpClientModule,
    NgxPaginationModule,
    Ng2SearchPipeModule,
    NgxStripeModule.forRoot('pk_test_9uQtOrFYROc49Js8RhyMDJtB')
  ],
  providers: [ValidateService, RegisterService, AuthService, StoreFetchService, SellerService, Title, BuyerResolve, SellerResolve],
  bootstrap: [AppComponent]

})
export class AppModule { }
