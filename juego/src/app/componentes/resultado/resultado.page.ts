import { Component, OnInit } from '@angular/core';
import { DeviceMotion } from '@ionic-native/device-motion/ngx';
import { NavController } from '@ionic/angular';
import {AngularFirestore} from "@angular/fire/firestore";
import { map } from "rxjs/operators";

export interface usuario {
  email:string,  
  nombre:string,
  apellido:string,
  id: string,
  password: string,
  resultado: string
}

@Component({
  selector: 'app-resultado',
  templateUrl: './resultado.page.html',
  styleUrls: ['./resultado.page.scss'],
})
export class ResultadoPage implements OnInit { 
  usuarios;
  mejoresPuntajes=new Array();
  valueToPush = { };
  menor: string = "00:60:00";
  contador = 0;
  constructor( public deviceMotion: DeviceMotion,
              public navCtrl: NavController, 
              public fs: AngularFirestore) {
      this.usuarios=new Array();
     
      this.getListaUsuarios("usuarios").subscribe(lista => {
      this.usuarios=lista; 
      this.usuarios.sort((a, b) => (a.resultado < b.resultado) ? 1 : -1)
      for (let i = 0; i <=this.usuarios.length-1; i++){              
            if (this.contador<3){  
              this.mejoresPuntajes.push(this.usuarios[i]);               
              this.contador++;               
            }
        }
      });           
     }
  
 
  ngOnInit(){   
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

}