import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UsuarioLoginComponent } from './usuario-login-componente';

describe('Usuarios', () => {
  let component: UsuarioLoginComponent;
  let fixture: ComponentFixture<UsuarioLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UsuarioLoginComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(UsuarioLoginComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
