import { Component, OnInit } from '@angular/core';
declare function init_main_js();
declare function init_slick();

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styles: []
})
export class PrincipalComponent implements OnInit {

  constructor() {
   }

  ngOnInit() {
    init_main_js();
    init_slick();
  }

}
