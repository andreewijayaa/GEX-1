import { Component, OnInit } from '@angular/core';
import { RegisterService } from '../../services/register.service';
import { AuthService } from '../../services/auth.service';
import { StoreFetchService } from '../../services/storeFetch.service';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';
import { BuyerComponent } from '../buyer/buyer.component'
import { ConditionFunc } from 'rxjs/internal/observable/generate';
import { Config } from 'protractor';
import { Buffer } from 'buffer';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [BuyerComponent]
})
export class LoginComponent implements OnInit {
  email: String;
  password: String;


  constructor(private registerService: RegisterService,
    private authService: AuthService,
    private storeFetchService: StoreFetchService,
    private router: Router,
    private flashMessage: FlashMessagesService,
    private buyerComp: BuyerComponent) { }

  ngOnInit() {
  }

  onLoginSubmit() {
    const buyer = {
      email: this.email,
      password: this.password
    };

    this.authService.AuthenticateBuyer(buyer).subscribe((data: any) => {
      if (data.success) {
        this.storeFetchService.storeBuyerData(data.token, data.buyer);
        this.flashMessage.show('You are now logged in.', { cssClass: 'alert-success', timeout: 5000 });
        this.router.navigate['/buyer'];
      } else {
        this.flashMessage.show(data.msg, { cssClass: 'alert-danger', timeout: 5000 });
        this.router.navigate(['/login']);
      }
    });
  }
}
