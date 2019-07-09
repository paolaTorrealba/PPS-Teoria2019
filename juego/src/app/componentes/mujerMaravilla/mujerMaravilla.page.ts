import { Component, OnInit } from '@angular/core';
import { AuthService} from '../../servicios/auth.service';
import {ModalController} from '@ionic/angular';
import { AngularFireStorage } from '@angular/fire/storage';
import * as firebase from 'firebase';

@Component({
  selector: 'app-mujerMaravilla',
  templateUrl: './mujerMaravilla.page.html',
  styleUrls: ['./mujerMaravilla.page.scss'],
})
export class MujerMaravillaPage implements OnInit {
  imageURL
  currentImage: any;
  imageResponse: any;
  options: any;
  public listaImagenes: any =  []; //fotos
  
  public firebase = firebase;
  public usuario;
  public seccion;
  public color_seccion;

  segundo: number = 0;
  minuto: number = 0;
  hora: string ="00:00:00";
  interval;
  play;

  constructor(private storage: AngularFireStorage,
     public modal: ModalController, private authService:AuthService)    
     {
     
        this.startTimer();
        // this.usuario = JSON.parse(localStorage.getItem('user'));
     // this.seccion = JSON.parse(localStorage.getItem('seccion'));
  
      if(this.seccion == 'meGusta')
      {
        this.color_seccion = true;
      }
      else{
        this.color_seccion = false;
      }
     }
   
  OnLogout(){
  //  this.authService.logout();
  }

  ngOnInit(){
   
    localStorage.setItem('seccion', this.color_seccion);  
  }


  startTimer() {
   
    this.play = true;
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