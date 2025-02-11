import { TestBed } from '@angular/core/testing';

import { ProductDataService } from './product-data.service';
import { ProductHttpService } from './product-http.service';
import { AlertController } from '@ionic/angular';
import { of } from 'rxjs';

describe('ProductDataService', () => {
  let service: ProductDataService;
  let productHttpService: jasmine.SpyObj<ProductHttpService>;
  let alertController: jasmine.SpyObj<AlertController>;

  beforeEach(() => {
    const productHttpServiceMock = jasmine.createSpyObj('ProductHttpService', ['getProducts']);
    const alertControllerMock = jasmine.createSpyObj('AlertController', ['create']);

    TestBed.configureTestingModule({
      declarations: [ProductDataService],
      providers: [
        { provide: ProductHttpService, useValue: productHttpServiceMock },
        { provide: AlertController, useValue: alertControllerMock }
      ]
    }).compileComponents();
    service = TestBed.inject(ProductDataService);
    productHttpService = TestBed.inject(ProductHttpService) as jasmine.SpyObj<ProductHttpService>;
    alertController = TestBed.inject(AlertController) as jasmine.SpyObj<AlertController>;
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should fetch product list successfully and assign to productList$', () => {
    const mockProducts = [
      { id: 1, name: 'Product 1', price: 25 },
      { id: 2, name: 'Product 2', price: 30 }
    ];
    productHttpService.getProducts.and.returnValue(of(mockProducts));

    service.fetchProductList();

    service.productList$.subscribe((productList) => {
      expect(productList).toEqual(mockProducts);
    });
  });
});
