import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  // Nombre con el que este componente se puede usar en el HTML
  selector: 'app-header',

  // Indica que este componente funciona sin necesitar un módulo externo
  standalone: true,

  // Módulos extras que este componente requiere
  imports: [CommonModule],

  // Archivo donde está el HTML del header
  templateUrl: './header.component.html',

  // Archivo donde está el CSS para este componente
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  // Guarda lo que el usuario escribe en el buscador
  consultaBusqueda: string = '';

  // Indica qué icono está seleccionado actualmente
  iconoActivo: string = 'perfil';

  // Se ejecuta cada vez que se escribe algo en el input de búsqueda
  alBuscar(evento: Event) {
    //btenemos el input desde el evento
    const entrada = evento.target as HTMLInputElement;

    //gugardamos el texto que el usuario escribió
    this.consultaBusqueda = entrada.value;

    //mostramos en consola lo que se está buscando
    console.log('Buscando:', this.consultaBusqueda);
  }

  //activa el icono de mensajes y muestra mensaje en consola
  alClickMensajes() {
    this.iconoActivo = 'mensajes';
    console.log('Mensajes');
  }

  //activa el icono del menú
  alClickMenu() {
    this.iconoActivo = 'menu';
    console.log('Menú');
  }

  // activa el icono de inicio
  alClickInicio() {
    this.iconoActivo = 'inicio';
    console.log('Inicio');
  }

  //activa la opción de buscar
  alClickBuscar() {
    this.iconoActivo = 'buscar';
    console.log('Buscar');
  }

  //activa el icono del perfil del usuario
  alClickPerfil() {
    this.iconoActivo = 'perfil';
    console.log('Perfil');
  }
}
