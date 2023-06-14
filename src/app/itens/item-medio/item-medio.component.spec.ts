import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemMedioComponent } from './item-medio.component';

describe('ItemMedioComponent', () => {
  let component: ItemMedioComponent;
  let fixture: ComponentFixture<ItemMedioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ItemMedioComponent]
    });
    fixture = TestBed.createComponent(ItemMedioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
