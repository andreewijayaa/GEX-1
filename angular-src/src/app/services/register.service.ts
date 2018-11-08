import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { map } from 'rxjs/operators';

@Injectable()
export class RegisterService {
  RegisterToken: any;
  buyer: any;

  constructor(private http: Http) { }

  RegisterBuyer(buyer) {
    let headers = new Headers();

    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:3000/buyers/register', buyer, {headers: headers})
    .pipe(map(res => res.json()));
  }

}
