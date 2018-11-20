import { Component, OnInit } from '@angular/core';
import {StoreFetchService} from '../../../services/storeFetch.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-buyer-account',
  templateUrl: './buyer-account.component.html',
  styleUrls: ['./buyer-account.component.css']
})
export class BuyerAccountComponent implements OnInit {
  buyer:Object;

  constructor(private storeFetchService:StoreFetchService, private router:Router) { }

  ngOnInit() {
    this.storeFetchService.getBuyerProfile().subscribe(profile => {
      this.buyer = profile["buyer"];
    },
  err => {
    console.log(err);
    return false;
  });

  }

}
