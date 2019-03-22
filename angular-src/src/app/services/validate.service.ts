// By Roni
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ValidateService {

  constructor() { }
  // All fields must be filled upon buyer registration
  ValidateBuyerRegister(buyer) {
    // tslint:disable-next-line:triple-equals
    if (buyer.first_name == undefined || buyer.last_name == undefined || buyer.email == undefined || buyer.password == undefined) {
        return false;
      } else {
        return true;
      }
  }
  // All fields must be filled upon seller registration
  ValidateSellerRegister(seller) {
    // tslint:disable-next-line:triple-equals
    if (seller.first_name == undefined || seller.last_name == undefined || seller.email == undefined || seller.password == undefined
      // tslint:disable-next-line:triple-equals
      || seller.entity_name == undefined || seller.position == undefined || seller.phone_number == undefined) {
        return false;
      } else {
        return true;
      }
  }
  // Email format validation upon registration
  validateEmail(email) {
    // tslint:disable-next-line:max-line-length
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  validatePassword(password){
    var re = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/;
    return re.test(password);
  }

}
