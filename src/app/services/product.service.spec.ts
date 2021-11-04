import { getTestBed, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing'
import { ProductService } from './product.service';
import { Product } from '../model/product';
describe('ProductService', () => {
  let productService: ProductService;
  let httpMock: HttpTestingController;
  let injector: TestBed;
  describe('ProductService', () => {
    afterEach(() => {
      httpMock.verify();
    });
  });
  let data = [
    { productId: 3, productName: 'Mouse', quantityOnHand: 122, price: 90 },
    { productId: 899, productName: 'Monitor', quantityOnHand: 100, price: 9800 }
  ];
  let d:any;
  it('getProducts should return all product data', () => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers : [ProductService]
    });
    injector = getTestBed();   
    productService = injector.get(ProductService);
    httpMock = injector.get(HttpTestingController);
    productService.getProducts().subscribe((res: Product[]) => {
      expect(res).toEqual(data);
    })
    

  });
});
