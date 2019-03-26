import { Component, OnInit } from '@angular/core';
import { NotifierService } from 'angular-notifier';
import {Router, ActivatedRoute, Params} from '@angular/router';
import { SellerService } from '../../../services/seller.service';
import { ValidateService } from '../../../services/validate.service';

@Component({
  selector: 'app-seller-update-password',
  templateUrl: './seller-update-password.component.html',
  styleUrls: ['./seller-update-password.component.css']
})
export class SellerUpdatePasswordComponent implements OnInit {
  oldPassword: any;
  password: any;
  passwordConfirm: any;

  private readonly notifier: NotifierService;
   constructor(private route: ActivatedRoute,
    private sellerService: SellerService,
    private notifierService: NotifierService,
    private router: Router,
    private validateService: ValidateService) {
      this.notifier = notifierService;
    }

  ngOnInit() {
  }

  updatePassword() {
    if (this.oldPassword === undefined) { return this.notifier.notify('error', 'Please input a valid password.'); }
    if (this.password === undefined) { return this.notifier.notify('error', 'Please input a new password.'); }
    if (this.password !== this.passwordConfirm) { return this.notifier.notify('error', 'Passwords do not match.'); }
    if (!this.validateService.validatePassword(this.password)) {
      this.notifier.notify('error', 'Password does not meet requirements');
      return false;
    }

    this.sellerService.updatePassword(this.oldPassword, this.password, this.passwordConfirm).subscribe((data: any) => {
        if (data.success || !data) {
          this.notifier.notify('success', data.msg);
          this.router.navigate(['/seller/seller-account']);
        } else {
          this.notifier.notify('error', data.msg);
        }
      });
  }

}
