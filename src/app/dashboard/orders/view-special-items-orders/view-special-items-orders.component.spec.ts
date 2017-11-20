import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewSpecialItemsOrdersComponent } from './view-special-items-orders.component';

describe('ViewSpecialItemsOrdersComponent', () => {
  let component: ViewSpecialItemsOrdersComponent;
  let fixture: ComponentFixture<ViewSpecialItemsOrdersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewSpecialItemsOrdersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewSpecialItemsOrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
