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
  spinner: Boolean;

  // order and shipping details
  buyer_first_name: any;
  orderNumber: any;
  orderStatus: any;
  shippingAddressDetails = [];

  // submitted request info
  requestIDList = [];
  dataPerRequestID = [];

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
    this.spinner = true;
    this.route.params.subscribe(params => {
      this.orderId = params.order;
    });
    this.getOrderConfirmDetails();
    this.getBuyerProfile();
  }

  getBuyerProfile() {
    this.buyerService.getBuyerProfile().subscribe((data: any) => {
      if (data.success) {
        this.buyer_first_name = data.buyer_found.first_name;
      } else {
        console.log('Could not fetch buyer profile data');
      }
    });
  }

  getOrderConfirmDetails() {
    this.buyerService.getOrderDetails(this.orderId).subscribe((data: any) => {
      if (data.success) {
        this.orderNumber = data.orderFound.orderNumber;
        this.orderStatus = data.orderFound.orderStatus;
        this.shippingAddressDetails = data.orderFound.shippingAddress;
        this.requestIDList = data.orderFound.requestsPurchasedID;
        this.offerTotal = data.orderFound.totalOffersPrice;
        this.shippingTotal = data.orderFound.totalShipPrice;
        this.feesTotal = data.orderFound.totalFeesPrice;
        this.subtotal = data.orderFound.subtotalPrice;
        this.orderTotal = data.orderFound.totalPrice;
        this.getRequestDetails();
      } else if (data.success === false) {
        this.spinner = false;
        this.router.navigate(['/buyer']);
      }
    });
  }

  getRequestDetails() {
    this.requestIDList.forEach(requestID => {
      this.requestService.getRequest(requestID).subscribe((data: any) => {
        if (data.success) {
          this.dataPerRequestID.push(data);
          this.spinner = false;
        } else {
          console.log('Could not fetch request data');
        }
      });
    });
  }
}
