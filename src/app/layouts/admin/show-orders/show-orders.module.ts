import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShowOrdersRoutingModule } from './show-orders-routing.module';
import {ShowOrdersComponent} from './show-orders.component';
import {ReactiveFormsModule} from '@angular/forms';
import {
  MatCell,
  MatCellDef,
  MatColumnDef,
  MatHeaderCell,
  MatHeaderCellDef,
  MatHeaderRow, MatHeaderRowDef, MatRow, MatRowDef,
  MatTable
} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatButton} from '@angular/material/button';
import {DemoAngularMaterialModule} from '../../../shared/DemoAngularMaterialModule';


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
