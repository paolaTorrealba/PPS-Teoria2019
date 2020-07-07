import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
//importamos la variable de configuracion y el modulo de angularFire
import { firebaseConfig} from "../environments/environment";
// import { AngularFireModule} from "@angular/fire";
import { AngularFireAuthModule} from "@angular/fire/auth";
import { RouterModule} from '@angular/router';
import { AngularFireModule } from 'angularfire2';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { SplashComponent } from './componentes/splash/splash.component';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { ImagePicker } from '@ionic-native/image-picker/ngx';
 import {AngularFirestoreModule,FirestoreSettingsToken } from '@angular/fire/firestore';
 import {FotoComponent} from './componentes/foto/foto.component';
import { General } from './general';
//agrego esto por el video



@NgModule({
  declarations: [AppComponent,SplashComponent,FotoComponent], 
  entryComponents: [FotoComponent],
  imports: [
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule, AngularFirestoreModule, RouterModule.forRoot([]),
    BrowserModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [
    Camera, 
    StatusBar,
    General,
    SplashScreen,
    ImagePicker,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    { provide: FirestoreSettingsToken, useValue: {} }
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
