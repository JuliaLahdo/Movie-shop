import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MockdataService } from '../mockdata.service';
import { ShowproductsComponent } from './showproducts.component';
import { DataService } from '../data.service';
import { ProductpresentationComponent } from '../productpresentation/productpresentation.component';

describe('ShowproductsComponent', () => {
  let component: ShowproductsComponent;
  let fixture: ComponentFixture<ShowproductsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ShowproductsComponent,
        ProductpresentationComponent
      ]
    })
    // SPC har providern DataService från spc.ts, här overridear vi den och använder MockdataService när vi gör våra tester.
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
