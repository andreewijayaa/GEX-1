import { Component, OnInit } from '@angular/core';
import { RegisterService } from '../../services/register.service';
import { AuthService } from '../../services/auth.service';
import { StoreFetchService } from '../../services/storeFetch.service';
import { Router } from '@angular/router';
import { NotifierService } from 'angular-notifier';
import { ConditionFunc } from 'rxjs/internal/observable/generate';
import { Config } from 'protractor';


@Component({
  selector: 'app-login',
  templateUrl: './SellerLogin.component.html',
  styleUrls: ['./SellerLogin.component.css']
})
export class SellerLoginComponent implements OnInit {
  email: String;
  password: String;
  private readonly notifier: NotifierService;
  constructor(private registerService: RegisterService,
    private authService: AuthService,
    private storeFetchService: StoreFetchService,
    private router: Router,
    private notifierService: NotifierService) {this.notifier = notifierService; }

  ngOnInit() {
    if (this.storeFetchService.buyerIsLoggedIn()) {
      this.router.navigate(['/buyer']);
    } else if (this.storeFetchService.sellerIsLoggedIn()) {
      this.router.navigate(['/seller']);
    }
  }
  // Login request for seller - Roni
  onLoginSubmit() {
    // Generated email and password, only needed fields to login
    const seller = {
      email: this.email,
      password: this.password
    };
    // Call the seller login service
    this.authService.AuthenticateSeller(seller).subscribe((data: any) => {
      if (data.success) {
        this.storeFetchService.storeSellerData(data.token, data.seller);
        this.router.navigate(['/seller']);
        this.notifier.notify('success', 'You are now logged in.');
      } else {
        this.notifier.notify('error', data.msg);
        if(data.msg === 'Please Activate your account first.') {
          this.router.navigate(['/resend']);
        }
      }
    });

  }
}
