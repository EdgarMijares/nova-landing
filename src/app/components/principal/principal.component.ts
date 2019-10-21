import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

import { ObtenerService } from '../../services/obtener.service';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.scss']
})
export class PrincipalComponent implements OnInit {

  public articulos: any[] = [];

  constructor( public sanitizer: DomSanitizer,
              public obtener: ObtenerService ) { }

  ngOnInit() {
    this.obtener.getArticulos().subscribe( articulos => {
      for (let i = 0; i < articulos.length; i++) {
        if (i === 4) { break; }
        this.articulos.push(articulos[i]);
      }
    });
  }

}
