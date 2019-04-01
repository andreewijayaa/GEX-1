import { Component, OnInit } from "@angular/core";
import { BuyerService } from "../../../services/buyer.service";
import { RequestService } from "../../../services/request.service";
import { NotifierService } from "angular-notifier";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-buyer-purchase-details",
  templateUrl: "./buyer-purchase-details.component.html",
  styleUrls: ["./buyer-purchase-details.component.css"]
})
export class BuyerPurchaseDetailsComponent implements OnInit {
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
  orderShipCompany: any;
  orderTrackNumber: any;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private notifierService: NotifierService,
    private requestService: RequestService,
    private buyerService: BuyerService
  ) {
    this.notifier = notifierService;
  }

  ngOnInit() {
    this.spinner = true;
    this.route.params.subscribe(params => {
      this.orderId = params.orderId;
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
        console.log(data);
        this.orderNumber = data.orderFound.orderNumber;
        this.orderStatus = data.orderFound.orderStatus;
        this.shippingAddressDetails = data.orderFound.shippingAddress;
        this.requestIDList = data.orderFound.requestsPurchasedID;
        this.offerTotal = data.orderFound.totalOffersPrice;
        this.shippingTotal = data.orderFound.totalShipPrice;
        this.feesTotal = data.orderFound.totalFeesPrice;
        this.subtotal = data.orderFound.subtotalPrice;
        this.orderTotal = data.orderFound.totalPrice;
        this.orderShipCompany = data.orderFound.orderShippingCompany;
        this.orderTrackNumber = data.orderFound.orderTrackingNumber;
        if (this.orderShipCompany === '' || this.orderShipCompany === undefined) {
          this.orderShipCompany = 'Not provided yet.';
        }
        if (this.orderTrackNumber === '' || this.orderTrackNumber === undefined) {
          this.orderTrackNumber = 'Not provided yet.';
        }
        this.getRequestDetails();
      } else if (data.success === false) {
        this.spinner = false;
        console.log('here');
        //this.router.navigate(['/buyer']);
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
