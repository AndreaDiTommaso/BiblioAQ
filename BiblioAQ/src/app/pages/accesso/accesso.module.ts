import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AccessoPageRoutingModule } from './accesso-routing.module';

import { AccessoPage } from './accesso.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AccessoPageRoutingModule
  ],
  declarations: [AccessoPage]
})
export class AccessoPageModule {}
