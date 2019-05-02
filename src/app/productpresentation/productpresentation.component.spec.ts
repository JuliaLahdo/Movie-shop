import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ProductpresentationComponent } from './productpresentation.component';
import { Component } from '@angular/core';
import { IMovie } from '../interfaces/IMovie';

describe('ProductpresentationComponent', () => {
  let testHostComponent: TestHostComponent;
  let testHostFixture: ComponentFixture<TestHostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductpresentationComponent, TestHostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    testHostFixture = TestBed.createComponent(TestHostComponent);
    testHostComponent = testHostFixture.componentInstance;
    testHostFixture.detectChanges();
  });

  it('should create', () => {
    expect(testHostComponent).toBeTruthy();
  });

  it('should create a movie', () => {

    testHostComponent.setInput({
        id: 76,
        name:"The Dark Knight",
        description:"When the menace known as the Joker emerges from his mysterious past, he wreaks havoc and chaos on the people of Gotham, the Dark Knight must accept one of the greatest psychological and physical tests of his ability to fight injustice",
        price:199,
        imageUrl:"https://images-na.ssl-images-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SY1000_CR0,0,675,1000_AL_.jpg",
        year:2008,
        added:"2016-01-05T00:00:00",
        productCategory:[]
    });

    expect(testHostComponent.movie.name).toEqual("The Dark Knight");
  })

  @Component({
    selector: 'host-component',
    template: '<app-productpresentation movie="movie"></app-productpresentation>'
  })

  class TestHostComponent{
    movie: IMovie;

    setInput(newInput: IMovie){
      this.movie = newInput;
    }
  }
});
