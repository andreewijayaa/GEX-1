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