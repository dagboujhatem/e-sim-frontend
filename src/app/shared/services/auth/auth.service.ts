import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { UserStorageService } from '../storage/user-storage.service';
export interface ProfileUpdateRequest {
  email: string;
  phoneNumber: string;
  name: string;
  password?: string;
}

const BASIC_URL="http://localhost:8443/";
@Injectable({
  providedIn: 'root'
})
export class AuthService {


constructor(private http: HttpClient, private userStorageService: UserStorageService) {}

  login(email: string, password: string): any {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    const body = { email, password };

    return this.http.post(BASIC_URL + "authenticate", body, { headers, observe: 'response' }).pipe(
      map((res:any) => {
        this.userStorageService.saveToken(res.body.token);
        this.userStorageService.saveUser(res.body.userId);
        return true;
      })
    );
  }


  register ( signupRequest:any):Observable<any>{
     return this.http.post(BASIC_URL+ "sign-up", signupRequest);
  }
}
