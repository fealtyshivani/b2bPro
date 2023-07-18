import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmpDashboardComponent } from './components/emp-dashboard/emp-dashboard.component';
import { MainComponent } from './components/main/main.component';

const routes: Routes = [
  { path:"", 
    component: MainComponent, 
    children:[
    { path:"dashboard", component: EmpDashboardComponent },
    
   ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeRoutingModule { }
