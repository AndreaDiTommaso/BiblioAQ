import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProfiloPageRoutingModule } from './profilo-routing.module';

import { ProfiloPage } from './profilo.page';
import {TranslateModule} from "@ngx-translate/core";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProfiloPageRoutingModule,
    TranslateModule,
    ReactiveFormsModule
  ],
  declarations: [ProfiloPage]
})
export class ProfiloPageModule {}
