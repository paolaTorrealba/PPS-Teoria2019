import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  public bandera: String = "espaniol";
	public btnTemas="";
	public btnTemasAgrandar="";
	public btnIdiomas="";
  public btnIdiomasAgrandar="";
  constructor(public router: Router, private navCtrl: NavController) { 
    console.log("constructor")
		let local_bandera = localStorage.getItem('idioma');
		console.log("local_bandera",local_bandera);
    if(local_bandera != null)
    {
      this.bandera = local_bandera;
    }else{
      this.bandera = 'espaniol';
		}
		
		console.log(this.bandera);
  }

  ngOnInit() {
    this.guardarBandera(this.bandera);
		
	}

  guardarBandera(item){
		console.log("cambiar bandera")
   if (item=== "espaniol"){
     console.log("guardo la banderaespañola")
    localStorage.setItem('idioma', 'espaniol');
   }
   if (item=== "ingles"){
    console.log("guardo la ingles")
    localStorage.setItem('idioma', 'ingles');
   }
   if (item=== "portugues"){
     console.log("guardo la portugues")
     localStorage.setItem('idioma', 'portugues');
   }
    
  }

	cambiarJuego(item){
		console.log("cambio juego")
		console.log("item", item)
  	if (item=="animal") {
			this.reproducir('animales');		
  	}
	   else if (item=="color") {
							this.reproducir('colores');							
	        }
	 	      else  if (item=="numero") {
  		       this.reproducir('numeros');      
		      }
		console.log("setting local strorage");
		// this.bandera=item;
		// localStorage.setItem('juegoIdioma', JSON.stringify(this.bandera));

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

  reproducir(nom_audio) {
		console.log("reproducir")
		const audio = new Audio('assets/sounds/' + nom_audio + '.mp3');
	  audio.play();
  }

  reproducirAudio(nom_audio){	
  	console.log("reproducirAudio",this.bandera,nom_audio);
  	if(this.bandera=='espaniol')
  	{
			console.log("es espaniol")
  		switch (nom_audio) {
  			case "colores":
  				this.reproducir('colores');
          localStorage.setItem('tipo_juego', "colores");
          console.log("cambio de ruta")
          this.navCtrl.navigateForward('/color');
  				break;
  			case "numeros":
  				this.reproducir('numeros');
          localStorage.setItem('tipo_juego', "numeros");
          this.navCtrl.navigateForward('/numero');					
  				break;
  			case "animales":
  				this.reproducir('animales');
          localStorage.setItem('tipo_juego', "animales");
          this.navCtrl.navigateForward('/animal');
  				break;
  			default:
  				// code...
  				break;
      }
      
		}else
		 if (this.bandera=='ingles'){
			console.log("es ingles")
  		switch (nom_audio) {
  			case "colores":
  				this.reproducir('colors');
          localStorage.setItem('tipo_juego', "colores");
          this.navCtrl.navigateForward('/color');
  				break;
  			case "numeros":
  				this.reproducir('numbers');
          localStorage.setItem('tipo_juego', "numeros");
          this.navCtrl.navigateForward('/numero');
  				break;
  			case "animales":
  				this.reproducir('animals');
          localStorage.setItem('tipo_juego', "animales");
          this.navCtrl.navigateForward('/animal');
  				break;
  			default:
  				// code...
  				break;
				}
			}else 
			if (this.bandera=='portugues'){
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