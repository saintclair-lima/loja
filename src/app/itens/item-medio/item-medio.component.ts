import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-item-medio',
  templateUrl: './item-medio.component.html',
  styleUrls: ['./item-medio.component.css']
})
export class ItemMedioComponent {
  @Input() idImagem:string ='';
}
