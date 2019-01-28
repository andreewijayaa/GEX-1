// By Roni
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { runInThisContext } from 'vm';
import { isDevMode } from '@angular/core';
@Injectable()
export class RegisterService {
  buyer: any;
  seller: any;

  constructor(private http: HttpClient) { }

  // Buyer Register Service
  RegisterBuyer(buyer) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    if (isDevMode()) {
      console.log("YEAHHH DEV MODE IS WORKING");
      return this.http.post('http://localhost:3000/buyers/register', buyer, httpOptions)
      .pipe(map(res => res));
    } else {
      return this.http.post('buyers/register', buyer, httpOptions)
      .pipe(map(res => res));
    }
  }

  // Seller Register Service
  RegisterSeller(seller) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    if (isDevMode()) {
      return this.http.post('http://localhost:3000/sellers/register', seller, httpOptions)
      .pipe(map(res => res));
    } else {
     return this.http.post('sellers/register', seller, httpOptions)
      .pipe(map(res => res));
    }
  }

  // Buyer email activation through link, pass in the token with the function call
  activateAccount(token) {
    if (isDevMode()) {
      return this.http.post('http://localhost:3000/buyers/confirmEmail/' + token, token)
      .pipe(map(res => res));
    } else {
      return this.http.post('buyers/confirmEmail/' + token, token)
      .pipe(map(res => res));
    }
  }
  // Seller email activation through link, pass in the token with the function call
  selleractivateAccount(token) {
    if (isDevMode()) {
      return this.http.post('http://localhost:3000/sellers/confirmEmail/' + token, token)
      .pipe(map(res => res));
    } else {
      return this.http.post('sellers/confirmEmail/' + token, token)
      .pipe(map(res => res));
    }
  }
}
