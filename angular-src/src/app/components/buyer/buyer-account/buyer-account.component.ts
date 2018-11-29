import { Component, OnInit } from '@angular/core';
import { BuyerService } from '../../../services/buyer.service';
import { ActivatedRoute } from '@angular/router';
import { SellerAccountComponent } from '../../seller/seller-account/seller-account.component';

@Component({
  selector: 'app-buyer-account',
  templateUrl: './buyer-account.component.html',
  styleUrls: ['./buyer-account.component.css']
})
export class BuyerAccountComponent implements OnInit {
  buyer: any;

  constructor(private buyerService: BuyerService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.buyer = this.route.snapshot.data['buyer'];
  }

  editFunction(): void {
    (<HTMLInputElement>document.getElementById('fName')).disabled = false;
    (<HTMLInputElement>document.getElementById('lName')).disabled = false;
    (<HTMLInputElement>document.getElementById('eAddress')).disabled = false;
    (<HTMLInputElement>document.getElementById('saveBtn')).disabled = false;
    (<HTMLInputElement>document.getElementById('editBtn')).disabled = true;
    (<HTMLInputElement>document.getElementById('verify')).hidden = false;
    (<HTMLInputElement>document.getElementById('newPass')).hidden = false;
  }

  saveFunction(): void {
    const newPass = (<HTMLInputElement>document.getElementById('newPwd')).value;
    const confirm = (<HTMLInputElement>document.getElementById('verifyPwd')).value;
    if ((newPass === confirm) && (<HTMLInputElement>document.getElementById('verifyPwd')).value !== '') {
      (<HTMLInputElement>document.getElementById('pwd')).value = (<HTMLInputElement>document.getElementById('newPwd')).value;
      (<HTMLInputElement>document.getElementById('fName')).disabled = true;
      (<HTMLInputElement>document.getElementById('lName')).disabled = true;
      (<HTMLInputElement>document.getElementById('eAddress')).disabled = true;
      (<HTMLInputElement>document.getElementById('pwd')).disabled = true;
      (<HTMLInputElement>document.getElementById('saveBtn')).disabled = true;
      (<HTMLInputElement>document.getElementById('editBtn')).disabled = false;
      (<HTMLInputElement>document.getElementById('verify')).hidden = true;
      (<HTMLInputElement>document.getElementById('newPass')).hidden = true;
      (<HTMLInputElement>document.getElementById('newPwd')).value = '';
      (<HTMLInputElement>document.getElementById('verifyPwd')).value = '';
      (<HTMLInputElement>document.getElementById('errorMessage')).hidden = true;
      (<HTMLInputElement>document.getElementById('verifyPwd')).style.backgroundColor = 'White';
      (<HTMLInputElement>document.getElementById('newPwd')).style.backgroundColor = 'White';
    } else {
      (<HTMLInputElement>document.getElementById('errorMessage')).hidden = false;
      (<HTMLInputElement>document.getElementById('verifyPwd')).style.backgroundColor = 'Red';
      (<HTMLInputElement>document.getElementById('newPwd')).style.backgroundColor = 'Red';
    }
  }
}
