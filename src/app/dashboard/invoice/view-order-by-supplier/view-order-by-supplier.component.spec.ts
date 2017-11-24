import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewOrderBySupplierComponent } from './view-order-by-supplier.component';

describe('ViewOrderBySupplierComponent', () => {
  let component: ViewOrderBySupplierComponent;
  let fixture: ComponentFixture<ViewOrderBySupplierComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewOrderBySupplierComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewOrderBySupplierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
