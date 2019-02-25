// By Roni
// Resend email confirmation
import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';
import { BuyerService } from '../../../services/buyer.service';
import { SellerService } from '../../../services/seller.service';
import { ValidateService } from '../../../services/validate.service';
import { NotifierService } from 'angular-notifier';
import { StoreFetchService } from '../../../services/storeFetch.service';

@Component({
  selector: 'app-resend',
  templateUrl: './resend.component.html',
  styleUrls: ['./resend.component.css']
})
export class ResendComponent implements OnInit {
  email: any;

  private readonly notifier: NotifierService;

  constructor(private route: ActivatedRoute,
    private buyerService: BuyerService,
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
  }

  resendEmail() {
    if(!this.email) {
      return this.notifier.notify('error', 'Please input an email.');
    }
    if(!this.validateService.validateEmail(this.email)) {
      return this.notifier.notify('error', 'Email is not in the correct format.');
    }
    // get URL parameters
    this.buyerService.resendBuyerConfirmation(this.email).subscribe((data: any) => {

      if (data.success || !data) { // Buyer account activated, prioritizing buyer activation
        this.notifier.notify('success', data.msg);
        this.router.navigate(['/preactivation']);
      } else { // Check if the token provided is for a seller account
        this.sellerService.resendSellerConfirmation(this.email).subscribe((data2: any) => {
          console.log(data2.msg);
          if (data2.success || !data2) { // Seller account activated

            this.notifier.notify('success', data2.msg);
            this.router.navigate(['/preactivation']);
          } else { // Invalid Token/URL
            console.log('We have an error');
            this.notifier.notify('error', data2.msg);
          }
        });
      }
    });
  }
}
