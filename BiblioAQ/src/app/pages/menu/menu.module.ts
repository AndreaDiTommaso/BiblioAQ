import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MenuPageRoutingModule } from './menu-routing.module';

import { MenuPage } from './menu.page';

import {TranslateLoader, TranslateModule} from '@ngx-translate/core';


@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    IonicModule,
    MenuPageRoutingModule,
    TranslateModule.forChild()
  ],
  declarations: [MenuPage]
})
export class MenuPageModule {}
