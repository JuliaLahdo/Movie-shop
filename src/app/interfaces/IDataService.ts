import { Observable } from 'rxjs';
import { IMovie } from './IMovie';
import { IOrder } from './IOrder';

export interface IDataService{
    fetchMovies():Observable<IMovie[]>;
    postOrder(order): Observable<IOrder>;
}