import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AdminRoutingModule } from './admin-routing.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { EmployeeComponent } from './components/employee/employee.component';
import { MainComponent } from './components/main/main.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { TopbarComponent } from './components/topbar/topbar.component';
import { AddemployeeComponent } from './components/addemployee/addemployee.component';
import { SettingComponent } from './components/setting/setting.component';
import { ClientReviewComponent } from './components/client-review/client-review.component';
import { ProductComponent } from './components/product/product.component';
import { DataTablesModule } from 'angular-datatables';
import { InvoiceComponent } from './components/invoice/invoice.component';

@NgModule({
  declarations: [
    DashboardComponent,
    EmployeeComponent,
    MainComponent,
    SidebarComponent,
    TopbarComponent,
    AddemployeeComponent,
    SettingComponent,
    ClientReviewComponent,
    ProductComponent,
    InvoiceComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    DataTablesModule
  ]
})
export class AdminModule { }
