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
  //evento para cerrar el modal
  @Output() cerrar = new EventEmitter<void>();

  //estado de la calificación y comentario
  calificacion = 0;
  comentario = '';

  //selecciona número de estrellas
  seleccionarCalificacion(valor: number) { this.calificacion = valor; }

  //actualiza el comentario según el textarea
  alCambiarComentario(event: Event) { const target = event.target as HTMLTextAreaElement; this.comentario = target.value; }

  //envía la calificación y cierra
  alEnviar() { console.log('Enviar calificación:', this.calificacion, this.comentario); this.cerrar.emit(); }

  //cierra el modal sin enviar
  alCerrar() { this.cerrar.emit(); }
}
