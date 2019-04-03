import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { runInThisContext } from 'vm';
import { JwtHelperService } from '@auth0/angular-jwt';
import { SellerService } from '../services/seller.service';
import { BuyerService } from '../services/buyer.service';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { NotifierService } from 'angular-notifier';
import { Observable, interval, Subscription } from 'rxjs';

@Injectable()
export class StoreFetchService {
  RegisterToken: any;
  buyer: any;
  seller: any;
  user = -1;
  private readonly notifier: NotifierService;
  source = interval(1440000); // 24 hours
  subscription: Subscription;

  constructor(private http: HttpClient,
    private sellerService: SellerService,
    private buyerService: BuyerService,
    notifierService: NotifierService,
    private router: Router) { this.notifier = notifierService; }

  jwtHelper: JwtHelperService = new JwtHelperService();

  // Checks to see if token is expired or not.
  useJwtHelper() {
    const token = localStorage.getItem('id_token');
    const expired = this.jwtHelper.isTokenExpired(token);

    // console.log(
    //   this.jwtHelper.decodeToken(token),
    //   this.jwtHelper.getTokenExpirationDate(token),
    //   expired = this.jwtHelper.isTokenExpired(token)
    // );

    if (expired) {
      if (localStorage.getItem('buyer') && this.subscription) {
        this.buyerService.buyerLogout();
        this.userLogout();
        this.subscription.unsubscribe();
        this.router.navigate(['/login']);
        this.notifier.notify('error', 'Session expired. Please log in again.');
      } else if (localStorage.getItem('seller') && this.subscription) {
        this.sellerService.sellerLogout();
        this.userLogout();
        this.subscription.unsubscribe();
        this.router.navigate(['/seller-login']);
        this.notifier.notify('error', 'Session expired. Please log in again.');
      } else if (localStorage.getItem('buyer')) {
        this.buyerService.buyerLogout();
        this.userLogout();
        this.router.navigate(['/login']);
        this.notifier.notify('error', 'Session expired. Please log in again.');
      } else if (localStorage.getItem('seller')) {
        this.sellerService.sellerLogout();
        this.userLogout();
        this.router.navigate(['/seller-login']);
        this.notifier.notify('error', 'Session expired. Please log in again.');
      }
    }
  }

  // User Logout Service
  userLogout() {
    this.RegisterToken = null;
    this.buyer = null;
    this.seller = null;
    this.user = null;
    localStorage.clear();
  }

  // Fetches the Buyer token from local storage to use with getBuyerToken()
  loadUserToken() {
    const token = localStorage.getItem('id_token');
    this.RegisterToken = token;
  }
  // Store Buyer Data Locally Service
  storeBuyerData(token, buyer) {
    localStorage.setItem('id_token', token);
    localStorage.setItem('buyer', JSON.stringify(buyer)); // can only store stings not objects
    this.RegisterToken = token;
    this.buyer = buyer;
    this.subscription = this.source.subscribe(x => {
      this.useJwtHelper();
    });
  }

  // Store Seller Data Locally Service
  storeSellerData(token, seller) {
    localStorage.setItem('id_token', token);
    localStorage.setItem('seller', JSON.stringify(seller)); // can only store stings not objects
    this.RegisterToken = token;
    this.seller = seller;
    this.subscription = this.source.subscribe(x => {
      this.useJwtHelper();
    });
  }

  // Check if buyer is logged in
  buyerIsLoggedIn() {
    if (localStorage.getItem('buyer')) {
      this.useJwtHelper();
      return true;
    } else {
      return false;
    }
  }

  // Check if seller is logged in
  sellerIsLoggedIn() {
    if (localStorage.getItem('seller')) {
      this.useJwtHelper();
      return true;
    } else {
      return false;
    }
  }
}
