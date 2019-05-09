import { Component, OnInit } from '@angular/core';
import { ICartProduct } from '../interfaces/ICartProduct';
import { InteractionService } from '../services/interaction.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  cart: ICartProduct[] = [];

  // får jag tillgång till allt som finns i InteractionService-klassen genom att skriva så här nedan? Förutom private?
  constructor(private interactionService: InteractionService) { }

  ngOnInit() {
    this.interactionService.teacherMessage$.subscribe(
      poop => {
        this.cart.push({movie: poop, amount: 1});
        console.log(poop.id);
        alert(poop.name);
        console.log(this.cart);
        // alert(this.cart[2].amount)
        // alert("hejo");
        // if (message == 5){
          // alert(movie);
        // }
        // this.counter.push
        // this.counter++;
        // this.cart.push(movieToAdd);    DENNA ANVÄNDE VI FÖRUT
        // alert(this.poop.amount);
      }
    )
  }

}
