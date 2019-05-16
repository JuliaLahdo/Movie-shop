import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DetailsComponent } from './details.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';
import { ActivatedRouteStub } from '../testing/activated-route-stub';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../services/data.service';
import { MockdataService } from '../services/mockdata.service';

describe('DetailsComponent', () => {
  let component: DetailsComponent;
  let fixture: ComponentFixture<DetailsComponent>;
  let stub = new ActivatedRouteStub({ id: 76 });

  beforeEach(async(() => {
    stub.setParamMap({ id: 76 });
    TestBed.configureTestingModule({
      declarations: [ DetailsComponent ],
      imports: [ RouterTestingModule, HttpClientModule ],
      providers: [
        {provide: ActivatedRoute, useValue: stub },
        {provide: DataService, useClass: MockdataService}
       ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create detailscomponent', () => {
    expect(component).toBeTruthy();
  });

  it('should have the id 76', () => {
    expect(component.singleMovie.id).toEqual(76);
  });

});
