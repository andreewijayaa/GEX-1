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
  codes = [
    { code: 95141601, name: 'House' },
    { code: 95141602, name: 'Mobile Home' },
    { code: 91111603, name: 'Cooking/Food Prep'},
    { code: 82141505, name: 'Computer Generated Design'},
    { code: 82121503, name: 'Digital Printing'},
    { code: 82101503, name: 'Magazine Advertising'},
    { code: 50443200, name: 'Frozen Corn'},
    { code: 42131700, name: 'Surgical Textiles'},
    { code: 30111700, name: 'Plasters'},
    { code: 23241600, name: 'Metal Cutting Tools'},
  ];
  title: String;
  code: Number;
  description: String;


  public onChange(event): void {  // event will give you full breif of action
    const newVal = event.target.value;
    this.code = newVal;
  }

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
