import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DeviceMotion, DeviceMotionAccelerationData, DeviceMotionAccelerometerOptions } from '@ionic-native/device-motion/ngx';
import { Flashlight } from '@ionic-native/flashlight/ngx';
import { timer } from 'rxjs/observable/timer';
import { Vibration } from '@ionic-native/vibration/ngx';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  x: string;
  y: string;
  z: string;
  timeStamp: string;
  seMovio: any;

  sonidoHorizontal = new Audio();
  sonidoVertical = new Audio();
  sonidoLateralIzquierdo = new Audio();
  sonidoLateralDerecho = new Audio();
  id: Subscription;
  off = true;
  on = false;

  constructor(public vibration: Vibration, public flashlight: Flashlight, public router: Router, public deviceMotion: DeviceMotion) {
    this.x = "-";
    this.y = "-";
    this.z = "-";
    this.timeStamp = "-";

  }


  start() {
    document.body.style.background = "rgb(107,234,75)";
    this.off = false;
    this.on = true;
    this.seMovio = false;
    var option: DeviceMotionAccelerometerOptions = { frequency: 2000 };
    this.id = this.deviceMotion.watchAcceleration(option).subscribe((result: DeviceMotionAccelerationData) => {
      this.x = "" + result.x;
      this.y = "" + result.y;
      this.z = "" + result.z;
      this.timeStamp = "" + result.timestamp;

      //lateral izquierdo x=9
      if (result.x > 8.6 && result.x < 9.9) {
        this.seMovio = true;
        this.sonidoLateralIzquierdo.src = "assets/sonido/alarma1.mp3";
        this.sonidoLateralIzquierdo.load();
        const playPromise = this.sonidoLateralIzquierdo.play();
        if (playPromise !== null) { playPromise.catch(() => { this.sonidoLateralIzquierdo.play(); }) }
      }

      //lateral derecho x=-9
      if (result.x < -8.5 && result.x > -9.5) {
        this.seMovio = true;
        this.sonidoLateralDerecho.src = "assets/sonido/alarma2.mp3";
        this.sonidoLateralDerecho.load();
        const playPromise = this.sonidoLateralDerecho.play();
        if (playPromise !== null) { playPromise.catch(() => { this.sonidoLateralDerecho.play(); }) }
      }

      //vertical
      if (result.y > 8.0) {
        this.seMovio = true;
        this.sonidoVertical.src = "assets/sonido/alarma3.mp3";
        this.sonidoVertical.load();
        const playPromise = this.sonidoVertical.play();
        if (playPromise !== null) {
          playPromise.catch(() => {
            timer(3000).subscribe(() => this.sonidoVertical.play())
          })
        }

        this.flashlight.switchOn();
      } else {
        this.flashlight.switchOff();
      }

      //horizontal --OK
      if (result.z < 9.8 && result.z > 9.6 && this.seMovio) {

        this.sonidoHorizontal.src = "assets/sonido/alarma4.mp3";
        this.sonidoHorizontal.load();
        const playPromise = this.sonidoHorizontal.play();
        if (playPromise !== null) {
          playPromise.catch(() => {
            timer(3000).subscribe(() => this.sonidoHorizontal.play());
          })
        }
        this.flashlight.switchOff();
        this.vibration.vibrate(5000);
      }
      else {
        this.vibration.vibrate(0);
      }
    });
  }

  stop() {
    document.body.style.background = "rgb(9,9,9)";
    this.x = "";
    this.y = "";
    this.z = "";
    this.id.unsubscribe();
    this.off = true;
    this.on = false;
  }


  ngOnInit() { }
  onSubmitApagar() {
    document.body.style.background = "rgb(200,200,200)";
    console.log("se apaga la alarma");
    this.router.navigate(['/apagar']);
  }
}

