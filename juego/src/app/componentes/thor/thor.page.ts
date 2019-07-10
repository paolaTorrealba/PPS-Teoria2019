import { Component, OnInit } from '@angular/core';
import { DeviceMotion, DeviceMotionAccelerationData, DeviceMotionAccelerometerOptions } from '@ionic-native/device-motion/ngx';
import { NavController } from '@ionic/angular';
import {AngularFirestore} from "@angular/fire/firestore";
import { map } from "rxjs/operators";


export interface usuario {
  email:string,  
  nombre:string,
  apellido:string,
  id: string,
  password: string,
  resultado: string
}

@Component({
  selector: 'app-thor',
  templateUrl: './thor.page.html',
  styleUrls: ['./thor.page.scss'],
})
export class ThorPage implements OnInit {
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

  usuarios;
  public perdio: boolean = false;


  constructor( public deviceMotion: DeviceMotion, public navCtrl: NavController,public fs: AngularFirestore, ) {
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
              this.hora="00:"+ "0"+this.minuto.toString()+":0"+this.segundo.toString();        
            }
          },1000)
        }
  }
  
  // en el inicio configuro las posiciones 
  ngOnInit(){
   // this.startTimer(); 
    //this.startMove();  
    this.hora ="00:10:00";
    localStorage.setItem('tiempo', JSON.stringify(this.hora));
    this.perdio=true;      
    this.guardarUsuarioYPuntaje();
    console.log("ya guarde");
    this.navCtrl.navigateForward("/resultado");
  }

  startMove(){
    var option: DeviceMotionAccelerometerOptions = {frequency: 200 };
    this.id= this.deviceMotion.watchAcceleration(option).subscribe((result: DeviceMotionAccelerationData) =>
    {
        this.x= "" + result.x;
        this.y= "" + result.y;           
       
        this.select=document.getElementById("divHola");
        this.rect = this.select.getBoundingClientRect();      
       
       if (result.x > 6 || result.x < -5,7 || result.y > 6.5  || result.y < -5.7){
         
            localStorage.setItem('tiempo', JSON.stringify(this.hora));
            this.perdio=true;      
            this.guardarUsuarioYPuntaje();
            this.navCtrl.navigateForward("/resultado");
         
        }
        else {           

            if (result.x < 0){
              this.select.style.left = - 25 * result.x + 130 + "px";  
            }
            if (result.x > 0){
              this.select.style.left = - 25 * result.x + 130 + "px";  
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
    this.usuarios=new Array();
    this.getListaUsuarios("usuarios").subscribe(lista => {
      this.usuarios=lista;        
      console.log(this.usuarios);
      let email = JSON.parse(localStorage.getItem('email'));
      for (let i = this.usuarios.length-1; i >= 0; i--){  
        //es el usuario que esta jugando      
        if (this.usuarios[i].email==email)            
          this.usuarios[i].resultado = this.hora;
          this.updateUsuario( this.usuarios[i]).then(res => {      
       //   this.error.mostrarMensaje("Pedido pagado. Gracias por comer en nuestro restaurante");
        //  this.navCtrl.setRoot(PrincipalPage);
        }); 
      }
    });    


  }
  getListaUsuarios(tipo:string) {
    return this.fs.collection(tipo).snapshotChanges().pipe(map(usuarios => {
      return usuarios.map(a =>{
        const data = a.payload.doc.data() as usuario;
        data.id = a.payload.doc.id;
        return data;
      })
    }));
  }

  updateUsuario(data) {
    return this.fs.collection('usuarios').doc(data.id).update(data);
  }
}