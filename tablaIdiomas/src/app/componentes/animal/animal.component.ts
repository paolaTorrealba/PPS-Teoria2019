import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-animal',
  templateUrl: './animal.component.html',
  styleUrls: ['./animal.component.scss'],
})
export class AnimalComponent implements OnInit {
  
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
  
    reproducirAudio(nom_audio){
   
      switch (this.tipo_juego) {
        case "animales":
          if (this.bandera) {
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
                // code...
                break;
            }
          }
          else{
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
          break;   
  
      
    }
  
  }
  }
  