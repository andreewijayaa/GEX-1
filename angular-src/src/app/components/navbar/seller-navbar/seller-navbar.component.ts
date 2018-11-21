import { Component, OnInit } from '@angular/core';
import { SellerService } from '../../../services/seller.service';
import { StoreFetchService } from '../../../services/storeFetch.service';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-seller-navbar',
  templateUrl: './seller-navbar.component.html',
  styleUrls: ['./seller-navbar.component.css']
})
export class SellerNavbarComponent implements OnInit {

  constructor(private sellerService: SellerService,
    private storeFetchService: StoreFetchService,
    private flashMessage: FlashMessagesService) { }

  ngOnInit() {
  }

  onLogoutClick() {
    window.location.reload();
    this.sellerService.sellerLogout();
    this.storeFetchService.userLogout();
    this.flashMessage.show('You are logged out', {
      cssClass: 'alert-success',
      timeout: 3000
    });
    return false;
  }
}
