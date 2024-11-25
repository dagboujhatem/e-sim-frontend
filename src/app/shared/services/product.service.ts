import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {catchError, map, Observable, of, throwError} from 'rxjs';
import {Products} from '../model/product.types';
import {environment} from '../../../environments/environment';
import {GenericService} from './generic.service';
import {Categories} from '../model/category.types';


@Injectable({
  providedIn: 'root',
})
export class ProductService extends GenericService<Products, number> {

  constructor(http: HttpClient) {
    super(http, `${environment.apiUrl}${environment.products}`);

  }

  getProductsByCategory(categoryId: number): Observable<Products[]> {
    return this.http.get<Products[]>(`${environment.apiUrl}${environment.products}/category/${categoryId}`);
  }

  getCategoryName(categoryId: number): Observable<string> {
    return this.http.get<string>(`${environment.apiUrl}${environment.products}/category/${categoryId}/name`);
  }

  addProduct(product: any): Observable<Products> {
    return this.http.post<Products>(`${environment.apiUrl}${environment.products}/add`, product);
  }

  editProduct(product: any): Observable<Products> {
    return this.http.patch<Products>(`${environment.apiUrl}${environment.products}/edit`, product);
  }
}
