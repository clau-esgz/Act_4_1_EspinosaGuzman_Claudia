import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface Tutoria {
  nombreMateria: string;
  fecha: string;
  horario: string;
  numeroAlumnos: number;
}

@Component({
  selector: 'app-tutoring-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tutoring-card.component.html',
  styleUrls: ['./tutoring-card.component.css']
})
export class TutoringCardComponent {
  @Input() tutoria!: Tutoria;
  @Input() pestanaActiva: string = 'Próximas';
  @Output() abrirModalCalificacion = new EventEmitter<void>();
  @Output() abrirModalRecordatorio = new EventEmitter<void>();

  get textoBoton(): string {
    return this.pestanaActiva === 'Próximas' ? 'Recordatorio' : 'Calificar';
  }

  get colorBoton(): string {
    return this.pestanaActiva === 'Próximas' ? '#0A4DA6' : '#DC8214';
  }

  alCalificar() {
    if (this.pestanaActiva === 'Anteriores') {
      this.abrirModalCalificacion.emit();
    } else {
      this.abrirModalRecordatorio.emit();
    }
  }
}
