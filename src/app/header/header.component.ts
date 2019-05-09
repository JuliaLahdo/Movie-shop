import { Component, OnInit } from '@angular/core';
import { ICartProduct } from '../interfaces/ICartProduct';
import { InteractionService } from '../services/interaction.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  cart: ICartProduct[] = [
    
  ]

  addMovieToCart(){
    console.log("poop");
  }

  // får jag tillgång till allt som finns i InteractionService-klassen genom att skriva så här nedan? Förutom private?
  constructor(private interactionService: InteractionService) { }

  ngOnInit() {
    this.interactionService.teacherMessage$.subscribe(
      message => {
        // alert(message);
        // if (message == 5){
        //   alert(message);
        // }
      }
    )
  }

}
