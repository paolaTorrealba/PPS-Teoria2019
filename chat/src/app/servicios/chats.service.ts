import { Injectable } from '@angular/core';
import {AngularFirestore} from "@angular/fire/firestore";
import { map } from "rxjs/operators";
import { message } from "../models/message";
import { firestore } from 'firebase';

export interface chat {
  descripcion: string;
  nombre: string;
  id: string;
  imagen: string; 
}

@Injectable({
  providedIn: 'root'
})
export class ChatsService {

  constructor(private db: AngularFirestore) { }

  getChatRooms(){
   return this.db.collection('chatRoom').snapshotChanges().pipe(map(rooms => {
     return  rooms.map(a => {
        const data = a.payload.doc.data() as chat; 
        data.id = a.payload.doc.id;
        return data;
     })
   }))
  }

  getChatRoom( chat_id : string){
    return this.db.collection('chatRoom').doc(chat_id).valueChanges()
  }


  sendMsgToFirebase( message : message, chat_id : string){

    this.db.collection('chatRoom').doc(chat_id).update({
      messages : firestore.FieldValue.arrayUnion(message),
    })
  }

}
