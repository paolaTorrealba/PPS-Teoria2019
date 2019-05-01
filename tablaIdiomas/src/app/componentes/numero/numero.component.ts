import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-numero',
  templateUrl: './numero.component.html',
  styleUrls: ['./numero.component.scss'],
})
export class NumeroComponent implements OnInit {

  tipo_juego: string;
  bandera: boolean;
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

  constructor() {
    this.bandera = JSON.parse(localStorage.getItem('idioma'));
    this.tipo_juego = localStorage.getItem('tipo_juego');

   
    this.img_uno = "./assets/images/uno.svg";
    this.img_dos = "./assets/images/dos.svg";
    this.img_tres = "./assets/images/tres.svg";
    this.img_cuatro = "./assets/images/cuatro.svg";
    this.img_cinco= "./assets/images/cinco.svg";
  

  }

  ngOnInit() {}

  reproducir(nom_audio) {
    const audio = new Audio('assets/sounds/' + nom_audio + '.mp3');
    audio.play();
  }

  reproducirSonido(nom_audio){
 
    switch (this.tipo_juego) {
      case "numeros":
        if (this.bandera) {
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
        else{
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
        break;   

    
  }

}
}
