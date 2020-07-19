import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
	public tipo_juego: String = "animales";
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
		this.guardarTema(this.tipo_juego)
		
	}
	guardarTema(item){	
		if (item=== "animales"){			
		 localStorage.setItem('tipo_juego', 'animales');
		}
		if (item=== "numeros"){		 
		 localStorage.setItem('tipo_juego', 'numeros');
		}
		if (item=== "colores"){		
			localStorage.setItem('tipo_juego', 'colores');
		}
	}

  guardarBandera(item){	
   if (item=== "espaniol"){     
    localStorage.setItem('idioma', 'espaniol');
   }
   if (item=== "ingles"){    
    localStorage.setItem('idioma', 'ingles');
   }
   if (item=== "portugues"){     
     localStorage.setItem('idioma', 'portugues');
   }
    
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