import { Component, OnInit } from '@angular/core';

declare function init_slick();
@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    init_slick();
  }

}
