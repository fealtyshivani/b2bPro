import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ClientReviewComponent } from './components/client-review/client-review.component';
import { ProductComponent } from './components/product/product.component';
import { EmployeeComponent } from './components/employee/employee.component';
import { SettingComponent } from './components/setting/setting.component';
import { AddemployeeComponent } from './components/addemployee/addemployee.component';
import { InvoiceComponent } from './components/invoice/invoice.component';

const routes: Routes = [
  { path : '', component: MainComponent, children : [
    { path : 'dashboard', component: DashboardComponent },
    { path : 'client', component: ClientReviewComponent },
    { path : 'product', component: ProductComponent },
    { path : 'employee', component: EmployeeComponent },
    { path : 'setting', component: SettingComponent },
    { path : 'addemp', component: AddemployeeComponent },
    { path : 'invoice', component: InvoiceComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
