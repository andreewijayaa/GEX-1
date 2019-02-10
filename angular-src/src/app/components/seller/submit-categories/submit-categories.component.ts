import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';
import { SellerService } from '../../../services/seller.service';
import { BP_PREFIX } from 'blocking-proxy/built/lib/blockingproxy';

@Component({
  selector: 'app-submit-categories',
  templateUrl: './submit-categories.component.html',
  styleUrls: ['./submit-categories.component.css']
})
export class SubmitCategoriesComponent implements OnInit {

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
    { code: 78965422, name: 'Jewelry'},
    { code: 78965423, name: 'Necklaces (Jewelry)'},
    { code: 78965424, name: 'Rings (Jewelry)'},
    { code: 78965425, name: 'Earrings (Jewelry)'},
    { code: 68977451, name: 'Dolls'},
    { code: 67887941, name: 'Sculptures'},
    { code: 62145331, name: 'Scarves'},
    { code: 54887921, name: 'Blankets'},
    { code: 52871151, name: 'Socks'},
    { code: 50360051, name: 'Pencils'},
    { code: 49605401, name: 'Painting'},
    { code: 49605402, name: 'Oil (Painting)'},
    { code: 49605403, name: 'Watercolor (Painting)'},
    { code: 49605404, name: 'Acrlyic (Painting)'}
  ];
  code: Number;
  codeList: [Number];
  None: Boolean;
  codeNames: any[];
  first_name: String;
  last_name: String;
  street_address: String;
  city: String;
  country: String;
  state_province: String;
  postal_code: String;
  description: any;
  success1: Boolean;
  success2: Boolean;

  constructor(private sellerService: SellerService,
    private route: ActivatedRoute,
    private flashMessage: FlashMessagesService,
    private router: Router) { }

  // Used for the dropdown
  public onChange(event): void {  // event will give you full breif of action
    const newVal = event.target.value;
    this.code = newVal;
  }

  // On initialization process of the webpage
  ngOnInit() {
    var LocalArray = new Array();
    this.None = false;
    // Get seller codes
    this.sellerService.getCode().subscribe((data: any) => {
      if (data.success) {
        if (data.codeList.length === 0) { // Seller does not have any codes yet
          this.None = true;
        } else {
          this.codeList = data.codeList;
          this.None = false;
          var i, j = 0;
          // Retrieve all seller current codes
          // FOR MVP ONLY, will find a better and suffiecent way to perform this
          for (i = 0; i < this.codeList.length; i++) {

            for (j = 0; j < this.codes.length; j++) {
              if (this.codes[j].code === this.codeList[i]) {
                LocalArray.push(this.codes[j].name);
            }
            }
          }
          this.codeNames = LocalArray;
        }
      }
    });
  }

  // Checking which checkboxes are checked and upload the code - By: Andre Wijaya
  AddCode() {
    // House
    var element = <HTMLInputElement> document.getElementById('95141601');
    if (element.checked === true) {
      this.code = Number(element.value);
      this.uploadCode();
    }

    // Mobile Home
    var element = <HTMLInputElement> document.getElementById('95141602');
    if (element.checked === true) {
      this.code = Number(element.value);
      this.uploadCode();
    }

    // Cooking/Food Prep
    var element = <HTMLInputElement> document.getElementById('91111603');
    if (element.checked === true) {
      this.code = Number(element.value);
      this.uploadCode();
    }

    // Jewelry
    var element = <HTMLInputElement> document.getElementById('78965422');
    if (element.checked === true) {
      this.code = Number(element.value);
      this.uploadCode();
    }

    // Necklaces (Jewelry)
    var element = <HTMLInputElement> document.getElementById('78965423');
    if (element.checked === true) {
      this.code = Number(element.value);
      this.uploadCode();
    }

    // Rings (Jewelry)
    var element = <HTMLInputElement> document.getElementById('789654224');
    if (element.checked === true) {
      this.code = Number(element.value);
      this.uploadCode();
    }

    // Earrings (Jewelry)
    var element = <HTMLInputElement> document.getElementById('78965425');
    if (element.checked === true) {
      this.code = Number(element.value);
      this.uploadCode();
    }

    // Dolls
    var element = <HTMLInputElement> document.getElementById('68977451');
    if (element.checked === true) {
      this.code = Number(element.value);
      this.uploadCode();
    }

    // Sculptures
    var element = <HTMLInputElement> document.getElementById('67887941');
    if (element.checked === true) {
      this.code = Number(element.value);
      this.uploadCode();
    }

    // Scarves
    var element = <HTMLInputElement> document.getElementById('62145331');
    if (element.checked === true) {
      this.code = Number(element.value);
      this.uploadCode();
    }

    // Blankets
    var element = <HTMLInputElement> document.getElementById('54887921');
    if (element.checked === true) {
      this.code = Number(element.value);
      this.uploadCode();
    }

    // Socks
    var element = <HTMLInputElement> document.getElementById('52871151');
    if (element.checked === true) {
      this.code = Number(element.value);
      this.uploadCode();
    }

    // Pencils
    var element = <HTMLInputElement> document.getElementById('50360051');
    if (element.checked === true) {
      this.code = Number(element.value);
      this.uploadCode();
    }

    // Painting
    var element = <HTMLInputElement> document.getElementById('49605401');
    if (element.checked === true) {
      this.code = Number(element.value);
      this.uploadCode();
    }

    // Oil (Painting)
    var element = <HTMLInputElement> document.getElementById('49605402');
    if (element.checked === true) {
      this.code = Number(element.value);
      this.uploadCode();
    }

    // Watercolor (Painting)
    var element = <HTMLInputElement> document.getElementById('49605403');
    if (element.checked === true) {
      this.code = Number(element.value);
      this.uploadCode();
    }

    // Acrlyic (Painting)
    var element = <HTMLInputElement> document.getElementById('49605404');
    if (element.checked === true) {
      this.code = Number(element.value);
      this.uploadCode();
    }
  }

  // Upload new code to seller - Roni
  uploadCode() {
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

  OnSubmitClickBtn() {
    this.success1 = false;
    this.success2 = false;

    const billingAddress = {
      first_name: this.first_name,
      last_name: this.last_name,
      street_address: this.street_address,
      city: this.city,
      country: this.country,
      state_province: this.state_province,
      postal_code: this.postal_code,
    };

    const desc = {
      description: this.description
    };

    // adding codes to database
    this.AddCode();

    // setting description
    this.sellerService.setDescription(desc).subscribe((data: any) => {
      if (data.success) { // if the data succeed to be posted
        this.flashMessage.show('Your Description was submitted!', { cssClass: 'alert-success', timeout: 4000 });
        this.success1 = true;
      } else { // if it fails
        this.flashMessage.show(data.msg, { cssClass: 'alert-danger', timeout: 3000 });
      }
    });

    // setting billing address connect it to the service for back-end process
    this.sellerService.setBillingAddress(billingAddress).subscribe((data: any) => {
      if (data.success) { // if the data succeed to be posted
        this.flashMessage.show('Your Billing Information was submitted!', { cssClass: 'alert-success', timeout: 4000 });
        this.success2 = true;
      } else { // if it fails
        this.flashMessage.show(data.msg, { cssClass: 'alert-danger', timeout: 3000 });
      }
    });

    if (this.success1 === true && this.success2 === true) {
      this.router.navigate(['/seller']);
    }
  }

    // Tab first configuration
    currentTab = 'step1';

    // when the user changes tabs
    step1(currentTab) {
      this.currentTab = currentTab;
    }
    step2(currentTab) {
      this.currentTab = currentTab;
    }
    step3(currentTab) {
      this.currentTab = currentTab;
    }

  }
