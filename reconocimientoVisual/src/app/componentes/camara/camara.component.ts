import { Component, OnInit } from '@angular/core';
import { General } from 'src/app/general';
import { CameraService } from 'src/app/servicios/camara.service';

@Component({
  selector: 'app-camera',
  templateUrl: './camera.component.html',
  styleUrls: ['./camera.component.scss'],
})
export class cameraComponent implements OnInit {

  private type: any;
  
  constructor(private cameraService: CameraService,
    private general: General,) { 
    this.type = this.general.type
  }

  ngOnInit() { }
  
  takePhoto(){
    this.cameraService.takePhoto(this.type);
  }

}