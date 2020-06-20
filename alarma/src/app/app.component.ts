import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { timer } from 'rxjs/observable/timer';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  
  private splash= true;
  private notificationAudio= new Audio("../assets/sonido/inicio.mp3")
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();

      if (this.splash){
setTimeout(() => {
  console.log("play")
  this.notificationAudio.play();
  setTimeout(()=> {
    this.pararAlarma();
    this.splash = false;
  }, 5650)
}, 5300)
      }
    });
  }

  pararAlarma() {
    this.notificationAudio.pause();
    this.notificationAudio.currentTime = 0;
  }
}


//   constructor(private platform: Platform, private splashScreen: SplashScreen, private statusBar: StatusBar) {
//     this.initializeApp();
//       this. reproducirSonido();
//   }

//   initializeApp() {
//     this.platform.ready().then(() => {
//       this.statusBar.styleDefault();
//       this.splashScreen.hide();

//     });
//   }

//    reproducirSonido(){
//     let sonido = new Audio();
//     sonido.src="assets/sonido/sonido.mp3";
//     sonido.load();
//     sonido.play();
//     timer(6000).subscribe(() =>  sonido.muted=true )
    

//   }
// }
