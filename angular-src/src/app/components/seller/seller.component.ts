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
  loaded_seller: Promise<boolean>;
  loaded_list: Promise<boolean>;
  loading: Boolean;

  constructor(private sellerService: SellerService) { }

  ngOnInit() {
    this.loading = false;
    setTimeout(() => {
      this.sellerService.getSellerProfile().subscribe((profile: any) => {
        this.seller = profile.data;
        //console.log(profile.data.account_type);
        this.loaded_seller = Promise.resolve(true);
      },
        err => {
          console.log(err);
          return false;
        });
  
      this.sellerService.getSellerRequestsList().subscribe((requests: any) => {
        this.requestList = requests.data;
        //console.log(requests.data.title);
        this.loaded_list = Promise.resolve(true);
      },
        err => {
          console.log(err);
          return false;
        });
      this.loading = true;
    }, 2000);
  }

  currentTab = 'requests';

  requests(currentTab) {
    this.currentTab = currentTab;
  }

  history(currentTab) {
    this.currentTab = currentTab;
  }
}
