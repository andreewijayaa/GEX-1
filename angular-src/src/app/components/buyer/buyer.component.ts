import { Component, OnInit } from '@angular/core';
import { RegisterService } from '../../services/register.service';
import { BuyerService } from '../../services/buyer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-buyer',
  templateUrl: './buyer.component.html',
  styleUrls: ['./buyer.component.css']
})
export class BuyerComponent implements OnInit {
  buyer: Object;

  constructor(private registerService: RegisterService,
    private buyerService: BuyerService,
    private router: Router) { }

  ngOnInit() {
    /*console.log(this.buyerService.getBuyerProfile());
    this.buyerService.getBuyerProfile().subscribe((profile: any) => {
      this.buyer = profile.data;
      //console.log(profile.data.account_type);
    },
      err => {
        console.log(err);
        return false;
      });
      // const currentTab = 'requests';

      // requests(currentTab) {
      //   this.currentTab = currentTab;
      // }
    
      // history(currentTab) {
      //   this.currentTab = currentTab;
      // }
      */
    console.log("hew");
    setTimeout(() => {
      this.refreshBuyer()
    }, 500);
  }

  refreshBuyer() {
    this.buyer = JSON.parse(localStorage.getItem('buyer'));
    if (this.buyer == null) {
      window.location.reload();
    }
    else {
      console.log(this.buyer);
    }
  }




}
