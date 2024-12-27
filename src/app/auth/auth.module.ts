import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthRoutingModule } from './auth-routing.module'; // Importar rutas internas
import { FormsModule } from '@angular/forms'; // Importar FormsModule para trabajar con formularios
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule,
    FormsModule,          // Agregar FormsModule para manejar formularios
    AuthRoutingModule     // Conectar las rutas internas
  ]
})
export class AuthModule { }
