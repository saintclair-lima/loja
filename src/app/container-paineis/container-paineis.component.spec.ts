import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ContainerPaineisComponent } from './container-paineis.component';

describe('ContainerPaineisComponent', () => {
  let component: ContainerPaineisComponent;
  let fixture: ComponentFixture<ContainerPaineisComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContainerPaineisComponent]
    });
    fixture = TestBed.createComponent(ContainerPaineisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
