import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  year = '2020';
  author = 'Germán Ramírez Gaviria';
  @Input() mensajeDesdeElPadre:string
  @Output() mensajeParaElPadre = new EventEmitter<string>()

  constructor() {
  }

  ngOnInit(): void {
    this.mensajeParaElPadre.emit('Primer proyecto de Angular!');
  }

}
