import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'folder',
    loadChildren: () => import('./folder/folder.module').then(m => m.FolderPageModule)
  },
  {
    path: 'add-usuario',
    loadChildren: () => import('./tambah/add-usuario.module').then(m => m.AddUsuarioPageModule)
  },
  {
    path: 'mostrar-usuario',
    loadChildren: () => import('./tampil/tampil.module').then(m => m.MostrarUsuarioPageModule)
  },
  {
    path: 'usuarios',
    loadChildren: () => import('./users/users.module').then(m => m.UsuariosPageModule)
  },
  {
    path: 'add-usuario/:id/:nome/:usuario/:senha/:nivel',
    loadChildren: () => import('./tambah/add-usuario.module').then(m => m.AddUsuarioPageModule)
  },
  {
    path: 'mostrar-usuario/:id/:nome/:usuario/:senha/:nivel',
    loadChildren: () => import('./tampil/tampil.module').then(m => m.MostrarUsuarioPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then(m => m.LoginPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
