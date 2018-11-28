import { Component, OnInit } from '@angular/core';
import { SellerService } from '../../../services/seller.service';
import { StoreFetchService } from '../../../services/storeFetch.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser'


@Component({
  selector: 'app-seller-navbar',
  templateUrl: './seller-navbar.component.html',
  styleUrls: ['./seller-navbar.component.css']
})
export class SellerNavbarComponent implements OnInit {

  constructor(private sellerService: SellerService,
    private storeFetchService: StoreFetchService,
    private flashMessage: FlashMessagesService,
    private router: Router,
    private titleService: Title) { }

  ngOnInit() {
    this.titleService.setTitle("Seller | GEX");
  }

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
