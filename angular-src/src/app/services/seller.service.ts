import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpBackend } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { isDevMode } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class SellerService {
  // Variables declaration
  sellerToken: any;
  seller: any;
  comingOffer: any;
  requestID: any;

  constructor(private http: HttpClient) { }

  // Function to get user token from browser for searching pusposes in database
  loadToken() {
    const token = localStorage.getItem('id_token');
    this.sellerToken = token;
  }

  // Service to fetch seller profile from database (front-end to back-end connection)
  getSellerProfile() {
    this.loadToken();
    // Tokens needed to fetch data from database
    const httpOptions = {
      headers: new HttpHeaders ({
        'Content-Type':  'application/json',
        'x-access-token': this.sellerToken
      })
    };
    // This will return json file fetched from database
    if (process.env.NODE_ENV != 'production') {
      return this.http.get('sellers/profile', httpOptions).pipe(map(res => res));
    } else {
      return this.http.get('sellers/profile', httpOptions).pipe(map(res => res));
    }
  }

  // Service to fetch offers history of the logged in user (front-end to back-end connection)
  getSellerOffersHistory() {
    this.loadToken();
    // Tokens needed to fetch data from database
    const httpOptions = {
      headers: new HttpHeaders ({
        'Content-Type':  'application/json',
        'x-access-token': this.sellerToken
      })
    };
    if (process.env.NODE_ENV != 'production') {
      return this.http.get('sellers/viewoffers', httpOptions).pipe(map(res => res));
    } else {
      // This will return json file fetched from database
      return this.http.get('sellers/viewoffers', httpOptions).pipe(map(res => res));
    }
  }

  // Service to post a new offer as a feedback to the request from buyer (front-end to back-end connection)
  postOffer(comingOffer, requestID) {
    this.loadToken();
    // Tokens needed to fetch data from database
    const httpOptions = {
      headers: new HttpHeaders ({
        'Content-Type':  'application/json',
        'x-access-token': this.sellerToken
      })
    };
    if (process.env.NODE_ENV != 'production') {
      return this.http.post('sellers/makeOffer/' + this.requestID, comingOffer, httpOptions)
      .pipe(map(res => res));
    } else {
    // This will return json file fetched from database
      return this.http.post('sellers/makeOffer/' + this.requestID, comingOffer, httpOptions)
      .pipe(map(res => res));
    }
  }

  // By: Omar
  // Update current sellers profile
  updateSellerProfile(seller) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    if (process.env.NODE_ENV != 'production') {
      return this.http.post('sellers/update', seller, httpOptions)
      .pipe(map(res => res));
    } else {
      return this.http.post('seller/update', seller, httpOptions)
      .pipe(map(res => res));
    }
  }

  // Service to post a new code for a seller to subscribe to a specific product code (front-end to back-end connection)
  setNewCode(code) {
    this.loadToken();
    // Tokens needed to fetch data from database
    const httpOptions = {
      headers: new HttpHeaders ({
        'Content-Type':  'application/json',
        'x-access-token': this.sellerToken
      })
    };
    if (process.env.NODE_ENV != 'production') {
      return this.http.post('sellers//addCode', code, httpOptions)
      .pipe(map(res => res));
    } else {
    // This will return json file fetched from database
      return this.http.post('sellers//addCode', code, httpOptions)
      .pipe(map(res => res));
    }
  }

  // Service to fetch the code that a seller subscribed to
  getCode() {
    this.loadToken();
    // Tokens needed to fetch data from database
    const httpOptions = {
      headers: new HttpHeaders ({
        'x-access-token': this.sellerToken
      })
    };
    if (process.env.NODE_ENV != 'production') {
      return this.http.get('sellers/getCode', httpOptions)
      .pipe(map(res => res));
    } else {
    // This will return json file fetched from database
    return this.http.get('sellers/getCode', httpOptions)
      .pipe(map(res => res));
    }
  }

  // Service to get active requests from buyers associated with seller's code
  getActiveRequests() {
    this.loadToken();
    // Tokens needed to fetch data from database
    const httpOptions = {
      headers: new HttpHeaders ({
        'Content-Type':  'application/json',
        'x-access-token': this.sellerToken
      })
    };
    if (process.env.NODE_ENV != 'production') {
      return this.http.get('sellers/viewactiverequests', httpOptions).pipe(map(res => res));
    } else {
    // This will return json file fetched from database
    return this.http.get('sellers/viewactiverequests', httpOptions).pipe(map(res => res));
    }
  }

  // Service to post a new description for seller
  setDescription(description) {
    this.loadToken();
    // Tokens needed to fetch data from database
    const httpOptions = {
      headers: new HttpHeaders ({
        'Content-Type':  'application/json',
        'x-access-token': this.sellerToken
      })
    };
    if (process.env.NODE_ENV != 'production') {
      return this.http.post('sellers/addDescription', description, httpOptions)
      .pipe(map(res => res));
    } else {
    // This will return json file fetched from database
      return this.http.post('sellers/addDescription', description, httpOptions)
      .pipe(map(res => res));
    }
  }

  setBillingAddress(billingAddress) {
    this.loadToken();
    // Tokens needed to fetch data from database
    const httpOptions = {
      headers: new HttpHeaders ({
        'Content-Type':  'application/json',
        'x-access-token': this.sellerToken
      })
    };
    if (process.env.NODE_ENV != 'production') {
      return this.http.post('sellers/addBillingAddress', billingAddress, httpOptions)
      .pipe(map(res => res));
    } else {
    // This will return json file fetched from database
      return this.http.post('sellers/addBillingAddress', billingAddress)
      .pipe(map(res => res));
    }
  }

  // logging out seller
  sellerLogout() {
    this.sellerToken = null;
    this.seller = null;
  }
}
