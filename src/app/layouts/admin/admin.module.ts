import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {AdminRoutingModule} from './admin-routing.module';
import {AddProductComponent} from './add-product/add-product.component';
import {ShowProductsComponent} from './show-products/show-products.component';
import {DemoAngularMaterialModule} from '../../shared/DemoAngularMaterialModule';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AdminRoutingModule,
    DemoAngularMaterialModule
  ]
})
export class AdminModule { }
