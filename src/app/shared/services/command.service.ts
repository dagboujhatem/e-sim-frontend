import {Injectable} from '@angular/core';
import {Products} from '../model/product.types';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import { CommandTypes } from '../model/CommandTypes';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CommandService {
  constructor(private httpClient:HttpClient) {
  }


  addCommand(command: CommandTypes): Observable<CommandTypes> {
    return this.httpClient.post<CommandTypes>(`${environment.apiUrl}${environment.commands}`,command);
  }
}
