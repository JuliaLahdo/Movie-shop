import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../services/data.service';
import { IMovie } from '../interfaces/IMovie';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  singleMovie: IMovie;
  // IMovie;

  constructor(private route: ActivatedRoute, private service: DataService) { }

  ngOnInit() {
    this.route.paramMap.subscribe(myParams => {
      let id = myParams.get("id");
      console.log('Got from service: ', id);
      this.service.fetchSingleMovie(id).subscribe((data) => {
        this.singleMovie = data;
      });
    });
  }

}