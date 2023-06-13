import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  atualizaAtiva(item: Element): void{
    const listaLinks: Element[] = Array.from(document.getElementsByTagName('nav-bar-link'));
    listaLinks.forEach((link: Element) => {
      link.classList.remove('ativo');
  });
  
  item.classList.add('ativo')
  } 
}
