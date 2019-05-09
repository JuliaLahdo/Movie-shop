import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { MockdataService } from './mockdata.service';
import { ICartProduct } from '../interfaces/ICartProduct';
import { IMovie } from '../interfaces/IMovie';

@Injectable({
  providedIn: 'root'
})
export class InteractionService {

  private teacherMessageSource = new Subject<IMovie>();

  cart: ICartProduct[] = [];

  teacherMessage$ = this.teacherMessageSource.asObservable();

  constructor() { }

  sendMessage(movie: IMovie){
    this.teacherMessageSource.next(movie);
    console.log(this.cart);
  }

}
