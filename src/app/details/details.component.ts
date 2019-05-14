import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  singleMovie;

  constructor(private route: ActivatedRoute, private service: DataService) { }

  ngOnInit() {
    this.route.paramMap.subscribe(myParams => {
      let id = myParams.get("id");
      console.log(id);
      this.service.fetchSingleMovie(id).subscribe((data) => {
        this.singleMovie = data;
      });
    });
  }

}