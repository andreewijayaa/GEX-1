import { Component, OnInit } from '@angular/core';
import { RegisterService } from '../../services/register.service';
import { StoreFetchService } from '../../services/storeFetch.service';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';
import { ConditionFunc } from 'rxjs/internal/observable/generate';
import { Config } from 'protractor';
import { Title } from '@angular/platform-browser'


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private registerService: RegisterService,
    private storeFetchService: StoreFetchService,
    private router: Router,
    private flashMessage: FlashMessagesService,
    private titleService: Title) { }
    

  ngOnInit() {
    this.titleService.setTitle("GEX");
  }

}
