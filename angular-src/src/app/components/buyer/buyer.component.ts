import { Component, OnInit } from '@angular/core';
import { RegisterService } from '../../services/register.service';
import { BuyerService } from '../../services/buyer.service';
import { Router, ActivatedRoute } from '@angular/router';
import { RequestService } from '../../services/request.service';
import { MatDialog } from '@angular/material';
import { NotifierService } from 'angular-notifier';
import {animate, state, style, transition, trigger} from '@angular/animations';
import * as io from 'socket.io-client';
import { relative } from 'path';

export interface RequestElement {
  title: String;
  status: String;
  offerCount: String;
  deadline: String;
  description: String;
  request_images: [String];
  _id: String;
}

export interface OfferElement {
  title: String;
  description: String;
  price: String;
  shippingPrice: String;
  offerStatus: String;
  created_at: String;
  _id: String;
  offerAccepted: Boolean;
}

@Component({
  selector: 'app-buyer',
  templateUrl: './buyer.component.html',
  styleUrls: ['./buyer.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0', display: 'none'})),
      state('expanded', style({})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class BuyerComponent implements OnInit {
  socket;
  private readonly notifier: NotifierService;
  buyer: Object;
  buyerProfile: Object;
  requestList = [];
  loaded: Promise<boolean>;
  loading: Boolean;
  panelOpenState = false;
  offerList: Object;
  offerTitleAddToCart: String;
  offerCart: [String] = [''];
  buyer_firstName: any;

  dataSourceRequests = [];
  dataSourceOffers = [];
  columnsToGetRequestInfo = ['title', 'status', 'offerCount', 'deadline'];
  columnsToGetOfferInfo = ['title', 'created_at', 'shippingPrice', 'price'];
  expandedRequestElement: RequestElement | null;
  expandedOfferElement: OfferElement | null;

  constructor(private registerService: RegisterService,
    private buyerService: BuyerService,
    private router: Router,
    private route: ActivatedRoute,
    private requestService: RequestService,
    private notifierService: NotifierService,
    private dialog: MatDialog) { this.notifier = notifierService; this.socket = io('http://localhost:3000'); }

  // showing buyer info when buyer portal page loads - Bryan Vu

  ngOnInit() {
    this.getBuyer();
    this.socket.on('updatedBuyerProfileInfo', () => {
      this.getBuyer();
    });

    this.buyerService.getBuyerRequests().subscribe((requests: any) => {
      if (requests.success) {
        this.requestList = requests['requests'];
        this.dataSourceRequests = requests['requests'];
      } else {
        console.log('could not fetch buyer requests');
      }
    });
  }

  getBuyer() {
    this.buyerService.getBuyerProfile().subscribe((buyerdata: any) => {
      if (buyerdata.success) {
        this.buyerProfile = buyerdata.buyer_found;
        this.buyer_firstName = buyerdata.buyer_found.first_name;
        this.offerCart = buyerdata.buyer_found['offerCart'];
      } else {
        console.log('Could not retreive buyer profile data');
      }
    });
  }

  // tslint:disable-next-line:member-ordering

  refreshBuyer() {
    this.buyer = JSON.parse(localStorage.getItem('buyer'));
    if (this.buyer == null) {
      window.location.reload();
    } else {
      // console.log(this.buyer);
    }
  }

  expanded(id: any) {
    let requestId = id;
    this.getBuyer();
    // (<HTMLButtonElement>document.getElementById('acceptOfferButton')).disabled = true;
    // Make a call to retrieve request information with all offers to that request
    this.requestService.getRequest(requestId).subscribe((data: any) => {
      if (data.success) {
        this.offerList = data.offers;
        this.dataSourceOffers = data.offers;
        this.offerCart = this.buyerProfile['offerCart'];
        // console.log(this.offerCart);

        // used to distinguish between if buyer is viewing the request or a seller
        // to limit access
        if (data.status === 0) {
          //this.status = true; // Buyer
        } else if (data.status === 1) {
          // this.status = false; // Seller
        }
        else {
          // this.notifier.notify('success', data.msg);
          // this.router.navigate(['/']);
        }
      } else {
        // this.notifier.notify('error', data.msg);
        // this.router.navigate(['/']);
      }
    });
    this.getBuyer();
  }

  deleteRequestFunction(request_id_todelete) {
    //debugger;
    var request_delete;
    request_delete = {
      request_id: request_id_todelete
    };

    this.buyerService.deleteBuyerRequest(request_delete).subscribe((data: any) => {
      // debugger;
      if (data.success == false){
        this.notifier.notify('error', data.message);
      } else {
        window.location.reload();
      }
    });

  }

  acceptOffer(element, offer_id) {
    // const offer_id = document.getElementById('offerId').innerHTML;
    const offerAccepted = {
      offer_ID: offer_id,
      offer_accepted: true
    };

    this.buyerService.offerAccepted(offerAccepted).subscribe((data: any) => {
      if (data.success) {
        // console.log("Offer Accepted Successful.");
        (<HTMLButtonElement>document.getElementById('acceptOfferButton')).disabled = true;
        (<HTMLButtonElement>document.getElementById('acceptOfferButton')).innerHTML = 'Offer Accepted';
        this.notifier.notify('success', 'Offer was successfully accepted.');
      } else {
        this.notifier.notify('error', 'Offer was unable to be accepted.');
      }
    });

    const offerToCart = {
      offerID: offer_id
    };
    this.buyerService.addOfferToBuyerCart(offerToCart).subscribe((data: any) => {
      if (data.success) {
        element.textContent = 'Offer Accepted';
        element.disabled = true;
        this.notifier.notify('success', 'Offer successfully added to your cart!');
      } else {
        this.notifier.notify('error', 'Unable to add offer to cart.');
      }
    });
  }
}
