import { Component, OnInit } from '@angular/core';
import {AuthService} from "../servicios/auth.service";
import {ChatsService} from "../servicios/chats.service";
import { ModalController } from "@ionic/angular";
import { ActionSheetController } from '@ionic/angular';
import { ChatComponent } from "../componentes/chat/chat.component";


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss', ],
 
})
export class HomePage implements OnInit {
  public chatRoom:  any= [];
  public salaChat:string;
  constructor(public chatService: ChatsService,
     public authService: AuthService,
     public actionSheetController: ActionSheetController,
     private modal : ModalController) {}

  onLogout(){
    console.log("estoy en onLoguot");
    this.authService.logout();
  }

  ngOnInit(){
    this.chatService.getChatRooms().subscribe( chats => {      
      this.chatRoom = chats;      
    })
  }

  openChat(chat){
    console.log("sala: ", chat.nombre);
    localStorage.setItem("salaChat", chat.nombre);
    this.salaChat = chat.nombre;
    localStorage.setItem("salaChat", chat.nombre);
    console.log("salac: ", this.salaChat)
    this.modal.create({
      component: ChatComponent,
      componentProps : {
        chat: chat
      }
    }).then( (modal) => modal.present())
  }

  async presentActionSheet() {
    const actionSheet = await this.actionSheetController.create({
       buttons: [{
        text: 'Salir',
        role: 'destructive',
        icon: 'log-out',
        handler: () => {
          
          this.onLogout()

        },
      }]
    });
    await actionSheet.present();
  }

}
