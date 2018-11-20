import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class BuyerService {
  buyerToken: any;
  buyer: any;

  constructor(private http: HttpClient,
    private router: Router) { }

  // Get Buyer Profile Service
  getBuyerProfile() {
    this.loadToken();
    if (this.buyerToken != null) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': this.buyerToken
      })
    };
    return this.http.get('http://localhost:3000/buyers/profile', httpOptions)
    .pipe(map(res => res));
  }
  }

  loadToken() {
    if (this.buyerToken == null) {
      return this.router.navigate(['/seller-login']);
    } else {
    const token = localStorage.getItem('id_token');
    this.buyerToken = token;
    console.log('my token: ' + this.buyerToken);
    }
  }

}
