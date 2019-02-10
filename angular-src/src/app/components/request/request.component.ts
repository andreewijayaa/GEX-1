// By Roni
// Request View Page
import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';
import { RequestService } from '../../services/request.service';
import { NotifierService } from 'angular-notifier';
import { StoreFetchService } from '../../services/storeFetch.service';
import { request } from 'https';
@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.css']
})
export class RequestComponent implements OnInit {
  private readonly notifier: NotifierService;
  constructor(private route: ActivatedRoute,
    private requestService: RequestService,
    private notifierService: NotifierService,
        private router: Router,
    private storeFetchService: StoreFetchService) { this.notifier = notifierService; }
  id: any;
  request: Object;
  offerList: Object;
  status: Boolean;
  ngOnInit() {

    if (this.storeFetchService.buyerIsLoggedIn() || this.storeFetchService.sellerIsLoggedIn()) {
    } else {
      this.notifier.notify('error', 'Please login to view request.');
      return this.router.navigate(['/login']);
    }

     // get URL parameters
     this.route.params.subscribe(params => {
      this.id = params.id;

       // --> Extract the id pass with URL
      // Make a call to retrieve request information with all offers to that request
      this.requestService.getRequest(this.id).subscribe((data: any) => {
        if (data.success) {
          this.request = data.request;
          this.offerList = data.offers;
          // used to distinguish between if buyer is viewing the request or a seller
          // to limit access
          if (data.status === 0) {
            this.status = true; // Buyer
          } else if (data.status === 1) {
            this.status = false; // Seller
          }
          else {
            this.notifier.notify('success', data.msg);
            this.router.navigate(['/']);
          }
        } else {
          this.notifier.notify('error', data.msg);
          this.router.navigate(['/']);
        }
        });
      });

    }
}
