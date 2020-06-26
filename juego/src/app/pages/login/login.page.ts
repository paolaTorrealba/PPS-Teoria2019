import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/servicios/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  email: string;
  password: string;
  botonUsuarios="";
  agrandar="";
  constructor( private authService:AuthService,
    public router: Router) {}

  DesplegarUsuarios() {
    console.log("desplegar")
    this.botonUsuarios = "ocultar";
    this.agrandar = "agrandar";
  }
  SetearUsuario(email: string, password: string) {
    this.email = email;
    this.password = password;
    this.NoDesplegarUsuarios();
  }
  
  NoDesplegarUsuarios() {

    setTimeout(() => {
      this.botonUsuarios = "";
    }, 500);

    this.agrandar = "";
  }
  ngOnInit() {
  }
  onSubmitLogin(){
    //console.log("estas en la fucion")
    this.authService.login(this.email,this.password).then (res => {
      
        
        this.router.navigate(['/home']);
  }).catch(err => alert ('los datos son incorrectos o no existe el usuario'));

   
  }

}
