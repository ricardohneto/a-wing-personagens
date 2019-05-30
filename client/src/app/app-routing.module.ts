import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PersonagemListComponent } from './components/personagem-list/personagem-list.component';
import { PersonagemFormComponent } from './components/personagem-form/personagem-form.component';

const routes: Routes = [
  {
    path:'',
    redirectTo: '/personagens',
    pathMatch: 'full'
  },
  {
    path: 'personagens',
    component: PersonagemListComponent
  },
  {
    path: 'personagens/add',
    component: PersonagemFormComponent
  },
  {
    path: 'personagens/editar/:cod_Personagem',
    component: PersonagemFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
