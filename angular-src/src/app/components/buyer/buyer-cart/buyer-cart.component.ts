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
  constructor(private router: Router,
    private route: ActivatedRoute,
    private buyerService: BuyerService) { }

  ngOnInit() {
    this.buyer = this.route.snapshot.data['buyer'];
    this.buyerService.retrieveBuyerCart().subscribe((data: any) => {
      if (data.success) {
        this.emptyCart = false;
        this.offersInCart = data.offersInCart;
        console.log(this.offersInCart);
      } else {
        this.emptyCart = true;

      }
    });
  }
  ContinueCheckout() {

  }
}
