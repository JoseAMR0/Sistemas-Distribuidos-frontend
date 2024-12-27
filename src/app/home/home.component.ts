import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  
  constructor(private router: Router) {}

  // Método para redirigir al login
  redirectToLogin() {
    this.router.navigate(['/auth/login']);
  }

  // Método para redirigir al registro
  redirectToRegister() {
    this.router.navigate(['/auth/register']);
  }
}
