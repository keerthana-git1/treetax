import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  // Save token after login
  login(token: string): void {
    localStorage.setItem('authToken', token);
  }

  // Remove token on logout
  logout(): void {
    localStorage.removeItem('authToken');
  }

  // Check if the user is logged in
  isLoggedIn(): boolean {
    return !!localStorage.getItem('adminEmail');
  }

  // Get token if needed for API calls
  getToken(): string | null {
    return localStorage.getItem('authToken');
  }
}
