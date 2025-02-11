import { Injectable } from '@angular/core';
import { ProductHttpService } from './product-http.service';
import { AlertController } from '@ionic/angular';
import { catchError, distinctUntilChanged, map, Observable } from 'rxjs';
import { ErrorMessageConstant } from '../constants/error-message-constant';

@Injectable({
  providedIn: 'root'
})
export class ProductDataService {
  productList$: Observable<any> = new Observable();
  filteredProductList$: Observable<any> = new Observable();

  constructor(private productHttpService: ProductHttpService,
              private alertController: AlertController) { }

  fetchProductList(): void {
    this.productList$ = this.productHttpService.getProducts().pipe(distinctUntilChanged(),
      catchError(async err => {
        console.error(ErrorMessageConstant.error, err);
        const alert = await this.alertController.create({
          header: ErrorMessageConstant.error,
          message: ErrorMessageConstant.errorFetchAPI,
          buttons: [ErrorMessageConstant.ok],
        })
        await alert.present();
      }
    ));

    this.filteredProductList$ = this.productList$;
  }

  searchProductList(searchQuery: string = '', sortPrice?: string): void {
    this.filteredProductList$ = this.productList$.pipe(distinctUntilChanged(),
      map(products => products.filter((product: any) =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase())
      ).sort((a: any, b: any) => {
        switch(sortPrice) {
          case 'desc':
            return b.price - a.price;
          default:
            return a.price - b.price;
        }
      }))
    );

  }

}
