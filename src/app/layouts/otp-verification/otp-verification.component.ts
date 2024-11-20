import { Component } from '@angular/core';
import { OtpService } from '../../shared/services/otp.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-otp-verification',
  templateUrl: './otp-verification.component.html',
  styleUrl: './otp-verification.component.css'
})
export class OtpVerificationComponent {
  otpData = {
    email: '', // Email associé
    otpCode: '', // Code OTP à vérifier
  };
  success : boolean = false;
  message: string | null = null;


  constructor(private otpService: OtpService, private router: Router) {}
  submit() {
    this.otpService.verifyOtp(this.otpData.email, this.otpData.otpCode).subscribe(
      (response: { message: string; success: boolean }) => {
        this.success = response.success; // Récupérer le statut de succès
        this.message = response.message; // Récupérer le message

    // Vérifier si l'OTP a été vérifié avec succès
    if (this.success) {

      this.message="OTP verified successfully.";
       // Appeler la méthode pour gérer le succès
       this.showAlert(); // Afficher le message d'erreur
       setTimeout(() => {
         this.router.navigate(['/Qr_code',this.otpData.otpCode]); // Remplacez '/home' par le chemin de votre page d'accueil
       }, 3000);
    } else {
      this.message="Invalid or expired OTP.";
     // Appeler la méthode pour gérer le succès
        this.showAlert(); // Afficher le message d'erreur
         setTimeout(() => {
        this.router.navigate(['/otp']); // Remplacez '/home' par le chemin de votre page d'accueil
          }, 3000);
      }
  },
  (error) => {
    this.message = 'An error occurred while processing your request.'; // Message d'erreur générique
    this.success = false;
    this.showAlert(); // Afficher le message d'erreur
      setTimeout(() => {
        this.router.navigate(['/otp']); // Remplacez '/home' par le chemin de votre page d'accueil
      }, 3000);
  }
);
}
showAlert() {
  setTimeout(() => {
    this.message = "";
  }, 3000); // Afficher la barre pendant 3 secondes
}
}
