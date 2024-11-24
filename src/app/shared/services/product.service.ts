import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Products} from '../model/product.types';
import {environment} from '../../../environments/environment';


@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private apiUrl = 'http://localhost:8443/products/category';
  private url = 'http://localhost:8443/categories';

  constructor(private http: HttpClient) {
  }

  getProducts(): Observable<Products[]> {
    return this.http.get<Products[]>(`${environment.apiUrl}${environment.products}`);
  }
  getProductsByCategory(categoryId: number): Observable<Products[]> {
    return this.http.get<Products[]>(`${this.apiUrl}/${categoryId}`);
  }

  getCategoryName(categoryId: number): Observable<string> {
    return this.http.get<string>(`${this.url}/category/${categoryId}/name`);
  }
  deleteProduct(productId: number): Observable<any> {
    return this.http.delete(`${environment.apiUrl}${environment.products}/${productId}`);
  }
}
