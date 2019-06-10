import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmedOrderComponent } from './confirmed-order.component';

describe('ConfirmedOrderComponent', () => {
  let component: ConfirmedOrderComponent;
  let fixture: ComponentFixture<ConfirmedOrderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfirmedOrderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmedOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
