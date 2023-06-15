import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-item-pequeno',
  templateUrl: './item-pequeno.component.html',
  styleUrls: ['./item-pequeno.component.css']
})
export class ItemPequenoComponent {
  @Input() idImagem:string ='';
}
