import { Component, OnInit } from '@angular/core';
import { ICartProduct } from '../interfaces/ICartProduct';
import { InteractionService } from '../services/interaction.service';
import { IMovie } from '../interfaces/IMovie';
import * as $ from 'jquery';
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

  $(document).on('click', function (e) {
    if ($(e.target).closest(".cartContainer").length === 0) {
        $(".cart").hide();
    }
  });

  //   $(document).ready(function () {
  //     $(".cartIcon").click(function (e) {
  //         $(".cart").toggle();
  //         // e.preventDefault();
  //     });
  //     $(document).click(function(e){
  //         if(!$(e.target).closest('.cartIcon, .cart').length){
  //             $(".cart").hide();
  //         }
  //     })
  // });
    
    // $(document).mouseup(function(e) {
    // var container = $(".cartContainer");

    // if the target of the click isn't the container nor a descendant of the container
    //   if (!container.is(e.target) && container.has(e.target).length === 0) 
    //   {
    //       container.hide();
    //   }
    // });
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