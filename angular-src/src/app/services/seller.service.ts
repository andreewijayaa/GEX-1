import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SellerService {
  sellerToken: any;
  seller: any;

  constructor(private http: HttpClient) { }

  // Get Buyer Profile Service
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

  loadToken() {
    const token = localStorage.getItem('id_token');
    this.sellerToken = token;
  }
}
