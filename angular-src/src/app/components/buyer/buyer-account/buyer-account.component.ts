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

  // Delcared buyer variable.
  buyer: any;

  constructor(private buyerService: BuyerService,
    private route: ActivatedRoute) { }

  // When the buyer account page loads, the logged in buyer's information will be fetched and displayed on the page.
  ngOnInit() {
    this.buyer = this.route.snapshot.data['buyer'];
  }

  // Function enables users to use the textfields in order to edit their information. 
  // This only works with the front end so far. This has not been tied in with the backend.
  editFunction(): void {
    (<HTMLInputElement>document.getElementById('fName')).disabled = false;
    (<HTMLInputElement>document.getElementById('lName')).disabled = false;
    (<HTMLInputElement>document.getElementById('eAddress')).disabled = false;
    (<HTMLInputElement>document.getElementById('saveBtn')).disabled = false;
    (<HTMLInputElement>document.getElementById('editBtn')).disabled = true;
    (<HTMLInputElement>document.getElementById('verify')).hidden = false;
    (<HTMLInputElement>document.getElementById('newPass')).hidden = false;
  }

  // Function checks to see if the edited password matches before anything gets saved. A number of textfields are disabled once this function gets executed.
  // If there is no password inserted or the new password does not match when confirming. An error will be displayed to the user.
  // This only works with the front end so far. This has not been tied in with the backend.
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
  // This function has not been fully implemented yet. Once this gets completed it will help tie the frontend and backend of this page together.
  updateData() {
    this.buyer.updateData();
  }
}
