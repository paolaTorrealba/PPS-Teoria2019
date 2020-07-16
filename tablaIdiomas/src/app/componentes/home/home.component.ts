import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {

  bandera: "espaniol";
	btnTemas="";
	btnTemasAgrandar="";
	btnIdiomas="";
  btnIdiomasAgrandar="";
  constructor(public router: Router) { 
		let local_bandera = JSON.parse(localStorage.getItem('idioma'));
		console.log("local_bandera",local_bandera);
    if(local_bandera != null)
    {
      this.bandera = local_bandera;
    }else{
      this.bandera = "espaniol";
		}
		
		console.log(this.bandera);
  }

  ngOnInit() {
		localStorage.setItem('idioma', this.bandera);
	}


  cambiarIdioma(item){
		console.log("item", item)
  	if (item=="espaniol") {
			this.reproducir('espaniol');		
  	}
	   else if (item=="ingles") {
							this.reproducir('ingles');							
	        }
	 	      else  if (item=="portugues") {
  		       this.reproducir('ingles');      
		      }
		console.log("setting local strorage");
		this.bandera=item;
		localStorage.setItem('idioma', JSON.stringify(this.bandera));

  }

  reproducir(nom_audio) {
		const audio = new Audio('assets/sounds/' + nom_audio + '.mp3');
	  audio.play();
  }

  reproducirAudio(nom_audio){
  	//console.log(this.bandera);
  	//console.log(nom_audio);
  	if(this.bandera=="espaniol")
  	{
  		switch (nom_audio) {
  			case "colores":
  				this.reproducir('colores');
          localStorage.setItem('tipo_juego', "colores");
  				break;
  			case "numeros":
  				this.reproducir('numeros');
					localStorage.setItem('tipo_juego', "numeros");					
  				break;
  			case "animales":
  				this.reproducir('animales');
          localStorage.setItem('tipo_juego', "animales");
  				break;
  			default:
  				// code...
  				break;
  		}
		}else
		 if (this.bandera=="ingles"){
  		switch (nom_audio) {
  			case "colores":
  				this.reproducir('colors');
          localStorage.setItem('tipo_juego', "colores");
  				break;
  			case "numeros":
  				this.reproducir('numbers');
          localStorage.setItem('tipo_juego', "numeros");
  				break;
  			case "animales":
  				this.reproducir('animals');
          localStorage.setItem('tipo_juego', "animales");
  				break;
  			default:
  				// code...
  				break;
				}
			}else 
			if (this.bandera=="portugues"){
				switch (nom_audio) {
					case "colores":
						this.reproducir('colors');
						localStorage.setItem('tipo_juego', "colores");
						break;
					case "numeros":
						this.reproducir('numbers');
						localStorage.setItem('tipo_juego', "numeros");
						break;
					case "animales":
						this.reproducir('animals');
						localStorage.setItem('tipo_juego', "animales");
						break;
					default:
						// code...
						break;
					}
  	}
  }
}