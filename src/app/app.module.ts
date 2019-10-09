import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'

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
    VerComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
