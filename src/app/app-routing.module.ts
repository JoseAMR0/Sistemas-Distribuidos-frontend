import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component'; // Importa el componente Home
import { MainComponent } from './main/main.component'; // Importa el componente Main

const routes: Routes = [
  { path: '', component: HomeComponent }, // Ruta principal para Home
  { path: 'main', component: MainComponent }, // Ruta para el componente Main
  { path: 'auth', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule) }, // Ruta para AuthModule
  { path: '**', redirectTo: '' } // Redirección para URLs no encontradas
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
