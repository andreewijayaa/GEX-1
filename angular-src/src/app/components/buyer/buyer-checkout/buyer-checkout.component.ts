//By: Omar
//Buyer checkout page
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';
import { StoreFetchService } from '../../../services/storeFetch.service';
import { RequestService } from '../../../services/request.service';
import { parse } from 'querystring';
import { TouchSequence } from 'selenium-webdriver';

@Component({
  selector: 'app-buyer-checkout',
  templateUrl: './buyer-checkout.component.html',
  styleUrls: ['./buyer-checkout.component.css']
})
export class BuyerCheckoutComponent implements OnInit {

  selectedOfferId: any;
  offerList: Object;
  request_Id: any;
  offerPriceDisplay: any;
  totalPrice: any;
  isDataAvailable: boolean = false;

  constructor(private route: ActivatedRoute,
    private flashMessage: FlashMessagesService,
    private router: Router,
    private storeFetchService: StoreFetchService,
    private requestService: RequestService) { }

  ngOnInit() {
    this.fetchEvent()
  }

  fetchEvent() {
    return this.route.params.subscribe(params => {
      this.selectedOfferId = params.offerId;
      this.request_Id = params.requestId;

      // --> Extract the id pass with URL
      // Make a call to retrieve request information with all offers to that request

      this.requestService.getRequest(this.request_Id).subscribe((data: any) => {
        if (data.success) {
          //this.request = data.request;
          this.offerList = data.offers;
          console.log(this.offerList);
        }
        else {
          this.flashMessage.show(data.msg, { cssClass: 'alert-danger', timeout: 5000 });
          this.router.navigate(['/']);
        }
      });
    });
  }

  purchaseClicked() {
    this.totalPrice = document.getElementById('offerPrice').innerText;
    console.log(this.totalPrice);
    this.totalPrice = document.getElementById('offerPrice').innerText;
    //var price = parseFloat(this.totalPrice)
    console.log(this.totalPrice);
    this.isDataAvailable = true;
  }

}
