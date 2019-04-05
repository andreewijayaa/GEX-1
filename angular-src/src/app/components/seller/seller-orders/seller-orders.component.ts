import { Component, OnInit, ViewChild } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { SellerService } from '../../../services/seller.service';
import { NotifierService } from 'angular-notifier';
import { MatDialog, MatTableDataSource, MatSort, MatPaginator, MatTab } from '@angular/material';
import { RequestService } from '../../../services/request.service';
import { Router, ActivatedRoute } from '@angular/router';
import * as io from 'socket.io-client';

export interface OfferElement {
  title: String;
  description: String;
  price: String;
  shippingPrice: String;
  offerStatus: String;
  offerAccepted: String;
  created_at: Date;
  request_ID: String;
  expected_completion: String;
  list_of_sellers_submitted_offers: [String];
  offer_images: [String];
  shippingCo: String;
  trackingNumber: String;
}

@Component({
  selector: 'app-seller-orders',
  templateUrl: './seller-orders.component.html',
  styleUrls: ['./seller-orders.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0', display: 'none'})),
      state('expanded', style({})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class SellerOrdersComponent implements OnInit {
  socket;
  private readonly notifier: NotifierService;
  offerList = [];
  objectList = [];
  spinner: Boolean;

  dataSourceOffers = new MatTableDataSource(this.offerList);
  displayOfferColumns = ['title', 'created_at', 'offerStatus', 'shippingPrice', 'price'];
  expandedOfferElement: OfferElement | null;
  @ViewChild(MatPaginator) offerPaginator: MatPaginator;
  @ViewChild(MatSort) offerSort: MatSort;

  constructor(private router: Router,
    private route: ActivatedRoute,
    private requestService: RequestService,
    private notifierService: NotifierService,
    private sellerService: SellerService,
    private dialog: MatDialog) { this.notifier = notifierService;
      if (process.env.NODE_ENV === 'development') {
        this.socket = io('http://localhost:3000');
      } else {
        this.socket = io();
      } }

  ngOnInit() {
    this.spinner = true;
    this.getSellerPurchasedOffers();
    this.socket.on('updateSellerProfileInfo', () => {
      this.getSellerPurchasedOffers();
    });
  }

  getSellerPurchasedOffers() {
    this.sellerService.getPurchasedOffers().subscribe((data: any) => {
      if (data.success) {
        data.arrayOffer.forEach(item => {
          if (item !== undefined) {
            this.offerList.push(item.offer);
          }
        });
        this.dataSourceOffers = new MatTableDataSource(this.offerList);
      } else {
        console.log('Could not fetch purchased offers');
      }
    });
  }

  expandedOffer() {
    this.objectList = [];
    this.sellerService.getPurchasedOffers().subscribe((data: any) => {
      if (data.success) {
        data.arrayOffer.forEach(data => {
          if (data !== undefined) {
            this.objectList.push(data);
          }
        });
        console.log(this.objectList);
      } else {
        console.log('Could not fetch offer purchase info');
      }
    });
  }

  searchPurchasedOfferFilter(filterValue: string) {
    this.dataSourceOffers.filter = filterValue.trim().toLowerCase();
    if (this.dataSourceOffers.paginator) {
       this.dataSourceOffers.paginator.firstPage();
     }
  }
}
