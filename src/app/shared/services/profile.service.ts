import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private http: HttpClient) { }

  updateProfile(profileData: any) {
    return this.http.put('http://localhost:8443/update-profile', profileData,);
  }
  showProfile() {
    return this.http.get('http://localhost:8443/show-profile',);
  }
}
