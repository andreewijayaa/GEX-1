//By: Omar
//Buyer checkout page
import { Component, OnInit, AfterViewInit, OnDestroy, ViewChild, ElementRef, ChangeDetectorRef } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { StoreFetchService } from '../../../services/storeFetch.service';
import { RequestService } from '../../../services/request.service';
import { FormGroup, FormBuilder, Validators, FormsModule, NgForm } from "@angular/forms";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BuyerService } from '../../../services/buyer.service';
import { NotifierService } from 'angular-notifier';

@Component({
  selector: 'app-buyer-checkout',
  templateUrl: './buyer-checkout.component.html',
  styleUrls: ['./buyer-checkout.component.css']
})
export class BuyerCheckoutComponent implements OnInit, AfterViewInit, OnDestroy {
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
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  offersInCart: [String];
  emptyCart: Boolean;
  orderFees: Number;
  editable: boolean = false;

  //FOR DISPLAY
  offerPriceDisplay: any; orderFeesDisplay: any; totalPriceDisplay: any;

  constructor(private route: ActivatedRoute,
    private router: Router,
    private storeFetchService: StoreFetchService,
    private requestService: RequestService,
    private fb: FormBuilder,
    private httpClient: HttpClient,
    private buyerService: BuyerService,
    private notifierService: NotifierService,
    private _formBuilder: FormBuilder,
    private cd: ChangeDetectorRef) { this.notifier = notifierService; }

  ngOnInit() {
    this.buyer = this.route.snapshot.data['buyer'];
    this.buyerService.retrieveBuyerCart().subscribe((data: any) => {
      if (data.success) {
        console.log(data);
        this.emptyCart = false;
        this.offersInCart = data.offersInCart;
        console.log(this.offersInCart[0]['title']);
        this.offerPrice = data.offerPriceTotal;
        this.orderFees = data.orderFees;
        this.totalPrice = data.orderTotal;

        //CONVERT ALL TO TWO SIG FIGS
        this.offerPriceDisplay = this.offerPrice.toFixed(2);
        this.orderFeesDisplay = this.orderFees.toFixed(2);
        this.totalPriceDisplay = this.totalPrice.toFixed(2);

      } else {
        this.notifier.notify('warning', 'Must accept offers to checkout.');
        this.router.navigate(['/buyer']);
      }
    });

    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
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
    const { token, error } = await stripe.createToken(this.card);

    if (error) {
      console.log('Something is wrong:', error);
    } else {
      console.log('Success!', token);
      // ...send the token to the your backend to process the charge
      const obj = {
        "token": token,
        "email": this.buyer['data']['email'],
        "amount": this.totalPriceDisplay * 100,
        "description": this.offersInCart[0]['title']
      } 
      this.buyerService.checkout(obj).subscribe((data: any) => {
        if (data.success) {
          console.log("Charge Successful");
        }
        else {
          console.log("Charge unsuccessful");
        }
      });
    }
  }

  completePurchase() {
    /*
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
      });*/
  }
}
