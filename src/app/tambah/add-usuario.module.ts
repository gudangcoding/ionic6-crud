import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddUsuarioPageRoutingModule } from './tambah-routing.module';

import { AddUsuarioPage } from './tambah.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddUsuarioPageRoutingModule
  ],
  declarations: [AddUsuarioPage]
})
export class AddUsuarioPageModule {}
