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
  loadContent: Boolean;

  constructor(private registerService: RegisterService,
    private buyerService: BuyerService,
    private router: Router) { }

  ngOnInit() {
    this.loadContent = false;
    this.buyerService.getBuyerProfile().subscribe((profile: any) => {
      this.buyer = profile.data;
      console.log(this.buyer);
    },
      err => {
        console.log(err);
        return false;
      });
    setTimeout(() => {
      this.loadContent = true;
    }, 1000);
  }




}
