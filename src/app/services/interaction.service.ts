import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { ICartProduct } from '../interfaces/ICartProduct';
import { IMovie } from '../interfaces/IMovie';

@Injectable({
  providedIn: 'root'
})
export class InteractionService {

  private movieSource = new Subject<ICartProduct[]>();
  cart: ICartProduct[] = [];
  movieSource$ = this.movieSource.asObservable();

  constructor() { }

  sendCart(movieToAdd: IMovie){

    let addedMovie = false;

    for(let i = 0; i < this.cart.length; i++){
      if(movieToAdd.id === this.cart[i].movie.id){
        this.cart[i].amount++;
        addedMovie = true;
        this.cart[i].totalPrice += this.cart[i].movie.price;
      }
    }

    if(addedMovie === false){
      this.cart.push({movie: movieToAdd, amount: 1, totalPrice: movieToAdd.price});
    }

    this.movieSource.next(this.cart);

    this.saveCartToLocalStorage();
  }

  saveCartToLocalStorage(){
    localStorage.setItem('myCartLocalStorage', JSON.stringify(this.cart));
  }

  printCart(){
    if(localStorage.getItem('myCartLocalStorage') == null || localStorage.getItem('myCartLocalStorage') == "[]" ){
      this.cart = [];
    }else{
      let fetchLocalStorageCart = localStorage.getItem('myCartLocalStorage');
      this.cart = JSON.parse(fetchLocalStorageCart);
    }

  this.getCart();
  }

  getCart(){
    return this.cart;
  }

  delete(id: number){
    for(let i = 0; i < this.cart.length; i++){
      if(this.cart[i].movie.id === id){
        if(this.cart[i].amount > 0){
          this.cart[i].amount--;
          this.cart[i].totalPrice -= this.cart[i].movie.price;
        }

        if(this.cart[i].amount === 0){
          this.cart.splice(i, 1);
        }
      }
    }
    this.movieSource.next(this.cart);
    this.saveCartToLocalStorage();
  }

  clearCartLocalstorage(){
    this.cart.splice(0, this.cart.length);
    this.movieSource.next(this.cart);
    this.saveCartToLocalStorage();
  }
}
