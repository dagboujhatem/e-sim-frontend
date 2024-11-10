import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService  } from '../services/auth/auth.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
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
  constructor(private fb: FormBuilder, private authService: AuthService, private http: HttpClient,private router: Router) {
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
          this.updateSuccess = true; // Afficher le message de succès
          this.updateError = null; // Réinitialiser le message d'erreur
        },
        error => {
          console.error('Error updating profile', error);
          this.updateError = 'Erreur lors de la mise à jour du profil. Veuillez réessayer.'; // Afficher le message d'erreur
          this.updateSuccess = false; // Réinitialiser le message de succès
        }
      );
  }
  onCancel() {
    if (confirm('Do you really want to cancel?')) {
      this.profileForm.reset();
      this.router.navigate(['/dashbord']); // Optionnel : redirection
    }
  }
  
}