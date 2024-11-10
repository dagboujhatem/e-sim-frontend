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

  login(username: string, password: string): any {
    const headers = new HttpHeaders().set('Content-Type', 'application/json'); // Définit le type de contenu
    const body = { username, password }; // Crée le corps de la requête

    return this.http.post(BASIC_URL + "authenticate", body, { headers, observe: 'response' }).pipe(
      map((res) => {
        // Récupère l'en-tête d'autorisation
        const authorizationHeader = res.headers.get('authorization');

        // Vérifie si l'en-tête d'autorisation n'est pas null
        if (authorizationHeader) {
          const token = authorizationHeader.substring(6); // Extrait le token (en retirant "Bearer ")
          const user = res.body; // Récupère l'utilisateur

          if (token && user) { // Vérifie que le token et l'utilisateur existent
            this.userStorageService.saveToken(token); // Enregistre le token
            this.userStorageService.saveUser(user); // Enregistre les détails de l'utilisateur
            return true; // Indique que la connexion a réussi
          }
        }

        return false; // Indique que la connexion a échoué
      })
    );
  }

  
  register ( signupRequest:any):Observable<any>{
     return this.http.post(BASIC_URL+ "sign-up", signupRequest);
  }
  // Méthode de mise à jour dans AuthService
   updateProfile(updateData: ProfileUpdateRequest): Observable<any> {
  const headers = new HttpHeaders({
    'Authorization': `Bearer ${localStorage.getItem('TOKEN')}`  // Assurez-vous que le token est stocké dans le localStorage
  });
  
  return this.http.put(BASIC_URL+ "update-profile", updateData, { headers });
}

}
