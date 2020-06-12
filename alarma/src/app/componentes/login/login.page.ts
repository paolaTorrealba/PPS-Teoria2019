import { Component, OnInit } from '@angular/core';
import { AuthService} from '../../servicios/auth.service';
import { Router } from '@angular/router';

import { timer} from 'rxjs/observable/timer';

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

showSplash = true;
  constructor( private authService:AuthService,
     public router: Router) {}

  SetearUsuario(email: string, password: string) {
    this.email = email;
    this.password = password;
    localStorage.setItem("alarmaPass",this.password);
    this.NoDesplegarUsuarios();
  }
  ngOnInit() { 
    timer(3000).subscribe(() => this.showSplash = false)
  }

  onSubmitLogin(){
    //console.log("estas en la fucion")
    this.authService.login(this.email,this.password).then (res => {
      
        localStorage.setItem("alarmaPass",this.password);
        this.router.navigate(['/home']);
  }).catch(err => alert ('los datos son incorrectos o no existe el usuario'));

   
  }

  DesplegarUsuarios() {
    this.botonUsuarios = "ocultar";
    this.agrandar = "agrandar";
  }

  NoDesplegarUsuarios() {

    setTimeout(() => {
      this.botonUsuarios = "";
    }, 500);

    this.agrandar = "";
  }

  
}
