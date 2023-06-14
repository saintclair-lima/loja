import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemGrandeComponent } from './item-grande.component';

describe('ItemGrandeComponent', () => {
  let component: ItemGrandeComponent;
  let fixture: ComponentFixture<ItemGrandeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ItemGrandeComponent]
    });
    fixture = TestBed.createComponent(ItemGrandeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
