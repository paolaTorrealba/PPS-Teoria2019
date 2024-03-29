/*import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor( private menu: MenuController, public router: Router) {}
  ngOnInit() { }
  
  openFirst() {
    this.menu.enable(true, 'first');
    this.menu.open('first');
  }

  openEnd() {
    this.menu.open('end');
  }

  openCustom() {
    this.menu.enable(true, 'custom');
    this.menu.open('custom');
  }

 

}*/

import { Component, OnInit } from '@angular/core';
import { timer} from 'rxjs/observable/timer';
import { SourceNode } from 'source-list-map';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage  {
 private selectedItem: any;
 /* private icons = [
    'flask',
    'wifi',
    'beer',
    'football',
    'basketball',
    'paper-plane',
    'american-football',
    'boat',
    'bluetooth',
    'build'
  ];
  public items: Array<{ title: string; note: string; icon: string }> = [];
  constructor() {
    for (let i = 1; i < 11; i++) {
      this.items.push({
        title: 'Item ' + i,
        note: 'This is item #' + i,
        icon: this.icons[Math.floor(Math.random() * this.icons.length)]
      });
    }
  }*/
constructor(public navCtrl: NavController){
  
}
  mostrarHome=false;
  ngOnInit() { 
     timer(6100).subscribe(() => this.mostrarHome = true  )
  }
  fotoOK() {    
    this.navCtrl.navigateForward("/primera");
  }
  fotoNOK() {    
    this.navCtrl.navigateForward("/segunda");
  }

 
}

