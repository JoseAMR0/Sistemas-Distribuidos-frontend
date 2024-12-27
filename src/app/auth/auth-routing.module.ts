import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component'; // Importa RegisterComponent

const routes: Routes = [
  { path: 'login', component: LoginComponent }, // Ruta para login
  { path: 'register', component: RegisterComponent }, // Ruta para registro
];

@NgModule({
  imports: [RouterModule.forChild(routes)], // Usa forChild porque es un módulo secundario
  exports: [RouterModule]
})
export class AuthRoutingModule {}
