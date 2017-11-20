import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewHigherBillOrdersComponent } from './view-higher-bill-orders.component';

describe('ViewHigherBillOrdersComponent', () => {
  let component: ViewHigherBillOrdersComponent;
  let fixture: ComponentFixture<ViewHigherBillOrdersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewHigherBillOrdersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewHigherBillOrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
