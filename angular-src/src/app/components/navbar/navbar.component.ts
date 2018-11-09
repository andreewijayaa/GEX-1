import { Component, OnInit } from '@angular/core';
import { RegisterService } from '../../services/register.service';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';
import { ConditionFunc } from 'rxjs/internal/observable/generate';
import { Config } from 'protractor';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  buyer: Object;
  seller: Object;
  user: String;

  constructor(private registerService:RegisterService,
              private router:Router,
              private flashMessage:FlashMessagesService) { }

  ngOnInit() {

  }

  onLogoutClick() {
    this.registerService.userLogout();
    this.flashMessage.show('You are logged out', {
      cssClass:'alert-success',
      timeout:3000
    });

    /*
    var userType = document.getElementById("userType").innerHTML;
    if (userType == "Buyer") {
      this.router.navigate(['/login']);
    }
    else if (userType == "Seller") {
      this.router.navigate(['/sellerLogin']);
    }
    userType = "";
    document.getElementById("userType").innerHTML = userType; */
    return false;
  }
}
