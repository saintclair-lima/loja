import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PainelCarrinhoComponent } from './painel-carrinho.component';

describe('PainelCarrinhoComponent', () => {
  let component: PainelCarrinhoComponent;
  let fixture: ComponentFixture<PainelCarrinhoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PainelCarrinhoComponent]
    });
    fixture = TestBed.createComponent(PainelCarrinhoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
