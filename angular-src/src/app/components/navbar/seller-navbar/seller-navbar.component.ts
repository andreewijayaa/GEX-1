/*
By: Omar
This component file is the main file that offers the seller navigation bar functionality in GEX.
*/
import { Component, OnInit, Input } from '@angular/core';
import { SellerService } from '../../../services/seller.service';
import { StoreFetchService } from '../../../services/storeFetch.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router, ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser'

@Component({
  selector: 'app-seller-navbar',
  templateUrl: './seller-navbar.component.html',
  styleUrls: ['./seller-navbar.component.css']
})
export class SellerNavbarComponent implements OnInit {
  sellerNavbar: Object;
  @Input() logout: Boolean;

  constructor(private sellerService: SellerService,
    private storeFetchService: StoreFetchService,
    private flashMessage: FlashMessagesService,
    private router: Router,
    private titleService: Title,
    private route: ActivatedRoute) { }

  ngOnInit() {
    // This line of code sets the browser tab title when a user is navigating through the GEX application seller related pages.
    this.titleService.setTitle("Seller | GEX");
    this.sellerNavbar = this.route.snapshot.data['seller']
  }

  // This function logs out the current user when they click logout on the navbar. Every user, when they log in, gets stored locally so this funciton 
  // goes into the local memory using the services developed in order to remove the current user so that if another user wishes to log on they can.
  // It also navigates the user to the correct page since they no longer have access to the seller pages once they log out.
  onLogoutClick() {
    this.sellerService.sellerLogout();
    this.storeFetchService.userLogout();
    this.flashMessage.show('You are logged out', {
      cssClass: 'alert-success',
      timeout: 3000
    });
    this.router.navigate(['/seller-login']);
    window.location.reload();
    return false;
  }
}
