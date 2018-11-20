import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';


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
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'x-access-token': this.buyerToken
      })
    };
    return this.http.get('http://localhost:3000/buyers/profile', httpOptions)
      .pipe(map(res => res));
  }

  loadToken() {
    const token = localStorage.getItem('id_token');
    this.buyerToken = token;
  }

  buyerLogout() {
    this.buyerToken = null;
    this.buyer = null;
  }

}
