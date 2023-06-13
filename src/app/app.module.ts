import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ContainerPaineisComponent } from './container-paineis/container-paineis.component';
import { PainelInfoComponent } from './painel-info/painel-info.component';
import { PainelItensComponent } from './painel-itens/painel-itens.component';
import { PainelCarrinhoComponent } from './painel-carrinho/painel-carrinho.component';
import { PainelContaComponent } from './painel-conta/painel-conta.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ContainerPaineisComponent,
    PainelInfoComponent,
    PainelItensComponent,
    PainelCarrinhoComponent,
    PainelContaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
