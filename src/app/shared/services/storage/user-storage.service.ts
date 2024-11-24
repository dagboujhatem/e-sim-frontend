import { Injectable } from '@angular/core';
import {ESIM_USER, TOKEN} from '../../constants/app-constants';
import {BehaviorSubject} from 'rxjs';
const USER ='esim-user';
@Injectable({
  providedIn: 'root'
})
export class UserStorageService {
  private userSubject = new BehaviorSubject<any>(this.getStorage(USER));

  constructor() { }
  get user$() {
    return this.userSubject.asObservable();
  }
  public saveToken (token:string):void{
    window.localStorage.removeItem(TOKEN);
    window.localStorage.setItem(TOKEN, token);
  }

  public saveStorage(item:string, body: any): void {
    window.localStorage.removeItem(item);
    window.localStorage.setItem(item, JSON.stringify(body));
    this.userSubject.next(body); // Mise à jour des observateurs

  }

  public getToken(): string | null {
    return localStorage.getItem(TOKEN);
  }


  public getStorage(item:string): any {
    return JSON.parse(localStorage.getItem(item) || 'null');
  }
  public getUserId():string{
    const user =this.getStorage(ESIM_USER);
    if(user==null){
      return '';
    }
    return user.id ;
  }


  public isLoggedIn(): boolean {
    return this.getToken() !== null; // Vérifie si le jeton est présent
  }

  public signOut():void{
    window.localStorage.removeItem(TOKEN);
    window.localStorage.removeItem(ESIM_USER);
    this.userSubject.next(null);

  }
}
