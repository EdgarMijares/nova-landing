import { Injectable } from '@angular/core';
import { ContactForm } from '../models/contacto.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SendEmailService {
  type:any;

  httpOptions = {
    headers: new HttpHeaders({ 
      'Access-Control-Allow-Origin':'*',
      'Authorization':'authkey',
      'userid':'1'
    })
  };
  
  constructor( private http: HttpClient ) { }

  getResponseEmail(_body: ContactForm): Observable<any>{
    // this.http.post('/send.php',_body).subscribe(data =>{
    //   console.log(data);
    //   this.type = JSON.stringify(data);
    // });
    return this.http.post('./email.php', _body, this.httpOptions);
  }
}
