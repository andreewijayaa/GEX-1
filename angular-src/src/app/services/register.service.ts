import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class RegisterService {
  RegisterToken: any;
  buyer: any;
  seller: any;

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

  // Get Buyer Profile Service
  getBuyerProfile(){
    this.loadToken();
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': this.RegisterToken,
        'Content-Type': 'application/json'
      })
    };
    return this.http.get('http://localhost:3000/buyers/buyer-account', httpOptions)
    .pipe(map(res => res));
  }

  // Store Buyer Data Locally Service
  storeBuyerData(token, buyer) {
    localStorage.setItem('id_token', token);
    localStorage.setItem('buyer', JSON.stringify(buyer)); // can only store stings not objects
    this.RegisterToken = token;
    this.buyer = buyer;
  }

  loadToken() {
    const token = localStorage.getItem('id_token');
    this.RegisterToken = token;
  }

  // User Logout Service
  userLogout() {
    this.RegisterToken = null;
    this.buyer = null;
    this.seller = null;
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
  }

}
