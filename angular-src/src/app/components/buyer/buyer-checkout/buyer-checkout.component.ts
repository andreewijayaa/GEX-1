//By: Omar
//Buyer checkout page
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

  //FOR DISPLAY
  offerPriceDisplay: any;
  orderFeesDisplay: any;
  totalPriceDisplay: any;

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
    private cd: ChangeDetectorRef
  ) {
    this.notifier = notifierService;
  }

  ngOnInit() {
    this.buyer = this.route.snapshot.data['buyer'];
    console.log(this.buyer);
    this.buyerService.retrieveBuyerCart().subscribe((data: any) => {
      if (data.success) {
        console.log(data);
        this.emptyCart = false;
        this.offersInCart = data.offersInCart;
        this.offerPrice = data.offerPriceTotal;
        this.orderFees = data.orderFees;
        this.totalPrice = data.orderTotal;

        // CONVERT ALL TO TWO SIG FIGS
        this.offerPriceDisplay = this.offerPrice.toFixed(2);
        this.orderFeesDisplay = this.orderFees.toFixed(2);
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
      zip: ['', Validators.required]
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
      card: ['', Validators.required]
    });
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

  async onSubmit(form: NgForm) {
    const billingDetails = {
      name: (<HTMLInputElement>document.getElementById('cardHolderName')).value,
      address_line1: this.billingFormGroup['controls']['address1']['value'],
      address_line2: this.billingFormGroup['controls']['address2']['value'],
      address_city: this.billingFormGroup['controls']['city']['value'],
      address_state: this.billingFormGroup['controls']['state']['value'],
      address_zip: this.billingFormGroup['controls']['zip']['value'],
      address_country: 'US'
    };

    const shippingDetails = {
      name: this.shippingFormGroup['controls']['firstName']['value'] + ' ' + this.shippingFormGroup['controls']['lastName']['value'],
      address_line1: this.shippingFormGroup['controls']['address1']['value'],
      address_line2: this.shippingFormGroup['controls']['address2']['value'],
      address_city: this.shippingFormGroup['controls']['city']['value'],
      address_state: this.shippingFormGroup['controls']['state']['value'],
      address_zip: this.shippingFormGroup['controls']['zip']['value'],
      address_country: 'US'
    };

    const { token, error } = await stripe.createToken(this.card, billingDetails);

    if (error) {
      console.log('Something is wrong:', error);
    }
    else {
      console.log('Success!', token);
      // ...send the token to backend to process the charge
      const obj = {
        token: token,
        name: (<HTMLInputElement>document.getElementById('cardHolderName'))
          .value,
        buyerID: this.buyer['data']['_id'],
        email: this.buyer['data']['email'],
        amount: this.totalPriceDisplay * 100,
        totalOffers: this.offersInCart,
        shippingInfo: shippingDetails,
        orderID: 'ord_' + Math.random().toString(36).substr(2, 10),
      };
      this.buyerService.checkout(obj).subscribe((data: any) => {
        if (data.success) {
          console.log('Charge Successful');
          console.log(data);
        } else {
          console.log('Charge unsuccessful');
        }
      });
    }
  }
}
