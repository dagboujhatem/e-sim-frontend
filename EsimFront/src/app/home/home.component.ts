import { Component} from '@angular/core';
import { Router } from '@angular/router'; // Importez Router
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  constructor(private router: Router) {} // Injectez Route
// Méthode pour rediriger vers la page OTP
goToOtp() {
  this.router.navigate(['/otp']);
}
}


