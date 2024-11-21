import { Injectable } from '@angular/core';
const TOKEN='esim-token';
const USER ='esim-user';
@Injectable({
  providedIn: 'root'
})
export class UserStorageService {

  constructor() { }

  public saveToken (token:string):void{
    window.localStorage.removeItem(TOKEN);
    window.localStorage.setItem(TOKEN, token);
  }

  public saveUser(user: any): void {
    window.localStorage.removeItem(USER);
    window.localStorage.setItem(USER, JSON.stringify(user));
  }
 
  public getToken(): string | null {
    return localStorage.getItem(TOKEN);
  }

  
  public getUser(): any {
    return JSON.parse(localStorage.getItem(USER) || 'null');
  }
  public getUserId():string{
    const user =this.getUser();
    if(user==null){
      return '';
    }
    return user.userId ;
  }
  
 
  public isLoggedIn(): boolean {
    return this.getToken() !== null; // Vérifie si le jeton est présent
  }

  public signOut():void{
    window.localStorage.removeItem(TOKEN);
    window.localStorage.removeItem(USER);
  }
}
