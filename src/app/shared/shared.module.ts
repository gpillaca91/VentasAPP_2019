import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';


// components

import { HeaderComponent } from './header/header.component';
import { SliderComponent } from './slider/slider.component';
import { BannerComponent } from './banner/banner.component';
import { FooterComponent } from './footer/footer.component';
import { NotFountPageComponent } from './not-fount-page/not-fount-page.component';
import { BreadCrumbComponent } from './bread-crumb/bread-crumb.component';

@NgModule({
  declarations: [
    HeaderComponent,
    SliderComponent,
    BannerComponent,
    FooterComponent,
    NotFountPageComponent,
    BreadCrumbComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports : [
    HeaderComponent,
    SliderComponent,
    BannerComponent,
    FooterComponent,
    BreadCrumbComponent
  ]
})
export class SharedModule { }
