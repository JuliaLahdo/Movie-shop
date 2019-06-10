import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IMovie } from '../interfaces/IMovie';
import { IDataService } from '../interfaces/IDataService';
import { IOrder } from '../interfaces/IOrder';

@Injectable({
  providedIn: 'root'
})
export class DataService implements IDataService{

  constructor(private httpClient: HttpClient) { }

  // Gör api-anropet och returnerar till showproducts.ts av typen <IMovie[]> pga att jag kallar på den funktionen i showproducts.ts
  fetchMovies(): Observable<IMovie[]>{
    return this.httpClient.get<IMovie[]>("https://medieinstitutet-wie-products.azurewebsites.net/api/products");
  }

  fetchSingleMovie(id): Observable<IMovie>{
    return this.httpClient.get<IMovie>("https://medieinstitutet-wie-products.azurewebsites.net/api/products/" + id);
  }

  postOrder(order): Observable<IOrder>{
    return this.httpClient.post<IOrder>('https://medieinstitutet-wie-products.azurewebsites.net/api/orders', order);
  }

  fetchOrderData(): Observable<IOrder[]> {
    return this.httpClient.get<IOrder[]>('https://medieinstitutet-wie-products.azurewebsites.net/api/orders?companyId=23');
  }

}