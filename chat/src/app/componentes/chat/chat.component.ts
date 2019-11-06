import { Component, OnInit } from '@angular/core';
import { NavParams, ModalController } from "@ionic/angular";
import { message } from "../../models/message";
import {ChatsService} from "../../servicios/chats.service";
import { AuthService } from 'src/app/servicios/auth.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss'],
  
})

export class ChatComponent implements OnInit {
  public chat: any;
  // public message : message;
  public messages = [];
  public room: any;
  public msg : string;
  public mail: string;
  public nombreUser:string;
  public sala:string;
  public salaChat:string
  public colorCeleste:boolean;

  constructor(
    private authService: AuthService,
    private navparams: NavParams, 
    private modal: ModalController,
    private chatService : ChatsService) {
      this.sala = localStorage.getItem("userChat");

 
      this.salaChat = localStorage.getItem("salaChat");
      if (this.salaChat=='PPS-4A'){
        console.log("celeste");
        this.colorCeleste=true;
      }
      console.log("desde chat, slaa chat: ",this.salaChat)
      this.mail = localStorage.getItem("userChat");
      this.authService.getUsuarios("usuarios").subscribe( lista => {
        console.log(lista);  
        for (let i=0; i<=lista.length-1; i++){
          if (lista[i].email == this.mail){
            this.nombreUser=lista[i].nombre;            
          }
        }     
      })
    }

    ngOnInit() {

      this.chatService.getChatRoom( this.chat.id).subscribe( room => {
        console.log(room);
        this.room = room;
           
      })
  
      this.chat = this.navparams.get('chat')
    }
  
  
    closeChat() {
      this.modal.dismiss()
    }
  
    sendMessage(){
      let fecha = new Date().toISOString();   
      let fechaDia = fecha.substring(0, 10);
      let fechaHora = fecha.substring(11,16);      
     
      const mensaje : message = {
      content : this.msg,
      type : 'text',
      date :fechaDia + " " + fechaHora,
      nombre: this.nombreUser,
      email: this.mail
      }
      
    this.chatService.sendMsgToFirebase( mensaje, this.chat.id);
    this.msg = "";
    }

}
