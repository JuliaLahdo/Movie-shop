import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AddProductToCartComponent } from './add-product-to-cart.component';
import { DataService } from '../services/data.service';
import { MockdataService } from '../services/mockdata.service';
import { ProductpresentationComponent } from '../productpresentation/productpresentation.component';
import { HeaderComponent } from '../header/header.component';

describe('AddProductToCartComponent', () => {
  let component: AddProductToCartComponent;
  let fixture: ComponentFixture<AddProductToCartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        AddProductToCartComponent,
        ProductpresentationComponent,
        HeaderComponent
      ]
    })
    .overrideComponent(AddProductToCartComponent, {set: {providers: [{provide: DataService, useClass: MockdataService}]}})
    .compileComponents();

  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddProductToCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create an empty cart', () => {
    expect(component.cart.length).toEqual(0);
  });
 
  it('should add 1 product to cart', () => {
    component.addMovieToCart();
    expect(component.cart.length).toEqual(1);
  });

      // this.cart.push(this.movie[0] + 1);
 
  // it('should add one product to cart, but amount should be two', () => {
  //   expect(component.cart.length).toEqual(1);
  // });

  // kör funktion som lägger till saker i er lista, hitta på vad den ska heta, vad den ska ta emot för saker, vad den ska göra med den informationen osv.

  // component.add();
  //   expect(component.animalObjectArray.length).toEqual(5);

  // it('should add 1 product to cart, but amount should be 2', () => {
    // expect(component.cart.length).toEqual(0);
  // });

});
