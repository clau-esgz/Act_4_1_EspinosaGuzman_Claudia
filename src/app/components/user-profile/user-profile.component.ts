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
  //entradas: datos que recibe el componente
  @Input() nombre: string = 'Cesar Lara';
  @Input() descripcion: string = 'Lorem ipsum dolor sit amet';
  @Input() correo: string = 'correo@correo.com';
  @Input() urlAvatar: string = '';

  //acción: llamada al editar perfil
  alEditar() { console.log('Editar perfil'); }

  //acción: cerrar sesión del usuario
  alCerrarSesion() { console.log('Cerrar sesión'); }
}
