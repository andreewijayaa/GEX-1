import { Component, OnInit } from '@angular/core';
import { SellerService } from '../../services/seller.service';

@Component({
  selector: 'app-seller',
  templateUrl: './seller.component.html',
  styleUrls: ['./seller.component.css']
})
export class SellerComponent implements OnInit {

  seller: Object;
  requestList: Object;

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

    this.sellerService.getSellerRequestsList().subscribe((requests: any) => {
      this.requestList = requests.data;
      console.log(requests.data.title);
    },
      err => {
        console.log(err);
        return false;
      });
  }

currentTab = 'requests';

requests(currentTab) {
  this.currentTab = currentTab;
}

history(currentTab) {
  this.currentTab = currentTab;
}
}
