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

import { SplashComponent } from './componentes/splash/splash.component';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { ImagePicker } from '@ionic-native/image-picker/ngx';

//agrego esto por el video



@NgModule({
  declarations: [AppComponent,SplashComponent], 
  entryComponents: [],
  imports: [
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,RouterModule.forRoot([]),
    BrowserModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [
    Camera, 
    StatusBar,
    SplashScreen,
    ImagePicker,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
