import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UsuarioCadastrarComponente } from './usuario-cadastrar-componente';

describe('UsuarioCadastrarComponente', () => {
  let component: UsuarioCadastrarComponente;
  let fixture: ComponentFixture<UsuarioCadastrarComponente>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UsuarioCadastrarComponente],
    }).compileComponents();

    fixture = TestBed.createComponent(UsuarioCadastrarComponente);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
