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
  requestID: any;
  update: any;
  offer: any;
  offerCartItem: any;
  offerID: any;

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
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
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

  // By: Omar
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
      return this.http.post('buyers/update', buyer, httpOptions)
        .pipe(map(res => res));
    }
  }

  addOfferToBuyerCart(offerCartItem) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'x-access-token': this.buyerToken
      })
    };
    if (isDevMode()) {
      return this.http.post('http://localhost:3000/buyers/addToCart', offerCartItem, httpOptions)
        .pipe(map(res => res));
    } else {
      return this.http.post('buyers/addToCart', offerCartItem, httpOptions)
        .pipe(map(res => res));
    }
  }
  // By Roni
  // Retreive buyer shopping cart
  retrieveBuyerCart() {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'x-access-token': this.buyerToken
      })
    };
    if (isDevMode()) {
      return this.http.get('http://localhost:3000/buyers/retrieveCart', httpOptions)
        .pipe(map(res => res));
    } else {
      return this.http.get('buyers/retrieveCart', httpOptions)
        .pipe(map(res => res));
    }
  }

  // By: Omar
  // Sends the checkout information to server checkout route in app.js
  checkout(offer) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    console.log(offer);
    if (isDevMode()) {
      return this.http.post('http://localhost:3000/checkout', offer, httpOptions)
        .pipe(map(res => res));
    } else {
      return this.http.post('checkout', offer, httpOptions)
        .pipe(map(res => res));
    }
  }

  //allow user to upload profile picture
  //By John
  setProfilePicture(profilePic: File): Observable<Object>{
    //console.log("profile picutre action taken");
    this.loadToken();
    const httpOptions = {
      headers: new HttpHeaders ({
        'x-access-token': this.buyerToken
      })
    };
    const formData = new FormData();

    formData.append('image', profilePic)
    if (isDevMode()) {
      return this.http.post('http://localhost:3000/buyers/profilepicture', formData, httpOptions)
      .pipe(map(res => res));
    } else {
    // This will return json file fetched from database
      return this.http.post('buyers/profilepicture', profilePic)
      .pipe(map(res => res));
    }
  }

  //upload images to request
  addRequestImage(requestPic: File): Observable<Object>{
    //console.log("profile picutre action taken");
    this.loadToken();
    const httpOptions = {
      headers: new HttpHeaders ({
        'x-access-token': this.buyerToken
      })
    };
    const formData = new FormData();

    formData.append('image', requestPic)
    if (isDevMode()) {
      return this.http.post('http://localhost:3000/buyers/requestpicture', formData, httpOptions)
      .pipe(map(res => res));
    } else {
    // This will return json file fetched from database
      return this.http.post('buyers/requestpicture', requestPic)
      .pipe(map(res => res));
    }
  }

  removeOfferFromCart(offerID) {

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'x-access-token': this.buyerToken
      })
    };
    console.log(offerID);
    if (isDevMode()) {
      return this.http.post('http://localhost:3000/buyers/removeFromCart', offerID, httpOptions)
        .pipe(map(res => res));
    } else {
      return this.http.post('buyers/removeFromCart', offerID, httpOptions)
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
