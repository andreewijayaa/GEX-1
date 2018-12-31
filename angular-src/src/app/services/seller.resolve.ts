/*
By: Omar
Seller resolve is used to ensure the seller data is being fetched in order to be displayed properly 
before the seller homepage gets loaded once a seller signs in to their account. Right now only the seller name
is being fetched using this function.
*/
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot,RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { SellerService } from '../services/seller.service';

@Injectable()
export class SellerResolve implements Resolve<any> {
  
  constructor(private sellerService: SellerService){ }
 resolve(route:ActivatedRouteSnapshot, 
        state:RouterStateSnapshot,
       ): Observable<any> {
    return this.sellerService.getSellerProfile();  
  }
}