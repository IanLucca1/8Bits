import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UsuarioLoginComponente } from './componentes/usuario/usuario-login-componente/usuario-login-componente';
import { UsuarioCadastrarComponente } from './componentes/usuario/usuario-cadastrar-componente/usuario-cadastrar-componente';

@Component({
  imports: [RouterOutlet, UsuarioLoginComponente, UsuarioCadastrarComponente],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  title = '8Bits';
}
