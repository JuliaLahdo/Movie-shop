import { Component, OnInit } from '@angular/core';
import { InteractionService } from '../services/interaction.service';
import { ICartProduct } from '../interfaces/ICartProduct';
import { IMovie } from '../interfaces/IMovie';
import { Router, NavigationEnd } from '@angular/router';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { IOrder } from '../interfaces/IOrder';
import { DataService } from '../services/data.service';
import * as moment from 'moment';

@Component({
  selector: 'app-checkout-cart',
  templateUrl: './checkout-cart.component.html',
  styleUrls: ['./checkout-cart.component.css']
})
export class CheckoutCartComponent implements OnInit {

  timeNow = moment().format('lll');
  cart: ICartProduct[] = [];
  toggleCart: boolean = false;
  totalSum: number;
  totalAmount: number;
  orderForm: FormGroup = this.fb.group({
    emailAddress: ['', [Validators.required, Validators.email]],
    paymentMethod: ['', Validators.required]
  });

  constructor(private interactionService: InteractionService, private router: Router, private fb: FormBuilder, private dataService: DataService) { }

  ngOnInit() {
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
          return;
      }
      window.scrollTo(0, 0)
    });

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
    }
  }

  postOrder(){
    if(this.orderForm.valid) {

      let orderRowsContent = [];

      for (let i = 0; i < this.cart.length; i++) {
  
        let amount = this.cart[i].amount;
        let id = this.cart[i].movie.id;
  
        orderRowsContent.push({productId: id, amount: amount});

      }
  
      let order: IOrder = {
        id: 0,
        companyId: 23,
        created: this.timeNow, //timegrejen
        createdBy: this.orderForm.get('emailAddress').value,
        paymentMethod: this.orderForm.get('paymentMethod').value,
        totalPrice: this.totalSum,
        status: 0,
        orderRows: orderRowsContent
      }
  
      this.dataService.postOrder(order).subscribe();

      this.clearCart();

      this.router.navigate(['/admin']);
    }
  }

  clearCart(){
    this.interactionService.clearCartLocalstorage();
  }
}
