// By: Omar
// Buyer checkout page
import {
  Component,
  OnInit,
  AfterViewInit,
  OnDestroy,
  ViewChild,
  ElementRef,
  ChangeDetectorRef
} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { StoreFetchService } from '../../../services/storeFetch.service';
import { RequestService } from '../../../services/request.service';
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormsModule,
  NgForm
} from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BuyerService } from '../../../services/buyer.service';
import { NotifierService } from 'angular-notifier';
import { SellerService } from '../../../services/seller.service';


@Component({
  selector: 'app-buyer-checkout',
  templateUrl: './buyer-checkout.component.html',
  styleUrls: ['./buyer-checkout.component.css']
})
export class BuyerCheckoutComponent
  implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild('cardInfo') cardInfo: ElementRef;
  card: any;
  cardHandler = this.onChange.bind(this);
  error: string;

  private readonly notifier: NotifierService;
  selectedOfferId: any;
  offerList: Object;
  request_Id: any;
  offerPrice: any;
  offerShipping: any;
  totalPrice: any;
  isDataAvailable: Boolean = false;
  buyer: any;
  billingFormGroup: FormGroup;
  shippingFormGroup: FormGroup;
  paymentFormGroup: FormGroup;
  offersInCart: [String];
  emptyCart: Boolean;
  orderFees: Number;
  editable: Boolean = false;
  sellerList = [];
  billingSameAsShipping = false;

  //FOR DISPLAY
  offerPriceDisplay: any;
  offerShippingDisplay: any;
  // orderFeesDisplay: any;
  totalPriceDisplay: any;
  totalBeforeTaxDisplay: any;
  estimatedTaxDisplay = '----';

  states = [
    { label: "AK" },
    { label: "AL" },
    { label: "AZ" },
    { label: "AR" },
    { label: "CA" },
    { label: "CO" },
    { label: "CT" },
    { label: "DE" },
    { label: "FL" },
    { label: "GA" },
    { label: "HI" },
    { label: "ID" },
    { label: "IL" },
    { label: "IN" },
    { label: "IA" },
    { label: "KS" },
    { label: "KY" },
    { label: "LA" },
    { label: "ME" },
    { label: "MD" },
    { label: "MA" },
    { label: "MI" },
    { label: "MN" },
    { label: "MS" },
    { label: "MO" },
    { label: "MT" },
    { label: "NE" },
    { label: "NV" },
    { label: "NH" },
    { label: "NJ" },
    { label: "NM" },
    { label: "NY" },
    { label: "NC" },
    { label: "ND" },
    { label: "OH" },
    { label: "OK" },
    { label: "OR" },
    { label: "PA" },
    { label: "RI" },
    { label: "SC" },
    { label: "SD" },
    { label: "TN" },
    { label: "TX" },
    { label: "UT" },
    { label: "VT" },
    { label: "VA" },
    { label: "WA" },
    { label: "WV" },
    { label: "WI" },
    { label: "WY" }
  ];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private storeFetchService: StoreFetchService,
    private requestService: RequestService,
    private fb: FormBuilder,
    private httpClient: HttpClient,
    private buyerService: BuyerService,
    private notifierService: NotifierService,
    private _formBuilder: FormBuilder,
    private cd: ChangeDetectorRef,
    private sellerService: SellerService
  ) {
    this.notifier = notifierService;
  }

  ngOnInit() {
    this.buyer = this.route.snapshot.data['buyer'];
    // console.log(this.buyer);
    this.buyerService.retrieveBuyerCart().subscribe((data: any) => {
      if (data.success) {
        // console.log(data);
        this.emptyCart = false;
        this.offersInCart = data.offersInCart;
        this.offerPrice = data.offerPriceTotal;
        this.offerShipping = data.offerShippingTotal;
        // this.orderFees = data.orderFees;
        this.totalPrice = data.orderTotal;
        // console.log(this.offersInCart);
        for (let i = 0; i < this.offersInCart['length']; i++) {
          this.sellerList.push(this.offersInCart[i]['seller_ID']);
        }
       // console.log(this.sellerList);

        // CONVERT ALL TO TWO SIG FIGS
        this.totalBeforeTaxDisplay = this.offerPrice + this.offerShipping;
        this.totalBeforeTaxDisplay = this.totalBeforeTaxDisplay.toFixed(2);
        this.offerPriceDisplay = this.offerPrice.toFixed(2);
        this.offerShippingDisplay = this.offerShipping.toFixed(2);
        // this.orderFeesDisplay = this.orderFees.toFixed(2);
        this.totalPriceDisplay = this.totalPrice.toFixed(2);
      } else {
        this.notifier.notify('warning', 'Must accept offers to checkout.');
        this.router.navigate(['/buyer']);
      }
    });

    this.billingFormGroup = this._formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      address1: ['', Validators.required],
      address2: [''],
      city: ['', Validators.required],
      state: ['', Validators.required],
      zip: ['', Validators.required],
      sameAsShipping: [false]
    });
    this.shippingFormGroup = this._formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      address1: ['', Validators.required],
      address2: [''],
      city: ['', Validators.required],
      state: ['', Validators.required],
      zip: ['', Validators.required]
    });
    this.paymentFormGroup = this._formBuilder.group({
    });
  }

  resetBillingForm() {
    this.billingFormGroup.setValue({
      firstName: '',
      lastName: '',
      address1: '',
      address2: '',
      city: '',
      state: '',
      zip: '',
      sameAsShipping: false
    });
    this.billingSameAsShipping = false;
  }

  shippingSameBilling() {
    if (this.billingSameAsShipping === false) {
      this.billingSameAsShipping = true;
      this.billingFormGroup.setValue({
        firstName: this.shippingFormGroup['value']['firstName'],
        lastName: this.shippingFormGroup['value']['lastName'],
        address1: this.shippingFormGroup['value']['address1'],
        address2: this.shippingFormGroup['value']['address2'],
        city: this.shippingFormGroup['value']['city'],
        state: this.shippingFormGroup['value']['state'],
        zip: this.shippingFormGroup['value']['zip'],
        sameAsShipping: true
      });
    }
    else if (this.billingSameAsShipping === true) {
      this.billingSameAsShipping = false;
      this.resetBillingForm();
    }
    else { /* do nothing */ }
  }

  ngAfterViewInit() {
    this.card = elements.create('card');
    this.card.mount(this.cardInfo.nativeElement);
    this.card.addEventListener('change', this.cardHandler);
  }

  ngOnDestroy() {
    this.card.removeEventListener('change', this.cardHandler);
    this.card.destroy();
  }

  onChange({ error }) {
    if (error) {
      this.error = error.message;
    } else {
      this.error = null;
    }
    this.cd.detectChanges();
  }

  calculateTax() {
    const infoObj = {
      to_country: 'US',
      to_zip: this.shippingFormGroup['value']['zip'],
      to_state: this.shippingFormGroup['value']['state'],
      shipping: this.offerShipping,
      amount: this.offerPrice
    };
    this.buyerService.getTax(infoObj).subscribe((data: any) => {
      if (data.success) {
        console.log(data);
        console.log(data.result.tax.amount_to_collect);
        this.estimatedTaxDisplay = String('$' + data.result.tax.amount_to_collect);
        this.totalPriceDisplay = this.totalPrice + data.result.tax.amount_to_collect;
      } else {
        console.log(data);
      }
    });
  }

  async onSubmit(form: NgForm) {
    const billingDetails = {
      name: this.billingFormGroup['value']['firstName'] + ' ' + this.billingFormGroup['value']['lastName'],
      address_line1: this.billingFormGroup['value']['address1'],
      address_line2: this.billingFormGroup['value']['address2'],
      address_city: this.billingFormGroup['value']['city'],
      address_state: this.billingFormGroup['value']['state'],
      address_zip: this.billingFormGroup['value']['zip'],
      address_country: 'US'
    };

    const shippingDetails = {
      name: this.shippingFormGroup['value']['firstName'] + ' ' + this.shippingFormGroup['value']['lastName'],
      address_line1: this.shippingFormGroup['value']['address1'],
      address_line2: this.shippingFormGroup['value']['address2'],
      address_city: this.shippingFormGroup['value']['city'],
      address_state: this.shippingFormGroup['value']['state'],
      address_zip: this.shippingFormGroup['value']['zip'],
      address_country: 'US'
    };

    const { token, error } = await stripe.createToken(this.card, billingDetails);

    if (error) {
      // console.log('Something is wrong:', error);
    } else {
      // console.log('Success!', token);
      // ...send the token to backend to process the charge
      const obj = {
        token: token,
        name: this.billingFormGroup['value']['firstName'] + ' ' + this.billingFormGroup['value']['lastName'],
        buyerID: this.buyer['data']['_id'],
        email: this.buyer['data']['email'],
        amount: this.totalPriceDisplay * 100,
        totalOffers: this.offersInCart,
        shippingInfo: shippingDetails,
        orderID: 'ord_' + Math.random().toString(36).substr(2, 10),
        // sellers: this.sellerList
      };
      this.buyerService.checkout(obj).subscribe((data: any) => {
        if (data.success) {
          // console.log('Charge Successful');
          // console.log(data);
        } else {
          // console.log('Charge unsuccessful');
        }
      });
    }
  }
}
