import { RouterModule, Routes } from '@angular/router';

// components
import { PrincipalComponent } from './pages/principal.component';


import { HomeComponent } from './pages/home/home.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ShopComponent } from './pages/product/shop.component';
import { AboutComponent } from './pages/about/about.component';
import { NotFountPageComponent } from './shared/not-fount-page/not-fount-page.component';
import { LoginComponent } from './pages/login/login.component';
import { ProductDetailComponent } from './pages/product/product-detail.component';
import { CartDetailComponent } from './pages/cart-detail/cart-detail.component';


const RUTAS: Routes = [
    { path: '', component: PrincipalComponent, children:
        [
            { path: 'home', component: HomeComponent },
            { path: 'contact', component: ContactComponent },
            { path: 'product', component: ShopComponent },
            { path: 'product-detail', component: ProductDetailComponent },
            { path: 'cart-detail', component: CartDetailComponent },
            { path: 'about', component: AboutComponent },
            { path: '', redirectTo: 'home', pathMatch: 'full'  },
        ]
    },
    { path: 'login', component: LoginComponent },
    { path: '**', component: NotFountPageComponent  },
];
export const APP_ROUTING = RouterModule.forRoot( RUTAS , { useHash: true } );
