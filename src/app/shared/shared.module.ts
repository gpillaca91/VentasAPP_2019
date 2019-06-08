import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';


// components

import { HeaderComponent } from './header/header.component';
import { SliderComponent } from './slider/slider.component';
import { BannerComponent } from './banner/banner.component';
import { FooterComponent } from './footer/footer.component';
import { NotFountPageComponent } from './not-fount-page/not-fount-page.component';

@NgModule({
  declarations: [
    HeaderComponent,
    SliderComponent,
    BannerComponent,
    FooterComponent,
    NotFountPageComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports : [
    HeaderComponent,
    SliderComponent,
    BannerComponent,
    FooterComponent
  ]
})
export class SharedModule { }
