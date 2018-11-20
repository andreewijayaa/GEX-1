import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-seller',
  templateUrl: './seller.component.html',
  styleUrls: ['./seller.component.css']
})
export class SellerComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

currentTab = 'requests';

requests(currentTab){
  this.currentTab = currentTab;
}

history(currentTab){
  this.currentTab = currentTab;
}
}
