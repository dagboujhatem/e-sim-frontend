import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
const TOKEN='esim-token';

@Injectable({
  providedIn: 'root',
})
export class OtpService {
  private baseUrl = 'http://localhost:8443/esimback'; // URL de votre backend
   token = localStorage.getItem(TOKEN); // Vérifiez la présence du token

  constructor(private http: HttpClient) {}

  // Méthode pour appeler le backend
  callBmwBack(number: string, email: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/callBmwBack`, {
      params: { number, email },
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    });
  }
  // Méthode pour vérifier l'OTP
  verifyOtp(email: string, otpCode: string): Observable<{ message: string; success: boolean }> {
    return this.http.post<{ message: string; success: boolean }>(`${this.baseUrl}/verifyOtp`, { email, otpCode });
  }

}

