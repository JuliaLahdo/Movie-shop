import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { DataService } from '../services/data.service';
import { IMovie } from '../interfaces/IMovie';
import { InteractionService } from '../services/interaction.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  singleMovie: IMovie;

  constructor(private route: ActivatedRoute, private service: DataService, private interactionService: InteractionService, private router: Router) { }

  ngOnInit() {
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
          return;
      }
      window.scrollTo(0, 0)
    });
    this.route.paramMap.subscribe(myParams => {
      let id = myParams.get("id");
      console.log('Got from service: ', id);
      this.service.fetchSingleMovie(id).subscribe((data) => {
        this.singleMovie = data;
      });
    });
  }

  addToCart(movie){
    this.interactionService.sendCart(movie);

    console.log('Click');
  }

}