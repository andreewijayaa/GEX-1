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

  // Variables declaration
  seller: any;
  requestList: Object;
  offerList: Object;
  activeRequests: Object;
  accountSetup: Number;
  accountSetupBool: Boolean = false;

  constructor(private sellerService: SellerService,
    private route: ActivatedRoute) { }

  // On initialization process of the webpage
  ngOnInit() {
      // Fetching seller profile information from the service to be used in the webpage
      this.sellerService.getSellerProfile().subscribe((profile: any) => {
        this.seller = profile.data;
        
        if (this.seller.user_account_setup[0]  
          || this.seller.user_account_setup[1] 
          || this.seller.user_account_setup[2]) {
          this.accountSetupBool = true;
          // Fetching seller offer history from the s ervice to be used in the webpage
        this.sellerService.getSellerOffersHistory().subscribe((offers: any) => {
          this.offerList = offers;
        },
          err => {
            console.log(err);
            return false;
          });
          // Fetching seller active requests from the service to be used in the webpage
          this.sellerService.getActiveRequests().subscribe((requests: any) => {
            this.activeRequests = requests;
          },
            err => {
              console.log(err);
              return false;
            });
        } else { // DISPLAY THE BAR ON THE MAIN PAGE
          let count;
          for (let i = 0; i < 3; i++) {
            if (this.seller.user_account_setup[i] === true) {
              count++;
            }
          }
          this.accountSetup = count / 100;
        }

      },
        err => {
          console.log(err);
          return false;
        });
      // Check if account has been setup
  }

  // Tab first configuration
  currentTab = 'requests';

  // when the user changes tabs
  requests(currentTab) {
    this.currentTab = currentTab;
  }

  history(currentTab) {
    this.currentTab = currentTab;
  }

  archive(currentTab) {
    this.currentTab = currentTab;
  }
}
