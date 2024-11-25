import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ShowOrdersRoutingModule} from './show-orders-routing.module';
import {ShowOrdersComponent} from './show-orders.component';
import {ReactiveFormsModule} from '@angular/forms';
import {DemoAngularMaterialModule} from '../../../../shared/DemoAngularMaterialModule';


@NgModule({
  declarations: [
    ShowOrdersComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ShowOrdersRoutingModule,
   DemoAngularMaterialModule
  ]
})
export class ShowOrdersModule { }
