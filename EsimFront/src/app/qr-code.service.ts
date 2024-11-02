import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'; // Ajoutez cette ligne
@Injectable({
  providedIn: 'root'
})
export class QrCodeService {
  constructor(private http: HttpClient) { }
  private baseUrl = 'http://localhost:8443/esimback'; // Remplacez par l'URL de votre backend
  generateQrCode(text: string) {
    return this.http.get(`http://localhost:8443/esimback/generate-qr-code?text=${text}`, {
      responseType: 'blob',
    });
  }
  sendQrCodeAsImage(emailText: string): Observable<string> {
    return this.http.get(`${this.baseUrl}/send-qr-code-image?text=${encodeURIComponent(emailText)}`, {
      responseType: 'text'
    });
}

  
}