import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';

import { DepartmentComponent } from './department/department.component';
import { LoginPageComponent } from './login-page/login-page.component';

export const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'employees-list', component: EmployeeListComponent },
  
  {path:'department', component:DepartmentComponent},
  {path:'login-page', component:LoginPageComponent}
];
