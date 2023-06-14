import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'loja';

  idxLinkAtivoNavbar: number = 0;
  setIdxLinkAtivoNavbar(idx:number): void{
    this.idxLinkAtivoNavbar = idx;
  }
}
