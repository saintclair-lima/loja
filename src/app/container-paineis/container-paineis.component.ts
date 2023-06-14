import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-container-paineis',
  templateUrl: './container-paineis.component.html',
  styleUrls: ['./container-paineis.component.css']
})
export class ContainerPaineisComponent {
  @Input() idxLinkAtivoNavbar: number = 0;
}
