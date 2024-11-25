import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {
    path: 'show-products',
    loadChildren: () => import('./products/show-products/show-products.module').then(m => m.ShowProductsModule),

  },
  {
    path: 'add-product',
    loadChildren: () => import('./products/add-product/add-product.module').then(m => m.AddProductModule),

  },
  {
    path: 'show-categories',
    loadChildren: () => import('./categories/show-categories/show-categories.module').then(m => m.ShowCategoriesModule),

  },
  {
    path: 'add-category',
    loadChildren: () => import('./categories/add-category/add-category.module').then(m => m.AddCategoryModule),

  },
  {
    path: 'manage-orders',
    loadChildren: () => import('./orders/show-orders/show-orders.module').then(m => m.ShowOrdersModule),

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule {
}
