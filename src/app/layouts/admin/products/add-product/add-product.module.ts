import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddProductRoutingModule } from './add-product-routing.module';
import {AddProductComponent} from './add-product.component';
import {ReactiveFormsModule} from '@angular/forms';
import {DemoAngularMaterialModule} from '../../../../shared/DemoAngularMaterialModule';


@NgModule({
  declarations: [AddProductComponent],
    imports: [
        CommonModule,
        AddProductRoutingModule,
        ReactiveFormsModule,
      DemoAngularMaterialModule
    ]
})
export class AddProductModule { }
