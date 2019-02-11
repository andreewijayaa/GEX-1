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
  submitLabels: String[];
  description: String = 'Enter description of desired product';
  deadline: Date;
  buttonText: String = 'Submit Your Request to Sellers on Requiren';

  public onChange(event): void {  // Simple deadline selection - Bryan Vu
    if (event.target.value == "2days") {
      this.deadline = new Date();
      this.deadline.setDate(this.deadline.getDate() + 2);
    }
    if (event.target.value == "5days") {
      this.deadline = new Date();
      this.deadline.setDate(this.deadline.getDate() + 5);
    }
    if (event.target.value == "1week") {
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
    this.code = [];
    this.submitLabels = [];
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

  deleteLabel(del: String) {
    var slsize = this.submitLabels.length;
    for (var n = 0; n < slsize; n++) {
      if (this.submitLabels[n] == del) {
        this.submitLabels.splice(n, 1);
      }
    }
  }

  public checkChange(event): void {

    if (event.target.value == '78965422') {
      const box0 = <HTMLInputElement> document.getElementById('78965422');
      if (box0.checked == true) {
        this.submitLabels.push("Jewelry");
        this.labelButton();
      }
      else {
        if (this.submitLabels.length != 0) {
          this.deleteLabel("Jewelry");
          this.labelButton();
        }
      }
    }

    // Necklaces (Jewelry)
    if (event.target.value == '78965423') {
      const box1 = <HTMLInputElement> document.getElementById('78965423');
      if (box1.checked == true) {
        this.submitLabels.push("Necklaces (Jewelry)");
        this.labelButton();
      }
      else {
        if (this.submitLabels.length != 0) {
          this.deleteLabel("Necklaces (Jewelry)");
          this.labelButton();
        }
      }
    }

    // Rings (Jewelry)
    if (event.target.value == '78965424') {
      const box2 = <HTMLInputElement> document.getElementById('78965424');
      if (box2.checked == true) {
        this.submitLabels.push("Rings (Jewelry)");
        this.labelButton();
      }
      else {
        if (this.submitLabels.length != 0) {
          this.deleteLabel("Rings (Jewelry)");
          this.labelButton();
        }
      }
    }

    // Earrings (Jewelry)
    if (event.target.value == '78965425') {
      const box3 = <HTMLInputElement> document.getElementById('78965425');
      if (box3.checked == true) {
        this.submitLabels.push("Earrings (Jewelry)");
        this.labelButton();
      }
      else {
        if (this.submitLabels.length != 0) {
          this.deleteLabel("Earrings (Jewelry)");
          this.labelButton();
        }
      }
    }

    // Dolls
    if (event.target.value == '68977451') {
      const box4 = <HTMLInputElement> document.getElementById('68977451');
      if (box4.checked == true) {
        this.submitLabels.push("Dolls");
        this.labelButton();
      }
      else {
        if (this.submitLabels.length != 0) {
          this.deleteLabel("Dolls");
          this.labelButton();
        }
      }
    }

    // Sculptures
    if (event.target.value == '67887941') {
      const box5 = <HTMLInputElement> document.getElementById('67887941');
      if (box5.checked == true) {
        this.submitLabels.push("Sculptures");
        this.labelButton();
      }
      else {
        if (this.submitLabels.length != 0) {
          this.deleteLabel("Sculptures");
          this.labelButton();
        }
      }
    }

    // Scarves
    if (event.target.value == '62145331') {
      const box6 = <HTMLInputElement> document.getElementById('62145331');
      if (box6.checked == true) {
        this.submitLabels.push("Scarves");
        this.labelButton();
      }
      else {
        if (this.submitLabels.length != 0) {
          this.deleteLabel("Scarves");
          this.labelButton();
        }
      }
    }

    // Blankets
    if (event.target.value == '54887921') {
      const box7 = <HTMLInputElement> document.getElementById('54887921');
      if (box7.checked == true) {
        this.submitLabels.push("Blankets");
        this.labelButton();
      }
      else {
        if (this.submitLabels.length != 0) {
          this.deleteLabel("Blankets");
          this.labelButton();
        }
      }
    }

    // Socks
    if (event.target.value == '52871151') {
      const box8 = <HTMLInputElement> document.getElementById('52871151');
      if (box8.checked == true) {
        this.submitLabels.push("Socks");
        this.labelButton();
      }
      else {
        if (this.submitLabels.length != 0) {
          this.deleteLabel("Socks");
          this.labelButton();
        }
      }
    }

    // Pencils
    if (event.target.value == '50360051') {
      const box9 = <HTMLInputElement> document.getElementById('50360051');
      if (box9.checked == true) {
        this.submitLabels.push("Pencils");
        this.labelButton();
      }
      else {
        if (this.submitLabels.length != 0) {
          this.deleteLabel("Pencils");
          this.labelButton();
        }
      }
    }

    // Painting
    if (event.target.value == '49605401') {
      const box10 = <HTMLInputElement> document.getElementById('49605401');
      if (box10.checked == true) {
        this.submitLabels.push("Painting");
        this.labelButton();
      }
      else {
        if (this.submitLabels.length != 0) {
          this.deleteLabel("Painting");
          this.labelButton();
        }
      }
    }

    // Oil (Painting)
    if (event.target.value == '49605402') {
      const box11 = <HTMLInputElement> document.getElementById('49605402');
      if (box11.checked == true) {
        this.submitLabels.push("Oil (Painting)");
        this.labelButton();
      }
      else {
        if (this.submitLabels.length != 0) {
          this.deleteLabel("Oil (Painting)");
          this.labelButton();
        }
      }
    }

    // Watercolor (Painting)
    if (event.target.value == '49605403') {
      const box12 = <HTMLInputElement> document.getElementById('49605403');
      if (box12.checked == true) {
        this.submitLabels.push("Watercolor (Painting)");
        this.labelButton();
      }
      else {
        if (this.submitLabels.length != 0) {
          this.deleteLabel("Watercolor (Painting)");
          this.labelButton();
        }
      }
    }

    // Acrlyic (Painting)
    if (event.target.value == '49605404') {
      const box13 = <HTMLInputElement> document.getElementById('49605404');
      if (box13.checked == true) {
        this.submitLabels.push("Acrylic (Painting)");
        this.labelButton();
      }
      else {
        if (this.submitLabels.length != 0) {
          this.deleteLabel("Acrylic (Painting)");
          this.labelButton();
        }
      }
    }

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
