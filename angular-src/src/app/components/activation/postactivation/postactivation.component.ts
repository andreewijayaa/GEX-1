// By Roni
// Email activation through link
import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';
import { RegisterService } from '../../../services/register.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { StoreFetchService } from '../../../services/storeFetch.service';
/// <reference path ="../../node_modules/@types/jquery/index.d.ts"/
declare var $: any;


@Component({
  selector: 'app-postactivation',
  templateUrl: './postactivation.component.html',
  styleUrls: ['./postactivation.component.css']
})
export class PostactivationComponent implements OnInit {

  constructor(private route: ActivatedRoute,
    private registerService: RegisterService,
    private flashMessage: FlashMessagesService,
    private router: Router,
    private storeFetchService: StoreFetchService) {}
// TODO :: Add type
token: any;  // -> wanted parameter (use your object type)

  ngOnInit() {
      if (this.storeFetchService.buyerIsLoggedIn()) {
        this.router.navigate(['/buyer']);
      }
      else if (this.storeFetchService.sellerIsLoggedIn()) {
        this.router.navigate(['/seller']);
      }
      // get URL parameters
      this.route.params.subscribe(params => {
        this.token = params.token; // --> provided token included with the parameter
        this.registerService.activateAccount(this.token).subscribe((data: any) => {
          if (data.success) { // Buyer account activated, prioritizing buyer activation
              setTimeout(() => {
                this.flashMessage.show(data.msg, {cssClass: 'alert-danger', timeout: 3000});
            }, 3000);  // 5s
            // Automatically login user after account activation
            this.storeFetchService.storeBuyerData(data.token, data.buyer);
            this.router.navigate(['/buyer']);
            this.flashMessage.show('You are now logged in.', { cssClass: 'alert-success', timeout: 5000 });
          } else { // Check if the token provided is for a seller account
            this.registerService.selleractivateAccount(this.token).subscribe((data2: any) => {
              if (data2.success) { // Seller account activated
                  setTimeout(() => {
                    this.flashMessage.show(data2.msg, {cssClass: 'alert-danger', timeout: 3000});
                }, 3000);  // 5s
                // Automatically login user after account activation
                this.storeFetchService.storeSellerData(data2.token, data2.seller);
                this.router.navigate(['/seller-login']);
                this.flashMessage.show('You are now logged in.', { cssClass: 'alert-success', timeout: 5000 });
              } else { // Invalid Token/URL
                this.router.navigate(['/buyer-register']);
                this.flashMessage.show('Error activating account.', {cssClass: 'alert-danger', timeout: 3000});
              }
            });
          }
        });
  });
 }
}
