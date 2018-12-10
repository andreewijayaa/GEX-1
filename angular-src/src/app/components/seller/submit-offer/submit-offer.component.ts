import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';
import { SellerService } from '../../../services/seller.service';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-submit-offer',
  templateUrl: './submit-offer.component.html',
  styleUrls: ['./submit-offer.component.css']
})
export class SubmitOfferComponent implements OnInit {

  id: any;
  title: String;
  description: String;
  price: Number;

  constructor(private sellerService: SellerService,
    private route: ActivatedRoute,
    private flashMessage: FlashMessagesService,
    private router: Router) { }

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
        this.flashMessage.show('Your Request was submitted!', { cssClass: 'alert-success', timeout: 4000 });
        this.router.navigate(['/seller']);
      } else { // if it fails
        this.flashMessage.show(data.msg, { cssClass: 'alert-danger', timeout: 3000 });
        this.router.navigate(['/seller/submit-offer/' + this.id]);
      }
    });

  }

}
