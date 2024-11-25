import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {AdminRoutingModule} from './admin-routing.module';
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
