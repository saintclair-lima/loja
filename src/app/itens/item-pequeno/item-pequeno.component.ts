import { Component, Input } from '@angular/core';
import { DadosItem } from 'src/app/modelos/dados-item';

@Component({
  selector: 'app-item-pequeno',
  templateUrl: './item-pequeno.component.html',
  styleUrls: ['./item-pequeno.component.css']
})
export class ItemPequenoComponent {
  @Input() dadosItemQtd!: [DadosItem, number];
}
