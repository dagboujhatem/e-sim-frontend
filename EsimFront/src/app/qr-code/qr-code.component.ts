import { Component, OnInit } from '@angular/core';
import { QrCodeService } from '../qr-code.service';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

@Component({
  selector: 'app-qr-code',
  templateUrl: './qr-code.component.html',
  styleUrl: './qr-code.component.css'
})
export class QrCodeComponent implements OnInit {
  otpCode : string  | null = null;
  qrCodeUrl: string | null = null; // URL pour le QR code
  loading: boolean = false; // État de chargement
  private baseUrl = 'http://localhost:8443/esimback';
  constructor(private qrCodeService: QrCodeService , private router: Router, private activatedRoute : ActivatedRoute) {}
  ngOnInit() {
     this.activatedRoute.paramMap.subscribe((params: ParamMap )=> {
          this.otpCode = params.get('otpCode');     
    });
  }

  generateQrCode() {
    const activatedEsimUrl = `${this.baseUrl}/activate-esim-and-send-confirmation-email/${this.otpCode}`; // Message à encoder
    this.loading = true; // Démarrer le chargement

    this.qrCodeService.generateQrCode(activatedEsimUrl).subscribe({
      next: (blob) => {
        const url = window.URL.createObjectURL(blob); // Créer une URL à partir du blob
        this.qrCodeUrl = url; // Assignation de l'URL du QR code
        this.loading = false; // Terminer le chargement
      },
      error: (err) => {
        this.loading = false; // Terminer le chargement en cas d'erreur
      }
    });
  }
  sendQrCode() {
    const qrCodelink = `${this.baseUrl}/activate-esim-and-send-confirmation-email/${this.otpCode}`; // Mettez le texte que vous souhaitez encoder
    this.qrCodeService.sendQrCodeAsImage(qrCodelink,this.otpCode).subscribe(
      response => {
        // Ne redirigez pas vers une autre page ici
        alert('QR Code envoyé avec succès !'); // Vous pouvez afficher une notification ou un message ici
      },
      error => {
        alert('Erreur lors de l\'envoi du QR Code.'); // Afficher un message d'erreur
      }
    );
  }
  goToFeedbackPage() {
    this.router.navigate(['/commentaire']);
  }
}
