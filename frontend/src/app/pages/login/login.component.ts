import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon'; // Importe o MatIconModule

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatCardModule, MatIconModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginWithKeycloak() {
    window.location.href = 'http://localhost:8081/realms/proj1angular/protocol/openid-connect/auth?client_id=proj1angular-app&redirect_uri=http://localhost:4200&response_type=code&scope=openid';
  }

  loginWithGoogle() {
    window.location.href = 'http://localhost:8081/realms/proj1angular/protocol/openid-connect/auth?client_id=proj1angular-app&redirect_uri=http://localhost:4200&response_type=code&scope=openid&kc_idp_hint=google';
  }
}
