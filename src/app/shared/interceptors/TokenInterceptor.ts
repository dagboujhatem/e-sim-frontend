import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {catchError, Observable, throwError} from 'rxjs';
import {UserStorageService} from '../services/storage/user-storage.service';
import {Router} from '@angular/router';
import {MatSnackBar} from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptor implements HttpInterceptor {

  constructor(private userStorageService: UserStorageService,
              private snackBar: MatSnackBar,
              private router: Router) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let newReq = req.clone();
    const token = this.userStorageService.getToken();
    console.log(token)
    console.log(req.url)
    newReq = newReq.clone({
      setHeaders: {
        'Content-Type': 'application/json'
      }
    });
    if (token && !req.url.includes('api/v1/auth') && !req.url.includes('dialogflow')) {
      newReq = newReq.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`
        }
      });
      return next.handle(newReq).pipe(
        catchError((error: any) => {
          console.log(error)
          if (error.status === 403) {
            this.userStorageService.signOut();
            this.snackBar.open(error?.error?.message, 'ERROR', {duration: 5000});
            this.router.navigate(['/login']);
          }
          return throwError(error);
        }));
    } else {
      return next.handle(req);
    }
  }

}
