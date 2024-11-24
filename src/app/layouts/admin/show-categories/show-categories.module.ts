import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShowCategoriesRoutingModule } from './show-categories-routing.module';
import {ShowCategoriesComponent} from './show-categories.component';
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
