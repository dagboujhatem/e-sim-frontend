import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Categories} from '../model/category.types';
import {environment} from '../../../environments/environment';
import {GenericService} from './generic.service';


@Injectable({
  providedIn: 'root',
})
export class CategoryService extends GenericService<Categories, number>{

  constructor(http: HttpClient) {
    super(http, `${environment.apiUrl}${environment.categories}`);

  }
}
