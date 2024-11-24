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
  constructor(private httpClient: HttpClient) {
  }


  addOrder(order: OrderTypes): Observable<OrderTypes> {

    return this.httpClient.post<OrderTypes>(`${environment.apiUrl}${environment.orders}`, order);
  } 
  editOrder(id:number, order: OrderTypes): Observable<OrderTypes> {

    return this.httpClient.patch<OrderTypes>(`${environment.apiUrl}${environment.orders}/${id}`, order);
  }

  deleteOrder(orderId: number): Observable<OrderTypes> {

    return this.httpClient.delete<OrderTypes>(`${environment.apiUrl}${environment.orders}/${orderId}`);
  }

  getOrders(): Observable<OrderTypes[]> {
    return this.httpClient.get<OrderTypes[]>(`${environment.apiUrl}${environment.orders}`);
  }

  getAllOrdersByUser(): Observable<OrderTypes[]> {
    return this.httpClient.get<OrderTypes[]>(`${environment.apiUrl}${environment.orders}/user`);
  }
}
