import { Component, OnInit, Input } from '@angular/core';
import { StoreFetchService } from '../../../services/storeFetch.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';

@Component({
  selector: 'app-buyer-navbar',
  templateUrl: './buyer-navbar.component.html',
  styleUrls: ['./buyer-navbar.component.css']
})
export class BuyerNavbarComponent implements OnInit {

  constructor(private storeFetchService: StoreFetchService,
    private router: Router,
    private flashMessage: FlashMessagesService) { }

  ngOnInit() {
  }

  onLogoutClick() {
    this.storeFetchService.userLogout();
    this.flashMessage.show('You are logged out', {
      cssClass: 'alert-success',
      timeout: 3000
    });
    return false;
  }
}
