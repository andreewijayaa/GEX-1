import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';
import { SellerService } from '../../../services/seller.service';
import { NotifierService } from 'angular-notifier';
@Component({
  selector: 'app-submit-offer',
  templateUrl: './submit-offer.component.html',
  styleUrls: ['./submit-offer.component.css']
})
export class SubmitOfferComponent implements OnInit {
  private readonly notifier: NotifierService;
  id: any;
  title: String;
  description: String;
  price: Number;

  constructor(private sellerService: SellerService,
    private route: ActivatedRoute,

    private notifierService: NotifierService,
    private router: Router) {
      this.notifier = notifierService;
    }

  // On initialization process of the webpage
  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params.id; // --> Name must match wanted parameter
      });

  }

  // Structure for submitting offer form
  submitOffer() {
    const offer = {
      title: this.title,
      description: this.description,
      price: this.price,
      request_ID: this.id
    };

    // Posting offer feature for seller, connect it to the service for back-end process
    this.sellerService.postOffer(offer, this.id).subscribe((data: any) => {
      if (data.success) { // if the data succeed to be posted
        this.notifier.notify('success', 'Your Offer was submitted!');
        this.router.navigate(['/seller']);
      } else { // if it fails
        this.notifier.notify('error', data.msg);
        this.router.navigate(['/seller/submit-offer/' + this.id]);
      }
    });

  }

}
