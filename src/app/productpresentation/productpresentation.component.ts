import { Component, OnInit, Input } from '@angular/core';
import { IMovie } from '../interfaces/IMovie';
import { InteractionService } from '../services/interaction.service';

@Component({
  selector: 'app-productpresentation',
  templateUrl: './productpresentation.component.html',
  styleUrls: ['./productpresentation.component.css']
})
export class ProductpresentationComponent implements OnInit {

  @Input() movie: IMovie;

  addToCart(movie){
    this.interactionService.sendCart(movie);
  }

  constructor(private interactionService: InteractionService) { }

  ngOnInit() {
  }

}
