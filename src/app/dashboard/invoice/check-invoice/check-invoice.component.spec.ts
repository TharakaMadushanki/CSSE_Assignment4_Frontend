import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckInvoiceComponent } from './check-invoice.component';

describe('CheckInvoiceComponent', () => {
  let component: CheckInvoiceComponent;
  let fixture: ComponentFixture<CheckInvoiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckInvoiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckInvoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
