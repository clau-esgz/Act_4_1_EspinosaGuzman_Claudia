import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-profile',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent {
  @Input() nombre: string = 'Cesar Lara';
  @Input() descripcion: string = 'Lorem ipsum dolor sit amet';
  @Input() correo: string = 'correo@correo.com';
  @Input() urlAvatar: string = '';

  alEditar() {
    console.log('Editar perfil');
  }

  alCerrarSesion() {
    console.log('Cerrar sesión');
  }
}
