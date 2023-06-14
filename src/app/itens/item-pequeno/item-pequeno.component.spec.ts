import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemPequenoComponent } from './item-pequeno.component';

describe('ItemPequenoComponent', () => {
  let component: ItemPequenoComponent;
  let fixture: ComponentFixture<ItemPequenoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ItemPequenoComponent]
    });
    fixture = TestBed.createComponent(ItemPequenoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
