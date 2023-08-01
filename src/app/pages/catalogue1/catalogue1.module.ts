import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Catalogue1PageRoutingModule } from './catalogue1-routing.module';

import { Catalogue1Page } from './catalogue1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Catalogue1PageRoutingModule
  ],
  declarations: [Catalogue1Page]
})
export class Catalogue1PageModule {}
