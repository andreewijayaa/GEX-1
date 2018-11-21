import { Component, OnInit } from '@angular/core';
import { BuyerService } from '../../../services/buyer.service';
import { SellerAccountComponent } from '../../seller/seller-account/seller-account.component';

@Component({
  selector: 'app-buyer-account',
  templateUrl: './buyer-account.component.html',
  styleUrls: ['./buyer-account.component.css']
})
export class BuyerAccountComponent implements OnInit {
  buyer: Object;

  constructor(private buyerService: BuyerService) { }

  ngOnInit() {
    this.buyerService.getBuyerProfile().subscribe((profile: any) => {
      this.buyer = profile.data;
    },
      err => {
        console.log(err);
        return false;
      });

      setTimeout(() => {
      }, 500);
  }
}
