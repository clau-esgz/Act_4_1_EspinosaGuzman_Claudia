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
  @Output() cerrar = new EventEmitter<void>();
  opcionSeleccionada: string = '';

  seleccionar(opcion: string) {
    this.opcionSeleccionada = opcion;
  }

  alEstablecer() {
    console.log('Recordatorio establecido:', this.opcionSeleccionada);
    this.cerrar.emit();
  }

  alCerrar() {
    this.cerrar.emit();
  }
}
