import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-numero',
  templateUrl: './numero.page.html',
  styleUrls: ['./numero.page.scss'],
})
export class NumeroPage implements OnInit {

  tipo_juego: string;
  bandera: string;
  btn1: string;
  btn2: string;
  btn3: string;
  btn4: string;
  btn5: string;
  img_uno: string = "";
  img_dos: string = "";
  img_tres: string = "";
  img_cuatro: string = "";
  img_cinco: string = "";

  constructor( private navCtrl: NavController) {
    this.bandera = localStorage.getItem('idioma');
    this.tipo_juego = localStorage.getItem('tipo_juego');

   
    this.img_uno = "./assets/images/uno.png";
    this.img_dos = "./assets/images/dos.png";
    this.img_tres = "./assets/images/tres.png";
    this.img_cuatro = "./assets/images/cuatro.png";
    this.img_cinco= "./assets/images/cinco.png";
  
    console.log("NUMEROS, ",this.bandera, this.tipo_juego)

  }

  ngOnInit() {}

  reproducir(nom_audio) {
    console.log("reporducri", nom_audio)
    const audio = new Audio('assets/sounds/' + nom_audio + '.mp3');
    audio.play();
  }

  reproducirAudio(nom_audio){
    console.log("audio-bandera", this.bandera, nom_audio)
    switch (this.tipo_juego) {
      case "numeros":
        if (this.bandera=="espaniol") {
          switch (nom_audio) {
            case "btn1":
              this.reproducir('uno');
              break;
            case "btn2":
              this.reproducir('dos');
              break;
            case "btn3":
              this.reproducir('tres');
              break;
            case "btn4":
              this.reproducir('cuatro');
              break;
            case "btn5":
              this.reproducir('cinco');
              break;
            default:
              // code...
              break;
          }
        }       
        if (this.bandera=="ingles"){
              switch (nom_audio) {
                case "btn1":
                  this.reproducir('one');
                  break;
                case "btn2":
                  this.reproducir('two');
                  break;
                case "btn3":
                  this.reproducir('three');
                  break;
                case "btn4":
                  this.reproducir('four');
                  break;
                case "btn5":
                  this.reproducir('five');
                  break;
                default:
                  // code...
                  break;
              }
        }       
        if (this.bandera=="portugues"){
              switch (nom_audio) {
                case "btn1":
                  this.reproducir('unoP');
                  break;
                case "btn2":
                  this.reproducir('dosP');
                  break;
                case "btn3":
                  this.reproducir('tresP');
                  break;
                case "btn4":
                  this.reproducir('cuatroP');
                  break;
                case "btn5":
                  this.reproducir('cincoP');
                  break;
                default:
                  // code...
                  break;
              }
           }        
        break;      
   }

}

cambiarIdioma(item){
  console.log("Cambiar idioma, item", item)
  if (item=="espaniol") {
    this.reproducir('espaniol');	
    localStorage.setItem('idioma', 'espaniol'); 	
  }
   else if (item=="ingles") {
            this.reproducir('ingles');	
            localStorage.setItem('idioma', 'ingles'); 						
        }
         else  if (item=="portugues") {
           this.reproducir('portugues');  
           localStorage.setItem('idioma', 'portugues');    
        }
  console.log("setting local strorage");
  this.bandera=item;
  

}


cambiarJuego(item){
  console.log("cambio juego")
  console.log("item", item)
  if (item=="animal") {
    this.reproducir('animales');	
    this.navCtrl.navigateForward('/animal'); 	
  }
   else if (item=="color") {
            this.reproducir('colores');	
            this.navCtrl.navigateForward('/color'); 						
        }
         else  if (item=="numero") {
           this.reproducir('numeros');     
           this.navCtrl.navigateForward('/numero');  
        }
  console.log("setting local strorage");
 
}
}
