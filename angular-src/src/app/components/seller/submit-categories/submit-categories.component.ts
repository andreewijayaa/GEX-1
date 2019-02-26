import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { NotifierService } from 'angular-notifier';
import { SellerService } from '../../../services/seller.service';
import { BP_PREFIX } from 'blocking-proxy/built/lib/blockingproxy';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { MatStepper } from '@angular/material/stepper';
const DefaultImageIcon = "https://raw.githubusercontent.com/ronjonsilver/GEX/master/angular-src/src/assets/images.png";
@Component({
  selector: 'app-submit-categories',
  templateUrl: './submit-categories.component.html',
  styleUrls: ['./submit-categories.component.css']
})
export class SubmitCategoriesComponent implements OnInit, AfterViewInit {
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
  sellerID: String;
  submitLabels: String[];
  codeArray: Number[];
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
  buttonText: String = 'Subscribe to any products on Requiren';
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  first: Boolean;
  second: Boolean;
  third: Boolean;


  constructor(private sellerService: SellerService,
    private route: ActivatedRoute,
    private notifierService: NotifierService,
    private router: Router,
    private _formBuilder: FormBuilder) { this.notifier = notifierService;}

  // On initialization process of the webpage
  ngOnInit() {
    // Get Seller Information
    this.getSellerInfo();
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
    this.submitLabels = [];
    this.codeArray = [];
    this.None = false;
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

  // To redirect the stepper view to continue where the user left off - Andre
  @ViewChild('stepper') stepper: MatStepper;
  ngAfterViewInit() {

    this.sellerService.getSellerProfile().subscribe((data: any) => {
      this.first = data.data.user_account_setup[0];
      this.second = data.data.user_account_setup[1];
      this.third = data.data.user_account_setup[2];

      if (this.second) {
        setTimeout(() => {
          this.stepper.selectedIndex = 2;
        }, 0);
      } else if (this.first) {
        setTimeout(() => {
          this.stepper.selectedIndex = 1;
        }, 0);
      } else {
        setTimeout(() => {
          this.stepper.selectedIndex = 0;
        }, 0);
      }
    });
  }

  AddCode(stepper: MatStepper) {
    const code = {
      codes: this.codeArray
    };

    if (this.codeArray.length <= 0 ) {
      return this.notifier.notify('error', 'Please select atleast one.');
    }
    this.sellerService.setNewCode(code).subscribe((data: any) => {
      if (data.success) {
        this.notifier.notify('success', 'Your New Code was submitted!');
        stepper.next();
      } else {
        this.notifier.notify('error', data.msg);
      }
    });
  }

  AddDescription(stepper: MatStepper) {
    const desc = {
      description: this.description
    };

    if (this.description === undefined) {
      return this.notifier.notify('error', 'Description can not be left blank.');
    }
    // setting description
    this.sellerService.setDescription(desc).subscribe((data: any) => {
      if (data.success === true) { // if the data succeed to be posted
        this.notifier.notify('success', 'Your Description was submitted!');
        stepper.next();
      } else { // if it fails
        this.notifier.notify('error', data.msg);
      }
    });
  }

  getSellerInfo() {
    this.sellerService.getSellerProfile().subscribe((data: any) => {
      if (data) {
        this.sellerID = data.data._id;
      }
    });
  }

  rerouteToStripe() {
    console.log('Data = ' + this.sellerID);
    const redirect_uri: string = 'https://powerful-taiga-46416.herokuapp.com/seller';
    const client_id: string = 'ca_EVl0RHMGrhYGo6GDjWwwn40nmD4aK6AA';


    const urlToOpen: string = 'https://connect.stripe.com/express/oauth/authorize?redirect_uri='
                            + redirect_uri + '&client_id=' + client_id
                            + '&state=' + this.sellerID;
    let url: string = '';
    if (!/^http[s]?:\/\//.test(urlToOpen)) {
        url += 'http://';
    }
    console.log(url);
    url += urlToOpen;
    window.open(url, '_blank');

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
