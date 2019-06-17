import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CheckoutCartComponent } from './checkout-cart.component';
import { RouterTestingModule } from '@angular/router/testing';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MockdataService } from '../services/mockdata.service';

describe('CheckoutCartComponent', () => {
  let component: CheckoutCartComponent;
  let fixture: ComponentFixture<CheckoutCartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckoutCartComponent ],
      imports: [ RouterTestingModule, HttpClientModule, FormsModule, ReactiveFormsModule ],
      providers: [ FormBuilder ]
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

  it('should clear cart after submitting order', () => {
    const service = new MockdataService();
 
    service.fetchMovies().subscribe((movies) => {
 
      component.addMovie(movies[0]);
      expect(component.cart.length).toEqual(1);
      component.clearCart();
      expect(component.cart.length).toEqual(0);
    });
  });
});
