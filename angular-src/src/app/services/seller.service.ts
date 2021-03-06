import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpBackend } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { isDevMode } from '@angular/core';
import { Observable } from 'rxjs';
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
    if (process.env.NODE_ENV === 'development') {
      return this.http.get('http://localhost:3000/sellers/profile', httpOptions).pipe(map(res => res));
    } else {
      return this.http.get('sellers/profile', httpOptions).pipe(map(res => res));
    }
  }

  getSellerById(sellerId) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    if (process.env.NODE_ENV === 'development') {
      return this.http.get('http://localhost:3000/sellers/sellerById/' + sellerId, httpOptions)
      .pipe(map(res => res));
    } else {
      return this.http.get('seller/sellerById/' + sellerId, httpOptions)
      .pipe(map(res => res));
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
    if (process.env.NODE_ENV === 'development') {
      return this.http.get('http://localhost:3000/sellers/viewoffers', httpOptions).pipe(map(res => res));
    } else {
      // This will return json file fetched from database
      return this.http.get('sellers/viewoffers', httpOptions).pipe(map(res => res));
    }
  }


  // Service to post a new offer as a feedback to the request from buyer (front-end to back-end connection)
  postOffer(comingOffer) {
    this.loadToken();
    // Tokens needed to fetch data from database
    const httpOptions = {
      headers: new HttpHeaders ({
        'Content-Type':  'application/json',
        'x-access-token': this.sellerToken
      })
    };
    if (process.env.NODE_ENV === 'development') {
      return this.http.post('http://localhost:3000/sellers/makeOffer', comingOffer, httpOptions)
      .pipe(map(res => res));
    } else {
    // This will return json file fetched from database
      return this.http.post('sellers/makeOffer', comingOffer, httpOptions)
      .pipe(map(res => res));
    }
  }

  //service to delete request
  deleteoffer(offer_delete) {
    //console.log("Delete Request Called");
    this.loadToken();
    if (this.sellerToken != null) {
      const httpOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          'x-access-token': this.sellerToken
        })
      };
      if (process.env.NODE_ENV === 'development') {
        return this.http.post('http://localhost:3000/sellers/deleteoffer', offer_delete, httpOptions)
          .pipe(map(res => res));
      } else {
        return this.http.post('sellers/deleteoffer', offer_delete, httpOptions)
          .pipe(map(res => res));
      }
    }
  }


  // Stripe Service call to connect Seller account with stripe account
  connectStripe(code, state): Observable<any>  {
    this.loadToken();
    // Tokens needed to fetch data from database
    const httpOptions = {
      headers: new HttpHeaders ({
        'Content-Type':  'application/json',
        'x-access-token': this.sellerToken
      })
    };
    const body = {
        'code': code,
        'state': state
    }
    if (process.env.NODE_ENV === 'development') {
      return this.http.post('http://localhost:3000/sellers/authenticateStripe', body, httpOptions)
      .pipe(map(res => res));
    } else {
    // This will return json file fetched from database
      return this.http.post('sellers/authenticateStripe',body, httpOptions)
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
    if (process.env.NODE_ENV === 'development') {
      return this.http.post('http://localhost:3000/sellers/update', seller, httpOptions)
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
    if (process.env.NODE_ENV === 'development') {
      return this.http.post('http://localhost:3000/sellers//addCode', code, httpOptions)
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
    if (process.env.NODE_ENV === 'development') {
      return this.http.get('http://localhost:3000/sellers/getCode', httpOptions)
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
    if (process.env.NODE_ENV === 'development') {
      return this.http.get('http://localhost:3000/sellers/viewactiverequests', httpOptions).pipe(map(res => res));
    } else {
    // This will return json file fetched from database
    return this.http.get('sellers/viewactiverequests', httpOptions).pipe(map(res => res));
    }
  }
  // // Service to fetch offers history of the logged in user (front-end to back-end connection)
  // accountSetupStep(step) {
  //   this.loadToken();
  //   // Tokens needed to fetch data from database
  //   const httpOptions = {
  //     headers: new HttpHeaders ({
  //       'Content-Type':  'application/json'
  //     })
  //   };
  //   const body = {
  //     'step': step
  //   };
  //   if (process.env.NODE_ENV === 'development') {
  //     return this.http.post('http://localhost:3000/sellers/accountSetup', body, httpOptions).pipe(map(res => res));
  //   } else {
  //     // This will return json file fetched from database
  //     return this.http.post('sellers/accountSetup', body, httpOptions).pipe(map(res => res));
  //   }
  // }

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
    if (process.env.NODE_ENV === 'development') {
      return this.http.post('http://localhost:3000/sellers/addDescription', description, httpOptions)
      .pipe(map(res => res));
    } else {
    // This will return json file fetched from database
      return this.http.post('sellers/addDescription', description, httpOptions)
      .pipe(map(res => res));
    }
  }

  addSellerAddress(address) {
    this.loadToken();
    // Tokens needed to fetch data from database
    const httpOptions = {
      headers: new HttpHeaders ({
        'Content-Type':  'application/json',
        'x-access-token': this.sellerToken
      })
    };
    if (process.env.NODE_ENV === 'development') {
      return this.http.post('http://localhost:3000/sellers/addAddress', address, httpOptions)
      .pipe(map(res => res));
    } else {
    // This will return json file fetched from database
      return this.http.post('sellers/addAddress', address, httpOptions)
      .pipe(map(res => res));
    }
  }

  // allow user to upload profile picture
  // By John
  setProfilePicture(profilePic: File): Observable<Object>{
    // console.log("profile picutre action taken");
    this.loadToken();
    const httpOptions = {
      headers: new HttpHeaders ({
        'x-access-token': this.sellerToken
      })
    };
    const formData = new FormData();

    formData.append('image', profilePic)
    if (isDevMode()) {
      return this.http.post('http://localhost:3000/sellers/profilepicture', formData, httpOptions)
      .pipe(map(res => res));
    } else {
    // This will return json file fetched from database
      return this.http.post('sellers/profilepicture', formData, httpOptions)
      .pipe(map(res => res));
    }
  }

  addOfferImage(offerPic: File): Observable<Object> {
    console.log("Offer Picture has been called in services");
    this.loadToken();
    const httpOptions = {
      headers: new HttpHeaders ({
        'x-access-token': this.sellerToken
      })
    };
    const formData = new FormData();
    formData.append('image', offerPic);
    if (process.env.NODE_ENV === 'development') {
      return this.http.post('http://localhost:3000/sellers/offerpicture', formData, httpOptions)
      .pipe(map(res => res));
    } else {
    // This will return json file fetched from database
      return this.http.post('sellers/offerpicture', formData, httpOptions)
      .pipe(map(res => res));
    }
  }

  // Resend Confirmation Email
  resendSellerConfirmation(email) {
    this.loadToken();
    const httpOptions = {
      headers: new HttpHeaders ({
        'Content-Type': 'application/json'
      })
    };
    const body = {
      'email': email
    };
    if (process.env.NODE_ENV === 'development') {
      return this.http.post('http://localhost:3000/sellers/resend', body, httpOptions)
      .pipe(map(res => res));
    } else {
    // This will return json file fetched from database
      return this.http.post('sellers/resend', body, httpOptions)
      .pipe(map(res => res));
    }
  }

  // Get seller stripe route
  stripeRoute() {
    this.loadToken();
    const httpOptions = {
      headers: new HttpHeaders ({
        'Content-Type': 'application/json',
        'x-access-token': this.sellerToken
      })
    };
    if (process.env.NODE_ENV === 'development') {
      return this.http.get('http://localhost:3000/sellers/getStripeRoute', httpOptions)
      .pipe(map(res => res));
    } else {
    // This will return json file fetched from database
      return this.http.get('sellers/getStripeRoute', httpOptions)
      .pipe(map(res => res));
    }
  }

  // logging out seller
  sellerLogout() {
    this.sellerToken = null;
    this.seller = null;
  }

  // Service to archive a request
  addArchive(requestID) {
    this.loadToken();
    // Tokens needed to fetch data from database
    const httpOptions = {
      headers: new HttpHeaders ({
        'Content-Type':  'application/json',
        'x-access-token': this.sellerToken
      })
    };
    if (process.env.NODE_ENV === 'development') {
      return this.http.post('http://localhost:3000/sellers/addArchive', requestID, httpOptions)
      .pipe(map(res => res));
    } else {
    // This will return json file fetched from database
      return this.http.post('sellers/addArchive', requestID, httpOptions)
      .pipe(map(res => res));
    }
  }

  // Service to get archived requests from buyers associated with seller's code
  getArchivedRequests() {
    this.loadToken();
    // Tokens needed to fetch data from database
    const httpOptions = {
      headers: new HttpHeaders ({
        'Content-Type':  'application/json',
        'x-access-token': this.sellerToken
      })
    };
    if (process.env.NODE_ENV === 'development') {
      return this.http.get('http://localhost:3000/sellers/getArchivedRequests', httpOptions).pipe(map(res => res));
    } else {
    // This will return json file fetched from database
    return this.http.get('sellers/getArchivedRequests', httpOptions).pipe(map(res => res));
    }
  }

  // Update Password function
  updatePassword(oldPass, newPass, newPassConfirm) {
    this.loadToken();
    // Tokens needed to fetch data from database
    const httpOptions = {
      headers: new HttpHeaders ({
        'Content-Type':  'application/json',
        'x-access-token': this.sellerToken
      })
    };
    const body = {
      'oldPassword': oldPass,
      'newPassword': newPass,
      'newPasswordConfirm': newPassConfirm
    };

    if (process.env.NODE_ENV === 'development') {
      return this.http.post('http://localhost:3000/sellers/updatePassword', body, httpOptions)
      .pipe(map(res => res));
    } else {
    // This will return json file fetched from database
      return this.http.post('sellers/updatePassword', body, httpOptions)
      .pipe(map(res => res));
    }
  }

  // Service to delete an archived request
  deleteArchive(requestID) {
    this.loadToken();
    // Tokens needed to fetch data from database
    const httpOptions = {
      headers: new HttpHeaders ({
        'Content-Type':  'application/json',
        'x-access-token': this.sellerToken
      })
    };
    if (process.env.NODE_ENV === 'development') {
      return this.http.post('http://localhost:3000/sellers/deleteArchive', requestID, httpOptions)
      .pipe(map(res => res));
    } else {
    // This will return json file fetched from database
      return this.http.post('sellers/deleteArchive', requestID, httpOptions)
      .pipe(map(res => res));
    }
  }

  getPurchasedOffers() {
    this.loadToken();
    const httpOptions = {
      headers: new HttpHeaders ({
        'Content-Type':  'application/json',
        'x-access-token': this.sellerToken
      })
    };
    if (process.env.NODE_ENV === 'development') {
      return this.http.get('http://localhost:3000/sellers/getPurchasedOffers', httpOptions).pipe(map(res => res));
    } else {
    // This will return json file fetched from database
    return this.http.get('sellers/getPurchasedOffers', httpOptions).pipe(map(res => res));
    }
  }

  updatePurchasedOffers(offerInfo) {
    this.loadToken();
    const httpOptions = {
      headers: new HttpHeaders ({
        'Content-Type':  'application/json',
        'x-access-token': this.sellerToken
      })
    };
    if (process.env.NODE_ENV === 'development') {
      return this.http.post('http://localhost:3000/sellers/updatePurchasedOffers', offerInfo, httpOptions).pipe(map(res => res));
    } else {
    // This will return json file fetched from database
    return this.http.post('sellers/updatePurchasedOffers', offerInfo, httpOptions).pipe(map(res => res));
    }
  }

  updateShippingInfoOffer(offerInfo) {
    this.loadToken();
    const httpOptions = {
      headers: new HttpHeaders ({
      'Content-Type': 'application/json',
      'x-access-token': this.sellerToken
      })
    };
    if (process.env.NODE_ENV === 'development') {
      return this.http.post('http://localhost:3000/sellers/updateOfferShippingInfo', offerInfo, httpOptions).pipe(map(res => res));
    } else {
    // This will return json file fetched from database
    return this.http.post('sellers/updateOfferShippingInfo', offerInfo, httpOptions).pipe(map(res => res));
    }
  }
}
