import { Component, OnInit, EventEmitter, Output } from '@angular/core';
@Component({
  selector: 'app-galeria-feas',
  templateUrl: './galeria-feas.page.html',
  styleUrls: ['./galeria-feas.page.scss'],
})
export class GaleriaFeasPage {
  
  @Output() actualizarListado: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit() {
  }

  actualizar(){
    this.actualizarListado.emit(true);
  }

}