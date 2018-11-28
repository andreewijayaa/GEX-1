import { Component, OnInit, Input } from '@angular/core';
import { StoreFetchService } from '../../../services/storeFetch.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';
import { BuyerService } from '../../../services/buyer.service';
import { Title } from '@angular/platform-browser'

@Component({
  selector: 'app-buyer-navbar',
  templateUrl: './buyer-navbar.component.html',
  styleUrls: ['./buyer-navbar.component.css']
})
export class BuyerNavbarComponent implements OnInit {

  constructor(private storeFetchService: StoreFetchService,
    private router: Router,
    private flashMessage: FlashMessagesService,
    private buyerService: BuyerService,
    private titleService: Title) { }

  ngOnInit() {
    this.titleService.setTitle("Buyer | GEX");
  }

  onLogoutClick() {
    this.buyerService.buyerLogout();
    this.storeFetchService.userLogout();
    this.flashMessage.show('You are logged out', {
      cssClass: 'alert-success',
      timeout: 3000
    });
    this.router.navigate(['/login']);
    window.location.reload();
    return false;
  }
}
