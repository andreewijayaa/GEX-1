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