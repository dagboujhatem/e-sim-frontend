import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { EmailStorageService } from './email-storage.service'; 
@Injectable({
  providedIn: 'root'
})
export class CommentService {
  private baseUrl = 'http://localhost:8443/esimback/comments'; // Changez l'URL selon votre configuration

  constructor(private http: HttpClient, private emailStorageService: EmailStorageService) { }
  
  addComment(content: string, stars: number): Observable<any> {
    const userEmail = this.emailStorageService.getStoredEmail(); // Récupérez l'email stocké
    const comment = {
      userEmail: userEmail, // Utilisez l'email récupéré
      content: content,
      stars: stars
    };
    return this.http.post(this.baseUrl, comment);
  }

  getComments(): Observable<any[]> {
    return this.http.get<any[]>(this.baseUrl);
  }
}
