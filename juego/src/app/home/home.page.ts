import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DeviceMotion, DeviceMotionAccelerationData, DeviceMotionAccelerometerOptions } from '@ionic-native/device-motion/ngx';
import { timer} from 'rxjs/';
import { Subscription } from 'rxjs';
import { OnInit, Output, EventEmitter, Input } from '@angular/core';
import { AuthService } from  '../servicios/auth.service';
import { Usuario } from '../clases/usuario';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  mostrarHome=false;

  @Output() public SeleccionDeTipoDeFoto: EventEmitter<any> = new EventEmitter<any>();
  mostrar: boolean;
  tipo_cosas: boolean;

  constructor(public router: Router, private  authService:  AuthService, public navCtrl: NavController) { }


 
  ngOnInit() { 
      this.verTodos(this.guardarDatosUser);
     timer(6100).subscribe(() => this.mostrarHome = true )
  }



  mujerMaravilla(){
  	this.mostrar = true;
  	this.tipo_cosas = true;
  	this.SeleccionDeTipoDeFoto.emit(true);

    localStorage.setItem('juego', JSON.stringify('mujerMaravilla'));
    console.log("es mujer maravilla");
    this.navCtrl.navigateForward("/mujerMaravilla");
  }

  thor(){
  	this.mostrar = true;
  	this.tipo_cosas = false;
  	this.SeleccionDeTipoDeFoto.emit(false);
  
    localStorage.setItem('juego', JSON.stringify('thor'));
    this.navCtrl.navigateForward("/thor");
  }

  verTodos(callback){
    let usuarios: any;
  
  }

  async guardarDatosUser(todos){    
    console.log(todos);
    let local = JSON.parse(localStorage.getItem('user'));
    console.log(local);
    let datos: any[];
    console.log('paola');
    console.log(todos[0].data.correo);
    console.log(local.correo);
    console.log(datos[0].data);
    let userCompleto: Usuario = new Usuario();
    userCompleto.correo = datos[0].data.correo;
    userCompleto.perfil = datos[0].data.perfil;
    userCompleto.sexo = datos[0].data.sexo;
    localStorage.setItem('user', JSON.stringify(userCompleto));
    
  }


}
