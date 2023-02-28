import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MostrarUsuarioPageRoutingModule } from './tampil-routing.module';

import { MostrarUsuarioPage } from './tampil.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MostrarUsuarioPageRoutingModule
  ],
  declarations: [MostrarUsuarioPage]
})
export class MostrarUsuarioPageModule {}
