import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';
import { IonicModule } from '@ionic/angular';



import { RegistrazionePage } from './registrazione.page';
import {RegistrazionePageRoutingModule} from './registrazione-routing.module';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    IonicModule,
    RegistrazionePageRoutingModule
  ],
  declarations: [RegistrazionePage]
})
export class RegistrazionePageModule {}
