import { Component, OnInit } from '@angular/core';
declare function init_slick();
declare function init_select();

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductDetailComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    init_slick();
    init_select();
  }

}
