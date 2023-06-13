import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PainelContaComponent } from './painel-conta.component';

describe('PainelContaComponent', () => {
  let component: PainelContaComponent;
  let fixture: ComponentFixture<PainelContaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PainelContaComponent]
    });
    fixture = TestBed.createComponent(PainelContaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
