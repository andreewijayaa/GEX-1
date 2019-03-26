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
  taxInfo: any;

  constructor(private http: HttpClient,
    private router: Router) { }

  // Get Buyer Profile Service - Bryan Vu
  getBuyerProfile() {
    this.loadToken();
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'x-access-token': this.buyerToken
      })
    };
    // console.log('Process.ev: " + process.env.NODE_ENV);
    if (process.env.NODE_ENV === 'development') {
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
      if (process.env.NODE_ENV === 'development') {
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


  // service to delete request
  deleteBuyerRequest(request) {
    // console.log("Delete Request Called");
    this.loadToken();
    if (this.buyerToken != null) {
      const httpOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          'x-access-token': this.buyerToken
        })
      };
      if (process.env.NODE_ENV === 'development') {
        return this.http.post('http://localhost:3000/buyers/deleterequest', request, httpOptions)
          .pipe(map(res => res));
      } else {
        return this.http.post('buyers/deleterequest', request, httpOptions)
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
    if (process.env.NODE_ENV === 'development') {
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
    if (process.env.NODE_ENV === 'development') {
      return this.http.post('http://localhost:3000/buyers/update', buyer, httpOptions)
        .pipe(map(res => res));
    } else {
      return this.http.post('buyers/update', buyer, httpOptions)
        .pipe(map(res => res));
    }
  }

  addOfferToBuyerCart(offerCartItem) {
    this.loadToken();
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'x-access-token': this.buyerToken
      })
    };
    if (process.env.NODE_ENV === 'development') {
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
    this.loadToken();
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'x-access-token': this.buyerToken
      })
    };
    if (process.env.NODE_ENV === 'development') {
      return this.http.get('http://localhost:3000/buyers/retrieveCart', httpOptions)
        .pipe(map(res => res));
    } else {
      return this.http.get('buyers/retrieveCart', httpOptions)
        .pipe(map(res => res));
    }
  }

  getTax(taxInfo) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    if (process.env.NODE_ENV === 'development') {
      return this.http.post('http://localhost:3000/buyers/tax', taxInfo, httpOptions)
        .pipe(map(res => res));
    } else {
      return this.http.post('buyers/tax', taxInfo, httpOptions)
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
    if (process.env.NODE_ENV === 'development') {
      return this.http.post('http://localhost:3000/buyers/charge', offer, httpOptions)
        .pipe(map(res => res));
    } else {
      return this.http.post('buyers/charge', offer, httpOptions)
        .pipe(map(res => res));
    }
  }

  // Generate Order Number service
  getOrderNumber() {
    this.loadToken();
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'x-access-token': this.buyerToken
      })
    };
    if (process.env.NODE_ENV === 'development') {
      return this.http.get('http://localhost:3000/buyers/generateOrderNumber', httpOptions)
        .pipe(map(res => res));
    } else {
      return this.http.get('buyers/generateOrderNumber', httpOptions)
        .pipe(map(res => res));
    }
  }

  // allow user to upload profile picture
  // By John
  setProfilePicture(profilePic: File): Observable<Object> {
    // console.log("profile picutre action taken");
    this.loadToken();
    const httpOptions = {
      headers: new HttpHeaders ({
        'x-access-token': this.buyerToken
      })
    };
    const formData = new FormData();

    formData.append('image', profilePic);
    if (process.env.NODE_ENV === 'development') {
      return this.http.post('http://localhost:3000/buyers/profilepicture', formData, httpOptions)
      .pipe(map(res => res));
    } else {
    // This will return json file fetched from database
      return this.http.post('buyers/profilepicture', formData, httpOptions)
      .pipe(map(res => res));
    }
  }

  // upload images to request
  addRequestImage(requestPic: File): Observable<Object> {
    console.log("Request Picture has been called in services");
    this.loadToken();
    const httpOptions = {
      headers: new HttpHeaders ({
        'x-access-token': this.buyerToken
      })
    };
    const formData = new FormData();
    formData.append('image', requestPic);
    if (process.env.NODE_ENV === 'development') {
      return this.http.post('http://localhost:3000/buyers/requestpicture', formData, httpOptions)
      .pipe(map(res => res));
    } else {
    // This will return json file fetched from database
      return this.http.post('buyers/requestpicture', formData, httpOptions)
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
    if (process.env.NODE_ENV === 'development') {
      return this.http.post('http://localhost:3000/buyers/removeFromCart', offerID, httpOptions)
        .pipe(map(res => res));
    } else {
      return this.http.post('buyers/removeFromCart', offerID, httpOptions)
        .pipe(map(res => res));
    }
  }

  offerAccepted(offerID) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'x-access-token': this.buyerToken
      })
    };
    if (isDevMode()) {
      return this.http.post('http://localhost:3000/buyers/offerAccepted', offerID, httpOptions)
        .pipe(map(res => res));
    } else {
      return this.http.post('buyers/offerAccepted', offerID, httpOptions)
        .pipe(map(res => res));
    }
  }

  offerRejected(offerID) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'x-access-token': this.buyerToken
      })
    };
    if (isDevMode()) {
      return this.http.post('http://localhost:3000/buyers/offerRejected', offerID, httpOptions)
        .pipe(map(res => res));
    } else {
      return this.http.post('buyers/offerRejected', offerID, httpOptions)
        .pipe(map(res => res));
    }
  }

  // Resend Confirmation Email
  resendBuyerConfirmation(email) {
    const httpOptions = {
      headers: new HttpHeaders ({
        'Content-Type': 'application/json'
      })
    };
    const body = {
      'email': email
    };

    if (process.env.NODE_ENV === 'development') {
      return this.http.post('http://localhost:3000/buyers/resend', body, httpOptions)
      .pipe(map(res => res));
    } else {
    // This will return json file fetched from database
      return this.http.post('buyers/resend', body, httpOptions)
      .pipe(map(res => res));
    }
  }

  // Update Password function
  updatePassword(oldPass, newPass, newPassConfirm) {
    this.loadToken();
    // Tokens needed to fetch data from database
    const httpOptions = {
      headers: new HttpHeaders ({
        'Content-Type':  'application/json',
        'x-access-token': this.buyerToken
      })
    };
    const body = {
      'oldPassword': oldPass,
      'newPassword': newPass,
      'newPasswordConfirm': newPassConfirm
    };
    if (process.env.NODE_ENV === 'development') {
      return this.http.post('http://localhost:3000/buyers/updatePassword', body, httpOptions)
      .pipe(map(res => res));
    } else {
    // This will return json file fetched from database
      return this.http.post('buyers/updatePassword', body, httpOptions)
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
