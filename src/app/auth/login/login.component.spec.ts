import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms'; // Importar FormsModule para ngModel

import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoginComponent],
      imports: [FormsModule] // Importar FormsModule para habilitar ngModel
    });
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show an alert for successful login', () => {
    spyOn(window, 'alert'); // Espía para capturar alertas
    component.username = 'admin';
    component.password = 'admin';
    component.login();
    expect(window.alert).toHaveBeenCalledWith('Login successful!');
  });

  it('should show an alert for invalid login', () => {
    spyOn(window, 'alert'); // Espía para capturar alertas
    component.username = 'user';
    component.password = 'wrong';
    component.login();
    expect(window.alert).toHaveBeenCalledWith('Invalid username or password');
  });
});
