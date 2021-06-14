import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import {TranslateModule} from '@ngx-translate/core';

import { ListaPageRoutingModule } from './lista-routing.module';

import { ListaPage } from './lista.page';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    IonicModule,
    ListaPageRoutingModule,
    TranslateModule.forChild()
  ],
  declarations: [ListaPage]
})
export class ListaPageModule {}
