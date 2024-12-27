import { Component } from '@angular/core';
import { Router } from '@angular/router'; // Importa Router

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  username: string = ''; // Variable para almacenar el nombre de usuario
  password: string = ''; // Variable para almacenar la contraseña

  constructor(private router: Router) {}

  // Método para manejar el inicio de sesión
  login() {
    if (this.username === 'admin' && this.password === 'admin') {
      alert('Login successful!');
      this.router.navigate(['/']); // Redirige al home
    } else {
      alert('Invalid username or password');
    }
  }

  // Método para regresar al home
  goToHome() {
    this.router.navigate(['/']);
  }
}
