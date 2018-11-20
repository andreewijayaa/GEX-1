import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';
import { RegisterService } from '../../../services/register.service';
import { FlashMessagesService } from 'angular2-flash-messages';


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
        this.token = params.token; // --> Name must match wanted parameter
        this.registerService.activateAccount(this.token).subscribe((data: any) => {
          if (data.success) {
              setTimeout(() => {
                this.flashMessage.show(data.msg, {cssClass: 'alert-danger', timeout: 3000});
                this.router.navigate(['/login']);
            }, 3000);  // 5s
          } else {
            this.flashMessage.show(data.msg, {cssClass: 'alert-danger', timeout: 3000});
          }
          });
        });
  }



}
