import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCatalogRoutingModule } from './product-catalog-routing.module';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { ProductCatalogComponent } from './product-catalog.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { ProductDataService } from '../services/product-data.service';
import { ProductHttpService } from '../services/product-http.service';



@NgModule({
  declarations: [ProductCatalogComponent],
  imports: [
    CommonModule,
    ProductCatalogRoutingModule,
    IonicModule,
    FormsModule,
    SharedModule,
    RouterModule,
  ],
  exports: [ProductCatalogComponent],
  providers: [ProductDataService, ProductHttpService]
})
export class ProductCatalogModule { }
