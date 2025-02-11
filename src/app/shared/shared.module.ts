import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GenericCardCatalogComponent } from './generic-card-catalog/generic-card-catalog.component';
import { IonicModule } from '@ionic/angular';

@NgModule({
  declarations: [GenericCardCatalogComponent],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [
    GenericCardCatalogComponent
  ]
})
export class SharedModule { }
