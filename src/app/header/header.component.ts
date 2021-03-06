import { Component, OnInit } from '@angular/core';
import { ICartProduct } from '../interfaces/ICartProduct';
import { InteractionService } from '../services/interaction.service';
import { IMovie } from '../interfaces/IMovie';
import * as $ from 'jquery';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  cart: ICartProduct[] = [];
  totalSum: number;
  totalAmount: number;

  constructor(private interactionService: InteractionService, private router: Router) { }

  ngOnInit() {
    this.interactionService.printCart();
    this.cart = this.interactionService.getCart();
    this.countTotalAmount();
    this.countTotalPrice();

    // Subscribe to movieSource$-property in interactionService that passes on information about cart<ICartProduct[]>
    this.interactionService.movieSource$.subscribe(
      cart => {
        this.print(cart);
      }
    )

    // When cart-dropdown is shown, if clicked outside.
    $(document).on('click', function (e) {
      if ($(e.target).closest(".cartContainer").length === 0) {
        $(".cart").removeClass("showCart");
        $(".cart").addClass("hideCart");
      }
    });
  }

  cartToggle(){
    if($(".cart").hasClass('hideCart')) {
      $(".cart").removeClass("hideCart");
      $(".cart").addClass("showCart");
    }
    else {
      $(".cart").addClass("hideCart");
      $(".cart").removeClass("showCart");
    }
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

    for(let i = 0; i < this.cart.length; i++){
      this.totalSum += this.cart[i].movie.price * this.cart[i].amount;
    }
  }

  countTotalAmount(){
    this.totalAmount = 0;

    for(let i = 0; i < this.cart.length; i++){
      this.totalAmount += this.cart[i].amount;
    }
  }

  goToCheckout() {
    this.router.navigate(['/checkout']);
    $(".cart").addClass("hideCart");
  }

}