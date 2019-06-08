import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';


import { PrincipalComponent } from './principal.component';

import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { ShopComponent } from './shop/shop.component';
import { LoginComponent } from './login/login.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    ContactComponent,
    AboutComponent,
    ShopComponent,
    LoginComponent,
    HomeComponent,
    PrincipalComponent
  ],
  exports: [
    ContactComponent,
    AboutComponent,
    ShopComponent,
    HomeComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule
  ]
})
export class PagesModule { }
