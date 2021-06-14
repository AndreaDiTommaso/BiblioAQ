import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LibroPageRoutingModule } from './libro-routing.module';
import {TranslateModule} from '@ngx-translate/core';
import { LibroPage } from './libro.page';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    IonicModule,
    LibroPageRoutingModule,
    TranslateModule.forChild(),
  ],
  declarations: [LibroPage]
})
export class LibroPageModule {}
