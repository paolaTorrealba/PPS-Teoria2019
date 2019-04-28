import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DeviceMotion, DeviceMotionAccelerationData, DeviceMotionAccelerometerOptions } from '@ionic-native/device-motion/ngx';

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

  id: any;

  sonidoHorizontal = new Audio();
  sonidoVertical = new Audio();
  sonidoLateralIzquierdo = new Audio();
  sonidoLateralDerecho = new Audio();
  constructor(  public router: Router, public deviceMotion: DeviceMotion) {
    this.x= "-";
    this.y= "-";
    this.z= "-";
    this.timeStamp= "-";
  }


start(){
  try{
      var option: DeviceMotionAccelerometerOptions = 
      {
        frequency: 2000
      };
      this.id= this.deviceMotion.watchAcceleration(option).subscribe((result: DeviceMotionAccelerationData) =>
      {
          this.x= "" + result.x;
          this.y= "" + result.y;
          this.z= "" + result.z;
          this.timeStamp= ""+result.timestamp;

          //lateral izquierdo x=9
          if (result.x<9.5 && result.x>8.5){
            this.sonidoLateralIzquierdo.src="assets/sonido/alarma1.mp3";
            this.sonidoLateralIzquierdo.load();
            const playPromise =  this.sonidoLateralIzquierdo.play();
            if (playPromise !== null){ playPromise.catch(() => {  this.sonidoLateralIzquierdo.play(); }) }
           
          }else{
           //this.sonidoLateralIzquierdo.muted=true;
          }
        
          //lateral derecho x=-9
          if (result.x>-8.5 && result.x<-9.5){
            this.sonidoLateralDerecho.src="assets/sonido/alarma2.mp3";
            this.sonidoLateralDerecho.load();
            const playPromise =  this.sonidoLateralDerecho.play();
            if (playPromise !== null){ playPromise.catch(() => {  this.sonidoLateralDerecho.play(); }) }
           
          }else{
         //  this.sonidoLateralDerecho.muted=true;
          }       
          

            //vertical
          if (result.y<9.5 && result.y>8.5){
            this.sonidoVertical.src="assets/sonido/alarma3.mp3";
            this.sonidoVertical.load();
            const playPromise =  this.sonidoVertical.play();
            if (playPromise !== null){ playPromise.catch(() => {  this.sonidoVertical.play(); }) }
           
          }else{
          // this.sonidoVertical.muted=true;
          }

            //horizontal
          if (result.z<9.5 && result.z>8.5){         
            this.sonidoHorizontal.src="assets/sonido/alarma4.mp3";
            this.sonidoHorizontal.load();
            const playPromise =  this.sonidoHorizontal.play();
            if (playPromise !== null){ playPromise.catch(() => {  this.sonidoHorizontal.play(); }) }
           
          }else{
         // this.sonidoHorizontal.muted=true;
          }
         
      });
      }catch(error){
          alert("error" + error);
      }
    } 

stop(){
  this.id.unsuscribe();
}

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



  ngOnInit() { }
  onSubmitApagar (){
     console.log("se apaga la alarma");
     this.router.navigate(['/apagar']);
 
}
}

