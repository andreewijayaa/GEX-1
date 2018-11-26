import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { StoreFetchService } from './services/storeFetch.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class BuyerAuthGuard implements CanActivate {
  constructor(private storeFetch: StoreFetchService,
	private myRoute: Router) {

	}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    	return this.storeFetch.buyerIsLoggedIn();    			
  }
}
