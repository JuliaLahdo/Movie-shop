import { Observable } from 'rxjs';
import { IMovie } from './IMovie';

export interface IDataService{
    fetchMovies():Observable<IMovie[]>;
}