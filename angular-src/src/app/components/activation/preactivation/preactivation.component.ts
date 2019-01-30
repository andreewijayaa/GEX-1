import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';
import { StoreFetchService } from '../../../services/storeFetch.service';
@Component({
  selector: 'app-preactivation',
  templateUrl: './preactivation.component.html',
  styleUrls: ['./preactivation.component.css']
})
export class PreactivationComponent implements OnInit {

  constructor(private router: Router,
    private storeFetchService: StoreFetchService) { }

  ngOnInit() {
    // if (this.storeFetchService.buyerIsLoggedIn()) {
    //   this.router.navigate(['/buyer']);
    // }
    // else if (this.storeFetchService.sellerIsLoggedIn()) {
    //   this.router.navigate(['/seller']);
    // }
    // else {
    //   this.router.navigate(['/']);
    // }
  }

}
