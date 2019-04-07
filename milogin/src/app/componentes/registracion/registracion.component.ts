import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-registracion',
  templateUrl: './registracion.component.html',
  styleUrls: ['./registracion.component.scss'],
})
export class RegistracionComponent implements OnInit {



  constructor(private router:Router ) { 
    this.router.navigate(['/registracion']);
  }

  ngOnInit() {}

}
