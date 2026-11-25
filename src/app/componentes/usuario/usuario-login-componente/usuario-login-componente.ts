import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-usuario-login',
  styleUrl: './usuario-login-componente.css',
  templateUrl: './usuario-login-componente.html',
})
export class UsuarioLoginComponent {
  exibirFormLogin: boolean = true;

  clicarBtn() {
    if (this.exibirFormLogin) {
      this.exibirFormLogin = false;
    } else {
      this.exibirFormLogin = true;
    }
  }
}
