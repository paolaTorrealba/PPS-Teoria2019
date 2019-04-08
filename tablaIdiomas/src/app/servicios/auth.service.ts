import { Injectable } from '@angular/core';
import {AngularFireAuth} from "@angular/fire/auth";
import { promise } from 'protractor';
import { reject } from 'q';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private AFauth : AngularFireAuth) {
   }
   //el usuario accede con su email y password
   //esto se ejecuta y nos devuelve un rechazo o una confirmacion
   //then: confirmacion
   //catch: error
   login(email:string, password:string){
    // this.AFauth.auth.signInWithEmailAndPassword(email,password).then(res=>{
        //console.log('Estas Logueado : ' + res) --> muestro un mensaje
       // console.log(res) --> muestro el objeto
       //muestro una promesa para trabajarela en mi Login
       //son el resultado de algun evento, un rechasado o un resuelto, es como un callback

       return new Promise((resolve, reject)=> {
         this.AFauth.auth.signInWithEmailAndPassword(email, password).then(res => {
           console.log(res);
         }).catch(err => reject(err)) ;
        });    
     
   }
}
