import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tabs',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent {
  //entrada: lista de pestañas a mostrar
  @Input() pestanas: string[] = [];
  //entrada: pestaña que actualmente está activa
  @Input() pestanaActiva: string = '';
  //salida: emite la pestaña seleccionada
  @Output() cambioPestana = new EventEmitter<string>();

  //acción: emitir cambio de pestaña al hacer click
  alClickPestana(pestana: string) { this.cambioPestana.emit(pestana); }
}
