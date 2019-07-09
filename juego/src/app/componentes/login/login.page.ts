import { Component, OnInit } from '@angular/core';
import { AuthService} from '../../servicios/auth.service';
import { Router } from '@angular/router';
import { timer} from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  
email: string;
password: string;

showSplash = true;
  constructor( private authService:AuthService, public router: Router) {}

  ngOnInit() { 
    timer(3000).subscribe(() => this.showSplash = false)
  }

  onSubmitLogin(){
    //console.log("estas en la fucion")
    this.authService.login(this.email,this.password).then (res => {
      localStorage.setItem('email', JSON.stringify(this.email));
        this.router.navigate(['/home']);
  }).catch(err => alert ('los datos son incorrectos o no existe el usuario'));

   
  }

  
}
