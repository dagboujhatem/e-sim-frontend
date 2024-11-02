import { Component } from '@angular/core';
import { QrCodeService } from '../qr-code.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-qr-code',
  templateUrl: './qr-code.component.html',
  styleUrl: './qr-code.component.css'
})
export class QrCodeComponent {
  qrCodeUrl: string | null = null; // URL pour le QR code
  loading: boolean = false; // État de chargement
  constructor(private qrCodeService: QrCodeService , private router: Router) {}

  generateQrCode() {
    const message = 'Congrats! your esim is activated, enjoy your experience with esim service.'; // Message à encoder
    this.loading = true; // Démarrer le chargement

    this.qrCodeService.generateQrCode(message).subscribe({
      next: (blob) => {
        const url = window.URL.createObjectURL(blob); // Créer une URL à partir du blob
        this.qrCodeUrl = url; // Assignation de l'URL du QR code
        this.loading = false; // Terminer le chargement
      },
      error: (err) => {
        console.error('Error generating QR code', err);
        this.loading = false; // Terminer le chargement en cas d'erreur
      }
    });
  }
  sendQrCode() {
    const qrCodeText = 'https://www.ooredoo.tn/Personal/fr/content/409-qu-est-ce-que-l-esim-'; // Mettez le texte que vous souhaitez encoder
    this.qrCodeService.sendQrCodeAsImage(qrCodeText).subscribe(
      response => {
        console.log('QR Code envoyé avec succès:', response);
        // Ne redirigez pas vers une autre page ici
        alert('QR Code envoyé avec succès !'); // Vous pouvez afficher une notification ou un message ici
      },
      error => {
        console.error('Erreur lors de l\'envoi du QR Code:', error);
        alert('Erreur lors de l\'envoi du QR Code.'); // Afficher un message d'erreur
      }
    );
  }
  goToFeedbackPage() {
    this.router.navigate(['/commentaire']);
  }
}
