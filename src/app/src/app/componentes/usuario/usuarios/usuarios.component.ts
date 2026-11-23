import { Component, inject } from '@angular/core';
import { UsuarioService } from '../../../servicos/usuario.service';

@Component({
  imports: [],
  selector: 'app-usuarios',
  styleUrl: './usuarios.component.css',
  templateUrl: './usuarios.component.html',
})
export class UsuariosComponent {
  private usuarioServico = inject(UsuarioService);

  
}
