import { Component, OnInit } from '@angular/core';
import {FlashMessagesService} from 'angular2-flash-messages';
import {Router} from '@angular/router';
import { BuyerService } from '../../../services/buyer.service';

@Component({
  selector: 'app-make-request',
  templateUrl: './make-request.component.html',
  styleUrls: ['./make-request.component.css']
})
export class MakeRequestComponent implements OnInit {
  title: String;
  code: String;
  description: String;

  constructor(private buyerService: BuyerService,
    private flashMessage: FlashMessagesService,
              private router: Router ) { }

  ngOnInit() {

  }
  onRequestSubmit() {
    const request = {
      title: this.title,
      code: this.code,
      description: this.description
    };

    // Register Buyer
    this.buyerService.postBuyerRequest(request).subscribe((data: any) => {
      if (data.success) {
        this.flashMessage.show('Your Request was submitted!', {cssClass: 'alert-success', timeout: 4000});
        this.router.navigate(['/buyer']);

      } else {
        this.flashMessage.show(data.msg, {cssClass: 'alert-danger', timeout: 3000});
        this.router.navigate(['/buyer/make-request']);
      }
    });
  }

}
