import { Component, OnInit, ViewChild } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { SellerService } from '../../../services/seller.service';
import { NotifierService } from 'angular-notifier';
import { MatDialog, MatTableDataSource, MatSort, MatPaginator } from '@angular/material';
import { RequestService } from '../../../services/request.service';
import { Router, ActivatedRoute } from '@angular/router';
import * as io from 'socket.io-client';

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
  offer_images: [String];
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
  requestList = [];
  offerList = [];
  spinner: Boolean;

  dataSourceRequests = new MatTableDataSource(this.requestList);
  dataSourceOffers = new MatTableDataSource(this.offerList);
  columnsToGetRequestInfo = ['title', 'status', 'offerCount', 'deadline'];
  columnsToGetOfferInfo = ['title', 'created_at', 'shippingPrice', 'price'];
  expandedRequestElement: RequestElement | null;
  expandedOfferElement: OfferElement | null;
  displayOfferColumns: any; // Added because of ng build --prod was giving error
  searchRequestFilter: any;// Added because of ng build --prod was giving error
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
    this.getSeller();
    this.socket.on('updateSellerProfileInfo', () => {
      this.getSeller();
    });
  }

  getSeller() {

  }

}
