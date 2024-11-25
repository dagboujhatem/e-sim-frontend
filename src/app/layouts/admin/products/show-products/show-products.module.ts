import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ShowProductsRoutingModule} from './show-products-routing.module';
import {ShowProductsComponent} from './show-products.component';
import {ReactiveFormsModule} from '@angular/forms';
import {DemoAngularMaterialModule} from '../../../../shared/DemoAngularMaterialModule';
import {AppModule} from '../../../../app.module';
import {FileUploadComponent} from '../../../../components/file-upload/file-upload.component';


@NgModule({
  declarations: [
    ShowProductsComponent,
    FileUploadComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ShowProductsRoutingModule,
    DemoAngularMaterialModule,
  ]
})
export class ShowProductsModule { }
