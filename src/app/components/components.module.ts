import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ProductoTarjetaComponent } from './producto-tarjeta/producto-tarjeta.component';
import { CartSidebarComponent } from './cart-sidebar/cart-sidebar.component';

@NgModule({
  declarations: [
    ProductoTarjetaComponent,
    CartSidebarComponent
  ],
  exports: [
    ProductoTarjetaComponent,
    CartSidebarComponent
  ], imports: [
    CommonModule,
    RouterModule
  ]
})
export class ComponentsModule { }
