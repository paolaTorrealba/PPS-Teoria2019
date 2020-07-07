import { NgModule } from '@Angular/core';
import { IonicModule } from '@ionic/angular';
import { cameraComponent } from './camara/camara.component';

@NgModule({
  declarations: [cameraComponent],
  exports: [cameraComponent],
  imports: [IonicModule]
})
export class ComponentModule  {

  constructor() { }

  ngOnInit() {}

}
