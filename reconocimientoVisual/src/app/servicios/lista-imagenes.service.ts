import { Injectable } from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class ListaImagenesService {

  constructor(private db: AngularFirestore) { }
  getListaImagenes(){
    return this.db.collection('meGusta').snapshotChanges();
  }
}
