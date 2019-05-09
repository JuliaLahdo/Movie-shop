import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IMovie } from '../interfaces/IMovie';
import { ICartProduct } from '../interfaces/ICartProduct';

@Component({
  selector: 'app-productpresentation',
  templateUrl: './productpresentation.component.html',
  styleUrls: ['./productpresentation.component.css']
})
export class ProductpresentationComponent implements OnInit {

  cart: ICartProduct[];

  @Input() movie: IMovie;
  // @Output() addMovie = new EventEmitter <number>();

  // removeProductFromCart($event){
    
  // }

  addIt(id:number){
    console.log(this.movie.id);
    // this.cart.push(this.movie[0]);
    // this.cart.push({
    //   movie: {
    //     id:77,
    //     name:"Interstellar",
    //     description:"A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
    //     price:129,
    //     imageUrl:"https://images-na.ssl-images-amazon.com/images/M/MV5BMjIxNTU4MzY4MF5BMl5BanBnXkFtZTgwMzM4ODI3MjE@._V1_SY1000_CR0,0,640,1000_AL_.jpg",
    //     year:2014,
    //     added:"2017-07-16T00:00:00",
    //     productCategory:[]
    //   },
    //   amount: 1
    // }
    // );
  }

  constructor() { }

  ngOnInit() {
  }

}
