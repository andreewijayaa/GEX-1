import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-submit-categories',
  templateUrl: './submit-categories.component.html',
  styleUrls: ['./submit-categories.component.css']
})
export class SubmitCategoriesComponent implements OnInit {
  // Temp codes for MVP - Kurgan
  codes = [
    { code: 95141601, name: 'House' },
    { code: 95141602, name: 'Mobile Home' },
    { code: 91111603, name: 'Cooking/Food Prep'},
    { code: 82141505, name: 'Computer Generated Design'},
    { code: 82121503, name: 'Digital Printing'},
    { code: 82101503, name: 'Magazine Advertising'},
    { code: 50443200, name: 'Frozen Corn'},
    { code: 42131700, name: 'Surgical Textiles'},
    { code: 30111700, name: 'Plasters'},
    { code: 23241600, name: 'Metal Cutting Tools'},
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
  code: Number;
  codeList: [Number];
  None: Boolean;
  codeNames: any[];

  // Used for the dropdown
  public onChange(event): void {  // event will give you full breif of action
    const newVal = event.target.value;
    this.code = newVal;
  }

  // On initialization process of the webpage
  ngOnInit() {
  }

    // Tab first configuration
    currentTab = 'step1';

    // when the user changes tabs
    step1(currentTab) {
      this.currentTab = currentTab;
    }
    step2(currentTab) {
      this.currentTab = currentTab;
    }
    step3(currentTab) {
      this.currentTab = currentTab;
    }

  }
