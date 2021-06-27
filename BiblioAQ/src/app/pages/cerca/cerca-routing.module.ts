import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CercaPage } from './cerca.page';

const routes: Routes = [
  {
    path: '',
    component: CercaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CercaPageRoutingModule {}
