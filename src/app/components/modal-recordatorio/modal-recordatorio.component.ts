import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-modal-recordatorio',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './modal-recordatorio.component.html',
  styleUrls: ['./modal-recordatorio.component.css']
})
export class ModalRecordatorioComponent {
  //evento para notificar que se cierra el modal
  @Output() cerrar = new EventEmitter<void>();
  //opción elegida por el usuario
  opcionSeleccionada: string = '';

  //selecciona una opción de recordatorio
  seleccionar(opcion: string) { this.opcionSeleccionada = opcion; }

  //establece el recordatorio y cierra el modal
  alEstablecer() { console.log('Recordatorio establecido:', this.opcionSeleccionada); this.cerrar.emit(); }

  //cierra el modal sin guardar
  alCerrar() { this.cerrar.emit(); }
}
