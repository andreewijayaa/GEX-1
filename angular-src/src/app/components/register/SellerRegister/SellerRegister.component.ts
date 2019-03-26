// By Roni
// Seller Registration
import { Component, OnInit } from '@angular/core';
import { ValidateService } from '../../../services/validate.service';
import { NotifierService } from 'angular-notifier';
import { Router } from '@angular/router';
import { RegisterService } from '../../../services/register.service';

@Component({
  selector: 'app-register',
  templateUrl: './SellerRegister.component.html',
  styleUrls: ['./SellerRegister.component.css']
})
export class SellerRegisterComponent implements OnInit {
  private readonly notifier: NotifierService;


  first_name: String;
  last_name: String;
  phone_number: String;
  email: String;
  password: String;
  confirmPassword: String;

  constructor( private validateService: ValidateService,
              private notifierService: NotifierService,
              private router: Router,
              private registerService: RegisterService) {
                this.notifier = notifierService;
               }

  ngOnInit() {
  }

  OnSellerRegisterSubmit() {
    console.log('On Seller Register Submit Called.');
    // JSON with the inputted fields
    const seller = {
      first_name: this.first_name,
      last_name: this.last_name,
      email: this.email,
      phone_number: this.phone_number,
      password: this.password,
      confirmPassword: this.confirmPassword,
    };

    // RequiredFields
    if (!this.validateService.ValidateSellerRegister(seller)) {
      this.notifier.notify('error', 'Please fill in all fields');
      return false;
    }

    // Password Confirmation
    // tslint:disable-next-line:triple-equals
    if (seller.password != this.confirmPassword) {
      this.notifier.notify('error', 'Passwords do not match');
      return false;
    }

    // ValidateEmail
    if (!this.validateService.validateEmail(seller.email)) {
      this.notifier.notify('error', 'Invalid Email');
      return false;
    }

    // Register Seller
    this.registerService.RegisterSeller(seller).subscribe((data: any) => {
      if (data.success) { // must know if its a successful register **
        this.router.navigate(['/preactivation']); // Tell buyer to checkemail
      } else {
        this.notifier.notify('error', data.msg);
        this.router.navigate(['/seller-register']);
      }
    });

  }
}
