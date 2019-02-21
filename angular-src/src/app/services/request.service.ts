// By Roni
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { isDevMode } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class RequestService {
  userToken: any;
  request: any;

  constructor(private http: HttpClient,
    private router: Router) { }
    // Generate request when a request id is passed in with the url
    getRequest(id) {
      this.loadToken();
      // Include user token in the header
      const httpOptions = {
        headers: new HttpHeaders({
          'x-access-token': this.userToken
        })
      };
      // Call back-end route to retrieve request data
      if (process.env.NODE_ENV === 'development') {
        return this.http.post('http://localhost:3000/requests/' + id, id, httpOptions)
        .pipe(map(res => res));
      } else {
        return this.http.post('requests/' + id, id, httpOptions)
        .pipe(map(res => res));
      }
    }

    // Load user logged in token
    loadToken() {
      const token = localStorage.getItem('id_token');
      this.userToken = token;
    }
}
