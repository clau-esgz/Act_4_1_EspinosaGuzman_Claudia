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
  @Input() pestanas: string[] = [];
  @Input() pestanaActiva: string = '';
  @Output() cambioPestana = new EventEmitter<string>();

  alClickPestana(pestana: string) {
    this.cambioPestana.emit(pestana);
  }
}
