import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-animal',
  templateUrl: './animal.page.html',
  styleUrls: ['./animal.page.scss'],
})
export class AnimalPage implements OnInit {

  tipo_juego: string;
  bandera: string;
  btn1: string;
  btn2: string;
  btn3: string;
  btn4: string;
  btn5: string;
  img_source1: string = "";
  img_source2: string = "";
  img_source3: string = "";
  img_source4: string = "";
  img_source5: string = "";

  constructor( private navCtrl: NavController) {
    this.bandera = localStorage.getItem('idioma');
    this.tipo_juego = localStorage.getItem('tipo_juego');

    this.img_source1 = "./assets/images/leon.png";
    this.img_source2 = "./assets/images/vaca.png";
    this.img_source3 = "./assets/images/mono.png";
    this.img_source4 = "./assets/images/oveja.png";
    this.img_source5 = "./assets/images/conejo.png";

  }

  ngOnInit() {}

  reproducir(nom_audio) {
    const audio = new Audio('assets/sounds/' + nom_audio + '.mp3');
    audio.play();
  }

  cambiarJuego(item){
    console.log("cambiarJuego, item:", item)

    this.tipo_juego=item;
  	if (item=="animales") {
      if (this.bandera=="espaniol")
          this.reproducir('animales');
      if (this.bandera=="ingles")
          this.reproducir('animals'); 
      if (this.bandera=="portugues")
          this.reproducir('animalesP');       
      localStorage.setItem('tipo_juego', 'animales'); 		
      this.navCtrl.navigateForward('/animal');
  	}
	   else if (item=="colores") {
              if (this.bandera=="espaniol")
                this.reproducir('colores');
              if (this.bandera=="ingles")
                this.reproducir('colors'); 
              if (this.bandera=="portugues")
                this.reproducir('coloresP');
              localStorage.setItem('tipo_juego', 'colores');
              this.navCtrl.navigateForward('/color');						
	        }
	 	      else  if (item=="numeros") {
            if (this.bandera=="espaniol")
               this.reproducir('numeros');
            if (this.bandera=="ingles")
               this.reproducir('numbers'); 
             if (this.bandera=="portugues")
                this.reproducir('numerosP');
             localStorage.setItem('tipo_juego', 'numeros'); 
             this.navCtrl.navigateForward('/numero');    
		      }
		console.log("setting local strorage");
	
  }
  
  // nom_audio es el boton del centro
  reproducirAudio(nom_audio){ 
    console.log("reproducirAudio--> ",nom_audio, this.bandera)
    switch (this.tipo_juego) {
      case "animales":
      if (this.bandera=="espaniol") {
          console.log("bandera=español")
          switch (nom_audio) {
            case "btn1":
              this.reproducir('leon');
              break;
            case "btn2":
              this.reproducir('vaca');
              break;
            case "btn3":
              this.reproducir('mono');
              break;
            case "btn4":
              this.reproducir('oveja');
              break;
            case "btn5":
              this.reproducir('conejo');
              break;
            default:
              
              break;
          }
        }
        if (this.bandera=="ingles") {
          console.log("bandera=ingles")
          switch (nom_audio) {
            case "btn1":
              this.reproducir('lion');
              break;
            case "btn2":
              this.reproducir('cow');
              break;
            case "btn3":
              this.reproducir('monkey');
              break;
            case "btn4":
              this.reproducir('sheep');
              break;
            case "btn5":
              this.reproducir('rabbit');
              break;
            default:
              // code...
              break;
          }
        }
        if (this.bandera=="portugues") {
          console.log("bandera=portugues")
          switch (nom_audio) {
            case "btn1":
              this.reproducir('leonP');
              break;
            case "btn2":
              this.reproducir('vacaP');
              break;
            case "btn3":
              this.reproducir('monoP');
              break;
            case "btn4":
              this.reproducir('ovejaP');
              break;
            case "btn5":
              this.reproducir('conejoP');
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
}
