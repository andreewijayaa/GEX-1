import { Component, OnInit } from '@angular/core';
import { SellerService } from '../../services/seller.service';
import { Variable } from '@angular/compiler/src/render3/r3_ast';

@Component({
  selector: 'app-seller',
  templateUrl: './seller.component.html',
  styleUrls: ['./seller.component.css']
})
export class SellerComponent implements OnInit {

  seller: Object;
  requestList: Object;
  //loaded_seller: Promise<boolean>;
  //loaded_list: Promise<boolean>;
  //loading: Boolean;
  offerList: Object;
  title0: Object;
  title1: Object;
  title2: Object;
  title3: Object;
  title4: Object;
  title5: Object;
  title6: Object;
  title7: Object;
  title8: Object;
  title9: Object;

  constructor(private sellerService: SellerService) { }

  ngOnInit() {

      this.sellerService.getSellerProfile().subscribe((profile: any) => {
        this.seller = profile.data;
        //this.loaded_seller = Promise.resolve(true);
      },
        err => {
          console.log(err);
          return false;
        });

      this.sellerService.getSellerOffersHistory().subscribe((offers: any) => {
        this.offerList = offers;
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
