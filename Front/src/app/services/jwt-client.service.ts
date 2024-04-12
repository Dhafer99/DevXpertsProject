import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt';
@Injectable({
  providedIn: 'root'
})
export class JwtClientService {
  

    constructor(private http: HttpClient, public jwtHelper: JwtHelperService) {}

    login(credentials:any) {
      return this.http.post('/api/auth/login', credentials);
    }
  
    isAuthenticated() {
      const token = localStorage.getItem('token');
      // Check whether the token is expired
      return !this.jwtHelper.isTokenExpired(token);
    }
  
}
