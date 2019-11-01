import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cotizador',
  templateUrl: './cotizador.component.html',
  styles: []
})
export class CotizadorComponent implements OnInit {

  nombre = '';

  constructor() { }

  ngOnInit() { }

  setNameClient( nombre: string = '' ) {
    this.nombre = nombre.toUpperCase();
  }

}
