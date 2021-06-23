import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PrenotazioneLibroPage } from './prenotazione-libro.page';

const routes: Routes = [
  {
    path: '',
    component: PrenotazioneLibroPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PrenotazioneLibroPageRoutingModule {}
