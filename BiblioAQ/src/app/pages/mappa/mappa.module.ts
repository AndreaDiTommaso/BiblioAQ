import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';
import {TranslateModule} from '@ngx-translate/core';

import { IonicModule } from '@ionic/angular';

import { MappaPageRoutingModule } from './mappa-routing.module';

import { MappaPage } from './mappa.page';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    IonicModule,
    MappaPageRoutingModule,
    TranslateModule.forChild()
  ],
  declarations: [MappaPage]
})
export class MappaPageModule {}
