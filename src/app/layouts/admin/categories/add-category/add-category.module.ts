import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {AddCategoryRoutingModule} from './add-category-routing.module';
import {AddCategoryComponent} from './add-category.component';
import {ReactiveFormsModule} from '@angular/forms';
import {DemoAngularMaterialModule} from '../../../../shared/DemoAngularMaterialModule';


@NgModule({
  declarations: [AddCategoryComponent],
  imports: [
    CommonModule,
    AddCategoryRoutingModule,
    ReactiveFormsModule,
    DemoAngularMaterialModule
  ]
})
export class AddCategoryModule {
}
