import { Component, OnInit } from '@angular/core';
import { ProductDetailsConstants } from '../constants/product-details.constant';
import { HomeConstants } from '../constants/home.constant';
import { ProductCatalogConstants } from '../constants/product-catalog.constant';
import { Router } from '@angular/router';
import { ProductDataService } from '../services/product-data.service';

@Component({
  selector: 'app-product-catalog',
  templateUrl: './product-catalog.component.html',
  styleUrls: ['./product-catalog.component.scss'],
  standalone: false
})
export class ProductCatalogComponent  implements OnInit {
  ProductCatalogConstants = ProductCatalogConstants;
  searchQuery!: string;

  customModalOptions = {
    header: ProductCatalogConstants.sortPriceBy,
    breakpoints: [0, 0.5],
    initialBreakpoint: 0.5,
  };

  constructor(private router: Router, public productDataService: ProductDataService) { }

  ngOnInit() {
    this.productDataService.fetchProductList();
  }

  onCardClicked(event: any): void {
    this.router.navigate(['/details']);
  }


  handleInput(event: Event): void {
   this.productDataService.searchProductList(this.searchQuery, ProductCatalogConstants.sortOrder.asc)
  }

  onChange(event: CustomEvent): void {
    this.productDataService.searchProductList(this.searchQuery, event.detail.value);
  }

}
