import { Usuario} from '../../clases/usuario';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

 public unusuario:Usuario;
  constructor() {
  	this.unusuario = new Usuario ("natalia", "natalia");
   }

  ngOnInit() {
  }

}
