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
  description: String = 'Enter description of desired product';
  deadline: Date;

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
    const element = <HTMLInputElement> document.getElementById('78965422');
    if (element.checked === true) {
      this.code.push(78965422);
    }

    // Necklaces (Jewelry)
    const element1 = <HTMLInputElement> document.getElementById('78965423');
    if (element1.checked === true) {
      this.code.push(78965423);
    }

    // Rings (Jewelry)
    const element2 = <HTMLInputElement> document.getElementById('789654224');
    if (element2.checked === true) {
      this.code.push(789654224);
    }

    // Earrings (Jewelry)
    const element3 = <HTMLInputElement> document.getElementById('78965425');
    if (element3.checked === true) {
      this.code.push(78965425);
    }

    // Dolls
    const element4 = <HTMLInputElement> document.getElementById('68977451');
    if (element4.checked === true) {
      this.code.push(68977451);
    }

    // Sculptures
    const element5 = <HTMLInputElement> document.getElementById('67887941');
    if (element5.checked === true) {
      this.code.push(67887941);
    }

    // Scarves
    const element6 = <HTMLInputElement> document.getElementById('62145331');
    if (element6.checked === true) {
      this.code.push(62145331);
    }

    // Blankets
    const element7 = <HTMLInputElement> document.getElementById('54887921');
    if (element7.checked === true) {
      this.code.push(54887921);
    }

    // Socks
    const element8 = <HTMLInputElement> document.getElementById('52871151');
    if (element8.checked === true) {
      this.code.push(52871151);
    }

    // Pencils
    const element9 = <HTMLInputElement> document.getElementById('50360051');
    if (element9.checked === true) {
      this.code.push(50360051);
    }

    // Painting
    const element10 = <HTMLInputElement> document.getElementById('49605401');
    if (element10.checked === true) {
      this.code.push(49605401);
    }

    // Oil (Painting)
    const element11 = <HTMLInputElement> document.getElementById('49605402');
    if (element11.checked === true) {
      this.code.push(49605402);
    }

    // Watercolor (Painting)
    const element12 = <HTMLInputElement> document.getElementById('49605403');
    if (element12.checked === true) {
      this.code.push(49605403);
    }

    // Acrlyic (Painting)
    const element13 = <HTMLInputElement> document.getElementById('49605404');
    if (element13.checked === true) {
      this.code.push(49605404);
    }
  }

  // Request Submission
  onRequestSubmit() {
    // calling the function to check checkboxes --- THIS IS THE ONLY THING THAT MISSING and the checkboxes should work but it's not...
    this.checkboxes();
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
