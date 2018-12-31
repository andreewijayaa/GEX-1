import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StoreFetchService } from '../../services/storeFetch.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private storeFetch: StoreFetchService,
    private router: Router) { 
    	
    }

  // ngOnInit runs when the home component gets called. This component/function first checks if the current user that is logged in is a buyer or seller account.
  // It will then navigate the user to the correct page.
  ngOnInit() {
  	if (this.storeFetch.buyerIsLoggedIn())
    {
    	this.router.navigate(['/buyer']);
    } else if (this.storeFetch.sellerIsLoggedIn()) {
    	this.router.navigate(['/seller']);
    }
  }

}
