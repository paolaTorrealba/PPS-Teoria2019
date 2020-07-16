import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-color',
  templateUrl: './color.page.html',
  styleUrls: ['./color.page.scss'],
})
export class ColorPage implements OnInit {
 

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
    this.bandera =localStorage.getItem('idioma');
    this.tipo_juego = localStorage.getItem('tipo_juego');

    switch (this.tipo_juego) {
      case "colores":
          this.img_source1 = "./assets/images/amarillo.png";
          this.img_source2 = "./assets/images/verde.png";
          this.img_source3 = "./assets/images/naranja.png";
          this.img_source4 = "./assets/images/azul.png";
          this.img_source5 = "./assets/images/rojo1.png";
        break;
     
      default:
        // code...
        break;
    }

  }

  ngOnInit() {}

  reproducir(nom_audio) {
    const audio = new Audio('assets/sounds/' + nom_audio + '.mp3');
    audio.play();
  }

  cambiarJuego(item){
		console.log("cambio juego, item", item)
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
  reproducirAudio(nom_audio){
    switch (this.tipo_juego) {
      case "colores":
        if (this.bandera=="espaniol") {
          switch (nom_audio) {
            case "btn1":
              this.reproducir('amarillo');
              break;
            case "btn2":
              this.reproducir('verde');
              break;
            case "btn3":
              this.reproducir('naranja');
              break;
            case "btn4":
              this.reproducir('azul');
              break;
            case "btn5":
              this.reproducir('rojo');
              break;
            default:
              // code...
              break;
          }
        }
        if (this.bandera=="ingles") {
          switch (nom_audio) {
            case "btn1":
              this.reproducir('yellow');
              break;
            case "btn2":
              this.reproducir('green');
              break;
            case "btn3":
              this.reproducir('orange');
              break;
            case "btn4":
              this.reproducir('blue');
              break;
            case "btn5":
              this.reproducir('red');
              break;
            default:
              // code...
              break;
          }
        }
        if (this.bandera=="portugues") {
          switch (nom_audio) {
            case "btn1":
              this.reproducir('amarilloP');
              break;
            case "btn2":
              this.reproducir('verdeP');
              break;
            case "btn3":
              this.reproducir('naranjaP');
              break;
            case "btn4":
              this.reproducir('azulP');
              break;
            case "btn5":
              this.reproducir('rojoP');
              break;
            default:
              // code...
              break;
            }
         }
      // case "animales":
      //   if (this.bandera) {
      //     switch (nom_audio) {
      //       case "btn1":
      //         this.reproducir('perro');
      //         break;
      //       case "btn2":
      //         this.reproducir('gato');
      //         break;
      //       case "btn3":
      //         this.reproducir('raton');
      //         break;
      //       case "btn4":
      //         this.reproducir('oso');
      //         break;
      //       case "btn5":
      //         this.reproducir('conejo');
      //         break;
      //       default:
      //         // code...
      //         break;
      //     }
      //   }
      //   else{
      //     switch (nom_audio) {
      //       case "btn1":
      //         this.reproducir('dog');
      //         break;
      //       case "btn2":
      //         this.reproducir('cat');
      //         break;
      //       case "btn3":
      //         this.reproducir('mouse');
      //         break;
      //       case "btn4":
      //         this.reproducir('bear');
      //         break;
      //       case "btn5":
      //         this.reproducir('rabit');
      //         break;
      //       default:
      //         // code...
      //         break;
      //     }
      //   }
      //   break;
      // default:
      //   // code...       
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
