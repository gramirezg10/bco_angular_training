import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'taller';

  mensajeParaHijo : string = 'Curso de angular!';
  mensajeDesdeElHijo: string;

  recibirMensaje($event){
    this.mensajeDesdeElHijo = $event;
    console.log(this.mensajeDesdeElHijo);
  }
}
