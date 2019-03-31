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

  offerPrice: any;
  offerShipping: any;
  totalFees: any;
  totalPrice: any;

  buyer: any;
  billingFormGroup: FormGroup;
  shippingFormGroup: FormGroup;
  paymentFormGroup: FormGroup;
  offersInCart: [String];
  emptyCart: Boolean;
  requestsID: any = [];
  spinner: Boolean;

  billingSameAsShipping = false;
  stripeFees: Number;

  // FOR DISPLAY
  offerPriceDisplay: any;
  offerShippingDisplay: any;
  totalPriceDisplay: any;
  totalBeforeTaxDisplay: any;
  estimatedTaxDisplay = '----';

  states = [
    { label: 'AK' },
    { label: 'AL' },
    { label: 'AZ' },
    { label: 'AR' },
    { label: 'CA' },
    { label: 'CO' },
    { label: 'CT' },
    { label: 'DE' },
    { label: 'FL' },
    { label: 'GA' },
    { label: 'HI' },
    { label: 'ID' },
    { label: 'IL' },
    { label: 'IN' },
    { label: 'IA' },
    { label: 'KS' },
    { label: 'KY' },
    { label: 'LA' },
    { label: 'ME' },
    { label: 'MD' },
    { label: 'MA' },
    { label: 'MI' },
    { label: 'MN' },
    { label: 'MS' },
    { label: 'MO' },
    { label: 'MT' },
    { label: 'NE' },
    { label: 'NV' },
    { label: 'NH' },
    { label: 'NJ' },
    { label: 'NM' },
    { label: 'NY' },
    { label: 'NC' },
    { label: 'ND' },
    { label: 'OH' },
    { label: 'OK' },
    { label: 'OR' },
    { label: 'PA' },
    { label: 'RI' },
    { label: 'SC' },
    { label: 'SD' },
    { label: 'TN' },
    { label: 'TX' },
    { label: 'UT' },
    { label: 'VT' },
    { label: 'VA' },
    { label: 'WA' },
    { label: 'WV' },
    { label: 'WI' },
    { label: 'WY' }
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
    this.spinner = false;
    this.buyerService.getBuyerProfile().subscribe((data: any) => {
      if (data.success) {
        this.buyer = data.buyer_found;
      } else {
        console.log('Error: could not fetch buyer information');
        this.router.navigate(['/']);
      }
    });

    this.buyerService.retrieveBuyerCart().subscribe((data: any) => {
      if (data.success) {
        this.emptyCart = false; // Will be used as a pre condition
        this.offersInCart = data.offersInCart; // Object of all the objects of offers in cart
        this.offerPrice = data.offerPriceTotal; // Total price of those offers
        this.offerShipping = data.offerShippingTotal; // Total shipping price for those offers
        this.totalPrice = data.orderTotal; // Offers price + shipping price
        console.log(data.offersInCart);
        data.offersInCart.forEach(element => {
          if (this.requestsID.indexOf(element.request_ID) === -1) {
            this.requestsID.push(element.request_ID);
          }
          console.log(this.requestsID);
        });

        // console.log(this.offersInCart);

        // CONVERT ALL TO TWO SIG FIGS - For displaying purposes
        this.totalBeforeTaxDisplay = this.offerPrice + this.offerShipping;
        this.totalBeforeTaxDisplay = this.totalBeforeTaxDisplay.toFixed(2);
        this.offerPriceDisplay = this.offerPrice.toFixed(2);
        this.offerShippingDisplay = this.offerShipping.toFixed(2);
        this.totalPriceDisplay = '----';
      } else {
        this.notifier.notify('warning', 'Must have offers in cart to checkout.');
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
    } else if (this.billingSameAsShipping === true) {
      this.billingSameAsShipping = false;
      this.resetBillingForm();
    } else { /* do nothing */ }
  }

  ngAfterViewInit() {
    this.card = elements.create('card');
    setTimeout(() => {
      this.card.mount(this.cardInfo.nativeElement);
      this.card.addEventListener('change', this.cardHandler);
    }, 1000);

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
    // Tax commented for MVP reasons

    // const infoObj = {
    //   to_country: 'US',
    //   to_zip: this.shippingFormGroup['value']['zip'],
    //   to_state: this.shippingFormGroup['value']['state'],
    //   shipping: this.offerShipping,
    //   amount: this.offerPrice
    // };
    // this.buyerService.getTax(infoObj).subscribe((data: any) => {
    //   if (data.success) {

    // Used to calculate stripe fee
    const totalPriceWithTax = this.totalPrice;

    // STRIPE: in the US (assuming standard US pricing of 2.9% + 30¢ per successful charge)
    let stripeFee = ((totalPriceWithTax * 0.029) + 0.30);
    stripeFee = (Math.round(stripeFee * 100) / 100);

    // Stripe Fee added up
    this.totalFees = stripeFee;

    let totalamountwithFees = this.totalFees + this.totalPrice;
    totalamountwithFees = (Math.round(totalamountwithFees * 100) / 100);
    this.totalPrice = totalamountwithFees;
    this.estimatedTaxDisplay = String('$' + this.totalFees);
    this.totalPriceDisplay = '$' + totalamountwithFees;

      // } else {
      //   console.log(data);
      // }
    // });
  }

  async onSubmit(form: NgForm) {
    this.spinner = true;

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
      this.buyerService.getOrderNumber().subscribe((data: any) => {
        const orderNumber = data;
        // console.log(orderNumber);

        const obj = {
          token: token,
          name: this.billingFormGroup['value']['firstName'] + ' ' + this.billingFormGroup['value']['lastName'],
          buyerID: this.buyer._id,
          email: this.buyer.email,
          amount: this.totalPrice,
          totalOffers: this.offersInCart,
          shippingInfo: shippingDetails,
          orderID: orderNumber,
          offerPriceTotal: this.offerPrice,
          shipPriceTotal: this.offerShipping,
          subTotal: this.totalBeforeTaxDisplay,
          feesPriceTotal: this.totalFees,
          requestsPurchasedID: this.requestsID
        };
        // console.log(obj);

        this.buyerService.checkout(obj).subscribe((data1: any) => {
          if (data1.success) {
            this.buyerService.clearCart(this.buyer._id).subscribe((cartReturn: any) => {
              if (cartReturn.success) {
                this.spinner = false;
                const orderID = data1.newOrder._id;
                // console.log(data1);
                this.router.navigate(['/buyer/orderConfirm/' + orderID]);
              }
            });
          } else {
            this.spinner = false;
            // console.log(data1);
            this.notifier.notify('error', 'Something went wrong with processing your order. Please refresh your page and try again.');
          }
      });
    });
    }
  }
}
