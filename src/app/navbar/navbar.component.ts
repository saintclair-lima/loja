import { Component, Output, EventEmitter } from '@angular/core';

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

  @Output() itemDeEvento = new EventEmitter<number>();

  publicarAlteracaoIdxLinkAtivo() {
    this.itemDeEvento.emit(this.idxLinkAtivo);
  }

  ngOnInit() {this.publicarAlteracaoIdxLinkAtivo()}

  public getEstadoLinkPorIdx(idx:number): string {
    let estado: string =(idx >= 0 && idx < 4) ? this.estadoLinks[idx] : "inativo";
    return estado;
  }
  
  public setIdxLinkAtivo(indice:number){
    this.idxLinkAtivo = indice;
    this.atualizarestadoLinks();
    this.publicarAlteracaoIdxLinkAtivo();
  }
  public getIdxLinkAtivo(): number{
    return this.idxLinkAtivo;
  }

  private atualizarestadoLinks(){
    this.estadoLinks= ["inativo","inativo","inativo","inativo"];
    this.estadoLinks[this.idxLinkAtivo] = "ativo"
  }
}