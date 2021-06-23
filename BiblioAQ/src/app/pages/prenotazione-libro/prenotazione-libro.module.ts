import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PrenotazioneLibroPageRoutingModule } from './prenotazione-libro-routing.module';

import { PrenotazioneLibroPage } from './prenotazione-libro.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PrenotazioneLibroPageRoutingModule
  ],
  declarations: [PrenotazioneLibroPage]
})
export class PrenotazioneLibroPageModule {}
