import {Component} from '@angular/core';
import {OtpService} from '../../shared/services/otp.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-otp',
  templateUrl: './otp.component.html',
  styleUrl: './otp.component.css'
})
export class OtpComponent {
  otpData = {
    number: '',
    email: '',
  };

  message: string | null = null; // Message à afficher
  success: boolean = false; // Statut de succès ou échec

  constructor(private otpService:OtpService,private router: Router) {}

  // Méthode pour envoyer les données au backend
  submit() {
    this.otpService.callBmwBack(this.otpData.number, this.otpData.email).subscribe(
      (res) => {
        this.message = res.message;
        this.success = res.message.includes('successfully sent'); // Détecte le succès
        this.showAlertAndRedirect();
      },
      (err) => {
        this.message = 'An error occurred while processing your request.';
        this.success = false;
        this.showAlert();
      }
    );
  }

  // Méthode pour afficher la barre de message pendant quelques secondes
  showAlert() {
    setTimeout(() => {
      this.message = null;
    }, 3000); // Afficher la barre pendant 3 secondes
  }

  // Méthode pour afficher le message et rediriger en cas de succès
  showAlertAndRedirect() {
    setTimeout(() => {
      this.message = null;
      if (this.success) {
        this.router.navigate(['/verify-otp']); // Remplacez '/new-page' par le chemin de la page de redirection
      }
    }, 3000); // Afficher le message pendant 3 secondes avant de rediriger
  }
}
