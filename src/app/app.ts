import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UsuariosComponent } from './src/app/componentes/usuario/usuarios/usuarios.component';

@Component({
  imports: [RouterOutlet, UsuariosComponent],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('8Bits');
}
