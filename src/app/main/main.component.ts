import { Component } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {
  // Estado de las barras laterales
  sidebarOpen = false;
  leftSidebarOpen = false;

  // Estado de los modales
  isModalOpen = false;
  isUploadModalOpen = false;

  // Datos para la nueva tarea
  newTask = {
    title: '',
    description: '',
    status: 'Pendiente',
  };

  // Estructura de proyectos
  projects = [
    { 
      name: 'Proyecto 1',
      admin: 'Admin 1',
      details: 'Detalles del proyecto 1',
      status: 'Activo',
      completedTasks: 5,
      existingTasks: 10,
      tasks: [
        { title: 'Tarea 1', description: 'Descripción 1', status: 'Pendiente' },
        { title: 'Tarea 2', description: 'Descripción 2', status: 'Completada' }
      ]
    }
  ];

  selectedProjectIndex: number = -1; // Indicado en -1, para no haber ningún proyecto seleccionado
  selectedFile: File | null = null; // Archivo seleccionado para subir

  newProject = {
    name: '',
    admin: '',
    details: '',
    status: 'Activo',
    completedTasks: 0,
    existingTasks: 0,
    tasks: [],
  };

  // Métodos para manejar las barras laterales
  toggleSidebar(): void {
    this.sidebarOpen = !this.sidebarOpen;
  }

  toggleLeftSidebar(): void {
    this.leftSidebarOpen = !this.leftSidebarOpen;
  }

  // Método para seleccionar un proyecto
  selectProject(index: number): void {
    this.selectedProjectIndex = index; // Selecciona el proyecto por su índice
  }

  

  // Métodos para el modal de proyecto
  openModal(): void {
    this.isModalOpen = true;
  }

  closeModal(): void {
    this.isModalOpen = false;
  }

  createProject(): void {
    if (this.newProject.name.trim() && this.newProject.details.trim()) {
      const newProject = { ...this.newProject, tasks: [] };
      this.projects.push(newProject);
      this.newProject = { name: '', admin: '', details: '', status: 'Activo', completedTasks: 0, existingTasks: 0, tasks: [] };
      this.isModalOpen = false;
    }
  }

  // Método para agregar tarea a un proyecto
  addTaskToProject(projectIndex: number): void {
    if (this.newTask.title.trim() && this.newTask.description.trim()) {
      const newTask = {
        title: this.newTask.title,
        description: this.newTask.description,
        status: 'Pendiente'
      };

      if (this.projects[projectIndex]) {
        this.projects[projectIndex].tasks.push(newTask);
        this.projects[projectIndex].existingTasks++;
        this.newTask = { title: '', description: '', status: 'Pendiente' };
      } else {
        alert('El proyecto seleccionado no existe.');
      }
    } else {
      alert('Por favor, completa todos los campos.');
    }
  }

  // Método para abrir el modal de subida de archivo
  openUploadModal(): void {
    this.isUploadModalOpen = true;
  }

  closeUploadModal(): void {
    this.isUploadModalOpen = false;
  }

  // Maneja el cambio de archivo seleccionado
  onFileChange(event: any): void {
    this.selectedFile = event.target.files[0];
  }

  // Método para subir archivo
  uploadFile(): void {
    if (this.selectedFile) {
      console.log('Archivo subido:', this.selectedFile);
      this.selectedFile = null;
      this.closeUploadModal();
    } else {
      alert('Por favor, selecciona un archivo para subir.');
    }
  }
}
