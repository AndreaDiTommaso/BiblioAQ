import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CercaPageRoutingModule } from './cerca-routing.module';

import { CercaPage } from './cerca.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CercaPageRoutingModule
  ],
  declarations: [CercaPage]
})
export class CercaPageModule {}
