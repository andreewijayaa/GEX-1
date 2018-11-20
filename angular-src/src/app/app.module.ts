import { BrowserModule } from '@angular/platform-browser';
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
import { RegisterComponent } from './components/register/register.component';
import { PreactivationComponent } from './components/activation/preactivation/preactivation.component';
import { PostactivationComponent } from './components/activation/postactivation/postactivation.component';
import { SellerService } from './services/seller.service';

const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'BuyerRegister', component: BuyerRegisterComponent},
  {path: 'SellerRegister', component: SellerRegisterComponent},
  {path: 'login', component: LoginComponent},
  {path: 'sellerLogin', component: SellerLoginComponent},
  {path: 'buyer', component: BuyerComponent},
  {path: 'buyer/buyer-account', component: BuyerAccountComponent},
  {path: 'buyer/make-request', component: MakeRequestComponent},
  {path: 'seller', component: SellerComponent},
  {path: 'seller/seller-account', component: SellerAccountComponent},
  {path: 'seller/submit-offer', component: SubmitOfferComponent},
  {path: 'preactivation', component: PreactivationComponent },
  {path: 'postactivation/:token', component: PostactivationComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    RegisterComponent,
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
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    FlashMessagesModule.forRoot(),
    HttpClientModule
  ],
  providers: [ValidateService, RegisterService, AuthService, StoreFetchService, SellerService],
  bootstrap: [AppComponent]

})
export class AppModule { }
