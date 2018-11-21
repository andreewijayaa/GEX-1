import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpBackend } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SellerService {
  sellerToken: any;
  seller: any;

  constructor(private http: HttpClient) { }

  loadToken() {
    const token = localStorage.getItem('id_token');
    this.sellerToken = token;
  }

  // Get Seller Profile Service
  getSellerProfile() {
    this.loadToken();
    const httpOptions = {
      headers: new HttpHeaders ({
        'Content-Type':  'application/json',
        'x-access-token': this.sellerToken
      })
    };
    return this.http.get('http://localhost:3000/sellers/profile', httpOptions)
    .pipe(map(res => res));
  }

  // Get Seller Offers
  getSellerOffersHistory() {
    this.loadToken();
    const httpOptions = {
      headers: new HttpHeaders ({
        'Content-Type':  'application/json',
        'x-access-token': this.sellerToken
      })
    };
    return this.http.get('http://localhost:3000/sellers/viewoffers', httpOptions)
    .pipe(map(res => res));
  }

  // Post offers not yet implemented
  postOffer() {
    this.loadToken();
    const httpOptions = {
      headers: new HttpHeaders ({
        'Content-Type':  'application/json',
        'x-access-token': this.sellerToken
      })
    };
    return this.http.get('http://localhost:3000/sellers/view', httpOptions)
    .pipe(map(res => res));
  }
}
