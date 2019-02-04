//By: Omar
//Buyer checkout page
import { Component, OnInit } from '@angular/core';
import { OfferService } from '../../../services/offer.service'
import { Router, ActivatedRoute } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';
import { StoreFetchService } from '../../../services/storeFetch.service';

@Component({
  selector: 'app-buyer-checkout',
  templateUrl: './buyer-checkout.component.html',
  styleUrls: ['./buyer-checkout.component.css']
})
export class BuyerCheckoutComponent implements OnInit {

  offer: Object;
  currentBuyerId: any;

  constructor(private route: ActivatedRoute,
    private offerService: OfferService,
    private flashMessage: FlashMessagesService,
    private router: Router,
    private storeFetchService: StoreFetchService) { }

  ngOnInit() {
    // get URL parameters
    this.route.params.subscribe(params => {
      this.currentBuyerId = params.id;
      /*
      // --> Extract the id pass with URL
      // Make a call to retrieve request information with all offers to that request
      this.requestService.getRequest(this.id).subscribe((data: any) => {
        if (data.success) {
          this.request = data.request;
          this.offerList = data.offers;
          // used to distinguish between if buyer is viewing the request or a seller
          // to limit access
          if (data.status === 0) {
            this.status = true; // Buyer
          } else if (data.status === 1) {
            this.status = false; // Seller
          }
          else {
            this.flashMessage.show(data.msg, { cssClass: 'alert-danger', timeout: 5000 });
            this.router.navigate(['/']);
          }
        } else {
          this.flashMessage.show(data.msg, { cssClass: 'alert-danger', timeout: 5000 });
          this.router.navigate(['/']);
        }
      });*/
    });
  }

}
