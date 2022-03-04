import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';



import {DemoComponent} from './demo/demo.component'
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {LayoutComponent} from './layout/layout.component';

import {AdminGuard} from './admin.guard';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    
    children: [
      {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full',
      },
      {
        path: '',
        loadChildren:() => import('./log/log.module').then(m => m.LogModule)
      },
      {
        path: 'home',
        loadChildren:() => import('./home/home.module').then(m => m.HomeModule)
        //component: HomeComponent,
      },
      {
        path: 'products',
        loadChildren:() => import('./products/products.module').then(m => m.ProductsModule)
        //component: ProductsComponent,
      },
      
      {
        path: 'contact',
        canActivate: [AdminGuard],
        loadChildren:() => import('./contact/contact.module').then(m => m.ContactModule)
        //component: ContactComponent,
      },
    ]
  },
  {
    path: 'demo',
    component: DemoComponent,
  },
  {
    path: 'admin',
    loadChildren:() => import('./admin/admin.module').then(m => m.AdminModule)
  },
  {
    path: '**',
    component: PageNotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
