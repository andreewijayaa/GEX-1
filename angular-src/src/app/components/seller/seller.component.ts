import { Component, OnInit } from '@angular/core';
import { SellerService } from '../../services/seller.service';
import { Variable } from '@angular/compiler/src/render3/r3_ast';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-seller',
  templateUrl: './seller.component.html',
  styleUrls: ['./seller.component.css']
})
export class SellerComponent implements OnInit {

  seller: any;
  requestList: Object;
  offerList: Object;
  activeRequests: Object;

  constructor(private sellerService: SellerService,
    private route: ActivatedRoute) { }

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

        this.sellerService.getActiveRequests().subscribe((requests: any) => {
          this.activeRequests = requests;
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
