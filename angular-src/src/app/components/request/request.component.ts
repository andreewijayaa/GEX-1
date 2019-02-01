// By Roni
// Request View Page
import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';
import { RequestService } from '../../services/request.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { StoreFetchService } from '../../services/storeFetch.service';
@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.css']
})
export class RequestComponent implements OnInit {

  constructor(private route: ActivatedRoute,
    private requestService: RequestService,
    private flashMessage: FlashMessagesService,
    private router: Router,
    private storeFetchService: StoreFetchService) { }
  id: any;
  request: Object;
  offerList: Object;
  status: Boolean;
  ngOnInit() {

    if (this.storeFetchService.buyerIsLoggedIn() || this.storeFetchService.sellerIsLoggedIn()) {
    }
    else {
      this.flashMessage.show('Please login to view request.', {cssClass: 'alert-danger', timeout: 5000});
      return this.router.navigate(['/login']);
    }

     // get URL parameters
     this.route.params.subscribe(params => {
      this.id = params.id;

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
            this.flashMessage.show(data.msg, {cssClass: 'alert-danger', timeout: 5000});
            this.router.navigate(['/']);
          }
        } else {
          this.flashMessage.show(data.msg, {cssClass: 'alert-danger', timeout: 5000});
          this.router.navigate(['/']);
        }
        });
      });

    }

    //By: Omar
    //Events that take place after a buyer accepts an offer.
    offerAcceptedClicked() {
      this.router.navigate(['/buyer/checkout']);
    }
}
