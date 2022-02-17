import {NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';


import { ProductsComponent} from './components/products/products.component'
import { ProductComponent } from './components/product/product.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component'

import { ProductsRoutingModule } from './products-routing.module';
import { SharedModule} from './../shared/shared.module';
import { MaterialModule } from './../material/material.module';

@NgModule({
    declarations:[
        ProductsComponent,
        ProductDetailComponent,
        ProductComponent,
    ],
    imports:[
        ProductsRoutingModule,
        CommonModule,
        SharedModule,
        MaterialModule,
    ]
})
export class ProductsModule{

}