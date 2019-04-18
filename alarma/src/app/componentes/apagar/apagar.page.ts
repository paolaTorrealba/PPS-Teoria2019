import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-apagar',
  templateUrl: './apagar.page.html',
  styleUrls: ['./apagar.page.scss'],
})
export class ApagarPage implements OnInit {

    constructor(  public router: Router) {}
    ngOnInit() { }
    onSubmitEncender (){
       console.log("se reenciende la alarma");
       this.router.navigate(['/home']);
   
  }

}
