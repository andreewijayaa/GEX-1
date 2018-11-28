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
import { FormsModule } from '@angular/forms';
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

const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'buyer-register', component: BuyerRegisterComponent},
  {path: 'seller-register', component: SellerRegisterComponent},
  {path: 'login', component: LoginComponent},
  {path: 'seller-login', component: SellerLoginComponent},
  {path: 'buyer', component: BuyerComponent, canActivate: [BuyerAuthGuard]},
  {path: 'buyer/buyer-account', component: BuyerAccountComponent, canActivate: [BuyerAuthGuard]},
  {path: 'buyer/make-request', component: MakeRequestComponent, canActivate: [BuyerAuthGuard]},
  {path: 'seller', component: SellerComponent, canActivate: [SellerAuthGuard]},
  {path: 'seller/seller-account', component: SellerAccountComponent, canActivate: [SellerAuthGuard]},
  {path: 'seller/submit-offer', component: SubmitOfferComponent, canActivate: [SellerAuthGuard]},
  {path: 'seller/seller-services', component: SellerServicesComponent, canActivate: [SellerAuthGuard]},
  {path: 'preactivation', component: PreactivationComponent },
  {path: 'postactivation/:token', component: PostactivationComponent },
  {path: 'request/:id', component: RequestComponent}
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
    FooterComponent,
    SellerLoginComponent,
    SellerNavbarComponent,
    BuyerNavbarComponent,
    BuyerRegisterComponent,
    PreactivationComponent,
    PostactivationComponent,
    SellerServicesComponent,
    RequestComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    FlashMessagesModule.forRoot(),
    HttpClientModule
  ],
  providers: [ValidateService, RegisterService, AuthService, StoreFetchService, SellerService, Title],
  bootstrap: [AppComponent]

})
export class AppModule { }
