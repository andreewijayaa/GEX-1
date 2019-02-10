import { Component, OnInit } from '@angular/core';
import { RegisterService } from '../../services/register.service';
import { BuyerService } from '../../services/buyer.service';
import { Router, ActivatedRoute } from '@angular/router';

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
    private router: Router,
    private route: ActivatedRoute) { }

  // showing buyer info when buyer portal page loads - Bryan Vu

  ngOnInit() {
    this.buyer = this.route.snapshot.data['buyer'];
    this.buyerService.getBuyerRequests().subscribe((requests: any) => {
      this.requestList = requests;
    });
  }

  // tslint:disable-next-line:member-ordering


  refreshBuyer() {
    this.buyer = JSON.parse(localStorage.getItem('buyer'));
    if (this.buyer == null) {
     // window.location.reload();
    } else {
      console.log(this.buyer);
    }
  }
}
