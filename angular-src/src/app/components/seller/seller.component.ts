import { Component, OnInit } from '@angular/core';
import { SellerService } from '../../services/seller.service';
import { Variable } from '@angular/compiler/src/render3/r3_ast';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-seller',
  templateUrl: './seller.component.html',
  styleUrls: ['./seller.component.css']
})
export class SellerComponent implements OnInit {

  seller: any;
  requestList: Object;

  constructor(private sellerService: SellerService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.seller = this.route.snapshot.data['seller'];
  }

  currentTab = 'requests';

  requests(currentTab) {
    this.currentTab = currentTab;
  }

  history(currentTab) {
    this.currentTab = currentTab;
  }
}
