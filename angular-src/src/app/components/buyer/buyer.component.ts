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
  requestList: Object;
  loaded: Promise<boolean>;
  loading: Boolean;

  constructor(private registerService: RegisterService,
    private buyerService: BuyerService,
    private router: Router) { }

  ngOnInit() {
    this.loading = false;
    setTimeout(() => {
      this.loading = false;
      this.buyerService.getBuyerProfile().subscribe((profile: any) => {
        this.buyer = profile.data;
        this.loaded = Promise.resolve(true);
        this.loading = true;
      },
        err => {
          console.log(err);
          return false;
        });
    }, 1000);

    this.buyerService.getBuyerRequests().subscribe((requests: any) => {
      this.requestList = requests;
    });
  }

  // tslint:disable-next-line:member-ordering
  currentTab = 'requests';

   requests(currentTab) {
     this.currentTab = currentTab;
   }

   history(currentTab) {
     this.currentTab = currentTab;
   }

  refreshBuyer() {
    this.buyer = JSON.parse(localStorage.getItem('buyer'));
    if (this.buyer == null) {
      window.location.reload();
    } else {
      console.log(this.buyer);
    }
  }




}
