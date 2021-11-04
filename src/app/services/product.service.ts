import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { retry } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Product } from '../model/product';

const productUrl = "http://localhost:9090/product"

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  //DI
  constructor(public httpClient:HttpClient) { }

  getProducts() : Observable<Product[]>{
      return this.httpClient.get<Product []>(productUrl)
      .pipe(
        retry(2)
      )
  }
}
