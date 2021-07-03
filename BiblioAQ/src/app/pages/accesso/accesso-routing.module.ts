import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AccessoPage } from './accesso.page';

const routes: Routes = [
  {
    path: '',
    component: AccessoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AccessoPageRoutingModule {}
