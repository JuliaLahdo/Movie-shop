import { Component, OnInit } from '@angular/core';
import { ICartProduct } from '../interfaces/ICartProduct';
import { InteractionService } from '../services/interaction.service';
import { IMovie } from '../interfaces/IMovie';
// import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  cart: ICartProduct[] = [];
  toggleCart: boolean = false;
  totalSum: number;
  totalAmount: number;

  constructor(private interactionService: InteractionService) { }
  // , public router: Router

  ngOnInit() {
    this.interactionService.printCart();
    this.cart = this.interactionService.getCart();
    this.countTotalAmount();
    this.countTotalPrice();

    this.interactionService.movieSource$.subscribe(
      cart => {
        this.print(cart);
      }
    )
  }

  cartToggle(){
    this.toggleCart = !this.toggleCart;
  }

  addMovie(singleMovie: IMovie){
    this.interactionService.sendCart(singleMovie);
    this.cart = this.interactionService.cart;
    this.countTotalAmount();
    this.countTotalPrice();
  }

  deleteMovie(id){
    this.interactionService.delete(id);
    this.countTotalAmount();
    this.countTotalPrice();
  }

  print(cart){
    this.cart = cart;
    this.countTotalAmount();
    this.countTotalPrice();
  }

  countTotalPrice(){

    this.totalSum = 0;
    console.log('Count total: ', this.cart);

    for(let i = 0; i < this.cart.length; i++){
      
      // this.totalSum blir värdet av föregående värde och beräkning på höger sida om likamed tecknet
      this.totalSum += this.cart[i].movie.price * this.cart[i].amount;

    }

  }

  countTotalAmount(){
    this.totalAmount = 0;

    for(let i = 0; i < this.cart.length; i++){
      
      // this.totalSum blir värdet av föregående värde och beräkning på höger sida om likamed tecknet
      this.totalAmount += this.cart[i].amount;

      console.log("total amount is: " + this.totalAmount);

    }
  }

}