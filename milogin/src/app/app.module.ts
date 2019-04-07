import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import {RouterModule} from '@angular/router';
import { LoginComponent } from './componentes/login/login.component';
import { ErrorComponent } from './componentes/error/error.component';
import { RegistracionComponent } from './componentes/registracion/registracion.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from  '@angular/fire/database';
const firebaseConfig = {
    apiKey: 'AIzaSyDu3ohIh5aGpk9i3hu0j7Nw2TPEwfugsyU',
    authDomain: 'milogin-1a569.firebaseapp.com',
    databaseURL: 'https://milogin-1a569.firebaseio.com',
    projectId: 'milogin-1a569',
    storageBucket: 'gs://milogin-1a569.appspot.com/',
    messagingSenderId: ''
};


@NgModule({
  declarations: [AppComponent,LoginComponent,ErrorComponent,RegistracionComponent],
  entryComponents: [],
  imports: [BrowserModule, 
    IonicModule.forRoot(), 
    AngularFireModule.initializeApp(firebaseConfig,'milogin'),
    AngularFireDatabaseModule,
    AppRoutingModule,
   // RouterModule.forRoot([
   // { path: 'login', component: LoginComponent },
    //{ path: '**', component: ErrorComponent},
    //{ path: 'error', component: ErrorComponent},
    //{ path: 'registracion', component: RegistracionComponent}
  //])
],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})


export class AppModule {}
