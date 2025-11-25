import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../header/header.component';
import { UserProfileComponent } from '../user-profile/user-profile.component';
import { TabsComponent } from '../tabs/tabs.component';
import { TutoringCardComponent, Tutoria } from '../tutoring-card/tutoring-card.component';
import { ModalCalificacionComponent } from '../modal-calificacion/modal-calificacion.component';
import { ModalRecordatorioComponent } from '../modal-recordatorio/modal-recordatorio.component';

@Component({
  selector: 'app-profile-view',
  standalone: true,
  imports: [CommonModule, HeaderComponent, UserProfileComponent, TabsComponent, TutoringCardComponent, ModalCalificacionComponent, ModalRecordatorioComponent],
  templateUrl: './profile-view.component.html',
  styleUrls: ['./profile-view.component.css']
})
export class ProfileViewComponent {
  pestanas = ['Próximas', 'Anteriores'];
  pestanaActiva = 'Próximas';
  mostrarModal = false;
  mostrarModalRecordatorio = false;

  tutorias: Tutoria[] = [
    {
      nombreMateria: 'Nombre Materia',
      fecha: '1-000',
      horario: '',
      numeroAlumnos: 0
    },
    {
      nombreMateria: 'Nombre Materia',
      fecha: '1-0XX',
      horario: '',
      numeroAlumnos: 0
    }
  ];

  alCambioPestana(pestana: string) {
    this.pestanaActiva = pestana;
  }

  abrirModal() {
    this.mostrarModal = true;
  }

  cerrarModal() {
    this.mostrarModal = false;
  }

  abrirModalRecordatorio() {
    this.mostrarModalRecordatorio = true;
  }

  cerrarModalRecordatorio() {
    this.mostrarModalRecordatorio = false;
  }
}
