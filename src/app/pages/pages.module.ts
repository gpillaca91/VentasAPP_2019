import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../shared/shared.module';
import { ComponentsModule } from '../components/components.module';

import { PrincipalComponent } from './principal.component';

import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { ShopComponent } from './product/shop.component';
import { LoginComponent } from './login/login.component';
import { ProductDetailComponent } from './product/product-detail.component';
import { CartDetailComponent } from './cart-detail/cart-detail.component';

@NgModule({
  declarations: [
    PrincipalComponent,
    ContactComponent,
    AboutComponent,
    ShopComponent,
    LoginComponent,
    HomeComponent,
    ProductDetailComponent,
    CartDetailComponent
  ],
  exports: [
    ContactComponent,
    AboutComponent,
    ShopComponent,
    HomeComponent,
    LoginComponent,
    ProductDetailComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    ComponentsModule
  ]
})
export class PagesModule { }
