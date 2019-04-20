import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { timer} from 'rxjs/observable/timer';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  constructor( private platform: Platform,  private splashScreen: SplashScreen,   private statusBar: StatusBar) {
    this.initializeApp();
    this. reproducirSonido();
  }

  initializeApp() {   
      this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  reproducirSonido(){
    let sonido = new Audio();
    sonido.src="assets/sonido/sonido.mp3";
    sonido.load();

    const playPromise = sonido.play();
    if (playPromise !== null){ playPromise.catch(() => { sonido.play(); }) }
    
    timer(6000).subscribe(() =>  sonido.muted=true )
    

  }
 
}
