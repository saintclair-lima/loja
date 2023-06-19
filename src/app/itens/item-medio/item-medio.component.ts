import { Component, Input } from '@angular/core';
import { DadosItem } from 'src/app/modelos/dados-item';

@Component({
  selector: 'app-item-medio',
  templateUrl: './item-medio.component.html',
  styleUrls: ['./item-medio.component.css']
})
export class ItemMedioComponent {
  @Input() dadosItem!:DadosItem;
  estaNoCarrinho: boolean = false;

  toggleEstaNoCarrinho():void{
    this.estaNoCarrinho = !this.estaNoCarrinho;
    console.log("togou");
  }
}
