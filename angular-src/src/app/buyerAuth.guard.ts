import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { StoreFetchService } from './services/storeFetch.service';
import { Router } from '@angular/router';
import { NotifierService } from 'angular-notifier';

@Injectable({
  providedIn: 'root'
})
export class BuyerAuthGuard implements CanActivate {
  private readonly notifier: NotifierService;

  constructor(private storeFetch: StoreFetchService,
    private myRoute: Router,
    private notifierService: NotifierService) {
    this.notifier = notifierService;
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      const returnedAnswer = this.storeFetch.buyerIsLoggedIn();
      // Reroute to login, if the user is not logged in as buyer
      if (returnedAnswer) {
        return returnedAnswer;
      } else {
        this.myRoute.navigate(['/login']);
        return returnedAnswer;
      }
  }
}
