/*
By: Omar
This component file is the main file that offers the seller navigation bar functionality in GEX.
*/
import { Component, OnInit, Input } from '@angular/core';
import { SellerService } from '../../../services/seller.service';
import { StoreFetchService } from '../../../services/storeFetch.service';
import { NotifierService } from 'angular-notifier';
import { Router, ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-seller-navbar',
  templateUrl: './seller-navbar.component.html',
  styleUrls: ['./seller-navbar.component.css']
})
export class SellerNavbarComponent implements OnInit {
  seller: any;
  private readonly notifier: NotifierService;
  @Input() logout: Boolean;
  @Input() seller_first_name = localStorage.getItem('sellerFirstName');
  @Input() seller_last_name = localStorage.getItem('sellerLastName');
  //@Input() seller_profile_pic = localStorage.getItem('sellerProfilePic');
  profile_image: any;
  seller_firstName: any;
  seller_lastName: any;

  constructor(private sellerService: SellerService,
    private storeFetchService: StoreFetchService,
    private notifierService: NotifierService,
    private router: Router,
    private titleService: Title,
    private route: ActivatedRoute) {      this.notifier = notifierService;}

  ngOnInit() {
    // This line of code sets the browser tab title when a user is navigating through the GEX application seller related pages.
    this.titleService.setTitle("Seller | Requiren");
    // this.sellerNavbar = this.route.snapshot.data['seller'];
    // this.sellerNavbar.firstName = this.sellerNavbar['data']['first_name'];
    // this.sellerNavbar.lastName = this.sellerNavbar['data']['last_name'];
    // this.seller = this.route.snapshot.data['seller'];
    //console.log(this.sellerNavbar.lastName);
    this.sellerService.getSellerProfile().subscribe((data:any) => {
      if (data.success) {
        this.seller = data.seller_found;
        this.profile_image = data.seller_found.profile_image;
        this.seller_firstName = data.seller_found.first_name;
        this.seller_lastName = data.seller_found.last_name;
      }
      else {
        console.log('Could not retrieve seller profile info for navbar.')
      }
    });
  }

  // This function logs out the current user when they click logout on the navbar. Every user, when they log in, gets stored locally so this funciton
  // goes into the local memory using the services developed in order to remove the current user so that if another user wishes to log on they can.
  // It also navigates the user to the correct page since they no longer have access to the seller pages once they log out.
  onLogoutClick() {
    this.sellerService.sellerLogout();
    this.storeFetchService.userLogout();
    this.notifier.notify('success', 'You are logged out');
    this.router.navigate(['/seller-login']);
    // window.location.reload();
    return false;
  }
}
