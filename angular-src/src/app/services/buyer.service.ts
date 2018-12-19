import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class BuyerService {
  buyerToken: any;
  buyer: any;
  request: any;

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
    return this.http.get('http://localhost:3000/buyers/profile', httpOptions).pipe(map(res => res));
  }

  postBuyerRequest(request) {
    this.loadToken();
    if (this.buyerToken != null) {
      const httpOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          'x-access-token': this.buyerToken
        })
      };
      // console.log(this.buyerToken);
      return this.http.post('http://localhost:3000/buyers/request', request, httpOptions)
        .pipe(map(res => res));
    } else {
      this.router.navigate(['/buyer']);
    }
  }

  getBuyerRequests() {
    this.loadToken();
    const httpOptions = {
      headers: new HttpHeaders ({
        'Content-Type':  'application/json',
        'x-access-token': this.buyerToken
      })
    };
    return this.http.get('http://localhost:3000/buyers/request', httpOptions)
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
