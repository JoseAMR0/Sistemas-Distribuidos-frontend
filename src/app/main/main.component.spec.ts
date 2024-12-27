import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MainComponent } from './main.component';
import { FormsModule } from '@angular/forms'; // Importante para ngModel

describe('MainComponent', () => {
  let component: MainComponent;
  let fixture: ComponentFixture<MainComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MainComponent],
      imports: [FormsModule] // Importamos FormsModule para que ngModel funcione correctamente
    });
    fixture = TestBed.createComponent(MainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should open and close the modal', () => {
    // Verificar que el modal inicialmente esté cerrado
    expect(component.isModalOpen).toBeFalse();

    // Abrir el modal
    component.openModal();
    expect(component.isModalOpen).toBeTrue();

    // Cerrar el modal
    component.closeModal();
    expect(component.isModalOpen).toBeFalse();
  });

  it('should toggle the sidebar', () => {
    // Verificar que el estado de la sidebar inicialmente esté cerrado
    expect(component.sidebarOpen).toBeFalse();

    // Cambiar el estado de la sidebar
    component.toggleSidebar();
    expect(component.sidebarOpen).toBeTrue();

    // Cambiar nuevamente el estado de la sidebar
    component.toggleSidebar();
    expect(component.sidebarOpen).toBeFalse();
  });

  it('should toggle the left sidebar', () => {
    // Verificar que el estado de la leftSidebar inicialmente esté cerrado
    expect(component.leftSidebarOpen).toBeFalse();

    // Cambiar el estado de la leftSidebar
    component.toggleLeftSidebar();
    expect(component.leftSidebarOpen).toBeTrue();

    // Cambiar nuevamente el estado de la leftSidebar
    component.toggleLeftSidebar();
    expect(component.leftSidebarOpen).toBeFalse();
  });
});
