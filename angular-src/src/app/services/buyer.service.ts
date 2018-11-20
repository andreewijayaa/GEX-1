import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BuyerService {
  buyerToken:any;
  buyer:any;

  constructor(private http:HttpClient) { }

  // Get Buyer Profile Service
  getBuyerProfile(){
    this.loadToken();
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': this.buyerToken,
        'Content-Type': 'application/json'
      })
    };
    return this.http.get('http://localhost:3000/buyers/profile', httpOptions)
    .pipe(map(res => res));
  }

  loadToken() {
    const token = localStorage.getItem('id_token');
    this.buyerToken = token;
  }

}
