import { Component, OnInit } from '@angular/core';
import { BuyerService } from '../../../services/buyer.service';

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
      console.log(profile.data.account_type);
    },
      err => {
        console.log(err);
        return false;
      });
  }

}
