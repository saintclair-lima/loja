import { Component } from '@angular/core';
import { Carrinho } from '../modelos/carrinho';

@Component({
  selector: 'app-painel-carrinho',
  templateUrl: './painel-carrinho.component.html',
  styleUrls: ['./painel-carrinho.component.css']
})
export class PainelCarrinhoComponent {
  mapa = new Map([
    ['001',{dadosItem:{id: '001',
              nome: 'Pano de Prato',
              descricaoCurta: 'Pano de prato simples, para uso doméstico.',
              descricaoLonga:  'Pano de prato simples, para uso doméstico. Marca: Panordeste. Saco com 5 unidades.',
              valorItem: 12.99,
              refImagem: '001'},
            qtd:2}],
    ['002',{dadosItem:{id: '002',
              nome: 'Pano de chão',
              descricaoCurta: 'Pano de chão simples, para uso doméstico.',
              descricaoLonga:  'Pano de chão simples, para uso doméstico. Marca: Panordeste. Saco com 5 unidades.',
              valorItem: 14.34,
              refImagem: '002'},
            qtd:1}],
    ['003',{dadosItem:{id: '003',
              nome: 'Rodo Pequeno',
              descricaoCurta: 'Rodo pequeno, para uso interno e externo.',
              descricaoLonga: 'Rodo pequeno, para uso interno e externo. Cabo de madeira.',
              valorItem: 24.32,
              refImagem: '003'},
            qtd:4}
    ],
    ['004',{dadosItem:{id: '004',
              nome: 'Rodo Grande',
              descricaoCurta: 'Rodo grande, para uso interno e externo.',
              descricaoLonga: 'Rodo grande, para uso interno e externo. Cabo de madeira.',
              valorItem: 30.00,
              refImagem: '004'},
            qtd:4}
    ]]);
    carrinho = new Carrinho(this.mapa);
}
