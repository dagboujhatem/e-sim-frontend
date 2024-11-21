import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class TokenInterceptor implements HttpInterceptor{
  
  
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = localStorage.getItem('esim-token');
    if(token !== null && !request.url.includes('dialogflow'))
    {
      request = request.clone({
        setHeaders: {
            Authorization: `Bearer ${token}`
          }
        });
        return next.handle(request);
      }
      else{
        return next.handle(request);
      }
    }
  }