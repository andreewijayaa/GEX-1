import { Component, OnInit, ViewChild } from '@angular/core';
import { RegisterService } from '../../services/register.service';
import { BuyerService } from '../../services/buyer.service';
import { Router, ActivatedRoute } from '@angular/router';
import { RequestService } from '../../services/request.service';
import { SellerService } from '../../services/seller.service';
import { MatDialog, MatTableDataSource, MatSort, MatPaginator } from '@angular/material';
import { NotifierService } from 'angular-notifier';
import {animate, state, style, transition, trigger} from '@angular/animations';
import * as io from 'socket.io-client';
import { relative } from 'path';
import { timeInterval } from 'rxjs/operators';

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
  expected_completion: String;
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
  sellerInfo: any;
  seller_firstName: String;
  seller_lastName: String;
  offerAccepted: Boolean;

  dataSourceRequests = new MatTableDataSource(this.requestList);
  dataSourceOffers = [];
  columnsToGetRequestInfo = ['title', 'status', 'offerCount', 'deadline'];
  columnsToGetOfferInfo = ['title', 'created_at', 'shippingPrice', 'price'];
  expandedRequestElement: RequestElement | null;
  expandedOfferElement: OfferElement | null;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  // @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor(private registerService: RegisterService,
    private buyerService: BuyerService,
    private router: Router,
    private route: ActivatedRoute,
    private requestService: RequestService,
    private notifierService: NotifierService,
    private sellerService: SellerService,
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
        this.dataSourceRequests = new MatTableDataSource(requests['requests']);
      } else {
        console.log('could not fetch buyer requests');
      }
    });

    this.dataSourceRequests.paginator = this.paginator;
    // this.dataSourceRequests.sort = this.sort;
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

  searchFilter(filterValue: string) {
    this.dataSourceRequests.filter = filterValue.trim().toLowerCase();

    // if (this.dataSourceRequests.paginator) {
    //   this.dataSourceRequests.paginator.firstPage();
    // }
  }

  expanded(id: any) {
    const requestId = id;
    this.getBuyer();
    // Make a call to retrieve request information with all offers to that request
    this.requestService.getRequest(requestId).subscribe((data: any) => {
      if (data.success) {
        this.offerList = data.offers;
        this.dataSourceOffers = data.offers;
        this.offerCart = this.buyerProfile['offerCart'];
      } else {
        console.log('could not fetch request data');
      }
    });
  }

  expandedOffer(id: any) {
    const sellerId = id;
    this.sellerService.getSellerById(sellerId).subscribe((data: any) => {
      if (data.success) {
        this.sellerInfo = data.seller;
        this.seller_firstName = data.seller.first_name;
        this.seller_lastName = data.seller.last_name;
      } else {
        console.log('Could not get seller info');
      }
    });
  }

  deleteRequestFunction(request_id_todelete) {
    //debugger;
    var request_delete;
    request_delete = {
      request_id: request_id_todelete
    };

    this.buyerService.deleteBuyerRequest(request_delete).subscribe((data: any) => {
      // debugger;
      if (data.success == false) {
        this.notifier.notify('error', data.message);
      } else {
        window.location.reload();
      }
    });

  }

  acceptOffer(element, offer_id, request_id) {
    const offerAccepted = {
      offer_ID: offer_id,
      offer_accepted: true,
      request_id: request_id
    };

    this.buyerService.offerAccepted(offerAccepted).subscribe((data: any) => {
      if (data.success) {
        this.notifier.notify('success', 'Offer was successfully accepted.');
        setTimeout(function() {
          window.location.reload();
        }, 2000);
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
