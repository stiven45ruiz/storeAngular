import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {ProductFormComponent} from './components/product-form/product-form.component';
import {NavComponent} from './components/nav/nav.component';
import { InventoryComponent } from './components/inventory/inventory.component'
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { FormProductComponent } from './components/form-product/form-product.component';
import { ProductEditComponent } from './components/product-edit/product-edit.component';

const routes: Routes = [
  {
    path: '',
    component: NavComponent,
    children: [
      {
        path: 'create',
        component: ProductFormComponent,
      },
      {
        path: 'inventory',
        component: InventoryComponent,
      },
      {
        path: 'dashboard',
        component: DashboardComponent,
      },
      {
        path: 'inventory/create',
        component: FormProductComponent, 
      },
      {
        path: 'inventory/edit/:id',
        component: ProductEditComponent
      }
    ],

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
