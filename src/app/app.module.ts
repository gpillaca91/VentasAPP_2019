import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

// modulos
import { SharedModule } from './shared/shared.module';

// RUTAS
import { APP_ROUTING } from './app.routes';
import { PagesModule } from './pages/pages.module';


// firebase
// import { environment  } from '../environments/environment';
// import { AngularFireModule } from '@angular/fire';
// import { AngularFirestoreModule } from '@angular/fire/firestore';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    // SharedModule,
    APP_ROUTING,
    PagesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
