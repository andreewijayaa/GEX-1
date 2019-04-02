/*
By: Omar
This component file is the main file that offers the buyer navigation bar functionality in GEX.
*/
import { Component, OnInit, Input } from '@angular/core';
import { StoreFetchService } from '../../../services/storeFetch.service';
import { NotifierService } from 'angular-notifier';
import { Router, ActivatedRoute } from '@angular/router';
import { BuyerService } from '../../../services/buyer.service';
import { Title } from '@angular/platform-browser';
import * as io from 'socket.io-client';

@Component({
  selector: 'app-buyer-navbar',
  templateUrl: './buyer-navbar.component.html',
  styleUrls: ['./buyer-navbar.component.css']
})
export class BuyerNavbarComponent implements OnInit {
  private readonly notifier: NotifierService;
  socket;
  buyer: any;
  @Input() logout: Boolean;
  profile_image: any;
  buyer_firstName: any;
  buyer_lastName: any;
  buyer_cart: any = {};

  constructor(private storeFetchService: StoreFetchService,
    private router: Router,
    private notifierService: NotifierService,
    private buyerService: BuyerService,
    private titleService: Title,
    private route: ActivatedRoute) {
      this.notifier = notifierService;
      if (process.env.NODE_ENV === 'development') {
        this.socket = io('http://localhost:3000');
      } else {
        this.socket = io();
      }
    }

  ngOnInit() {
    // This line of code sets the browser tab title when a user is navigating through the GEX application buyer related pages.
    this.titleService.setTitle('Buyer | Requiren');
    this.buyer_cart = [];
    this.getBuyerProfile();
    this.socket.on('updatedBuyerProfileInfo', () => {
      this.getBuyerProfile();
    });
    this.socket.on('updatedBuyerCartInfo', () => {
      this.getBuyerProfile();
    });
  }

  getBuyerProfile() {
    this.buyerService.getBuyerProfile().subscribe((data: any) => {
      if (data.success) {
        this.buyer_firstName = data.buyer_found.first_name;
        this.buyer_lastName = data.buyer_found.last_name;
        this.profile_image = data.buyer_found.profile_image;
        this.buyer_cart = data.buyer_found.offerCart;
      } else {
        console.log('Could not retrieve buyer profile info for navbar.');
      }
    });
  }

  // This function logs out the current user when they click logout on the navbar. Every user, when they log in, gets stored locally so this funciton
  // goes into the local memory using the services developed in order to remove the current user so that if another user wishes to log on they can.
  // It also navigates the user to the correct page since they no longer have access to the buyer pages once they log out.
  onLogoutClick() {
    this.buyerService.buyerLogout();
    this.storeFetchService.userLogout();
    this.notifier.notify('success', 'You are logged out');
    this.router.navigate(['/login']);
    // window.location.reload();
    return false;
  }
}
