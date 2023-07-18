import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path : 'admin', loadChildren: () => import('../app/admin/admin.module').then( a => a.AdminModule)},
  { path : 'customer', loadChildren: () => import('../app/customer/customer.module').then(c => c.CustomerModule)},
  { path : 'employee', loadChildren: () => import('../app/employee/employee.module').then(c => c.EmployeeModule)},
  { path : '', loadChildren: () => import('../app/web/web.module').then(w => w.WebModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
