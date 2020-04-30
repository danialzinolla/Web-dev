import { Component, OnInit } from '@angular/core';
import {products} from '../products';
import { ProductService} from '../product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: any;

  constructor(private productService: ProductService) {}

  share(product) {
    const url: string = window.location.href;
    window.alert(`The product ${ product.name } has been shared!`);
    window.open(`https://telegram.me/share/url?url=${ url }&text=${ product.name }`);
  }

  ngOnInit() {
    this.getProducts();
  }

  getProducts() {
    // tslint:disable-next-line:no-shadowed-variable
    this.productService.getProducts().subscribe(products => this.products = products);
  }

  onNotify() {
    window.alert('You will be notified when the product goes on sale');
  }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
