import { Component, OnInit } from '@angular/core';
import { RegisterService } from '../../services/register.service';
import { StoreFetchService } from '../../services/storeFetch.service';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';
import { ConditionFunc } from 'rxjs/internal/observable/generate';
import { Config } from 'protractor';
import { InputType } from 'zlib';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  buyer: Object;
  seller: Object;
  user: Number;

  constructor(private registerService: RegisterService,
    private storeFetchService: StoreFetchService,
    private router: Router,
    private flashMessage: FlashMessagesService) {
      this.user = this.storeFetchService.user;
      console.log(this.user);
    }

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
