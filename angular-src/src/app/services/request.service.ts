import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RequestService {
  userToken: any;
  request: any;

  constructor(private http: HttpClient,
    private router: Router) { }

    getRequest(id) {
      this.loadToken();
      const httpOptions = {
        headers: new HttpHeaders({
          'x-access-token': this.userToken
        })
      };
      return this.http.post('http://localhost:3000/requests/' + id, id, httpOptions)
      .pipe(map(res => res));
    }

    loadToken() {
      const token = localStorage.getItem('id_token');
      this.userToken = token;
    }
}
