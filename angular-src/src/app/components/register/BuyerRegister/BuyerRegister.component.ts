import { Component, OnInit } from '@angular/core';
import { ValidateService } from '../../../services/validate.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';
import { RegisterService } from '../../../services/register.service';

@Component({
  selector: 'app-register',
  templateUrl: './BuyerRegister.component.html',
  styleUrls: ['./BuyerRegister.component.css']
})
export class BuyerRegisterComponent implements OnInit {
  first_name: String;
  last_name: String;
  email: String;
  password: String;

  constructor( private validateService: ValidateService,
              private flashMessage: FlashMessagesService,
              private router: Router,
              private registerService: RegisterService) { }

  ngOnInit() {
  }

  OnBuyerRegisterSubmit() {
    const buyer = {
      first_name: this.first_name,
      last_name: this.last_name,
      email: this.email,
      password: this.password
    };

    // RequiredFields
    if (!this.validateService.ValidateBuyerRegister(buyer)) {
      this.flashMessage.show('Please fill in all fields', {cssClass: 'alert-danger', timeout: 10000});
      return false;

    }

    // ValidateEmail
    if (!this.validateService.validateEmail(buyer.email)) {
      this.flashMessage.show('Invalid Email', {cssClass: 'alert-danger', timeout: 3000});
      return false;
    }

    // Register Buyer
    this.registerService.RegisterBuyer(buyer).subscribe((data: any) => {
      if (data.success) {
        // this.flashMessage.show('You are now Register', {cssClass: 'alert-success', timeout: 3000});
        this.router.navigate(['/preactivation']);

      } else {
        this.flashMessage.show(data.msg, {cssClass: 'alert-danger', timeout: 3000});
        this.router.navigate(['/BuyerRegister']);
      }
    });

  }
}
