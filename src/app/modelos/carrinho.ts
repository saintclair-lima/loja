import { repeatWhen } from "rxjs";
import { ItemCarrinho } from "./item-carrinho";

export class Carrinho {
  _itensCarrinho: Map<string,ItemCarrinho>;

  constructor(itensCarrinho: Map<string,ItemCarrinho>){
    this._itensCarrinho = itensCarrinho;
  }

  public get itensCarrinho(): Map<string,ItemCarrinho>{
    return this._itensCarrinho;
  }

  public set itensCarrinho(itensCarrinho: Map<string,ItemCarrinho>){
    this._itensCarrinho = itensCarrinho;
  }

  public getItensCarrinhoComoArray(): ItemCarrinho[]{
    let listaValoresItensCarrinhoMap = Array.from(this._itensCarrinho.values());
    let listaRetorno: ItemCarrinho[] = [];

    for (let item of listaValoresItensCarrinhoMap){
      listaRetorno.push((item) as ItemCarrinho);
    }
    return listaRetorno;
  }

  public getValorTotal(): number{
    let valorTotal: number = 0;
    let listaItensCarrinhoMap = this.getItensCarrinhoComoArray();

    for (let item in (listaItensCarrinhoMap) as ItemCarrinho[]){
      let _itemCar = (item) as unknown as ItemCarrinho;
      valorTotal = valorTotal + (_itemCar.dadosItem.valorItem * _itemCar.qtd);
    }
    return valorTotal;
  }

  public getItemPorId(id:string){
    return this._itensCarrinho.get(id);
  }

  public getQuantidadePorId(id:string):number{
    let quantidade = this._itensCarrinho.get(id)?.qtd;
    return (quantidade) as number;
  }
}
