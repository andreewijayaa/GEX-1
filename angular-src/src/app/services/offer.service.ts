//By: Omar
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { isDevMode } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OfferService {
  userToken: any;
  offer: any;

  constructor(private http: HttpClient,
    private router: Router) { }

  // Load user logged in token
  loadToken() {
    const token = localStorage.getItem('id_token');
    this.userToken = token;
  }

  getOffer(id) {
    this.loadToken();
    const httpOptions = {
      headers: new HttpHeaders({
        'x-access-token': this.userToken
      })
    };
    if (isDevMode()) {
      return this.http.post('http://localhost:3000/requests/' + id, id, httpOptions)
      .pipe(map(res => res));
    } else {
      return this.http.post('requests/' + id, id, httpOptions)
      .pipe(map(res => res));
    }
  }
}
