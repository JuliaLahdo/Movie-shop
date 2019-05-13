import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HeaderComponent } from './header.component';
import { MockdataService } from '../services/mockdata.service';
import { DataService } from '../services/data.service';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderComponent ]
    })
    .overrideComponent(HeaderComponent, {set: {providers: [{provide: DataService, useClass: MockdataService}]}})
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create header component', () => {
    expect(component).toBeTruthy();
  });

  it('should add one movie to cart', () => {
    expect(component.cart.length).toEqual(0);
 
    const service = new MockdataService();
 
    service.getData().subscribe((movies) => {
      component.addToCart(movies[0]);
      expect(component.cart.length).toEqual(1);
    });

  });

  it('should add two different movies to cart', () => {
    const service = new MockdataService();
 
    service.getData().subscribe((movies) => {
      component.addToCart(movies[0]);
      component.addToCart(movies[1]);
      expect(component.cart.length).toEqual(2);
    });
  });

  it('should add two duplicate movies and increase amount to 2', () => {
    const service = new MockdataService();
 
    service.getData().subscribe((movies) => {
      component.addToCart(movies[0]);
      component.addToCart(movies[0]);
      expect(component.cart.length).toEqual(1);
    });

  });

});
