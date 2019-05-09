import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ProductpresentationComponent } from '../productpresentation/productpresentation.component';
import { HeaderComponent } from '../header/header.component';
import { ICartProduct } from '../interfaces/ICartProduct';
import { InteractionService } from '../services/interaction.service';

@Component({
  selector: 'app-add-product-to-cart',
  templateUrl: './add-product-to-cart.component.html',
  styleUrls: ['./add-product-to-cart.component.css']
})
export class AddProductToCartComponent implements OnInit {

  cart: ICartProduct[] = [
    
  ]

  // Input id: number är kopplad till productpresentation html
  @Input() id: number;
  @Output() add = new EventEmitter<number>();
    // Output behövs inte när vi gör services istället för event emitter

  addMovieToCart(){
    // this.cart.push(this.movie[0]);
    // this.add.emit(this.id);
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
    
    // this.cart.push({
      // få id:t på den klickade knappen för att pusha in det objektet i cart. movie och amount.
    // });

  }

  // tar värdet vi får av interactionService (5) och sendMessage till InteractionService servicen
  constructor(private interactionService: InteractionService) { }

  greetStudent(){
    // this.cart.push(this.movie[0]);
    // this.interactionService.sendMessage(this.movies[0]);
    // this.interactionService.sendMessage(0);
  }

  // addToCart(movie){
  //   this.interactionService.sendMessage(movie);
  //   console.log(movie);
  // }

  ngOnInit() {
  }

}