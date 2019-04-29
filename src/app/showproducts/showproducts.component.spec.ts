import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MockdataService } from '../mockdata.service';
import { ShowproductsComponent } from './showproducts.component';
import { DataService } from '../data.service';

describe('ShowproductsComponent', () => {
  let component: ShowproductsComponent;
  let fixture: ComponentFixture<ShowproductsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowproductsComponent ]
    })
    .overrideComponent(ShowproductsComponent, {set: {providers: [{provide: DataService, useClass: MockdataService}]}})
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowproductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // Testa min kod via mockdata-servicen
  it('should show the movies', () => {
    expect(component.movies.length).toEqual(3);
  });
});
