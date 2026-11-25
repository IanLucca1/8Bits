import { Routes } from '@angular/router';
import { UsuarioLoginComponente } from './componentes/usuario/usuario-login-componente/usuario-login-componente';
import { UsuarioCadastrarComponente } from './componentes/usuario/usuario-cadastrar-componente/usuario-cadastrar-componente';

export const routes: Routes = [
    {path: 'usuario/login', component: UsuarioLoginComponente},
    {path: 'usuario/cadastrar', component: UsuarioCadastrarComponente}
];
