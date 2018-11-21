import { Component, OnInit } from '@angular/core';
import {FlashMessagesService} from 'angular2-flash-messages';
import {Router} from '@angular/router';

@Component({
  selector: 'app-make-request',
  templateUrl: './make-request.component.html',
  styleUrls: ['./make-request.component.css']
})
export class MakeRequestComponent implements OnInit {
  title: String;
  code: String;
  description: String;
  deadline: Date;

  constructor() { }

  ngOnInit() {
  }

  onRequestSubmit() {
    const request = {
      title: this.title,
      code: this.code,
      description: this.description,
      deadline: this.deadline
    }
  }

}
