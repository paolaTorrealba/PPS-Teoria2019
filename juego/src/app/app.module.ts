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
import { AngularFireModule} from "@angular/fire";
import { AngularFireAuthModule} from "@angular/fire/auth";
import { RouterModule} from '@angular/router';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFirestoreModule, FirestoreSettingsToken } from "@angular/fire/firestore";
import { DeviceMotion, DeviceMotionAccelerationData } from '@ionic-native/device-motion/ngx';
//import { DeviceMotion, DeviceMotionAccelerationData } from '@ionic-native/device-motion/ngx';
//import { NgbModule} from '@ng-bootstrap/ng-bootstrap';




@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [  
    AngularFirestoreModule, 
    AngularFireStorageModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,RouterModule.forRoot([]),
    BrowserModule, 
    IonicModule.forRoot(),     
    AppRoutingModule],
  providers: [  
     StatusBar,
    SplashScreen,  
    DeviceMotion,    
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    { provide: FirestoreSettingsToken, useValue: {}}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
