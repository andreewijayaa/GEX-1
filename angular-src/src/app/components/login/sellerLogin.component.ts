import { Component, OnInit } from '@angular/core';
import { RegisterService } from '../../services/register.service';
import { AuthService } from '../../services/auth.service';
import { StoreFetchService } from '../../services/storeFetch.service';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';
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

  constructor(private registerService: RegisterService,
    private authService: AuthService,
    private storeFetchService: StoreFetchService,
    private router: Router,
    private flashMessage: FlashMessagesService) { }

  ngOnInit() {
    if (this.storeFetchService.buyerIsLoggedIn())
      this.router.navigate(['/buyer']);
    else if (this.storeFetchService.sellerIsLoggedIn())
      this.router.navigate(['/seller']);
  }

  onLoginSubmit() {
    const seller = {
      email: this.email,
      password: this.password
    };

    this.authService.AuthenticateSeller(seller).subscribe((data: any) => {
      if (data.success) {
        this.storeFetchService.storeSellerData(data.token, data.seller);
        this.router.navigate(['/seller']);
        this.flashMessage.show('You are now logged in.', { cssClass: 'alert-success', timeout: 5000 });
      }
      else {
        this.flashMessage.show(data.msg, { cssClass: 'alert-danger', timeout: 10000 });
        //this.router.navigate(['/seller-login']);
      }
    });

  }
}
