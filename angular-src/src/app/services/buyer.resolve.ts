/*
By: Omar
Buyer resolve is used to ensure the buyer data is being fetched in order to be displayed properly 
before the buyer homepage gets loaded once a buyer signs in to their account. Right now only the seller name
is being fetched using this function.
*/
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot,RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { BuyerService } from '../services/buyer.service';

@Injectable()
export class BuyerResolve implements Resolve<any> {
  
  constructor(private buyerService: BuyerService){ }
 resolve(route:ActivatedRouteSnapshot, 
        state:RouterStateSnapshot,
       ): Observable<any> {
    return this.buyerService.getBuyerProfile();  
  }
}