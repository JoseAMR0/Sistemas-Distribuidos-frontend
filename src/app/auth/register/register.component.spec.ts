import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';

import { RegisterComponent } from './register.component';

describe('RegisterComponent', () => {
  let component: RegisterComponent;
  let fixture: ComponentFixture<RegisterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegisterComponent],
      imports: [FormsModule, RouterTestingModule]
    });
    fixture = TestBed.createComponent(RegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should not register if passwords do not match', () => {
    component.email = 'test@example.com';
    component.password = 'password123';
    component.confirmPassword = 'password456';
    spyOn(window, 'alert');
    component.onSubmit();
    expect(window.alert).toHaveBeenCalledWith('Passwords do not match!');
  });

  it('should register successfully if passwords match', () => {
    component.email = 'test@example.com';
    component.password = 'password123';
    component.confirmPassword = 'password123';
    spyOn(window, 'alert');
    component.onSubmit();
    expect(window.alert).toHaveBeenCalledWith('Registration successful!');
  });
});
