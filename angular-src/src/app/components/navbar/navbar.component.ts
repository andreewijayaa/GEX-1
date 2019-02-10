/*
By: Omar
The main navbar component file used to implement the main navigation bar in GEX. We used a basic navbar initially and edited it to function appropriately.
*/
import { Component, OnInit, Input } from '@angular/core';
import { RegisterService } from '../../services/register.service';
import { StoreFetchService } from '../../services/storeFetch.service';
import { Router, ActivatedRoute } from '@angular/router';
import { NotifierService } from 'angular-notifier';
import { ConditionFunc } from 'rxjs/internal/observable/generate';
import { Config } from 'protractor';
import { Title } from '@angular/platform-browser'
import { NONE_TYPE } from '@angular/compiler/src/output/output_ast';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  userType: String;
  buyerNavbar: Object;
  private readonly notifier: NotifierService;
  constructor(private registerService: RegisterService,
    private storeFetchService: StoreFetchService,
    private router: Router,
    private notifierService: NotifierService,
    private titleService: Title,
    private route: ActivatedRoute) { this.notifier = notifierService;}


  ngOnInit() {
    // This line of code sets the browser tab title when a user is navigating through the GEX application.
    this.titleService.setTitle("Requiren");

    if (this.storeFetchService.buyerIsLoggedIn()) {
      this.userType = "buyer";
      this.titleService.setTitle("Buyer | GEX");
    }
    else if (this.storeFetchService.sellerIsLoggedIn()) {
    	this.userType = "seller";
    }
    else {
      this.userType = "none";
    }
  }

}
