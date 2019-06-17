import { IMovie } from './IMovie';

export interface ICartProduct{
    movie: IMovie;
    amount: number;
    totalPrice: number;
}