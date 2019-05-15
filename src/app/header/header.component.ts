import { Component, OnInit } from '@angular/core';
import { ICartProduct } from '../interfaces/ICartProduct';
import { InteractionService } from '../services/interaction.service';
import { IMovie } from '../interfaces/IMovie';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  cart: ICartProduct[] = [];
  localStorageCart: ICartProduct[] = [];
  toggleCart: boolean = false;

  // får jag tillgång till allt som finns i InteractionService-klassen genom att skriva så här nedan? Förutom private?
  constructor(private interactionService: InteractionService) { }

  ngOnInit() {
    this.interactionService.movieSource$.subscribe(
      pushedMovie => {
        this.addToCart(pushedMovie)
        // alert(this.cart[2].amount)
      }
    )
  }

  cartToggle(){
    this.toggleCart = !this.toggleCart;
  }

  addToCart(movieToAdd: IMovie){
    console.log(this.cart);
    console.log(movieToAdd.id);
    console.log(movieToAdd.name);

    let addedMovie = false;

    for(let i = 0; i < this.cart.length; i++){
      if(movieToAdd.id === this.cart[i].movie.id){
        this.cart[i].amount++;
        addedMovie = true;
      }
    }
    if(addedMovie === false){
      this.cart.push({movie: movieToAdd, amount: 1});
    }

    this.saveCartToLocalStorage();

  }

  saveCartToLocalStorage(){
    localStorage.setItem('myCartLocalStorage', JSON.stringify(this.cart));
    this.printCart();
  }

  printCart(){
    let fetchLocalStorageCart = localStorage.getItem('myCartLocalStorage');
    this.localStorageCart = JSON.parse(fetchLocalStorageCart);
  }

}