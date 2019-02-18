import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { BuyerService } from '../../../services/buyer.service';
import { NotifierService } from 'angular-notifier';
import {ChangeDetectorRef} from '@angular/core';

@Component({
  selector: 'app-buyer-cart',
  templateUrl: './buyer-cart.component.html',
  styleUrls: ['./buyer-cart.component.css']
})
export class BuyerCartComponent implements OnInit {
  buyer: Object;
  offersInCart: [String];
  emptyCart: Boolean;
  orderTotal: Number;
  orderFees: Number;
  offersPriceTotal: Number;
  removeItemNavbar = 0;
  private readonly notifier: NotifierService;
  constructor(private router: Router,
    private route: ActivatedRoute,
    private notifierService: NotifierService,
    private buyerService: BuyerService,
    private cd : ChangeDetectorRef) { this.notifier = notifierService;}

  ngOnInit() {
    window.scrollTo(0, 0);
    this.buyer = this.route.snapshot.data['buyer'];
    this.getCart();
    //this.offerid = this.buyer['data']['offerCart'];
  }

getCart() {
  this.buyerService.retrieveBuyerCart().subscribe((data: any) => {
    if (data.success) {
      this.emptyCart = false;
      this.offersInCart = data.offersInCart;
      this.offersPriceTotal = data.offerPriceTotal;
      this.orderFees = data.orderFees;
      this.orderTotal = data.orderTotal;
      console.log(this.offersInCart);
    } else {
      this.notifier.notify('warning', 'Must accept offers to view cart.');
      this.router.navigate(['/buyer']);
    }
  });
}
  removeOfferFromCart(offerid) {
    const offer_ID = {
      offerID : offerid
    }
    this.buyerService.removeOfferFromCart(offer_ID).subscribe((data: any) => {
      if (data.success)
      {
        console.log("offer removed from cart");
        this.removeItemNavbar = -1;
        var itemCountBefore = localStorage.getItem('buyerCart');
        var itemRemovedCount = parseInt(itemCountBefore) - 1;
        localStorage.setItem('buyerCart', itemRemovedCount.toString());
        this.notifier.notify('success', data.msg);
        this.getCart();
        //this.cd.detectChanges();
      } else {
      }
    });

  }
}
