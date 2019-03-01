// By Roni
// Reset password confirmation
import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';
import { RegisterService } from '../../../services/register.service';
import { SellerService } from '../../../services/seller.service';
import { ValidateService } from '../../../services/validate.service';
import { NotifierService } from 'angular-notifier';
import { StoreFetchService } from '../../../services/storeFetch.service';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.css']
})
export class ForgetPasswordComponent implements OnInit {
  email: any;
  id: any;
  buyer: any;
  seller: any;
  reset: any;
  passwordReset: Boolean;
  sendReset: Boolean;
  password: any;
  passwordConfirm: any;

  private readonly notifier: NotifierService;
   constructor(private route: ActivatedRoute,
    private registerService: RegisterService,
    private notifierService: NotifierService,
    private sellerService: SellerService,
    private router: Router,
    private validateService: ValidateService,
    private storeFetchService: StoreFetchService) {
      this.notifier = notifierService;
    }

  ngOnInit() {
    if (this.storeFetchService.buyerIsLoggedIn()) {
      this.router.navigate(['/buyer']);
    } else if (this.storeFetchService.sellerIsLoggedIn()) {
      this.router.navigate(['/seller']);
    }
    this.route.queryParams.subscribe(params => {
      this.buyer = params['buyer'];
      this.seller = params['seller'];
      this.reset = params['reset'];
    });
    this.passwordReset = false;
    this.sendReset = false;

    // If user is just sending a new password reset email
    if (this.buyer === undefined && this.seller === undefined && this.reset !== undefined) {
      this.sendReset = true;
    } else if (this.buyer !== undefined && this.seller === undefined && this.reset === undefined) {
      this.passwordReset = true;
    } else if (this.buyer === undefined && this.seller !== undefined && this.reset === undefined) {
      this.passwordReset = true;
    } else {
      return this.router.navigate(['/']);
    }
    console.log('sendReset=' + this.sendReset);
    console.log('passwordReset=' + this.passwordReset);
  }

  sendPasswordReset() {

    // Check email blank
    if (!this.email) {
      return this.notifier.notify('error', 'Please input an email.');
    }
    // Check if email meets format
    if (!this.validateService.validateEmail(this.email)) {
      return this.notifier.notify('error', 'Email is not in the correct format.');
    }

    // Buyer is trying to reset email
    if (this.reset === 'buyer') {
      this.registerService.forgetPassword(this.email, 0).subscribe((data: any) => {
        if (data.success || !data) {
          this.notifier.notify('success', data.msg);
          this.router.navigate(['/login']);
        } else {
          this.notifier.notify('error', data.msg);
        }
      });
    } else if (this.reset === 'seller') { // Seller trying to reset email
      this.registerService.forgetPassword(this.email, 1).subscribe((data: any) => {
        if (data.success || !data) {
          this.notifier.notify('success', data.msg);
          this.router.navigate(['/seller-login']);
        } else {
          this.notifier.notify('error', data.msg);
        }
      });
    }
  }

  setNewPassword() {

    if (this.password === undefined) { return this.notifier.notify('error', 'Please input a valid password.'); }
    if (this.password !== this.passwordConfirm) { return this.notifier.notify('error', 'Passwords do not match.'); }
    // Buyer Changing password
    if (this.buyer !== undefined && this.seller === undefined && this.reset === undefined) {
      this.registerService.changePassword(this.buyer, this.password, 0).subscribe((data: any) => {
        console.log(data);
        if (data.success || !data) {
          this.notifier.notify('success', data.msg);
          this.storeFetchService.storeBuyerData(data.token, data.buyer);
          this.router.navigate(['/buyer']);
          this.notifier.notify('success', 'You are now logged in.');
        } else {
          this.notifier.notify('error', data.msg);
        }
      });
    // Seller Changing password
    } else if (this.buyer === undefined && this.seller !== undefined && this.reset === undefined) {

      this.registerService.changePassword(this.seller, this.password, 1).subscribe((data: any) => {
        if (data.success || !data) {
          this.notifier.notify('success', data.msg);
          this.storeFetchService.storeSellerData(data.token, data.seller);
          this.router.navigate(['/seller']);
          this.notifier.notify('success', 'You are now logged in.');
        } else {
          this.notifier.notify('error', data.msg);
        }
      });
    } else {
      return this.router.navigate(['/']);
    }
  }

}

