import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  private idxLinkAtivo: number = 0;
  private estadoLinks: string[] = ["ativo",
                                   "inativo",
                                   "inativo",
                                   "inativo"];
  public getEstadoLinkPorIdx(idx:number): string {
    let estado: string =(idx >= 0 && idx < 4) ? this.estadoLinks[idx] : "inativo";
    return estado;
  }

  
  public setIdxLinkAtivo(indice:number){
    this.idxLinkAtivo = indice;
    this.atualizarestadoLinks();
  }
  public getIdxLinkAtivo(): number{
    return this.idxLinkAtivo;
  }

  private atualizarestadoLinks(){
    this.estadoLinks= ["inativo","inativo","inativo","inativo"];
    this.estadoLinks[this.idxLinkAtivo] = "ativo"
  }
}