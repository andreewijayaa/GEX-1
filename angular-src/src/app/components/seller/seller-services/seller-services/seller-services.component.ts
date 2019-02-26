// By Roni
// View & Add offered seller goods/services
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SellerService } from '../../../../services/seller.service';
import { NotifierService } from 'angular-notifier';
import { Local } from 'protractor/built/driverProviders';
const DefaultImageIcon = "https://raw.githubusercontent.com/ronjonsilver/GEX/master/angular-src/src/assets/images.png";
@Component({
  selector: 'app-seller-services',
  templateUrl: './seller-services.component.html',
  styleUrls: ['./seller-services.component.css']
})
export class SellerServicesComponent implements OnInit {
  private readonly notifier: NotifierService;

  // Temp codes for MVP - Kurgan
	codes = [
    { code: 78965422, name: 'Jewelry', image: DefaultImageIcon, checked: false },
    { code: 78965423, name: 'Necklaces (Jewelry)', image: DefaultImageIcon, checked: false },
    { code: 78965424, name: 'Rings (Jewelry)', image: DefaultImageIcon, checked: false },
    { code: 78965425, name: 'Earrings (Jewelry)', image: DefaultImageIcon, checked: false },
    { code: 68977451, name: 'Dolls', image: DefaultImageIcon, checked: false },
    { code: 67887941, name: 'Sculptures', image: DefaultImageIcon, checked: false },
    { code: 62145331, name: 'Scarves', image: DefaultImageIcon, checked: false },
    { code: 54887921, name: 'Blankets', image: DefaultImageIcon, checked: false },
    { code: 52871151, name: 'Socks', image: DefaultImageIcon, checked: false },
    { code: 50360051, name: 'Pencils', image: DefaultImageIcon, checked: false },
    { code: 49605401, name: 'Painting', image: DefaultImageIcon, checked: false },
    { code: 49605402, name: 'Oil (Painting)', image: DefaultImageIcon, checked: false },
    { code: 49605403, name: 'Watercolor (Painting)', image: DefaultImageIcon, checked: false },
    { code: 49605404, name: 'Acrlyic (Painting)', image: DefaultImageIcon, checked: false }
  ];
  submitLabels: String[];
  codeArray: Number[];
  code: Number;
  codeList: [Number];
  None: Boolean;
  codeNames: any[];
  buttonText: String = 'Subscribe to any products on Requiren';

  constructor(private sellerService: SellerService,
    private notifierService: NotifierService,
    private router: Router) { this.notifier = notifierService; }

  // View seller current codes - Roni
  ngOnInit() {
    this.submitLabels = [];
    this.codeArray = [];
    // Get seller codes
    this.sellerService.getCode().subscribe((data: any) => {
      if (data.success) {
        if (data.codeList.length === 0) { // Seller does not have any codes yet
        } else {
          this.codeArray = data.codeList;
        }
      }
    });
  }

  AddCode() {
    const code = {
      codes: this.codeArray
    };

    this.sellerService.setNewCode(code).subscribe((data: any) => {
      if (data.success) {
        this.notifier.notify('success', data.msg);
        this.router.navigate(['/seller']);
      } else {
        this.notifier.notify('error', data.msg);
        this.router.navigate(['/seller/seller-services']);
      }
    });
  }

  labelButton() {
    var btnTxt = 'Subscribe to  ';
    var slsize = this.submitLabels.length;
    //console.log(this.submitLabels[0]);
    for (var n = 0; n < slsize; n++) {
      if (slsize <= 3) {
        btnTxt = btnTxt + this.submitLabels[n];
        if (n < (slsize - 1)) {
          btnTxt = btnTxt + ', ';
        } else {
          btnTxt = btnTxt + ' ';
        }
      } else {
        if (n < 2) {
          btnTxt = btnTxt + this.submitLabels[n] + ', ';
        }
        if (n === 2) {
          btnTxt = btnTxt + this.submitLabels[n] + ' ';
        }
      }
    }
    var rem = slsize - 3;
    var remd = rem.toString();
    if (slsize > 3) {
      btnTxt = btnTxt + '(+' + remd + ' more) ';
    }
    this.buttonText = btnTxt + ' on Requiren';
  }

  onCheckboxChange(option, event) {
    if (event.target.checked) {
      this.codeArray.push(option.code);
      this.submitLabels.push(option.name);
      this.labelButton();
    } else {
      for (var i = 0; i < this.codes.length; i++) {
        if (this.codeArray[i] === option.code) {
          this.codeArray.splice(i, 1);
          this.submitLabels.splice(i, 1);
          this.labelButton();
        }
      }
    }
   console.log(this.codeArray);
  }
}
