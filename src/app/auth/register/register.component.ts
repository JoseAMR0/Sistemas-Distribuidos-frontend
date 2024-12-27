import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  username: string = '';  // Agregado para almacenar el nombre de usuario
  email: string = '';
  password: string = '';
  confirmPassword: string = '';

  constructor(private router: Router) {}

  goToHome() {
    this.router.navigate(['/']);
  }

  onSubmit() {
    if (this.password !== this.confirmPassword) {
      alert('Passwords do not match!');
      return;
    }

    if (this.username.trim() === '' || this.email.trim() === '' || this.password.trim() === '') {
      alert('All fields are required!');
      return;
    }

    // Aquí podrías agregar lógica para enviar los datos al backend
    alert('Registration successful!');
    this.router.navigate(['/']);
  }
}
// 0987654321