import { Component, OnInit } from '@angular/core';
import { ObtenerService } from '../../../services/obtener.service';
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-ver',
  templateUrl: './ver.component.html',
  styles: []
})
export class VerComponent implements OnInit {

  public ID_BLOG = '';

  public blogContent = {
    id: '',
    titulo: '',
    categoria: '',
    editor: '',
    fecha: '',
    imagen: ''
  };

  public articulos: any[] = [];

  constructor(private obtener: ObtenerService,
              public sanitizer: DomSanitizer,
              private active: ActivatedRoute) {
    this.ID_BLOG = this.active.snapshot.paramMap.get('id');
  }

  ngOnInit() {
    this.active.params.subscribe( url => {
      this.articulos = [];
      this.obtener.getArticulo(url.id)
      .subscribe( (data: any) => {
        console.log(data);
        this.blogContent = data;
      });
      this.obtener.getArticulos().subscribe( (articulos: any[]) => {
        for (let i = 0; i < articulos.length; i++) {
          if (i === 4) { break; }
          if ( articulos[i].id !== url.id ) {
            this.articulos.push(articulos[i]);
          }
        }
      });
    });
  }

}
