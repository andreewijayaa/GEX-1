import { Component, OnInit } from '@angular/core';
import { SellerService } from '../../services/seller.service';
import { Variable } from '@angular/compiler/src/render3/r3_ast';

@Component({
  selector: 'app-seller',
  templateUrl: './seller.component.html',
  styleUrls: ['./seller.component.css']
})
export class SellerComponent implements OnInit {

  seller: Object;
  requestList: Object;
  offerList: Object;
  title0: Object;
  title1: Object;
  title2: Object;
  title3: Object;
  title4: Object;
  title5: Object;
  title6: Object;
  title7: Object;
  title8: Object;
  title9: Object;
  firstName: string;

  constructor(private sellerService: SellerService) { }

  ngOnInit() {
    this.sellerService.getSellerProfile().subscribe((profile: any) => {
      this.seller = profile.data;
    },
      err => {
        console.log(err);
        return false;
      });

    this.sellerService.getSellerOffersHistory().subscribe((offers: any) => {
      this.offerList = offers;

      //checking if the title is null
      try {
        this.title0 = offers[0].title;
      } catch (err) {
        document.getElementById('card0').hidden = true;
        document.getElementById('card0').parentNode.removeChild(document.getElementById('card0'));
      }

      try {
        this.title1 = offers[1].title;
      } catch (err) {
        document.getElementById('card1').hidden = true;
        document.getElementById('card1').parentNode.removeChild(document.getElementById('card1'));
      }

      try {
        this.title2 = offers[2].title;
      } catch (err) {
        document.getElementById('card2').hidden = true;
        document.getElementById('card2').parentNode.removeChild(document.getElementById('card2'));
      }

      try {
        this.title3 = offers[3].title;
      } catch (err) {
        document.getElementById('card3').hidden = true;
        document.getElementById('card3').parentNode.removeChild(document.getElementById('card3'));
      }

      try {
        this.title4 = offers[4].title;
      } catch (err) {
        document.getElementById('card4').hidden = true;
        document.getElementById('card4').parentNode.removeChild(document.getElementById('card4'));
      }

      try {
        this.title5 = offers[5].title;
      } catch (err) {
        document.getElementById('card5').hidden = true;
        document.getElementById('card5').parentNode.removeChild(document.getElementById('card5'));
      }

      try {
        this.title6 = offers[6].title;
      } catch (err) {
        document.getElementById('card6').hidden = true;
        document.getElementById('card6').parentNode.removeChild(document.getElementById('card6'));
      }

      try {
        this.title7 = offers[7].title;
      } catch (err) {
        document.getElementById('card7').hidden = true;
        document.getElementById('card7').parentNode.removeChild(document.getElementById('card7'));
      }

      try {
        this.title8 = offers[8].title;
      } catch (err) {
        document.getElementById('card8').hidden = true;
        document.getElementById('card8').parentNode.removeChild(document.getElementById('card8'));
      }

      try {
        this.title9 = offers[9].title;
      } catch (err) {
        document.getElementById('card9').hidden = true;
        document.getElementById('card9').parentNode.removeChild(document.getElementById('card9'));
      }
    },
      err => {
        console.log(err);
        return false;
      });
  }

currentTab = 'requests';

requests(currentTab) {
  this.currentTab = currentTab;
}

history(currentTab) {
  this.currentTab = currentTab;
}
}
