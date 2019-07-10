import { Injectable } from '@angular/core';
import { AngularFireAuth } from "@angular/fire/auth";
import { promise } from 'protractor';
import { Router } from "@angular/router";
import { AngularFirestore } from "@angular/fire/firestore";
import { map } from "rxjs/operators";

export interface usuario {
  email:string,  
  nombre:string,
  apellido:string,
  id: string,
  password: string,
  resultado: string
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  usuarios;
  constructor(private AFauth : AngularFireAuth, private router : Router, private fs : AngularFirestore) { }

  login(email:string, password:string){

    return new Promise((resolve, rejected) =>{
      this.AFauth.auth.signInWithEmailAndPassword(email, password).then(user => {
        resolve(user);
        localStorage.setItem("email", email); 

        this.usuarios=new Array();
        this.getListaUsuarios("usuarios").subscribe(lista => {
          this.usuarios=lista;
         // console.log("usuarios desde Auth");
          console.log(this.usuarios);
          for (let i = this.usuarios.length-1; i >= 0; i--){
           // console.log(this.usuarios[i]);
            if (this.usuarios[i].email==email)            
            localStorage.setItem("nombre", this.usuarios[i].nombre ); 
          }
        });
        
      }).catch(err => rejected(err));
    });   
  }
  getListaUsuarios(tipo:string) {
    return this.fs.collection(tipo).snapshotChanges().pipe(map(usuarios => {
      return usuarios.map(a =>{
        const data = a.payload.doc.data() as usuario;
        data.id = a.payload.doc.id;
        return data;
      })
    }));
  }
   
  


   
  logout(){
    this.AFauth.auth.signOut().then(() => {
      this.router.navigate(['/login']);
    })
  }

  register(email : string, password : string, name : string){

    return new Promise ((resolve, reject) => {
      this.AFauth.auth.createUserWithEmailAndPassword(email, password).then( res =>{
          // console.log(res.user.uid);
        const uid = res.user.uid;
          this.fs.collection('users').doc(uid).set({
            name : name,
            uid : uid
          })
        
        resolve(res)
      }).catch( err => reject(err))
    })
    

  }


}
