import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) {
  }


  forgotPassword(email: string) {
    return this.http.post(`${environment.apiUrl}api/forgot-password`, email);
  }


  resetPassword(token: string, password: string) {
    const body = {
      token, password
    }
    return this.http.post(`${environment.apiUrl}api/reset-password`, body);

  }
}
