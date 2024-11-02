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
  this.router.navigate(['/login']);
}
openGoogleMapsSearch(): void {
 // Ouvre l'URL de recherche Google Maps dans un nouvel onglet
 window.open('https://www.google.com/maps/search/boutique+ooredoo/@36.8005652,10.0597548,11z/data=!3m1!4b1?entry=ttu&g_ep=EgoyMDI0MTAyMS4xIKXMDSoASAFQAw%3D%3D', '_blank');}
}


