import { Injectable } from '@angular/core';
import {AngularFireAuth} from "@angular/fire/auth";
import { PassThrough } from 'stream';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private AFAuth: AngularFireAuth) { }

  login (email: string, password:string){
    this.AFAuth.auth.signInWithEmailAndPassword(email, password).then (res=> {
      console.log(res);
    }).catch(err => console.log("error : "+ err))
  }
}
