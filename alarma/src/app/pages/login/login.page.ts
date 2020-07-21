import { Component, OnInit } from '@angular/core';
import { AuthService} from '../../servicios/auth.service';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Usuario } from 'src/app/clases/usuario';
import { NavController } from '@ionic/angular';
import { UsuarioService } from 'src/app/servicios/usuario.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  botonUsuarios="";
  agrandar="";  
  
  validations_form: FormGroup;
  errorMessage: string = '';
  defaultUsers: Array<any> = [];
  usuario: Usuario;
  public email;
  public password;

    constructor(  private navCtrl: NavController,
      private authService: UsuarioService,
      private formBuilder: FormBuilder) {
      console.log("estoy en el contructor de login")     
    }
    
   
    ngOnInit() { 
      this.agregarUsuariosDefault();
    this.validations_form = this.formBuilder.group({
      email: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
      ])),
      password: new FormControl('', Validators.compose([
        Validators.minLength(6),
        Validators.required
      ])),
    });
    }

    agregarUsuariosDefault(){
      this.defaultUsers.push({"email":"anonimo@anonimo.com", "password":"444444", "perfil":"usuario", "sexo":"masculino"});
      this.defaultUsers.push({"email":"tester@tester.com", "password":"555555", "perfil":"tester","sexo": "femenino"});
      this.defaultUsers.push({"email":"admin@admin.com", "password":"111111", "perfil":"admin", "sexo":"femenino"});
      this.defaultUsers.push({"email":"invitado@invitado.com", "password":"222222", "perfil":"invitado", "sexo":"femenino"});
      this.defaultUsers.push({"email":"usuario@usuario.com", "password":"333333", "perfil":"usuario", "sexo":"masculino"});
  
    }
  
    setUsuarioDefault(){
      this.loginUsuario(this.usuario);
    }
   
    loginUsuario(value){
      this.email= value.email;
      this.password= value.password;       
    
      this.authService.loginUser(value)
      .then(res => {
        this.errorMessage = "";    
        localStorage.setItem("alarmaPass",this.password);  
        this.navCtrl.navigateForward('/home');
      }, err => {
        this.errorMessage = err.message;
      })
    }
    validation_messages = {
      'email': [
        { type: 'required', message: 'El email es requerido.' },
        { type: 'pattern', message: 'Ingrese un email válido.' }
      ],
      'password': [
        { type: 'required', message: 'La contraseña es requerida.' },
        { type: 'minlength', message: 'La password debe contener al menos 6 catacteres.' }
      ]
    };

    SetearUsuario(email: string, password: string) {
      this.email = email;
      this.password = password;
      localStorage.setItem("alarmaPass",this.password);
      this.NoDesplegarUsuarios();
    }

//------------------------------ 

    // onSubmitLogin(){     
    //   this.authService.login(this.email,this.password).then (res => {
        
    //       localStorage.setItem("alarmaPass",this.password);
    //       this.router.navigate(['/home']);
    // }).catch(err => alert ('los datos son incorrectos o no existe el usuario'));
    // }
  
    // DesplegarUsuarios() {
    //   this.botonUsuarios = "ocultar";
    //   this.agrandar = "agrandar";
    // }
  
    NoDesplegarUsuarios() {
  
      setTimeout(() => {
        this.botonUsuarios = "";
      }, 500);
  
      this.agrandar = "";
    }
  
    
  }
  