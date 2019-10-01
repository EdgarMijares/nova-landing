import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: []
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  
    var contador = 1;
      
    $('.menu_bar').click(function(){
      if (contador == 1) {
        $('nav').animate({
          left: '0'
        });
        contador = 0;
      } else {
        contador = 1;
        $('nav').animate({
          left: '-100%'
        });
      }
    });
  }

}
