// By Roni
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { runInThisContext } from 'vm';

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
    return this.http.post('https://powerful-taiga-46416.herokuapp.com/buyers/register', buyer, httpOptions)
      .pipe(map(res => res));
  }

  // Seller Register Service
  RegisterSeller(seller) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    return this.http.post('https://powerful-taiga-46416.herokuapp.com/sellers/register', seller, httpOptions)
      .pipe(map(res => res));
  }

  // Buyer email activation through link, pass in the token with the function call
  activateAccount(token) {
    return this.http.post('https://powerful-taiga-46416.herokuapp.com/buyers/confirmEmail/' + token, token)
      .pipe(map(res => res));
  }
  // Seller email activation through link, pass in the token with the function call
  selleractivateAccount(token) {
    return this.http.post('https://powerful-taiga-46416.herokuapp.com/sellers/confirmEmail/' + token, token)
      .pipe(map(res => res));
  }
}
