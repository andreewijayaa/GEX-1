// By Roni
// buyer Registration
import { Component, OnInit } from '@angular/core';
import { ValidateService } from '../../../services/validate.service';
import { Router } from '@angular/router';
import { RegisterService } from '../../../services/register.service';
import { NotifierService } from 'angular-notifier';
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

  private readonly notifier: NotifierService;
  constructor( private validateService: ValidateService,
            private notifierService: NotifierService,
              private router: Router,
              private registerService: RegisterService) { this.notifier = notifierService;}

  ngOnInit() {
  }

  OnBuyerRegisterSubmit() {
    // JSON with the inputted fields
    const buyer = {
      first_name: this.first_name,
      last_name: this.last_name,
      email: this.email,
      password: this.password
    };

    // RequiredFields
    if (!this.validateService.ValidateBuyerRegister(buyer)) {
      this.notifier.notify('error', 'Please fill in all fields');
      return false;
    }

    // ValidateEmail
    if (!this.validateService.validateEmail(buyer.email)) {
      this.notifier.notify('error', 'Invalid Email');
      return false;
    }

    if (!this.validateService.validatePassword(buyer.password)){
      this.notifier.notify('error', 'Password does not meet requirements');
      return false;
    }

    // Register Buyer
    this.registerService.RegisterBuyer(buyer).subscribe((data: any) => {
      if (data.success) {
        this.router.navigate(['/preactivation']); // Tell buyer to checkemail
      } else {
        this.notifier.notify('error', data.msg);
        this.router.navigate(['/buyer-register']);
      }
    });

  }
}
