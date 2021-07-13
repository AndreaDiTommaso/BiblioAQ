import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PrenotazioneLibroPageRoutingModule } from './prenotazione-libro-routing.module';
import {TranslateModule} from '@ngx-translate/core';
import { PrenotazioneLibroPage } from './prenotazione-libro.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule.forChild(),
    PrenotazioneLibroPageRoutingModule
  ],
  declarations: [PrenotazioneLibroPage]
})
export class PrenotazioneLibroPageModule {}
