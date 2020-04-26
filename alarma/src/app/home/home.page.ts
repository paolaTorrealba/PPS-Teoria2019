import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DeviceMotion, DeviceMotionAccelerationData, DeviceMotionAccelerometerOptions } from '@ionic-native/device-motion/ngx';
import { Flashlight } from '@ionic-native/flashlight/ngx';
import { timer } from 'rxjs/observable/timer';
import { Vibration } from '@ionic-native/vibration/ngx';
import { Subscription } from 'rxjs';
import { PopoverController } from '@ionic/angular';

import { OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  timeStamp: string;
  seMovio: any;

  sonidoHorizontal = new Audio();
  sonidoVertical = new Audio();
  sonidoLateralIzquierdo = new Audio();
  sonidoLateralDerecho = new Audio();
  id: Subscription;
  off = true;
  on = false;
  contraseniaValida = false;
  password: string;
  pedirPass = false;
  mostrarAlert = false;

  mensaje0="na";
  mensaje1="na";
  mensaje2="na";

  @Output() alarmActivatedEvent: EventEmitter<Boolean> = new EventEmitter<Boolean>();
  alarmaActivada: Boolean;
  private estaEnPosicionIzquierda: boolean;
  private estaEnPosicionDerecha: boolean;
  private estaEnPosicionHorizontal: boolean;
  private estaEnPosicionVertical: boolean;
  private eventListener;

  constructor(private vibration: Vibration, 
    private flashlight: Flashlight,
    public popoverCtrl: PopoverController) {
    this.alarmaActivada = false;
    this.estaEnPosicionHorizontal = false;
    this.estaEnPosicionVertical = false;
    this.estaEnPosicionDerecha = false;
    this.estaEnPosicionIzquierda = false;
    this.eventListener = event => {
      this.processOrientation(event);
    };
  }  


  private init(){
    this.mensaje0 ="init";
    this.estaEnPosicionHorizontal = true;
    this.estaEnPosicionVertical = false;
    this.estaEnPosicionIzquierda = false;
    this.estaEnPosicionDerecha = false;    
}
  private posicionActualDiferenteAVertical() {
    this.estaEnPosicionIzquierda = false;
    this.estaEnPosicionDerecha = false;
    this.estaEnPosicionVertical = false;
  }

  // detecta movimiento vertical. 
  //indico que se movio verticalmente y enciendo linterna + sonido
  private posicionActualVertical() {
      this.estaEnPosicionVertical = true;
      this.estaEnPosicionHorizontal = false;
      this.estaEnPosicionIzquierda = true;
      this.estaEnPosicionDerecha = true;
      this.flashlight.switchOn();
      timer(5000).subscribe( () => {
        this.flashlight.switchOff();
      });
      this.sonidoVertical.src = "assets/sonido/sonidoVertical.mp3";
      this.sonidoVertical.load();
      const playPromise = this.sonidoVertical.play();
      if (playPromise !== null) {
          playPromise.catch(() => {
            timer(5000).subscribe(() => this.sonidoVertical.play())
          })
      }
  }

  //?
  private posicionActualDiferenteAHorizontal() {
    this.estaEnPosicionIzquierda = false;
    this.estaEnPosicionDerecha = false;
    this.vibration.vibrate(0);
  }

  //Detecta que se movio horizontalmente y comienza a vibrar
  private posicionActualHorizontal() {
      this.estaEnPosicionHorizontal = true;
      this.estaEnPosicionVertical = false;
      this.estaEnPosicionIzquierda = false;
      this.estaEnPosicionDerecha = false;
      this.vibration.vibrate(5000); 
  }



  private processOrientation(event: DeviceOrientationEvent) {
    const alpha = event.alpha === null ? 0 : Math.round(event.alpha);
    const beta = event.beta === null ? 0 : Math.round(event.beta);
    const gamma = event.gamma === null ? 0 : Math.round(event.gamma);
    console.log("active alamra");
    //Si NO estaba en posicion VERTICAL y ahora si 
    if (!this.estaEnPosicionVertical && (beta >= 80 && beta <= 100)) {
        this.mensaje1="entro en if";
        this.posicionActualVertical();
        this.posicionActualDiferenteAHorizontal();      
    }//Si NO estaba en posicion HORIZONTAL y ahora si  
    else if (!this.estaEnPosicionHorizontal && (beta >= -10 && beta <= 10)) {
        this.mensaje2="entro en else if" +this.estaEnPosicionHorizontal, beta;
        this.posicionActualDiferenteAVertical(); 
        this.posicionActualHorizontal();           
    }//Si estaba en pocision HORIZONTAL y se movio hacia la IZQUIERDA
     else if (!this.estaEnPosicionIzquierda && !this.estaEnPosicionDerecha 
             && this.estaEnPosicionHorizontal && (gamma < -70 && gamma >= -90)) {
         this.estaEnPosicionIzquierda = true;
         this.estaEnPosicionDerecha = false;
         this.sonidoLateralIzquierdo.src = "assets/sonido/sonidoIzquierda.mp3";
         this.sonidoLateralIzquierdo.load();
         const playPromise = this.sonidoLateralIzquierdo.play();
         if (playPromise !== null) { playPromise.catch(() => { 
           this.sonidoLateralIzquierdo.play(); }) 
         }
    } //Si estaba en pocision HORIZONTAL y se movio hacia la DERECHA
    else if (!this.estaEnPosicionDerecha && !this.estaEnPosicionIzquierda 
             && this.estaEnPosicionHorizontal && (gamma <= 90 && gamma > 70)) {
         this.estaEnPosicionDerecha = true;
         this.estaEnPosicionIzquierda = false;
         this.sonidoLateralDerecho.src = "assets/sonido/sonidoDerecha.mp3";
         this.sonidoLateralDerecho.load();
         const playPromise = this.sonidoLateralDerecho.play();
         if (playPromise !== null) { playPromise.catch(() => {
            this.sonidoLateralDerecho.play(); }) 
         }
    }//Si estaba en pocision HORIZONTAL 
     else if (this.estaEnPosicionHorizontal && (beta >= -10 && beta <= 10)
              && !(gamma <= 90 && gamma > 70) && !(gamma < -70 && gamma >= -90)) {
      this.estaEnPosicionDerecha = false;
      this.estaEnPosicionIzquierda = false;
    }
  }

  start() {
    this.off = false;
    this.on = true;
    this.init();
    document.body.style.background = "rgb(107,234,75)";
    this.alarmaActivada = !this.alarmaActivada;
    this.alarmActivatedEvent.emit(this.alarmaActivada);
    const elistener = this.eventListener;
    if (this.alarmaActivada) {      // si esta activada, escucho eventos
      window.addEventListener('deviceorientation', elistener, true);
    } 
    else { // si se apaga, dejo de escuchar eventos
      this.estaEnPosicionHorizontal = false;
      this.estaEnPosicionVertical = false;
      this.estaEnPosicionDerecha = false;
      this.estaEnPosicionIzquierda = false;
      this.posicionActualDiferenteAVertical();
      this.init();
      window.removeEventListener('deviceorientation', elistener, true);
    }

  }


  enviar (){
    console.log("local: ", localStorage.getItem("alarmaPass"));
    console.log("devic: ",this.password);
    if (this.password == localStorage.getItem("alarmaPass")){
      this.contraseniaValida = true;
      console.log("es valida");
      this.pedirPass =false;
      this.stop();

    }
    else {
      this.mostrarAlert=true;
    }

  }

  encenderAlarma(){
    this.pedirPass =false;
    this.off = false;
    this.on = true;
    document.body.style.background = "rgb(107,234,75)";
    this.start();
  }
  apagarAlarma (){    
    this.pedirPass =true; 
    this.mostrarAlert=false;  
  }
  stop() {
      this.off = true;
      this.on = false;   
      document.body.style.background = "rgb(9,9,9)";
      this.alarmaActivada = !this.alarmaActivada;
      this.alarmActivatedEvent.emit(this.alarmaActivada);
      const elistener = this.eventListener;
      if (this.alarmaActivada) {   
        window.addEventListener('deviceorientation', elistener, true);
      } 
      else { 
        this.estaEnPosicionHorizontal = false;
        this.estaEnPosicionVertical = false;
        this.estaEnPosicionDerecha = false;
        this.estaEnPosicionIzquierda = false;
        this.posicionActualDiferenteAVertical();
        this.init();
        window.removeEventListener('deviceorientation', elistener, true);
      }
  }

  ngOnInit() { }  


}
