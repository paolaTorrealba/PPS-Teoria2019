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
  showSplash = true; // <-- sami
  playSound = true;
  constructor( private platform: Platform,  private splashScreen: SplashScreen,   private statusBar: StatusBar) {
    
    this.initializeApp();
  
  }

  initializeApp() {   
      this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      this. reproducirSonido();
      this.playSound=false;
      timer(3000).subscribe(() => this.showSplash = false); // <-- sami
    });
  }

  reproducirSonido(){
    let sonido = new Audio();
    sonido.src="assets/sonido/sonido.mp3";
    sonido.load();
    const playPromise = sonido.play();
    if (playPromise !== null){ playPromise.catch(() => { sonido.play(); }) }
    timer(3000).subscribe(() =>  sonido.muted=true )
    

  }
 
}
