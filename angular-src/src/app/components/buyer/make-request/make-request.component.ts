// By Roni
// Buyer Request Submission
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NotifierService } from 'angular-notifier';
import { BuyerService } from '../../../services/buyer.service';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';

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
    { code: 78965422, name: 'Jewelry'},
    { code: 78965423, name: 'Necklaces (Jewelry)'},
    { code: 78965424, name: 'Rings (Jewelry)'},
    { code: 78965425, name: 'Earrings (Jewelry)'},
    { code: 68977451, name: 'Dolls'},
    { code: 67887941, name: 'Sculptures'},
    { code: 62145331, name: 'Scarves'},
    { code: 54887921, name: 'Blankets'},
    { code: 52871151, name: 'Socks'},
    { code: 50360051, name: 'Pencils'},
    { code: 49605401, name: 'Painting'},
    { code: 49605402, name: 'Oil (Painting)'},
    { code: 49605403, name: 'Watercolor (Painting)'},
    { code: 49605404, name: 'Acrlyic (Painting)'}
  ];
  title: String;
  code: Number[];
  description: String = "Enter description of desired product";
  deadline: Date;

  public onChange(event): void {  // event will give you full breif of action
    if (event.target.value == "2days") {
      console.log("2 day deadline");
    }
    if (event.target.value == "5days") {
      console.log("5 day deadline");
    }
    if (event.target.value == "1week") {
      console.log("1 week deadline");
    }
  }

  constructor(private buyerService: BuyerService,
    private notifierService: NotifierService,
    private router: Router) {
      this.notifier = notifierService;
    }

  ngOnInit() {
    this.code = [];
  }

  // Checking checkboxes
  checkboxes() {
    // Jewelry
    var element = <HTMLInputElement> document.getElementById('78965422');
    if (element.checked === true) {
      this.code.push(Number(element.value));
    }

    // Necklaces (Jewelry)
    var element = <HTMLInputElement> document.getElementById('78965423');
    if (element.checked === true) {
      this.code.push(Number(element.value));
    }

    // Rings (Jewelry)
    var element = <HTMLInputElement> document.getElementById('789654224');
    if (element.checked === true) {
      this.code.push(Number(element.value));
    }

    // Earrings (Jewelry)
    var element = <HTMLInputElement> document.getElementById('78965425');
    if (element.checked === true) {
      this.code.push(Number(element.value));
    }

    // Dolls
    var element = <HTMLInputElement> document.getElementById('68977451');
    if (element.checked === true) {
      this.code.push(Number(element.value));
    }

    // Sculptures
    var element = <HTMLInputElement> document.getElementById('67887941');
    if (element.checked === true) {
      this.code.push(Number(element.value));
    }

    // Scarves
    var element = <HTMLInputElement> document.getElementById('62145331');
    if (element.checked === true) {
      this.code.push(Number(element.value));
    }

    // Blankets
    var element = <HTMLInputElement> document.getElementById('54887921');
    if (element.checked === true) {
      this.code.push(Number(element.value));
    }

    // Socks
    var element = <HTMLInputElement> document.getElementById('52871151');
    if (element.checked === true) {
      this.code.push(Number(element.value));
    }

    // Pencils
    var element = <HTMLInputElement> document.getElementById('50360051');
    if (element.checked === true) {
      this.code.push(Number(element.value));
    }

    // Painting
    var element = <HTMLInputElement> document.getElementById('49605401');
    if (element.checked === true) {
      this.code.push(Number(element.value));
    }

    // Oil (Painting)
    var element = <HTMLInputElement> document.getElementById('49605402');
    if (element.checked === true) {
      this.code.push(Number(element.value));
    }

    // Watercolor (Painting)
    var element = <HTMLInputElement> document.getElementById('49605403');
    if (element.checked === true) {
      this.code.push(Number(element.value));
    }

    // Acrlyic (Painting)
    var element = <HTMLInputElement> document.getElementById('49605404');
    if (element.checked === true) {
      this.code.push(Number(element.value));
    }
  }

  // Request Submission
  onRequestSubmit() {
    this.code.push(49605403);
    this.code.push(49605404);
    this.code.push(49605402);
    // Request Generated JSON
    const request = {
      title: this.title,
      code: this.code,
      description: this.description,
      deadline: this.deadline
    };
    console.log(this.code.length); // You get Zero even though you have some checked
    // Register Request
    this.buyerService.postBuyerRequest(request).subscribe((data: any) => {
      if (data.success) {
        this.notifier.notify('success', 'Your Request was submitted!');
        this.router.navigate(['/buyer']);

      } else {
        this.notifier.notify('error', data.msg);
        this.router.navigate(['/buyer/make-request']);
      }
    });
  }

}
