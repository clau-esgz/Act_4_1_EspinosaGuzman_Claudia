import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  //componente: cabecera principal de la aplicación
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  //consulta de búsqueda actual
  consultaBusqueda: string = '';

  //icono seleccionado en la cabecera
  iconoActivo: string = 'perfil';

  //evento: actualiza la consulta cuando el usuario escribe
  alBuscar(evento: Event) {
    const entrada = evento.target as HTMLInputElement; //obtenemos valor
    this.consultaBusqueda = entrada.value; //guardamos texto
    console.log('Buscando:', this.consultaBusqueda);
  }

  //acciones para cambiar el icono activo
  alClickMensajes() { this.iconoActivo = 'mensajes'; console.log('Mensajes'); }
  alClickMenu() { this.iconoActivo = 'menu'; console.log('Menú'); }
  alClickInicio() { this.iconoActivo = 'inicio'; console.log('Inicio'); }
  alClickBuscar() { this.iconoActivo = 'buscar'; console.log('Buscar'); }
  alClickPerfil() { this.iconoActivo = 'perfil'; console.log('Perfil'); }
}
