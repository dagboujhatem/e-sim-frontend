import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, map} from 'rxjs';
import {UserStorageService} from '../storage/user-storage.service';
import {environment} from '../../../../environments/environment';
import {User} from '../../model/user.types';
import {ESIM_USER} from '../../constants/app-constants';

const TOKEN = 'esim-token';
const USER = 'esim-user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  constructor(private http: HttpClient, private userStorageService: UserStorageService) {
  }

  login(email: string, password: string): any {
    const body = {email, password};

    return this.http.post(`${environment.apiUrl}authenticate`, body, {observe: 'response'}).pipe(
      map((res: any) => {
        console.log(res)
        this.userStorageService.saveToken(res.body.token);
       const user = new User(res.body.userId, '', '', '', '', res.body.roles)
        console.log(user)
        this.userStorageService.saveStorage(ESIM_USER, user);
        return true;
      })
    );
  }


  register(signupRequest: any): Observable<any> {
    return this.http.post(`${environment.apiUrl}sign-up`, signupRequest);
  }
}
