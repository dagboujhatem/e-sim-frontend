import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
const TOKEN='esim-token';
@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private http: HttpClient) { }

  updateProfile(profileData: any) {
    const token = localStorage.getItem(TOKEN); // Vérifiez la présence du token
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    });
    return this.http.put('http://localhost:8443/update-profile', profileData, { headers });
  }
  showProfile() {
    const token = localStorage.getItem(TOKEN); // Vérifiez la présence du token
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    });
    return this.http.get('http://localhost:8443/show-profile', { headers });
  }
}
