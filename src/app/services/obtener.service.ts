import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { pipe } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ObtenerService {

  private URL_ESTUDIOS: string = `https://other-services-dos17.firebaseio.com/nova/cotizador.json`;
  private estudios: [] = [];

  constructor(private angularStorage: AngularFirestore,
              private http: HttpClient) {
                
              }

  getArticulos(status = 'active') {
    return this.angularStorage.collection('nova',
    ref => ref.where('status', '==', status))
    .snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data: any = a.payload.doc.data();
        const id = a.payload.doc.id;
        const url = `${this.changeSpace(data.categoria)}/${this.changeSpace(data.titulo)}`;
        return { id, ...data, url };
      }))
    );
  }

  getArticulo(id: string) {
    return this.angularStorage.collection('nova').doc(id)
    .snapshotChanges().pipe(
      map(a => {
        const data = a.payload.data();
        const id = a.payload.id;
        return { id, ...data };
    }));
  }

  changeSpace( text: string ) {
    return (text) ? text.replace(/ /g, '_').toLowerCase() : '';
  }

  getEstudiosArray() {
    return this.http.get<any[]>(this.URL_ESTUDIOS);
  }
}
