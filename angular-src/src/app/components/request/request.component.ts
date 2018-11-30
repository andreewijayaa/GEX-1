import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';
import { RequestService } from '../../services/request.service';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.css']
})
export class RequestComponent implements OnInit {

  constructor(private route: ActivatedRoute,
    private requestService: RequestService,
    private flashMessage: FlashMessagesService,
    private router: Router) { }
  id: any;
  request: Object;
  offerList: Object;
  status: Boolean;


  ngOnInit() {
     // get URL parameters
     this.route.params.subscribe(params => {
      this.id = params.id; // --> Name must match wanted parameter
      console.log(this.id);
      this.requestService.getRequest(this.id).subscribe((data: any) => {
        if (data.success) {
          this.request = data.request;
          this.offerList = data.offers;
          if (data.status === 0) {
            this.status = true;
          } else {
            this.status = false;
          }

          console.log(this.offerList);


        } else {
          this.flashMessage.show(data.msg, {cssClass: 'alert-danger', timeout: 5000});
        }
        });
      });
    }
}
