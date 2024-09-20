import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { CardsComponent } from './cards/cards.component';
import { DashboardTasksComponent } from './dashboard-tasks/dashboard-tasks.component';
import { DashboardProjectsComponent } from './dashboard-projects/dashboard-projects.component';
import { DashboardClientsComponent } from './dashboard-clients/dashboard-clients.component';
import { DashboardPaymentsComponent } from './dashboard-payments/dashboard-payments.component';

@Component({
  standalone: true,
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],

  imports: [
    NgFor,
    CardsComponent,
    DashboardTasksComponent,
    DashboardProjectsComponent,
    DashboardClientsComponent,
    DashboardPaymentsComponent,
  ], // 
})
export class DashboardComponent {
}
