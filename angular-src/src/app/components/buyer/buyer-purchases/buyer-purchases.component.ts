import { Component, OnInit, inject, Input, ViewChild } from '@angular/core';
import { BuyerService } from '../../../services/buyer.service';
import { RequestService } from '../../../services/request.service';
import { MatDialog, MatDialogConfig, MAT_DIALOG_DATA, MatDialogRef, MatRadioModule, MatRadioButton, MatTableDataSource, MatTab, MatSort, MatPaginator } from '@angular/material';
import { NotifierService } from 'angular-notifier';
import {animate, state, style, transition, trigger} from '@angular/animations';

export interface RequestElement {
  title: String;
  status: String;
  deadline: String;
  description: String;
  request_images: [String];
}

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
}

export interface OrderElement {

}

@Component({
  selector: 'app-buyer-purchases',
  templateUrl: './buyer-purchases.component.html',
  styleUrls: ['./buyer-purchases.component.css']
})
export class BuyerPurchasesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
