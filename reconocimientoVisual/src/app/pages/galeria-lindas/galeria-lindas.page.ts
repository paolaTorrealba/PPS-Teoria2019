import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-galeria-lindas',
  templateUrl: './galeria-lindas.page.html',
  styleUrls: ['./galeria-lindas.page.scss'],
})
export class GaleriaLindasPage implements OnInit {

  @Output() actualizarListado: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() { 
  }

  ngOnInit() {
  }

  actualizar(){
    this.actualizarListado.emit(true);
  }

}