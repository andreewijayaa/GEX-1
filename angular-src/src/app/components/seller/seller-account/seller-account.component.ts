import { Component, OnInit } from '@angular/core';
import { SellerService } from '../../../services/seller.service';

@Component({
  selector: 'app-seller-account',
  templateUrl: './seller-account.component.html',
  styleUrls: ['./seller-account.component.css']
})
export class SellerAccountComponent implements OnInit {
  seller: Object;

  constructor(private sellerService: SellerService) { }

  ngOnInit() {
    this.sellerService.getSellerProfile().subscribe((profile: any) => {
      this.seller = profile.data;
      console.log(profile.data.account_type);
    },
      err => {
        console.log(err);
        return false;
      });
  }

}
