import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-modal-calificacion',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './modal-calificacion.component.html',
  styleUrls: ['./modal-calificacion.component.css']
})
export class ModalCalificacionComponent {
  @Output() cerrar = new EventEmitter<void>();

  calificacion = 0;
  comentario = '';

  seleccionarCalificacion(valor: number) {
    this.calificacion = valor;
  }

  alCambiarComentario(event: Event) {
    const target = event.target as HTMLTextAreaElement;
    this.comentario = target.value;
  }

  alEnviar() {
    console.log('Enviar calificación:', this.calificacion, this.comentario);
    this.cerrar.emit();
  }

  alCerrar() {
    this.cerrar.emit();
  }
}
