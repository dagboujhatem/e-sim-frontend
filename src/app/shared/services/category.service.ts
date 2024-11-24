import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Categories} from '../model/category.types';
import {environment} from '../../../environments/environment';


@Injectable({
  providedIn: 'root',
})
export class CategoryService {

  constructor(private http: HttpClient) {
  }

  getCategories(): Observable<Categories[]> {
    return this.http.get<Categories[]>(`${environment.apiUrl}${environment.categories}`);
  }

  getCategoryById(categoryId: number): Observable<string> {
    return this.http.get<string>(`${environment.apiUrl}${environment.categories}/${categoryId}`);
  }
  deleteCategory(productId: number): Observable<any> {
    return this.http.delete(`${environment.apiUrl}${environment.products}/${productId}`);
  }
}
