// By Roni
// Buyer Request Submission
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NotifierService } from 'angular-notifier';
import { BuyerService } from '../../../services/buyer.service';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
const DefaultImageIcon = "https://raw.githubusercontent.com/ronjonsilver/MEANstackPractice/master/images.png";
@Component({
  selector: 'app-make-request',
  templateUrl: './make-request.component.html',
  styleUrls: ['./make-request.component.css']
})
export class MakeRequestComponent implements OnInit {
  private readonly notifier: NotifierService;
  public Editor = ClassicEditor;

  // Temp codes for MVP - Kurgan
  codes = [
    { code: 78965422, name: 'Jewelry', image: DefaultImageIcon, checked: false },
    { code: 78965423, name: 'Necklaces (Jewelry)', image: DefaultImageIcon, checked: false },
    { code: 78965424, name: 'Rings (Jewelry)', image: DefaultImageIcon, checked: false },
    { code: 78965425, name: 'Earrings (Jewelry)', image: DefaultImageIcon, checked: false },
    { code: 68977451, name: 'Dolls', image: DefaultImageIcon, checked: false },
    { code: 67887941, name: 'Sculptures', image: DefaultImageIcon, checked: false },
    { code: 62145331, name: 'Scarves', image: DefaultImageIcon, checked: false },
    { code: 54887921, name: 'Blankets', image: DefaultImageIcon, checked: false },
    { code: 52871151, name: 'Socks', image: DefaultImageIcon, checked: false },
    { code: 50360051, name: 'Pencils', image: DefaultImageIcon, checked: false },
    { code: 49605401, name: 'Painting', image: DefaultImageIcon, checked: false },
    { code: 49605402, name: 'Oil (Painting)', image: DefaultImageIcon, checked: false },
    { code: 49605403, name: 'Watercolor (Painting)', image: DefaultImageIcon, checked: false },
    { code: 49605404, name: 'Acrlyic (Painting)', image: DefaultImageIcon, checked: false }
  ];
  title: String;
  submitLabels: String[];
  codeArray: Number[];
  description: String = 'Enter description of desired product';
  deadline: Date;
  buttonText: String = 'Submit Your Request to Sellers on Requiren';

  public onChange(event): void {  // Simple deadline selection - Bryan Vu
    if (event.target.value === '2days') {
      this.deadline = new Date();
      this.deadline.setDate(this.deadline.getDate() + 2);
    }
    if (event.target.value === '5days') {
      this.deadline = new Date();
      this.deadline.setDate(this.deadline.getDate() + 5);
    }
    if (event.target.value === '1week') {
      this.deadline = new Date();
      this.deadline.setDate(this.deadline.getDate() + 7);
    }
  }

  constructor(private buyerService: BuyerService,
    private notifierService: NotifierService,
    private router: Router) {
    this.notifier = notifierService;
  }

  ngOnInit() {
    this.submitLabels = [];
    this.codeArray = [];
  }

  labelButton() {
    var btnTxt = 'Submit Your Request to ';
    var slsize = this.submitLabels.length;
    //console.log(this.submitLabels[0]);
    for (var n = 0; n < slsize; n++) {
      if (slsize <= 3) {
        btnTxt = btnTxt + this.submitLabels[n];
        if (n < (slsize - 1)) {
          btnTxt = btnTxt + ", ";
        }
        else {
          btnTxt = btnTxt + " ";
        }
      }
      else {
        if (n < 2) {
          btnTxt = btnTxt + this.submitLabels[n] + ", ";
        }
        if (n == 2) {
          btnTxt = btnTxt + this.submitLabels[n] + " ";
        }
      }
    }
    var rem = slsize - 3;
    var remd = rem.toString();
    if (slsize > 3) {
      btnTxt = btnTxt + "(+" + remd + " more) ";
    }
    this.buttonText = btnTxt + "Sellers on Requiren";
  }



  onCheckboxChange(option, event) {
    if (event.target.checked) {
      this.codeArray.push(option.code);
      this.submitLabels.push(option.name);
      this.labelButton();
    } else {
      for (var i = 0; i < this.codes.length; i++) {
        if (this.codeArray[i] == option.code) {
          this.codeArray.splice(i, 1);
          this.submitLabels.splice(i, 1);
          this.labelButton();
        }
      }
    }
  }

  // Request Submission
  onRequestSubmit() {
    console.log(this.title);
    if (typeof this.title === 'undefined') {
      window.scrollTo(1, 1);
      return this.notifier.notify('error', 'Please input a title.');
    }
    if (this.codeArray.length <= 0) {
      return this.notifier.notify('error', 'Please select a catagory.');
    }
    if (this.description === 'Enter description of desired product') {
      return this.notifier.notify('error', 'Please input a description.');
    }
    if (!this.deadline) {
      return this.notifier.notify('error', 'Please select a deadline.');
    }

    window.scrollTo(1, 1);
    // Request Generated JSON
    const request = {
      title: this.title,
      code: this.codeArray,
      description: this.description,
      deadline: this.deadline
    };
    console.log(this.codeArray);
    // Register Request
    this.buyerService.postBuyerRequest(request).subscribe((data: any) => {
      if (data.success) {
        this.notifier.notify('success', 'Your Request was submitted!');
        this.router.navigate(['/buyer']);
      } else {
        this.notifier.notify('error', data.msg);
      }
    });
  }

}
