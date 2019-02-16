import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-buyer-cart',
  templateUrl: './buyer-cart.component.html',
  styleUrls: ['./buyer-cart.component.css']
})
export class BuyerCartComponent implements OnInit {
  buyer: Object;
  constructor(private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.buyer = this.route.snapshot.data['buyer'];
    //if(this.buyer.offerCart != undefined){

   // }
  }


}
