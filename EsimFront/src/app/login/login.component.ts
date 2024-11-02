import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AuthService } from '../services/auth/auth.service';
import { Router } from '@angular/router';
import { UserStorageService } from '../services/storage/user-storage.service';
import { HttpErrorResponse } from '@angular/common/http';
interface User {
  userId: string;
  name : string;
  email:string;
  password: string ;
  phoneNumber: string ;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginForm!:FormGroup;
  hidePassword = true;
constructor(private formBuilder: FormBuilder,
  private snackeBar : MatSnackBar,
  private authService: AuthService,
  private router : Router){
}
ngOnInit(): void {
  this.loginForm= this.formBuilder.group({
  email: [null, [Validators.required, Validators.email]],
  password :[null , [Validators.required]],

})
}
togglePasswordVisibility(){
  this.hidePassword=!this.hidePassword
}
onSubmit(): void {
  if (this.loginForm.invalid) {
    this.snackeBar.open('Please fill in all fields correctly.', 'ERROR', { duration: 5000 });
    return;
  }

  const username = this.loginForm.get('email')!.value;
  const password = this.loginForm.get('password')!.value;

  // Appel au service d'authentification
  this.authService.login(username, password).subscribe(
    (response:User) => {
      console.log('Login successful:', response); // Affiche la réponse dans la console

      if (UserStorageService.isLoggedIn()) {
        this.router.navigateByUrl('/dashbord');}
    },
    (error: HttpErrorResponse) => { // Spécifiez le type de 'error'
      console.error('Login failed:', error); // Affiche l'erreur dans la console
      this.snackeBar.open('Bad Credentials.', 'ERROR', { duration: 5000 });
    }
  );
}
}
