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
  //entrada: datos de la tutoría a mostrar
  @Input() tutoria!: Tutoria;
  //entrada: pestaña activa para cambiar texto/colores
  @Input() pestanaActiva: string = 'Próximas';
  //salidas: eventos que abren los modales correspondientes
  @Output() abrirModalCalificacion = new EventEmitter<void>();
  @Output() abrirModalRecordatorio = new EventEmitter<void>();

  //propiedad calculada: texto del botón según la pestaña
  get textoBoton(): string { return this.pestanaActiva === 'Próximas' ? 'Recordatorio' : 'Calificar'; }

  //propiedad calculada: color del botón según la pestaña
  get colorBoton(): string { return this.pestanaActiva === 'Próximas' ? '#0A4DA6' : '#DC8214'; }

  //acción: al pulsar el botón decide qué modal abrir
  alCalificar() {
    if (this.pestanaActiva === 'Anteriores') { this.abrirModalCalificacion.emit(); }
    else { this.abrirModalRecordatorio.emit(); }
  }
}
