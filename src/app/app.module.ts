import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { environment } from '../environments/environment';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';

import { AppRoutingModule } from './app.router';

import { AppComponent } from './app.component';
import { PrincipalComponent } from './components/principal/principal.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { VideoComponent } from './components/video/video.component';

import { DomseguroPipe } from './pipes/domseguro.pipe';
import { BlogComponent } from './components/blog/blog.component';
import { NostrosComponent } from './components/nostros/nostros.component';
import { VerComponent } from './components/blog/ver/ver.component';
import { CotizadorComponent } from './components/cotizador/cotizador.component';

@NgModule({
  declarations: [
    AppComponent,
    PrincipalComponent,
    NavbarComponent,
    FooterComponent,
    ContactoComponent,
    VideoComponent,
    DomseguroPipe,
    BlogComponent,
    NostrosComponent,
    VerComponent,
    CotizadorComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
