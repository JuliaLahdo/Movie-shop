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

  constructor(dataService: DataService) {
    
    // Subscribe to data from fetchMovies() and save it in variable movieApi, that you then save in this.movies.
    dataService.fetchMovies().subscribe(movieApi => this.movies = movieApi);
  }
  
  ngOnInit() {
  }

}
