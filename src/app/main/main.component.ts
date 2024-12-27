import { Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

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
  uploadedFile: File | null = null; // Archivo subido
  downloadLink: string = ''; // Enlace de descarga del archivo
  isTextFile: boolean = false; // Determina si el archivo es de tipo texto
  isPdfFile: boolean = false; // Determina si el archivo es un PDF
  fileContent: string = ''; // Contenido del archivo de texto
  pdfSrc: SafeResourceUrl | string = ''; // URL del archivo PDF para mostrar

  newProject = {
    name: '',
    admin: '',
    details: '',
    status: 'Activo',
    completedTasks: 0,
    existingTasks: 0,
    tasks: [],
  };

  constructor(private sanitizer: DomSanitizer) {}

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
    this.selectedFile = event.target.files[0]; // Se guarda el archivo seleccionado
  }

  // Método para subir archivo
  uploadFile(): void {
    if (this.selectedFile) {
      console.log('Archivo subido:', this.selectedFile);
      this.uploadedFile = this.selectedFile; // Guardar el archivo en la propiedad
      this.selectedFile = null; // Limpiar la selección de archivo
      this.createDownloadLink(this.uploadedFile); // Crear enlace de descarga
      this.checkFileType(this.uploadedFile); // Comprobar el tipo de archivo
      this.closeUploadModal(); // Cerrar el modal
    } else {
      alert('Por favor, selecciona un archivo para subir.');
    }
  }

  // Crear el enlace de descarga
  createDownloadLink(file: File): void {
    const url = URL.createObjectURL(file);
    this.downloadLink = url;
  }

  // Comprobar tipo de archivo
  checkFileType(file: File): void {
    const fileType = file.type;

    // Verificar si el archivo es de texto
    if (fileType.includes('text')) {
      this.isTextFile = true;
      this.readTextFile(file);
    } else {
      this.isTextFile = false;
    }

    // Verificar si el archivo es un PDF
    if (fileType === 'application/pdf') {
      this.isPdfFile = true;
      this.pdfSrc = this.sanitizer.bypassSecurityTrustResourceUrl(URL.createObjectURL(file));
    } else {
      this.isPdfFile = false;
    }
  }

  // Leer archivo de texto
  readTextFile(file: File): void {
    const reader = new FileReader();
    reader.onload = () => {
      this.fileContent = reader.result as string;
    };
    reader.readAsText(file);
  }
}
