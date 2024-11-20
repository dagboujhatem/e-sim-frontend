import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Products} from '../model/product.types';


@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private apiUrl = 'http://localhost:8443/products/category';
  private url = 'http://localhost:8443/categories';

  constructor(private http: HttpClient) {
  }

  getProductsByCategory(categoryId: number): Observable<Products[]> {
    return this.http.get<Products[]>(`${this.apiUrl}/${categoryId}`);
  }

  getCategoryName(categoryId: number): Observable<string> {
    return this.http.get<string>(`${this.url}/category/${categoryId}/name`);
  }
}
