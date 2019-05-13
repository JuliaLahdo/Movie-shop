import { Component, OnInit } from '@angular/core';
// import { MockdataService } from '../services/mockdata.service';
import { IMovie } from '../interfaces/IMovie';
import { DataService } from '../services/data.service';
// import { ProductpresentationComponent } from '../productpresentation/productpresentation.component';

@Component({
  selector: 'app-showproducts',
  templateUrl: './showproducts.component.html',
  styleUrls: ['./showproducts.component.css']
})
export class ShowproductsComponent implements OnInit {
  movies: IMovie[];

  // Variabel dataService av typen DataService (klassen data.service.ts)
  constructor(dataService: DataService) {
    // getData är en funktion i klassen DataService (data.service.ts), här subscribear vi på det datat som vi får från getData.
    // movieApi är värdet av hela getData funktionen som vi sedan sparar i this.movies som är en array
    dataService.getData().subscribe(movieApi => this.movies = movieApi);
  }
  
  ngOnInit() {
  }

}
