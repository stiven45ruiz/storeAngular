import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params} from '@angular/router';

import { ProductsService } from '../../../core/services/products/products.service';
import { Product } from '../../../core/models/product.model';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  product: Product;

  constructor(
    private route: ActivatedRoute,
    private productsService: ProductsService
  ) { }

  ngOnInit() {
      this.route.params.subscribe((params: Params) => {
      const id = params['id'];
      
      this.productsService.getProduct(id).subscribe((res) => {  
        this.product = res;
      });
    });
  }

  // fetchProduct(id: string){
  //   this.productsService.getProduct(id)
  //   .subscribe(product => {
  //     this.product = product;
  //   });
  // }

  createProduct(){
    const newProduct: Product = {
      id: '222',
      title: 'nuevo desde angular',
      image: 'assets/images/mug.png',
      price: 400095,
      description: 'okoskdo ceieoceo ceocecke ecoecoem ceoel'
    };
    this.productsService.createProduct(newProduct)
    .subscribe(product => {
      console.log(product);
    });
  }

  updateProduct(){
    const updateProduct: Partial<Product> = {
      price: 500095,
      description: 'poducto Actualizado'
    };
    this.productsService.updateProduct('2', updateProduct)
    .subscribe(product =>{
      console.log(product)
    });
  }

  deleteProduct(){
    this.productsService.deleteProduct('222')
    .subscribe(rta => {
      console.log(rta);
    });
  }

}
