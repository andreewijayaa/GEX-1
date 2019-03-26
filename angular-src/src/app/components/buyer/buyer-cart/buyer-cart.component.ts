import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { BuyerService } from '../../../services/buyer.service';
import { NotifierService } from 'angular-notifier';
import {ChangeDetectorRef} from '@angular/core';
import * as io from 'socket.io-client';

@Component({
  selector: 'app-buyer-cart',
  templateUrl: './buyer-cart.component.html',
  styleUrls: ['./buyer-cart.component.css']
})
export class BuyerCartComponent implements OnInit {
  socket;
  buyer: Object;
  offersInCart = [];
  emptyCart: Boolean;
  orderTotal: Number;
  orderFees: Number;
  offersPriceTotal: Number;
  offersShippingTotal: Number;
  removeItemNavbar = 0;
  private readonly notifier: NotifierService;
  constructor(private router: Router,
    private route: ActivatedRoute,
    private notifierService: NotifierService,
    private buyerService: BuyerService,
    private cd: ChangeDetectorRef) { this.notifier = notifierService; this.socket = io('http://localhost:3000'); }

  ngOnInit() {
    window.scrollTo(0, 0);
    this.getCart();
    this.socket.on('updatedBuyerCartInfo', () => {
      this.getCart();
    });
  }

getCart() {
  this.buyerService.retrieveBuyerCart().subscribe((data: any) => {
    if (data.success) {
      this.emptyCart = false;
      this.offersInCart = data.offersInCart;
      this.offersPriceTotal = data.offerPriceTotal;
      this.offersShippingTotal = data.offerShippingTotal;
      this.orderTotal = data.orderTotal;
    } else {
      this.notifier.notify('warning', 'Must accept offers to view cart.');
      this.router.navigate(['/buyer']);
    }
  });
}
  removeOfferFromCart(offerid) {
    const offerRemoved = {
      offer_ID: offerid,
      offer_removed: false
    };
    this.buyerService.offerRejected(offerRemoved).subscribe((data: any) => {
      if (data.success) {
        //console.log("Offer Removed Successful.");
      } else {
        //console.log("Offer Removed NOT Successful.");
      }
    });

    const offer_ID = {
      offerID : offerid
    };
    this.buyerService.removeOfferFromCart(offer_ID).subscribe((data: any) => {
      if (data.success) {
        this.notifier.notify('success', 'Offer successfully removed from your cart.');
      } else {
        this.notifier.notify('error', 'Unable to remove offer from your cart.');
      }
    });

  }
}
