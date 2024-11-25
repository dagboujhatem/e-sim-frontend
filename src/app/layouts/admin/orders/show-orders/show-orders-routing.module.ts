import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ShowOrdersComponent} from './show-orders.component';

const routes: Routes = [{
  path: '', component: ShowOrdersComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShowOrdersRoutingModule {
}
