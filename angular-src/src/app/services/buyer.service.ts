import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { Observable } from 'rxjs';
import { isDevMode } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BuyerService {
  buyerToken: any;
  buyer: any;
  request: any;
  update: any;

  constructor(private http: HttpClient,
    private router: Router) { }

  // Get Buyer Profile Service - Bryan Vu
  getBuyerProfile(): Observable<any> {
    this.loadToken();
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'x-access-token': this.buyerToken
      })
    };
    if (isDevMode()) {
      return this.http.get('http://localhost:3000/buyers/profile', httpOptions).pipe(map(res => res));
    } else {
      return this.http.get('buyers/profile', httpOptions).pipe(map(res => res));
    }
  }

  // Buyer Request submission service - Roni
  postBuyerRequest(request) {
    this.loadToken();
    if (this.buyerToken != null) {
      const httpOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          'x-access-token': this.buyerToken
        })
      };
      if (isDevMode()) {
        return this.http.post('http://localhost:3000/buyers/request', request, httpOptions)
        .pipe(map(res => res));
      } else {
        return this.http.post('buyers/request', request, httpOptions)
        .pipe(map(res => res));
      }
    } else {
      this.router.navigate(['/buyer']);
    }
  }

  // Retrieve all buyer requests
  getBuyerRequests() {
    this.loadToken();
    const httpOptions = {
      headers: new HttpHeaders ({
        'Content-Type':  'application/json',
        'x-access-token': this.buyerToken
      })
    };
    if (isDevMode()) {
      return this.http.get('http://localhost:3000/buyers/request', httpOptions)
      .pipe(map(res => res));
    } else {
      return this.http.get('buyers/request', httpOptions)
     .pipe(map(res => res));
    }
  }

  // Update current buyers profile
  updateBuyerProfile(buyer) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    if (isDevMode()) {
      return this.http.post('http://localhost:3000/buyers/update', buyer, httpOptions)
      .pipe(map(res => res));
    } else {
      return this.http.post('buyers/register', buyer, httpOptions)
      .pipe(map(res => res));
    }
  }

  // Load local token
  loadToken() {
    const token = localStorage.getItem('id_token');
    this.buyerToken = token;
  }

  // Buyer logout service
  buyerLogout() {
    this.buyerToken = null;
    this.buyer = null;
  }

}
