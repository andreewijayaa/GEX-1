import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/BuyerRegister/BuyerRegister.component';
import { BuyerComponent } from './components/buyer/buyer.component';
import { SellerComponent } from './components/seller/seller.component';
import { HomeComponent } from './components/home/home.component';
import { MakeRequestComponent } from './components/buyer/make-request/make-request.component';
import { BuyerAccountComponent } from './components/buyer/buyer-account/buyer-account.component';
import { SellerAccountComponent } from './components/seller/seller-account/seller-account.component';
import { SellerRegisterComponent } from './components/SellerRegister/SellerRegister.component';
import { FooterComponent } from './components/footer/footer.component';
import { FormsModule } from '@angular/forms';
import { FlashMessagesModule } from 'angular2-flash-messages';
import { ValidateService } from './services/validate.service';
import { RegisterService } from './services/register.service';
import { HttpClientModule } from '@angular/common/http';

const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'BuyerRegister', component: RegisterComponent},
  {path: 'SellerRegister', component: SellerRegisterComponent},
  {path: 'login', component: LoginComponent},
  {path: 'buyer', component: BuyerComponent},
  {path: 'buyer/buyer-account', component: BuyerAccountComponent},
  {path: 'buyer/make-request', component: MakeRequestComponent},
  {path: 'seller', component: SellerComponent}
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
    SellerAccountComponent,
    SellerRegisterComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    FlashMessagesModule.forRoot(),
    HttpClientModule
  ],
  providers: [ValidateService, RegisterService],
  bootstrap: [AppComponent]

})
export class AppModule { }
