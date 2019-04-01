import { Component, OnInit, inject, Input, ViewChild } from '@angular/core';
import { BuyerService } from '../../../services/buyer.service';
import { RequestService } from '../../../services/request.service';
import { MatDialog, MatDialogConfig, MAT_DIALOG_DATA, MatDialogRef, MatRadioModule, MatRadioButton, MatTableDataSource, MatTab, MatSort, MatPaginator } from '@angular/material';
import { NotifierService } from 'angular-notifier';
import {animate, state, style, transition, trigger} from '@angular/animations';
import { ActivatedRoute, Router, Params } from '@angular/router';


@Component({
  selector: 'app-buyer-purchases',
  templateUrl: './buyer-purchases.component.html',
  styleUrls: ['./buyer-purchases.component.css']
})
export class BuyerPurchasesComponent implements OnInit {
  private readonly notifier: NotifierService;
  ordersList = [];

  constructor(private buyerService: BuyerService,
    private requestService: RequestService,
    notiferService: NotifierService,
    private route: ActivatedRoute,
    private router: Router) {
      this.notifier = notiferService;
    }

  ngOnInit() {
    this.getOrders();
  }

  getOrders() {
    this.buyerService.getBuyerPurchases().subscribe((data: any) => {
      if (data.success) {
        console.log(data.purchases);
        data.purchases.forEach(purchase => {
          this.buyerService.getOrderDetails(purchase).subscribe((data: any) => {
            if (data.success) {
              this.ordersList.push(data.orderFound);
            } else {
              console.log('Could not get order details');
            }
          });
        });
      } else {
        console.log('error');
      }
    });
    console.log(this.ordersList);
  }

}
