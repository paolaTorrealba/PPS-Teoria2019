import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DeviceMotion, DeviceMotionAccelerationData, DeviceMotionAccelerometerOptions } from '@ionic-native/device-motion/ngx';
import { Flashlight } from '@ionic-native/flashlight/ngx';
//import { Shake } from '@ionic-native/shake/ngx';
import { timer} from 'rxjs/observable/timer';
import { Vibration } from '@ionic-native/vibration/ngx';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  x:string;
  y:string;
  z:string;
  timeStamp:string;

 
  seMovio: any;

  sonidoHorizontal = new Audio();
  sonidoVertical = new Audio();
  sonidoLateralIzquierdo = new Audio();
  sonidoLateralDerecho = new Audio();
  id: Subscription;

  constructor(public vibration: Vibration, public flashlight: Flashlight, public router: Router, public deviceMotion: DeviceMotion) {
    this.x= "-";
    this.y= "-";
    this.z= "-";
    this.timeStamp= "-";
  
  }


start(){
      // document.getElementById('globalButton').style.background="#E14217";

      this.seMovio=false;
      var option: DeviceMotionAccelerometerOptions = {frequency: 2000 };
      this.id= this.deviceMotion.watchAcceleration(option).subscribe((result: DeviceMotionAccelerationData) =>
      {
          this.x= "" + result.x;
          this.y= "" + result.y;
          this.z= "" + result.z;
          this.timeStamp= ""+result.timestamp;

          //lateral izquierdo x=9
          if (result.x>8.6  && result.x<9.9 ){
            this.seMovio=true;
            this.sonidoLateralIzquierdo.src="assets/sonido/alarma1.mp3";
            this.sonidoLateralIzquierdo.load();
            const playPromise =  this.sonidoLateralIzquierdo.play();
            if (playPromise !== null){ playPromise.catch(() => {  this.sonidoLateralIzquierdo.play(); }) }
          } 
         
        
          //lateral derecho x=-9
          if (result.x<-8.5 && result.x>-9.5){
            this.seMovio=true;
            this.sonidoLateralDerecho.src="assets/sonido/alarma2.mp3";
            this.sonidoLateralDerecho.load();
            const playPromise =  this.sonidoLateralDerecho.play();
            if (playPromise !== null){ playPromise.catch(() => {  this.sonidoLateralDerecho.play(); }) }           
          }
                     

            //vertical
          if (result.y<9.5 && result.y>8.5){
            this.seMovio=true;
            this.sonidoVertical.src="assets/sonido/alarma3.mp3";
            this.sonidoVertical.load();
            const playPromise =  this.sonidoVertical.play();
            if (playPromise !== null){ playPromise.catch(() => {  this.sonidoVertical.play(); }) }
           
            this.flashlight.switchOn();     
          }else{
            this.flashlight.switchOff();  
    
                // this.sonidoVertical.muted=true;
          }

            //horizontal --OK
          if (result.z<9.8 && result.z>9.6 &&  this.seMovio){  
            
            this.sonidoHorizontal.src="assets/sonido/alarma4.mp3";
            this.sonidoHorizontal.load();
            const playPromise =  this.sonidoHorizontal.play();
            if (playPromise !== null){ playPromise.catch(() => {  this.sonidoHorizontal.play(); }) }         
            this.flashlight.switchOff();    
            this.vibration.vibrate(5000);   
          }
          else{
            this.vibration.vibrate(0);
            
        
          }
         
      });    
    
     
    } 

stop(){
  this.id.unsubscribe();
 // document.getElementById('globalButton').style.background="#4ec04e;";
}
/*
reproducirSonidoVertical(){
  let sonido = new Audio();
  sonido.src="assets/sonido/alarma1.mp3";
  sonido.load();
  const playPromise = sonido.play();
  if (playPromise !== null){ playPromise.catch(() => { sonido.play(); }) }
}
reproducirSonidoLateralDerecho(){
  let sonido = new Audio();
  sonido.src="assets/sonido/alarma2.mp3";
  sonido.load();
  const playPromise = sonido.play();
  if (playPromise !== null){ playPromise.catch(() => { sonido.play(); }) }
}
reproducirSonidoLateralIzquierdo(){
  let sonido = new Audio();
  sonido.src="assets/sonido/alarma3.mp3";
  sonido.load();
  const playPromise = sonido.play();
  if (playPromise !== null){ playPromise.catch(() => { sonido.play(); }) }
}
reproducirSonidoHorizontal(){
  let sonido = new Audio();
  sonido.src="assets/sonido/alarma4.mp3";
  sonido.load();
  const playPromise = sonido.play();
  if (playPromise !== null){ playPromise.catch(() => { sonido.play(); }) }
}
*/


  ngOnInit() { }
  onSubmitApagar (){
     console.log("se apaga la alarma");
     this.router.navigate(['/apagar']);
 
}
}

