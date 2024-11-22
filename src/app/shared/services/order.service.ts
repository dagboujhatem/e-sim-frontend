import {Injectable} from '@angular/core';
import {Products} from '../model/product.types';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {OrderTypes} from '../model/order.types';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  constructor(private httpClient:HttpClient) {
  }


  addOrder(order: OrderTypes): Observable<OrderTypes> {

    return this.httpClient.post<OrderTypes>(`${environment.apiUrl}${environment.orders}`,order);
  }
  getOrders(): Observable<OrderTypes[]> {
    return this.httpClient.get<OrderTypes[]>(`${environment.apiUrl}${environment.orders}`);
  }
  getAllOrdersByUser(): Observable<OrderTypes[]> {
    return this.httpClient.get<OrderTypes[]>(`${environment.apiUrl}${environment.orders}/user`);
  }
}
