import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PrenotazioneAccessoPage } from './prenotazione-accesso.page';

const routes: Routes = [
  {
    path: '',
    component: PrenotazioneAccessoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PrenotazioneAccessoPageRoutingModule {}
