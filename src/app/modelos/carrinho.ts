export class Carrinho {
  _itensCarrinho: Map;

  constructor(itensCarrinho: Map){
    this._itensCarrinho = itensCarrinho;
  }

  public get itensCarrinho:Map(){
    return this._itensCarrinho;
  }

  public set itensCarrinho:void(itensCarrinho: Map){
    this._itensCarrinho = itensCarrinho;
  }

  public getValorTotal: number (){
    let valorTotal: numero = 1;
    for (let item in this._itensCarrinho){
      valorTotal += (item.dadosItem.valorItem*item.qtd);
    }
    return valorTotal;
  }

  public getItemPorId(id:string){
    return this._itensCarrinho(id);
  }
}
