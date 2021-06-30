import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guard/auth.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'menu',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'menu',
    loadChildren: () => import('./pages/menu/menu.module').then(m => m.MenuPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'mappa',
    loadChildren: () => import('./pages/mappa/mappa.module').then( m => m.MappaPageModule)
  },
  {
    path: 'lista',
    loadChildren: () => import('./pages/lista/lista.module').then( m => m.ListaPageModule)
  },
  {
    path: 'libro',
    loadChildren: () => import('./pages/libro/libro.module').then( m => m.LibroPageModule)
  },
  {
    path: 'catalogo',
    loadChildren: () => import('./pages/catalogo/catalogo.module').then( m => m.CatalogoPageModule)
  },
  {
    path: 'biblioteche/:id',
    loadChildren: () => import('./pages/biblioteche/biblioteche.module').then( m => m.BibliotechePageModule)
  },
  {
    path: 'registrazione',
    loadChildren: () => import('./pages/registrazione/registrazione.module').then( m => m.RegistrazionePageModule)
  },

  {
    path: 'prenotazione-libro',
    loadChildren: () => import('./pages/prenotazione-libro/prenotazione-libro.module').then( m => m.PrenotazioneLibroPageModule)
  },
  {
    path: 'cerca',
    loadChildren: () => import('./pages/cerca/cerca.module').then( m => m.CercaPageModule)
  },
  {
    path: 'profilo',
    loadChildren: () => import('./pages/profilo/profilo.module').then( m => m.ProfiloPageModule),
    canActivate: [AuthGuard]
  },





];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
