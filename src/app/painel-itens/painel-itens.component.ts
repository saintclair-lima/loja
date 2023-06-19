import { Component } from '@angular/core';

@Component({
  selector: 'app-painel-itens',
  templateUrl: './painel-itens.component.html',
  styleUrls: ['./painel-itens.component.css']
})
export class PainelItensComponent {
  mock = [{id: '001',
              nome: 'Pano de Prato',
              descricaoCurta: 'Pano de prato simples, para uso doméstico.',
              descricaoLonga:  'Pano de prato simples, para uso doméstico. Marca: Panordeste. Saco com 5 unidades.',
              valorItem: 12.99,
              refImagem: '001'},
            {id: '002',
              nome: 'Pano de chão',
              descricaoCurta: 'Pano de chão simples, para uso doméstico.',
              descricaoLonga:  'Pano de chão simples, para uso doméstico. Marca: Panordeste. Saco com 5 unidades.',
              valorItem: 14.34,
              refImagem: '002'},
            {id: '003',
              nome: 'Rodo Pequeno',
              descricaoCurta: 'Rodo pequeno, para uso interno e externo.',
              descricaoLonga: 'Rodo pequeno, para uso interno e externo. Cabo de madeira.',
              valorItem: 24.32,
              refImagem: '003'},
            {id: '004',
              nome: 'Rodo Grande',
              descricaoCurta: 'Rodo grande, para uso interno e externo.',
              descricaoLonga: 'Rodo grande, para uso interno e externo. Cabo de madeira.',
              valorItem: 30.00,
              refImagem: '004'}]
}
