import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PainelItensComponent } from './painel-itens.component';

describe('PainelItensComponent', () => {
  let component: PainelItensComponent;
  let fixture: ComponentFixture<PainelItensComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PainelItensComponent]
    });
    fixture = TestBed.createComponent(PainelItensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
