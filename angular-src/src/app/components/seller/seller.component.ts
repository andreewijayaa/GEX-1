import { Component, OnInit, Inject, Input } from '@angular/core';
import { SellerService } from '../../services/seller.service';
import { Variable } from '@angular/compiler/src/render3/r3_ast';
import { Observable } from 'rxjs';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { MatDialog, MatDialogConfig, MAT_DIALOG_DATA, MatDialogRef, MatRadioModule, MatRadioButton } from '@angular/material';
import { ReactiveFormsModule, FormGroup, FormBuilder, Validators, FormControl, FormGroupDirective, NgForm } from '@angular/forms';
import { NullAstVisitor, identifierName } from '@angular/compiler';
import { ErrorStateMatcher } from '@angular/material/core';
import { invalid } from '@angular/compiler/src/render3/view/util';
import { NotifierService } from 'angular-notifier';
import { formatCurrency } from '@angular/common';

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-seller',
  templateUrl: './seller.component.html',
  styleUrls: ['./seller.component.css']
})
export class SellerComponent implements OnInit {

  // Variables declaration
  private readonly notifier: NotifierService;
  code: String;
  state: String;
  seller: any;
  requestList: Object;
  offerList: Object;
  activeRequests: Object;
  loader: boolean;
  dialogLoader: boolean;
  accountSetup: Number;
  accountSetupBool: Boolean = false;
  progress1: any;
  progress2: any;
  progress3: any;
  temp: any;

  constructor(private sellerService: SellerService,
    private route: ActivatedRoute,
    private dialog: MatDialog,
    notifierService: NotifierService,
    private router: Router) {
    this.notifier = notifierService;
  }

  // On initialization process of the webpage
  ngOnInit() {

    //this.today = new Date();
    // get params if stripe is sending a redirect
    this.route.queryParams.subscribe(params => {
      this.code = params['code'];
      this.state = params['state'];
    });
    // Call stripe backend connect function
    if (this.code !== undefined && this.state !== undefined) {
      this.sellerService.connectStripe(this.code, this.state).subscribe((response: any) => {
        if (response.success) {
          // Display Success stripe Dialog
          localStorage.setItem('stripe_connected', 'true');
          const dialogRef = this.dialog;
          dialogRef.open(StipeAccountCreatedSuccessDialogComponent);
          setTimeout(function () {
            dialogRef.closeAll();
          }, 5000);
          this.notifier.notify('success', response.msg);
        } else {
          // Display fail stripe Dialog
          const dialogRef = this.dialog;
          dialogRef.open(StipeAccountCreatedFailedDialogComponent);
          setTimeout(function () {
            dialogRef.closeAll();
          }, 5000);
          this.notifier.notify('error', response.msg);
        }
      });
    }

    this.loader = true;
    // Fetching seller profile information from the service to be used in the webpage
    this.sellerService.getSellerProfile().subscribe((profile: any) => {
      this.seller = profile.data;
      // this.loaded_seller = Promise.resolve(true);
      this.loader = false;
    },
      err => {
        console.log(err);
        return false;
      });

    // Fetching seller offer history from the service to be used in the webpage
    this.sellerService.getSellerOffersHistory().subscribe((offers: any) => {
      this.offerList = offers;
    },
      err => {
        console.log(err);
        return false;
      });

    // Fetching seller active requests from the service to be used in the webpage
    this.sellerService.getActiveRequests().subscribe((requests: any) => {
      this.activeRequests = requests;
    },
      err => {
        console.log(err);
        return false;
      });

      this.progress1 = 0;
      this.progress2 = 0;
      this.progress3 = 0;
    // Fetching seller profile information from the service to be used in the webpage
    this.sellerService.getSellerProfile().subscribe((profile: any) => {
      this.seller = profile.data;

      this.temp = this.seller.user_account_setup;
      if (this.seller.user_account_setup[0]) {
        this.progress1 = 100;
        if (this.seller.user_account_setup[1]) {
          this.progress2 = 100;
          if (this.seller.user_account_setup[2]) {
            this.progress3 = 100;
          } else {
            this.progress3 = 50;
          }
        } else {
          this.progress2 = 50;
        }
      } else {
        this.progress1 = 50;
      }

      if (this.seller.user_account_setup[0]
        && this.seller.user_account_setup[1]
        && this.seller.user_account_setup[2]) {
        this.accountSetupBool = true;
        // Fetching seller offer history from the s ervice to be used in the webpage
        this.sellerService.getSellerOffersHistory().subscribe((offers: any) => {
          this.offerList = offers;
        },
          err => {
            console.log(err);
            return false;
          });
        // Fetching seller active requests from the service to be used in the webpage
        this.sellerService.getActiveRequests().subscribe((requests: any) => {
          this.activeRequests = requests;
        },
          err => {
            console.log(err);
            return false;
          });
      } else { // DISPLAY THE BAR ON THE MAIN PAGE
        let count;
        for (let i = 0; i < 3; i++) {
          if (this.seller.user_account_setup[i] === true) {
            count++;
          }
        }
        this.accountSetup = count / 100;
      }

    },
      err => {
        console.log(err);
        return false;
      });
    // Check if account has been setup

  }

  refresh() {
      this.progress1 = 0;
      this.progress2 = 0;
      this.progress3 = 0;
     // Fetching seller profile information from the service to be used in the webpage
     this.sellerService.getSellerProfile().subscribe((profile: any) => {
      this.seller = profile.data;

      this.temp = this.seller.user_account_setup;
      if (this.seller.user_account_setup[0]) {
        this.progress1 = 100;
        if (this.seller.user_account_setup[1]) {
          this.progress2 = 100;
          if (this.seller.user_account_setup[2]) {
            this.progress3 = 100;
          } else {
            this.progress3 = 50;
          }
        } else {
          this.progress2 = 50;
        }
      } else {
        this.progress1 = 50;
      }
    });

    window.location.reload();
  }

  submitOffer(title: any, id: any) {
    // Seller does not have a stripe account, therefor they can't submit an offer
    if (!this.seller.stripe || this.seller.stripe === null || this.seller.stripe === undefined) {
      return this.notifier.notify('error', 'Please register with Stripe first.');
    }

    const request_title = title;
    let offerTitle: any;
    let offerDescription: any;
    let offerPrice: any;
    let offerShipping: any;

    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;

    dialogConfig.data = {
      title: "Submit Offer for \"" + request_title + "\" request:"
    };

    const dialogRef = this.dialog.open(SubmitOfferDialogComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(
      data => {
        if (data) {
          offerTitle = data['title'];
          offerDescription = data['description'];
          offerPrice = data['price'];
          offerShipping = data['shipping'];

          const offer = {
            title: offerPrice,
            description: offerDescription,
            price: offerPrice,
            shipPrice: offerShipping,
            request_ID: id,
            seller_ID: this.seller._id
          };

          this.sellerService.postOffer(offer).subscribe((data: any) => {
            if (data.success) { // if the data succeed to be posted
              this.notifier.notify('success', data.message);
              const dialogRef = this.dialog;
              dialogRef.open(OfferSubmittedDialogComponent);
              setTimeout(function () {
                dialogRef.closeAll();
              }, 4000);
            } else { // if it fails
              this.notifier.notify('error', data.message);
              const dialogRef = this.dialog;
              dialogRef.open(OfferSubmittedFailedDialogComponent);
              setTimeout(function () {
                dialogRef.closeAll();
              }, 4000);
            }
          });
        }
        else {
          //do nothing
        }
      }
    );
  }

  deleteOfferFunction(offer_id_todelete) {
    //debugger;
    var offer_delete;
    offer_delete = {
      offer_id: offer_id_todelete
    };

    this.sellerService.deleteoffer(offer_delete).subscribe((data: any) => {
      console.log(data);
      debugger;
      window.location.reload();
    });

  }

  // Tab first configuration
  currentTab = 'requests';

  // when the user changes tabs
  requests(currentTab) {
    this.currentTab = currentTab;
  }

  history(currentTab) {
    this.currentTab = currentTab;
  }

  archive(currentTab) {
    this.currentTab = currentTab;
  }
}

@Component({
  selector: 'dialog-content-submit-offer',
  templateUrl: 'dialog-content-submit-offer.html',
  styleUrls: ['./dialog-content-submit-offer.css']
})
export class SubmitOfferDialogComponent implements OnInit {
  @Input() checked: Boolean;

  box_title: String;
  box_description: String;
  // titleFormControl = new FormControl('', [Validators.required]);
  // descriptionFormControl = new FormControl('', [Validators.required]);
  // priceFormControl = new FormControl('', [Validators.required]);
  matcher = new MyErrorStateMatcher();
  loader: boolean;
  submitOffer: boolean;
  confirmTitle: String;
  confirmDescription: String;
  confirmPrice: any;
  confirmShipping: any;
  shipping = false;
  offerFormGroup: FormGroup;

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<SubmitOfferDialogComponent>,
    @Inject(MAT_DIALOG_DATA) data) {
    this.box_title = data['title'];
  }

  ngOnInit() {
    this.submitOffer = false;

    this.offerFormGroup = this.fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      shipping: [''],
      price: ['', Validators.required]
    });
  }

  submit() {
    if (this.offerFormGroup.controls.shipping.value === '' || this.offerFormGroup.controls.value === null) {
      this.confirmShipping = 0;
    }
    else {
      this.confirmShipping = this.offerFormGroup.controls.shipping.value;
    }
      // var price = formatCurrency(this.priceFormControl.value, "en", "$");
    this.confirmTitle = this.offerFormGroup.controls.title.value;
    this.confirmDescription = this.offerFormGroup.controls.description.value;
    this.confirmPrice = this.offerFormGroup.controls.price.value;
    this.submitOffer = true;
  }

  cancel() {
    this.dialogRef.close();
  }

  confirmDialogSubmit() {
    this.dialogRef.close({ title: this.confirmTitle, description: this.confirmDescription, price: this.confirmPrice, shipping: this.confirmShipping});
  }

  confirmDialogCancel() {
    this.submitOffer = false;
  }
}

@Component({
  selector: 'dialog-content-offer-submitted',
  templateUrl: 'dialog-content-offer-submitted.html'
})
export class OfferSubmittedDialogComponent { }

@Component({
  selector: 'dialog-content-offer-failed',
  templateUrl: 'dialog-content-offer-failed.html'
})
export class OfferSubmittedFailedDialogComponent { }

@Component({
  selector: 'dialog-content-stripe-created-success',
  templateUrl: 'dialog-content-stripe-created-success.html'
})
export class StipeAccountCreatedSuccessDialogComponent { }

@Component({
  selector: 'dialog-content-stripe-created-failed',
  templateUrl: 'dialog-content-stripe-created-failed.html'
})
export class StipeAccountCreatedFailedDialogComponent { }

@Component({
  selector: 'dialog-content-offer-stripe',
  templateUrl: 'dialog-content-offer-stripe.html'
})
export class StripeNeededDialogComponent { }
