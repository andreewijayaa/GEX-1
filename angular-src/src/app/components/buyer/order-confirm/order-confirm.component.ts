import { Component, OnInit } from '@angular/core';
import { BuyerService } from '../../../services/buyer.service';
import { RequestService } from '../../../services/request.service';
import { NotifierService } from 'angular-notifier';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-order-confirm',
  templateUrl: './order-confirm.component.html',
  styleUrls: ['./order-confirm.component.css']
})
export class OrderConfirmComponent implements OnInit {
  private readonly notifier: NotifierService;
  orderDetais: any;
  orderId: any;

  // order and shipping details
  buyer_first_name: any;
  orderNumber: any;
  orderStatus: any;
  shippingAddressDetails = [];

  // submitted request info
  requestID: any;
  requestTypeCodes = [];
  requestTitle = String;
  requestDescription = String;
  requestImages = [];

  // accepted offers
  purchasedOffers = [];

  // totals
  offerTotal: Number;
  shippingTotal: Number;
  subtotal: Number;
  feesTotal: Number;
  orderTotal: Number;

  constructor(private router: Router,
    private route: ActivatedRoute,
    private notifierService: NotifierService,
    private requestService: RequestService,
    private buyerService: BuyerService) { this.notifier = notifierService; }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.orderId = params.order;
    });
    this.getBuyerProfile();
    this.getOrderConfirmDetails();
  }

  getBuyerProfile() {
    this.buyerService.getBuyerProfile().subscribe((data: any) => {
      if (data.success) {
        this.buyer_first_name = data.buyer_found.first_name;
      } else {

      }
    });
  }

  getOrderConfirmDetails() {
    this.buyerService.getOrderDetails(this.orderId).subscribe((data: any) => {
      if (data.success) {
        console.log(data);
        this.orderNumber = data.orderFound.orderNumber;
        this.orderStatus = data.orderFound.orderStatus;
        this.shippingAddressDetails = data.orderFound.shippingAddress;
        this.requestID = data.orderFound.requestPurchasedID;
        this.offerTotal = data.orderFound.totalOffersPrice;
        this.shippingTotal = data.orderFound.totalShipPrice;
        this.feesTotal = data.orderFound.totalFeesPrice;
        this.subtotal = data.orderFound.subtotalPrice;
        this.orderTotal = data.orderFound.totalPrice;
        this.getRequestDetails();
        console.log(this.shippingAddressDetails);
      } else {

      }
    });
  }

  getRequestDetails() {
    this.requestService.getRequest(this.requestID).subscribe((data: any) => {
      if (data.success) {
        this.requestTypeCodes = data.request.code;
        this.requestTitle = data.request.title;
        this.requestDescription = data.request.description;
        this.requestImages = data.request.request_images;
        this.purchasedOffers = data.offers;
        console.log(data);
      } else {

      }
    });
  }

}
