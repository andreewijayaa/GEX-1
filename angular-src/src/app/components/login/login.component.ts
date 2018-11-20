import { Component, OnInit } from '@angular/core';
import { RegisterService } from '../../services/register.service';
import { AuthService } from '../../services/auth.service';
import { StoreFetchService } from '../../services/storeFetch.service';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';
import { ConditionFunc } from 'rxjs/internal/observable/generate';
import { Config } from 'protractor';
import { NavbarComponent } from '../navbar/navbar.component';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email: String;
  password: String;

  constructor(private registerService: RegisterService,
    private authService: AuthService,
    private storeFetchService: StoreFetchService,
    private router: Router,
    private flashMessage: FlashMessagesService) { }

  ngOnInit() {
  }

  onLoginSubmit() {
    const buyer = {
      email: this.email,
      password: this.password
    };
    this.storeFetchService.user = 0;
    this.authService.AuthenticateBuyer(buyer).subscribe((data: any) => {
      if (data.success) {
        this.storeFetchService.storeBuyerData(data.token, data.buyer);
        this.flashMessage.show('You are now logged in.', { cssClass: 'alert-success', timeout: 5000 });
        this.router.navigateByUrl('./navbar.component.html', { skipLocationChange: true }).then(() =>
        this.router.navigate(['/buyer']));
        // this.router.navigate(['/buyer']);
      } else {
        this.flashMessage.show(data.msg, { cssClass: 'alert-danger', timeout: 5000 });
        this.router.navigate(['/login']);
      }
    });
  }
}
