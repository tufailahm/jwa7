import { Component, OnInit } from '@angular/core';
import { Product } from '../model/product';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  title = "revature product app";
  products: Product[] = [];

    public phoneNumber :string  = "6514171511";

  constructor(public productService:ProductService) { }

  ngOnInit(): void {
      this.productService.getProducts().subscribe(( data: Product[]) => {
        this.products =data;
        console.log("Product recieved are :")
        console.log(data)
        console.log(this.products)

      });
  }

}
