import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ShowCategoriesRoutingModule} from './show-categories-routing.module';
import {ShowCategoriesComponent} from './show-categories.component';
import {ReactiveFormsModule} from '@angular/forms';
import {DemoAngularMaterialModule} from '../../../../shared/DemoAngularMaterialModule';


@NgModule({
  declarations: [
    ShowCategoriesComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ShowCategoriesRoutingModule,
   DemoAngularMaterialModule
  ]
})
export class ShowCategoriesModule { }
