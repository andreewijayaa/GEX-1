//By: Omar
//Buyer checkout page
import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { StoreFetchService } from '../../../services/storeFetch.service';
import { RequestService } from '../../../services/request.service';
import { StripeService, StripeCardComponent, ElementOptions, ElementsOptions, Element as StripeElement, Elements } from "ngx-stripe";
import { FormGroup, FormBuilder, Validators, FormsModule } from "@angular/forms";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BuyerService } from '../../../services/buyer.service';
import { NotifierService } from 'angular-notifier';

@Component({
  selector: 'app-buyer-checkout',
  templateUrl: './buyer-checkout.component.html',
  styleUrls: ['./buyer-checkout.component.css']
})
export class BuyerCheckoutComponent implements OnInit {
  private readonly notifier: NotifierService;
  selectedOfferId: any;
  offerList: Object;
  request_Id: any;
  offerPriceDisplay: any;
  totalPrice: any;
  isDataAvailable: Boolean = false;
  stripeTest: FormGroup;
  buyer: any;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  offersInCart: [String];
  emptyCart: Boolean;
  orderFees: Number;
  editable: boolean = false;

  @ViewChild(StripeCardComponent) card: StripeCardComponent;

  cardOptions: ElementOptions = {
    style: {
      base: {
        iconColor: '#666EE8',
        color: '#31325F',
        //lineHeight: '40px',

        //fontWeight: 300,
        //fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
        fontSize: '18px',
        '::placeholder': {
          color: '#CFD7E0'
        }
      }
    }
  };

  elementsOptions: ElementsOptions = {
    locale: 'en'
  };

  constructor(private route: ActivatedRoute,
    private router: Router,
    private storeFetchService: StoreFetchService,
    private requestService: RequestService,
    private fb: FormBuilder,
    private stripeService: StripeService,
    private httpClient: HttpClient,
    private buyerService: BuyerService,
    private notifierService: NotifierService,
    private _formBuilder: FormBuilder) {  this.notifier = notifierService; }

  ngOnInit() {
    //this.buyer = this.route.snapshot.data['buyer'];
    this.buyerService.retrieveBuyerCart().subscribe((data: any) => {
      if (data.success) {
        this.emptyCart = false;
        this.offersInCart = data.offersInCart;
        this.offerPriceDisplay = data.offerPriceTotal;
        this.orderFees = data.orderFees;
        this.totalPrice = data.orderTotal;
      } else {
        this.notifier.notify('warning', 'Must accept offers to checkout.');
        this.router.navigate(['/buyer']);
      }
    });

    this.stripeTest = this.fb.group({
      name: ['', [Validators.required]]
    });
    //this.fetchEvent()

    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
  }

  fetchEvent() {
    return this.route.params.subscribe(params => {
      this.selectedOfferId = params.offerId;
      this.request_Id = params.requestId;

      // --> Extract the id pass with URL
      // Make a call to retrieve request information with all offers to that request

      this.requestService.getRequest(this.request_Id).subscribe((data: any) => {
        if (data.success) {
          //this.request = data.request;
          this.offerList = data.offers;
          console.log(this.offerList);
        }
        else {
          this.notifier.notify('error', data.msg);
          this.router.navigate(['/']);
        }
      });
    });
  }

  completePurchase() {
    const price = document.getElementById('offerPrice').innerText;
    console.log(price);
    const name = this.stripeTest.get('name').value;
    this.stripeService
      .createToken(this.card.getCard(), { name })
      .subscribe(result => {
        if (result.token) {
          // Creates a charge object
          const obj = {
            "token": result.token.id,
            "email": this.buyer.data.email,
            "user": name,
            "amount": 1000,
            "product": document.getElementById('offerAcceptedTitle').innerText,
            "description": document.getElementById('offerDescription').innerText
          }
          //Makes a call to the server
          this.buyerService.checkout(obj).subscribe((data: any) => { console.log(data) });
        } else if (result.error) {
          // Error creating the token
          console.log(result.error.message);
        }
      });
  }
}
