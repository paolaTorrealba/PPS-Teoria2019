import { Component } from '@angular/core';
import {Router} from '@angular/router';
//import { AngularFireList, AngularFireDatabase } from '@angular/fire/database';
//import { Observable } from 'rxjs';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
 // tasksRef: AngularFireList<any>;
  //tasks: Observable<any[]>;
  constructor(private router:Router ) {  }
 

}
