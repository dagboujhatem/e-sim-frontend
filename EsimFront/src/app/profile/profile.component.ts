import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProfileService } from '../services/profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent implements OnInit {
  profileForm: FormGroup;
  updateSuccess: boolean = false;
  updateError: string | null = null;
  constructor(private fb: FormBuilder, private profileService : ProfileService,private router: Router) {
    this.profileForm = this.fb.group({
      email: [{value:'',disabled:true}, [Validators.required, Validators.email]],
      name: ['', Validators.required],
      phoneNumber: ['', Validators.required],
      password: ['']
    });
  }
  ngOnInit(): void {
    this.profileService.showProfile().subscribe(
      response => {
        const Data:any = response;
        delete Data['password'];
        this.profileForm.patchValue(Data);
      
      },
      error => {
        
      }
    );
  }
  onSubmit(profileData: any) {
    this.profileService.updateProfile(profileData)
    .subscribe(
        response => {
          this.updateSuccess = true; // Afficher le message de succès
          this.updateError = null; // Réinitialiser le message d'erreur
        },
        error => {
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