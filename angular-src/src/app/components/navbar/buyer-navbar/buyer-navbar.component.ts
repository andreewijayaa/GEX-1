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

interface IBuyer {
  firstName: String,
  lastName: String,
}

@Component({
  selector: 'app-buyer-navbar',
  templateUrl: './buyer-navbar.component.html',
  styleUrls: ['./buyer-navbar.component.css']
})
export class BuyerNavbarComponent implements OnInit {
  private readonly notifier: NotifierService;
  @Input() logout: Boolean;
  @Input() itemAdded_RemovedCart = 0;
  @Input() buyer_first_name = localStorage.getItem('buyerFirstName');
  @Input() buyer_last_name = localStorage.getItem('buyerLastName');
  buyerNavbar: IBuyer;
  totalItemsCart = parseInt(localStorage.getItem('buyerCart'), 10);

  constructor(private storeFetchService: StoreFetchService,
    private router: Router,
    private notifierService: NotifierService,
    private buyerService: BuyerService,
    private titleService: Title,
    private route: ActivatedRoute) {
      this.notifier = notifierService;
    }

  ngOnInit() {
    // This line of code sets the browser tab title when a user is navigating through the GEX application buyer related pages.
    this.titleService.setTitle("Buyer | Requiren");
    this.buyerNavbar = this.route.snapshot.data['buyer'];
    this.buyerNavbar.firstName = this.buyerNavbar['data']['first_name'];
    this.buyerNavbar.lastName = this.buyerNavbar['data']['last_name'];
    //this.buyerNavbar.cartItemBadge = localStorage.getItem('buyerCart');
    //console.log(this.counter.length);
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
