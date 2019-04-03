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
  spinner: Boolean;

  constructor(private buyerService: BuyerService,
    private requestService: RequestService,
    notiferService: NotifierService,
    private route: ActivatedRoute,
    private router: Router) {
      this.notifier = notiferService;
    }

  ngOnInit() {
    this.spinner = true;
    this.getOrders();
  }

  getOrders() {
    this.buyerService.getBuyerPurchases().subscribe((data: any) => {
      if (data.success) {
        if (data.purchases.length === 0 || data.purchases === undefined || data.purchases[0] === '') {
          this.spinner = false;
          this.router.navigate(['/buyer']);
          this.notifier.notify('error', 'No purchases have been made yet.');
        }
        data.purchases.forEach(purchase => {
          this.buyerService.getOrderDetails(purchase).subscribe((data: any) => {
            if (data.success) {
              this.ordersList.push(data.orderFound);
              this.spinner = false;
            } else {
              console.log('Could not get order details');
            }
          });
        });
      } else if (!data.success) {
        console.log('error');
      }
    });
  }

}
