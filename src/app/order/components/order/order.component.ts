import { Component, OnInit } from '@angular/core';

import { Product } from './../../../core/models/product.model'
import { CartService } from 'src/app/core/services/cart/cart.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {

  products$: Observable<Product[]>;


  constructor(
    private cartService: CartService
  ) { 
    this.products$ = this.cartService.cart$ ;
    console.log(this.products$)

    this.cartService.cart$.pipe(map((products:[]) => {
      const distintos = [...new Set(products)];
      return distintos;
    }));

  }

  ngOnInit(): void {
  }

}
