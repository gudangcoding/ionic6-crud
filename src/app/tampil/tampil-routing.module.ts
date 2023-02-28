import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MostrarUsuarioPage } from './tampil.page';

const routes: Routes = [
  {
    path: '',
    component: MostrarUsuarioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MostrarUsuarioPageRoutingModule {}
