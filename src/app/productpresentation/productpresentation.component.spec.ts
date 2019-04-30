import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ProductpresentationComponent } from './productpresentation.component';
import { Component } from '@angular/core';
import { IMovie } from '../interfaces/IMovie';

describe('ProductpresentationComponent', () => {
  let testHostComponent: TestHostComponent;
  let testHostFixture: ComponentFixture<TestHostComponent>;

  // let component: ProductpresentationComponent;
  // let fixture: ComponentFixture<ProductpresentationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductpresentationComponent, TestHostComponent ]
      // declarations: [ ProductpresentationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    testHostFixture = TestBed.createComponent(TestHostComponent);
    testHostComponent = testHostFixture.componentInstance;
    testHostFixture.detectChanges();
    // fixture = TestBed.createComponent(ProductpresentationComponent);
    // component = fixture.componentInstance;
    // fixture.detectChanges();
  });

  it('should create', () => {
    expect(testHostComponent).toBeTruthy();
    // expect(component).toBeTruthy();
  });

  // it('should create a movie', () => {
    // expect(newInput).toBe(Movie);
    // expect(testHostComponent.movie.length).toEqual(1);
    // expect(component.movies.length).toEqual(3);
  // })

  @Component({
    selector: 'host-component',
    template: '<app-productpresentation movie="movie"></app-productpresentation>'
  })

  class TestHostComponent{
    movie: IMovie[];

    setInput(newInput: IMovie[]){
      this.movie = newInput;
    }
  }
});
