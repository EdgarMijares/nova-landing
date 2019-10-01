import { Component, OnInit } from '@angular/core';
import { ContactForm } from '../../models/contacto.model';
import { SendEmailService } from '../../services/send-email.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styles: []
})
export class ContactoComponent implements OnInit {

  ContactModel = new ContactForm();
  private emailResponse;
  private truefalse:boolean = false;

  constructor(private sendServices: SendEmailService) { }

  ngOnInit() {
  }

  sendContacto(test: NgForm) {
    this.getSentServices(this.ContactModel, test)
  }

  getSentServices(body:ContactForm, f: NgForm){
    this.sendServices.getResponseEmail(f.value).subscribe(
      data => {
        if(data){
          window.alert("Gracias por contactarnos.")
          f.reset();
        }
        else{
          window.alert("No se pudo contactar con nova.")
        }
      },
      err => { console.log(err); }
    );
  }

}
