// By Roni
// Email activation through link
import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';
import { RegisterService } from '../../../services/register.service';
import { FlashMessagesService } from 'angular2-flash-messages';
/// <reference path ="../../node_modules/@types/jquery/index.d.ts"/
declare var $: any;


@Component({
  selector: 'app-postactivation',
  templateUrl: './postactivation.component.html',
  styleUrls: ['./postactivation.component.css']
})
export class PostactivationComponent implements OnInit {

  constructor(private route: ActivatedRoute,
    private registerService: RegisterService,
    private flashMessage: FlashMessagesService,
    private router: Router) {}
// TODO :: Add type
token: any;  // -> wanted parameter (use your object type)

  ngOnInit() {
      // get URL parameters
      this.route.params.subscribe(params => {
        this.token = params.token; // --> provided token included with the parameter
        this.registerService.activateAccount(this.token).subscribe((data: any) => {
          if (data.success) { // Buyer account activated, prioritizing buyer activation
              setTimeout(() => {
                this.flashMessage.show(data.msg, {cssClass: 'alert-danger', timeout: 3000});
                this.router.navigate(['/login']);
            }, 3000);  // 5s
          } else { // Check if the token provided is for a seller account
            this.registerService.selleractivateAccount(this.token).subscribe((data2: any) => {
              if (data2.success) { // Seller account activated
                  setTimeout(() => {
                    this.flashMessage.show(data2.msg, {cssClass: 'alert-danger', timeout: 3000});
                    this.router.navigate(['/seller-login']);
                }, 3000);  // 5s
              } else { // Invalid Token/URL
                this.flashMessage.show(data.msg, {cssClass: 'alert-danger', timeout: 3000});
              }
            });
          }
        });
  });
 }
}
