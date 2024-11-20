import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'; // Ajoutez cette ligne
@Injectable({
  providedIn: 'root'
})
export class QrCodeService {
  constructor(private http: HttpClient) { }
  private baseUrl = 'http://localhost:8443/esimback'; // Remplacez par l'URL de votre backend
  generateQrCode(activateUrl: string) {
    return this.http.post(`http://localhost:8443/esimback/generate-qr-code`,{activateUrl},
   {
      responseType: 'blob',
    });
  }
  sendQrCodeAsImage(qrCodelink: string,otp_id:string|null): Observable<string> {
    return this.http.post(`${this.baseUrl}/send-qr-code-image/${otp_id}`,{qrCodelink} ,{
      responseType: 'text'
    });
}
sendConfirmationEmail(otp_id:string): Observable<string> {
  return this.http.get(`${this.baseUrl}/activate-esim-and-send-confirmation-email/${otp_id}`, {
    responseType: 'text'
  });
}

  
}