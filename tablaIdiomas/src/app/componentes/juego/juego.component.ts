import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-juego',
  templateUrl: './juego.component.html',
  styleUrls: ['./juego.component.scss'],
})
export class JuegoComponent implements OnInit {
  

    tipo_juego: string;
    bandera: boolean;
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
  
    constructor() {
      this.bandera = JSON.parse(localStorage.getItem('idioma'));
      this.tipo_juego = localStorage.getItem('tipo_juego');
  
      switch (this.tipo_juego) {
        case "colores":
            this.img_source1 = "./assets/images/amarillo.png";
            this.img_source2 = "./assets/images/verde.png";
            this.img_source3 = "./assets/images/naranja.png";
            this.img_source4 = "./assets/images/azul.png";
            this.img_source5 = "./assets/images/rojo.png";
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
  
    reproducirAudio(nom_audio){
      //console.log(this.bandera);
      //console.log(nom_audio);
      //console.log(this.tipo_juego);
  
      switch (this.tipo_juego) {
        case "colores":
          if (this.bandera) {
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
          else{
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
          break;     
        case "animales":
          if (this.bandera) {
            switch (nom_audio) {
              case "btn1":
                this.reproducir('perro');
                break;
              case "btn2":
                this.reproducir('gato');
                break;
              case "btn3":
                this.reproducir('raton');
                break;
              case "btn4":
                this.reproducir('oso');
                break;
              case "btn5":
                this.reproducir('conejo');
                break;
              default:
                // code...
                break;
            }
          }
          else{
            switch (nom_audio) {
              case "btn1":
                this.reproducir('dog');
                break;
              case "btn2":
                this.reproducir('cat');
                break;
              case "btn3":
                this.reproducir('mouse');
                break;
              case "btn4":
                this.reproducir('bear');
                break;
              case "btn5":
                this.reproducir('rabit');
                break;
              default:
                // code...
                break;
            }
          }
          break;
        default:
          // code...
          break;
      }
  
  
      
    }
  
  }
