import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CheckoutCartComponent } from './checkout-cart.component';
import { RouterTestingModule } from '@angular/router/testing';
import { FormBuilder } from '@angular/forms';
// import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';

describe('CheckoutCartComponent', () => {
  let component: CheckoutCartComponent;
  let fixture: ComponentFixture<CheckoutCartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckoutCartComponent ],
      imports: [ RouterTestingModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckoutCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
