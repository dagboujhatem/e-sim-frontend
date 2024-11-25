import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MatSnackBar} from '@angular/material/snack-bar';
import {AuthService} from '../../shared/services/auth/auth.service';
import {Router} from '@angular/router';
import {UserStorageService} from '../../shared/services/storage/user-storage.service';
import {HttpErrorResponse} from '@angular/common/http';
import { ADMIN, USER } from '../../shared/constants/app-constants';
import { User } from '../../shared/model/user.types';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{
  loginForm!: FormGroup;
  hidePassword = true;

  constructor(private formBuilder: FormBuilder,
              private snackBar: MatSnackBar,
              private authService: AuthService,
              private router: Router,
            private userStorageService:UserStorageService) {
  }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required]],

    })
  }

  togglePasswordVisibility() {
    this.hidePassword = !this.hidePassword
  }

  onSubmit(): void {
    if (this.loginForm.invalid) {
      this.snackBar.open('Please fill in all fields correctly.', 'ERROR', {duration: 5000});
      return;
    }

    const email = this.loginForm.get('email')!.value;
    const password = this.loginForm.get('password')!.value;

    this.authService.login(email, password).subscribe(
      (response: User) => {
        console.log(response);
        if(response.role.includes(ADMIN)){
          this.router.navigateByUrl('/admin/show-categories');

        }else if(response.role.includes(USER)){
          this.router.navigateByUrl('/home');

        }
      },
      (error: HttpErrorResponse) => {
        console.log(error)
        this.snackBar.open('Bad Credentials.', 'ERROR', {duration: 5000});
      }
    );
  }
}
