import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { BuyerService } from '../../../services/buyer.service';

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
  offerid: any;
  removeItemNavbar = 0;

  constructor(private router: Router,
    private route: ActivatedRoute,
    private buyerService: BuyerService) { }

  ngOnInit() {
    
    this.buyer = this.route.snapshot.data['buyer'];
    
    //this.offerid = this.buyer['data']['offerCart'];
    /*
    this.buyerService.retrieveBuyerCart().subscribe((data: any) => {

      if (data.success) {
        this.emptyCart = false;
        this.offersInCart = data.offersInCart;
        this.offersPriceTotal = data.offersPriceTotal;
        this.orderFees = data.orderFees;
        this.orderTotal = data.orderTotal;
        console.log(this.offersInCart);
      } else {
        this.emptyCart = true;
      }
    });*/
  }
  ContinueCheckout() {

  }

  removeOfferFromCart() {
    /*
    const offer_ID = {
      offerID : this.offerid
    }
    this.buyerService.removeOfferFromCart(offer_ID).subscribe((data: any) => {
      if (data.success)
        console.log("offer removed from cart");
        this.removeItemNavbar = -1;
        var itemCountBefore = localStorage.getItem('buyerCart');
        var itemRemovedCount = parseInt(itemCountBefore) - 1;
        localStorage.setItem('buyerCart', itemRemovedCount.toString());
    });
    */
  }
}
