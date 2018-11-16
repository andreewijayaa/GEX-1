import { Component, OnInit } from '@angular/core';
import {BuyerService} from '../../../services/buyer.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-buyer-account',
  templateUrl: './buyer-account.component.html',
  styleUrls: ['./buyer-account.component.css']
})
export class BuyerAccountComponent implements OnInit {
  buyer:Object;

  constructor(private buyerService:BuyerService, private router:Router) { }
  
  ngOnInit() {

  }

}
