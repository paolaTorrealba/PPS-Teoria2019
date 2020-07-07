
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab-bar',
  templateUrl: './tab-bar.component.html',
  styleUrls: ['./tab-bar.component.scss'],
})
export class TabBarComponent implements OnInit {

  private urlGallery:string = "/main/galeria-lindas/";
  private urlCamera:string = "/main/camera/";
  private urlChart:string = "/main/grafico-lindas/";
  private urlList:string = "/main/lista-lindas/";

  constructor(
    private router: Router) {
  }

  ngOnInit() { 
  }

  goTo(option){
    if(option == "camera"){
      this.router.navigateByUrl(this.urlCamera + "");
    }
    else if(option == "galeria-lindas"){
      this.router.navigateByUrl(this.urlGallery + "");
    }
    else if(option == "grafico-lindas"){
      this.router.navigateByUrl(this.urlChart + "");
    }
    else if(option == "lista-lindas"){
      this.router.navigateByUrl(this.urlList + "");
    }
  }
}