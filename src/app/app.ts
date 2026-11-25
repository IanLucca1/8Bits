import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UsuarioLoginComponent } from './componentes/usuario/usuario-login-componente/usuario-login-componente';

@Component({
  imports: [RouterOutlet, UsuarioLoginComponent],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('8Bits');
}
