import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor() {}

  // Check if the user is logged in
  isLoggedIn(): boolean {
    const token = localStorage.getItem('token');
    if(!token){
      return false;
    } else {
      return true;
    }
  }

   // Log out the user
   logout(): void {
    localStorage.removeItem('token');
  }
}
