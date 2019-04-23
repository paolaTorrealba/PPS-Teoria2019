import { Injectable } from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import { map} from "rxjs/operators";
export interface lista {
  img: string
  nombreUsuario: string
  id: string
}
@Injectable({
  providedIn: 'root'
})
export class ListaImagenesService {

  constructor(private db: AngularFirestore) { }
  getListaImagenes(){
    return this.db.collection('meGusta').snapshotChanges().pipe(map(imagenes =>{
      return imagenes.map(i => {
        const data = i.payload.doc.data() as lista;
        data.id = i.payload.doc.id;
        return data;
      })
    }));
  }
}

