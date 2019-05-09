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

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should contain correct number of products', () => {
    expect(component.cart.length).toEqual(0);
 
    const service = new MockdataService();
 
    service.getData().subscribe((movies) => {
      component.greetStudent(movies[0]);
 
      expect(component.cart.length).toEqual(1);
 
      component.greetStudent(movies[0]);
 
      expect(component.cart.length).toEqual(1);
      expect(component.numberOfItems).toEqual(2);
    });
  });

});
