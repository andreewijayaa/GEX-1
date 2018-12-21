// By Roni
// View & Add offered seller goods/services
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SellerService } from '../../../../services/seller.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Local } from 'protractor/built/driverProviders';

@Component({
  selector: 'app-seller-services',
  templateUrl: './seller-services.component.html',
  styleUrls: ['./seller-services.component.css']
})
export class SellerServicesComponent implements OnInit {
  // Temp codes for MVP - Kurgan
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
  code: Number;
  codeList: [Number];
  None: Boolean;
  codeNames: any[];

  // Used for the dropdown
	public onChange(event): void {  // event will give you full breif of action
    const newVal = event.target.value;
		this.code = newVal;
	}

  constructor(private sellerService: SellerService,
    private flashMessage: FlashMessagesService,
    private router: Router) { }

  // View seller current codes - Roni
  ngOnInit() {
    var LocalArray = new Array();
    this.None = false;
    // Get seller codes
    this.sellerService.getCode().subscribe((data: any) => {
      if (data.success) {
        if (data.codeList.length == 0) { // Seller does not have any codes yet
          this.None = true;
        } else {
          this.codeList = data.codeList;
          this.None = false;
          var i, j = 0;
          // Retrieve all seller current codes
          // FOR MVP ONLY, will find a better and suffiecent way to perform this
          for (i = 0; i < this.codeList.length; i++) {

            for (j = 0; j < this.codes.length; j++) {
              if (this.codes[j].code == this.codeList[i]) {
                LocalArray.push(this.codes[j].name);
            }
            }
          }
          this.codeNames = LocalArray;
        }
      }
    });
  }

  // Add new code to seller - Roni
  AddCode() {
    const code = {
      codes: this.code
    };

    this.sellerService.setNewCode(code).subscribe((data: any) => {
      if (data.success) {
        this.flashMessage.show('Your New Code was submitted!', { cssClass: 'alert-success', timeout: 4000 });
        this.router.navigate(['/seller/seller-services']);
      } else {
        this.flashMessage.show(data.msg, { cssClass: 'alert-danger', timeout: 3000 });
        this.router.navigate(['/seller/seller-services']);
      }
    });
  }
}
