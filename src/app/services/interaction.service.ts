import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { ICartProduct } from '../interfaces/ICartProduct';
import { IMovie } from '../interfaces/IMovie';

@Injectable({
  providedIn: 'root'
})
export class InteractionService {

  private movieSource = new Subject<IMovie>();

  movieSource$ = this.movieSource.asObservable();

  constructor() { }

  sendMessage(movie: IMovie){
    this.movieSource.next(movie);
  }

}
