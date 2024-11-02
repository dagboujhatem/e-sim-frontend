import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService, ProfileUpdateRequest  } from '../services/auth/auth.service';
import { HttpClient, HttpHeaders } from '@angular/common/http'
const TOKEN='esim-token';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {
  profileForm: FormGroup;
  updateSuccess: boolean = false;
  updateError: string | null = null;
  constructor(private fb: FormBuilder, private authService: AuthService, private http: HttpClient) {
    this.profileForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      name: ['', Validators.required],
      phoneNumber: ['', Validators.required],
      password: ['']
    });
  }
  onSubmit(profileData: any) {
    const token = localStorage.getItem(TOKEN); // Vérifiez la présence du token
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    });
  
    this.http.put('http://localhost:8443/update-profile', profileData, { headers })
      .subscribe(
        response => {
          console.log('Profile updated successfully', response);
        },
        error => {
          console.error('Error updating profile', error);
        }
      );
  }
  

}
 
