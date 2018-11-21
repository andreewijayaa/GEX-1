import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { runInThisContext } from 'vm';

@Injectable()
export class StoreFetchService {
  RegisterToken: any;
  buyer: any;
  seller: any;
  user = -1;

  constructor(private http: HttpClient) { }

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
  }

  // Store Seller Data Locally Service
  storeSellerData(token, seller) {
    localStorage.setItem('id_token', token);
    localStorage.setItem('seller', JSON.stringify(seller)); // can only store stings not objects
    this.RegisterToken = token;
    this.seller = seller;
  }
}
