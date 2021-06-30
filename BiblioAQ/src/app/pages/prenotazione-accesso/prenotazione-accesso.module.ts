import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PrenotazioneAccessoPageRoutingModule } from './prenotazione-accesso-routing.module';

import { PrenotazioneAccessoPage } from './prenotazione-accesso.page';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    IonicModule,
    PrenotazioneAccessoPageRoutingModule,
    FormsModule
  ],
  declarations: [PrenotazioneAccessoPage]
})
export class PrenotazioneAccessoPageModule {}
