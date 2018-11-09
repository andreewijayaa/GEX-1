import { Component, OnInit } from '@angular/core';
import { RegisterService } from '../../services/register.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-buyer',
  templateUrl: './buyer.component.html',
  styleUrls: ['./buyer.component.css']
})
export class BuyerComponent implements OnInit {
  buyer:Object;

  constructor(private registerService:RegisterService,
              private router:Router) { }

  ngOnInit() {
    this.registerService.getBuyerProfile().subscribe((profile: any) => {
      this.buyer = profile.data;
      console.log(profile);
    },
    err => {
      console.log(err);
      return false;
    });
  }

  currentTab = 'requests';

  requests(currentTab){
    this.currentTab = currentTab;
  }

  history(currentTab){
    this.currentTab = currentTab;
  }

}
