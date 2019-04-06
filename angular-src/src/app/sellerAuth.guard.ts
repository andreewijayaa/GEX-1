import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Location } from '@angular/common';
import { StoreFetchService } from './services/storeFetch.service';
import { Router, ActivatedRoute  } from '@angular/router';
import { NotifierService } from 'angular-notifier';

@Injectable({
  providedIn: 'root'
})
export class SellerAuthGuard implements CanActivate {
  private readonly notifier: NotifierService;

  constructor(private storeFetch: StoreFetchService,
    private location: Location,
    private myRoute: Router,
    private notifierService: NotifierService,
    private route: ActivatedRoute) {
    this.notifier = notifierService;
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      const returnedAnswer = this.storeFetch.sellerIsLoggedIn();
      // Reroute to login, if the user is not logged in as seller
      if (returnedAnswer) {
        return returnedAnswer;
      } else {
        this.myRoute.navigate(['/seller-login']);
        return returnedAnswer;
      }
  }
}
