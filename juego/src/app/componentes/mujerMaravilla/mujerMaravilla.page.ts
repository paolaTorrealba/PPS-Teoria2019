import { Component, OnInit } from '@angular/core';
import { DeviceMotion, DeviceMotionAccelerationData, DeviceMotionAccelerometerOptions } from '@ionic-native/device-motion/ngx';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-mujerMaravilla',
  templateUrl: './mujerMaravilla.page.html',
  styleUrls: ['./mujerMaravilla.page.scss'],
})
export class MujerMaravillaPage implements OnInit {
  imageURL
  play;
  select;

  x:string;
  y:string;

  segundo: number = 0;
  minuto: number = 0;
  hora: string ="00:00:00";
  interval;
  tiempo;

  rect;
  id;
  seMovio;
  control;
  public perdio: boolean = false;

  limiteX;
  limiteY;
  constructor( public deviceMotion: DeviceMotion, public navCtrl: NavController) {
    this.x= "-";
    this.y= "-"; 
    
  }

//controla el temporizador
  startTimer() {   
     if (!this.perdio){     
          this.interval = setInterval(() => {
            this.segundo++;   
            if (this.minuto==0){
              this.hora="00:"+this.minuto.toString() + '0:0'+this.segundo.toString(); 
            }
            else {
              if (this.segundo<10)
                this.hora="00:"+ "0"+this.minuto.toString()+":0"+this.segundo.toString();
            }       
            if (this.segundo>=10){
              this.hora="00:00:"+this.segundo.toString();
            }
            if (this.segundo==60){
              this.segundo=0;
              this.minuto++
              if (this.minuto<=9){
                this.hora="00:"+ "0"+this.minuto.toString()+":0"+this.segundo.toString();  
              }
              else {
                this.hora="00:"+ this.minuto.toString()+":0"+this.segundo.toString();  
              }

                    
            }
          },1000)
        }
  }
  
  // en el inicio configuro las posiciones 
  ngOnInit(){
    this.startTimer(); 
    this.startMove();  
  }

  startMove(){
    var option: DeviceMotionAccelerometerOptions = {frequency: 300 };
    this.id= this.deviceMotion.watchAcceleration(option).subscribe((result: DeviceMotionAccelerationData) =>
    {
        this.x= "" + result.x;
        this.y= "" + result.y;        

        this.limiteX= - 50 * result.x + 130;
        this.limiteY=   50 * result.y + 250;

        //lateral izquierdo x=9            
         this.control= result.x;
          console.log(this.seMovio);

          this.select=document.getElementById("divHola");
          this.rect = this.select.getBoundingClientRect();      
       
          // toca lateral izquierdo o lateral derecho
          if (result.x > 4.5 || result.x < -5.5 || result.y > 6.7  || result.y < -5.7){
         //  if (this.limiteY<0 || this.limiteX<0 || this.limiteY>600 ||this.limiteX>240){
            this.tiempo= this.hora;
            localStorage.setItem('tiempo', JSON.stringify(this.tiempo));
            this.perdio=true;      
            this.guardarUsuarioYPuntaje();
            this.navCtrl.navigateForward("/resultado");
          }
          else {
               

              if (result.x < 0){
                this.select.style.left = - 25 * result.x + 110 + "px";  
              }
              if (result.x > 0){
                this.select.style.left = - 25 * result.x + 110 + "px";  
              }
              if (result.y < 0){
                this.select.style.top = 50 * result.y + 250 + "px";  
              }
              if (result.y > 0){
                this.select.style.top = 50 * result.y + 250 + "px";  
              }  
            }
         
    });  
    this.hora="00:00:00";
  }
  pauseTimer() {
    this.play = false;
    clearInterval(this.interval);
  }
  guardarUsuarioYPuntaje(){
    
  }
}