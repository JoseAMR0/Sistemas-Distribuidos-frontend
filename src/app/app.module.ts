import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // Se importa FormsModule para trabajar con formularios

import { AppRoutingModule } from './app-routing.module'; // El módulo de rutas de la aplicación
import { AppComponent } from './app.component'; // Componente principal
import { HomeComponent } from './home/home.component'; // Componente Home
import { MainComponent } from './main/main.component'; // Componente Main

@NgModule({
  declarations: [
    AppComponent, // Declaración de todos los componentes que pertenecen a este módulo
    HomeComponent,
    MainComponent,
  ],
  imports: [
    BrowserModule, // Necesario para ejecutar la aplicación en el navegador
    AppRoutingModule, // Para definir las rutas de la aplicación
    FormsModule // Para trabajar con formularios reactivos y no reactivos
  ],
  providers: [], // Aquí se pueden incluir los servicios que se utilizarán en toda la aplicación
  bootstrap: [AppComponent] // Componente que se cargará al iniciar la aplicación
})
export class AppModule { }
