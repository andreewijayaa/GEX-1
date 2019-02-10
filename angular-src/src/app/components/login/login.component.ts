import { Component, OnInit } from '@angular/core';
import { RegisterService } from '../../services/register.service';
import { AuthService } from '../../services/auth.service';
import { StoreFetchService } from '../../services/storeFetch.service';
import { Router } from '@angular/router';
import { BuyerComponent } from '../buyer/buyer.component'
import { ConditionFunc } from 'rxjs/internal/observable/generate';
import { Config } from 'protractor';
import { Buffer } from 'buffer';
import { NotifierService } from 'angular-notifier';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [BuyerComponent]
})
export class LoginComponent implements OnInit {
  email: String;
  password: String;
  private readonly notifier: NotifierService;

  constructor(private registerService: RegisterService,
    private authService: AuthService,
    private storeFetchService: StoreFetchService,
    private router: Router,
    private notifierService: NotifierService,
    private buyerComp: BuyerComponent) { this.notifier = notifierService; }

  ngOnInit() {
    if (this.storeFetchService.buyerIsLoggedIn())
      this.router.navigate(['/buyer']);
    else if (this.storeFetchService.sellerIsLoggedIn())
      this.router.navigate(['/seller']);
  }

  // Login request for buyer - Roni
  onLoginSubmit() {
    // Generated email and password, only needed fields to login
    const buyer = {
      email: this.email,
      password: this.password
    };

    // Call the buyer login service
    this.authService.AuthenticateBuyer(buyer).subscribe((data: any) => {
      if (data.success) {
        this.storeFetchService.storeBuyerData(data.token, data.buyer);
        this.router.navigate(['/buyer']);
        // window.location.reload(); //Why do we need to reload ??
        this.notifier.notify('success', 'You are now logged in.');
      } else {
        this.notifier.notify('error', data.msg);
      }
    });
  }
}
