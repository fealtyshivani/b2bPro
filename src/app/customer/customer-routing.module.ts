import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SelectTypeComponent } from './components/select-type/select-type.component';

const routes: Routes = [
  { path : 'selectType', component: SelectTypeComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule { }
