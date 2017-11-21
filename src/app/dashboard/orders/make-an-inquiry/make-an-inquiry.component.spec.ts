import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MakeAnInquiryComponent } from './make-an-inquiry.component';

describe('MakeAnInquiryComponent', () => {
  let component: MakeAnInquiryComponent;
  let fixture: ComponentFixture<MakeAnInquiryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MakeAnInquiryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MakeAnInquiryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
