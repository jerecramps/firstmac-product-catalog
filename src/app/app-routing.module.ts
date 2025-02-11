import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { ProductCatalogComponent } from './product-catalog/product-catalog.component';
import { PathConstants } from './constants/path.constant';
import { ProductDetailsComponent } from './product-catalog/product-details/product-details.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./product-catalog/product-catalog.module').then(m => m.ProductCatalogModule)
  },
  {
    path: `${PathConstants.details}`,
    component: ProductDetailsComponent,
  },

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
