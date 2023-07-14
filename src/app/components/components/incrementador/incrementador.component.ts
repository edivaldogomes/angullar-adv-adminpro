import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styleUrls: ['./incrementador.component.css'],
})
export class IncrementadorComponent implements OnInit {
  ngOnInit() {
    this.btnClass = `btn ${this.btnClass}`;
  }

  // @Input() progreso: number = 5;
  @Input('valor') progreso: number = 40;
  @Input() btnClass: string = 'btn-primary';
  @Output() valorSalida: EventEmitter<number> = new EventEmitter();

  cambiarValor(valor: number) {
    if (this.progreso >= 100 && valor >= 0) {
      this.valorSalida.emit(100);
      return (this.progreso = 100);
    } else if (this.progreso <= 0 && valor < 0) {
      this.valorSalida.emit(0);
      return (this.progreso = 0);
    } else {
      this.valorSalida.emit(this.progreso);
      return (this.progreso = this.progreso + valor);
    }
  }

  onChange(newValor: number) {
    if (newValor >= 100) {
      this.progreso = 100;
    } else if (newValor <= 0) {
      this.progreso = 0;
    } else {
      this.progreso = newValor;
    }
    console.log('Hey!!!', this.progreso);
    this.valorSalida.emit(this.progreso);
  }
}
