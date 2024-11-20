import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmailStorageService {

  constructor() { }
  private storedEmail: string | null = null;

  storeEmail(email: string): void {
    this.storedEmail = email;
  }

  getStoredEmail(): string | null {
    return this.storedEmail;
  }

  clearStoredEmail(): void {
    this.storedEmail = null;
  }
}
