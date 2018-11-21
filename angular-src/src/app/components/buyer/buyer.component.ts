import { Component, OnInit } from '@angular/core';
import { RegisterService } from '../../services/register.service';
import { BuyerService } from '../../services/buyer.service';
import { Router } from '@angular/router';
import { promise } from 'protractor';

@Component({
  selector: 'app-buyer',
  templateUrl: './buyer.component.html',
  styleUrls: ['./buyer.component.css']
})
export class BuyerComponent implements OnInit {
  buyer: Object;
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
  }
}
