import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { runInThisContext } from 'vm';

@Injectable()
export class RegisterService {
  RegisterToken: any;
  buyer: any;
  seller: any;
  user: String;

  constructor(private http: HttpClient) { }
  // Buyer Register Service
  RegisterBuyer(buyer) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };
    return this.http.post('http://localhost:3000/buyers/register', buyer, httpOptions)
    .pipe(map(res => res));
  }

  // Buyer Authenticate Service
  AuthenticateBuyer(buyer) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };
    return this.http.post('http://localhost:3000/buyers/login', buyer, httpOptions)
    .pipe(map(res => res));
  }

  getBuyerProfile() {
      this.loadUserToken();
      const httpOptions = {
        headers: new HttpHeaders({
          'Content-Type':  'application/json',
          'x-access-token': this.RegisterToken
        })
      };
      return this.http.get('http://localhost:3000/buyers/profile', httpOptions)
      .pipe(map(res => res));
  }

  // Store Buyer Data Locally Service
  storeBuyerData(token, buyer) {
    localStorage.setItem('id_token', token);
    localStorage.setItem('buyer', JSON.stringify(buyer)); // can only store stings not objects
    this.RegisterToken = token;
    this.buyer = buyer;
    this.user = "Buyer";
  }

  // Fetches the Buyer token from local storage to use with getBuyerToken()
  loadUserToken() {
    const token = localStorage.getItem('id_token');
    this.RegisterToken = token;
  }

  // User Logout Service
  userLogout() {
    this.RegisterToken = null;
    this.buyer = null;
    this.seller = null;
    this.user = null;
    localStorage.clear();
  }

  // Seller Register Service
  RegisterSeller(seller) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };
    return this.http.post('http://localhost:3000/sellers/register', seller, httpOptions)
    .pipe(map(res => res));
  }

  // Seller Authenticate Service
  AuthenticateSeller(seller) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };
    return this.http.post('http://localhost:3000/sellers/login', seller, httpOptions)
    .pipe(map(res => res));
  }

  // Store Seller Data Locally Service
  storeSellerData(token, seller) {
    localStorage.setItem('id_token', token);
    localStorage.setItem('buyer', JSON.stringify(seller)); // can only store stings not objects
    this.RegisterToken = token;
    this.seller = seller;
    this.user = "Seller";
  }

}
